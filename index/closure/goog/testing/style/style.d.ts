/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />

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

