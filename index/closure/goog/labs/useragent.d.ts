// Generated Wed Apr 30 16:38:50 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/string.d.ts" />

declare module 'goog.labs.userAgent.browser' {

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

declare module 'goog.labs.userAgent.device' {

    /**
     * Currently we detect the iPhone, iPod and Android mobiles (devices that have
     * both Android and Mobile in the user agent string).
     *
     * @return {boolean} Whether the user is using a mobile device.
     */
    function isMobile(): boolean;

    /**
     * Currently we detect Kindle Fire, iPad, and Android tablets (devices that have
     * Android but not Mobile in the user agent string).
     *
     * @return {boolean} Whether the user is using a tablet.
     */
    function isTablet(): boolean;

    /**
     * @return {boolean} Whether the user is using a desktop computer (which we
     *     assume to be the case if they are not using either a mobile or tablet
     *     device).
     */
    function isDesktop(): boolean;
}

declare module 'goog.labs.userAgent.engine' {

    /**
     * @return {boolean} Whether the rendering engine is Presto.
     */
    function isPresto(): boolean;

    /**
     * @return {boolean} Whether the rendering engine is Trident.
     */
    function isTrident(): boolean;

    /**
     * @return {boolean} Whether the rendering engine is WebKit.
     */
    function isWebKit(): boolean;

    /**
     * @return {boolean} Whether the rendering engine is Gecko.
     */
    function isGecko(): boolean;

    /**
     * @return {string} The rendering engine's version or empty string if version
     *     can't be determined.
     */
    function getVersion(): string;

    /**
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the rendering engine version is higher or the same
     *     as the given version.
     */
    function isVersionOrHigher(version: any /*string|number*/): boolean;
}

declare module 'goog.labs.userAgent.platform' {

    /**
     * @return {boolean} Whether the platform is Android.
     */
    function isAndroid(): boolean;

    /**
     * @return {boolean} Whether the platform is iPod.
     */
    function isIpod(): boolean;

    /**
     * @return {boolean} Whether the platform is iPhone.
     */
    function isIphone(): boolean;

    /**
     * @return {boolean} Whether the platform is iPad.
     */
    function isIpad(): boolean;

    /**
     * @return {boolean} Whether the platform is iOS.
     */
    function isIos(): boolean;

    /**
     * @return {boolean} Whether the platform is Mac.
     */
    function isMacintosh(): boolean;

    /**
     * @return {boolean} Whether the platform is Linux.
     */
    function isLinux(): boolean;

    /**
     * @return {boolean} Whether the platform is Windows.
     */
    function isWindows(): boolean;

    /**
     * @return {boolean} Whether the platform is ChromeOS.
     */
    function isChromeOS(): boolean;

    /**
     * The version of the platform. We only determine the version for Windows,
     * Mac, and Chrome OS. It doesn't make much sense on Linux. For Windows, we only
     * look at the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given
     * version 0.0.
     *
     * @return {string} The platform version or empty string if version cannot be
     *     determined.
     */
    function getVersion(): string;

    /**
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the browser version is higher or the same as the
     *     given version.
     */
    function isVersionOrHigher(version: any /*string|number*/): boolean;
}

declare module 'goog.labs.userAgent.util' {

    /**
     * A possible override for applications which wish to not check
     * navigator.userAgent but use a specified value for detection instead.
     * @private {string}
     */
    var userAgent_: any /*missing*/;

    /**
     * Applications may override browser detection on the built in
     * navigator.userAgent object by setting this string. Set to null to use the
     * browser object instead.
     * @param {?string=} opt_userAgent The User-Agent override.
     */
    function setUserAgent(opt_userAgent?: string): void;

    /**
     * @return {string} The user agent string.
     */
    function getUserAgent(): string;

    /**
     * @param {string} str
     * @return {boolean} Whether the user agent contains the given string, ignoring
     *     case.
     */
    function matchUserAgent(str: string): boolean;

    /**
     * @param {string} str
     * @return {boolean} Whether the user agent contains the given string.
     */
    function matchUserAgentIgnoreCase(str: string): boolean;

    /**
     * Parses the user agent into tuples for each section.
     * @param {string} userAgent
     * @return {!Array.<!Array.<string>>} Tuples of key, version, and the contents
     *     of the parenthetical.
     */
    function extractVersionTuples(userAgent: string): string[][];
}

