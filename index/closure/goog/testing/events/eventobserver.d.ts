/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />

declare module goog.testing.events {

    /**
     * Event observer.  Implements a handleEvent interface so it may be used as
     * a listener in listening functions and methods.
     * @see goog.events.listen
     * @see goog.events.EventHandler
     * @constructor
     * @final
     */
    class EventObserver {
        /**
         * Event observer.  Implements a handleEvent interface so it may be used as
         * a listener in listening functions and methods.
         * @see goog.events.listen
         * @see goog.events.EventHandler
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Handles an event and remembers it.  Event listening functions and methods
         * will call this method when this observer is used as a listener.
         * @see goog.events.listen
         * @see goog.events.EventHandler
         * @param {!goog.events.Event} e Event to handle.
         */
        handleEvent(e: goog.events.Event): void;
    
        /**
         * @param {string=} opt_type If given, only return events of this type.
         * @return {!Array.<!goog.events.Event>} The events handled, oldest to newest.
         */
        getEvents(opt_type?: string): goog.events.Event[];
    }
}

