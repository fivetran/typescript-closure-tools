// Generated Wed Apr 30 16:35:56 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/string.d.ts" />

declare module 'goog.color.alpha' {

    /**
     * Parses an alpha color out of a string.
     * @param {string} str Color in some format.
     * @return {Object} Contains two properties: 'hex', which is a string containing
     *     a hex representation of the color, as well as 'type', which is a string
     *     containing the type of color format passed in ('hex', 'rgb', 'named').
     */
    function parse(str: string): Object;

    /**
     * Converts a hex representation of a color to RGBA.
     * @param {string} hexColor Color to convert.
     * @return {string} string of the form 'rgba(R,G,B,A)' which can be used in
     *    styles.
     */
    function hexToRgbaStyle(hexColor: string): string;

    /**
     * Gets the hex color part of an alpha hex color. For example, from '#abcdef55'
     * return '#abcdef'.
     * @param {string} colorWithAlpha The alpha hex color to get the hex color from.
     * @return {string} The hex color where the alpha part has been stripped off.
     */
    function extractHexColor(colorWithAlpha: string): string;

    /**
     * Gets the alpha color part of an alpha hex color. For example, from
     * '#abcdef55' return '55'. The result is guaranteed to be two characters long.
     * @param {string} colorWithAlpha The alpha hex color to get the hex color from.
     * @return {string} The hex color where the alpha part has been stripped off.
     */
    function extractAlpha(colorWithAlpha: string): string;

    /**
     * Converts an 8-hex representation of a color to RGBA.
     * @param {string} hexColor Color to convert.
     * @return {Array} array containing [r, g, b] as ints in [0, 255].
     */
    function hexToRgba(hexColor: string): any[];

    /**
     * Converts a color from RGBA to hex representation.
     * @param {number} r Amount of red, int between 0 and 255.
     * @param {number} g Amount of green, int between 0 and 255.
     * @param {number} b Amount of blue, int between 0 and 255.
     * @param {number} a Amount of alpha, float between 0 and 1.
     * @return {string} hex representation of the color.
     */
    function rgbaToHex(r: number, g: number, b: number, a: number): string;

    /**
     * Converts a color from HSLA to hex representation.
     * @param {number} h Amount of hue, int between 0 and 360.
     * @param {number} s Amount of saturation, int between 0 and 100.
     * @param {number} l Amount of lightness, int between 0 and 100.
     * @param {number} a Amount of alpha, float between 0 and 1.
     * @return {string} hex representation of the color.
     */
    function hslaToHex(h: number, s: number, l: number, a: number): string;

    /**
     * Converts a color from RGBA to hex representation.
     * @param {Array.<number>} rgba Array of [r, g, b, a], with r, g, b in [0, 255]
     *     and a in [0, 1].
     * @return {string} hex representation of the color.
     */
    function rgbaArrayToHex(rgba: number[]): string;

    /**
     * Converts a color from RGBA to an RGBA style string.
     * @param {number} r Value of red, in [0, 255].
     * @param {number} g Value of green, in [0, 255].
     * @param {number} b Value of blue, in [0, 255].
     * @param {number} a Value of alpha, in [0, 1].
     * @return {string} An 'rgba(r,g,b,a)' string ready for use in a CSS rule.
     */
    function rgbaToRgbaStyle(r: number, g: number, b: number, a: number): string;

    /**
     * Converts a color from RGBA to an RGBA style string.
     * @param {(Array.<number>|Float32Array)} rgba Array of [r, g, b, a],
     *     with r, g, b in [0, 255] and a in [0, 1].
     * @return {string} An 'rgba(r,g,b,a)' string ready for use in a CSS rule.
     */
    function rgbaArrayToRgbaStyle(rgba: any /*number[]|Float32Array*/): string;

    /**
     * Converts a color from HSLA to hex representation.
     * @param {Array.<number>} hsla Array of [h, s, l, a], where h is an integer in
     *     [0, 360], s and l are integers in [0, 100], and a is in [0, 1].
     * @return {string} hex representation of the color, such as '#af457eff'.
     */
    function hslaArrayToHex(hsla: number[]): string;

    /**
     * Converts a color from HSLA to an RGBA style string.
     * @param {Array.<number>} hsla Array of [h, s, l, a], where h is and integer in
     *     [0, 360], s and l are integers in [0, 100], and a is in [0, 1].
     * @return {string} An 'rgba(r,g,b,a)' string ready for use in a CSS rule.
     */
    function hslaArrayToRgbaStyle(hsla: number[]): string;

    /**
     * Converts a color from HSLA to an RGBA style string.
     * @param {number} h Amount of hue, int between 0 and 360.
     * @param {number} s Amount of saturation, int between 0 and 100.
     * @param {number} l Amount of lightness, int between 0 and 100.
     * @param {number} a Amount of alpha, float between 0 and 1.
     * @return {string} An 'rgba(r,g,b,a)' string ready for use in a CSS rule.
     *     styles.
     */
    function hslaToRgbaStyle(h: number, s: number, l: number, a: number): string;

    /**
     * Converts a color from HSLA color space to RGBA color space.
     * @param {number} h Amount of hue, int between 0 and 360.
     * @param {number} s Amount of saturation, int between 0 and 100.
     * @param {number} l Amount of lightness, int between 0 and 100.
     * @param {number} a Amount of alpha, float between 0 and 1.
     * @return {Array.<number>} [r, g, b, a] values for the color, where r, g, b
     *     are integers in [0, 255] and a is a float in [0, 1].
     */
    function hslaToRgba(h: number, s: number, l: number, a: number): number[];

    /**
     * Converts a color from RGBA color space to HSLA color space.
     * Modified from {@link http://en.wikipedia.org/wiki/HLS_color_space}.
     * @param {number} r Value of red, in [0, 255].
     * @param {number} g Value of green, in [0, 255].
     * @param {number} b Value of blue, in [0, 255].
     * @param {number} a Value of alpha, in [0, 255].
     * @return {Array.<number>} [h, s, l, a] values for the color, with h an int in
     *     [0, 360] and s, l and a in [0, 1].
     */
    function rgbaToHsla(r: number, g: number, b: number, a: number): number[];

    /**
     * Converts a color from RGBA color space to HSLA color space.
     * @param {Array.<number>} rgba [r, g, b, a] values for the color, each in
     *     [0, 255].
     * @return {Array.<number>} [h, s, l, a] values for the color, with h in
     *     [0, 360] and s, l and a in [0, 1].
     */
    function rgbaArrayToHsla(rgba: number[]): number[];

    /**
     * Converts from h,s,v,a values to a hex string
     * @param {number} h Hue, in [0, 1].
     * @param {number} s Saturation, in [0, 1].
     * @param {number} v Value, in [0, 255].
     * @param {number} a Alpha, in [0, 1].
     * @return {string} hex representation of the color.
     */
    function hsvaToHex(h: number, s: number, v: number, a: number): string;

    /**
     * Converts from an HSVA array to a hex string
     * @param {Array} hsva Array of [h, s, v, a] in
     *     [[0, 1], [0, 1], [0, 255], [0, 1]].
     * @return {string} hex representation of the color.
     */
    function hsvaArrayToHex(hsva: any[]): string;
}

declare module 'goog.color' {

    /**
     * RGB color representation. An array containing three elements [r, g, b],
     * each an integer in [0, 255], representing the red, green, and blue components
     * of the color respectively.
     * @typedef {Array.<number>}
     */
    interface Rgb extends Array<number> { }

    /**
     * HSV color representation. An array containing three elements [h, s, v]:
     * h (hue) must be an integer in [0, 360], cyclic.
     * s (saturation) must be a number in [0, 1].
     * v (value/brightness) must be an integer in [0, 255].
     * @typedef {Array.<number>}
     */
    interface Hsv extends Array<number> { }

    /**
     * HSL color representation. An array containing three elements [h, s, l]:
     * h (hue) must be an integer in [0, 360], cyclic.
     * s (saturation) must be a number in [0, 1].
     * l (lightness) must be a number in [0, 1].
     * @typedef {Array.<number>}
     */
    interface Hsl extends Array<number> { }

    /**
     * Parses a color out of a string.
     * @param {string} str Color in some format.
     * @return {{hex: string, type: string}} 'hex' is a string containing a hex
     *     representation of the color, 'type' is a string containing the type
     *     of color format passed in ('hex', 'rgb', 'named').
     */
    function parse(str: string): { hex: string, type: string };

    /**
     * Determines if the given string can be parsed as a color.
     *     {@see goog.color.parse}.
     * @param {string} str Potential color string.
     * @return {boolean} True if str is in a format that can be parsed to a color.
     */
    function isValidColor(str: string): boolean;

    /**
     * Parses red, green, blue components out of a valid rgb color string.
     * Throws Error if the color string is invalid.
     * @param {string} str RGB representation of a color.
     *    {@see goog.color.isValidRgbColor_}.
     * @return {!goog.color.Rgb} rgb representation of the color.
     */
    function parseRgb(str: string): goog.color.Rgb;

    /**
     * Converts a hex representation of a color to RGB.
     * @param {string} hexColor Color to convert.
     * @return {string} string of the form 'rgb(R,G,B)' which can be used in
     *    styles.
     */
    function hexToRgbStyle(hexColor: string): string;

    /**
     * Normalize an hex representation of a color
     * @param {string} hexColor an hex color string.
     * @return {string} hex color in the format '#rrggbb' with all lowercase
     *     literals.
     */
    function normalizeHex(hexColor: string): string;

    /**
     * Converts a hex representation of a color to RGB.
     * @param {string} hexColor Color to convert.
     * @return {!goog.color.Rgb} rgb representation of the color.
     */
    function hexToRgb(hexColor: string): goog.color.Rgb;

    /**
     * Converts a color from RGB to hex representation.
     * @param {number} r Amount of red, int between 0 and 255.
     * @param {number} g Amount of green, int between 0 and 255.
     * @param {number} b Amount of blue, int between 0 and 255.
     * @return {string} hex representation of the color.
     */
    function rgbToHex(r: number, g: number, b: number): string;

    /**
     * Converts a color from RGB to hex representation.
     * @param {goog.color.Rgb} rgb rgb representation of the color.
     * @return {string} hex representation of the color.
     */
    function rgbArrayToHex(rgb: goog.color.Rgb): string;

    /**
     * Converts a color from RGB color space to HSL color space.
     * Modified from {@link http://en.wikipedia.org/wiki/HLS_color_space}.
     * @param {number} r Value of red, in [0, 255].
     * @param {number} g Value of green, in [0, 255].
     * @param {number} b Value of blue, in [0, 255].
     * @return {!goog.color.Hsl} hsl representation of the color.
     */
    function rgbToHsl(r: number, g: number, b: number): goog.color.Hsl;

    /**
     * Converts a color from RGB color space to HSL color space.
     * @param {goog.color.Rgb} rgb rgb representation of the color.
     * @return {!goog.color.Hsl} hsl representation of the color.
     */
    function rgbArrayToHsl(rgb: goog.color.Rgb): goog.color.Hsl;

    /**
     * Converts a color from HSL color space to RGB color space.
     * Modified from {@link http://www.easyrgb.com/math.html}
     * @param {number} h Hue, in [0, 360].
     * @param {number} s Saturation, in [0, 1].
     * @param {number} l Luminosity, in [0, 1].
     * @return {!goog.color.Rgb} rgb representation of the color.
     */
    function hslToRgb(h: number, s: number, l: number): goog.color.Rgb;

    /**
     * Converts a color from HSL color space to RGB color space.
     * @param {goog.color.Hsl} hsl hsl representation of the color.
     * @return {!goog.color.Rgb} rgb representation of the color.
     */
    function hslArrayToRgb(hsl: goog.color.Hsl): goog.color.Rgb;

    /**
     * Takes a hex value and prepends a zero if it's a single digit.
     * Small helper method for use by goog.color and friends.
     * @param {string} hex Hex value to prepend if single digit.
     * @return {string} hex value prepended with zero if it was single digit,
     *     otherwise the same value that was passed in.
     */
    function prependZeroIfNecessaryHelper(hex: string): string;

    /**
     * Takes a string a prepends a '#' sign if one doesn't exist.
     * Small helper method for use by goog.color and friends.
     * @param {string} str String to check.
     * @return {string} The value passed in, prepended with a '#' if it didn't
     *     already have one.
     */
    function prependHashIfNecessaryHelper(str: string): string;

    /**
     * Converts an HSV triplet to an RGB array.  V is brightness because b is
     *   reserved for blue in RGB.
     * @param {number} h Hue value in [0, 360].
     * @param {number} s Saturation value in [0, 1].
     * @param {number} brightness brightness in [0, 255].
     * @return {!goog.color.Rgb} rgb representation of the color.
     */
    function hsvToRgb(h: number, s: number, brightness: number): goog.color.Rgb;

    /**
     * Converts from RGB values to an array of HSV values.
     * @param {number} red Red value in [0, 255].
     * @param {number} green Green value in [0, 255].
     * @param {number} blue Blue value in [0, 255].
     * @return {!goog.color.Hsv} hsv representation of the color.
     */
    function rgbToHsv(red: number, green: number, blue: number): goog.color.Hsv;

    /**
     * Converts from an array of RGB values to an array of HSV values.
     * @param {goog.color.Rgb} rgb rgb representation of the color.
     * @return {!goog.color.Hsv} hsv representation of the color.
     */
    function rgbArrayToHsv(rgb: goog.color.Rgb): goog.color.Hsv;

    /**
     * Converts an HSV triplet to an RGB array.
     * @param {goog.color.Hsv} hsv hsv representation of the color.
     * @return {!goog.color.Rgb} rgb representation of the color.
     */
    function hsvArrayToRgb(hsv: goog.color.Hsv): goog.color.Rgb;

    /**
     * Converts a hex representation of a color to HSL.
     * @param {string} hex Color to convert.
     * @return {!goog.color.Hsv} hsv representation of the color.
     */
    function hexToHsl(hex: string): goog.color.Hsv;

    /**
     * Converts from h,s,l values to a hex string
     * @param {number} h Hue, in [0, 360].
     * @param {number} s Saturation, in [0, 1].
     * @param {number} l Luminosity, in [0, 1].
     * @return {string} hex representation of the color.
     */
    function hslToHex(h: number, s: number, l: number): string;

    /**
     * Converts from an hsl array to a hex string
     * @param {goog.color.Hsl} hsl hsl representation of the color.
     * @return {string} hex representation of the color.
     */
    function hslArrayToHex(hsl: goog.color.Hsl): string;

    /**
     * Converts a hex representation of a color to HSV
     * @param {string} hex Color to convert.
     * @return {!goog.color.Hsv} hsv representation of the color.
     */
    function hexToHsv(hex: string): goog.color.Hsv;

    /**
     * Converts from h,s,v values to a hex string
     * @param {number} h Hue, in [0, 360].
     * @param {number} s Saturation, in [0, 1].
     * @param {number} v Value, in [0, 255].
     * @return {string} hex representation of the color.
     */
    function hsvToHex(h: number, s: number, v: number): string;

    /**
     * Converts from an HSV array to a hex string
     * @param {goog.color.Hsv} hsv hsv representation of the color.
     * @return {string} hex representation of the color.
     */
    function hsvArrayToHex(hsv: goog.color.Hsv): string;

    /**
     * Calculates the Euclidean distance between two color vectors on an HSL sphere.
     * A demo of the sphere can be found at:
     * http://en.wikipedia.org/wiki/HSL_color_space
     * In short, a vector for color (H, S, L) in this system can be expressed as
     * (S*L'*cos(2*PI*H), S*L'*sin(2*PI*H), L), where L' = abs(L - 0.5), and we
     * simply calculate the 1-2 distance using these coordinates
     * @param {goog.color.Hsl} hsl1 First color in hsl representation.
     * @param {goog.color.Hsl} hsl2 Second color in hsl representation.
     * @return {number} Distance between the two colors, in the range [0, 1].
     */
    function hslDistance(hsl1: goog.color.Hsl, hsl2: goog.color.Hsl): number;

    /**
     * Blend two colors together, using the specified factor to indicate the weight
     * given to the first color
     * @param {goog.color.Rgb} rgb1 First color represented in rgb.
     * @param {goog.color.Rgb} rgb2 Second color represented in rgb.
     * @param {number} factor The weight to be given to rgb1 over rgb2. Values
     *     should be in the range [0, 1]. If less than 0, factor will be set to 0.
     *     If greater than 1, factor will be set to 1.
     * @return {!goog.color.Rgb} Combined color represented in rgb.
     */
    function blend(rgb1: goog.color.Rgb, rgb2: goog.color.Rgb, factor: number): goog.color.Rgb;

    /**
     * Adds black to the specified color, darkening it
     * @param {goog.color.Rgb} rgb rgb representation of the color.
     * @param {number} factor Number in the range [0, 1]. 0 will do nothing, while
     *     1 will return black. If less than 0, factor will be set to 0. If greater
     *     than 1, factor will be set to 1.
     * @return {!goog.color.Rgb} Combined rgb color.
     */
    function darken(rgb: goog.color.Rgb, factor: number): goog.color.Rgb;

    /**
     * Adds white to the specified color, lightening it
     * @param {goog.color.Rgb} rgb rgb representation of the color.
     * @param {number} factor Number in the range [0, 1].  0 will do nothing, while
     *     1 will return white. If less than 0, factor will be set to 0. If greater
     *     than 1, factor will be set to 1.
     * @return {!goog.color.Rgb} Combined rgb color.
     */
    function lighten(rgb: goog.color.Rgb, factor: number): goog.color.Rgb;

    /**
     * Find the "best" (highest-contrast) of the suggested colors for the prime
     * color. Uses W3C formula for judging readability and visual accessibility:
     * http://www.w3.org/TR/AERT#color-contrast
     * @param {goog.color.Rgb} prime Color represented as a rgb array.
     * @param {Array.<goog.color.Rgb>} suggestions Array of colors,
     *     each representing a rgb array.
     * @return {!goog.color.Rgb} Highest-contrast color represented by an array..
     */
    function highContrast(prime: goog.color.Rgb, suggestions: goog.color.Rgb[]): goog.color.Rgb;

    /**
     * A map that contains a lot of colors that are recognised by various browsers.
     * This list is way larger than the minimal one dictated by W3C.
     * The keys of this map are the lowercase "readable" names of the colors, while
     * the values are the "hex" values.
     */
    var names: any /*missing*/;
}

