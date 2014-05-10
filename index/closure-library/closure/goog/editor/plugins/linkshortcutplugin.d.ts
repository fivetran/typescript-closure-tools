/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />

declare module goog.editor.plugins {

    class LinkShortcutPlugin extends __LinkShortcutPlugin { }
    class __LinkShortcutPlugin extends goog.editor.__Plugin {
    
        /**
         * Plugin to add a keyboard shortcut for the link command
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor();
    }
}
