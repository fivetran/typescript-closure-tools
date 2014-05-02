// Generated Thu May  1 21:07:17 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />

declare module goog.labs.events {

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
    
        /**
         * Sets the parent of this event target to use for capture/bubble
         * mechanism.
         * @param {goog.events.Listenable} parent Parent listenable (null if none).
         */
        setParentEventTarget(parent: goog.events.Listenable): void;
    }
}

