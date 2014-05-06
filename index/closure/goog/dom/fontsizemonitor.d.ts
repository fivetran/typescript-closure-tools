/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />

declare module goog.dom {

    /**
     * This class can be used to monitor changes in font size.  Instances will
     * dispatch a {@code goog.dom.FontSizeMonitor.EventType.CHANGE} event.
     * Example usage:
     * <pre>
     * var fms = new goog.dom.FontSizeMonitor();
     * goog.events.listen(fms, goog.dom.FontSizeMonitor.EventType.CHANGE,
     *     function(e) {
     *       alert('Font size was changed');
     *     });
     * </pre>
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper object that is used to
     *     determine where to insert the DOM nodes used to determine when the font
     *     size changes.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class FontSizeMonitor extends goog.events.EventTarget {
        /**
         * This class can be used to monitor changes in font size.  Instances will
         * dispatch a {@code goog.dom.FontSizeMonitor.EventType.CHANGE} event.
         * Example usage:
         * <pre>
         * var fms = new goog.dom.FontSizeMonitor();
         * goog.events.listen(fms, goog.dom.FontSizeMonitor.EventType.CHANGE,
         *     function(e) {
         *       alert('Font size was changed');
         *     });
         * </pre>
         * @param {goog.dom.DomHelper=} opt_domHelper DOM helper object that is used to
         *     determine where to insert the DOM nodes used to determine when the font
         *     size changes.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    }
}

declare module goog.dom.FontSizeMonitor {

    /**
     * The event types that the FontSizeMonitor fires.
     * @enum {string}
     */
    enum EventType { CHANGE } 

    /**
     * Constant for the change event.
     * @type {string}
     * @deprecated Use {@code goog.dom.FontSizeMonitor.EventType.CHANGE} instead.
     */
    var CHANGE_EVENT: string;
}

