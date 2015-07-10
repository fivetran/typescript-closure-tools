/// <reference path="../../../globals.d.ts" />

declare module goog.module {

    class ModuleLoadCallback extends ModuleLoadCallback__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ModuleLoadCallback__Class  { 
    
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
