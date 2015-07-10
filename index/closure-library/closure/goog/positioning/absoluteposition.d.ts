/// <reference path="../../../globals.d.ts" />
/// <reference path="./abstractposition.d.ts" />
/// <reference path="../math/coordinate.d.ts" />

declare module goog.positioning {

    class AbsolutePosition extends AbsolutePosition__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class AbsolutePosition__Class extends goog.positioning.AbstractPosition__Class  { 
    
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
            constructor(arg1: number|goog.math.Coordinate, opt_arg2?: number);
    
            /**
             * Coordinate to position popup at.
             * @type {goog.math.Coordinate}
             */
            coordinate: goog.math.Coordinate;
    } 
    
}
