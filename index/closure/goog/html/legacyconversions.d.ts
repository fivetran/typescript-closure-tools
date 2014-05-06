/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/i18n/bidi.d.ts" />
/// <reference path="../../../closure/goog/string/typedstring.d.ts" />
/// <reference path="../../../closure/goog/string/const.d.ts" />
/// <reference path="../../../closure/goog/html/safeurl.d.ts" />
/// <reference path="../../../closure/goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/dom/tags.d.ts" />
/// <reference path="../../../closure/goog/html/safestyle.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/html/safehtml.d.ts" />

declare module goog.html.legacyconversions {

    /**
     * Performs an "unchecked conversion" from string to SafeHtml for legacy API
     * purposes.
     *
     * Unchecked conversion will not proceed if ALLOW_LEGACY_CONVERSIONS is false,
     * and instead this function unconditionally throws an exception.
     *
     * @param {string} html A string to be converted to SafeHtml.
     * @return {!goog.html.SafeHtml} The value of html, wrapped in a SafeHtml
     *     object.
     */
    function safeHtmlFromString(html: string): goog.html.SafeHtml;

    /**
     * Performs an "unchecked conversion" from string to TrustedResourceUrl for
     * legacy API purposes.
     *
     * Unchecked conversion will not proceed if ALLOW_LEGACY_CONVERSIONS is false,
     * and instead this function unconditionally throws an exception.
     *
     * @param {string} url A string to be converted to TrustedResourceUrl.
     * @return {!goog.html.TrustedResourceUrl} The value of url, wrapped in a
     *     TrustedResourceUrl object.
     */
    function trustedResourceUrlFromString(url: string): goog.html.TrustedResourceUrl;

    /**
     * Performs an "unchecked conversion" from string to SafeUrl for legacy API
     * purposes.
     *
     * Unchecked conversion will not proceed if ALLOW_LEGACY_CONVERSIONS is false,
     * and instead this function unconditionally throws an exception.
     *
     * @param {string} url A string to be converted to SafeUrl.
     * @return {!goog.html.SafeUrl} The value of url, wrapped in a SafeUrl
     *     object.
     */
    function safeUrlFromString(url: string): goog.html.SafeUrl;
}

