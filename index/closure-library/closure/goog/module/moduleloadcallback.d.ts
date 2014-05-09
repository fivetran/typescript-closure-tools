/// <reference path="../../../globals.d.ts" />

declare module goog.module {

    class ModuleLoadCallback {
    
        /**
         * Class used to encapsulate the callbacks to be called when a module loads.
         * @param {Function} fn Callback function.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         * @constructor
         * @final
         */
        constructor(fn: Function, opt_handler?: Object);
    
        /**
         * Completes the operation and calls the callback function if appropriate.
         * @param {*} context The module context.
         */
        execute(context: any): void;
    
        /**
         * Abort the callback, but not the actual module load.
         */
        abort(): void;
    }
}
