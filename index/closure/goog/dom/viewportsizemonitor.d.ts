/// <reference path="../../../closure/goog/base.d.ts" />
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
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />

declare module goog.dom {

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
    class ViewportSizeMonitor extends goog.events.EventTarget {
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

