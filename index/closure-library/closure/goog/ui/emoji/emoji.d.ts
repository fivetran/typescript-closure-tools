/// <reference path="../../../../globals.d.ts" />

declare module goog.ui.emoji {

    class Emoji extends Emoji.__Class { }
    module Emoji {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Creates an emoji.
             *
             * A simple wrapper for an emoji.
             *
             * @param {string} url URL pointing to the source image for the emoji.
             * @param {string} id The id of the emoji, e.g., 'std.1'.
             * @constructor
             * @final
             */
            constructor(url: string, id: string);
    
            /**
             * @return {string} The URL for this emoji.
             */
            getUrl(): string;
    
            /**
             * @return {string} The id of this emoji.
             */
            getId(): string;
        }
    }
}

declare module goog.ui.emoji.Emoji {

    /**
     * The name of the goomoji attribute, used for emoji image elements.
     * @type {string}
     */
    var ATTRIBUTE: string;
}
