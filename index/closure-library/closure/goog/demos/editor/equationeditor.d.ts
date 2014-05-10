/// <reference path="../../../../globals.d.ts" />

declare module goog.demos.editor {

    class EquationEditor extends __EquationEditor { }
    class __EquationEditor {
    
        /**
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Creates a new editor and opens the dialog.
         * @param {string} initialEquation The initial equation value to use.
         */
        openEditor(initialEquation: string): void;
    }
}
