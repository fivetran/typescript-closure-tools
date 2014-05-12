/// <reference path="../../../../globals.d.ts" />
/// <reference path="../palette.d.ts" />
/// <reference path="../paletterenderer.d.ts" />
/// <reference path="../../dom/dom.d.ts" />
/// <reference path="../../net/imageloader.d.ts" />
/// <reference path="./emoji.d.ts" />

declare module goog.ui.emoji {

    class EmojiPalette extends EmojiPalette.__Class { }
    module EmojiPalette {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Palette.__Class {
    
            /**
             * A page of emoji to be displayed in an EmojiPicker.
             *
             * @param {Array.<Array>} emoji List of emoji for this page.
              * @param {?string=} opt_urlPrefix Prefix that should be prepended to all URL.
             * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
             *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @extends {goog.ui.Palette}
             * @constructor
             * @final
             */
            constructor(emoji: any[][], opt_urlPrefix?: string, opt_renderer?: goog.ui.PaletteRenderer, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Sends off requests for all the animated emoji and replaces their static
             * sprites when the images are done downloading.
             */
            loadAnimatedEmoji(): void;
    
            /**
             * Returns the image loader that this palette uses. Used for testing.
             *
             * @return {goog.net.ImageLoader} the image loader.
             */
            getImageLoader(): goog.net.ImageLoader;
    
            /**
             * @return {goog.ui.emoji.Emoji} The currently selected emoji from this palette.
             */
            getSelectedEmoji(): goog.ui.emoji.Emoji;
    
            /**
             * @return {number} The number of emoji managed by this palette.
             */
            getNumberOfEmoji(): number;
    
            /**
             * Returns the index of the specified emoji within this palette.
             *
             * @param {string} id Id of the emoji to look up.
             * @return {number} The index of the specified emoji within this palette.
             */
            getEmojiIndex(id: string): number;
        }
    }
}
