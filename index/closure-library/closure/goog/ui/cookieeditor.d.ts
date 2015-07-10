/// <reference path="../../../globals.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class CookieEditor extends CookieEditor__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class CookieEditor__Class extends goog.ui.Component__Class  { 
    
            /**
             * Displays and edits the value of a cookie.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.Component}
             * @final
             */
            constructor(opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Sets the cookie which this component will edit.
             * @param {string} cookieKey Cookie key.
             */
            selectCookie(cookieKey: string): void;
    } 
    
}
