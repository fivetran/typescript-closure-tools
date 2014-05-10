/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />
/// <reference path="../../events/event.d.ts" />

declare module goog.editor.plugins {

    class AbstractTabHandler extends __AbstractTabHandler { }
    class __AbstractTabHandler extends goog.editor.__Plugin {
    
        /**
         * Plugin to handle tab keys. Specific tab behavior defined by subclasses.
         *
         * @constructor
         * @extends {goog.editor.Plugin}
         */
        constructor();
    
        /**
         * Handle a tab key press.
         * @param {goog.events.Event} e The key event.
         * @return {boolean} Whether this event was handled by this plugin.
         * @protected
         */
        handleTabKey(e: goog.events.Event): boolean;
    }
}
