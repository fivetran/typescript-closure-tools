// Generated Sun May  4 18:18:36 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/structs/simplepool.d.ts" />
/// <reference path="../../goog/debug/tracer.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />

declare module goog.debug {

    /**
     * The ErrorHandler can be used to to wrap functions with a try/catch
     * statement. If an exception is thrown, the given error handler function will
     * be called.
     *
     * When this object is disposed, it will stop handling exceptions and tracing.
     * It will also try to restore window.setTimeout and window.setInterval
     * if it wrapped them. Notice that in the general case, it is not technically
     * possible to remove the wrapper, because functions have no knowledge of
     * what they have been assigned to. So the app is responsible for other
     * forms of unwrapping.
     *
     * @param {Function} handler Handler for exceptions.
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.debug.EntryPointMonitor}
     */
    class ErrorHandler extends goog.Disposable implements goog.debug.EntryPointMonitor {
        /**
         * The ErrorHandler can be used to to wrap functions with a try/catch
         * statement. If an exception is thrown, the given error handler function will
         * be called.
         *
         * When this object is disposed, it will stop handling exceptions and tracing.
         * It will also try to restore window.setTimeout and window.setInterval
         * if it wrapped them. Notice that in the general case, it is not technically
         * possible to remove the wrapper, because functions have no knowledge of
         * what they have been assigned to. So the app is responsible for other
         * forms of unwrapping.
         *
         * @param {Function} handler Handler for exceptions.
         * @constructor
         * @extends {goog.Disposable}
         * @implements {goog.debug.EntryPointMonitor}
         */
        constructor(handler: Function);
    
        /**
         * Enable tracers when instrumenting entry points.
         * @param {boolean} newVal See above.
         */
        setAddTracersToProtectedFunctions(newVal: boolean): void;
    
        /**
         * Installs exception protection for an entry point function. When an exception
         * is thrown from a protected function, a handler will be invoked to handle it.
         *
         * @param {Function} fn An entry point function to be protected.
         * @return {!Function} A protected wrapper function that calls the entry point
         *     function.
         */
        protectEntryPoint(fn: Function): Function;
    
        /**
         * Helps {@link #protectEntryPoint} by actually creating the protected
         * wrapper function, after {@link #protectEntryPoint} determines that one does
         * not already exist for the given function.  Can be overriden by subclasses
         * that may want to implement different error handling, or add additional
         * entry point hooks.
         * @param {!Function} fn An entry point function to be protected.
         * @return {!Function} protected wrapper function.
         * @protected
         */
        getProtectedFunction(fn: Function): Function;
    
        /**
         * Installs exception protection for window.setTimeout to handle exceptions.
         */
        protectWindowSetTimeout(): void;
    
        /**
         * Install exception protection for window.setInterval to handle exceptions.
         */
        protectWindowSetInterval(): void;
    
        /**
         * Install exception protection for window.requestAnimationFrame to handle
         * exceptions.
         */
        protectWindowRequestAnimationFrame(): void;
    
        /**
         * Set whether to wrap errors that occur in protected functions in a
         * goog.debug.ErrorHandler.ProtectedFunctionError.
         * @param {boolean} wrapErrors Whether to wrap errors.
         */
        setWrapErrors(wrapErrors: boolean): void;
    
        /**
         * Set whether to add a prefix to all error messages that occur in protected
         * functions.
         * @param {boolean} prefixErrorMessages Whether to add a prefix to error
         *     messages.
         */
        setPrefixErrorMessages(prefixErrorMessages: boolean): void;
    }
}

declare module goog.debug.ErrorHandler {

    /**
     * Error thrown to the caller of a protected entry point if the entry point
     * throws an error.
     * @param {*} cause The error thrown by the entry point.
     * @constructor
     * @extends {goog.debug.GoogError}
     * @final
     */
    class ProtectedFunctionError extends goog.debug.GoogError {
        /**
         * Error thrown to the caller of a protected entry point if the entry point
         * throws an error.
         * @param {*} cause The error thrown by the entry point.
         * @constructor
         * @extends {goog.debug.GoogError}
         * @final
         */
        constructor(cause: any);
    }
}

declare module goog.debug.ErrorHandler.ProtectedFunctionError {

    /**
     * Text to prefix the message with.
     * @type {string}
     */
    var MESSAGE_PREFIX: string;
}

