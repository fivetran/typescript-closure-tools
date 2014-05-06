/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/cssom/cssom.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/dom/classlist.d.ts" />

declare module goog.debug {

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

declare module goog.debug.DevCss {

    /**
     * A list of possible user agent strings.
     * @enum {string}
     */
    enum UserAgent { OPERA, IE, GECKO, FIREFOX, WEBKIT, SAFARI, MOBILE } 
}

