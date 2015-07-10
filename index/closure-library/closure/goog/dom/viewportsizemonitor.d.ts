/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />
/// <reference path="../math/size.d.ts" />

declare module goog.dom {

    class ViewportSizeMonitor extends ViewportSizeMonitor__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ViewportSizeMonitor__Class extends goog.events.EventTarget__Class  { 
    
            /**
             * This class can be used to monitor changes in the viewport size.  Instances
             * dispatch a {@link goog.events.EventType.RESIZE} event when the viewport size
             * changes.  Handlers can call {@link goog.dom.ViewportSizeMonitor#getSize} to
             * get the new viewport size.
             *
             * Use this class if you want to execute resize/reflow logic each time the
             * user resizes the browser window.  This class is guaranteed to only dispatch
             * {@code RESIZE} events when the pixel dimensions of the viewport change.
             * (Internet Explorer fires resize events if any element on the page is resized,
             * even if the viewport dimensions are unchanged, which can lead to infinite
             * resize loops.)
             *
             * Example usage:
             *  <pre>
             *    var vsm = new goog.dom.ViewportSizeMonitor();
             *    goog.events.listen(vsm, goog.events.EventType.RESIZE, function(e) {
             *      alert('Viewport size changed to ' + vsm.getSize());
             *    });
             *  </pre>
             *
             * Manually verified on IE6, IE7, FF2, Opera 11, Safari 4 and Chrome.
             *
             * @param {Window=} opt_window The window to monitor; defaults to the window in
             *    which this code is executing.
             * @constructor
             * @extends {goog.events.EventTarget}
             */
            constructor(opt_window?: Window);
    
            /**
             * Returns the most recently recorded size of the viewport, in pixels.  May
             * return null if no window resize event has been handled yet.
             * @return {goog.math.Size} The viewport dimensions, in pixels.
             */
            getSize(): goog.math.Size;
    } 
    
}

declare module goog.dom.ViewportSizeMonitor {

    /**
     * Returns a viewport size monitor for the given window.  A new one is created
     * if it doesn't exist already.  This prevents the unnecessary creation of
     * multiple spooling monitors for a window.
     * @param {Window=} opt_window The window to monitor; defaults to the window in
     *     which this code is executing.
     * @return {!goog.dom.ViewportSizeMonitor} Monitor for the given window.
     */
    function getInstanceForWindow(opt_window?: Window): goog.dom.ViewportSizeMonitor;

    /**
     * Removes and disposes a viewport size monitor for the given window if one
     * exists.
     * @param {Window=} opt_window The window whose monitor should be removed;
     *     defaults to the window in which this code is executing.
     */
    function removeInstanceForWindow(opt_window?: Window): void;
}
