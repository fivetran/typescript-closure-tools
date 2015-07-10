/// <reference path="../../../globals.d.ts" />
/// <reference path="./mockinterface.d.ts" />
/// <reference path="./strictmock.d.ts" />
/// <reference path="./loosemock.d.ts" />

declare module goog.testing {

    class MockControl extends MockControl__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MockControl__Class  { 
    
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
            createStrictMock(objectToMock: Object|Function, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean): goog.testing.StrictMock;
    
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
            createLooseMock(objectToMock: Object|Function, opt_ignoreUnexpectedCalls?: boolean, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean): goog.testing.LooseMock;
    
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
             * @return {!goog.testing.MockInterface} The mocked method.
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
             * @return {!goog.testing.MockInterface} The mocked method.
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
