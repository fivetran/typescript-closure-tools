// Generated Sun May  4 18:11:34 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/style/bidi.d.ts" />
/// <reference path="../../goog/positioning/positioning.d.ts" />
/// <reference path="../../goog/positioning/abstractposition.d.ts" />

declare module goog.positioning {

    /**
     * Encapsulates a popup position where the popup absolutely positioned by
     * setting the left/top style elements directly to the specified values.
     * The position is generally relative to the element's offsetParent. Normally,
     * this is the document body, but can be another element if the popup element
     * is scoped by an element with relative position.
     *
     * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.positioning.AbstractPosition}
     */
    class AbsolutePosition extends goog.positioning.AbstractPosition {
        /**
         * Encapsulates a popup position where the popup absolutely positioned by
         * setting the left/top style elements directly to the specified values.
         * The position is generally relative to the element's offsetParent. Normally,
         * this is the document body, but can be another element if the popup element
         * is scoped by an element with relative position.
         *
         * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position.
         * @constructor
         * @extends {goog.positioning.AbstractPosition}
         */
        constructor(arg1: any /*number|goog.math.Coordinate*/, opt_arg2?: number);
    }
}

