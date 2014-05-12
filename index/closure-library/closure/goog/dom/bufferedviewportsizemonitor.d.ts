/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />
/// <reference path="./viewportsizemonitor.d.ts" />
/// <reference path="../math/size.d.ts" />

declare module goog.dom {

    class BufferedViewportSizeMonitor extends BufferedViewportSizeMonitor.__Class { }
    module BufferedViewportSizeMonitor {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
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
}

declare module goog.dom.BufferedViewportSizeMonitor {

    /**
     * Additional events to dispatch.
     * @enum {string}
     */
    enum EventType { RESIZE_HEIGHT, RESIZE_WIDTH } 
}
