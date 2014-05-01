// Generated Wed Apr 30 16:38:20 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/cssom.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.debug.DevCss' {

    /**
     * A list of possible user agent strings.
     * @enum {string}
     */
    enum UserAgent { OPERA, IE, GECKO, FIREFOX, WEBKIT, SAFARI, MOBILE } 
}

declare module 'goog.debug' {

    /**
     * A class for solving development CSS issues/emulating the CSS Compiler.
     * @param {goog.debug.DevCss.UserAgent=} opt_userAgent The user agent, if not
     *     passed in, will be determined using goog.userAgent.
     * @param {number|string=} opt_userAgentVersion The user agent's version.
     *     If not passed in, will be determined using goog.userAgent.
     * @throws {Error} When userAgent detection fails.
     * @constructor
     * @final
     */
    class DevCss {
        /**
         * A class for solving development CSS issues/emulating the CSS Compiler.
         * @param {goog.debug.DevCss.UserAgent=} opt_userAgent The user agent, if not
         *     passed in, will be determined using goog.userAgent.
         * @param {number|string=} opt_userAgentVersion The user agent's version.
         *     If not passed in, will be determined using goog.userAgent.
         * @throws {Error} When userAgent detection fails.
         * @constructor
         * @final
         */
        constructor(opt_userAgent?: goog.debug.DevCss.UserAgent, opt_userAgentVersion?: any /*number|string*/);
    
        /**
         * Rewrites the CSSOM as needed to activate any useragent-specific selectors.
         * @param {boolean=} opt_enableIe6ReadyHandler If true(the default), and the
         *     userAgent is ie6, we set a document "ready" event handler to walk the DOM
         *     and make combined selector className changes. Having this parameter also
         *     aids unit testing.
         */
        activateBrowserSpecificCssRules(opt_enableIe6ReadyHandler?: boolean): void;
    }
}

