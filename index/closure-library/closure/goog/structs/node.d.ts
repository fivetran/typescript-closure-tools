/// <reference path="../../../globals.d.ts" />

declare module goog.structs {

    class Node<K, V> extends Node__Class<K, V> { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Node__Class<K, V>  { 
    
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
             * @return {!goog.structs.Node.<K, V>} A new goog.structs.Node with the same
             *     key value pair.
             */
            clone(): goog.structs.Node<K,V>;
    } 
    
}
