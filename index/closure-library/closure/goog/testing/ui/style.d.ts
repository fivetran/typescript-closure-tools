/// <reference path="../../../../globals.d.ts" />

declare module goog.testing.ui.style {

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
