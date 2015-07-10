/// <reference path="../../../globals.d.ts" />
/// <reference path="./storage.d.ts" />
/// <reference path="./mechanism/mechanism.d.ts" />

declare module goog.storage {

    class RichStorage extends RichStorage__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class RichStorage__Class extends goog.storage.Storage__Class  { 
    
            /**
             * Provides a storage for data with attached metadata.
             *
             * @param {!goog.storage.mechanism.Mechanism} mechanism The underlying
             *     storage mechanism.
             * @constructor
             * @extends {goog.storage.Storage}
             */
            constructor(mechanism: goog.storage.mechanism.Mechanism);
    
            /**
             * Get an item wrapper (the item and its metadata) from the storage.
             *
             * WARNING: This returns an Object, which once used to be
             * goog.storage.RichStorage.Wrapper. This is due to the fact
             * that deserialized objects lose type information and it
             * is hard to do proper typecasting in JavaScript. Be sure
             * you know what you are doing when using the returned value.
             *
             * @param {string} key The key to get.
             * @return {(!Object|undefined)} The wrapper, or undefined if not found.
             */
            getWrapper(key: string): Object|any /*undefined*/;
    } 
    
}

declare module goog.storage.RichStorage {

    class Wrapper extends Wrapper__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Wrapper__Class  { 
    
            /**
             * Wraps a value so metadata can be associated with it. You probably want
             * to use goog.storage.RichStorage.Wrapper.wrapIfNecessary to avoid multiple
             * embeddings.
             *
             * @param {*} value The value to wrap.
             * @constructor
             * @final
             */
            constructor(value: any);
    } 
    

    /**
     * Metadata key under which the actual data is stored.
     *
     * @type {string}
     * @protected
     */
    var DATA_KEY: string;
}

declare module goog.storage.RichStorage.Wrapper {

    /**
     * Convenience method for wrapping a value so metadata can be associated with
     * it. No-op if the value is already wrapped or is undefined.
     *
     * @param {*} value The value to wrap.
     * @return {(!goog.storage.RichStorage.Wrapper|undefined)} The wrapper.
     */
    function wrapIfNecessary(value: any): goog.storage.RichStorage.Wrapper|any /*undefined*/;

    /**
     * Unwraps a value, any metadata is discarded (not returned). You might want to
     * use goog.storage.RichStorage.Wrapper.unwrapIfPossible to handle cases where
     * the wrapper is missing.
     *
     * @param {!Object} wrapper The wrapper.
     * @return {*} The wrapped value.
     */
    function unwrap(wrapper: Object): any;

    /**
     * Convenience method for unwrapping a value. Returns undefined if the
     * wrapper is missing.
     *
     * @param {(!Object|undefined)} wrapper The wrapper.
     * @return {*} The wrapped value or undefined.
     */
    function unwrapIfPossible(wrapper: Object|any /*undefined*/): any;
}
