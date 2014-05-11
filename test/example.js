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
 * Adds an event listener with a specific event wrapper on a DOM Node or an
 * object that has implemented {@link example.B}. A listener can
 * only be added once to an object.
 *
 * @param {example.A|example.B} src The node to listen to
 *     events on.
 * @param {example.C} wrapper Event wrapper to use.
 * @param {function(this:SCOPE, ?):?|{handleEvent:function(?):?}|null} listener
 *     Callback method, or an object with a handleEvent function.
 * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
 *     false).
 * @return {example.D} This object, allowing for chaining of
 *     calls.
 */
example.funkyOverload = function(src, wrapper, listener, opt_capt) {

};

/**
 * @typedef {string|number}
 */
example.UnionType;

/**
 * @param {example.UnionType} x
 */
example.unionFunction = function(x) { };

/**
 * @param {example.UnionType<any>} x
 */
example.genericUnionFunction = function(x) { };
