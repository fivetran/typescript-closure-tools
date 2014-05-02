// Generated Thu May  1 16:45:58 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/promise/resolver.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/testing/watchers.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/async/nexttick.d.ts" />
/// <reference path="../../goog/async/run.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />

declare module goog {

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
    function Promise(): void;
}

declare module goog.Promise {

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
    var CallbackEntry_: any /*missing*/;

    /**
     * @param {(TYPE|goog.Thenable.<TYPE>|Thenable)=} opt_value
     * @return {!goog.Promise.<TYPE>} A new Promise that is immediately resolved
     *     with the given value.
     * @template TYPE
     */
    function resolve<TYPE>(opt_value?: any /*TYPE|goog.Thenable<TYPE>|Thenable*/): goog.Promise<TYPE>;

    /**
     * @param {*=} opt_reason
     * @return {!goog.Promise} A new Promise that is immediately rejected with the
     *     given reason.
     */
    function reject(opt_reason?: any): goog.Promise;

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

    /**
     * Error used as a rejection reason for canceled Promises.
     *
     * @param {string=} opt_message
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class CancellationError extends goog.debug.Error {
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

