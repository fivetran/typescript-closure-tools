/// <reference path="../../../../globals.d.ts" />
/// <reference path="./emojipaletterenderer.d.ts" />

declare module goog.ui.emoji {

    class ProgressiveEmojiPaletteRenderer extends ProgressiveEmojiPaletteRenderer.__Class { }
    module ProgressiveEmojiPaletteRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.emoji.EmojiPaletteRenderer.__Class {
    
            /**
             * Progressively renders an emoji palette. The progressive renderer tries to
             * use img tags instead of background-image for sprited emoji, since most
             * browsers render img tags progressively (i.e., as the data comes in), while
             * only very new browsers render background-image progressively.
             *
             * @param {string} defaultImgUrl Url of the img that should be used to fill up
             *     the cells in the emoji table, to prevent jittering. Will be stretched
             *     to the emoji cell size. A good image is a transparent dot.
             * @constructor
             * @extends {goog.ui.emoji.EmojiPaletteRenderer}
             * @final
             */
            constructor(defaultImgUrl: string);
        }
    }
}
