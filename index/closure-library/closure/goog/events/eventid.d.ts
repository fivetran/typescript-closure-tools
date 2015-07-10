/// <reference path="../../../globals.d.ts" />

declare module goog.events {

    class EventId<T> extends EventId__Class<T> { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class EventId__Class<T>  { 
    
            /**
             * A templated class that is used when registering for events. Typical usage:
             * <code>
             *   /** @type {goog.events.EventId.<MyEventObj>}
             *   var myEventId = new goog.events.EventId(
             *       goog.events.getUniqueId(('someEvent'));
             *
             *   // No need to cast or declare here since the compiler knows the correct
             *   // type of 'evt' (MyEventObj).
             *   something.listen(myEventId, function(evt) {});
             * </code>
             *
             * @param {string} eventId
             * @template T
             * @constructor
             * @struct
             * @final
             */
            constructor(eventId: string);
    
            /** @const */
            id: any /*missing*/;
    } 
    
}
