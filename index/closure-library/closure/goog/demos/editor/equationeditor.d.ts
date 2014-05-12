/// <reference path="../../../../globals.d.ts" />

declare module goog.demos.editor {

    class EquationEditor extends EquationEditor.__Class { }
    module EquationEditor {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
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
}
