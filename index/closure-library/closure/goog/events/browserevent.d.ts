/// <reference path="../../../globals.d.ts" />
/// <reference path="./event.d.ts" />

declare module goog.events {

    class BrowserEvent extends BrowserEvent__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class BrowserEvent__Class extends goog.events.Event__Class  { 
    
            /**
             * Accepts a browser event object and creates a patched, cross browser event
             * object.
             * The content of this object will not be initialized if no event object is
             * provided. If this is the case, init() needs to be invoked separately.
             * @param {Event=} opt_e Browser event object.
             * @param {EventTarget=} opt_currentTarget Current target for event.
             * @constructor
             * @extends {goog.events.Event}
             */
            constructor(opt_e?: Event, opt_currentTarget?: _EventTarget);
    
            /**
             * For mouseover and mouseout events, the related object for the event.
             * @type {Node}
             */
            relatedTarget: Node;
    
            /**
             * X-coordinate relative to target.
             * @type {number}
             */
            offsetX: number;
    
            /**
             * Y-coordinate relative to target.
             * @type {number}
             */
            offsetY: number;
    
            /**
             * X-coordinate relative to the window.
             * @type {number}
             */
            clientX: number;
    
            /**
             * Y-coordinate relative to the window.
             * @type {number}
             */
            clientY: number;
    
            /**
             * X-coordinate relative to the monitor.
             * @type {number}
             */
            screenX: number;
    
            /**
             * Y-coordinate relative to the monitor.
             * @type {number}
             */
            screenY: number;
    
            /**
             * Which mouse button was pressed.
             * @type {number}
             */
            button: number;
    
            /**
             * Keycode of key press.
             * @type {number}
             */
            keyCode: number;
    
            /**
             * Keycode of key press.
             * @type {number}
             */
            charCode: number;
    
            /**
             * Whether control was pressed at time of event.
             * @type {boolean}
             */
            ctrlKey: boolean;
    
            /**
             * Whether alt was pressed at time of event.
             * @type {boolean}
             */
            altKey: boolean;
    
            /**
             * Whether shift was pressed at time of event.
             * @type {boolean}
             */
            shiftKey: boolean;
    
            /**
             * Whether the meta key was pressed at time of event.
             * @type {boolean}
             */
            metaKey: boolean;
    
            /**
             * History state object, only set for PopState events where it's a copy of the
             * state object provided to pushState or replaceState.
             * @type {Object}
             */
            state: Object;
    
            /**
             * Whether the default platform modifier key was pressed at time of event.
             * (This is control for all platforms except Mac, where it's Meta.)
             * @type {boolean}
             */
            platformModifierKey: boolean;
    
            /**
             * Accepts a browser event object and creates a patched, cross browser event
             * object.
             * @param {Event} e Browser event object.
             * @param {EventTarget=} opt_currentTarget Current target for event.
             */
            init(e: Event, opt_currentTarget?: _EventTarget): void;
    
            /**
             * Tests to see which button was pressed during the event. This is really only
             * useful in IE and Gecko browsers. And in IE, it's only useful for
             * mousedown/mouseup events, because click only fires for the left mouse button.
             *
             * Safari 2 only reports the left button being clicked, and uses the value '1'
             * instead of 0. Opera only reports a mousedown event for the middle button, and
             * no mouse events for the right button. Opera has default behavior for left and
             * middle click that can only be overridden via a configuration setting.
             *
             * There's a nice table of this mess at http://www.unixpapa.com/js/mouse.html.
             *
             * @param {goog.events.BrowserEvent.MouseButton} button The button
             *     to test for.
             * @return {boolean} True if button was pressed.
             */
            isButton(button: goog.events.BrowserEvent.MouseButton): boolean;
    
            /**
             * Whether this has an "action"-producing mouse button.
             *
             * By definition, this includes left-click on windows/linux, and left-click
             * without the ctrl key on Macs.
             *
             * @return {boolean} The result.
             */
            isMouseActionButton(): boolean;
    
            /**
             * @return {Event} The underlying browser event object.
             */
            getBrowserEvent(): Event;
    } 
    
}

declare module goog.events.BrowserEvent {

    /**
     * Normalized button constants for the mouse.
     * @enum {number}
     */
    enum MouseButton { LEFT, MIDDLE, RIGHT } 

    /**
     * Static data for mapping mouse buttons.
     * @type {!Array.<number>}
     */
    var IEButtonMap: number[];
}
