/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/events/mousewheelhandler.d.ts" />

declare module svgpan {

    /**
     * Instantiates an SvgPan object.
     * @param {string=} opt_graphElementId The id of the graph element.
     * @param {Element=} opt_root An optional document root.
     * @constructor
     * @extends {goog.Disposable}
     */
    class SvgPan extends goog.Disposable {
        /**
         * Instantiates an SvgPan object.
         * @param {string=} opt_graphElementId The id of the graph element.
         * @param {Element=} opt_root An optional document root.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor(opt_graphElementId?: string, opt_root?: Element);
    
        /**
         * Enables/disables panning the entire SVG (default = true).
         * @param {boolean} enabled Whether or not to allow panning.
         */
        setPanEnabled(enabled: boolean): void;
    
        /**
         * Enables/disables zooming (default = true).
         * @param {boolean} enabled Whether or not to allow zooming (default = true).
         */
        setZoomEnabled(enabled: boolean): void;
    
        /**
         * Enables/disables dragging individual SVG objects (default = false).
         * @param {boolean} enabled Whether or not to allow dragging of objects.
         */
        setDragEnabled(enabled: boolean): void;
    
        /**
         * Sets the sensitivity of mousewheel zooming (default = 0.4).
         * @param {number} scale The new zoom scale.
         */
        setZoomScale(scale: number): void;
    
        /**
         * Handles mouse motion for the given coordinates.
         * @param {number} x The x coordinate.
         * @param {number} y The y coordinate.
         * @param {Element} svgDoc The svg document.
         */
        handleMove(x: number, y: number, svgDoc: Element): void;
    
        /**
         * Ends pan/drag mode.
         */
        endPanOrDrag(): void;
    
        /**
         * Returns the current state.
         * @return {!svgpan.SvgPan.State}
         */
        getState(): svgpan.SvgPan.State;
    }
}

declare module svgpan.SvgPan {

    /**
     * @enum {string}
     */
    enum State { NONE, PAN, DRAG } 
}

