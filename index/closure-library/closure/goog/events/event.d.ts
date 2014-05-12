/// <reference path="../../../globals.d.ts" />
/// <reference path="./eventid.d.ts" />

declare module goog.events {

    class Event extends Event.__Class { }
    module Event {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * A base class for event objects, so that they can support preventDefault and
             * stopPropagation.
             *
             * @param {string|!goog.events.EventId} type Event Type.
             * @param {Object=} opt_target Reference to the object that is the target of
             *     this event. It has to implement the {@code EventTarget} interface
             *     declared at {@link http://developer.mozilla.org/en/DOM/EventTarget}.
             * @constructor
             */
            constructor(type: string, opt_target?: Object);
            /**
             * A base class for event objects, so that they can support preventDefault and
             * stopPropagation.
             *
             * @param {string|!goog.events.EventId} type Event Type.
             * @param {Object=} opt_target Reference to the object that is the target of
             *     this event. It has to implement the {@code EventTarget} interface
             *     declared at {@link http://developer.mozilla.org/en/DOM/EventTarget}.
             * @constructor
             */
            constructor(type: goog.events.EventId<any>, opt_target?: Object);
    
            /**
             * For backwards compatibility (goog.events.Event used to inherit
             * goog.Disposable).
             * @deprecated Events don't need to be disposed.
             */
            disposeInternal(): void;
    
            /**
             * For backwards compatibility (goog.events.Event used to inherit
             * goog.Disposable).
             * @deprecated Events don't need to be disposed.
             */
            dispose(): void;
    
            /**
             * Stops event propagation.
             */
            stopPropagation(): void;
    
            /**
             * Prevents the default action, for example a link redirecting to a url.
             */
            preventDefault(): void;
        }
    }

    /**
     * A typedef for event like objects that are dispatchable via the
     * goog.events.dispatchEvent function. strings are treated as the type for a
     * goog.events.Event. Objects are treated as an extension of a new
     * goog.events.Event with the type property of the object being used as the type
     * of the Event.
     * @typedef {string|Object|goog.events.Event|goog.events.EventId}
     */
    interface EventLike { /*any (string|Object|goog.events.Event|goog.events.EventId<any>)*/ }
}

declare module goog.events.Event {

    /**
     * Stops the propagation of the event. It is equivalent to
     * {@code e.stopPropagation()}, but can be used as the callback argument of
     * {@link goog.events.listen} without declaring another function.
     * @param {!goog.events.Event} e An event.
     */
    function stopPropagation(e: goog.events.Event): void;

    /**
     * Prevents the default action. It is equivalent to
     * {@code e.preventDefault()}, but can be used as the callback argument of
     * {@link goog.events.listen} without declaring another function.
     * @param {!goog.events.Event} e An event.
     */
    function preventDefault(e: goog.events.Event): void;
}
