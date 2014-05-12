/// <reference path="../../../globals.d.ts" />
/// <reference path="./abstractposition.d.ts" />
/// <reference path="./positioning.d.ts" />

declare module goog.positioning {

    class AnchoredPosition extends AnchoredPosition.__Class { }
    module AnchoredPosition {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.positioning.AbstractPosition.__Class {
    
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
}
