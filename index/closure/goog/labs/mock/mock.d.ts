/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />

declare module goog.labs.mock {

    /**
     * Error thrown when verification failed.
     *
     * @param {Array} recordedCalls The recorded calls that didn't match the
     *     expectation.
     * @param {!string} methodName The expected method call.
     * @param {!Array} args The expected arguments.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class VerificationError extends goog.debug.Error {
        /**
         * Error thrown when verification failed.
         *
         * @param {Array} recordedCalls The recorded calls that didn't match the
         *     expectation.
         * @param {!string} methodName The expected method call.
         * @param {!Array} args The expected arguments.
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor(recordedCalls: any[], methodName: string, args: any[]);
    }

    /**
     * Mocks a given object or class.
     *
     * @param {!Object} objectOrClass An instance or a constructor of a class to be
     *     mocked.
     * @return {!Object} The mocked object.
     */
    function mock(objectOrClass: Object): Object;

    /**
     * Mocks a given function.
     *
     * @param {!Function} func A function to be mocked.
     * @return {!Function} The mocked function.
     */
    function mockFunction(func: Function): Function;

    /**
     * Spies on a given object.
     *
     * @param {!Object} obj The object to be spied on.
     * @return {!Object} The spy object.
     */
    function spy(obj: Object): Object;

    /**
     * Returns an object that can be used to verify calls to specific methods of a
     * given mock.
     *
     * @param {!Object} obj The mocked object.
     * @return {!Object} The verifier.
     */
    function verify(obj: Object): Object;

    /**
     * A unique Id generator that does not modify the object.
     * @param {Object!} obj The object whose unique ID we want to generate.
     * @return {number} an unique id for the object.
     */
    function getUid(obj: Object): number;

    /**
     * Facilitates (and is the first step in) setting up stubs. Obtains an object
     * on which, the method to be mocked is called to create a stub. Sample usage:
     *
     * var mockObj = goog.labs.mock.mock(objectBeingMocked);
     * goog.labs.mock.when(mockObj).getFoo(3).thenReturn(4);
     *
     * @param {!Object} mockObject The mocked object.
     * @return {!goog.labs.mock.StubBinder_} The property binder.
     */
    function when(mockObject: Object): any;
}

