/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />

declare module goog.i18n.mime {

    /**
     * Encodes a string for inclusion in a MIME header. The string is encoded
     * in UTF-8 according to RFC 1522, using quoted-printable form.
     * @param {string} str The string to encode.
     * @param {boolean=} opt_noquote Whether double-quote characters should also
     *     be escaped (should be true if the result will be placed inside a
     *     quoted string for a parameter value in a MIME header).
     * @return {string} The encoded string.
     */
    function encode(str: string, opt_noquote?: boolean): string;

    /**
     * Get an array of UTF-8 hex codes for a given character.
     * @param {string} c The matched character.
     * @return {!Array.<string>} A hex array representing the character.
     */
    function getHexCharArray(c: string): string[];
}

