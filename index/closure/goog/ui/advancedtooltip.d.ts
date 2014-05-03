// Generated Fri May  2 14:59:55 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/style/bidi.d.ts" />
/// <reference path="../../goog/positioning/positioning.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/positioning/abstractposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/fx/transition.d.ts" />
/// <reference path="../../goog/ui/popupbase.d.ts" />
/// <reference path="../../goog/positioning/viewportposition.d.ts" />
/// <reference path="../../goog/i18n/bidi.d.ts" />
/// <reference path="../../goog/string/typedstring.d.ts" />
/// <reference path="../../goog/string/const.d.ts" />
/// <reference path="../../goog/html/safeurl.d.ts" />
/// <reference path="../../goog/dom/tags.d.ts" />
/// <reference path="../../goog/html/safestyle.d.ts" />
/// <reference path="../../goog/html/safehtml.d.ts" />
/// <reference path="../../goog/dom/safe.d.ts" />
/// <reference path="../../goog/positioning/clientposition.d.ts" />
/// <reference path="../../goog/positioning/viewportclientposition.d.ts" />
/// <reference path="../../goog/positioning/absoluteposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../goog/ui/popup.d.ts" />
/// <reference path="../../goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../goog/html/legacyconversions.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/ui/tooltip.d.ts" />

declare module goog.ui {

    /**
     * Advanced tooltip widget with cursor tracking abilities. Works like a regular
     * tooltip but can track the cursor position and direction to determine if the
     * tooltip should be dismissed or remain open.
     *
     * @param {Element|string=} opt_el Element to display tooltip for, either
     *     element reference or string id.
     * @param {?string=} opt_str Text message to display in tooltip.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Tooltip}
     */
    class AdvancedTooltip extends goog.ui.GoogTooltip {
        /**
         * Advanced tooltip widget with cursor tracking abilities. Works like a regular
         * tooltip but can track the cursor position and direction to determine if the
         * tooltip should be dismissed or remain open.
         *
         * @param {Element|string=} opt_el Element to display tooltip for, either
         *     element reference or string id.
         * @param {?string=} opt_str Text message to display in tooltip.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Tooltip}
         */
        constructor(opt_el?: any /*Element|string*/, opt_str?: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets margin around the tooltip where the cursor is allowed without dismissing
         * the tooltip.
         *
         * @param {goog.math.Box=} opt_box The margin around the tooltip.
         */
        setHotSpotPadding(opt_box?: goog.math.Box): void;
    
        /**
         * @return {goog.math.Box} box The margin around the tooltip where the cursor is
         *     allowed without dismissing the tooltip.
         */
        getHotSpotPadding(): goog.math.Box;
    
        /**
         * Sets whether to track the cursor and thereby close the tooltip if it moves
         * away from the tooltip and keep it open if it moves towards it.
         *
         * @param {boolean} b Whether to track the cursor.
         */
        setCursorTracking(b: boolean): void;
    
        /**
         * @return {boolean} Whether to track the cursor and thereby close the tooltip
         *     if it moves away from the tooltip and keep it open if it moves towards
         *     it.
         */
        getCursorTracking(): boolean;
    
        /**
         * Sets delay in milliseconds before tooltips are hidden if cursor tracking is
         * enabled and the cursor is moving away from the tooltip.
         *
         * @param {number} delay The delay in milliseconds.
         */
        setCursorTrackingHideDelayMs(delay: number): void;
    
        /**
         * @return {number} The delay in milliseconds before tooltips are hidden if
         *     cursor tracking is enabled and the cursor is moving away from the
         *     tooltip.
         */
        getCursorTrackingHideDelayMs(): number;
    
        /**
         * Returns true if the mouse is in the tooltip.
         * @return {boolean} True if the mouse is in the tooltip.
         */
        isMouseInTooltip(): boolean;
    
        /**
         * Forces the recalculation of the hotspot on the next mouse over event.
         * @deprecated Not ever necessary to call this function. Hot spot is calculated
         *     as neccessary.
         */
        resetHotSpot: any /*missing*/;
    }
}

