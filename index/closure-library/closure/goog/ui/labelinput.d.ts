/// <reference path="../../../globals.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class LabelInput extends LabelInput__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class LabelInput__Class extends goog.ui.Component__Class  { 
    
            /**
             * This creates the label input object.
             * @param {string=} opt_label The text to show as the label.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @extends {goog.ui.Component}
             * @constructor
             */
            constructor(opt_label?: string, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * The label restore delay after leaving the input.
             * @type {number} Delay for restoring the label.
             * @protected
             */
            labelRestoreDelayMs: number;
    
            /**
             * The CSS class name to add to the input when the user has not entered a
             * value.
             */
            LABEL_CLASS_NAME: any /*missing*/;
    
            /**
             * @return {boolean} Whether the control is currently focused on.
             */
            hasFocus(): boolean;
    
            /**
             * @return {boolean} Whether the value has been changed by the user.
             */
            hasChanged(): boolean;
    
            /**
             * Clears the value of the input element without resetting the default text.
             */
            clear(): void;
    
            /**
             * Clears the value of the input element and resets the default text.
             */
            reset(): void;
    
            /**
             * Use this to set the value through script to ensure that the label state is
             * up to date
             * @param {string} s The new value for the input.
             */
            setValue(s: string): void;
    
            /**
             * Returns the current value of the text box, returning an empty string if the
             * search box is the default value
             * @return {string} The value of the input box.
             */
            getValue(): string;
    
            /**
             * Sets the label text.
             * @param {string} label The text to show as the label.
             */
            setLabel(label: string): void;
    
            /**
             * @return {string} The text to show as the label.
             */
            getLabel(): string;
    
            /**
             * This method focuses the input and selects all the text. If the value hasn't
             * changed it will set the value to the label so that the label text is
             * selected.
             */
            focusAndSelect(): void;
    
            /**
             * Enables/Disables the label input.
             * @param {boolean} enabled Whether to enable (true) or disable (false) the
             *     label input.
             */
            setEnabled(enabled: boolean): void;
    
            /**
             * @return {boolean} True if the label input is enabled, false otherwise.
             */
            isEnabled(): boolean;
    } 
    
}
