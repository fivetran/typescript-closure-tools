/// <reference path="../../../globals.d.ts" />

declare module goog.testing {

    class TestCase extends TestCase.__Class { }
    module TestCase {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * A class representing a JsUnit test case.  A TestCase is made up of a number
             * of test functions which can be run.  Individual test cases can override the
             * following functions to set up their test environment:
             *   - runTests - completely override the test's runner
             *   - setUpPage - called before any of the test functions are run
             *   - tearDownPage - called after all tests are finished
             *   - setUp - called before each of the test functions
             *   - tearDown - called after each of the test functions
             *   - shouldRunTests - called before a test run, all tests are skipped if it
             *                      returns false.  Can be used to disable tests on browsers
             *                      where they aren't expected to pass.
             *
             * Use {@link #autoDiscoverTests}
             *
             * @param {string=} opt_name The name of the test case, defaults to
             *     'Untitled Test Case'.
             * @constructor
             */
            constructor(opt_name?: string);
    
            /**
             * @return {string} The name of the test.
             */
            getName(): string;
    
            /**
             * The order to run the auto-discovered tests in.
             * @type {string}
             */
            order: string;
    
            /**
             * Exception object that was detected before a test runs.
             * @type {*}
             * @protected
             */
            exceptionBeforeTest: any;
    
            /**
             * Whether the test case has ever tried to execute.
             * @type {boolean}
             */
            started: boolean;
    
            /**
             * Whether the test case is running.
             * @type {boolean}
             */
            running: boolean;
    
            /**
             * Adds a new test to the test case.
             * @param {goog.testing.TestCase.Test} test The test to add.
             */
            add(test: goog.testing.TestCase.Test): void;
    
            /**
             * Creates and adds a new test.
             *
             * Convenience function to make syntax less awkward when not using automatic
             * test discovery.
             *
             * @param {string} name The test name.
             * @param {!Function} ref Reference to the test function.
             * @param {!Object=} opt_scope Optional scope that the test function should be
             *     called in.
             */
            addNewTest(name: string, ref: Function, opt_scope?: Object): void;
    
            /**
             * Sets the tests.
             * @param {!Array.<goog.testing.TestCase.Test>} tests A new test array.
             * @protected
             */
            setTests(tests: goog.testing.TestCase.Test[]): void;
    
            /**
             * Gets the tests.
             * @return {!Array.<goog.testing.TestCase.Test>} The test array.
             * @protected
             */
            getTests(): goog.testing.TestCase.Test[];
    
            /**
             * Returns the number of tests contained in the test case.
             * @return {number} The number of tests.
             */
            getCount(): number;
    
            /**
             * Returns the number of tests actually run in the test case, i.e. subtracting
             * any which are skipped.
             * @return {number} The number of un-ignored tests.
             */
            getActuallyRunCount(): number;
    
            /**
             * Returns the current test and increments the pointer.
             * @return {goog.testing.TestCase.Test} The current test case.
             */
            next(): goog.testing.TestCase.Test;
    
            /**
             * Resets the test case pointer, so that next returns the first test.
             */
            reset(): void;
    
            /**
             * Sets the callback function that should be executed when the tests have
             * completed.
             * @param {Function} fn The callback function.
             */
            setCompletedCallback(fn: Function): void;
    
            /**
             * Can be overridden in test classes to indicate whether the tests in a case
             * should be run in that particular situation.  For example, this could be used
             * to stop tests running in a particular browser, where browser support for
             * the class under test was absent.
             * @return {boolean} Whether any of the tests in the case should be run.
             */
            shouldRunTests(): boolean;
    
            /**
             * Executes each of the tests.
             */
            execute(): void;
    
            /**
             * Finalizes the test case, called when the tests have finished executing.
             */
            finalize(): void;
    
            /**
             * Saves a message to the result set.
             * @param {string} message The message to save.
             */
            saveMessage(message: string): void;
    
            /**
             * @return {boolean} Whether the test case is running inside the multi test
             *     runner.
             */
            isInsideMultiTestRunner(): boolean;
    
            /**
             * Logs an object to the console, if available.
             * @param {*} val The value to log. Will be ToString'd.
             */
            log(val: any): void;
    
            /**
             * @return {boolean} Whether the test was a success.
             */
            isSuccess(): boolean;
    
            /**
             * Returns a string detailing the results from the test.
             * @param {boolean=} opt_verbose If true results will include data about all
             *     tests, not just what failed.
             * @return {string} The results from the test.
             */
            getReport(opt_verbose?: boolean): string;
    
            /**
             * Returns the amount of time it took for the test to run.
             * @return {number} The run time, in milliseconds.
             */
            getRunTime(): number;
    
            /**
             * Returns the number of script files that were loaded in order to run the test.
             * @return {number} The number of script files.
             */
            getNumFilesLoaded(): number;
    
            /**
             * Returns the test results object: a map from test names to a list of test
             * failures (if any exist).
             * @return {!Object.<string, !Array.<string>>} Tests results object.
             */
            getTestResults(): { [key: string]: string[] };
    
            /**
             * Executes each of the tests.
             * Overridable by the individual test case.  This allows test cases to defer
             * when the test is actually started.  If overridden, finalize must be called
             * by the test to indicate it has finished.
             */
            runTests(): void;
    
            /**
             * Gets the object with all globals.
             * @param {string=} opt_prefix An optional prefix. If specified, only get things
             *     under this prefix. Note that the prefix is only honored in IE, since it
             *     supports the RuntimeObject:
             *     http://msdn.microsoft.com/en-us/library/ff521039%28VS.85%29.aspx
             *     TODO: Fix this method to honor the prefix in all browsers.
             * @return {Object} An object with all globals starting with the prefix.
             */
            getGlobals(opt_prefix?: string): Object;
    
            /**
             * Gets called before any tests are executed.  Can be overridden to set up the
             * environment for the whole test case.
             */
            setUpPage(): void;
    
            /**
             * Gets called after all tests have been executed.  Can be overridden to tear
             * down the entire test case.
             */
            tearDownPage(): void;
    
            /**
             * Gets called before every goog.testing.TestCase.Test is been executed. Can be
             * overridden to add set up functionality to each test.
             */
            setUp(): void;
    
            /**
             * Gets called after every goog.testing.TestCase.Test has been executed. Can be
             * overriden to add tear down functionality to each test.
             */
            tearDown(): void;
    
            /**
             * @return {string} The function name prefix used to auto-discover tests.
             * @protected
             */
            getAutoDiscoveryPrefix(): string;
    
            /**
             * @return {number} Time since the last batch of tests was started.
             * @protected
             */
            getBatchTime(): number;
    
            /**
             * @param {number} batchTime Time since the last batch of tests was started.
             * @protected
             */
            setBatchTime(batchTime: number): void;
    
            /**
             * Creates a {@code goog.testing.TestCase.Test} from an auto-discovered
             *     function.
             * @param {string} name The name of the function.
             * @param {function() : void} ref The auto-discovered function.
             * @return {!goog.testing.TestCase.Test} The newly created test.
             * @protected
             */
            createTestFromAutoDiscoveredFunction(name: string, ref: () => void): goog.testing.TestCase.Test;
    
            /**
             * Adds any functions defined in the global scope that are prefixed with "test"
             * to the test case.  Also overrides setUp, tearDown, setUpPage, tearDownPage
             * and runTests if they are defined.
             */
            autoDiscoverTests(): void;
    
            /**
             * Checks to see if the test should be marked as failed before it is run.
             *
             * If there was an error in setUpPage, we treat that as a failure for all tests
             * and mark them all as having failed.
             *
             * @param {goog.testing.TestCase.Test} testCase The current test case.
             * @return {boolean} Whether the test was marked as failed.
             * @protected
             */
            maybeFailTestEarly(testCase: goog.testing.TestCase.Test): boolean;
    
            /**
             * Cycles through the tests, breaking out using a setTimeout if the execution
             * time has execeeded {@link #maxRunTime}.
             */
            cycleTests(): void;
    
            /**
             * Calls a function after a delay, using the protected timeout.
             * @param {Function} fn The function to call.
             * @param {number} time Delay in milliseconds.
             * @return {number} The timeout id.
             * @protected
             */
            timeout(fn: Function, time: number): number;
    
            /**
             * Clears a timeout created by {@code this.timeout()}.
             * @param {number} id A timeout id.
             * @protected
             */
            clearTimeout(id: number): void;
    
            /**
             * @return {number} The current time in milliseconds, don't use goog.now as some
             *     tests override it.
             * @protected
             */
            now(): number;
    
            /**
             * Handles a test that passed.
             * @param {goog.testing.TestCase.Test} test The test that passed.
             * @protected
             */
            doSuccess(test: goog.testing.TestCase.Test): void;
    
            /**
             * Handles a test that failed.
             * @param {goog.testing.TestCase.Test} test The test that failed.
             * @param {*=} opt_e The exception object associated with the
             *     failure or a string.
             * @protected
             */
            doError(test: goog.testing.TestCase.Test, opt_e?: any): void;
    
            /**
             * @param {string} name Failed test name.
             * @param {*=} opt_e The exception object associated with the
             *     failure or a string.
             * @return {!goog.testing.TestCase.Error} Error object.
             */
            logError(name: string, opt_e?: any): goog.testing.TestCase.Error;
        }
    }
}

declare module goog.testing.TestCase {

    class Test extends Test.__Class { }
    module Test {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * A class representing a single test function.
             * @param {string} name The test name.
             * @param {Function} ref Reference to the test function.
             * @param {Object=} opt_scope Optional scope that the test function should be
             *     called in.
             * @constructor
             */
            constructor(name: string, ref: Function, opt_scope?: Object);
    
            /**
             * Executes the test function.
             */
            execute(): void;
        }
    }

    class Result extends Result.__Class { }
    module Result {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * A class for representing test results.  A bag of public properties.
             * @param {goog.testing.TestCase} testCase The test case that owns this result.
             * @constructor
             * @final
             */
            constructor(testCase: goog.testing.TestCase);
    
            /**
             * @return {boolean} Whether the test was successful.
             */
            isSuccess(): boolean;
    
            /**
             * @return {string} A summary of the tests, including total number of tests that
             *     passed, failed, and the time taken.
             */
            getSummary(): string;
        }
    }

    class Error extends Error.__Class { }
    module Error {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * A class representing an error thrown by the test
             * @param {string} source The name of the test which threw the error.
             * @param {string} message The error message.
             * @param {string=} opt_stack A string showing the execution stack.
             * @constructor
             * @final
             */
            constructor(source: string, message: string, opt_stack?: string);
        }
    }

    /**
     * The order to run the auto-discovered tests.
     * @enum {string}
     */
    enum Order { NATURAL, RANDOM, SORTED } 

    /**
     * The maximum amount of time that the test can run before we force it to be
     * async.  This prevents the test runner from blocking the browser and
     * potentially hurting the Selenium test harness.
     * @type {number}
     */
    var maxRunTime: number;

    /**
     * TODO(user) replace this with prototype.currentTest.
     * Name of the current test that is running, or null if none is running.
     * @type {?string}
     */
    var currentTestName: string;

    /**
     * Avoid a dependency on goog.userAgent and keep our own reference of whether
     * the browser is IE.
     * @type {boolean}
     */
    var IS_IE: boolean;

    /**
     * Gets the object with all globals.
     * @param {string=} opt_prefix An optional prefix. If specified, only get things
     *     under this prefix. Note that the prefix is only honored in IE, since it
     *     supports the RuntimeObject:
     *     http://msdn.microsoft.com/en-us/library/ff521039%28VS.85%29.aspx
     *     TODO: Fix this method to honor the prefix in all browsers.
     * @return {Object} An object with all globals starting with the prefix.
     */
    function getGlobals(opt_prefix?: string): Object;

    /**
     * Initializes the given test case with the global test runner 'G_testRunner'.
     * @param {goog.testing.TestCase} testCase The test case to install.
     */
    function initializeTestRunner(testCase: goog.testing.TestCase): void;
}
