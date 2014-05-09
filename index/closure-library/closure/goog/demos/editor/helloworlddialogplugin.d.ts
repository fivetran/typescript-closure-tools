/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../editor/plugins/abstractdialogplugin.d.ts" />

declare module goog.demos.editor {

    class HelloWorldDialogPlugin extends goog.editor.plugins.AbstractDialogPlugin {
    
        /**
         * A plugin that opens the hello world dialog.
         * @constructor
         * @extends {goog.editor.plugins.AbstractDialogPlugin}
         * @final
         */
        constructor();
    }
}

declare module goog.demos.editor.HelloWorldDialogPlugin {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    enum Command { HELLO_WORLD_DIALOG } 
}
