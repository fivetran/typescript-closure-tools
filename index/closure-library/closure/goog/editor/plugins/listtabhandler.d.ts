/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstracttabhandler.d.ts" />

declare module goog.editor.plugins {

    class ListTabHandler extends __ListTabHandler { }
    class __ListTabHandler extends goog.editor.plugins.__AbstractTabHandler {
    
        /**
         * Plugin to handle tab keys in lists to indent and outdent.
         * @constructor
         * @extends {goog.editor.plugins.AbstractTabHandler}
         * @final
         */
        constructor();
    }
}
