// Generated Fri May  2 11:43:29 PDT 2014

/// <reference path="../../../goog/base.d.ts" />

declare module goog.math.interpolator {

    /**
     * An interface for one dimensional data interpolation.
     * @interface
     */
    interface Interpolator1 {
        setData(x: number[], y: number[]): void;
        interpolate(x: number): number;
        getInverse(): goog.math.interpolator.Interpolator1;
    }
}

