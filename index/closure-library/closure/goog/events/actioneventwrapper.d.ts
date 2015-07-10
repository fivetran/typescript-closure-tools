/// <reference path="../../../globals.d.ts" />
/// <reference path="./eventwrapper.d.ts" />
/// <reference path="./events.d.ts" />
/// <reference path="./eventhandler.d.ts" />

declare module goog.events {

    class ActionEventWrapper_ extends ActionEventWrapper___Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ActionEventWrapper___Class implements goog.events.EventWrapper  { 
    
            /**
             * Event wrapper for action handling. Fires when an element is activated either
             * by clicking it or by focusing it and pressing Enter.
             *
             * @constructor
             * @implements {goog.events.EventWrapper}
             * @private
             */
            constructor();
    
            /**
             * Adds an event listener using the wrapper on a DOM Node or an object that has
             * implemented {@link goog.events.EventTarget}. A listener can only be added
             * once to an object.
             *
             * @param {goog.events.ListenableType} src The node to listen to events on.
             * @param {function(?):?|{handleEvent:function(?):?}|null} listener Callback
             *     method, or an object with a handleEvent function.
             * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
             *     false).
             * @param {Object=} opt_scope Element in whose scope to call the listener.
             * @param {goog.events.EventHandler=} opt_eventHandler Event handler to add
             *     listener to.
             */
            listen(src: goog.events.ListenableType, listener: { (_0: any): any }|{ handleEvent: { (_0: any): any } }|any /*null*/, opt_capt?: boolean, opt_scope?: Object, opt_eventHandler?: goog.events.EventHandler<any>): void;
    
            /**
             * Removes an event listener added using goog.events.EventWrapper.listen.
             *
             * @param {goog.events.ListenableType} src The node to remove listener from.
             * @param {function(?):?|{handleEvent:function(?):?}|null} listener Callback
             *     method, or an object with a handleEvent function.
             * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
             *     false).
             * @param {Object=} opt_scope Element in whose scope to call the listener.
             * @param {goog.events.EventHandler=} opt_eventHandler Event handler to remove
             *     listener from.
             */
            unlisten(src: goog.events.ListenableType, listener: { (_0: any): any }|{ handleEvent: { (_0: any): any } }|any /*null*/, opt_capt?: boolean, opt_scope?: Object, opt_eventHandler?: goog.events.EventHandler<any>): void;
    } 
    

    /**
     * Singleton instance of ActionEventWrapper_.
     * @type {goog.events.ActionEventWrapper_}
     */
    var actionEventWrapper: goog.events.ActionEventWrapper_;
}
