/// <reference path="../../../globals.d.ts" />
/// <reference path="./eventtarget.d.ts" />
/// <reference path="./browserevent.d.ts" />

declare module goog.events {

    class FocusHandler extends FocusHandler__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FocusHandler__Class extends goog.events.EventTarget__Class  { 
    
            /**
             * This event handler allows you to catch focus events when descendants gain or
             * loses focus.
             * @param {Element|Document} element  The node to listen on.
             * @constructor
             * @extends {goog.events.EventTarget}
             * @final
             */
            constructor(element: Element|Document);
    
            /**
             * This handles the underlying events and dispatches a new event.
             * @param {goog.events.BrowserEvent} e  The underlying browser event.
             */
            handleEvent(e: goog.events.BrowserEvent): void;
    } 
    
}

declare module goog.events.FocusHandler {

    /**
     * Enum type for the events fired by the focus handler
     * @enum {string}
     */
    enum EventType { FOCUSIN, FOCUSOUT } 
}
