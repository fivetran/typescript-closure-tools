/// <reference path="../../../../globals.d.ts" />

declare module goog.debug {

    class DevCss extends DevCss__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class DevCss__Class  { 
    
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
            constructor(opt_userAgent?: goog.debug.DevCss.UserAgent, opt_userAgentVersion?: number|string);
    
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

    /**
     * A list of strings that may be used for matching in CSS files/development.
     * @enum {string}
     * @private
     */
    enum CssToken_ { USERAGENT, SEPARATOR, LESS_THAN, GREATER_THAN, LESS_THAN_OR_EQUAL, GREATER_THAN_OR_EQUAL, IE6_SELECTOR_TEXT, IE6_COMBINED_GLUE } 
}
