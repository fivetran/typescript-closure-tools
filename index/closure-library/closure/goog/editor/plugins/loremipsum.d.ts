/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />

declare module goog.editor.plugins {

    class LoremIpsum extends LoremIpsum__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class LoremIpsum__Class extends goog.editor.Plugin__Class  { 
    
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
