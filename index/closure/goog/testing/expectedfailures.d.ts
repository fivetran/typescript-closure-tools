/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/testing/stacktrace.d.ts" />
/// <reference path="../../../closure/goog/testing/asserts.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/debug/relativetimeprovider.d.ts" />
/// <reference path="../../../closure/goog/debug/formatter.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/debug/divconsole.d.ts" />
/// <reference path="../../../closure/goog/testing/testcase.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />

declare module goog.testing {

    /**
     * Helper class for allowing some unit tests to fail, particularly designed to
     * mark tests that should be fixed on a given browser.
     *
     * <pre>
     * var expectedFailures = new goog.testing.ExpectedFailures();
     *
     * function tearDown() {
     *   expectedFailures.handleTearDown();
     * }
     *
     * function testSomethingThatBreaksInWebKit() {
     *   expectedFailures.expectFailureFor(goog.userAgent.WEBKIT);
     *
     *   try {
     *     ...
     *     assert(somethingThatFailsInWebKit);
     *     ...
     *   } catch (e) {
     *     expectedFailures.handleException(e);
     *   }
     * }
     * </pre>
     *
     * @constructor
     * @final
     */
    class ExpectedFailures {
        /**
         * Helper class for allowing some unit tests to fail, particularly designed to
         * mark tests that should be fixed on a given browser.
         *
         * <pre>
         * var expectedFailures = new goog.testing.ExpectedFailures();
         *
         * function tearDown() {
         *   expectedFailures.handleTearDown();
         * }
         *
         * function testSomethingThatBreaksInWebKit() {
         *   expectedFailures.expectFailureFor(goog.userAgent.WEBKIT);
         *
         *   try {
         *     ...
         *     assert(somethingThatFailsInWebKit);
         *     ...
         *   } catch (e) {
         *     expectedFailures.handleException(e);
         *   }
         * }
         * </pre>
         *
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Register to expect failure for the given condition.  Multiple calls to this
         * function act as a boolean OR.  The first applicable message will be used.
         * @param {boolean} condition Whether to expect failure.
         * @param {string=} opt_message Descriptive message of this expected failure.
         */
        expectFailureFor(condition: boolean, opt_message?: string): void;
    
        /**
         * Determines if the given exception was expected.
         * @param {Object} ex The exception to check.
         * @return {boolean} Whether the exception was expected.
         */
        isExceptionExpected(ex: Object): boolean;
    
        /**
         * Handle an exception, suppressing it if it is a unit test failure that we
         * expected.
         * @param {Error} ex The exception to handle.
         */
        handleException(ex: Error): void;
    
        /**
         * Run the given function, catching any expected failures.
         * @param {Function} func The function to run.
         * @param {boolean=} opt_lenient Whether to ignore if the expected failures
         *     didn't occur.  In this case a warning will be logged in handleTearDown.
         */
        run(func: Function, opt_lenient?: boolean): void;
    
        /**
         * Handle the tearDown phase of a test, alerting the user if an expected test
         * was not suppressed.
         */
        handleTearDown(): void;
    }
}

