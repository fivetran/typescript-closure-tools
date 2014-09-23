/// <reference path="../../../globals.d.ts" />

declare module goog.async.run {

    class WorkItem_ extends WorkItem_.__Class { }
    module WorkItem_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @constructor
             * @final
             * @struct
             * @private
             *
             * @param {function()} fn
             * @param {Object|null|undefined} scope
             */
            constructor(fn: () => any /*missing*/, scope: Object);
            /**
             * @constructor
             * @final
             * @struct
             * @private
             *
             * @param {function()} fn
             * @param {Object|null|undefined} scope
             */
            constructor(fn: () => any /*missing*/, scope: any /*null*/);
        }
    }

    /**
     * Run any pending goog.async.run work items. This function is not intended
     * for general use, but for use by entry point handlers to run items ahead of
     * goog.async.nextTick.
     */
    function processWorkQueue(): void;
}

declare module goog.async {

    /**
     * Fires the provided callback just before the current callstack unwinds, or as
     * soon as possible after the current JS execution context.
     * @param {function(this:THIS)} callback
     * @param {THIS=} opt_context Object to use as the "this value" when calling
     *     the provided function.
     * @template THIS
     */
    function run<THIS>(callback: () => any /*missing*/, opt_context?: THIS): void;
}
