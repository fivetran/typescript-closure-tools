/// <reference path="../../../globals.d.ts" />

declare module goog.math {

    class Coordinate3 extends Coordinate3.__Class { }
    module Coordinate3 {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Class for representing coordinates and positions in 3 dimensions.
             *
             * @param {number=} opt_x X coordinate, defaults to 0.
             * @param {number=} opt_y Y coordinate, defaults to 0.
             * @param {number=} opt_z Z coordinate, defaults to 0.
             * @constructor
             */
            constructor(opt_x?: number, opt_y?: number, opt_z?: number);
    
            /**
             * Returns a new copy of the coordinate.
             *
             * @return {!goog.math.Coordinate3} A clone of this coordinate.
             */
            clone(): goog.math.Coordinate3;
    
            /**
             * Returns the contents of this coordinate as a 3 value Array.
             *
             * @return {!Array.<number>} A new array.
             */
            toArray(): number[];
        }
    }
}

declare module goog.math.Coordinate3 {

    /**
     * Compares coordinates for equality.
     *
     * @param {goog.math.Coordinate3} a A Coordinate3.
     * @param {goog.math.Coordinate3} b A Coordinate3.
     * @return {boolean} True iff the coordinates are equal, or if both are null.
     */
    function equals(a: goog.math.Coordinate3, b: goog.math.Coordinate3): boolean;

    /**
     * Returns the distance between two coordinates.
     *
     * @param {goog.math.Coordinate3} a A Coordinate3.
     * @param {goog.math.Coordinate3} b A Coordinate3.
     * @return {number} The distance between {@code a} and {@code b}.
     */
    function distance(a: goog.math.Coordinate3, b: goog.math.Coordinate3): number;

    /**
     * Returns the squared distance between two coordinates. Squared distances can
     * be used for comparisons when the actual value is not required.
     *
     * Performance note: eliminating the square root is an optimization often used
     * in lower-level languages, but the speed difference is not nearly as
     * pronounced in JavaScript (only a few percent.)
     *
     * @param {goog.math.Coordinate3} a A Coordinate3.
     * @param {goog.math.Coordinate3} b A Coordinate3.
     * @return {number} The squared distance between {@code a} and {@code b}.
     */
    function squaredDistance(a: goog.math.Coordinate3, b: goog.math.Coordinate3): number;

    /**
     * Returns the difference between two coordinates as a new
     * goog.math.Coordinate3.
     *
     * @param {goog.math.Coordinate3} a A Coordinate3.
     * @param {goog.math.Coordinate3} b A Coordinate3.
     * @return {!goog.math.Coordinate3} A Coordinate3 representing the difference
     *     between {@code a} and {@code b}.
     */
    function difference(a: goog.math.Coordinate3, b: goog.math.Coordinate3): goog.math.Coordinate3;

    /**
     * Converts a three element array into a Coordinate3 object.  If the value
     * passed in is not an array, not array-like, or not of the right length, an
     * error is thrown.
     *
     * @param {Array.<number>} a Array of numbers to become a coordinate.
     * @return {!goog.math.Coordinate3} A new coordinate from the array values.
     * @throws {Error} When the oject passed in is not valid.
     */
    function fromArray(a: number[]): goog.math.Coordinate3;
}
