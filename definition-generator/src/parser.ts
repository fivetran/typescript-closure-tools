/// <reference path="../index/doctrine.d.ts"/>
/// <reference path="../index/esprima.d.ts"/>
/// <reference path="../index/escodegen.d.ts"/>

import esprima = require('esprima');
import escodegen = require('escodegen');
import doctrine = require('doctrine');
import options = require('./options');

function values(object: Object) {
    return Object.keys(object).map(k => object[k]);
}

function local_variables(tree: Object): string[] {
    var acc = [];

    function walk(tree) {
        if (!tree) {
        }
        else if (tree.type === 'FunctionDeclaration')
            acc.push(tree.id.name);
        else if (tree.type === 'VariableDeclarator')
            acc.push(tree.id.name);
        else if (tree instanceof Object) {
            values(tree).forEach(walk);
        }
    }

    walk(tree);

    return acc;
}

/**
 * Walk AST and extract JSDoc comments on global variables
 */
function extract_jsdoc(tree) {

    /**
     * Keys are global variables, values are { value, jsdoc }
     */
    var docstrings = {};

    /**
     * Keys are local variables, values are true or false
     */
    var locals = {};

    var requirejs = false;

    function not_in_locals(name) {
        return !locals[name];
    }

    function add_local(name) {
        locals[name] = true;
    }

    function remove_local(name) {
        locals[name] = false;
    }

    function is_global(tree) {
        if (tree.type === 'Identifier')
            return !locals[tree.name];
        else if (tree.type === 'MemberExpression' && tree.property.type === 'Identifier')
            return is_global(tree.object);
        else
            return false;
    }

    function is_global_assignment(tree) {
        return tree.type === 'ExpressionStatement' &&
            tree.expression.type === 'AssignmentExpression' &&
            is_global(tree.expression.left);
    }

    function is_global_declaration(tree) {
        return tree.type === 'ExpressionStatement' &&
            is_global(tree.expression);
    }

    function is_this_member(tree) {
        return tree.type === 'MemberExpression' && tree.object.type === 'ThisExpression';
    }

    function is_this_assignment(tree) {
        return tree.type === 'ExpressionStatement' &&
            tree.expression.type === 'AssignmentExpression' &&
            is_this_member(tree.expression.left);
    }

    function is_this_declaration(tree) {
        return tree.type === 'ExpressionStatement' &&
            is_this_member(tree.expression);
    }

    function is_identifier(tree) {
        if (tree.type === 'Identifier')
            return true;
        else if (tree.type === 'MemberExpression' && tree.property.type === 'Identifier')
            return is_identifier(tree.object);
        else
            return false;
    }

    function is_assignment(tree) {
        return tree.type === 'ExpressionStatement' &&
            tree.expression.type === 'AssignmentExpression' &&
            is_identifier(tree.expression.left);
    }

    function is_declaration(tree) {
        return tree.type === 'ExpressionStatement' &&
            is_identifier(tree.expression);
    }

    function is_function(tree) {
        return tree.type === 'FunctionDeclaration';
    }

    function is_var(tree) {
        return tree.type === 'VariableDeclaration';
    }

    /**
     * If we are walking inside a constructor, the expression that currently represents this
     */
    var currentThis: string;

    /**
     * Look for global variables with JSDoc annotations
     */
    function walk(tree) {
        // If leaf, return
        if (!(tree instanceof Object))
            return;

        // If tree is a global assignment, add it to docstrings
        if (is_global_assignment(tree) && tree.leadingComments) {
            var name = escodegen.generate(tree.expression.left);
            tree.leadingComments.forEach(comment => {
                if (comment.type === 'Block' && comment.value.charAt(0) === '*') {
                    docstrings[name] = {
                        value: tree.expression.right,
                        jsdoc: '/*' + comment.value + '*/'
                    };

                    // If tree is a constructor, remember its name as the current this
                    if (comment.value.indexOf('@constructor') !== -1)
                        currentThis = escodegen.generate(tree.expression.left);
                }
            });
        }

        // If tree is a global declaration, add it to docstrings
        if (is_global_declaration(tree) && tree.leadingComments) {
            var name = escodegen.generate(tree.expression);
            tree.leadingComments.forEach(comment => {
                if (comment.type === 'Block' && comment.value.charAt(0) === '*') {
                    docstrings[name] = {
                        value: tree.expression.right,
                        jsdoc: '/*' + comment.value + '*/'
                    };
                }
            });
        }

        // If tree is this.property = ..., add it to docstrings
        if (is_this_assignment(tree) && tree.leadingComments) {
            var memberName = escodegen.generate(tree.expression.left.property);
            var name = currentThis + ".prototype." + memberName;
            tree.leadingComments.forEach(comment => {
                if (comment.type === 'Block' && comment.value.charAt(0) === '*') {
                    var rawComment: string = comment.value;
                    var removeIndent = rawComment.replace(/\n +/g, '\n ');

                    docstrings[name] = {
                        value: tree.expression.right,
                        jsdoc: '/*' + removeIndent + '*/'
                    };
                }
            });
        }

        // If tree is this.property;, add it to docstrings
        if (is_this_declaration(tree) && tree.leadingComments) {
            var memberName = escodegen.generate(tree.expression.property);
            var name = currentThis + ".prototype." + memberName;
            tree.leadingComments.forEach(comment => {
                if (comment.type === 'Block' && comment.value.charAt(0) === '*') {
                    var rawComment: string = comment.value;
                    var removeIndent = rawComment.replace(/\n +/g, '\n ');

                    docstrings[name] = {
                        value: tree.expression.right,
                        jsdoc: '/*' + removeIndent + '*/'
                    };
                }
            });
        }

        // If tree is a local assignment and requirejs is active, add it to docstrings under MODULE
        if (requirejs && is_assignment(tree) && tree.leadingComments) {
            var name = 'MODULE.' + escodegen.generate(tree.expression.left);
            tree.leadingComments.forEach(comment => {
                if (comment.type === 'Block' && comment.value.charAt(0) === '*') {
                    docstrings[name] = {
                        value: tree.expression.right,
                        jsdoc: '/*' + comment.value + '*/'
                    };
                }
            });
        }

        // If tree is a local declaration and requirejs is active, add it to docstrings under MODULE
        if (requirejs && is_declaration(tree) && tree.leadingComments) {
            var name = 'MODULE.' + escodegen.generate(tree.expression);
            tree.leadingComments.forEach(comment => {
                if (comment.type === 'Block' && comment.value.charAt(0) === '*') {
                    docstrings[name] = {
                        value: tree.expression.right,
                        jsdoc: '/*' + comment.value + '*/'
                    };
                }
            });
        }

        // If tree is a function declaration and requirejs is active, add it to docstrings under MODULE
        if (requirejs && is_function(tree) && tree.leadingComments) {
            var name = 'MODULE.' + tree.id.name;
            tree.leadingComments.forEach(comment => {
                if (comment.type === 'Block' && comment.value.charAt(0) === '*') {
                    docstrings[name] = {
                        value: tree,
                        jsdoc: '/*' + comment.value + '*/'
                    };
                }
            });
        }

        // If tree is var declaration and requirejs is active, add it to docstrings under MODULE
        if (requirejs && is_var(tree) && tree.leadingComments) {
            tree.declarations.forEach(declaration => {
                var name = 'MODULE.' + declaration.id.name;
                tree.leadingComments.forEach(comment => {
                    if (comment.type === 'Block' && comment.value.charAt(0) === '*') {
                        docstrings[name] = {
                            value: declaration.init,
                            jsdoc: '/*' + comment.value + '*/'
                        };
                    }
                });
            })
        }

        // If tree is a function expression, create a new scope
        if (tree.type === 'FunctionExpression' || tree.type === 'FunctionDeclaration') {
            var params = tree.params.map(p => p.name);
            var vars = local_variables(tree);
            var introduced = vars.concat(params).filter(not_in_locals);

            // Add new local variables
            introduced.forEach(add_local);
            // Walk children
            values(tree.body).forEach(walk);
            // Remove local variables
            introduced.forEach(remove_local);
        }
        // Recognize define(function(require, module, exports) { ... })
        else if (tree.type === 'CallExpression' && tree.callee.name === 'define' && !locals['define']) {
            requirejs = true;
            values(tree).forEach(walk);
        }
        // If tree has children, walk them
        else {
            values(tree).forEach(walk);
        }
    }

//    function is_assign_member(tree) {
//        return tree &&
//            tree.type === 'ExpressionStatement' &&
//            tree.expression.type === 'AssignmentExpression' &&
//            tree.expression.left.type === 'MemberExpression';
//    }
//
//    function is_assign_module(tree) {
//        return is_assign_member(tree) &&
//            tree.expression.left.object.name === 'module' &&
//            tree.expression.left.property.name === 'exports' &&
//            tree.expression.right.type === 'Identifier';
//    }
//
//    function is_assign_exports(tree) {
//        return is_assign_member(tree) &&
//            tree.expression.left.object.name === 'exports' &&
//            tree.expression.right.type === 'Identifier';
//    }
//
//    /**
//     * Look for exports of the form
//     *   exports.$name = $var
//     *   module.exports = $var
//     */
//    function find_exports(tree) {
//        var exports = {};
//
//        function dfs(tree) {
//            if (!(tree instanceof Object)) { }
//            // module.exports = ...
//            else if (is_assign_module(tree)) {
//                var localName = tree.expression.right.name;
//
//                exports['EXPORTS'] = docstrings[localName];
//            }
//            // exports.$var = ...
//            else if (is_assign_exports(tree)){
//                var exportName = tree.expression.left.property;
//                var localName = tree.expression.right.name;
//
//                exports[exportName] = docstrings[localName];
//            }
//            else {
//                values(tree).forEach(dfs);
//            }
//        }
//
//        dfs(tree.body[21]);
//
//        return {
//            'MODULE': exports
//        };
//    }

//    /**
//     * Keys are local variables, values are { value, jsdoc }
//     */
//    var localDocstrings = {};
//
//    /**
//     * Look for local variables with JSDoc annotations, that are exported with:
//     *   exports = $var
//     *   exports.$name = $var
//     *   module.exports = $var
//     *   module.exports.$name = var
//     */
//    function walk_requirejs(tree) {
//        // If leaf, return
//        if (!(tree instanceof Object))
//            return;
//
//        // If tree is a global assignment, add it to docstrings
//        if (is_assignment(tree)) {
//            var name = escodegen.generate(tree.expression.left);
//            var comments = tree.leadingComments || [];
//            comments.forEach(comment => {
//                if (comment.type === 'Block' && comment.value.charAt(0) === '*') {
//                    localDocstrings[name] = {
//                        value: tree.expression.right,
//                        jsdoc: '/*' + comment.value + '*/'
//                    };
//                }
//            });
//        }
//
//        // If tree is a global declaration, add it to docstrings
//        if (is_declaration(tree)) {
//            name = escodegen.generate(tree.expression);
//            comments = tree.leadingComments || [];
//            comments.forEach(comment => {
//                if (comment.type === 'Block' && comment.value.charAt(0) === '*') {
//                    localDocstrings[name] = {
//                        value: tree.expression.right,
//                        jsdoc: '/*' + comment.value + '*/'
//                    };
//                }
//            });
//        }
//
//        // If tree is a function expression, create a new scope
//        if (tree.type === 'FunctionExpression' || tree.type === 'FunctionDeclaration') {
//            var params = tree.params.map(p => p.name);
//            var vars = local_variables(tree);
//            var introduced = vars.concat(params).filter(not_in_locals);
//
//            // Add new local variables
//            introduced.forEach(add_local);
//            // Walk children
//            values(tree.body).forEach(walk);
//            // Remove local variables
//            introduced.forEach(remove_local);
//        }
//        // Recognize define(function(require, module, exports) { ... })
//        else if (tree.type === 'CallExpression' && tree.callee.name === 'define' && !locals['define']) {
//            walk_requirejs(tree);
//        }
//        // If tree has children, walk them
//        else {
//            values(tree).forEach(walk);
//        }
//    }

    walk(tree);

    return docstrings;
}

export interface Value {
    value: esprima.Syntax.SomeExpression;
    jsdoc: doctrine.JSDoc;
    originalText: string;
}

export interface File {
    [symbol: string]: Value
}

function parse_comments(comments): File {
    var parsed: File = {};

    Object.keys(comments).forEach(function (name) {
        var jsdoc = comments[name].jsdoc;
        var value = comments[name].value;
        var parsedDoc = doctrine.parse(jsdoc, { unwrap: true });

        parsed[name] = {
            value: value,
            jsdoc: parsedDoc,
            originalText: jsdoc
        };
    });

    return parsed;
}

function remove_private(parsed: File): File {
    // Identify all private names
    var privatePrefixes = [];

    Object.keys(parsed).forEach(function (name) {
        var jsdoc = parsed[name].jsdoc;
        var text = parsed[name].originalText;
        var isPrivate = text.indexOf('@private') !== -1;
        var isType = jsdoc.tags.some(t => t.title === 'typedef'
            || t.title === 'interface'
            || t.title === 'constructor'
            || t.title === 'enum');

        if (isPrivate && !isType) {
            privatePrefixes.push(name);
        }
    });

    // Identify all public names
    var publicNames = Object.keys(parsed).filter(function (name) {
        return !privatePrefixes.some(function (privateName) {
            return name.substring(0, privateName.length) === privateName;
        });
    });

    // Filter out just public names
    var acc: File = {};

    publicNames.forEach(function (name) {
        acc[name] = parsed[name];
    });

    return acc;
}

/**
 * @param code
 * @returns Parsed file
 */
export function jsdoc(code: string): File {
    var tree = esprima.parse(code, { attachComment: true });
    var comments = extract_jsdoc(tree.body);
    var parsed = parse_comments(comments);

    return options.includePrivate ? parsed : remove_private(parsed);
}
