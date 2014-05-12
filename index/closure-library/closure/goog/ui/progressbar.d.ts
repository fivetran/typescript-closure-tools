/// <reference path="../../../globals.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class ProgressBar extends ProgressBar.__Class { }
    module ProgressBar {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Component.__Class {
    
            /**
             * This creates a progress bar object.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.Component}
             */
            constructor(opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * @return {number} The value.
             */
            getValue(): number;
    
            /**
             * Sets the value
             * @param {number} v The value.
             */
            setValue(v: number): void;
    
            /**
             * @return {number} The minimum value.
             */
            getMinimum(): number;
    
            /**
             * Sets the minimum number
             * @param {number} v The minimum value.
             */
            setMinimum(v: number): void;
    
            /**
             * @return {number} The maximum value.
             */
            getMaximum(): number;
    
            /**
             * Sets the maximum number
             * @param {number} v The maximum value.
             */
            setMaximum(v: number): void;
    
            /**
             * Changes the orientation
             * @param {goog.ui.ProgressBar.Orientation} orient The orientation.
             */
            setOrientation(orient: goog.ui.ProgressBar.Orientation): void;
    
            /**
             * @return {goog.ui.ProgressBar.Orientation} The orientation of the
             *     progress bar.
             */
            getOrientation(): goog.ui.ProgressBar.Orientation;
    
            /**
             * @return {?number} The step value used to determine how to round the value.
             */
            getStep(): number;
    
            /**
             * Sets the step value. The step value is used to determine how to round the
             * value.
             * @param {?number} step  The step size.
             */
            setStep(step: number): void;
        }
    }
}

declare module goog.ui.ProgressBar {

    /**
     * Enum for representing the orientation of the progress bar.
     *
     * @enum {string}
     */
    enum Orientation { VERTICAL, HORIZONTAL } 
}
