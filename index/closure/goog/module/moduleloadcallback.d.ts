/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/debug/errorhandlerweakdep.d.ts" />

declare module goog.module {

    /**
     * Class used to encapsulate the callbacks to be called when a module loads.
     * @param {Function} fn Callback function.
     * @param {Object=} opt_handler Optional handler under whose scope to execute
     *     the callback.
     * @constructor
     * @final
     */
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

