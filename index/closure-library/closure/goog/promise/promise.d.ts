/// <reference path="../../../globals.d.ts" />
/// <reference path="./thenable.d.ts" />
/// <reference path="../debug/error.d.ts" />
/// <reference path="./resolver.d.ts" />

declare module goog {

    class Promise<TYPE> extends Promise.__Class<TYPE> { }
    module Promise {
        class __Class<TYPE> implements goog.Thenable<TYPE> {

            /**
             * Promises provide a result that may be resolved asynchronously. A Promise may
             * be resolved by being fulfilled or rejected with a value, which will be known
             * as the fulfillment value or the rejection reason. Whether fulfilled or
             * rejected, the Promise result is immutable once it is set.
             *
             * Promises may represent results of any type, including undefined. Rejection
             * reasons are typically Errors, but may also be of any type. Closure Promises
             * allow for optional type annotations that enforce that fulfillment values are
             * of the appropriate types at compile time.
             *
             * The result of a Promise is accessible by calling {@code then} and registering
             * {@code onFulfilled} and {@code onRejected} callbacks. Once the Promise
             * resolves, the relevant callbacks are invoked with the fulfillment value or
             * rejection reason as argument. Callbacks are always invoked in the order they
             * were registered, even when additional {@code then} calls are made from inside
             * another callback. A callback is always run asynchronously sometime after the
             * scope containing the registering {@code then} invocation has returned.
             *
             * If a Promise is resolved with another Promise, the first Promise will block
             * until the second is resolved, and then assumes the same result as the second
             * Promise. This allows Promises to depend on the results of other Promises,
             * linking together multiple asynchronous operations.
             *
             * This implementation is compatible with the Promises/A+ specification and
             * passes that specification's conformance test suite. A Closure Promise may be
             * resolved with a Promise instance (or sufficiently compatible Promise-like
             * object) created by other Promise implementations. From the specification,
             * Promise-like objects are known as "Thenables".
             *
             * @see http://promisesaplus.com/
             *
             * @param {function(
             *             this:RESOLVER_CONTEXT,
             *             function((TYPE|IThenable.<TYPE>|Thenable)),
             *             function(*)): void} resolver
             *     Initialization function that is invoked immediately with {@code resolve}
             *     and {@code reject} functions as arguments. The Promise is resolved or
             *     rejected with the first argument passed to either function.
             * @param {RESOLVER_CONTEXT=} opt_context An optional context for executing the
             *     resolver function. If unspecified, the resolver function will be executed
             *     in the default scope.
             * @constructor
             * @struct
             * @final
             * @implements {goog.Thenable.<TYPE>}
             * @template TYPE,RESOLVER_CONTEXT
             */
            constructor(resolver: (_0: (_0: TYPE) => any /*missing*/, _1: (_0: any) => any /*missing*/) => void, opt_context?: any);
            /**
             * Promises provide a result that may be resolved asynchronously. A Promise may
             * be resolved by being fulfilled or rejected with a value, which will be known
             * as the fulfillment value or the rejection reason. Whether fulfilled or
             * rejected, the Promise result is immutable once it is set.
             *
             * Promises may represent results of any type, including undefined. Rejection
             * reasons are typically Errors, but may also be of any type. Closure Promises
             * allow for optional type annotations that enforce that fulfillment values are
             * of the appropriate types at compile time.
             *
             * The result of a Promise is accessible by calling {@code then} and registering
             * {@code onFulfilled} and {@code onRejected} callbacks. Once the Promise
             * resolves, the relevant callbacks are invoked with the fulfillment value or
             * rejection reason as argument. Callbacks are always invoked in the order they
             * were registered, even when additional {@code then} calls are made from inside
             * another callback. A callback is always run asynchronously sometime after the
             * scope containing the registering {@code then} invocation has returned.
             *
             * If a Promise is resolved with another Promise, the first Promise will block
             * until the second is resolved, and then assumes the same result as the second
             * Promise. This allows Promises to depend on the results of other Promises,
             * linking together multiple asynchronous operations.
             *
             * This implementation is compatible with the Promises/A+ specification and
             * passes that specification's conformance test suite. A Closure Promise may be
             * resolved with a Promise instance (or sufficiently compatible Promise-like
             * object) created by other Promise implementations. From the specification,
             * Promise-like objects are known as "Thenables".
             *
             * @see http://promisesaplus.com/
             *
             * @param {function(
         *             this:RESOLVER_CONTEXT,
         *             function((TYPE|IThenable.<TYPE>|Thenable)),
         *             function(*)): void} resolver
             *     Initialization function that is invoked immediately with {@code resolve}
             *     and {@code reject} functions as arguments. The Promise is resolved or
             *     rejected with the first argument passed to either function.
             * @param {RESOLVER_CONTEXT=} opt_context An optional context for executing the
             *     resolver function. If unspecified, the resolver function will be executed
             *     in the default scope.
             * @constructor
             * @struct
             * @final
             * @implements {goog.Thenable.<TYPE>}
             * @template TYPE,RESOLVER_CONTEXT
             */
            constructor(resolver: (_0: (_0: IThenable<TYPE>) => any /*missing*/, _1: (_0: any) => any /*missing*/) => void, opt_context?: any);
            /**
             * Promises provide a result that may be resolved asynchronously. A Promise may
             * be resolved by being fulfilled or rejected with a value, which will be known
             * as the fulfillment value or the rejection reason. Whether fulfilled or
             * rejected, the Promise result is immutable once it is set.
             *
             * Promises may represent results of any type, including undefined. Rejection
             * reasons are typically Errors, but may also be of any type. Closure Promises
             * allow for optional type annotations that enforce that fulfillment values are
             * of the appropriate types at compile time.
             *
             * The result of a Promise is accessible by calling {@code then} and registering
             * {@code onFulfilled} and {@code onRejected} callbacks. Once the Promise
             * resolves, the relevant callbacks are invoked with the fulfillment value or
             * rejection reason as argument. Callbacks are always invoked in the order they
             * were registered, even when additional {@code then} calls are made from inside
             * another callback. A callback is always run asynchronously sometime after the
             * scope containing the registering {@code then} invocation has returned.
             *
             * If a Promise is resolved with another Promise, the first Promise will block
             * until the second is resolved, and then assumes the same result as the second
             * Promise. This allows Promises to depend on the results of other Promises,
             * linking together multiple asynchronous operations.
             *
             * This implementation is compatible with the Promises/A+ specification and
             * passes that specification's conformance test suite. A Closure Promise may be
             * resolved with a Promise instance (or sufficiently compatible Promise-like
             * object) created by other Promise implementations. From the specification,
             * Promise-like objects are known as "Thenables".
             *
             * @see http://promisesaplus.com/
             *
             * @param {function(
         *             this:RESOLVER_CONTEXT,
         *             function((TYPE|IThenable.<TYPE>|Thenable)),
         *             function(*)): void} resolver
             *     Initialization function that is invoked immediately with {@code resolve}
             *     and {@code reject} functions as arguments. The Promise is resolved or
             *     rejected with the first argument passed to either function.
             * @param {RESOLVER_CONTEXT=} opt_context An optional context for executing the
             *     resolver function. If unspecified, the resolver function will be executed
             *     in the default scope.
             * @constructor
             * @struct
             * @final
             * @implements {goog.Thenable.<TYPE>}
             * @template TYPE,RESOLVER_CONTEXT
             */
            constructor(resolver: (_0: (_0: Thenable<TYPE>) => any /*missing*/, _1: (_0: any) => any /*missing*/) => void, opt_context?: any);

            /**
             * Adds a callback that will be invoked whether the Promise is fulfilled or
             * rejected. The callback receives no argument, and no new child Promise is
             * created. This is useful for ensuring that cleanup takes place after certain
             * asynchronous operations. Callbacks added with {@code thenAlways} will be
             * executed in the same order with other calls to {@code then},
             * {@code thenAlways}, or {@code thenCatch}.
             *
             * Since it does not produce a new child Promise, cancellation propagation is
             * not prevented by adding callbacks with {@code thenAlways}. A Promise that has
             * a cleanup handler added with {@code thenAlways} will be canceled if all of
             * its children created by {@code then} (or {@code thenCatch}) are canceled.
             *
             * @param {function(this:THIS): void} onResolved A function that will be invoked
             *     when the Promise is resolved.
             * @param {THIS=} opt_context An optional context object that will be the
             *     execution context for the callbacks. By default, functions are executed
             *     in the global scope.
             * @return {!goog.Promise.<TYPE>} This Promise, for chaining additional calls.
             * @template THIS
             */
            thenAlways<THIS>(onResolved: () => void, opt_context?: THIS): goog.Promise<TYPE>;

            /**
             * Adds a callback that will be invoked only if the Promise is rejected. This
             * is equivalent to {@code then(null, onRejected)}.
             *
             * @param {!function(this:THIS, *): *} onRejected A function that will be
             *     invoked with the rejection reason if the Promise is rejected.
             * @param {THIS=} opt_context An optional context object that will be the
             *     execution context for the callbacks. By default, functions are executed
             *     in the global scope.
             * @return {!goog.Promise} A new Promise that will receive the result of the
             *     callback.
             * @template THIS
             */
            thenCatch<THIS>(onRejected: (_0: any) => any, opt_context?: THIS): goog.Promise<any>;

            /**
             * Cancels the Promise if it is still pending by rejecting it with a cancel
             * Error. No action is performed if the Promise is already resolved.
             *
             * All child Promises of the canceled Promise will be rejected with the same
             * cancel error, as with normal Promise rejection. If the Promise to be canceled
             * is the only child of a pending Promise, the parent Promise will also be
             * canceled. Cancellation may propagate upward through multiple generations.
             *
             * @param {string=} opt_message An optional debugging message for describing the
             *     cancellation reason.
             */
            cancel(opt_message?: string): void;

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
             * @param {?(function(*): *)=} opt_onRejected A function that will be invoked
             *     with the rejection reason if the Promise is rejected.
             * @param {THIS=} opt_context An optional context object that will be the
             *     execution context for the callbacks. By default, functions are executed
             *     with the default this.
             * @return {!goog.Promise.<RESULT>} A new Promise that will receive the result
             *     of the fulfillment or rejection callback.
             * @template RESULT,THIS
             */
            then<RESULT,THIS>(opt_onFulfilled?: (_0: TYPE) => RESULT, opt_onRejected?: (_0: any) => any, opt_context?: THIS): goog.Promise<RESULT>;
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
             * @param {?(function(*): *)=} opt_onRejected A function that will be invoked
             *     with the rejection reason if the Promise is rejected.
             * @param {THIS=} opt_context An optional context object that will be the
             *     execution context for the callbacks. By default, functions are executed
             *     with the default this.
             * @return {!goog.Promise.<RESULT>} A new Promise that will receive the result
             *     of the fulfillment or rejection callback.
             * @template RESULT,THIS
             */
            then<RESULT,THIS>(opt_onFulfilled?: (_0: TYPE) => IThenable<RESULT>, opt_onRejected?: (_0: any) => any, opt_context?: THIS): goog.Promise<RESULT>;
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
             * @param {?(function(*): *)=} opt_onRejected A function that will be invoked
             *     with the rejection reason if the Promise is rejected.
             * @param {THIS=} opt_context An optional context object that will be the
             *     execution context for the callbacks. By default, functions are executed
             *     with the default this.
             * @return {!goog.Promise.<RESULT>} A new Promise that will receive the result
             *     of the fulfillment or rejection callback.
             * @template RESULT,THIS
             */
            then<RESULT,THIS>(opt_onFulfilled?: (_0: TYPE) => Thenable<RESULT>, opt_onRejected?: (_0: any) => any, opt_context?: THIS): goog.Promise<RESULT>;
        }
    }
}

declare module goog.Promise {

    class CancellationError extends CancellationError.__Class { }
    module CancellationError {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.debug.Error.__Class {

            /**
             * Error used as a rejection reason for canceled Promises.
             *
             * @param {string=} opt_message
             * @constructor
             * @extends {goog.debug.Error}
             * @final
             */
            constructor(opt_message?: string);
        }
    }

    class Resolver_<TYPE> extends Resolver_.__Class<TYPE> { }
    module Resolver_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class<TYPE> implements goog.promise.Resolver<TYPE> {

            /**
             * Internal implementation of the resolver interface.
             *
             * @param {!goog.Promise.<TYPE>} promise
             * @param {function((TYPE|goog.Promise.<TYPE>|Thenable))} resolve
             * @param {function(*): void} reject
             * @implements {goog.promise.Resolver.<TYPE>}
             * @final @struct
             * @constructor
             * @private
             * @template TYPE
             */
            constructor(promise: goog.Promise<TYPE>, resolve: (_0: TYPE) => any /*missing*/, reject: (_0: any) => void);
            /**
             * Internal implementation of the resolver interface.
             *
             * @param {!goog.Promise.<TYPE>} promise
             * @param {function((TYPE|goog.Promise.<TYPE>|Thenable))} resolve
             * @param {function(*): void} reject
             * @implements {goog.promise.Resolver.<TYPE>}
             * @final @struct
             * @constructor
             * @private
             * @template TYPE
             */
            constructor(promise: goog.Promise<TYPE>, resolve: (_0: goog.Promise<TYPE>) => any /*missing*/, reject: (_0: any) => void);
            /**
             * Internal implementation of the resolver interface.
             *
             * @param {!goog.Promise.<TYPE>} promise
             * @param {function((TYPE|goog.Promise.<TYPE>|Thenable))} resolve
             * @param {function(*): void} reject
             * @implements {goog.promise.Resolver.<TYPE>}
             * @final @struct
             * @constructor
             * @private
             * @template TYPE
             */
            constructor(promise: goog.Promise<TYPE>, resolve: (_0: Thenable<TYPE>) => any /*missing*/, reject: (_0: any) => void);

            /**
             * The promise that created this resolver.
             * @const {!goog.Promise.<TYPE>}
             */
            promise: any /*missing*/;

            /**
             * Resolves this resolver with the specified value.
             * @const {function((TYPE|goog.Promise.<TYPE>|Thenable))}
             */
            resolve: any /*missing*/;

            /**
             * Rejects this resolver with the specified reason.
             * @const {function(*): void}
             */
            reject: any /*missing*/;
        }
    }

    /**
     * The possible internal states for a Promise. These states are not directly
     * observable to external callers.
     * @enum {number}
     * @private
     */
    enum State_ { PENDING, BLOCKED, FULFILLED, REJECTED }

    /**
     * Typedef for entries in the callback chain. Each call to {@code then},
     * {@code thenCatch}, or {@code thenAlways} creates an entry containing the
     * functions that may be invoked once the Promise is resolved.
     *
     * @typedef {{
     *   child: goog.Promise,
     *   onFulfilled: function(*),
     *   onRejected: function(*)
     * }}
     * @private
     */
    interface CallbackEntry_ {
        child: goog.Promise<any>;
        onFulfilled: (_0: any) => any /*missing*/;
        onRejected: (_0: any) => any /*missing*/
    }

    /**
     * @param {(TYPE|goog.Thenable.<TYPE>|Thenable)=} opt_value
     * @return {!goog.Promise.<TYPE>} A new Promise that is immediately resolved
     *     with the given value.
     * @template TYPE
     */
    function resolve<TYPE>(opt_value?: TYPE): goog.Promise<TYPE>;
    /**
     * @param {(TYPE|goog.Thenable.<TYPE>|Thenable)=} opt_value
     * @return {!goog.Promise.<TYPE>} A new Promise that is immediately resolved
     *     with the given value.
     * @template TYPE
     */
    function resolve<TYPE>(opt_value?: goog.Thenable<TYPE>): goog.Promise<TYPE>;

    /**
     * @param {*=} opt_reason
     * @return {!goog.Promise} A new Promise that is immediately rejected with the
     *     given reason.
     */
    function reject(opt_reason?: any): goog.Promise<any>;

    /**
     * @param {!Array.<!(goog.Thenable.<TYPE>|Thenable)>} promises
     * @return {!goog.Promise.<TYPE>} A Promise that receives the result of the
     *     first Promise (or Promise-like) input to complete.
     * @template TYPE
     */
    function race<TYPE>(promises: any /*goog.Thenable<TYPE>|Thenable*/[]): goog.Promise<TYPE>;

    /**
     * @param {!Array.<!(goog.Thenable.<TYPE>|Thenable)>} promises
     * @return {!goog.Promise.<!Array.<TYPE>>} A Promise that receives a list of
     *     every fulfilled value once every input Promise (or Promise-like) is
     *     successfully fulfilled, or is rejected by the first rejection result.
     * @template TYPE
     */
    function all<TYPE>(promises: any /*goog.Thenable<TYPE>|Thenable*/[]): goog.Promise<TYPE[]>;

    /**
     * @param {!Array.<!(goog.Thenable.<TYPE>|Thenable)>} promises
     * @return {!goog.Promise.<TYPE>} A Promise that receives the value of the first
     *     input to be fulfilled, or is rejected with a list of every rejection
     *     reason if all inputs are rejected.
     * @template TYPE
     */
    function firstFulfilled<TYPE>(promises: any /*goog.Thenable<TYPE>|Thenable*/[]): goog.Promise<TYPE>;

    /**
     * @return {!goog.promise.Resolver.<TYPE>} Resolver wrapping the promise and its
     *     resolve / reject functions. Resolving or rejecting the resolver
     *     resolves or rejects the promise.
     * @template TYPE
     */
    function withResolver<TYPE>(): goog.promise.Resolver<TYPE>;

    /**
     * Sets a handler that will be called with reasons from unhandled rejected
     * Promises. If the rejected Promise (or one of its descendants) has an
     * {@code onRejected} callback registered, the rejection will be considered
     * handled, and the rejection handler will not be called.
     *
     * By default, unhandled rejections are rethrown so that the error may be
     * captured by the developer console or a {@code window.onerror} handler.
     *
     * @param {function(*)} handler A function that will be called with reasons from
     *     rejected Promises. Defaults to {@code goog.async.throwException}.
     */
    function setUnhandledRejectionHandler(handler: (_0: any) => any /*missing*/): void;
}
