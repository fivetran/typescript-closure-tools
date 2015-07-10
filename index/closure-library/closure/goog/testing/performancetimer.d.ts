/// <reference path="../../../globals.d.ts" />
/// <reference path="../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />

declare module goog.testing {

    class PerformanceTimer extends PerformanceTimer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class PerformanceTimer__Class  { 
    
            /**
             * Creates a performance timer that runs test functions a number of times to
             * generate timing samples, and provides performance statistics (minimum,
             * maximum, average, and standard deviation).
             * @param {number=} opt_numSamples Number of times to run the test function;
             *     defaults to 10.
             * @param {number=} opt_timeoutInterval Number of milliseconds after which the
             *     test is to be aborted; defaults to 5 seconds (5,000ms).
             * @constructor
             */
            constructor(opt_numSamples?: number, opt_timeoutInterval?: number);
    
            /**
             * @return {number} The number of times the test function will be run.
             */
            getNumSamples(): number;
    
            /**
             * Sets the number of times the test function will be run.
             * @param {number} numSamples Number of times to run the test function.
             */
            setNumSamples(numSamples: number): void;
    
            /**
             * @return {number} The number of milliseconds after which the test times out.
             */
            getTimeoutInterval(): number;
    
            /**
             * Sets the number of milliseconds after which the test times out.
             * @param {number} timeoutInterval Timeout interval in ms.
             */
            setTimeoutInterval(timeoutInterval: number): void;
    
            /**
             * Sets whether to ignore the smallest and the largest values when computing
             * stats.
             * @param {boolean} discard Whether to discard outlier values.
             */
            setDiscardOutliers(discard: boolean): void;
    
            /**
             * @return {boolean} Whether outlier values are discarded prior to computing
             *     stats.
             */
            isDiscardOutliers(): boolean;
    
            /**
             * Executes the test function the required number of times (or until the
             * test run exceeds the timeout interval, whichever comes first).  Returns
             * an object containing the following:
             * <pre>
             *   {
             *     'average': average execution time (ms)
             *     'count': number of executions (may be fewer than expected due to timeout)
             *     'maximum': longest execution time (ms)
             *     'minimum': shortest execution time (ms)
             *     'standardDeviation': sample standard deviation (ms)
             *     'total': total execution time (ms)
             *   }
             * </pre>
             *
             * @param {Function} testFn Test function whose performance is to
             *     be measured.
             * @return {!Object} Object containing performance stats.
             */
            run(testFn: Function): Object;
    
            /**
             * Executes the test function of the specified task as described in
             * {@code run}. In addition, if specified, the set up and tear down functions of
             * the task are invoked before and after each invocation of the test function.
             * @see goog.testing.PerformanceTimer#run
             * @param {goog.testing.PerformanceTimer.Task} task A task describing the test
             *     function to invoke.
             * @return {!Object} Object containing performance stats.
             */
            runTask(task: goog.testing.PerformanceTimer.Task): Object;
    
            /**
             * Executes the test function of the specified task asynchronously. The test
             * function is expected to take a callback as input and has to call it to signal
             * that it's done. In addition, if specified, the setUp and tearDown functions
             * of the task are invoked before and after each invocation of the test
             * function. Note that setUp/tearDown functions take a callback as input and
             * must call this callback when they are done.
             * @see goog.testing.PerformanceTimer#run
             * @param {goog.testing.PerformanceTimer.Task} task A task describing the test
             *     function to invoke.
             * @return {!goog.async.Deferred} The deferred result, eventually an object
             *     containing performance stats.
             */
            runAsyncTask(task: goog.testing.PerformanceTimer.Task): goog.async.Deferred<any>;
    } 
    
}

declare module goog.testing.PerformanceTimer {

    class Task extends Task__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Task__Class  { 
    
            /**
             * A task for the performance timer to measure. Callers can specify optional
             * setUp and tearDown methods to control state before and after each run of the
             * test function.
             * @param {goog.testing.PerformanceTimer.TestFunction} test Test function whose
             *     performance is to be measured.
             * @constructor
             * @final
             */
            constructor(test: goog.testing.PerformanceTimer.TestFunction);
    
            /**
             * @return {goog.testing.PerformanceTimer.TestFunction} The test function to
             *     time.
             */
            getTest(): goog.testing.PerformanceTimer.TestFunction;
    
            /**
             * Specifies a set up function to be invoked before each invocation of the test
             * function.
             * @param {goog.testing.PerformanceTimer.TestFunction} setUp The set up
             *     function.
             * @return {!goog.testing.PerformanceTimer.Task} This task.
             */
            withSetUp(setUp: goog.testing.PerformanceTimer.TestFunction): goog.testing.PerformanceTimer.Task;
    
            /**
             * @return {goog.testing.PerformanceTimer.TestFunction} The set up function or
             *     the default no-op function if none was specified.
             */
            getSetUp(): goog.testing.PerformanceTimer.TestFunction;
    
            /**
             * Specifies a tear down function to be invoked after each invocation of the
             * test function.
             * @param {goog.testing.PerformanceTimer.TestFunction} tearDown The tear down
             *     function.
             * @return {!goog.testing.PerformanceTimer.Task} This task.
             */
            withTearDown(tearDown: goog.testing.PerformanceTimer.TestFunction): goog.testing.PerformanceTimer.Task;
    
            /**
             * @return {goog.testing.PerformanceTimer.TestFunction} The tear down function
             *     or the default no-op function if none was specified.
             */
            getTearDown(): goog.testing.PerformanceTimer.TestFunction;
    } 
    

    /**
     * Creates a performance timer results object by analyzing a given array of
     * sample timings.
     * @param {Array.<number>} samples The samples to analyze.
     * @return {!Object} Object containing performance stats.
     */
    function createResults(samples: number[]): Object;

    /**
     * A test function whose performance should be measured or a setUp/tearDown
     * function. It may optionally return a deferred object. If it does so, the
     * test harness will assume the function is asynchronous and it must signal
     * that it's done by setting an (empty) result on the deferred object. If the
     * function doesn't return anything, the test harness will assume it's
     * synchronous.
     * @typedef {function():(goog.async.Deferred|undefined)}
     */
    interface TestFunction {
        (): goog.async.Deferred<any>|any /*undefined*/
    }
}
