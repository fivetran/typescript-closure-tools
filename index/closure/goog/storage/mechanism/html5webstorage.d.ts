// Generated Fri May  2 10:40:36 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/storage/mechanism/mechanism.d.ts" />
/// <reference path="../../../goog/storage/mechanism/iterablemechanism.d.ts" />
/// <reference path="../../../goog/storage/mechanism/errorcode.d.ts" />

declare module goog.storage.mechanism.HTML5WebStorage {

    /**
     * The key used to check if the storage instance is available.
     * @private {string}
     * @const
     */
    var STORAGE_AVAILABLE_KEY_: any /*missing*/;
}

declare module goog.storage.mechanism {

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
    
        /**
         * Gets the key for a given key index. If an index outside of
         * [0..this.getCount()) is specified, this function returns null.
         * @param {number} index A key index.
         * @return {?string} A storage key, or null if the specified index is out of
         *     range.
         */
        key(index: number): string;
    }
}

