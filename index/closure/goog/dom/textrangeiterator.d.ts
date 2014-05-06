/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/dom/savedrange.d.ts" />
/// <reference path="../../../closure/goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../closure/goog/dom/abstractrange.d.ts" />

declare module goog.dom {

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
    class TextRangeIterator extends goog.dom.RangeIterator {
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

