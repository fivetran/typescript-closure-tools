// Generated Sat May  3 12:19:49 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/net/networkstatusmonitor.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />

declare module goog.testing.events {

    /**
     * NetworkStatusMonitor test double.
     * @param {boolean} initialState The initial online state of the mock.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @implements {goog.net.NetworkStatusMonitor}
     * @final
     */
    class OnlineHandler extends goog.events.EventTarget implements goog.net.NetworkStatusMonitor {
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
    }
}

