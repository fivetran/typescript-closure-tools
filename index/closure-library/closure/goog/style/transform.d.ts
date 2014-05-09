/// <reference path="../../../globals.d.ts" />
/// <reference path="../math/coordinate.d.ts" />

declare module goog.style.transform {

    /**
     * Whether CSS3 transform translate() is supported. IE 9 supports 2D transforms
     * and IE 10 supports 3D transforms. IE 8 supports neither.
     * @return {boolean} Whether the current environment supports CSS3 transforms.
     */
    function isSupported(): boolean;

    /**
     * Whether CSS3 transform translate3d() is supported. If the current browser
     * supports this transform strategy.
     * @return {boolean} Whether the current environment supports CSS3 transforms.
     */
    function is3dSupported(): boolean;

    /**
     * Returns the x,y translation component of any CSS transforms applied to the
     * element, in pixels.
     *
     * @param {!Element} element The element to get the translation of.
     * @return {!goog.math.Coordinate} The CSS translation of the element in px.
     */
    function getTranslation(element: Element): goog.math.Coordinate;

    /**
     * Translates an element's position using the CSS3 transform property.
     * @param {Element} element The element to translate.
     * @param {number} x The horizontal translation.
     * @param {number} y The vertical translation.
     * @return {boolean} Whether the CSS translation was set.
     */
    function setTranslation(element: Element, x: number, y: number): boolean;
}
