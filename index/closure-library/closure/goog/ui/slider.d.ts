/// <reference path="../../../globals.d.ts" />
/// <reference path="./sliderbase.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class Slider extends Slider__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Slider__Class extends goog.ui.SliderBase__Class  { 
    
            /**
             * This creates a slider object.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @param {(function(number):?string)=} opt_labelFn An optional function mapping
             *     slider values to a description of the value.
             * @constructor
             * @extends {goog.ui.SliderBase}
             */
            constructor(opt_domHelper?: goog.dom.DomHelper, opt_labelFn?: { (_0: number): string });
    } 
    
}

declare module goog.ui.Slider {

    /**
     * Expose Enum of superclass (representing the orientation of the slider) within
     * Slider namespace.
     *
     * @enum {string}
     */
    enum Orientation { VERTICAL, HORIZONTAL } 

    /**
     * The prefix we use for the CSS class names for the slider and its elements.
     * @type {string}
     */
    var CSS_CLASS_PREFIX: string;

    /**
     * CSS class name for the single thumb element.
     * @type {string}
     */
    var THUMB_CSS_CLASS: string;
}
