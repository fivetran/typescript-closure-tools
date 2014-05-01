// Generated Wed Apr 30 16:29:19 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/log.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.dom.browserrange' {

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

    /**
     * The constructor for abstract ranges.  Don't call this from subclasses.
     * @constructor
     */
    class AbstractRange {
        /**
         * The constructor for abstract ranges.  Don't call this from subclasses.
         * @constructor
         */
        constructor();
    
        /**
         * @return {goog.dom.browserrange.AbstractRange} A clone of this range.
         */
        clone: any /*missing*/;
    
        /**
         * Returns the browser native implementation of the range.  Please refrain from
         * using this function - if you find you need the range please add wrappers for
         * the functionality you need rather than just using the native range.
         * @return {Range|TextRange} The browser native range object.
         */
        getBrowserRange: any /*missing*/;
    
        /**
         * Returns the deepest node in the tree that contains the entire range.
         * @return {Node} The deepest node that contains the entire range.
         */
        getContainer: any /*missing*/;
    
        /**
         * Returns the node the range starts in.
         * @return {Node} The element or text node the range starts in.
         */
        getStartNode: any /*missing*/;
    
        /**
         * Returns the offset into the node the range starts in.
         * @return {number} The offset into the node the range starts in.  For text
         *     nodes, this is an offset into the node value.  For elements, this is
         *     an offset into the childNodes array.
         */
        getStartOffset: any /*missing*/;
    
        /**
         * @return {goog.math.Coordinate} The coordinate of the selection start node
         *     and offset.
         */
        getStartPosition(): goog.math.Coordinate;
    
        /**
         * Returns the node the range ends in.
         * @return {Node} The element or text node the range ends in.
         */
        getEndNode: any /*missing*/;
    
        /**
         * Returns the offset into the node the range ends in.
         * @return {number} The offset into the node the range ends in.  For text
         *     nodes, this is an offset into the node value.  For elements, this is
         *     an offset into the childNodes array.
         */
        getEndOffset: any /*missing*/;
    
        /**
         * @return {goog.math.Coordinate} The coordinate of the selection end node
         *     and offset.
         */
        getEndPosition(): goog.math.Coordinate;
    
        /**
         * Compares one endpoint of this range with the endpoint of another browser
         * native range object.
         * @param {Range|TextRange} range The browser native range to compare against.
         * @param {goog.dom.RangeEndpoint} thisEndpoint The endpoint of this range
         *     to compare with.
         * @param {goog.dom.RangeEndpoint} otherEndpoint The endpoint of the other
         *     range to compare with.
         * @return {number} 0 if the endpoints are equal, negative if this range
         *     endpoint comes before the other range endpoint, and positive otherwise.
         */
        compareBrowserRangeEndpoints: any /*missing*/;
    
        /**
         * Tests if this range contains the given range.
         * @param {goog.dom.browserrange.AbstractRange} abstractRange The range to test.
         * @param {boolean=} opt_allowPartial If not set or false, the range must be
         *     entirely contained in the selection for this function to return true.
         * @return {boolean} Whether this range contains the given range.
         */
        containsRange(abstractRange: goog.dom.browserrange.AbstractRange, opt_allowPartial?: boolean): boolean;
    
        /**
         * Tests if this range contains the given node.
         * @param {Node} node The node to test.
         * @param {boolean=} opt_allowPartial If not set or false, the node must be
         *     entirely contained in the selection for this function to return true.
         * @return {boolean} Whether this range contains the given node.
         */
        containsNode(node: Node, opt_allowPartial?: boolean): boolean;
    
        /**
         * Tests if the selection is collapsed - i.e. is just a caret.
         * @return {boolean} Whether the range is collapsed.
         */
        isCollapsed: any /*missing*/;
    
        /**
         * @return {string} The text content of the range.
         */
        getText: any /*missing*/;
    
        /**
         * Returns the HTML fragment this range selects.  This is slow on all browsers.
         * @return {string} HTML fragment of the range, does not include context
         *     containing elements.
         */
        getHtmlFragment(): string;
    
        /**
         * Returns valid HTML for this range.  This is fast on IE, and semi-fast on
         * other browsers.
         * @return {string} Valid HTML of the range, including context containing
         *     elements.
         */
        getValidHtml: any /*missing*/;
    
        /**
         * Returns a RangeIterator over the contents of the range.  Regardless of the
         * direction of the range, the iterator will move in document order.
         * @param {boolean=} opt_keys Unused for this iterator.
         * @return {goog.dom.RangeIterator} An iterator over tags in the range.
         */
        __iterator__(opt_keys?: boolean): goog.dom.RangeIterator;
    
        /**
         * Set this range as the selection in its window.
         * @param {boolean=} opt_reverse Whether to select the range in reverse,
         *     if possible.
         */
        select: any /*missing*/;
    
        /**
         * Removes the contents of the range from the document.  As a side effect, the
         * selection will be collapsed.  The behavior of content removal is normalized
         * across browsers.  For instance, IE sometimes creates extra text nodes that
         * a W3C browser does not.  That behavior is corrected for.
         */
        removeContents: any /*missing*/;
    
        /**
         * Surrounds the text range with the specified element (on Mozilla) or with a
         * clone of the specified element (on IE).  Returns a reference to the
         * surrounding element if the operation was successful; returns null if the
         * operation failed.
         * @param {Element} element The element with which the selection is to be
         *    surrounded.
         * @return {Element} The surrounding element (same as the argument on Mozilla,
         *    but not on IE), or null if unsuccessful.
         */
        surroundContents: any /*missing*/;
    
        /**
         * Inserts a node before (or after) the range.  The range may be disrupted
         * beyond recovery because of the way this splits nodes.
         * @param {Node} node The node to insert.
         * @param {boolean} before True to insert before, false to insert after.
         * @return {Node} The node added to the document.  This may be different
         *     than the node parameter because on IE we have to clone it.
         */
        insertNode: any /*missing*/;
    
        /**
         * Surrounds this range with the two given nodes.  The range may be disrupted
         * beyond recovery because of the way this splits nodes.
         * @param {Element} startNode The node to insert at the start.
         * @param {Element} endNode The node to insert at the end.
         */
        surroundWithNodes: any /*missing*/;
    
        /**
         * Collapses the range to one of its boundary points.
         * @param {boolean} toStart Whether to collapse to the start of the range.
         */
        collapse: any /*missing*/;
    }

    /**
     * The constructor for Gecko specific browser ranges.
     * @param {Range} range The range object.
     * @constructor
     * @extends {goog.dom.browserrange.W3cRange}
     * @final
     */
    class GeckoRange extends goog.dom.browserrange.W3cRange {
        /**
         * The constructor for Gecko specific browser ranges.
         * @param {Range} range The range object.
         * @constructor
         * @extends {goog.dom.browserrange.W3cRange}
         * @final
         */
        constructor(range: Range);
    
        /** @override */
        selectInternal(): void;
    }

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
         * @return {goog.dom.browserrange.IeRange} A clone of this range.
         * @override
         */
        clone(): goog.dom.browserrange.IeRange;
    
        /** @override */
        getBrowserRange(): void;
    
        /** @override */
        getContainer(): void;
    
        /** @override */
        getStartNode(): void;
    
        /** @override */
        getStartOffset(): void;
    
        /** @override */
        getEndNode(): void;
    
        /** @override */
        getEndOffset(): void;
    
        /** @override */
        compareBrowserRangeEndpoints(): void;
    
        /**
         * Tests whether this range is valid (i.e. whether its endpoints are still in
         * the document).  A range becomes invalid when, after this object was created,
         * either one or both of its endpoints are removed from the document.  Use of
         * an invalid range can lead to runtime errors, particularly in IE.
         * @return {boolean} Whether the range is valid.
         */
        isRangeInDocument(): boolean;
    
        /** @override */
        isCollapsed(): void;
    
        /** @override */
        getText(): void;
    
        /** @override */
        getValidHtml(): void;
    
        /** @override */
        select(): void;
    
        /** @override */
        removeContents(): void;
    
        /** @override */
        surroundContents(): void;
    
        /** @override */
        insertNode(): void;
    
        /** @override */
        surroundWithNodes(): void;
    
        /** @override */
        collapse(): void;
    }

    /**
     * The constructor for Opera specific browser ranges.
     * @param {Range} range The range object.
     * @constructor
     * @extends {goog.dom.browserrange.W3cRange}
     * @final
     */
    class OperaRange extends goog.dom.browserrange.W3cRange {
        /**
         * The constructor for Opera specific browser ranges.
         * @param {Range} range The range object.
         * @constructor
         * @extends {goog.dom.browserrange.W3cRange}
         * @final
         */
        constructor(range: Range);
    
        /** @override */
        selectInternal(): void;
    }

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
         * @return {goog.dom.browserrange.W3cRange} A clone of this range.
         * @override
         */
        clone(): goog.dom.browserrange.W3cRange;
    
        /** @override */
        getBrowserRange(): void;
    
        /** @override */
        getContainer(): void;
    
        /** @override */
        getStartNode(): void;
    
        /** @override */
        getStartOffset(): void;
    
        /** @override */
        getEndNode(): void;
    
        /** @override */
        getEndOffset(): void;
    
        /** @override */
        compareBrowserRangeEndpoints(): void;
    
        /** @override */
        isCollapsed(): void;
    
        /** @override */
        getText(): void;
    
        /** @override */
        getValidHtml(): void;
    
        /** @override */
        select(): void;
    
        /**
         * Select this range.
         * @param {Selection} selection Browser selection object.
         * @param {*} reverse Whether to select this range in reverse.
         * @protected
         */
        selectInternal(selection: Selection, reverse: any): void;
    
        /** @override */
        removeContents(): void;
    
        /** @override */
        surroundContents(): void;
    
        /** @override */
        insertNode(): void;
    
        /** @override */
        surroundWithNodes(): void;
    
        /** @override */
        collapse(): void;
    }

    /**
     * The constructor for WebKit specific browser ranges.
     * @param {Range} range The range object.
     * @constructor
     * @extends {goog.dom.browserrange.W3cRange}
     * @final
     */
    class WebKitRange extends goog.dom.browserrange.W3cRange {
        /**
         * The constructor for WebKit specific browser ranges.
         * @param {Range} range The range object.
         * @constructor
         * @extends {goog.dom.browserrange.W3cRange}
         * @final
         */
        constructor(range: Range);
    
        /** @override */
        compareBrowserRangeEndpoints(): void;
    
        /** @override */
        selectInternal(): void;
    }
}

declare module 'goog.dom.browserrange.GeckoRange' {

    /**
     * Creates a range object that selects the given node's text.
     * @param {Node} node The node to select.
     * @return {goog.dom.browserrange.GeckoRange} A Gecko range wrapper object.
     */
    function createFromNodeContents(node: Node): goog.dom.browserrange.GeckoRange;

    /**
     * Creates a range object that selects between the given nodes.
     * @param {Node} startNode The node to start with.
     * @param {number} startOffset The offset within the node to start.
     * @param {Node} endNode The node to end with.
     * @param {number} endOffset The offset within the node to end.
     * @return {goog.dom.browserrange.GeckoRange} A wrapper object.
     */
    function createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.GeckoRange;
}

declare module 'goog.dom.browserrange.IeRange' {

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

declare module 'goog.dom.browserrange.OperaRange' {

    /**
     * Creates a range object that selects the given node's text.
     * @param {Node} node The node to select.
     * @return {goog.dom.browserrange.OperaRange} A Opera range wrapper object.
     */
    function createFromNodeContents(node: Node): goog.dom.browserrange.OperaRange;

    /**
     * Creates a range object that selects between the given nodes.
     * @param {Node} startNode The node to start with.
     * @param {number} startOffset The offset within the node to start.
     * @param {Node} endNode The node to end with.
     * @param {number} endOffset The offset within the node to end.
     * @return {goog.dom.browserrange.OperaRange} A wrapper object.
     */
    function createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.OperaRange;
}

declare module 'goog.dom.browserrange.W3cRange' {

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

declare module 'goog.dom.browserrange.WebKitRange' {

    /**
     * Creates a range object that selects the given node's text.
     * @param {Node} node The node to select.
     * @return {goog.dom.browserrange.WebKitRange} A WebKit range wrapper object.
     */
    function createFromNodeContents(node: Node): goog.dom.browserrange.WebKitRange;

    /**
     * Creates a range object that selects between the given nodes.
     * @param {Node} startNode The node to start with.
     * @param {number} startOffset The offset within the start node.
     * @param {Node} endNode The node to end with.
     * @param {number} endOffset The offset within the end node.
     * @return {goog.dom.browserrange.WebKitRange} A wrapper object.
     */
    function createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.WebKitRange;
}

