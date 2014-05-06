/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../closure/goog/positioning/positioning.d.ts" />
/// <reference path="../../../closure/goog/positioning/abstractposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/absoluteposition.d.ts" />
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
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/positioning/clientposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/viewportclientposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../closure/goog/ui/popupbase.d.ts" />
/// <reference path="../../../closure/goog/positioning/viewportposition.d.ts" />
/// <reference path="../../../closure/goog/ui/popup.d.ts" />

declare module goog.ui {

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
    class Bubble extends goog.ui._Component {
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
        constructor(message: any /*string|Element*/, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
    
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
         * @return {goog.ui.Popup.AnchoredPosition} The AnchoredPosition to give to
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

