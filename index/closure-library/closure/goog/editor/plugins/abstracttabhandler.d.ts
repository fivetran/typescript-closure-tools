/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />
/// <reference path="../../events/event.d.ts" />

declare module goog.editor.plugins {

    class AbstractTabHandler extends AbstractTabHandler__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class AbstractTabHandler__Class extends goog.editor.Plugin__Class  { 
    
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
