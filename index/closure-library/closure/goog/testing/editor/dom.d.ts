/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../dom/abstractrange.d.ts" />

declare module goog.testing.editor.dom {

    /**
     * Returns the previous (in document order) node from the given node that is a
     * non-empty text node, or null if none is found or opt_stopAt is not an
     * ancestor of node. Note that if the given node has children, the search will
     * start from the end tag of the node, meaning all its descendants will be
     * included in the search, unless opt_skipDescendants is true.
     * @param {Node} node Node to start searching from.
     * @param {Node=} opt_stopAt Node to stop searching at (search will be
     *     restricted to this node's subtree), defaults to the body of the document
     *     containing node.
     * @param {boolean=} opt_skipDescendants Whether to skip searching the given
     *     node's descentants.
     * @return {Text} The previous (in document order) node from the given node
     *     that is a non-empty text node, or null if none is found.
     */
    function getPreviousNonEmptyTextNode(node: Node, opt_stopAt?: Node, opt_skipDescendants?: boolean): Text;

    /**
     * Returns the next (in document order) node from the given node that is a
     * non-empty text node, or null if none is found or opt_stopAt is not an
     * ancestor of node. Note that if the given node has children, the search will
     * start from the start tag of the node, meaning all its descendants will be
     * included in the search, unless opt_skipDescendants is true.
     * @param {Node} node Node to start searching from.
     * @param {Node=} opt_stopAt Node to stop searching at (search will be
     *     restricted to this node's subtree), defaults to the body of the document
     *     containing node.
     * @param {boolean=} opt_skipDescendants Whether to skip searching the given
     *     node's descentants.
     * @return {Text} The next (in document order) node from the given node that
     *     is a non-empty text node, or null if none is found or opt_stopAt is not
     *     an ancestor of node.
     */
    function getNextNonEmptyTextNode(node: Node, opt_stopAt?: Node, opt_skipDescendants?: boolean): Text;

    /**
     * Assert that the range is surrounded by the given strings. This is useful
     * because different browsers can place the range endpoints inside different
     * nodes even when visually the range looks the same. Also, there may be empty
     * text nodes in the way (again depending on the browser) making it difficult to
     * use assertRangeEquals.
     * @param {string} before String that should occur immediately before the start
     *     point of the range. If this is the empty string, assert will only succeed
     *     if there is no text before the start point of the range.
     * @param {string} after String that should occur immediately after the end
     *     point of the range. If this is the empty string, assert will only succeed
     *     if there is no text after the end point of the range.
     * @param {goog.dom.AbstractRange} range The range to be tested.
     * @param {Node=} opt_stopAt Node to stop searching at (search will be
     *     restricted to this node's subtree).
     */
    function assertRangeBetweenText(before: string, after: string, range: goog.dom.AbstractRange, opt_stopAt?: Node): void;
}
