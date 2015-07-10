/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/event.d.ts" />

declare module goog.ui {

    class ItemEvent extends ItemEvent__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ItemEvent__Class extends goog.events.Event__Class  { 
    
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
    
            /**
             * Item for the event. The type of this object is specific to the type
             * of event. For a menu, it would be the menu item that was clicked. For a
             * listbox selection, it would be the listitem that was selected.
             *
             * @type {Object}
             */
            item: Object;
    } 
    
}
