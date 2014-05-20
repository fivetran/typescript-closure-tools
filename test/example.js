goog.provide('example');
goog.provide('example.Interface');
goog.provide('example.A');
goog.provide('example.B');
goog.provide('example.C');

/**
 * No param docs
 */
example.missingParams = function(x, y) {

};

/**
 * No params at all
 */
example.noParams = function() {

};

/**
 * @param {number|string} x
 */
example.overloadedFunction = function(x) {

};

/**
 * @interface
 */
example.Interface;

/**
 * @param {number|string} x
 */
example.Interface.prototype.interfaceMethod = function(x) {

};

/**
 * @interface
 * @extends {example.Interface}
 */
example.SubInterface;

/**
 * @constructor
 * @implements {example.Interface}
 * @param {number|string} x
 */
example.Class = function(x) {

};

/**
 * @param {number|string} x
 */
example.Class.prototype.overloadedMethod = function(x) {

};

/**
 * @override
 */
example.Class.prototype.interfaceMethod = function(x) { };

/**
 * @extends {example.Class}
 * @constructor
 */
example.SubClass = function() { };

/**
 * @interface
 */
example.A;

/**
 * @interface
 */
example.B;

/**
 * @interface
 */
example.C;

/**
 * @interface
 */
example.D;

/**
 * @typedef {string|number}
 */
example.UnionType;

/**
 * @param {example.UnionType} x
 */
example.unionFunction = function(x) { };

/**
 * @param {{myProperty: example.UnionType}} x
 */
example.deepUnionFunction = function(x) { };