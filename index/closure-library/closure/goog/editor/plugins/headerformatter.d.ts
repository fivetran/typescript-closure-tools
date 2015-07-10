/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />

declare module goog.editor.plugins {

    class HeaderFormatter extends HeaderFormatter__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class HeaderFormatter__Class extends goog.editor.Plugin__Class  { 
    
            /**
             * Applies header styles to text.
             * @constructor
             * @extends {goog.editor.Plugin}
             * @final
             */
            constructor();
    } 
    
}

declare module goog.editor.plugins.HeaderFormatter {

    /**
     * Commands that can be passed as the optional argument to execCommand.
     * @enum {string}
     */
    enum HEADER_COMMAND { H1, H2, H3, H4 } 
}
