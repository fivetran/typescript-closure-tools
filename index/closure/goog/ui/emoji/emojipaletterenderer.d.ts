/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/ui/emoji/emoji.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodeiterator.d.ts" />
/// <reference path="../../../../closure/goog/ui/paletterenderer.d.ts" />
/// <reference path="../../../../closure/goog/ui/palette.d.ts" />
/// <reference path="../../../../closure/goog/ui/emoji/spriteinfo.d.ts" />

declare module goog.ui.emoji {

    /**
     * Renders an emoji palette.
     *
     * @param {?string} defaultImgUrl Url of the img that should be used to fill up
     *     the cells in the emoji table, to prevent jittering. Will be stretched
     *     to the emoji cell size. A good image is a transparent dot.
     * @constructor
     * @extends {goog.ui.PaletteRenderer}
     */
    class EmojiPaletteRenderer extends goog.ui.PaletteRenderer {
        /**
         * Renders an emoji palette.
         *
         * @param {?string} defaultImgUrl Url of the img that should be used to fill up
         *     the cells in the emoji table, to prevent jittering. Will be stretched
         *     to the emoji cell size. A good image is a transparent dot.
         * @constructor
         * @extends {goog.ui.PaletteRenderer}
         */
        constructor(defaultImgUrl: string);
    
        /**
         * Creates a palette item from the given emoji data.
         *
         * @param {goog.dom.DomHelper} dom DOM helper for constructing DOM elements.
         * @param {string} id Goomoji id for the emoji.
         * @param {goog.ui.emoji.SpriteInfo} spriteInfo Spriting info for the emoji.
         * @param {string} displayUrl URL of the image served for this cell, whether
         *     an individual emoji image or a sprite.
         * @return {HTMLDivElement} The palette item for this emoji.
         */
        createPaletteItem(dom: goog.dom.DomHelper, id: string, spriteInfo: goog.ui.emoji.SpriteInfo, displayUrl: string): HTMLDivElement;
    
        /**
         * Modifies a palette item containing an animated emoji, in response to the
         * animated emoji being successfully downloaded.
         *
         * @param {Element} item The palette item to update.
         * @param {Image} animatedImg An Image object containing the animated emoji.
         */
        updateAnimatedPaletteItem(item: Element, animatedImg: HTMLImageElement): void;
    
        /**
         * Builds the inner contents of a palette item out of sprite metadata.
         *
         * @param {goog.dom.DomHelper} dom DOM helper for constructing DOM elements.
         * @param {goog.ui.emoji.SpriteInfo} spriteInfo The metadata to create the css
         *     for the sprite.
         * @param {string} displayUrl The URL of the image for this cell.
         * @return {HTMLDivElement} The inner element for a palette item.
         */
        buildElementFromSpriteMetadata(dom: goog.dom.DomHelper, spriteInfo: goog.ui.emoji.SpriteInfo, displayUrl: string): HTMLDivElement;
    }
}

declare module goog.ui.emoji.EmojiPaletteRenderer {

    /** @override */
    function getCssClass(): void;
}

