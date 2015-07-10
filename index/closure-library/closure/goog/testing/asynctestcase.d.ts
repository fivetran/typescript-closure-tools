/// <reference path="../../../globals.d.ts" />
/// <reference path="./testcase.d.ts" />

declare module goog.testing {

    class AsyncTestCase extends AsyncTestCase__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class AsyncTestCase__Class extends goog.testing.TestCase__Class  { 
    
            /**
             * A test case that is capable of running tests the contain asynchronous logic.
             * @param {string=} opt_name A descriptive name for the test case.
             * @extends {goog.testing.TestCase}
             * @constructor
             */
            constructor(opt_name?: string);
    
            /**
             * How long to wait for a single step of a test to complete in milliseconds.
             * A step starts when a call to waitForAsync() is made.
             * @type {number}
             */
            stepTimeout: number;
    
            /**
             * How long to wait after a failed test before moving onto the next one.
             * The purpose of this is to allow any pending async callbacks from the failing
             * test to finish up and not cause the next test to fail.
             * @type {number}
             */
            timeToSleepAfterFailure: number;
    
            /**
             * The currently active test.
             * @type {goog.testing.TestCase.Test|undefined}
             * @protected
             */
            activeTest: goog.testing.TestCase.Test|any /*undefined*/;
    
            /**
             * The current step name.
             * @return {!string} Step name.
             * @protected
             */
            getCurrentStepName(): string;
    
            /**
             * Informs the testcase not to continue to the next step in the test cycle
             * until continueTesting is called.
             * @param {string=} opt_name A description of what we are waiting for.
             */
            waitForAsync(opt_name?: string): void;
    
            /**
             * Continue with the next step in the test cycle.
             */
            continueTesting(): void;
    
            /**
             * Informs the testcase not to continue to the next step in the test cycle
             * until signal is called the specified number of times. Within a test, this
             * function behaves additively if called multiple times; the number of signals
             * to wait for will be the sum of all expected number of signals this function
             * was called with.
             * @param {number} times The number of signals to receive before
             *    continuing testing.
             * @param {string=} opt_name A description of what we are waiting for.
             */
            waitForSignals(times: number, opt_name?: string): void;
    
            /**
             * Signals once to continue with the test. If this is the last signal that the
             * test was waiting on, call continueTesting.
             */
            signal(): void;
    
            /**
             * Handles an exception thrown by a test.
             * @param {*=} opt_e The exception object associated with the failure
             *     or a string.
             * @throws Always throws a ControlBreakingException.
             */
            doAsyncError(opt_e?: any): void;
    
            /**
             * Enables verbose logging of what is happening inside of the AsyncTestCase.
             */
            enableDebugLogging(): void;
    } 
    
}

declare module goog.testing.AsyncTestCase {

    class ControlBreakingException extends ControlBreakingException__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ControlBreakingException__Class  { 
    
            /**
             * An exception class used solely for control flow.
             * @param {string=} opt_message Error message.
             * @constructor
             * @final
             */
            constructor(opt_message?: string);
    
            /**
             * The exception message.
             * @type {string}
             */
            message: string;
    
            /**
             * Marks this object as a ControlBreakingException
             * @type {boolean}
             */
            isControlBreakingException: boolean;
    } 
    

    /**
     * Represents result of top stack function call.
     * @typedef {{controlBreakingExceptionThrown: boolean, message: string}}
     * @private
     */
    interface TopStackFuncResult_ {
        controlBreakingExceptionThrown: boolean;
        message: string
    }

    /**
     * Preferred way of creating an AsyncTestCase. Creates one and initializes it
     * with the G_testRunner.
     * @param {string=} opt_name A descriptive name for the test case.
     * @return {!goog.testing.AsyncTestCase} The created AsyncTestCase.
     */
    function createAndInstall(opt_name?: string): goog.testing.AsyncTestCase;
}

declare module goog.testing.AsyncTestCase.ControlBreakingException {

    /**
     * Return value for .toString().
     * @type {string}
     */
    var TO_STRING: string;
}
