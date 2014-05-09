/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />

declare module goog.editor.plugins {

    class LoremIpsum extends goog.editor.Plugin {
    
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
