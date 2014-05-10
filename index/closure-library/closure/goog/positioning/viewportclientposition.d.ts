/// <reference path="../../../globals.d.ts" />
/// <reference path="./clientposition.d.ts" />
/// <reference path="../math/coordinate.d.ts" />

declare module goog.positioning {

    class ViewportClientPosition extends __ViewportClientPosition { }
    class __ViewportClientPosition extends goog.positioning.__ClientPosition {
    
        /**
         * Encapsulates a popup position where the popup is positioned relative to the
         * window (client) coordinates, and made to stay within the viewport.
         *
         * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position if arg1 is a number representing the
         *     left position, ignored otherwise.
         * @constructor
         * @extends {goog.positioning.ClientPosition}
         */
        constructor(arg1: number, opt_arg2?: number);
        /**
         * Encapsulates a popup position where the popup is positioned relative to the
         * window (client) coordinates, and made to stay within the viewport.
         *
         * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position if arg1 is a number representing the
         *     left position, ignored otherwise.
         * @constructor
         * @extends {goog.positioning.ClientPosition}
         */
        constructor(arg1: goog.math.Coordinate, opt_arg2?: number);
    
        /**
         * Set the last-resort overflow strategy, if the popup fails to fit.
         * @param {number} overflow A bitmask of goog.positioning.Overflow strategies.
         */
        setLastResortOverflow(overflow: number): void;
    }
}
