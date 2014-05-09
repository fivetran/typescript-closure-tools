/// <reference path="../../../../globals.d.ts" />

declare module goog.graphics.ext.coordinates {

    /**
     * Determines if the given coordinate is special - i.e. not just a number.
     * @param {string|number|null} coord The coordinate to test.
     * @return {boolean} Whether the coordinate is special.
     */
    function isSpecial(coord: string): boolean;
    /**
     * Determines if the given coordinate is special - i.e. not just a number.
     * @param {string|number|null} coord The coordinate to test.
     * @return {boolean} Whether the coordinate is special.
     */
    function isSpecial(coord: number): boolean;
    /**
     * Determines if the given coordinate is special - i.e. not just a number.
     * @param {string|number|null} coord The coordinate to test.
     * @return {boolean} Whether the coordinate is special.
     */
    function isSpecial(coord: any /*null*/): boolean;

    /**
     * Returns the value of the given expression in the given context.
     *
     * Should be treated as package scope.
     *
     * @param {string|number} coord The coordinate to convert.
     * @param {number} size The size of the parent element.
     * @param {number} scale The ratio of pixels to units.
     * @return {number} The number of coordinate space units that corresponds to
     *     this coordinate.
     */
    function computeValue(coord: string, size: number, scale: number): number;
    /**
     * Returns the value of the given expression in the given context.
     *
     * Should be treated as package scope.
     *
     * @param {string|number} coord The coordinate to convert.
     * @param {number} size The size of the parent element.
     * @param {number} scale The ratio of pixels to units.
     * @return {number} The number of coordinate space units that corresponds to
     *     this coordinate.
     */
    function computeValue(coord: number, size: number, scale: number): number;

    /**
     * Converts the given coordinate to a number value in units.
     *
     * Should be treated as package scope.
     *
     * @param {string|number} coord The coordinate to retrieve the value for.
     * @param {boolean|undefined} forMaximum Whether we are computing the largest
     *     value this coordinate would be in a parent of no size.  The container
     *     size in this case should be set to the size of the current element.
     * @param {number} containerSize The unit value of the size of the container of
     *     this element.  Should be set to the minimum width of this element if
     *     forMaximum is true.
     * @param {number} scale The ratio of pixels to units.
     * @param {Object=} opt_cache Optional (but highly recommend) object to store
     *     cached computations in.  The calling class should manage clearing out
     *     the cache when the scale or containerSize changes.
     * @return {number} The correct number of coordinate space units.
     */
    function getValue(coord: string, forMaximum: boolean, containerSize: number, scale: number, opt_cache?: Object): number;
    /**
     * Converts the given coordinate to a number value in units.
     *
     * Should be treated as package scope.
     *
     * @param {string|number} coord The coordinate to retrieve the value for.
     * @param {boolean|undefined} forMaximum Whether we are computing the largest
     *     value this coordinate would be in a parent of no size.  The container
     *     size in this case should be set to the size of the current element.
     * @param {number} containerSize The unit value of the size of the container of
     *     this element.  Should be set to the minimum width of this element if
     *     forMaximum is true.
     * @param {number} scale The ratio of pixels to units.
     * @param {Object=} opt_cache Optional (but highly recommend) object to store
     *     cached computations in.  The calling class should manage clearing out
     *     the cache when the scale or containerSize changes.
     * @return {number} The correct number of coordinate space units.
     */
    function getValue(coord: string, forMaximum: any /*undefined*/, containerSize: number, scale: number, opt_cache?: Object): number;
    /**
     * Converts the given coordinate to a number value in units.
     *
     * Should be treated as package scope.
     *
     * @param {string|number} coord The coordinate to retrieve the value for.
     * @param {boolean|undefined} forMaximum Whether we are computing the largest
     *     value this coordinate would be in a parent of no size.  The container
     *     size in this case should be set to the size of the current element.
     * @param {number} containerSize The unit value of the size of the container of
     *     this element.  Should be set to the minimum width of this element if
     *     forMaximum is true.
     * @param {number} scale The ratio of pixels to units.
     * @param {Object=} opt_cache Optional (but highly recommend) object to store
     *     cached computations in.  The calling class should manage clearing out
     *     the cache when the scale or containerSize changes.
     * @return {number} The correct number of coordinate space units.
     */
    function getValue(coord: number, forMaximum: boolean, containerSize: number, scale: number, opt_cache?: Object): number;
    /**
     * Converts the given coordinate to a number value in units.
     *
     * Should be treated as package scope.
     *
     * @param {string|number} coord The coordinate to retrieve the value for.
     * @param {boolean|undefined} forMaximum Whether we are computing the largest
     *     value this coordinate would be in a parent of no size.  The container
     *     size in this case should be set to the size of the current element.
     * @param {number} containerSize The unit value of the size of the container of
     *     this element.  Should be set to the minimum width of this element if
     *     forMaximum is true.
     * @param {number} scale The ratio of pixels to units.
     * @param {Object=} opt_cache Optional (but highly recommend) object to store
     *     cached computations in.  The calling class should manage clearing out
     *     the cache when the scale or containerSize changes.
     * @return {number} The correct number of coordinate space units.
     */
    function getValue(coord: number, forMaximum: any /*undefined*/, containerSize: number, scale: number, opt_cache?: Object): number;
}
