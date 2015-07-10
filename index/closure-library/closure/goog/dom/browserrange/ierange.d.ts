/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractrange.d.ts" />

declare module goog.dom.browserrange {

    class IeRange extends IeRange__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class IeRange__Class extends goog.dom.browserrange.AbstractRange__Class  { 
    
            /**
             * The constructor for IE specific browser ranges.
             * @param {TextRange} range The range object.
             * @param {Document} doc The document the range exists in.
             * @constructor
             * @extends {goog.dom.browserrange.AbstractRange}
             * @final
             */
            constructor(range: TextRange, doc: Document);
    
            /**
             * Tests whether this range is valid (i.e. whether its endpoints are still in
             * the document).  A range becomes invalid when, after this object was created,
             * either one or both of its endpoints are removed from the document.  Use of
             * an invalid range can lead to runtime errors, particularly in IE.
             * @return {boolean} Whether the range is valid.
             */
            isRangeInDocument(): boolean;
    } 
    
}

declare module goog.dom.browserrange.IeRange {

    /**
     * Create a range object that selects the given node's text.
     * @param {Node} node The node to select.
     * @return {!goog.dom.browserrange.IeRange} An IE range wrapper object.
     */
    function createFromNodeContents(node: Node): goog.dom.browserrange.IeRange;

    /**
     * Static method that returns the proper type of browser range.
     * @param {Node} startNode The node to start with.
     * @param {number} startOffset The offset within the start node.
     * @param {Node} endNode The node to end with.
     * @param {number} endOffset The offset within the end node.
     * @return {!goog.dom.browserrange.AbstractRange} A wrapper object.
     */
    function createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.AbstractRange;
}
