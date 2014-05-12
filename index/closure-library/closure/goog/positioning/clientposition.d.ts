/// <reference path="../../../globals.d.ts" />
/// <reference path="./abstractposition.d.ts" />
/// <reference path="../math/coordinate.d.ts" />

declare module goog.positioning {

    class ClientPosition extends ClientPosition.__Class { }
    module ClientPosition {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.positioning.AbstractPosition.__Class {
    
            /**
             * Encapsulates a popup position where the popup is positioned relative to the
             * window (client) coordinates. This calculates the correct position to
             * use even if the element is relatively positioned to some other element. This
             * is for trying to position an element at the spot of the mouse cursor in
             * a MOUSEMOVE event. Just use the event.clientX and event.clientY as the
             * parameters.
             *
             * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
             * @param {number=} opt_arg2 Top position.
             * @constructor
             * @extends {goog.positioning.AbstractPosition}
             */
            constructor(arg1: number, opt_arg2?: number);
            /**
             * Encapsulates a popup position where the popup is positioned relative to the
             * window (client) coordinates. This calculates the correct position to
             * use even if the element is relatively positioned to some other element. This
             * is for trying to position an element at the spot of the mouse cursor in
             * a MOUSEMOVE event. Just use the event.clientX and event.clientY as the
             * parameters.
             *
             * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
             * @param {number=} opt_arg2 Top position.
             * @constructor
             * @extends {goog.positioning.AbstractPosition}
             */
            constructor(arg1: goog.math.Coordinate, opt_arg2?: number);
        }
    }
}
