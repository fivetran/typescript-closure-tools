/// <reference path="../../../globals.d.ts" />
/// <reference path="./eventtarget.d.ts" />
/// <reference path="../net/networkstatusmonitor.d.ts" />

declare module goog.events {

    class OnlineHandler extends OnlineHandler__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class OnlineHandler__Class extends goog.events.EventTarget__Class implements goog.net.NetworkStatusMonitor  { 
    
            /**
             * Basic object for detecting whether the online state changes.
             * @constructor
             * @extends {goog.events.EventTarget}
             * @implements {goog.net.NetworkStatusMonitor}
             */
            constructor();
    
            /**
             * @return {boolean} Whether the system is online or otherwise.
             */
            isOnline(): boolean;
    } 
    
}

declare module goog.events.OnlineHandler {

    /**
     * Enum for the events dispatched by the OnlineHandler.
     * @enum {string}
     * @deprecated Use goog.net.NetworkStatusMonitor.EventType instead.
     */
    enum EventType { ONLINE, OFFLINE } 
}
