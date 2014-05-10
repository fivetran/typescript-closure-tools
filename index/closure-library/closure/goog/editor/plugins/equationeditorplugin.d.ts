/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractdialogplugin.d.ts" />

declare module goog.editor.plugins {

    class EquationEditorPlugin extends __EquationEditorPlugin { }
    class __EquationEditorPlugin extends goog.editor.plugins.__AbstractDialogPlugin {
    
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
