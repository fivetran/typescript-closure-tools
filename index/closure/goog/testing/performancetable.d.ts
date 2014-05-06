/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />
/// <reference path="../../../closure/goog/testing/performancetimer.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />

declare module goog.testing {

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
    class PerformanceTable {
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

