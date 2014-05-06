/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/testing/stacktrace.d.ts" />
/// <reference path="../../../closure/goog/testing/asserts.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/testing/testcase.d.ts" />
/// <reference path="../../../closure/goog/testing/asynctestcase.d.ts" />
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
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />

declare module goog.testing {

    /**
     * A test case that can asynchronously wait on a Deferred object.
     * @param {string=} opt_name A descriptive name for the test case.
     * @constructor
     * @extends {goog.testing.AsyncTestCase}
     */
    class DeferredTestCase extends goog.testing.AsyncTestCase {
        /**
         * A test case that can asynchronously wait on a Deferred object.
         * @param {string=} opt_name A descriptive name for the test case.
         * @constructor
         * @extends {goog.testing.AsyncTestCase}
         */
        constructor(opt_name?: string);
    
        /**
         * Handler for when the test produces an error.
         * @param {Error|string} err The error object.
         * @protected
         * @throws Always throws a ControlBreakingException.
         */
        onError(err: any /*Error|string*/): void;
    
        /**
         * Handler for when the test succeeds.
         * @protected
         */
        onSuccess(): void;
    
        /**
         * Adds a callback to update the wait message of this async test case. Using
         * this method generously also helps to document the test flow.
         * @param {string} msg The update wait status message.
         * @param {goog.async.Deferred} d The deferred object to add the waitForAsync
         *     callback to.
         * @see goog.testing.AsyncTestCase#waitForAsync
         */
        addWaitForAsync(msg: string, d: goog.async.Deferred<any>): void;
    
        /**
         * Wires up given Deferred object to the test case, then starts the
         * goog.async.Deferred object's callback.
         * @param {!string|goog.async.Deferred} a The wait status message or the
         *     deferred object to wait for.
         * @param {goog.async.Deferred=} opt_b The deferred object to wait for.
         */
        waitForDeferred(a: any /*string|goog.async.Deferred<any>*/, opt_b?: goog.async.Deferred<any>): void;
    }
}

declare module goog.testing.DeferredTestCase {

    /**
     * Preferred way of creating a DeferredTestCase. Creates one and initializes it
     * with the G_testRunner.
     * @param {string=} opt_name A descriptive name for the test case.
     * @return {!goog.testing.DeferredTestCase} The created DeferredTestCase.
     */
    function createAndInstall(opt_name?: string): goog.testing.DeferredTestCase;
}

