/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/string/stringbuffer.d.ts" />
/// <reference path="../../../../closure/goog/dom/rangeendpoint.d.ts" />
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
/// <reference path="../../../../closure/goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/operarange.d.ts" />

declare module goog.dom.browserrange {

    /**
     * Common error constants.
     * @enum {string}
     */
    enum Error { NOT_IMPLEMENTED } 

    /**
     * Static method that returns the proper type of browser range.
     * @param {Range|TextRange} range A browser range object.
     * @return {goog.dom.browserrange.AbstractRange} A wrapper object.
     */
    function createRange(range: any /*Range|TextRange*/): goog.dom.browserrange.AbstractRange;

    /**
     * Static method that returns the proper type of browser range.
     * @param {Node} node The node to select.
     * @return {goog.dom.browserrange.AbstractRange} A wrapper object.
     */
    function createRangeFromNodeContents(node: Node): goog.dom.browserrange.AbstractRange;

    /**
     * Static method that returns the proper type of browser range.
     * @param {Node} startNode The node to start with.
     * @param {number} startOffset The offset within the node to start.  This is
     *     either the index into the childNodes array for element startNodes or
     *     the index into the character array for text startNodes.
     * @param {Node} endNode The node to end with.
     * @param {number} endOffset The offset within the node to end.  This is
     *     either the index into the childNodes array for element endNodes or
     *     the index into the character array for text endNodes.
     * @return {goog.dom.browserrange.AbstractRange} A wrapper object.
     */
    function createRangeFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.AbstractRange;

    /**
     * Tests whether the given node can contain a range end point.
     * @param {Node} node The node to check.
     * @return {boolean} Whether the given node can contain a range end point.
     */
    function canContainRangeEndpoint(node: Node): boolean;
}

