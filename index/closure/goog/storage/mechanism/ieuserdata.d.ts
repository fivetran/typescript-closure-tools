/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/storage/mechanism/mechanism.d.ts" />
/// <reference path="../../../../closure/goog/storage/mechanism/iterablemechanism.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/storage/mechanism/errorcode.d.ts" />

declare module goog.storage.mechanism {

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
    }
}

declare module goog.storage.mechanism.IEUserData {

    /**
     * Encoding map for characters which are not encoded by encodeURIComponent().
     * See encodeKey_ documentation for encoding details.
     *
     * @type {!Object}
     * @const
     */
    var ENCODE_MAP: Object;
}

