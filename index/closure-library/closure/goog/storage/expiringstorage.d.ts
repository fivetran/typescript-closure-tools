/// <reference path="../../../globals.d.ts" />
/// <reference path="./richstorage.d.ts" />
/// <reference path="./mechanism/mechanism.d.ts" />

declare module goog.storage {

    class ExpiringStorage extends ExpiringStorage__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ExpiringStorage__Class extends goog.storage.RichStorage__Class  { 
    
            /**
             * Provides a storage with expirning keys.
             *
             * @param {!goog.storage.mechanism.Mechanism} mechanism The underlying
             *     storage mechanism.
             * @constructor
             * @extends {goog.storage.RichStorage}
             */
            constructor(mechanism: goog.storage.mechanism.Mechanism);
    } 
    
}

declare module goog.storage.ExpiringStorage {

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
    function getCreationTime(wrapper: Object): number|any /*undefined*/;

    /**
     * Returns the wrapper expiration time.
     *
     * @param {!Object} wrapper The wrapper.
     * @return {number|undefined} Wrapper expiration time.
     */
    function getExpirationTime(wrapper: Object): number|any /*undefined*/;

    /**
     * Checks if the data item has expired.
     *
     * @param {!Object} wrapper The wrapper.
     * @return {boolean} True if the item has expired.
     */
    function isExpired(wrapper: Object): boolean;
}
