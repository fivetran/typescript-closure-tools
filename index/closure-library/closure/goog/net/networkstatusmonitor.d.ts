/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/listenable.d.ts" />

declare module goog.net {

    interface NetworkStatusMonitor extends goog.events.Listenable {
    
        /**
          * @return {boolean} Whether the system is online or otherwise.
          */
        isOnline(): boolean;
    }
}

declare module goog.net.NetworkStatusMonitor {

    /**
     * Enum for the events dispatched by the OnlineHandler.
     * @enum {string}
     */
    enum EventType { ONLINE, OFFLINE } 
}
