/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />

declare module goog.editor.plugins {

    class RemoveFormatting extends RemoveFormatting.__Class { }
    module RemoveFormatting {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.editor.Plugin.__Class {
    
            /**
             * A plugin to handle removing formatting from selected text.
             * @constructor
             * @extends {goog.editor.Plugin}
             * @final
             */
            constructor();
    
            /**
             * Handle per node special processing if neccessary. If this function returns
             * null then standard cleanup is applied. Otherwise this node and all children
             * are assumed to be cleaned.
             * NOTE(user): If an alternate RemoveFormatting processor is provided
             * (setRemoveFormattingFunc()), this will no longer work.
             * @param {Element} node The node to clean.
             * @return {?string} The HTML strig representation of the cleaned data.
             */
            getValueForNode(node: Element): string;
    
            /**
             * Sets a function to be used for remove formatting.
             * @param {function(string): string} removeFormattingFunc - A function that
             *     takes  a string of html and returns a string of html that does any other
             *     formatting changes desired.  Use this only if trogedit's behavior doesn't
             *     meet your needs.
             */
            setRemoveFormattingFunc(removeFormattingFunc: (_0: string) => string): void;
        }
    }
}

declare module goog.editor.plugins.RemoveFormatting {

    /**
     * The editor command this plugin in handling.
     * @type {string}
     */
    var REMOVE_FORMATTING_COMMAND: string;
}
