/// <reference path="../../../../globals.d.ts" />

declare module goog.demos.editor {

    class EquationEditor extends EquationEditor__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class EquationEditor__Class  { 
    
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
