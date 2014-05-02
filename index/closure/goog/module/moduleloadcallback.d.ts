// Generated Thu May  1 21:09:25 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/debug/errorhandlerweakdep.d.ts" />

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

