/// <reference path="../../../globals.d.ts" />

declare module goog.debug.reflect {

    /**
     * Returns the name of a type of object.
     * @param {!Function} classConstructor A object constructor to get the name of.
     * @return {string|undefined} The string name of the class.
     */
    function className(classConstructor: Function): any /*string|any (undefined)*/;

    /**
     * Guesses the real type of the object, even if its {@code toString} method is
     * overridden. Gives exact result for all goog.provided classes in non-compiled
     * code, and some often used native classes in compiled code too. Not tested in
     * multi-frame environment.
     *
     * Example use case to get better type information in the Watch tab of FireBug:
     * <pre>
     * Object.prototype.toString = function() {
     *   return goog.debug.reflect.typeOf(this);
     * };
     * </pre>
     *
     * @param {*} obj An arbitrary variable to get the type of.
     * @return {string} The namespaced type of the argument or 'Object' if didn't
     *     manage to determine it. Warning: in IE7 ActiveX (including DOM) objects
     *     don't expose their type to JavaScript. Their {@code constructor}
     *     property is undefined and they are not even the instances of the
     *     {@code Object} type. This method will recognize them as 'ActiveXObject'.
     */
    function typeOf(obj: any): string;
}
