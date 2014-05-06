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
/// <reference path="../../../../closure/goog/ui/emoji/emojipaletterenderer.d.ts" />
/// <reference path="../../../../closure/goog/ui/emoji/progressiveemojipaletterenderer.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/ui/selectionmodel.d.ts" />
/// <reference path="../../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/control.d.ts" />
/// <reference path="../../../../closure/goog/ui/palette.d.ts" />
/// <reference path="../../../../closure/goog/net/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/net/imageloader.d.ts" />
/// <reference path="../../../../closure/goog/ui/emoji/emojipalette.d.ts" />
/// <reference path="../../../../closure/goog/ui/tabpane.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../closure/goog/log/log.d.ts" />

declare module goog.ui.emoji {

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
    class EmojiPicker extends goog.ui._Component {
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
         * Used by unittests to manually load the animated emoji for this picker.
         */
        manuallyLoadAnimatedEmoji(): void;
    
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
}

declare module goog.ui.emoji.EmojiPicker {

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

