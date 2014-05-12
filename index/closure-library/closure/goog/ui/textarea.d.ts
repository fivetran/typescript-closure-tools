/// <reference path="../../../globals.d.ts" />
/// <reference path="./control.d.ts" />
/// <reference path="./textarearenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class Textarea extends Textarea.__Class { }
    module Textarea {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Control.__Class {
    
            /**
             * A textarea control to handle growing/shrinking with textarea.value.
             *
             * @param {string} content Text to set as the textarea's value.
             * @param {goog.ui.TextareaRenderer=} opt_renderer Renderer used to render or
             *     decorate the textarea. Defaults to {@link goog.ui.TextareaRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.Control}
             */
            constructor(content: string, opt_renderer?: goog.ui.TextareaRenderer, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Sets the default text for the textarea.
             * @param {string} text The default text for the textarea.
             */
            setPlaceholder(text: string): void;
    
            /**
             * @return {number} The minHeight value.
             */
            getMinHeight(): number;
    
            /**
             * Sets a minimum height for the textarea, and calls resize if rendered.
             * @param {number} height New minHeight value.
             */
            setMinHeight(height: number): void;
    
            /**
             * @return {number} The maxHeight value.
             */
            getMaxHeight(): number;
    
            /**
             * Sets a maximum height for the textarea, and calls resize if rendered.
             * @param {number} height New maxHeight value.
             */
            setMaxHeight(height: number): void;
    
            /**
             * Sets the textarea's value.
             * @param {*} value The value property for the textarea, will be cast to a
             *     string by the browser when setting textarea.value.
             */
            setValue(value: any): void;
    
            /**
             * Gets the textarea's value.
             * @return {string} value The value of the textarea.
             */
            getValue(): string;
    
            /**
             * Resizes the textarea vertically.
             */
            resize(): void;
        }
    }
}

declare module goog.ui.Textarea {

    /**
     * Constants for event names.
     * @enum {string}
     */
    enum EventType { RESIZE } 

    /**
     * The CSS class name to add to the input when the user has not entered a
     * value.
     */
    var TEXTAREA_PLACEHOLDER_CLASS: any /*missing*/;
}
