/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />

declare module goog.testing.events_ {

    class _Event implements Event {
        /**
         * goog.events.BrowserEvent expects an Event so we provide one for JSCompiler.
         *
         * This clones a lot of the functionality of goog.events.Event. This used to
         * use a mixin, but the mixin results in confusing the two types when compiled.
         *
         * @param {string} type Event Type.
         * @param {Object=} opt_target Reference to the object that is the target of
         *     this event.
         * @constructor
         * @extends {Event}
         */
        constructor(type: string, opt_target?: Object);

        /**
         * Whether to cancel the event in internal capture/bubble processing for IE.
         * @type {boolean}
         * @public
         * @suppress {underscore|visibility} Technically public, but referencing this
         *     outside this package is strongly discouraged.
         */
        propagationStopped_: boolean;

        /**
         * Return value for in internal capture/bubble processing for IE.
         * @type {boolean}
         * @public
         * @suppress {underscore|visibility} Technically public, but referencing this
         *     outside this package is strongly discouraged.
         */
        returnValue_: boolean;

        timeStamp: number;
        defaultPrevented: boolean;
        isTrusted: boolean;
        currentTarget: EventTarget;
        cancelBubble: boolean;
        target: EventTarget;
        eventPhase: number;
        cancelable: boolean;
        type: string;
        srcElement: Element;
        bubbles: boolean;
        initEvent(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;
        stopPropagation(): void;
        stopImmediatePropagation(): void;
        preventDefault(): void;
        CAPTURING_PHASE: number;
        AT_TARGET: number;
        BUBBLING_PHASE: number;
    }
}

declare module goog.testing.events {

    /**
     * goog.events.BrowserEvent expects an Event so we provide one for JSCompiler.
     *
     * This clones a lot of the functionality of goog.events.Event. This used to
     * use a mixin, but the mixin results in confusing the two types when compiled.
     *
     * @param {string} type Event Type.
     * @param {Object=} opt_target Reference to the object that is the target of
     *     this event.
     * @constructor
     * @extends {Event}
     */
    class Event extends goog.testing.events_._Event { }

    /**
     * Simulates a mousedown, mouseup, and then click on the given event target,
     * with the left mouse button.
     * @param {EventTarget} target The target for the event.
     * @param {goog.events.BrowserEvent.MouseButton=} opt_button Mouse button;
     *     defaults to {@code goog.events.BrowserEvent.MouseButton.LEFT}.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the sequence: false if preventDefault()
     *     was called on any of the events, true otherwise.
     */
    function fireClickSequence(target: EventTarget, opt_button?: goog.events.BrowserEvent.MouseButton, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates the sequence of events fired by the browser when the user double-
     * clicks the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the sequence: false if preventDefault()
     *     was called on any of the events, true otherwise.
     */
    function fireDoubleClickSequence(target: EventTarget, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a complete keystroke (keydown, keypress, and keyup). Note that
     * if preventDefault is called on the keydown, the keypress will not fire.
     *
     * @param {EventTarget} target The target for the event.
     * @param {number} keyCode The keycode of the key pressed.
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the sequence: false if preventDefault()
     *     was called on any of the events, true otherwise.
     */
    function fireKeySequence(target: EventTarget, keyCode: number, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a complete keystroke (keydown, keypress, and keyup) when typing
     * a non-ASCII character. Same as fireKeySequence, the keypress will not fire
     * if preventDefault is called on the keydown.
     *
     * @param {EventTarget} target The target for the event.
     * @param {number} keyCode The keycode of the keydown and keyup events.
     * @param {number} keyPressKeyCode The keycode of the keypress event.
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the sequence: false if preventDefault()
     *     was called on any of the events, true otherwise.
     */
    function fireNonAsciiKeySequence(target: EventTarget, keyCode: number, keyPressKeyCode: number, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a mouseover event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {EventTarget} relatedTarget The related target for the event (e.g.,
     *     the node that the mouse is being moved out of).
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    function fireMouseOverEvent(target: EventTarget, relatedTarget: EventTarget, opt_coords?: goog.math.Coordinate): boolean;

    /**
     * Simulates a mousemove event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    function fireMouseMoveEvent(target: EventTarget, opt_coords?: goog.math.Coordinate): boolean;

    /**
     * Simulates a mouseout event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {EventTarget} relatedTarget The related target for the event (e.g.,
     *     the node that the mouse is being moved into).
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    function fireMouseOutEvent(target: EventTarget, relatedTarget: EventTarget, opt_coords?: goog.math.Coordinate): boolean;

    /**
     * Simulates a mousedown event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.events.BrowserEvent.MouseButton=} opt_button Mouse button;
     *     defaults to {@code goog.events.BrowserEvent.MouseButton.LEFT}.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    function fireMouseDownEvent(target: EventTarget, opt_button?: goog.events.BrowserEvent.MouseButton, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a mouseup event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.events.BrowserEvent.MouseButton=} opt_button Mouse button;
     *     defaults to {@code goog.events.BrowserEvent.MouseButton.LEFT}.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    function fireMouseUpEvent(target: EventTarget, opt_button?: goog.events.BrowserEvent.MouseButton, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a click event on the given target. IE only supports click with
     * the left mouse button.
     * @param {EventTarget} target The target for the event.
     * @param {goog.events.BrowserEvent.MouseButton=} opt_button Mouse button;
     *     defaults to {@code goog.events.BrowserEvent.MouseButton.LEFT}.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    function fireClickEvent(target: EventTarget, opt_button?: goog.events.BrowserEvent.MouseButton, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a double-click event on the given target. Always double-clicks
     * with the left mouse button since no browser supports double-clicking with
     * any other buttons.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    function fireDoubleClickEvent(target: EventTarget, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a contextmenu event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    function fireContextMenuEvent(target: EventTarget, opt_coords?: goog.math.Coordinate): boolean;

    /**
     * Simulates a mousedown, contextmenu, and the mouseup on the given event
     * target, with the right mouse button.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @return {boolean} The returnValue of the sequence: false if preventDefault()
     *     was called on any of the events, true otherwise.
     */
    function fireContextMenuSequence(target: EventTarget, opt_coords?: goog.math.Coordinate): boolean;

    /**
     * Simulates a popstate event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {Object} state History state object.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    function firePopStateEvent(target: EventTarget, state: Object): boolean;

    /**
     * Simulate a blur event on the given target.
     * @param {EventTarget} target The target for the event.
     * @return {boolean} The value returned by firing the blur browser event,
     *      which returns false iff 'preventDefault' was invoked.
     */
    function fireBlurEvent(target: EventTarget): boolean;

    /**
     * Simulate a focus event on the given target.
     * @param {EventTarget} target The target for the event.
     * @return {boolean} The value returned by firing the focus browser event,
     *     which returns false iff 'preventDefault' was invoked.
     */
    function fireFocusEvent(target: EventTarget): boolean;

    /**
     * Simulates an event's capturing and bubbling phases.
     * @param {Event} event A simulated native event. It will be wrapped in a
     *     normalized BrowserEvent and dispatched to Closure listeners on all
     *     ancestors of its target (inclusive).
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    function fireBrowserEvent(event: Event): boolean;

    /**
     * Simulates a touchstart event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Touch position. Defaults to event's
     *     target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    function fireTouchStartEvent(target: EventTarget, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a touchmove event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Touch position. Defaults to event's
     *     target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    function fireTouchMoveEvent(target: EventTarget, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a touchend event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Touch position. Defaults to event's
     *     target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    function fireTouchEndEvent(target: EventTarget, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a simple touch sequence on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Touch position. Defaults to event
     *     target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the sequence: false if preventDefault()
     *     was called on any of the events, true otherwise.
     */
    function fireTouchSequence(target: EventTarget, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Mixins a listenable into the given object. This turns the object
     * into a goog.events.Listenable. This is useful, for example, when
     * you need to mock a implementation of listenable and still want it
     * to work with goog.events.
     * @param {!Object} obj The object to mixin into.
     */
    function mixinListenable(obj: Object): void;
}

