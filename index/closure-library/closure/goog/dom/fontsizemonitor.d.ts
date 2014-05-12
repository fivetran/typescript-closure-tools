/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />
/// <reference path="./dom.d.ts" />

declare module goog.dom {

    class FontSizeMonitor extends FontSizeMonitor.__Class { }
    module FontSizeMonitor {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
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
