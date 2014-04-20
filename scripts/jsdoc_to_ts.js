var fs = require('fs');
var esprima = require('esprima');
var escodegen = require('escodegen');
var doctrine = require('doctrine');
require('../lib/closure-library/closure/goog/bootstrap/nodejs');

goog.require('goog.asserts');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string');

function pick(propertyName) {
  return function(object) {
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
    if (!tree)
      {}
    else if (tree.type === 'FunctionDeclaration')
      {}
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
function extract_jsdoc(tree) {

  /**
   * Keys are global assignments, values are ASTs
   * @type {{}}
   */
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

  function walk(tree) {
    if (!(tree instanceof Object))
      return;
    // If tree is a global assignment, add it to docstrings
    else if (is_global_assignment(tree)) {
      var name = escodegen.generate(tree.expression.left);
      var comments = tree.leadingComments || [];

      comments.forEach(function(comment) {
        if (comment.type === 'Block' && /^\*\s*\*/.test(comment.value))
          docstrings[name] = '/*' + comment.value + '*/';
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

/**
 * @param {Object} docstrings
 * @return {{}}
 */
function parse_jsdoc(docstrings) {
  var parsed = {};

  Object.keys(docstrings).forEach(function(name) {
    parsed[name] = doctrine.parse(docstrings[name], { unwrap: true });
  });

  return parsed;
}

function remove_private(parsed) {
  // Identify all private names
  var privatePrefixes = [];

  Object.keys(parsed).forEach(function(name) {
    var jsdoc = parsed[name];

    if (jsdoc.tags.some(is_title('private')))
      privatePrefixes.push(name);
  });

  // Identify all public names
  var publicNames = Object.keys(parsed).filter(function(name) {
    return !privatePrefixes.some(function(privateName) {
      return name.substring(0, privateName.length) === privateName;
    });
  });

  // Filter out just public names
  var acc = {};

  publicNames.forEach(function(name) {
    acc[name] = parsed[name];
  });

  return acc;
}

function is_title(title) {
  return function(tag) {
    return tag.title === title;
  }
}

function is_title_in(titles) {
  return function(tag) {
    return titles.indexOf(tag.title) !== -1;
  }
}

function generate_type_application(expression, applications) {
  if (expression.name === 'Array')
    return generate_type(applications[0]) + '[]';
  else
    return generate_type(expression) + '<' + applications.map(generate_type).join(',') + '>';
}

function generate_type(t) {
  if(!t)
    return 'any /* missing */';

  switch (t.type) {
    case 'NameExpression':
      return t.name;
    case 'TypeApplication':
      return generate_type_application(t.expression, t.applications);
    case 'OptionalType':
    case 'NullableType':
    case 'NonNullableType':
      return generate_type(t.expression);
    case 'FunctionType':
      return  '(' + t.params.map(generate_type).join(', ') + ') => ' + generate_type(t.result);
    case 'RestType':
      return generate_type(t.expression) + '[]';
    case 'UnionType':
      return 'any /*' + t.elements.map(generate_type).join('|') + '*/';
    case 'AllLiteral':
    case 'NullableLiteral':
      return 'any';
    case 'NullLiteral':
      return 'any /* null */';
    case 'UndefinedLiteral':
      return 'any /* undefined */';
    case 'VoidLiteral':
      return 'void';
    case 'RecordType':
      return '{' + t.fields.map(generate_record_field).join(', ');
    case 'ArrayType':
    case 'FieldType':
    case 'ParameterType':
    default:
      throw new Error('Unknown type expression ' + t.type);
  }
}

function generate_function_parameter_name(annotation) {
  if (!annotation.type)
    return annotation.name;
  else if (annotation.type.type === 'OptionalType')
    return annotation.name + '?';
  else if(annotation.type.type === 'RestType')
    return '...' + annotation.name;
  else
    return annotation.name;
}

function generate_function_parameter(annotation) {
  return generate_function_parameter_name(annotation) + ': ' + generate_type(annotation.type);
}

function generate_var(name, docs) {
  var typeTag = goog.array.find(docs.tags, is_title('type'));
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
  // Field
  if (docs.tags.some(is_title('type')))
    return generate_var(name, docs);
  // Function
  else
    return generate_function(name, docs);
}

function generate_method(name, docs) {
  var paramTags = docs.tags.filter(is_title('param'));
  var returnTag = goog.array.find(docs.tags, is_title_in(['return', 'returns'])) || VOID_TYPE;

  return name + '(' + paramTags.map(generate_function_parameter).join(', ') + '): ' + generate_type(returnTag.type);
}

function generate_field_name(name, type) {
  if (type.type === 'OptionalType')
    return name + '?';
  else
    return name;
}

function generate_field(name, docs) {
  var typeTag = goog.array.find(docs.tags, is_title('type'));
  var fieldName = generate_field_name(name, typeTag.type);

  return fieldName + ': ' + generate_type(typeTag.type);
}

function generate_record_field(field) {
  var fieldName = generate_field_name(field.key, field.value);

  return fieldName + ': ' + generate_type(field.value);
}

function generate_member(name, docs) {
  // Field
  if (docs.tags.some(is_title('type')))
    return generate_field(name, docs);
  // Function
  else
    return generate_method(name, docs);
}

function generate_interface(name, constructor, prototype) {
  var acc = 'interface ' + name + ' {\n';

  Object.keys(prototype).forEach(function(name) {
    var docs = prototype[name];

    acc += '  ' + generate_member(name, docs) + ';\n'
  });

  acc += '}';

  return acc;
}

function generate_class(name, constructor, prototype) {
  goog.asserts.assertObject(prototype);

  var interfaceName = goog.array.find(constructor.tags, is_title('implements'));
  var acc = 'class ' + name;

  if (interfaceName)
    acc += ' implements ' + generate_type(interfaceName.type);

  acc += ' {\n';

  Object.keys(prototype).forEach(function(name) {
    var docs = prototype[name];

    acc += '  ' + generate_member(name, docs) + ';\n'
  });

  acc += '}';

  return acc;
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

  // TODO enums

  // Construct modules and accumulate classes
  Object.keys(parsed).forEach(function(name) {
    var docs = parsed[name];
    var path = name.split('.');

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
    // Property
    else {
      modules[name] = generate_property(last(path), docs);
    }
  });

  // Combine interfaces with prototypes
  Object.keys(interfaces).forEach(function(name) {
    var docs = interfaces[name];
    var proto = prototypes[name];
    var path = name.split('.');

    modules[name] = generate_interface(last(path), docs, proto);
  });

  // Combine classes with prototypes
  Object.keys(classes).forEach(function(name) {
    var docs = classes[name];
    var proto = prototypes[name];
    var path = name.split('.');

    modules[name] = generate_class(last(path), docs, proto);
  });

  return modules;
}

function by_module(defs) {
  var acc = {};

  Object.keys(defs).forEach(function(name) {
    var split = name.lastIndexOf('.');
    var module = name.substring(0, split);
    var property = name.substring(split + 1);

    if (!(module in acc))
      acc[module] = {};

    acc[module][property] = defs[name];
  });

  return acc;
}

function pretty_print(modules) {
  var acc = '';

  Object.keys(modules).forEach(function(moduleName) {
    var module = modules[moduleName];
    acc += 'declare module ' + moduleName + ' {\n';

    Object.keys(module).forEach(function(propertyName) {
      var value = module[propertyName];

      value = value.replace(/\n/g, '\n  ');
      acc += '  ' + value + '\n';
    });

    acc += '}\n';
  });

  return acc;
}

var file = process.argv[2];
console.error(file);

var code = fs.readFileSync(file);
var tree = esprima.parse(code, { attachComment: true });
var comments = extract_jsdoc(tree.body);
var parsed = parse_jsdoc(comments);
var exported = remove_private(parsed);
var defs = generate_defs(exported);
var modules = by_module(defs);

console.log(pretty_print(modules));

//console.log(JSON.stringify(tree, null, 2));

//var doctrine = require('doctrine');
//var app = require('jsdoc/cli.js');
//var parser = require('jsdoc/lib/jsdoc/src/parser.js').createParser('esprima');
//
//var result = parser.parse('lib/closure-library/closure/goog/base.js');
//
//console.log(result);