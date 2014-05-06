/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/crypt/crypt.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />

declare module goog.crypt.base64 {

    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     * @type {string}
     */
    var ENCODED_VALS_BASE: string;

    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     * @type {string}
     */
    var ENCODED_VALS: string;

    /**
     * Our websafe alphabet.
     * @type {string}
     */
    var ENCODED_VALS_WEBSAFE: string;

    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     * @type {boolean}
     */
    var HAS_NATIVE_SUPPORT: boolean;

    /**
     * Base64-encode an array of bytes.
     *
     * @param {Array.<number>|Uint8Array} input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param {boolean=} opt_webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return {string} The base64 encoded string.
     */
    function encodeByteArray(input: any /*number[]|Uint8Array*/, opt_webSafe?: boolean): string;

    /**
     * Base64-encode a string.
     *
     * @param {string} input A string to encode.
     * @param {boolean=} opt_webSafe If true, we should use the
     *     alternative alphabet.
     * @return {string} The base64 encoded string.
     */
    function encodeString(input: string, opt_webSafe?: boolean): string;

    /**
     * Base64-decode a string.
     *
     * @param {string} input to decode.
     * @param {boolean=} opt_webSafe True if we should use the
     *     alternative alphabet.
     * @return {string} string representing the decoded value.
     */
    function decodeString(input: string, opt_webSafe?: boolean): string;

    /**
     * Base64-decode a string.
     *
     * @param {string} input to decode (length not required to be a multiple of 4).
     * @param {boolean=} opt_webSafe True if we should use the
     *     alternative alphabet.
     * @return {!Array} bytes representing the decoded value.
     */
    function decodeStringToByteArray(input: string, opt_webSafe?: boolean): any[];
}

