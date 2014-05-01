// Generated Wed Apr 30 16:35:43 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />
/// <reference path="../../goog/testing.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.storage.mechanism' {

    /**
     * Errors thrown by storage mechanisms.
     * @enum {string}
     */
    enum ErrorCode { INVALID_VALUE, QUOTA_EXCEEDED, STORAGE_DISABLED } 

    /**
     * Wraps a storage mechanism with a custom error handler.
     *
     * @param {!goog.storage.mechanism.Mechanism} mechanism Underlying storage
     *     mechanism.
     * @param {goog.storage.mechanism.ErrorHandlingMechanism.ErrorHandler}
     *     errorHandler An error handler.
     * @constructor
     * @extends {goog.storage.mechanism.Mechanism}
     * @final
     */
    class ErrorHandlingMechanism extends goog.storage.mechanism.Mechanism {
        /**
         * Wraps a storage mechanism with a custom error handler.
         *
         * @param {!goog.storage.mechanism.Mechanism} mechanism Underlying storage
         *     mechanism.
         * @param {goog.storage.mechanism.ErrorHandlingMechanism.ErrorHandler}
         *     errorHandler An error handler.
         * @constructor
         * @extends {goog.storage.mechanism.Mechanism}
         * @final
         */
        constructor(mechanism: goog.storage.mechanism.Mechanism, errorHandler: goog.storage.mechanism.ErrorHandlingMechanism.ErrorHandler);
    
        /** @override */
        set(): void;
    
        /** @override */
        get(): void;
    
        /** @override */
        remove(): void;
    }

    /**
     * Provides a storage mechanism that uses HTML5 local storage.
     *
     * @constructor
     * @extends {goog.storage.mechanism.HTML5WebStorage}
     */
    class HTML5LocalStorage extends goog.storage.mechanism.HTML5WebStorage {
        /**
         * Provides a storage mechanism that uses HTML5 local storage.
         *
         * @constructor
         * @extends {goog.storage.mechanism.HTML5WebStorage}
         */
        constructor();
    }

    /**
     * Provides a storage mechanism that uses HTML5 session storage.
     *
     * @constructor
     * @extends {goog.storage.mechanism.HTML5WebStorage}
     */
    class HTML5SessionStorage extends goog.storage.mechanism.HTML5WebStorage {
        /**
         * Provides a storage mechanism that uses HTML5 session storage.
         *
         * @constructor
         * @extends {goog.storage.mechanism.HTML5WebStorage}
         */
        constructor();
    }

    /**
     * Provides a storage mechanism that uses HTML5 Web storage.
     *
     * @param {Storage} storage The Web storage object.
     * @constructor
     * @extends {goog.storage.mechanism.IterableMechanism}
     */
    class HTML5WebStorage extends goog.storage.mechanism.IterableMechanism {
        /**
         * Provides a storage mechanism that uses HTML5 Web storage.
         *
         * @param {Storage} storage The Web storage object.
         * @constructor
         * @extends {goog.storage.mechanism.IterableMechanism}
         */
        constructor(storage: Storage);
    
        /**
         * Determines whether or not the mechanism is available.
         * It works only if the provided web storage object exists and is enabled.
         *
         * @return {boolean} True if the mechanism is available.
         */
        isAvailable(): boolean;
    
        /** @override */
        set(): void;
    
        /** @override */
        get(): void;
    
        /** @override */
        remove(): void;
    
        /** @override */
        getCount(): void;
    
        /** @override */
        __iterator__(): void;
    
        /** @override */
        clear(): void;
    
        /**
         * Gets the key for a given key index. If an index outside of
         * [0..this.getCount()) is specified, this function returns null.
         * @param {number} index A key index.
         * @return {?string} A storage key, or null if the specified index is out of
         *     range.
         */
        key(index: number): string;
    }

    /**
     * Provides a storage mechanism using IE userData.
     *
     * @param {string} storageKey The key (store name) to store the data under.
     * @param {string=} opt_storageNodeId The ID of the associated HTML element,
     *     one will be created if not provided.
     * @constructor
     * @extends {goog.storage.mechanism.IterableMechanism}
     * @final
     */
    class IEUserData extends goog.storage.mechanism.IterableMechanism {
        /**
         * Provides a storage mechanism using IE userData.
         *
         * @param {string} storageKey The key (store name) to store the data under.
         * @param {string=} opt_storageNodeId The ID of the associated HTML element,
         *     one will be created if not provided.
         * @constructor
         * @extends {goog.storage.mechanism.IterableMechanism}
         * @final
         */
        constructor(storageKey: string, opt_storageNodeId?: string);
    
        /**
         * Determines whether or not the mechanism is available.
         *
         * @return {boolean} True if the mechanism is available.
         */
        isAvailable(): boolean;
    
        /** @override */
        set(): void;
    
        /** @override */
        get(): void;
    
        /** @override */
        remove(): void;
    
        /** @override */
        getCount(): void;
    
        /** @override */
        __iterator__(): void;
    
        /** @override */
        clear(): void;
    }

    /**
     * Interface for all iterable storage mechanisms.
     *
     * @constructor
     * @extends {goog.storage.mechanism.Mechanism}
     */
    class IterableMechanism extends goog.storage.mechanism.Mechanism {
        /**
         * Interface for all iterable storage mechanisms.
         *
         * @constructor
         * @extends {goog.storage.mechanism.Mechanism}
         */
        constructor();
    
        /**
         * Get the number of stored key-value pairs.
         *
         * Could be overridden in a subclass, as the default implementation is not very
         * efficient - it iterates over all keys.
         *
         * @return {number} Number of stored elements.
         */
        getCount(): number;
    
        /**
         * Returns an iterator that iterates over the elements in the storage. Will
         * throw goog.iter.StopIteration after the last element.
         *
         * @param {boolean=} opt_keys True to iterate over the keys. False to iterate
         *     over the values.  The default value is false.
         * @return {!goog.iter.Iterator} The iterator.
         */
        __iterator__: any /*missing*/;
    
        /**
         * Remove all key-value pairs.
         *
         * Could be overridden in a subclass, as the default implementation is not very
         * efficient - it iterates over all keys.
         */
        clear(): void;
    }

    /**
     * Basic interface for all storage mechanisms.
     *
     * @constructor
     */
    class Mechanism {
        /**
         * Basic interface for all storage mechanisms.
         *
         * @constructor
         */
        constructor();
    
        /**
         * Set a value for a key.
         *
         * @param {string} key The key to set.
         * @param {string} value The string to save.
         */
        set: any /*missing*/;
    
        /**
         * Get the value stored under a key.
         *
         * @param {string} key The key to get.
         * @return {?string} The corresponding value, null if not found.
         */
        get: any /*missing*/;
    
        /**
         * Remove a key and its value.
         *
         * @param {string} key The key to remove.
         */
        remove: any /*missing*/;
    }

    /**
     * Wraps an iterable storage mechanism and creates artificial namespaces.
     *
     * @param {!goog.storage.mechanism.IterableMechanism} mechanism Underlying
     *     iterable storage mechanism.
     * @param {string} prefix Prefix for creating an artificial namespace.
     * @constructor
     * @extends {goog.storage.mechanism.IterableMechanism}
     * @final
     */
    class PrefixedMechanism extends goog.storage.mechanism.IterableMechanism {
        /**
         * Wraps an iterable storage mechanism and creates artificial namespaces.
         *
         * @param {!goog.storage.mechanism.IterableMechanism} mechanism Underlying
         *     iterable storage mechanism.
         * @param {string} prefix Prefix for creating an artificial namespace.
         * @constructor
         * @extends {goog.storage.mechanism.IterableMechanism}
         * @final
         */
        constructor(mechanism: goog.storage.mechanism.IterableMechanism, prefix: string);
    
        /** @override */
        set(): void;
    
        /** @override */
        get(): void;
    
        /** @override */
        remove(): void;
    
        /** @override */
        __iterator__(): void;
    }
}

declare module 'goog.storage.mechanism.ErrorHandlingMechanism' {

    /**
     * Valid storage mechanism operations.
     * @enum {string}
     */
    enum Operation { SET, GET, REMOVE } 

    /**
     * A function that handles errors raised in goog.storage.  Since some places in
     * the goog.storage codebase throw strings instead of Error objects, we accept
     * these as a valid parameter type.  It supports the following arguments:
     *
     * 1) The raised error (either in Error or string form);
     * 2) The operation name which triggered the error, as defined per the
     *    ErrorHandlingMechanism.Operation enum;
     * 3) The key that is passed to a storage method;
     * 4) An optional value that is passed to a storage method (only used in set
     *    operations).
     *
     * @typedef {function(
     *   (!Error|string),
     *   goog.storage.mechanism.ErrorHandlingMechanism.Operation,
     *   string,
     *   *=)}
     */
    var ErrorHandler: any /*missing*/;
}

declare module 'goog.storage.mechanism.HTML5WebStorage' {

    /**
     * The key used to check if the storage instance is available.
     * @private {string}
     * @const
     */
    var STORAGE_AVAILABLE_KEY_: any /*missing*/;
}

declare module 'goog.storage.mechanism.IEUserData' {

    /**
     * Encoding map for characters which are not encoded by encodeURIComponent().
     * See encodeKey_ documentation for encoding details.
     *
     * @type {!Object}
     * @const
     */
    var ENCODE_MAP: Object;
}

declare module 'goog.storage.mechanism.mechanismfactory' {

    /**
     * The key to shared userData storage.
     * @type {string}
     */
    var USER_DATA_SHARED_KEY: string;

    /**
     * Returns the best local storage mechanism, or null if unavailable.
     * Local storage means that the database is placed on user's computer.
     * The key-value database is normally shared between all the code paths
     * that request it, so using an optional namespace is recommended. This
     * provides separation and makes key collisions unlikely.
     *
     * @param {string=} opt_namespace Restricts the visibility to given namespace.
     * @return {goog.storage.mechanism.IterableMechanism} Created mechanism or null.
     */
    function create(opt_namespace?: string): goog.storage.mechanism.IterableMechanism;

    /**
     * Returns an HTML5 local storage mechanism, or null if unavailable.
     * Since the HTML5 local storage does not support namespaces natively,
     * and the key-value database is shared between all the code paths
     * that request it, it is recommended that an optional namespace is
     * used to provide key separation employing a prefix.
     *
     * @param {string=} opt_namespace Restricts the visibility to given namespace.
     * @return {goog.storage.mechanism.IterableMechanism} Created mechanism or null.
     */
    function createHTML5LocalStorage(opt_namespace?: string): goog.storage.mechanism.IterableMechanism;

    /**
     * Returns an HTML5 session storage mechanism, or null if unavailable.
     * Since the HTML5 session storage does not support namespaces natively,
     * and the key-value database is shared between all the code paths
     * that request it, it is recommended that an optional namespace is
     * used to provide key separation employing a prefix.
     *
     * @param {string=} opt_namespace Restricts the visibility to given namespace.
     * @return {goog.storage.mechanism.IterableMechanism} Created mechanism or null.
     */
    function createHTML5SessionStorage(opt_namespace?: string): goog.storage.mechanism.IterableMechanism;

    /**
     * Returns an IE userData local storage mechanism, or null if unavailable.
     * Using an optional namespace is recommended to provide separation and
     * avoid key collisions.
     *
     * @param {string=} opt_namespace Restricts the visibility to given namespace.
     * @return {goog.storage.mechanism.IterableMechanism} Created mechanism or null.
     */
    function createIEUserData(opt_namespace?: string): goog.storage.mechanism.IterableMechanism;
}

