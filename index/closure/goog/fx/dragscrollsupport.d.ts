/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />

declare module goog.fx {

    /**
     * A scroll support class. Currently this class will automatically scroll
     * a scrollable container node and scroll it by a fixed amount at a timed
     * interval when the mouse is moved above or below the container or in vertical
     * margin areas. Intended for use in drag and drop. This could potentially be
     * made more general and could support horizontal scrolling.
     *
     * @param {Element} containerNode A container that can be scrolled.
     * @param {number=} opt_margin Optional margin to use while scrolling.
     * @param {boolean=} opt_externalMouseMoveTracking Whether mouse move events
     *     are tracked externally by the client object which calls the mouse move
     *     event handler, useful when events are generated for more than one source
     *     element and/or are not real mousemove events.
     * @constructor
     * @extends {goog.Disposable}
     * @see ../demos/dragscrollsupport.html
     */
    class DragScrollSupport extends goog.Disposable {
        /**
         * A scroll support class. Currently this class will automatically scroll
         * a scrollable container node and scroll it by a fixed amount at a timed
         * interval when the mouse is moved above or below the container or in vertical
         * margin areas. Intended for use in drag and drop. This could potentially be
         * made more general and could support horizontal scrolling.
         *
         * @param {Element} containerNode A container that can be scrolled.
         * @param {number=} opt_margin Optional margin to use while scrolling.
         * @param {boolean=} opt_externalMouseMoveTracking Whether mouse move events
         *     are tracked externally by the client object which calls the mouse move
         *     event handler, useful when events are generated for more than one source
         *     element and/or are not real mousemove events.
         * @constructor
         * @extends {goog.Disposable}
         * @see ../demos/dragscrollsupport.html
         */
        constructor(containerNode: Element, opt_margin?: number, opt_externalMouseMoveTracking?: boolean);
    
        /**
         * Sets whether scrolling should be constrained to happen only when the cursor
         * is inside the container node.
         * NOTE: If a margin is not set, then it does not make sense to
         * contain the scroll, because in that case scroll will never be triggered.
         * @param {boolean} constrain Whether scrolling should be constrained to happen
         *     only when the cursor is inside the container node.
         */
        setConstrainScroll(constrain: boolean): void;
    
        /**
         * Sets whether horizontal scrolling is allowed.
         * @param {boolean} scrolling Whether horizontal scrolling is allowed.
         */
        setHorizontalScrolling(scrolling: boolean): void;
    
        /**
         * Handler for mouse moves events.
         * @param {goog.events.Event} event Mouse move event.
         */
        onMouseMove(event: goog.events.Event): void;
    
        /**
         * Calculates scroll delta.
         *
         * @param {number} coordinate Current mouse pointer coordinate.
         * @param {number} min The coordinate value below which scrolling up should be
         *     started.
         * @param {number} rangeLength The length of the range in which scrolling should
         *     be disabled and above which scrolling down should be started.
         * @return {number} The calculated scroll delta.
         * @protected
         */
        calculateScrollDelta(coordinate: number, min: number, rangeLength: number): number;
    }
}

declare module goog.fx.DragScrollSupport {

    /**
     * The suggested scrolling margin.
     * @type {number}
     */
    var MARGIN: number;
}

