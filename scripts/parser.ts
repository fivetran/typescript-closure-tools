/// <reference path="../index/node.d.ts"/>
/// <reference path="../index/doctrine.d.ts"/>
/// <reference path="../index/esprima.d.ts"/>
/// <reference path="../index/escodegen.d.ts"/>

import fs =  require('fs');
import esprima = require('esprima');
import escodegen = require('escodegen');
var doctrine = require('../lib/doctrine');

function values(object: Object) {
    return Object.keys(object).map(k => object[k]);
}

function local_variables(tree: Object): string[] {
    var acc = [];

    function walk(tree) {
        if (!tree) {
        }
        else if (tree.type === 'FunctionDeclaration') {
        }
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
    var docstrings = {};

    /**
     * Keys are local variables, values are true or false
     * @type {{}}
     */
    var locals = {};

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
        return tree &&
            tree.type === 'ExpressionStatement' &&
            tree.expression.type === 'AssignmentExpression' &&
            is_global(tree.expression.left);
    }

    function is_global_declaration(tree) {
        return tree &&
            tree.type === 'ExpressionStatement' &&
            is_global(tree.expression);
    }

    function walk(tree) {
        // If leaf, return
        if (!(tree instanceof Object))
            return;

        // If tree is a global assignment, add it to docstrings
        if (is_global_assignment(tree)) {
            var name = escodegen.generate(tree.expression.left);
            var comments = tree.leadingComments || [];
            comments.forEach(function (comment) {
                if (comment.type === 'Block' && comment.value.charAt(0) === '*') {
                    docstrings[name] = {
                        value: tree.expression.right,
                        jsdoc: '/*' + comment.value + '*/'
                    };
                }
            });
        }

        // If tree is a global declaration, add it to docstrings
        if (is_global_declaration(tree)) {
            name = escodegen.generate(tree.expression);
            comments = tree.leadingComments || [];
            comments.forEach(function (comment) {
                if (comment.type === 'Block' && comment.value.charAt(0) === '*') {
                    docstrings[name] = {
                        value: tree.expression.right,
                        jsdoc: '/*' + comment.value + '*/'
                    };
                }
            });
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
        // If tree has children, walk them
        else {
            values(tree).forEach(walk);
        }
    }

    walk(tree);

    return docstrings;
}

function parse_comments(comments) {
    var parsed = {};

    Object.keys(comments).forEach(function (name) {
        var jsdoc = comments[name].jsdoc;
        var value = comments[name].value;
        var parsedDoc = doctrine.parse(jsdoc, { unwrap: true });

        parsedDoc.originalText = jsdoc;
        parsed[name] = {
            value: value,
            jsdoc: parsedDoc
        };
    });

    return parsed;
}

function remove_private(parsed) {
    // Identify all private names
    var privatePrefixes = [];

    Object.keys(parsed).forEach(function (name) {
        var jsdoc = parsed[name].jsdoc;

        if (jsdoc.tags.some(t => t.title === 'private') && !jsdoc.tags.some(t => t.title === 'typedef'))
            privatePrefixes.push(name);
    });

    // Identify all public names
    var publicNames = Object.keys(parsed).filter(function (name) {
        return !privatePrefixes.some(function (privateName) {
            return name.substring(0, privateName.length) === privateName;
        });
    });

    // Filter out just public names
    var acc = {};

    publicNames.forEach(function (name) {
        acc[name] = parsed[name];
    });

    return acc;
}

export function jsdoc(file) {
    var code = fs.readFileSync(file, 'utf8');
    var tree = esprima.parse(code, { attachComment: true });
    var comments = extract_jsdoc(tree.body);
    var parsed = parse_comments(comments);

    return remove_private(parsed);
}