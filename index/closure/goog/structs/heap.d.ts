// Generated Thu May  1 17:19:23 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/structs/node.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />

declare module goog.structs {

    /**
     * Class for a Heap datastructure.
     *
     * @param {goog.structs.Heap|Object=} opt_heap Optional goog.structs.Heap or
     *     Object to initialize heap with.
     * @constructor
     * @template K, V
     */
    class Heap {
        /**
         * Class for a Heap datastructure.
         *
         * @param {goog.structs.Heap|Object=} opt_heap Optional goog.structs.Heap or
         *     Object to initialize heap with.
         * @constructor
         * @template K, V
         */
        constructor(opt_heap?: any /*goog.structs.Heap|Object*/);
    
        /**
         * Insert the given value into the heap with the given key.
         * @param {K} key The key.
         * @param {V} value The value.
         */
        insert(key: K, value: V): void;
    
        /**
         * Adds multiple key-value pairs from another goog.structs.Heap or Object
         * @param {goog.structs.Heap|Object} heap Object containing the data to add.
         */
        insertAll(heap: any /*goog.structs.Heap|Object*/): void;
    
        /**
         * Retrieves and removes the root value of this heap.
         * @return {V} The value removed from the root of the heap.  Returns
         *     undefined if the heap is empty.
         */
        remove(): V;
    
        /**
         * Retrieves but does not remove the root value of this heap.
         * @return {V} The value at the root of the heap. Returns
         *     undefined if the heap is empty.
         */
        peek(): V;
    
        /**
         * Retrieves but does not remove the key of the root node of this heap.
         * @return {V} The key at the root of the heap. Returns undefined if the
         *     heap is empty.
         */
        peekKey(): V;
    
        /**
         * Gets the values of the heap.
         * @return {Array.<V>} The values in the heap.
         */
        getValues(): V[];
    
        /**
         * Gets the keys of the heap.
         * @return {Array.<K>} The keys in the heap.
         */
        getKeys(): K[];
    
        /**
         * Whether the heap contains the given value.
         * @param {V} val The value to check for.
         * @return {boolean} Whether the heap contains the value.
         */
        containsValue(val: V): boolean;
    
        /**
         * Whether the heap contains the given key.
         * @param {K} key The key to check for.
         * @return {boolean} Whether the heap contains the key.
         */
        containsKey(key: K): boolean;
    
        /**
         * Clones a heap and returns a new heap
         * @return {goog.structs.Heap} A new goog.structs.Heap with the same key-value
         *     pairs.
         */
        clone(): goog.structs.Heap;
    
        /**
         * The number of key-value pairs in the map
         * @return {number} The number of pairs.
         */
        getCount(): number;
    
        /**
         * Returns true if this heap contains no elements.
         * @return {boolean} Whether this heap contains no elements.
         */
        isEmpty(): boolean;
    
        /**
         * Removes all elements from the heap.
         */
        clear(): void;
    }
}

