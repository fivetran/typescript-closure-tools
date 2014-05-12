/// <reference path="../../../../globals.d.ts" />
/// <reference path="../component.d.ts" />
/// <reference path="../../dom/dom.d.ts" />

declare module goog.ui.equation {

    class TexEditor extends TexEditor.__Class { }
    module TexEditor {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Component.__Class {
    
            /**
             * User interface for equation editor plugin.
             * @constructor
             * @param {Object} context The context that this Tex editor runs in.
             * @param {string} helpUrl URL pointing to help documentation.
             * @param {goog.dom.DomHelper=} opt_domHelper DomHelper to use.
             * @extends {goog.ui.Component}
             * @final
             */
            constructor(context: Object, helpUrl: string, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Returns the encoded equation.
             * @return {string} The encoded equation.
             */
            getEquation(): string;
    
            /**
             * Parse an equation and draw it.
             * Clears any previous displayed equation.
             * @param {string} equation The equation text to parse.
             */
            setEquation(equation: string): void;
    
            /**
             * @return {string} The html code to embed in the document.
             */
            getHtml(): string;
    
            /**
             * Checks whether the current equation is valid and can be used in a document.
             * @return {boolean} Whether the equation valid.
             */
            isValid(): boolean;
    
            /**
             * Sets the visibility of the editor.
             * @param {boolean} visible Whether the editor should be visible.
             */
            setVisible(visible: boolean): void;
        }
    }
}
