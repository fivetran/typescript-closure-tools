// Generated Wed Apr 30 16:38:48 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.labs.events.touch' {

    /**
     * Description the geometry and target of an event.
     *
     * @typedef {{
     *   clientX: number,
     *   clientY: number,
     *   screenX: number,
     *   screenY: number,
     *   target: EventTarget
     * }}
     */
    var TouchData: any /*missing*/;

    /**
     * Takes a mouse or touch event and returns the relevent geometry and target
     * data.
     * @param {!Event} e A mouse or touch event.
     * @return {!goog.labs.events.touch.TouchData}
     */
    function getTouchData(e: Event): goog.labs.events.touch.TouchData;
}

declare module 'goog.labs.events' {

    /**
     * An implementation of {@code goog.events.Listenable} with full W3C
     * EventTarget-like support (capture/bubble mechanism, stopping event
     * propagation, preventing default actions).
     *
     * You may subclass this class to turn your class into a Listenable.
     *
     * Unlike {@link goog.events.EventTarget}, this class does not implement
     * {@link goog.disposable.IDisposable}. Instances of this class that have had
     * It is not necessary to call {@link goog.dispose}
     * or {@link #removeAllListeners} in order for an instance of this class
     * to be garbage collected.
     *
     * Unless propagation is stopped, an event dispatched by an
     * EventTarget will bubble to the parent returned by
     * {@code getParentEventTarget}. To set the parent, call
     * {@code setParentEventTarget}. Subclasses that don't support
     * changing the parent can override the setter to throw an error.
     *
     * Example usage:
     * <pre>
     *   var source = new goog.labs.events.NonDisposableEventTarget();
     *   function handleEvent(e) {
     *     alert('Type: ' + e.type + '; Target: ' + e.target);
     *   }
     *   source.listen('foo', handleEvent);
     *   source.dispatchEvent('foo'); // will call handleEvent
     * </pre>
     *
     * TODO(user|johnlenz): Consider a more modern, less viral
     * (not based on inheritance) replacement of goog.Disposable, which will allow
     * goog.events.EventTarget to not be disposable.
     *
     * @constructor
     * @implements {goog.events.Listenable}
     * @final
     */
    class NonDisposableEventTarget implements goog.events.Listenable {
        /**
         * An implementation of {@code goog.events.Listenable} with full W3C
         * EventTarget-like support (capture/bubble mechanism, stopping event
         * propagation, preventing default actions).
         *
         * You may subclass this class to turn your class into a Listenable.
         *
         * Unlike {@link goog.events.EventTarget}, this class does not implement
         * {@link goog.disposable.IDisposable}. Instances of this class that have had
         * It is not necessary to call {@link goog.dispose}
         * or {@link #removeAllListeners} in order for an instance of this class
         * to be garbage collected.
         *
         * Unless propagation is stopped, an event dispatched by an
         * EventTarget will bubble to the parent returned by
         * {@code getParentEventTarget}. To set the parent, call
         * {@code setParentEventTarget}. Subclasses that don't support
         * changing the parent can override the setter to throw an error.
         *
         * Example usage:
         * <pre>
         *   var source = new goog.labs.events.NonDisposableEventTarget();
         *   function handleEvent(e) {
         *     alert('Type: ' + e.type + '; Target: ' + e.target);
         *   }
         *   source.listen('foo', handleEvent);
         *   source.dispatchEvent('foo'); // will call handleEvent
         * </pre>
         *
         * TODO(user|johnlenz): Consider a more modern, less viral
         * (not based on inheritance) replacement of goog.Disposable, which will allow
         * goog.events.EventTarget to not be disposable.
         *
         * @constructor
         * @implements {goog.events.Listenable}
         * @final
         */
        constructor();
    
        /**
         * Parent event target, used during event bubbling.
         * @private {goog.events.Listenable}
         */
        parentEventTarget_: any /*missing*/;
    
        /** @override */
        getParentEventTarget(): void;
    
        /**
         * Sets the parent of this event target to use for capture/bubble
         * mechanism.
         * @param {goog.events.Listenable} parent Parent listenable (null if none).
         */
        setParentEventTarget(parent: goog.events.Listenable): void;
    
        /** @override */
        dispatchEvent(): void;
    
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
    }
}

