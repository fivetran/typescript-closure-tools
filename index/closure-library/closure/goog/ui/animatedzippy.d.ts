/// <reference path="../../../globals.d.ts" />
/// <reference path="./zippy.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class AnimatedZippy extends AnimatedZippy__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class AnimatedZippy__Class extends goog.ui.Zippy__Class  { 
    
            /**
             * Zippy widget. Expandable/collapsible container, clicking the header toggles
             * the visibility of the content.
             *
             * @param {Element|string|null} header Header element, either element
             *     reference, string id or null if no header exists.
             * @param {Element|string} content Content element, either element reference or
             *     string id.
             * @param {boolean=} opt_expanded Initial expanded/visibility state. Defaults to
             *     false.
             * @param {goog.dom.DomHelper=} opt_domHelper An optional DOM helper.
             * @constructor
             * @extends {goog.ui.Zippy}
             */
            constructor(header: Element|string|any /*null*/, content: Element|string, opt_expanded?: boolean, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Duration of expand/collapse animation, in milliseconds.
             * @type {number}
             */
            animationDuration: number;
    
            /**
             * Acceleration function for expand/collapse animation.
             * @type {!Function}
             */
            animationAcceleration: Function;
    
            /**
             * @return {boolean} Whether the zippy is in the process of being expanded or
             *     collapsed.
             */
            isBusy(): boolean;
    } 
    
}
