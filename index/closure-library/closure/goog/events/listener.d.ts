/// <reference path="../../../globals.d.ts" />
/// <reference path="./listenable.d.ts" />
/// <reference path="./eventtarget.d.ts" />

declare module goog.events {

    class Listener extends Listener.__Class { }
    module Listener {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.events.ListenableKey {
    
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
            constructor(listener: Function, proxy: Function, src: _EventTarget, type: string, capture: boolean, opt_handler?: Object);
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
            constructor(listener: Function, proxy: Function, src: goog.events.Listenable, type: string, capture: boolean, opt_handler?: Object);
    
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
    
            /**
             * The source event target.
             * @type {!(Object|goog.events.Listenable|goog.events.EventTarget)}
             */
            src: any /*Object|goog.events.Listenable|goog.events.EventTarget*/;
    
            /**
             * The event type the listener is listening to.
             * @type {string}
             */
            type: string;
    
            /**
             * The listener function.
             * @type {function(?):?|{handleEvent:function(?):?}|null}
             */
            listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/;
    
            /**
             * Whether the listener works on capture phase.
             * @type {boolean}
             */
            capture: boolean;
    
            /**
             * The 'this' object for the listener function's scope.
             * @type {Object}
             */
            handler: Object;
    
            /**
             * A globally unique number to identify the key.
             * @type {number}
             */
            key: number;
        }
    }
}
