/// <reference path="../../../../globals.d.ts" />
/// <reference path="./spline1.d.ts" />

declare module goog.math.interpolator {

    class Pchip1 extends __Pchip1 { }
    class __Pchip1 extends goog.math.interpolator.__Spline1 {
    
        /**
         * A one dimensional monotone cubic spline interpolator.
         * @extends {goog.math.interpolator.Spline1}
         * @constructor
         * @final
         */
        constructor();
    }
}
