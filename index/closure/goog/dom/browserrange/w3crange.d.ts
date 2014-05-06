/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/string/stringbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/dom/savedrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/abstractrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/abstractrange.d.ts" />

declare module goog.dom.browserrange {

    /**
     * The constructor for W3C specific browser ranges.
     * @param {Range} range The range object.
     * @constructor
     * @extends {goog.dom.browserrange.AbstractRange}
     */
    class W3cRange extends goog.dom.browserrange.AbstractRange {
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

declare module goog.dom.browserrange.W3cRange {

    /**
     * Returns a browser range spanning the given node's contents.
     * @param {Node} node The node to select.
     * @return {Range} A browser range spanning the node's contents.
     * @protected
     */
    function getBrowserRangeForNode(node: Node): Range;

    /**
     * Returns a browser range spanning the given nodes.
     * @param {Node} startNode The node to start with - should not be a BR.
     * @param {number} startOffset The offset within the start node.
     * @param {Node} endNode The node to end with - should not be a BR.
     * @param {number} endOffset The offset within the end node.
     * @return {Range} A browser range spanning the node's contents.
     * @protected
     */
    function getBrowserRangeForNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): Range;

    /**
     * Creates a range object that selects the given node's text.
     * @param {Node} node The node to select.
     * @return {goog.dom.browserrange.W3cRange} A Gecko range wrapper object.
     */
    function createFromNodeContents(node: Node): goog.dom.browserrange.W3cRange;

    /**
     * Creates a range object that selects between the given nodes.
     * @param {Node} startNode The node to start with.
     * @param {number} startOffset The offset within the start node.
     * @param {Node} endNode The node to end with.
     * @param {number} endOffset The offset within the end node.
     * @return {goog.dom.browserrange.W3cRange} A wrapper object.
     */
    function createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.W3cRange;
}

