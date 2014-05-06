/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/testing/objectpropertystring.d.ts" />
/// <reference path="../../../closure/goog/testing/propertyreplacer.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />

declare module goog.testing {

    /**
     * Class for unit testing code that uses goog.userAgent.
     *
     * @extends {goog.Disposable}
     * @constructor
     * @final
     */
    class MockUserAgent extends goog.Disposable {
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

