/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />
/// <reference path="./eventid.d.ts" />
/// <reference path="./listenable.d.ts" />
/// <reference path="./eventwrapper.d.ts" />
/// <reference path="./eventtarget.d.ts" />
/// <reference path="./event.d.ts" />

declare module goog.events {

    class EventHandler<SCOPE> extends EventHandler.__Class<SCOPE> { }
    module EventHandler {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class<SCOPE> extends goog.Disposable.__Class {
    
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
            listen<EVENTOBJ>(src: _EventTarget, type: string, opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: _EventTarget, type: string, opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: _EventTarget, type: string, opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: _EventTarget, type: string[], opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: _EventTarget, type: string[], opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: _EventTarget, type: string[], opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: goog.events.Listenable, type: string, opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: goog.events.Listenable, type: string, opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: goog.events.Listenable, type: string, opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: goog.events.Listenable, type: string[], opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: goog.events.Listenable, type: string[], opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: goog.events.Listenable, type: string[], opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listen<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
    
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: string, fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: string, fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: string, fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: string, fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: string, fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: string, fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: string[], fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: string[], fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: string[], fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: string[], fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: string[], fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: string[], fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string, fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string, fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string, fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string, fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string, fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string, fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string[], fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string[], fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string[], fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string[], fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string[], fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string[], fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
    
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
            listenOnce<EVENTOBJ>(src: _EventTarget, type: string, opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: _EventTarget, type: string, opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: _EventTarget, type: string, opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: _EventTarget, type: string[], opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: _EventTarget, type: string[], opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: _EventTarget, type: string[], opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: goog.events.Listenable, type: string, opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: goog.events.Listenable, type: string, opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: goog.events.Listenable, type: string, opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: goog.events.Listenable, type: string[], opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: goog.events.Listenable, type: string[], opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: goog.events.Listenable, type: string[], opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean): goog.events.EventHandler<any>;
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
            listenOnce<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: any /*null*/, opt_capture?: boolean): goog.events.EventHandler<any>;
    
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: string, fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: string, fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: string, fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: string, fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: string, fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: string, fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: string[], fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: string[], fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: string[], fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: string[], fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: string[], fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: string[], fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string, fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string, fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string, fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string, fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string, fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string, fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string[], fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string[], fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string[], fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string[], fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string[], fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: string[], fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], fn: (_0: EVENTOBJ) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], fn: (_0: EVENTOBJ) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], fn: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], fn: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], fn: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenOnceWithScope<T,EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], fn: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
    
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
             * @return {!goog.events.EventHandler} This object, allowing for chaining of
             *     calls.
             */
            listenWithWrapper(src: _EventTarget, wrapper: goog.events.EventWrapper, listener: (_0: any) => any, opt_capt?: boolean): goog.events.EventHandler<any>;
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
             * @return {!goog.events.EventHandler} This object, allowing for chaining of
             *     calls.
             */
            listenWithWrapper(src: _EventTarget, wrapper: goog.events.EventWrapper, listener: { handleEvent: (_0: any) => any }, opt_capt?: boolean): goog.events.EventHandler<any>;
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
             * @return {!goog.events.EventHandler} This object, allowing for chaining of
             *     calls.
             */
            listenWithWrapper(src: _EventTarget, wrapper: goog.events.EventWrapper, listener: any /*null*/, opt_capt?: boolean): goog.events.EventHandler<any>;
        
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
            listenWithWrapperAndScope<T>(src: _EventTarget, wrapper: goog.events.EventWrapper, listener: (_0: any) => any, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithWrapperAndScope<T>(src: _EventTarget, wrapper: goog.events.EventWrapper, listener: (_0: any) => any, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithWrapperAndScope<T>(src: _EventTarget, wrapper: goog.events.EventWrapper, listener: { handleEvent: (_0: any) => any }, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithWrapperAndScope<T>(src: _EventTarget, wrapper: goog.events.EventWrapper, listener: { handleEvent: (_0: any) => any }, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
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
            listenWithWrapperAndScope<T>(src: _EventTarget, wrapper: goog.events.EventWrapper, listener: any /*null*/, capture: boolean, scope: T): goog.events.EventHandler<any>;
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
            listenWithWrapperAndScope<T>(src: _EventTarget, wrapper: goog.events.EventWrapper, listener: any /*null*/, capture: any /*undefined*/, scope: T): goog.events.EventHandler<any>;
    
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
            unlisten<EVENTOBJ>(src: _EventTarget, type: string, opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: _EventTarget, type: string, opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: _EventTarget, type: string, opt_fn?: any /*null*/, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: _EventTarget, type: string[], opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: _EventTarget, type: string[], opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: _EventTarget, type: string[], opt_fn?: any /*null*/, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>, opt_fn?: any /*null*/, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: _EventTarget, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: any /*null*/, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: goog.events.Listenable, type: string, opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: goog.events.Listenable, type: string, opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: goog.events.Listenable, type: string, opt_fn?: any /*null*/, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: goog.events.Listenable, type: string[], opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: goog.events.Listenable, type: string[], opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: goog.events.Listenable, type: string[], opt_fn?: any /*null*/, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>, opt_fn?: any /*null*/, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: (_0: EVENTOBJ) => any, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: { handleEvent: (_0: any) => any }, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlisten<EVENTOBJ>(src: goog.events.Listenable, type: goog.events.EventId<EVENTOBJ>[], opt_fn?: any /*null*/, opt_capture?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
    
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
            unlistenWithWrapper(src: _EventTarget, wrapper: goog.events.EventWrapper, listener: (_0: any) => any, opt_capt?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlistenWithWrapper(src: _EventTarget, wrapper: goog.events.EventWrapper, listener: { handleEvent: (_0: any) => any }, opt_capt?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
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
            unlistenWithWrapper(src: _EventTarget, wrapper: goog.events.EventWrapper, listener: any /*null*/, opt_capt?: boolean, opt_scope?: Object): goog.events.EventHandler<any>;
    
            /**
             * Unlistens to all events.
             */
            removeAll(): void;
    
            /**
             * Default event handler
             * @param {goog.events.Event} e Event object.
             */
            handleEvent(e: goog.events.Event): void;
        }
    }
}
