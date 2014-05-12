/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../debug/error.d.ts" />

declare module goog.labs.mock {

    class VerificationError extends VerificationError.__Class { }
    module VerificationError {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.debug.Error.__Class {
    
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
    }

    class MockManager_ extends MockManager_.__Class { }
    module MockManager_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Base class that provides basic functionality for creating, adding and
             * finding bindings, offering an executor method that is called when a call to
             * the stub is made, an array to hold the bindings and the mocked item, among
             * other things.
             *
             * @constructor
             * @struct
             * @private
             */
            constructor();
    
            /**
             * Returns the mock object. This should have a stubbed method for each method
             * on the object being mocked.
             *
             * @return {!Object|!Function} The mock object.
             */
            getMockedItem(): any /*Object|Function*/;
    
            /**
             * Adds a binding for the method name and arguments to be stubbed.
             *
             * @param {?string} methodName The name of the stubbed method.
             * @param {!Array} args The arguments passed to the method.
             * @param {!Function} func The stub function.
             *
             */
            addBinding(methodName: string, args: any[], func: Function): void;
    
            /**
             * Returns a stub, if defined, for the method name and arguments passed in.
             *
             * @param {string} methodName The name of the stubbed method.
             * @param {!Array} args The arguments passed to the method.
             * @return {Function} The stub function or undefined.
             * @protected
             */
            findBinding(methodName: string, args: any[]): Function;
    
            /**
             * Returns a stub, if defined, for the method name and arguments passed in as
             * parameters.
             *
             * @param {string} methodName The name of the stubbed method.
             * @param {!Array} args The arguments passed to the method.
             * @return {Function} The stub function or undefined.
             * @protected
             */
            getExecutor(methodName: string, args: any[]): Function;
    
            /**
             * Looks up the list of stubs defined on the mock object and executes the
             * function associated with that stub.
             *
             * @param {string} methodName The name of the method to execute.
             * @param {...} var_args The arguments passed to the method.
             * @return {*} Value returned by the stub function.
             * @protected
             */
            executeStub(methodName: string, var_args: any /*missing*/): any;
    
            /**
             * Verify invocation of a method with specific arguments.
             *
             * @param {string} methodName The name of the method.
             * @param {...} var_args The arguments passed.
             * @protected
             */
            verifyInvocation(methodName: string, var_args: any /*missing*/): void;
        }
    }

    class MockObjectManager_ extends MockObjectManager_.__Class { }
    module MockObjectManager_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.labs.mock.MockManager_.__Class {
    
            /**
             * Sets up mock for the given object (or class), stubbing out all the defined
             * methods. By default, all stubs return {@code undefined}, though stubs can be
             * later defined using {@code goog.labs.mock.when}.
             *
             * @param {!Object|!Function} objOrClass The object or class to set up the mock
             *     for. A class is a constructor function.
             *
             * @constructor
             * @struct
             * @extends {goog.labs.mock.MockManager_}
             * @private
             */
            constructor(objOrClass: Object);
            /**
             * Sets up mock for the given object (or class), stubbing out all the defined
             * methods. By default, all stubs return {@code undefined}, though stubs can be
             * later defined using {@code goog.labs.mock.when}.
             *
             * @param {!Object|!Function} objOrClass The object or class to set up the mock
             *     for. A class is a constructor function.
             *
             * @constructor
             * @struct
             * @extends {goog.labs.mock.MockManager_}
             * @private
             */
            constructor(objOrClass: Function);
        }
    }

    class MockSpyManager_ extends MockSpyManager_.__Class { }
    module MockSpyManager_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.labs.mock.MockObjectManager_.__Class {
    
            /**
             * Sets up the spying behavior for the given object.
             *
             * @param {!Object} obj The object to be spied on.
             *
             * @constructor
             * @struct
             * @extends {goog.labs.mock.MockObjectManager_}
             * @private
             */
            constructor(obj: Object);
        }
    }

    class MockFunctionManager_ extends MockFunctionManager_.__Class { }
    module MockFunctionManager_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.labs.mock.MockManager_.__Class {
    
            /**
             * Sets up mock for the given function, stubbing out. By default, all stubs
             * return {@code undefined}, though stubs can be later defined using
             * {@code goog.labs.mock.when}.
             *
             * @param {!Function} func The function to set up the mock for.
             *
             * @constructor
             * @struct
             * @extends {goog.labs.mock.MockManager_}
             * @private
             */
            constructor(func: Function);
        }
    }

    class StubBinder_ extends StubBinder_.__Class { }
    module StubBinder_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * The stub binder is the object that helps define the stubs by binding
             * method name to the stub method.
             *
             * @param {!goog.labs.mock.MockManager_}
             *   mockManager The mock manager.
             * @param {?string} name The method name.
             * @param {!Array} args The other arguments to the method.
             *
             * @constructor
             * @struct
             * @private
             */
            constructor(mockManager: goog.labs.mock.MockManager_, name: string, args: any[]);
    
            /**
             * Defines the stub to be called for the method name and arguments bound
             * earlier.
             * TODO(user): Add support for the 'Answer' interface.
             *
             * @param {!Function} func The stub.
             */
            then(func: Function): void;
    
            /**
             * Defines the stub to return a specific value for a method name and arguments.
             *
             * @param {*} value The value to return.
             */
            thenReturn(value: any): void;
        }
    }

    class MethodBinding_ extends MethodBinding_.__Class { }
    module MethodBinding_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Represents a binding between a method name, args and a stub.
             *
             * @param {?string} methodName The name of the method being stubbed.
             * @param {!Array} args The arguments passed to the method.
             * @param {!Function} stub The stub function to be called for the given method.
             * @constructor
             * @struct
             * @private
             */
            constructor(methodName: string, args: any[], stub: Function);
    
            /**
             * @return {!Function} The stub to be executed.
             */
            getStub(): Function;
    
            /**
             * @return {string} The method name for this binding.
             */
            getMethodName(): string;
    
            /**
             * Determines whether the given args match the stored args_. Used to determine
             * which stub to invoke for a method.
             *
             * @param {string} methodName The name of the method being stubbed.
             * @param {!Array} args An array of arguments.
             * @param {boolean} isVerification Whether this is a function verification call
             *     or not.
             * @return {boolean} If it matches the stored arguments.
             */
            matches(methodName: string, args: any[], isVerification: boolean): boolean;
        }
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
    function when(mockObject: Object): goog.labs.mock.StubBinder_;
}
