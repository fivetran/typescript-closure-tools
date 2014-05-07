/// <reference path="../index/node.d.ts"/>
/// <reference path="../index/doctrine.d.ts"/>
/// <reference path="../index/esprima.d.ts"/>

import combine = require('./combine');
import parser = require('./parser');
import finder = require('./finder');

var reserved =  [
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

function last<T>(values: T[]): T {
    return values[values.length - 1];
}

function find<T>(values: T[], predicate: (T) => boolean): T {
    for (var i = 0; i < values.length; i++) {
        if (predicate(values[i]))
            return values[i];
    }
    
    return null;
}

function get_in(object: Object, keys: string[]): any {
    for (var i = 0; i < keys.length; i++)
        if (object instanceof Object)
            object = object[keys[i]];

    return object;
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
        return generate_applied_type(expression) + '<' + applications.map(generate_type).join(',') + '>';
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
/**
 * Generate a type, without worrying about whether generics have been applied
 * @param t
 */
function generate_applied_type(t) {
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

function generate_type(t) {
    if (!t)
        return 'any /*missing*/';

    var result = generate_applied_type(t);

    // If t is a name expression, look for a definition and verify templates
    if (t.type === 'NameExpression') {
        var tags: doctrine.Tag[] = get_in(finder.symbol(t.name), ['constructor', 'jsdoc', 'tags']);

        if(tags) {
            var params = [];

            tags.filter(t => t.title === 'template')
                .forEach(tag => {
                    tag.description.split(',').forEach(i => params.push('any'));
                });

            return t.name + '<' + params.join(', ') + '>';
        }
    }

    return result;
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

function param_names(docs) {
    if (docs.value && docs.value.params)
        return docs.value.params.map(x => x.name);
    else
        return docs.tags.filter(t => t.title === 'param').map(x => x.name);
}

interface TagsByName {
    [name: string]: doctrine.Tag
}

function param_types_by_name(docs: doctrine.JSDoc): TagsByName {
    var acc: TagsByName = {};

    docs.tags.forEach(function(tag) {
        acc[tag.name] = tag;
    });

    return acc;
}

function generate_var(name: string, docs: doctrine.JSDoc) {
    var typeTag = find(docs.tags, t => t.title === 'type');

    return 'var ' + name + ': ' + generate_type(typeTag && typeTag.type) + ';';
}

var VOID_TYPE = { type: { type: 'NameExpression', name: 'void' } };

function generics(docs: doctrine.JSDoc) {
    var templateTags = docs.tags.filter(t => t.title === 'template');
    var names = templateTags.map(x => x.description);

    if (names.length === 0)
        return '';
    else
        return '<' + names.join(', ') + '>';
}

function generate_function(name: string, docs: doctrine.JSDoc) {
    var names = param_names(docs);
    var types = param_types_by_name(docs);
    var paramStrings = generate_param_strings(names, types);
    var returnTag = find(docs.tags, t => t.title === 'return' || t.title === 'returns') || VOID_TYPE;
    return 'function ' + name + generics(docs) + '(' + paramStrings.join(', ') + '): ' + generate_type(returnTag.type) + ';';
}

function generate_property(name: string, docs: doctrine.JSDoc) {
    // Function
    if (is_function(docs))
        return generate_function(name, docs);
    // Field
    else
        return generate_var(name, docs);
}

function generate_param_strings(names: string[], types: TagsByName) {
    return names.map(function(name) {
        if (name in types)
            return generate_function_parameter(types[name]);
        else if (name.substring(0,4) === 'opt_')
            return safe_name(name) + '?: any /* jsdoc error */';
        else
            return safe_name(name) + ': any /* jsdoc error */';
    });
}

function generate_method(name: string, docs: doctrine.JSDoc) {
    var names = param_names(docs);
    var types = param_types_by_name(docs);
    var paramStrings = generate_param_strings(names, types);
    var returnTag = find(docs.tags, t => t.title === 'return' || t.title === 'returns') || VOID_TYPE;

    return name + generics(docs) + '(' + paramStrings.join(', ') + '): ' + generate_type(returnTag.type);
}

function generate_field_name(name, type) {
    if (type && type.type === 'OptionalType')
        return name + '?';
    else
        return name;
}

function generate_field(name: string, docs: doctrine.JSDoc) {
    var typeTag = find(docs.tags, t => t.title === 'type');
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
        || docs.tags.some(t => t.title === 'param')
        || docs.tags.some(t => t.title === 'return');
}

function generate_member(name: string, docs: doctrine.JSDoc) {
    // Function
    if (is_function(docs))
        return generate_method(name, docs);
    // Field
    else
        return generate_field(name, docs);
}

function generate_extends(docs: doctrine.JSDoc) {
    var supers = docs.tags.filter(t => t.title === 'extends').map(x => x.type).map(generate_type);

    if (supers.length > 0)
        return 'extends ' + supers.join(', ') + ' ';
    else
        return '';
}

function generate_implements(docs: doctrine.JSDoc) {
    var supers = docs.tags.filter(t => t.title === 'implements').map(x => x.type).map(generate_type);

    if (supers.length > 0)
        return 'implements ' + supers.join(', ') + ' ';
    else
        return '';
}

function generate_interface(name, prototype) {
    var constructor = prototype[''];
    var acc = 'interface ' + name + generics(constructor.jsdoc) + ' ' + generate_extends(constructor) + '{\n';

    Object.keys(prototype).forEach(function (name) {
        var docs = prototype[name];
        var text = docs.originalText.replace(/\n\s+/g, '\n     ');

        acc += '\n    ' + text + '\n';
        acc += '    ' + generate_member(name, docs) + ';\n'
    });

    acc += '}';

    return acc;
}

function generate_constructor(docs: doctrine.JSDoc) {
    var paramTags = docs.tags.filter(t => t.title === 'param');

    return 'constructor(' + paramTags.map(generate_function_parameter).join(', ') + ')';
}

function generate_class(name: string, prototype: combine.Symbol) {
    var constructor = prototype[''];
    var acc = 'class ' + name + generics(constructor.jsdoc) + ' ' + generate_extends(constructor.jsdoc) + generate_implements(constructor.jsdoc) + '{\n';

    var text = constructor.originalText.replace(/\n\s+/g, '\n     ');
    acc += '    ' + text + '\n';
    acc += '    ' + generate_constructor(constructor.jsdoc) + ';\n';

    Object.keys(prototype).forEach(function (name) {
        var docs = prototype[name].jsdoc;
        var text = prototype[name].originalText.replace(/\n\s+/g, '\n     ');

        if (!docs.tags.some(t => t.title === 'override')) {
            acc += '\n    ' + text + '\n';
            acc += '    ' + generate_member(name, docs) + ';\n'
        }
    });

    acc += '}';

    return acc;
}

function generate_enum(name: string, values: esprima.Syntax.ObjectExpression) {
    function key_id(property) {
        if ('name' in property)
            return property.name;
        else if ('value' in property)
            return property.value;
        else
            throw new Error('Unknown enum property ' + property);
    }

    var keys = values.properties.map(x => x.key).map(key_id);

    return 'enum ' + name + ' { ' + keys.join(', ') + ' } ';
}

function generate_typedef(name: string, docs: doctrine.JSDoc) {
    var typedef = find(docs.tags, t => t.title === 'typedef').type;

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

export interface Generated {
    [name: string]: {
        [member: string]: string
    };
}

export function defs(symbols: combine.Symbols): Generated {
    var modules: Generated = {};

    // Generate classes
    Object.keys(symbols.classes).forEach(name => {
        var dot = name.lastIndexOf('.');
        var moduleName = name.substring(0, dot);
        var propertyName = name.substring(dot + 1);
        var symbol: combine.Symbol = symbols.classes[name];
        var constructor: parser.Value = symbol[''];

        if (!modules[moduleName])
            modules[moduleName] = {};
        
        if (constructor.jsdoc.tags.some(t => t.title === 'interface')) 
            modules[moduleName][propertyName] = generate_interface(propertyName, symbol);
        else
            modules[moduleName][propertyName] = generate_class(propertyName, symbol);
    });

    // Generate statics
    Object.keys(symbols.modules).forEach(moduleName => {
        var symbol: combine.Symbol = symbols.modules[moduleName];

        if (!modules[moduleName])
            modules[moduleName] = {};

        Object.keys(symbol).forEach(propertyName => {
            var value: parser.Value = symbol[propertyName];

            if (value.jsdoc.tags.some(t => t.title === 'enum'))
                modules[moduleName][propertyName] = generate_enum(propertyName, value.value);
            else if (value.jsdoc.tags.some(t => t.title === 'typedef'))
                modules[moduleName][propertyName] = generate_typedef(propertyName, value.jsdoc);
            else
                modules[moduleName][propertyName] = generate_property(propertyName, value.jsdoc);
        });
    });

    return modules;
}