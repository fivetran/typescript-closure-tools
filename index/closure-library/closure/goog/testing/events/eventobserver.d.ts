/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/event.d.ts" />

declare module goog.testing.events {

    class EventObserver extends EventObserver__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class EventObserver__Class  { 
    
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
