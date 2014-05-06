/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/testing/mockinterface.d.ts" />
/// <reference path="../../../closure/goog/testing/stacktrace.d.ts" />
/// <reference path="../../../closure/goog/testing/asserts.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/testing/mockmatchers.d.ts" />
/// <reference path="../../../closure/goog/testing/mock.d.ts" />

declare module goog.testing {

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
    }
}

