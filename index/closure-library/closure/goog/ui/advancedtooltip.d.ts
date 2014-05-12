/// <reference path="../../../globals.d.ts" />
/// <reference path="./tooltip.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="../math/box.d.ts" />

declare module goog.ui {

    class AdvancedTooltip extends AdvancedTooltip.__Class { }
    module AdvancedTooltip {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Tooltip.__Class {
    
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
            constructor(opt_el?: Element, opt_str?: string, opt_domHelper?: goog.dom.DomHelper);
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
            constructor(opt_el?: string, opt_str?: string, opt_domHelper?: goog.dom.DomHelper);
    
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
}
