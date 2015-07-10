/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractdialogplugin.d.ts" />

declare module goog.editor.plugins {

    class EquationEditorPlugin extends EquationEditorPlugin__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class EquationEditorPlugin__Class extends goog.editor.plugins.AbstractDialogPlugin__Class  { 
    
            /**
             * A plugin that opens the equation editor in a dialog window.
             * @param {string=} opt_helpUrl A URL pointing to help documentation.
             * @constructor
             * @extends {goog.editor.plugins.AbstractDialogPlugin}
             * @final
             */
            constructor(opt_helpUrl?: string);
    } 
    
}
