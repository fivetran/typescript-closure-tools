/// <reference path="../../../../globals.d.ts" />

declare module goog.labs.classdef {

    /** @typedef {
         {constructor:!Function}|
         {constructor:!Function, statics:(Object|function(Function):void)}} */
    interface ClassDescriptor { /*any ({ constructor: Function }|{ constructor: Function; statics: any (Object|(_0: Function) => void) })*/ }

    /**
     * Creates a restricted form of a Closure "class":
     *   - from the compiler's perspective, the instance returned from the
     *     constructor is sealed (no new properties may be added).  This enables
     *     better type checking.
     *   - the compiler will rewrite this definition to a form that is optimal
     *     for type checking and optimization (initially this will be a more
     *     traditional form).
     *
     * @param {Function} superClass The superclass or null.
     * @param {goog.labs.classdef.ClassDescriptor} def
     *     An object literal describing the
     *     the class.  It may have the following properties:
     *     "constructor": the constructor function
     *     "statics": an object literal containing methods to add to the constructor
     *        as "static" methods or a function that will receive the constructor
     *        function as its only parameter to which static properties can
     *        be added.
     *     all other properties are added to the prototype.
     * @return {!Function} The class constructor.
     */
    function defineClass(superClass: Function, def: { constructor: Function }): Function;
    /**
     * Creates a restricted form of a Closure "class":
     *   - from the compiler's perspective, the instance returned from the
     *     constructor is sealed (no new properties may be added).  This enables
     *     better type checking.
     *   - the compiler will rewrite this definition to a form that is optimal
     *     for type checking and optimization (initially this will be a more
     *     traditional form).
     *
     * @param {Function} superClass The superclass or null.
     * @param {goog.labs.classdef.ClassDescriptor} def
     *     An object literal describing the
     *     the class.  It may have the following properties:
     *     "constructor": the constructor function
     *     "statics": an object literal containing methods to add to the constructor
     *        as "static" methods or a function that will receive the constructor
     *        function as its only parameter to which static properties can
     *        be added.
     *     all other properties are added to the prototype.
     * @return {!Function} The class constructor.
     */
    function defineClass(superClass: Function, def: { constructor: Function; statics: Object }): Function;
    /**
     * Creates a restricted form of a Closure "class":
     *   - from the compiler's perspective, the instance returned from the
     *     constructor is sealed (no new properties may be added).  This enables
     *     better type checking.
     *   - the compiler will rewrite this definition to a form that is optimal
     *     for type checking and optimization (initially this will be a more
     *     traditional form).
     *
     * @param {Function} superClass The superclass or null.
     * @param {goog.labs.classdef.ClassDescriptor} def
     *     An object literal describing the
     *     the class.  It may have the following properties:
     *     "constructor": the constructor function
     *     "statics": an object literal containing methods to add to the constructor
     *        as "static" methods or a function that will receive the constructor
     *        function as its only parameter to which static properties can
     *        be added.
     *     all other properties are added to the prototype.
     * @return {!Function} The class constructor.
     */
    function defineClass(superClass: Function, def: { constructor: Function; statics: (_0: Function) => void }): Function;
}
