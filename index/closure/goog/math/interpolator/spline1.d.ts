// Generated Mon May  5 11:05:07 PDT 2014

/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/math/interpolator/interpolator1.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/tdma.d.ts" />

declare module goog.math.interpolator {

    /**
     * A one dimensional cubic spline interpolator with natural boundary conditions.
     * @implements {goog.math.interpolator.Interpolator1}
     * @constructor
     */
    class Spline1 implements goog.math.interpolator.Interpolator1 {
        /**
         * A one dimensional cubic spline interpolator with natural boundary conditions.
         * @implements {goog.math.interpolator.Interpolator1}
         * @constructor
         */
        constructor();
    
        /**
         * Computes the derivative at each point of the spline such that
         * the curve is C2. It uses not-a-knot boundary conditions.
         * @param {Array.<number>} dx The spacing between consecutive data points.
         * @param {Array.<number>} slope The slopes between consecutive data points.
         * @return {!Array.<number>} The Spline derivative at each data point.
         * @protected
         */
        computeDerivatives(dx: number[], slope: number[]): number[];
    }
}

