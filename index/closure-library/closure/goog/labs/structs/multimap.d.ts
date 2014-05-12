/// <reference path="../../../../globals.d.ts" />
/// <reference path="./map.d.ts" />

declare module goog.labs.structs {

    class Multimap extends Multimap.__Class { }
    module Multimap {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
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
            addAllFromMultimap(map: goog.labs.structs.Map): void;
            /**
             * Adds the contents of the given map/multimap to this multimap.
             * @param {!(goog.labs.structs.Map|goog.labs.structs.Multimap)} map The
             *     map to add.
             */
            addAllFromMultimap(map: goog.labs.structs.Multimap): void;
    
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
}
