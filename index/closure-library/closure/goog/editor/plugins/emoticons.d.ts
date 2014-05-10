/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />

declare module goog.editor.plugins {

    class Emoticons extends __Emoticons { }
    class __Emoticons extends goog.editor.__Plugin {
    
        /**
         * Plugin for generating emoticons.
         *
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor();
    }
}

declare module goog.editor.plugins.Emoticons {

    /** The emoticon command. */
    var COMMAND: any /*missing*/;
}
