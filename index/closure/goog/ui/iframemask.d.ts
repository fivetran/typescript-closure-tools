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
/// <reference path="../../../closure/goog/dom/iframe.d.ts" />
/// <reference path="../../../closure/goog/structs/pool.d.ts" />

declare module goog.ui {

    /**
     * Controller for an iframe mask. The mask is only valid in the current
     * document, or else the document of the given DOM helper.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper for the relevant
     *     document.
     * @param {goog.structs.Pool=} opt_iframePool An optional source of iframes.
     *     Iframes will be grabbed from the pool when they're needed and returned
     *     to the pool (but still attached to the DOM) when they're done.
     * @constructor
     * @extends {goog.Disposable}
     */
    class IframeMask extends goog.Disposable {
        /**
         * Controller for an iframe mask. The mask is only valid in the current
         * document, or else the document of the given DOM helper.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper for the relevant
         *     document.
         * @param {goog.structs.Pool=} opt_iframePool An optional source of iframes.
         *     Iframes will be grabbed from the pool when they're needed and returned
         *     to the pool (but still attached to the DOM) when they're done.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_iframePool?: goog.structs.Pool<any>);
    
        /**
         * Removes the mask from the screen.
         */
        hideMask(): void;
    
        /**
         * Applies the iframe mask to the screen.
         */
        applyMask(): void;
    
        /**
         * Sets the opacity of the mask. Will take effect the next time the mask
         * is applied.
         * @param {number} opacity A value between 0 and 1, with 1 being
         *     totally opaque.
         */
        setOpacity(opacity: number): void;
    
        /**
         * Sets the z-index of the mask. Will take effect the next time the mask
         * is applied.
         * @param {number} zIndex A z-index value.
         */
        setZIndex(zIndex: number): void;
    
        /**
         * Sets the element to use as the bounds of the mask. Takes effect immediately.
         * @param {Element} snapElement The snap element, which the iframe will be
         *     "snapped" around.
         */
        setSnapElement(snapElement: Element): void;
    
        /**
         * Listens on the specified target, hiding and showing the iframe mask
         * when the given event types are dispatched.
         * @param {goog.events.EventTarget} target The event target to listen on.
         * @param {string} showEvent When this event fires, the mask will be applied.
         * @param {string} hideEvent When this event fires, the mask will be hidden.
         * @param {Element=} opt_snapElement When the mask is applied, it will
         *     automatically snap to this element. If no element is specified, it will
         *     use the default snap element.
         */
        listenOnTarget(target: goog.events.EventTarget, showEvent: string, hideEvent: string, opt_snapElement?: Element): void;
    
        /**
         * Removes all handlers attached by listenOnTarget.
         */
        removeHandlers(): void;
    }
}

