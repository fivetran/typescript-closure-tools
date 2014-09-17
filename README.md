Converts [Closure-style JSDoc type annotations](https://developers.google.com/closure/compiler/docs/js-for-compiler)
to [TypeScript definition files](http://www.typescriptlang.org/Handbook#writing-dts-files).

The purpose of this tool is to assist developers writing TypeScript definitions on large libraries.
Our goal is to generate correct type definitions in most cases, and to provide a useful starting
point for manually fixing the difficult cases.

# Setup

```bash
git clone git@github.com:fivetran/closure-definitions.git
cd closure-definitions
git submodule update --init
npm install
tsc --module commonjs src/*.ts
node src/main.js test/example.js test/example.d.ts # Run a single example
```

# Usage

[Use it online](http://fivetran.github.io/typescript-closure-tools)

```
node src/main.js
  [--provides symbols.tsv]
  [--globals output/dir/global-declarations.d.ts]
  [--input_root input/dir]
  [--output_root output/dir]
  input/dir/input-file.js output/dir/output-file.d.ts
  input/dir/another-input-file.js output/dir/another-output-file.d.ts
  ...
```

* `--provides symbols.tsv` A tab-separated file where each row has the form `file-name.js    providedSymbol`
If this option isn't present, we will simply look for global symbols in the input files.
* `--globals output/dir/global-declarations.d.ts` A TypeScript declaration that will be referenced at the top of every output file.
* `--input_root input/dir` Root of inputs, considered when computing relative paths for `///<reference path="..." />` tags.
* `--output_root output/dir` Root of outputs, considered when computing relative paths for `///<reference path="..." />` tags.

# Structure

* `index/` Typescript definition files for the Closure library

## definitions-generator/

* `src/` Typescript sources
* `scripts/` Shell scripts used for converting the Closure library
* `test/` Jasmine specs and example JS files used in testing
* `lib/` Dependencies

# Running the tests

```bash
tsc test/*.ts
./node_modules/jasmine-node/bin/jasmine-node test/*.js
```

# Differences between the Closure type system and TypeScript

There are several important differences between the Closure type system and TypeScript.

## Differences that are resolved automatically

### Closure has unions, TypeScript has overloads

Closure has unions such as:

```javascript
/** @typedef {number|string} */
MyType;
```

and:

```javascript
/** @param {number|string} x */
myFunction = function(x) { };
```

Closure unions are converted using the following rules:

#### Expand unions into overloads

```javascript
/** @param {number|string} x */
myFunction = function(x) { };
```

becomes:

```typescript
function myFunction(x: number);
function myFunction(x: string);
```

This works for nested union types as well:

```javascript
/** @typedef {number|string} */
UnionType
/** @param {{myProperty:UnionType}} x */
myFunction = function(x) { };
```

becomes:

```typescript
function myFunction(x: { myProperty: number });
function myFunction(x: { myProperty: string });
```

#### Inline typedef unions where possible

```javascript
/** @typedef {number|string} */
MyTypeDef;

/** @param {MyTypeDef} x */
myFunction = function(x) { };
```

becomes:

```typescript
function myFunction(x: number);
function myFunction(x: string);
```

#### Create empty interfaces when all else fails

```javascript
/** @typedef {Array<T>|string} */
AnnoyingType;
/** @param {AnnoyingType<number>} x */
myFunction = function(x) { };
```

becomes:

```typescript
interface AnnoyingType { /* Array<T>|string */ }
function myFunction(x: AnnoyingType);
```

### Static inheritance

In typescript, static properties of classes are inherited:

```typescript
declare class SuperClass { }
declare module SuperClass {
    var myStaticProperty: number;
}

declare class SubClass extends SuperClass { }

SubClass.myStaticProperty; // : number
```

In Closure they are not:
```javascript
/** @constructor */
SuperClass = function() { };
/** @type {string} */
SuperClass.myStaticProperty;
/** @type {string} */
SuperClass.prototype.myInstanceProperty;

/** @extends {SuperClass} */
SubClass = function() { };
goog.inherits(SubClass, SuperClass);

SubClass.myStaticProperty; // undefined
```

To fix this, we create a common superclass without the static properties:

```typescript
declare class SuperClass extends SuperClass.__Class { }
declare module SuperClass {
    class __Class {  // fake common superclass without myStaticProperty
        myInstanceProperty: string;
    }
    myStaticProperty: string; // static property that won't be inherited by 'extends SuperClass.__Class'
}

declare class SubClass extends SubClass.__Class { }
declare module SubClass {
    class __Class extends SuperClass.__Class { }
}
```

These fake superclasses don't actually exist and are present solely to simulate the behavior of
`goog.inherits(SubClass, SuperClass)` in TypeScript definition files.
Calling `new SuperClass.__Class` or `extends SuperClass.__Class` in non-declaration TypeScript code
will generate a runtime error.
You should use `new SuperClass` and `extends SuperClass` in non-declaration TypeScript code.

### Private types

In Closure, the `@private` annotation is not enforced, and private type definitions, interfaces, classes and enums are
often used in public function declarations. Therefore, these private types are included in the TypeScript definition.

## Differences that must be fixed manually

### Shadowing

In typescript, the current module shadows the global namespace:

```typescript
declare class MyClass;
declare module myModule {
    class MyClass;
    var myValue : MyClass; // Refers to myModule.MyClass, not global MyClass
```

This can create problems when referring to global variables that are shadowed by locals:

```javascript
goog.Error = function() { }

/**
 * @param {Error} e
 */
goog.f = function(e) { };
```

becomes:

```typescript
declare module goog {
    class Error { }

    function f(e: Error) { }
}
```

### Duplicate overloads

Closure unions sometimes include two types which are structurally equivalent:

```javascript
/** @typedef {{length: number}} */
Lengthable;

/** @typedef {{length: number}} */
ArrayLike;

/** @param {Lengthable|ArrayLike} x */
f = function(x) { };
```

which becomes:

```typescript
interface Lengthable {
  length: number;
}

interface ArrayLike {
  length: number;
}

f(x: Lengthable);
f(x: ArrayLike);
```

TypeScript has a structural type system, so the above example is considered a duplicate overload. One of them
will need to be manually deleted.

# RequireJS support

Basic RequireJS support is present:

```javascript
define(function(require, exports, module) {
    /** @param {number} x */
    function functionDeclaration(x) { }
});
```

becomes:

```typescript
module MODULE {
    functionDeclaration(x: number): void;
}
```

## Limitations

### Declarations are always placed in a module named `MODULE`

### Only symbols with JSDoc annotations are exported

```javascript
define(function(require, exports, module) {
    /** @type {number} */
    var documentedSymbol = 1;

    var ignoredSymbol = 2;

    exports.documentedSymbol = documentedSymbol;
    exports.ignoredSymbol = 2;
});
```

becomes:

```typescript
module MODULE {
    var documentedSymbol: number;
}
```

### `exports` and `module` are ignored

Symbols are exported using their local name:

```javascript
define(function(require, exports, module) {
    /** @type {number} */
    var localName = 1;

    exports.exportedName = localName;
});
```

becomes:

```typescript
module MODULE {
    var localName: number;
}
```
