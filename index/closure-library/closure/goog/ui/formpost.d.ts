/// <reference path="../../../globals.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class FormPost extends FormPost__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FormPost__Class extends goog.ui.Component__Class  { 
    
            /**
             * Creates a formpost object.
             * @constructor
             * @extends {goog.ui.Component}
             * @param {goog.dom.DomHelper=} opt_dom The DOM helper.
             * @final
             */
            constructor(opt_dom?: goog.dom.DomHelper);
    
            /**
             * Constructs a POST request and directs the browser as if a form were
             * submitted.
             * @param {Object} parameters Object with parameter values. Values can be
             *     strings, numbers, or arrays of strings or numbers.
             * @param {string=} opt_url The destination URL. If not specified, uses the
             *     current URL for window for the DOM specified in the constructor.
             * @param {string=} opt_target An optional name of a window in which to open the
             *     URL. If not specified, uses the window for the DOM specified in the
             *     constructor.
             */
            post(parameters: Object, opt_url?: string, opt_target?: string): void;
    } 
    
}
