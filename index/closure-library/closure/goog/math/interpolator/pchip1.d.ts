/// <reference path="../../../../globals.d.ts" />
/// <reference path="./spline1.d.ts" />

declare module goog.math.interpolator {

    class Pchip1 extends Pchip1.__Class { }
    module Pchip1 {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.math.interpolator.Spline1.__Class {
    
            /**
             * A one dimensional monotone cubic spline interpolator.
             * @extends {goog.math.interpolator.Spline1}
             * @constructor
             * @final
             */
            constructor();
        }
    }
}
