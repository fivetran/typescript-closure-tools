/// <reference path="../../../globals.d.ts" />
/// <reference path="./result_interface.d.ts" />
/// <reference path="../debug/error.d.ts" />

declare module goog.result {

    class SimpleResult extends SimpleResult.__Class { }
    module SimpleResult {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.result.Result {
    
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
             * Cancels the current Result, invoking the canceler function, if set.
             *
             * @return {boolean} Whether the Result was canceled.
             */
            cancel(): boolean;
    
            /**
             * @return {boolean} Whether this Result was canceled.
             */
            isCanceled(): boolean;
    
            /**
             * Adds callbacks that will operate on the result of the Thenable, returning a
             * new child Promise.
             *
             * If the Thenable is fulfilled, the {@code onFulfilled} callback will be
             * invoked with the fulfillment value as argument, and the child Promise will
             * be fulfilled with the return value of the callback. If the callback throws
             * an exception, the child Promise will be rejected with the thrown value
             * instead.
             *
             * If the Thenable is rejected, the {@code onRejected} callback will be invoked
             * with the rejection reason as argument, and the child Promise will be rejected
             * with the return value of the callback or thrown value.
             *
             * @param {?(function(this:THIS, any):
             *             (RESULT|IThenable.<RESULT>|Thenable))=} opt_onFulfilled A
             *     function that will be invoked with the fulfillment value if the Promise
             *     is fullfilled.
             * @param {?(function(*): *)=} opt_onRejected A function that will be invoked
             *     with the rejection reason if the Promise is rejected.
             * @param {THIS=} opt_context An optional context object that will be the
             *     execution context for the callbacks. By default, functions are executed
             *     with the default this.
             * @return {!goog.Promise.<RESULT>} A new Promise that will receive the result
             *     of the fulfillment or rejection callback.
             * @template RESULT,THIS
             */
            then<RESULT,THIS>(opt_onFulfilled?: (_0: any) => RESULT, opt_onRejected?: (_0: any) => any, opt_context?: THIS): goog.Promise<RESULT>;
            /**
             * Adds callbacks that will operate on the result of the Thenable, returning a
             * new child Promise.
             *
             * If the Thenable is fulfilled, the {@code onFulfilled} callback will be
             * invoked with the fulfillment value as argument, and the child Promise will
             * be fulfilled with the return value of the callback. If the callback throws
             * an exception, the child Promise will be rejected with the thrown value
             * instead.
             *
             * If the Thenable is rejected, the {@code onRejected} callback will be invoked
             * with the rejection reason as argument, and the child Promise will be rejected
             * with the return value of the callback or thrown value.
             *
             * @param {?(function(this:THIS, any):
             *             (RESULT|IThenable.<RESULT>|Thenable))=} opt_onFulfilled A
             *     function that will be invoked with the fulfillment value if the Promise
             *     is fullfilled.
             * @param {?(function(*): *)=} opt_onRejected A function that will be invoked
             *     with the rejection reason if the Promise is rejected.
             * @param {THIS=} opt_context An optional context object that will be the
             *     execution context for the callbacks. By default, functions are executed
             *     with the default this.
             * @return {!goog.Promise.<RESULT>} A new Promise that will receive the result
             *     of the fulfillment or rejection callback.
             * @template RESULT,THIS
             */
            then<RESULT,THIS>(opt_onFulfilled?: (_0: any) => IThenable<RESULT>, opt_onRejected?: (_0: any) => any, opt_context?: THIS): goog.Promise<RESULT>;
            /**
             * Adds callbacks that will operate on the result of the Thenable, returning a
             * new child Promise.
             *
             * If the Thenable is fulfilled, the {@code onFulfilled} callback will be
             * invoked with the fulfillment value as argument, and the child Promise will
             * be fulfilled with the return value of the callback. If the callback throws
             * an exception, the child Promise will be rejected with the thrown value
             * instead.
             *
             * If the Thenable is rejected, the {@code onRejected} callback will be invoked
             * with the rejection reason as argument, and the child Promise will be rejected
             * with the return value of the callback or thrown value.
             *
             * @param {?(function(this:THIS, any):
             *             (RESULT|IThenable.<RESULT>|Thenable))=} opt_onFulfilled A
             *     function that will be invoked with the fulfillment value if the Promise
             *     is fullfilled.
             * @param {?(function(*): *)=} opt_onRejected A function that will be invoked
             *     with the rejection reason if the Promise is rejected.
             * @param {THIS=} opt_context An optional context object that will be the
             *     execution context for the callbacks. By default, functions are executed
             *     with the default this.
             * @return {!goog.Promise.<RESULT>} A new Promise that will receive the result
             *     of the fulfillment or rejection callback.
             * @template RESULT,THIS
             */
            then<RESULT,THIS>(opt_onFulfilled?: (_0: any) => Thenable<RESULT>, opt_onRejected?: (_0: any) => any, opt_context?: THIS): goog.Promise<RESULT>;
        }
    }
}

declare module goog.result.SimpleResult {

    class StateError extends StateError.__Class { }
    module StateError {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.debug.Error.__Class {
    
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
