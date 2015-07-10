/// <reference path="../../../globals.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="../positioning/positioning.d.ts" />
/// <reference path="../positioning/abstractposition.d.ts" />
/// <reference path="./popup.d.ts" />

declare module goog.ui {

    class Bubble extends Bubble__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Bubble__Class extends goog.ui.Component__Class  { 
    
            /**
             * The Bubble provides a general purpose bubble implementation that can be
             * anchored to a particular element and displayed for a period of time.
             *
             * @param {string|Element} message HTML string or an element to display inside
             *     the bubble.
             * @param {Object=} opt_config The configuration
             *     for the bubble. If not specified, the default configuration will be
             *     used. {@see goog.ui.Bubble.defaultConfig}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.Component}
             */
            constructor(message: string|Element, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Attaches the bubble to an anchor element. Computes the positioning and
             * orientation of the bubble.
             *
             * @param {Element} anchorElement The element to which we are attaching.
             */
            attach(anchorElement: Element): void;
    
            /**
             * Sets the corner of the bubble to used in the positioning algorithm.
             *
             * @param {goog.positioning.Corner} corner The bubble corner used for
             *     positioning constants.
             */
            setPinnedCorner(corner: goog.positioning.Corner): void;
    
            /**
             * Sets the position of the bubble. Pass null for corner in AnchoredPosition
             * for corner to be computed automatically.
             *
             * @param {goog.positioning.AbstractPosition} position The position of the
             *     bubble.
             */
            setPosition(position: goog.positioning.AbstractPosition): void;
    
            /**
             * Sets the timeout after which bubble hides itself.
             *
             * @param {number} timeout Timeout of the bubble.
             */
            setTimeout(timeout: number): void;
    
            /**
             * Sets whether the bubble should be automatically hidden whenever user clicks
             * outside the bubble element.
             *
             * @param {boolean} autoHide Whether to hide if user clicks outside the bubble.
             */
            setAutoHide(autoHide: boolean): void;
    
            /**
             * Sets whether the bubble should be visible.
             *
             * @param {boolean} visible Desired visibility state.
             */
            setVisible(visible: boolean): void;
    
            /**
             * @return {boolean} Whether the bubble is visible.
             */
            isVisible(): boolean;
    
            /**
             * Returns an AnchoredPosition that will position the bubble optimally
             * given the position of the anchor element and the size of the viewport.
             *
             * @param {Element} anchorElement The element to which the bubble is attached.
             * @return {!goog.ui.Popup.AnchoredPosition} The AnchoredPosition to give to
             *     {@link #setPosition}.
             */
            getComputedAnchoredPosition(anchorElement: Element): goog.ui.Popup.AnchoredPosition;
    } 
    
}

declare module goog.ui.Bubble {

    /**
     * A default configuration for the bubble.
     *
     * @type {Object}
     */
    var defaultConfig: Object;
}
