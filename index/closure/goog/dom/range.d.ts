/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/dom/savedrange.d.ts" />
/// <reference path="../../../closure/goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../closure/goog/dom/abstractrange.d.ts" />
/// <reference path="../../../closure/goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../closure/goog/string/stringbuffer.d.ts" />
/// <reference path="../../../closure/goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/abstractrange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/operarange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/browserrange.d.ts" />
/// <reference path="../../../closure/goog/dom/textrange.d.ts" />
/// <reference path="../../../closure/goog/dom/abstractmultirange.d.ts" />
/// <reference path="../../../closure/goog/dom/controlrange.d.ts" />
/// <reference path="../../../closure/goog/dom/multirange.d.ts" />

declare module goog.dom.Range {

    /**
     * Create a new selection from the given browser window's current selection.
     * Note that this object does not auto-update if the user changes their
     * selection and should be used as a snapshot.
     * @param {Window=} opt_win The window to get the selection of.  Defaults to the
     *     window this class was defined in.
     * @return {goog.dom.AbstractRange?} A range wrapper object, or null if there
     *     was an error.
     */
    function createFromWindow(opt_win?: Window): goog.dom.AbstractRange;

    /**
     * Create a new range wrapper from the given browser selection object.  Note
     * that this object does not auto-update if the user changes their selection and
     * should be used as a snapshot.
     * @param {!Object} selection The browser selection object.
     * @return {goog.dom.AbstractRange?} A range wrapper object or null if there
     *    was an error.
     */
    function createFromBrowserSelection(selection: Object): goog.dom.AbstractRange;

    /**
     * Create a new range wrapper from the given browser range object.
     * @param {Range|TextRange} range The browser range object.
     * @param {boolean=} opt_isReversed Whether the focus node is before the anchor
     *     node.
     * @return {goog.dom.AbstractRange} A range wrapper object.
     */
    function createFromBrowserRange(range: any /*Range|TextRange*/, opt_isReversed?: boolean): goog.dom.AbstractRange;

    /**
     * Create a new range wrapper that selects the given node's text.
     * @param {Node} node The node to select.
     * @param {boolean=} opt_isReversed Whether the focus node is before the anchor
     *     node.
     * @return {goog.dom.AbstractRange} A range wrapper object.
     */
    function createFromNodeContents(node: Node, opt_isReversed?: boolean): goog.dom.AbstractRange;

    /**
     * Create a new range wrapper that represents a caret at the given node,
     * accounting for the given offset.  This always creates a TextRange, regardless
     * of whether node is an image node or other control range type node.
     * @param {Node} node The node to place a caret at.
     * @param {number} offset The offset within the node to place the caret at.
     * @return {goog.dom.AbstractRange} A range wrapper object.
     */
    function createCaret(node: Node, offset: number): goog.dom.AbstractRange;

    /**
     * Create a new range wrapper that selects the area between the given nodes,
     * accounting for the given offsets.
     * @param {Node} anchorNode The node to anchor on.
     * @param {number} anchorOffset The offset within the node to anchor on.
     * @param {Node} focusNode The node to focus on.
     * @param {number} focusOffset The offset within the node to focus on.
     * @return {goog.dom.AbstractRange} A range wrapper object.
     */
    function createFromNodes(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): goog.dom.AbstractRange;

    /**
     * Clears the window's selection.
     * @param {Window=} opt_win The window to get the selection of.  Defaults to the
     *     window this class was defined in.
     */
    function clearSelection(opt_win?: Window): void;

    /**
     * Tests if the window has a selection.
     * @param {Window=} opt_win The window to check the selection of.  Defaults to
     *     the window this class was defined in.
     * @return {boolean} Whether the window has a selection.
     */
    function hasSelection(opt_win?: Window): boolean;

    /**
     * Returns whether the focus position occurs before the anchor position.
     * @param {Node} anchorNode The node to anchor on.
     * @param {number} anchorOffset The offset within the node to anchor on.
     * @param {Node} focusNode The node to focus on.
     * @param {number} focusOffset The offset within the node to focus on.
     * @return {boolean} Whether the focus position occurs before the anchor
     *     position.
     */
    function isReversed(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): boolean;
}

