// Generated Thu May  1 16:45:44 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />

declare module goog.labs.userAgent.browser {

    /**
     * @return {boolean} Whether the user's browser is Opera.
     */
    var isOpera: any /*missing*/;

    /**
     * @return {boolean} Whether the user's browser is IE.
     */
    var isIE: any /*missing*/;

    /**
     * @return {boolean} Whether the user's browser is Firefox.
     */
    var isFirefox: any /*missing*/;

    /**
     * @return {boolean} Whether the user's browser is Safari.
     */
    var isSafari: any /*missing*/;

    /**
     * @return {boolean} Whether the user's browser is Chrome.
     */
    var isChrome: any /*missing*/;

    /**
     * @return {boolean} Whether the user's browser is the Android browser.
     */
    var isAndroidBrowser: any /*missing*/;

    /**
     * For more information, see:
     * http://docs.aws.amazon.com/silk/latest/developerguide/user-agent.html
     * @return {boolean} Whether the user's browser is Silk.
     */
    function isSilk(): boolean;

    /**
     * @return {string} The browser version or empty string if version cannot be
     *     determined. Note that for Internet Explorer, this returns the version of
     *     the browser, not the version of the rendering engine. (IE 8 in
     *     compatibility mode will return 8.0 rather than 7.0. To determine the
     *     rendering engine version, look at document.documentMode instead. See
     *     http://msdn.microsoft.com/en-us/library/cc196988(v=vs.85).aspx for more
     *     details.)
     */
    function getVersion(): string;

    /**
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the browser version is higher or the same as the
     *     given version.
     */
    function isVersionOrHigher(version: any /*string|number*/): boolean;
}

