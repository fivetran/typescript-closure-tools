// Generated Wed Apr 30 16:36:27 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/string.d.ts" />

declare module 'goog.userAgent.adobeReader' {

    /**
       * Whether we detect the user has the Adobe Reader browser plugin installed.
       * @type {boolean}
       */
    var HAS_READER: boolean;

    /**
       * The version of the installed Adobe Reader plugin. Versions after 7
       * will all be reported as '7'.
       * @type {string}
       */
    var VERSION: string;

    /**
       * On certain combinations of platform/browser/plugin, a print dialog
       * can be shown for PDF files without a download dialog or making the
       * PDF visible to the user, by loading the PDF into a hidden iframe.
       *
       * Currently this variable is true if Adobe Reader version 6 or later
       * is detected on Windows.
       *
       * @type {boolean}
       */
    var SILENT_PRINT: boolean;
}

declare module 'goog.userAgent.flash' {

    /**
     * Whether we can detect that the browser has flash
     * @type {boolean}
     */
    var HAS_FLASH: boolean;

    /**
     * Full version information of flash installed, in form 7.0.61
     * @type {string}
     */
    var VERSION: string;

    /**
     * Whether the installed flash version is as new or newer than a given version.
     * @param {string} version The version to check.
     * @return {boolean} Whether the installed flash version is as new or newer
     *     than a given version.
     */
    function isVersion(version: string): boolean;
}

declare module 'goog.userAgent.iphoto' {

    /**
       * Whether we can detect that the user has iPhoto installed.
       * @type {boolean}
       */
    var HAS_IPHOTO: boolean;

    /**
       * The version of iPhoto installed if found.
       * @type {string}
       */
    var VERSION: string;

    /**
     * Whether the installed version of iPhoto is as new or newer than a given
     * version.
     * @param {string} version The version to check.
     * @return {boolean} Whether the installed version of iPhoto is as new or newer
     *     than a given version.
     */
    function isVersion(version: string): boolean;
}

declare module 'goog.userAgent.jscript' {

    /**
     * Whether we detect that the user agent is using Microsoft JScript.
     * @type {boolean}
     */
    var HAS_JSCRIPT: boolean;

    /**
     * The installed version of JScript.
     * @type {string}
     */
    var VERSION: string;

    /**
     * Whether the installed version of JScript is as new or newer than a given
     * version.
     * @param {string} version The version to check.
     * @return {boolean} Whether the installed version of JScript is as new or
     *     newer than the given version.
     */
    function isVersion(version: string): boolean;
}

declare module 'goog.userAgent.keyboard' {

    /**
     * Whether the user agent is running in an environment that uses Mac-based
     * keyboard shortcuts.
     * @type {boolean}
     */
    var MAC_KEYBOARD: boolean;
}

declare module 'goog.userAgent.picasa' {

    /**
       * Whether we detect the user has Picasa installed.
       * @type {boolean}
       */
    var HAS_PICASA: boolean;

    /**
       * The installed version of Picasa. If Picasa is detected, this means it is
       * version 2 or later. The precise version number is not yet available to the
       * browser, this is a placeholder for later versions of Picasa.
       * @type {string}
       */
    var VERSION: string;

    /**
     * Whether the installed Picasa version is as new or newer than a given version.
     * This is not yet relevant, we can't detect the true Picasa version number yet,
     * but this may be possible in future Picasa releases.
     * @param {string} version The version to check.
     * @return {boolean} Whether the installed Picasa version is as new or newer
     *     than a given version.
     */
    function isVersion(version: string): boolean;
}

declare module 'goog.userAgent.platform' {

    /**
     * The version of the platform. We only determine the version for Windows and
     * Mac, since it doesn't make much sense on Linux. For Windows, we only look at
     * the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given version
     * 0.0
     * @type {string}
     */
    var VERSION: string;

    /**
     * Whether the user agent platform version is higher or the same as the given
     * version.
     *
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the user agent platform version is higher or the
     *     same as the given version.
     */
    function isVersion(version: any /*string|number*/): boolean;
}

declare module 'goog.userAgent.product' {

    /**
     * The version of the user agent. This is a string because it might contain
     * 'b' (as in beta) as well as multiple dots.
     * @type {string}
     */
    var VERSION: string;

    /**
     * Whether the user agent product version is higher or the same as the given
     * version.
     *
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the user agent product version is higher or the
     *     same as the given version.
     */
    function isVersion(version: any /*string|number*/): boolean;

    /**
     * Whether the code is running on the Opera web browser.
     * @type {boolean}
     */
    var OPERA: boolean;

    /**
     * Whether the code is running on an IE web browser.
     * @type {boolean}
     */
    var IE: boolean;

    /**
     * Whether the code is running on the Firefox web browser.
     * @type {boolean}
     */
    var FIREFOX: boolean;

    /**
     * Whether the code is running on the Camino web browser.
     * @type {boolean}
     */
    var CAMINO: boolean;

    /**
     * Whether the code is running on an iPhone or iPod touch.
     * @type {boolean}
     */
    var IPHONE: boolean;

    /**
     * Whether the code is running on an iPad.
     * @type {boolean}
     */
    var IPAD: boolean;

    /**
     * Whether the code is running on the default browser on an Android phone.
     * @type {boolean}
     */
    var ANDROID: boolean;

    /**
     * Whether the code is running on the Chrome web browser.
     * @type {boolean}
     */
    var CHROME: boolean;

    /**
     * Whether the code is running on the Safari web browser.
     * @type {boolean}
     */
    var SAFARI: boolean;
}

declare module 'goog.userAgent' {

    /**
     * Returns the userAgent string for the current browser.
     * Some user agents (I'm thinking of you, Gears WorkerPool) do not expose a
     * navigator object off the global scope.  In that case we return null.
     *
     * @return {?string} The userAgent string or null if there is none.
     */
    function getUserAgentString(): string;

    /**
     * TODO(nnaze): Change type to "Navigator" and update compilation targets.
     * @return {Object} The native navigator object.
     */
    function getNavigator(): Object;

    /**
     * Whether the user agent is Opera.
     * @type {boolean}
     */
    var OPERA: boolean;

    /**
     * Whether the user agent is Internet Explorer.
     * @type {boolean}
     */
    var IE: boolean;

    /**
     * Whether the user agent is Gecko. Gecko is the rendering engine used by
     * Mozilla, Firefox, and others.
     * @type {boolean}
     */
    var GECKO: boolean;

    /**
     * Whether the user agent is WebKit. WebKit is the rendering engine that
     * Safari, Android and others use.
     * @type {boolean}
     */
    var WEBKIT: boolean;

    /**
     * Whether the user agent is running on a mobile device.
     *
     * TODO(nnaze): Consider deprecating MOBILE when labs.userAgent
     *   is promoted as the gecko/webkit logic is likely inaccurate.
     *
     * @type {boolean}
     */
    var MOBILE: boolean;

    /**
     * Used while transitioning code to use WEBKIT instead.
     * @type {boolean}
     * @deprecated Use {@link goog.userAgent.product.SAFARI} instead.
     * TODO(nicksantos): Delete this from goog.userAgent.
     */
    var SAFARI: boolean;

    /**
     * The platform (operating system) the user agent is running on. Default to
     * empty string because navigator.platform may not be defined (on Rhino, for
     * example).
     * @type {string}
     */
    var PLATFORM: string;

    /**
     * Whether the user agent is running on a Macintosh operating system.
     * @type {boolean}
     */
    var MAC: boolean;

    /**
     * Whether the user agent is running on a Windows operating system.
     * @type {boolean}
     */
    var WINDOWS: boolean;

    /**
     * Whether the user agent is running on a Linux operating system.
     * @type {boolean}
     */
    var LINUX: boolean;

    /**
     * Whether the user agent is running on a X11 windowing system.
     * @type {boolean}
     */
    var X11: boolean;

    /**
     * Whether the user agent is running on Android.
     * @type {boolean}
     */
    var ANDROID: boolean;

    /**
     * Whether the user agent is running on an iPhone.
     * @type {boolean}
     */
    var IPHONE: boolean;

    /**
     * Whether the user agent is running on an iPad.
     * @type {boolean}
     */
    var IPAD: boolean;

    /**
     * The version of the user agent. This is a string because it might contain
     * 'b' (as in beta) as well as multiple dots.
     * @type {string}
     */
    var VERSION: string;

    /**
     * Compares two version numbers.
     *
     * @param {string} v1 Version of first item.
     * @param {string} v2 Version of second item.
     *
     * @return {number}  1 if first argument is higher
     *                   0 if arguments are equal
     *                  -1 if second argument is higher.
     * @deprecated Use goog.string.compareVersions.
     */
    function compare(v1: string, v2: string): number;

    /**
     * Whether the user agent version is higher or the same as the given version.
     * NOTE: When checking the version numbers for Firefox and Safari, be sure to
     * use the engine's version, not the browser's version number.  For example,
     * Firefox 3.0 corresponds to Gecko 1.9 and Safari 3.0 to Webkit 522.11.
     * Opera and Internet Explorer versions match the product release number.<br>
     * @see <a href="http://en.wikipedia.org/wiki/Safari_version_history">
     *     Webkit</a>
     * @see <a href="http://en.wikipedia.org/wiki/Gecko_engine">Gecko</a>
     *
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the user agent version is higher or the same as
     *     the given version.
     */
    function isVersionOrHigher(version: any /*string|number*/): boolean;

    /**
     * Deprecated alias to {@code goog.userAgent.isVersionOrHigher}.
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the user agent version is higher or the same as
     *     the given version.
     * @deprecated Use goog.userAgent.isVersionOrHigher().
     */
    var isVersion: any /*missing*/;

    /**
     * Whether the IE effective document mode is higher or the same as the given
     * document mode version.
     * NOTE: Only for IE, return false for another browser.
     *
     * @param {number} documentMode The document mode version to check.
     * @return {boolean} Whether the IE effective document mode is higher or the
     *     same as the given version.
     */
    function isDocumentModeOrHigher(documentMode: number): boolean;

    /**
     * Deprecated alias to {@code goog.userAgent.isDocumentModeOrHigher}.
     * @param {number} version The version to check.
     * @return {boolean} Whether the IE effective document mode is higher or the
     *      same as the given version.
     * @deprecated Use goog.userAgent.isDocumentModeOrHigher().
     */
    var isDocumentMode: any /*missing*/;

    /**
     * For IE version < 7, documentMode is undefined, so attempt to use the
     * CSS1Compat property to see if we are in standards mode. If we are in
     * standards mode, treat the browser version as the document mode. Otherwise,
     * IE is emulating version 5.
     * @type {number|undefined}
     * @const
     */
    var DOCUMENT_MODE: any /*number|any (undefined)*/;
}

declare module 'goog.userAgentTestUtil' {

    /**
     * Rerun the initialization code to set all of the goog.userAgent constants.
     * @suppress {accessControls}
     */
    function reinitializeUserAgent(): void;

    /**
     * Browser definitions.
     * @enum {string}
     */
    enum UserAgents { GECKO, IE, OPERA, WEBKIT } 

    /**
     * Return whether a given user agent has been detected.
     * @param {string} agent Value in UserAgents.
     * @return {boolean} Whether the user agent has been detected.
     */
    function getUserAgentDetected(agent: string): boolean;
}

