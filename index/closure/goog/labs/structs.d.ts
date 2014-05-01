// Generated Wed Apr 30 16:38:25 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/labs/object.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/string.d.ts" />

declare module 'goog.labs.structs.Map' {

    /**
     * Browser feature enum necessary for map.
     * @enum {boolean}
     */
    enum BrowserFeature { OBJECT_CREATE_SUPPORTED, OBJECT_KEYS_SUPPORTED } 
}

declare module 'goog.labs.structs' {

    /**
     * Creates a new map.
     * @constructor
     * @struct
     * @final
     */
    class Map {
        /**
         * Creates a new map.
         * @constructor
         * @struct
         * @final
         */
        constructor();
    
        /**
         * @private {number}
         */
        count_: any /*missing*/;
    
        /**
         * Adds the (key, value) pair, overriding previous entry with the same
         * key, if any.
         * @param {string} key The key.
         * @param {*} value The value.
         */
        set(key: string, value: any): void;
    
        /**
         * Gets the value for the given key.
         * @param {string} key The key whose value we want to retrieve.
         * @param {*=} opt_default The default value to return if the key does
         *     not exist in the map, default to undefined.
         * @return {*} The value corresponding to the given key, or opt_default
         *     if the key does not exist in this map.
         */
        get(key: string, opt_default?: any): any;
    
        /**
         * Removes the map entry with the given key.
         * @param {string} key The key to remove.
         * @return {boolean} True if the entry is removed.
         */
        remove(key: string): boolean;
    
        /**
         * Adds the content of the map to this map. If a new entry uses a key
         * that already exists in this map, the existing key is replaced.
         * @param {!goog.labs.structs.Map} map The map to add.
         */
        addAll(map: goog.labs.structs.Map): void;
    
        /**
         * @return {boolean} True if the map is empty.
         */
        isEmpty(): boolean;
    
        /**
         * @return {number} The number of the entries in this map.
         */
        getCount(): number;
    
        /**
         * @param {string} key The key to check.
         * @return {boolean} True if the map contains the given key.
         */
        containsKey(key: string): boolean;
    
        /**
         * Whether the map contains the given value. The comparison is done
         * using !== comparator. Also returns true if the passed value is NaN
         * and a NaN value exists in the map.
         * @param {*} value Value to check.
         * @return {boolean} True if the map contains the given value.
         */
        containsValue(value: any): boolean;
    
        /**
         * @return {!Array.<string>} An array of all the keys contained in this map.
         */
        getKeys(): string[];
    
        /**
         * @return {!Array.<*>} An array of all the values contained in this map.
         *     There may be duplicates.
         */
        getValues(): any[];
    
        /**
         * @return {!Array.<Array>} An array of entries. Each entry is of the
         *     form [key, value]. Do not rely on consistent ordering of entries.
         */
        getEntries(): any[][];
    
        /**
         * Clears the map to the initial state.
         */
        clear(): void;
    
        /**
         * Clones this map.
         * @return {!goog.labs.structs.Map} The clone of this map.
         */
        clone(): goog.labs.structs.Map;
    }

    /**
     * Creates a new multimap.
     * @constructor
     * @struct
     * @final
     */
    class Multimap {
        /**
         * Creates a new multimap.
         * @constructor
         * @struct
         * @final
         */
        constructor();
    
        /**
         * Clears the multimap.
         */
        clear(): void;
    
        /**
         * Clones this multimap.
         * @return {!goog.labs.structs.Multimap} A multimap that contains all
         *     the mapping this multimap has.
         */
        clone(): goog.labs.structs.Multimap;
    
        /**
         * Adds the given (key, value) pair to the map. The (key, value) pair
         * is guaranteed to be added.
         * @param {string} key The key to add.
         * @param {*} value The value to add.
         */
        add(key: string, value: any): void;
    
        /**
         * Stores a collection of values to the given key. Does not replace
         * existing (key, value) pairs.
         * @param {string} key The key to add.
         * @param {!Array.<*>} values The values to add.
         */
        addAllValues(key: string, values: any[]): void;
    
        /**
         * Adds the contents of the given map/multimap to this multimap.
         * @param {!(goog.labs.structs.Map|goog.labs.structs.Multimap)} map The
         *     map to add.
         */
        addAllFromMultimap(map: any /*goog.labs.structs.Map|goog.labs.structs.Multimap*/): void;
    
        /**
         * Replaces all the values for the given key with the given values.
         * @param {string} key The key whose values are to be replaced.
         * @param {!Array.<*>} values The new values. If empty, this is
         *     equivalent to {@code removaAll(key)}.
         */
        replaceValues(key: string, values: any[]): void;
    
        /**
         * Gets the values correspond to the given key.
         * @param {string} key The key to retrieve.
         * @return {!Array.<*>} An array of values corresponding to the given
         *     key. May be empty. Note that the ordering of values are not
         *     guaranteed to be consistent.
         */
        get(key: string): any[];
    
        /**
         * Removes a single occurrence of (key, value) pair.
         * @param {string} key The key to remove.
         * @param {*} value The value to remove.
         * @return {boolean} Whether any matching (key, value) pair is removed.
         */
        remove(key: string, value: any): boolean;
    
        /**
         * Removes all values corresponding to the given key.
         * @param {string} key The key whose values are to be removed.
         * @return {boolean} Whether any value is removed.
         */
        removeAll(key: string): boolean;
    
        /**
         * @return {boolean} Whether the multimap is empty.
         */
        isEmpty(): boolean;
    
        /**
         * @return {number} The count of (key, value) pairs in the map.
         */
        getCount(): number;
    
        /**
         * @param {string} key The key to check.
         * @param {*} value The value to check.
         * @return {boolean} Whether the (key, value) pair exists in the multimap.
         */
        containsEntry(key: string, value: any): boolean;
    
        /**
         * @param {string} key The key to check.
         * @return {boolean} Whether the multimap contains at least one (key,
         *     value) pair with the given key.
         */
        containsKey(key: string): boolean;
    
        /**
         * @param {*} value The value to check.
         * @return {boolean} Whether the multimap contains at least one (key,
         *     value) pair with the given value.
         */
        containsValue(value: any): boolean;
    
        /**
         * @return {!Array.<string>} An array of unique keys.
         */
        getKeys(): string[];
    
        /**
         * @return {!Array.<*>} An array of values. There may be duplicates.
         */
        getValues(): any[];
    
        /**
         * @return {!Array.<!Array>} An array of entries. Each entry is of the
         *     form [key, value].
         */
        getEntries(): any[][];
    }
}

