// <reference path="../index/references.ts" />

import fs = require('fs');
import esprima = require('esprima');
import escodegen = require('escodegen');
var doctrine = require('../lib/doctrine');
require('../lib/closure-library/closure/goog/bootstrap/nodejs');

goog.require('goog.asserts');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string');

var reserved = [
    'break',
    'case',
    'catch',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'finally',
    'for',
    'function',
    'if',
    'in',
    'instanceof',
    'new',
    'return',
    'switch',
    'this',
    'throw',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'class',
    'enum',
    'export',
    'extends',
    'import',
    'super'
];

function pick(propertyName) {
    return function (object) {
        return object[propertyName];
    }
}

function last(values) {
    return values[values.length - 1];
}

/**
 * @param {Object} tree
 * @returns {Array}
 */
function local_variables(tree) {
    var acc = [];

    function walk(tree) {
        if (!tree) {
        }
        else if (tree.type === 'FunctionDeclaration') {
        }
        else if (tree.type === 'VariableDeclarator')
            acc.push(tree.id.name);
        else if (tree instanceof Object) {
            goog.object.getValues(tree).forEach(walk);
        }
    }

    walk(tree);

    return acc;
}

function set_deep(object, keys, value) {
    for (var i = 0; i < keys.length - 1; i++) {
        var key = keys[i];
        object = key in object ? object[key] : (object[key] = {});
    }

    key = keys[i];
    object[key] = value;
}

/**
 * Walk AST and extract JSDoc comments on global variables
 */
function extract_jsdoc(tree, docstrings) {

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
            var params = tree.params.map(pick('name'));
            var vars = local_variables(tree);
            var introduced = vars.concat(params).filter(not_in_locals);

            // Add new local variables
            introduced.forEach(add_local);

            // Walk children
            goog.object.getValues(tree.body).forEach(walk);
            // Remove local variables
            introduced.forEach(remove_local);
        }
        // If tree has children, walk them
        else {
            goog.object.getValues(tree).forEach(walk);
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

        if (jsdoc.tags.some(is_title('private')))
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

function is_title(title) {
    return function (tag) {
        return tag.title === title;
    }
}

function is_title_in(titles) {
    return function (tag) {
        return titles.indexOf(tag.title) !== -1;
    }
}

function generate_type_name(name) {
    if (name === 'Array')
        return 'any[]';
    else
        return name;
}

function generate_dictionary_type(applications) {
    var tKey = generate_type(applications[0]);
    var tValue = generate_type(applications[1]);

    // Typescript only allows string and number in the key position
    switch (tKey) {
        case 'string':
        case 'number':
            break;
        default:
            tKey = 'string';
    }

    return '{ [key: ' + tKey + ']: ' + tValue + ' }';
}

function generate_type_application(expression, applications) {
    if (expression.name === 'Array')
        return generate_type(applications[0]) + '[]';
    else if (expression.name === 'Object')
        return generate_dictionary_type(applications);
    else
        return generate_type(expression) + '<' + applications.map(generate_type).join(',') + '>';
}

function generate_indexed_function_parameter(type, index) {
    return '_' + index + ': ' + generate_type(type);
}

function generate_function_type(params, result) {
    var paramString = '(' + params.map(generate_indexed_function_parameter).join(', ') + ')';

    return paramString + ' => ' + generate_type(result);
}

function comment(text) {
    text = text.replace(/\/\*/g, '(');
    text = text.replace(/\*\//g, ')');

    return '/*' + text + '*/';
}

function generate_type(t) {
    if (!t)
        return 'any /*missing*/';

    switch (t.type) {
        case 'NameExpression':
            return generate_type_name(t.name);
        case 'TypeApplication':
            return generate_type_application(t.expression, t.applications);
        case 'OptionalType':
        case 'NullableType':
        case 'NonNullableType':
            return generate_type(t.expression);
        case 'FunctionType':
            return generate_function_type(t.params, t.result);
        case 'RestType':
            return generate_type(t.expression) + '[]';
        case 'UnionType':
            return 'any ' + comment(t.elements.map(generate_type).join('|'));
        case 'AllLiteral':
        case 'NullableLiteral':
            return 'any';
        case 'NullLiteral':
            return 'any /*null*/';
        case 'UndefinedLiteral':
            return 'any /*undefined*/';
        case 'VoidLiteral':
            return 'void';
        case 'RecordType':
            return '{ ' + t.fields.map(generate_record_field).join('; ') + ' }';
        case 'ArrayType':
            return generate_type(t.elements[0]) + '[]';
        case 'FieldType':
        case 'ParameterType':
        default:
            throw new Error('Unknown type expression ' + t.type);
    }
}

function safe_name(name) {
    if (reserved.indexOf(name) !== -1)
        return '_' + name;
    else
        return name;
}

function generate_function_parameter_name(annotation) {
    if (!annotation.type)
        return safe_name(annotation.name);
    else if (annotation.type.type === 'OptionalType')
        return safe_name(annotation.name) + '?';
    else if (annotation.type.type === 'RestType')
        return '...' + safe_name(annotation.name);
    else
        return safe_name(annotation.name);
}

function generate_function_parameter(annotation) {
    return generate_function_parameter_name(annotation) + ': ' + generate_type(annotation.type);
}

function generate_var(name, docs) {
    var typeTag = goog.array.find(docs.tags, is_title('type')) || { type: null };

    return 'var ' + name + ': ' + generate_type(typeTag.type) + ';';
}

var VOID_TYPE = { type: { type: 'NameExpression', name: 'void' } };

function generics(docs) {
    var templateTags = docs.tags.filter(is_title('template'));
    var names = templateTags.map(pick('description'));

    if (names.length === 0)
        return '';
    else
        return '<' + names.join(', ') + '>';
}

function generate_function(name, docs) {
    var paramTags = docs.tags.filter(is_title('param'));
    var returnTag = goog.array.find(docs.tags, is_title_in(['return', 'returns'])) || VOID_TYPE;
    return 'function ' + name + generics(docs) + '(' + paramTags.map(generate_function_parameter).join(', ') + '): ' + generate_type(returnTag.type) + ';';
}

function generate_property(name, docs) {
    // Function
    if (is_function(docs))
        return generate_function(name, docs);
    // Field
    else
        return generate_var(name, docs);
}

function generate_method(name, docs) {
    var paramTags = docs.tags.filter(is_title('param'));
    var returnTag = goog.array.find(docs.tags, is_title_in(['return', 'returns'])) || VOID_TYPE;

    return name + generics(docs) + '(' + paramTags.map(generate_function_parameter).join(', ') + '): ' + generate_type(returnTag.type);
}

function generate_field_name(name, type) {
    if (type && type.type === 'OptionalType')
        return name + '?';
    else
        return name;
}

function generate_field(name, docs) {
    var typeTag = goog.array.find(docs.tags, is_title('type'));
    var type = typeTag && typeTag.type;
    var fieldName = generate_field_name(name, type);

    return fieldName + ': ' + generate_type(type);
}

function generate_record_field(field) {
    var fieldName = generate_field_name(field.key, field.value);

    return fieldName + ': ' + generate_type(field.value);
}

function is_function(docs) {
    return (docs.value && docs.value.type === 'FunctionExpression')
        || docs.tags.some(is_title('param'))
        || docs.tags.some(is_title('return'));
}

function generate_member(name, docs) {
    // Function
    if (is_function(docs))
        return generate_method(name, docs);
    // Field
    else
        return generate_field(name, docs);
}

function generate_extends(docs) {
    var supers = docs.tags.filter(is_title('extends')).map(pick('type')).map(generate_type);

    if (supers.length > 0)
        return 'extends ' + supers.join(', ') + ' ';
    else
        return '';
}

function generate_implements(docs) {
    var supers = docs.tags.filter(is_title('implements')).map(pick('type')).map(generate_type);

    if (supers.length > 0)
        return 'implements ' + supers.join(', ') + ' ';
    else
        return '';
}

function generate_interface(name, constructor, prototype) {
    goog.asserts.assertObject(prototype);

    var acc = 'interface ' + name + generics(constructor) + ' ' + generate_extends(constructor) + '{\n';

    Object.keys(prototype).forEach(function (name) {
        var docs = prototype[name];
        var text = docs.originalText.replace(/\n\s+/g, '\n     ');

        acc += '\n    ' + text + '\n';
        acc += '    ' + generate_member(name, docs) + ';\n'
    });

    acc += '}';

    return acc;
}

function generate_constructor(docs) {
    var paramTags = docs.tags.filter(is_title('param'));

    return 'constructor(' + paramTags.map(generate_function_parameter).join(', ') + ')';
}

function generate_class(name, constructor, prototype) {
    goog.asserts.assertObject(prototype);

    var acc = 'class ' + name + generics(constructor) + ' ' + generate_extends(constructor) + generate_implements(constructor) + '{\n';

    var text = constructor.originalText.replace(/\n\s+/g, '\n     ');
    acc += '    ' + text + '\n';
    acc += '    ' + generate_constructor(constructor) + ';\n';

    Object.keys(prototype).forEach(function (name) {
        var docs = prototype[name];
        var text = docs.originalText.replace(/\n\s+/g, '\n     ');

        if (!docs.tags.some(is_title('override'))) {
            acc += '\n    ' + text + '\n';
            acc += '    ' + generate_member(name, docs) + ';\n'
        }
    });

    acc += '}';

    return acc;
}

function generate_enum(name, values) {
    goog.asserts.assert(values.type === 'ObjectExpression', 'Expected object expression but found ' + values.type);

    function key_id(property) {
        if ('name' in property)
            return property.name;
        else if ('value' in property)
            return property.value;
        else
            throw new Error('Unknown enum property ' + property);
    }

    var keys = values.properties.map(pick('key')).map(key_id);

    return 'enum ' + name + ' { ' + keys.join(', ') + ' } ';
}

function generate_typedef(name, docs) {
    var typedef = goog.array.find(docs.tags, is_title('typedef')).type;

    switch (typedef.type) {
        // F function(...) becomes interface F { (...): ... }
        case 'FunctionType':
            var argumentString = typedef.params.map(generate_indexed_function_parameter).join(', ');
            var returnString = generate_type(typedef.result);
            return 'interface ' + name + ' {\n    (' + argumentString + '): ' + returnString + '\n}';
        // S { ... } becomes interface T { ... }
        case 'RecordType':
            var fieldsString = typedef.fields.map(function (field) {
                return field.key + ': ' + generate_type(field.value);
            }).join(';\n    ');
            return 'interface ' + name + ' {\n    ' + fieldsString + '\n}';
        // T NamedType becomes interface T extends NamedType { }
        case 'NameExpression':
            return 'interface ' + name + ' extends ' + typedef.name + ' { }';
        // T NamedType<Param> becomes interface T extends NamedType<Param> { }
        case 'TypeApplication':
            if (typedef.expression.name === 'Object')
                return generate_dictionary_type(typedef.applications);
            else {
                var base = typedef.expression.name;
                var generics = '<' + typedef.applications.map(generate_type).join(',') + '>'

                return 'interface ' + name + ' extends ' + base + generics + ' { }';
            }
        // Anything else becomes interface Name { /* explanation */ }
        default:
            return 'interface ' + name + ' { ' + comment(generate_type(typedef)) + ' }';
    }
}

/**
 * @param {Object} parsed
 * @return {Object}
 */
function generate_defs(parsed) {
    var modules = {};
    var interfaces = {};
    var classes = {};
    var prototypes = {};

    // TODO goog.promise.Promise is coming out as type

    // Construct modules and accumulate classes
    Object.keys(parsed).forEach(function (name) {
        var docs = parsed[name].jsdoc;
        var value = parsed[name].value;
        var path = name.split('.');

        docs.value = value;

        // Interface
        if (docs.tags.some(is_title('interface'))) {
            interfaces[name] = docs;
        }
        // Class
        else if (docs.tags.some(is_title('constructor'))) {
            classes[name] = docs;
        }
        // Class / interface member
        else if (name.indexOf('.prototype.') !== -1) {
            var where = name.split('.prototype.');

            set_deep(prototypes, where, docs);
        }
        // Enum
        else if (docs.tags.some(is_title('enum'))) {
            if (value.type === 'ObjectExpression')
                modules[name] = generate_enum(last(path), value);
        }
        // Typedef
        else if (docs.tags.some(is_title('typedef'))) {
            modules[name] = generate_typedef(last(path), docs);
        }
        // Property
        else {
            modules[name] = generate_property(last(path), docs);
        }
    });

    // Combine interfaces with prototypes
    Object.keys(interfaces).forEach(function (name) {
        var docs = interfaces[name];
        var proto = prototypes[name] || {};
        var path = name.split('.');

        modules[name] = generate_interface(last(path), docs, proto);
    });

    // Combine classes with prototypes
    Object.keys(classes).forEach(function (name) {
        var docs = classes[name];
        var proto = prototypes[name] || {};
        var path = name.split('.');

        modules[name] = generate_class(last(path), docs, proto);
    });

    return modules;
}

function by_module(defs) {
    var acc = {};

    Object.keys(defs).forEach(function (name) {
        var split = name.lastIndexOf('.');
        var module = name.substring(0, split);
        var property = name.substring(split + 1);

        if (!(module in acc))
            acc[module] = {};

        acc[module][property] = defs[name];
    });

    return acc;
}

var safeX = new RegExp('\\b(' + reserved.concat(['any', 'number', 'boolean', 'string', 'void']).join('|') + ')\\b');

function safe_module_name(moduleName) {
//  if (safeX.test(moduleName))
//    return "'" + moduleName + "'";
//  else
//    return moduleName;
    return moduleName;
}

function pretty_print(modules, comments) {
    var acc = '';

    Object.keys(modules).forEach(function (moduleName) {
        var module = modules[moduleName];
        acc += '\ndeclare module ' + safe_module_name(moduleName) + ' {\n';

        Object.keys(module).forEach(function (propertyName) {
            var value = module[propertyName];
            var comment = comments[moduleName][propertyName].jsdoc;

            comment = comment.replace(/\n/g, '\n    ');
            value = value.replace(/\n/g, '\n    ');
            acc += '\n    ' + comment + '\n';
            acc += '    ' + value + '\n';
        });

        acc += '}\n';
    });

    return acc;
}


var comments = {};
process.argv.slice(2).forEach(function (file) {
    console.error(file);
    var code = fs.readFileSync(file);
    var tree = esprima.parse(code, { attachComment: true });
    extract_jsdoc(tree.body, comments);
});

var parsed = parse_comments(comments);
var exported = remove_private(parsed);
var defs = generate_defs(exported);

console.log(pretty_print(by_module(defs), by_module(comments)));

//console.log(JSON.stringify(tree, null, 2));

//var doctrine = require('doctrine');
//var app = require('jsdoc/cli.js');
//var parser = require('jsdoc/lib/jsdoc/src/parser.js').createParser('esprima');
//
//var result = parser.parse('lib/closure-library/closure/goog/base.js');
//
//console.log(result);