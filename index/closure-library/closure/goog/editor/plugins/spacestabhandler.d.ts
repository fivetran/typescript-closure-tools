/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstracttabhandler.d.ts" />

declare module goog.editor.plugins {

    class SpacesTabHandler extends SpacesTabHandler.__Class { }
    module SpacesTabHandler {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.editor.plugins.AbstractTabHandler.__Class {
    
            /**
             * Plugin to handle tab keys when not in lists to add 4 spaces.
             * @constructor
             * @extends {goog.editor.plugins.AbstractTabHandler}
             * @final
             */
            constructor();
        }
    }
}
