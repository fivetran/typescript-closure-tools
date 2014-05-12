/// <reference path="../../../../globals.d.ts" />
/// <reference path="../dialog.d.ts" />

declare module goog.ui.equation {

    class EquationEditorDialog extends EquationEditorDialog.__Class { }
    module EquationEditorDialog {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Dialog.__Class {
    
            /**
             * User interface for equation editor plugin standalone tests.
             * @constructor
             * @param {string=} opt_equation Encoded equation. If not specified, starts with
             *     an empty equation.
             * @extends {goog.ui.Dialog}
             * @final
             */
            constructor(opt_equation?: string);
    
            /**
             * Returns the encoded equation.
             * @return {string} The encoded equation.
             */
            getEquation(): string;
    
            /**
             * Sets the encoded equation.
             * @param {string} equation The encoded equation.
             */
            setEquation(equation: string): void;
    
            /**
             * @return {string} The html code to embed in the document.
             */
            getHtml(): string;
        }
    }
}
