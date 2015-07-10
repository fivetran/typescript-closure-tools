/// <reference path="../../../globals.d.ts" />
/// <reference path="../iter/iter.d.ts" />
/// <reference path="../dom/abstractrange.d.ts" />

declare module goog.testing.dom {

    /**
     * Tests if the given iterator over nodes matches the given Array of node
     * descriptors.  Throws an error if any match fails.
     * @param {goog.iter.Iterator} it  An iterator over nodes.
     * @param {Array.<Node|number|string>} array Array of node descriptors to match
     *     against.  Node descriptors can be any of the following:
     *         Node: Test if the two nodes are equal.
     *         number: Test node.nodeType == number.
     *         string starting with '#': Match the node's id with the text
     *             after "#".
     *         other string: Match the text node's contents.
     */
    function assertNodesMatch(it: goog.iter.Iterator<any>, array: Node|number|string[]): void;

    /**
     * Exposes a node as a string.
     * @param {Node} node A node.
     * @return {string} A string representation of the node.
     */
    function exposeNode(node: Node): string;

    /**
     * Exposes the nodes of a range wrapper as a string.
     * @param {goog.dom.AbstractRange} range A range.
     * @return {string} A string representation of the range.
     */
    function exposeRange(range: goog.dom.AbstractRange): string;

    /**
     * Assert that the html in {@code actual} is substantially similar to
     * htmlPattern.  This method tests for the same set of styles, for the same
     * order of nodes, and the presence of attributes.  Breaking whitespace nodes
     * are ignored.  Elements can be
     * annotated with classnames corresponding to keys in goog.userAgent and will be
     * expected to show up in that user agent and expected not to show up in
     * others.
     * @param {string} htmlPattern The pattern to match.
     * @param {!Node} actual The element to check: its contents are matched
     *     against the HTML pattern.
     * @param {boolean=} opt_strictAttributes If false, attributes that appear in
     *     htmlPattern must be in actual, but actual can have attributes not
     *     present in htmlPattern.  If true, htmlPattern and actual must have the
     *     same set of attributes.  Default is false.
     */
    function assertHtmlContentsMatch(htmlPattern: string, actual: Node, opt_strictAttributes?: boolean): void;

    /**
     * Assert that the html in {@code actual} is substantially similar to
     * htmlPattern.  This method tests for the same set of styles, and for the same
     * order of nodes.  Breaking whitespace nodes are ignored.  Elements can be
     * annotated with classnames corresponding to keys in goog.userAgent and will be
     * expected to show up in that user agent and expected not to show up in
     * others.
     * @param {string} htmlPattern The pattern to match.
     * @param {string} actual The html to check.
     */
    function assertHtmlMatches(htmlPattern: string, actual: string): void;

    /**
     * Finds the first text node descendant of root with the given content.  Note
     * that this operates on a text node level, so if text nodes get split this
     * may not match the user visible text.  Using normalize() may help here.
     * @param {string|RegExp} textOrRegexp The text to find, or a regular
     *     expression to find a match of.
     * @param {Element} root The element to search in.
     * @return {Node} The first text node that matches, or null if none is found.
     */
    function findTextNode(textOrRegexp: string|RegExp, root: Element): Node;

    /**
     * Assert the end points of a range.
     *
     * Notice that "Are two ranges visually identical?" and "Do two ranges have
     * the same endpoint?" are independent questions. Two visually identical ranges
     * may have different endpoints. And two ranges with the same endpoints may
     * be visually different.
     *
     * @param {Node} start The expected start node.
     * @param {number} startOffset The expected start offset.
     * @param {Node} end The expected end node.
     * @param {number} endOffset The expected end offset.
     * @param {goog.dom.AbstractRange} range The actual range.
     */
    function assertRangeEquals(start: Node, startOffset: number, end: Node, endOffset: number, range: goog.dom.AbstractRange): void;
}
