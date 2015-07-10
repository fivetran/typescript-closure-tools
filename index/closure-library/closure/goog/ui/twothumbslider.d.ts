/// <reference path="../../../globals.d.ts" />
/// <reference path="./sliderbase.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class TwoThumbSlider extends TwoThumbSlider__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class TwoThumbSlider__Class extends goog.ui.SliderBase__Class  { 
    
            /**
             * This creates a TwoThumbSlider object.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.SliderBase}
             */
            constructor(opt_domHelper?: goog.dom.DomHelper);
    } 
    
}

declare module goog.ui.TwoThumbSlider {

    /**
     * The prefix we use for the CSS class names for the slider and its elements.
     * @type {string}
     */
    var CSS_CLASS_PREFIX: string;

    /**
     * CSS class name for the value thumb element.
     * @type {string}
     */
    var VALUE_THUMB_CSS_CLASS: string;

    /**
     * CSS class name for the extent thumb element.
     * @type {string}
     */
    var EXTENT_THUMB_CSS_CLASS: string;

    /**
     * CSS class name for the range highlight element.
     * @type {string}
     */
    var RANGE_HIGHLIGHT_CSS_CLASS: string;
}
