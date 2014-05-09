/// <reference path="../../../globals.d.ts" />
/// <reference path="./eventtarget.d.ts" />
/// <reference path="./browserevent.d.ts" />

declare module goog.events {

    class ActionHandler extends goog.events.EventTarget {
    
        /**
         * A wrapper around an element that you want to listen to ACTION events on.
         * @param {Element|Document} element The element or document to listen on.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(element: Element);
        /**
         * A wrapper around an element that you want to listen to ACTION events on.
         * @param {Element|Document} element The element or document to listen on.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(element: Document);
    }

    class ActionEvent extends goog.events.BrowserEvent {
    
        /**
         * This class is used for the goog.events.ActionHandler.EventType.ACTION event.
         * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
         * @constructor
         * @extends {goog.events.BrowserEvent}
         * @final
         */
        constructor(browserEvent: goog.events.BrowserEvent);
    }

    class BeforeActionEvent extends goog.events.BrowserEvent {
    
        /**
         * This class is used for the goog.events.ActionHandler.EventType.BEFOREACTION
         * event. BEFOREACTION gives a chance to the application so the keyboard focus
         * can be restored back, if required.
         * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
         * @constructor
         * @extends {goog.events.BrowserEvent}
         * @final
         */
        constructor(browserEvent: goog.events.BrowserEvent);
    }
}

declare module goog.events.ActionHandler {

    /**
     * Enum type for the events fired by the action handler
     * @enum {string}
     */
    enum EventType { ACTION, BEFOREACTION } 
}
