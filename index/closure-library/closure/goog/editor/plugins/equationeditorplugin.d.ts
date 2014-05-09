/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractdialogplugin.d.ts" />

declare module goog.editor.plugins {

    class EquationEditorPlugin extends goog.editor.plugins.AbstractDialogPlugin {
    
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
