/// <reference path="../../../globals.d.ts" />
/// <reference path="./eventtarget.d.ts" />
/// <reference path="./browserevent.d.ts" />

declare module goog.events {

    class InputHandler extends InputHandler.__Class { }
    module InputHandler {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * This event handler will dispatch events when the user types into a text
             * input, password input or a textarea
             * @param {Element} element  The element that you want to listen for input
             *     events on.
             * @constructor
             * @extends {goog.events.EventTarget}
             */
            constructor(element: Element);
    
            /**
             * This handles the underlying events and dispatches a new event as needed.
             * @param {goog.events.BrowserEvent} e The underlying browser event.
             */
            handleEvent(e: goog.events.BrowserEvent): void;
        }
    }
}

declare module goog.events.InputHandler {

    /**
     * Enum type for the events fired by the input handler
     * @enum {string}
     */
    enum EventType { INPUT } 
}
