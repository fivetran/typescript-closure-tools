/// <reference path="../../../globals.d.ts" />
/// <reference path="../promise/thenable.d.ts" />

declare module goog.result {

    interface Result extends goog.Thenable<any> {
    
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
        wait<T>(handler: { (_0: goog.result.Result): any /*missing*/ }, opt_scope?: T): void;
    
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
    }
}

declare module goog.result.Result {

    class CancelError extends CancelError__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class CancelError__Class extends _Error  { 
    
            /**
             * The value to be passed to the error handlers invoked upon cancellation.
             * @constructor
             * @extends {Error}
             * @final
             * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
             */
            constructor();
    } 
    

    /**
     * The States this object can be in.
     *
     * @enum {string}
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    enum State { SUCCESS, ERROR, PENDING } 
}
