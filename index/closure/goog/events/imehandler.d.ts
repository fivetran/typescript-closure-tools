// Generated Wed Apr 30 22:43:26 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />

declare module goog.events.ImeHandler {

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
}

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

