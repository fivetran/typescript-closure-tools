/// <reference path="../../../globals.d.ts" />
/// <reference path="./performancetimer.d.ts" />

declare module goog.testing {

    class PerformanceTable extends PerformanceTable__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class PerformanceTable__Class  { 
    
            /**
             * A UI widget that runs performance tests and displays the results.
             * @param {Element} root The element where the table should be attached.
             * @param {goog.testing.PerformanceTimer=} opt_timer A timer to use for
             *     executing functions and profiling them.
             * @param {number=} opt_precision Number of digits of precision to include in
             *     results.  Defaults to 0.
             * @constructor
             * @final
             */
            constructor(root: Element, opt_timer?: goog.testing.PerformanceTimer, opt_precision?: number);
    
            /**
             * @return {goog.testing.PerformanceTimer} The timer being used.
             */
            getTimer(): goog.testing.PerformanceTimer;
    
            /**
             * Run the given function with the performance timer, and show the results.
             * @param {Function} fn The function to run.
             * @param {string=} opt_desc A description to associate with this run.
             */
            run(fn: Function, opt_desc?: string): void;
    
            /**
             * Run the given task with the performance timer, and show the results.
             * @param {goog.testing.PerformanceTimer.Task} task The performance timer task
             *     to run.
             * @param {string=} opt_desc A description to associate with this run.
             */
            runTask(task: goog.testing.PerformanceTimer.Task, opt_desc?: string): void;
    
            /**
             * Record a performance timer results object to the performance table. See
             * {@code goog.testing.PerformanceTimer} for details of the format of this
             * object.
             * @param {Object} results The performance timer results object.
             * @param {string=} opt_desc A description to associate with these results.
             */
            recordResults(results: Object, opt_desc?: string): void;
    
            /**
             * Report an error in the table.
             * @param {*} reason The reason for the error.
             */
            reportError(reason: any): void;
    } 
    
}
