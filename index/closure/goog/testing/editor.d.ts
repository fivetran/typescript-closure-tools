// Generated Wed Apr 30 16:39:52 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/a11y/aria.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/async.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/dom/browserrange.d.ts" />
/// <reference path="../../goog/editor.d.ts" />
/// <reference path="../../goog/editor/plugins.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/fx.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/log.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/positioning.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />
/// <reference path="../../goog/style.d.ts" />
/// <reference path="../../goog/testing.d.ts" />
/// <reference path="../../goog/timer.d.ts" />
/// <reference path="../../goog/ui.d.ts" />
/// <reference path="../../goog/ui/editor.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.testing.editor.dom' {

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

declare module 'goog.testing.editor' {

    /**
     * Mock of goog.editor.Field.
     * @param {Window=} opt_window Window the field would edit.  Defaults to
     *     {@code window}.
     * @param {Window=} opt_appWindow "AppWindow" of the field, which can be
     *     different from {@code opt_window} when mocking a field that uses an
     *     iframe. Defaults to {@code opt_window}.
     * @param {goog.dom.AbstractRange=} opt_range An object (mock or real) to be
     *     returned by getRange(). If ommitted, a new goog.dom.Range is created
     *     from the window every time getRange() is called.
     * @constructor
     * @extends {goog.testing.LooseMock}
     * @suppress {missingProperties} Mocks do not fit in the type system well.
     * @final
     */
    class FieldMock extends goog.testing.LooseMock {
        /**
         * Mock of goog.editor.Field.
         * @param {Window=} opt_window Window the field would edit.  Defaults to
         *     {@code window}.
         * @param {Window=} opt_appWindow "AppWindow" of the field, which can be
         *     different from {@code opt_window} when mocking a field that uses an
         *     iframe. Defaults to {@code opt_window}.
         * @param {goog.dom.AbstractRange=} opt_range An object (mock or real) to be
         *     returned by getRange(). If ommitted, a new goog.dom.Range is created
         *     from the window every time getRange() is called.
         * @constructor
         * @extends {goog.testing.LooseMock}
         * @suppress {missingProperties} Mocks do not fit in the type system well.
         * @final
         */
        constructor(opt_window?: Window, opt_appWindow?: Window, opt_range?: goog.dom.AbstractRange);
    }

    /**
     * Create a new test controller.
     * @param {Element} root The root editable element.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class TestHelper extends goog.Disposable {
        /**
         * Create a new test controller.
         * @param {Element} root The root editable element.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(root: Element);
    
        /**
         * Selects a new root element.
         * @param {Element} root The root editable element.
         */
        setRoot(root: Element): void;
    
        /**
         * Make the root element editable.  Alse saves its HTML to be restored
         * in tearDown.
         */
        setUpEditableElement(): void;
    
        /**
         * Reset the element previously initialized, restoring its HTML and making it
         * non editable.
         * @suppress {accessControls} Private state of
         *     {@link goog.editor.plugins.AbstractBubblePlugin} is accessed for test
         *     purposes.
         */
        tearDownEditableElement(): void;
    
        /**
         * Assert that the html in 'root' is substantially similar to htmlPattern.
         * This method tests for the same set of styles, and for the same order of
         * nodes.  Breaking whitespace nodes are ignored.  Elements can be annotated
         * with classnames corresponding to keys in goog.userAgent and will be
         * expected to show up in that user agent and expected not to show up in
         * others.
         * @param {string} htmlPattern The pattern to match.
         */
        assertHtmlMatches(htmlPattern: string): void;
    
        /**
         * Finds the first text node descendant of root with the given content.
         * @param {string|RegExp} textOrRegexp The text to find, or a regular
         *     expression to find a match of.
         * @return {Node} The first text node that matches, or null if none is found.
         */
        findTextNode(textOrRegexp: any /*string|RegExp*/): Node;
    
        /**
         * Select from the given from offset in the given from node to the given
         * to offset in the optionally given to node. If nodes are passed in, uses them,
         * otherwise uses findTextNode to find the nodes to select. Selects a caret
         * if opt_to and opt_toOffset are not given.
         * @param {Node|string} from Node or text of the node to start the selection at.
         * @param {number} fromOffset Offset within the above node to start the
         *     selection at.
         * @param {Node|string=} opt_to Node or text of the node to end the selection
         *     at.
         * @param {number=} opt_toOffset Offset within the above node to end the
         *     selection at.
         */
        select(from: any /*Node|string*/, fromOffset: number, opt_to?: any /*Node|string*/, opt_toOffset?: number): void;
    
        /** @override */
        disposeInternal(): void;
    }
}

