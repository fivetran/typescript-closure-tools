/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/async/delay.d.ts" />

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

declare module goog.dom.BufferedViewportSizeMonitor {

    /**
     * Additional events to dispatch.
     * @enum {string}
     */
    enum EventType { RESIZE_HEIGHT, RESIZE_WIDTH } 
}

