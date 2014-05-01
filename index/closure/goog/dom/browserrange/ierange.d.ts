// Generated Wed Apr 30 22:38:44 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/string/stringbuffer.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/dom/savedrange.d.ts" />
/// <reference path="../../../goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../goog/dom/abstractrange.d.ts" />
/// <reference path="../../../goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../goog/dom/browserrange/abstractrange.d.ts" />

declare module goog.dom.browserrange.IeRange {

    /**
     * Create a range object that selects the given node's text.
     * @param {Node} node The node to select.
     * @return {goog.dom.browserrange.IeRange} An IE range wrapper object.
     */
    function createFromNodeContents(node: Node): goog.dom.browserrange.IeRange;

    /**
     * Static method that returns the proper type of browser range.
     * @param {Node} startNode The node to start with.
     * @param {number} startOffset The offset within the start node.
     * @param {Node} endNode The node to end with.
     * @param {number} endOffset The offset within the end node.
     * @return {goog.dom.browserrange.AbstractRange} A wrapper object.
     */
    function createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.AbstractRange;
}

declare module goog.dom.browserrange {

    /**
     * The constructor for IE specific browser ranges.
     * @param {TextRange} range The range object.
     * @param {Document} doc The document the range exists in.
     * @constructor
     * @extends {goog.dom.browserrange.AbstractRange}
     * @final
     */
    class IeRange extends goog.dom.browserrange.AbstractRange {
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

