/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/eventtarget.d.ts" />
/// <reference path="../../net/networkstatusmonitor.d.ts" />

declare module goog.testing.events {

    class OnlineHandler extends OnlineHandler.__Class { }
    module OnlineHandler {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class implements goog.net.NetworkStatusMonitor {
    
            /**
             * NetworkStatusMonitor test double.
             * @param {boolean} initialState The initial online state of the mock.
             * @constructor
             * @extends {goog.events.EventTarget}
             * @implements {goog.net.NetworkStatusMonitor}
             * @final
             */
            constructor(initialState: boolean);
    
            /**
             * Sets the online state.
             * @param {boolean} newOnlineState The new online state.
             */
            setOnline(newOnlineState: boolean): void;
    
            /**
             * @return {boolean} Whether the system is online or otherwise.
             */
            isOnline(): boolean;
        }
    }
}
