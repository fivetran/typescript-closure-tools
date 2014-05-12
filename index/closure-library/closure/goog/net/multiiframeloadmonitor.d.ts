/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/event.d.ts" />

declare module goog.net {

    class MultiIframeLoadMonitor extends MultiIframeLoadMonitor.__Class { }
    module MultiIframeLoadMonitor {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Provides a wrapper around IframeLoadMonitor, to allow the caller to wait for
             * multiple iframes to load.
             *
             * @param {Array.<HTMLIFrameElement>} iframes Array of iframe elements to
             *     wait until they are loaded.
             * @param {function():void} callback The callback to invoke once the frames have
             *     loaded.
             * @param {boolean=} opt_hasContent true if the monitor should wait until the
             *     iframes have content (body.firstChild != null).
             * @constructor
             * @final
             */
            constructor(iframes: HTMLIFrameElement[], callback: () => void, opt_hasContent?: boolean);
    
            /**
             * Handles a pending iframe load monitor load event.
             * @param {goog.events.Event} e The goog.net.IframeLoadMonitor.LOAD_EVENT event.
             */
            handleEvent(e: goog.events.Event): void;
    
            /**
             * Stops monitoring the iframes, cleaning up any associated resources. In
             * general, the object cleans up its own resources before invoking the
             * callback, so this API should only be used if the caller wants to stop the
             * monitoring before the iframes are loaded (for example, if the caller is
             * implementing a timeout).
             */
            stopMonitoring(): void;
        }
    }
}
