/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />

declare module goog.editor.plugins {

    class BasicTextFormatter extends BasicTextFormatter__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class BasicTextFormatter__Class extends goog.editor.Plugin__Class  { 
    
            /**
             * Functions to style text (e.g. underline, make bold, etc.)
             * @constructor
             * @extends {goog.editor.Plugin}
             */
            constructor();
    } 
    
}

declare module goog.editor.plugins.BasicTextFormatter {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    enum COMMAND { LINK, FORMAT_BLOCK, INDENT, OUTDENT, STRIKE_THROUGH, HORIZONTAL_RULE, SUBSCRIPT, SUPERSCRIPT, UNDERLINE, BOLD, ITALIC, FONT_SIZE, FONT_FACE, FONT_COLOR, BACKGROUND_COLOR, ORDERED_LIST, UNORDERED_LIST, JUSTIFY_CENTER, JUSTIFY_FULL, JUSTIFY_RIGHT, JUSTIFY_LEFT } 
}
