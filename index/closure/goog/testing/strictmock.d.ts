/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/testing/mockinterface.d.ts" />
/// <reference path="../../../closure/goog/testing/stacktrace.d.ts" />
/// <reference path="../../../closure/goog/testing/asserts.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/testing/mockmatchers.d.ts" />
/// <reference path="../../../closure/goog/testing/mock.d.ts" />

declare module goog.testing {

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
    }
}

