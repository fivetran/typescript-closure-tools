/// <reference path="../../../globals.d.ts" />
/// <reference path="./abstractrange.d.ts" />

declare module goog.dom {

    class TextRangeIterator extends TextRangeIterator.__Class { }
    module TextRangeIterator {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.dom.RangeIterator.__Class {
    
            /**
             * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
             * adds functions to determine the portion of each text node that is selected.
             *
             * @param {Node} startNode The starting node position.
             * @param {number} startOffset The offset in to startNode.  If startNode is
             *     an element, indicates an offset in to childNodes.  If startNode is a
             *     text node, indicates an offset in to nodeValue.
             * @param {Node} endNode The ending node position.
             * @param {number} endOffset The offset in to endNode.  If endNode is
             *     an element, indicates an offset in to childNodes.  If endNode is a
             *     text node, indicates an offset in to nodeValue.
             * @param {boolean=} opt_reverse Whether to traverse nodes in reverse.
             * @constructor
             * @extends {goog.dom.RangeIterator}
             * @final
             */
            constructor(startNode: Node, startOffset: number, endNode: Node, endOffset: number, opt_reverse?: boolean);
    
            /**
             * Change the start node of the iterator.
             * @param {Node} node The new start node.
             */
            setStartNode(node: Node): void;
    
            /**
             * Change the end node of the iterator.
             * @param {Node} node The new end node.
             */
            setEndNode(node: Node): void;
        }
    }
}
