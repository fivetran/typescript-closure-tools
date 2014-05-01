// Generated Wed Apr 30 16:40:01 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/style.d.ts" />
/// <reference path="../../goog/testing.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.testing.ui.rendererasserts' {

    /**
     * Assert that a control renderer constructor doesn't call getCssClass.
     *
     * @param {?function(new:goog.ui.ControlRenderer)} rendererClassUnderTest The
     *     renderer constructor to test.
     */
    function assertNoGetCssClassCallsInConstructor(rendererClassUnderTest: () => any /*missing*/): void;
}

declare module 'goog.testing.ui.style' {

    /**
     * Uses document.write to add an iFrame to the page with the reference path in
     * the src attribute. Used for loading an html file containing reference
     * structures to test against into the page. Should be called within the body of
     * the jsunit test page.
     * @param {string} referencePath A path to a reference HTML file.
     */
    function writeReferenceFrame(referencePath: string): void;

    /**
     * Returns a reference to the first element child of a node with the given id
     * from the page loaded into the reference iFrame. Used to retrieve a particular
     * reference DOM structure to test against.
     * @param {string} referenceId The id of a container element for a reference
     *   structure in the reference page.
     * @return {Node} The root element of the reference structure.
     */
    function getReferenceNode(referenceId: string): Node;

    /**
     * Returns an array of all element children of a given node.
     * @param {Node} element The node to get element children of.
     * @return {!Array.<!Node>} An array of all the element children.
     */
    function getElementChildren(element: Node): Node[];

    /**
     * Tests whether a given node is a "content" node of a reference structure,
     * which means it is allowed to have arbitrary children.
     * @param {Node} element The node to test.
     * @return {boolean} Whether the given node is a content node or not.
     */
    function isContentNode(element: Node): boolean;

    /**
     * Tests that the structure, node names, and classes of the given element are
     * the same as the reference structure with the given id. Throws an error if the
     * element doesn't have the same nodes at each level of the DOM with the same
     * classes on each. The test ignores all DOM structure within content nodes.
     * @param {Node} element The root node of the DOM structure to test.
     * @param {string} referenceId The id of the container for the reference
     *   structure to test against.
     */
    function assertStructureMatchesReference(element: Node, referenceId: string): void;
}

declare module 'goog.testing.ui' {

    /**
     * A driver for testing renderers.
     *
     * @param {goog.ui.ControlRenderer} renderer A renderer to test.
     * @param {Element} renderParent The parent of the element where controls will
     *     be rendered.
     * @param {Element} decorateParent The parent of the element where controls will
     *     be decorated.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class RendererHarness extends goog.Disposable {
        /**
         * A driver for testing renderers.
         *
         * @param {goog.ui.ControlRenderer} renderer A renderer to test.
         * @param {Element} renderParent The parent of the element where controls will
         *     be rendered.
         * @param {Element} decorateParent The parent of the element where controls will
         *     be decorated.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(renderer: goog.ui.ControlRenderer, renderParent: Element, decorateParent: Element);
    
        /**
         * Attach a control and render its DOM.
         * @param {goog.ui.Control} control A control.
         * @return {Element} The element created.
         */
        attachControlAndRender(control: goog.ui.Control): Element;
    
        /**
         * Attach a control and decorate the element given in the constructor.
         * @param {goog.ui.Control} control A control.
         * @return {Element} The element created.
         */
        attachControlAndDecorate(control: goog.ui.Control): Element;
    
        /**
         * Assert that the rendered element and the decorated element match.
         */
        assertDomMatches(): void;
    
        /**
         * Destroy the harness, verifying that all assertions had been checked.
         * @override
         * @protected
         */
        disposeInternal(): void;
    }
}

