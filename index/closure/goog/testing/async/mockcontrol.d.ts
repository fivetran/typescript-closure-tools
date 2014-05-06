/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/testing/stacktrace.d.ts" />
/// <reference path="../../../../closure/goog/testing/asserts.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/testing/mockmatchers.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />

declare module goog.testing.async {

    /**
     * Provides asynchronous mocks and assertions controlled by a parent
     * MockControl.
     *
     * @param {goog.testing.MockControl} mockControl The parent MockControl.
     * @constructor
     * @final
     */
    class MockControl {
        /**
         * Provides asynchronous mocks and assertions controlled by a parent
         * MockControl.
         *
         * @param {goog.testing.MockControl} mockControl The parent MockControl.
         * @constructor
         * @final
         */
        constructor(mockControl: goog.testing.MockControl);
    
        /**
         * Returns a function that will assert that it will be called, and run the given
         * callback when it is.
         *
         * @param {string} name The name of the callback mock.
         * @param {function(...[*]) : *} callback The wrapped callback. This will be
         *     called when the returned function is called.
         * @param {Object=} opt_selfObj The object which this should point to when the
         *     callback is run.
         * @return {!Function} The mock callback.
         * @suppress {missingProperties} Mocks do not fit in the type system well.
         */
        createCallbackMock(name: string, callback: (_0: any[][]) => any, opt_selfObj?: Object): Function;
    
        /**
         * Returns a function that will assert that its arguments are equal to the
         * arguments given to asyncAssertEquals. In addition, the function also asserts
         * that it will be called.
         *
         * @param {string} message A message to print if the arguments are wrong.
         * @param {...*} var_args The arguments to assert.
         * @return {function(...[*]) : void} The mock callback.
         */
        asyncAssertEquals(message: string, ...var_args: any[]): (_0: any[][]) => void;
    
        /**
         * Asserts that a deferred object will have an error and call its errback
         * function.
         * @param {goog.async.Deferred} deferred The deferred object.
         * @param {function() : void} fn A function wrapping the code in which the error
         *     will occur.
         */
        assertDeferredError(deferred: goog.async.Deferred<any>, fn: () => void): void;
    
        /**
         * Asserts that a deferred object will call its callback with the given value.
         *
         * @param {string} message A message to print if the arguments are wrong.
         * @param {goog.async.Deferred|*} expected The expected value. If this is a
         *     deferred object, then the expected value is the deferred value.
         * @param {goog.async.Deferred|*} actual The actual value. If this is a deferred
         *     object, then the actual value is the deferred value. Either this or
         *     'expected' must be deferred.
         */
        assertDeferredEquals(message: string, expected: any /*goog.async.Deferred<any>|any*/, actual: any /*goog.async.Deferred<any>|any*/): void;
    }
}

