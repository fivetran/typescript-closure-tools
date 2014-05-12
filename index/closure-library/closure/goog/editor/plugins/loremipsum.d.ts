/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />

declare module goog.editor.plugins {

    class LoremIpsum extends LoremIpsum.__Class { }
    module LoremIpsum {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.editor.Plugin.__Class {
    
            /**
             * A plugin that manages lorem ipsum state of editable fields.
             * @param {string} message The lorem ipsum message.
             * @constructor
             * @extends {goog.editor.Plugin}
             * @final
             */
            constructor(message: string);
        }
    }
}
