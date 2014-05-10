/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />

declare module goog.editor.plugins {

    class HeaderFormatter extends __HeaderFormatter { }
    class __HeaderFormatter extends goog.editor.__Plugin {
    
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
