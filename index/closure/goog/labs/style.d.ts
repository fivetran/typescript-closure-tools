// Generated Wed Apr 30 16:38:27 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.labs.style.PixelDensityMonitor' {

    /**
     * The two different pixel density modes on which the various ratios between
     * physical and device pixels are mapped.
     * @enum {number}
     */
    enum Density { NORMAL, HIGH } 

    /**
     * The events fired by the PixelDensityMonitor.
     * @enum {string}
     */
    enum EventType { CHANGE } 
}

declare module 'goog.labs.style' {

    /**
     * Monitors the window for changes to the ratio between device and screen
     * pixels, e.g. when the user moves the window from a high density screen to a
     * screen with normal density. Dispatches
     * goog.labs.style.PixelDensityMonitor.EventType.CHANGE events when the density
     * changes between the two predefined values NORMAL and HIGH.
     *
     * This class uses the window.devicePixelRatio value which is supported in
     * WebKit and FF18. If the value does not exist, it will always return a
     * NORMAL density. It requires support for MediaQueryList to detect changes to
     * the devicePixelRatio.
     *
     * @param {!goog.dom.DomHelper=} opt_domHelper The DomHelper which contains the
     *     document associated with the window to listen to. Defaults to the one in
     *     which this code is executing.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class PixelDensityMonitor extends goog.events.EventTarget {
        /**
         * Monitors the window for changes to the ratio between device and screen
         * pixels, e.g. when the user moves the window from a high density screen to a
         * screen with normal density. Dispatches
         * goog.labs.style.PixelDensityMonitor.EventType.CHANGE events when the density
         * changes between the two predefined values NORMAL and HIGH.
         *
         * This class uses the window.devicePixelRatio value which is supported in
         * WebKit and FF18. If the value does not exist, it will always return a
         * NORMAL density. It requires support for MediaQueryList to detect changes to
         * the devicePixelRatio.
         *
         * @param {!goog.dom.DomHelper=} opt_domHelper The DomHelper which contains the
         *     document associated with the window to listen to. Defaults to the one in
         *     which this code is executing.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Starts monitoring for changes in pixel density.
         */
        start(): void;
    
        /**
         * @return {goog.labs.style.PixelDensityMonitor.Density} The density for the
         *     window.
         */
        getDensity(): goog.labs.style.PixelDensityMonitor.Density;
    
        /** @override */
        disposeInternal(): void;
    }
}

