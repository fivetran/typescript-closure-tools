// Generated Wed Apr 30 16:39:15 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/async.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/graphics.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/log.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/promise.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/style.d.ts" />
/// <reference path="../goog/timer.d.ts" />
/// <reference path="../goog/ui.d.ts" />
/// <reference path="../goog/uri.d.ts" />
/// <reference path="../goog/useragent.d.ts" />
/// <reference path="../lib/closure-library/third_party/closure/goog/mochikit/async.d.ts" />

declare module 'goog.testing.asserts' {

    /**
     * @typedef {Array|NodeList|Arguments|{length: number}}
     */
    interface ArrayLike { /*any (any[]|NodeList|Arguments|{ length: number })*/ }

    /**
     * Runs a function in an environment where test failures are not logged. This is
     * useful for testing test code, where failures can be a normal part of a test.
     * @param {function() : void} fn Function to run without logging failures.
     */
    function callWithoutLogging(fn: () => void): void;

    /**
     * The return value of the equality predicate passed to findDifferences below,
     * in cases where the predicate can't test the input variables for equality.
     * @type {?string}
     */
    var EQUALITY_PREDICATE_CANT_PROCESS: string;

    /**
     * The return value of the equality predicate passed to findDifferences below,
     * in cases where the input vriables are equal.
     * @type {?string}
     */
    var EQUALITY_PREDICATE_VARS_ARE_EQUAL: string;

    /**
     * Determines if two items of any type match, and formulates an error message
     * if not.
     * @param {*} expected Expected argument to match.
     * @param {*} actual Argument as a result of performing the test.
     * @param {(function(string, *, *): ?string)=} opt_equalityPredicate An optional
     *     function that can be used to check equality of variables. It accepts 3
     *     arguments: type-of-variables, var1, var2 (in that order) and returns an
     *     error message if the variables are not equal,
     *     goog.testing.asserts.EQUALITY_PREDICATE_VARS_ARE_EQUAL if the variables
     *     are equal, or
     *     goog.testing.asserts.EQUALITY_PREDICATE_CANT_PROCESS if the predicate
     *     couldn't check the input variables. The function will be called only if
     *     the types of var1 and var2 are identical.
     * @return {?string} Null on success, error message on failure.
     */
    function findDifferences(expected: any, actual: any, opt_equalityPredicate?: any /*(_0: string, _1: any, _2: any) => string*/): string;

    /**
     * Raises a JsUnit exception with the given comment.
     * @param {string} comment A summary for the exception.
     * @param {string=} opt_message A description of the exception.
     */
    function raiseException(comment: string, opt_message?: string): void;
}

declare module 'goog.testing.AsyncTestCase.ControlBreakingException' {

    /**
     * Return value for .toString().
     * @type {string}
     */
    var TO_STRING: string;
}

declare module 'goog.testing.AsyncTestCase' {

    /**
     * Preferred way of creating an AsyncTestCase. Creates one and initializes it
     * with the G_testRunner.
     * @param {string=} opt_name A descriptive name for the test case.
     * @return {!goog.testing.AsyncTestCase} The created AsyncTestCase.
     */
    function createAndInstall(opt_name?: string): goog.testing.AsyncTestCase;

    /**
     * An exception class used solely for control flow.
     * @param {string=} opt_message Error message.
     * @constructor
     * @final
     */
    class ControlBreakingException {
        /**
         * An exception class used solely for control flow.
         * @param {string=} opt_message Error message.
         * @constructor
         * @final
         */
        constructor(opt_message?: string);
    
        /**
         * Marks this object as a ControlBreakingException
         * @type {boolean}
         */
        isControlBreakingException: boolean;
    
        /** @override */
        toString(): void;
    }
}

declare module 'window' {

    /**
     * Onload handler that runs the benchmarks.
     * @param {Event} e The event object.
     */
    function onload(e: Event): void;
}

declare module 'goog.testing.ContinuationTestCase' {

    /**
     * The default maximum time to wait for a single test step in milliseconds.
     * @type {number}
     */
    var MAX_TIMEOUT: number;

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
    class Test extends goog.testing.TestCase.Test {
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
    class Step extends goog.testing.TestCase.Test {
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
}

declare module 'goog.testing.DeferredTestCase' {

    /**
     * Preferred way of creating a DeferredTestCase. Creates one and initializes it
     * with the G_testRunner.
     * @param {string=} opt_name A descriptive name for the test case.
     * @return {!goog.testing.DeferredTestCase} The created DeferredTestCase.
     */
    function createAndInstall(opt_name?: string): goog.testing.DeferredTestCase;
}

declare module 'goog.testing.dom' {

    /**
     * A unique object to use as an end tag marker.
     * @private {!Node}
     * @const
     */
    var END_TAG_MARKER_: any /*missing*/;

    /**
     * Tests if the given iterator over nodes matches the given Array of node
     * descriptors.  Throws an error if any match fails.
     * @param {goog.iter.Iterator} it  An iterator over nodes.
     * @param {Array.<Node|number|string>} array Array of node descriptors to match
     *     against.  Node descriptors can be any of the following:
     *         Node: Test if the two nodes are equal.
     *         number: Test node.nodeType == number.
     *         string starting with '#': Match the node's id with the text
     *             after "#".
     *         other string: Match the text node's contents.
     */
    function assertNodesMatch(it: goog.iter.Iterator, array: any /*Node|number|string*/[]): void;

    /**
     * Exposes a node as a string.
     * @param {Node} node A node.
     * @return {string} A string representation of the node.
     */
    function exposeNode(node: Node): string;

    /**
     * Exposes the nodes of a range wrapper as a string.
     * @param {goog.dom.AbstractRange} range A range.
     * @return {string} A string representation of the range.
     */
    function exposeRange(range: goog.dom.AbstractRange): string;

    /**
     * Assert that the html in {@code actual} is substantially similar to
     * htmlPattern.  This method tests for the same set of styles, for the same
     * order of nodes, and the presence of attributes.  Breaking whitespace nodes
     * are ignored.  Elements can be
     * annotated with classnames corresponding to keys in goog.userAgent and will be
     * expected to show up in that user agent and expected not to show up in
     * others.
     * @param {string} htmlPattern The pattern to match.
     * @param {!Node} actual The element to check: its contents are matched
     *     against the HTML pattern.
     * @param {boolean=} opt_strictAttributes If false, attributes that appear in
     *     htmlPattern must be in actual, but actual can have attributes not
     *     present in htmlPattern.  If true, htmlPattern and actual must have the
     *     same set of attributes.  Default is false.
     */
    function assertHtmlContentsMatch(htmlPattern: string, actual: Node, opt_strictAttributes?: boolean): void;

    /**
     * Assert that the html in {@code actual} is substantially similar to
     * htmlPattern.  This method tests for the same set of styles, and for the same
     * order of nodes.  Breaking whitespace nodes are ignored.  Elements can be
     * annotated with classnames corresponding to keys in goog.userAgent and will be
     * expected to show up in that user agent and expected not to show up in
     * others.
     * @param {string} htmlPattern The pattern to match.
     * @param {string} actual The html to check.
     */
    function assertHtmlMatches(htmlPattern: string, actual: string): void;

    /**
     * Finds the first text node descendant of root with the given content.  Note
     * that this operates on a text node level, so if text nodes get split this
     * may not match the user visible text.  Using normalize() may help here.
     * @param {string|RegExp} textOrRegexp The text to find, or a regular
     *     expression to find a match of.
     * @param {Element} root The element to search in.
     * @return {Node} The first text node that matches, or null if none is found.
     */
    function findTextNode(textOrRegexp: any /*string|RegExp*/, root: Element): Node;

    /**
     * Assert the end points of a range.
     *
     * Notice that "Are two ranges visually identical?" and "Do two ranges have
     * the same endpoint?" are independent questions. Two visually identical ranges
     * may have different endpoints. And two ranges with the same endpoints may
     * be visually different.
     *
     * @param {Node} start The expected start node.
     * @param {number} startOffset The expected start offset.
     * @param {Node} end The expected end node.
     * @param {number} endOffset The expected end offset.
     * @param {goog.dom.AbstractRange} range The actual range.
     */
    function assertRangeEquals(start: Node, startOffset: number, end: Node, endOffset: number, range: goog.dom.AbstractRange): void;
}

declare module 'goog.testing' {

    /**
     * Class used to mock a function. Useful for mocking closures and anonymous
     * callbacks etc. Creates a function object that extends goog.testing.Mock.
     * @param {string=} opt_functionName The optional name of the function to mock.
     *     Set to '[anonymous mocked function]' if not passed in.
     * @param {number=} opt_strictness One of goog.testing.Mock.LOOSE or
     *     goog.testing.Mock.STRICT. The default is STRICT.
     * @return {goog.testing.MockInterface} The mocked function.
     * @suppress {missingProperties} Mocks do not fit in the type system well.
     */
    function FunctionMock(opt_functionName?: string, opt_strictness?: number): goog.testing.MockInterface;

    /**
     * Mocks an existing function. Creates a goog.testing.FunctionMock
     * and registers it in the given scope with the name specified by functionName.
     * @param {Object} scope The scope of the method to be mocked out.
     * @param {string} functionName The name of the function we're going to mock.
     * @param {number=} opt_strictness One of goog.testing.Mock.LOOSE or
     *     goog.testing.Mock.STRICT. The default is STRICT.
     * @return {!goog.testing.MockInterface} The mocked method.
     */
    function MethodMock(scope: Object, functionName: string, opt_strictness?: number): goog.testing.MockInterface;

    /**
     * Mocks a global / top-level function. Creates a goog.testing.MethodMock
     * in the global scope with the name specified by functionName.
     * @param {string} functionName The name of the function we're going to mock.
     * @param {number=} opt_strictness One of goog.testing.Mock.LOOSE or
     *     goog.testing.Mock.STRICT. The default is STRICT.
     * @return {goog.testing.MockInterface} The mocked global function.
     */
    function GlobalFunctionMock(functionName: string, opt_strictness?: number): goog.testing.MockInterface;

    /**
     * Convenience method for creating a mock for a function.
     * @param {string=} opt_functionName The optional name of the function to mock
     *     set to '[anonymous mocked function]' if not passed in.
     * @param {number=} opt_strictness One of goog.testing.Mock.LOOSE or
     *     goog.testing.Mock.STRICT. The default is STRICT.
     * @return {goog.testing.MockInterface} The mocked function.
     */
    function createFunctionMock(opt_functionName?: string, opt_strictness?: number): goog.testing.MockInterface;

    /**
     * Convenience method for creating a mock for a method.
     * @param {Object} scope The scope of the method to be mocked out.
     * @param {string} functionName The name of the function we're going to mock.
     * @param {number=} opt_strictness One of goog.testing.Mock.LOOSE or
     *     goog.testing.Mock.STRICT. The default is STRICT.
     * @return {goog.testing.MockInterface} The mocked global function.
     */
    function createMethodMock(scope: Object, functionName: string, opt_strictness?: number): goog.testing.MockInterface;

    /**
     * Convenience method for creating a mock for a constructor. Copies class
     * members to the mock.
     *
     * <p>When mocking a constructor to return a mocked instance, remember to create
     * the instance mock before mocking the constructor. If you mock the constructor
     * first, then the mock framework will be unable to examine the prototype chain
     * when creating the mock instance.
     * @param {Object} scope The scope of the constructor to be mocked out.
     * @param {string} constructorName The name of the constructor we're going to
     *     mock.
     * @param {number=} opt_strictness One of goog.testing.Mock.LOOSE or
     *     goog.testing.Mock.STRICT. The default is STRICT.
     * @return {goog.testing.MockInterface} The mocked constructor.
     */
    function createConstructorMock(scope: Object, constructorName: string, opt_strictness?: number): goog.testing.MockInterface;

    /**
     * Convenience method for creating a mocks for a global / top-level function.
     * @param {string} functionName The name of the function we're going to mock.
     * @param {number=} opt_strictness One of goog.testing.Mock.LOOSE or
     *     goog.testing.Mock.STRICT. The default is STRICT.
     * @return {goog.testing.MockInterface} The mocked global function.
     */
    function createGlobalFunctionMock(functionName: string, opt_strictness?: number): goog.testing.MockInterface;

    /**
     * Wraps the function into another one which calls the inner function and
     * records its calls. The recorded function will have 3 static methods:
     * {@code getCallCount}, {@code getCalls} and {@code getLastCall} but won't
     * inherit the original function's prototype and static fields.
     *
     * @param {!Function=} opt_f The function to wrap and record. Defaults to
     *     {@link goog.nullFunction}.
     * @return {!Function} The wrapped function.
     */
    function recordFunction(opt_f?: Function): Function;

    /**
     * Same as {@link goog.testing.recordFunction} but the recorded function will
     * have the same prototype and static fields as the original one. It can be
     * used with constructors.
     *
     * @param {!Function} ctor The function to wrap and record.
     * @return {!Function} The wrapped function.
     */
    function recordConstructor(ctor: Function): Function;

    /** @interface */
    interface MockInterface {
        $replay(): void;
        $reset(): void;
        $verify(): void;
    }

    /**
     * @param {string} comment A summary for the exception.
     * @param {?string=} opt_message A description of the exception.
     * @constructor
     * @extends {Error}
     * @final
     */
    class JsUnitException extends Error {
        /**
         * @param {string} comment A summary for the exception.
         * @param {?string=} opt_message A description of the exception.
         * @constructor
         * @extends {Error}
         * @final
         */
        constructor(comment: string, opt_message?: string);
    
        /** @override */
        toString(): void;
    }

    /**
     * A test case that is capable of running tests the contain asynchronous logic.
     * @param {string=} opt_name A descriptive name for the test case.
     * @extends {goog.testing.TestCase}
     * @constructor
     */
    class AsyncTestCase extends goog.testing.TestCase {
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
        activeTest: any /*goog.testing.TestCase.Test|any (undefined)*/;
    
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
         * Sets up the test page and then waits until the test case has been marked
         * as ready before executing the tests.
         * @override
         */
        runTests(): void;
    
        /**
         * Starts the tests.
         * @override
         */
        cycleTests(): void;
    
        /**
         * Finalizes the test case, called when the tests have finished executing.
         * @override
         */
        finalize(): void;
    
        /**
         * Enables verbose logging of what is happening inside of the AsyncTestCase.
         */
        enableDebugLogging(): void;
    }

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
    class ContinuationTestCase extends goog.testing.TestCase {
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
    
        /** @override */
        runTests(): void;
    
        /** @override */
        finalize(): void;
    
        /** @override */
        cycleTests(): void;
    
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
        waitForEvent(eventTarget: any /*goog.events.EventTarget|EventTarget*/, eventType: string, continuation: Function): void;
    
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
        addWaitForAsync(msg: string, d: goog.async.Deferred): void;
    
        /**
         * Wires up given Deferred object to the test case, then starts the
         * goog.async.Deferred object's callback.
         * @param {!string|goog.async.Deferred} a The wait status message or the
         *     deferred object to wait for.
         * @param {goog.async.Deferred=} opt_b The deferred object to wait for.
         */
        waitForDeferred(a: any /*string|goog.async.Deferred*/, opt_b?: goog.async.Deferred): void;
    }

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

    /**
     * This class is an ordered collection of expectations for one method. Since
     * the loose mock does most of its verification at the time of $verify, this
     * class is necessary to manage the return/throw behavior when the mock is
     * being called.
     * @constructor
     * @final
     */
    class LooseExpectationCollection {
        /**
         * This class is an ordered collection of expectations for one method. Since
         * the loose mock does most of its verification at the time of $verify, this
         * class is necessary to manage the return/throw behavior when the mock is
         * being called.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Adds an expectation to this collection.
         * @param {goog.testing.MockExpectation} expectation The expectation to add.
         */
        addExpectation(expectation: goog.testing.MockExpectation): void;
    
        /**
         * Gets the list of expectations in this collection.
         * @return {Array.<goog.testing.MockExpectation>} The array of expectations.
         */
        getExpectations(): goog.testing.MockExpectation[];
    }

    /**
     * This is a mock that does not care about the order of method calls. As a
     * result, it won't throw exceptions until verify() is called. The only
     * exception is that if a method is called that has no expectations, then an
     * exception will be thrown.
     * @param {Object|Function} objectToMock The object that should be mocked, or
     *    the constructor of an object to mock.
     * @param {boolean=} opt_ignoreUnexpectedCalls Whether to ignore unexpected
     *     calls.
     * @param {boolean=} opt_mockStaticMethods An optional argument denoting that
     *     a mock should be constructed from the static functions of a class.
     * @param {boolean=} opt_createProxy An optional argument denoting that
     *     a proxy for the target mock should be created.
     * @constructor
     * @extends {goog.testing.Mock}
     */
    class LooseMock extends goog.testing.Mock {
        /**
         * This is a mock that does not care about the order of method calls. As a
         * result, it won't throw exceptions until verify() is called. The only
         * exception is that if a method is called that has no expectations, then an
         * exception will be thrown.
         * @param {Object|Function} objectToMock The object that should be mocked, or
         *    the constructor of an object to mock.
         * @param {boolean=} opt_ignoreUnexpectedCalls Whether to ignore unexpected
         *     calls.
         * @param {boolean=} opt_mockStaticMethods An optional argument denoting that
         *     a mock should be constructed from the static functions of a class.
         * @param {boolean=} opt_createProxy An optional argument denoting that
         *     a proxy for the target mock should be created.
         * @constructor
         * @extends {goog.testing.Mock}
         */
        constructor(objectToMock: any /*Object|Function*/, opt_ignoreUnexpectedCalls?: boolean, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean);
    
        /**
         * A setter for the ignoreUnexpectedCalls field.
         * @param {boolean} ignoreUnexpectedCalls Whether to ignore unexpected calls.
         * @return {!goog.testing.LooseMock} This mock object.
         */
        $setIgnoreUnexpectedCalls(ignoreUnexpectedCalls: boolean): goog.testing.LooseMock;
    
        /** @override */
        $recordExpectation(): void;
    
        /** @override */
        $recordCall(): void;
    
        /** @override */
        $reset(): void;
    
        /** @override */
        $replay(): void;
    
        /** @override */
        $verify(): void;
    }

    /**
     * A record that represents all the data associated with a mock replacement of
     * a given class.
     * @param {Object} namespace The namespace in which the mocked class resides.
     * @param {string} className The name of the class within the namespace.
     * @param {Function} originalClass The original class implementation before it
     *     was replaced by a proxy.
     * @param {Function} proxy The proxy that replaced the original class.
     * @constructor
     * @final
     */
    class MockClassRecord {
        /**
         * A record that represents all the data associated with a mock replacement of
         * a given class.
         * @param {Object} namespace The namespace in which the mocked class resides.
         * @param {string} className The name of the class within the namespace.
         * @param {Function} originalClass The original class implementation before it
         *     was replaced by a proxy.
         * @param {Function} proxy The proxy that replaced the original class.
         * @constructor
         * @final
         */
        constructor(namespace: Object, className: string, originalClass: Function, proxy: Function);
    
        /**
         * A getter for this record's namespace.
         * @return {Object} The namespace.
         */
        getNamespace(): Object;
    
        /**
         * A getter for this record's class name.
         * @return {string} The name of the class referenced by this record.
         */
        getClassName(): string;
    
        /**
         * A getter for the original class.
         * @return {Function} The original class implementation before mocking.
         */
        getOriginalClass(): Function;
    
        /**
         * A getter for the proxy being used as a replacement for the original class.
         * @return {Function} The proxy.
         */
        getProxy(): Function;
    
        /**
         * A getter for the static mock.
         * @return {goog.testing.StrictMock|goog.testing.LooseMock|null} The static
         *     mock associated with this record.
         */
        getStaticMock(): any /*goog.testing.StrictMock|goog.testing.LooseMock|any (null)*/;
    
        /**
         * A setter for the static mock.
         * @param {goog.testing.StrictMock|goog.testing.LooseMock} staticMock A mock to
         *     associate with the static functions for the referenced class.
         */
        setStaticMock(staticMock: any /*goog.testing.StrictMock|goog.testing.LooseMock*/): void;
    
        /**
         * Adds a new mock instance mapping.  The mapping connects a set of function
         * arguments to a specific mock instance.
         * @param {Array} args An array of function arguments.
         * @param {goog.testing.StrictMock|goog.testing.LooseMock} mock A mock
         *     associated with the supplied arguments.
         */
        addMockInstance(args: any[], mock: any /*goog.testing.StrictMock|goog.testing.LooseMock*/): void;
    
        /**
         * Finds the mock corresponding to a given argument set.  Throws an error if
         * there is no appropriate match found.
         * @param {Array} args An array of function arguments.
         * @return {goog.testing.StrictMock|goog.testing.LooseMock|null} The mock
         *     corresponding to a given argument set.
         */
        findMockInstance(args: any[]): any /*goog.testing.StrictMock|goog.testing.LooseMock|any (null)*/;
    
        /**
         * Resets this record by reverting all the mocked classes back to the original
         * implementation and clearing out the mock instance list.
         */
        reset(): void;
    }

    /**
     * A factory used to create new mock class instances.  It is able to generate
     * both static and loose mocks.  The MockClassFactory is a singleton since it
     * tracks the classes that have been mocked internally.
     * @constructor
     * @final
     */
    class MockClassFactory {
        /**
         * A factory used to create new mock class instances.  It is able to generate
         * both static and loose mocks.  The MockClassFactory is a singleton since it
         * tracks the classes that have been mocked internally.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Gets a strict mock for a given class.
         * @param {Object} namespace A javascript namespace (e.g. goog.testing).
         * @param {Function} classToMock The class that will be mocked.
         * @param {...*} var_args The arguments associated with this instance's
         *     constructor.
         * @return {goog.testing.StrictMock} The mock created for the provided class.
         */
        getStrictMockClass(namespace: Object, classToMock: Function, ...var_args: any[]): goog.testing.StrictMock;
    
        /**
         * Gets a loose mock for a given class.
         * @param {Object} namespace A javascript namespace (e.g. goog.testing).
         * @param {Function} classToMock The class that will be mocked.
         * @param {...*} var_args The arguments associated with this instance's
         *     constructor.
         * @return {goog.testing.LooseMock} The mock created for the provided class.
         */
        getLooseMockClass(namespace: Object, classToMock: Function, ...var_args: any[]): goog.testing.LooseMock;
    
        /**
         * Gets a strict mock for the static functions of a given class.
         * @param {Object} namespace A javascript namespace (e.g. goog.testing).
         * @param {Function} classToMock The class whose static functions will be
         *     mocked.  This should be the original class and not the proxy.
         * @return {goog.testing.StrictMock} The mock created for the static functions
         *     of the provided class.
         */
        getStrictStaticMock(namespace: Object, classToMock: Function): goog.testing.StrictMock;
    
        /**
         * Gets a loose mock for the static functions of a given class.
         * @param {Object} namespace A javascript namespace (e.g. goog.testing).
         * @param {Function} classToMock The class whose static functions will be
         *     mocked.  This should be the original class and not the proxy.
         * @return {goog.testing.LooseMock} The mock created for the static functions
         *     of the provided class.
         */
        getLooseStaticMock(namespace: Object, classToMock: Function): goog.testing.LooseMock;
    
        /**
         * Resests the factory by reverting all mocked classes to their original
         * implementations and removing all MockClassRecords.
         */
        reset(): void;
    }

    /**
     * Class for unit testing code that uses setTimeout and clearTimeout.
     *
     * NOTE: If you are using MockClock to test code that makes use of
     *       goog.fx.Animation, then you must either:
     *
     * 1. Install and dispose of the MockClock in setUpPage() and tearDownPage()
     *    respectively (rather than setUp()/tearDown()).
     *
     * or
     *
     * 2. Ensure that every test clears the animation queue by calling
     *    mockClock.tick(x) at the end of each test function (where `x` is large
     *    enough to complete all animations).
     *
     * Otherwise, if any animation is left pending at the time that
     * MockClock.dispose() is called, that will permanently prevent any future
     * animations from playing on the page.
     *
     * @param {boolean=} opt_autoInstall Install the MockClock at construction time.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class MockClock extends goog.Disposable {
        /**
         * Class for unit testing code that uses setTimeout and clearTimeout.
         *
         * NOTE: If you are using MockClock to test code that makes use of
         *       goog.fx.Animation, then you must either:
         *
         * 1. Install and dispose of the MockClock in setUpPage() and tearDownPage()
         *    respectively (rather than setUp()/tearDown()).
         *
         * or
         *
         * 2. Ensure that every test clears the animation queue by calling
         *    mockClock.tick(x) at the end of each test function (where `x` is large
         *    enough to complete all animations).
         *
         * Otherwise, if any animation is left pending at the time that
         * MockClock.dispose() is called, that will permanently prevent any future
         * animations from playing on the page.
         *
         * @param {boolean=} opt_autoInstall Install the MockClock at construction time.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(opt_autoInstall?: boolean);
    
        /**
         * Installs the MockClock by overriding the global object's implementation of
         * setTimeout, setInterval, clearTimeout and clearInterval.
         */
        install(): void;
    
        /**
         * Removes the MockClock's hooks into the global object's functions and revert
         * to their original values.
         */
        uninstall(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Resets the MockClock, removing all timeouts that are scheduled and resets
         * the fake timer count.
         */
        reset(): void;
    
        /**
         * Signals that the mock clock has been reset, allowing objects that
         * maintain their own internal state to reset.
         */
        fireResetEvent(): void;
    
        /**
         * Sets the amount of time between when a timeout is scheduled to fire and when
         * it actually fires.
         * @param {number} delay The delay in milliseconds.  May be negative.
         */
        setTimeoutDelay(delay: number): void;
    
        /**
         * @return {number} delay The amount of time between when a timeout is
         *     scheduled to fire and when it actually fires, in milliseconds.  May
         *     be negative.
         */
        getTimeoutDelay(): number;
    
        /**
         * Increments the MockClock's time by a given number of milliseconds, running
         * any functions that are now overdue.
         * @param {number=} opt_millis Number of milliseconds to increment the counter.
         *     If not specified, clock ticks 1 millisecond.
         * @return {number} Current mock time in milliseconds.
         */
        tick(opt_millis?: number): number;
    
        /**
         * @return {number} The number of timeouts that have been scheduled.
         */
        getTimeoutsMade(): number;
    
        /**
         * @return {number} The MockClock's current time in milliseconds.
         */
        getCurrentTime(): number;
    
        /**
         * @param {number} timeoutKey The timeout key.
         * @return {boolean} Whether the timer has been set and not cleared,
         *     independent of the timeout's expiration.  In other words, the timeout
         *     could have passed or could be scheduled for the future.  Either way,
         *     this function returns true or false depending only on whether the
         *     provided timeoutKey represents a timeout that has been set and not
         *     cleared.
         */
        isTimeoutSet(timeoutKey: number): boolean;
    }

    /**
     * Controls a set of mocks.  Controlled mocks are replayed, verified, and
     * cleaned-up at the same time.
     * @constructor
     */
    class MockControl {
        /**
         * Controls a set of mocks.  Controlled mocks are replayed, verified, and
         * cleaned-up at the same time.
         * @constructor
         */
        constructor();
    
        /**
         * Takes control of this mock.
         * @param {goog.testing.MockInterface} mock Mock to be controlled.
         * @return {goog.testing.MockInterface} The same mock passed in,
         *     for convenience.
         */
        addMock(mock: goog.testing.MockInterface): goog.testing.MockInterface;
    
        /**
         * Calls replay on each controlled mock.
         */
        $replayAll(): void;
    
        /**
         * Calls reset on each controlled mock.
         */
        $resetAll(): void;
    
        /**
         * Calls verify on each controlled mock.
         */
        $verifyAll(): void;
    
        /**
         * Calls tearDown on each controlled mock, if necesssary.
         */
        $tearDown(): void;
    
        /**
         * Creates a controlled StrictMock.  Passes its arguments through to the
         * StrictMock constructor.
         * @param {Object|Function} objectToMock The object that should be mocked, or
         *    the constructor of an object to mock.
         * @param {boolean=} opt_mockStaticMethods An optional argument denoting that
         *     a mock should be constructed from the static functions of a class.
         * @param {boolean=} opt_createProxy An optional argument denoting that
         *     a proxy for the target mock should be created.
         * @return {!goog.testing.StrictMock} The mock object.
         */
        createStrictMock(objectToMock: any /*Object|Function*/, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean): goog.testing.StrictMock;
    
        /**
         * Creates a controlled LooseMock.  Passes its arguments through to the
         * LooseMock constructor.
         * @param {Object|Function} objectToMock The object that should be mocked, or
         *    the constructor of an object to mock.
         * @param {boolean=} opt_ignoreUnexpectedCalls Whether to ignore unexpected
         *     calls.
         * @param {boolean=} opt_mockStaticMethods An optional argument denoting that
         *     a mock should be constructed from the static functions of a class.
         * @param {boolean=} opt_createProxy An optional argument denoting that
         *     a proxy for the target mock should be created.
         * @return {!goog.testing.LooseMock} The mock object.
         */
        createLooseMock(objectToMock: any /*Object|Function*/, opt_ignoreUnexpectedCalls?: boolean, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean): goog.testing.LooseMock;
    
        /**
         * Creates a controlled FunctionMock.  Passes its arguments through to the
         * FunctionMock constructor.
         * @param {string=} opt_functionName The optional name of the function to mock
         *     set to '[anonymous mocked function]' if not passed in.
         * @param {number=} opt_strictness One of goog.testing.Mock.LOOSE or
         *     goog.testing.Mock.STRICT. The default is STRICT.
         * @return {goog.testing.MockInterface} The mocked function.
         */
        createFunctionMock(opt_functionName?: string, opt_strictness?: number): goog.testing.MockInterface;
    
        /**
         * Creates a controlled MethodMock.  Passes its arguments through to the
         * MethodMock constructor.
         * @param {Object} scope The scope of the method to be mocked out.
         * @param {string} functionName The name of the function we're going to mock.
         * @param {number=} opt_strictness One of goog.testing.Mock.LOOSE or
         *     goog.testing.Mock.STRICT. The default is STRICT.
         * @return {goog.testing.MockInterface} The mocked method.
         */
        createMethodMock(scope: Object, functionName: string, opt_strictness?: number): goog.testing.MockInterface;
    
        /**
         * Creates a controlled MethodMock for a constructor.  Passes its arguments
         * through to the MethodMock constructor. See
         * {@link goog.testing.createConstructorMock} for details.
         * @param {Object} scope The scope of the constructor to be mocked out.
         * @param {string} constructorName The name of the function we're going to mock.
         * @param {number=} opt_strictness One of goog.testing.Mock.LOOSE or
         *     goog.testing.Mock.STRICT. The default is STRICT.
         * @return {goog.testing.MockInterface} The mocked method.
         */
        createConstructorMock(scope: Object, constructorName: string, opt_strictness?: number): goog.testing.MockInterface;
    
        /**
         * Creates a controlled GlobalFunctionMock.  Passes its arguments through to the
         * GlobalFunctionMock constructor.
         * @param {string} functionName The name of the function we're going to mock.
         * @param {number=} opt_strictness One of goog.testing.Mock.LOOSE or
         *     goog.testing.Mock.STRICT. The default is STRICT.
         * @return {goog.testing.MockInterface} The mocked function.
         */
        createGlobalFunctionMock(functionName: string, opt_strictness?: number): goog.testing.MockInterface;
    }

    /**
     * This is a class that represents an expectation.
     * @param {string} name The name of the method for this expectation.
     * @constructor
     * @final
     */
    class MockExpectation {
        /**
         * This is a class that represents an expectation.
         * @param {string} name The name of the method for this expectation.
         * @constructor
         * @final
         */
        constructor(name: string);
    
        /**
         * The minimum number of times this method should be called.
         * @type {number}
         */
        minCalls: number;
    
        /**
         * The maximum number of times this method should be called.
         * @type {number}
         */
        maxCalls: number;
    
        /**
         * The value that this method should return.
         * @type {*}
         */
        returnValue: any;
    
        /**
         * The value that will be thrown when the method is called
         * @type {*}
         */
        exceptionToThrow: any;
    
        /**
         * The arguments that are expected to be passed to this function
         * @type {Array.<*>}
         */
        argumentList: any[];
    
        /**
         * The number of times this method is called by real code.
         * @type {number}
         */
        actualCalls: number;
    
        /**
         * The number of times this method is called during the verification phase.
         * @type {number}
         */
        verificationCalls: number;
    
        /**
         * The function which will be executed when this method is called.
         * Method arguments will be passed to this function, and return value
         * of this function will be returned by the method.
         * @type {Function}
         */
        toDo: Function;
    
        /**
         * Allow expectation failures to include messages.
         * @param {string} message The failure message.
         */
        addErrorMessage(message: string): void;
    
        /**
         * Get the error messages seen so far.
         * @return {string} Error messages separated by \n.
         */
        getErrorMessage(): string;
    
        /**
         * Get how many error messages have been seen so far.
         * @return {number} Count of error messages.
         */
        getErrorMessageCount(): number;
    }

    /**
     * The base class for a mock object.
     * @param {Object|Function} objectToMock The object that should be mocked, or
     *    the constructor of an object to mock.
     * @param {boolean=} opt_mockStaticMethods An optional argument denoting that
     *     a mock should be constructed from the static functions of a class.
     * @param {boolean=} opt_createProxy An optional argument denoting that
     *     a proxy for the target mock should be created.
     * @constructor
     * @implements {goog.testing.MockInterface}
     */
    class Mock implements goog.testing.MockInterface {
        /**
         * The base class for a mock object.
         * @param {Object|Function} objectToMock The object that should be mocked, or
         *    the constructor of an object to mock.
         * @param {boolean=} opt_mockStaticMethods An optional argument denoting that
         *     a mock should be constructed from the static functions of a class.
         * @param {boolean=} opt_createProxy An optional argument denoting that
         *     a proxy for the target mock should be created.
         * @constructor
         * @implements {goog.testing.MockInterface}
         */
        constructor(objectToMock: any /*Object|Function*/, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean);
    
        /**
         * A proxy for the mock.  This can be used for dependency injection in lieu of
         * the mock if the test requires a strict instanceof check.
         * @type {Object}
         */
        $proxy: Object;
    
        /**
         * Map of argument name to optional argument list verifier function.
         * @type {Object}
         */
        $argumentListVerifiers_: Object;
    
        /**
         * The expectation currently being created. All methods that modify the
         * current expectation return the Mock object for easy chaining, so this is
         * where we keep track of the expectation that's currently being modified.
         * @type {goog.testing.MockExpectation}
         * @protected
         */
        $pendingExpectation: goog.testing.MockExpectation;
    
        /**
         * Registers a verfifier function to use when verifying method argument lists.
         * @param {string} methodName The name of the method for which the verifierFn
         *     should be used.
         * @param {Function} fn Argument list verifier function.  Should take 2 argument
         *     arrays as arguments, and return true if they are considered equivalent.
         * @return {!goog.testing.Mock} This mock object.
         */
        $registerArgumentListVerifier(methodName: string, fn: Function): goog.testing.Mock;
    
        /**
         * The function that replaces all methods on the mock object.
         * @param {string} name The name of the method being mocked.
         * @return {*} In record mode, returns the mock object. In replay mode, returns
         *    whatever the creator of the mock set as the return value.
         */
        $mockMethod(name: string): any;
    
        /**
         * Records the currently pending expectation, intended to be overridden by a
         * subclass.
         * @protected
         */
        $recordExpectation(): void;
    
        /**
         * Records an actual method call, intended to be overridden by a
         * subclass. The subclass must find the pending expectation and return the
         * correct value.
         * @param {string} name The name of the method being called.
         * @param {Array} args The arguments to the method.
         * @return {*} The return expected by the mock.
         * @protected
         */
        $recordCall(name: string, args: any[]): any;
    
        /**
         * If the expectation expects to throw, this method will throw.
         * @param {goog.testing.MockExpectation} expectation The expectation.
         */
        $maybeThrow(expectation: goog.testing.MockExpectation): void;
    
        /**
         * If this expectation defines a function to be called,
         * it will be called and its result will be returned.
         * Otherwise, if the expectation expects to throw, it will throw.
         * Otherwise, this method will return defined value.
         * @param {goog.testing.MockExpectation} expectation The expectation.
         * @param {Array} args The arguments to the method.
         * @return {*} The return value expected by the mock.
         */
        $do(expectation: goog.testing.MockExpectation, args: any[]): any;
    
        /**
         * Specifies a return value for the currently pending expectation.
         * @param {*} val The return value.
         * @return {!goog.testing.Mock} This mock object.
         */
        $returns(val: any): goog.testing.Mock;
    
        /**
         * Specifies a value for the currently pending expectation to throw.
         * @param {*} val The value to throw.
         * @return {!goog.testing.Mock} This mock object.
         */
        $throws(val: any): goog.testing.Mock;
    
        /**
         * Specifies a function to call for currently pending expectation.
         * Note, that using this method overrides declarations made
         * using $returns() and $throws() methods.
         * @param {Function} func The function to call.
         * @return {!goog.testing.Mock} This mock object.
         */
        $does(func: Function): goog.testing.Mock;
    
        /**
         * Allows the expectation to be called 0 or 1 times.
         * @return {!goog.testing.Mock} This mock object.
         */
        $atMostOnce(): goog.testing.Mock;
    
        /**
         * Allows the expectation to be called any number of times, as long as it's
         * called once.
         * @return {!goog.testing.Mock} This mock object.
         */
        $atLeastOnce(): goog.testing.Mock;
    
        /**
         * Allows the expectation to be called any number of times.
         * @return {!goog.testing.Mock} This mock object.
         */
        $anyTimes(): goog.testing.Mock;
    
        /**
         * Specifies the number of times the expectation should be called.
         * @param {number} times The number of times this method will be called.
         * @return {!goog.testing.Mock} This mock object.
         */
        $times(times: number): goog.testing.Mock;
    
        /**
         * Switches from recording to replay mode.
         * @override
         */
        $replay(): void;
    
        /**
         * Resets the state of this mock object. This clears all pending expectations
         * without verifying, and puts the mock in recording mode.
         * @override
         */
        $reset(): void;
    
        /**
         * Throws an exception and records that an exception was thrown.
         * @param {string} comment A short comment about the exception.
         * @param {?string=} opt_message A longer message about the exception.
         * @throws {Object} JsUnitException object.
         * @protected
         */
        $throwException(comment: string, opt_message?: string): void;
    
        /**
         * Throws an exception and records that an exception was thrown.
         * @param {Object} ex Exception.
         * @throws {Object} #ex.
         * @protected
         */
        $recordAndThrow(ex: Object): void;
    
        /**
         * Verify that all of the expectations were met. Should be overridden by
         * subclasses.
         * @override
         */
        $verify(): void;
    
        /**
         * Verifies that a method call matches an expectation.
         * @param {goog.testing.MockExpectation} expectation The expectation to check.
         * @param {string} name The name of the called method.
         * @param {Array.<*>?} args The arguments passed to the mock.
         * @return {boolean} Whether the call matches the expectation.
         */
        $verifyCall(expectation: goog.testing.MockExpectation, name: string, args: any[]): boolean;
    
        /**
         * Render the provided argument array to a string to help
         * clients with debugging tests.
         * @param {Array.<*>?} args The arguments passed to the mock.
         * @return {string} Human-readable string.
         */
        $argumentsAsString(args: any[]): string;
    
        /**
         * Throw an exception based on an incorrect method call.
         * @param {string} name Name of method called.
         * @param {Array.<*>?} args Arguments passed to the mock.
         * @param {goog.testing.MockExpectation=} opt_expectation Expected next call,
         *     if any.
         */
        $throwCallException(name: string, args: any[], opt_expectation?: goog.testing.MockExpectation): void;
    }

    /**
     * Class for unit testing code that uses Math.random.
     *
     * @param {Array.<number>} sequence The sequence of numbers to return.
     * @param {boolean=} opt_install Whether to install the MockRandom at
     *     construction time.
     * @extends {goog.Disposable}
     * @constructor
     * @final
     */
    class MockRandom extends goog.Disposable {
        /**
         * Class for unit testing code that uses Math.random.
         *
         * @param {Array.<number>} sequence The sequence of numbers to return.
         * @param {boolean=} opt_install Whether to install the MockRandom at
         *     construction time.
         * @extends {goog.Disposable}
         * @constructor
         * @final
         */
        constructor(sequence: number[], opt_install?: boolean);
    
        /**
         * Installs this MockRandom as the system number generator.
         */
        install(): void;
    
        /**
         * @return {number} The next number in the sequence. If there are no more values
         *     left, this will return a random number, unless
         *     {@code this.strictlyFromSequence_} is true, in which case an error will
         *     be thrown.
         */
        random(): number;
    
        /**
         * @return {boolean} Whether there are more numbers left in the sequence.
         */
        hasMoreValues(): boolean;
    
        /**
         * Injects new numbers into the beginning of the sequence.
         * @param {Array.<number>|number} values Number or array of numbers to inject.
         */
        inject(values: any /*number[]|number*/): void;
    
        /**
         * Uninstalls the MockRandom.
         */
        uninstall(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * @param {boolean} strictlyFromSequence Whether to throw an exception when
         *     Math.random() is called when there is nothing left in the sequence.
         */
        setStrictlyFromSequence(strictlyFromSequence: boolean): void;
    }

    /**
     * LooseMock of goog.dom.AbstractRange. Useful because the mock framework cannot
     * simply create a mock out of an abstract class, and cannot create a mock out
     * of classes that implements __iterator__ because it relies on the default
     * behavior of iterating through all of an object's properties.
     * @constructor
     * @extends {goog.testing.LooseMock}
     * @final
     */
    class MockRange extends goog.testing.LooseMock {
        /**
         * LooseMock of goog.dom.AbstractRange. Useful because the mock framework cannot
         * simply create a mock out of an abstract class, and cannot create a mock out
         * of classes that implements __iterator__ because it relies on the default
         * behavior of iterating through all of an object's properties.
         * @constructor
         * @extends {goog.testing.LooseMock}
         * @final
         */
        constructor();
    }

    /**
     * A JS storage instance, implementing the HMTL5 Storage interface.
     * See http://www.w3.org/TR/webstorage/ for details.
     *
     * @constructor
     * @implements {Storage}
     * @final
     */
    class MockStorage implements Storage {
        /**
         * A JS storage instance, implementing the HMTL5 Storage interface.
         * See http://www.w3.org/TR/webstorage/ for details.
         *
         * @constructor
         * @implements {Storage}
         * @final
         */
        constructor();
    
        /**
         * Sets an item to the storage.
         * @param {string} key Storage key.
         * @param {*} value Storage value. Must be convertible to string.
         * @override
         */
        setItem(key: string, value: any): void;
    
        /**
         * Gets an item from the storage.  The item returned is the "structured clone"
         * of the value from setItem.  In practice this means it's the value cast to a
         * string.
         * @param {string} key Storage key.
         * @return {?string} Storage value for key; null if does not exist.
         * @override
         */
        getItem(key: string): string;
    
        /**
         * Removes and item from the storage.
         * @param {string} key Storage key.
         * @override
         */
        removeItem(key: string): void;
    
        /**
         * Clears the storage.
         * @override
         */
        clear(): void;
    
        /**
         * Returns the key at the given index.
         * @param {number} index The index for the key.
         * @return {?string} Key at the given index, null if not found.
         * @override
         */
        key(index: number): string;
    }

    /**
     * Class for unit testing code that uses goog.userAgent.
     *
     * @extends {goog.Disposable}
     * @constructor
     * @final
     */
    class MockUserAgent extends goog.Disposable {
        /**
         * Class for unit testing code that uses goog.userAgent.
         *
         * @extends {goog.Disposable}
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Installs this MockUserAgent.
         */
        install(): void;
    
        /**
         * @return {?string} The userAgent set in this class.
         */
        getUserAgentString(): string;
    
        /**
         * @param {string} userAgent The desired userAgent string to use.
         */
        setUserAgentString(userAgent: string): void;
    
        /**
         * @return {Object} The Navigator set in this class.
         */
        getNavigator(): Object;
    
        /**
         * @param {Object} navigator The desired Navigator object to use.
         */
        setNavigator(navigator: Object): void;
    
        /**
         * Uninstalls the MockUserAgent.
         */
        uninstall(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * A component for running multiple tests within the browser.
     * @param {goog.dom.DomHelper=} opt_domHelper A DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     * @final
     */
    class MultiTestRunner extends goog.ui.Component {
        /**
         * A component for running multiple tests within the browser.
         * @param {goog.dom.DomHelper=} opt_domHelper A DOM helper.
         * @extends {goog.ui.Component}
         * @constructor
         * @final
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the name for the test suite.
         * @param {string} name The suite's name.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setName(name: string): goog.testing.MultiTestRunner;
    
        /**
         * Returns the name for the test suite.
         * @return {string} The name for the test suite.
         */
        getName(): string;
    
        /**
         * Sets the basepath that tests added using addTests are resolved with.
         * @param {string} path The relative basepath.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setBasePath(path: string): goog.testing.MultiTestRunner;
    
        /**
         * Returns the basepath that tests added using addTests are resolved with.
         * @return {string} The basepath that tests added using addTests are resolved
         *     with.
         */
        getBasePath(): string;
    
        /**
         * Sets whether the report should contain verbose information for tests that
         * pass.
         * @param {boolean} verbose Whether report should be verbose.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setVerbosePasses(verbose: boolean): goog.testing.MultiTestRunner;
    
        /**
         * Returns whether the report should contain verbose information for tests that
         * pass.
         * @return {boolean} Whether the report should contain verbose information for
         *     tests that pass.
         */
        getVerbosePasses(): boolean;
    
        /**
         * Sets whether the report should contain passing tests at all, makes
         * setVerbosePasses obsolete.
         * @param {boolean} hide Whether report should not contain passing tests.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setHidePasses(hide: boolean): goog.testing.MultiTestRunner;
    
        /**
         * Returns whether the report should contain passing tests at all, makes
         * setVerbosePasses obsolete.
         * @return {boolean} Whether the report should contain passing tests at all,
         *     makes setVerbosePasses obsolete.
         */
        getHidePasses(): boolean;
    
        /**
         * Sets the bucket sizes for the histograms.
         * @param {number} f Bucket size for num files loaded histogram.
         * @param {number} t Bucket size for run time histogram.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setStatsBucketSizes(f: number, t: number): goog.testing.MultiTestRunner;
    
        /**
         * Sets the number of milliseconds to wait for the page to load, initialize and
         * run the tests.
         * @param {number} timeout Time in milliseconds.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setTimeout(timeout: number): goog.testing.MultiTestRunner;
    
        /**
         * Returns the number of milliseconds to wait for the page to load, initialize
         * and run the tests.
         * @return {number} The number of milliseconds to wait for the page to load,
         *     initialize and run the tests.
         */
        getTimeout(): number;
    
        /**
         * Sets the number of tests that can be run at the same time. This only improves
         * performance due to the amount of time spent loading the tests.
         * @param {number} size The number of tests to run at a time.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setPoolSize(size: number): goog.testing.MultiTestRunner;
    
        /**
         * Returns the number of tests that can be run at the same time. This only
         * improves performance due to the amount of time spent loading the tests.
         * @return {number} The number of tests that can be run at the same time. This
         *     only improves performance due to the amount of time spent loading the
         *     tests.
         */
        getPoolSize(): number;
    
        /**
         * Sets a filter function. Only test paths that match the filter function
         * will be executed.
         * @param {function(string): boolean} filterFn Filters test paths.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setFilterFunction(filterFn: (_0: string) => boolean): goog.testing.MultiTestRunner;
    
        /**
         * Returns a filter function. Only test paths that match the filter function
         * will be executed.
         * @return {function(string): boolean} A filter function. Only test paths that
         *     match the filter function will be executed.
         */
        getFilterFunction(): (_0: string) => boolean;
    
        /**
         * Adds an array of tests to the tests that the test runner should execute.
         * @param {Array.<string>} tests Adds tests to the test runner.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        addTests(tests: string[]): goog.testing.MultiTestRunner;
    
        /**
         * Returns the list of all tests added to the runner.
         * @return {Array.<string>} The list of all tests added to the runner.
         */
        getAllTests(): string[];
    
        /**
         * Returns the list of tests that will be run when start() is called.
         * @return {!Array.<string>} The list of tests that will be run when start() is
         *     called.
         */
        getTestsToRun(): string[];
    
        /**
         * Returns a list of tests from runner that have been marked as failed.
         * @return {!Array.<string>} A list of tests from runner that have been marked
         *     as failed.
         */
        getTestsThatFailed(): string[];
    
        /** @override */
        createDom(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Starts executing the tests.
         */
        start(): void;
    
        /**
         * Logs a message to the log window.
         * @param {string} msg A message to log.
         */
        log(msg: string): void;
    
        /**
         * Processes a result returned from a TestFrame.  If there are tests remaining
         * it will trigger the next one to be run, otherwise if there are no tests and
         * all results have been recieved then it will call finish.
         * @param {goog.testing.MultiTestRunner.TestFrame} frame The frame that just
         *     finished.
         */
        processResult(frame: goog.testing.MultiTestRunner.TestFrame): void;
    }

    /**
     * Object to pass a property name as a string literal and its containing object
     * when the JSCompiler is rewriting these names. This should only be used in
     * test code.
     *
     * @param {Object} object The containing object.
     * @param {Object|string} propertyString Property name as a string literal.
     * @constructor
     * @final
     */
    class ObjectPropertyString {
        /**
         * Object to pass a property name as a string literal and its containing object
         * when the JSCompiler is rewriting these names. This should only be used in
         * test code.
         *
         * @param {Object} object The containing object.
         * @param {Object|string} propertyString Property name as a string literal.
         * @constructor
         * @final
         */
        constructor(object: Object, propertyString: any /*Object|string*/);
    
        /**
         * @return {Object} The object.
         */
        getObject(): Object;
    
        /**
         * @return {string} The property string.
         */
        getPropertyString(): string;
    }

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
    class PerformanceTimer {
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
         * @return {Object} Object containing performance stats.
         */
        run(testFn: Function): Object;
    
        /**
         * Executes the test function of the specified task as described in
         * {@code run}. In addition, if specified, the set up and tear down functions of
         * the task are invoked before and after each invocation of the test function.
         * @see goog.testing.PerformanceTimer#run
         * @param {goog.testing.PerformanceTimer.Task} task A task describing the test
         *     function to invoke.
         * @return {Object} Object containing performance stats.
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
        runAsyncTask(task: goog.testing.PerformanceTimer.Task): goog.async.Deferred;
    }

    /**
     * Helper class for stubbing out variables and object properties for unit tests.
     * This class can change the value of some variables before running the test
     * cases, and to reset them in the tearDown phase.
     * See googletest.StubOutForTesting as an analogy in Python:
     * http://protobuf.googlecode.com/svn/trunk/python/stubout.py
     *
     * Example usage:
     * <pre>var stubs = new goog.testing.PropertyReplacer();
     *
     * function setUp() {
     *   // Mock functions used in all test cases.
     *   stubs.set(Math, 'random', function() {
     *     return 4;  // Chosen by fair dice roll. Guaranteed to be random.
     *   });
     * }
     *
     * function tearDown() {
     *   stubs.reset();
     * }
     *
     * function testThreeDice() {
     *   // Mock a constant used only in this test case.
     *   stubs.set(goog.global, 'DICE_COUNT', 3);
     *   assertEquals(12, rollAllDice());
     * }</pre>
     *
     * Constraints on altered objects:
     * <ul>
     *   <li>DOM subclasses aren't supported.
     *   <li>The value of the objects' constructor property must either be equal to
     *       the real constructor or kept untouched.
     * </ul>
     *
     * @constructor
     * @final
     */
    class PropertyReplacer {
        /**
         * Helper class for stubbing out variables and object properties for unit tests.
         * This class can change the value of some variables before running the test
         * cases, and to reset them in the tearDown phase.
         * See googletest.StubOutForTesting as an analogy in Python:
         * http://protobuf.googlecode.com/svn/trunk/python/stubout.py
         *
         * Example usage:
         * <pre>var stubs = new goog.testing.PropertyReplacer();
         *
         * function setUp() {
         *   // Mock functions used in all test cases.
         *   stubs.set(Math, 'random', function() {
         *     return 4;  // Chosen by fair dice roll. Guaranteed to be random.
         *   });
         * }
         *
         * function tearDown() {
         *   stubs.reset();
         * }
         *
         * function testThreeDice() {
         *   // Mock a constant used only in this test case.
         *   stubs.set(goog.global, 'DICE_COUNT', 3);
         *   assertEquals(12, rollAllDice());
         * }</pre>
         *
         * Constraints on altered objects:
         * <ul>
         *   <li>DOM subclasses aren't supported.
         *   <li>The value of the objects' constructor property must either be equal to
         *       the real constructor or kept untouched.
         * </ul>
         *
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Adds or changes a value in an object while saving its original state.
         * @param {Object|Function} obj The JavaScript or native object or function to
         *     alter. See the constraints in the class description.
         * @param {string} key The key to change the value for.
         * @param {*} value The new value to set.
         */
        set(obj: any /*Object|Function*/, key: string, value: any): void;
    
        /**
         * Changes an existing value in an object to another one of the same type while
         * saving its original state. The advantage of {@code replace} over {@link #set}
         * is that {@code replace} protects against typos and erroneously passing tests
         * after some members have been renamed during a refactoring.
         * @param {Object|Function} obj The JavaScript or native object or function to
         *     alter. See the constraints in the class description.
         * @param {string} key The key to change the value for. It has to be present
         *     either in {@code obj} or in its prototype chain.
         * @param {*} value The new value to set. It has to have the same type as the
         *     original value. The types are compared with {@link goog.typeOf}.
         * @throws {Error} In case of missing key or type mismatch.
         */
        replace(obj: any /*Object|Function*/, key: string, value: any): void;
    
        /**
         * Builds an object structure for the provided namespace path.  Doesn't
         * overwrite those prefixes of the path that are already objects or functions.
         * @param {string} path The path to create or alter, e.g. 'goog.ui.Menu'.
         * @param {*} value The value to set.
         */
        setPath(path: string, value: any): void;
    
        /**
         * Deletes the key from the object while saving its original value.
         * @param {Object|Function} obj The JavaScript or native object or function to
         *     alter. See the constraints in the class description.
         * @param {string} key The key to delete.
         */
        remove(obj: any /*Object|Function*/, key: string): void;
    
        /**
         * Resets all changes made by goog.testing.PropertyReplacer.prototype.set.
         */
        reset(): void;
    }

    /**
     * Class for unit testing code that uses Math.random. Generates deterministic
     * random numbers.
     *
     * @param {number=} opt_seed The seed to use.
     * @param {boolean=} opt_install Whether to install the PseudoRandom at
     *     construction time.
     * @extends {goog.Disposable}
     * @constructor
     * @final
     */
    class PseudoRandom extends goog.Disposable {
        /**
         * Class for unit testing code that uses Math.random. Generates deterministic
         * random numbers.
         *
         * @param {number=} opt_seed The seed to use.
         * @param {boolean=} opt_install Whether to install the PseudoRandom at
         *     construction time.
         * @extends {goog.Disposable}
         * @constructor
         * @final
         */
        constructor(opt_seed?: number, opt_install?: boolean);
    
        /**
         * Installs this PseudoRandom as the system number generator.
         */
        install(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Uninstalls the PseudoRandom.
         */
        uninstall(): void;
    
        /**
         * Seed the generator.
         *
         * @param {number=} seed The seed to use.
         */
        seed(seed?: number): void;
    
        /**
         * @return {number} The next number in the sequence.
         */
        random(): number;
    }

    /**
     * Struct for a single function call.
     * @param {!Function} func The called function.
     * @param {!Object} thisContext {@code this} context of called function.
     * @param {!Arguments} args Arguments of the called function.
     * @param {*} ret Return value of the function or undefined in case of error.
     * @param {*} error The error thrown by the function or null if none.
     * @constructor
     */
    class FunctionCall {
        /**
         * Struct for a single function call.
         * @param {!Function} func The called function.
         * @param {!Object} thisContext {@code this} context of called function.
         * @param {!Arguments} args Arguments of the called function.
         * @param {*} ret Return value of the function or undefined in case of error.
         * @param {*} error The error thrown by the function or null if none.
         * @constructor
         */
        constructor(func: Function, thisContext: Object, args: Arguments, ret: any, error: any);
    
        /**
         * @return {!Function} The called function.
         */
        getFunction(): Function;
    
        /**
         * @return {!Object} {@code this} context of called function. It is the same as
         *     the created object if the function is a constructor.
         */
        getThis(): Object;
    
        /**
         * @return {!Array} Arguments of the called function.
         */
        getArguments(): any[];
    
        /**
         * Returns the nth argument of the called function.
         * @param {number} index 0-based index of the argument.
         * @return {*} The argument value or undefined if there is no such argument.
         */
        getArgument(index: number): any;
    
        /**
         * @return {*} Return value of the function or undefined in case of error.
         */
        getReturnValue(): any;
    
        /**
         * @return {*} The error thrown by the function or null if none.
         */
        getError(): any;
    }

    /**
     * A test case that runs tests in per-file shards.
     * @param {number} shardIndex Shard index for this page,
     *     <strong>1-indexed</strong>.
     * @param {number} numShards Number of shards to split up test cases into.
     * @extends {goog.testing.TestCase}
     * @constructor
     * @final
     */
    class ShardingTestCase extends goog.testing.TestCase {
        /**
         * A test case that runs tests in per-file shards.
         * @param {number} shardIndex Shard index for this page,
         *     <strong>1-indexed</strong>.
         * @param {number} numShards Number of shards to split up test cases into.
         * @extends {goog.testing.TestCase}
         * @constructor
         * @final
         */
        constructor(shardIndex: number, numShards: number);
    
        /**
         * Installs a runTests global function that goog.testing.JsUnit will use to
         * run tests, which will run a single shard of the tests present on the page.
         * @override
         */
        runTests(): void;
    }

    /**
     * This is a mock that verifies that methods are called in the order that they
     * are specified during the recording phase. Since it verifies order, it
     * follows 'fail fast' semantics. If it detects a deviation from the
     * expectations, it will throw an exception and not wait for verify to be
     * called.
     * @param {Object|Function} objectToMock The object that should be mocked, or
     *    the constructor of an object to mock.
     * @param {boolean=} opt_mockStaticMethods An optional argument denoting that
     *     a mock should be constructed from the static functions of a class.
     * @param {boolean=} opt_createProxy An optional argument denoting that
     *     a proxy for the target mock should be created.
     * @constructor
     * @extends {goog.testing.Mock}
     * @final
     */
    class StrictMock extends goog.testing.Mock {
        /**
         * This is a mock that verifies that methods are called in the order that they
         * are specified during the recording phase. Since it verifies order, it
         * follows 'fail fast' semantics. If it detects a deviation from the
         * expectations, it will throw an exception and not wait for verify to be
         * called.
         * @param {Object|Function} objectToMock The object that should be mocked, or
         *    the constructor of an object to mock.
         * @param {boolean=} opt_mockStaticMethods An optional argument denoting that
         *     a mock should be constructed from the static functions of a class.
         * @param {boolean=} opt_createProxy An optional argument denoting that
         *     a proxy for the target mock should be created.
         * @constructor
         * @extends {goog.testing.Mock}
         * @final
         */
        constructor(objectToMock: any /*Object|Function*/, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean);
    
        /** @override */
        $recordExpectation(): void;
    
        /** @override */
        $recordCall(): void;
    
        /** @override */
        $reset(): void;
    
        /** @override */
        $verify(): void;
    }

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
    class TestCase {
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
         * time has execeeded {@link #MAX_RUN_TIME}.
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

    /**
     * Generic queue for writing unit tests
     * @constructor
     */
    class TestQueue {
        /**
         * Generic queue for writing unit tests
         * @constructor
         */
        constructor();
    
        /**
         * Adds a new event onto the queue.
         * @param {Object} event The event to queue.
         */
        enqueue(event: Object): void;
    
        /**
         * Returns whether the queue is empty.
         * @return {boolean} Whether the queue is empty.
         */
        isEmpty(): boolean;
    
        /**
         * Gets the next event from the queue. Throws an exception if the queue is
         * empty.
         * @param {string=} opt_comment Comment if the queue is empty.
         * @return {Object} The next event from the queue.
         */
        dequeue(opt_comment?: string): Object;
    }

    /**
     * Construct a test runner.
     *
     * NOTE(user): This is currently pretty weird, I'm essentially trying to
     * create a wrapper that the Selenium test can hook into to query the state of
     * the running test case, while making goog.testing.TestCase general.
     *
     * @constructor
     */
    class TestRunner {
        /**
         * Construct a test runner.
         *
         * NOTE(user): This is currently pretty weird, I'm essentially trying to
         * create a wrapper that the Selenium test can hook into to query the state of
         * the running test case, while making goog.testing.TestCase general.
         *
         * @constructor
         */
        constructor();
    
        /**
         * Reference to the active test case.
         * @type {goog.testing.TestCase?}
         */
        testCase: goog.testing.TestCase;
    
        /**
         * Whether the test runner has been initialized yet.
         * @type {boolean}
         */
        initialized: boolean;
    
        /**
         * Initializes the test runner.
         * @param {goog.testing.TestCase} testCase The test case to initialize with.
         */
        initialize(testCase: goog.testing.TestCase): void;
    
        /**
         * By default, the test runner is strict, and fails if it runs an empty
         * test case.
         * @param {boolean} strict Whether the test runner should fail on an empty
         *     test case.
         */
        setStrict(strict: boolean): void;
    
        /**
         * @return {boolean} Whether the test runner should fail on an empty
         *     test case.
         */
        isStrict(): boolean;
    
        /**
         * Returns true if the test runner is initialized.
         * Used by Selenium Hooks.
         * @return {boolean} Whether the test runner is active.
         */
        isInitialized(): boolean;
    
        /**
         * Returns true if the test runner is finished.
         * Used by Selenium Hooks.
         * @return {boolean} Whether the test runner is active.
         */
        isFinished(): boolean;
    
        /**
         * Returns true if the test case didn't fail.
         * Used by Selenium Hooks.
         * @return {boolean} Whether the current test returned successfully.
         */
        isSuccess(): boolean;
    
        /**
         * Returns true if the test case runner has errors that were caught outside of
         * the test case.
         * @return {boolean} Whether there were JS errors.
         */
        hasErrors(): boolean;
    
        /**
         * Logs an error that occurred.  Used in the case of environment setting up
         * an onerror handler.
         * @param {string} msg Error message.
         */
        logError(msg: string): void;
    
        /**
         * Log failure in current running test.
         * @param {Error} ex Exception.
         */
        logTestFailure(ex: Error): void;
    
        /**
         * Sets a function to use as a filter for errors.
         * @param {function(string)} fn Filter function.
         */
        setErrorFilter(fn: (_0: string) => any /*missing*/): void;
    
        /**
         * Returns a report of the test case that ran.
         * Used by Selenium Hooks.
         * @param {boolean=} opt_verbose If true results will include data about all
         *     tests, not just what failed.
         * @return {string} A report summary of the test.
         */
        getReport(opt_verbose?: boolean): string;
    
        /**
         * Returns the amount of time it took for the test to run.
         * Used by Selenium Hooks.
         * @return {number} The run time, in milliseconds.
         */
        getRunTime(): number;
    
        /**
         * Returns the number of script files that were loaded in order to run the test.
         * @return {number} The number of script files.
         */
        getNumFilesLoaded(): number;
    
        /**
         * Executes a test case and prints the results to the window.
         */
        execute(): void;
    
        /**
         * Writes a nicely formatted log out to the document.
         * @param {string} log The string to write.
         */
        writeLog(log: string): void;
    
        /**
         * Logs a message to the current test case.
         * @param {string} s The text to output to the log.
         */
        log(s: string): void;
    
        /**
         * @return {Object.<string, !Array.<string>>} A map of test names to a list of
         * test failures (if any) to provide formatted data for the test runner.
         */
        getTestResults(): { [key: string]: string[] };
    }
}

declare module 'goog.testing.MethodMock' {

    /**
     * Resets the global function that we mocked back to its original state.
     * @this {goog.testing.MockInterface}
     */
    function $tearDown(): void;
}

declare module 'goog.testing.graphics' {

    /**
     * Test if the given path matches the expected array of commands and parameters.
     * @param {Array.<string|number>} expected The expected array of commands and
     *     parameters.
     * @param {goog.graphics.Path} path The path to test against.
     */
    function assertPathEquals(expected: any /*string|number*/[], path: goog.graphics.Path): void;
}

declare module 'goog.testing.jsunit' {

    /**
     * Base path for JsUnit app files, relative to Closure's base path.
     * @type {string}
     */
    var BASE_PATH: string;

    /**
     * Filename for the core JS Unit script.
     * @type {string}
     */
    var CORE_SCRIPT: string;
}

declare module 'goog.testing.MockClock' {

    /**
     * Default wait timeout for mocking requestAnimationFrame (in milliseconds).
     *
     * @type {number}
     * @const
     */
    var REQUEST_ANIMATION_FRAME_TIMEOUT: number;
}

declare module 'goog.testing.Mock' {

    /**
     * Option that may be passed when constructing function, method, and
     * constructor mocks. Indicates that the expected calls should be accepted in
     * any order.
     * @const
     * @type {number}
     */
    var LOOSE: number;

    /**
     * Option that may be passed when constructing function, method, and
     * constructor mocks. Indicates that the expected calls should be accepted in
     * the recorded order only.
     * @const
     * @type {number}
     */
    var STRICT: number;
}

declare module 'goog.testing.mockmatchers' {

    /**
     * An instance of the IgnoreArgument matcher. Returns true for all matches.
     * @type {goog.testing.mockmatchers.IgnoreArgument}
     */
    var ignoreArgument: goog.testing.mockmatchers.IgnoreArgument;

    /**
     * A matcher that verifies that an argument is an array.
     * @type {goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isArray: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is a array-like.  A NodeList is an
     * example of a collection that is very close to an array.
     * @type {goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isArrayLike: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is a date-like.
     * @type {goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isDateLike: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is a string.
     * @type {goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isString: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is a boolean.
     * @type {goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isBoolean: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is a number.
     * @type {goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isNumber: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is a function.
     * @type {goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isFunction: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is an object.
     * @type {goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isObject: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is like a DOM node.
     * @type {goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isNodeLike: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A function that checks to see if an array matches a given set of
     * expectations.  The expectations array can be a mix of ArgumentMatcher
     * implementations and values.  True will be returned if values are identical or
     * if a matcher returns a positive result.
     * @param {Array} expectedArr An array of expectations which can be either
     *     values to check for equality or ArgumentMatchers.
     * @param {Array} arr The array to match.
     * @param {goog.testing.MockExpectation?=} opt_expectation The expectation
     *     for this match.
     * @return {boolean} Whether or not the given array matches the expectations.
     */
    function flexibleArrayMatcher(expectedArr: any[], arr: any[], opt_expectation?: goog.testing.MockExpectation): boolean;

    /**
     * A simple interface for executing argument matching.  A match in this case is
     * testing to see if a supplied object fits a given criteria.  True is returned
     * if the given criteria is met.
     * @param {Function=} opt_matchFn A function that evaluates a given argument
     *     and returns true if it meets a given criteria.
     * @param {?string=} opt_matchName The name expressing intent as part of
     *      an error message for when a match fails.
     * @constructor
     */
    class ArgumentMatcher {
        /**
         * A simple interface for executing argument matching.  A match in this case is
         * testing to see if a supplied object fits a given criteria.  True is returned
         * if the given criteria is met.
         * @param {Function=} opt_matchFn A function that evaluates a given argument
         *     and returns true if it meets a given criteria.
         * @param {?string=} opt_matchName The name expressing intent as part of
         *      an error message for when a match fails.
         * @constructor
         */
        constructor(opt_matchFn?: Function, opt_matchName?: string);
    
        /**
         * A function that takes a match argument and an optional MockExpectation
         * which (if provided) will get error information and returns whether or
         * not it matches.
         * @param {*} toVerify The argument that should be verified.
         * @param {goog.testing.MockExpectation?=} opt_expectation The expectation
         *     for this match.
         * @return {boolean} Whether or not a given argument passes verification.
         */
        matches(toVerify: any, opt_expectation?: goog.testing.MockExpectation): boolean;
    }

    /**
     * A matcher that verifies that an argument is an instance of a given class.
     * @param {Function} ctor The class that will be used for verification.
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     * @final
     */
    class InstanceOf extends goog.testing.mockmatchers.ArgumentMatcher {
        /**
         * A matcher that verifies that an argument is an instance of a given class.
         * @param {Function} ctor The class that will be used for verification.
         * @constructor
         * @extends {goog.testing.mockmatchers.ArgumentMatcher}
         * @final
         */
        constructor(ctor: Function);
    }

    /**
     * A matcher that verifies that an argument is of a given type (e.g. "object").
     * @param {string} type The type that a given argument must have.
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     * @final
     */
    class TypeOf extends goog.testing.mockmatchers.ArgumentMatcher {
        /**
         * A matcher that verifies that an argument is of a given type (e.g. "object").
         * @param {string} type The type that a given argument must have.
         * @constructor
         * @extends {goog.testing.mockmatchers.ArgumentMatcher}
         * @final
         */
        constructor(type: string);
    }

    /**
     * A matcher that verifies that an argument matches a given RegExp.
     * @param {RegExp} regexp The regular expression that the argument must match.
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     * @final
     */
    class RegexpMatch extends goog.testing.mockmatchers.ArgumentMatcher {
        /**
         * A matcher that verifies that an argument matches a given RegExp.
         * @param {RegExp} regexp The regular expression that the argument must match.
         * @constructor
         * @extends {goog.testing.mockmatchers.ArgumentMatcher}
         * @final
         */
        constructor(regexp: RegExp);
    }

    /**
     * A matcher that always returns true. It is useful when the user does not care
     * for some arguments.
     * For example: mockFunction('username', 'password', IgnoreArgument);
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     * @final
     */
    class IgnoreArgument extends goog.testing.mockmatchers.ArgumentMatcher {
        /**
         * A matcher that always returns true. It is useful when the user does not care
         * for some arguments.
         * For example: mockFunction('username', 'password', IgnoreArgument);
         * @constructor
         * @extends {goog.testing.mockmatchers.ArgumentMatcher}
         * @final
         */
        constructor();
    }

    /**
     * A matcher that verifies that the argument is an object that equals the given
     * expected object, using a deep comparison.
     * @param {Object} expectedObject An object to match against when
     *     verifying the argument.
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     */
    class ObjectEquals extends goog.testing.mockmatchers.ArgumentMatcher {
        /**
         * A matcher that verifies that the argument is an object that equals the given
         * expected object, using a deep comparison.
         * @param {Object} expectedObject An object to match against when
         *     verifying the argument.
         * @constructor
         * @extends {goog.testing.mockmatchers.ArgumentMatcher}
         */
        constructor(expectedObject: Object);
    
        /** @override */
        matches(): void;
    }

    /**
     * A matcher that saves the argument that it is verifying so that your unit test
     * can perform extra tests with this argument later.  For example, if the
     * argument is a callback method, the unit test can then later call this
     * callback to test the asynchronous portion of the call.
     * @param {goog.testing.mockmatchers.ArgumentMatcher|Function=} opt_matcher
     *     Argument matcher or matching function that will be used to validate the
     *     argument.  By default, argument will always be valid.
     * @param {?string=} opt_matchName The name expressing intent as part of
     *      an error message for when a match fails.
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     * @final
     */
    class SaveArgument extends goog.testing.mockmatchers.ArgumentMatcher {
        /**
         * A matcher that saves the argument that it is verifying so that your unit test
         * can perform extra tests with this argument later.  For example, if the
         * argument is a callback method, the unit test can then later call this
         * callback to test the asynchronous portion of the call.
         * @param {goog.testing.mockmatchers.ArgumentMatcher|Function=} opt_matcher
         *     Argument matcher or matching function that will be used to validate the
         *     argument.  By default, argument will always be valid.
         * @param {?string=} opt_matchName The name expressing intent as part of
         *      an error message for when a match fails.
         * @constructor
         * @extends {goog.testing.mockmatchers.ArgumentMatcher}
         * @final
         */
        constructor(opt_matcher?: any /*goog.testing.mockmatchers.ArgumentMatcher|Function*/, opt_matchName?: string);
    
        /** @override */
        matches(): void;
    
        /**
         * Saved argument that was verified.
         * @type {*}
         */
        arg: any;
    }
}

declare module 'goog.testing.MultiTestRunner' {

    /**
     * Default maximimum amount of time to spend at each stage of the test.
     * @type {number}
     */
    var DEFAULT_TIMEOUT_MS: number;

    /**
     * Messages corresponding to the numeric states.
     * @type {Array.<string>}
     */
    var STATES: string[];

    /**
     * Class used to manage the interaction with a single iframe.
     * @param {string} basePath The base path for tests.
     * @param {number} timeoutMs The time to wait for the test to load and run.
     * @param {boolean} verbosePasses Whether to show results for passes.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional dom helper.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class TestFrame extends goog.ui.Component {
        /**
         * Class used to manage the interaction with a single iframe.
         * @param {string} basePath The base path for tests.
         * @param {number} timeoutMs The time to wait for the test to load and run.
         * @param {boolean} verbosePasses Whether to show results for passes.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional dom helper.
         * @constructor
         * @extends {goog.ui.Component}
         * @final
         */
        constructor(basePath: string, timeoutMs: number, verbosePasses: boolean, opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Runs a test file in this test frame.
         * @param {string} testFile The test to run.
         */
        runTest(testFile: string): void;
    
        /**
         * @return {string} The test file the TestFrame is running.
         */
        getTestFile(): string;
    
        /**
         * @return {!Object} Stats about the test run.
         */
        getStats(): Object;
    
        /**
         * @return {string} The report for the test run.
         */
        getReport(): string;
    
        /**
         * @return {?boolean} Whether the test frame had a success.
         */
        isSuccess(): boolean;
    }
}

declare module 'goog.testing.PerformanceTimer' {

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
        (): any /*goog.async.Deferred|any (undefined)*/
    }

    /**
     * A task for the performance timer to measure. Callers can specify optional
     * setUp and tearDown methods to control state before and after each run of the
     * test function.
     * @param {goog.testing.PerformanceTimer.TestFunction} test Test function whose
     *     performance is to be measured.
     * @constructor
     * @final
     */
    class Task {
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
}

declare module 'goog.testing.PseudoRandom' {

    /**
     * Constant used as part of the algorithm.
     * @type {number}
     */
    var A: number;

    /**
     * Constant used as part of the algorithm. 2^31 - 1.
     * @type {number}
     */
    var M: number;

    /**
     * Constant used as part of the algorithm. It is equal to M / A.
     * @type {number}
     */
    var Q: number;

    /**
     * Constant used as part of the algorithm. It is equal to M % A.
     * @type {number}
     */
    var R: number;

    /**
     * Constant used as part of the algorithm to get values from range [0, 1).
     * @type {number}
     */
    var ONE_OVER_M_MINUS_ONE: number;
}

declare module 'recordedFunction' {

    /**
       * @return {number} Total number of calls.
       */
    function getCallCount(): number;

    /**
       * Asserts that the function was called {@code expected} times.
       * @param {number} expected The expected number of calls.
       */
    function assertCallCount(expected: number): void;

    /**
       * @return {!Array.<!goog.testing.FunctionCall>} All calls of the recorded
       *     function.
       */
    function getCalls(): goog.testing.FunctionCall[];

    /**
       * @return {goog.testing.FunctionCall} Last call of the recorded function or
       *     null if it hasn't been called.
       */
    function getLastCall(): goog.testing.FunctionCall;

    /**
       * Returns and removes the last call of the recorded function.
       * @return {goog.testing.FunctionCall} Last call of the recorded function or
       *     null if it hasn't been called.
       */
    function popLastCall(): goog.testing.FunctionCall;

    /**
       * Resets the recorded function and removes all calls.
       */
    function reset(): void;
}

declare module 'goog.testing.ShardingTestCase' {

    /**
     * Shards tests based on the test filename. Assumes that the filename is
     * formatted like 'foo_1of5_test.html'.
     * @param {string=} opt_name A descriptive name for the test case.
     */
    function shardByFileName(opt_name?: string): void;
}

declare module 'goog.testing.singleton' {

    /**
     * Deletes all singleton instances, so {@code getInstance} will return a new
     * instance on next call.
     */
    function reset(): void;

    /**
     * @deprecated Please use {@code goog.addSingletonGetter}.
     */
    var addSingletonGetter: any /*missing*/;
}

declare module 'goog.testing.stacktrace' {

    /**
     * Sets function to deobfuscate function names.
     * @param {function(string): string} fn function to deobfuscate function names.
     */
    function setDeobfuscateFunctionName(fn: (_0: string) => string): void;

    /**
     * Brings the stack trace into a common format across browsers.
     * @param {string} stack Browser-specific stack trace.
     * @return {string} Same stack trace in common format.
     */
    function canonicalize(stack: string): string;

    /**
     * Gets the native stack trace if available otherwise follows the call chain.
     * @return {string} The stack trace in canonical format.
     */
    function get(): string;

    /**
     * Class representing one stack frame.
     * @param {string} context Context object, empty in case of global functions or
     *     if the browser doesn't provide this information.
     * @param {string} name Function name, empty in case of anonymous functions.
     * @param {string} alias Alias of the function if available. For example the
     *     function name will be 'c' and the alias will be 'b' if the function is
     *     defined as <code>a.b = function c() {};</code>.
     * @param {string} args Arguments of the function in parentheses if available.
     * @param {string} path File path or URL including line number and optionally
     *     column number separated by colons.
     * @constructor
     * @final
     */
    class Frame {
        /**
         * Class representing one stack frame.
         * @param {string} context Context object, empty in case of global functions or
         *     if the browser doesn't provide this information.
         * @param {string} name Function name, empty in case of anonymous functions.
         * @param {string} alias Alias of the function if available. For example the
         *     function name will be 'c' and the alias will be 'b' if the function is
         *     defined as <code>a.b = function c() {};</code>.
         * @param {string} args Arguments of the function in parentheses if available.
         * @param {string} path File path or URL including line number and optionally
         *     column number separated by colons.
         * @constructor
         * @final
         */
        constructor(context: string, name: string, alias: string, args: string, path: string);
    
        /**
         * @return {string} The function name or empty string if the function is
         *     anonymous and the object field which it's assigned to is unknown.
         */
        getName(): string;
    
        /**
         * @return {boolean} Whether the stack frame contains an anonymous function.
         */
        isAnonymous(): boolean;
    
        /**
         * Brings one frame of the stack trace into a common format across browsers.
         * @return {string} Pretty printed stack frame.
         */
        toCanonicalString(): string;
    }
}

declare module 'goog.testing.TestCase' {

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
    var MAX_RUN_TIME: number;

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

    /**
     * A class representing a single test function.
     * @param {string} name The test name.
     * @param {Function} ref Reference to the test function.
     * @param {Object=} opt_scope Optional scope that the test function should be
     *     called in.
     * @constructor
     */
    class Test {
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

    /**
     * A class for representing test results.  A bag of public properties.
     * @param {goog.testing.TestCase} testCase The test case that owns this result.
     * @constructor
     * @final
     */
    class Result {
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

    /**
     * A class representing an error thrown by the test
     * @param {string} source The name of the test which threw the error.
     * @param {string} message The error message.
     * @param {string=} opt_stack A string showing the execution stack.
     * @constructor
     * @final
     */
    class Error {
        /**
         * A class representing an error thrown by the test
         * @param {string} source The name of the test which threw the error.
         * @param {string} message The error message.
         * @param {string=} opt_stack A string showing the execution stack.
         * @constructor
         * @final
         */
        constructor(source: string, message: string, opt_stack?: string);
    
        /**
         * Returns a string representing the error object.
         * @return {string} A string representation of the error.
         * @override
         */
        toString(): string;
    }
}

declare module 'goog.testing.watchers' {

    /** @private {!Array.<function()>} */
    var resetWatchers_: any /*missing*/;

    /**
     * Fires clock reset watching functions.
     */
    function signalClockReset(): void;

    /**
     * Enqueues a function to be called when the clock used for setTimeout is reset.
     * @param {function()} fn
     */
    function watchClockReset(fn: () => any /*missing*/): void;
}

