/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/spell/spellcheck.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/dom/selection.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../closure/goog/positioning/positioning.d.ts" />
/// <reference path="../../../closure/goog/positioning/abstractposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/menuanchoredposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/clientposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/viewportclientposition.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../closure/goog/ui/popupbase.d.ts" />
/// <reference path="../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../closure/goog/ui/containerrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/control.d.ts" />
/// <reference path="../../../closure/goog/ui/menuseparatorrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/separator.d.ts" />
/// <reference path="../../../closure/goog/ui/menurenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menuseparator.d.ts" />
/// <reference path="../../../closure/goog/ui/menuitemrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menuitem.d.ts" />
/// <reference path="../../../closure/goog/ui/container.d.ts" />
/// <reference path="../../../closure/goog/ui/menuheaderrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menuheader.d.ts" />
/// <reference path="../../../closure/goog/ui/menu.d.ts" />
/// <reference path="../../../closure/goog/ui/popupmenu.d.ts" />

declare module goog.ui {

    /**
     * Abstract base class for spell checker editor implementations. Provides basic
     * functionality such as word lookup and caching.
     *
     * @param {goog.spell.SpellCheck} spellCheck Instance of the SpellCheck
     *     support object to use. A single instance can be shared by multiple editor
     *     components.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class AbstractSpellChecker extends goog.ui._Component {
        /**
         * Abstract base class for spell checker editor implementations. Provides basic
         * functionality such as word lookup and caching.
         *
         * @param {goog.spell.SpellCheck} spellCheck Instance of the SpellCheck
         *     support object to use. A single instance can be shared by multiple editor
         *     components.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(spellCheck: goog.spell.SpellCheck, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Class name for suggestions menu.
         *
         * @type {string}
         */
        suggestionsMenuClassName: string;
    
        /**
         * Whether corrected words should be highlighted.
         *
         * @type {boolean}
         */
        markCorrected: boolean;
    
        /**
         * Markers for the text that does not need to be included in the processing.
         *
         * For rich text editor this is a list of strings formatted as
         * tagName.className or className. If both are specified, the element will be
         * excluded if BOTH are matched. If only a className is specified, then we will
         * exclude regions with the className. If only one marker is needed, it may be
         * passed as a string.
         * For plain text editor this is a RegExp that matches the excluded text.
         *
         * Used exclusively by the derived classes
         *
         * @type {Array.<string>|string|RegExp|undefined}
         * @protected
         */
        excludeMarker: any /*string[]|string|RegExp|any (undefined)*/;
    
        /**
         * @return {goog.spell.SpellCheck} The handler used for caching and lookups.
         */
        getSpellCheck(): goog.spell.SpellCheck;
    
        /**
         * Sets the spell checker used for caching and lookups.
         * @param {goog.spell.SpellCheck} spellCheck The handler used for caching and
         *     lookups.
         */
        setSpellCheck(spellCheck: goog.spell.SpellCheck): void;
    
        /**
         * Sets the handler used for caching and lookups.
         * @param {goog.spell.SpellCheck} handler The handler used for caching and
         *     lookups.
         * @deprecated Use #setSpellCheck instead.
         */
        setHandler(handler: goog.spell.SpellCheck): void;
    
        /**
         * @return {goog.ui.PopupMenu|undefined} The suggestions menu.
         * @protected
         */
        getMenu(): any /*goog.ui.PopupMenu|any (undefined)*/;
    
        /**
         * @return {goog.ui.MenuItem|undefined} The menu item for edit word option.
         * @protected
         */
        getMenuEdit(): any /*goog.ui.MenuItem|any (undefined)*/;
    
        /**
         * Sets the marker for the excluded text.
         *
         * {@see goog.ui.AbstractSpellChecker.prototype.excludeMarker}
         *
         * @param {Array.<string>|string|RegExp|null} marker A RegExp for plain text
         *        or class names for the rich text spell checker for the elements to
         *        exclude from checking.
         */
        setExcludeMarker(marker: any /*string[]|string|RegExp|any (null)*/): void;
    
        /**
         * Checks spelling for all text.
         * Should be overridden by implementation.
         */
        check(): void;
    
        /**
         * Hides correction UI.
         * Should be overridden by implementation.
         */
        resume(): void;
    
        /**
         * @return {boolean} Whether the correction ui is visible.
         */
        isVisible(): boolean;
    
        /**
         * Clears the word to element references map used by replace/ignore.
         * @protected
         */
        clearWordElements(): void;
    
        /**
         * Ignores spelling of word.
         *
         * @param {string} word Word to add.
         */
        ignoreWord(word: string): void;
    
        /**
         * Replaces word.
         *
         * @param {Element} el An element wrapping the word that should be replaced.
         * @param {string} old Word that was replaced.
         * @param {string} word Word to replace with.
         */
        replaceWord(el: Element, old: string, word: string): void;
    
        /**
         * Displays suggestions menu.
         *
         * @param {Element} el Element to display menu for.
         * @param {goog.events.BrowserEvent|goog.math.Coordinate=} opt_pos Position to
         *     display menu at relative to the viewport (in client coordinates), or a
         *     mouse event.
         */
        showSuggestionsMenu(el: Element, opt_pos?: any /*goog.events.BrowserEvent|goog.math.Coordinate*/): void;
    
        /**
         * Initializes suggestions menu. Populates menu with separator and ignore option
         * that are always valid. Suggestions are later added above the separator.
         *
         * @protected
         */
        initSuggestionsMenu(): void;
    
        /**
         * Handles correction menu actions.
         *
         * @param {goog.events.Event} event Action event.
         * @protected
         */
        onCorrectionAction(event: goog.events.Event): void;
    
        /**
         * Removes spell-checker markup and restore the node to text.
         *
         * @param {Element} el Word element. MUST have a text node child.
         * @protected
         */
        removeMarkup(el: Element): void;
    
        /**
         * Updates element based on word status. Either converts it to a text node, or
         * merges it with the previous or next text node if the status of the world is
         * VALID, in which case the element itself is eliminated.
         *
         * @param {Element} el Word element.
         * @param {string} word Word to update status for.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @protected
         */
        updateElement(el: Element, word: string, status: goog.spell.SpellCheck.WordStatus): void;
    
        /**
         * Generates unique Ids for spell checker elements.
         * @param {number=} opt_id Id to suffix with.
         * @return {string} Unique element id.
         * @protected
         */
        makeElementId(opt_id?: number): string;
    
        /**
         * Returns the span element that matches the given number id.
         * @param {number} id Number id to make the element id.
         * @return {Element} The matching span element or null if no span matches.
         * @protected
         */
        getElementById(id: number): Element;
    
        /**
         * Creates an element for a specified word and stores a reference to it.
         *
         * @param {string} word Word to create element for.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @return {HTMLSpanElement} The created element.
         * @protected
         */
        createWordElement(word: string, status: goog.spell.SpellCheck.WordStatus): HTMLSpanElement;
    
        /**
         * Stores a reference to word element.
         *
         * @param {string} word The word to store.
         * @param {HTMLSpanElement} el The element associated with it.
         * @protected
         */
        registerWordElement(word: string, el: HTMLSpanElement): void;
    
        /**
         * Returns desired element properties for the specified status.
         * Should be overridden by implementation.
         *
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @return {Object} Properties to apply to the element.
         * @protected
         */
        getElementProperties(status: goog.spell.SpellCheck.WordStatus): Object;
    
        /**
         * Precharges local dictionary cache. This is optional, but greatly reduces
         * amount of subsequent churn in the DOM tree because most of the words become
         * known from the very beginning.
         *
         * @param {string} text Text to process.
         * @param {number} words Max number of words to scan.
         * @return {number} number of words actually scanned.
         * @protected
         */
        populateDictionary(text: string, words: number): number;
    
        /**
         * Processes word.
         * Should be overridden by implementation.
         *
         * @param {Node} node Node containing word.
         * @param {string} text Word to process.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of the word.
         * @protected
         */
        processWord(node: Node, text: string, status: goog.spell.SpellCheck.WordStatus): void;
    
        /**
         * Processes range of text that checks out (contains no unrecognized words).
         * Should be overridden by implementation. May contain words and separators.
         *
         * @param {Node} node Node containing text range.
         * @param {string} text text to process.
         * @protected
         */
        processRange(node: Node, text: string): void;
    
        /**
         * Starts asynchronous processing mode.
         *
         * @protected
         */
        initializeAsyncMode(): void;
    
        /**
         * Finalizes asynchronous processing mode. Should be called after there is no
         * more text to process and processTextAsync and/or continueAsyncProcessing
         * returned FINISHED.
         *
         * @protected
         */
        finishAsyncProcessing(): void;
    
        /**
         * Blocks processing of spell checker READY events. This is used in dictionary
         * recharge and async mode so that completion is not signaled prematurely.
         *
         * @protected
         */
        blockReadyEvents(): void;
    
        /**
         * Unblocks processing of spell checker READY events. This is used in
         * dictionary recharge and async mode so that completion is not signaled
         * prematurely.
         *
         * @protected
         */
        unblockReadyEvents(): void;
    
        /**
         * Splits text into individual words and blocks of separators. Calls virtual
         * processWord_ and processRange_ methods.
         *
         * @param {Node} node Node containing text.
         * @param {string} text Text to process.
         * @return {goog.ui.AbstractSpellChecker.AsyncResult} operation result.
         * @protected
         */
        processTextAsync(node: Node, text: string): goog.ui.AbstractSpellChecker.AsyncResult;
    
        /**
         * Continues processing started by processTextAsync. Calls virtual
         * processWord_ and processRange_ methods.
         *
         * @return {goog.ui.AbstractSpellChecker.AsyncResult} operation result.
         * @protected
         */
        continueAsyncProcessing(): goog.ui.AbstractSpellChecker.AsyncResult;
    }
}

declare module goog.ui.AbstractSpellChecker {

    /**
     * @return {number} The next unique instance ID for a misspelled word.
     * @protected
     */
    function getNextId(): number;

    /**
     * Constants for representing the direction while navigating.
     *
     * @enum {number}
     */
    enum Direction { PREVIOUS, NEXT } 

    /**
     * Constants for the result of asynchronous processing.
     * @enum {number}
     */
    enum AsyncResult { PENDING, DONE } 
}

