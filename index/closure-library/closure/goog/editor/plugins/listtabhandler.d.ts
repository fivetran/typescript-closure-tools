/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstracttabhandler.d.ts" />

declare module goog.editor.plugins {

    class ListTabHandler extends ListTabHandler__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ListTabHandler__Class extends goog.editor.plugins.AbstractTabHandler__Class  { 
    
            /**
             * Plugin to handle tab keys in lists to indent and outdent.
             * @constructor
             * @extends {goog.editor.plugins.AbstractTabHandler}
             * @final
             */
            constructor();
    } 
    
}
