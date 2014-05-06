/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />

declare module goog.ui {

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
    class ItemEvent extends goog.events.Event {
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

