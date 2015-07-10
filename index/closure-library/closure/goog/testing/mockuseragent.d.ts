/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />

declare module goog.testing {

    class MockUserAgent extends MockUserAgent__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MockUserAgent__Class extends goog.Disposable__Class  { 
    
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
