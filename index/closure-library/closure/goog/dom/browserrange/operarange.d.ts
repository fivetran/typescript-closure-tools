/// <reference path="../../../../globals.d.ts" />
/// <reference path="./w3crange.d.ts" />

declare module goog.dom.browserrange {

    class OperaRange extends OperaRange__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class OperaRange__Class extends goog.dom.browserrange.W3cRange__Class  { 
    
            /**
             * The constructor for Opera specific browser ranges.
             * @param {Range} range The range object.
             * @constructor
             * @extends {goog.dom.browserrange.W3cRange}
             * @final
             */
            constructor(range: Range);
    } 
    
}

declare module goog.dom.browserrange.OperaRange {

    /**
     * Creates a range object that selects the given node's text.
     * @param {Node} node The node to select.
     * @return {!goog.dom.browserrange.OperaRange} A Opera range wrapper object.
     */
    function createFromNodeContents(node: Node): goog.dom.browserrange.OperaRange;

    /**
     * Creates a range object that selects between the given nodes.
     * @param {Node} startNode The node to start with.
     * @param {number} startOffset The offset within the node to start.
     * @param {Node} endNode The node to end with.
     * @param {number} endOffset The offset within the node to end.
     * @return {!goog.dom.browserrange.OperaRange} A wrapper object.
     */
    function createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.OperaRange;
}
