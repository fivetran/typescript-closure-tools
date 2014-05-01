// Generated Wed Apr 30 16:35:37 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/crypt.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/json.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/testing.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.storage.collectableStorageTester' {

    /**
     * Tests basic operation: expiration and collection of collectable storage.
     *
     * @param {goog.storage.mechanism.IterableMechanism} mechanism
     * @param {goog.testing.MockClock} clock
     * @param {goog.storage.CollectableStorage} storage
      */
    function runBasicTests(mechanism: goog.storage.mechanism.IterableMechanism, clock: goog.testing.MockClock, storage: goog.storage.CollectableStorage): void;
}

declare module 'goog.storage.EncryptedStorage' {

    /**
     * Metadata key under which the salt is stored.
     *
     * @type {string}
     * @protected
     */
    var SALT_KEY: string;
}

declare module 'goog.storage' {

    /**
     * Errors thrown by the storage.
     * @enum {string}
     */
    enum ErrorCode { INVALID_VALUE, DECRYPTION_ERROR } 

    /**
     * Provides a storage with expirning keys and a collection method.
     *
     * @param {!goog.storage.mechanism.IterableMechanism} mechanism The underlying
     *     storage mechanism.
     * @constructor
     * @extends {goog.storage.ExpiringStorage}
     */
    class CollectableStorage extends goog.storage.ExpiringStorage {
        /**
         * Provides a storage with expirning keys and a collection method.
         *
         * @param {!goog.storage.mechanism.IterableMechanism} mechanism The underlying
         *     storage mechanism.
         * @constructor
         * @extends {goog.storage.ExpiringStorage}
         */
        constructor(mechanism: goog.storage.mechanism.IterableMechanism);
    
        /**
         * Cleans up the storage by removing expired keys.
         *
         * @param {Array.<string>} keys List of all keys.
         * @param {boolean=} opt_strict Also remove invalid keys.
         * @return {!Array.<string>} a list of expired keys.
         * @protected
         */
        collectInternal(keys: string[], opt_strict?: boolean): string[];
    
        /**
         * Cleans up the storage by removing expired keys.
         *
         * @param {boolean=} opt_strict Also remove invalid keys.
         */
        collect(opt_strict?: boolean): void;
    }

    /**
     * Provides an encrypted storage. The keys are hashed with a secret, so
     * their existence cannot be verified without the knowledge of the secret.
     * The values are encrypted using the key, a salt, and the secret, so
     * stream cipher initialization varies for each stored value.
     *
     * @param {!goog.storage.mechanism.IterableMechanism} mechanism The underlying
     *     storage mechanism.
     * @param {string} secret The secret key used to encrypt the storage.
     * @constructor
     * @extends {goog.storage.CollectableStorage}
     * @final
     */
    class EncryptedStorage extends goog.storage.CollectableStorage {
        /**
         * Provides an encrypted storage. The keys are hashed with a secret, so
         * their existence cannot be verified without the knowledge of the secret.
         * The values are encrypted using the key, a salt, and the secret, so
         * stream cipher initialization varies for each stored value.
         *
         * @param {!goog.storage.mechanism.IterableMechanism} mechanism The underlying
         *     storage mechanism.
         * @param {string} secret The secret key used to encrypt the storage.
         * @constructor
         * @extends {goog.storage.CollectableStorage}
         * @final
         */
        constructor(mechanism: goog.storage.mechanism.IterableMechanism, secret: string);
    
        /** @override */
        set(): void;
    
        /** @override */
        getWrapper(): void;
    
        /** @override */
        remove(): void;
    }

    /**
     * Provides a storage with expirning keys.
     *
     * @param {!goog.storage.mechanism.Mechanism} mechanism The underlying
     *     storage mechanism.
     * @constructor
     * @extends {goog.storage.RichStorage}
     */
    class ExpiringStorage extends goog.storage.RichStorage {
        /**
         * Provides a storage with expirning keys.
         *
         * @param {!goog.storage.mechanism.Mechanism} mechanism The underlying
         *     storage mechanism.
         * @constructor
         * @extends {goog.storage.RichStorage}
         */
        constructor(mechanism: goog.storage.mechanism.Mechanism);
    
        /**
         * Set an item in the storage.
         *
         * @param {string} key The key to set.
         * @param {*} value The value to serialize to a string and save.
         * @param {number=} opt_expiration The number of miliseconds since epoch
         *     (as in goog.now()) when the value is to expire. If the expiration
         *     time is not provided, the value will persist as long as possible.
         * @override
         */
        set(key: string, value: any, opt_expiration?: number): void;
    
        /**
         * Get an item wrapper (the item and its metadata) from the storage.
         *
         * @param {string} key The key to get.
         * @param {boolean=} opt_expired If true, return expired wrappers as well.
         * @return {(!Object|undefined)} The wrapper, or undefined if not found.
         * @override
         */
        getWrapper(key: string, opt_expired?: boolean): any /*Object|any (undefined)*/;
    }

    /**
     * Provides a storage for data with attached metadata.
     *
     * @param {!goog.storage.mechanism.Mechanism} mechanism The underlying
     *     storage mechanism.
     * @constructor
     * @extends {goog.storage.Storage}
     */
    class RichStorage extends goog.storage.Storage {
        /**
         * Provides a storage for data with attached metadata.
         *
         * @param {!goog.storage.mechanism.Mechanism} mechanism The underlying
         *     storage mechanism.
         * @constructor
         * @extends {goog.storage.Storage}
         */
        constructor(mechanism: goog.storage.mechanism.Mechanism);
    
        /** @override */
        set(): void;
    
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
        getWrapper(key: string): any /*Object|any (undefined)*/;
    
        /** @override */
        get(): void;
    }

    /**
     * The base implementation for all storage APIs.
     *
     * @param {!goog.storage.mechanism.Mechanism} mechanism The underlying
     *     storage mechanism.
     * @constructor
     */
    class Storage {
        /**
         * The base implementation for all storage APIs.
         *
         * @param {!goog.storage.mechanism.Mechanism} mechanism The underlying
         *     storage mechanism.
         * @constructor
         */
        constructor(mechanism: goog.storage.mechanism.Mechanism);
    
        /**
         * Sets an item in the data storage.
         *
         * @param {string} key The key to set.
         * @param {*} value The value to serialize to a string and save.
         */
        set(key: string, value: any): void;
    
        /**
         * Gets an item from the data storage.
         *
         * @param {string} key The key to get.
         * @return {*} Deserialized value or undefined if not found.
         */
        get(key: string): any;
    
        /**
         * Removes an item from the data storage.
         *
         * @param {string} key The key to remove.
         */
        remove(key: string): void;
    }
}

declare module 'goog.storage.ExpiringStorage' {

    /**
     * Metadata key under which the expiration time is stored.
     *
     * @type {string}
     * @protected
     */
    var EXPIRATION_TIME_KEY: string;

    /**
     * Metadata key under which the creation time is stored.
     *
     * @type {string}
     * @protected
     */
    var CREATION_TIME_KEY: string;

    /**
     * Returns the wrapper creation time.
     *
     * @param {!Object} wrapper The wrapper.
     * @return {number|undefined} Wrapper creation time.
     */
    function getCreationTime(wrapper: Object): any /*number|any (undefined)*/;

    /**
     * Returns the wrapper expiration time.
     *
     * @param {!Object} wrapper The wrapper.
     * @return {number|undefined} Wrapper expiration time.
     */
    function getExpirationTime(wrapper: Object): any /*number|any (undefined)*/;

    /**
     * Checks if the data item has expired.
     *
     * @param {!Object} wrapper The wrapper.
     * @return {boolean} True if the item has expired.
     */
    function isExpired(wrapper: Object): boolean;
}

declare module 'goog.storage.RichStorage' {

    /**
     * Metadata key under which the actual data is stored.
     *
     * @type {string}
     * @protected
     */
    var DATA_KEY: string;

    /**
     * Wraps a value so metadata can be associated with it. You probably want
     * to use goog.storage.RichStorage.Wrapper.wrapIfNecessary to avoid multiple
     * embeddings.
     *
     * @param {*} value The value to wrap.
     * @constructor
     * @final
     */
    class Wrapper {
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
}

declare module 'goog.storage.RichStorage.Wrapper' {

    /**
     * Convenience method for wrapping a value so metadata can be associated with
     * it. No-op if the value is already wrapped or is undefined.
     *
     * @param {*} value The value to wrap.
     * @return {(!goog.storage.RichStorage.Wrapper|undefined)} The wrapper.
     */
    function wrapIfNecessary(value: any): any /*goog.storage.RichStorage.Wrapper|any (undefined)*/;

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
    function unwrapIfPossible(wrapper: any /*Object|any (undefined)*/): any;
}

