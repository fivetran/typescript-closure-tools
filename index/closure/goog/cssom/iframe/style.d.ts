/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/cssom/cssom.d.ts" />
/// <reference path="../../../../closure/goog/dom/classlist.d.ts" />

declare module goog.cssom.iframe.style {

    /**
     * Throw away all cached dom information. Call this if you've modified
     * the structure or class/id attributes of your document and you want
     * to recalculate the currently applied CSS rules.
     */
    function resetDomCache(): void;

    /**
     * Reads the current css rules from element's document, and returns them
     * rewriting selectors so that any rules that formerly applied to element will
     * be applied to doc.body. This makes it possible to replace a block in a page
     * with an iframe and preserve the css styling of the contents.
     *
     * @param {Element} element The element for which context should be calculated.
     * @param {boolean=} opt_forceRuleSetCacheUpdate Flag to force the internal
     *     cache of rulesets to refresh itself before we read the same.
     * @param {boolean=} opt_copyBackgroundContext Flag indicating that if the
     *     {@code element} has a transparent background, background rules
     *     from the nearest ancestor element(s) that have background-color
     *     and/or background-image set should be copied.
     * @return {string} String containing all CSS rules present in the original
     *     document, with modified selectors.
     * @see goog.cssom.iframe.style.getBackgroundContext.
     */
    function getElementContext(element: Element, opt_forceRuleSetCacheUpdate?: boolean, opt_copyBackgroundContext?: boolean): string;

    /**
     * Generates a set of CSS properties that can be used to make another
     * element's background look like the background of a given element.
     * This is useful when you want to copy the CSS context of an element,
     * but the element's background is transparent. In the original context
     * you would see the ancestor's backround color/image showing through,
     * but in the new context there might be a something different underneath.
     * Note that this assumes the element you're copying context from has a
     * fairly standard positioning/layout - it assumes that when the element
     * has a transparent background what you're going to see through it is its
     * ancestors.
     * @param {Element} element The element from which to copy background styles.
     * @return {!Object} Object containing background* properties.
     */
    function getBackgroundContext(element: Element): Object;
}

