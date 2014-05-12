/// <reference path="../../../globals.d.ts" />
/// <reference path="./eventtarget.d.ts" />
/// <reference path="./browserevent.d.ts" />

declare module goog.events {

    class MouseWheelHandler extends MouseWheelHandler.__Class { }
    module MouseWheelHandler {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * This event handler allows you to catch mouse wheel events in a consistent
             * manner.
             * @param {Element|Document} element The element to listen to the mouse wheel
             *     event on.
             * @param {boolean=} opt_capture Whether to handle the mouse wheel event in
             *     capture phase.
             * @constructor
             * @extends {goog.events.EventTarget}
             */
            constructor(element: Element, opt_capture?: boolean);
            /**
             * This event handler allows you to catch mouse wheel events in a consistent
             * manner.
             * @param {Element|Document} element The element to listen to the mouse wheel
             *     event on.
             * @param {boolean=} opt_capture Whether to handle the mouse wheel event in
             *     capture phase.
             * @constructor
             * @extends {goog.events.EventTarget}
             */
            constructor(element: Document, opt_capture?: boolean);
    
            /**
             * @param {number} maxDeltaX Maximum magnitude for x delta on each mousewheel
             *     event. Should be non-negative.
             */
            setMaxDeltaX(maxDeltaX: number): void;
    
            /**
             * @param {number} maxDeltaY Maximum magnitude for y delta on each mousewheel
             *     event. Should be non-negative.
             */
            setMaxDeltaY(maxDeltaY: number): void;
    
            /**
             * Handles the events on the element.
             * @param {goog.events.BrowserEvent} e The underlying browser event.
             */
            handleEvent(e: goog.events.BrowserEvent): void;
        }
    }

    class MouseWheelEvent extends MouseWheelEvent.__Class { }
    module MouseWheelEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.BrowserEvent.__Class {
    
            /**
             * A base class for mouse wheel events. This is used with the
             * MouseWheelHandler.
             *
             * @param {number} detail The number of rows the user scrolled.
             * @param {Event} browserEvent Browser event object.
             * @param {number} deltaX The number of rows the user scrolled in the X
             *     direction.
             * @param {number} deltaY The number of rows the user scrolled in the Y
             *     direction.
             * @constructor
             * @extends {goog.events.BrowserEvent}
             * @final
             */
            constructor(detail: number, browserEvent: Event, deltaX: number, deltaY: number);
        }
    }
}

declare module goog.events.MouseWheelHandler {

    /**
     * Enum type for the events fired by the mouse wheel handler.
     * @enum {string}
     */
    enum EventType { MOUSEWHEEL } 
}
