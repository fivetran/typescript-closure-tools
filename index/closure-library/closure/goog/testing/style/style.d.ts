/// <reference path="../../../../globals.d.ts" />

declare module goog.testing.style {

    /**
     * Determines whether the bounding rectangles of the given elements intersect.
     * @param {Element} element The first element.
     * @param {Element} otherElement The second element.
     * @return {boolean} Whether the bounding rectangles of the given elements
     *     intersect.
     */
    function intersects(element: Element, otherElement: Element): boolean;

    /**
     * Determines whether the element has visible dimensions, i.e. x > 0 && y > 0.
     * @param {Element} element The element to check.
     * @return {boolean} Whether the element has visible dimensions.
     */
    function hasVisibleDimensions(element: Element): boolean;

    /**
     * Determines whether the CSS style of the element renders it visible.
     * @param {!Element} element The element to check.
     * @return {boolean} Whether the CSS style of the element renders it visible.
     */
    function isVisible(element: Element): boolean;

    /**
     * Test whether the given element is on screen.
     * @param {!Element} el The element to test.
     * @return {boolean} Whether the element is on the screen.
     */
    function isOnScreen(el: Element): boolean;
}
