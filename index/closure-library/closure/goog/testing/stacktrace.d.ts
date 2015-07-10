/// <reference path="../../../globals.d.ts" />

declare module goog.testing.stacktrace {

    class Frame extends Frame__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Frame__Class  { 
    
            /**
             * Class representing one stack frame.
             * @param {string} context Context object, empty in case of global functions or
             *     if the browser doesn't provide this information.
             * @param {string} name Function name, empty in case of anonymous functions.
             * @param {string} alias Alias of the function if available. For example the
             *     function name will be 'c' and the alias will be 'b' if the function is
             *     defined as <code>a.b = function c() {};</code>.
             * @param {string} args Arguments of the function in parentheses if available.
             * @param {string} path File path or URL including line number and optionally
             *     column number separated by colons.
             * @constructor
             * @final
             */
            constructor(context: string, name: string, alias: string, args: string, path: string);
    
            /**
             * @return {string} The function name or empty string if the function is
             *     anonymous and the object field which it's assigned to is unknown.
             */
            getName(): string;
    
            /**
             * @return {boolean} Whether the stack frame contains an anonymous function.
             */
            isAnonymous(): boolean;
    
            /**
             * Brings one frame of the stack trace into a common format across browsers.
             * @return {string} Pretty printed stack frame.
             */
            toCanonicalString(): string;
    } 
    

    /**
     * Sets function to deobfuscate function names.
     * @param {function(string): string} fn function to deobfuscate function names.
     */
    function setDeobfuscateFunctionName(fn: { (_0: string): string }): void;

    /**
     * Brings the stack trace into a common format across browsers.
     * @param {string} stack Browser-specific stack trace.
     * @return {string} Same stack trace in common format.
     */
    function canonicalize(stack: string): string;

    /**
     * Gets the native stack trace if available otherwise follows the call chain.
     * @return {string} The stack trace in canonical format.
     */
    function get(): string;
}
