// Generated Thu May  1 17:19:29 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />

declare module goog.style.transition {

    /**
     * A typedef to represent a CSS3 transition property. Duration and delay
     * are both in seconds. Timing is CSS3 timing function string, such as
     * 'easein', 'linear'.
     *
     * Alternatively, specifying string in the form of '[property] [duration]
     * [timing] [delay]' as specified in CSS3 transition is fine too.
     *
     * @typedef { {
     *   property: string,
     *   duration: number,
     *   timing: string,
     *   delay: number
     * } | string }
     */
    var Css3Property: any /*missing*/;

    /**
     * Sets the element CSS3 transition to properties.
     * @param {Element} element The element to set transition on.
     * @param {goog.style.transition.Css3Property|
     *     Array.<goog.style.transition.Css3Property>} properties A single CSS3
     *     transition property or array of properties.
     */
    function set(element: Element): void;

    /**
     * Removes any programmatically-added CSS3 transition in the given element.
     * @param {Element} element The element to remove transition from.
     */
    function removeAll(element: Element): void;

    /**
     * @return {boolean} Whether CSS3 transition is supported.
     */
    var isSupported: any /*missing*/;
}

