// Generated Fri May  2 11:38:17 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/ui/activitymonitor.d.ts" />

declare module goog.ui {

    /**
     * A mock implementation of goog.ui.ActivityMonitor for unit testing. Clients
     * of this class should override goog.now to return a synthetic time from
     * the unit test.
     * @constructor
     * @extends {goog.ui.ActivityMonitor}
     * @final
     */
    class MockActivityMonitor extends goog.ui.ActivityMonitor {
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

