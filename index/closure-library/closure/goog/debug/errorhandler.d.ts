/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />
/// <reference path="./entrypointregistry.d.ts" />
/// <reference path="./error.d.ts" />

declare module goog.debug {

    class ErrorHandler extends ErrorHandler.__Class { }
    module ErrorHandler {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.Disposable.__Class implements goog.debug.EntryPointMonitor {
    
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
    
            /**
             * Instruments a function.
             *
             * @param {!Function} fn A function to instrument.
             * @return {!Function} The instrumented function.
             */
            wrap(fn: Function): Function;
    
            /**
             * Try to remove an instrumentation wrapper created by this monitor.
             * If the function passed to unwrap is not a wrapper created by this
             * monitor, then we will do nothing.
             *
             * Notice that some wrappers may not be unwrappable. For example, if other
             * monitors have applied their own wrappers, then it will be impossible to
             * unwrap them because their wrappers will have captured our wrapper.
             *
             * So it is important that entry points are unwrapped in the reverse
             * order that they were wrapped.
             *
             * @param {!Function} fn A function to unwrap.
             * @return {!Function} The unwrapped function, or {@code fn} if it was not
             *     a wrapped function created by this monitor.
             */
            unwrap(fn: Function): Function;
        }
    }
}

declare module goog.debug.ErrorHandler {

    class ProtectedFunctionError extends ProtectedFunctionError.__Class { }
    module ProtectedFunctionError {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.debug.Error.__Class {
    
            /**
             * Error thrown to the caller of a protected entry point if the entry point
             * throws an error.
             * @param {*} cause The error thrown by the entry point.
             * @constructor
             * @extends {goog.debug.Error}
             * @final
             */
            constructor(cause: any);
        }
    }
}

declare module goog.debug.ErrorHandler.ProtectedFunctionError {

    /**
     * Text to prefix the message with.
     * @type {string}
     */
    var MESSAGE_PREFIX: string;
}
