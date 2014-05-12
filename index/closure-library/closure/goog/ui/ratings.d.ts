/// <reference path="../../../globals.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class Ratings extends Ratings.__Class { }
    module Ratings {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Component.__Class {
    
            /**
             * A UI Control used for rating things, i.e. videos on Google Video.
             * @param {Array.<string>=} opt_ratings Ratings. Default: [1,2,3,4,5].
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.Component}
             */
            constructor(opt_ratings?: string[], opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Returns the base CSS class used by subcomponents of this component.
             * @return {string} Component-specific CSS class.
             */
            getCssClass(): string;
    
            /**
             * Sets the selected index. If the provided index is greater than the number of
             * ratings then the max is set.  0 is the first item, -1 is no selection.
             * @param {number} index The index of the rating to select.
             */
            setSelectedIndex(index: number): void;
    
            /**
             * @return {number} The index of the currently selected rating.
             */
            getSelectedIndex(): number;
    
            /**
             * Returns the rating value of the currently selected rating
             * @return {?string} The value of the currently selected rating (or null).
             */
            getValue(): string;
    
            /**
             * Returns the index of the currently highlighted rating, -1 if the mouse isn't
             * currently over the widget
             * @return {number} The index of the currently highlighted rating.
             */
            getHighlightedIndex(): number;
    
            /**
             * Returns the value of the currently highlighted rating, null if the mouse
             * isn't currently over the widget
             * @return {?string} The value of the currently highlighted rating, or null.
             */
            getHighlightedValue(): string;
    
            /**
             * Sets the array of ratings that the comonent
             * @param {Array.<string>} ratings Array of value to use as ratings.
             */
            setRatings(ratings: string[]): void;
    
            /**
             * Gets the array of ratings that the component
             * @return {Array.<string>} Array of ratings.
             */
            getRatings(): string[];
    
            /**
             * Attaches an input or select element to the ratings widget. The value or
             * index of the field will be updated along with the ratings widget.
             * @param {HTMLSelectElement|HTMLInputElement} field The field to attach to.
             */
            setAttachedFormField(field: HTMLSelectElement): void;
            /**
             * Attaches an input or select element to the ratings widget. The value or
             * index of the field will be updated along with the ratings widget.
             * @param {HTMLSelectElement|HTMLInputElement} field The field to attach to.
             */
            setAttachedFormField(field: HTMLInputElement): void;
    
            /**
             * Returns the attached input or select element to the ratings widget.
             * @return {HTMLSelectElement|HTMLInputElement|null} The attached form field.
             */
            getAttachedFormField(): any /*HTMLSelectElement|HTMLInputElement|any (null)*/;
    
            /**
             * Enables or disables the ratings control.
             * @param {boolean} enable Whether to enable or disable the control.
             */
            setEnabled(enable: boolean): void;
    
            /**
             * @return {boolean} Whether the ratings control is enabled.
             */
            isEnabled(): boolean;
        }
    }
}

declare module goog.ui.Ratings {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Enums for Ratings event type.
     * @enum {string}
     */
    enum EventType { CHANGE, HIGHLIGHT_CHANGE, HIGHLIGHT, UNHIGHLIGHT } 
}
