// Generated Fri May  2 15:01:54 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/useragent/product.d.ts" />
/// <reference path="../../goog/useragent/keyboard.d.ts" />
/// <reference path="../../goog/useragent/platform.d.ts" />
/// <reference path="../../goog/useragent/product_isversion.d.ts" />

declare module goog.userAgentTestUtil {

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

