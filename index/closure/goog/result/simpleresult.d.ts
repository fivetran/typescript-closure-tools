// Generated Mon May  5 15:45:50 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../closure/goog/result/result_interface.d.ts" />

declare module goog.result {

    /**
     * A SimpleResult object is a basic implementation of the
     * goog.result.Result interface. This could be subclassed(e.g. XHRResult)
     * or instantiated and returned by another class as a form of result. The caller
     * receiving the result could then attach handlers to be called when the result
     * is resolved(success or error).
     *
     * @constructor
     * @implements {goog.result.Result}
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    class SimpleResult implements goog.result.Result {
        /**
         * A SimpleResult object is a basic implementation of the
         * goog.result.Result interface. This could be subclassed(e.g. XHRResult)
         * or instantiated and returned by another class as a form of result. The caller
         * receiving the result could then attach handlers to be called when the result
         * is resolved(success or error).
         *
         * @constructor
         * @implements {goog.result.Result}
         * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
         */
        constructor();
    
        /**
         * @return {!goog.result.Result.State} The state of this Result.
         */
        getState(): goog.result.Result.State;
    
        /**
         * @return {*} The value of this Result. Will return undefined if the Result is
         *     pending or was an error.
         */
        getValue(): any;
    
        /**
         * @return {*} The error slug for this Result. Will return undefined if the
         *     Result was a success, the error slug was not set, or if the Result is
         *     pending.
         */
        getError(): any;
    
        /**
         * Attaches handlers to be called when the value of this Result is available.
         * Handlers are called in the order they were added by wait.
         *
         * @param {!function(this:T, !goog.result.Result)} handler The function called
         *     when the value is available. The function is passed the Result object as
         *     the only argument.
         * @param {T=} opt_scope Optional scope for the handler.
         * @template T
         */
        wait<T>(handler: (_0: goog.result.Result) => any /*missing*/, opt_scope?: T): void;
    
        /**
         * Sets the value of this Result, changing the state.
         *
         * @param {*} value The value to set for this Result.
         */
        setValue(value: any): void;
    
        /**
         * Sets the Result to be an error Result.
         *
         * @param {*=} opt_error Optional error slug to set for this Result.
         */
        setError(opt_error?: any): void;
    
        /**
         * Cancels the current Result, invoking the canceler function, if set.
         *
         * @return {boolean} Whether the Result was canceled.
         */
        cancel(): boolean;
    
        /**
         * @return {boolean} Whether this Result was canceled.
         */
        isCanceled(): boolean;
    }
}

declare module goog.result.SimpleResult {

    /**
     * Error thrown if there is an attempt to set the value or error for this result
     * more than once.
     *
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    class StateError extends goog.debug.Error {
        /**
         * Error thrown if there is an attempt to set the value or error for this result
         * more than once.
         *
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
         */
        constructor();
    }

    /**
     * A waiting handler entry.
     * @typedef {{
     *   callback: !function(goog.result.SimpleResult),
     *   scope: Object
     * }}
     * @private
     */
    interface HandlerEntry_ {
        callback: (_0: goog.result.SimpleResult) => any /*missing*/;
        scope: Object
    }

    /**
     * Creates a SimpleResult that fires when the given promise resolves.
     * Use only during migration to Promises.
     * @param {!goog.Promise.<?>} promise
     * @return {!goog.result.Result}
     */
    function fromPromise(promise: any /*missing*/): goog.result.Result;
}

