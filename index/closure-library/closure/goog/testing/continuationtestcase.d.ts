/// <reference path="../../../globals.d.ts" />
/// <reference path="./testcase.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />

declare module goog.testing {

    class ContinuationTestCase extends ContinuationTestCase__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ContinuationTestCase__Class extends goog.testing.TestCase__Class  { 
    
            /**
             * Constructs a test case that supports tests with continuations. Test functions
             * may issue "wait" commands that suspend the test temporarily and continue once
             * the wait condition is met.
             *
             * @param {string=} opt_name Optional name for the test case.
             * @constructor
             * @extends {goog.testing.TestCase}
             * @final
             */
            constructor(opt_name?: string);
    
            /**
             * Creates a new test step that will run after a user-specified
             * timeout.  No guarantee is made on the execution order of the
             * continuation, except for those provided by each browser's
             * window.setTimeout. In particular, if two continuations are
             * registered at the same time with very small delta for their
             * durations, this class can not guarantee that the continuation with
             * the smaller duration will be executed first.
             * @param {Function} continuation The test function to invoke after the timeout.
             * @param {number=} opt_duration The length of the timeout in milliseconds.
             */
            waitForTimeout(continuation: Function, opt_duration?: number): void;
    
            /**
             * Creates a new test step that will run after an event has fired. If the event
             * does not fire within a reasonable timeout, the test will fail.
             * @param {goog.events.EventTarget|EventTarget} eventTarget The target that will
             *     fire the event.
             * @param {string} eventType The type of event to listen for.
             * @param {Function} continuation The test function to invoke after the event
             *     fires.
             */
            waitForEvent(eventTarget: goog.events.EventTarget|EventTarget, eventType: string, continuation: Function): void;
    
            /**
             * Creates a new test step which will run once a condition becomes true. The
             * condition will be polled at a user-specified interval until it becomes true,
             * or until a maximum timeout is reached.
             * @param {Function} condition The condition to poll.
             * @param {Function} continuation The test code to evaluate once the condition
             *     becomes true.
             * @param {number=} opt_interval The polling interval in milliseconds.
             * @param {number=} opt_maxTimeout The maximum amount of time to wait for the
             *     condition in milliseconds (defaults to 1000).
             */
            waitForCondition(condition: Function, continuation: Function, opt_interval?: number, opt_maxTimeout?: number): void;
    } 
    
}

declare module goog.testing.ContinuationTestCase {

    class Test extends Test__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Test__Class extends goog.testing.TestCase.Test__Class  { 
    
            /**
             * Creates a continuation test case, which consists of multiple test steps that
             * occur in several phases.
             *
             * The steps are distributed between setUp, test, and tearDown phases. During
             * the execution of each step, 0 or more steps may be added to the current
             * phase. Once all steps in a phase have completed, the next phase will be
             * executed.
             *
             * If any errors occur (such as an assertion failure), the setUp and Test phases
             * will be cancelled immediately. The tearDown phase will always start, but may
             * be cancelled as well if it raises an error.
             *
             * @param {goog.testing.TestCase.Test} setUp A setUp test method to run before
             *     the main test phase.
             * @param {goog.testing.TestCase.Test} test A test method to run.
             * @param {goog.testing.TestCase.Test} tearDown A tearDown test method to run
             *     after the test method completes or fails.
             * @constructor
             * @extends {goog.testing.TestCase.Test}
             * @final
             */
            constructor(setUp: goog.testing.TestCase.Test, test: goog.testing.TestCase.Test, tearDown: goog.testing.TestCase.Test);
    
            /**
             * @return {Error} The first error to be raised during the test run or null if
             *     no errors occurred.
             */
            getError(): Error;
    
            /**
             * Sets an error for the test so it can be reported. Only the first error set
             * during a test will be reported. Additional errors that occur in later test
             * phases will be discarded.
             * @param {Error} e An error.
             */
            setError(e: Error): void;
    
            /**
             * @return {Array.<goog.testing.TestCase.Test>} The current phase of steps
             *    being processed. Returns null if all steps have been completed.
             */
            getCurrentPhase(): goog.testing.TestCase.Test[];
    
            /**
             * Adds a new test step to the end of the current phase. The new step will wait
             * for a condition to be met before running, or will fail after a timeout.
             * @param {goog.testing.ContinuationTestCase.Step} step The test step to add.
             */
            addStep(step: goog.testing.ContinuationTestCase.Step): void;
    
            /**
             * Cancels all remaining steps in the current phase. Called after an error in
             * any phase occurs.
             */
            cancelCurrentPhase(): void;
    
            /**
             * Skips the rest of the setUp and test phases, but leaves the tearDown phase to
             * clean up.
             */
            cancelTestPhase(): void;
    } 
    

    class Step extends Step__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Step__Class extends goog.testing.TestCase.Test__Class  { 
    
            /**
             * Constructs a single step in a larger continuation test. Each step is similar
             * to a typical TestCase test, except it may wait for an event or timeout to
             * occur before running the test function.
             *
             * @param {string} name The test name.
             * @param {Function} ref The test function to run.
             * @param {Object=} opt_scope The object context to run the test in.
             * @constructor
             * @extends {goog.testing.TestCase.Test}
             * @final
             */
            constructor(name: string, ref: Function, opt_scope?: Object);
    
            /**
             * Whether the step is currently waiting for a condition to continue. All new
             * steps begin in wait state.
             * @type {boolean}
             */
            waiting: boolean;
    
            /**
             * Starts a timeout for this step. Each step may have only one timeout active at
             * a time.
             * @param {Function} func The function to call after the timeout.
             * @param {number} duration The number of milliseconds to wait before invoking
             *     the function.
             */
            setTimeout(func: Function, duration: number): void;
    
            /**
             * Clears the current timeout if it is active.
             */
            clearTimeout(): void;
    } 
    

    /**
     * The default maximum time to wait for a single test step in milliseconds.
     * @type {number}
     */
    var MAX_TIMEOUT: number;
}
