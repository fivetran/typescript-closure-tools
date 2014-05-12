/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />

declare module goog.editor.plugins {

    class Emoticons extends Emoticons.__Class { }
    module Emoticons {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.editor.Plugin.__Class {
    
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
}

declare module goog.editor.plugins.Emoticons {

    /** The emoticon command. */
    var COMMAND: any /*missing*/;
}
