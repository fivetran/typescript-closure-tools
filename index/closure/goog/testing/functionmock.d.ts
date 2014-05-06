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

declare module goog.testing {

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
}

declare module goog.testing.MethodMock {

    /**
     * Resets the global function that we mocked back to its original state.
     * @this {goog.testing.MockInterface}
     */
    function $tearDown(): void;
}

