/// <reference path="../../../globals.d.ts" />
/// <reference path="./positioning.d.ts" />
/// <reference path="../math/box.d.ts" />
/// <reference path="../math/size.d.ts" />

declare module goog.positioning {

    class AbstractPosition extends AbstractPosition.__Class { }
    module AbstractPosition {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Abstract position object. Encapsulates position and overflow handling.
             *
             * @constructor
             */
            constructor();
    
            /**
             * Repositions the element. Abstract method, should be overloaded.
             *
             * @param {Element} movableElement Element to position.
             * @param {goog.positioning.Corner} corner Corner of the movable element that
             *     should be positioned adjacent to the anchored element.
             * @param {goog.math.Box=} opt_margin A margin specified in pixels.
             * @param {goog.math.Size=} opt_preferredSize PreferredSize of the
             *     movableElement.
             */
            reposition(movableElement: Element, corner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
        }
    }
}
