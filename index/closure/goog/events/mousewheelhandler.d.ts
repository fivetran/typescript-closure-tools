// Generated Thu May  1 12:39:55 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />

declare module goog.events.MouseWheelHandler {

    /**
     * Enum type for the events fired by the mouse wheel handler.
     * @enum {string}
     */
    enum EventType { MOUSEWHEEL } 
}

declare module goog.events {

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
    class MouseWheelHandler extends goog.events.EventTarget {
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
        constructor(element: any /*Element|Document*/, opt_capture?: boolean);
    
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
    class MouseWheelEvent extends goog.events.BrowserEvent {
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

