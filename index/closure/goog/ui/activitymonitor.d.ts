/// <reference path="../../../closure/goog/base.d.ts" />
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
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />

declare module goog.ui {

    /**
     * Once initialized with a document, the activity monitor can be queried for
     * the current idle time.
     *
     * @param {goog.dom.DomHelper|Array.<goog.dom.DomHelper>=} opt_domHelper
     *     DomHelper which contains the document(s) to listen to.  If null, the
     *     default document is usedinstead.
     * @param {boolean=} opt_useBubble Whether to use the bubble phase to listen for
     *     events. By default listens on the capture phase so that it won't miss
     *     events that get stopPropagation/cancelBubble'd. However, this can cause
     *     problems in IE8 if the page loads multiple scripts that include the
     *     closure event handling code.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class ActivityMonitor extends goog.events.EventTarget {
        /**
         * Once initialized with a document, the activity monitor can be queried for
         * the current idle time.
         *
         * @param {goog.dom.DomHelper|Array.<goog.dom.DomHelper>=} opt_domHelper
         *     DomHelper which contains the document(s) to listen to.  If null, the
         *     default document is usedinstead.
         * @param {boolean=} opt_useBubble Whether to use the bubble phase to listen for
         *     events. By default listens on the capture phase so that it won't miss
         *     events that get stopPropagation/cancelBubble'd. However, this can cause
         *     problems in IE8 if the page loads multiple scripts that include the
         *     closure event handling code.
         *
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(opt_domHelper?: any /*goog.dom.DomHelper|goog.dom.DomHelper[]*/, opt_useBubble?: boolean);
    
        /**
         * Adds a document to those being monitored by this class.
         *
         * @param {Document} doc Document to monitor.
         */
        addDocument(doc: Document): void;
    
        /**
         * Removes a document from those being monitored by this class.
         *
         * @param {Document} doc Document to monitor.
         */
        removeDocument(doc: Document): void;
    
        /**
         * Updates the last event time to be the present time, useful for non-DOM
         * events that should update idle time.
         */
        resetTimer(): void;
    
        /**
         * Updates the idle time and fires an event if time has elapsed since
         * the last update.
         * @param {number} eventTime Time (in MS) of the event that cleared the idle
         *     timer.
         * @param {string} eventType Type of the event, used only for debugging.
         * @protected
         */
        updateIdleTime(eventTime: number, eventType: string): void;
    
        /**
         * Returns the amount of time the user has been idle.
         * @param {number=} opt_now The current time can optionally be passed in for the
         *     computation to avoid an extra Date allocation.
         * @return {number} The amount of time in ms that the user has been idle.
         */
        getIdleTime(opt_now?: number): number;
    
        /**
         * Returns the type of the last user event.
         * @return {string} event type.
         */
        getLastEventType(): string;
    
        /**
         * Returns the time of the last event
         * @return {number} last event time.
         */
        getLastEventTime(): number;
    }
}

declare module goog.ui.ActivityMonitor {

    /**
     * Minimum amount of time in ms between throttled ACTIVITY events
     * @type {number}
     */
    var MIN_EVENT_SPACING: number;

    /**
     * Event constants for the activity monitor.
     * @enum {string}
     */
    enum Event { ACTIVITY } 
}

