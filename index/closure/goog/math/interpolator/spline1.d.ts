// Generated Thu May  1 17:26:48 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/math/interpolator/interpolator1.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/tdma.d.ts" />

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

