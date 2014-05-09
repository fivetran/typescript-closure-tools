/// <reference path="../../../../globals.d.ts" />

declare module goog.debug {

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
        constructor(opt_userAgent?: goog.debug.DevCss.UserAgent, opt_userAgentVersion?: number);
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
        constructor(opt_userAgent?: goog.debug.DevCss.UserAgent, opt_userAgentVersion?: string);
    
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

declare module goog.debug.DevCss {

    /**
     * A list of possible user agent strings.
     * @enum {string}
     */
    enum UserAgent { OPERA, IE, GECKO, FIREFOX, WEBKIT, SAFARI, MOBILE } 
}
