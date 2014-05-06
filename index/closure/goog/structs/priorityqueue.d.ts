/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/structs/node.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/structs/heap.d.ts" />

declare module goog.structs {

    /**
     * Class for Priority Queue datastructure.
     *
     * @constructor
     * @extends {goog.structs.Heap.<number, VALUE>}
     * @template VALUE
     * @final
     */
    class PriorityQueue<VALUE> extends goog.structs.Heap<number,VALUE> {
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
}

