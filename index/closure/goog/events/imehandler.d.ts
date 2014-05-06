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
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />

declare module goog.events {

    /**
     * Dispatches high-level events for IMEs.
     * @param {Element} el The element to listen on.
     * @extends {goog.events.EventTarget}
     * @constructor
     * @final
     */
    class ImeHandler extends goog.events.EventTarget {
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

declare module goog.events.ImeHandler {

    /**
     * An event fired by ImeHandler.
     * @param {goog.events.ImeHandler.EventType} type The type.
     * @param {goog.events.BrowserEvent} reason The trigger for this event.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class Event extends goog.events.Event {
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

