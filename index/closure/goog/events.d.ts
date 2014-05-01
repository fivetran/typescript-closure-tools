// Generated Wed Apr 30 16:36:03 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/a11y/aria.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/async.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/log.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/net.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/style.d.ts" />
/// <reference path="../goog/testing.d.ts" />
/// <reference path="../goog/timer.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.events' {

    /**
     * Singleton instance of ActionEventWrapper_.
     * @type {goog.events.ActionEventWrapper_}
     */
    var actionEventWrapper: goog.events.ActionEventWrapper_;

    /**
     * Enum of browser capabilities.
     * @enum {boolean}
     */
    enum BrowserFeature { HAS_W3C_BUTTON, HAS_W3C_EVENT_SUPPORT, SET_KEY_CODE_TO_PREVENT_DEFAULT, HAS_NAVIGATOR_ONLINE_PROPERTY, HAS_HTML5_NETWORK_EVENT_SUPPORT, HTML5_NETWORK_EVENTS_FIRE_ON_BODY, TOUCH_ENABLED } 

    /**
     * A typedef for event like objects that are dispatchable via the
     * goog.events.dispatchEvent function. strings are treated as the type for a
     * goog.events.Event. Objects are treated as an extension of a new
     * goog.events.Event with the type property of the object being used as the type
     * of the Event.
     * @typedef {string|Object|goog.events.Event|goog.events.EventId}
     */
    interface EventLike { /*any (string|Object|goog.events.Event|goog.events.EventId)*/ }

    /**
     * @typedef {number|goog.events.ListenableKey}
     */
    interface Key { /*any (number|goog.events.ListenableKey)*/ }

    /**
     * @typedef {EventTarget|goog.events.Listenable}
     */
    interface ListenableType { /*any (EventTarget|goog.events.Listenable)*/ }

    /**
     * Container for storing event listeners and their proxies
     *
     * TODO(user): Remove this when all external usage is
     * purged. goog.events no longer use goog.events.listeners_ for
     * anything meaningful.
     *
     * @private {!Object.<goog.events.ListenableKey>}
     */
    var listeners_: any /*missing*/;

    /**
     * @enum {number} Different capture simulation mode for IE8-.
     */
    enum CaptureSimulationMode { OFF_AND_FAIL, OFF_AND_SILENT, ON } 

    /**
     * Estimated count of total native listeners.
     * @private {number}
     */
    var listenerCountEstimate_: any /*missing*/;

    /**
     * Adds an event listener for a specific event on a native event
     * target (such as a DOM element) or an object that has implemented
     * {@link goog.events.Listenable}. A listener can only be added once
     * to an object and if it is added again the key for the listener is
     * returned. Note that if the existing listener is a one-off listener
     * (registered via listenOnce), it will no longer be a one-off
     * listener after a call to listen().
     *
     * @param {EventTarget|goog.events.Listenable} src The node to listen
     *     to events on.
     * @param {string|Array.<string>|
     *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
     *     type Event type or array of event types.
     * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(?):?}|null}
     *     listener Callback method, or an object with a handleEvent function.
     *     WARNING: passing an Object is now softly deprecated.
     * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
     *     false).
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.Key} Unique key for the listener.
     * @template T,EVENTOBJ
     */
    function listen(src: any /*EventTarget|goog.events.Listenable*/): void;

    /**
     * Helper function for returning a proxy function.
     * @return {Function} A new or reused function object.
     */
    function getProxy(): Function;

    /**
     * Adds an event listener for a specific event on a native event
     * target (such as a DOM element) or an object that has implemented
     * {@link goog.events.Listenable}. After the event has fired the event
     * listener is removed from the target.
     *
     * If an existing listener already exists, listenOnce will do
     * nothing. In particular, if the listener was previously registered
     * via listen(), listenOnce() will not turn the listener into a
     * one-off listener. Similarly, if there is already an existing
     * one-off listener, listenOnce does not modify the listeners (it is
     * still a once listener).
     *
     * @param {EventTarget|goog.events.Listenable} src The node to listen
     *     to events on.
     * @param {string|Array.<string>|
     *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
     *     type Event type or array of event types.
     * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(?):?}|null}
     *     listener Callback method.
     * @param {boolean=} opt_capt Fire in capture phase?.
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.Key} Unique key for the listener.
     * @template T,EVENTOBJ
     */
    function listenOnce(src: any /*EventTarget|goog.events.Listenable*/): void;

    /**
     * Adds an event listener with a specific event wrapper on a DOM Node or an
     * object that has implemented {@link goog.events.Listenable}. A listener can
     * only be added once to an object.
     *
     * @param {EventTarget|goog.events.Listenable} src The target to
     *     listen to events on.
     * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
     * @param {function(this:T, ?):?|{handleEvent:function(?):?}|null} listener
     *     Callback method, or an object with a handleEvent function.
     * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
     *     false).
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @template T
     */
    function listenWithWrapper<T>(src: any /*EventTarget|goog.events.Listenable*/, wrapper: goog.events.EventWrapper, listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, opt_capt?: boolean, opt_handler?: T): void;

    /**
     * Removes an event listener which was added with listen().
     *
     * @param {EventTarget|goog.events.Listenable} src The target to stop
     *     listening to events on.
     * @param {string|Array.<string>|
     *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
     *     type Event type or array of event types to unlisten to.
     * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to remove.
     * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
     *     whether the listener is fired during the capture or bubble phase of the
     *     event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     * @return {?boolean} indicating whether the listener was there to remove.
     * @template EVENTOBJ
     */
    function unlisten(src: any /*EventTarget|goog.events.Listenable*/): void;

    /**
     * Removes an event listener which was added with listen() by the key
     * returned by listen().
     *
     * @param {goog.events.Key} key The key returned by listen() for this
     *     event listener.
     * @return {boolean} indicating whether the listener was there to remove.
     */
    function unlistenByKey(key: goog.events.Key): boolean;

    /**
     * Removes an event listener which was added with listenWithWrapper().
     *
     * @param {EventTarget|goog.events.Listenable} src The target to stop
     *     listening to events on.
     * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
     * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to remove.
     * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
     *     whether the listener is fired during the capture or bubble phase of the
     *     event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     */
    function unlistenWithWrapper(src: any /*EventTarget|goog.events.Listenable*/, wrapper: goog.events.EventWrapper, listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, opt_capt?: boolean, opt_handler?: Object): void;

    /**
     * Removes all listeners from an object. You can also optionally
     * remove listeners of a particular type.
     *
     * @param {Object=} opt_obj Object to remove listeners from. Not
     *     specifying opt_obj is now DEPRECATED (it used to remove all
     *     registered listeners).
     * @param {string|!goog.events.EventId=} opt_type Type of event to remove.
     *     Default is all types.
     * @return {number} Number of listeners removed.
     */
    function removeAll(opt_obj?: Object, opt_type?: any /*string|goog.events.EventId*/): number;

    /**
     * Removes all native listeners registered via goog.events. Native
     * listeners are listeners on native browser objects (such as DOM
     * elements). In particular, goog.events.Listenable and
     * goog.events.EventTarget listeners will NOT be removed.
     * @return {number} Number of listeners removed.
     * @deprecated This doesn't do anything, now that Closure no longer
     * stores a central listener registry.
     */
    function removeAllNativeListeners(): number;

    /**
     * Gets the listeners for a given object, type and capture phase.
     *
     * @param {Object} obj Object to get listeners for.
     * @param {string|!goog.events.EventId} type Event type.
     * @param {boolean} capture Capture phase?.
     * @return {Array.<goog.events.Listener>} Array of listener objects.
     */
    function getListeners(obj: Object, type: any /*string|goog.events.EventId*/, capture: boolean): goog.events.Listener[];

    /**
     * Gets the goog.events.Listener for the event or null if no such listener is
     * in use.
     *
     * @param {EventTarget|goog.events.Listenable} src The target from
     *     which to get listeners.
     * @param {?string|!goog.events.EventId.<EVENTOBJ>} type The type of the event.
     * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to get.
     * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
     *                            whether the listener is fired during the
     *                            capture or bubble phase of the event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.ListenableKey} the found listener or null if not found.
     * @template EVENTOBJ
     */
    function getListener<EVENTOBJ>(src: any /*EventTarget|goog.events.Listenable*/, type: any /*string|goog.events.EventId<EVENTOBJ>*/, listener: any /*(_0: EVENTOBJ) => any|{ handleEvent: (_0: any) => any }|any (null)*/, opt_capt?: boolean, opt_handler?: Object): goog.events.ListenableKey;

    /**
     * Returns whether an event target has any active listeners matching the
     * specified signature. If either the type or capture parameters are
     * unspecified, the function will match on the remaining criteria.
     *
     * @param {EventTarget|goog.events.Listenable} obj Target to get
     *     listeners for.
     * @param {string|!goog.events.EventId=} opt_type Event type.
     * @param {boolean=} opt_capture Whether to check for capture or bubble-phase
     *     listeners.
     * @return {boolean} Whether an event target has one or more listeners matching
     *     the requested type and/or capture phase.
     */
    function hasListener(obj: any /*EventTarget|goog.events.Listenable*/, opt_type?: any /*string|goog.events.EventId*/, opt_capture?: boolean): boolean;

    /**
     * Provides a nice string showing the normalized event objects public members
     * @param {Object} e Event Object.
     * @return {string} String of the public members of the normalized event object.
     */
    function expose(e: Object): string;

    /**
     * Fires an object's listeners of a particular type and phase
     *
     * @param {Object} obj Object whose listeners to call.
     * @param {string|!goog.events.EventId} type Event type.
     * @param {boolean} capture Which event phase.
     * @param {Object} eventObject Event object to be passed to listener.
     * @return {boolean} True if all listeners returned true else false.
     */
    function fireListeners(obj: Object, type: any /*string|goog.events.EventId*/, capture: boolean, eventObject: Object): boolean;

    /**
     * Fires a listener with a set of arguments
     *
     * @param {goog.events.Listener} listener The listener object to call.
     * @param {Object} eventObject The event object to pass to the listener.
     * @return {boolean} Result of listener.
     */
    function fireListener(listener: goog.events.Listener, eventObject: Object): boolean;

    /**
     * Gets the total number of listeners currently in the system.
     * @return {number} Number of listeners.
     * @deprecated This returns estimated count, now that Closure no longer
     * stores a central listener registry. We still return an estimation
     * to keep existing listener-related tests passing. In the near future,
     * this function will be removed.
     */
    function getTotalListenerCount(): number;

    /**
     * Dispatches an event (or event like object) and calls all listeners
     * listening for events of this type. The type of the event is decided by the
     * type property on the event object.
     *
     * If any of the listeners returns false OR calls preventDefault then this
     * function will return false.  If one of the capture listeners calls
     * stopPropagation, then the bubble listeners won't fire.
     *
     * @param {goog.events.Listenable} src The event target.
     * @param {goog.events.EventLike} e Event object.
     * @return {boolean} If anyone called preventDefault on the event object (or
     *     if any of the handlers returns false) this will also return false.
     *     If there are no handlers, or if all handlers return true, this returns
     *     true.
     */
    function dispatchEvent(src: goog.events.Listenable, e: goog.events.EventLike): boolean;

    /**
     * Installs exception protection for the browser event entry point using the
     * given error handler.
     *
     * @param {goog.debug.ErrorHandler} errorHandler Error handler with which to
     *     protect the entry point.
     */
    function protectBrowserEventEntryPoint(errorHandler: goog.debug.ErrorHandler): void;

    /**
     * Handles an event and dispatches it to the correct listeners. This
     * function is a proxy for the real listener the user specified.
     *
     * @param {goog.events.Listener} listener The listener object.
     * @param {Event=} opt_evt Optional event object that gets passed in via the
     *     native event handlers.
     * @return {boolean} Result of the event handler.
     * @this {EventTarget} The object or Element that fired the event.
     * @private
     */
    function handleBrowserEvent_(listener: goog.events.Listener, opt_evt?: Event): boolean;

    /**
     * Counter to create unique event ids.
     * @private {number}
     */
    var uniqueIdCounter_: any /*missing*/;

    /**
     * Creates a unique event id.
     *
     * @param {string} identifier The identifier.
     * @return {string} A unique identifier.
     * @idGenerator
     */
    function getUniqueId(identifier: string): string;

    /**
     * @param {Object|Function} listener The listener function or an
     *     object that contains handleEvent method.
     * @return {!Function} Either the original function or a function that
     *     calls obj.handleEvent. If the same listener is passed to this
     *     function more than once, the same function is guaranteed to be
     *     returned.
     */
    function wrapListener(listener: any /*Object|Function*/): Function;

    /**
     * Constants for event names.
     * @enum {string}
     */
    enum EventType { CLICK, DBLCLICK, MOUSEDOWN, MOUSEUP, MOUSEOVER, MOUSEOUT, MOUSEMOVE, MOUSEENTER, MOUSELEAVE, SELECTSTART, KEYPRESS, KEYDOWN, KEYUP, BLUR, FOCUS, DEACTIVATE, FOCUSIN, FOCUSOUT, CHANGE, SELECT, SUBMIT, INPUT, PROPERTYCHANGE, DRAGSTART, DRAG, DRAGENTER, DRAGOVER, DRAGLEAVE, DROP, DRAGEND, TOUCHSTART, TOUCHMOVE, TOUCHEND, TOUCHCANCEL, BEFOREUNLOAD, CONSOLEMESSAGE, CONTEXTMENU, DOMCONTENTLOADED, ERROR, HELP, LOAD, LOSECAPTURE, ORIENTATIONCHANGE, READYSTATECHANGE, RESIZE, SCROLL, UNLOAD, HASHCHANGE, PAGEHIDE, PAGESHOW, POPSTATE, COPY, PASTE, CUT, BEFORECOPY, BEFORECUT, BEFOREPASTE, ONLINE, OFFLINE, MESSAGE, CONNECT, ANIMATIONSTART, ANIMATIONEND, ANIMATIONITERATION, TRANSITIONEND, POINTERDOWN, POINTERUP, POINTERCANCEL, POINTERMOVE, POINTEROVER, POINTEROUT, POINTERENTER, POINTERLEAVE, GOTPOINTERCAPTURE, LOSTPOINTERCAPTURE, MSGESTURECHANGE, MSGESTUREEND, MSGESTUREHOLD, MSGESTURESTART, MSGESTURETAP, MSGOTPOINTERCAPTURE, MSINERTIASTART, MSLOSTPOINTERCAPTURE, MSPOINTERCANCEL, MSPOINTERDOWN, MSPOINTERENTER, MSPOINTERHOVER, MSPOINTERLEAVE, MSPOINTERMOVE, MSPOINTEROUT, MSPOINTEROVER, MSPOINTERUP, TEXTINPUT, COMPOSITIONSTART, COMPOSITIONUPDATE, COMPOSITIONEND, EXIT, LOADABORT, LOADCOMMIT, LOADREDIRECT, LOADSTART, LOADSTOP, RESPONSIVE, SIZECHANGED, UNRESPONSIVE, VISIBILITYCHANGE, STORAGE, DOMSUBTREEMODIFIED, DOMNODEINSERTED, DOMNODEREMOVED, DOMNODEREMOVEDFROMDOCUMENT, DOMNODEINSERTEDINTODOCUMENT, DOMATTRMODIFIED, DOMCHARACTERDATAMODIFIED } 

    /**
     * Key codes for common characters.
     *
     * This list is not localized and therefore some of the key codes are not
     * correct for non US keyboard layouts. See comments below.
     *
     * @enum {number}
     */
    enum KeyCodes { WIN_KEY_FF_LINUX, MAC_ENTER, BACKSPACE, TAB, NUM_CENTER, ENTER, SHIFT, CTRL, ALT, PAUSE, CAPS_LOCK, ESC, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT, UP, RIGHT, DOWN, PRINT_SCREEN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, FF_SEMICOLON, FF_EQUALS, FF_DASH, QUESTION_MARK, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, META, WIN_KEY_RIGHT, CONTEXT_MENU, NUM_ZERO, NUM_ONE, NUM_TWO, NUM_THREE, NUM_FOUR, NUM_FIVE, NUM_SIX, NUM_SEVEN, NUM_EIGHT, NUM_NINE, NUM_MULTIPLY, NUM_PLUS, NUM_MINUS, NUM_PERIOD, NUM_DIVISION, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, NUMLOCK, SCROLL_LOCK, FIRST_MEDIA_KEY, LAST_MEDIA_KEY, SEMICOLON, DASH, EQUALS, COMMA, PERIOD, SLASH, APOSTROPHE, TILDE, SINGLE_QUOTE, OPEN_SQUARE_BRACKET, BACKSLASH, CLOSE_SQUARE_BRACKET, WIN_KEY, MAC_FF_META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, WIN_IME, PHANTOM } 

    /**
     * Key names for common characters. These should be used with keyup/keydown
     * events, since the .keyCode property on those is meant to indicate the
     * *physical key* the user held down on the keyboard. Hence the mapping uses
     * only the unshifted version of each key (e.g. no '#', since that's shift+3).
     * Keypress events on the other hand generate (mostly) ASCII codes since they
     * correspond to *characters* the user typed.
     *
     * For further reference: http://unixpapa.com/js/key.html
     *
     * This list is not localized and therefore some of the key codes are not
     * correct for non-US keyboard layouts.
     *
     * @see goog.events.KeyCodes
     * @enum {string}
     */
    enum KeyNames { 8, 9, 13, 16, 17, 18, 19, 20, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 61, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 93, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 186, 187, 189, 188, 190, 191, 192, 219, 220, 221, 222, 224 } 

    /**
     * Interface for event wrappers.
     * @interface
     */
    interface EventWrapper {
        listen(src: goog.events.ListenableType, listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, opt_capt?: boolean, opt_scope?: Object, opt_eventHandler?: goog.events.EventHandler): void;
        unlisten(src: goog.events.ListenableType, listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, opt_capt?: boolean, opt_scope?: Object, opt_eventHandler?: goog.events.EventHandler): void;
    }

    /**
     * A listenable interface. A listenable is an object with the ability
     * to dispatch/broadcast events to "event listeners" registered via
     * listen/listenOnce.
     *
     * The interface allows for an event propagation mechanism similar
     * to one offered by native browser event targets, such as
     * capture/bubble mechanism, stopping propagation, and preventing
     * default actions. Capture/bubble mechanism depends on the ancestor
     * tree constructed via {@code #getParentEventTarget}; this tree
     * must be directed acyclic graph. The meaning of default action(s)
     * in preventDefault is specific to a particular use case.
     *
     * Implementations that do not support capture/bubble or can not have
     * a parent listenable can simply not implement any ability to set the
     * parent listenable (and have {@code #getParentEventTarget} return
     * null).
     *
     * Implementation of this class can be used with or independently from
     * goog.events.
     *
     * Implementation must call {@code #addImplementation(implClass)}.
     *
     * @interface
     * @see goog.events
     * @see http://www.w3.org/TR/DOM-Level-2-Events/events.html
     */
    interface Listenable {
        listen: any /*missing*/;
        listenOnce: any /*missing*/;
        unlisten: any /*missing*/;
        unlistenByKey: any /*missing*/;
        dispatchEvent: any /*missing*/;
        removeAllListeners: any /*missing*/;
        getParentEventTarget: any /*missing*/;
        fireListeners: any /*missing*/;
        getListeners: any /*missing*/;
        getListener: any /*missing*/;
        hasListener: any /*missing*/;
    }

    /**
     * An interface that describes a single registered listener.
     * @interface
     */
    interface ListenableKey {
        src: any /*Object|goog.events.Listenable|goog.events.EventTarget*/;
        type: string;
        listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/;
        capture: boolean;
        handler: Object;
        key: number;
    }

    /**
     * A wrapper around an element that you want to listen to ACTION events on.
     * @param {Element|Document} element The element or document to listen on.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class ActionHandler extends goog.events.EventTarget {
        /**
         * A wrapper around an element that you want to listen to ACTION events on.
         * @param {Element|Document} element The element or document to listen on.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(element: any /*Element|Document*/);
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * This class is used for the goog.events.ActionHandler.EventType.ACTION event.
     * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
     * @constructor
     * @extends {goog.events.BrowserEvent}
     * @final
     */
    class ActionEvent extends goog.events.BrowserEvent {
        /**
         * This class is used for the goog.events.ActionHandler.EventType.ACTION event.
         * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
         * @constructor
         * @extends {goog.events.BrowserEvent}
         * @final
         */
        constructor(browserEvent: goog.events.BrowserEvent);
    }

    /**
     * This class is used for the goog.events.ActionHandler.EventType.BEFOREACTION
     * event. BEFOREACTION gives a chance to the application so the keyboard focus
     * can be restored back, if required.
     * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
     * @constructor
     * @extends {goog.events.BrowserEvent}
     * @final
     */
    class BeforeActionEvent extends goog.events.BrowserEvent {
        /**
         * This class is used for the goog.events.ActionHandler.EventType.BEFOREACTION
         * event. BEFOREACTION gives a chance to the application so the keyboard focus
         * can be restored back, if required.
         * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
         * @constructor
         * @extends {goog.events.BrowserEvent}
         * @final
         */
        constructor(browserEvent: goog.events.BrowserEvent);
    }

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
    class BrowserEvent extends goog.events.Event {
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
        constructor(opt_e?: Event, opt_currentTarget?: EventTarget);
    
        /**
         * Accepts a browser event object and creates a patched, cross browser event
         * object.
         * @param {Event} e Browser event object.
         * @param {EventTarget=} opt_currentTarget Current target for event.
         */
        init(e: Event, opt_currentTarget?: EventTarget): void;
    
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
         * @override
         */
        stopPropagation(): void;
    
        /**
         * @override
         */
        preventDefault(): void;
    
        /**
         * @return {Event} The underlying browser event object.
         */
        getBrowserEvent(): Event;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Super class for objects that want to easily manage a number of event
     * listeners.  It allows a short cut to listen and also provides a quick way
     * to remove all events listeners belonging to this object.
     * @param {SCOPE=} opt_scope Object in whose scope to call the listeners.
     * @constructor
     * @extends {goog.Disposable}
     * @template SCOPE
     */
    class EventHandler extends goog.Disposable {
        /**
         * Super class for objects that want to easily manage a number of event
         * listeners.  It allows a short cut to listen and also provides a quick way
         * to remove all events listeners belonging to this object.
         * @param {SCOPE=} opt_scope Object in whose scope to call the listeners.
         * @constructor
         * @extends {goog.Disposable}
         * @template SCOPE
         */
        constructor(opt_scope?: SCOPE);
    
        /**
         * Listen to an event on a Listenable.  If the function is omitted then the
         * EventHandler's handleEvent method will be used.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:SCOPE, EVENTOBJ):?|{handleEvent:function(?):?}|null=}
         *     opt_fn Optional callback function to be used as the listener or an object
         *     with handleEvent function.
         * @param {boolean=} opt_capture Optional whether to use capture phase.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template EVENTOBJ
         */
        listen(src: goog.events.ListenableType): void;
    
        /**
         * Listen to an event on a Listenable.  If the function is omitted then the
         * EventHandler's handleEvent method will be used.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(this:T, ?):?}|
         *     null|undefined} fn Optional callback function to be used as the
         *     listener or an object with handleEvent function.
         * @param {boolean|undefined} capture Optional whether to use capture phase.
         * @param {T} scope Object in whose scope to call the listener.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template T,EVENTOBJ
         */
        listenWithScope(src: goog.events.ListenableType): void;
    
        /**
         * Listen to an event on a Listenable.  If the function is omitted then the
         * EventHandler's handleEvent method will be used.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null=} opt_fn
         *     Optional callback function to be used as the listener or an object with
         *     handleEvent function.
         * @param {boolean=} opt_capture Optional whether to use capture phase.
         * @param {Object=} opt_scope Object in whose scope to call the listener.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template EVENTOBJ
         * @private
         */
        listen_(src: goog.events.ListenableType): void;
    
        /**
         * Listen to an event on a Listenable.  If the function is omitted, then the
         * EventHandler's handleEvent method will be used. After the event has fired the
         * event listener is removed from the target. If an array of event types is
         * provided, each event type will be listened to once.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:SCOPE, EVENTOBJ):?|{handleEvent:function(?):?}|null=} opt_fn
         *    Optional callback function to be used as the listener or an object with
         *    handleEvent function.
         * @param {boolean=} opt_capture Optional whether to use capture phase.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template EVENTOBJ
         */
        listenOnce(src: goog.events.ListenableType): void;
    
        /**
         * Listen to an event on a Listenable.  If the function is omitted, then the
         * EventHandler's handleEvent method will be used. After the event has fired the
         * event listener is removed from the target. If an array of event types is
         * provided, each event type will be listened to once.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(this:T, ?):?}|
         *     null|undefined} fn Optional callback function to be used as the
         *     listener or an object with handleEvent function.
         * @param {boolean|undefined} capture Optional whether to use capture phase.
         * @param {T} scope Object in whose scope to call the listener.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template T,EVENTOBJ
         */
        listenOnceWithScope(src: goog.events.ListenableType): void;
    
        /**
         * Listen to an event on a Listenable.  If the function is omitted, then the
         * EventHandler's handleEvent method will be used. After the event has fired
         * the event listener is removed from the target. If an array of event types is
         * provided, each event type will be listened to once.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null=} opt_fn
         *    Optional callback function to be used as the listener or an object with
         *    handleEvent function.
         * @param {boolean=} opt_capture Optional whether to use capture phase.
         * @param {Object=} opt_scope Object in whose scope to call the listener.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template EVENTOBJ
         * @private
         */
        listenOnce_(src: goog.events.ListenableType): void;
    
        /**
         * Adds an event listener with a specific event wrapper on a DOM Node or an
         * object that has implemented {@link goog.events.EventTarget}. A listener can
         * only be added once to an object.
         *
         * @param {EventTarget|goog.events.EventTarget} src The node to listen to
         *     events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(this:SCOPE, ?):?|{handleEvent:function(?):?}|null} listener
         *     Callback method, or an object with a handleEvent function.
         * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
         *     false).
         * @return {goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         */
        listenWithWrapper(src: any /*EventTarget|goog.events.EventTarget*/, wrapper: goog.events.EventWrapper, listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, opt_capt?: boolean): goog.events.EventHandler;
    
        /**
         * Adds an event listener with a specific event wrapper on a DOM Node or an
         * object that has implemented {@link goog.events.EventTarget}. A listener can
         * only be added once to an object.
         *
         * @param {EventTarget|goog.events.EventTarget} src The node to listen to
         *     events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(this:T, ?):?|{handleEvent:function(this:T, ?):?}|null}
         *     listener Optional callback function to be used as the
         *     listener or an object with handleEvent function.
         * @param {boolean|undefined} capture Optional whether to use capture phase.
         * @param {T} scope Object in whose scope to call the listener.
         * @return {goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template T
         */
        listenWithWrapperAndScope(src: any /*EventTarget|goog.events.EventTarget*/, wrapper: goog.events.EventWrapper, listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, capture: any /*boolean|any (undefined)*/, scope: T): goog.events.EventHandler;
    
        /**
         * @return {number} Number of listeners registered by this handler.
         */
        getListenerCount(): number;
    
        /**
         * Unlistens on an event.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type or array of event types to unlisten to.
         * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null=} opt_fn
         *     Optional callback function to be used as the listener or an object with
         *     handleEvent function.
         * @param {boolean=} opt_capture Optional whether to use capture phase.
         * @param {Object=} opt_scope Object in whose scope to call the listener.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template EVENTOBJ
         */
        unlisten(src: goog.events.ListenableType): void;
    
        /**
         * Removes an event listener which was added with listenWithWrapper().
         *
         * @param {EventTarget|goog.events.EventTarget} src The target to stop
         *     listening to events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
         *     listener function to remove.
         * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
         *     whether the listener is fired during the capture or bubble phase of the
         *     event.
         * @param {Object=} opt_scope Element in whose scope to call the listener.
         * @return {goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         */
        unlistenWithWrapper(src: any /*EventTarget|goog.events.EventTarget*/, wrapper: goog.events.EventWrapper, listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, opt_capt?: boolean, opt_scope?: Object): goog.events.EventHandler;
    
        /**
         * Unlistens to all events.
         */
        removeAll(): void;
    
        /**
         * Disposes of this EventHandler and removes all listeners that it registered.
         * @override
         * @protected
         */
        disposeInternal(): void;
    
        /**
         * Default event handler
         * @param {goog.events.Event} e Event object.
         */
        handleEvent(e: goog.events.Event): void;
    }

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
    class EventId {
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
    
        /**
         * @override
         */
        toString(): void;
    }

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
    class Event {
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
        constructor(type: any /*string|goog.events.EventId*/, opt_target?: Object);
    
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

    /**
     * An implementation of {@code goog.events.Listenable} with full W3C
     * EventTarget-like support (capture/bubble mechanism, stopping event
     * propagation, preventing default actions).
     *
     * You may subclass this class to turn your class into a Listenable.
     *
     * Unless propagation is stopped, an event dispatched by an
     * EventTarget will bubble to the parent returned by
     * {@code getParentEventTarget}. To set the parent, call
     * {@code setParentEventTarget}. Subclasses that don't support
     * changing the parent can override the setter to throw an error.
     *
     * Example usage:
     * <pre>
     *   var source = new goog.events.EventTarget();
     *   function handleEvent(e) {
     *     alert('Type: ' + e.type + '; Target: ' + e.target);
     *   }
     *   source.listen('foo', handleEvent);
     *   // Or: goog.events.listen(source, 'foo', handleEvent);
     *   ...
     *   source.dispatchEvent('foo');  // will call handleEvent
     *   ...
     *   source.unlisten('foo', handleEvent);
     *   // Or: goog.events.unlisten(source, 'foo', handleEvent);
     * </pre>
     *
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.events.Listenable}
     */
    class EventTarget extends goog.Disposable implements goog.events.Listenable {
        /**
         * An implementation of {@code goog.events.Listenable} with full W3C
         * EventTarget-like support (capture/bubble mechanism, stopping event
         * propagation, preventing default actions).
         *
         * You may subclass this class to turn your class into a Listenable.
         *
         * Unless propagation is stopped, an event dispatched by an
         * EventTarget will bubble to the parent returned by
         * {@code getParentEventTarget}. To set the parent, call
         * {@code setParentEventTarget}. Subclasses that don't support
         * changing the parent can override the setter to throw an error.
         *
         * Example usage:
         * <pre>
         *   var source = new goog.events.EventTarget();
         *   function handleEvent(e) {
         *     alert('Type: ' + e.type + '; Target: ' + e.target);
         *   }
         *   source.listen('foo', handleEvent);
         *   // Or: goog.events.listen(source, 'foo', handleEvent);
         *   ...
         *   source.dispatchEvent('foo');  // will call handleEvent
         *   ...
         *   source.unlisten('foo', handleEvent);
         *   // Or: goog.events.unlisten(source, 'foo', handleEvent);
         * </pre>
         *
         * @constructor
         * @extends {goog.Disposable}
         * @implements {goog.events.Listenable}
         */
        constructor();
    
        /**
         * Returns the parent of this event target to use for bubbling.
         *
         * @return {goog.events.EventTarget} The parent EventTarget or null if
         *     there is no parent.
         * @override
         */
        getParentEventTarget(): goog.events.EventTarget;
    
        /**
         * Sets the parent of this event target to use for capture/bubble
         * mechanism.
         * @param {goog.events.EventTarget} parent Parent listenable (null if none).
         */
        setParentEventTarget(parent: goog.events.EventTarget): void;
    
        /**
         * Adds an event listener to the event target. The same handler can only be
         * added once per the type. Even if you add the same handler multiple times
         * using the same type then it will only be called once when the event is
         * dispatched.
         *
         * @param {string} type The type of the event to listen for.
         * @param {function(?):?|{handleEvent:function(?):?}|null} handler The function
         *     to handle the event. The handler can also be an object that implements
         *     the handleEvent method which takes the event object as argument.
         * @param {boolean=} opt_capture In DOM-compliant browsers, this determines
         *     whether the listener is fired during the capture or bubble phase
         *     of the event.
         * @param {Object=} opt_handlerScope Object in whose scope to call
         *     the listener.
         * @deprecated Use {@code #listen} instead, when possible. Otherwise, use
         *     {@code goog.events.listen} if you are passing Object
         *     (instead of Function) as handler.
         */
        addEventListener(type: string, handler: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, opt_capture?: boolean, opt_handlerScope?: Object): void;
    
        /**
         * Removes an event listener from the event target. The handler must be the
         * same object as the one added. If the handler has not been added then
         * nothing is done.
         *
         * @param {string} type The type of the event to listen for.
         * @param {function(?):?|{handleEvent:function(?):?}|null} handler The function
         *     to handle the event. The handler can also be an object that implements
         *     the handleEvent method which takes the event object as argument.
         * @param {boolean=} opt_capture In DOM-compliant browsers, this determines
         *     whether the listener is fired during the capture or bubble phase
         *     of the event.
         * @param {Object=} opt_handlerScope Object in whose scope to call
         *     the listener.
         * @deprecated Use {@code #unlisten} instead, when possible. Otherwise, use
         *     {@code goog.events.unlisten} if you are passing Object
         *     (instead of Function) as handler.
         */
        removeEventListener(type: string, handler: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, opt_capture?: boolean, opt_handlerScope?: Object): void;
    
        /** @override */
        dispatchEvent(): void;
    
        /**
         * Removes listeners from this object.  Classes that extend EventTarget may
         * need to override this method in order to remove references to DOM Elements
         * and additional listeners.
         * @override
         */
        disposeInternal(): void;
    
        /** @override */
        listen(): void;
    
        /** @override */
        listenOnce(): void;
    
        /** @override */
        unlisten(): void;
    
        /** @override */
        unlistenByKey(): void;
    
        /** @override */
        removeAllListeners(): void;
    
        /** @override */
        fireListeners(): void;
    
        /** @override */
        getListeners(): void;
    
        /** @override */
        getListener(): void;
    
        /** @override */
        hasListener(): void;
    
        /**
         * Sets the target to be used for {@code event.target} when firing
         * event. Mainly used for testing. For example, see
         * {@code goog.testing.events.mixinListenable}.
         * @param {!Object} target The target.
         */
        setTargetForTesting(target: Object): void;
    }

    /**
     * A files drag and drop event detector. Gets an {@code element} as parameter
     * and fires {@code goog.events.FileDropHandler.EventType.DROP} event when files
     * are dropped in the {@code element}.
     *
     * @param {Element|Document} element The element or document to listen on.
     * @param {boolean=} opt_preventDropOutside Whether to prevent a drop on the
     *     area outside the {@code element}. Default false.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class FileDropHandler extends goog.events.EventTarget {
        /**
         * A files drag and drop event detector. Gets an {@code element} as parameter
         * and fires {@code goog.events.FileDropHandler.EventType.DROP} event when files
         * are dropped in the {@code element}.
         *
         * @param {Element|Document} element The element or document to listen on.
         * @param {boolean=} opt_preventDropOutside Whether to prevent a drop on the
         *     area outside the {@code element}. Default false.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(element: any /*Element|Document*/, opt_preventDropOutside?: boolean);
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * This event handler allows you to catch focus events when descendants gain or
     * loses focus.
     * @param {Element|Document} element  The node to listen on.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class FocusHandler extends goog.events.EventTarget {
        /**
         * This event handler allows you to catch focus events when descendants gain or
         * loses focus.
         * @param {Element|Document} element  The node to listen on.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(element: any /*Element|Document*/);
    
        /**
         * This handles the underlying events and dispatches a new event.
         * @param {goog.events.BrowserEvent} e  The underlying browser event.
         */
        handleEvent(e: goog.events.BrowserEvent): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Dispatches high-level events for IMEs.
     * @param {Element} el The element to listen on.
     * @extends {goog.events.EventTarget}
     * @constructor
     * @final
     */
    class ImeHandler extends goog.events.EventTarget {
        /**
         * Dispatches high-level events for IMEs.
         * @param {Element} el The element to listen on.
         * @extends {goog.events.EventTarget}
         * @constructor
         * @final
         */
        constructor(el: Element);
    
        /**
         * @return {boolean} Whether an IME is active.
         */
        isImeMode(): boolean;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * This event handler will dispatch events when the user types into a text
     * input, password input or a textarea
     * @param {Element} element  The element that you want to listen for input
     *     events on.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class InputHandler extends goog.events.EventTarget {
        /**
         * This event handler will dispatch events when the user types into a text
         * input, password input or a textarea
         * @param {Element} element  The element that you want to listen for input
         *     events on.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(element: Element);
    
        /**
         * This handles the underlying events and dispatches a new event as needed.
         * @param {goog.events.BrowserEvent} e The underlying browser event.
         */
        handleEvent(e: goog.events.BrowserEvent): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * A wrapper around an element that you want to listen to keyboard events on.
     * @param {Element|Document=} opt_element The element or document to listen on.
     * @param {boolean=} opt_capture Whether to listen for browser events in
     *     capture phase (defaults to false).
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class KeyHandler extends goog.events.EventTarget {
        /**
         * A wrapper around an element that you want to listen to keyboard events on.
         * @param {Element|Document=} opt_element The element or document to listen on.
         * @param {boolean=} opt_capture Whether to listen for browser events in
         *     capture phase (defaults to false).
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(opt_element?: any /*Element|Document*/, opt_capture?: boolean);
    
        /**
         * Resets the stored previous values. Needed to be called for webkit which will
         * not generate a key up for meta key operations. This should only be called
         * when having finished with repeat key possiblities.
         */
        resetState(): void;
    
        /**
         * Handles the events on the element.
         * @param {goog.events.BrowserEvent} e  The keyboard event sent from the
         *     browser.
         */
        handleEvent(e: goog.events.BrowserEvent): void;
    
        /**
         * Returns the element listened on for the real keyboard events.
         * @return {Element|Document|null} The element listened on for the real
         *     keyboard events.
         */
        getElement(): any /*Element|Document|any (null)*/;
    
        /**
         * Adds the proper key event listeners to the element.
         * @param {Element|Document} element The element to listen on.
         * @param {boolean=} opt_capture Whether to listen for browser events in
         *     capture phase (defaults to false).
         */
        attach(element: any /*Element|Document*/, opt_capture?: boolean): void;
    
        /**
         * Removes the listeners that may exist.
         */
        detach(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * This class is used for the goog.events.KeyHandler.EventType.KEY event and
     * it overrides the key code with the fixed key code.
     * @param {number} keyCode The adjusted key code.
     * @param {number} charCode The unicode character code.
     * @param {boolean} repeat Whether this event was generated by keyboard repeat.
     * @param {Event} browserEvent Browser event object.
     * @constructor
     * @extends {goog.events.BrowserEvent}
     * @final
     */
    class KeyEvent extends goog.events.BrowserEvent {
        /**
         * This class is used for the goog.events.KeyHandler.EventType.KEY event and
         * it overrides the key code with the fixed key code.
         * @param {number} keyCode The adjusted key code.
         * @param {number} charCode The unicode character code.
         * @param {boolean} repeat Whether this event was generated by keyboard repeat.
         * @param {Event} browserEvent Browser event object.
         * @constructor
         * @extends {goog.events.BrowserEvent}
         * @final
         */
        constructor(keyCode: number, charCode: number, repeat: boolean, browserEvent: Event);
    }

    /**
     * Simple class that stores information about a listener
     * @param {!Function} listener Callback function.
     * @param {Function} proxy Wrapper for the listener that patches the event.
     * @param {EventTarget|goog.events.Listenable} src Source object for
     *     the event.
     * @param {string} type Event type.
     * @param {boolean} capture Whether in capture or bubble phase.
     * @param {Object=} opt_handler Object in whose context to execute the callback.
     * @implements {goog.events.ListenableKey}
     * @constructor
     */
    class Listener implements goog.events.ListenableKey {
        /**
         * Simple class that stores information about a listener
         * @param {!Function} listener Callback function.
         * @param {Function} proxy Wrapper for the listener that patches the event.
         * @param {EventTarget|goog.events.Listenable} src Source object for
         *     the event.
         * @param {string} type Event type.
         * @param {boolean} capture Whether in capture or bubble phase.
         * @param {Object=} opt_handler Object in whose context to execute the callback.
         * @implements {goog.events.ListenableKey}
         * @constructor
         */
        constructor(listener: Function, proxy: Function, src: any /*EventTarget|goog.events.Listenable*/, type: string, capture: boolean, opt_handler?: Object);
    
        /**
         * If monitoring the goog.events.Listener instances is enabled, stores the
         * creation stack trace of the Disposable instance.
         * @type {string}
         */
        creationStack: string;
    
        /**
         * Marks this listener as removed. This also remove references held by
         * this listener object (such as listener and event source).
         */
        markAsRemoved(): void;
    }

    /**
     * Creates a new listener map.
     * @param {EventTarget|goog.events.Listenable} src The src object.
     * @constructor
     * @final
     */
    class ListenerMap {
        /**
         * Creates a new listener map.
         * @param {EventTarget|goog.events.Listenable} src The src object.
         * @constructor
         * @final
         */
        constructor(src: any /*EventTarget|goog.events.Listenable*/);
    
        /**
         * @return {number} The count of event types in this map that actually
         *     have registered listeners.
         */
        getTypeCount(): number;
    
        /**
         * @return {number} Total number of registered listeners.
         */
        getListenerCount(): number;
    
        /**
         * Adds an event listener. A listener can only be added once to an
         * object and if it is added again the key for the listener is
         * returned.
         *
         * Note that a one-off listener will not change an existing listener,
         * if any. On the other hand a normal listener will change existing
         * one-off listener to become a normal listener.
         *
         * @param {string|!goog.events.EventId} type The listener event type.
         * @param {!Function} listener This listener callback method.
         * @param {boolean} callOnce Whether the listener is a one-off
         *     listener.
         * @param {boolean=} opt_useCapture The capture mode of the listener.
         * @param {Object=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {goog.events.ListenableKey} Unique key for the listener.
         */
        add(type: any /*string|goog.events.EventId*/, listener: Function, callOnce: boolean, opt_useCapture?: boolean, opt_listenerScope?: Object): goog.events.ListenableKey;
    
        /**
         * Removes a matching listener.
         * @param {string|!goog.events.EventId} type The listener event type.
         * @param {!Function} listener This listener callback method.
         * @param {boolean=} opt_useCapture The capture mode of the listener.
         * @param {Object=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {boolean} Whether any listener was removed.
         */
        remove(type: any /*string|goog.events.EventId*/, listener: Function, opt_useCapture?: boolean, opt_listenerScope?: Object): boolean;
    
        /**
         * Removes the given listener object.
         * @param {goog.events.ListenableKey} listener The listener to remove.
         * @return {boolean} Whether the listener is removed.
         */
        removeByKey(listener: goog.events.ListenableKey): boolean;
    
        /**
         * Removes all listeners from this map. If opt_type is provided, only
         * listeners that match the given type are removed.
         * @param {string|!goog.events.EventId=} opt_type Type of event to remove.
         * @return {number} Number of listeners removed.
         */
        removeAll(opt_type?: any /*string|goog.events.EventId*/): number;
    
        /**
         * Gets all listeners that match the given type and capture mode. The
         * returned array is a copy (but the listener objects are not).
         * @param {string|!goog.events.EventId} type The type of the listeners
         *     to retrieve.
         * @param {boolean} capture The capture mode of the listeners to retrieve.
         * @return {!Array.<goog.events.ListenableKey>} An array of matching
         *     listeners.
         */
        getListeners(type: any /*string|goog.events.EventId*/, capture: boolean): goog.events.ListenableKey[];
    
        /**
         * Gets the goog.events.ListenableKey for the event or null if no such
         * listener is in use.
         *
         * @param {string|!goog.events.EventId} type The type of the listener
         *     to retrieve.
         * @param {!Function} listener The listener function to get.
         * @param {boolean} capture Whether the listener is a capturing listener.
         * @param {Object=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {goog.events.ListenableKey} the found listener or null if not found.
         */
        getListener(type: any /*string|goog.events.EventId*/, listener: Function, capture: boolean, opt_listenerScope?: Object): goog.events.ListenableKey;
    
        /**
         * Whether there is a matching listener. If either the type or capture
         * parameters are unspecified, the function will match on the
         * remaining criteria.
         *
         * @param {string|!goog.events.EventId=} opt_type The type of the listener.
         * @param {boolean=} opt_capture The capture mode of the listener.
         * @return {boolean} Whether there is an active listener matching
         *     the requested type and/or capture phase.
         */
        hasListener(opt_type?: any /*string|goog.events.EventId*/, opt_capture?: boolean): boolean;
    }

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
    
        /** @override */
        disposeInternal(): void;
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

    /**
     * Basic object for detecting whether the online state changes.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @implements {goog.net.NetworkStatusMonitor}
     */
    class OnlineHandler extends goog.events.EventTarget implements goog.net.NetworkStatusMonitor {
        /**
         * Basic object for detecting whether the online state changes.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @implements {goog.net.NetworkStatusMonitor}
         */
        constructor();
    
        /** @override */
        isOnline(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * A paste event detector. Gets an {@code element} as parameter and fires
     * {@code goog.events.PasteHandler.EventType.PASTE} events when text is
     * pasted in the {@code element}. Uses heuristics to detect paste events in FF2.
     * See more details of the heuristic on {@link #handleEvent_}.
     *
     * @param {Element} element The textarea element we are listening on.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class PasteHandler extends goog.events.EventTarget {
        /**
         * A paste event detector. Gets an {@code element} as parameter and fires
         * {@code goog.events.PasteHandler.EventType.PASTE} events when text is
         * pasted in the {@code element}. Uses heuristics to detect paste events in FF2.
         * See more details of the heuristic on {@link #handleEvent_}.
         *
         * @param {Element} element The textarea element we are listening on.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(element: Element);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Returns the current state of the paste detection algorithm. Used mostly for
         * testing.
         * @return {goog.events.PasteHandler.State} The current state of the class.
         */
        getState(): goog.events.PasteHandler.State;
    
        /**
         * Returns the event handler.
         * @return {goog.events.EventHandler.<T>} The event handler.
         * @protected
         * @this T
         * @template T
         */
        getEventHandler(): goog.events.EventHandler<T>;
    }
}

declare module 'goog.events.ActionHandler' {

    /**
     * Enum type for the events fired by the action handler
     * @enum {string}
     */
    enum EventType { ACTION, BEFOREACTION } 
}

declare module 'goog.events.BrowserEvent' {

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

declare module 'goog.events.Event' {

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

declare module 'goog.events.eventTargetTester' {

    /**
     * Setup step for the test functions. This needs to be called from the
     * test setUp.
     * @param {function():!goog.events.Listenable} listenableFactoryFn Function
     *     that will return a new Listenable instance each time it is called.
     * @param {Function} listenFn Function that, given the same signature
     *     as goog.events.listen, will add listener to the given event
     *     target.
     * @param {Function} unlistenFn Function that, given the same
     *     signature as goog.events.unlisten, will remove listener from
     *     the given event target.
     * @param {Function} unlistenByKeyFn Function that, given 2
     *     parameters: src and key, will remove the corresponding
     *     listener.
     * @param {Function} listenOnceFn Function that, given the same
     *     signature as goog.events.listenOnce, will add a one-time
     *     listener to the given event target.
     * @param {Function} dispatchEventFn Function that, given the same
     *     signature as goog.events.dispatchEvent, will dispatch the event
     *     on the given event target.
     * @param {Function} removeAllFn Function that, given the same
     *     signature as goog.events.removeAll, will remove all listeners
     *     according to the contract of goog.events.removeAll.
     * @param {Function} getListenersFn Function that, given the same
     *     signature as goog.events.getListeners, will retrieve listeners.
     * @param {Function} getListenerFn Function that, given the same
     *     signature as goog.events.getListener, will retrieve the
     *     listener object.
     * @param {Function} hasListenerFn Function that, given the same
     *     signature as goog.events.hasListener, will determine whether
     *     listeners exist.
     * @param {goog.events.eventTargetTester.KeyType} listenKeyType The
     *     key type returned by listen call.
     * @param {goog.events.eventTargetTester.UnlistenReturnType}
     *     unlistenFnReturnType
     *     Whether we should check return value from
     *     unlisten call. If unlisten does not return a value, this should
     *     be set to false.
     * @param {boolean} objectListenerSupported Whether listener of type
     *     Object is supported.
     */
    function setUp(listenableFactoryFn: () => goog.events.Listenable, listenFn: Function, unlistenFn: Function, unlistenByKeyFn: Function, listenOnceFn: Function, dispatchEventFn: Function, removeAllFn: Function, getListenersFn: Function, getListenerFn: Function, hasListenerFn: Function, listenKeyType: goog.events.eventTargetTester.KeyType, unlistenFnReturnType: goog.events.eventTargetTester.UnlistenReturnType, objectListenerSupported: boolean): void;

    /**
     * Teardown step for the test functions. This needs to be called from
     * test teardown.
     */
    function tearDown(): void;

    /**
     * The type of key returned by key-returning functions (listen).
     * @enum {number}
     */
    enum KeyType { NUMBER, UNDEFINED } 

    /**
     * The type of unlisten function's return value.
     */
    var UnlistenReturnType: any /*missing*/;

    /**
     * Expando property used on "listener" function to determine if a
     * listener has already been checked. This is what allows us to
     * implement assertNoOtherListenerIsCalled.
     * @type {string}
     */
    var ALREADY_CHECKED_PROP: string;

    /**
     * Expando property used on "listener" function to record the number
     * of times it has been called the last time assertListenerIsCalled is
     * done. This allows us to verify that it has not been called more
     * times in assertNoOtherListenerIsCalled.
     */
    var NUM_CALLED_PROP: any /*missing*/;
}

declare module 'goog.events.FileDropHandler' {

    /**
     * The types of events fired by this class.
     * @enum {string}
     */
    enum EventType { DROP } 
}

declare module 'goog.events.FocusHandler' {

    /**
     * Enum type for the events fired by the focus handler
     * @enum {string}
     */
    enum EventType { FOCUSIN, FOCUSOUT } 
}

declare module 'goog.events.ImeHandler' {

    /**
     * Event types fired by ImeHandler. These events do not make any guarantees
     * about whether they were fired before or after the event in question.
     * @enum {string}
     */
    enum EventType { START, UPDATE, END } 

    /**
     * Whether to use the composition events.
     * @type {boolean}
     */
    var USES_COMPOSITION_EVENTS: boolean;

    /**
     * An event fired by ImeHandler.
     * @param {goog.events.ImeHandler.EventType} type The type.
     * @param {goog.events.BrowserEvent} reason The trigger for this event.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class Event extends goog.events.Event {
        /**
         * An event fired by ImeHandler.
         * @param {goog.events.ImeHandler.EventType} type The type.
         * @param {goog.events.BrowserEvent} reason The trigger for this event.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(type: goog.events.ImeHandler.EventType, reason: goog.events.BrowserEvent);
    }
}

declare module 'goog.events.InputHandler' {

    /**
     * Enum type for the events fired by the input handler
     * @enum {string}
     */
    enum EventType { INPUT } 
}

declare module 'goog.events.KeyCodes' {

    /**
     * Returns true if the event contains a text modifying key.
     * @param {goog.events.BrowserEvent} e A key event.
     * @return {boolean} Whether it's a text modifying key.
     */
    function isTextModifyingKeyEvent(e: goog.events.BrowserEvent): boolean;

    /**
     * Returns true if the key fires a keypress event in the current browser.
     *
     * Accoridng to MSDN [1] IE only fires keypress events for the following keys:
     * - Letters: A - Z (uppercase and lowercase)
     * - Numerals: 0 - 9
     * - Symbols: ! @ # $ % ^ & * ( ) _ - + = < [ ] { } , . / ? \ | ' ` " ~
     * - System: ESC, SPACEBAR, ENTER
     *
     * That's not entirely correct though, for instance there's no distinction
     * between upper and lower case letters.
     *
     * [1] http://msdn2.microsoft.com/en-us/library/ms536939(VS.85).aspx)
     *
     * Safari is similar to IE, but does not fire keypress for ESC.
     *
     * Additionally, IE6 does not fire keydown or keypress events for letters when
     * the control or alt keys are held down and the shift key is not. IE7 does
     * fire keydown in these cases, though, but not keypress.
     *
     * @param {number} keyCode A key code.
     * @param {number=} opt_heldKeyCode Key code of a currently-held key.
     * @param {boolean=} opt_shiftKey Whether the shift key is held down.
     * @param {boolean=} opt_ctrlKey Whether the control key is held down.
     * @param {boolean=} opt_altKey Whether the alt key is held down.
     * @return {boolean} Whether it's a key that fires a keypress event.
     */
    function firesKeyPressEvent(keyCode: number, opt_heldKeyCode?: number, opt_shiftKey?: boolean, opt_ctrlKey?: boolean, opt_altKey?: boolean): boolean;

    /**
     * Returns true if the key produces a character.
     * This does not cover characters on non-US keyboards (Russian, Hebrew, etc.).
     *
     * @param {number} keyCode A key code.
     * @return {boolean} Whether it's a character key.
     */
    function isCharacterKey(keyCode: number): boolean;

    /**
     * Normalizes key codes from OS/Browser-specific value to the general one.
     * @param {number} keyCode The native key code.
     * @return {number} The normalized key code.
     */
    function normalizeKeyCode(keyCode: number): number;

    /**
     * Normalizes key codes from their Gecko-specific value to the general one.
     * @param {number} keyCode The native key code.
     * @return {number} The normalized key code.
     */
    function normalizeGeckoKeyCode(keyCode: number): number;

    /**
     * Normalizes key codes from their Mac WebKit-specific value to the general one.
     * @param {number} keyCode The native key code.
     * @return {number} The normalized key code.
     */
    function normalizeMacWebKitKeyCode(keyCode: number): number;
}

declare module 'goog.events.KeyHandler' {

    /**
     * Enum type for the events fired by the key handler
     * @enum {string}
     */
    enum EventType { KEY } 
}

declare module 'goog.events.Listenable' {

    /**
     * An expando property to indicate that an object implements
     * goog.events.Listenable.
     *
     * See addImplementation/isImplementedBy.
     *
     * @type {string}
     * @const
     */
    var IMPLEMENTED_BY_PROP: string;

    /**
     * Marks a given class (constructor) as an implementation of
     * Listenable, do that we can query that fact at runtime. The class
     * must have already implemented the interface.
     * @param {!Function} cls The class constructor. The corresponding
     *     class must have already implemented the interface.
     */
    function addImplementation(cls: Function): void;

    /**
     * @param {Object} obj The object to check.
     * @return {boolean} Whether a given instance implements
     *     Listenable. The class/superclass of the instance must call
     *     addImplementation.
     */
    function isImplementedBy(obj: Object): boolean;
}

declare module 'goog.events.ListenableKey' {

    /**
     * Reserves a key to be used for ListenableKey#key field.
     * @return {number} A number to be used to fill ListenableKey#key
     *     field.
     */
    function reserveKey(): number;
}

declare module 'goog.events.MouseWheelHandler' {

    /**
     * Enum type for the events fired by the mouse wheel handler.
     * @enum {string}
     */
    enum EventType { MOUSEWHEEL } 
}

declare module 'goog.events.PasteHandler' {

    /**
     * The types of events fired by this class.
     * @enum {string}
     */
    enum EventType { PASTE, AFTER_PASTE } 

    /**
     * The mandatory delay we expect between two {@code input} events, used to
     * differentiated between non key paste events and key events.
     * @type {number}
     */
    var MANDATORY_MS_BETWEEN_INPUT_EVENTS_TIE_BREAKER: number;

    /**
     * The states that this class can be found, on the paste detection algorithm.
     * @enum {string}
     */
    enum State { INIT, FOCUSED, TYPING } 
}

