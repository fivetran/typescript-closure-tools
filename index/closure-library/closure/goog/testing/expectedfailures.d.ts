/// <reference path="../../../globals.d.ts" />

declare module goog.testing {

    class ExpectedFailures extends ExpectedFailures__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ExpectedFailures__Class  { 
    
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
