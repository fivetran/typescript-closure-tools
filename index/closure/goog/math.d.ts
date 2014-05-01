// Generated Wed Apr 30 16:40:23 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/string.d.ts" />

declare module 'goog.math.AffineTransform' {

    /**
     * Creates a transform representing a scaling transformation.
     *
     * @param {number} sx The x-axis scaling factor.
     * @param {number} sy The y-axis scaling factor.
     * @return {!goog.math.AffineTransform} A transform representing a scaling
     *     transformation.
     */
    function getScaleInstance(sx: number, sy: number): goog.math.AffineTransform;

    /**
     * Creates a transform representing a translation transformation.
     *
     * @param {number} dx The distance to translate in the x direction.
     * @param {number} dy The distance to translate in the y direction.
     * @return {!goog.math.AffineTransform} A transform representing a
     *     translation transformation.
     */
    function getTranslateInstance(dx: number, dy: number): goog.math.AffineTransform;

    /**
     * Creates a transform representing a shearing transformation.
     *
     * @param {number} shx The x-axis shear factor.
     * @param {number} shy The y-axis shear factor.
     * @return {!goog.math.AffineTransform} A transform representing a shearing
     *     transformation.
     */
    function getShearInstance(shx: number, shy: number): goog.math.AffineTransform;

    /**
     * Creates a transform representing a rotation transformation.
     *
     * @param {number} theta The angle of rotation measured in radians.
     * @param {number} x The x coordinate of the anchor point.
     * @param {number} y The y coordinate of the anchor point.
     * @return {!goog.math.AffineTransform} A transform representing a rotation
     *     transformation.
     */
    function getRotateInstance(theta: number, x: number, y: number): goog.math.AffineTransform;
}

declare module 'goog.math.Bezier' {

    /**
     * Constant used to approximate ellipses.
     * See: http://canvaspaint.org/blog/2006/12/ellipse/
     * @type {number}
     */
    var KAPPA: number;
}

declare module 'goog.math.Box' {

    /**
     * Creates a Box by bounding a collection of goog.math.Coordinate objects
     * @param {...goog.math.Coordinate} var_args Coordinates to be included inside
     *     the box.
     * @return {!goog.math.Box} A Box containing all the specified Coordinates.
     */
    function boundingBox(...var_args: goog.math.Coordinate[]): goog.math.Box;

    /**
     * Compares boxes for equality.
     * @param {goog.math.Box} a A Box.
     * @param {goog.math.Box} b A Box.
     * @return {boolean} True iff the boxes are equal, or if both are null.
     */
    function equals(a: goog.math.Box, b: goog.math.Box): boolean;

    /**
     * Returns whether a box contains a coordinate or another box.
     *
     * @param {goog.math.Box} box A Box.
     * @param {goog.math.Coordinate|goog.math.Box} other A Coordinate or a Box.
     * @return {boolean} Whether the box contains the coordinate or other box.
     */
    function contains(box: goog.math.Box, other: any /*goog.math.Coordinate|goog.math.Box*/): boolean;

    /**
     * Returns the relative x position of a coordinate compared to a box.  Returns
     * zero if the coordinate is inside the box.
     *
     * @param {goog.math.Box} box A Box.
     * @param {goog.math.Coordinate} coord A Coordinate.
     * @return {number} The x position of {@code coord} relative to the nearest
     *     side of {@code box}, or zero if {@code coord} is inside {@code box}.
     */
    function relativePositionX(box: goog.math.Box, coord: goog.math.Coordinate): number;

    /**
     * Returns the relative y position of a coordinate compared to a box.  Returns
     * zero if the coordinate is inside the box.
     *
     * @param {goog.math.Box} box A Box.
     * @param {goog.math.Coordinate} coord A Coordinate.
     * @return {number} The y position of {@code coord} relative to the nearest
     *     side of {@code box}, or zero if {@code coord} is inside {@code box}.
     */
    function relativePositionY(box: goog.math.Box, coord: goog.math.Coordinate): number;

    /**
     * Returns the distance between a coordinate and the nearest corner/side of a
     * box. Returns zero if the coordinate is inside the box.
     *
     * @param {goog.math.Box} box A Box.
     * @param {goog.math.Coordinate} coord A Coordinate.
     * @return {number} The distance between {@code coord} and the nearest
     *     corner/side of {@code box}, or zero if {@code coord} is inside
     *     {@code box}.
     */
    function distance(box: goog.math.Box, coord: goog.math.Coordinate): number;

    /**
     * Returns whether two boxes intersect.
     *
     * @param {goog.math.Box} a A Box.
     * @param {goog.math.Box} b A second Box.
     * @return {boolean} Whether the boxes intersect.
     */
    function intersects(a: goog.math.Box, b: goog.math.Box): boolean;

    /**
     * Returns whether two boxes would intersect with additional padding.
     *
     * @param {goog.math.Box} a A Box.
     * @param {goog.math.Box} b A second Box.
     * @param {number} padding The additional padding.
     * @return {boolean} Whether the boxes intersect.
     */
    function intersectsWithPadding(a: goog.math.Box, b: goog.math.Box, padding: number): boolean;
}

declare module 'goog.math.Coordinate3' {

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

declare module 'goog.math.Coordinate' {

    /**
     * Compares coordinates for equality.
     * @param {goog.math.Coordinate} a A Coordinate.
     * @param {goog.math.Coordinate} b A Coordinate.
     * @return {boolean} True iff the coordinates are equal, or if both are null.
     */
    function equals(a: goog.math.Coordinate, b: goog.math.Coordinate): boolean;

    /**
     * Returns the distance between two coordinates.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @param {!goog.math.Coordinate} b A Coordinate.
     * @return {number} The distance between {@code a} and {@code b}.
     */
    function distance(a: goog.math.Coordinate, b: goog.math.Coordinate): number;

    /**
     * Returns the magnitude of a coordinate.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @return {number} The distance between the origin and {@code a}.
     */
    function magnitude(a: goog.math.Coordinate): number;

    /**
     * Returns the angle from the origin to a coordinate.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @return {number} The angle, in degrees, clockwise from the positive X
     *     axis to {@code a}.
     */
    function azimuth(a: goog.math.Coordinate): number;

    /**
     * Returns the squared distance between two coordinates. Squared distances can
     * be used for comparisons when the actual value is not required.
     *
     * Performance note: eliminating the square root is an optimization often used
     * in lower-level languages, but the speed difference is not nearly as
     * pronounced in JavaScript (only a few percent.)
     *
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @param {!goog.math.Coordinate} b A Coordinate.
     * @return {number} The squared distance between {@code a} and {@code b}.
     */
    function squaredDistance(a: goog.math.Coordinate, b: goog.math.Coordinate): number;

    /**
     * Returns the difference between two coordinates as a new
     * goog.math.Coordinate.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @param {!goog.math.Coordinate} b A Coordinate.
     * @return {!goog.math.Coordinate} A Coordinate representing the difference
     *     between {@code a} and {@code b}.
     */
    function difference(a: goog.math.Coordinate, b: goog.math.Coordinate): goog.math.Coordinate;

    /**
     * Returns the sum of two coordinates as a new goog.math.Coordinate.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @param {!goog.math.Coordinate} b A Coordinate.
     * @return {!goog.math.Coordinate} A Coordinate representing the sum of the two
     *     coordinates.
     */
    function sum(a: goog.math.Coordinate, b: goog.math.Coordinate): goog.math.Coordinate;
}

declare module 'goog.math.Integer' {

    /**
     * Returns an Integer representing the given (32-bit) integer value.
     * @param {number} value A 32-bit integer value.
     * @return {!goog.math.Integer} The corresponding Integer value.
     */
    function fromInt(value: number): goog.math.Integer;

    /**
     * Returns an Integer representing the given value, provided that it is a finite
     * number.  Otherwise, zero is returned.
     * @param {number} value The value in question.
     * @return {!goog.math.Integer} The corresponding Integer value.
     */
    function fromNumber(value: number): goog.math.Integer;

    /**
     * Returns a Integer representing the value that comes by concatenating the
     * given entries, each is assumed to be 32 signed bits, given in little-endian
     * order (lowest order bits in the lowest index), and sign-extending the highest
     * order 32-bit value.
     * @param {Array.<number>} bits The bits of the number, in 32-bit signed pieces,
     *     in little-endian order.
     * @return {!goog.math.Integer} The corresponding Integer value.
     */
    function fromBits(bits: number[]): goog.math.Integer;

    /**
     * Returns an Integer representation of the given string, written using the
     * given radix.
     * @param {string} str The textual representation of the Integer.
     * @param {number=} opt_radix The radix in which the text is written.
     * @return {!goog.math.Integer} The corresponding Integer value.
     */
    function fromString(str: string, opt_radix?: number): goog.math.Integer;

    /** @type {!goog.math.Integer} */
    var ZERO: goog.math.Integer;

    /** @type {!goog.math.Integer} */
    var ONE: goog.math.Integer;
}

declare module 'goog.math.Long' {

    /**
     * Returns a Long representing the given (32-bit) integer value.
     * @param {number} value The 32-bit integer in question.
     * @return {!goog.math.Long} The corresponding Long value.
     */
    function fromInt(value: number): goog.math.Long;

    /**
     * Returns a Long representing the given value, provided that it is a finite
     * number.  Otherwise, zero is returned.
     * @param {number} value The number in question.
     * @return {!goog.math.Long} The corresponding Long value.
     */
    function fromNumber(value: number): goog.math.Long;

    /**
     * Returns a Long representing the 64-bit integer that comes by concatenating
     * the given high and low bits.  Each is assumed to use 32 bits.
     * @param {number} lowBits The low 32-bits.
     * @param {number} highBits The high 32-bits.
     * @return {!goog.math.Long} The corresponding Long value.
     */
    function fromBits(lowBits: number, highBits: number): goog.math.Long;

    /**
     * Returns a Long representation of the given string, written using the given
     * radix.
     * @param {string} str The textual representation of the Long.
     * @param {number=} opt_radix The radix in which the text is written.
     * @return {!goog.math.Long} The corresponding Long value.
     */
    function fromString(str: string, opt_radix?: number): goog.math.Long;

    /** @type {!goog.math.Long} */
    var ZERO: goog.math.Long;

    /** @type {!goog.math.Long} */
    var ONE: goog.math.Long;

    /** @type {!goog.math.Long} */
    var NEG_ONE: goog.math.Long;

    /** @type {!goog.math.Long} */
    var MAX_VALUE: goog.math.Long;

    /** @type {!goog.math.Long} */
    var MIN_VALUE: goog.math.Long;
}

declare module 'goog.math' {

    /**
     * Returns a random integer greater than or equal to 0 and less than {@code a}.
     * @param {number} a  The upper bound for the random integer (exclusive).
     * @return {number} A random integer N such that 0 <= N < a.
     */
    function randomInt(a: number): number;

    /**
     * Returns a random number greater than or equal to {@code a} and less than
     * {@code b}.
     * @param {number} a  The lower bound for the random number (inclusive).
     * @param {number} b  The upper bound for the random number (exclusive).
     * @return {number} A random number N such that a <= N < b.
     */
    function uniformRandom(a: number, b: number): number;

    /**
     * Takes a number and clamps it to within the provided bounds.
     * @param {number} value The input number.
     * @param {number} min The minimum value to return.
     * @param {number} max The maximum value to return.
     * @return {number} The input number if it is within bounds, or the nearest
     *     number within the bounds.
     */
    function clamp(value: number, min: number, max: number): number;

    /**
     * The % operator in JavaScript returns the remainder of a / b, but differs from
     * some other languages in that the result will have the same sign as the
     * dividend. For example, -1 % 8 == -1, whereas in some other languages
     * (such as Python) the result would be 7. This function emulates the more
     * correct modulo behavior, which is useful for certain applications such as
     * calculating an offset index in a circular list.
     *
     * @param {number} a The dividend.
     * @param {number} b The divisor.
     * @return {number} a % b where the result is between 0 and b (either 0 <= x < b
     *     or b < x <= 0, depending on the sign of b).
     */
    function modulo(a: number, b: number): number;

    /**
     * Performs linear interpolation between values a and b. Returns the value
     * between a and b proportional to x (when x is between 0 and 1. When x is
     * outside this range, the return value is a linear extrapolation).
     * @param {number} a A number.
     * @param {number} b A number.
     * @param {number} x The proportion between a and b.
     * @return {number} The interpolated value between a and b.
     */
    function lerp(a: number, b: number, x: number): number;

    /**
     * Tests whether the two values are equal to each other, within a certain
     * tolerance to adjust for floating point errors.
     * @param {number} a A number.
     * @param {number} b A number.
     * @param {number=} opt_tolerance Optional tolerance range. Defaults
     *     to 0.000001. If specified, should be greater than 0.
     * @return {boolean} Whether {@code a} and {@code b} are nearly equal.
     */
    function nearlyEquals(a: number, b: number, opt_tolerance?: number): boolean;

    /**
     * Normalizes an angle to be in range [0-360). Angles outside this range will
     * be normalized to be the equivalent angle with that range.
     * @param {number} angle Angle in degrees.
     * @return {number} Standardized angle.
     */
    function standardAngle(angle: number): number;

    /**
     * Normalizes an angle to be in range [0-2*PI). Angles outside this range will
     * be normalized to be the equivalent angle with that range.
     * @param {number} angle Angle in radians.
     * @return {number} Standardized angle.
     */
    function standardAngleInRadians(angle: number): number;

    /**
     * Converts degrees to radians.
     * @param {number} angleDegrees Angle in degrees.
     * @return {number} Angle in radians.
     */
    function toRadians(angleDegrees: number): number;

    /**
     * Converts radians to degrees.
     * @param {number} angleRadians Angle in radians.
     * @return {number} Angle in degrees.
     */
    function toDegrees(angleRadians: number): number;

    /**
     * For a given angle and radius, finds the X portion of the offset.
     * @param {number} degrees Angle in degrees (zero points in +X direction).
     * @param {number} radius Radius.
     * @return {number} The x-distance for the angle and radius.
     */
    function angleDx(degrees: number, radius: number): number;

    /**
     * For a given angle and radius, finds the Y portion of the offset.
     * @param {number} degrees Angle in degrees (zero points in +X direction).
     * @param {number} radius Radius.
     * @return {number} The y-distance for the angle and radius.
     */
    function angleDy(degrees: number, radius: number): number;

    /**
     * Computes the angle between two points (x1,y1) and (x2,y2).
     * Angle zero points in the +X direction, 90 degrees points in the +Y
     * direction (down) and from there we grow clockwise towards 360 degrees.
     * @param {number} x1 x of first point.
     * @param {number} y1 y of first point.
     * @param {number} x2 x of second point.
     * @param {number} y2 y of second point.
     * @return {number} Standardized angle in degrees of the vector from
     *     x1,y1 to x2,y2.
     */
    function angle(x1: number, y1: number, x2: number, y2: number): number;

    /**
     * Computes the difference between startAngle and endAngle (angles in degrees).
     * @param {number} startAngle  Start angle in degrees.
     * @param {number} endAngle  End angle in degrees.
     * @return {number} The number of degrees that when added to
     *     startAngle will result in endAngle. Positive numbers mean that the
     *     direction is clockwise. Negative numbers indicate a counter-clockwise
     *     direction.
     *     The shortest route (clockwise vs counter-clockwise) between the angles
     *     is used.
     *     When the difference is 180 degrees, the function returns 180 (not -180)
     *     angleDifference(30, 40) is 10, and angleDifference(40, 30) is -10.
     *     angleDifference(350, 10) is 20, and angleDifference(10, 350) is -20.
     */
    function angleDifference(startAngle: number, endAngle: number): number;

    /**
     * Returns the sign of a number as per the "sign" or "signum" function.
     * @param {number} x The number to take the sign of.
     * @return {number} -1 when negative, 1 when positive, 0 when 0.
     */
    function sign(x: number): number;

    /**
     * JavaScript implementation of Longest Common Subsequence problem.
     * http://en.wikipedia.org/wiki/Longest_common_subsequence
     *
     * Returns the longest possible array that is subarray of both of given arrays.
     *
     * @param {Array.<Object>} array1 First array of objects.
     * @param {Array.<Object>} array2 Second array of objects.
     * @param {Function=} opt_compareFn Function that acts as a custom comparator
     *     for the array ojects. Function should return true if objects are equal,
     *     otherwise false.
     * @param {Function=} opt_collectorFn Function used to decide what to return
     *     as a result subsequence. It accepts 2 arguments: index of common element
     *     in the first array and index in the second. The default function returns
     *     element from the first array.
     * @return {!Array.<Object>} A list of objects that are common to both arrays
     *     such that there is no common subsequence with size greater than the
     *     length of the list.
     */
    function longestCommonSubsequence(array1: Object[], array2: Object[], opt_compareFn?: Function, opt_collectorFn?: Function): Object[];

    /**
     * Returns the sum of the arguments.
     * @param {...number} var_args Numbers to add.
     * @return {number} The sum of the arguments (0 if no arguments were provided,
     *     {@code NaN} if any of the arguments is not a valid number).
     */
    function sum(...var_args: number[]): number;

    /**
     * Returns the arithmetic mean of the arguments.
     * @param {...number} var_args Numbers to average.
     * @return {number} The average of the arguments ({@code NaN} if no arguments
     *     were provided or any of the arguments is not a valid number).
     */
    function average(...var_args: number[]): number;

    /**
     * Returns the unbiased sample variance of the arguments. For a definition,
     * see e.g. http://en.wikipedia.org/wiki/Variance
     * @param {...number} var_args Number samples to analyze.
     * @return {number} The unbiased sample variance of the arguments (0 if fewer
     *     than two samples were provided, or {@code NaN} if any of the samples is
     *     not a valid number).
     */
    function sampleVariance(...var_args: number[]): number;

    /**
     * Returns the sample standard deviation of the arguments.  For a definition of
     * sample standard deviation, see e.g.
     * http://en.wikipedia.org/wiki/Standard_deviation
     * @param {...number} var_args Number samples to analyze.
     * @return {number} The sample standard deviation of the arguments (0 if fewer
     *     than two samples were provided, or {@code NaN} if any of the samples is
     *     not a valid number).
     */
    function standardDeviation(...var_args: number[]): number;

    /**
     * Returns whether the supplied number represents an integer, i.e. that is has
     * no fractional component.  No range-checking is performed on the number.
     * @param {number} num The number to test.
     * @return {boolean} Whether {@code num} is an integer.
     */
    function isInt(num: number): boolean;

    /**
     * Returns whether the supplied number is finite and not NaN.
     * @param {number} num The number to test.
     * @return {boolean} Whether {@code num} is a finite number.
     */
    function isFiniteNumber(num: number): boolean;

    /**
     * Returns the precise value of floor(log10(num)).
     * Simpler implementations didn't work because of floating point rounding
     * errors. For example
     * <ul>
     * <li>Math.floor(Math.log(num) / Math.LN10) is off by one for num == 1e+3.
     * <li>Math.floor(Math.log(num) * Math.LOG10E) is off by one for num == 1e+15.
     * <li>Math.floor(Math.log10(num)) is off by one for num == 1e+15 - 1.
     * </ul>
     * @param {number} num A floating point number.
     * @return {number} Its logarithm to base 10 rounded down to the nearest
     *     integer if num > 0. -Infinity if num == 0. NaN if num < 0.
     */
    function log10Floor(num: number): number;

    /**
     * A tweaked variant of {@code Math.floor} which tolerates if the passed number
     * is infinitesimally smaller than the closest integer. It often happens with
     * the results of floating point calculations because of the finite precision
     * of the intermediate results. For example {@code Math.floor(Math.log(1000) /
     * Math.LN10) == 2}, not 3 as one would expect.
     * @param {number} num A number.
     * @param {number=} opt_epsilon An infinitesimally small positive number, the
     *     rounding error to tolerate.
     * @return {number} The largest integer less than or equal to {@code num}.
     */
    function safeFloor(num: number, opt_epsilon?: number): number;

    /**
     * A tweaked variant of {@code Math.ceil}. See {@code goog.math.safeFloor} for
     * details.
     * @param {number} num A number.
     * @param {number=} opt_epsilon An infinitesimally small positive number, the
     *     rounding error to tolerate.
     * @return {number} The smallest integer greater than or equal to {@code num}.
     */
    function safeCeil(num: number, opt_epsilon?: number): number;

    /**
     * Creates a 2D affine transform. An affine transform performs a linear
     * mapping from 2D coordinates to other 2D coordinates that preserves the
     * "straightness" and "parallelness" of lines.
     *
     * Such a coordinate transformation can be represented by a 3 row by 3 column
     * matrix with an implied last row of [ 0 0 1 ]. This matrix transforms source
     * coordinates (x,y) into destination coordinates (x',y') by considering them
     * to be a column vector and multiplying the coordinate vector by the matrix
     * according to the following process:
     * <pre>
     *      [ x']   [  m00  m01  m02  ] [ x ]   [ m00x + m01y + m02 ]
     *      [ y'] = [  m10  m11  m12  ] [ y ] = [ m10x + m11y + m12 ]
     *      [ 1 ]   [   0    0    1   ] [ 1 ]   [         1         ]
     * </pre>
     *
     * This class is optimized for speed and minimizes calculations based on its
     * knowledge of the underlying matrix (as opposed to say simply performing
     * matrix multiplication).
     *
     * @param {number=} opt_m00 The m00 coordinate of the transform.
     * @param {number=} opt_m10 The m10 coordinate of the transform.
     * @param {number=} opt_m01 The m01 coordinate of the transform.
     * @param {number=} opt_m11 The m11 coordinate of the transform.
     * @param {number=} opt_m02 The m02 coordinate of the transform.
     * @param {number=} opt_m12 The m12 coordinate of the transform.
     * @constructor
     * @final
     */
    class AffineTransform {
        /**
         * Creates a 2D affine transform. An affine transform performs a linear
         * mapping from 2D coordinates to other 2D coordinates that preserves the
         * "straightness" and "parallelness" of lines.
         *
         * Such a coordinate transformation can be represented by a 3 row by 3 column
         * matrix with an implied last row of [ 0 0 1 ]. This matrix transforms source
         * coordinates (x,y) into destination coordinates (x',y') by considering them
         * to be a column vector and multiplying the coordinate vector by the matrix
         * according to the following process:
         * <pre>
         *      [ x']   [  m00  m01  m02  ] [ x ]   [ m00x + m01y + m02 ]
         *      [ y'] = [  m10  m11  m12  ] [ y ] = [ m10x + m11y + m12 ]
         *      [ 1 ]   [   0    0    1   ] [ 1 ]   [         1         ]
         * </pre>
         *
         * This class is optimized for speed and minimizes calculations based on its
         * knowledge of the underlying matrix (as opposed to say simply performing
         * matrix multiplication).
         *
         * @param {number=} opt_m00 The m00 coordinate of the transform.
         * @param {number=} opt_m10 The m10 coordinate of the transform.
         * @param {number=} opt_m01 The m01 coordinate of the transform.
         * @param {number=} opt_m11 The m11 coordinate of the transform.
         * @param {number=} opt_m02 The m02 coordinate of the transform.
         * @param {number=} opt_m12 The m12 coordinate of the transform.
         * @constructor
         * @final
         */
        constructor(opt_m00?: number, opt_m10?: number, opt_m01?: number, opt_m11?: number, opt_m02?: number, opt_m12?: number);
    
        /**
         * @return {boolean} Whether this transform is the identity transform.
         */
        isIdentity(): boolean;
    
        /**
         * @return {!goog.math.AffineTransform} A copy of this transform.
         */
        clone(): goog.math.AffineTransform;
    
        /**
         * Sets this transform to the matrix specified by the 6 values.
         *
         * @param {number} m00 The m00 coordinate of the transform.
         * @param {number} m10 The m10 coordinate of the transform.
         * @param {number} m01 The m01 coordinate of the transform.
         * @param {number} m11 The m11 coordinate of the transform.
         * @param {number} m02 The m02 coordinate of the transform.
         * @param {number} m12 The m12 coordinate of the transform.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        setTransform(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): goog.math.AffineTransform;
    
        /**
         * Sets this transform to be identical to the given transform.
         *
         * @param {!goog.math.AffineTransform} tx The transform to copy.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        copyFrom(tx: goog.math.AffineTransform): goog.math.AffineTransform;
    
        /**
         * Concatenates this transform with a scaling transformation.
         *
         * @param {number} sx The x-axis scaling factor.
         * @param {number} sy The y-axis scaling factor.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        scale(sx: number, sy: number): goog.math.AffineTransform;
    
        /**
         * Pre-concatenates this transform with a scaling transformation,
         * i.e. calculates the following matrix product:
         *
         * <pre>
         * [sx  0 0] [m00 m01 m02]
         * [ 0 sy 0] [m10 m11 m12]
         * [ 0  0 1] [  0   0   1]
         * </pre>
         *
         * @param {number} sx The x-axis scaling factor.
         * @param {number} sy The y-axis scaling factor.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        preScale(sx: number, sy: number): goog.math.AffineTransform;
    
        /**
         * Concatenates this transform with a translate transformation.
         *
         * @param {number} dx The distance to translate in the x direction.
         * @param {number} dy The distance to translate in the y direction.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        translate(dx: number, dy: number): goog.math.AffineTransform;
    
        /**
         * Pre-concatenates this transform with a translate transformation,
         * i.e. calculates the following matrix product:
         *
         * <pre>
         * [1 0 dx] [m00 m01 m02]
         * [0 1 dy] [m10 m11 m12]
         * [0 0  1] [  0   0   1]
         * </pre>
         *
         * @param {number} dx The distance to translate in the x direction.
         * @param {number} dy The distance to translate in the y direction.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        preTranslate(dx: number, dy: number): goog.math.AffineTransform;
    
        /**
         * Concatenates this transform with a rotation transformation around an anchor
         * point.
         *
         * @param {number} theta The angle of rotation measured in radians.
         * @param {number} x The x coordinate of the anchor point.
         * @param {number} y The y coordinate of the anchor point.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        rotate(theta: number, x: number, y: number): goog.math.AffineTransform;
    
        /**
         * Pre-concatenates this transform with a rotation transformation around an
         * anchor point.
         *
         * @param {number} theta The angle of rotation measured in radians.
         * @param {number} x The x coordinate of the anchor point.
         * @param {number} y The y coordinate of the anchor point.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        preRotate(theta: number, x: number, y: number): goog.math.AffineTransform;
    
        /**
         * Concatenates this transform with a shear transformation.
         *
         * @param {number} shx The x shear factor.
         * @param {number} shy The y shear factor.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        shear(shx: number, shy: number): goog.math.AffineTransform;
    
        /**
         * Pre-concatenates this transform with a shear transformation.
         * i.e. calculates the following matrix product:
         *
         * <pre>
         * [  1 shx 0] [m00 m01 m02]
         * [shy   1 0] [m10 m11 m12]
         * [  0   0 1] [  0   0   1]
         * </pre>
         *
         * @param {number} shx The x shear factor.
         * @param {number} shy The y shear factor.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        preShear(shx: number, shy: number): goog.math.AffineTransform;
    
        /**
         * @return {string} A string representation of this transform. The format of
         *     of the string is compatible with SVG matrix notation, i.e.
         *     "matrix(a,b,c,d,e,f)".
         * @override
         */
        toString(): string;
    
        /**
         * @return {number} The scaling factor in the x-direction (m00).
         */
        getScaleX(): number;
    
        /**
         * @return {number} The scaling factor in the y-direction (m11).
         */
        getScaleY(): number;
    
        /**
         * @return {number} The translation in the x-direction (m02).
         */
        getTranslateX(): number;
    
        /**
         * @return {number} The translation in the y-direction (m12).
         */
        getTranslateY(): number;
    
        /**
         * @return {number} The shear factor in the x-direction (m01).
         */
        getShearX(): number;
    
        /**
         * @return {number} The shear factor in the y-direction (m10).
         */
        getShearY(): number;
    
        /**
         * Concatenates an affine transform to this transform.
         *
         * @param {!goog.math.AffineTransform} tx The transform to concatenate.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        concatenate(tx: goog.math.AffineTransform): goog.math.AffineTransform;
    
        /**
         * Pre-concatenates an affine transform to this transform.
         *
         * @param {!goog.math.AffineTransform} tx The transform to preconcatenate.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        preConcatenate(tx: goog.math.AffineTransform): goog.math.AffineTransform;
    
        /**
         * Transforms an array of coordinates by this transform and stores the result
         * into a destination array.
         *
         * @param {!Array.<number>} src The array containing the source points
         *     as x, y value pairs.
         * @param {number} srcOff The offset to the first point to be transformed.
         * @param {!Array.<number>} dst The array into which to store the transformed
         *     point pairs.
         * @param {number} dstOff The offset of the location of the first transformed
         *     point in the destination array.
         * @param {number} numPts The number of points to tranform.
         */
        transform(src: number[], srcOff: number, dst: number[], dstOff: number, numPts: number): void;
    
        /**
         * @return {number} The determinant of this transform.
         */
        getDeterminant(): number;
    
        /**
         * Returns whether the transform is invertible. A transform is not invertible
         * if the determinant is 0 or any value is non-finite or NaN.
         *
         * @return {boolean} Whether the transform is invertible.
         */
        isInvertible(): boolean;
    
        /**
         * @return {!goog.math.AffineTransform} An AffineTransform object
         *     representing the inverse transformation.
         */
        createInverse(): goog.math.AffineTransform;
    
        /**
         * Sets this transform to a scaling transformation.
         *
         * @param {number} sx The x-axis scaling factor.
         * @param {number} sy The y-axis scaling factor.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        setToScale(sx: number, sy: number): goog.math.AffineTransform;
    
        /**
         * Sets this transform to a translation transformation.
         *
         * @param {number} dx The distance to translate in the x direction.
         * @param {number} dy The distance to translate in the y direction.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        setToTranslation(dx: number, dy: number): goog.math.AffineTransform;
    
        /**
         * Sets this transform to a shearing transformation.
         *
         * @param {number} shx The x-axis shear factor.
         * @param {number} shy The y-axis shear factor.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        setToShear(shx: number, shy: number): goog.math.AffineTransform;
    
        /**
         * Sets this transform to a rotation transformation.
         *
         * @param {number} theta The angle of rotation measured in radians.
         * @param {number} x The x coordinate of the anchor point.
         * @param {number} y The y coordinate of the anchor point.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        setToRotation(theta: number, x: number, y: number): goog.math.AffineTransform;
    
        /**
         * Compares two affine transforms for equality.
         *
         * @param {goog.math.AffineTransform} tx The other affine transform.
         * @return {boolean} whether the two transforms are equal.
         */
        equals(tx: goog.math.AffineTransform): boolean;
    }

    /**
     * Object representing a cubic bezier curve.
     * @param {number} x0 X coordinate of the start point.
     * @param {number} y0 Y coordinate of the start point.
     * @param {number} x1 X coordinate of the first control point.
     * @param {number} y1 Y coordinate of the first control point.
     * @param {number} x2 X coordinate of the second control point.
     * @param {number} y2 Y coordinate of the second control point.
     * @param {number} x3 X coordinate of the end point.
     * @param {number} y3 Y coordinate of the end point.
     * @constructor
     * @final
     */
    class Bezier {
        /**
         * Object representing a cubic bezier curve.
         * @param {number} x0 X coordinate of the start point.
         * @param {number} y0 Y coordinate of the start point.
         * @param {number} x1 X coordinate of the first control point.
         * @param {number} y1 Y coordinate of the first control point.
         * @param {number} x2 X coordinate of the second control point.
         * @param {number} y2 Y coordinate of the second control point.
         * @param {number} x3 X coordinate of the end point.
         * @param {number} y3 Y coordinate of the end point.
         * @constructor
         * @final
         */
        constructor(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number);
    
        /**
         * @return {!goog.math.Bezier} A copy of this curve.
         */
        clone(): goog.math.Bezier;
    
        /**
         * Test if the given curve is exactly the same as this one.
         * @param {goog.math.Bezier} other The other curve.
         * @return {boolean} Whether the given curve is the same as this one.
         */
        equals(other: goog.math.Bezier): boolean;
    
        /**
         * Modifies the curve in place to progress in the opposite direction.
         */
        flip(): void;
    
        /**
         * Computes the curve's X coordinate at a point between 0 and 1.
         * @param {number} t The point on the curve to find.
         * @return {number} The computed coordinate.
         */
        getPointX(t: number): number;
    
        /**
         * Computes the curve's Y coordinate at a point between 0 and 1.
         * @param {number} t The point on the curve to find.
         * @return {number} The computed coordinate.
         */
        getPointY(t: number): number;
    
        /**
         * Computes the curve at a point between 0 and 1.
         * @param {number} t The point on the curve to find.
         * @return {!goog.math.Coordinate} The computed coordinate.
         */
        getPoint(t: number): goog.math.Coordinate;
    
        /**
         * Changes this curve in place to be the portion of itself from [t, 1].
         * @param {number} t The start of the desired portion of the curve.
         */
        subdivideLeft(t: number): void;
    
        /**
         * Changes this curve in place to be the portion of itself from [0, t].
         * @param {number} t The end of the desired portion of the curve.
         */
        subdivideRight(t: number): void;
    
        /**
         * Changes this curve in place to be the portion of itself from [s, t].
         * @param {number} s The start of the desired portion of the curve.
         * @param {number} t The end of the desired portion of the curve.
         */
        subdivide(s: number, t: number): void;
    
        /**
         * Computes the position t of a point on the curve given its x coordinate.
         * That is, for an input xVal, finds t s.t. getPointX(t) = xVal.
         * As such, the following should always be true up to some small epsilon:
         * t ~ solvePositionFromXValue(getPointX(t)) for t in [0, 1].
         * @param {number} xVal The x coordinate of the point to find on the curve.
         * @return {number} The position t.
         */
        solvePositionFromXValue(xVal: number): number;
    
        /**
         * Computes the y coordinate of a point on the curve given its x coordinate.
         * @param {number} xVal The x coordinate of the point on the curve.
         * @return {number} The y coordinate of the point on the curve.
         */
        solveYValueFromXValue(xVal: number): number;
    }

    /**
     * Class for representing a box. A box is specified as a top, right, bottom,
     * and left. A box is useful for representing margins and padding.
     *
     * @param {number} top Top.
     * @param {number} right Right.
     * @param {number} bottom Bottom.
     * @param {number} left Left.
     * @constructor
     */
    class Box {
        /**
         * Class for representing a box. A box is specified as a top, right, bottom,
         * and left. A box is useful for representing margins and padding.
         *
         * @param {number} top Top.
         * @param {number} right Right.
         * @param {number} bottom Bottom.
         * @param {number} left Left.
         * @constructor
         */
        constructor(top: number, right: number, bottom: number, left: number);
    
        /**
         * Creates a copy of the box with the same dimensions.
         * @return {!goog.math.Box} A clone of this Box.
         */
        clone(): goog.math.Box;
    
        /**
         * Returns a nice string representing the box.
         * @return {string} In the form (50t, 73r, 24b, 13l).
         * @override
         */
        toString(): string;
    
        /**
         * Returns whether the box contains a coordinate or another box.
         *
         * @param {goog.math.Coordinate|goog.math.Box} other A Coordinate or a Box.
         * @return {boolean} Whether the box contains the coordinate or other box.
         */
        contains(other: any /*goog.math.Coordinate|goog.math.Box*/): boolean;
    
        /**
         * Expands box with the given margins.
         *
         * @param {number|goog.math.Box} top Top margin or box with all margins.
         * @param {number=} opt_right Right margin.
         * @param {number=} opt_bottom Bottom margin.
         * @param {number=} opt_left Left margin.
         * @return {!goog.math.Box} A reference to this Box.
         */
        expand(top: any /*number|goog.math.Box*/, opt_right?: number, opt_bottom?: number, opt_left?: number): goog.math.Box;
    
        /**
         * Expand this box to include another box.
         * NOTE(user): This is used in code that needs to be very fast, please don't
         * add functionality to this function at the expense of speed (variable
         * arguments, accepting multiple argument types, etc).
         * @param {goog.math.Box} box The box to include in this one.
         */
        expandToInclude(box: goog.math.Box): void;
    
        /**
         * Rounds the fields to the next larger integer values.
         *
         * @return {!goog.math.Box} This box with ceil'd fields.
         */
        ceil(): goog.math.Box;
    
        /**
         * Rounds the fields to the next smaller integer values.
         *
         * @return {!goog.math.Box} This box with floored fields.
         */
        floor(): goog.math.Box;
    
        /**
         * Rounds the fields to nearest integer values.
         *
         * @return {!goog.math.Box} This box with rounded fields.
         */
        round(): goog.math.Box;
    
        /**
         * Translates this box by the given offsets. If a {@code goog.math.Coordinate}
         * is given, then the left and right values are translated by the coordinate's
         * x value and the top and bottom values are translated by the coordinate's y
         * value.  Otherwise, {@code tx} and {@code opt_ty} are used to translate the x
         * and y dimension values.
         *
         * @param {number|goog.math.Coordinate} tx The value to translate the x
         *     dimension values by or the the coordinate to translate this box by.
         * @param {number=} opt_ty The value to translate y dimension values by.
         * @return {!goog.math.Box} This box after translating.
         */
        translate(tx: any /*number|goog.math.Coordinate*/, opt_ty?: number): goog.math.Box;
    
        /**
         * Scales this coordinate by the given scale factors. The x and y dimension
         * values are scaled by {@code sx} and {@code opt_sy} respectively.
         * If {@code opt_sy} is not given, then {@code sx} is used for both x and y.
         *
         * @param {number} sx The scale factor to use for the x dimension.
         * @param {number=} opt_sy The scale factor to use for the y dimension.
         * @return {!goog.math.Box} This box after scaling.
         */
        scale(sx: number, opt_sy?: number): goog.math.Box;
    }

    /**
     * Class for representing coordinates and positions in 3 dimensions.
     *
     * @param {number=} opt_x X coordinate, defaults to 0.
     * @param {number=} opt_y Y coordinate, defaults to 0.
     * @param {number=} opt_z Z coordinate, defaults to 0.
     * @constructor
     */
    class Coordinate3 {
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
         * Returns a nice string representing the coordinate.
         *
         * @return {string} In the form (50, 73, 31).
         * @override
         */
        toString(): string;
    
        /**
         * Returns the contents of this coordinate as a 3 value Array.
         *
         * @return {!Array.<number>} A new array.
         */
        toArray(): number[];
    }

    /**
     * Class for representing coordinates and positions.
     * @param {number=} opt_x Left, defaults to 0.
     * @param {number=} opt_y Top, defaults to 0.
     * @constructor
     */
    class Coordinate {
        /**
         * Class for representing coordinates and positions.
         * @param {number=} opt_x Left, defaults to 0.
         * @param {number=} opt_y Top, defaults to 0.
         * @constructor
         */
        constructor(opt_x?: number, opt_y?: number);
    
        /**
         * Returns a new copy of the coordinate.
         * @return {!goog.math.Coordinate} A clone of this coordinate.
         */
        clone(): goog.math.Coordinate;
    
        /**
         * Returns a nice string representing the coordinate.
         * @return {string} In the form (50, 73).
         * @override
         */
        toString(): string;
    
        /**
         * Rounds the x and y fields to the next larger integer values.
         * @return {!goog.math.Coordinate} This coordinate with ceil'd fields.
         */
        ceil(): goog.math.Coordinate;
    
        /**
         * Rounds the x and y fields to the next smaller integer values.
         * @return {!goog.math.Coordinate} This coordinate with floored fields.
         */
        floor(): goog.math.Coordinate;
    
        /**
         * Rounds the x and y fields to the nearest integer values.
         * @return {!goog.math.Coordinate} This coordinate with rounded fields.
         */
        round(): goog.math.Coordinate;
    
        /**
         * Translates this box by the given offsets. If a {@code goog.math.Coordinate}
         * is given, then the x and y values are translated by the coordinate's x and y.
         * Otherwise, x and y are translated by {@code tx} and {@code opt_ty}
         * respectively.
         * @param {number|goog.math.Coordinate} tx The value to translate x by or the
         *     the coordinate to translate this coordinate by.
         * @param {number=} opt_ty The value to translate y by.
         * @return {!goog.math.Coordinate} This coordinate after translating.
         */
        translate(tx: any /*number|goog.math.Coordinate*/, opt_ty?: number): goog.math.Coordinate;
    
        /**
         * Scales this coordinate by the given scale factors. The x and y values are
         * scaled by {@code sx} and {@code opt_sy} respectively.  If {@code opt_sy}
         * is not given, then {@code sx} is used for both x and y.
         * @param {number} sx The scale factor to use for the x dimension.
         * @param {number=} opt_sy The scale factor to use for the y dimension.
         * @return {!goog.math.Coordinate} This coordinate after scaling.
         */
        scale(sx: number, opt_sy?: number): goog.math.Coordinate;
    
        /**
         * Rotates this coordinate clockwise about the origin (or, optionally, the given
         * center) by the given angle, in radians.
         * @param {number} radians The angle by which to rotate this coordinate
         *     clockwise about the given center, in radians.
         * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults
         *     to (0, 0) if not given.
         */
        rotateRadians(radians: number, opt_center?: goog.math.Coordinate): void;
    
        /**
         * Rotates this coordinate clockwise about the origin (or, optionally, the given
         * center) by the given angle, in degrees.
         * @param {number} degrees The angle by which to rotate this coordinate
         *     clockwise about the given center, in degrees.
         * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults
         *     to (0, 0) if not given.
         */
        rotateDegrees(degrees: number, opt_center?: goog.math.Coordinate): void;
    }

    /**
     * @constructor
     *
     * @param {number} initialValue The initial backoff value.
     * @param {number} maxValue The maximum backoff value.
     */
    class ExponentialBackoff {
        /**
         * @constructor
         *
         * @param {number} initialValue The initial backoff value.
         * @param {number} maxValue The maximum backoff value.
         */
        constructor(initialValue: number, maxValue: number);
    
        /**
         * Resets the backoff value to its initial value.
         */
        reset(): void;
    
        /**
         * @return {number} The current backoff value.
         */
        getValue(): number;
    
        /**
         * @return {number} The number of times this class has backed off.
         */
        getBackoffCount(): number;
    
        /**
         * Initiates a backoff.
         */
        backoff(): void;
    }

    /**
     * Constructs a two's-complement integer an array containing bits of the
     * integer in 32-bit (signed) pieces, given in little-endian order (i.e.,
     * lowest-order bits in the first piece), and the sign of -1 or 0.
     *
     * See the from* functions below for other convenient ways of constructing
     * Integers.
     *
     * The internal representation of an integer is an array of 32-bit signed
     * pieces, along with a sign (0 or -1) that indicates the contents of all the
     * other 32-bit pieces out to infinity.  We use 32-bit pieces because these are
     * the size of integers on which Javascript performs bit-operations.  For
     * operations like addition and multiplication, we split each number into 16-bit
     * pieces, which can easily be multiplied within Javascript's floating-point
     * representation without overflow or change in sign.
     *
     * @constructor
     * @param {Array.<number>} bits Array containing the bits of the number.
     * @param {number} sign The sign of the number: -1 for negative and 0 positive.
     * @final
     */
    class Integer {
        /**
         * Constructs a two's-complement integer an array containing bits of the
         * integer in 32-bit (signed) pieces, given in little-endian order (i.e.,
         * lowest-order bits in the first piece), and the sign of -1 or 0.
         *
         * See the from* functions below for other convenient ways of constructing
         * Integers.
         *
         * The internal representation of an integer is an array of 32-bit signed
         * pieces, along with a sign (0 or -1) that indicates the contents of all the
         * other 32-bit pieces out to infinity.  We use 32-bit pieces because these are
         * the size of integers on which Javascript performs bit-operations.  For
         * operations like addition and multiplication, we split each number into 16-bit
         * pieces, which can easily be multiplied within Javascript's floating-point
         * representation without overflow or change in sign.
         *
         * @constructor
         * @param {Array.<number>} bits Array containing the bits of the number.
         * @param {number} sign The sign of the number: -1 for negative and 0 positive.
         * @final
         */
        constructor(bits: number[], sign: number);
    
        /**
         * Returns the value, assuming it is a 32-bit integer.
         * @return {number} The corresponding int value.
         */
        toInt(): number;
    
        /** @return {number} The closest floating-point representation to this value. */
        toNumber(): number;
    
        /**
         * @param {number=} opt_radix The radix in which the text should be written.
         * @return {string} The textual representation of this value.
         * @override
         */
        toString(opt_radix?: number): string;
    
        /**
         * Returns the index-th 32-bit (signed) piece of the Integer according to
         * little-endian order (i.e., index 0 contains the smallest bits).
         * @param {number} index The index in question.
         * @return {number} The requested 32-bits as a signed number.
         */
        getBits(index: number): number;
    
        /**
         * Returns the index-th 32-bit piece as an unsigned number.
         * @param {number} index The index in question.
         * @return {number} The requested 32-bits as an unsigned number.
         */
        getBitsUnsigned(index: number): number;
    
        /** @return {number} The sign bit of this number, -1 or 0. */
        getSign(): number;
    
        /** @return {boolean} Whether this value is zero. */
        isZero(): boolean;
    
        /** @return {boolean} Whether this value is negative. */
        isNegative(): boolean;
    
        /** @return {boolean} Whether this value is odd. */
        isOdd(): boolean;
    
        /**
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {boolean} Whether this Integer equals the other.
         */
        equals(other: goog.math.Integer): boolean;
    
        /**
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {boolean} Whether this Integer does not equal the other.
         */
        notEquals(other: goog.math.Integer): boolean;
    
        /**
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {boolean} Whether this Integer is greater than the other.
         */
        greaterThan(other: goog.math.Integer): boolean;
    
        /**
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {boolean} Whether this Integer is greater than or equal to the other.
         */
        greaterThanOrEqual(other: goog.math.Integer): boolean;
    
        /**
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {boolean} Whether this Integer is less than the other.
         */
        lessThan(other: goog.math.Integer): boolean;
    
        /**
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {boolean} Whether this Integer is less than or equal to the other.
         */
        lessThanOrEqual(other: goog.math.Integer): boolean;
    
        /**
         * Compares this Integer with the given one.
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {number} 0 if they are the same, 1 if the this is greater, and -1
         *     if the given one is greater.
         */
        compare(other: goog.math.Integer): number;
    
        /**
         * Returns an integer with only the first numBits bits of this value, sign
         * extended from the final bit.
         * @param {number} numBits The number of bits by which to shift.
         * @return {!goog.math.Integer} The shorted integer value.
         */
        shorten(numBits: number): goog.math.Integer;
    
        /** @return {!goog.math.Integer} The negation of this value. */
        negate(): goog.math.Integer;
    
        /**
         * Returns the sum of this and the given Integer.
         * @param {goog.math.Integer} other The Integer to add to this.
         * @return {!goog.math.Integer} The Integer result.
         */
        add(other: goog.math.Integer): goog.math.Integer;
    
        /**
         * Returns the difference of this and the given Integer.
         * @param {goog.math.Integer} other The Integer to subtract from this.
         * @return {!goog.math.Integer} The Integer result.
         */
        subtract(other: goog.math.Integer): goog.math.Integer;
    
        /**
         * Returns the product of this and the given Integer.
         * @param {goog.math.Integer} other The Integer to multiply against this.
         * @return {!goog.math.Integer} The product of this and the other.
         */
        multiply(other: goog.math.Integer): goog.math.Integer;
    
        /**
         * Returns this Integer divided by the given one.
         * @param {goog.math.Integer} other Th Integer to divide this by.
         * @return {!goog.math.Integer} This value divided by the given one.
         */
        divide(other: goog.math.Integer): goog.math.Integer;
    
        /**
         * Returns this Integer modulo the given one.
         * @param {goog.math.Integer} other The Integer by which to mod.
         * @return {!goog.math.Integer} This value modulo the given one.
         */
        modulo(other: goog.math.Integer): goog.math.Integer;
    
        /** @return {!goog.math.Integer} The bitwise-NOT of this value. */
        not(): goog.math.Integer;
    
        /**
         * Returns the bitwise-AND of this Integer and the given one.
         * @param {goog.math.Integer} other The Integer to AND with this.
         * @return {!goog.math.Integer} The bitwise-AND of this and the other.
         */
        and(other: goog.math.Integer): goog.math.Integer;
    
        /**
         * Returns the bitwise-OR of this Integer and the given one.
         * @param {goog.math.Integer} other The Integer to OR with this.
         * @return {!goog.math.Integer} The bitwise-OR of this and the other.
         */
        or(other: goog.math.Integer): goog.math.Integer;
    
        /**
         * Returns the bitwise-XOR of this Integer and the given one.
         * @param {goog.math.Integer} other The Integer to XOR with this.
         * @return {!goog.math.Integer} The bitwise-XOR of this and the other.
         */
        xor(other: goog.math.Integer): goog.math.Integer;
    
        /**
         * Returns this value with bits shifted to the left by the given amount.
         * @param {number} numBits The number of bits by which to shift.
         * @return {!goog.math.Integer} This shifted to the left by the given amount.
         */
        shiftLeft(numBits: number): goog.math.Integer;
    
        /**
         * Returns this value with bits shifted to the right by the given amount.
         * @param {number} numBits The number of bits by which to shift.
         * @return {!goog.math.Integer} This shifted to the right by the given amount.
         */
        shiftRight(numBits: number): goog.math.Integer;
    }

    /**
     * Object representing a line.
     * @param {number} x0 X coordinate of the start point.
     * @param {number} y0 Y coordinate of the start point.
     * @param {number} x1 X coordinate of the end point.
     * @param {number} y1 Y coordinate of the end point.
     * @constructor
     * @final
     */
    class Line {
        /**
         * Object representing a line.
         * @param {number} x0 X coordinate of the start point.
         * @param {number} y0 Y coordinate of the start point.
         * @param {number} x1 X coordinate of the end point.
         * @param {number} y1 Y coordinate of the end point.
         * @constructor
         * @final
         */
        constructor(x0: number, y0: number, x1: number, y1: number);
    
        /**
         * @return {!goog.math.Line} A copy of this line.
         */
        clone(): goog.math.Line;
    
        /**
         * Tests whether the given line is exactly the same as this one.
         * @param {goog.math.Line} other The other line.
         * @return {boolean} Whether the given line is the same as this one.
         */
        equals(other: goog.math.Line): boolean;
    
        /**
         * @return {number} The squared length of the line segment used to define the
         *     line.
         */
        getSegmentLengthSquared(): number;
    
        /**
         * @return {number} The length of the line segment used to define the line.
         */
        getSegmentLength(): number;
    
        /**
         * Returns the point on the line segment proportional to t, where for t = 0 we
         * return the starting point and for t = 1 we return the end point.  For t < 0
         * or t > 1 we extrapolate along the line defined by the line segment.
         * @param {number} t The interpolation parameter along the line segment.
         * @return {!goog.math.Coordinate} The point on the line segment at t.
         */
        getInterpolatedPoint(t: number): goog.math.Coordinate;
    
        /**
         * Computes the point on the line closest to a given point.  Note that a line
         * in this case is defined as the infinite line going through the start and end
         * points.  To find the closest point on the line segment itself see
         * {@see #getClosestSegmentPoint}.
         * @param {number|goog.math.Coordinate} x The x coordinate of the point, or
         *     a coordinate object.
         * @param {number=} opt_y The y coordinate of the point - required if x is a
         *     number, ignored if x is a goog.math.Coordinate.
         * @return {!goog.math.Coordinate} The point on the line closest to the given
         *     point.
         */
        getClosestPoint(x: any /*number|goog.math.Coordinate*/, opt_y?: number): goog.math.Coordinate;
    
        /**
         * Computes the point on the line segment closest to a given point.
         * @param {number|goog.math.Coordinate} x The x coordinate of the point, or
         *     a coordinate object.
         * @param {number=} opt_y The y coordinate of the point - required if x is a
         *     number, ignored if x is a goog.math.Coordinate.
         * @return {!goog.math.Coordinate} The point on the line segment closest to the
         *     given point.
         */
        getClosestSegmentPoint(x: any /*number|goog.math.Coordinate*/, opt_y?: number): goog.math.Coordinate;
    }

    /**
     * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
     * values as *signed* integers.  See the from* functions below for more
     * convenient ways of constructing Longs.
     *
     * The internal representation of a long is the two given signed, 32-bit values.
     * We use 32-bit pieces because these are the size of integers on which
     * Javascript performs bit-operations.  For operations like addition and
     * multiplication, we split each number into 16-bit pieces, which can easily be
     * multiplied within Javascript's floating-point representation without overflow
     * or change in sign.
     *
     * In the algorithms below, we frequently reduce the negative case to the
     * positive case by negating the input(s) and then post-processing the result.
     * Note that we must ALWAYS check specially whether those values are MIN_VALUE
     * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
     * a positive number, it overflows back into a negative).  Not handling this
     * case would often result in infinite recursion.
     *
     * @param {number} low  The low (signed) 32 bits of the long.
     * @param {number} high  The high (signed) 32 bits of the long.
     * @constructor
     * @final
     */
    class Long {
        /**
         * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
         * values as *signed* integers.  See the from* functions below for more
         * convenient ways of constructing Longs.
         *
         * The internal representation of a long is the two given signed, 32-bit values.
         * We use 32-bit pieces because these are the size of integers on which
         * Javascript performs bit-operations.  For operations like addition and
         * multiplication, we split each number into 16-bit pieces, which can easily be
         * multiplied within Javascript's floating-point representation without overflow
         * or change in sign.
         *
         * In the algorithms below, we frequently reduce the negative case to the
         * positive case by negating the input(s) and then post-processing the result.
         * Note that we must ALWAYS check specially whether those values are MIN_VALUE
         * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
         * a positive number, it overflows back into a negative).  Not handling this
         * case would often result in infinite recursion.
         *
         * @param {number} low  The low (signed) 32 bits of the long.
         * @param {number} high  The high (signed) 32 bits of the long.
         * @constructor
         * @final
         */
        constructor(low: number, high: number);
    
        /** @return {number} The value, assuming it is a 32-bit integer. */
        toInt(): number;
    
        /** @return {number} The closest floating-point representation to this value. */
        toNumber(): number;
    
        /**
         * @param {number=} opt_radix The radix in which the text should be written.
         * @return {string} The textual representation of this value.
         * @override
         */
        toString(opt_radix?: number): string;
    
        /** @return {number} The high 32-bits as a signed value. */
        getHighBits(): number;
    
        /** @return {number} The low 32-bits as a signed value. */
        getLowBits(): number;
    
        /** @return {number} The low 32-bits as an unsigned value. */
        getLowBitsUnsigned(): number;
    
        /**
         * @return {number} Returns the number of bits needed to represent the absolute
         *     value of this Long.
         */
        getNumBitsAbs(): number;
    
        /** @return {boolean} Whether this value is zero. */
        isZero(): boolean;
    
        /** @return {boolean} Whether this value is negative. */
        isNegative(): boolean;
    
        /** @return {boolean} Whether this value is odd. */
        isOdd(): boolean;
    
        /**
         * @param {goog.math.Long} other Long to compare against.
         * @return {boolean} Whether this Long equals the other.
         */
        equals(other: goog.math.Long): boolean;
    
        /**
         * @param {goog.math.Long} other Long to compare against.
         * @return {boolean} Whether this Long does not equal the other.
         */
        notEquals(other: goog.math.Long): boolean;
    
        /**
         * @param {goog.math.Long} other Long to compare against.
         * @return {boolean} Whether this Long is less than the other.
         */
        lessThan(other: goog.math.Long): boolean;
    
        /**
         * @param {goog.math.Long} other Long to compare against.
         * @return {boolean} Whether this Long is less than or equal to the other.
         */
        lessThanOrEqual(other: goog.math.Long): boolean;
    
        /**
         * @param {goog.math.Long} other Long to compare against.
         * @return {boolean} Whether this Long is greater than the other.
         */
        greaterThan(other: goog.math.Long): boolean;
    
        /**
         * @param {goog.math.Long} other Long to compare against.
         * @return {boolean} Whether this Long is greater than or equal to the other.
         */
        greaterThanOrEqual(other: goog.math.Long): boolean;
    
        /**
         * Compares this Long with the given one.
         * @param {goog.math.Long} other Long to compare against.
         * @return {number} 0 if they are the same, 1 if the this is greater, and -1
         *     if the given one is greater.
         */
        compare(other: goog.math.Long): number;
    
        /** @return {!goog.math.Long} The negation of this value. */
        negate(): goog.math.Long;
    
        /**
         * Returns the sum of this and the given Long.
         * @param {goog.math.Long} other Long to add to this one.
         * @return {!goog.math.Long} The sum of this and the given Long.
         */
        add(other: goog.math.Long): goog.math.Long;
    
        /**
         * Returns the difference of this and the given Long.
         * @param {goog.math.Long} other Long to subtract from this.
         * @return {!goog.math.Long} The difference of this and the given Long.
         */
        subtract(other: goog.math.Long): goog.math.Long;
    
        /**
         * Returns the product of this and the given long.
         * @param {goog.math.Long} other Long to multiply with this.
         * @return {!goog.math.Long} The product of this and the other.
         */
        multiply(other: goog.math.Long): goog.math.Long;
    
        /**
         * Returns this Long divided by the given one.
         * @param {goog.math.Long} other Long by which to divide.
         * @return {!goog.math.Long} This Long divided by the given one.
         */
        div(other: goog.math.Long): goog.math.Long;
    
        /**
         * Returns this Long modulo the given one.
         * @param {goog.math.Long} other Long by which to mod.
         * @return {!goog.math.Long} This Long modulo the given one.
         */
        modulo(other: goog.math.Long): goog.math.Long;
    
        /** @return {!goog.math.Long} The bitwise-NOT of this value. */
        not(): goog.math.Long;
    
        /**
         * Returns the bitwise-AND of this Long and the given one.
         * @param {goog.math.Long} other The Long with which to AND.
         * @return {!goog.math.Long} The bitwise-AND of this and the other.
         */
        and(other: goog.math.Long): goog.math.Long;
    
        /**
         * Returns the bitwise-OR of this Long and the given one.
         * @param {goog.math.Long} other The Long with which to OR.
         * @return {!goog.math.Long} The bitwise-OR of this and the other.
         */
        or(other: goog.math.Long): goog.math.Long;
    
        /**
         * Returns the bitwise-XOR of this Long and the given one.
         * @param {goog.math.Long} other The Long with which to XOR.
         * @return {!goog.math.Long} The bitwise-XOR of this and the other.
         */
        xor(other: goog.math.Long): goog.math.Long;
    
        /**
         * Returns this Long with bits shifted to the left by the given amount.
         * @param {number} numBits The number of bits by which to shift.
         * @return {!goog.math.Long} This shifted to the left by the given amount.
         */
        shiftLeft(numBits: number): goog.math.Long;
    
        /**
         * Returns this Long with bits shifted to the right by the given amount.
         * @param {number} numBits The number of bits by which to shift.
         * @return {!goog.math.Long} This shifted to the right by the given amount.
         */
        shiftRight(numBits: number): goog.math.Long;
    
        /**
         * Returns this Long with bits shifted to the right by the given amount, with
         * zeros placed into the new leading bits.
         * @param {number} numBits The number of bits by which to shift.
         * @return {!goog.math.Long} This shifted to the right by the given amount, with
         *     zeros placed into the new leading bits.
         */
        shiftRightUnsigned(numBits: number): goog.math.Long;
    }

    /**
     * Class for representing and manipulating matrices.
     *
     * The entry that lies in the i-th row and the j-th column of a matrix is
     * typically referred to as the i,j entry of the matrix.
     *
     * The m-by-n matrix A would have its entries referred to as:
     *   [ a0,0   a0,1   a0,2   ...   a0,j  ...  a0,n ]
     *   [ a1,0   a1,1   a1,2   ...   a1,j  ...  a1,n ]
     *   [ a2,0   a2,1   a2,2   ...   a2,j  ...  a2,n ]
     *   [  .      .      .            .          .   ]
     *   [  .      .      .            .          .   ]
     *   [  .      .      .            .          .   ]
     *   [ ai,0   ai,1   ai,2   ...   ai,j  ...  ai,n ]
     *   [  .      .      .            .          .   ]
     *   [  .      .      .            .          .   ]
     *   [  .      .      .            .          .   ]
     *   [ am,0   am,1   am,2   ...   am,j  ...  am,n ]
     *
     * @param {goog.math.Matrix|Array.<Array.<number>>|goog.math.Size|number} m
     *     A matrix to copy, a 2D-array to take as a template, a size object for
     *     dimensions, or the number of rows.
     * @param {number=} opt_n Number of columns of the matrix (only applicable if
     *     the first argument is also numeric).
     * @constructor
     * @final
     */
    class Matrix {
        /**
         * Class for representing and manipulating matrices.
         *
         * The entry that lies in the i-th row and the j-th column of a matrix is
         * typically referred to as the i,j entry of the matrix.
         *
         * The m-by-n matrix A would have its entries referred to as:
         *   [ a0,0   a0,1   a0,2   ...   a0,j  ...  a0,n ]
         *   [ a1,0   a1,1   a1,2   ...   a1,j  ...  a1,n ]
         *   [ a2,0   a2,1   a2,2   ...   a2,j  ...  a2,n ]
         *   [  .      .      .            .          .   ]
         *   [  .      .      .            .          .   ]
         *   [  .      .      .            .          .   ]
         *   [ ai,0   ai,1   ai,2   ...   ai,j  ...  ai,n ]
         *   [  .      .      .            .          .   ]
         *   [  .      .      .            .          .   ]
         *   [  .      .      .            .          .   ]
         *   [ am,0   am,1   am,2   ...   am,j  ...  am,n ]
         *
         * @param {goog.math.Matrix|Array.<Array.<number>>|goog.math.Size|number} m
         *     A matrix to copy, a 2D-array to take as a template, a size object for
         *     dimensions, or the number of rows.
         * @param {number=} opt_n Number of columns of the matrix (only applicable if
         *     the first argument is also numeric).
         * @constructor
         * @final
         */
        constructor(m: any /*goog.math.Matrix|number[][]|goog.math.Size|number*/, opt_n?: number);
    
        /**
         * Returns a new matrix that is the sum of this and the provided matrix.
         * @param {goog.math.Matrix} m The matrix to add to this one.
         * @return {!goog.math.Matrix} Resultant sum.
         */
        add(m: goog.math.Matrix): goog.math.Matrix;
    
        /**
         * Appends the given matrix to the right side of this matrix.
         * @param {goog.math.Matrix} m The matrix to augment this matrix with.
         * @return {!goog.math.Matrix} A new matrix with additional columns on the
         *     right.
         */
        appendColumns(m: goog.math.Matrix): goog.math.Matrix;
    
        /**
         * Appends the given matrix to the bottom of this matrix.
         * @param {goog.math.Matrix} m The matrix to augment this matrix with.
         * @return {!goog.math.Matrix} A new matrix with added columns on the bottom.
         */
        appendRows(m: goog.math.Matrix): goog.math.Matrix;
    
        /**
         * Returns whether the given matrix equals this matrix.
         * @param {goog.math.Matrix} m The matrix to compare to this one.
         * @param {number=} opt_tolerance The tolerance when comparing array entries.
         * @return {boolean} Whether the given matrix equals this matrix.
         */
        equals(m: goog.math.Matrix, opt_tolerance?: number): boolean;
    
        /**
         * Returns the determinant of this matrix.  The determinant of a matrix A is
         * often denoted as |A| and can only be applied to a square matrix.
         * @return {number} The determinant of this matrix.
         */
        getDeterminant(): number;
    
        /**
         * Returns the inverse of this matrix if it exists or null if the matrix is
         * not invertible.
         * @return {goog.math.Matrix} A new matrix which is the inverse of this matrix.
         */
        getInverse(): goog.math.Matrix;
    
        /**
         * Transforms this matrix into reduced row echelon form.
         * @return {!goog.math.Matrix} A new matrix reduced row echelon form.
         */
        getReducedRowEchelonForm(): goog.math.Matrix;
    
        /**
         * @return {!goog.math.Size} The dimensions of the matrix.
         */
        getSize(): goog.math.Size;
    
        /**
         * Return the transpose of this matrix.  For an m-by-n matrix, the transpose
         * is the n-by-m matrix which results from turning rows into columns and columns
         * into rows
         * @return {!goog.math.Matrix} A new matrix A^T.
         */
        getTranspose(): goog.math.Matrix;
    
        /**
         * Retrieves the value of a particular coordinate in the matrix or null if the
         * requested coordinates are out of range.
         * @param {number} i The i index of the coordinate.
         * @param {number} j The j index of the coordinate.
         * @return {?number} The value at the specified coordinate.
         */
        getValueAt(i: number, j: number): number;
    
        /**
         * @return {boolean} Whether the horizontal and vertical dimensions of this
         *     matrix are the same.
         */
        isSquare(): boolean;
    
        /**
         * Sets the value at a particular coordinate (if the coordinate is within the
         * bounds of the matrix).
         * @param {number} i The i index of the coordinate.
         * @param {number} j The j index of the coordinate.
         * @param {number} value The new value for the coordinate.
         */
        setValueAt(i: number, j: number, value: number): void;
    
        /**
         * Performs matrix or scalar multiplication on a matrix and returns the
         * resultant matrix.
         *
         * Matrix multiplication is defined between two matrices only if the number of
         * columns of the first matrix is the same as the number of rows of the second
         * matrix. If A is an m-by-n matrix and B is an n-by-p matrix, then their
         * product AB is an m-by-p matrix
         *
         * Scalar multiplication returns a matrix of the same size as the original,
         * each value multiplied by the given value.
         *
         * @param {goog.math.Matrix|number} m Matrix/number to multiply the matrix by.
         * @return {!goog.math.Matrix} Resultant product.
         */
        multiply(m: any /*goog.math.Matrix|number*/): goog.math.Matrix;
    
        /**
         * Returns a new matrix that is the difference of this and the provided matrix.
         * @param {goog.math.Matrix} m The matrix to subtract from this one.
         * @return {!goog.math.Matrix} Resultant difference.
         */
        subtract(m: goog.math.Matrix): goog.math.Matrix;
    
        /**
         * @return {!Array.<!Array.<number>>} A 2D internal array representing this
         *     matrix.  Not a clone.
         */
        toArray(): number[][];
    
        /**
         * Returns a string representation of the matrix.  e.g.
         * <pre>
         * [ 12  5  9  1 ]
         * [  4 16  0 17 ]
         * [ 12  5  1 23 ]
         * </pre>
         *
         * @return {string} A string representation of this matrix.
         * @override
         */
        toString(): string;
    }

    /**
     * Creates a path object. A path is a sequence of segments and may be open or
     * closed. Path uses the EVEN-ODD fill rule for determining the interior of the
     * path. A path must start with a moveTo command.
     *
     * A "simple" path does not contain any arcs and may be transformed using
     * the {@code transform} method.
     *
     * @constructor
     * @final
     */
    class Path {
        /**
         * Creates a path object. A path is a sequence of segments and may be open or
         * closed. Path uses the EVEN-ODD fill rule for determining the interior of the
         * path. A path must start with a moveTo command.
         *
         * A "simple" path does not contain any arcs and may be transformed using
         * the {@code transform} method.
         *
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Appends another path to the end of this path.
         *
         * @param {!goog.math.Path} path The path to append.
         * @return {!goog.math.Path} This path.
         */
        appendPath(path: goog.math.Path): goog.math.Path;
    
        /**
         * Clears the path.
         *
         * @return {!goog.math.Path} The path itself.
         */
        clear(): goog.math.Path;
    
        /**
         * Adds a point to the path by moving to the specified point. Repeated moveTo
         * commands are collapsed into a single moveTo.
         *
         * @param {number} x X coordinate of destination point.
         * @param {number} y Y coordinate of destination point.
         * @return {!goog.math.Path} The path itself.
         */
        moveTo(x: number, y: number): goog.math.Path;
    
        /**
         * Adds points to the path by drawing a straight line to each point.
         *
         * @param {...number} var_args The coordinates of each destination point as x, y
         *     value pairs.
         * @return {!goog.math.Path} The path itself.
         */
        lineTo(...var_args: number[]): goog.math.Path;
    
        /**
         * Adds points to the path by drawing a straight line to each point.
         *
         * @param {!Array.<number>} coordinates The coordinates of each
         *     destination point as x, y value pairs.
         * @return {!goog.math.Path} The path itself.
         */
        lineToFromArray(coordinates: number[]): goog.math.Path;
    
        /**
         * Adds points to the path by drawing cubic Bezier curves. Each curve is
         * specified using 3 points (6 coordinates) - two control points and the end
         * point of the curve.
         *
         * @param {...number} var_args The coordinates specifiying each curve in sets of
         *     6 points: {@code [x1, y1]} the first control point, {@code [x2, y2]} the
         *     second control point and {@code [x, y]} the end point.
         * @return {!goog.math.Path} The path itself.
         */
        curveTo(...var_args: number[]): goog.math.Path;
    
        /**
         * Adds points to the path by drawing cubic Bezier curves. Each curve is
         * specified using 3 points (6 coordinates) - two control points and the end
         * point of the curve.
         *
         * @param {!Array.<number>} coordinates The coordinates specifiying
         *     each curve in sets of 6 points: {@code [x1, y1]} the first control point,
         *     {@code [x2, y2]} the second control point and {@code [x, y]} the end
         *     point.
         * @return {!goog.math.Path} The path itself.
         */
        curveToFromArray(coordinates: number[]): goog.math.Path;
    
        /**
         * Adds a path command to close the path by connecting the
         * last point to the first point.
         *
         * @return {!goog.math.Path} The path itself.
         */
        close(): goog.math.Path;
    
        /**
         * Adds a path command to draw an arc centered at the point {@code (cx, cy)}
         * with radius {@code rx} along the x-axis and {@code ry} along the y-axis from
         * {@code startAngle} through {@code extent} degrees. Positive rotation is in
         * the direction from positive x-axis to positive y-axis.
         *
         * @param {number} cx X coordinate of center of ellipse.
         * @param {number} cy Y coordinate of center of ellipse.
         * @param {number} rx Radius of ellipse on x axis.
         * @param {number} ry Radius of ellipse on y axis.
         * @param {number} fromAngle Starting angle measured in degrees from the
         *     positive x-axis.
         * @param {number} extent The span of the arc in degrees.
         * @param {boolean} connect If true, the starting point of the arc is connected
         *     to the current point.
         * @return {!goog.math.Path} The path itself.
         * @deprecated Use {@code arcTo} or {@code arcToAsCurves} instead.
         */
        arc(cx: number, cy: number, rx: number, ry: number, fromAngle: number, extent: number, connect: boolean): goog.math.Path;
    
        /**
         * Adds a path command to draw an arc starting at the path's current point,
         * with radius {@code rx} along the x-axis and {@code ry} along the y-axis from
         * {@code startAngle} through {@code extent} degrees. Positive rotation is in
         * the direction from positive x-axis to positive y-axis.
         *
         * This method makes the path non-simple.
         *
         * @param {number} rx Radius of ellipse on x axis.
         * @param {number} ry Radius of ellipse on y axis.
         * @param {number} fromAngle Starting angle measured in degrees from the
         *     positive x-axis.
         * @param {number} extent The span of the arc in degrees.
         * @return {!goog.math.Path} The path itself.
         */
        arcTo(rx: number, ry: number, fromAngle: number, extent: number): goog.math.Path;
    
        /**
         * Same as {@code arcTo}, but approximates the arc using bezier curves.
    .* As a result, this method does not affect the simplified status of this path.
         * The algorithm is adapted from {@code java.awt.geom.ArcIterator}.
         *
         * @param {number} rx Radius of ellipse on x axis.
         * @param {number} ry Radius of ellipse on y axis.
         * @param {number} fromAngle Starting angle measured in degrees from the
         *     positive x-axis.
         * @param {number} extent The span of the arc in degrees.
         * @return {!goog.math.Path} The path itself.
         */
        arcToAsCurves(rx: number, ry: number, fromAngle: number, extent: number): goog.math.Path;
    
        /**
         * Iterates over the path calling the supplied callback once for each path
         * segment. The arguments to the callback function are the segment type and
         * an array of its arguments.
         *
         * The {@code LINETO} and {@code CURVETO} arrays can contain multiple
         * segments of the same type. The number of segments is the length of the
         * array divided by the segment length (2 for lines, 6 for  curves).
         *
         * As a convenience the {@code ARCTO} segment also includes the end point as the
         * last two arguments: {@code rx, ry, fromAngle, extent, x, y}.
         *
         * @param {function(number, Array)} callback The function to call with each
         *     path segment.
         */
        forEachSegment(callback: (_0: number, _1: any[]) => any /*missing*/): void;
    
        /**
         * Returns the coordinates most recently added to the end of the path.
         *
         * @return {Array.<number>?} An array containing the ending coordinates of the
         *     path of the form {@code [x, y]}.
         */
        getCurrentPoint(): number[];
    
        /**
         * @return {!goog.math.Path} A copy of this path.
         */
        clone(): goog.math.Path;
    
        /**
         * Returns true if this path contains no arcs. Simplified paths can be
         * created using {@code createSimplifiedPath}.
         *
         * @return {boolean} True if the path contains no arcs.
         */
        isSimple(): boolean;
    
        /**
         * Creates a transformed copy of this path. The path is simplified
         * {@see #createSimplifiedPath} prior to transformation.
         *
         * @param {!goog.math.AffineTransform} tx The transformation to perform.
         * @return {!goog.math.Path} A new, transformed path.
         */
        createTransformedPath(tx: goog.math.AffineTransform): goog.math.Path;
    
        /**
         * Transforms the path. Only simple paths are transformable. Attempting
         * to transform a non-simple path will throw an error.
         *
         * @param {!goog.math.AffineTransform} tx The transformation to perform.
         * @return {!goog.math.Path} The path itself.
         */
        transform(tx: goog.math.AffineTransform): goog.math.Path;
    
        /**
         * @return {boolean} Whether the path is empty.
         */
        isEmpty(): boolean;
    }

    /**
     * A number range.
     * @param {number} a One end of the range.
     * @param {number} b The other end of the range.
     * @constructor
     */
    class Range {
        /**
         * A number range.
         * @param {number} a One end of the range.
         * @param {number} b The other end of the range.
         * @constructor
         */
        constructor(a: number, b: number);
    
        /**
         * @return {!goog.math.Range} A clone of this Range.
         */
        clone(): goog.math.Range;
    
        /**
         * @return {number} Length of the range.
         */
        getLength(): number;
    
        /**
         * Extends this range to include the given point.
         * @param {number} point
         */
        includePoint(point: number): void;
    
        /**
         * Extends this range to include the given range.
         * @param {!goog.math.Range} range
         */
        includeRange(range: goog.math.Range): void;
    
        /**
         * Returns a string representing the range.
         * @return {string} In the form [-3.5, 8.13].
         * @override
         */
        toString(): string;
    }

    /**
     * Constructs a new RangeSet, which can store numeric ranges.
     *
     * Ranges are treated as half-closed: that is, they are exclusive of their end
     * value [start, end).
     *
     * New ranges added to the set which overlap the values in one or more existing
     * ranges will be merged.
     *
     * @constructor
     * @final
     */
    class RangeSet {
        /**
         * Constructs a new RangeSet, which can store numeric ranges.
         *
         * Ranges are treated as half-closed: that is, they are exclusive of their end
         * value [start, end).
         *
         * New ranges added to the set which overlap the values in one or more existing
         * ranges will be merged.
         *
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * @return {string} A debug string in the form [[1, 5], [8, 9], [15, 30]].
         * @override
         */
        toString(): string;
    
        /**
         * @return {!goog.math.RangeSet} A new RangeSet containing the same values as
         *      this one.
         */
        clone(): goog.math.RangeSet;
    
        /**
         * Adds a range to the set. If the new range overlaps existing values, those
         * ranges will be merged.
         *
         * @param {goog.math.Range} a The range to add.
         */
        add(a: goog.math.Range): void;
    
        /**
         * Removes a range of values from the set.
         *
         * @param {goog.math.Range} a The range to remove.
         */
        remove(a: goog.math.Range): void;
    
        /**
         * Determines whether a given range is in the set. Only succeeds if the entire
         * range is available.
         *
         * @param {goog.math.Range} a The query range.
         * @return {boolean} Whether the entire requested range is set.
         */
        contains(a: goog.math.Range): boolean;
    
        /**
         * Determines whether a given value is set in the RangeSet.
         *
         * @param {number} value The value to test.
         * @return {boolean} Whether the given value is in the set.
         */
        containsValue(value: number): boolean;
    
        /**
         * Returns the union of this RangeSet with another.
         *
         * @param {goog.math.RangeSet} set Another RangeSet.
         * @return {!goog.math.RangeSet} A new RangeSet containing all values from
         *     either set.
         */
        union(set: goog.math.RangeSet): goog.math.RangeSet;
    
        /**
         * Subtracts the ranges of another set from this one, returning the result
         * as a new RangeSet.
         *
         * @param {!goog.math.RangeSet} set The RangeSet to subtract.
         * @return {!goog.math.RangeSet} A new RangeSet containing all values in this
         *     set minus the values of the input set.
         */
        difference(set: goog.math.RangeSet): goog.math.RangeSet;
    
        /**
         * Intersects this RangeSet with another.
         *
         * @param {goog.math.RangeSet} set The RangeSet to intersect with.
         * @return {!goog.math.RangeSet} A new RangeSet containing all values set in
         *     both this and the input set.
         */
        intersection(set: goog.math.RangeSet): goog.math.RangeSet;
    
        /**
         * Creates a subset of this set over the input range.
         *
         * @param {goog.math.Range} range The range to copy into the slice.
         * @return {!goog.math.RangeSet} A new RangeSet with a copy of the values in the
         *     input range.
         */
        slice(range: goog.math.Range): goog.math.RangeSet;
    
        /**
         * Creates an inverted slice of this set over the input range.
         *
         * @param {goog.math.Range} range The range to copy into the slice.
         * @return {!goog.math.RangeSet} A new RangeSet containing inverted values from
         *     the original over the input range.
         */
        inverse(range: goog.math.Range): goog.math.RangeSet;
    
        /**
         * @return {number} The sum of the lengths of ranges covered in the set.
         */
        coveredLength(): number;
    
        /**
         * @return {goog.math.Range} The total range this set covers, ignoring any
         *     gaps between ranges.
         */
        getBounds(): goog.math.Range;
    
        /**
         * @return {boolean} Whether any ranges are currently in the set.
         */
        isEmpty(): boolean;
    
        /**
         * Removes all values in the set.
         */
        clear(): void;
    
        /**
         * Returns an iterator that iterates over the ranges in the RangeSet.
         *
         * @param {boolean=} opt_keys Ignored for RangeSets.
         * @return {!goog.iter.Iterator} An iterator over the values in the set.
         */
        __iterator__(opt_keys?: boolean): goog.iter.Iterator;
    }

    /**
     * Class for representing rectangular regions.
     * @param {number} x Left.
     * @param {number} y Top.
     * @param {number} w Width.
     * @param {number} h Height.
     * @constructor
     */
    class Rect {
        /**
         * Class for representing rectangular regions.
         * @param {number} x Left.
         * @param {number} y Top.
         * @param {number} w Width.
         * @param {number} h Height.
         * @constructor
         */
        constructor(x: number, y: number, w: number, h: number);
    
        /**
         * @return {!goog.math.Rect} A new copy of this Rectangle.
         */
        clone(): goog.math.Rect;
    
        /**
         * Returns a new Box object with the same position and dimensions as this
         * rectangle.
         * @return {!goog.math.Box} A new Box representation of this Rectangle.
         */
        toBox(): goog.math.Box;
    
        /**
         * Returns a nice string representing size and dimensions of rectangle.
         * @return {string} In the form (50, 73 - 75w x 25h).
         * @override
         */
        toString(): string;
    
        /**
         * Computes the intersection of this rectangle and the rectangle parameter.  If
         * there is no intersection, returns false and leaves this rectangle as is.
         * @param {goog.math.Rect} rect A Rectangle.
         * @return {boolean} True iff this rectangle intersects with the parameter.
         */
        intersection(rect: goog.math.Rect): boolean;
    
        /**
         * Returns whether a rectangle intersects this rectangle.
         * @param {goog.math.Rect} rect A rectangle.
         * @return {boolean} Whether rect intersects this rectangle.
         */
        intersects(rect: goog.math.Rect): boolean;
    
        /**
         * Computes the difference regions between this rectangle and {@code rect}. The
         * return value is an array of 0 to 4 rectangles defining the remaining regions
         * of this rectangle after the other has been subtracted.
         * @param {goog.math.Rect} rect A Rectangle.
         * @return {!Array.<!goog.math.Rect>} An array with 0 to 4 rectangles which
         *     together define the difference area of rectangle a minus rectangle b.
         */
        difference(rect: goog.math.Rect): goog.math.Rect[];
    
        /**
         * Expand this rectangle to also include the area of the given rectangle.
         * @param {goog.math.Rect} rect The other rectangle.
         */
        boundingRect(rect: goog.math.Rect): void;
    
        /**
         * Tests whether this rectangle entirely contains another rectangle or
         * coordinate.
         *
         * @param {goog.math.Rect|goog.math.Coordinate} another The rectangle or
         *     coordinate to test for containment.
         * @return {boolean} Whether this rectangle contains given rectangle or
         *     coordinate.
         */
        contains(another: any /*goog.math.Rect|goog.math.Coordinate*/): boolean;
    
        /**
         * @param {!goog.math.Coordinate} point A coordinate.
         * @return {number} The squared distance between the point and the closest
         *     point inside the rectangle. Returns 0 if the point is inside the
         *     rectangle.
         */
        squaredDistance(point: goog.math.Coordinate): number;
    
        /**
         * @param {!goog.math.Coordinate} point A coordinate.
         * @return {number} The distance between the point and the closest point
         *     inside the rectangle. Returns 0 if the point is inside the rectangle.
         */
        distance(point: goog.math.Coordinate): number;
    
        /**
         * @return {!goog.math.Size} The size of this rectangle.
         */
        getSize(): goog.math.Size;
    
        /**
         * @return {!goog.math.Coordinate} A new coordinate for the top-left corner of
         *     the rectangle.
         */
        getTopLeft(): goog.math.Coordinate;
    
        /**
         * @return {!goog.math.Coordinate} A new coordinate for the center of the
         *     rectangle.
         */
        getCenter(): goog.math.Coordinate;
    
        /**
         * @return {!goog.math.Coordinate} A new coordinate for the bottom-right corner
         *     of the rectangle.
         */
        getBottomRight(): goog.math.Coordinate;
    
        /**
         * Rounds the fields to the next larger integer values.
         * @return {!goog.math.Rect} This rectangle with ceil'd fields.
         */
        ceil(): goog.math.Rect;
    
        /**
         * Rounds the fields to the next smaller integer values.
         * @return {!goog.math.Rect} This rectangle with floored fields.
         */
        floor(): goog.math.Rect;
    
        /**
         * Rounds the fields to nearest integer values.
         * @return {!goog.math.Rect} This rectangle with rounded fields.
         */
        round(): goog.math.Rect;
    
        /**
         * Translates this rectangle by the given offsets. If a
         * {@code goog.math.Coordinate} is given, then the left and top values are
         * translated by the coordinate's x and y values. Otherwise, top and left are
         * translated by {@code tx} and {@code opt_ty} respectively.
         * @param {number|goog.math.Coordinate} tx The value to translate left by or the
         *     the coordinate to translate this rect by.
         * @param {number=} opt_ty The value to translate top by.
         * @return {!goog.math.Rect} This rectangle after translating.
         */
        translate(tx: any /*number|goog.math.Coordinate*/, opt_ty?: number): goog.math.Rect;
    
        /**
         * Scales this rectangle by the given scale factors. The left and width values
         * are scaled by {@code sx} and the top and height values are scaled by
         * {@code opt_sy}.  If {@code opt_sy} is not given, then all fields are scaled
         * by {@code sx}.
         * @param {number} sx The scale factor to use for the x dimension.
         * @param {number=} opt_sy The scale factor to use for the y dimension.
         * @return {!goog.math.Rect} This rectangle after scaling.
         */
        scale(sx: number, opt_sy?: number): goog.math.Rect;
    }

    /**
     * Class for representing sizes consisting of a width and height. Undefined
     * width and height support is deprecated and results in compiler warning.
     * @param {number} width Width.
     * @param {number} height Height.
     * @constructor
     */
    class Size {
        /**
         * Class for representing sizes consisting of a width and height. Undefined
         * width and height support is deprecated and results in compiler warning.
         * @param {number} width Width.
         * @param {number} height Height.
         * @constructor
         */
        constructor(width: number, height: number);
    
        /**
         * @return {!goog.math.Size} A new copy of the Size.
         */
        clone(): goog.math.Size;
    
        /**
         * Returns a nice string representing size.
         * @return {string} In the form (50 x 73).
         * @override
         */
        toString(): string;
    
        /**
         * @return {number} The longer of the two dimensions in the size.
         */
        getLongest(): number;
    
        /**
         * @return {number} The shorter of the two dimensions in the size.
         */
        getShortest(): number;
    
        /**
         * @return {number} The area of the size (width * height).
         */
        area(): number;
    
        /**
         * @return {number} The perimeter of the size (width + height) * 2.
         */
        perimeter(): number;
    
        /**
         * @return {number} The ratio of the size's width to its height.
         */
        aspectRatio(): number;
    
        /**
         * @return {boolean} True if the size has zero area, false if both dimensions
         *     are non-zero numbers.
         */
        isEmpty(): boolean;
    
        /**
         * Clamps the width and height parameters upward to integer values.
         * @return {!goog.math.Size} This size with ceil'd components.
         */
        ceil(): goog.math.Size;
    
        /**
         * @param {!goog.math.Size} target The target size.
         * @return {boolean} True if this Size is the same size or smaller than the
         *     target size in both dimensions.
         */
        fitsInside(target: goog.math.Size): boolean;
    
        /**
         * Clamps the width and height parameters downward to integer values.
         * @return {!goog.math.Size} This size with floored components.
         */
        floor(): goog.math.Size;
    
        /**
         * Rounds the width and height parameters to integer values.
         * @return {!goog.math.Size} This size with rounded components.
         */
        round(): goog.math.Size;
    
        /**
         * Scales this size by the given scale factors. The width and height are scaled
         * by {@code sx} and {@code opt_sy} respectively.  If {@code opt_sy} is not
         * given, then {@code sx} is used for both the width and height.
         * @param {number} sx The scale factor to use for the width.
         * @param {number=} opt_sy The scale factor to use for the height.
         * @return {!goog.math.Size} This Size object after scaling.
         */
        scale(sx: number, opt_sy?: number): goog.math.Size;
    
        /**
         * Uniformly scales the size to fit inside the dimensions of a given size. The
         * original aspect ratio will be preserved.
         *
         * This function assumes that both Sizes contain strictly positive dimensions.
         * @param {!goog.math.Size} target The target size.
         * @return {!goog.math.Size} This Size object, after optional scaling.
         */
        scaleToFit(target: goog.math.Size): goog.math.Size;
    }

    /**
     * Class for a two-dimensional vector object and assorted functions useful for
     * manipulating points.
     *
     * @param {number} x The x coordinate for the vector.
     * @param {number} y The y coordinate for the vector.
     * @constructor
     * @extends {goog.math.Coordinate}
     */
    class Vec2 extends goog.math.Coordinate {
        /**
         * Class for a two-dimensional vector object and assorted functions useful for
         * manipulating points.
         *
         * @param {number} x The x coordinate for the vector.
         * @param {number} y The y coordinate for the vector.
         * @constructor
         * @extends {goog.math.Coordinate}
         */
        constructor(x: number, y: number);
    
        /**
         * @return {!goog.math.Vec2} A new vector with the same coordinates as this one.
         * @override
         */
        clone(): goog.math.Vec2;
    
        /**
         * Returns the magnitude of the vector measured from the origin.
         * @return {number} The length of the vector.
         */
        magnitude(): number;
    
        /**
         * Returns the squared magnitude of the vector measured from the origin.
         * NOTE(brenneman): Leaving out the square root is not a significant
         * optimization in JavaScript.
         * @return {number} The length of the vector, squared.
         */
        squaredMagnitude(): number;
    
        /**
         * @return {!goog.math.Vec2} This coordinate after scaling.
         * @override
         */
        scale: any /*missing*/;
    
        /**
         * Reverses the sign of the vector. Equivalent to scaling the vector by -1.
         * @return {!goog.math.Vec2} The inverted vector.
         */
        invert(): goog.math.Vec2;
    
        /**
         * Normalizes the current vector to have a magnitude of 1.
         * @return {!goog.math.Vec2} The normalized vector.
         */
        normalize(): goog.math.Vec2;
    
        /**
         * Adds another vector to this vector in-place.
         * @param {!goog.math.Coordinate} b The vector to add.
         * @return {!goog.math.Vec2}  This vector with {@code b} added.
         */
        add(b: goog.math.Coordinate): goog.math.Vec2;
    
        /**
         * Subtracts another vector from this vector in-place.
         * @param {!goog.math.Coordinate} b The vector to subtract.
         * @return {!goog.math.Vec2} This vector with {@code b} subtracted.
         */
        subtract(b: goog.math.Coordinate): goog.math.Vec2;
    
        /**
         * Rotates this vector in-place by a given angle, specified in radians.
         * @param {number} angle The angle, in radians.
         * @return {!goog.math.Vec2} This vector rotated {@code angle} radians.
         */
        rotate(angle: number): goog.math.Vec2;
    
        /**
         * Compares this vector with another for equality.
         * @param {!goog.math.Vec2} b The other vector.
         * @return {boolean} Whether this vector has the same x and y as the given
         *     vector.
         */
        equals(b: goog.math.Vec2): boolean;
    }

    /**
     * Class for a three-dimensional vector object and assorted functions useful for
     * manipulation.
     *
     * Inherits from goog.math.Coordinate3 so that a Vec3 may be passed in to any
     * function that requires a Coordinate.
     *
     * @param {number} x The x value for the vector.
     * @param {number} y The y value for the vector.
     * @param {number} z The z value for the vector.
     * @constructor
     * @extends {goog.math.Coordinate3}
     */
    class Vec3 extends goog.math.Coordinate3 {
        /**
         * Class for a three-dimensional vector object and assorted functions useful for
         * manipulation.
         *
         * Inherits from goog.math.Coordinate3 so that a Vec3 may be passed in to any
         * function that requires a Coordinate.
         *
         * @param {number} x The x value for the vector.
         * @param {number} y The y value for the vector.
         * @param {number} z The z value for the vector.
         * @constructor
         * @extends {goog.math.Coordinate3}
         */
        constructor(x: number, y: number, z: number);
    
        /**
         * Creates a new copy of this Vec3.
         *
         * @return {!goog.math.Vec3} A new vector with the same coordinates as this one.
         * @override
         */
        clone(): goog.math.Vec3;
    
        /**
         * Returns the magnitude of the vector measured from the origin.
         *
         * @return {number} The length of the vector.
         */
        magnitude(): number;
    
        /**
         * Returns the squared magnitude of the vector measured from the origin.
         * NOTE(brenneman): Leaving out the square root is not a significant
         * optimization in JavaScript.
         *
         * @return {number} The length of the vector, squared.
         */
        squaredMagnitude(): number;
    
        /**
         * Scales the current vector by a constant.
         *
         * @param {number} s The scale factor.
         * @return {!goog.math.Vec3} This vector, scaled.
         */
        scale(s: number): goog.math.Vec3;
    
        /**
         * Reverses the sign of the vector. Equivalent to scaling the vector by -1.
         *
         * @return {!goog.math.Vec3} This vector, inverted.
         */
        invert(): goog.math.Vec3;
    
        /**
         * Normalizes the current vector to have a magnitude of 1.
         *
         * @return {!goog.math.Vec3} This vector, normalized.
         */
        normalize(): goog.math.Vec3;
    
        /**
         * Adds another vector to this vector in-place.
         *
         * @param {goog.math.Vec3} b The vector to add.
         * @return {!goog.math.Vec3} This vector with {@code b} added.
         */
        add(b: goog.math.Vec3): goog.math.Vec3;
    
        /**
         * Subtracts another vector from this vector in-place.
         *
         * @param {goog.math.Vec3} b The vector to subtract.
         * @return {!goog.math.Vec3} This vector with {@code b} subtracted.
         */
        subtract(b: goog.math.Vec3): goog.math.Vec3;
    
        /**
         * Compares this vector with another for equality.
         *
         * @param {goog.math.Vec3} b The other vector.
         * @return {boolean} True if this vector's x, y and z equal the given vector's
         *     x, y, and z, respectively.
         */
        equals(b: goog.math.Vec3): boolean;
    }
}

declare module 'goog.math.Matrix' {

    /**
     * Creates a square identity matrix. i.e. for n = 3:
     * <pre>
     * [ 1 0 0 ]
     * [ 0 1 0 ]
     * [ 0 0 1 ]
     * </pre>
     * @param {number} n The size of the square identity matrix.
     * @return {!goog.math.Matrix} Identity matrix of width and height {@code n}.
     */
    function createIdentityMatrix(n: number): goog.math.Matrix;

    /**
     * Calls a function for each cell in a matrix.
     * @param {goog.math.Matrix} matrix The matrix to iterate over.
     * @param {Function} fn The function to call for every element. This function
     *     takes 4 arguments (value, i, j, and the matrix)
     *     and the return value is irrelevant.
     * @param {Object=} opt_obj The object to be used as the value of 'this'
     *     within {@code fn}.
     */
    function forEach(matrix: goog.math.Matrix, fn: Function, opt_obj?: Object): void;

    /**
     * Tests whether an array is a valid matrix.  A valid array is an array of
     * arrays where all arrays are of the same length and all elements are numbers.
     * @param {Array} arr An array to test.
     * @return {boolean} Whether the array is a valid matrix.
     */
    function isValidArray(arr: any[]): boolean;

    /**
     * Calls a function for every cell in a matrix and inserts the result into a
     * new matrix of equal dimensions.
     * @param {goog.math.Matrix} matrix The matrix to iterate over.
     * @param {Function} fn The function to call for every element. This function
     *                     takes 4 arguments (value, i, j and the matrix)
     *                     and should return something. The result will be inserted
     *                     into a new matrix.
     * @param {Object=} opt_obj The object to be used as the value of 'this'
     *     within {@code fn}.
     * @return {!goog.math.Matrix} A new matrix with the results from {@code fn}.
     */
    function map(matrix: goog.math.Matrix, fn: Function, opt_obj?: Object): goog.math.Matrix;
}

declare module 'goog.math.Path' {

    /**
     * Path segment types.
     * @enum {number}
     */
    enum Segment { MOVETO, LINETO, CURVETO, ARCTO, CLOSE } 

    /**
     * Returns the number of points for a segment type.
     *
     * @param {number} segment The segment type.
     * @return {number} The number of points.
     */
    function getSegmentCount(segment: number): number;

    /**
     * Creates a copy of the given path, replacing {@code arcTo} with
     * {@code arcToAsCurves}. The resulting path is simplified and can
     * be transformed.
     *
     * @param {!goog.math.Path} src The path to simplify.
     * @return {!goog.math.Path} A new simplified path.
     */
    function createSimplifiedPath(src: goog.math.Path): goog.math.Path;
}

declare module 'goog.math.paths' {

    /**
     * Defines a regular n-gon by specifing the center, a vertex, and the total
     * number of vertices.
     * @param {goog.math.Coordinate} center The center point.
     * @param {goog.math.Coordinate} vertex The vertex, which implicitly defines
     *     a radius as well.
     * @param {number} n The number of vertices.
     * @return {!goog.math.Path} The path.
     */
    function createRegularNGon(center: goog.math.Coordinate, vertex: goog.math.Coordinate, n: number): goog.math.Path;

    /**
     * Defines an arrow.
     * @param {goog.math.Coordinate} a Point A.
     * @param {goog.math.Coordinate} b Point B.
     * @param {?number} aHead The size of the arrow head at point A.
     *     0 omits the head.
     * @param {?number} bHead The size of the arrow head at point B.
     *     0 omits the head.
     * @return {!goog.math.Path} The path.
     */
    function createArrow(a: goog.math.Coordinate, b: goog.math.Coordinate, aHead: number, bHead: number): goog.math.Path;
}

declare module 'goog.math.Range' {

    /**
     * Creates a goog.math.Range from an array of two numbers.
     * @param {!Array.<number>} pair
     * @return {!goog.math.Range}
     */
    function fromPair(pair: number[]): goog.math.Range;

    /**
     * Compares ranges for equality.
     * @param {goog.math.Range} a A Range.
     * @param {goog.math.Range} b A Range.
     * @return {boolean} True iff both the starts and the ends of the ranges are
     *     equal, or if both ranges are null.
     */
    function equals(a: goog.math.Range, b: goog.math.Range): boolean;

    /**
     * Given two ranges on the same dimension, this method returns the intersection
     * of those ranges.
     * @param {goog.math.Range} a A Range.
     * @param {goog.math.Range} b A Range.
     * @return {goog.math.Range} A new Range representing the intersection of two
     *     ranges, or null if there is no intersection. Ranges are assumed to
     *     include their end points, and the intersection can be a point.
     */
    function intersection(a: goog.math.Range, b: goog.math.Range): goog.math.Range;

    /**
     * Given two ranges on the same dimension, determines whether they intersect.
     * @param {goog.math.Range} a A Range.
     * @param {goog.math.Range} b A Range.
     * @return {boolean} Whether they intersect.
     */
    function hasIntersection(a: goog.math.Range, b: goog.math.Range): boolean;

    /**
     * Given two ranges on the same dimension, this returns a range that covers
     * both ranges.
     * @param {goog.math.Range} a A Range.
     * @param {goog.math.Range} b A Range.
     * @return {!goog.math.Range} A new Range representing the bounding
     *     range.
     */
    function boundingRange(a: goog.math.Range, b: goog.math.Range): goog.math.Range;

    /**
     * Given two ranges, returns true if the first range completely overlaps the
     * second.
     * @param {goog.math.Range} a The first Range.
     * @param {goog.math.Range} b The second Range.
     * @return {boolean} True if b is contained inside a, false otherwise.
     */
    function contains(a: goog.math.Range, b: goog.math.Range): boolean;

    /**
     * Given a range and a point, returns true if the range contains the point.
     * @param {goog.math.Range} range The range.
     * @param {number} p The point.
     * @return {boolean} True if p is contained inside range, false otherwise.
     */
    function containsPoint(range: goog.math.Range, p: number): boolean;
}

declare module 'goog.math.RangeSet' {

    /**
     * Compares two sets for equality.
     *
     * @param {goog.math.RangeSet} a A range set.
     * @param {goog.math.RangeSet} b A range set.
     * @return {boolean} Whether both sets contain the same values.
     */
    function equals(a: goog.math.RangeSet, b: goog.math.RangeSet): boolean;
}

declare module 'goog.math.Rect' {

    /**
     * Creates a new Rect object with the same position and dimensions as a given
     * Box.  Note that this is only the inverse of toBox if left/top are defined.
     * @param {goog.math.Box} box A box.
     * @return {!goog.math.Rect} A new Rect initialized with the box's position
     *     and size.
     */
    function createFromBox(box: goog.math.Box): goog.math.Rect;

    /**
     * Compares rectangles for equality.
     * @param {goog.math.Rect} a A Rectangle.
     * @param {goog.math.Rect} b A Rectangle.
     * @return {boolean} True iff the rectangles have the same left, top, width,
     *     and height, or if both are null.
     */
    function equals(a: goog.math.Rect, b: goog.math.Rect): boolean;

    /**
     * Returns the intersection of two rectangles. Two rectangles intersect if they
     * touch at all, for example, two zero width and height rectangles would
     * intersect if they had the same top and left.
     * @param {goog.math.Rect} a A Rectangle.
     * @param {goog.math.Rect} b A Rectangle.
     * @return {goog.math.Rect} A new intersection rect (even if width and height
     *     are 0), or null if there is no intersection.
     */
    function intersection(a: goog.math.Rect, b: goog.math.Rect): goog.math.Rect;

    /**
     * Returns whether two rectangles intersect. Two rectangles intersect if they
     * touch at all, for example, two zero width and height rectangles would
     * intersect if they had the same top and left.
     * @param {goog.math.Rect} a A Rectangle.
     * @param {goog.math.Rect} b A Rectangle.
     * @return {boolean} Whether a and b intersect.
     */
    function intersects(a: goog.math.Rect, b: goog.math.Rect): boolean;

    /**
     * Computes the difference regions between two rectangles. The return value is
     * an array of 0 to 4 rectangles defining the remaining regions of the first
     * rectangle after the second has been subtracted.
     * @param {goog.math.Rect} a A Rectangle.
     * @param {goog.math.Rect} b A Rectangle.
     * @return {!Array.<!goog.math.Rect>} An array with 0 to 4 rectangles which
     *     together define the difference area of rectangle a minus rectangle b.
     */
    function difference(a: goog.math.Rect, b: goog.math.Rect): goog.math.Rect[];

    /**
     * Returns a new rectangle which completely contains both input rectangles.
     * @param {goog.math.Rect} a A rectangle.
     * @param {goog.math.Rect} b A rectangle.
     * @return {goog.math.Rect} A new bounding rect, or null if either rect is
     *     null.
     */
    function boundingRect(a: goog.math.Rect, b: goog.math.Rect): goog.math.Rect;
}

declare module 'goog.math.Size' {

    /**
     * Compares sizes for equality.
     * @param {goog.math.Size} a A Size.
     * @param {goog.math.Size} b A Size.
     * @return {boolean} True iff the sizes have equal widths and equal
     *     heights, or if both are null.
     */
    function equals(a: goog.math.Size, b: goog.math.Size): boolean;
}

declare module 'goog.math.tdma' {

    /**
     * Solves a linear system where the matrix is square tri-diagonal. That is,
     * given a system of equations:
     *
     * A * result = vecRight,
     *
     * this class computes result = inv(A) * vecRight, where A has the special form
     * of a tri-diagonal matrix:
     *
     *    |dia(0) sup(0)   0    0     ...   0|
     *    |sub(0) dia(1) sup(1) 0     ...   0|
     * A =|                ...               |
     *    |0 ... 0 sub(n-2) dia(n-1) sup(n-1)|
     *    |0 ... 0    0     sub(n-1)   dia(n)|
     *
     * @param {!Array.<number>} subDiag The sub diagonal of the matrix.
     * @param {!Array.<number>} mainDiag The main diagonal of the matrix.
     * @param {!Array.<number>} supDiag The super diagonal of the matrix.
     * @param {!Array.<number>} vecRight The right vector of the system
     *     of equations.
     * @param {Array.<number>=} opt_result The optional array to store the result.
     * @return {!Array.<number>} The vector that is the solution to the system.
     */
    function solve(subDiag: number[], mainDiag: number[], supDiag: number[], vecRight: number[], opt_result?: number[]): number[];
}

declare module 'goog.math.Vec2' {

    /**
     * @return {!goog.math.Vec2} A random unit-length vector.
     */
    function randomUnit(): goog.math.Vec2;

    /**
     * @return {!goog.math.Vec2} A random vector inside the unit-disc.
     */
    function random(): goog.math.Vec2;

    /**
     * Returns a new Vec2 object from a given coordinate.
     * @param {!goog.math.Coordinate} a The coordinate.
     * @return {!goog.math.Vec2} A new vector object.
     */
    function fromCoordinate(a: goog.math.Coordinate): goog.math.Vec2;

    /**
     * Rotates a vector by a given angle, specified in radians, relative to a given
     * axis rotation point. The returned vector is a newly created instance - no
     * in-place changes are done.
     * @param {!goog.math.Vec2} v A vector.
     * @param {!goog.math.Vec2} axisPoint The rotation axis point.
     * @param {number} angle The angle, in radians.
     * @return {!goog.math.Vec2} The rotated vector in a newly created instance.
     */
    function rotateAroundPoint(v: goog.math.Vec2, axisPoint: goog.math.Vec2, angle: number): goog.math.Vec2;

    /**
     * Returns the distance between two vectors.
     * @param {!goog.math.Coordinate} a The first vector.
     * @param {!goog.math.Coordinate} b The second vector.
     * @return {number} The distance.
     */
    var distance: any /*missing*/;

    /**
     * Returns the squared distance between two vectors.
     * @param {!goog.math.Coordinate} a The first vector.
     * @param {!goog.math.Coordinate} b The second vector.
     * @return {number} The squared distance.
     */
    var squaredDistance: any /*missing*/;

    /**
     * Compares vectors for equality.
     * @param {!goog.math.Coordinate} a The first vector.
     * @param {!goog.math.Coordinate} b The second vector.
     * @return {boolean} Whether the vectors have the same x and y coordinates.
     */
    var equals: any /*missing*/;

    /**
     * Returns the sum of two vectors as a new Vec2.
     * @param {!goog.math.Coordinate} a The first vector.
     * @param {!goog.math.Coordinate} b The second vector.
     * @return {!goog.math.Vec2} The sum vector.
     */
    function sum(a: goog.math.Coordinate, b: goog.math.Coordinate): goog.math.Vec2;

    /**
     * Returns the difference between two vectors as a new Vec2.
     * @param {!goog.math.Coordinate} a The first vector.
     * @param {!goog.math.Coordinate} b The second vector.
     * @return {!goog.math.Vec2} The difference vector.
     */
    function difference(a: goog.math.Coordinate, b: goog.math.Coordinate): goog.math.Vec2;

    /**
     * Returns the dot-product of two vectors.
     * @param {!goog.math.Coordinate} a The first vector.
     * @param {!goog.math.Coordinate} b The second vector.
     * @return {number} The dot-product of the two vectors.
     */
    function dot(a: goog.math.Coordinate, b: goog.math.Coordinate): number;

    /**
     * Returns a new Vec2 that is the linear interpolant between vectors a and b at
     * scale-value x.
     * @param {!goog.math.Coordinate} a Vector a.
     * @param {!goog.math.Coordinate} b Vector b.
     * @param {number} x The proportion between a and b.
     * @return {!goog.math.Vec2} The interpolated vector.
     */
    function lerp(a: goog.math.Coordinate, b: goog.math.Coordinate, x: number): goog.math.Vec2;
}

declare module 'goog.math.Vec3' {

    /**
     * Generates a random unit vector.
     *
     * http://mathworld.wolfram.com/SpherePointPicking.html
     * Using (6), (7), and (8) to generate coordinates.
     * @return {!goog.math.Vec3} A random unit-length vector.
     */
    function randomUnit(): goog.math.Vec3;

    /**
     * Generates a random vector inside the unit sphere.
     *
     * @return {!goog.math.Vec3} A random vector.
     */
    function random(): goog.math.Vec3;

    /**
     * Returns a new Vec3 object from a given coordinate.
     *
     * @param {goog.math.Coordinate3} a The coordinate.
     * @return {!goog.math.Vec3} A new vector object.
     */
    function fromCoordinate3(a: goog.math.Coordinate3): goog.math.Vec3;

    /**
     * Returns the distance between two vectors.
     *
     * @param {goog.math.Vec3} a The first vector.
     * @param {goog.math.Vec3} b The second vector.
     * @return {number} The distance.
     */
    var distance: any /*missing*/;

    /**
     * Returns the squared distance between two vectors.
     *
     * @param {goog.math.Vec3} a The first vector.
     * @param {goog.math.Vec3} b The second vector.
     * @return {number} The squared distance.
     */
    var squaredDistance: any /*missing*/;

    /**
     * Compares vectors for equality.
     *
     * @param {goog.math.Vec3} a The first vector.
     * @param {goog.math.Vec3} b The second vector.
     * @return {boolean} True if the vectors have equal x, y, and z coordinates.
     */
    var equals: any /*missing*/;

    /**
     * Returns the sum of two vectors as a new Vec3.
     *
     * @param {goog.math.Vec3} a The first vector.
     * @param {goog.math.Vec3} b The second vector.
     * @return {!goog.math.Vec3} The sum vector.
     */
    function sum(a: goog.math.Vec3, b: goog.math.Vec3): goog.math.Vec3;

    /**
     * Returns the difference of two vectors as a new Vec3.
     *
     * @param {goog.math.Vec3} a The first vector.
     * @param {goog.math.Vec3} b The second vector.
     * @return {!goog.math.Vec3} The difference vector.
     */
    function difference(a: goog.math.Vec3, b: goog.math.Vec3): goog.math.Vec3;

    /**
     * Returns the dot-product of two vectors.
     *
     * @param {goog.math.Vec3} a The first vector.
     * @param {goog.math.Vec3} b The second vector.
     * @return {number} The dot-product of the two vectors.
     */
    function dot(a: goog.math.Vec3, b: goog.math.Vec3): number;

    /**
     * Returns the cross-product of two vectors.
     *
     * @param {goog.math.Vec3} a The first vector.
     * @param {goog.math.Vec3} b The second vector.
     * @return {!goog.math.Vec3} The cross-product of the two vectors.
     */
    function cross(a: goog.math.Vec3, b: goog.math.Vec3): goog.math.Vec3;

    /**
     * Returns a new Vec3 that is the linear interpolant between vectors a and b at
     * scale-value x.
     *
     * @param {goog.math.Vec3} a Vector a.
     * @param {goog.math.Vec3} b Vector b.
     * @param {number} x The proportion between a and b.
     * @return {!goog.math.Vec3} The interpolated vector.
     */
    function lerp(a: goog.math.Vec3, b: goog.math.Vec3, x: number): goog.math.Vec3;
}

