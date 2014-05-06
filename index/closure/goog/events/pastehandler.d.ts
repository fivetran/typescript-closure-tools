/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/async/delay.d.ts" />
/// <reference path="../../../closure/goog/async/conditionaldelay.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />

declare module goog.events {

    /**
     * A paste event detector. Gets an {@code element} as parameter and fires
     * {@code goog.events.PasteHandler.EventType.PASTE} events when text is
     * pasted in the {@code element}. Uses heuristics to detect paste events in FF2.
     * See more details of the heuristic on {@link #handleEvent_}.
     *
     * @param {Element} element The textarea element we are listening on.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class PasteHandler extends goog.events.EventTarget {
        /**
         * A paste event detector. Gets an {@code element} as parameter and fires
         * {@code goog.events.PasteHandler.EventType.PASTE} events when text is
         * pasted in the {@code element}. Uses heuristics to detect paste events in FF2.
         * See more details of the heuristic on {@link #handleEvent_}.
         *
         * @param {Element} element The textarea element we are listening on.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(element: Element);
    
        /**
         * Returns the current state of the paste detection algorithm. Used mostly for
         * testing.
         * @return {goog.events.PasteHandler.State} The current state of the class.
         */
        getState(): goog.events.PasteHandler.State;
    
        /**
         * Returns the event handler.
         * @return {goog.events.EventHandler.<T>} The event handler.
         * @protected
         * @this T
         * @template T
         */
        getEventHandler<T>(): goog.events.EventHandler<T>;
    }
}

declare module goog.events.PasteHandler {

    /**
     * The types of events fired by this class.
     * @enum {string}
     */
    enum EventType { PASTE, AFTER_PASTE } 

    /**
     * The mandatory delay we expect between two {@code input} events, used to
     * differentiated between non key paste events and key events.
     * @type {number}
     */
    var MANDATORY_MS_BETWEEN_INPUT_EVENTS_TIE_BREAKER: number;

    /**
     * The states that this class can be found, on the paste detection algorithm.
     * @enum {string}
     */
    enum State { INIT, FOCUSED, TYPING } 
}

