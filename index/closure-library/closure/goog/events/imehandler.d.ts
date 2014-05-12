/// <reference path="../../../globals.d.ts" />
/// <reference path="./eventtarget.d.ts" />
/// <reference path="./event.d.ts" />
/// <reference path="./browserevent.d.ts" />

declare module goog.events {

    class ImeHandler extends ImeHandler.__Class { }
    module ImeHandler {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * Dispatches high-level events for IMEs.
             * @param {Element} el The element to listen on.
             * @extends {goog.events.EventTarget}
             * @constructor
             * @final
             */
            constructor(el: Element);
    
            /**
             * @return {boolean} Whether an IME is active.
             */
            isImeMode(): boolean;
        }
    }
}

declare module goog.events.ImeHandler {

    class Event extends Event.__Class { }
    module Event {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class {
    
            /**
             * An event fired by ImeHandler.
             * @param {goog.events.ImeHandler.EventType} type The type.
             * @param {goog.events.BrowserEvent} reason The trigger for this event.
             * @constructor
             * @extends {goog.events.Event}
             * @final
             */
            constructor(type: goog.events.ImeHandler.EventType, reason: goog.events.BrowserEvent);
        }
    }

    /**
     * Event types fired by ImeHandler. These events do not make any guarantees
     * about whether they were fired before or after the event in question.
     * @enum {string}
     */
    enum EventType { START, UPDATE, END } 

    /**
     * Whether to use the composition events.
     * @type {boolean}
     */
    var USES_COMPOSITION_EVENTS: boolean;
}
