/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/testing/objectpropertystring.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/testing/propertyreplacer.d.ts" />
/// <reference path="../../../closure/goog/testing/mockinterface.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/testing/stacktrace.d.ts" />
/// <reference path="../../../closure/goog/testing/asserts.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/testing/mockmatchers.d.ts" />
/// <reference path="../../../closure/goog/testing/mock.d.ts" />
/// <reference path="../../../closure/goog/testing/strictmock.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/testing/loosemock.d.ts" />
/// <reference path="../../../closure/goog/testing/functionmock.d.ts" />

declare module goog.testing {

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
}

