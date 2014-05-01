// Generated Wed Apr 30 16:40:42 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/string.d.ts" />

declare module 'goog.math.interpolator' {

    /**
     * An interface for one dimensional data interpolation.
     * @interface
     */
    interface Interpolator1 {
        setData: any /*missing*/;
        interpolate: any /*missing*/;
        getInverse: any /*missing*/;
    }

    /**
     * A one dimensional linear interpolator.
     * @implements {goog.math.interpolator.Interpolator1}
     * @constructor
     * @final
     */
    class Linear1 implements goog.math.interpolator.Interpolator1 {
        /**
         * A one dimensional linear interpolator.
         * @implements {goog.math.interpolator.Interpolator1}
         * @constructor
         * @final
         */
        constructor();
    
        /** @override */
        setData(): void;
    
        /** @override */
        interpolate(): void;
    
        /** @override */
        getInverse(): void;
    }

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
    
        /** @override */
        computeDerivatives(): void;
    }

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
    
        /** @override */
        setData(): void;
    
        /** @override */
        interpolate(): void;
    
        /**
         * Computes the derivative at each point of the spline such that
         * the curve is C2. It uses not-a-knot boundary conditions.
         * @param {Array.<number>} dx The spacing between consecutive data points.
         * @param {Array.<number>} slope The slopes between consecutive data points.
         * @return {!Array.<number>} The Spline derivative at each data point.
         * @protected
         */
        computeDerivatives(dx: number[], slope: number[]): number[];
    
        /**
         * Note that the inverse of a cubic spline is not a cubic spline in general.
         * As a result the inverse implementation is only approximate. In
         * particular, it only guarantees the exact inverse at the original input data
         * points passed to setData.
         * @override
         */
        getInverse(): void;
    }
}

