/// <reference path="../../../globals.d.ts" />

declare module goog.testing {

    class FunctionCall extends FunctionCall__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FunctionCall__Class  { 
    
            /**
             * Struct for a single function call.
             * @param {!Function} func The called function.
             * @param {!Object} thisContext {@code this} context of called function.
             * @param {!Arguments} args Arguments of the called function.
             * @param {*} ret Return value of the function or undefined in case of error.
             * @param {*} error The error thrown by the function or null if none.
             * @constructor
             */
            constructor(func: Function, thisContext: Object, args: Arguments, ret: any, error: any);
    
            /**
             * @return {!Function} The called function.
             */
            getFunction(): Function;
    
            /**
             * @return {!Object} {@code this} context of called function. It is the same as
             *     the created object if the function is a constructor.
             */
            getThis(): Object;
    
            /**
             * @return {!Array} Arguments of the called function.
             */
            getArguments(): any[];
    
            /**
             * Returns the nth argument of the called function.
             * @param {number} index 0-based index of the argument.
             * @return {*} The argument value or undefined if there is no such argument.
             */
            getArgument(index: number): any;
    
            /**
             * @return {*} Return value of the function or undefined in case of error.
             */
            getReturnValue(): any;
    
            /**
             * @return {*} The error thrown by the function or null if none.
             */
            getError(): any;
    } 
    

    /**
     * Wraps the function into another one which calls the inner function and
     * records its calls. The recorded function will have 3 static methods:
     * {@code getCallCount}, {@code getCalls} and {@code getLastCall} but won't
     * inherit the original function's prototype and static fields.
     *
     * @param {!Function=} opt_f The function to wrap and record. Defaults to
     *     {@link goog.nullFunction}.
     * @return {!Function} The wrapped function.
     */
    function recordFunction(opt_f?: Function): Function;

    /**
     * Same as {@link goog.testing.recordFunction} but the recorded function will
     * have the same prototype and static fields as the original one. It can be
     * used with constructors.
     *
     * @param {!Function} ctor The function to wrap and record.
     * @return {!Function} The wrapped function.
     */
    function recordConstructor(ctor: Function): Function;
}
