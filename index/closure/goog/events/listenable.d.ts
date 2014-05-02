// Generated Fri May  2 11:40:36 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />

declare module goog.events.Listenable {

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

declare module goog.events.ListenableKey {

    /**
     * Reserves a key to be used for ListenableKey#key field.
     * @return {number} A number to be used to fill ListenableKey#key
     *     field.
     */
    function reserveKey(): number;
}

declare module goog.events {

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
        listen<SCOPE,EVENTOBJ>(type: any /*string|goog.events.EventId<EVENTOBJ>*/, listener: (_0: EVENTOBJ) => any /*boolean|any (undefined)*/, opt_useCapture?: boolean, opt_listenerScope?: SCOPE): goog.events.ListenableKey;
        listenOnce<SCOPE,EVENTOBJ>(type: any /*string|goog.events.EventId<EVENTOBJ>*/, listener: (_0: EVENTOBJ) => any /*boolean|any (undefined)*/, opt_useCapture?: boolean, opt_listenerScope?: SCOPE): goog.events.ListenableKey;
        unlisten<SCOPE,EVENTOBJ>(type: any /*string|goog.events.EventId<EVENTOBJ>*/, listener: (_0: EVENTOBJ) => any /*boolean|any (undefined)*/, opt_useCapture?: boolean, opt_listenerScope?: SCOPE): boolean;
        unlistenByKey(key: goog.events.ListenableKey): boolean;
        dispatchEvent(e: goog.events.EventLike): boolean;
        removeAllListeners(opt_type?: string): number;
        getParentEventTarget(): goog.events.Listenable;
        fireListeners<EVENTOBJ>(type: any /*string|goog.events.EventId<EVENTOBJ>*/, capture: boolean, eventObject: EVENTOBJ): boolean;
        getListeners<EVENTOBJ>(type: any /*string|goog.events.EventId*/, capture: boolean): goog.events.ListenableKey[];
        getListener<SCOPE,EVENTOBJ>(type: any /*string|goog.events.EventId<EVENTOBJ>*/, listener: (_0: EVENTOBJ) => any /*boolean|any (undefined)*/, capture: boolean, opt_listenerScope?: SCOPE): goog.events.ListenableKey;
        hasListener<EVENTOBJ>(opt_type?: any /*string|goog.events.EventId<EVENTOBJ>*/, opt_capture?: boolean): boolean;
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
}

