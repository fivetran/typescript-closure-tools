/// <reference path="../../../globals.d.ts" />

declare module goog.async {

    /**
     * Throw an item without interrupting the current execution context.  For
     * example, if processing a group of items in a loop, sometimes it is useful
     * to report an error while still allowing the rest of the batch to be
     * processed.
     * @param {*} exception
     */
    function throwException(exception: any): void;

    /**
     * Fires the provided callbacks as soon as possible after the current JS
     * execution context. setTimeout(…, 0) always takes at least 5ms for legacy
     * reasons.
     * @param {function(this:SCOPE)} callback Callback function to fire as soon as
     *     possible.
     * @param {SCOPE=} opt_context Object in whose scope to call the listener.
     * @template SCOPE
     */
    function nextTick<SCOPE>(callback: { (): any /*missing*/ }, opt_context?: SCOPE): void;
}
