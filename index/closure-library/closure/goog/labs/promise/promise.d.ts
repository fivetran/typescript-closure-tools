/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../promise/thenable.d.ts" />
/// <reference path="../../promise/promise.d.ts" />

declare module goog.labs {

    class Promise<TYPE,RESOLVER_CONTEXT> extends Promise__Class<TYPE,RESOLVER_CONTEXT> { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Promise__Class<TYPE,RESOLVER_CONTEXT> implements goog.Thenable<TYPE>  { 
    
            /**
             * Alias for the {@code goog.Promise} class. Closure Promises were developed
             * under the temporary namespace {@code goog.labs.Promise}. This alias will be
             * removed once existing users have had a chance to migrate to the new name.
             *
             * @see goog.Promise
             *
             * @deprecated Use goog.Promise instead.
             * @param {function(
             *             this:RESOLVER_CONTEXT,
             *             function((TYPE|IThenable.<TYPE>|Thenable)),
             *             function(*)): void} resolver
             * @param {RESOLVER_CONTEXT=} opt_context
             * @constructor
             * @struct
             * @final
             * @implements {goog.Thenable.<TYPE>}
             * @template TYPE,RESOLVER_CONTEXT
             */
            constructor(resolver: { (_0: { (_0: TYPE|IThenable<TYPE>|Thenable<any>): any /*missing*/ }, _1: { (_0: any): any /*missing*/ }): void }, opt_context?: RESOLVER_CONTEXT);
    
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
             * @param {?(function(this:THIS, TYPE):
             *             (RESULT|IThenable.<RESULT>|Thenable))=} opt_onFulfilled A
             *     function that will be invoked with the fulfillment value if the Promise
             *     is fullfilled.
             * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will
             *     be invoked with the rejection reason if the Promise is rejected.
             * @param {THIS=} opt_context An optional context object that will be the
             *     execution context for the callbacks. By default, functions are executed
             *     with the default this.
             * @return {!goog.Promise.<RESULT>} A new Promise that will receive the result
             *     of the fulfillment or rejection callback.
             * @template RESULT,THIS
             */
            then<RESULT,THIS>(opt_onFulfilled?: { (_0: TYPE): RESULT|IThenable<RESULT>|Thenable<any> }, opt_onRejected?: { (_0: any): any }, opt_context?: THIS): goog.Promise<RESULT>;
    } 
    

    interface Resolver<TYPE> {
    }
}
