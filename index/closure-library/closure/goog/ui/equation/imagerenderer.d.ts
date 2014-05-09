/// <reference path="../../../../globals.d.ts" />

declare module goog.ui.equation.ImageRenderer {

    /**
     * The longest equation which may be displayed, in characters.
     * @type {number}
     */
    var MAX_EQUATION_LENGTH: number;

    /**
     * Class to put on our equations IMG elements.
     * @type {string}
     */
    var EE_IMG_CLASS: string;

    /**
     * Non-standard to put on our equations IMG elements. Useful when classes need
     * to be scrubbed from the user-generated HTML, but non-standard attributes
     * can be white-listed.
     *
     * @type {string}
     */
    var EE_IMG_ATTR: string;

    /**
     * Vertical alignment for the equations IMG elements.
     * @type {string}
     */
    var EE_IMG_VERTICAL_ALIGN: string;

    /**
     * The default background color as used in the img url, which is fully
     * transparent white.
     * @type {string}
     */
    var BACKGROUND_COLOR: string;

    /**
     * The default foreground color as used in the img url, which is black.
     * @type {string}
     */
    var FOREGROUND_COLOR: string;

    /**
     * Class to put on IMG elements to keep the resize property bubble from
     * appearing. This is different from PLACEHOLDER_IMG_CLASS because it's
     * reasonable in some cases to be able to resize a placeholder (which should
     * be reflected when the placeholder is replaced with the other content).
     * @type {string}
     */
    var NO_RESIZE_IMG_CLASS: string;

    /**
     * Returns the equation image src url given the equation.
     * @param {string} equation The equation.
     * @return {string} The equation image src url (empty string in case the
     *   equation was empty).
     */
    function getImageUrl(equation: string): string;

    /**
     * Returns the equation string src for given image url.
     * @param {string} imageUrl The image url.
     * @return {string?} The equation string, null if imageUrl cannot be parsed.
     */
    function getEquationFromImageUrl(imageUrl: string): string;

    /**
     * Gets the equation string from the given equation IMG node. Returns empty
     * string if the src attribute of the is not a valid equation url.
     * @param {Element} equationNode The equation IMG element.
     * @return {string} The equation string.
     */
    function getEquationFromImage(equationNode: Element): string;

    /**
     * Checks whether given node is an equation element.
     * @param {Node} node The node to check, must be an Element.
     * @return {boolean} Whether given node is an equation element.
     */
    function isEquationElement(node: Node): boolean;

    /**
     * Returns the html for the html image tag for the given equation.
     * @param {string} equation The equation.
     * @return {string} The html code to embed in the document.
     */
    function getHtml(equation: string): string;

    /**
     * Checks whether equation is too long to be displayed.
     * @param {string} equation The equation to test.
     * @return {boolean} Whether the equation is too long.
     */
    function isEquationTooLong(equation: string): boolean;
}
