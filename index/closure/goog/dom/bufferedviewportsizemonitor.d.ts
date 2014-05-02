// Generated Thu May  1 17:19:05 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/async/delay.d.ts" />

declare module goog.dom.BufferedViewportSizeMonitor {

    /**
     * Additional events to dispatch.
     * @enum {string}
     */
    enum EventType { RESIZE_HEIGHT, RESIZE_WIDTH } 
}

declare module goog.dom {

    /**
     * Creates a new BufferedViewportSizeMonitor.
     * @param {!goog.dom.ViewportSizeMonitor} viewportSizeMonitor The
     *     underlying viewport size monitor.
     * @param {number=} opt_bufferMs The buffer time, in ms. If not specified, this
     *     value defaults to {@link #RESIZE_EVENT_DELAY_MS_}.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class BufferedViewportSizeMonitor extends goog.events.EventTarget {
        /**
         * Creates a new BufferedViewportSizeMonitor.
         * @param {!goog.dom.ViewportSizeMonitor} viewportSizeMonitor The
         *     underlying viewport size monitor.
         * @param {number=} opt_bufferMs The buffer time, in ms. If not specified, this
         *     value defaults to {@link #RESIZE_EVENT_DELAY_MS_}.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(viewportSizeMonitor: goog.dom.ViewportSizeMonitor, opt_bufferMs?: number);
    
        /**
         * Returns the current size of the viewport.
         * @return {goog.math.Size?} The current viewport size.
         */
        getSize(): goog.math.Size;
    }
}

