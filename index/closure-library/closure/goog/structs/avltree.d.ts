/// <reference path="../../../globals.d.ts" />
/// <reference path="./collection.d.ts" />

declare module goog.structs {

    class AvlTree<T> extends AvlTree__Class<T> { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class AvlTree__Class<T> implements goog.structs.Collection<T>  { 
    
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
             * Removes all nodes from the tree.
             */
            clear(): void;
    
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
            reverseOrderTraverse(func: { (_0: T): any }, opt_startValue?: Object): void;
    
            /**
             * @param {T} value Value to add to the collection.
             */
            add(value: T): void;
    
            /**
             * @param {T} value Value to remove from the collection.
             */
            remove(value: T): void;
    
            /**
             * @param {T} value Value to find in the collection.
             * @return {boolean} Whether the collection contains the specified value.
             */
            contains(value: T): boolean;
    
            /**
             * @return {number} The number of values stored in the collection.
             */
            getCount(): number;
    } 
    
}

declare module goog.structs.AvlTree {

    class Node<T> extends Node__Class<T> { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Node__Class<T>  { 
    
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
             * The value stored by the node.
             *
             * @type {T}
             */
            value: T;
    
            /**
             * The node's parent. Null if the node is the root.
             *
             * @type {goog.structs.AvlTree.Node.<T>}
             */
            parent: goog.structs.AvlTree.Node<T>;
    
            /**
             * The number of nodes in the subtree rooted at this node.
             *
             * @type {number}
             */
            count: number;
    
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
