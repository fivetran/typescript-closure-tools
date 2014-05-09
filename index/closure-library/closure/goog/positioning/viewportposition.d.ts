/// <reference path="../../../globals.d.ts" />
/// <reference path="./abstractposition.d.ts" />
/// <reference path="../math/coordinate.d.ts" />

declare module goog.positioning {

    class ViewportPosition extends goog.positioning.AbstractPosition {
    
        /**
         * Encapsulates a popup position where the popup is positioned according to
         * coordinates relative to the  element's viewport (page). This calculates the
         * correct position to use even if the element is relatively positioned to some
         * other element.
         *
         * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position.
         * @constructor
         * @extends {goog.positioning.AbstractPosition}
         */
        constructor(arg1: number, opt_arg2?: number);
        /**
         * Encapsulates a popup position where the popup is positioned according to
         * coordinates relative to the  element's viewport (page). This calculates the
         * correct position to use even if the element is relatively positioned to some
         * other element.
         *
         * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position.
         * @constructor
         * @extends {goog.positioning.AbstractPosition}
         */
        constructor(arg1: goog.math.Coordinate, opt_arg2?: number);
    }
}
