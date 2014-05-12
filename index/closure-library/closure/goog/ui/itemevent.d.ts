/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/event.d.ts" />

declare module goog.ui {

    class ItemEvent extends ItemEvent.__Class { }
    module ItemEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class {
    
            /**
             * Generic ui event class for events that take a single item like a menu click
             * event.
             *
             * @constructor
             * @extends {goog.events.Event}
             * @param {string} type Event Type.
             * @param {Object} target Reference to the object that is the target
             *                        of this event.
             * @param {Object} item The item that was clicked.
             * @final
             */
            constructor(type: string, target: Object, item: Object);
        }
    }
}
