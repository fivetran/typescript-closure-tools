/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />

declare module goog.editor.plugins {

    class LinkShortcutPlugin extends LinkShortcutPlugin.__Class { }
    module LinkShortcutPlugin {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.editor.Plugin.__Class {
    
            /**
             * Plugin to add a keyboard shortcut for the link command
             * @constructor
             * @extends {goog.editor.Plugin}
             * @final
             */
            constructor();
        }
    }
}
