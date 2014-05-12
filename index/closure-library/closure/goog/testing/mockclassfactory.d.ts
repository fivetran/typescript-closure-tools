/// <reference path="../../../globals.d.ts" />
/// <reference path="./strictmock.d.ts" />
/// <reference path="./loosemock.d.ts" />

declare module goog.testing {

    class MockClassRecord extends MockClassRecord.__Class { }
    module MockClassRecord {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
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
            setStaticMock(staticMock: goog.testing.StrictMock): void;
            /**
             * A setter for the static mock.
             * @param {goog.testing.StrictMock|goog.testing.LooseMock} staticMock A mock to
             *     associate with the static functions for the referenced class.
             */
            setStaticMock(staticMock: goog.testing.LooseMock): void;
    
            /**
             * Adds a new mock instance mapping.  The mapping connects a set of function
             * arguments to a specific mock instance.
             * @param {Array} args An array of function arguments.
             * @param {goog.testing.StrictMock|goog.testing.LooseMock} mock A mock
             *     associated with the supplied arguments.
             */
            addMockInstance(args: any[], mock: goog.testing.StrictMock): void;
            /**
             * Adds a new mock instance mapping.  The mapping connects a set of function
             * arguments to a specific mock instance.
             * @param {Array} args An array of function arguments.
             * @param {goog.testing.StrictMock|goog.testing.LooseMock} mock A mock
             *     associated with the supplied arguments.
             */
            addMockInstance(args: any[], mock: goog.testing.LooseMock): void;
    
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
    }

    class MockClassFactory extends MockClassFactory.__Class { }
    module MockClassFactory {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
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
    }
}
