/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractdialogplugin.d.ts" />

declare module goog.editor.plugins {

    class EquationEditorPlugin extends EquationEditorPlugin.__Class { }
    module EquationEditorPlugin {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.editor.plugins.AbstractDialogPlugin.__Class {
    
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
}
