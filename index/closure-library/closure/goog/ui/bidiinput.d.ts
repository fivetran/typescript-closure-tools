/// <reference path="../../../globals.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class BidiInput extends BidiInput.__Class { }
    module BidiInput {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Component.__Class {
    
            /**
             * Default implementation of BidiInput.
             *
             * @param {goog.dom.DomHelper=} opt_domHelper  Optional DOM helper.
             * @constructor
             * @extends {goog.ui.Component}
             */
            constructor(opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Returns the direction of the input element.
             * @return {?string} Return 'rtl' for right-to-left text,
             *     'ltr' for left-to-right text, or null if the value itself is not
             *     enough to determine directionality (e.g. an empty value), and the
             *     direction is inherited from a parent element (typically the body
             *     element).
             */
            getDirection(): string;
    
            /**
             * Sets the value of the underlying input field, and sets the direction
             * according to the given value.
             * @param {string} value  The Value to set in the underlying input field.
             */
            setValue(value: string): void;
    
            /**
             * Returns the value of the underlying input field.
             * @return {string} Value of the underlying input field.
             */
            getValue(): string;
        }
    }
}
