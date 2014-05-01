// Generated Wed Apr 30 16:34:54 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/a11y/aria.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/fx.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/log.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/net.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/positioning.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />
/// <reference path="../../goog/style.d.ts" />
/// <reference path="../../goog/timer.d.ts" />
/// <reference path="../../goog/ui.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.ui.emoji.Emoji' {

    /**
     * The name of the goomoji attribute, used for emoji image elements.
     * @type {string}
     */
    var ATTRIBUTE: string;
}

declare module 'goog.ui.emoji.EmojiPaletteRenderer' {

    /** @override */
    function getCssClass(): void;
}

declare module 'goog.ui.emoji.EmojiPicker' {

    /**
     * Default number of rows per grid of emoji.
     *
     * @type {number}
     */
    var DEFAULT_NUM_ROWS: number;

    /**
     * Default number of columns per grid of emoji.
     *
     * @type {number}
     */
    var DEFAULT_NUM_COLS: number;

    /**
     * Default location of the tabs in relation to the emoji grids.
     *
     * @type {goog.ui.TabPane.TabLocation}
     */
    var DEFAULT_TAB_LOCATION: goog.ui.TabPane.TabLocation;
}

declare module 'goog.ui.emoji' {

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
    class Emoji {
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
    class EmojiPalette extends goog.ui.Palette {
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
    
        /** @override */
        disposeInternal(): void;
    
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
        updateAnimatedPaletteItem(item: Element, animatedImg: Image): void;
    
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
    
        /** @override */
        createCell(): void;
    
        /**
         * Returns the item corresponding to the given node, or null if the node is
         * neither a palette cell nor part of a palette item.
         * @param {goog.ui.Palette} palette Palette in which to look for the item.
         * @param {Node} node Node to look for.
         * @return {Node} The corresponding palette item (null if not found).
         * @override
         */
        getContainingItem(palette: goog.ui.Palette, node: Node): Node;
    }

    /**
     * Creates a new, empty emoji picker. An emoji picker is a grid of emoji, each
     * cell of the grid containing a single emoji. The picker may contain multiple
     * pages of emoji.
     *
     * When a user selects an emoji, by either clicking or pressing enter, the
     * picker fires a goog.ui.Component.EventType.ACTION event with the id. The
     * client listens on this event and in the handler can retrieve the id of the
     * selected emoji and do something with it, for instance, inserting an image
     * tag into a rich text control. An emoji picker does not maintain state. That
     * is, once an emoji is selected, the emoji picker does not remember which emoji
     * was selected.
     *
     * The emoji picker is implemented as a tabpane with each tabpage being a table.
     * Each of the tables are the same size to prevent jittering when switching
     * between pages.
     *
     * @param {string} defaultImgUrl Url of the img that should be used to fill up
     *     the cells in the emoji table, to prevent jittering. Should be the same
     *     size as the emoji.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class EmojiPicker extends goog.ui.Component {
        /**
         * Creates a new, empty emoji picker. An emoji picker is a grid of emoji, each
         * cell of the grid containing a single emoji. The picker may contain multiple
         * pages of emoji.
         *
         * When a user selects an emoji, by either clicking or pressing enter, the
         * picker fires a goog.ui.Component.EventType.ACTION event with the id. The
         * client listens on this event and in the handler can retrieve the id of the
         * selected emoji and do something with it, for instance, inserting an image
         * tag into a rich text control. An emoji picker does not maintain state. That
         * is, once an emoji is selected, the emoji picker does not remember which emoji
         * was selected.
         *
         * The emoji picker is implemented as a tabpane with each tabpage being a table.
         * Each of the tables are the same size to prevent jittering when switching
         * between pages.
         *
         * @param {string} defaultImgUrl Url of the img that should be used to fill up
         *     the cells in the emoji table, to prevent jittering. Should be the same
         *     size as the emoji.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(defaultImgUrl: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Adds a group of emoji to the picker.
         *
         * @param {string|Element} title Title for the group.
         * @param {Array.<Array.<string>>} emojiGroup A new group of emoji to be added
         *    Each internal array contains [emojiUrl, emojiId].
         */
        addEmojiGroup(title: any /*string|Element*/, emojiGroup: string[][]): void;
    
        /**
         * Gets the number of rows per grid in the emoji picker.
         *
         * @return {number} number of rows per grid.
         */
        getNumRows(): number;
    
        /**
         * Gets the number of columns per grid in the emoji picker.
         *
         * @return {number} number of columns per grid.
         */
        getNumColumns(): number;
    
        /**
         * Sets the number of rows per grid in the emoji picker. This should only be
         * called before the picker has been rendered.
         *
         * @param {number} numRows Number of rows per grid.
         */
        setNumRows(numRows: number): void;
    
        /**
         * Sets the number of columns per grid in the emoji picker. This should only be
         * called before the picker has been rendered.
         *
         * @param {number} numCols Number of columns per grid.
         */
        setNumColumns(numCols: number): void;
    
        /**
         * Sets whether to automatically size the emojipicker based on the number of
         * columns and the number of emoji in each group, so as to reduce jitter.
         *
         * @param {boolean} autoSize Whether to automatically size the picker.
         */
        setAutoSizeByColumnCount(autoSize: boolean): void;
    
        /**
         * Sets the location of the tabs in relation to the emoji grids. This should
         * only be called before the picker has been rendered.
         *
         * @param {goog.ui.TabPane.TabLocation} tabLocation The location of the tabs.
         */
        setTabLocation(tabLocation: goog.ui.TabPane.TabLocation): void;
    
        /**
         * Sets whether loading of images should be delayed until after dom creation.
         * Thus, this function must be called before {@link #createDom}. If set to true,
         * the client must call {@link #loadImages} when they wish the images to be
         * loaded.
         *
         * @param {boolean} shouldDelay Whether to delay loading the images.
         */
        setDelayedLoad(shouldDelay: boolean): void;
    
        /**
         * Sets whether to require the caller to manually specify when to start loading
         * animated emoji. This is primarily for unittests to be able to test the
         * structure of the emojipicker palettes before and after the animated emoji
         * have been loaded. This only affects sprited emojipickers with sprite data
         * for animated emoji.
         *
         * @param {boolean} manual Whether to load animated emoji manually.
         */
        setManualLoadOfAnimatedEmoji(manual: boolean): void;
    
        /**
         * Returns true if the component is focusable, false otherwise.  The default
         * is true.  Focusable components always have a tab index and allocate a key
         * handler to handle keyboard events while focused.
         * @return {boolean} Whether the component is focusable.
         */
        isFocusable(): boolean;
    
        /**
         * Sets whether the component is focusable.  The default is true.
         * Focusable components always have a tab index and allocate a key handler to
         * handle keyboard events while focused.
         * @param {boolean} focusable Whether the component is focusable.
         */
        setFocusable(focusable: boolean): void;
    
        /**
         * Sets the URL prefix for the emoji URLs.
         *
         * @param {string} urlPrefix Prefix that should be prepended to all URLs.
         */
        setUrlPrefix(urlPrefix: string): void;
    
        /**
         * Sets the progressive rendering aspect of this emojipicker. Must be called
         * before createDom to have an effect.
         *
         * @param {boolean} progressive Whether this picker should render progressively.
         */
        setProgressiveRender(progressive: boolean): void;
    
        /**
         * Causes the emoji imgs to be loaded into the picker. Used for delayed loading.
         * No-op if delayed loading is not set.
         */
        loadImages(): void;
    
        /**
         * @override
         * @suppress {deprecated} Using deprecated goog.ui.TabPane.
         */
        createDom(): void;
    
        /**
         * Used by unittests to manually load the animated emoji for this picker.
         */
        manuallyLoadAnimatedEmoji(): void;
    
        /**
         * EmojiPickers cannot be used to decorate pre-existing html, since the
         * structure they build is fairly complicated.
         * @param {Element} element Element to decorate.
         * @return {boolean} Returns always false.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * @override
         * @suppress {deprecated} Using deprecated goog.ui.TabPane.
         */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * @return {string} CSS class for the root element of EmojiPicker.
         */
        getCssClass(): string;
    
        /**
         * Returns the currently selected emoji from this picker. If the picker is
         * using the URL prefix optimization, allocates a new emoji object with the
         * full URL. This method is meant to be used by clients of the emojipicker,
         * e.g., in a listener on goog.ui.component.EventType.ACTION that wants to use
         * the just-selected emoji.
         *
         * @return {goog.ui.emoji.Emoji} The currently selected emoji from this picker.
         */
        getSelectedEmoji(): goog.ui.emoji.Emoji;
    
        /**
         * Returns the number of emoji groups in this picker.
         *
         * @return {number} The number of emoji groups in this picker.
         */
        getNumEmojiGroups(): number;
    
        /**
         * Returns a page from the picker. This should be considered protected, and is
         * ONLY FOR TESTING.
         *
         * @param {number} index Index of the page to return.
         * @return {goog.ui.emoji.EmojiPalette?} the page at the specified index or null
         *     if none exists.
         */
        getPage(index: number): goog.ui.emoji.EmojiPalette;
    
        /**
         * Returns all the pages from the picker. This should be considered protected,
         * and is ONLY FOR TESTING.
         *
         * @return {Array.<goog.ui.emoji.EmojiPalette>?} the pages in the picker or
         *     null if none exist.
         */
        getPages(): goog.ui.emoji.EmojiPalette[];
    
        /**
         * Returns the tabpane if this is a multipage picker. This should be considered
         * protected, and is ONLY FOR TESTING.
         *
         * @return {goog.ui.TabPane} the tabpane if it is a multipage picker,
         *     or null if it does not exist or is a single page picker.
         */
        getTabPane(): goog.ui.TabPane;
    }

    /**
     * Constructs a popup emoji picker widget.
     *
     * @param {string} defaultImgUrl Url of the img that should be used to fill up
     *     the cells in the emoji table, to prevent jittering. Should be the same
     *     size as the emoji.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     * @final
     */
    class PopupEmojiPicker extends goog.ui.Component {
        /**
         * Constructs a popup emoji picker widget.
         *
         * @param {string} defaultImgUrl Url of the img that should be used to fill up
         *     the cells in the emoji table, to prevent jittering. Should be the same
         *     size as the emoji.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @extends {goog.ui.Component}
         * @constructor
         * @final
         */
        constructor(defaultImgUrl: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Adds a group of emoji to the picker.
         *
         * @param {string|Element} title Title for the group.
         * @param {Array.<Array>} emojiGroup A new group of emoji to be added. Each
         *    internal array contains [emojiUrl, emojiId].
         */
        addEmojiGroup(title: any /*string|Element*/, emojiGroup: any[][]): void;
    
        /**
         * Sets whether the emoji picker should toggle if it is already open.
         * @param {boolean} toggle The toggle mode to use.
         */
        setToggleMode(toggle: boolean): void;
    
        /**
         * Gets whether the emojipicker is in toggle mode
         * @return {boolean} toggle.
         */
        getToggleMode(): boolean;
    
        /**
         * Sets whether loading of images should be delayed until after dom creation.
         * Thus, this function must be called before {@link #createDom}. If set to true,
         * the client must call {@link #loadImages} when they wish the images to be
         * loaded.
         *
         * @param {boolean} shouldDelay Whether to delay loading the images.
         */
        setDelayedLoad(shouldDelay: boolean): void;
    
        /**
         * Sets whether the emoji picker can accept focus.
         * @param {boolean} focusable Whether the emoji picker should accept focus.
         */
        setFocusable(focusable: boolean): void;
    
        /**
         * Sets the URL prefix for the emoji URLs.
         *
         * @param {string} urlPrefix Prefix that should be prepended to all URLs.
         */
        setUrlPrefix(urlPrefix: string): void;
    
        /**
         * Sets the location of the tabs in relation to the emoji grids. This should
         * only be called before the picker has been rendered.
         *
         * @param {goog.ui.TabPane.TabLocation} tabLocation The location of the tabs.
         */
        setTabLocation(tabLocation: goog.ui.TabPane.TabLocation): void;
    
        /**
         * Sets the number of rows per grid in the emoji picker. This should only be
         * called before the picker has been rendered.
         *
         * @param {number} numRows Number of rows per grid.
         */
        setNumRows(numRows: number): void;
    
        /**
         * Sets the number of columns per grid in the emoji picker. This should only be
         * called before the picker has been rendered.
         *
         * @param {number} numCols Number of columns per grid.
         */
        setNumColumns(numCols: number): void;
    
        /**
         * Sets the progressive rendering aspect of this emojipicker. Must be called
         * before createDom to have an effect.
         *
         * @param {boolean} progressive Whether the picker should render progressively.
         */
        setProgressiveRender(progressive: boolean): void;
    
        /**
         * Returns the number of emoji groups in this picker.
         *
         * @return {number} The number of emoji groups in this picker.
         */
        getNumEmojiGroups(): number;
    
        /**
         * Causes the emoji imgs to be loaded into the picker. Used for delayed loading.
         */
        loadImages(): void;
    
        /** @override */
        createDom(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Attaches the popup emoji picker to an element.
         *
         * @param {Element} element The element to attach to.
         */
        attach(element: Element): void;
    
        /**
         * Detatches the popup emoji picker from an element.
         *
         * @param {Element} element The element to detach from.
         */
        detach(element: Element): void;
    
        /**
         * @return {goog.ui.emoji.EmojiPicker} The emoji picker instance.
         */
        getEmojiPicker(): goog.ui.emoji.EmojiPicker;
    
        /**
         * Returns whether the Popup dismisses itself when the user clicks outside of
         * it.
         * @return {boolean} Whether the Popup autohides on an external click.
         */
        getAutoHide(): boolean;
    
        /**
         * Sets whether the Popup dismisses itself when the user clicks outside of it -
         * must be called after the Popup has been created (in createDom()),
         * otherwise it does nothing.
         *
         * @param {boolean} autoHide Whether to autohide on an external click.
         */
        setAutoHide(autoHide: boolean): void;
    
        /**
         * Returns the region inside which the Popup dismisses itself when the user
         * clicks, or null if it was not set. Null indicates the entire document is
         * the autohide region.
         * @return {Element} The DOM element for autohide, or null if it hasn't been
         *     set.
         */
        getAutoHideRegion(): Element;
    
        /**
         * Sets the region inside which the Popup dismisses itself when the user
         * clicks - must be called after the Popup has been created (in createDom()),
         * otherwise it does nothing.
         *
         * @param {Element} element The DOM element for autohide.
         */
        setAutoHideRegion(element: Element): void;
    
        /**
         * Returns the {@link goog.ui.PopupBase} from this picker. Returns null if the
         * popup has not yet been created.
         *
         * NOTE: This should *ONLY* be called from tests. If called before createDom(),
         * this should return null.
         *
         * @return {goog.ui.PopupBase?} The popup, or null if it hasn't been created.
         */
        getPopup(): goog.ui.PopupBase;
    
        /**
         * @return {Element} The last element that triggered the popup.
         */
        getLastTarget(): Element;
    
        /**
         * @return {goog.ui.emoji.Emoji} The currently selected emoji.
         */
        getSelectedEmoji(): goog.ui.emoji.Emoji;
    }

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
    class ProgressiveEmojiPaletteRenderer extends goog.ui.emoji.EmojiPaletteRenderer {
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
    
        /** @override */
        buildElementFromSpriteMetadata(): void;
    
        /** @override */
        updateAnimatedPaletteItem(): void;
    }

    /**
     * Creates a SpriteInfo object with the specified properties. If the image is
     * sprited via CSS, then only the first parameter needs a value. If the image
     * is sprited via metadata, then the first parameter should be left null.
     *
     * @param {?string} cssClass CSS class to properly display the sprited image.
     * @param {string=} opt_url Url of the sprite image.
     * @param {number=} opt_width Width of the image being sprited.
     * @param {number=} opt_height Height of the image being sprited.
     * @param {number=} opt_xOffset Positive x offset of the image being sprited
     *     within the sprite.
     * @param {number=} opt_yOffset Positive y offset of the image being sprited
     *     within the sprite.
     * @param {boolean=} opt_animated Whether the sprite is animated.
     * @constructor
     * @final
     */
    class SpriteInfo {
        /**
         * Creates a SpriteInfo object with the specified properties. If the image is
         * sprited via CSS, then only the first parameter needs a value. If the image
         * is sprited via metadata, then the first parameter should be left null.
         *
         * @param {?string} cssClass CSS class to properly display the sprited image.
         * @param {string=} opt_url Url of the sprite image.
         * @param {number=} opt_width Width of the image being sprited.
         * @param {number=} opt_height Height of the image being sprited.
         * @param {number=} opt_xOffset Positive x offset of the image being sprited
         *     within the sprite.
         * @param {number=} opt_yOffset Positive y offset of the image being sprited
         *     within the sprite.
         * @param {boolean=} opt_animated Whether the sprite is animated.
         * @constructor
         * @final
         */
        constructor(cssClass: string, opt_url?: string, opt_width?: number, opt_height?: number, opt_xOffset?: number, opt_yOffset?: number, opt_animated?: boolean);
    
        /**
         * Returns the css class of the sprited image.
         * @return {?string} Name of the CSS class to properly display the sprited
         *     image.
         */
        getCssClass(): string;
    
        /**
         * Returns the url of the sprite image.
         * @return {?string} Url of the sprite image.
         */
        getUrl(): string;
    
        /**
         * Returns whether the emoji specified by this sprite is animated.
         * @return {boolean} Whether the emoji is animated.
         */
        isAnimated(): boolean;
    
        /**
         * Returns the width of the image being sprited, appropriate for a CSS value.
         * @return {string} The width of the image being sprited.
         */
        getWidthCssValue(): string;
    
        /**
         * Returns the height of the image being sprited, appropriate for a CSS value.
         * @return {string} The height of the image being sprited.
         */
        getHeightCssValue(): string;
    
        /**
         * Returns the x offset of the image being sprited within the sprite,
         * appropriate for a CSS value.
         * @return {string} The x offset of the image being sprited within the sprite.
         */
        getXOffsetCssValue(): string;
    
        /**
         * Returns the positive y offset of the image being sprited within the sprite,
         * appropriate for a CSS value.
         * @return {string} The y offset of the image being sprited within the sprite.
         */
        getYOffsetCssValue(): string;
    }
}

