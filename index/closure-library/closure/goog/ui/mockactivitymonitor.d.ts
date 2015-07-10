/// <reference path="../../../globals.d.ts" />
/// <reference path="./activitymonitor.d.ts" />
/// <reference path="../events/eventtype.d.ts" />

declare module goog.ui {

    class MockActivityMonitor extends MockActivityMonitor__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MockActivityMonitor__Class extends goog.ui.ActivityMonitor__Class  { 
    
            /**
             * A mock implementation of goog.ui.ActivityMonitor for unit testing. Clients
             * of this class should override goog.now to return a synthetic time from
             * the unit test.
             * @constructor
             * @extends {goog.ui.ActivityMonitor}
             * @final
             */
            constructor();
    
            /**
             * Simulates an event that updates the user to being non-idle.
             * @param {goog.events.EventType=} opt_type The type of event that made the user
             *     not idle. If not specified, defaults to MOUSEMOVE.
             */
            simulateEvent(opt_type?: goog.events.EventType): void;
    } 
    
}
