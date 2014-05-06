/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/interpolator/interpolator1.d.ts" />
/// <reference path="../../../../closure/goog/math/tdma.d.ts" />
/// <reference path="../../../../closure/goog/math/interpolator/spline1.d.ts" />

declare module goog.math.interpolator {

    /**
     * A one dimensional monotone cubic spline interpolator.
     * @extends {goog.math.interpolator.Spline1}
     * @constructor
     * @final
     */
    class Pchip1 extends goog.math.interpolator.Spline1 {
        /**
         * A one dimensional monotone cubic spline interpolator.
         * @extends {goog.math.interpolator.Spline1}
         * @constructor
         * @final
         */
        constructor();
    }
}

