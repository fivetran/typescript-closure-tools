// Generated Fri May  2 15:04:18 PDT 2014

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
/// <reference path="../../goog/testing/objectpropertystring.d.ts" />
/// <reference path="../../goog/testing/propertyreplacer.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />

declare module goog.testing {

    /**
     * Class for unit testing code that uses goog.userAgent.
     *
     * @extends {goog.Disposable}
     * @constructor
     * @final
     */
    class MockUserAgent extends goog.GoogDisposable {
        /**
         * Class for unit testing code that uses goog.userAgent.
         *
         * @extends {goog.Disposable}
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Installs this MockUserAgent.
         */
        install(): void;
    
        /**
         * @return {?string} The userAgent set in this class.
         */
        getUserAgentString(): string;
    
        /**
         * @param {string} userAgent The desired userAgent string to use.
         */
        setUserAgentString(userAgent: string): void;
    
        /**
         * @return {Object} The Navigator set in this class.
         */
        getNavigator(): Object;
    
        /**
         * @param {Object} navigator The desired Navigator object to use.
         */
        setNavigator(navigator: Object): void;
    
        /**
         * Uninstalls the MockUserAgent.
         */
        uninstall(): void;
    }
}

