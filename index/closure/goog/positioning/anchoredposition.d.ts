// Generated Sun May  4 18:11:38 PDT 2014

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
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element.
     *
     * When using AnchoredPosition, it is recommended that the popup element
     * specified in the Popup constructor or Popup.setElement be absolutely
     * positioned.
     *
     * @param {Element} anchorElement Element the movable element should be
     *     anchored against.
     * @param {goog.positioning.Corner} corner Corner of anchored element the
     *     movable element should be positioned at.
     * @param {number=} opt_overflow Overflow handling mode. Defaults to IGNORE if
     *     not specified. Bitmap, {@see goog.positioning.Overflow}.
     * @constructor
     * @extends {goog.positioning.AbstractPosition}
     */
    class AnchoredPosition extends goog.positioning.AbstractPosition {
        /**
         * Encapsulates a popup position where the popup is anchored at a corner of
         * an element.
         *
         * When using AnchoredPosition, it is recommended that the popup element
         * specified in the Popup constructor or Popup.setElement be absolutely
         * positioned.
         *
         * @param {Element} anchorElement Element the movable element should be
         *     anchored against.
         * @param {goog.positioning.Corner} corner Corner of anchored element the
         *     movable element should be positioned at.
         * @param {number=} opt_overflow Overflow handling mode. Defaults to IGNORE if
         *     not specified. Bitmap, {@see goog.positioning.Overflow}.
         * @constructor
         * @extends {goog.positioning.AbstractPosition}
         */
        constructor(anchorElement: Element, corner: goog.positioning.Corner, opt_overflow?: number);
    }
}

