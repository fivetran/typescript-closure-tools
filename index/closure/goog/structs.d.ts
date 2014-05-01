// Generated Wed Apr 30 16:29:27 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/string.d.ts" />

declare module 'goog.structs.Map' {

    /**
     * Default equality test for values.
     * @param {*} a The first value.
     * @param {*} b The second value.
     * @return {boolean} Whether a and b reference the same object.
     */
    function defaultEquals(a: any, b: any): boolean;
}

declare module 'goog.structs.QuadTree' {

    /**
     * Enumeration of node types.
     * @enum {number}
     */
    enum NodeType { EMPTY, LEAF, POINTER } 

    /**
     * Constructs a new quad tree node.
     * @param {number} x X-coordiate of node.
     * @param {number} y Y-coordinate of node.
     * @param {number} w Width of node.
     * @param {number} h Height of node.
     * @param {goog.structs.QuadTree.Node=} opt_parent Optional parent node.
     * @constructor
     * @final
     */
    class Node {
        /**
         * Constructs a new quad tree node.
         * @param {number} x X-coordiate of node.
         * @param {number} y Y-coordinate of node.
         * @param {number} w Width of node.
         * @param {number} h Height of node.
         * @param {goog.structs.QuadTree.Node=} opt_parent Optional parent node.
         * @constructor
         * @final
         */
        constructor(x: number, y: number, w: number, h: number, opt_parent?: goog.structs.QuadTree.Node);
    
        /**
         * The node's type.
         * @type {goog.structs.QuadTree.NodeType}
         */
        nodeType: goog.structs.QuadTree.NodeType;
    
        /**
         * The child node in the North-West quadrant.
         * @type {goog.structs.QuadTree.Node?}
         */
        nw: goog.structs.QuadTree.Node;
    
        /**
         * The child node in the North-East quadrant.
         * @type {goog.structs.QuadTree.Node?}
         */
        ne: goog.structs.QuadTree.Node;
    
        /**
         * The child node in the South-West quadrant.
         * @type {goog.structs.QuadTree.Node?}
         */
        sw: goog.structs.QuadTree.Node;
    
        /**
         * The child node in the South-East quadrant.
         * @type {goog.structs.QuadTree.Node?}
         */
        se: goog.structs.QuadTree.Node;
    
        /**
         * The point for the node, if it is a leaf node.
         * @type {goog.structs.QuadTree.Point?}
         */
        point: goog.structs.QuadTree.Point;
    }

    /**
     * Creates a new point object.
     * @param {number} x The x-coordinate of the point.
     * @param {number} y The y-coordinate of the point.
     * @param {*=} opt_value Optional value associated with the point.
     * @constructor
     * @final
     */
    class Point {
        /**
         * Creates a new point object.
         * @param {number} x The x-coordinate of the point.
         * @param {number} y The y-coordinate of the point.
         * @param {*=} opt_value Optional value associated with the point.
         * @constructor
         * @final
         */
        constructor(x: number, y: number, opt_value?: any);
    }
}

declare module 'goog.structs' {

    /**
     * Returns the number of values in the collection-like object.
     * @param {Object} col The collection-like object.
     * @return {number} The number of values in the collection-like object.
     */
    function getCount(col: Object): number;

    /**
     * Returns the values of the collection-like object.
     * @param {Object} col The collection-like object.
     * @return {!Array} The values in the collection-like object.
     */
    function getValues(col: Object): any[];

    /**
     * Returns the keys of the collection. Some collections have no notion of
     * keys/indexes and this function will return undefined in those cases.
     * @param {Object} col The collection-like object.
     * @return {!Array|undefined} The keys in the collection.
     */
    function getKeys(col: Object): any /*any[]|any (undefined)*/;

    /**
     * Whether the collection contains the given value. This is O(n) and uses
     * equals (==) to test the existence.
     * @param {Object} col The collection-like object.
     * @param {*} val The value to check for.
     * @return {boolean} True if the map contains the value.
     */
    function contains(col: Object, val: any): boolean;

    /**
     * Whether the collection is empty.
     * @param {Object} col The collection-like object.
     * @return {boolean} True if empty.
     */
    function isEmpty(col: Object): boolean;

    /**
     * Removes all the elements from the collection.
     * @param {Object} col The collection-like object.
     */
    function clear(col: Object): void;

    /**
     * Calls a function for each value in a collection. The function takes
     * three arguments; the value, the key and the collection.
     *
     * NOTE: This will be deprecated soon! Please use a more specific method if
     * possible, e.g. goog.array.forEach, goog.object.forEach, etc.
     *
     * @param {S} col The collection-like object.
     * @param {function(this:T,?,?,S):?} f The function to call for every value.
     *     This function takes
     *     3 arguments (the value, the key or undefined if the collection has no
     *     notion of keys, and the collection) and the return value is irrelevant.
     * @param {T=} opt_obj The object to be used as the value of 'this'
     *     within {@code f}.
     * @template T,S
     */
    function forEach<T,S>(col: S, f: (_0: any, _1: any, _2: S) => any, opt_obj?: T): void;

    /**
     * Calls a function for every value in the collection. When a call returns true,
     * adds the value to a new collection (Array is returned by default).
     *
     * @param {S} col The collection-like object.
     * @param {function(this:T,?,?,S):boolean} f The function to call for every
     *     value. This function takes
     *     3 arguments (the value, the key or undefined if the collection has no
     *     notion of keys, and the collection) and should return a Boolean. If the
     *     return value is true the value is added to the result collection. If it
     *     is false the value is not included.
     * @param {T=} opt_obj The object to be used as the value of 'this'
     *     within {@code f}.
     * @return {!Object|!Array} A new collection where the passed values are
     *     present. If col is a key-less collection an array is returned.  If col
     *     has keys and values a plain old JS object is returned.
     * @template T,S
     */
    function filter<T,S>(col: S, f: (_0: any, _1: any, _2: S) => boolean, opt_obj?: T): any /*Object|any[]*/;

    /**
     * Calls a function for every value in the collection and adds the result into a
     * new collection (defaults to creating a new Array).
     *
     * @param {S} col The collection-like object.
     * @param {function(this:T,?,?,S):V} f The function to call for every value.
     *     This function takes 3 arguments (the value, the key or undefined if the
     *     collection has no notion of keys, and the collection) and should return
     *     something. The result will be used as the value in the new collection.
     * @param {T=} opt_obj  The object to be used as the value of 'this'
     *     within {@code f}.
     * @return {!Object.<V>|!Array.<V>} A new collection with the new values.  If
     *     col is a key-less collection an array is returned.  If col has keys and
     *     values a plain old JS object is returned.
     * @template T,S,V
     */
    function map<T,S,V>(col: S, f: (_0: any, _1: any, _2: S) => V, opt_obj?: T): any /*{ [key: string]: any (missing) }|V[]*/;

    /**
     * Calls f for each value in a collection. If any call returns true this returns
     * true (without checking the rest). If all returns false this returns false.
     *
     * @param {S} col The collection-like object.
     * @param {function(this:T,?,?,S):boolean} f The function to call for every
     *     value. This function takes 3 arguments (the value, the key or undefined
     *     if the collection has no notion of keys, and the collection) and should
     *     return a boolean.
     * @param {T=} opt_obj  The object to be used as the value of 'this'
     *     within {@code f}.
     * @return {boolean} True if any value passes the test.
     * @template T,S
     */
    function some<T,S>(col: S, f: (_0: any, _1: any, _2: S) => boolean, opt_obj?: T): boolean;

    /**
     * Calls f for each value in a collection. If all calls return true this return
     * true this returns true. If any returns false this returns false at this point
     *  and does not continue to check the remaining values.
     *
     * @param {S} col The collection-like object.
     * @param {function(this:T,?,?,S):boolean} f The function to call for every
     *     value. This function takes 3 arguments (the value, the key or
     *     undefined if the collection has no notion of keys, and the collection)
     *     and should return a boolean.
     * @param {T=} opt_obj  The object to be used as the value of 'this'
     *     within {@code f}.
     * @return {boolean} True if all key-value pairs pass the test.
     * @template T,S
     */
    function every<T,S>(col: S, f: (_0: any, _1: any, _2: S) => boolean, opt_obj?: T): boolean;

    /**
     * An interface for a collection of values.
     * @interface
     * @template T
     */
    interface Collection {
        add: any /*missing*/;
        remove: any /*missing*/;
        contains: any /*missing*/;
        getCount: any /*missing*/;
    }

    /**
     * Constructs an AVL-Tree, which uses the specified comparator to order its
     * values. The values can be accessed efficiently in their sorted order since
     * the tree enforces a O(logn) maximum height.
     *
     * @param {Function=} opt_comparator Function used to order the tree's nodes.
     * @constructor
     * @implements {goog.structs.Collection.<T>}
     * @final
     * @template T
     */
    class AvlTree implements goog.structs.Collection<T> {
        /**
         * Constructs an AVL-Tree, which uses the specified comparator to order its
         * values. The values can be accessed efficiently in their sorted order since
         * the tree enforces a O(logn) maximum height.
         *
         * @param {Function=} opt_comparator Function used to order the tree's nodes.
         * @constructor
         * @implements {goog.structs.Collection.<T>}
         * @final
         * @template T
         */
        constructor(opt_comparator?: Function);
    
        /**
         * Pointer to the root node of the tree.
         *
         * @private {goog.structs.AvlTree.Node.<T>}
         */
        root_: any /*missing*/;
    
        /**
         * Inserts a node into the tree with the specified value if the tree does
         * not already contain a node with the specified value. If the value is
         * inserted, the tree is balanced to enforce the AVL-Tree height property.
         *
         * @param {T} value Value to insert into the tree.
         * @return {boolean} Whether value was inserted into the tree.
         * @override
         */
        add(value: T): boolean;
    
        /**
         * Removes a node from the tree with the specified value if the tree contains a
         * node with this value. If a node is removed the tree is balanced to enforce
         * the AVL-Tree height property. The value of the removed node is returned.
         *
         * @param {T} value Value to find and remove from the tree.
         * @return {T} The value of the removed node or null if the value was not in
         *     the tree.
         * @override
         */
        remove(value: T): T;
    
        /**
         * Removes all nodes from the tree.
         */
        clear(): void;
    
        /**
         * Returns true if the tree contains a node with the specified value, false
         * otherwise.
         *
         * @param {T} value Value to find in the tree.
         * @return {boolean} Whether the tree contains a node with the specified value.
         * @override
         */
        contains(value: T): boolean;
    
        /**
         * Returns the number of values stored in the tree.
         *
         * @return {number} The number of values stored in the tree.
         * @override
         */
        getCount(): number;
    
        /**
         * Returns a k-th smallest value, based on the comparator, where 0 <= k <
         * this.getCount().
         * @param {number} k The number k.
         * @return {T} The k-th smallest value.
         */
        getKthValue(k: number): T;
    
        /**
         * Returns the value u, such that u is contained in the tree and u < v, for all
         * values v in the tree where v != u.
         *
         * @return {T} The minimum value contained in the tree.
         */
        getMinimum(): T;
    
        /**
         * Returns the value u, such that u is contained in the tree and u > v, for all
         * values v in the tree where v != u.
         *
         * @return {T} The maximum value contained in the tree.
         */
        getMaximum(): T;
    
        /**
         * Returns the height of the tree (the maximum depth). This height should
         * always be <= 1.4405*(Math.log(n+2)/Math.log(2))-1.3277, where n is the
         * number of nodes in the tree.
         *
         * @return {number} The height of the tree.
         */
        getHeight(): number;
    
        /**
         * Inserts the values stored in the tree into a new Array and returns the Array.
         *
         * @return {!Array.<T>} An array containing all of the trees values in sorted
         *     order.
         */
        getValues(): T[];
    
        /**
         * Performs an in-order traversal of the tree and calls {@code func} with each
         * traversed node, optionally starting from the smallest node with a value >= to
         * the specified start value. The traversal ends after traversing the tree's
         * maximum node or when {@code func} returns a value that evaluates to true.
         *
         * @param {Function} func Function to call on each traversed node.
         * @param {Object=} opt_startValue If specified, traversal will begin on the
         *    node with the smallest value >= opt_startValue.
         */
        inOrderTraverse(func: Function, opt_startValue?: Object): void;
    
        /**
         * Performs a reverse-order traversal of the tree and calls {@code func} with
         * each traversed node, optionally starting from the largest node with a value
         * <= to the specified start value. The traversal ends after traversing the
         * tree's minimum node or when func returns a value that evaluates to true.
         *
         * @param {function(T):?} func Function to call on each traversed node.
         * @param {Object=} opt_startValue If specified, traversal will begin on the
         *    node with the largest value <= opt_startValue.
         */
        reverseOrderTraverse(func: (_0: T) => any, opt_startValue?: Object): void;
    }

    /**
     * Class for CircularBuffer.
     * @param {number=} opt_maxSize The maximum size of the buffer.
     * @constructor
     * @template T
     */
    class CircularBuffer {
        /**
         * Class for CircularBuffer.
         * @param {number=} opt_maxSize The maximum size of the buffer.
         * @constructor
         * @template T
         */
        constructor(opt_maxSize?: number);
    
        /**
         * Adds an item to the buffer. May remove the oldest item if the buffer is at
         * max size.
         * @param {T} item The item to add.
         * @return {T|undefined} The removed old item, if the buffer is at max size.
         *     Return undefined, otherwise.
         */
        add(item: T): any /*T|any (undefined)*/;
    
        /**
         * Returns the item at the specified index.
         * @param {number} index The index of the item. The index of an item can change
         *     after calls to {@code add()} if the buffer is at maximum size.
         * @return {T} The item at the specified index.
         */
        get(index: number): T;
    
        /**
         * Sets the item at the specified index.
         * @param {number} index The index of the item. The index of an item can change
         *     after calls to {@code add()} if the buffer is at maximum size.
         * @param {T} item The item to add.
         */
        set(index: number, item: T): void;
    
        /**
         * Returns the current number of items in the buffer.
         * @return {number} The current number of items in the buffer.
         */
        getCount(): number;
    
        /**
         * @return {boolean} Whether the buffer is empty.
         */
        isEmpty(): boolean;
    
        /**
         * Empties the current buffer.
         */
        clear(): void;
    
        /** @return {!Array.<T>} The values in the buffer. */
        getValues(): T[];
    
        /**
         * Returns the newest values in the buffer up to {@code count}.
         * @param {number} maxCount The maximum number of values to get. Should be a
         *     positive number.
         * @return {!Array.<T>} The newest values in the buffer up to {@code count}.
         */
        getNewestValues(maxCount: number): T[];
    
        /** @return {!Array.<number>} The indexes in the buffer. */
        getKeys(): number[];
    
        /**
         * Whether the buffer contains the key/index.
         * @param {number} key The key/index to check for.
         * @return {boolean} Whether the buffer contains the key/index.
         */
        containsKey(key: number): boolean;
    
        /**
         * Whether the buffer contains the given value.
         * @param {T} value The value to check for.
         * @return {boolean} Whether the buffer contains the given value.
         */
        containsValue(value: T): boolean;
    
        /**
         * Returns the last item inserted into the buffer.
         * @return {T|null} The last item inserted into the buffer,
         *     or null if the buffer is empty.
         */
        getLast(): any /*T|any (null)*/;
    }

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

    /**
     * Maps ranges to values.
     * @param {Array.<number>} rangeArray An array of monotonically
     *     increasing integer values, with at least one instance.
     * @param {Array.<T>} valueArray An array of corresponding values.
     *     Length must be the same as rangeArray.
     * @param {boolean=} opt_delta If true, saves only delta from previous value.
     * @constructor
     * @template T
     */
    class InversionMap {
        /**
         * Maps ranges to values.
         * @param {Array.<number>} rangeArray An array of monotonically
         *     increasing integer values, with at least one instance.
         * @param {Array.<T>} valueArray An array of corresponding values.
         *     Length must be the same as rangeArray.
         * @param {boolean=} opt_delta If true, saves only delta from previous value.
         * @constructor
         * @template T
         */
        constructor(rangeArray: number[], valueArray: T[], opt_delta?: boolean);
    
        /**
         * Splices a range -> value map into this inversion map.
         * @param {Array.<number>} rangeArray An array of monotonically
         *     increasing integer values, with at least one instance.
         * @param {Array.<T>} valueArray An array of corresponding values.
         *     Length must be the same as rangeArray.
         * @param {boolean=} opt_delta If true, saves only delta from previous value.
         */
        spliceInversion(rangeArray: number[], valueArray: T[], opt_delta?: boolean): void;
    
        /**
         * Gets the value corresponding to a number from the inversion map.
         * @param {number} intKey The number for which value needs to be retrieved
         *     from inversion map.
         * @return {T|null} Value retrieved from inversion map; null if not found.
         */
        at(intKey: number): any /*T|any (null)*/;
    
        /**
         * Gets the largest index such that rangeArray[index] <= intKey from the
         * inversion map.
         * @param {number} intKey The probe for which rangeArray is searched.
         * @return {number} Largest index such that rangeArray[index] <= intKey.
         * @protected
         */
        getLeast(intKey: number): number;
    }

    /**
     * Class for a LinkedMap datastructure, which combines O(1) map access for
     * key/value pairs with a linked list for a consistent iteration order. Sample
     * usage:
     *
     * <pre>
     * var m = new LinkedMap();
     * m.set('param1', 'A');
     * m.set('param2', 'B');
     * m.set('param3', 'C');
     * alert(m.getKeys()); // param1, param2, param3
     *
     * var c = new LinkedMap(5, true);
     * for (var i = 0; i < 10; i++) {
     *   c.set('entry' + i, false);
     * }
     * alert(c.getKeys()); // entry9, entry8, entry7, entry6, entry5
     *
     * c.set('entry5', true);
     * c.set('entry1', false);
     * alert(c.getKeys()); // entry1, entry5, entry9, entry8, entry7
     * </pre>
     *
     * @param {number=} opt_maxCount The maximum number of objects to store in the
     *     LinkedMap. If unspecified or 0, there is no maximum.
     * @param {boolean=} opt_cache When set, the LinkedMap stores items in order
     *     from most recently used to least recently used, instead of insertion
     *     order.
     * @constructor
     * @template KEY, VALUE
     */
    class LinkedMap {
        /**
         * Class for a LinkedMap datastructure, which combines O(1) map access for
         * key/value pairs with a linked list for a consistent iteration order. Sample
         * usage:
         *
         * <pre>
         * var m = new LinkedMap();
         * m.set('param1', 'A');
         * m.set('param2', 'B');
         * m.set('param3', 'C');
         * alert(m.getKeys()); // param1, param2, param3
         *
         * var c = new LinkedMap(5, true);
         * for (var i = 0; i < 10; i++) {
         *   c.set('entry' + i, false);
         * }
         * alert(c.getKeys()); // entry9, entry8, entry7, entry6, entry5
         *
         * c.set('entry5', true);
         * c.set('entry1', false);
         * alert(c.getKeys()); // entry1, entry5, entry9, entry8, entry7
         * </pre>
         *
         * @param {number=} opt_maxCount The maximum number of objects to store in the
         *     LinkedMap. If unspecified or 0, there is no maximum.
         * @param {boolean=} opt_cache When set, the LinkedMap stores items in order
         *     from most recently used to least recently used, instead of insertion
         *     order.
         * @constructor
         * @template KEY, VALUE
         */
        constructor(opt_maxCount?: number, opt_cache?: boolean);
    
        /**
         * Retrieves the value for a given key. If this is a caching LinkedMap, the
         * entry will become the most recently used.
         * @param {string} key The key to retrieve the value for.
         * @param {VALUE=} opt_val A default value that will be returned if the key is
         *     not found, defaults to undefined.
         * @return {VALUE} The retrieved value.
         */
        get(key: string, opt_val?: VALUE): VALUE;
    
        /**
         * Retrieves the value for a given key without updating the entry to be the
         * most recently used.
         * @param {string} key The key to retrieve the value for.
         * @param {VALUE=} opt_val A default value that will be returned if the key is
         *     not found.
         * @return {VALUE} The retrieved value.
         */
        peekValue(key: string, opt_val?: VALUE): VALUE;
    
        /**
         * Sets a value for a given key. If this is a caching LinkedMap, this entry
         * will become the most recently used.
         * @param {string} key The key to retrieve the value for.
         * @param {VALUE} value A default value that will be returned if the key is
         *     not found.
         */
        set(key: string, value: VALUE): void;
    
        /**
         * Returns the value of the first node without making any modifications.
         * @return {VALUE} The value of the first node or undefined if the map is empty.
         */
        peek(): VALUE;
    
        /**
         * Returns the value of the last node without making any modifications.
         * @return {VALUE} The value of the last node or undefined if the map is empty.
         */
        peekLast(): VALUE;
    
        /**
         * Removes the first node from the list and returns its value.
         * @return {VALUE} The value of the popped node, or undefined if the map was
         *     empty.
         */
        shift(): VALUE;
    
        /**
         * Removes the last node from the list and returns its value.
         * @return {VALUE} The value of the popped node, or undefined if the map was
         *     empty.
         */
        pop(): VALUE;
    
        /**
         * Removes a value from the LinkedMap based on its key.
         * @param {string} key The key to remove.
         * @return {boolean} True if the entry was removed, false if the key was not
         *     found.
         */
        remove(key: string): boolean;
    
        /**
         * Removes a node from the {@code LinkedMap}. It can be overridden to do
         * further cleanup such as disposing of the node value.
         * @param {!goog.structs.LinkedMap.Node_} node The node to remove.
         * @protected
         */
        removeNode(node: goog.structs.LinkedMap.Node_): void;
    
        /**
         * @return {number} The number of items currently in the LinkedMap.
         */
        getCount(): number;
    
        /**
         * @return {boolean} True if the cache is empty, false if it contains any items.
         */
        isEmpty(): boolean;
    
        /**
         * Sets the maximum number of entries allowed in this object, truncating any
         * excess objects if necessary.
         * @param {number} maxCount The new maximum number of entries to allow.
         */
        setMaxCount(maxCount: number): void;
    
        /**
         * @return {!Array.<string>} The list of the keys in the appropriate order for
         *     this LinkedMap.
         */
        getKeys(): string[];
    
        /**
         * @return {!Array.<VALUE>} The list of the values in the appropriate order for
         *     this LinkedMap.
         */
        getValues(): VALUE[];
    
        /**
         * Tests whether a provided value is currently in the LinkedMap. This does not
         * affect item ordering in cache-style LinkedMaps.
         * @param {VALUE} value The value to check for.
         * @return {boolean} Whether the value is in the LinkedMap.
         */
        contains(value: VALUE): boolean;
    
        /**
         * Tests whether a provided key is currently in the LinkedMap. This does not
         * affect item ordering in cache-style LinkedMaps.
         * @param {string} key The key to check for.
         * @return {boolean} Whether the key is in the LinkedMap.
         */
        containsKey(key: string): boolean;
    
        /**
         * Removes all entries in this object.
         */
        clear(): void;
    
        /**
         * Calls a function on each item in the LinkedMap.
         *
         * @see goog.structs.forEach
         * @param {Function} f The function to call for each item. The function takes
         *     three arguments: the value, the key, and the LinkedMap.
         * @param {Object=} opt_obj The object context to use as "this" for the
         *     function.
         */
        forEach(f: Function, opt_obj?: Object): void;
    
        /**
         * Calls a function on each item in the LinkedMap and returns the results of
         * those calls in an array.
         *
         * @see goog.structs.map
         * @param {!Function} f The function to call for each item. The function takes
         *     three arguments: the value, the key, and the LinkedMap.
         * @param {Object=} opt_obj The object context to use as "this" for the
         *     function.
         * @return {!Array.<VALUE>} The results of the function calls for each item in
         *     the LinkedMap.
         */
        map(f: Function, opt_obj?: Object): VALUE[];
    
        /**
         * Calls a function on each item in the LinkedMap and returns true if any of
         * those function calls returns a true-like value.
         *
         * @see goog.structs.some
         * @param {Function} f The function to call for each item. The function takes
         *     three arguments: the value, the key, and the LinkedMap, and returns a
         *     boolean.
         * @param {Object=} opt_obj The object context to use as "this" for the
         *     function.
         * @return {boolean} Whether f evaluates to true for at least one item in the
         *     LinkedMap.
         */
        some(f: Function, opt_obj?: Object): boolean;
    
        /**
         * Calls a function on each item in the LinkedMap and returns true only if every
         * function call returns a true-like value.
         *
         * @see goog.structs.some
         * @param {Function} f The function to call for each item. The function takes
         *     three arguments: the value, the key, and the Cache, and returns a
         *     boolean.
         * @param {Object=} opt_obj The object context to use as "this" for the
         *     function.
         * @return {boolean} Whether f evaluates to true for every item in the Cache.
         */
        every(f: Function, opt_obj?: Object): boolean;
    }

    /**
     * Class for Hash Map datastructure.
     * @param {*=} opt_map Map or Object to initialize the map with.
     * @param {...*} var_args If 2 or more arguments are present then they
     *     will be used as key-value pairs.
     * @constructor
     * @template K, V
     */
    class Map {
        /**
         * Class for Hash Map datastructure.
         * @param {*=} opt_map Map or Object to initialize the map with.
         * @param {...*} var_args If 2 or more arguments are present then they
         *     will be used as key-value pairs.
         * @constructor
         * @template K, V
         */
        constructor(opt_map?: any, ...var_args: any[]);
    
        /**
         * @return {number} The number of key-value pairs in the map.
         */
        getCount(): number;
    
        /**
         * Returns the values of the map.
         * @return {!Array.<V>} The values in the map.
         */
        getValues(): V[];
    
        /**
         * Returns the keys of the map.
         * @return {!Array.<string>} Array of string values.
         */
        getKeys(): string[];
    
        /**
         * Whether the map contains the given key.
         * @param {*} key The key to check for.
         * @return {boolean} Whether the map contains the key.
         */
        containsKey(key: any): boolean;
    
        /**
         * Whether the map contains the given value. This is O(n).
         * @param {V} val The value to check for.
         * @return {boolean} Whether the map contains the value.
         */
        containsValue(val: V): boolean;
    
        /**
         * Whether this map is equal to the argument map.
         * @param {goog.structs.Map} otherMap The map against which to test equality.
         * @param {function(V, V): boolean=} opt_equalityFn Optional equality function
         *     to test equality of values. If not specified, this will test whether
         *     the values contained in each map are identical objects.
         * @return {boolean} Whether the maps are equal.
         */
        equals(otherMap: goog.structs.Map, opt_equalityFn?: (_0: V, _1: V) => boolean): boolean;
    
        /**
         * @return {boolean} Whether the map is empty.
         */
        isEmpty(): boolean;
    
        /**
         * Removes all key-value pairs from the map.
         */
        clear(): void;
    
        /**
         * Removes a key-value pair based on the key. This is O(logN) amortized due to
         * updating the keys array whenever the count becomes half the size of the keys
         * in the keys array.
         * @param {*} key  The key to remove.
         * @return {boolean} Whether object was removed.
         */
        remove(key: any): boolean;
    
        /**
         * Returns the value for the given key.  If the key is not found and the default
         * value is not given this will return {@code undefined}.
         * @param {*} key The key to get the value for.
         * @param {DEFAULT=} opt_val The value to return if no item is found for the
         *     given key, defaults to undefined.
         * @return {V|DEFAULT} The value for the given key.
         * @template DEFAULT
         */
        get(key: any, opt_val?: DEFAULT): any /*V|DEFAULT*/;
    
        /**
         * Adds a key-value pair to the map.
         * @param {*} key The key.
         * @param {V} value The value to add.
         * @return {*} Some subclasses return a value.
         */
        set(key: any, value: V): any;
    
        /**
         * Adds multiple key-value pairs from another goog.structs.Map or Object.
         * @param {Object} map  Object containing the data to add.
         */
        addAll(map: Object): void;
    
        /**
         * Calls the given function on each entry in the map.
         * @param {function(this:T, V, K, goog.structs.Map.<K,V>)} f
         * @param {T=} opt_obj The value of "this" inside f.
         * @template T
         */
        forEach(f: (_0: V, _1: K, _2: goog.structs.Map<K,V>) => any /*missing*/, opt_obj?: T): void;
    
        /**
         * Clones a map and returns a new map.
         * @return {!goog.structs.Map} A new map with the same key-value pairs.
         */
        clone(): goog.structs.Map;
    
        /**
         * Returns a new map in which all the keys and values are interchanged
         * (keys become values and values become keys). If multiple keys map to the
         * same value, the chosen transposed value is implementation-dependent.
         *
         * It acts very similarly to {goog.object.transpose(Object)}.
         *
         * @return {!goog.structs.Map} The transposed map.
         */
        transpose(): goog.structs.Map;
    
        /**
         * @return {!Object} Object representation of the map.
         */
        toObject(): Object;
    
        /**
         * Returns an iterator that iterates over the keys in the map.  Removal of keys
         * while iterating might have undesired side effects.
         * @return {!goog.iter.Iterator} An iterator over the keys in the map.
         */
        getKeyIterator(): goog.iter.Iterator;
    
        /**
         * Returns an iterator that iterates over the values in the map.  Removal of
         * keys while iterating might have undesired side effects.
         * @return {!goog.iter.Iterator} An iterator over the values in the map.
         */
        getValueIterator(): goog.iter.Iterator;
    
        /**
         * Returns an iterator that iterates over the values or the keys in the map.
         * This throws an exception if the map was mutated since the iterator was
         * created.
         * @param {boolean=} opt_keys True to iterate over the keys. False to iterate
         *     over the values.  The default value is false.
         * @return {!goog.iter.Iterator} An iterator over the values or keys in the map.
         */
        __iterator__(opt_keys?: boolean): goog.iter.Iterator;
    }

    /**
     * A generic immutable node. This can be used in various collections that
     * require a node object for its item (such as a heap).
     * @param {K} key Key.
     * @param {V} value Value.
     * @constructor
     * @template K, V
     */
    class Node {
        /**
         * A generic immutable node. This can be used in various collections that
         * require a node object for its item (such as a heap).
         * @param {K} key Key.
         * @param {V} value Value.
         * @constructor
         * @template K, V
         */
        constructor(key: K, value: V);
    
        /**
         * Gets the key.
         * @return {K} The key.
         */
        getKey(): K;
    
        /**
         * Gets the value.
         * @return {V} The value.
         */
        getValue(): V;
    
        /**
         * Clones a node and returns a new node.
         * @return {goog.structs.Node.<K, V>} A new goog.structs.Node with the same
         *     key value pair.
         */
        clone(): goog.structs.Node<K,V>;
    }

    /**
     * A generic pool class. If min is greater than max, an error is thrown.
     * @param {number=} opt_minCount Min. number of objects (Default: 1).
     * @param {number=} opt_maxCount Max. number of objects (Default: 10).
     * @constructor
     * @extends {goog.Disposable}
     * @template T
     */
    class Pool extends goog.Disposable {
        /**
         * A generic pool class. If min is greater than max, an error is thrown.
         * @param {number=} opt_minCount Min. number of objects (Default: 1).
         * @param {number=} opt_maxCount Max. number of objects (Default: 10).
         * @constructor
         * @extends {goog.Disposable}
         * @template T
         */
        constructor(opt_minCount?: number, opt_maxCount?: number);
    
        /**
         * Sets the minimum count of the pool.
         * If min is greater than the max count of the pool, an error is thrown.
         * @param {number} min The minimum count of the pool.
         */
        setMinimumCount(min: number): void;
    
        /**
         * Sets the maximum count of the pool.
         * If max is less than the max count of the pool, an error is thrown.
         * @param {number} max The maximum count of the pool.
         */
        setMaximumCount(max: number): void;
    
        /**
         * Sets the minimum delay between objects being returned by getObject, in
         * milliseconds. This defaults to zero, meaning that no minimum delay is
         * enforced and objects may be used as soon as they're available.
         * @param {number} delay The minimum delay, in milliseconds.
         */
        setDelay(delay: number): void;
    
        /**
         * @return {T|undefined} A new object from the pool if there is one available,
         *     otherwise undefined.
         */
        getObject(): any /*T|any (undefined)*/;
    
        /**
         * Returns an object to the pool of available objects so that it can be reused.
         * @param {T} obj The object to return to the pool of free objects.
         * @return {boolean} Whether the object was found in the Pool's set of in-use
         *     objects (in other words, whether any action was taken).
         */
        releaseObject(obj: T): boolean;
    
        /**
         * Adds an object to the collection of objects that are free. If the object can
         * not be added, then it is disposed.
         *
         * @param {T} obj The object to add to collection of free objects.
         */
        addFreeObject(obj: T): void;
    
        /**
         * Adjusts the objects held in the pool to be within the min/max constraints.
         *
         * NOTE: It is possible that the number of objects in the pool will still be
         * greater than the maximum count of objects allowed. This will be the case
         * if no more free objects can be disposed of to get below the minimum count
         * (i.e., all objects are in use).
         */
        adjustForMinMax(): void;
    
        /**
         * Should be overridden by sub-classes to return an instance of the object type
         * that is expected in the pool.
         * @return {T} The created object.
         */
        createObject(): T;
    
        /**
         * Should be overridden to dispose of an object. Default implementation is to
         * remove all its members, which should render it useless. Calls the object's
         * {@code dispose()} method, if available.
         * @param {T} obj The object to dispose.
         */
        disposeObject(obj: T): void;
    
        /**
         * Should be overridden to determine whether an object has become unusable and
         * should not be returned by getObject(). Calls the object's
         * {@code canBeReused()}  method, if available.
         * @param {T} obj The object to test.
         * @return {boolean} Whether the object can be reused.
         */
        objectCanBeReused(obj: T): boolean;
    
        /**
         * Returns true if the given object is in the pool.
         * @param {T} obj The object to check the pool for.
         * @return {boolean} Whether the pool contains the object.
         */
        contains(obj: T): boolean;
    
        /**
         * Returns the number of objects currently in the pool.
         * @return {number} Number of objects currently in the pool.
         */
        getCount(): number;
    
        /**
         * Returns the number of objects currently in use in the pool.
         * @return {number} Number of objects currently in use in the pool.
         */
        getInUseCount(): number;
    
        /**
         * Returns the number of objects currently free in the pool.
         * @return {number} Number of objects currently free in the pool.
         */
        getFreeCount(): number;
    
        /**
         * Determines if the pool contains no objects.
         * @return {boolean} Whether the pool contains no objects.
         */
        isEmpty(): boolean;
    
        /**
         * Disposes of the pool and all objects currently held in the pool.
         * @override
         * @protected
         */
        disposeInternal(): void;
    }

    /**
     * A generic pool class. If max is greater than min, an error is thrown.
     * @param {number=} opt_minCount Min. number of objects (Default: 1).
     * @param {number=} opt_maxCount Max. number of objects (Default: 10).
     * @constructor
     * @extends {goog.structs.Pool.<VALUE>}
     * @template VALUE
     */
    class PriorityPool extends goog.structs.Pool<VALUE> {
        /**
         * A generic pool class. If max is greater than min, an error is thrown.
         * @param {number=} opt_minCount Min. number of objects (Default: 1).
         * @param {number=} opt_maxCount Max. number of objects (Default: 10).
         * @constructor
         * @extends {goog.structs.Pool.<VALUE>}
         * @template VALUE
         */
        constructor(opt_minCount?: number, opt_maxCount?: number);
    
        /** @override */
        setDelay(): void;
    
        /**
         * Get a new object from the the pool, if there is one available, otherwise
         * return undefined.
         * @param {Function=} opt_callback The function to callback when an object is
         *     available. This could be immediately. If this is not present, then an
         *     object is immediately returned if available, or undefined if not.
         * @param {number=} opt_priority The priority of the request. A smaller value
         *     means a higher priority.
         * @return {VALUE|undefined} The new object from the pool if there is one
         *     available and a callback is not given. Otherwise, undefined.
         * @override
         */
        getObject(opt_callback?: Function, opt_priority?: number): any /*VALUE|any (undefined)*/;
    
        /**
         * Adds an object to the collection of objects that are free. If the object can
         * not be added, then it is disposed.
         *
         * NOTE: This method does not remove the object from the in use collection.
         *
         * @param {VALUE} obj The object to add to the collection of free objects.
         * @override
         */
        addFreeObject(obj: VALUE): void;
    
        /**
         * Adjusts the objects held in the pool to be within the min/max constraints.
         *
         * NOTE: It is possible that the number of objects in the pool will still be
         * greater than the maximum count of objects allowed. This will be the case
         * if no more free objects can be disposed of to get below the minimum count
         * (i.e., all objects are in use).
         * @override
         */
        adjustForMinMax(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Class for Priority Queue datastructure.
     *
     * @constructor
     * @extends {goog.structs.Heap.<number, VALUE>}
     * @template VALUE
     * @final
     */
    class PriorityQueue extends goog.structs.Heap<number,VALUE> {
        /**
         * Class for Priority Queue datastructure.
         *
         * @constructor
         * @extends {goog.structs.Heap.<number, VALUE>}
         * @template VALUE
         * @final
         */
        constructor();
    
        /**
         * Puts the specified value in the queue.
         * @param {number} priority The priority of the value. A smaller value here
         *     means a higher priority.
         * @param {VALUE} value The value.
         */
        enqueue(priority: number, value: VALUE): void;
    
        /**
         * Retrieves and removes the head of this queue.
         * @return {VALUE} The element at the head of this queue. Returns undefined if
         *     the queue is empty.
         */
        dequeue(): VALUE;
    }

    /**
     * Constructs a new quad tree.
     * @param {number} minX Minimum x-value that can be held in tree.
     * @param {number} minY Minimum y-value that can be held in tree.
     * @param {number} maxX Maximum x-value that can be held in tree.
     * @param {number} maxY Maximum y-value that can be held in tree.
     * @constructor
     * @final
     */
    class QuadTree {
        /**
         * Constructs a new quad tree.
         * @param {number} minX Minimum x-value that can be held in tree.
         * @param {number} minY Minimum y-value that can be held in tree.
         * @param {number} maxX Maximum x-value that can be held in tree.
         * @param {number} maxY Maximum y-value that can be held in tree.
         * @constructor
         * @final
         */
        constructor(minX: number, minY: number, maxX: number, maxY: number);
    
        /**
         * Returns a reference to the tree's root node.  Callers shouldn't modify nodes,
         * directly.  This is a convenience for visualization and debugging purposes.
         * @return {goog.structs.QuadTree.Node} The root node.
         */
        getRootNode(): goog.structs.QuadTree.Node;
    
        /**
         * Sets the value of an (x, y) point within the quad-tree.
         * @param {number} x The x-coordinate.
         * @param {number} y The y-coordinate.
         * @param {*} value The value associated with the point.
         */
        set(x: number, y: number, value: any): void;
    
        /**
         * Gets the value of the point at (x, y) or null if the point is empty.
         * @param {number} x The x-coordinate.
         * @param {number} y The y-coordinate.
         * @param {*=} opt_default The default value to return if the node doesn't
         *     exist.
         * @return {*} The value of the node, the default value if the node
         *     doesn't exist, or undefined if the node doesn't exist and no default
         *     has been provided.
         */
        get(x: number, y: number, opt_default?: any): any;
    
        /**
         * Removes a point from (x, y) if it exists.
         * @param {number} x The x-coordinate.
         * @param {number} y The y-coordinate.
         * @return {*} The value of the node that was removed, or null if the
         *     node doesn't exist.
         */
        remove(x: number, y: number): any;
    
        /**
         * Returns true if the point at (x, y) exists in the tree.
         * @param {number} x The x-coordinate.
         * @param {number} y The y-coordinate.
         * @return {boolean} Whether the tree contains a point at (x, y).
         */
        contains(x: number, y: number): boolean;
    
        /**
         * @return {boolean} Whether the tree is empty.
         */
        isEmpty(): boolean;
    
        /**
         * @return {number} The number of items in the tree.
         */
        getCount(): number;
    
        /**
         * Removes all items from the tree.
         */
        clear(): void;
    
        /**
         * Returns an array containing the coordinates of each point stored in the tree.
         * @return {Array.<goog.math.Coordinate?>} Array of coordinates.
         */
        getKeys(): goog.math.Coordinate[];
    
        /**
         * Returns an array containing all values stored within the tree.
         * @return {Array.<Object>} The values stored within the tree.
         */
        getValues(): Object[];
    
        /**
         * Clones the quad-tree and returns the new instance.
         * @return {goog.structs.QuadTree} A clone of the tree.
         */
        clone(): goog.structs.QuadTree;
    
        /**
         * Traverses the tree and calls a function on each node.
         * @param {function(?, goog.math.Coordinate, goog.structs.QuadTree)} fn
         *     The function to call for every value. This function takes 3 arguments
         *     (the value, the coordinate, and the tree itself) and the return value is
         *     irrelevant.
         * @param {Object=} opt_obj The object to be used as the value of 'this'
         *     within {@ code fn}.
         */
        forEach(fn: (_0: any, _1: goog.math.Coordinate, _2: goog.structs.QuadTree) => any /*missing*/, opt_obj?: Object): void;
    }

    /**
     * Class for FIFO Queue data structure.
     *
     * @constructor
     * @template T
     */
    class Queue {
        /**
         * Class for FIFO Queue data structure.
         *
         * @constructor
         * @template T
         */
        constructor();
    
        /**
         * Puts the specified element on this queue.
         * @param {T} element The element to be added to the queue.
         */
        enqueue(element: T): void;
    
        /**
         * Retrieves and removes the head of this queue.
         * @return {T} The element at the head of this queue. Returns undefined if the
         *     queue is empty.
         */
        dequeue(): T;
    
        /**
         * Retrieves but does not remove the head of this queue.
         * @return {T} The element at the head of this queue. Returns undefined if the
         *     queue is empty.
         */
        peek(): T;
    
        /**
         * Returns the number of elements in this queue.
         * @return {number} The number of elements in this queue.
         */
        getCount(): number;
    
        /**
         * Returns true if this queue contains no elements.
         * @return {boolean} true if this queue contains no elements.
         */
        isEmpty(): boolean;
    
        /**
         * Removes all elements from the queue.
         */
        clear(): void;
    
        /**
         * Returns true if the given value is in the queue.
         * @param {T} obj The value to look for.
         * @return {boolean} Whether the object is in the queue.
         */
        contains(obj: T): boolean;
    
        /**
         * Removes the first occurrence of a particular value from the queue.
         * @param {T} obj Object to remove.
         * @return {boolean} True if an element was removed.
         */
        remove(obj: T): boolean;
    
        /**
         * Returns all the values in the queue.
         * @return {Array.<T>} An array of the values in the queue.
         */
        getValues(): T[];
    }

    /**
     * A set that can contain both primitives and objects.  Adding and removing
     * elements is O(1).  Primitives are treated as identical if they have the same
     * type and convert to the same string.  Objects are treated as identical only
     * if they are references to the same object.  WARNING: A goog.structs.Set can
     * contain both 1 and (new Number(1)), because they are not the same.  WARNING:
     * Adding (new Number(1)) twice will yield two distinct elements, because they
     * are two different objects.  WARNING: Any object that is added to a
     * goog.structs.Set will be modified!  Because goog.getUid() is used to
     * identify objects, every object in the set will be mutated.
     * @param {Array.<T>|Object.<?,T>=} opt_values Initial values to start with.
     * @constructor
     * @implements {goog.structs.Collection.<T>}
     * @final
     * @template T
     */
    class Set implements goog.structs.Collection<T> {
        /**
         * A set that can contain both primitives and objects.  Adding and removing
         * elements is O(1).  Primitives are treated as identical if they have the same
         * type and convert to the same string.  Objects are treated as identical only
         * if they are references to the same object.  WARNING: A goog.structs.Set can
         * contain both 1 and (new Number(1)), because they are not the same.  WARNING:
         * Adding (new Number(1)) twice will yield two distinct elements, because they
         * are two different objects.  WARNING: Any object that is added to a
         * goog.structs.Set will be modified!  Because goog.getUid() is used to
         * identify objects, every object in the set will be mutated.
         * @param {Array.<T>|Object.<?,T>=} opt_values Initial values to start with.
         * @constructor
         * @implements {goog.structs.Collection.<T>}
         * @final
         * @template T
         */
        constructor(opt_values?: any /*T[]|{ [key: string]: T }*/);
    
        /**
         * @return {number} The number of elements in the set.
         * @override
         */
        getCount(): number;
    
        /**
         * Add a primitive or an object to the set.
         * @param {T} element The primitive or object to add.
         * @override
         */
        add(element: T): void;
    
        /**
         * Adds all the values in the given collection to this set.
         * @param {Array.<T>|goog.structs.Collection.<T>|Object.<?,T>} col A collection
         *     containing the elements to add.
         */
        addAll(col: any /*T[]|goog.structs.Collection<T>|{ [key: string]: T }*/): void;
    
        /**
         * Removes all values in the given collection from this set.
         * @param {Array.<T>|goog.structs.Collection.<T>|Object.<?,T>} col A collection
         *     containing the elements to remove.
         */
        removeAll(col: any /*T[]|goog.structs.Collection<T>|{ [key: string]: T }*/): void;
    
        /**
         * Removes the given element from this set.
         * @param {T} element The primitive or object to remove.
         * @return {boolean} Whether the element was found and removed.
         * @override
         */
        remove(element: T): boolean;
    
        /**
         * Removes all elements from this set.
         */
        clear(): void;
    
        /**
         * Tests whether this set is empty.
         * @return {boolean} True if there are no elements in this set.
         */
        isEmpty(): boolean;
    
        /**
         * Tests whether this set contains the given element.
         * @param {T} element The primitive or object to test for.
         * @return {boolean} True if this set contains the given element.
         * @override
         */
        contains(element: T): boolean;
    
        /**
         * Tests whether this set contains all the values in a given collection.
         * Repeated elements in the collection are ignored, e.g.  (new
         * goog.structs.Set([1, 2])).containsAll([1, 1]) is True.
         * @param {goog.structs.Collection.<T>|Object} col A collection-like object.
         * @return {boolean} True if the set contains all elements.
         */
        containsAll(col: any /*goog.structs.Collection<T>|Object*/): boolean;
    
        /**
         * Finds all values that are present in both this set and the given collection.
         * @param {Array.<S>|Object.<?,S>} col A collection.
         * @return {!goog.structs.Set.<T|S>} A new set containing all the values
         *     (primitives or objects) present in both this set and the given
         *     collection.
         * @template S
         */
        intersection(col: any /*S[]|{ [key: string]: S }*/): goog.structs.Set<any /*T|S*/>;
    
        /**
         * Finds all values that are present in this set and not in the given
         * collection.
         * @param {Array.<T>|goog.structs.Collection.<T>|Object.<?,T>} col A collection.
         * @return {!goog.structs.Set} A new set containing all the values
         *     (primitives or objects) present in this set but not in the given
         *     collection.
         */
        difference(col: any /*T[]|goog.structs.Collection<T>|{ [key: string]: T }*/): goog.structs.Set;
    
        /**
         * Returns an array containing all the elements in this set.
         * @return {!Array.<T>} An array containing all the elements in this set.
         */
        getValues(): T[];
    
        /**
         * Creates a shallow clone of this set.
         * @return {!goog.structs.Set.<T>} A new set containing all the same elements as
         *     this set.
         */
        clone(): goog.structs.Set<T>;
    
        /**
         * Tests whether the given collection consists of the same elements as this set,
         * regardless of order, without repetition.  Primitives are treated as equal if
         * they have the same type and convert to the same string; objects are treated
         * as equal if they are references to the same object.  This operation is O(n).
         * @param {goog.structs.Collection.<T>|Object} col A collection.
         * @return {boolean} True if the given collection consists of the same elements
         *     as this set, regardless of order, without repetition.
         */
        equals(col: any /*goog.structs.Collection<T>|Object*/): boolean;
    
        /**
         * Tests whether the given collection contains all the elements in this set.
         * Primitives are treated as equal if they have the same type and convert to the
         * same string; objects are treated as equal if they are references to the same
         * object.  This operation is O(n).
         * @param {goog.structs.Collection.<T>|Object} col A collection.
         * @return {boolean} True if this set is a subset of the given collection.
         */
        isSubsetOf(col: any /*goog.structs.Collection<T>|Object*/): boolean;
    
        /**
         * Returns an iterator that iterates over the elements in this set.
         * @param {boolean=} opt_keys This argument is ignored.
         * @return {!goog.iter.Iterator} An iterator over the elements in this set.
         */
        __iterator__(opt_keys?: boolean): goog.iter.Iterator;
    }

    /**
     * A generic pool class. Simpler and more efficient than goog.structs.Pool
     * because it doesn't maintain a list of objects that are in use. This class
     * has constant overhead and doesn't create any additional objects as part of
     * the pool management after construction time.
     *
     * IMPORTANT: If the objects being pooled are arrays or maps that can have
     * unlimited number of properties, they need to be cleaned before being
     * returned to the pool.
     *
     * Also note that {@see goog.object.clean} actually allocates an array to clean
     * the object passed to it, so simply using this function would defy the
     * purpose of using the pool.
     *
     * @param {number} initialCount Initial number of objects to populate the free
     *     pool at construction time.
     * @param {number} maxCount Maximum number of objects to keep in the free pool.
     * @constructor
     * @extends {goog.Disposable}
     * @template T
     */
    class SimplePool extends goog.Disposable {
        /**
         * A generic pool class. Simpler and more efficient than goog.structs.Pool
         * because it doesn't maintain a list of objects that are in use. This class
         * has constant overhead and doesn't create any additional objects as part of
         * the pool management after construction time.
         *
         * IMPORTANT: If the objects being pooled are arrays or maps that can have
         * unlimited number of properties, they need to be cleaned before being
         * returned to the pool.
         *
         * Also note that {@see goog.object.clean} actually allocates an array to clean
         * the object passed to it, so simply using this function would defy the
         * purpose of using the pool.
         *
         * @param {number} initialCount Initial number of objects to populate the free
         *     pool at construction time.
         * @param {number} maxCount Maximum number of objects to keep in the free pool.
         * @constructor
         * @extends {goog.Disposable}
         * @template T
         */
        constructor(initialCount: number, maxCount: number);
    
        /**
         * Sets the {@code createObject} function which is used for creating a new
         * object in the pool.
         * @param {Function} createObjectFn Create object function which returns the
         *     newly created object.
         */
        setCreateObjectFn(createObjectFn: Function): void;
    
        /**
         * Sets the {@code disposeObject} function which is used for disposing of an
         * object in the pool.
         * @param {Function} disposeObjectFn Dispose object function which takes the
         *     object to dispose as a parameter.
         */
        setDisposeObjectFn(disposeObjectFn: Function): void;
    
        /**
         * Gets an unused object from the the pool, if there is one available,
         * otherwise creates a new one.
         * @return {T} An object from the pool or a new one if necessary.
         */
        getObject(): T;
    
        /**
         * Returns an object to the pool so that it can be reused. If the pool is
         * already full, the object is disposed instead.
         * @param {T} obj The object to release.
         */
        releaseObject(obj: T): void;
    
        /**
         * Should be overridden by sub-classes to return an instance of the object type
         * that is expected in the pool.
         * @return {T} The created object.
         */
        createObject(): T;
    
        /**
         * Should be overrideen to dispose of an object. Default implementation is to
         * remove all of the object's members, which should render it useless. Calls the
         *  object's dispose method, if available.
         * @param {T} obj The object to dispose.
         */
        disposeObject(obj: T): void;
    
        /**
         * Disposes of the pool and all objects currently held in the pool.
         * @override
         * @protected
         */
        disposeInternal(): void;
    }

    /**
     * Creates a set of strings.
     * @param {!Array=} opt_elements Elements to add to the set. The non-string
     *     items will be converted to strings, so 15 and '15' will mean the same.
     * @constructor
     * @final
     */
    class StringSet {
        /**
         * Creates a set of strings.
         * @param {!Array=} opt_elements Elements to add to the set. The non-string
         *     items will be converted to strings, so 15 and '15' will mean the same.
         * @constructor
         * @final
         */
        constructor(opt_elements?: any[]);
    
        /**
         * Adds a single element to the set.
         * @param {*} element The element to add. It will be converted to string.
         */
        add(element: any): void;
    
        /**
         * Adds a the elements of an array to this set.
         * @param {!Array} arr The array to add the elements of.
         */
        addArray(arr: any[]): void;
    
        /**
         * Adds a the elements of a set to this set.
         * @param {!goog.structs.StringSet} stringSet The set to add the elements of.
         */
        addSet(stringSet: goog.structs.StringSet): void;
    
        /**
         * Removes all elements of the set.
         */
        clear(): void;
    
        /**
         * @return {!goog.structs.StringSet} Clone of the set.
         */
        clone(): goog.structs.StringSet;
    
        /**
         * Tells if the set contains the given element.
         * @param {*} element The element to check.
         * @return {boolean} Whether it is in the set.
         */
        contains(element: any): boolean;
    
        /**
         * Tells if the set contains all elements of the array.
         * @param {!Array} arr The elements to check.
         * @return {boolean} Whether they are in the set.
         */
        containsArray(arr: any[]): boolean;
    
        /**
         * Tells if this set has the same elements as the given set.
         * @param {!goog.structs.StringSet} stringSet The other set.
         * @return {boolean} Whether they have the same elements.
         */
        equals(stringSet: goog.structs.StringSet): boolean;
    
        /**
         * Calls a function for each element in the set.
         * @param {function(string, undefined, !goog.structs.StringSet)} f The function
         *     to call for every element. It takes the element, undefined (because sets
         *     have no notion of keys), and the set.
         * @param {Object=} opt_obj The object to be used as the value of 'this'
         *     within {@code f}.
         */
        forEach(f: (_0: string, _1: any /*undefined*/, _2: goog.structs.StringSet) => any /*missing*/, opt_obj?: Object): void;
    
        /**
         * Counts the number of elements in the set in linear time.
         * NOTE: getCount is always called at most once per set instance in google3.
         * If this usage pattern won't change, the linear getCount implementation is
         * better, because
         * <li>populating a set and getting the number of elements in it takes the same
         * amount of time as keeping a count_ member up to date and getting its value;
         * <li>if getCount is not called, adding and removing elements have no overhead.
         * @return {number} The number of elements in the set.
         */
        getCount: any /*missing*/;
    
        /**
         * Calculates the difference of two sets.
         * @param {!goog.structs.StringSet} stringSet The set to subtract from this set.
         * @return {!goog.structs.StringSet} {@code this} minus {@code stringSet}.
         */
        getDifference(stringSet: goog.structs.StringSet): goog.structs.StringSet;
    
        /**
         * Calculates the intersection of this set with another set.
         * @param {!goog.structs.StringSet} stringSet The set to take the intersection
         *     with.
         * @return {!goog.structs.StringSet} A new set with the common elements.
         */
        getIntersection(stringSet: goog.structs.StringSet): goog.structs.StringSet;
    
        /**
         * Calculates the symmetric difference of two sets.
         * @param {!goog.structs.StringSet} stringSet The other set.
         * @return {!goog.structs.StringSet} A new set with the elements in exactly one
         *     of {@code this} and {@code stringSet}.
         */
        getSymmetricDifference(stringSet: goog.structs.StringSet): goog.structs.StringSet;
    
        /**
         * Calculates the union of this set and another set.
         * @param {!goog.structs.StringSet} stringSet The set to take the union with.
         * @return {!goog.structs.StringSet} A new set with the union of elements.
         */
        getUnion(stringSet: goog.structs.StringSet): goog.structs.StringSet;
    
        /**
         * @return {!Array.<string>} The elements of the set.
         */
        getValues: any /*missing*/;
    
        /**
         * Tells if this set and the given set are disjoint.
         * @param {!goog.structs.StringSet} stringSet The other set.
         * @return {boolean} True iff they don't have common elements.
         */
        isDisjoint(stringSet: goog.structs.StringSet): boolean;
    
        /**
         * @return {boolean} Whether the set is empty.
         */
        isEmpty(): boolean;
    
        /**
         * Tells if this set is the subset of the given set.
         * @param {!goog.structs.StringSet} stringSet The other set.
         * @return {boolean} Whether this set if the subset of that.
         */
        isSubsetOf(stringSet: goog.structs.StringSet): boolean;
    
        /**
         * Tells if this set is the superset of the given set.
         * @param {!goog.structs.StringSet} stringSet The other set.
         * @return {boolean} Whether this set if the superset of that.
         */
        isSupersetOf(stringSet: goog.structs.StringSet): boolean;
    
        /**
         * Removes a single element from the set.
         * @param {*} element The element to remove.
         * @return {boolean} Whether the element was in the set.
         */
        remove(element: any): boolean;
    
        /**
         * Removes all elements of the given array from this set.
         * @param {!Array} arr The elements to remove.
         */
        removeArray(arr: any[]): void;
    
        /**
         * Removes all elements of the given set from this set.
         * @param {!goog.structs.StringSet} stringSet The set of elements to remove.
         */
        removeSet(stringSet: goog.structs.StringSet): void;
    
        /**
         * Returns an iterator that iterates over the elements in the set.
         * NOTE: creating the iterator copies the whole set so use {@link #forEach} when
         * possible.
         * @param {boolean=} opt_keys Ignored for sets.
         * @return {!goog.iter.Iterator} An iterator over the elements in the set.
         */
        __iterator__(opt_keys?: boolean): goog.iter.Iterator;
    }

    /**
     * Generic tree node data structure with arbitrary number of child nodes.
     * It is possible to create a dynamic tree structure by overriding
     * {@link #getParent} and {@link #getChildren} in a subclass. All other getters
     * will automatically work.
     *
     * @param {KEY} key Key.
     * @param {VALUE} value Value.
     * @constructor
     * @extends {goog.structs.Node.<KEY, VALUE>}
     * @template KEY, VALUE
     */
    class TreeNode extends goog.structs.Node<KEY,VALUE> {
        /**
         * Generic tree node data structure with arbitrary number of child nodes.
         * It is possible to create a dynamic tree structure by overriding
         * {@link #getParent} and {@link #getChildren} in a subclass. All other getters
         * will automatically work.
         *
         * @param {KEY} key Key.
         * @param {VALUE} value Value.
         * @constructor
         * @extends {goog.structs.Node.<KEY, VALUE>}
         * @template KEY, VALUE
         */
        constructor(key: KEY, value: VALUE);
    
        /**
         * @return {!goog.structs.TreeNode} Clone of the tree node without its parent
         *     and child nodes. The key and the value are copied by reference.
         * @override
         */
        clone(): goog.structs.TreeNode;
    
        /**
         * @return {!goog.structs.TreeNode} Clone of the subtree with this node as root.
         */
        deepClone(): goog.structs.TreeNode;
    
        /**
         * @return {goog.structs.TreeNode.<KEY, VALUE>} Parent node or null if it has no
         *     parent.
         */
        getParent(): goog.structs.TreeNode<KEY,VALUE>;
    
        /**
         * @return {boolean} Whether the node is a leaf node.
         */
        isLeaf(): boolean;
    
        /**
         * Tells if the node is the last child of its parent. This method helps how to
         * connect the tree nodes with lines: L shapes should be used before the last
         * children and |- shapes before the rest. Schematic tree visualization:
         *
         * <pre>
         * Node1
         * |-Node2
         * | L-Node3
         * |   |-Node4
         * |   L-Node5
         * L-Node6
         * </pre>
         *
         * @return {boolean} Whether the node has parent and is the last child of it.
         */
        isLastChild(): boolean;
    
        /**
         * @return {!Array.<!goog.structs.TreeNode.<KEY, VALUE>>} Immutable child nodes.
         */
        getChildren(): goog.structs.TreeNode<KEY,VALUE>[];
    
        /**
         * Gets the child node of this node at the given index.
         * @param {number} index Child index.
         * @return {goog.structs.TreeNode.<KEY, VALUE>} The node at the given index or
         *     null if not found.
         */
        getChildAt(index: number): goog.structs.TreeNode<KEY,VALUE>;
    
        /**
         * @return {number} The number of children.
         */
        getChildCount(): number;
    
        /**
         * @return {number} The number of ancestors of the node.
         */
        getDepth(): number;
    
        /**
         * @return {!Array.<!goog.structs.TreeNode.<KEY, VALUE>>} All ancestor nodes in
         *     bottom-up order.
         */
        getAncestors(): goog.structs.TreeNode<KEY,VALUE>[];
    
        /**
         * @return {!goog.structs.TreeNode.<KEY, VALUE>} The root of the tree structure,
         *     i.e. the farthest ancestor of the node or the node itself if it has no
         *     parents.
         */
        getRoot(): goog.structs.TreeNode<KEY,VALUE>;
    
        /**
         * Builds a nested array structure from the node keys in this node's subtree to
         * facilitate testing tree operations that change the hierarchy.
         * @return {!Array.<KEY>} The structure of this node's descendants as nested
         *     array of node keys. The number of unclosed opening brackets up to a
         *     particular node is proportional to the indentation of that node in the
         *     graphical representation of the tree. Example:
         *     <pre>
         *       this
         *       |- child1
         *       |  L- grandchild
         *       L- child2
         *     </pre>
         *     is represented as ['child1', ['grandchild'], 'child2'].
         */
        getSubtreeKeys(): KEY[];
    
        /**
         * Tells whether this node is the ancestor of the given node.
         * @param {!goog.structs.TreeNode.<KEY, VALUE>} node A node.
         * @return {boolean} Whether this node is the ancestor of {@code node}.
         */
        contains(node: goog.structs.TreeNode<KEY,VALUE>): boolean;
    
        /**
         * Returns a node whose key matches the given one in the hierarchy rooted at
         * this node. The hierarchy is searched using an in-order traversal.
         * @param {KEY} key The key to search for.
         * @return {goog.structs.TreeNode.<KEY, VALUE>} The node with the given key, or
         *     null if no node with the given key exists in the hierarchy.
         */
        getNodeByKey(key: KEY): goog.structs.TreeNode<KEY,VALUE>;
    
        /**
         * Traverses all child nodes.
         * @param {function(this:THIS, !goog.structs.TreeNode.<KEY, VALUE>, number,
         *     !Array.<!goog.structs.TreeNode.<KEY, VALUE>>)} f Callback function. It
         *     takes the node, its index and the array of all child nodes as arguments.
         * @param {THIS=} opt_this The object to be used as the value of {@code this}
         *     within {@code f}.
         * @template THIS
         */
        forEachChild(): void;
    
        /**
         * Traverses all child nodes recursively in preorder.
         * @param {function(!goog.structs.TreeNode.<KEY, VALUE>)} f Callback function.
         *     It takes the node as argument.
         * @param {Object=} opt_this The object to be used as the value of {@code this}
         *     within {@code f}.
         */
        forEachDescendant(f: (_0: goog.structs.TreeNode<KEY,VALUE>) => any /*missing*/, opt_this?: Object): void;
    
        /**
         * Traverses the subtree with the possibility to skip branches. Starts with
         * this node, and visits the descendant nodes depth-first, in preorder.
         * @param {function(this:THIS, !goog.structs.TreeNode.<KEY, VALUE>):
         *     (boolean|undefined)} f Callback function. It takes the node as argument.
         *     The children of this node will be visited if the callback returns true or
         *     undefined, and will be skipped if the callback returns false.
         * @param {THIS=} opt_this The object to be used as the value of {@code this}
         *     within {@code f}.
         * @template THIS
         */
        traverse(): void;
    
        /**
         * Sets the parent node of this node. The callers must ensure that the parent
         * node and only that has this node among its children.
         * @param {goog.structs.TreeNode.<KEY, VALUE>} parent The parent to set. If
         *     null, the node will be detached from the tree.
         * @protected
         */
        setParent(parent: goog.structs.TreeNode<KEY,VALUE>): void;
    
        /**
         * Appends a child node to this node.
         * @param {!goog.structs.TreeNode.<KEY, VALUE>} child Orphan child node.
         */
        addChild(child: goog.structs.TreeNode<KEY,VALUE>): void;
    
        /**
         * Inserts a child node at the given index.
         * @param {!goog.structs.TreeNode.<KEY, VALUE>} child Orphan child node.
         * @param {number} index The position to insert at.
         */
        addChildAt(child: goog.structs.TreeNode<KEY,VALUE>, index: number): void;
    
        /**
         * Replaces a child node at the given index.
         * @param {!goog.structs.TreeNode.<KEY, VALUE>} newChild Child node to set. It
         *     must not have parent node.
         * @param {number} index Valid index of the old child to replace.
         * @return {!goog.structs.TreeNode.<KEY, VALUE>} The original child node,
         *     detached from its parent.
         */
        replaceChildAt(newChild: goog.structs.TreeNode<KEY,VALUE>, index: number): goog.structs.TreeNode<KEY,VALUE>;
    
        /**
         * Replaces the given child node.
         * @param {!goog.structs.TreeNode.<KEY, VALUE>} newChild New node to replace
         *     {@code oldChild}. It must not have parent node.
         * @param {!goog.structs.TreeNode.<KEY, VALUE>} oldChild Existing child node to
         *     be replaced.
         * @return {!goog.structs.TreeNode.<KEY, VALUE>} The replaced child node
         *     detached from its parent.
         */
        replaceChild(newChild: goog.structs.TreeNode<KEY,VALUE>, oldChild: goog.structs.TreeNode<KEY,VALUE>): goog.structs.TreeNode<KEY,VALUE>;
    
        /**
         * Removes the child node at the given index.
         * @param {number} index The position to remove from.
         * @return {goog.structs.TreeNode.<KEY, VALUE>} The removed node if any.
         */
        removeChildAt(index: number): goog.structs.TreeNode<KEY,VALUE>;
    
        /**
         * Removes the given child node of this node.
         * @param {goog.structs.TreeNode.<KEY, VALUE>} child The node to remove.
         * @return {goog.structs.TreeNode.<KEY, VALUE>} The removed node if any.
         */
        removeChild(child: goog.structs.TreeNode<KEY,VALUE>): goog.structs.TreeNode<KEY,VALUE>;
    
        /**
         * Removes all child nodes of this node.
         */
        removeChildren(): void;
    }

    /**
     * Class for a Trie datastructure.  Trie data structures are made out of trees
     * of Trie classes.
     *
     * @param {goog.structs.Trie.<VALUE>|Object.<string, VALUE>=} opt_trie Optional
     *     goog.structs.Trie or Object to initialize trie with.
     * @constructor
     * @template VALUE
     */
    class Trie {
        /**
         * Class for a Trie datastructure.  Trie data structures are made out of trees
         * of Trie classes.
         *
         * @param {goog.structs.Trie.<VALUE>|Object.<string, VALUE>=} opt_trie Optional
         *     goog.structs.Trie or Object to initialize trie with.
         * @constructor
         * @template VALUE
         */
        constructor(opt_trie?: any /*goog.structs.Trie<VALUE>|{ [key: string]: VALUE }*/);
    
        /**
         * Sets the given key/value pair in the trie.  O(L), where L is the length
         * of the key.
         * @param {string} key The key.
         * @param {VALUE} value The value.
         */
        set(key: string, value: VALUE): void;
    
        /**
         * Adds the given key/value pair in the trie.  Throw an exception if the key
         * already exists in the trie.  O(L), where L is the length of the key.
         * @param {string} key The key.
         * @param {VALUE} value The value.
         */
        add(key: string, value: VALUE): void;
    
        /**
         * Adds multiple key/value pairs from another goog.structs.Trie or Object.
         * O(N) where N is the number of nodes in the trie.
         * @param {!Object.<string, VALUE>|!goog.structs.Trie.<VALUE>} trie Object
         *     containing the data to add.
         */
        setAll(trie: any /*{ [key: string]: VALUE }|goog.structs.Trie<VALUE>*/): void;
    
        /**
         * Retrieves a value from the trie given a key.  O(L), where L is the length of
         * the key.
         * @param {string} key The key to retrieve from the trie.
         * @return {VALUE|undefined} The value of the key in the trie, or undefined if
         *     the trie does not contain this key.
         */
        get(key: string): any /*VALUE|any (undefined)*/;
    
        /**
         * Retrieves all values from the trie that correspond to prefixes of the given
         * input key. O(L), where L is the length of the key.
         *
         * @param {string} key The key to use for lookup. The given key as well as all
         *     prefixes of the key are retrieved.
         * @param {?number=} opt_keyStartIndex Optional position in key to start lookup
         *     from. Defaults to 0 if not specified.
         * @return {!Object.<string, VALUE>} Map of end index of matching prefixes and
         *     corresponding values. Empty if no match found.
         */
        getKeyAndPrefixes(key: string, opt_keyStartIndex?: number): { [key: string]: VALUE };
    
        /**
         * Gets the values of the trie.  Not returned in any reliable order.  O(N) where
         * N is the number of nodes in the trie.  Calls getValuesInternal_.
         * @return {!Array.<VALUE>} The values in the trie.
         */
        getValues(): VALUE[];
    
        /**
         * Gets the keys of the trie.  Not returned in any reliable order.  O(N) where
         * N is the number of nodes in the trie (or prefix subtree).
         * @param {string=} opt_prefix Find only keys with this optional prefix.
         * @return {!Array.<string>} The keys in the trie.
         */
        getKeys(opt_prefix?: string): string[];
    
        /**
         * Checks to see if a certain key is in the trie.  O(L), where L is the length
         * of the key.
         * @param {string} key A key that may be in the trie.
         * @return {boolean} Whether the trie contains key.
         */
        containsKey(key: string): boolean;
    
        /**
         * Checks to see if a certain prefix is in the trie. O(L), where L is the length
         * of the prefix.
         * @param {string} prefix A prefix that may be in the trie.
         * @return {boolean} Whether any key of the trie has the prefix.
         */
        containsPrefix(prefix: string): boolean;
    
        /**
         * Checks to see if a certain value is in the trie.  Worst case is O(N) where
         * N is the number of nodes in the trie.
         * @param {!VALUE} value A value that may be in the trie.
         * @return {boolean} Whether the trie contains the value.
         */
        containsValue(value: VALUE): boolean;
    
        /**
         * Completely empties a trie of all keys and values.  ~O(1)
         */
        clear(): void;
    
        /**
         * Removes a key from the trie or throws an exception if the key is not in the
         * trie.  O(L), where L is the length of the key.
         * @param {string} key A key that should be removed from the trie.
         * @return {!VALUE} The value whose key was removed.
         */
        remove(key: string): VALUE;
    
        /**
         * Clones a trie and returns a new trie.  O(N), where N is the number of nodes
         * in the trie.
         * @return {!goog.structs.Trie.<VALUE>} A new goog.structs.Trie with the same
         *     key value pairs.
         */
        clone(): goog.structs.Trie<VALUE>;
    
        /**
         * Returns the number of key value pairs in the trie.  O(N), where N is the
         * number of nodes in the trie.
         * TODO: This could be optimized by storing a weight (count below) in every
         * node.
         * @return {number} The number of pairs.
         */
        getCount(): number;
    
        /**
         * Returns true if this trie contains no elements.  ~O(1).
         * @return {boolean} True iff this trie contains no elements.
         */
        isEmpty(): boolean;
    }
}

declare module 'goog.structs.TreeNode' {

    /**
     * Finds the deepest common ancestor of the given nodes. The concept of
     * ancestor is not strict in this case, it includes the node itself.
     * @param {...!goog.structs.TreeNode.<KEY, VALUE>} var_args The nodes.
     * @return {goog.structs.TreeNode.<KEY, VALUE>} The common ancestor of the nodes
     *     or null if they are from different trees.
     * @template KEY, VALUE
     */
    function findCommonAncestor<KEY, VALUE>(...var_args: goog.structs.TreeNode<KEY,VALUE>[]): goog.structs.TreeNode<KEY,VALUE>;
}

declare module 'goog.structs.AvlTree' {

    /**
     * Constructs an AVL-Tree node with the specified value. If no parent is
     * specified, the node's parent is assumed to be null. The node's height
     * defaults to 1 and its children default to null.
     *
     * @param {T} value Value to store in the node.
     * @param {goog.structs.AvlTree.Node.<T>=} opt_parent Optional parent node.
     * @constructor
     * @final
     * @template T
     */
    class Node {
        /**
         * Constructs an AVL-Tree node with the specified value. If no parent is
         * specified, the node's parent is assumed to be null. The node's height
         * defaults to 1 and its children default to null.
         *
         * @param {T} value Value to store in the node.
         * @param {goog.structs.AvlTree.Node.<T>=} opt_parent Optional parent node.
         * @constructor
         * @final
         * @template T
         */
        constructor(value: T, opt_parent?: goog.structs.AvlTree.Node<T>);
    
        /**
         * The node's left child. Null if the node does not have a left child.
         *
         * @type {?goog.structs.AvlTree.Node.<T>}
         */
        left: goog.structs.AvlTree.Node<T>;
    
        /**
         * The node's right child. Null if the node does not have a right child.
         *
         * @type {?goog.structs.AvlTree.Node.<T>}
         */
        right: goog.structs.AvlTree.Node<T>;
    
        /**
         * The height of the tree rooted at this node.
         *
         * @type {number}
         */
        height: number;
    
        /**
         * Returns true iff the specified node has a parent and is the right child of
         * its parent.
         *
         * @return {boolean} Whether the specified node has a parent and is the right
         *    child of its parent.
         */
        isRightChild(): boolean;
    
        /**
         * Returns true iff the specified node has a parent and is the left child of
         * its parent.
         *
         * @return {boolean} Whether the specified node has a parent and is the left
         *    child of its parent.
         */
        isLeftChild(): boolean;
    }
}

