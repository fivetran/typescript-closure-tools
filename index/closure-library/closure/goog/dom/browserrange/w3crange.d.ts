/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractrange.d.ts" />

declare module goog.dom.browserrange {

    class W3cRange extends W3cRange.__Class { }
    module W3cRange {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.dom.browserrange.AbstractRange.__Class {
    
            /**
             * The constructor for W3C specific browser ranges.
             * @param {Range} range The range object.
             * @constructor
             * @extends {goog.dom.browserrange.AbstractRange}
             */
            constructor(range: Range);
    
            /**
             * Select this range.
             * @param {Selection} selection Browser selection object.
             * @param {*} reverse Whether to select this range in reverse.
             * @protected
             */
            selectInternal(selection: Selection, reverse: any): void;
        }
    }
}

declare module goog.dom.browserrange.W3cRange {

    /**
     * Returns a browser range spanning the given node's contents.
     * @param {Node} node The node to select.
     * @return {!Range} A browser range spanning the node's contents.
     * @protected
     */
    function getBrowserRangeForNode(node: Node): Range;

    /**
     * Returns a browser range spanning the given nodes.
     * @param {Node} startNode The node to start with - should not be a BR.
     * @param {number} startOffset The offset within the start node.
     * @param {Node} endNode The node to end with - should not be a BR.
     * @param {number} endOffset The offset within the end node.
     * @return {!Range} A browser range spanning the node's contents.
     * @protected
     */
    function getBrowserRangeForNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): Range;

    /**
     * Creates a range object that selects the given node's text.
     * @param {Node} node The node to select.
     * @return {!goog.dom.browserrange.W3cRange} A Gecko range wrapper object.
     */
    function createFromNodeContents(node: Node): goog.dom.browserrange.W3cRange;

    /**
     * Creates a range object that selects between the given nodes.
     * @param {Node} startNode The node to start with.
     * @param {number} startOffset The offset within the start node.
     * @param {Node} endNode The node to end with.
     * @param {number} endOffset The offset within the end node.
     * @return {!goog.dom.browserrange.W3cRange} A wrapper object.
     */
    function createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.W3cRange;
}
