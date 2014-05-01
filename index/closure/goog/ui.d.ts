// Generated Wed Apr 30 16:32:26 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/a11y/aria.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/async.d.ts" />
/// <reference path="../goog/color.d.ts" />
/// <reference path="../goog/date.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/fx.d.ts" />
/// <reference path="../goog/fx/anim.d.ts" />
/// <reference path="../goog/graphics.d.ts" />
/// <reference path="../goog/html.d.ts" />
/// <reference path="../goog/i18n.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/log.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/net.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/positioning.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/spell.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/style.d.ts" />
/// <reference path="../goog/timer.d.ts" />
/// <reference path="../goog/uri.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.ui.AbstractSpellChecker' {

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

declare module 'goog.ui.ActivityMonitor' {

    /**
     * Minimum amount of time in ms between throttled ACTIVITY events
     * @type {number}
     */
    var MIN_EVENT_SPACING: number;

    /**
     * Event constants for the activity monitor.
     * @enum {string}
     */
    enum Event { ACTIVITY } 
}

declare module 'goog.ui.Bubble' {

    /**
     * A default configuration for the bubble.
     *
     * @type {Object}
     */
    var defaultConfig: Object;
}

declare module 'goog.ui.ButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui' {

    /**
     * Constants for button sides, see {@link goog.ui.Button.prototype.setCollapsed}
     * for details.
     * @enum {number}
     */
    enum ButtonSide { NONE, START, END, BOTH } 

    /**
     * Type declaration for text caption or DOM structure to be used as the content
     * of {@link goog.ui.Control}s.
     * @typedef {string|Node|Array.<Node>|NodeList}
     */
    interface ControlContent { /*any (string|Node|Node[]|NodeList)*/ }

    /**
     * CSS class name for applying the "display: inline-block" property in a
     * cross-browser way.
     * @type {string}
     */
    var INLINE_BLOCK_CLASSNAME: string;

    /**
     * Decorates the element with a suitable {@link goog.ui.Component} instance, if
     * a matching decorator is found.
     * @param {Element} element Element to decorate.
     * @return {goog.ui.Component?} New component instance, decorating the element.
     */
    function decorate(element: Element): goog.ui.Component;

    /**
     * The renderer for {@link goog.ui.DatePicker}. Renders the date picker's
     * navigation header and footer.
     * @interface
     */
    interface DatePickerRenderer {
        renderNavigationRow: any /*missing*/;
        renderFooterRow: any /*missing*/;
    }

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
    class AbstractSpellChecker extends goog.ui.Component {
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
         * @return {goog.spell.SpellCheck} The handler used for caching and lookups.
         * @override
         * @suppress {checkTypes} This method makes no sense. It overrides
         *     Component's getHandler with something different.
         * @deprecated Use #getSpellCheck instead.
         */
        getHandler(): goog.spell.SpellCheck;
    
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
        getElementProperties: any /*missing*/;
    
        /** @override */
        disposeInternal(): void;
    
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

    /**
     * Once initialized with a document, the activity monitor can be queried for
     * the current idle time.
     *
     * @param {goog.dom.DomHelper|Array.<goog.dom.DomHelper>=} opt_domHelper
     *     DomHelper which contains the document(s) to listen to.  If null, the
     *     default document is usedinstead.
     * @param {boolean=} opt_useBubble Whether to use the bubble phase to listen for
     *     events. By default listens on the capture phase so that it won't miss
     *     events that get stopPropagation/cancelBubble'd. However, this can cause
     *     problems in IE8 if the page loads multiple scripts that include the
     *     closure event handling code.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class ActivityMonitor extends goog.events.EventTarget {
        /**
         * Once initialized with a document, the activity monitor can be queried for
         * the current idle time.
         *
         * @param {goog.dom.DomHelper|Array.<goog.dom.DomHelper>=} opt_domHelper
         *     DomHelper which contains the document(s) to listen to.  If null, the
         *     default document is usedinstead.
         * @param {boolean=} opt_useBubble Whether to use the bubble phase to listen for
         *     events. By default listens on the capture phase so that it won't miss
         *     events that get stopPropagation/cancelBubble'd. However, this can cause
         *     problems in IE8 if the page loads multiple scripts that include the
         *     closure event handling code.
         *
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(opt_domHelper?: any /*goog.dom.DomHelper|goog.dom.DomHelper[]*/, opt_useBubble?: boolean);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Adds a document to those being monitored by this class.
         *
         * @param {Document} doc Document to monitor.
         */
        addDocument(doc: Document): void;
    
        /**
         * Removes a document from those being monitored by this class.
         *
         * @param {Document} doc Document to monitor.
         */
        removeDocument(doc: Document): void;
    
        /**
         * Updates the last event time to be the present time, useful for non-DOM
         * events that should update idle time.
         */
        resetTimer(): void;
    
        /**
         * Updates the idle time and fires an event if time has elapsed since
         * the last update.
         * @param {number} eventTime Time (in MS) of the event that cleared the idle
         *     timer.
         * @param {string} eventType Type of the event, used only for debugging.
         * @protected
         */
        updateIdleTime(eventTime: number, eventType: string): void;
    
        /**
         * Returns the amount of time the user has been idle.
         * @param {number=} opt_now The current time can optionally be passed in for the
         *     computation to avoid an extra Date allocation.
         * @return {number} The amount of time in ms that the user has been idle.
         */
        getIdleTime(opt_now?: number): number;
    
        /**
         * Returns the type of the last user event.
         * @return {string} event type.
         */
        getLastEventType(): string;
    
        /**
         * Returns the time of the last event
         * @return {number} last event time.
         */
        getLastEventTime(): number;
    }

    /**
     * Advanced tooltip widget with cursor tracking abilities. Works like a regular
     * tooltip but can track the cursor position and direction to determine if the
     * tooltip should be dismissed or remain open.
     *
     * @param {Element|string=} opt_el Element to display tooltip for, either
     *     element reference or string id.
     * @param {?string=} opt_str Text message to display in tooltip.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Tooltip}
     */
    class AdvancedTooltip extends goog.ui.Tooltip {
        /**
         * Advanced tooltip widget with cursor tracking abilities. Works like a regular
         * tooltip but can track the cursor position and direction to determine if the
         * tooltip should be dismissed or remain open.
         *
         * @param {Element|string=} opt_el Element to display tooltip for, either
         *     element reference or string id.
         * @param {?string=} opt_str Text message to display in tooltip.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Tooltip}
         */
        constructor(opt_el?: any /*Element|string*/, opt_str?: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets margin around the tooltip where the cursor is allowed without dismissing
         * the tooltip.
         *
         * @param {goog.math.Box=} opt_box The margin around the tooltip.
         */
        setHotSpotPadding(opt_box?: goog.math.Box): void;
    
        /**
         * @return {goog.math.Box} box The margin around the tooltip where the cursor is
         *     allowed without dismissing the tooltip.
         */
        getHotSpotPadding(): goog.math.Box;
    
        /**
         * Sets whether to track the cursor and thereby close the tooltip if it moves
         * away from the tooltip and keep it open if it moves towards it.
         *
         * @param {boolean} b Whether to track the cursor.
         */
        setCursorTracking(b: boolean): void;
    
        /**
         * @return {boolean} Whether to track the cursor and thereby close the tooltip
         *     if it moves away from the tooltip and keep it open if it moves towards
         *     it.
         */
        getCursorTracking(): boolean;
    
        /**
         * Sets delay in milliseconds before tooltips are hidden if cursor tracking is
         * enabled and the cursor is moving away from the tooltip.
         *
         * @param {number} delay The delay in milliseconds.
         */
        setCursorTrackingHideDelayMs(delay: number): void;
    
        /**
         * @return {number} The delay in milliseconds before tooltips are hidden if
         *     cursor tracking is enabled and the cursor is moving away from the
         *     tooltip.
         */
        getCursorTrackingHideDelayMs(): number;
    
        /**
         * Called after the popup is shown.
         * @protected
         * @suppress {underscore|visibility}
         * @override
         */
        onShow_(): void;
    
        /**
         * Called after the popup is hidden.
         * @protected
         * @suppress {underscore|visibility}
         * @override
         */
        onHide_(): void;
    
        /**
         * Returns true if the mouse is in the tooltip.
         * @return {boolean} True if the mouse is in the tooltip.
         */
        isMouseInTooltip(): boolean;
    
        /**
         * Checks whether the supplied coordinate is inside the tooltip, including
         * padding if any.
         * @param {goog.math.Coordinate} coord Coordinate being tested.
         * @return {boolean} Whether the coord is in the tooltip.
         * @override
         */
        isCoordinateInTooltip(coord: goog.math.Coordinate): boolean;
    
        /**
         * Called by timer from mouse out handler. Hides tooltip if cursor is still
         * outside element and tooltip.
         * @param {Element} el Anchor when hide timer was started.
         * @override
         */
        maybeHide(el: Element): void;
    
        /**
         * Handler for mouse move events.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         * @override
         */
        handleMouseMove(event: goog.events.BrowserEvent): void;
    
        /**
         * Handler for mouse over events for the tooltip element.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         * @override
         */
        handleTooltipMouseOver(event: goog.events.BrowserEvent): void;
    
        /**
         * Override hide delay with cursor tracking hide delay while tracking.
         * @return {number} Hide delay to use.
         * @override
         */
        getHideDelayMs(): number;
    
        /**
         * Forces the recalculation of the hotspot on the next mouse over event.
         * @deprecated Not ever necessary to call this function. Hot spot is calculated
         *     as neccessary.
         */
        resetHotSpot: any /*missing*/;
    }

    /**
     * Zippy widget. Expandable/collapsible container, clicking the header toggles
     * the visibility of the content.
     *
     * @param {Element|string|null} header Header element, either element
     *     reference, string id or null if no header exists.
     * @param {Element|string} content Content element, either element reference or
     *     string id.
     * @param {boolean=} opt_expanded Initial expanded/visibility state. Defaults to
     *     false.
     * @param {goog.dom.DomHelper=} opt_domHelper An optional DOM helper.
     * @constructor
     * @extends {goog.ui.Zippy}
     */
    class AnimatedZippy extends goog.ui.Zippy {
        /**
         * Zippy widget. Expandable/collapsible container, clicking the header toggles
         * the visibility of the content.
         *
         * @param {Element|string|null} header Header element, either element
         *     reference, string id or null if no header exists.
         * @param {Element|string} content Content element, either element reference or
         *     string id.
         * @param {boolean=} opt_expanded Initial expanded/visibility state. Defaults to
         *     false.
         * @param {goog.dom.DomHelper=} opt_domHelper An optional DOM helper.
         * @constructor
         * @extends {goog.ui.Zippy}
         */
        constructor(header: any /*Element|string|any (null)*/, content: any /*Element|string*/, opt_expanded?: boolean, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Duration of expand/collapse animation, in milliseconds.
         * @type {number}
         */
        animationDuration: number;
    
        /**
         * Acceleration function for expand/collapse animation.
         * @type {!Function}
         */
        animationAcceleration: Function;
    
        /**
         * @return {boolean} Whether the zippy is in the process of being expanded or
         *     collapsed.
         */
        isBusy(): boolean;
    
        /**
         * Sets expanded state.
         *
         * @param {boolean} expanded Expanded/visibility state.
         * @override
         */
        setExpanded(expanded: boolean): void;
    }

    /**
     * An implementation of a menu that can attach itself to DOM element that
     * are annotated appropriately.
     *
     * The following attributes are used by the AttachableMenu
     *
     * menu-item - Should be set on DOM elements that function as items in the
     * menu that can be selected.
     * classNameSelected - A class that will be added to the element's class names
     * when the item is selected via keyboard or mouse.
     *
     * @param {Element=} opt_element A DOM element for the popup.
     * @constructor
     * @extends {goog.ui.MenuBase}
     * @deprecated Use goog.ui.PopupMenu.
     * @final
     */
    class AttachableMenu extends goog.ui.MenuBase {
        /**
         * An implementation of a menu that can attach itself to DOM element that
         * are annotated appropriately.
         *
         * The following attributes are used by the AttachableMenu
         *
         * menu-item - Should be set on DOM elements that function as items in the
         * menu that can be selected.
         * classNameSelected - A class that will be added to the element's class names
         * when the item is selected via keyboard or mouse.
         *
         * @param {Element=} opt_element A DOM element for the popup.
         * @constructor
         * @extends {goog.ui.MenuBase}
         * @deprecated Use goog.ui.PopupMenu.
         * @final
         */
        constructor(opt_element?: Element);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Sets the class name to use for menu items
         *
         * @return {string} The class name to use for items.
         */
        getItemClassName(): string;
    
        /**
         * Sets the class name to use for menu items
         *
         * @param {string} name The class name to use for items.
         */
        setItemClassName(name: string): void;
    
        /**
         * Sets the class name to use for selected menu items
         * todo(user) - reevaluate if we can simulate pseudo classes in IE
         *
         * @return {string} The class name to use for selected items.
         */
        getSelectedItemClassName(): string;
    
        /**
         * Sets the class name to use for selected menu items
         * todo(user) - reevaluate if we can simulate pseudo classes in IE
         *
         * @param {string} name The class name to use for selected items.
         */
        setSelectedItemClassName(name: string): void;
    
        /**
         * Returns the selected item
         *
         * @return {Element} The item selected or null if no item is selected.
         * @override
         */
        getSelectedItem(): Element;
    
        /** @override */
        setSelectedItem(): void;
    
        /** @override */
        showPopupElement(): void;
    
        /**
         * Called after the menu is shown.
         * @protected
         * @suppress {underscore|visibility}
         * @override
         */
        onShow_(): void;
    
        /**
         * Returns the next or previous item. Used for up/down arrows.
         *
         * @param {boolean} prev True to go to the previous element instead of next.
         * @return {Element} The next or previous element.
         * @protected
         */
        getNextPrevItem(prev: boolean): Element;
    
        /**
         * Mouse over handler for the menu.
         * @param {goog.events.Event} e The event object.
         * @protected
         * @override
         */
        onMouseOver(e: goog.events.Event): void;
    
        /**
         * Mouse out handler for the menu.
         * @param {goog.events.Event} e The event object.
         * @protected
         * @override
         */
        onMouseOut(e: goog.events.Event): void;
    
        /**
         * Mouse down handler for the menu. Prevents default to avoid text selection.
         * @param {!goog.events.Event} e The event object.
         * @protected
         * @override
         */
        onMouseDown: any /*missing*/;
    
        /**
         * Mouse up handler for the menu.
         * @param {goog.events.Event} e The event object.
         * @protected
         * @override
         */
        onMouseUp(e: goog.events.Event): void;
    
        /**
         * Key down handler for the menu.
         * @param {goog.events.KeyEvent} e The event object.
         * @protected
         * @override
         */
        onKeyDown(e: goog.events.KeyEvent): void;
    }

    /**
     * Default implementation of BidiInput.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper  Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class BidiInput extends goog.ui.Component {
        /**
         * Default implementation of BidiInput.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper  Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Decorates the given HTML element as a BidiInput. The HTML element can be an
         * input element with type='text', a textarea element, or any contenteditable.
         * Overrides {@link goog.ui.Component#decorateInternal}.  Considered protected.
         * @param {Element} element  Element to decorate.
         * @protected
         * @override
         */
        decorateInternal(element: Element): void;
    
        /**
         * Creates the element for the text input.
         * @protected
         * @override
         */
        createDom(): void;
    
        /**
         * Returns the direction of the input element.
         * @return {?string} Return 'rtl' for right-to-left text,
         *     'ltr' for left-to-right text, or null if the value itself is not
         *     enough to determine directionality (e.g. an empty value), and the
         *     direction is inherited from a parent element (typically the body
         *     element).
         */
        getDirection(): string;
    
        /**
         * Sets the value of the underlying input field, and sets the direction
         * according to the given value.
         * @param {string} value  The Value to set in the underlying input field.
         */
        setValue(value: string): void;
    
        /**
         * Returns the value of the underlying input field.
         * @return {string} Value of the underlying input field.
         */
        getValue(): string;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * The Bubble provides a general purpose bubble implementation that can be
     * anchored to a particular element and displayed for a period of time.
     *
     * @param {string|Element} message HTML string or an element to display inside
     *     the bubble.
     * @param {Object=} opt_config The configuration
     *     for the bubble. If not specified, the default configuration will be
     *     used. {@see goog.ui.Bubble.defaultConfig}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class Bubble extends goog.ui.Component {
        /**
         * The Bubble provides a general purpose bubble implementation that can be
         * anchored to a particular element and displayed for a period of time.
         *
         * @param {string|Element} message HTML string or an element to display inside
         *     the bubble.
         * @param {Object=} opt_config The configuration
         *     for the bubble. If not specified, the default configuration will be
         *     used. {@see goog.ui.Bubble.defaultConfig}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(message: any /*string|Element*/, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        createDom(): void;
    
        /**
         * Attaches the bubble to an anchor element. Computes the positioning and
         * orientation of the bubble.
         *
         * @param {Element} anchorElement The element to which we are attaching.
         */
        attach(anchorElement: Element): void;
    
        /**
         * Sets the corner of the bubble to used in the positioning algorithm.
         *
         * @param {goog.positioning.Corner} corner The bubble corner used for
         *     positioning constants.
         */
        setPinnedCorner(corner: goog.positioning.Corner): void;
    
        /**
         * Sets the position of the bubble. Pass null for corner in AnchoredPosition
         * for corner to be computed automatically.
         *
         * @param {goog.positioning.AbstractPosition} position The position of the
         *     bubble.
         */
        setPosition(position: goog.positioning.AbstractPosition): void;
    
        /**
         * Sets the timeout after which bubble hides itself.
         *
         * @param {number} timeout Timeout of the bubble.
         */
        setTimeout(timeout: number): void;
    
        /**
         * Sets whether the bubble should be automatically hidden whenever user clicks
         * outside the bubble element.
         *
         * @param {boolean} autoHide Whether to hide if user clicks outside the bubble.
         */
        setAutoHide(autoHide: boolean): void;
    
        /**
         * Sets whether the bubble should be visible.
         *
         * @param {boolean} visible Desired visibility state.
         */
        setVisible(visible: boolean): void;
    
        /**
         * @return {boolean} Whether the bubble is visible.
         */
        isVisible(): boolean;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Returns an AnchoredPosition that will position the bubble optimally
         * given the position of the anchor element and the size of the viewport.
         *
         * @param {Element} anchorElement The element to which the bubble is attached.
         * @return {goog.ui.Popup.AnchoredPosition} The AnchoredPosition to give to
         *     {@link #setPosition}.
         */
        getComputedAnchoredPosition(anchorElement: Element): goog.ui.Popup.AnchoredPosition;
    }

    /**
     * A button control, rendered as a native browser button by default.
     *
     * @param {goog.ui.ControlContent=} opt_content Text caption or existing DOM
     *     structure to display as the button's caption (if any).
     * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
     *     decorate the button; defaults to {@link goog.ui.NativeButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Button extends goog.ui.Control {
        /**
         * A button control, rendered as a native browser button by default.
         *
         * @param {goog.ui.ControlContent=} opt_content Text caption or existing DOM
         *     structure to display as the button's caption (if any).
         * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
         *     decorate the button; defaults to {@link goog.ui.NativeButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Control}
         */
        constructor(opt_content?: goog.ui.ControlContent, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns the value associated with the button.
         * @return {*} Button value (undefined if none).
         */
        getValue(): any;
    
        /**
         * Sets the value associated with the button, and updates its DOM.
         * @param {*} value New button value.
         */
        setValue(value: any): void;
    
        /**
         * Sets the value associated with the button.  Unlike {@link #setValue},
         * doesn't update the button's DOM.  Considered protected; to be called only
         * by renderer code during element decoration.
         * @param {*} value New button value.
         * @protected
         */
        setValueInternal(value: any): void;
    
        /**
         * Returns the tooltip for the button.
         * @return {string|undefined} Tooltip text (undefined if none).
         */
        getTooltip(): any /*string|any (undefined)*/;
    
        /**
         * Sets the tooltip for the button, and updates its DOM.
         * @param {string} tooltip New tooltip text.
         */
        setTooltip(tooltip: string): void;
    
        /**
         * Sets the tooltip for the button.  Unlike {@link #setTooltip}, doesn't update
         * the button's DOM.  Considered protected; to be called only by renderer code
         * during element decoration.
         * @param {string} tooltip New tooltip text.
         * @protected
         */
        setTooltipInternal(tooltip: string): void;
    
        /**
         * Collapses the border on one or both sides of the button, allowing it to be
         * combined with the adjancent button(s), forming a single UI componenet with
         * multiple targets.
         * @param {number} sides Bitmap of one or more {@link goog.ui.ButtonSide}s for
         *     which borders should be collapsed.
         */
        setCollapsed(sides: number): void;
    
        /** @override */
        disposeInternal(): void;
    
        /** @override */
        enterDocument(): void;
    
        /**
         * Attempts to handle a keyboard event; returns true if the event was handled,
         * false otherwise.  If the button is enabled and the Enter/Space key was
         * pressed, handles the event by dispatching an {@code ACTION} event,
         * and returns true. Overrides {@link goog.ui.Control#handleKeyEventInternal}.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} Whether the key event was handled.
         * @protected
         * @override
         */
        handleKeyEventInternal(e: goog.events.KeyEvent): boolean;
    }

    /**
     * Default renderer for {@link goog.ui.Button}s.  Extends the superclass with
     * the following button-specific API methods:
     * <ul>
     *   <li>{@code getValue} - returns the button element's value
     *   <li>{@code setValue} - updates the button element to reflect its new value
     *   <li>{@code getTooltip} - returns the button element's tooltip text
     *   <li>{@code setTooltip} - updates the button element's tooltip text
     *   <li>{@code setCollapsed} - removes one or both of the button element's
     *       borders
     * </ul>
     * For alternate renderers, see {@link goog.ui.NativeButtonRenderer},
     * {@link goog.ui.CustomButtonRenderer}, and {@link goog.ui.FlatButtonRenderer}.
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class ButtonRenderer extends goog.ui.ControlRenderer {
        /**
         * Default renderer for {@link goog.ui.Button}s.  Extends the superclass with
         * the following button-specific API methods:
         * <ul>
         *   <li>{@code getValue} - returns the button element's value
         *   <li>{@code setValue} - updates the button element to reflect its new value
         *   <li>{@code getTooltip} - returns the button element's tooltip text
         *   <li>{@code setTooltip} - updates the button element's tooltip text
         *   <li>{@code setCollapsed} - removes one or both of the button element's
         *       borders
         * </ul>
         * For alternate renderers, see {@link goog.ui.NativeButtonRenderer},
         * {@link goog.ui.CustomButtonRenderer}, and {@link goog.ui.FlatButtonRenderer}.
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /**
         * Returns the ARIA role to be applied to buttons.
         * @return {goog.a11y.aria.Role|undefined} ARIA role.
         * @override
         */
        getAriaRole(): any /*goog.a11y.aria.Role|any (undefined)*/;
    
        /**
         * Updates the button's ARIA (accessibility) state if the button is being
         * treated as a checkbox. Also makes sure that attributes which aren't
         * supported by buttons aren't being added.
         * @param {Element} element Element whose ARIA state is to be updated.
         * @param {goog.ui.Component.State} state Component state being enabled or
         *     disabled.
         * @param {boolean} enable Whether the state is being enabled or disabled.
         * @protected
         * @override
         */
        updateAriaState(element: Element, state: goog.ui.Component.State, enable: boolean): void;
    
        /** @override */
        createDom(): void;
    
        /** @override */
        decorate(): void;
    
        /**
         * Takes a button's root element, and returns the value associated with it.
         * No-op in the base class.
         * @param {Element} element The button's root element.
         * @return {string|undefined} The button's value (undefined if none).
         */
        getValue: any /*missing*/;
    
        /**
         * Takes a button's root element and a value, and updates the element to reflect
         * the new value.  No-op in the base class.
         * @param {Element} element The button's root element.
         * @param {string} value New value.
         */
        setValue: any /*missing*/;
    
        /**
         * Takes a button's root element, and returns its tooltip text.
         * @param {Element} element The button's root element.
         * @return {string|undefined} The tooltip text.
         */
        getTooltip(element: Element): any /*string|any (undefined)*/;
    
        /**
         * Takes a button's root element and a tooltip string, and updates the element
         * with the new tooltip.
         * @param {Element} element The button's root element.
         * @param {string} tooltip New tooltip text.
         * @protected
         */
        setTooltip(element: Element, tooltip: string): void;
    
        /**
         * Collapses the border on one or both sides of the button, allowing it to be
         * combined with the adjacent button(s), forming a single UI componenet with
         * multiple targets.
         * @param {goog.ui.Button} button Button to update.
         * @param {number} sides Bitmap of one or more {@link goog.ui.ButtonSide}s for
         *     which borders should be collapsed.
         * @protected
         */
        setCollapsed(button: goog.ui.Button, sides: number): void;
    
        /** @override */
        getCssClass(): void;
    }

    /**
     * CharCounter widget. Counts the number of characters in a input field or a
     * text box and displays the number of additional characters that may be
     * entered before the maximum length is reached.
     *
     * @extends {goog.events.EventTarget}
     * @param {HTMLInputElement|HTMLTextAreaElement} elInput Input or text area
     *     element to count the number of characters in.
     * @param {Element} elCount HTML element to display the remaining number of
     *     characters in. You can pass in null for this if you don't want to expose
     *     the number of chars remaining.
     * @param {number} maxLength The maximum length.
     * @param {goog.ui.CharCounter.Display=} opt_displayMode Display mode for this
     *     char counter. Defaults to {@link goog.ui.CharCounter.Display.REMAINING}.
     * @constructor
     * @final
     */
    class CharCounter extends goog.events.EventTarget {
        /**
         * CharCounter widget. Counts the number of characters in a input field or a
         * text box and displays the number of additional characters that may be
         * entered before the maximum length is reached.
         *
         * @extends {goog.events.EventTarget}
         * @param {HTMLInputElement|HTMLTextAreaElement} elInput Input or text area
         *     element to count the number of characters in.
         * @param {Element} elCount HTML element to display the remaining number of
         *     characters in. You can pass in null for this if you don't want to expose
         *     the number of chars remaining.
         * @param {number} maxLength The maximum length.
         * @param {goog.ui.CharCounter.Display=} opt_displayMode Display mode for this
         *     char counter. Defaults to {@link goog.ui.CharCounter.Display.REMAINING}.
         * @constructor
         * @final
         */
        constructor(elInput: any /*HTMLInputElement|HTMLTextAreaElement*/, elCount: Element, maxLength: number, opt_displayMode?: goog.ui.CharCounter.Display);
    
        /**
         * Sets the maximum length.
         *
         * @param {number} maxLength The maximum length.
         */
        setMaxLength(maxLength: number): void;
    
        /**
         * Returns the maximum length.
         *
         * @return {number} The maximum length.
         */
        getMaxLength(): number;
    
        /**
         * Sets the display mode.
         *
         * @param {!goog.ui.CharCounter.Display} displayMode The display mode.
         */
        setDisplayMode(displayMode: goog.ui.CharCounter.Display): void;
    
        /**
         * Returns the display mode.
         *
         * @return {!goog.ui.CharCounter.Display} The display mode.
         */
        getDisplayMode(): goog.ui.CharCounter.Display;
    
        /**
         * Checks length of text in input field and updates the counter. Truncates text
         * if the maximum lengths is exceeded.
         */
        checkLength(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Character Picker Class. This widget can be used to pick any Unicode
     * character by traversing a category-subcategory structure or by inputing its
     * hex value.
     *
     * See charpicker.html demo for example usage.
     * @param {goog.i18n.CharPickerData} charPickerData Category names and charlist.
     * @param {!goog.i18n.uChar.NameFetcher} charNameFetcher Object which fetches
     *     the names of the characters that are shown in the widget. These names
     *     may be stored locally or come from an external source.
     * @param {Array.<string>=} opt_recents List of characters to be displayed in
     *     resently selected characters area.
     * @param {number=} opt_initCategory Sequence number of initial category.
     * @param {number=} opt_initSubcategory Sequence number of initial subcategory.
     * @param {number=} opt_rowCount Number of rows in the grid.
     * @param {number=} opt_columnCount Number of columns in the grid.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class CharPicker extends goog.ui.Component {
        /**
         * Character Picker Class. This widget can be used to pick any Unicode
         * character by traversing a category-subcategory structure or by inputing its
         * hex value.
         *
         * See charpicker.html demo for example usage.
         * @param {goog.i18n.CharPickerData} charPickerData Category names and charlist.
         * @param {!goog.i18n.uChar.NameFetcher} charNameFetcher Object which fetches
         *     the names of the characters that are shown in the widget. These names
         *     may be stored locally or come from an external source.
         * @param {Array.<string>=} opt_recents List of characters to be displayed in
         *     resently selected characters area.
         * @param {number=} opt_initCategory Sequence number of initial category.
         * @param {number=} opt_initSubcategory Sequence number of initial subcategory.
         * @param {number=} opt_rowCount Number of rows in the grid.
         * @param {number=} opt_columnCount Number of columns in the grid.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         * @final
         */
        constructor(charPickerData: goog.i18n.CharPickerData, charNameFetcher: goog.i18n.uChar.NameFetcher, opt_recents?: string[], opt_initCategory?: number, opt_initSubcategory?: number, opt_rowCount?: number, opt_columnCount?: number, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Gets the last selected character.
         * @return {?string} The last selected character.
         */
        getSelectedChar(): string;
    
        /**
         * Gets the list of characters user selected recently.
         * @return {Array.<string>} The recent character list.
         */
        getRecentChars(): string[];
    
        /** @override */
        createDom(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /** @override */
        decorateInternal(): void;
    
        /** @override */
        enterDocument(): void;
    
        /**
         * Gets the user inputed unicode character.
         * @return {string} Unicode character inputed by user.
         */
        getInputChar(): string;
    }

    /**
     * 3-state checkbox widget. Fires CHECK or UNCHECK events before toggled and
     * CHANGE event after toggled by user.
     * The checkbox can also be enabled/disabled and get focused and highlighted.
     *
     * @param {goog.ui.Checkbox.State=} opt_checked Checked state to set.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @param {goog.ui.CheckboxRenderer=} opt_renderer Renderer used to render or
     *     decorate the checkbox; defaults to {@link goog.ui.CheckboxRenderer}.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Checkbox extends goog.ui.Control {
        /**
         * 3-state checkbox widget. Fires CHECK or UNCHECK events before toggled and
         * CHANGE event after toggled by user.
         * The checkbox can also be enabled/disabled and get focused and highlighted.
         *
         * @param {goog.ui.Checkbox.State=} opt_checked Checked state to set.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @param {goog.ui.CheckboxRenderer=} opt_renderer Renderer used to render or
         *     decorate the checkbox; defaults to {@link goog.ui.CheckboxRenderer}.
         * @constructor
         * @extends {goog.ui.Control}
         */
        constructor(opt_checked?: goog.ui.Checkbox.State, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.CheckboxRenderer);
    
        /**
         * @return {goog.ui.Checkbox.State} Checked state of the checkbox.
         */
        getChecked(): goog.ui.Checkbox.State;
    
        /**
         * @return {boolean} Whether the checkbox is checked.
         * @override
         */
        isChecked(): boolean;
    
        /**
         * @return {boolean} Whether the checkbox is not checked.
         */
        isUnchecked(): boolean;
    
        /**
         * @return {boolean} Whether the checkbox is in partially checked state.
         */
        isUndetermined(): boolean;
    
        /**
         * Sets the checked state of the checkbox.
         * @param {?boolean} checked The checked state to set.
         * @override
         */
        setChecked(checked: boolean): void;
    
        /**
         * Sets the checked state for the checkbox.  Unlike {@link #setChecked},
         * doesn't update the checkbox's DOM.  Considered protected; to be called
         * only by renderer code during element decoration.
         * @param {goog.ui.Checkbox.State} checked New checkbox state.
         */
        setCheckedInternal(checked: goog.ui.Checkbox.State): void;
    
        /**
         * Binds an HTML element to the checkbox which if clicked toggles the checkbox.
         * Behaves the same way as the 'label' HTML tag. The label element has to be the
         * direct or non-direct ancestor of the checkbox element because it will get the
         * focus when keyboard support is implemented.
         *
         * @param {Element} label The label control to set. If null, only the checkbox
         *     reacts to clicks.
         */
        setLabel(label: Element): void;
    
        /**
         * Toggles the checkbox. State transitions:
         * <ul>
         *   <li>unchecked -> checked
         *   <li>undetermined -> checked
         *   <li>checked -> unchecked
         * </ul>
         */
        toggle(): void;
    
        /** @override */
        enterDocument(): void;
    
        /**
         * Fix for tabindex not being updated so that disabled checkbox is not
         * focusable. In particular this fails in Chrome.
         * Note: in general tabIndex=-1 will prevent from keyboard focus but enables
         * mouse focus, however in this case the control class prevents mouse focus.
         * @override
         */
        setEnabled(): void;
    
        /** @override */
        handleKeyEventInternal(): void;
    }

    /**
     * Class representing a checkbox menu item.  This is just a convenience class
     * that extends {@link goog.ui.MenuItem} by making it checkable.
     *
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {*=} opt_model Data/model associated with the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @constructor
     * @extends {goog.ui.MenuItem}
     */
    class CheckBoxMenuItem extends goog.ui.MenuItem {
        /**
         * Class representing a checkbox menu item.  This is just a convenience class
         * that extends {@link goog.ui.MenuItem} by making it checkable.
         *
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to
         *     display as the content of the item (use to add icons or styling to
         *     menus).
         * @param {*=} opt_model Data/model associated with the menu item.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
         *     document interactions.
         * @constructor
         * @extends {goog.ui.MenuItem}
         */
        constructor(content: goog.ui.ControlContent, opt_model?: any, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * Default renderer for {@link goog.ui.Checkbox}s.  Extends the superclass
     * to support checkbox states:
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class CheckboxRenderer extends goog.ui.ControlRenderer {
        /**
         * Default renderer for {@link goog.ui.Checkbox}s.  Extends the superclass
         * to support checkbox states:
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /** @override */
        createDom(): void;
    
        /** @override */
        decorate(): void;
    
        /**
         * Returns the ARIA role to be applied to checkboxes.
         * @return {goog.a11y.aria.Role} ARIA role.
         * @override
         */
        getAriaRole(): goog.a11y.aria.Role;
    
        /**
         * Updates the appearance of the control in response to a checkbox state
         * change.
         * @param {Element} element Checkbox element.
         * @param {goog.ui.Checkbox.State} state Updated checkbox state.
         */
        setCheckboxState(element: Element, state: goog.ui.Checkbox.State): void;
    
        /** @override */
        getCssClass(): void;
    
        /**
         * Takes a single {@link goog.ui.Checkbox.State}, and returns the
         * corresponding CSS class name.
         * @param {goog.ui.Checkbox.State} state Checkbox state.
         * @return {string} CSS class representing the given state.
         * @protected
         */
        getClassForCheckboxState(state: goog.ui.Checkbox.State): string;
    }

    /**
     * A color button control.  Identical to {@link goog.ui.Button}, except it
     * defaults its renderer to {@link goog.ui.ColorButtonRenderer}.
     * This button displays a particular color and is clickable.
     * It is primarily useful with {@link goog.ui.ColorSplitBehavior} to cache the
     * last selected color.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *    structure to display as the button's caption.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
     *    render or decorate the button; defaults to
     *    {@link goog.ui.ColorButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *    document interaction.
     * @constructor
     * @extends {goog.ui.Button}
     * @final
     */
    class ColorButton extends goog.ui.Button {
        /**
         * A color button control.  Identical to {@link goog.ui.Button}, except it
         * defaults its renderer to {@link goog.ui.ColorButtonRenderer}.
         * This button displays a particular color and is clickable.
         * It is primarily useful with {@link goog.ui.ColorSplitBehavior} to cache the
         * last selected color.
         *
         * @param {goog.ui.ControlContent} content Text caption or existing DOM
         *    structure to display as the button's caption.
         * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
         *    render or decorate the button; defaults to
         *    {@link goog.ui.ColorButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *    document interaction.
         * @constructor
         * @extends {goog.ui.Button}
         * @final
         */
        constructor(content: goog.ui.ControlContent, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * Renderer for {@link goog.ui.ColorButton}s.
     * Uses {@link goog.ui.ColorMenuButton}s but disables the dropdown.
     *
     * @constructor
     * @extends {goog.ui.ColorMenuButtonRenderer}
     * @final
     */
    class ColorButtonRenderer extends goog.ui.ColorMenuButtonRenderer {
        /**
         * Renderer for {@link goog.ui.ColorButton}s.
         * Uses {@link goog.ui.ColorMenuButton}s but disables the dropdown.
         *
         * @constructor
         * @extends {goog.ui.ColorMenuButtonRenderer}
         * @final
         */
        constructor();
    
        /** @override */
        createCaption(): void;
    
        /** @override */
        initializeDom(): void;
    }

    /**
     * A color menu button control.  Extends {@link goog.ui.MenuButton} by adding
     * an API for getting and setting the currently selected color from a menu of
     * color palettes.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *     structure to display as the button's caption.
     * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked;
     *     should contain at least one {@link goog.ui.ColorPalette} if present.
     * @param {goog.ui.MenuButtonRenderer=} opt_renderer Button renderer;
     *     defaults to {@link goog.ui.ColorMenuButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.MenuButton}
     */
    class ColorMenuButton extends goog.ui.MenuButton {
        /**
         * A color menu button control.  Extends {@link goog.ui.MenuButton} by adding
         * an API for getting and setting the currently selected color from a menu of
         * color palettes.
         *
         * @param {goog.ui.ControlContent} content Text caption or existing DOM
         *     structure to display as the button's caption.
         * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked;
         *     should contain at least one {@link goog.ui.ColorPalette} if present.
         * @param {goog.ui.MenuButtonRenderer=} opt_renderer Button renderer;
         *     defaults to {@link goog.ui.ColorMenuButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.MenuButton}
         */
        constructor(content: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.MenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns the currently selected color (null if none).
         * @return {?string} The selected color.
         */
        getSelectedColor(): string;
    
        /**
         * Sets the selected color, or clears the selected color if the argument is
         * null or not any of the available color choices.
         * @param {?string} color New color.
         */
        setSelectedColor(color: string): void;
    
        /**
         * Sets the value associated with the color menu button.  Overrides
         * {@link goog.ui.Button#setValue} by interpreting the value as a color
         * spec string.
         * @param {*} value New button value; should be a color spec string.
         * @override
         */
        setValue(value: any): void;
    
        /**
         * Handles {@link goog.ui.Component.EventType.ACTION} events dispatched by
         * the menu item clicked by the user.  Updates the button, calls the superclass
         * implementation to hide the menu, stops the propagation of the event, and
         * dispatches an ACTION event on behalf of the button itself.  Overrides
         * {@link goog.ui.MenuButton#handleMenuAction}.
         * @param {goog.events.Event} e Action event to handle.
         * @override
         */
        handleMenuAction(e: goog.events.Event): void;
    
        /**
         * Opens or closes the menu.  Overrides {@link goog.ui.MenuButton#setOpen} by
         * generating a default color menu on the fly if needed.
         * @param {boolean} open Whether to open or close the menu.
         * @param {goog.events.Event=} opt_e Mousedown event that caused the menu to
         *     be opened.
         * @override
         */
        setOpen(open: boolean, opt_e?: goog.events.Event): void;
    }

    /**
     * Renderer for {@link goog.ui.ColorMenuButton}s.
     * @constructor
     * @extends {goog.ui.MenuButtonRenderer}
     */
    class ColorMenuButtonRenderer extends goog.ui.MenuButtonRenderer {
        /**
         * Renderer for {@link goog.ui.ColorMenuButton}s.
         * @constructor
         * @extends {goog.ui.MenuButtonRenderer}
         */
        constructor();
    
        /**
         * Overrides the superclass implementation by wrapping the caption text or DOM
         * structure in a color indicator element.  Creates the following DOM structure:
         *   <div class="goog-inline-block goog-menu-button-caption">
         *     <div class="goog-color-menu-button-indicator">
         *       Contents...
         *     </div>
         *   </div>
         * The 'goog-color-menu-button-indicator' style should be defined to have a
         * bottom border of nonzero width and a default color that blends into its
         * background.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Caption element.
         * @override
         */
        createCaption(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
        /**
         * Takes a color menu button control's root element and a value object
         * (which is assumed to be a color), and updates the button's DOM to reflect
         * the new color.  Overrides {@link goog.ui.ButtonRenderer#setValue}.
         * @param {Element} element The button control's root element (if rendered).
         * @param {*} value New value; assumed to be a color spec string.
         * @override
         */
        setValue(element: Element, value: any): void;
    
        /**
         * Initializes the button's DOM when it enters the document.  Overrides the
         * superclass implementation by making sure the button's color indicator is
         * initialized.
         * @param {goog.ui.Control} button goog.ui.ColorMenuButton whose DOM is to be
         *     initialized as it enters the document.
         * @override
         */
        initializeDom(button: goog.ui.Control): void;
    }

    /**
     * A color palette is a grid of color swatches that the user can highlight or
     * select via the keyboard or the mouse.  The selection state of the palette is
     * controlled by a selection model.  When the user makes a selection, the
     * component fires an ACTION event.  Event listeners may retrieve the selected
     * color using the {@link #getSelectedColor} method.
     *
     * @param {Array.<string>=} opt_colors Array of colors in any valid CSS color
     *     format.
     * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
     *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Palette}
     */
    class ColorPalette extends goog.ui.Palette {
        /**
         * A color palette is a grid of color swatches that the user can highlight or
         * select via the keyboard or the mouse.  The selection state of the palette is
         * controlled by a selection model.  When the user makes a selection, the
         * component fires an ACTION event.  Event listeners may retrieve the selected
         * color using the {@link #getSelectedColor} method.
         *
         * @param {Array.<string>=} opt_colors Array of colors in any valid CSS color
         *     format.
         * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
         *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Palette}
         */
        constructor(opt_colors?: string[], opt_renderer?: goog.ui.PaletteRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns the array of colors represented in the color palette.
         * @return {Array.<string>} Array of colors.
         */
        getColors(): string[];
    
        /**
         * Sets the colors that are contained in the palette.
         * @param {Array.<string>} colors Array of colors in any valid CSS color format.
         * @param {Array.<string>=} opt_labels The array of labels to be used as
         *        tooltips. When not provided, the color value will be used.
         */
        setColors(colors: string[], opt_labels?: string[]): void;
    
        /**
         * @return {?string} The current selected color in hex, or null.
         */
        getSelectedColor(): string;
    
        /**
         * Sets the selected color.  Clears the selection if the argument is null or
         * can't be parsed as a color.
         * @param {?string} color The color to set as selected; null clears the
         *     selection.
         */
        setSelectedColor(color: string): void;
    
        /**
         * @return {Array.<Node>} An array of DOM nodes for each color.
         * @protected
         */
        createColorNodes(): Node[];
    }

    /**
     * Create a new, empty color picker.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.ColorPalette=} opt_colorPalette Optional color palette to
     *     use for this color picker.
     * @extends {goog.ui.Component}
     * @constructor
     * @final
     */
    class ColorPicker extends goog.ui.Component {
        /**
         * Create a new, empty color picker.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {goog.ui.ColorPalette=} opt_colorPalette Optional color palette to
         *     use for this color picker.
         * @extends {goog.ui.Component}
         * @constructor
         * @final
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_colorPalette?: goog.ui.ColorPalette);
    
        /**
         * Gets the array of colors displayed by the color picker.
         * Modifying this array will lead to unexpected behavior.
         * @return {Array.<string>?} The colors displayed by this widget.
         */
        getColors(): string[];
    
        /**
         * Sets the array of colors to be displayed by the color picker.
         * @param {Array.<string>} colors The array of colors to be added.
         */
        setColors(colors: string[]): void;
    
        /**
         * Sets the array of colors to be displayed by the color picker.
         * @param {Array.<string>} colors The array of colors to be added.
         * @deprecated Use setColors.
         */
        addColors(colors: string[]): void;
    
        /**
         * Sets the size of the palette.  Will throw an error after the picker has been
         * rendered.
         * @param {goog.math.Size|number} size The size of the grid.
         */
        setSize(size: any /*goog.math.Size|number*/): void;
    
        /**
         * Gets the number of columns displayed.
         * @return {goog.math.Size?} The size of the grid.
         */
        getSize(): goog.math.Size;
    
        /**
         * Sets the number of columns.  Will throw an error after the picker has been
         * rendered.
         * @param {number} n The number of columns.
         * @deprecated Use setSize.
         */
        setColumnCount(n: number): void;
    
        /**
         * @return {number} The index of the color selected.
         */
        getSelectedIndex(): number;
    
        /**
         * Sets which color is selected. A value that is out-of-range means that no
         * color is selected.
         * @param {number} ind The index in this.colors_ of the selected color.
         */
        setSelectedIndex(ind: number): void;
    
        /**
         * Gets the color that is currently selected in this color picker.
         * @return {?string} The hex string of the color selected, or null if no
         *     color is selected.
         */
        getSelectedColor(): string;
    
        /**
         * Sets which color is selected.  Noop if the color palette hasn't been created
         * yet.
         * @param {string} color The selected color.
         */
        setSelectedColor(color: string): void;
    
        /**
         * Returns true if the component is focusable, false otherwise.  The default
         * is true.  Focusable components always have a tab index and allocate a key
         * handler to handle keyboard events while focused.
         * @return {boolean} True iff the component is focusable.
         */
        isFocusable(): boolean;
    
        /**
         * Sets whether the component is focusable.  The default is true.
         * Focusable components always have a tab index and allocate a key handler to
         * handle keyboard events while focused.
         * @param {boolean} focusable True iff the component is focusable.
         */
        setFocusable(focusable: boolean): void;
    
        /**
         * ColorPickers cannot be used to decorate pre-existing html, since the
         * structure they build is fairly complicated.
         * @param {Element} element Element to decorate.
         * @return {boolean} Returns always false.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Renders the color picker inside the provided element. This will override the
         * current content of the element.
         * @override
         */
        enterDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Sets the focus to the color picker's palette.
         */
        focus(): void;
    }

    /**
     * Constructs a ColorSplitBehavior for combining a color button and a menu.
     * To use this, provide a goog.ui.ColorButton which will be attached with
     * a goog.ui.ColorMenuButton (with no caption).
     * Whenever a color is selected from the ColorMenuButton, it will be placed in
     * the ColorButton and the user can apply it over and over (by clicking the
     * ColorButton).
     * Primary use case - setting the color of text/background in a text editor.
     *
     * @param {!goog.ui.Button} colorButton A button to interact with a color menu
     *     button (preferably a goog.ui.ColorButton).
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @extends {goog.ui.SplitBehavior}
     * @constructor
     * @final
     */
    class ColorSplitBehavior extends goog.ui.SplitBehavior {
        /**
         * Constructs a ColorSplitBehavior for combining a color button and a menu.
         * To use this, provide a goog.ui.ColorButton which will be attached with
         * a goog.ui.ColorMenuButton (with no caption).
         * Whenever a color is selected from the ColorMenuButton, it will be placed in
         * the ColorButton and the user can apply it over and over (by clicking the
         * ColorButton).
         * Primary use case - setting the color of text/background in a text editor.
         *
         * @param {!goog.ui.Button} colorButton A button to interact with a color menu
         *     button (preferably a goog.ui.ColorButton).
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @extends {goog.ui.SplitBehavior}
         * @constructor
         * @final
         */
        constructor(colorButton: goog.ui.Button, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * A ComboBox control.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.Menu=} opt_menu Optional menu component.
     *     This menu is disposed of by this control.
     * @param {goog.ui.LabelInput=} opt_labelInput Optional label input.
     *     This label input is disposed of by this control.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class ComboBox extends goog.ui.Component {
        /**
         * A ComboBox control.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {goog.ui.Menu=} opt_menu Optional menu component.
         *     This menu is disposed of by this control.
         * @param {goog.ui.LabelInput=} opt_labelInput Optional label input.
         *     This label input is disposed of by this control.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_menu?: goog.ui.Menu, opt_labelInput?: goog.ui.LabelInput);
    
        /**
         * Create the DOM objects needed for the combo box.  A span and text input.
         * @override
         */
        createDom(): void;
    
        /**
         * Enables/Disables the combo box.
         * @param {boolean} enabled Whether to enable (true) or disable (false) the
         *     combo box.
         */
        setEnabled(enabled: boolean): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /**
         * Combo box currently can't decorate elements.
         * @return {boolean} The value false.
         * @override
         */
        canDecorate(): boolean;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Dismisses the menu and resets the value of the edit field.
         */
        dismiss(): void;
    
        /**
         * Adds a new menu item at the end of the menu.
         * @param {goog.ui.MenuItem} item Menu item to add to the menu.
         */
        addItem(item: goog.ui.MenuItem): void;
    
        /**
         * Adds a new menu item at a specific index in the menu.
         * @param {goog.ui.MenuItem} item Menu item to add to the menu.
         * @param {number} n Index at which to insert the menu item.
         */
        addItemAt(item: goog.ui.MenuItem, n: number): void;
    
        /**
         * Removes an item from the menu and disposes it.
         * @param {goog.ui.MenuItem} item The menu item to remove.
         */
        removeItem(item: goog.ui.MenuItem): void;
    
        /**
         * Remove all of the items from the ComboBox menu
         */
        removeAllItems(): void;
    
        /**
         * Removes a menu item at a given index in the menu.
         * @param {number} n Index of item.
         */
        removeItemAt(n: number): void;
    
        /**
         * Returns a reference to the menu item at a given index.
         * @param {number} n Index of menu item.
         * @return {goog.ui.MenuItem?} Reference to the menu item.
         */
        getItemAt(n: number): goog.ui.MenuItem;
    
        /**
         * Returns the number of items in the list, including non-visible items,
         * such as separators.
         * @return {number} Number of items in the menu for this combobox.
         */
        getItemCount(): number;
    
        /**
         * @return {goog.ui.Menu} The menu that pops up.
         */
        getMenu(): goog.ui.Menu;
    
        /**
         * @return {Element} The input element.
         */
        getInputElement(): Element;
    
        /**
         * @return {goog.ui.LabelInput} A LabelInput control that manages the
         *     focus/blur state of the input box.
         */
        getLabelInput(): goog.ui.LabelInput;
    
        /**
         * Sets the match function to be used when filtering the combo box menu.
         * @param {Function} matchFunction The match function to be used when filtering
         *     the combo box menu.
         */
        setMatchFunction(matchFunction: Function): void;
    
        /**
         * @return {Function} The match function for the combox box.
         */
        getMatchFunction(): Function;
    
        /**
         * Sets the default text for the combo box.
         * @param {string} text The default text for the combo box.
         */
        setDefaultText(text: string): void;
    
        /**
         * @return {string} text The default text for the combox box.
         */
        getDefaultText(): string;
    
        /**
         * Sets the field name for the combo box.
         * @param {string} fieldName The field name for the combo box.
         */
        setFieldName(fieldName: string): void;
    
        /**
         * @return {string} The field name for the combo box.
         */
        getFieldName(): string;
    
        /**
         * Set to true if a unicode inverted triangle should be displayed in the
         * dropdown button.
         * This option defaults to false for backwards compatibility.
         * @param {boolean} useDropdownArrow True to use the dropdown arrow.
         */
        setUseDropdownArrow(useDropdownArrow: boolean): void;
    
        /**
         * Sets the current value of the combo box.
         * @param {string} value The new value.
         */
        setValue(value: string): void;
    
        /**
         * @return {string} The current value of the combo box.
         */
        getValue(): string;
    
        /**
         * @return {string} HTML escaped token.
         */
        getToken(): string;
    
        /**
         * Positions the menu.
         * @protected
         */
        positionMenu(): void;
    
        /**
         * Handles keyboard events from the input box.  Returns true if the combo box
         * was able to handle the event, false otherwise.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} Whether the event was handled by the combo box.
         * @protected
         * @suppress {visibility} performActionInternal
         */
        handleKeyEvent(e: goog.events.KeyEvent): boolean;
    }

    /**
     * Class for combo box items.
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {Object=} opt_data Identifying data for the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional dom helper used for dom
     *     interactions.
     * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
     * @constructor
     * @extends {goog.ui.MenuItem}
     */
    class ComboBoxItem extends goog.ui.MenuItem {
        /**
         * Class for combo box items.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to
         *     display as the content of the item (use to add icons or styling to
         *     menus).
         * @param {Object=} opt_data Identifying data for the menu item.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional dom helper used for dom
         *     interactions.
         * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
         * @constructor
         * @extends {goog.ui.MenuItem}
         */
        constructor(content: goog.ui.ControlContent, opt_data?: Object, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer);
    
        /**
         * Sets the menu item to be sticky or not sticky.
         * @param {boolean} sticky Whether the menu item should be sticky.
         */
        setSticky(sticky: boolean): void;
    
        /**
         * @return {boolean} Whether the menu item is sticky.
         */
        isSticky(): boolean;
    
        /**
         * Sets the format for a menu item based on a token, bolding the token.
         * @param {string} token The token.
         */
        setFormatFromToken(token: string): void;
    }

    /**
     * Default implementation of UI component.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class Component extends goog.events.EventTarget {
        /**
         * Default implementation of UI component.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * DomHelper used to interact with the document, allowing components to be
         * created in a different window.
         * @type {!goog.dom.DomHelper}
         * @protected
         * @suppress {underscore|visibility}
         */
        dom_: goog.dom.DomHelper;
    
        /**
         * Gets the unique ID for the instance of this component.  If the instance
         * doesn't already have an ID, generates one on the fly.
         * @return {string} Unique component ID.
         */
        getId(): string;
    
        /**
         * Assigns an ID to this component instance.  It is the caller's responsibility
         * to guarantee that the ID is unique.  If the component is a child of a parent
         * component, then the parent component's child index is updated to reflect the
         * new ID; this may throw an error if the parent already has a child with an ID
         * that conflicts with the new ID.
         * @param {string} id Unique component ID.
         */
        setId(id: string): void;
    
        /**
         * Gets the component's element.
         * @return {Element} The element for the component.
         */
        getElement(): Element;
    
        /**
         * Gets the component's element. This differs from getElement in that
         * it assumes that the element exists (i.e. the component has been
         * rendered/decorated) and will cause an assertion error otherwise (if
         * assertion is enabled).
         * @return {!Element} The element for the component.
         */
        getElementStrict(): Element;
    
        /**
         * Sets the component's root element to the given element.  Considered
         * protected and final.
         *
         * This should generally only be called during createDom. Setting the element
         * does not actually change which element is rendered, only the element that is
         * associated with this UI component.
         *
         * This should only be used by subclasses and its associated renderers.
         *
         * @param {Element} element Root element for the component.
         */
        setElementInternal(element: Element): void;
    
        /**
         * Returns an array of all the elements in this component's DOM with the
         * provided className.
         * @param {string} className The name of the class to look for.
         * @return {!goog.array.ArrayLike} The items found with the class name provided.
         */
        getElementsByClass(className: string): goog.array.ArrayLike;
    
        /**
         * Returns the first element in this component's DOM with the provided
         * className.
         * @param {string} className The name of the class to look for.
         * @return {Element} The first item with the class name provided.
         */
        getElementByClass(className: string): Element;
    
        /**
         * Similar to {@code getElementByClass} except that it expects the
         * element to be present in the dom thus returning a required value. Otherwise,
         * will assert.
         * @param {string} className The name of the class to look for.
         * @return {!Element} The first item with the class name provided.
         */
        getRequiredElementByClass(className: string): Element;
    
        /**
         * Returns the event handler for this component, lazily created the first time
         * this method is called.
         * @return {!goog.events.EventHandler.<T>} Event handler for this component.
         * @protected
         * @this T
         * @template T
         */
        getHandler(): goog.events.EventHandler<T>;
    
        /**
         * Sets the parent of this component to use for event bubbling.  Throws an error
         * if the component already has a parent or if an attempt is made to add a
         * component to itself as a child.  Callers must use {@code removeChild}
         * or {@code removeChildAt} to remove components from their containers before
         * calling this method.
         * @see goog.ui.Component#removeChild
         * @see goog.ui.Component#removeChildAt
         * @param {goog.ui.Component} parent The parent component.
         */
        setParent(parent: goog.ui.Component): void;
    
        /**
         * Returns the component's parent, if any.
         * @return {goog.ui.Component?} The parent component.
         */
        getParent(): goog.ui.Component;
    
        /**
         * Overrides {@link goog.events.EventTarget#setParentEventTarget} to throw an
         * error if the parent component is set, and the argument is not the parent.
         * @override
         */
        setParentEventTarget(): void;
    
        /**
         * Returns the dom helper that is being used on this component.
         * @return {!goog.dom.DomHelper} The dom helper used on this component.
         */
        getDomHelper(): goog.dom.DomHelper;
    
        /**
         * Determines whether the component has been added to the document.
         * @return {boolean} TRUE if rendered. Otherwise, FALSE.
         */
        isInDocument(): boolean;
    
        /**
         * Creates the initial DOM representation for the component.  The default
         * implementation is to set this.element_ = div.
         */
        createDom(): void;
    
        /**
         * Renders the component.  If a parent element is supplied, the component's
         * element will be appended to it.  If there is no optional parent element and
         * the element doesn't have a parentNode then it will be appended to the
         * document body.
         *
         * If this component has a parent component, and the parent component is
         * not in the document already, then this will not call {@code enterDocument}
         * on this component.
         *
         * Throws an Error if the component is already rendered.
         *
         * @param {Element=} opt_parentElement Optional parent element to render the
         *    component into.
         */
        render(opt_parentElement?: Element): void;
    
        /**
         * Renders the component before another element. The other element should be in
         * the document already.
         *
         * Throws an Error if the component is already rendered.
         *
         * @param {Node} sibling Node to render the component before.
         */
        renderBefore(sibling: Node): void;
    
        /**
         * Decorates the element for the UI component. If the element is in the
         * document, the enterDocument method will be called.
         *
         * If goog.ui.Component.ALLOW_DETACHED_DECORATION is false, the caller must
         * pass an element that is in the document.
         *
         * @param {Element} element Element to decorate.
         */
        decorate(element: Element): void;
    
        /**
         * Determines if a given element can be decorated by this type of component.
         * This method should be overridden by inheriting objects.
         * @param {Element} element Element to decorate.
         * @return {boolean} True if the element can be decorated, false otherwise.
         */
        canDecorate(element: Element): boolean;
    
        /**
         * @return {boolean} Whether the component was decorated.
         */
        wasDecorated(): boolean;
    
        /**
         * Actually decorates the element. Should be overridden by inheriting objects.
         * This method can assume there are checks to ensure the component has not
         * already been rendered have occurred and that enter document will be called
         * afterwards. This method is considered protected.
         * @param {Element} element Element to decorate.
         * @protected
         */
        decorateInternal(element: Element): void;
    
        /**
         * Called when the component's element is known to be in the document. Anything
         * using document.getElementById etc. should be done at this stage.
         *
         * If the component contains child components, this call is propagated to its
         * children.
         */
        enterDocument(): void;
    
        /**
         * Called by dispose to clean up the elements and listeners created by a
         * component, or by a parent component/application who has removed the
         * component from the document but wants to reuse it later.
         *
         * If the component contains child components, this call is propagated to its
         * children.
         *
         * It should be possible for the component to be rendered again once this method
         * has been called.
         */
        exitDocument(): void;
    
        /**
         * Disposes of the component.  Calls {@code exitDocument}, which is expected to
         * remove event handlers and clean up the component.  Propagates the call to
         * the component's children, if any. Removes the component's DOM from the
         * document unless it was decorated.
         * @override
         * @protected
         */
        disposeInternal(): void;
    
        /**
         * Helper function for subclasses that gets a unique id for a given fragment,
         * this can be used by components to generate unique string ids for DOM
         * elements.
         * @param {string} idFragment A partial id.
         * @return {string} Unique element id.
         */
        makeId(idFragment: string): string;
    
        /**
         * Makes a collection of ids.  This is a convenience method for makeId.  The
         * object's values are the id fragments and the new values are the generated
         * ids.  The key will remain the same.
         * @param {Object} object The object that will be used to create the ids.
         * @return {Object} An object of id keys to generated ids.
         */
        makeIds(object: Object): Object;
    
        /**
         * Returns the model associated with the UI component.
         * @return {*} The model.
         */
        getModel(): any;
    
        /**
         * Sets the model associated with the UI component.
         * @param {*} obj The model.
         */
        setModel(obj: any): void;
    
        /**
         * Helper function for returning the fragment portion of an id generated using
         * makeId().
         * @param {string} id Id generated with makeId().
         * @return {string} Fragment.
         */
        getFragmentFromId(id: string): string;
    
        /**
         * Helper function for returning an element in the document with a unique id
         * generated using makeId().
         * @param {string} idFragment The partial id.
         * @return {Element} The element with the unique id, or null if it cannot be
         *     found.
         */
        getElementByFragment(idFragment: string): Element;
    
        /**
         * Adds the specified component as the last child of this component.  See
         * {@link goog.ui.Component#addChildAt} for detailed semantics.
         *
         * @see goog.ui.Component#addChildAt
         * @param {goog.ui.Component} child The new child component.
         * @param {boolean=} opt_render If true, the child component will be rendered
         *    into the parent.
         */
        addChild(child: goog.ui.Component, opt_render?: boolean): void;
    
        /**
         * Adds the specified component as a child of this component at the given
         * 0-based index.
         *
         * Both {@code addChild} and {@code addChildAt} assume the following contract
         * between parent and child components:
         *  <ul>
         *    <li>the child component's element must be a descendant of the parent
         *        component's element, and
         *    <li>the DOM state of the child component must be consistent with the DOM
         *        state of the parent component (see {@code isInDocument}) in the
         *        steady state -- the exception is to addChildAt(child, i, false) and
         *        then immediately decorate/render the child.
         *  </ul>
         *
         * In particular, {@code parent.addChild(child)} will throw an error if the
         * child component is already in the document, but the parent isn't.
         *
         * Clients of this API may call {@code addChild} and {@code addChildAt} with
         * {@code opt_render} set to true.  If {@code opt_render} is true, calling these
         * methods will automatically render the child component's element into the
         * parent component's element. If the parent does not yet have an element, then
         * {@code createDom} will automatically be invoked on the parent before
         * rendering the child.
         *
         * Invoking {@code parent.addChild(child, true)} will throw an error if the
         * child component is already in the document, regardless of the parent's DOM
         * state.
         *
         * If {@code opt_render} is true and the parent component is not already
         * in the document, {@code enterDocument} will not be called on this component
         * at this point.
         *
         * Finally, this method also throws an error if the new child already has a
         * different parent, or the given index is out of bounds.
         *
         * @see goog.ui.Component#addChild
         * @param {goog.ui.Component} child The new child component.
         * @param {number} index 0-based index at which the new child component is to be
         *    added; must be between 0 and the current child count (inclusive).
         * @param {boolean=} opt_render If true, the child component will be rendered
         *    into the parent.
         * @return {void} Nada.
         */
        addChildAt(child: goog.ui.Component, index: number, opt_render?: boolean): void;
    
        /**
         * Returns the DOM element into which child components are to be rendered,
         * or null if the component itself hasn't been rendered yet.  This default
         * implementation returns the component's root element.  Subclasses with
         * complex DOM structures must override this method.
         * @return {Element} Element to contain child elements (null if none).
         */
        getContentElement(): Element;
    
        /**
         * Returns true if the component is rendered right-to-left, false otherwise.
         * The first time this function is invoked, the right-to-left rendering property
         * is set if it has not been already.
         * @return {boolean} Whether the control is rendered right-to-left.
         */
        isRightToLeft(): boolean;
    
        /**
         * Set is right-to-left. This function should be used if the component needs
         * to know the rendering direction during dom creation (i.e. before
         * {@link #enterDocument} is called and is right-to-left is set).
         * @param {boolean} rightToLeft Whether the component is rendered
         *     right-to-left.
         */
        setRightToLeft(rightToLeft: boolean): void;
    
        /**
         * Returns true if the component has children.
         * @return {boolean} True if the component has children.
         */
        hasChildren(): boolean;
    
        /**
         * Returns the number of children of this component.
         * @return {number} The number of children.
         */
        getChildCount(): number;
    
        /**
         * Returns an array containing the IDs of the children of this component, or an
         * empty array if the component has no children.
         * @return {Array.<string>} Child component IDs.
         */
        getChildIds(): string[];
    
        /**
         * Returns the child with the given ID, or null if no such child exists.
         * @param {string} id Child component ID.
         * @return {goog.ui.Component?} The child with the given ID; null if none.
         */
        getChild(id: string): goog.ui.Component;
    
        /**
         * Returns the child at the given index, or null if the index is out of bounds.
         * @param {number} index 0-based index.
         * @return {goog.ui.Component?} The child at the given index; null if none.
         */
        getChildAt(index: number): goog.ui.Component;
    
        /**
         * Calls the given function on each of this component's children in order.  If
         * {@code opt_obj} is provided, it will be used as the 'this' object in the
         * function when called.  The function should take two arguments:  the child
         * component and its 0-based index.  The return value is ignored.
         * @param {function(this:T,?,number):?} f The function to call for every
         * child component; should take 2 arguments (the child and its index).
         * @param {T=} opt_obj Used as the 'this' object in f when called.
         * @template T
         */
        forEachChild(f: (_0: any, _1: number) => any, opt_obj?: T): void;
    
        /**
         * Returns the 0-based index of the given child component, or -1 if no such
         * child is found.
         * @param {goog.ui.Component?} child The child component.
         * @return {number} 0-based index of the child component; -1 if not found.
         */
        indexOfChild(child: goog.ui.Component): number;
    
        /**
         * Removes the given child from this component, and returns it.  Throws an error
         * if the argument is invalid or if the specified child isn't found in the
         * parent component.  The argument can either be a string (interpreted as the
         * ID of the child component to remove) or the child component itself.
         *
         * If {@code opt_unrender} is true, calls {@link goog.ui.component#exitDocument}
         * on the removed child, and subsequently detaches the child's DOM from the
         * document.  Otherwise it is the caller's responsibility to clean up the child
         * component's DOM.
         *
         * @see goog.ui.Component#removeChildAt
         * @param {string|goog.ui.Component|null} child The ID of the child to remove,
         *    or the child component itself.
         * @param {boolean=} opt_unrender If true, calls {@code exitDocument} on the
         *    removed child component, and detaches its DOM from the document.
         * @return {goog.ui.Component} The removed component, if any.
         */
        removeChild(child: any /*string|goog.ui.Component|any (null)*/, opt_unrender?: boolean): goog.ui.Component;
    
        /**
         * Removes the child at the given index from this component, and returns it.
         * Throws an error if the argument is out of bounds, or if the specified child
         * isn't found in the parent.  See {@link goog.ui.Component#removeChild} for
         * detailed semantics.
         *
         * @see goog.ui.Component#removeChild
         * @param {number} index 0-based index of the child to remove.
         * @param {boolean=} opt_unrender If true, calls {@code exitDocument} on the
         *    removed child component, and detaches its DOM from the document.
         * @return {goog.ui.Component} The removed component, if any.
         */
        removeChildAt(index: number, opt_unrender?: boolean): goog.ui.Component;
    
        /**
         * Removes every child component attached to this one and returns them.
         *
         * @see goog.ui.Component#removeChild
         * @param {boolean=} opt_unrender If true, calls {@link #exitDocument} on the
         *    removed child components, and detaches their DOM from the document.
         * @return {!Array.<goog.ui.Component>} The removed components if any.
         */
        removeChildren(opt_unrender?: boolean): goog.ui.Component[];
    }

    /**
     * Base class for containers.  Extends {@link goog.ui.Component} by adding
     * the following:
     *  <ul>
     *    <li>a {@link goog.events.KeyHandler}, to simplify keyboard handling,
     *    <li>a pluggable <em>renderer</em> framework, to simplify the creation of
     *        containers without the need to subclass this class,
     *    <li>methods to manage child controls hosted in the container,
     *    <li>default mouse and keyboard event handling methods.
     *  </ul>
     * @param {?goog.ui.Container.Orientation=} opt_orientation Container
     *     orientation; defaults to {@code VERTICAL}.
     * @param {goog.ui.ContainerRenderer=} opt_renderer Renderer used to render or
     *     decorate the container; defaults to {@link goog.ui.ContainerRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for document
     *     interaction.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class Container extends goog.ui.Component {
        /**
         * Base class for containers.  Extends {@link goog.ui.Component} by adding
         * the following:
         *  <ul>
         *    <li>a {@link goog.events.KeyHandler}, to simplify keyboard handling,
         *    <li>a pluggable <em>renderer</em> framework, to simplify the creation of
         *        containers without the need to subclass this class,
         *    <li>methods to manage child controls hosted in the container,
         *    <li>default mouse and keyboard event handling methods.
         *  </ul>
         * @param {?goog.ui.Container.Orientation=} opt_orientation Container
         *     orientation; defaults to {@code VERTICAL}.
         * @param {goog.ui.ContainerRenderer=} opt_renderer Renderer used to render or
         *     decorate the container; defaults to {@link goog.ui.ContainerRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for document
         *     interaction.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(opt_orientation?: goog.ui.Container.Orientation, opt_renderer?: goog.ui.ContainerRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns the DOM element on which the container is listening for keyboard
         * events (null if none).
         * @return {Element} Element on which the container is listening for key
         *     events.
         */
        getKeyEventTarget(): Element;
    
        /**
         * Attaches an element on which to listen for key events.
         * @param {Element|undefined} element The element to attach, or null/undefined
         *     to attach to the default element.
         */
        setKeyEventTarget(element: any /*Element|any (undefined)*/): void;
    
        /**
         * Returns the keyboard event handler for this container, lazily created the
         * first time this method is called.  The keyboard event handler listens for
         * keyboard events on the container's key event target, as determined by its
         * renderer.
         * @return {goog.events.KeyHandler} Keyboard event handler for this container.
         */
        getKeyHandler(): goog.events.KeyHandler;
    
        /**
         * Returns the renderer used by this container to render itself or to decorate
         * an existing element.
         * @return {goog.ui.ContainerRenderer} Renderer used by the container.
         */
        getRenderer(): goog.ui.ContainerRenderer;
    
        /**
         * Registers the given renderer with the container.  Changing renderers after
         * the container has already been rendered or decorated is an error.
         * @param {goog.ui.ContainerRenderer} renderer Renderer used by the container.
         */
        setRenderer(renderer: goog.ui.ContainerRenderer): void;
    
        /**
         * Creates the container's DOM.
         * @override
         */
        createDom(): void;
    
        /**
         * Returns the DOM element into which child components are to be rendered,
         * or null if the container itself hasn't been rendered yet.  Overrides
         * {@link goog.ui.Component#getContentElement} by delegating to the renderer.
         * @return {Element} Element to contain child elements (null if none).
         * @override
         */
        getContentElement(): Element;
    
        /**
         * Returns true if the given element can be decorated by this container.
         * Overrides {@link goog.ui.Component#canDecorate}.
         * @param {Element} element Element to decorate.
         * @return {boolean} True iff the element can be decorated.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Decorates the given element with this container. Overrides {@link
         * goog.ui.Component#decorateInternal}.  Considered protected.
         * @param {Element} element Element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
    
        /**
         * Configures the container after its DOM has been rendered, and sets up event
         * handling.  Overrides {@link goog.ui.Component#enterDocument}.
         * @override
         */
        enterDocument(): void;
    
        /**
         * Cleans up the container before its DOM is removed from the document, and
         * removes event handlers.  Overrides {@link goog.ui.Component#exitDocument}.
         * @override
         */
        exitDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Handles ENTER events raised by child controls when they are navigated to.
         * @param {goog.events.Event} e ENTER event to handle.
         * @return {boolean} Whether to prevent handleMouseOver from handling
         *    the event.
         */
        handleEnterItem(e: goog.events.Event): boolean;
    
        /**
         * Handles HIGHLIGHT events dispatched by items in the container when
         * they are highlighted.
         * @param {goog.events.Event} e Highlight event to handle.
         */
        handleHighlightItem(e: goog.events.Event): void;
    
        /**
         * Handles UNHIGHLIGHT events dispatched by items in the container when
         * they are unhighlighted.
         * @param {goog.events.Event} e Unhighlight event to handle.
         */
        handleUnHighlightItem(e: goog.events.Event): void;
    
        /**
         * Handles OPEN events dispatched by items in the container when they are
         * opened.
         * @param {goog.events.Event} e Open event to handle.
         */
        handleOpenItem(e: goog.events.Event): void;
    
        /**
         * Handles CLOSE events dispatched by items in the container when they are
         * closed.
         * @param {goog.events.Event} e Close event to handle.
         */
        handleCloseItem(e: goog.events.Event): void;
    
        /**
         * Handles mousedown events over the container.  The default implementation
         * sets the "mouse button pressed" flag and, if the container is focusable,
         * grabs keyboard focus.
         * @param {goog.events.BrowserEvent} e Mousedown event to handle.
         */
        handleMouseDown(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles mouseup events over the document.  The default implementation
         * clears the "mouse button pressed" flag.
         * @param {goog.events.BrowserEvent} e Mouseup event to handle.
         */
        handleDocumentMouseUp(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles mouse events originating from nodes belonging to the controls hosted
         * in the container.  Locates the child control based on the DOM node that
         * dispatched the event, and forwards the event to the control for handling.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         */
        handleChildMouseEvents(e: goog.events.BrowserEvent): void;
    
        /**
         * Returns the child control that owns the given DOM node, or null if no such
         * control is found.
         * @param {Node} node DOM node whose owner is to be returned.
         * @return {goog.ui.Control?} Control hosted in the container to which the node
         *     belongs (if found).
         * @protected
         */
        getOwnerControl(node: Node): goog.ui.Control;
    
        /**
         * Handles focus events raised when the container's key event target receives
         * keyboard focus.
         * @param {goog.events.BrowserEvent} e Focus event to handle.
         */
        handleFocus(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles blur events raised when the container's key event target loses
         * keyboard focus.  The default implementation clears the highlight index.
         * @param {goog.events.BrowserEvent} e Blur event to handle.
         */
        handleBlur(e: goog.events.BrowserEvent): void;
    
        /**
         * Attempts to handle a keyboard event, if the control is enabled, by calling
         * {@link handleKeyEventInternal}.  Considered protected; should only be used
         * within this package and by subclasses.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} Whether the key event was handled.
         */
        handleKeyEvent(e: goog.events.KeyEvent): boolean;
    
        /**
         * Attempts to handle a keyboard event; returns true if the event was handled,
         * false otherwise.  If the container is enabled, and a child is highlighted,
         * calls the child control's {@code handleKeyEvent} method to give the control
         * a chance to handle the event first.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} Whether the event was handled by the container (or one of
         *     its children).
         */
        handleKeyEventInternal(e: goog.events.KeyEvent): boolean;
    
        /**
         * Adds the specified control as the last child of this container.  See
         * {@link goog.ui.Container#addChildAt} for detailed semantics.
         * @param {goog.ui.Component} child The new child control.
         * @param {boolean=} opt_render Whether the new child should be rendered
         *     immediately after being added (defaults to false).
         * @override
         */
        addChild(child: goog.ui.Component, opt_render?: boolean): void;
    
        /**
         * Overrides {@link goog.ui.Container#getChild} to make it clear that it
         * only returns {@link goog.ui.Control}s.
         * @param {string} id Child component ID.
         * @return {goog.ui.Control} The child with the given ID; null if none.
         * @override
         */
        getChild: any /*missing*/;
    
        /**
         * Overrides {@link goog.ui.Container#getChildAt} to make it clear that it
         * only returns {@link goog.ui.Control}s.
         * @param {number} index 0-based index.
         * @return {goog.ui.Control} The child with the given ID; null if none.
         * @override
         */
        getChildAt: any /*missing*/;
    
        /**
         * Adds the control as a child of this container at the given 0-based index.
         * Overrides {@link goog.ui.Component#addChildAt} by also updating the
         * container's highlight index.  Since {@link goog.ui.Component#addChild} uses
         * {@link #addChildAt} internally, we only need to override this method.
         * @param {goog.ui.Component} control New child.
         * @param {number} index Index at which the new child is to be added.
         * @param {boolean=} opt_render Whether the new child should be rendered
         *     immediately after being added (defaults to false).
         * @override
         */
        addChildAt(control: goog.ui.Component, index: number, opt_render?: boolean): void;
    
        /**
         * Removes a child control.  Overrides {@link goog.ui.Component#removeChild} by
         * updating the highlight index.  Since {@link goog.ui.Component#removeChildAt}
         * uses {@link #removeChild} internally, we only need to override this method.
         * @param {string|goog.ui.Component} control The ID of the child to remove, or
         *     the control itself.
         * @param {boolean=} opt_unrender Whether to call {@code exitDocument} on the
         *     removed control, and detach its DOM from the document (defaults to
         *     false).
         * @return {goog.ui.Control} The removed control, if any.
         * @override
         */
        removeChild(control: any /*string|goog.ui.Component*/, opt_unrender?: boolean): goog.ui.Control;
    
        /**
         * Returns the container's orientation.
         * @return {?goog.ui.Container.Orientation} Container orientation.
         */
        getOrientation(): goog.ui.Container.Orientation;
    
        /**
         * Sets the container's orientation.
         * @param {goog.ui.Container.Orientation} orientation Container orientation.
         */
        setOrientation(orientation: goog.ui.Container.Orientation): void;
    
        /**
         * Returns true if the container's visibility is set to visible, false if
         * it is set to hidden.  A container that is set to hidden is guaranteed
         * to be hidden from the user, but the reverse isn't necessarily true.
         * A container may be set to visible but can otherwise be obscured by another
         * element, rendered off-screen, or hidden using direct CSS manipulation.
         * @return {boolean} Whether the container is set to be visible.
         */
        isVisible(): boolean;
    
        /**
         * Shows or hides the container.  Does nothing if the container already has
         * the requested visibility.  Otherwise, dispatches a SHOW or HIDE event as
         * appropriate, giving listeners a chance to prevent the visibility change.
         * @param {boolean} visible Whether to show or hide the container.
         * @param {boolean=} opt_force If true, doesn't check whether the container
         *     already has the requested visibility, and doesn't dispatch any events.
         * @return {boolean} Whether the visibility was changed.
         */
        setVisible(visible: boolean, opt_force?: boolean): boolean;
    
        /**
         * Returns true if the container is enabled, false otherwise.
         * @return {boolean} Whether the container is enabled.
         */
        isEnabled(): boolean;
    
        /**
         * Enables/disables the container based on the {@code enable} argument.
         * Dispatches an {@code ENABLED} or {@code DISABLED} event prior to changing
         * the container's state, which may be caught and canceled to prevent the
         * container from changing state.  Also enables/disables child controls.
         * @param {boolean} enable Whether to enable or disable the container.
         */
        setEnabled(enable: boolean): void;
    
        /**
         * Returns true if the container is focusable, false otherwise.  The default
         * is true.  Focusable containers always have a tab index and allocate a key
         * handler to handle keyboard events while focused.
         * @return {boolean} Whether the component is focusable.
         */
        isFocusable(): boolean;
    
        /**
         * Sets whether the container is focusable.  The default is true.  Focusable
         * containers always have a tab index and allocate a key handler to handle
         * keyboard events while focused.
         * @param {boolean} focusable Whether the component is to be focusable.
         */
        setFocusable(focusable: boolean): void;
    
        /**
         * Returns true if the container allows children to be focusable, false
         * otherwise.  Only effective if the container is not focusable.
         * @return {boolean} Whether children should be focusable.
         */
        isFocusableChildrenAllowed(): boolean;
    
        /**
         * Sets whether the container allows children to be focusable, false
         * otherwise.  Only effective if the container is not focusable.
         * @param {boolean} focusable Whether the children should be focusable.
         */
        setFocusableChildrenAllowed(focusable: boolean): void;
    
        /**
         * @return {boolean} Whether highlighting a child component should also open it.
         */
        isOpenFollowsHighlight(): boolean;
    
        /**
         * Sets whether highlighting a child component should also open it.
         * @param {boolean} follow Whether highlighting a child component also opens it.
         */
        setOpenFollowsHighlight(follow: boolean): void;
    
        /**
         * Returns the index of the currently highlighted item (-1 if none).
         * @return {number} Index of the currently highlighted item.
         */
        getHighlightedIndex(): number;
    
        /**
         * Highlights the item at the given 0-based index (if any).  If another item
         * was previously highlighted, it is un-highlighted.
         * @param {number} index Index of item to highlight (-1 removes the current
         *     highlight).
         */
        setHighlightedIndex(index: number): void;
    
        /**
         * Highlights the given item if it exists and is a child of the container;
         * otherwise un-highlights the currently highlighted item.
         * @param {goog.ui.Control} item Item to highlight.
         */
        setHighlighted(item: goog.ui.Control): void;
    
        /**
         * Returns the currently highlighted item (if any).
         * @return {goog.ui.Control?} Highlighted item (null if none).
         */
        getHighlighted(): goog.ui.Control;
    
        /**
         * Highlights the first highlightable item in the container
         */
        highlightFirst(): void;
    
        /**
         * Highlights the last highlightable item in the container.
         */
        highlightLast(): void;
    
        /**
         * Highlights the next highlightable item (or the first if nothing is currently
         * highlighted).
         */
        highlightNext(): void;
    
        /**
         * Highlights the previous highlightable item (or the last if nothing is
         * currently highlighted).
         */
        highlightPrevious(): void;
    
        /**
         * Helper function that manages the details of moving the highlight among
         * child controls in response to keyboard events.
         * @param {function(number, number) : number} fn Function that accepts the
         *     current and maximum indices, and returns the next index to check.
         * @param {number} startIndex Start index.
         * @return {boolean} Whether the highlight has changed.
         * @protected
         */
        highlightHelper(fn: (_0: number, _1: number) => number, startIndex: number): boolean;
    
        /**
         * Returns whether the given item can be highlighted.
         * @param {goog.ui.Control} item The item to check.
         * @return {boolean} Whether the item can be highlighted.
         * @protected
         */
        canHighlightItem(item: goog.ui.Control): boolean;
    
        /**
         * Helper method that sets the highlighted index to the given index in response
         * to a keyboard event.  The base class implementation simply calls the
         * {@link #setHighlightedIndex} method, but subclasses can override this
         * behavior as needed.
         * @param {number} index Index of item to highlight.
         * @protected
         */
        setHighlightedIndexFromKeyEvent(index: number): void;
    
        /**
         * Returns the currently open (expanded) control in the container (null if
         * none).
         * @return {goog.ui.Control?} The currently open control.
         */
        getOpenItem(): goog.ui.Control;
    
        /**
         * Returns true if the mouse button is pressed, false otherwise.
         * @return {boolean} Whether the mouse button is pressed.
         */
        isMouseButtonPressed(): boolean;
    
        /**
         * Sets or clears the "mouse button pressed" flag.
         * @param {boolean} pressed Whether the mouse button is presed.
         */
        setMouseButtonPressed(pressed: boolean): void;
    }

    /**
     * Default renderer for {@link goog.ui.Container}.  Can be used as-is, but
     * subclasses of Container will probably want to use renderers specifically
     * tailored for them by extending this class.
     * @param {string=} opt_ariaRole Optional ARIA role used for the element.
     * @constructor
     */
    class ContainerRenderer {
        /**
         * Default renderer for {@link goog.ui.Container}.  Can be used as-is, but
         * subclasses of Container will probably want to use renderers specifically
         * tailored for them by extending this class.
         * @param {string=} opt_ariaRole Optional ARIA role used for the element.
         * @constructor
         */
        constructor(opt_ariaRole?: string);
    
        /**
         * Returns the ARIA role to be applied to the container.
         * See http://wiki/Main/ARIA for more info.
         * @return {undefined|string} ARIA role.
         */
        getAriaRole(): any /*any (undefined)|string*/;
    
        /**
         * Enables or disables the tab index of the element.  Only elements with a
         * valid tab index can receive focus.
         * @param {Element} element Element whose tab index is to be changed.
         * @param {boolean} enable Whether to add or remove the element's tab index.
         */
        enableTabIndex(element: Element, enable: boolean): void;
    
        /**
         * Creates and returns the container's root element.  The default
         * simply creates a DIV and applies the renderer's own CSS class name to it.
         * To be overridden in subclasses.
         * @param {goog.ui.Container} container Container to render.
         * @return {Element} Root element for the container.
         */
        createDom(container: goog.ui.Container): Element;
    
        /**
         * Returns the DOM element into which child components are to be rendered,
         * or null if the container hasn't been rendered yet.
         * @param {Element} element Root element of the container whose content element
         *     is to be returned.
         * @return {Element} Element to contain child elements (null if none).
         */
        getContentElement(element: Element): Element;
    
        /**
         * Default implementation of {@code canDecorate}; returns true if the element
         * is a DIV, false otherwise.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Default implementation of {@code decorate} for {@link goog.ui.Container}s.
         * Decorates the element with the container, and attempts to decorate its child
         * elements.  Returns the decorated element.
         * @param {goog.ui.Container} container Container to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         */
        decorate(container: goog.ui.Container, element: Element): Element;
    
        /**
         * Sets the container's state based on the given CSS class name, encountered
         * during decoration.  CSS class names that don't represent container states
         * are ignored.  Considered protected; subclasses should override this method
         * to support more states and CSS class names.
         * @param {goog.ui.Container} container Container to update.
         * @param {string} className CSS class name.
         * @param {string} baseClass Base class name used as the root of state-specific
         *     class names (typically the renderer's own class name).
         * @protected
         */
        setStateFromClassName(container: goog.ui.Container, className: string, baseClass: string): void;
    
        /**
         * Takes a container and an element that may contain child elements, decorates
         * the child elements, and adds the corresponding components to the container
         * as child components.  Any non-element child nodes (e.g. empty text nodes
         * introduced by line breaks in the HTML source) are removed from the element.
         * @param {goog.ui.Container} container Container whose children are to be
         *     discovered.
         * @param {Element} element Element whose children are to be decorated.
         * @param {Element=} opt_firstChild the first child to be decorated.
         */
        decorateChildren(container: goog.ui.Container, element: Element, opt_firstChild?: Element): void;
    
        /**
         * Inspects the element, and creates an instance of {@link goog.ui.Control} or
         * an appropriate subclass best suited to decorate it.  Returns the control (or
         * null if no suitable class was found).  This default implementation uses the
         * element's CSS class to find the appropriate control class to instantiate.
         * May be overridden in subclasses.
         * @param {Element} element Element to decorate.
         * @return {goog.ui.Control?} A new control suitable to decorate the element
         *     (null if none).
         */
        getDecoratorForChild(element: Element): goog.ui.Control;
    
        /**
         * Initializes the container's DOM when the container enters the document.
         * Called from {@link goog.ui.Container#enterDocument}.
         * @param {goog.ui.Container} container Container whose DOM is to be initialized
         *     as it enters the document.
         */
        initializeDom(container: goog.ui.Container): void;
    
        /**
         * Returns the element within the container's DOM that should receive keyboard
         * focus (null if none).  The default implementation returns the container's
         * root element.
         * @param {goog.ui.Container} container Container whose key event target is
         *     to be returned.
         * @return {Element} Key event target (null if none).
         */
        getKeyEventTarget(container: goog.ui.Container): Element;
    
        /**
         * Returns the CSS class to be applied to the root element of containers
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         */
        getCssClass(): string;
    
        /**
         * Returns all CSS class names applicable to the given container, based on its
         * state.  The array of class names returned includes the renderer's own CSS
         * class, followed by a CSS class indicating the container's orientation,
         * followed by any state-specific CSS classes.
         * @param {goog.ui.Container} container Container whose CSS classes are to be
         *     returned.
         * @return {Array.<string>} Array of CSS class names applicable to the
         *     container.
         */
        getClassNames(container: goog.ui.Container): string[];
    
        /**
         * Returns the default orientation of containers rendered or decorated by this
         * renderer.  The base class implementation returns {@code VERTICAL}.
         * @return {goog.ui.Container.Orientation} Default orientation for containers
         *     created or decorated by this renderer.
         */
        getDefaultOrientation(): goog.ui.Container.Orientation;
    }

    /**
     * Plug-on scrolling behavior for a container.
     *
     * Use this to style containers, such as pop-up menus, to be scrolling, and
     * automatically keep the highlighted element visible.
     *
     * To use this, first style your container with the desired overflow
     * properties and height to achieve vertical scrolling.  Also, the scrolling
     * div should have no vertical padding, for two reasons: it is difficult to
     * compensate for, and is generally not what you want due to the strange way
     * CSS handles padding on the scrolling dimension.
     *
     * The container must already be rendered before this may be constructed.
     *
     * @param {!goog.ui.Container} container The container to attach behavior to.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class ContainerScroller extends goog.Disposable {
        /**
         * Plug-on scrolling behavior for a container.
         *
         * Use this to style containers, such as pop-up menus, to be scrolling, and
         * automatically keep the highlighted element visible.
         *
         * To use this, first style your container with the desired overflow
         * properties and height to achieve vertical scrolling.  Also, the scrolling
         * div should have no vertical padding, for two reasons: it is difficult to
         * compensate for, and is generally not what you want due to the strange way
         * CSS handles padding on the scrolling dimension.
         *
         * The container must already be rendered before this may be constructed.
         *
         * @param {!goog.ui.Container} container The container to attach behavior to.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(container: goog.ui.Container);
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Base class for UI controls.  Extends {@link goog.ui.Component} by adding
     * the following:
     *  <ul>
     *    <li>a {@link goog.events.KeyHandler}, to simplify keyboard handling,
     *    <li>a pluggable <em>renderer</em> framework, to simplify the creation of
     *        simple controls without the need to subclass this class,
     *    <li>the notion of component <em>content</em>, like a text caption or DOM
     *        structure displayed in the component (e.g. a button label),
     *    <li>getter and setter for component content, as well as a getter and
     *        setter specifically for caption text (for convenience),
     *    <li>support for hiding/showing the component,
          <li>fine-grained control over supported states and state transition
              events, and
     *    <li>default mouse and keyboard event handling.
     *  </ul>
     * This class has sufficient built-in functionality for most simple UI controls.
     * All controls dispatch SHOW, HIDE, ENTER, LEAVE, and ACTION events on show,
     * hide, mouseover, mouseout, and user action, respectively.  Additional states
     * are also supported.  See closure/demos/control.html
     * for example usage.
     * @param {goog.ui.ControlContent=} opt_content Text caption or DOM structure
     *     to display as the content of the control (if any).
     * @param {goog.ui.ControlRenderer=} opt_renderer Renderer used to render or
     *     decorate the component; defaults to {@link goog.ui.ControlRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class Control extends goog.ui.Component {
        /**
         * Base class for UI controls.  Extends {@link goog.ui.Component} by adding
         * the following:
         *  <ul>
         *    <li>a {@link goog.events.KeyHandler}, to simplify keyboard handling,
         *    <li>a pluggable <em>renderer</em> framework, to simplify the creation of
         *        simple controls without the need to subclass this class,
         *    <li>the notion of component <em>content</em>, like a text caption or DOM
         *        structure displayed in the component (e.g. a button label),
         *    <li>getter and setter for component content, as well as a getter and
         *        setter specifically for caption text (for convenience),
         *    <li>support for hiding/showing the component,
         <li>fine-grained control over supported states and state transition
         events, and
         *    <li>default mouse and keyboard event handling.
         *  </ul>
         * This class has sufficient built-in functionality for most simple UI controls.
         * All controls dispatch SHOW, HIDE, ENTER, LEAVE, and ACTION events on show,
         * hide, mouseover, mouseout, and user action, respectively.  Additional states
         * are also supported.  See closure/demos/control.html
         * for example usage.
         * @param {goog.ui.ControlContent=} opt_content Text caption or DOM structure
         *     to display as the content of the control (if any).
         * @param {goog.ui.ControlRenderer=} opt_renderer Renderer used to render or
         *     decorate the component; defaults to {@link goog.ui.ControlRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_content?: goog.ui.ControlContent, opt_renderer?: goog.ui.ControlRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns true if the control is configured to handle its own mouse events,
         * false otherwise.  Controls not hosted in {@link goog.ui.Container}s have
         * to handle their own mouse events, but controls hosted in containers may
         * allow their parent to handle mouse events on their behalf.  Considered
         * protected; should only be used within this package and by subclasses.
         * @return {boolean} Whether the control handles its own mouse events.
         */
        isHandleMouseEvents(): boolean;
    
        /**
         * Enables or disables mouse event handling for the control.  Containers may
         * use this method to disable mouse event handling in their child controls.
         * Considered protected; should only be used within this package and by
         * subclasses.
         * @param {boolean} enable Whether to enable or disable mouse event handling.
         */
        setHandleMouseEvents(enable: boolean): void;
    
        /**
         * Returns the DOM element on which the control is listening for keyboard
         * events (null if none).
         * @return {Element} Element on which the control is listening for key
         *     events.
         */
        getKeyEventTarget(): Element;
    
        /**
         * Returns the keyboard event handler for this component, lazily created the
         * first time this method is called.  Considered protected; should only be
         * used within this package and by subclasses.
         * @return {goog.events.KeyHandler} Keyboard event handler for this component.
         * @protected
         */
        getKeyHandler(): goog.events.KeyHandler;
    
        /**
         * Returns the renderer used by this component to render itself or to decorate
         * an existing element.
         * @return {goog.ui.ControlRenderer|undefined} Renderer used by the component
         *     (undefined if none).
         */
        getRenderer(): any /*goog.ui.ControlRenderer|any (undefined)*/;
    
        /**
         * Registers the given renderer with the component.  Changing renderers after
         * the component has entered the document is an error.
         * @param {goog.ui.ControlRenderer} renderer Renderer used by the component.
         * @throws {Error} If the control is already in the document.
         */
        setRenderer(renderer: goog.ui.ControlRenderer): void;
    
        /**
         * Returns any additional class name(s) to be applied to the component's
         * root element, or null if no extra class names are needed.
         * @return {Array.<string>?} Additional class names to be applied to
         *     the component's root element (null if none).
         */
        getExtraClassNames(): string[];
    
        /**
         * Adds the given class name to the list of classes to be applied to the
         * component's root element.
         * @param {string} className Additional class name to be applied to the
         *     component's root element.
         */
        addClassName(className: string): void;
    
        /**
         * Removes the given class name from the list of classes to be applied to
         * the component's root element.
         * @param {string} className Class name to be removed from the component's root
         *     element.
         */
        removeClassName(className: string): void;
    
        /**
         * Adds or removes the given class name to/from the list of classes to be
         * applied to the component's root element.
         * @param {string} className CSS class name to add or remove.
         * @param {boolean} enable Whether to add or remove the class name.
         */
        enableClassName(className: string, enable: boolean): void;
    
        /**
         * Creates the control's DOM.  Overrides {@link goog.ui.Component#createDom} by
         * delegating DOM manipulation to the control's renderer.
         * @override
         */
        createDom(): void;
    
        /**
         * Returns the control's preferred ARIA role. This can be used by a control to
         * override the role that would be assigned by the renderer.  This is useful in
         * cases where a different ARIA role is appropriate for a control because of the
         * context in which it's used.  E.g., a {@link goog.ui.MenuButton} added to a
         * {@link goog.ui.Select} should have an ARIA role of LISTBOX and not MENUITEM.
         * @return {?goog.a11y.aria.Role} This control's preferred ARIA role or null if
         *     no preferred ARIA role is set.
         */
        getPreferredAriaRole(): goog.a11y.aria.Role;
    
        /**
         * Sets the control's preferred ARIA role. This can be used to override the role
         * that would be assigned by the renderer.  This is useful in cases where a
         * different ARIA role is appropriate for a control because of the
         * context in which it's used.  E.g., a {@link goog.ui.MenuButton} added to a
         * {@link goog.ui.Select} should have an ARIA role of LISTBOX and not MENUITEM.
         * @param {goog.a11y.aria.Role} role This control's preferred ARIA role.
         */
        setPreferredAriaRole(role: goog.a11y.aria.Role): void;
    
        /**
         * Returns the DOM element into which child components are to be rendered,
         * or null if the control itself hasn't been rendered yet.  Overrides
         * {@link goog.ui.Component#getContentElement} by delegating to the renderer.
         * @return {Element} Element to contain child elements (null if none).
         * @override
         */
        getContentElement(): Element;
    
        /**
         * Returns true if the given element can be decorated by this component.
         * Overrides {@link goog.ui.Component#canDecorate}.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the element can be decorated by this component.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Decorates the given element with this component. Overrides {@link
         * goog.ui.Component#decorateInternal} by delegating DOM manipulation
         * to the control's renderer.
         * @param {Element} element Element to decorate.
         * @protected
         * @override
         */
        decorateInternal(element: Element): void;
    
        /**
         * Configures the component after its DOM has been rendered, and sets up event
         * handling.  Overrides {@link goog.ui.Component#enterDocument}.
         * @override
         */
        enterDocument(): void;
    
        /**
         * Cleans up the component before its DOM is removed from the document, and
         * removes event handlers.  Overrides {@link goog.ui.Component#exitDocument}
         * by making sure that components that are removed from the document aren't
         * focusable (i.e. have no tab index).
         * @override
         */
        exitDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Returns the text caption or DOM structure displayed in the component.
         * @return {goog.ui.ControlContent} Text caption or DOM structure
         *     comprising the component's contents.
         */
        getContent(): goog.ui.ControlContent;
    
        /**
         * Sets the component's content to the given text caption, element, or array of
         * nodes.  (If the argument is an array of nodes, it must be an actual array,
         * not an array-like object.)
         * @param {goog.ui.ControlContent} content Text caption or DOM
         *     structure to set as the component's contents.
         */
        setContent(content: goog.ui.ControlContent): void;
    
        /**
         * Sets the component's content to the given text caption, element, or array
         * of nodes.  Unlike {@link #setContent}, doesn't modify the component's DOM.
         * Called by renderers during element decoration.
         *
         * This should only be used by subclasses and its associated renderers.
         *
         * @param {goog.ui.ControlContent} content Text caption or DOM structure
         *     to set as the component's contents.
         */
        setContentInternal(content: goog.ui.ControlContent): void;
    
        /**
         * @return {string} Text caption of the control or empty string if none.
         */
        getCaption(): string;
    
        /**
         * Sets the text caption of the component.
         * @param {string} caption Text caption of the component.
         */
        setCaption(caption: string): void;
    
        /** @override */
        setRightToLeft(): void;
    
        /**
         * Returns true if the control allows text selection within its DOM, false
         * otherwise.  Controls that disallow text selection have the appropriate
         * unselectable styling applied to their elements.  Note that controls hosted
         * in containers will report that they allow text selection even if their
         * container disallows text selection.
         * @return {boolean} Whether the control allows text selection.
         */
        isAllowTextSelection(): boolean;
    
        /**
         * Allows or disallows text selection within the control's DOM.
         * @param {boolean} allow Whether the control should allow text selection.
         */
        setAllowTextSelection(allow: boolean): void;
    
        /**
         * Returns true if the component's visibility is set to visible, false if
         * it is set to hidden.  A component that is set to hidden is guaranteed
         * to be hidden from the user, but the reverse isn't necessarily true.
         * A component may be set to visible but can otherwise be obscured by another
         * element, rendered off-screen, or hidden using direct CSS manipulation.
         * @return {boolean} Whether the component is visible.
         */
        isVisible(): boolean;
    
        /**
         * Shows or hides the component.  Does nothing if the component already has
         * the requested visibility.  Otherwise, dispatches a SHOW or HIDE event as
         * appropriate, giving listeners a chance to prevent the visibility change.
         * When showing a component that is both enabled and focusable, ensures that
         * its key target has a tab index.  When hiding a component that is enabled
         * and focusable, blurs its key target and removes its tab index.
         * @param {boolean} visible Whether to show or hide the component.
         * @param {boolean=} opt_force If true, doesn't check whether the component
         *     already has the requested visibility, and doesn't dispatch any events.
         * @return {boolean} Whether the visibility was changed.
         */
        setVisible(visible: boolean, opt_force?: boolean): boolean;
    
        /**
         * Returns true if the component is enabled, false otherwise.
         * @return {boolean} Whether the component is enabled.
         */
        isEnabled(): boolean;
    
        /**
         * Enables or disables the component.  Does nothing if this state transition
         * is disallowed.  If the component is both visible and focusable, updates its
         * focused state and tab index as needed.  If the component is being disabled,
         * ensures that it is also deactivated and un-highlighted first.  Note that the
         * component's enabled/disabled state is "locked" as long as it is hosted in a
         * {@link goog.ui.Container} that is itself disabled; this is to prevent clients
         * from accidentally re-enabling a control that is in a disabled container.
         * @param {boolean} enable Whether to enable or disable the component.
         * @see #isTransitionAllowed
         */
        setEnabled(enable: boolean): void;
    
        /**
         * Returns true if the component is currently highlighted, false otherwise.
         * @return {boolean} Whether the component is highlighted.
         */
        isHighlighted(): boolean;
    
        /**
         * Highlights or unhighlights the component.  Does nothing if this state
         * transition is disallowed.
         * @param {boolean} highlight Whether to highlight or unhighlight the component.
         * @see #isTransitionAllowed
         */
        setHighlighted(highlight: boolean): void;
    
        /**
         * Returns true if the component is active (pressed), false otherwise.
         * @return {boolean} Whether the component is active.
         */
        isActive(): boolean;
    
        /**
         * Activates or deactivates the component.  Does nothing if this state
         * transition is disallowed.
         * @param {boolean} active Whether to activate or deactivate the component.
         * @see #isTransitionAllowed
         */
        setActive(active: boolean): void;
    
        /**
         * Returns true if the component is selected, false otherwise.
         * @return {boolean} Whether the component is selected.
         */
        isSelected(): boolean;
    
        /**
         * Selects or unselects the component.  Does nothing if this state transition
         * is disallowed.
         * @param {boolean} select Whether to select or unselect the component.
         * @see #isTransitionAllowed
         */
        setSelected(select: boolean): void;
    
        /**
         * Returns true if the component is checked, false otherwise.
         * @return {boolean} Whether the component is checked.
         */
        isChecked(): boolean;
    
        /**
         * Checks or unchecks the component.  Does nothing if this state transition
         * is disallowed.
         * @param {boolean} check Whether to check or uncheck the component.
         * @see #isTransitionAllowed
         */
        setChecked(check: boolean): void;
    
        /**
         * Returns true if the component is styled to indicate that it has keyboard
         * focus, false otherwise.  Note that {@code isFocused()} returning true
         * doesn't guarantee that the component's key event target has keyborad focus,
         * only that it is styled as such.
         * @return {boolean} Whether the component is styled to indicate as having
         *     keyboard focus.
         */
        isFocused(): boolean;
    
        /**
         * Applies or removes styling indicating that the component has keyboard focus.
         * Note that unlike the other "set" methods, this method is called as a result
         * of the component's element having received or lost keyboard focus, not the
         * other way around, so calling {@code setFocused(true)} doesn't guarantee that
         * the component's key event target has keyboard focus, only that it is styled
         * as such.
         * @param {boolean} focused Whether to apply or remove styling to indicate that
         *     the component's element has keyboard focus.
         */
        setFocused(focused: boolean): void;
    
        /**
         * Returns true if the component is open (expanded), false otherwise.
         * @return {boolean} Whether the component is open.
         */
        isOpen(): boolean;
    
        /**
         * Opens (expands) or closes (collapses) the component.  Does nothing if this
         * state transition is disallowed.
         * @param {boolean} open Whether to open or close the component.
         * @see #isTransitionAllowed
         */
        setOpen(open: boolean): void;
    
        /**
         * Returns the component's state as a bit mask of {@link
         * goog.ui.Component.State}s.
         * @return {number} Bit mask representing component state.
         */
        getState(): number;
    
        /**
         * Returns true if the component is in the specified state, false otherwise.
         * @param {goog.ui.Component.State} state State to check.
         * @return {boolean} Whether the component is in the given state.
         */
        hasState(state: goog.ui.Component.State): boolean;
    
        /**
         * Sets or clears the given state on the component, and updates its styling
         * accordingly.  Does nothing if the component is already in the correct state
         * or if it doesn't support the specified state.  Doesn't dispatch any state
         * transition events; use advisedly.
         * @param {goog.ui.Component.State} state State to set or clear.
         * @param {boolean} enable Whether to set or clear the state (if supported).
         */
        setState(state: goog.ui.Component.State, enable: boolean): void;
    
        /**
         * Sets the component's state to the state represented by a bit mask of
         * {@link goog.ui.Component.State}s.  Unlike {@link #setState}, doesn't
         * update the component's styling, and doesn't reject unsupported states.
         * Called by renderers during element decoration.  Considered protected;
         * should only be used within this package and by subclasses.
         *
         * This should only be used by subclasses and its associated renderers.
         *
         * @param {number} state Bit mask representing component state.
         */
        setStateInternal(state: number): void;
    
        /**
         * Returns true if the component supports the specified state, false otherwise.
         * @param {goog.ui.Component.State} state State to check.
         * @return {boolean} Whether the component supports the given state.
         */
        isSupportedState(state: goog.ui.Component.State): boolean;
    
        /**
         * Enables or disables support for the given state. Disabling support
         * for a state while the component is in that state is an error.
         * @param {goog.ui.Component.State} state State to support or de-support.
         * @param {boolean} support Whether the component should support the state.
         * @throws {Error} If disabling support for a state the control is currently in.
         */
        setSupportedState(state: goog.ui.Component.State, support: boolean): void;
    
        /**
         * Returns true if the component provides default event handling for the state,
         * false otherwise.
         * @param {goog.ui.Component.State} state State to check.
         * @return {boolean} Whether the component provides default event handling for
         *     the state.
         */
        isAutoState(state: goog.ui.Component.State): boolean;
    
        /**
         * Enables or disables automatic event handling for the given state(s).
         * @param {number} states Bit mask of {@link goog.ui.Component.State}s for which
         *     default event handling is to be enabled or disabled.
         * @param {boolean} enable Whether the component should provide default event
         *     handling for the state(s).
         */
        setAutoStates(states: number, enable: boolean): void;
    
        /**
         * Returns true if the component is set to dispatch transition events for the
         * given state, false otherwise.
         * @param {goog.ui.Component.State} state State to check.
         * @return {boolean} Whether the component dispatches transition events for
         *     the state.
         */
        isDispatchTransitionEvents(state: goog.ui.Component.State): boolean;
    
        /**
         * Enables or disables transition events for the given state(s).  Controls
         * handle state transitions internally by default, and only dispatch state
         * transition events if explicitly requested to do so by calling this method.
         * @param {number} states Bit mask of {@link goog.ui.Component.State}s for
         *     which transition events should be enabled or disabled.
         * @param {boolean} enable Whether transition events should be enabled.
         */
        setDispatchTransitionEvents(states: number, enable: boolean): void;
    
        /**
         * Returns true if the transition into or out of the given state is allowed to
         * proceed, false otherwise.  A state transition is allowed under the following
         * conditions:
         * <ul>
         *   <li>the component supports the state,
         *   <li>the component isn't already in the target state,
         *   <li>either the component is configured not to dispatch events for this
         *       state transition, or a transition event was dispatched and wasn't
         *       canceled by any event listener, and
         *   <li>the component hasn't been disposed of
         * </ul>
         * Considered protected; should only be used within this package and by
         * subclasses.
         * @param {goog.ui.Component.State} state State to/from which the control is
         *     transitioning.
         * @param {boolean} enable Whether the control is entering or leaving the state.
         * @return {boolean} Whether the state transition is allowed to proceed.
         * @protected
         */
        isTransitionAllowed(state: goog.ui.Component.State, enable: boolean): boolean;
    
        /**
         * Handles mouseover events.  Dispatches an ENTER event; if the event isn't
         * canceled, the component is enabled, and it supports auto-highlighting,
         * highlights the component.  Considered protected; should only be used
         * within this package and by subclasses.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         */
        handleMouseOver(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles mouseout events.  Dispatches a LEAVE event; if the event isn't
         * canceled, and the component supports auto-highlighting, deactivates and
         * un-highlights the component.  Considered protected; should only be used
         * within this package and by subclasses.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         */
        handleMouseOut(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles contextmenu events.
         * @param {goog.events.BrowserEvent} e Event to handle.
         */
        handleContextMenu: any /*missing*/;
    
        /**
         * Handles mousedown events.  If the component is enabled, highlights and
         * activates it.  If the component isn't configured for keyboard access,
         * prevents it from receiving keyboard focus.  Considered protected; should
         * only be used within this package and by subclasses.
         * @param {goog.events.Event} e Mouse event to handle.
         */
        handleMouseDown(e: goog.events.Event): void;
    
        /**
         * Handles mouseup events.  If the component is enabled, highlights it.  If
         * the component has previously been activated, performs its associated action
         * by calling {@link performActionInternal}, then deactivates it.  Considered
         * protected; should only be used within this package and by subclasses.
         * @param {goog.events.Event} e Mouse event to handle.
         */
        handleMouseUp(e: goog.events.Event): void;
    
        /**
         * Handles dblclick events.  Should only be registered if the user agent is
         * IE.  If the component is enabled, performs its associated action by calling
         * {@link performActionInternal}.  This is used to allow more performant
         * buttons in IE.  In IE, no mousedown event is fired when that mousedown will
         * trigger a dblclick event.  Because of this, a user clicking quickly will
         * only cause ACTION events to fire on every other click.  This is a workaround
         * to generate ACTION events for every click.  Unfortunately, this workaround
         * won't ever trigger the ACTIVE state.  This is roughly the same behaviour as
         * if this were a 'button' element with a listener on mouseup.  Considered
         * protected; should only be used within this package and by subclasses.
         * @param {goog.events.Event} e Mouse event to handle.
         */
        handleDblClick(e: goog.events.Event): void;
    
        /**
         * Performs the appropriate action when the control is activated by the user.
         * The default implementation first updates the checked and selected state of
         * controls that support them, then dispatches an ACTION event.  Considered
         * protected; should only be used within this package and by subclasses.
         * @param {goog.events.Event} e Event that triggered the action.
         * @return {boolean} Whether the action is allowed to proceed.
         * @protected
         */
        performActionInternal(e: goog.events.Event): boolean;
    
        /**
         * Handles focus events on the component's key event target element.  If the
         * component is focusable, updates its state and styling to indicate that it
         * now has keyboard focus.  Considered protected; should only be used within
         * this package and by subclasses.  <b>Warning:</b> IE dispatches focus and
         * blur events asynchronously!
         * @param {goog.events.Event} e Focus event to handle.
         */
        handleFocus(e: goog.events.Event): void;
    
        /**
         * Handles blur events on the component's key event target element.  Always
         * deactivates the component.  In addition, if the component is focusable,
         * updates its state and styling to indicate that it no longer has keyboard
         * focus.  Considered protected; should only be used within this package and
         * by subclasses.  <b>Warning:</b> IE dispatches focus and blur events
         * asynchronously!
         * @param {goog.events.Event} e Blur event to handle.
         */
        handleBlur(e: goog.events.Event): void;
    
        /**
         * Attempts to handle a keyboard event, if the component is enabled and visible,
         * by calling {@link handleKeyEventInternal}.  Considered protected; should only
         * be used within this package and by subclasses.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} Whether the key event was handled.
         */
        handleKeyEvent(e: goog.events.KeyEvent): boolean;
    
        /**
         * Attempts to handle a keyboard event; returns true if the event was handled,
         * false otherwise.  Considered protected; should only be used within this
         * package and by subclasses.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} Whether the key event was handled.
         * @protected
         */
        handleKeyEventInternal(e: goog.events.KeyEvent): boolean;
    }

    /**
     * Default renderer for {@link goog.ui.Control}s.  Can be used as-is, but
     * subclasses of Control will probably want to use renderers specifically
     * tailored for them by extending this class.  Controls that use renderers
     * delegate one or more of the following API methods to the renderer:
     * <ul>
     *    <li>{@code createDom} - renders the DOM for the component
     *    <li>{@code canDecorate} - determines whether an element can be decorated
     *        by the component
     *    <li>{@code decorate} - decorates an existing element with the component
     *    <li>{@code setState} - updates the appearance of the component based on
     *        its state
     *    <li>{@code getContent} - returns the component's content
     *    <li>{@code setContent} - sets the component's content
     * </ul>
     * Controls are stateful; renderers, on the other hand, should be stateless and
     * reusable.
     * @constructor
     */
    class ControlRenderer {
        /**
         * Default renderer for {@link goog.ui.Control}s.  Can be used as-is, but
         * subclasses of Control will probably want to use renderers specifically
         * tailored for them by extending this class.  Controls that use renderers
         * delegate one or more of the following API methods to the renderer:
         * <ul>
         *    <li>{@code createDom} - renders the DOM for the component
         *    <li>{@code canDecorate} - determines whether an element can be decorated
         *        by the component
         *    <li>{@code decorate} - decorates an existing element with the component
         *    <li>{@code setState} - updates the appearance of the component based on
         *        its state
         *    <li>{@code getContent} - returns the component's content
         *    <li>{@code setContent} - sets the component's content
         * </ul>
         * Controls are stateful; renderers, on the other hand, should be stateless and
         * reusable.
         * @constructor
         */
        constructor();
    
        /**
         * Returns the ARIA role to be applied to the control.
         * See http://wiki/Main/ARIA for more info.
         * @return {goog.a11y.aria.Role|undefined} ARIA role.
         */
        getAriaRole(): any /*goog.a11y.aria.Role|any (undefined)*/;
    
        /**
         * Returns the control's contents wrapped in a DIV, with the renderer's own
         * CSS class and additional state-specific classes applied to it.
         * @param {goog.ui.Control} control Control to render.
         * @return {Element} Root element for the control.
         */
        createDom(control: goog.ui.Control): Element;
    
        /**
         * Takes the control's root element and returns the parent element of the
         * control's contents.  Since by default controls are rendered as a single
         * DIV, the default implementation returns the element itself.  Subclasses
         * with more complex DOM structures must override this method as needed.
         * @param {Element} element Root element of the control whose content element
         *     is to be returned.
         * @return {Element} The control's content element.
         */
        getContentElement(element: Element): Element;
    
        /**
         * Updates the control's DOM by adding or removing the specified class name
         * to/from its root element. May add additional combined classes as needed in
         * IE6 and lower. Because of this, subclasses should use this method when
         * modifying class names on the control's root element.
         * @param {goog.ui.Control|Element} control Control instance (or root element)
         *     to be updated.
         * @param {string} className CSS class name to add or remove.
         * @param {boolean} enable Whether to add or remove the class name.
         */
        enableClassName(control: any /*goog.ui.Control|Element*/, className: string, enable: boolean): void;
    
        /**
         * Updates the control's DOM by adding or removing the specified extra class
         * name to/from its element.
         * @param {goog.ui.Control} control Control to be updated.
         * @param {string} className CSS class name to add or remove.
         * @param {boolean} enable Whether to add or remove the class name.
         */
        enableExtraClassName(control: goog.ui.Control, className: string, enable: boolean): void;
    
        /**
         * Returns true if this renderer can decorate the element, false otherwise.
         * The default implementation always returns true.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Default implementation of {@code decorate} for {@link goog.ui.Control}s.
         * Initializes the control's ID, content, and state based on the ID of the
         * element, its child nodes, and its CSS classes, respectively.  Returns the
         * element.
         * @param {goog.ui.Control} control Control instance to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         */
        decorate(control: goog.ui.Control, element: Element): Element;
    
        /**
         * Initializes the control's DOM by configuring properties that can only be set
         * after the DOM has entered the document.  This implementation sets up BiDi
         * and keyboard focus.  Called from {@link goog.ui.Control#enterDocument}.
         * @param {goog.ui.Control} control Control whose DOM is to be initialized
         *     as it enters the document.
         */
        initializeDom(control: goog.ui.Control): void;
    
        /**
         * Sets the element's ARIA role.
         * @param {Element} element Element to update.
         * @param {?goog.a11y.aria.Role=} opt_preferredRole The preferred ARIA role.
         */
        setAriaRole(element: Element, opt_preferredRole?: goog.a11y.aria.Role): void;
    
        /**
         * Sets the element's ARIA attributes, including distinguishing between
         * universally supported ARIA properties and ARIA states that are only
         * supported by certain ARIA roles. Only attributes which are initialized to be
         * true will be set.
         * @param {!goog.ui.Control} control Control whose ARIA state will be updated.
         * @param {!Element} element Element whose ARIA state is to be updated.
         */
        setAriaStates(control: goog.ui.Control, element: Element): void;
    
        /**
         * Allows or disallows text selection within the control's DOM.
         * @param {Element} element The control's root element.
         * @param {boolean} allow Whether the element should allow text selection.
         */
        setAllowTextSelection(element: Element, allow: boolean): void;
    
        /**
         * Applies special styling to/from the control's element if it is rendered
         * right-to-left, and removes it if it is rendered left-to-right.
         * @param {Element} element The control's root element.
         * @param {boolean} rightToLeft Whether the component is rendered
         *     right-to-left.
         */
        setRightToLeft(element: Element, rightToLeft: boolean): void;
    
        /**
         * Returns true if the control's key event target supports keyboard focus
         * (based on its {@code tabIndex} attribute), false otherwise.
         * @param {goog.ui.Control} control Control whose key event target is to be
         *     checked.
         * @return {boolean} Whether the control's key event target is focusable.
         */
        isFocusable(control: goog.ui.Control): boolean;
    
        /**
         * Updates the control's key event target to make it focusable or non-focusable
         * via its {@code tabIndex} attribute.  Does nothing if the control doesn't
         * support the {@code FOCUSED} state, or if it has no key event target.
         * @param {goog.ui.Control} control Control whose key event target is to be
         *     updated.
         * @param {boolean} focusable Whether to enable keyboard focus support on the
         *     control's key event target.
         */
        setFocusable(control: goog.ui.Control, focusable: boolean): void;
    
        /**
         * Shows or hides the element.
         * @param {Element} element Element to update.
         * @param {boolean} visible Whether to show the element.
         */
        setVisible(element: Element, visible: boolean): void;
    
        /**
         * Updates the appearance of the control in response to a state change.
         * @param {goog.ui.Control} control Control instance to update.
         * @param {goog.ui.Component.State} state State to enable or disable.
         * @param {boolean} enable Whether the control is entering or exiting the state.
         */
        setState(control: goog.ui.Control, state: goog.ui.Component.State, enable: boolean): void;
    
        /**
         * Updates the element's ARIA (accessibility) attributes , including
         * distinguishing between universally supported ARIA properties and ARIA states
         * that are only supported by certain ARIA roles.
         * @param {Element} element Element whose ARIA state is to be updated.
         * @param {goog.ui.Component.State} state Component state being enabled or
         *     disabled.
         * @param {boolean} enable Whether the state is being enabled or disabled.
         * @protected
         */
        updateAriaState(element: Element, state: goog.ui.Component.State, enable: boolean): void;
    
        /**
         * Takes a control's root element, and sets its content to the given text
         * caption or DOM structure.  The default implementation replaces the children
         * of the given element.  Renderers that create more complex DOM structures
         * must override this method accordingly.
         * @param {Element} element The control's root element.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to be
         *     set as the control's content. The DOM nodes will not be cloned, they
         *     will only moved under the content element of the control.
         */
        setContent(element: Element, content: goog.ui.ControlContent): void;
    
        /**
         * Returns the element within the component's DOM that should receive keyboard
         * focus (null if none).  The default implementation returns the control's root
         * element.
         * @param {goog.ui.Control} control Control whose key event target is to be
         *     returned.
         * @return {Element} The key event target.
         */
        getKeyEventTarget(control: goog.ui.Control): Element;
    
        /**
         * Returns the CSS class name to be applied to the root element of all
         * components rendered or decorated using this renderer.  The class name
         * is expected to uniquely identify the renderer class, i.e. no two
         * renderer classes are expected to share the same CSS class name.
         * @return {string} Renderer-specific CSS class name.
         */
        getCssClass(): string;
    
        /**
         * Returns an array of combinations of classes to apply combined class names for
         * in IE6 and below. See {@link IE6_CLASS_COMBINATIONS} for more detail. This
         * method doesn't reference {@link IE6_CLASS_COMBINATIONS} so that it can be
         * compiled out, but subclasses should return their IE6_CLASS_COMBINATIONS
         * static constant instead.
         * @return {Array.<Array.<string>>} Array of class name combinations.
         */
        getIe6ClassCombinations(): string[][];
    
        /**
         * Returns the name of a DOM structure-specific CSS class to be applied to the
         * root element of all components rendered or decorated using this renderer.
         * Unlike the class name returned by {@link #getCssClass}, the structural class
         * name may be shared among different renderers that generate similar DOM
         * structures.  The structural class name also serves as the basis of derived
         * class names used to identify and style structural elements of the control's
         * DOM, as well as the basis for state-specific class names.  The default
         * implementation returns the same class name as {@link #getCssClass}, but
         * subclasses are expected to override this method as needed.
         * @return {string} DOM structure-specific CSS class name (same as the renderer-
         *     specific CSS class name by default).
         */
        getStructuralCssClass(): string;
    
        /**
         * Returns all CSS class names applicable to the given control, based on its
         * state.  The return value is an array of strings containing
         * <ol>
         *   <li>the renderer-specific CSS class returned by {@link #getCssClass},
         *       followed by
         *   <li>the structural CSS class returned by {@link getStructuralCssClass} (if
         *       different from the renderer-specific CSS class), followed by
         *   <li>any state-specific classes returned by {@link #getClassNamesForState},
         *       followed by
         *   <li>any extra classes returned by the control's {@code getExtraClassNames}
         *       method and
         *   <li>for IE6 and lower, additional combined classes from
         *       {@link getAppliedCombinedClassNames_}.
         * </ol>
         * Since all controls have at least one renderer-specific CSS class name, this
         * method is guaranteed to return an array of at least one element.
         * @param {goog.ui.Control} control Control whose CSS classes are to be
         *     returned.
         * @return {Array.<string>} Array of CSS class names applicable to the control.
         * @protected
         */
        getClassNames(control: goog.ui.Control): string[];
    
        /**
         * Takes a bit mask of {@link goog.ui.Component.State}s, and returns an array
         * of the appropriate class names representing the given state, suitable to be
         * applied to the root element of a component rendered using this renderer, or
         * null if no state-specific classes need to be applied.  This default
         * implementation uses the renderer's {@link getClassForState} method to
         * generate each state-specific class.
         * @param {number} state Bit mask of component states.
         * @return {!Array.<string>} Array of CSS class names representing the given
         *     state.
         * @protected
         */
        getClassNamesForState(state: number): string[];
    
        /**
         * Takes a single {@link goog.ui.Component.State}, and returns the
         * corresponding CSS class name (null if none).
         * @param {goog.ui.Component.State} state Component state.
         * @return {string|undefined} CSS class representing the given state (undefined
         *     if none).
         * @protected
         */
        getClassForState(state: goog.ui.Component.State): any /*string|any (undefined)*/;
    
        /**
         * Takes a single CSS class name which may represent a component state, and
         * returns the corresponding component state (0x00 if none).
         * @param {string} className CSS class name, possibly representing a component
         *     state.
         * @return {goog.ui.Component.State} state Component state corresponding
         *     to the given CSS class (0x00 if none).
         * @protected
         */
        getStateFromClass(className: string): goog.ui.Component.State;
    }

    /**
     * Displays and edits the value of a cookie.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class CookieEditor extends goog.ui.Component {
        /**
         * Displays and edits the value of a cookie.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         * @final
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the cookie which this component will edit.
         * @param {string} cookieKey Cookie key.
         */
        selectCookie(cookieKey: string): void;
    
        /** @override */
        canDecorate(): void;
    
        /** @override */
        createDom(): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Custom renderer for {@link goog.ui.Button}s. Css3 buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     *
     * @constructor
     * @extends {goog.ui.ButtonRenderer}
     * @final
     */
    class Css3ButtonRenderer extends goog.ui.ButtonRenderer {
        /**
         * Custom renderer for {@link goog.ui.Button}s. Css3 buttons can contain
         * almost arbitrary HTML content, will flow like inline elements, but can be
         * styled like block-level elements.
         *
         * @constructor
         * @extends {goog.ui.ButtonRenderer}
         * @final
         */
        constructor();
    
        /** @override */
        getContentElement(): void;
    
        /**
         * Returns the button's contents wrapped in the following DOM structure:
         *    <div class="goog-inline-block goog-css3-button">
         *      Contents...
         *    </div>
         * Overrides {@link goog.ui.ButtonRenderer#createDom}.
         * @param {goog.ui.Control} control goog.ui.Button to render.
         * @return {Element} Root element for the button.
         * @override
         */
        createDom(control: goog.ui.Control): Element;
    
        /**
         * Returns true if this renderer can decorate the element.  Overrides
         * {@link goog.ui.ButtonRenderer#canDecorate} by returning true if the
         * element is a DIV, false otherwise.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /** @override */
        decorate(): void;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * Custom renderer for {@link goog.ui.MenuButton}s. Css3 buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     *
     * @constructor
     * @extends {goog.ui.MenuButtonRenderer}
     * @final
     */
    class Css3MenuButtonRenderer extends goog.ui.MenuButtonRenderer {
        /**
         * Custom renderer for {@link goog.ui.MenuButton}s. Css3 buttons can contain
         * almost arbitrary HTML content, will flow like inline elements, but can be
         * styled like block-level elements.
         *
         * @constructor
         * @extends {goog.ui.MenuButtonRenderer}
         * @final
         */
        constructor();
    
        /** @override */
        getContentElement(): void;
    
        /**
         * Returns true if this renderer can decorate the element.  Overrides
         * {@link goog.ui.MenuButtonRenderer#canDecorate} by returning true if the
         * element is a DIV, false otherwise.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Takes a text caption or existing DOM structure, and returns the content
         * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
         *  <div class="goog-inline-block goog-css3-button goog-css3-menu-button">
         *    <div class="goog-css3-button-caption">Contents...</div>
         *    <div class="goog-css3-button-dropdown"></div>
         *  </div>
         *
         * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
         * by subclasses.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
         *     in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Pseudo-rounded-corner box containing the content.
         * @override
         */
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * A custom button control.  Identical to {@link goog.ui.Button}, except it
     * defaults its renderer to {@link goog.ui.CustomButtonRenderer}.  One could
     * just as easily pass {@code goog.ui.CustomButtonRenderer.getInstance()} to
     * the {@link goog.ui.Button} constructor and get the same result.  Provided
     * for convenience.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *    structure to display as the button's caption.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
     *    render or decorate the button; defaults to
     *    {@link goog.ui.CustomButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *    document interaction.
     * @constructor
     * @extends {goog.ui.Button}
     */
    class CustomButton extends goog.ui.Button {
        /**
         * A custom button control.  Identical to {@link goog.ui.Button}, except it
         * defaults its renderer to {@link goog.ui.CustomButtonRenderer}.  One could
         * just as easily pass {@code goog.ui.CustomButtonRenderer.getInstance()} to
         * the {@link goog.ui.Button} constructor and get the same result.  Provided
         * for convenience.
         *
         * @param {goog.ui.ControlContent} content Text caption or existing DOM
         *    structure to display as the button's caption.
         * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
         *    render or decorate the button; defaults to
         *    {@link goog.ui.CustomButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *    document interaction.
         * @constructor
         * @extends {goog.ui.Button}
         */
        constructor(content: goog.ui.ControlContent, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * Custom renderer for {@link goog.ui.Button}s.  Custom buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     *
     * @constructor
     * @extends {goog.ui.ButtonRenderer}
     */
    class CustomButtonRenderer extends goog.ui.ButtonRenderer {
        /**
         * Custom renderer for {@link goog.ui.Button}s.  Custom buttons can contain
         * almost arbitrary HTML content, will flow like inline elements, but can be
         * styled like block-level elements.
         *
         * @constructor
         * @extends {goog.ui.ButtonRenderer}
         */
        constructor();
    
        /**
         * Returns the button's contents wrapped in the following DOM structure:
         *    <div class="goog-inline-block goog-custom-button">
         *      <div class="goog-inline-block goog-custom-button-outer-box">
         *        <div class="goog-inline-block goog-custom-button-inner-box">
         *          Contents...
         *        </div>
         *      </div>
         *    </div>
         * Overrides {@link goog.ui.ButtonRenderer#createDom}.
         * @param {goog.ui.Control} control goog.ui.Button to render.
         * @return {Element} Root element for the button.
         * @override
         */
        createDom(control: goog.ui.Control): Element;
    
        /**
         * Returns the ARIA role to be applied to custom buttons.
         * @return {goog.a11y.aria.Role|undefined} ARIA role.
         * @override
         */
        getAriaRole(): any /*goog.a11y.aria.Role|any (undefined)*/;
    
        /**
         * Takes the button's root element and returns the parent element of the
         * button's contents.  Overrides the superclass implementation by taking
         * the nested DIV structure of custom buttons into account.
         * @param {Element} element Root element of the button whose content
         *     element is to be returned.
         * @return {Element} The button's content element (if any).
         * @override
         */
        getContentElement(element: Element): Element;
    
        /**
         * Takes a text caption or existing DOM structure, and returns the content
         * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
         *  <div class="goog-inline-block goog-custom-button-outer-box">
         *    <div class="goog-inline-block goog-custom-button-inner-box">
         *      Contents...
         *    </div>
         *  </div>
         * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
         * by subclasses.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
         *     in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Pseudo-rounded-corner box containing the content.
         */
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns true if this renderer can decorate the element.  Overrides
         * {@link goog.ui.ButtonRenderer#canDecorate} by returning true if the
         * element is a DIV, false otherwise.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Check if the button's element has a box structure.
         * @param {goog.ui.Button} button Button instance whose structure is being
         *     checked.
         * @param {Element} element Element of the button.
         * @return {boolean} Whether the element has a box structure.
         * @protected
         */
        hasBoxStructure(button: goog.ui.Button, element: Element): boolean;
    
        /**
         * Takes an existing element and decorates it with the custom button control.
         * Initializes the control's ID, content, tooltip, value, and state based
         * on the ID of the element, its child nodes, and its CSS classes, respectively.
         * Returns the element.  Overrides {@link goog.ui.ButtonRenderer#decorate}.
         * @param {goog.ui.Control} control Button instance to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(control: goog.ui.Control, element: Element): Element;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * A custom color palette is a grid of color swatches and a button that allows
     * the user to add additional colors to the palette
     *
     * @param {Array.<string>} initColors Array of initial colors to populate the
     *     palette with.
     * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
     *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.ColorPalette}
     * @final
     */
    class CustomColorPalette extends goog.ui.ColorPalette {
        /**
         * A custom color palette is a grid of color swatches and a button that allows
         * the user to add additional colors to the palette
         *
         * @param {Array.<string>} initColors Array of initial colors to populate the
         *     palette with.
         * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
         *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.ColorPalette}
         * @final
         */
        constructor(initColors: string[], opt_renderer?: goog.ui.PaletteRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns an array of DOM nodes for each color, and an additional cell with a
         * '+'.
         * @return {Array.<Node>} Array of div elements.
         * @override
         */
        createColorNodes(): Node[];
    
        /**
         * @override
         * @param {goog.events.Event} e Mouse or key event that triggered the action.
         * @return {boolean} True if the action was allowed to proceed, false otherwise.
         */
        performActionInternal(e: goog.events.Event): boolean;
    
        /**
         * Prompts the user to enter a custom color.  Currently uses a window.prompt
         * but could be updated to use a dialog box with a WheelColorPalette.
         */
        promptForCustomColor(): void;
    }

    /**
     * DatePicker widget. Allows a single date to be selected from a calendar like
     * view.
     *
     * @param {goog.date.Date|Date=} opt_date Date to initialize the date picker
     *     with, defaults to the current date.
     * @param {Object=} opt_dateTimeSymbols Date and time symbols to use.
     *     Defaults to goog.i18n.DateTimeSymbols if not set.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.DatePickerRenderer=} opt_renderer Optional Date picker
     *     renderer.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class DatePicker extends goog.ui.Component {
        /**
         * DatePicker widget. Allows a single date to be selected from a calendar like
         * view.
         *
         * @param {goog.date.Date|Date=} opt_date Date to initialize the date picker
         *     with, defaults to the current date.
         * @param {Object=} opt_dateTimeSymbols Date and time symbols to use.
         *     Defaults to goog.i18n.DateTimeSymbols if not set.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {goog.ui.DatePickerRenderer=} opt_renderer Optional Date picker
         *     renderer.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_date?: any /*goog.date.Date|Date*/, opt_dateTimeSymbols?: Object, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.DatePickerRenderer);
    
        /**
         * @deprecated Use isInDocument.
         */
        isCreated: any /*missing*/;
    
        /**
         * @return {number} The first day of week, 0 = Monday, 6 = Sunday.
         */
        getFirstWeekday(): number;
    
        /**
         * Returns the class name associated with specified weekday.
         * @param {number} wday The week day number to get the class name for.
         * @return {string} The class name associated with specified weekday.
         */
        getWeekdayClass(wday: number): string;
    
        /**
         * @return {boolean} Whether a fixed number of weeks should be showed. If not
         *     only weeks for the current month will be shown.
         */
        getShowFixedNumWeeks(): boolean;
    
        /**
         * @return {boolean} Whether a days from the previous and/or next month should
         *     be shown.
         */
        getShowOtherMonths(): boolean;
    
        /**
         * @return {boolean} Whether a the extra week(s) added always should be at the
         *     end. Only applicable if a fixed number of weeks are shown.
         */
        getExtraWeekAtEnd(): boolean;
    
        /**
         * @return {boolean} Whether week numbers should be shown.
         */
        getShowWeekNum(): boolean;
    
        /**
         * @return {boolean} Whether weekday names should be shown.
         */
        getShowWeekdayNames(): boolean;
    
        /**
         * @return {boolean} Whether none is a valid selection.
         */
        getAllowNone(): boolean;
    
        /**
         * @return {boolean} Whether the today button should be shown.
         */
        getShowToday(): boolean;
    
        /**
         * Returns base CSS class. This getter is used to get base CSS class part.
         * All CSS class names in component are created as:
         *   goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
         * @return {string} Base CSS class.
         */
        getBaseCssClass(): string;
    
        /**
         * Sets the first day of week
         *
         * @param {number} wday Week day, 0 = Monday, 6 = Sunday.
         */
        setFirstWeekday(wday: number): void;
    
        /**
         * Sets class name associated with specified weekday.
         *
         * @param {number} wday Week day, 0 = Monday, 6 = Sunday.
         * @param {string} className Class name.
         */
        setWeekdayClass(wday: number, className: string): void;
    
        /**
         * Sets whether a fixed number of weeks should be showed. If not only weeks
         * for the current month will be showed.
         *
         * @param {boolean} b Whether a fixed number of weeks should be showed.
         */
        setShowFixedNumWeeks(b: boolean): void;
    
        /**
         * Sets whether a days from the previous and/or next month should be shown.
         *
         * @param {boolean} b Whether a days from the previous and/or next month should
         *     be shown.
         */
        setShowOtherMonths(b: boolean): void;
    
        /**
         * Sets the range of dates which may be selected by the user.
         *
         * @param {goog.date.DateRange} dateRange The range of selectable dates.
         */
        setUserSelectableDateRange(dateRange: goog.date.DateRange): void;
    
        /**
         * Sets whether the picker should use a simple navigation menu that only
         * contains controls for navigating to the next and previous month. The default
         * navigation menu contains controls for navigating to the next/previous month,
         * next/previous year, and menus for jumping to specific months and years.
         *
         * @param {boolean} b Whether to use a simple navigation menu.
         */
        setUseSimpleNavigationMenu(b: boolean): void;
    
        /**
         * Sets whether a the extra week(s) added always should be at the end. Only
         * applicable if a fixed number of weeks are shown.
         *
         * @param {boolean} b Whether a the extra week(s) added always should be at the
         *     end.
         */
        setExtraWeekAtEnd(b: boolean): void;
    
        /**
         * Sets whether week numbers should be shown.
         *
         * @param {boolean} b Whether week numbers should be shown.
         */
        setShowWeekNum(b: boolean): void;
    
        /**
         * Sets whether weekday names should be shown.
         *
         * @param {boolean} b Whether weekday names should be shown.
         */
        setShowWeekdayNames(b: boolean): void;
    
        /**
         * Sets whether the picker uses narrow weekday names ('M', 'T', 'W', ...).
         *
         * The default behavior is to use short names ('Mon', 'Tue', 'Wed', ...).
         *
         * @param {boolean} b Whether to use narrow weekday names.
         */
        setUseNarrowWeekdayNames(b: boolean): void;
    
        /**
         * Sets whether none is a valid selection.
         *
         * @param {boolean} b Whether none is a valid selection.
         */
        setAllowNone(b: boolean): void;
    
        /**
         * Sets whether the today button should be shown.
         *
         * @param {boolean} b Whether the today button should be shown.
         */
        setShowToday(b: boolean): void;
    
        /**
         * Sets the decorator function. The function should have the interface of
         *   {string} f({goog.date.Date});
         * and return a String representing a CSS class to decorate the cell
         * corresponding to the date specified.
         *
         * @param {Function} f The decorator function.
         */
        setDecorator(f: Function): void;
    
        /**
         * Sets whether the date will be printed in long format. In long format, dates
         * such as '1' will be printed as '01'.
         *
         * @param {boolean} b Whethere dates should be printed in long format.
         */
        setLongDateFormat(b: boolean): void;
    
        /**
         * Changes the active month to the previous one.
         */
        previousMonth(): void;
    
        /**
         * Changes the active month to the next one.
         */
        nextMonth(): void;
    
        /**
         * Changes the active year to the previous one.
         */
        previousYear(): void;
    
        /**
         * Changes the active year to the next one.
         */
        nextYear(): void;
    
        /**
         * Selects the current date.
         */
        selectToday(): void;
    
        /**
         * Clears the selection.
         */
        selectNone(): void;
    
        /**
         * @return {goog.date.Date} The active month displayed.
         */
        getActiveMonth(): goog.date.Date;
    
        /**
         * @return {goog.date.Date} The selected date or null if nothing is selected.
         */
        getDate(): goog.date.Date;
    
        /**
         * Sets the selected date.
         *
         * @param {goog.date.Date|Date} date Date to select or null to select nothing.
         */
        setDate(date: any /*goog.date.Date|Date*/): void;
    
        /** @override */
        decorateInternal(): void;
    
        /** @override */
        createDom(): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /**
         * @deprecated Use decorate instead.
         */
        create: any /*missing*/;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Object representing a date picker event.
     *
     * @param {string} type Event type.
     * @param {goog.ui.DatePicker} target Date picker initiating event.
     * @param {goog.date.Date} date Selected date.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class DatePickerEvent extends goog.events.Event {
        /**
         * Object representing a date picker event.
         *
         * @param {string} type Event type.
         * @param {goog.ui.DatePicker} target Date picker initiating event.
         * @param {goog.date.Date} date Selected date.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(type: string, target: goog.ui.DatePicker, date: goog.date.Date);
    }

    /**
     * Default renderer for {@link goog.ui.DatePicker}. Renders the date picker's
     * navigation header and footer.
     *
     * @param {string} baseCssClass Name of base CSS class of the date picker.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper.
     * @constructor
     * @implements {goog.ui.DatePickerRenderer}
     */
    class DefaultDatePickerRenderer implements goog.ui.DatePickerRenderer {
        /**
         * Default renderer for {@link goog.ui.DatePicker}. Renders the date picker's
         * navigation header and footer.
         *
         * @param {string} baseCssClass Name of base CSS class of the date picker.
         * @param {goog.dom.DomHelper=} opt_domHelper DOM helper.
         * @constructor
         * @implements {goog.ui.DatePickerRenderer}
         */
        constructor(baseCssClass: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns the dom helper that is being used on this component.
         * @return {!goog.dom.DomHelper} The dom helper used on this component.
         */
        getDomHelper(): goog.dom.DomHelper;
    
        /**
         * Returns base CSS class. This getter is used to get base CSS class part.
         * All CSS class names in component are created as:
         *   goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
         * @return {string} Base CSS class.
         */
        getBaseCssClass(): string;
    
        /**
         * Render the navigation row (navigating months and maybe years).
         *
         * @param {!Element} row The parent element to render the component into.
         * @param {boolean} simpleNavigation Whether the picker should render a simple
         *     navigation menu that only contains controls for navigating to the next
         *     and previous month. The default navigation menu contains controls for
         *     navigating to the next/previous month, next/previous year, and menus for
         *     jumping to specific months and years.
         * @param {boolean} showWeekNum Whether week numbers should be shown.
         * @param {string} fullDateFormat The full date format.
         *     {@see goog.i18n.DateTimeSymbols}.
         * @override
         */
        renderNavigationRow(row: Element, simpleNavigation: boolean, showWeekNum: boolean, fullDateFormat: string): void;
    
        /**
         * Render the footer row (with select buttons).
         *
         * @param {!Element} row The parent element to render the component into.
         * @param {boolean} showWeekNum Whether week numbers should be shown.
         * @override
         */
        renderFooterRow(row: Element, showWeekNum: boolean): void;
    }

    /**
     * Class for showing simple dialog boxes.
     * The Html structure of the dialog box is:
     * <pre>
     *  Element         Function                Class-name, modal-dialog = default
     * ----------------------------------------------------------------------------
     * - iframe         Iframe mask              modal-dialog-bg
     * - div            Background mask          modal-dialog-bg
     * - div            Dialog area              modal-dialog
     *     - div        Title bar                modal-dialog-title
     *        - span                             modal-dialog-title-text
     *          - text  Title text               N/A
     *        - span                             modal-dialog-title-close
     *          - ??    Close box                N/A
     *     - div        Content area             modal-dialog-content
     *        - ??      User specified content   N/A
     *     - div        Button area              modal-dialog-buttons
     *        - button                           N/A
     *        - button
     *        - ...
     * </pre>
     * @constructor
     * @param {string=} opt_class CSS class name for the dialog element, also used
     *     as a class name prefix for related elements; defaults to modal-dialog.
     *     This should be a single, valid CSS class name.
     * @param {boolean=} opt_useIframeMask Work around windowed controls z-index
     *     issue by using an iframe instead of a div for bg element.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
     *     goog.ui.Component} for semantics.
     * @extends {goog.ui.ModalPopup}
     */
    class Dialog extends goog.ui.ModalPopup {
        /**
         * Class for showing simple dialog boxes.
         * The Html structure of the dialog box is:
         * <pre>
         *  Element         Function                Class-name, modal-dialog = default
         * ----------------------------------------------------------------------------
         * - iframe         Iframe mask              modal-dialog-bg
         * - div            Background mask          modal-dialog-bg
         * - div            Dialog area              modal-dialog
         *     - div        Title bar                modal-dialog-title
         *        - span                             modal-dialog-title-text
         *          - text  Title text               N/A
         *        - span                             modal-dialog-title-close
         *          - ??    Close box                N/A
         *     - div        Content area             modal-dialog-content
         *        - ??      User specified content   N/A
         *     - div        Button area              modal-dialog-buttons
         *        - button                           N/A
         *        - button
         *        - ...
         * </pre>
         * @constructor
         * @param {string=} opt_class CSS class name for the dialog element, also used
         *     as a class name prefix for related elements; defaults to modal-dialog.
         *     This should be a single, valid CSS class name.
         * @param {boolean=} opt_useIframeMask Work around windowed controls z-index
         *     issue by using an iframe instead of a div for bg element.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
         *     goog.ui.Component} for semantics.
         * @extends {goog.ui.ModalPopup}
         */
        constructor(opt_class?: string, opt_useIframeMask?: boolean, opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        getCssClass(): void;
    
        /**
         * Sets the title.
         * @param {string} title The title text.
         */
        setTitle(title: string): void;
    
        /**
         * Gets the title.
         * @return {string} The title.
         */
        getTitle(): string;
    
        /**
         * Allows arbitrary HTML to be set in the content element.
         * TODO(user): Deprecate in favor of setSafeHtmlContent, once developer docs on
         * using goog.html.SafeHtml are in place.
         * @param {string} html Content HTML.
         */
        setContent(html: string): void;
    
        /**
         * Allows arbitrary HTML to be set in the content element.
         * @param {!goog.html.SafeHtml} html Content HTML.
         */
        setSafeHtmlContent(html: goog.html.SafeHtml): void;
    
        /**
         * Gets the content HTML of the content element as a plain string.
         *
         * Note that this method returns the HTML markup that was previously set via
         * setContent(). In particular, the HTML returned by this method does not
         * reflect any changes to the content element's DOM that were made my means
         * other than setContent().
         *
         * @return {string} Content HTML.
         */
        getContent(): string;
    
        /**
         * Gets the content HTML of the content element.
         * @return {goog.html.SafeHtml} Content HTML.
         */
        getSafeHtmlContent(): goog.html.SafeHtml;
    
        /**
         * Returns the dialog's preferred ARIA role. This can be used to override the
         * default dialog role, e.g. with an ARIA role of ALERTDIALOG for a simple
         * warning or confirmation dialog.
         * @return {goog.a11y.aria.Role} This dialog's preferred ARIA role.
         */
        getPreferredAriaRole(): goog.a11y.aria.Role;
    
        /**
         * Sets the dialog's preferred ARIA role. This can be used to override the
         * default dialog role, e.g. with an ARIA role of ALERTDIALOG for a simple
         * warning or confirmation dialog.
         * @param {goog.a11y.aria.Role} role This dialog's preferred ARIA role.
         */
        setPreferredAriaRole(role: goog.a11y.aria.Role): void;
    
        /**
         * Returns the content element so that more complicated things can be done with
         * the content area.  Renders if the DOM is not yet created.  Overrides
         * {@link goog.ui.Component#getContentElement}.
         * @return {Element} The content element.
         * @override
         */
        getContentElement(): Element;
    
        /**
         * Returns the title element so that more complicated things can be done with
         * the title.  Renders if the DOM is not yet created.
         * @return {Element} The title element.
         */
        getTitleElement(): Element;
    
        /**
         * Returns the title text element so that more complicated things can be done
         * with the text of the title.  Renders if the DOM is not yet created.
         * @return {Element} The title text element.
         */
        getTitleTextElement(): Element;
    
        /**
         * Returns the title close element so that more complicated things can be done
         * with the close area of the title.  Renders if the DOM is not yet created.
         * @return {Element} The close box.
         */
        getTitleCloseElement(): Element;
    
        /**
         * Returns the button element so that more complicated things can be done with
         * the button area.  Renders if the DOM is not yet created.
         * @return {Element} The button container element.
         */
        getButtonElement(): Element;
    
        /**
         * Returns the dialog element so that more complicated things can be done with
         * the dialog box.  Renders if the DOM is not yet created.
         * @return {Element} The dialog element.
         */
        getDialogElement(): Element;
    
        /**
         * Returns the background mask element so that more complicated things can be
         * done with the background region.  Renders if the DOM is not yet created.
         * @return {Element} The background mask element.
         * @override
         */
        getBackgroundElement(): Element;
    
        /**
         * Gets the opacity of the background mask.
         * @return {number} Background mask opacity.
         */
        getBackgroundElementOpacity(): number;
    
        /**
         * Sets the opacity of the background mask.
         * @param {number} opacity Background mask opacity.
         */
        setBackgroundElementOpacity(opacity: number): void;
    
        /**
         * Sets the modal property of the dialog. In case the dialog is already
         * inDocument, renders the modal background elements according to the specified
         * modal parameter.
         *
         * Note that non-modal dialogs cannot use an iframe mask.
         *
         * @param {boolean} modal Whether the dialog is modal.
         */
        setModal(modal: boolean): void;
    
        /**
         * @return {boolean} modal Whether the dialog is modal.
         */
        getModal(): boolean;
    
        /**
         * @return {string} The CSS class name for the dialog element.
         */
        getClass(): string;
    
        /**
         * Sets whether the dialog can be dragged.
         * @param {boolean} draggable Whether the dialog can be dragged.
         */
        setDraggable(draggable: boolean): void;
    
        /**
         * Returns a dragger for moving the dialog and adds a class for the move cursor.
         * Defaults to allow dragging of the title only, but can be overridden if
         * different drag targets or dragging behavior is desired.
         * @return {!goog.fx.Dragger} The created dragger instance.
         * @protected
         */
        createDragger(): goog.fx.Dragger;
    
        /**
         * @return {boolean} Whether the dialog is draggable.
         */
        getDraggable(): boolean;
    
        /**
         * Enables or disables dragging.
         * @param {boolean} enabled Whether to enable it.
         * @private.
         */
        setDraggingEnabled_(enabled: boolean): void;
    
        /** @override */
        createDom(): void;
    
        /** @override */
        decorateInternal(): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /**
         * Sets the visibility of the dialog box and moves focus to the
         * default button. Lazily renders the component if needed. After this
         * method returns, isVisible() will always return the new state, even
         * if there is a transition.
         * @param {boolean} visible Whether the dialog should be visible.
         * @override
         */
        setVisible(visible: boolean): void;
    
        /** @override */
        onShow(): void;
    
        /** @override */
        onHide(): void;
    
        /**
         * @return {boolean} Whether this dialog has a title close button.
         */
        getHasTitleCloseButton(): boolean;
    
        /**
         * Sets whether the dialog should have a close button in the title bar. There
         * will always be an element for the title close button, but setting this
         * parameter to false will cause it to be hidden and have no active listener.
         * @param {boolean} b Whether this dialog should have a title close button.
         */
        setHasTitleCloseButton(b: boolean): void;
    
        /**
         * @return {boolean} Whether the escape key should close this dialog.
         */
        isEscapeToCancel(): boolean;
    
        /**
         * @param {boolean} b Whether the escape key should close this dialog.
         */
        setEscapeToCancel(b: boolean): void;
    
        /**
         * Sets whether the dialog should be disposed when it is hidden.  By default
         * dialogs are not disposed when they are hidden.
         * @param {boolean} b Whether the dialog should get disposed when it gets
         *     hidden.
         */
        setDisposeOnHide(b: boolean): void;
    
        /**
         * @return {boolean} Whether the dialog should be disposed when it is hidden.
         */
        getDisposeOnHide(): boolean;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Sets the button set to use.
         * Note: Passing in null will cause no button set to be rendered.
         * @param {goog.ui.Dialog.ButtonSet?} buttons The button set to use.
         */
        setButtonSet(buttons: goog.ui.Dialog.ButtonSet): void;
    
        /**
         * Returns the button set being used.
         * @return {goog.ui.Dialog.ButtonSet?} The button set being used.
         */
        getButtonSet(): goog.ui.Dialog.ButtonSet;
    }

    /**
     * A dimension picker allows the user to visually select a row and column
     * count using their mouse and keyboard.
     *
     * The currently selected dimension is controlled by an ACTION event.  Event
     * listeners may retrieve the selected item using the
     * {@link #getValue} method.
     *
     * @param {goog.ui.DimensionPickerRenderer=} opt_renderer Renderer used to
     *     render or decorate the palette; defaults to
     *     {@link goog.ui.DimensionPickerRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     * @final
     */
    class DimensionPicker extends goog.ui.Control {
        /**
         * A dimension picker allows the user to visually select a row and column
         * count using their mouse and keyboard.
         *
         * The currently selected dimension is controlled by an ACTION event.  Event
         * listeners may retrieve the selected item using the
         * {@link #getValue} method.
         *
         * @param {goog.ui.DimensionPickerRenderer=} opt_renderer Renderer used to
         *     render or decorate the palette; defaults to
         *     {@link goog.ui.DimensionPickerRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Control}
         * @final
         */
        constructor(opt_renderer?: goog.ui.DimensionPickerRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Minimum number of columns to show in the grid.
         * @type {number}
         */
        minColumns: number;
    
        /**
         * Minimum number of rows to show in the grid.
         * @type {number}
         */
        minRows: number;
    
        /**
         * Maximum number of columns to show in the grid.
         * @type {number}
         */
        maxColumns: number;
    
        /**
         * Maximum number of rows to show in the grid.
         * @type {number}
         */
        maxRows: number;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Handles mousemove events.  Determines which palette size was moused over and
         * highlights it.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         * @protected
         */
        handleMouseMove(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles window resize events.  Ensures no scrollbars are introduced by the
         * renderer's mouse catcher.
         * @param {goog.events.Event} e Resize event to handle.
         * @protected
         */
        handleWindowResize(e: goog.events.Event): void;
    
        /**
         * Handle key events if supported, so the user can use the keyboard to
         * manipulate the highlighted rows and columns.
         * @param {goog.events.KeyEvent} e The key event object.
         * @return {boolean} Whether the key event was handled.
         * @override
         */
        handleKeyEvent(e: goog.events.KeyEvent): boolean;
    
        /**
         * @return {goog.math.Size} Current table size shown (columns x rows).
         */
        getSize(): goog.math.Size;
    
        /**
         * @return {!goog.math.Size} size The currently highlighted dimensions.
         */
        getValue(): goog.math.Size;
    
        /**
         * Sets the currently highlighted dimensions. If the dimensions are not valid
         * (not between 1 and the maximum number of columns/rows to show), they will
         * be changed to the closest valid value.
         * @param {(number|!goog.math.Size)} columns The number of columns to highlight,
         *     or a goog.math.Size object containing both.
         * @param {number=} opt_rows The number of rows to highlight.  Can be
         *     omitted when columns is a good.math.Size object.
         */
        setValue(columns: any /*number|goog.math.Size*/, opt_rows?: number): void;
    }

    /**
     * Default renderer for {@link goog.ui.DimensionPicker}s.  Renders the
     * palette as two divs, one with the un-highlighted background, and one with the
     * highlighted background.
     *
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class DimensionPickerRenderer extends goog.ui.ControlRenderer {
        /**
         * Default renderer for {@link goog.ui.DimensionPicker}s.  Renders the
         * palette as two divs, one with the un-highlighted background, and one with the
         * highlighted background.
         *
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /**
         * Overrides {@link goog.ui.ControlRenderer#canDecorate} to allow decorating
         * empty DIVs only.
         * @param {Element} element The element to check.
         * @return {boolean} Whether if the element is an empty div.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Overrides {@link goog.ui.ControlRenderer#decorate} to decorate empty DIVs.
         * @param {goog.ui.Control} control goog.ui.DimensionPicker to decorate.
         * @param {Element} element The element to decorate.
         * @return {Element} The decorated element.
         * @override
         */
        decorate(control: goog.ui.Control, element: Element): Element;
    
        /**
         * Scales various elements in order to update the palette's size.
         * @param {goog.ui.DimensionPicker} palette The palette object.
         * @param {Element} element The element to set the style of.
         */
        updateSize(palette: goog.ui.DimensionPicker, element: Element): void;
    
        /**
         * Creates a div and adds the appropriate contents to it.
         * @param {goog.ui.Control} control Picker to render.
         * @return {Element} Root element for the palette.
         * @override
         */
        createDom(control: goog.ui.Control): Element;
    
        /**
         * Initializes the control's DOM when the control enters the document.  Called
         * from {@link goog.ui.Control#enterDocument}.
         * @param {goog.ui.Control} control Palette whose DOM is to be
         *     initialized as it enters the document.
         * @override
         */
        initializeDom(control: goog.ui.Control): void;
    
        /**
         * Get the element to listen for mouse move events on.
         * @param {goog.ui.DimensionPicker} palette The palette to listen on.
         * @return {Element} The element to listen for mouse move events on.
         */
        getMouseMoveElement(palette: goog.ui.DimensionPicker): Element;
    
        /**
         * Returns the x offset in to the grid for the given mouse x position.
         * @param {goog.ui.DimensionPicker} palette The table size palette.
         * @param {number} x The mouse event x position.
         * @return {number} The x offset in to the grid.
         */
        getGridOffsetX(palette: goog.ui.DimensionPicker, x: number): number;
    
        /**
         * Returns the y offset in to the grid for the given mouse y position.
         * @param {goog.ui.DimensionPicker} palette The table size palette.
         * @param {number} y The mouse event y position.
         * @return {number} The y offset in to the grid.
         */
        getGridOffsetY(palette: goog.ui.DimensionPicker, y: number): number;
    
        /**
         * Sets the highlighted size. Does nothing if the palette hasn't been rendered.
         * @param {goog.ui.DimensionPicker} palette The table size palette.
         * @param {number} columns The number of columns to highlight.
         * @param {number} rows The number of rows to highlight.
         */
        setHighlightedSize(palette: goog.ui.DimensionPicker, columns: number, rows: number): void;
    
        /**
         * Position the mouse catcher such that it receives mouse events past the
         * selectedsize up to the maximum size.  Takes care to not introduce scrollbars.
         * Should be called on enter document and when the window changes size.
         * @param {goog.ui.DimensionPicker} palette The table size palette.
         */
        positionMouseCatcher(palette: goog.ui.DimensionPicker): void;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * Creates a new drag and drop detector.
     * @param {string=} opt_filePath The URL of the page to use for the detector.
     *     It should contain the same contents as dragdropdetector_target.html in
     *     the demos directory.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class DragDropDetector extends goog.events.EventTarget {
        /**
         * Creates a new drag and drop detector.
         * @param {string=} opt_filePath The URL of the page to use for the detector.
         *     It should contain the same contents as dragdropdetector_target.html in
         *     the demos directory.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(opt_filePath?: string);
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Builds a DrilldownRow component, which can overlay a tree
     * structure onto sections of an HTML table.
     *
     * @param {Object=} opt_properties This parameter can contain:
     *   contents:  if present, user data identifying
     *     the information loaded into the row and its children.
     *   loaded: initializes the isLoaded property, defaults to true.
     *   expanded: DrilldownRow expanded or not, default is true.
     *   html: String of HTML, relevant and required for DrilldownRows to be
     *     added as children.  Ignored when decorating an existing table row.
     *   decorator: Function that accepts one DrilldownRow argument, and
     *     should customize and style the row.  The default is to call
     *     goog.ui.DrilldownRow.decorator.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class DrilldownRow extends goog.ui.Component {
        /**
         * Builds a DrilldownRow component, which can overlay a tree
         * structure onto sections of an HTML table.
         *
         * @param {Object=} opt_properties This parameter can contain:
         *   contents:  if present, user data identifying
         *     the information loaded into the row and its children.
         *   loaded: initializes the isLoaded property, defaults to true.
         *   expanded: DrilldownRow expanded or not, default is true.
         *   html: String of HTML, relevant and required for DrilldownRows to be
         *     added as children.  Ignored when decorating an existing table row.
         *   decorator: Function that accepts one DrilldownRow argument, and
         *     should customize and style the row.  The default is to call
         *     goog.ui.DrilldownRow.decorator.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         * @final
         */
        constructor(opt_properties?: Object, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * The base class method calls its superclass method and this
         * drilldown's 'decorator' method as defined in the constructor.
         * @override
         */
        enterDocument(): void;
    
        /** @override */
        createDom(): void;
    
        /**
         * A top-level DrilldownRow decorates a TR element.
         *
         * @param {Element} node The element to test for decorability.
         * @return {boolean} true iff the node is a TR.
         * @override
         */
        canDecorate(node: Element): boolean;
    
        /**
         * Child drilldowns are rendered when needed.
         *
         * @param {goog.ui.Component} child New DrilldownRow child to be added.
         * @param {number} index position to be occupied by the child.
         * @param {boolean=} opt_render true to force immediate rendering.
         * @override
         */
        addChildAt(child: goog.ui.Component, index: number, opt_render?: boolean): void;
    
        /** @override */
        removeChild(): void;
    
        /**
         * Rendering of DrilldownRow's is on need, do not call this directly
         * from application code.
         *
         * Rendering a DrilldownRow places it according to its position in its
         * tree of DrilldownRows.  DrilldownRows cannot be placed any other
         * way so this method does not use any arguments.  This does not call
         * the base class method and does not modify any of this
         * DrilldownRow's children.
         * @override
         */
        render(): void;
    
        /**
         * Finds the numeric index of this child within its parent Component.
         * Throws an exception if it has no parent.
         *
         * @return {number} index of this within the children of the parent Component.
         */
        findIndex(): number;
    
        /**
         * Returns the expanded state of the DrilldownRow.
         *
         * @return {boolean} true iff this is expanded.
         */
        isExpanded(): boolean;
    
        /**
         * Sets the expanded state of this DrilldownRow: makes all children
         * displayable or not displayable corresponding to the expanded state.
         *
         * @param {boolean} expanded whether this should be expanded or not.
         */
        setExpanded(expanded: boolean): void;
    
        /**
         * Returns this DrilldownRow's level in the tree.  Top level is 1.
         *
         * @return {number} depth of this DrilldownRow in its tree of drilldowns.
         */
        getDepth(): number;
    }

    /**
     * Filtered menu class.
     * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render filtered
     *     menu; defaults to {@link goog.ui.MenuRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Menu}
     */
    class FilteredMenu extends goog.ui.Menu {
        /**
         * Filtered menu class.
         * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render filtered
         *     menu; defaults to {@link goog.ui.MenuRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Menu}
         */
        constructor(opt_renderer?: goog.ui.MenuRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        createDom(): void;
    
        /** @override */
        setVisible(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Sets the filter label (the label displayed in the filter input element if no
         * text has been entered).
         * @param {?string} label Label text.
         */
        setFilterLabel(label: string): void;
    
        /**
         * @return {string} The filter label.
         */
        getFilterLabel(): string;
    
        /**
         * Sets the filter string.
         * @param {?string} str Filter string.
         */
        setFilter(str: string): void;
    
        /**
         * Returns the filter string.
         * @return {string} Current filter or an an empty string.
         */
        getFilter(): string;
    
        /**
         * Sets the index of first item that should be affected by the filter. Menu
         * items with a lower index will not be affected by the filter.
         * @param {number} index Index of first item that should be affected by filter.
         */
        setFilterFromIndex(index: number): void;
    
        /**
         * Returns the index of first item that is affected by the filter.
         * @return {number} Index of first item that is affected by filter.
         */
        getFilterFromIndex(): number;
    
        /**
         * Gets a list of items entered in the search box.
         * @return {!Array.<string>} The entered items.
         */
        getEnteredItems(): string[];
    
        /**
         * Sets whether multiple items can be entered comma separated.
         * @param {boolean} b Whether multiple items can be entered.
         */
        setAllowMultiple(b: boolean): void;
    
        /**
         * @return {boolean} Whether multiple items can be entered comma separated.
         */
        getAllowMultiple(): boolean;
    
        /**
         * Sets whether the specified child should be affected (shown/hidden) by the
         * filter criteria.
         * @param {goog.ui.Component} child Child to change.
         * @param {boolean} persistent Whether the child should be persistent.
         */
        setPersistentVisibility(child: goog.ui.Component, persistent: boolean): void;
    
        /**
         * Returns whether the specified child should be affected (shown/hidden) by the
         * filter criteria.
         * @param {goog.ui.Component} child Menu item to check.
         * @return {boolean} Whether the menu item is persistent.
         */
        hasPersistentVisibility(child: goog.ui.Component): boolean;
    
        /**
         * Handles filter input events.
         * @param {goog.events.BrowserEvent} e The event object.
         */
        handleFilterEvent(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles the menu's behavior for a key event. The highlighted menu item will
         * be given the opportunity to handle the key behavior.
         * @param {goog.events.KeyEvent} e A browser event.
         * @return {boolean} Whether the event was handled.
         * @override
         */
        handleKeyEventInternal(e: goog.events.KeyEvent): boolean;
    
        /**
         * Sets the highlighted index, unless the HIGHLIGHT event is intercepted and
         * cancelled.  -1 = no highlight. Also scrolls the menu item into view.
         * @param {number} index Index of menu item to highlight.
         * @override
         */
        setHighlightedIndex(index: number): void;
    
        /** @override */
        getContentElement(): void;
    
        /**
         * Returns the filter input element.
         * @return {Element} Input element.
         */
        getFilterInputElement(): Element;
    
        /** @override */
        decorateInternal(): void;
    }

    /**
     * Class representing a filter observing menu item.
     *
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {*=} opt_model Data/model associated with the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
     * @constructor
     * @extends {goog.ui.MenuItem}
     */
    class FilterObservingMenuItem extends goog.ui.MenuItem {
        /**
         * Class representing a filter observing menu item.
         *
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to
         *     display as the content of the item (use to add icons or styling to
         *     menus).
         * @param {*=} opt_model Data/model associated with the menu item.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
         *     document interactions.
         * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
         * @constructor
         * @extends {goog.ui.MenuItem}
         */
        constructor(content: goog.ui.ControlContent, opt_model?: any, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer);
    
        /** @override */
        enterDocument(): void;
    
        /**
         * Sets the observer functions.
         * @param {Function} f function(goog.ui.FilterObservingMenuItem, string).
         */
        setObserver(f: Function): void;
    
        /**
         * Calls the observer function if one has been specified.
         * @param {?string=} opt_str Filter string.
         */
        callObserver(opt_str?: string): void;
    }

    /**
     * Default renderer for {@link goog.ui.FilterObservingMenuItem}s. Each item has
     * the following structure:
     *    <div class="goog-filterobsmenuitem"><div>...(content)...</div></div>
     *
     * @constructor
     * @extends {goog.ui.MenuItemRenderer}
     * @final
     */
    class FilterObservingMenuItemRenderer extends goog.ui.MenuItemRenderer {
        /**
         * Default renderer for {@link goog.ui.FilterObservingMenuItem}s. Each item has
         * the following structure:
         *    <div class="goog-filterobsmenuitem"><div>...(content)...</div></div>
         *
         * @constructor
         * @extends {goog.ui.MenuItemRenderer}
         * @final
         */
        constructor();
    
        /**
         * Returns the CSS class to be applied to menu items rendered using this
         * renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * Flat renderer for {@link goog.ui.Button}s.  Flat buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     * @constructor
     * @extends {goog.ui.ButtonRenderer}
     */
    class FlatButtonRenderer extends goog.ui.ButtonRenderer {
        /**
         * Flat renderer for {@link goog.ui.Button}s.  Flat buttons can contain
         * almost arbitrary HTML content, will flow like inline elements, but can be
         * styled like block-level elements.
         * @constructor
         * @extends {goog.ui.ButtonRenderer}
         */
        constructor();
    
        /**
         * Returns the control's contents wrapped in a div element, with
         * the renderer's own CSS class and additional state-specific classes applied
         * to it, and the button's disabled attribute set or cleared as needed.
         * Overrides {@link goog.ui.ButtonRenderer#createDom}.
         * @param {goog.ui.Control} button Button to render.
         * @return {!Element} Root element for the button.
         * @override
         */
        createDom(button: goog.ui.Control): Element;
    
        /**
         * Returns the ARIA role to be applied to flat buttons.
         * @return {goog.a11y.aria.Role|undefined} ARIA role.
         * @override
         */
        getAriaRole(): any /*goog.a11y.aria.Role|any (undefined)*/;
    
        /**
         * Returns true if this renderer can decorate the element.  Overrides
         * {@link goog.ui.ButtonRenderer#canDecorate} by returning true if the
         * element is a DIV, false otherwise.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Takes an existing element and decorates it with the flat button control.
         * Initializes the control's ID, content, tooltip, value, and state based
         * on the ID of the element, its child nodes, and its CSS classes, respectively.
         * Returns the element.  Overrides {@link goog.ui.ButtonRenderer#decorate}.
         * @param {goog.ui.Control} button Button instance to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(button: goog.ui.Control, element: Element): Element;
    
        /**
         * Flat buttons can't use the value attribute since they are div elements.
         * Overrides {@link goog.ui.ButtonRenderer#getValue} to prevent trying to
         * access the element's value.
         * @param {Element} element The button control's root element.
         * @return {string} Value not valid for flat buttons.
         * @override
         */
        getValue(element: Element): string;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * Flat Menu Button renderer. Creates a simpler version of
     * {@link goog.ui.MenuButton} that doesn't look like a button and
     * doesn't have rounded corners. Uses just a <div> and looks more like
     * a traditional <select> element.
     * @constructor
     * @extends {goog.ui.FlatButtonRenderer}
     */
    class FlatMenuButtonRenderer extends goog.ui.FlatButtonRenderer {
        /**
         * Flat Menu Button renderer. Creates a simpler version of
         * {@link goog.ui.MenuButton} that doesn't look like a button and
         * doesn't have rounded corners. Uses just a <div> and looks more like
         * a traditional <select> element.
         * @constructor
         * @extends {goog.ui.FlatButtonRenderer}
         */
        constructor();
    
        /**
         * Returns the button's contents wrapped in the following DOM structure:
         *    <div class="goog-inline-block goog-flat-menu-button">
         *        <div class="goog-inline-block goog-flat-menu-button-caption">
         *          Contents...
         *        </div>
         *        <div class="goog-inline-block goog-flat-menu-button-dropdown">
         *          &nbsp;
         *        </div>
         *    </div>
         * Overrides {@link goog.ui.FlatButtonRenderer#createDom}.
         * @param {goog.ui.Control} control Button to render.
         * @return {!Element} Root element for the button.
         * @override
         */
        createDom(control: goog.ui.Control): Element;
    
        /**
         * Takes the button's root element and returns the parent element of the
         * button's contents.
         * @param {Element} element Root element of the button whose content
         * element is to be returned.
         * @return {Element} The button's content element (if any).
         * @override
         */
        getContentElement(element: Element): Element;
    
        /**
         * Takes an element, decorates it with the menu button control, and returns
         * the element.  Overrides {@link goog.ui.CustomButtonRenderer#decorate} by
         * looking for a child element that can be decorated by a menu, and if it
         * finds one, decorates it and attaches it to the menu button.
         * @param {goog.ui.Control} button Menu button to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(button: goog.ui.Control, element: Element): Element;
    
        /**
         * Takes a text caption or existing DOM structure, and returns it wrapped in
         * an appropriately-styled DIV.  Creates the following DOM structure:
         *    <div class="goog-inline-block goog-flat-menu-button-caption">
         *      Contents...
         *    </div>
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
         *     in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Caption element.
         */
        createCaption(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns an appropriately-styled DIV containing a dropdown arrow element.
         * Creates the following DOM structure:
         *    <div class="goog-inline-block goog-flat-menu-button-dropdown">
         *      &nbsp;
         *    </div>
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {!Element} Dropdown element.
         */
        createDropdown(dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * Creates a formpost object.
     * @constructor
     * @extends {goog.ui.Component}
     * @param {goog.dom.DomHelper=} opt_dom The DOM helper.
     * @final
     */
    class FormPost extends goog.ui.Component {
        /**
         * Creates a formpost object.
         * @constructor
         * @extends {goog.ui.Component}
         * @param {goog.dom.DomHelper=} opt_dom The DOM helper.
         * @final
         */
        constructor(opt_dom?: goog.dom.DomHelper);
    
        /** @override */
        createDom(): void;
    
        /**
         * Constructs a POST request and directs the browser as if a form were
         * submitted.
         * @param {Object} parameters Object with parameter values. Values can be
         *     strings, numbers, or arrays of strings or numbers.
         * @param {string=} opt_url The destination URL. If not specified, uses the
         *     current URL for window for the DOM specified in the constructor.
         * @param {string=} opt_target An optional name of a window in which to open the
         *     URL. If not specified, uses the window for the DOM specified in the
         *     constructor.
         */
        post(parameters: Object, opt_url?: string, opt_target?: string): void;
    }

    /**
     * Information on how to decorate a range in the gauge.
     * This is an internal-only class.
     * @param {number} fromValue The range start (minimal) value.
     * @param {number} toValue The range end (maximal) value.
     * @param {string} backgroundColor Color to fill the range background with.
     * @constructor
     * @final
     */
    class GaugeColoredRange {
        /**
         * Information on how to decorate a range in the gauge.
         * This is an internal-only class.
         * @param {number} fromValue The range start (minimal) value.
         * @param {number} toValue The range end (maximal) value.
         * @param {string} backgroundColor Color to fill the range background with.
         * @constructor
         * @final
         */
        constructor(fromValue: number, toValue: number, backgroundColor: string);
    }

    /**
     * A UI component that displays a gauge.
     * A gauge displayes a current value within a round axis that represents a
     * given range.
     * The gauge is built from an external border, and internal border inside it,
     * ticks and labels inside the internal border, and a needle that points to
     * the current value.
     * @param {number} width The width in pixels.
     * @param {number} height The height in pixels.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class Gauge extends goog.ui.Component {
        /**
         * A UI component that displays a gauge.
         * A gauge displayes a current value within a round axis that represents a
         * given range.
         * The gauge is built from an external border, and internal border inside it,
         * ticks and labels inside the internal border, and a needle that points to
         * the current value.
         * @param {number} width The width in pixels.
         * @param {number} height The height in pixels.
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
         *     document we want to render in.
         * @constructor
         * @extends {goog.ui.Component}
         * @final
         */
        constructor(width: number, height: number, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {number} The minimum value of the range.
         */
        getMinimum(): number;
    
        /**
         * Sets the minimum value of the range
         * @param {number} min The minimum value of the range.
         */
        setMinimum(min: number): void;
    
        /**
         * @return {number} The maximum value of the range.
         */
        getMaximum(): number;
    
        /**
         * Sets the maximum number of the range
         * @param {number} max The maximum value of the range.
         */
        setMaximum(max: number): void;
    
        /**
         * Sets the current value range displayed by the gauge.
         * @param {number} value The current value for the gauge. This value
         *     determines the position of the needle of the gauge.
         * @param {string=} opt_formattedValue The string value to show in the gauge.
         *     If not specified, no string value will be displayed.
         */
        setValue(value: number, opt_formattedValue?: string): void;
    
        /**
         * Sets the number of major tick sections and minor tick sections.
         * @param {number} majorUnits The number of major tick sections.
         * @param {number} minorUnits The number of minor tick sections for each major
         *     tick section.
         */
        setTicks(majorUnits: number, minorUnits: number): void;
    
        /**
         * Sets the labels of the major ticks.
         * @param {Array.<string>} tickLabels A text label for each major tick value.
         */
        setMajorTickLabels(tickLabels: string[]): void;
    
        /**
         * Sets the top title of the gauge.
         * The top title is displayed above the center.
         * @param {string} text The top title text.
         */
        setTitleTop(text: string): void;
    
        /**
         * Sets the bottom title of the gauge.
         * The top title is displayed below the center.
         * @param {string} text The bottom title text.
         */
        setTitleBottom(text: string): void;
    
        /**
         * Sets the font for displaying top and bottom titles.
         * @param {goog.graphics.Font} font The font for titles.
         */
        setTitleFont(font: goog.graphics.Font): void;
    
        /**
         * Sets the font for displaying the formatted value.
         * @param {goog.graphics.Font} font The font for displaying the value.
         */
        setValueFont(font: goog.graphics.Font): void;
    
        /**
         * Sets the color theme for drawing the gauge.
         * @param {goog.ui.GaugeTheme} theme The color theme to use.
         */
        setTheme(theme: goog.ui.GaugeTheme): void;
    
        /**
         * Set the background color for a range of values on the gauge.
         * @param {number} fromValue The lower (start) value of the colored range.
         * @param {number} toValue The higher (end) value of the colored range.
         * @param {string} color The color name to paint the range with. For example
         *     'red', '#ffcc00' or constants like goog.ui.Gauge.RED.
         */
        addBackgroundColor(fromValue: number, toValue: number, color: string): void;
    
        /**
         * Creates the DOM representation of the graphics area.
         * @override
         */
        createDom(): void;
    
        /**
         * Redraws the entire gauge.
         * Should be called after theme colors have been changed.
         */
        redraw(): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * A class for the default color theme for a Gauge.
     * Users can extend this class to provide a custom color theme, and apply the
     * custom color theme by calling  {@link goog.ui.Gauge#setTheme}.
     * @constructor
     * @final
     */
    class GaugeTheme {
        /**
         * A class for the default color theme for a Gauge.
         * Users can extend this class to provide a custom color theme, and apply the
         * custom color theme by calling  {@link goog.ui.Gauge#setTheme}.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Returns the stroke for the external border of the gauge.
         * @return {!goog.graphics.Stroke} The stroke to use.
         */
        getExternalBorderStroke(): goog.graphics.Stroke;
    
        /**
         * Returns the fill for the external border of the gauge.
         * @param {number} cx X coordinate of the center of the gauge.
         * @param {number} cy Y coordinate of the center of the gauge.
         * @param {number} r Radius of the gauge.
         * @return {!goog.graphics.Fill} The fill to use.
         */
        getExternalBorderFill(cx: number, cy: number, r: number): goog.graphics.Fill;
    
        /**
         * Returns the stroke for the internal border of the gauge.
         * @return {!goog.graphics.Stroke} The stroke to use.
         */
        getInternalBorderStroke(): goog.graphics.Stroke;
    
        /**
         * Returns the fill for the internal border of the gauge.
         * @param {number} cx X coordinate of the center of the gauge.
         * @param {number} cy Y coordinate of the center of the gauge.
         * @param {number} r Radius of the gauge.
         * @return {!goog.graphics.Fill} The fill to use.
         */
        getInternalBorderFill(cx: number, cy: number, r: number): goog.graphics.Fill;
    
        /**
         * Returns the stroke for the major ticks of the gauge.
         * @return {!goog.graphics.Stroke} The stroke to use.
         */
        getMajorTickStroke(): goog.graphics.Stroke;
    
        /**
         * Returns the stroke for the minor ticks of the gauge.
         * @return {!goog.graphics.Stroke} The stroke to use.
         */
        getMinorTickStroke(): goog.graphics.Stroke;
    
        /**
         * Returns the stroke for the hinge at the center of the gauge.
         * @return {!goog.graphics.Stroke} The stroke to use.
         */
        getHingeStroke(): goog.graphics.Stroke;
    
        /**
         * Returns the fill for the hinge at the center of the gauge.
         * @param {number} cx  X coordinate of the center of the gauge.
         * @param {number} cy  Y coordinate of the center of the gauge.
         * @param {number} r  Radius of the hinge.
         * @return {!goog.graphics.Fill} The fill to use.
         */
        getHingeFill(cx: number, cy: number, r: number): goog.graphics.Fill;
    
        /**
         * Returns the stroke for the gauge needle.
         * @return {!goog.graphics.Stroke} The stroke to use.
         */
        getNeedleStroke(): goog.graphics.Stroke;
    
        /**
         * Returns the fill for the hinge at the center of the gauge.
         * @param {number} cx X coordinate of the center of the gauge.
         * @param {number} cy Y coordinate of the center of the gauge.
         * @param {number} r Radius of the gauge.
         * @return {!goog.graphics.Fill} The fill to use.
         */
        getNeedleFill(cx: number, cy: number, r: number): goog.graphics.Fill;
    
        /**
         * Returns the color for the gauge title.
         * @return {string} The color to use.
         */
        getTitleColor(): string;
    
        /**
         * Returns the color for the gauge value.
         * @return {string} The color to use.
         */
        getValueColor(): string;
    
        /**
         * Returns the color for the labels (formatted values) of tick marks.
         * @return {string} The color to use.
         */
        getTickLabelColor(): string;
    }

    /**
     * Create a hover card object.  Hover cards extend tooltips in that they don't
     * have to be manually attached to each element that can cause them to display.
     * Instead, you can create a function that gets called when the mouse goes over
     * any element on your page, and returns whether or not the hovercard should be
     * shown for that element.
     *
     * Alternatively, you can define a map of tag names to the attribute name each
     * tag should have for that tag to trigger the hover card.  See example below.
     *
     * Hovercards can also be triggered manually by calling
     * {@code triggerForElement}, shown without a delay by calling
     * {@code showForElement}, or triggered over other elements by calling
     * {@code attach}.  For the latter two cases, the application is responsible
     * for calling {@code detach} when finished.
     *
     * HoverCard objects fire a TRIGGER event when the mouse moves over an element
     * that can trigger a hovercard, and BEFORE_SHOW when the hovercard is
     * about to be shown.  Clients can respond to these events and can prevent the
     * hovercard from being triggered or shown.
     *
     * @param {Function|Object} isAnchor Function that returns true if a given
     *     element should trigger the hovercard.  Alternatively, it can be a map of
     *     tag names to the attribute that the tag should have in order to trigger
     *     the hovercard, e.g., {A: 'href'} for all links.  Tag names must be all
     *     upper case; attribute names are case insensitive.
     * @param {boolean=} opt_checkDescendants Use false for a performance gain if
     *     you are sure that none of your triggering elements have child elements.
     *     Default is true.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper to use for
     *     creating and rendering the hovercard element.
     * @param {Document=} opt_triggeringDocument Optional document to use in place
     *     of the one included in the DomHelper for finding triggering elements.
     *     Defaults to the document included in the DomHelper.
     * @constructor
     * @extends {goog.ui.AdvancedTooltip}
     */
    class HoverCard extends goog.ui.AdvancedTooltip {
        /**
         * Create a hover card object.  Hover cards extend tooltips in that they don't
         * have to be manually attached to each element that can cause them to display.
         * Instead, you can create a function that gets called when the mouse goes over
         * any element on your page, and returns whether or not the hovercard should be
         * shown for that element.
         *
         * Alternatively, you can define a map of tag names to the attribute name each
         * tag should have for that tag to trigger the hover card.  See example below.
         *
         * Hovercards can also be triggered manually by calling
         * {@code triggerForElement}, shown without a delay by calling
         * {@code showForElement}, or triggered over other elements by calling
         * {@code attach}.  For the latter two cases, the application is responsible
         * for calling {@code detach} when finished.
         *
         * HoverCard objects fire a TRIGGER event when the mouse moves over an element
         * that can trigger a hovercard, and BEFORE_SHOW when the hovercard is
         * about to be shown.  Clients can respond to these events and can prevent the
         * hovercard from being triggered or shown.
         *
         * @param {Function|Object} isAnchor Function that returns true if a given
         *     element should trigger the hovercard.  Alternatively, it can be a map of
         *     tag names to the attribute that the tag should have in order to trigger
         *     the hovercard, e.g., {A: 'href'} for all links.  Tag names must be all
         *     upper case; attribute names are case insensitive.
         * @param {boolean=} opt_checkDescendants Use false for a performance gain if
         *     you are sure that none of your triggering elements have child elements.
         *     Default is true.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper to use for
         *     creating and rendering the hovercard element.
         * @param {Document=} opt_triggeringDocument Optional document to use in place
         *     of the one included in the DomHelper for finding triggering elements.
         *     Defaults to the document included in the DomHelper.
         * @constructor
         * @extends {goog.ui.AdvancedTooltip}
         */
        constructor(isAnchor: any /*Function|Object*/, opt_checkDescendants?: boolean, opt_domHelper?: goog.dom.DomHelper, opt_triggeringDocument?: Document);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Triggers the hovercard to show after a delay.
         * @param {Element} anchorElement Element that is triggering the hovercard.
         * @param {goog.positioning.AbstractPosition=} opt_pos Position to display
         *     hovercard.
         * @param {Object=} opt_data Data to pass to the onTrigger event.
         */
        triggerForElement(anchorElement: Element, opt_pos?: goog.positioning.AbstractPosition, opt_data?: Object): void;
    
        /**
         * Called when an element triggers the hovercard.  This will return false
         * if an event handler sets preventDefault to true, which will prevent
         * the hovercard from being shown.
         * @param {!goog.ui.HoverCard.TriggerEvent} triggerEvent Event object to use
         *     for trigger event.
         * @return {boolean} Whether hovercard should be shown or cancelled.
         * @protected
         */
        onTrigger(triggerEvent: goog.ui.HoverCard.TriggerEvent): boolean;
    
        /**
         * Abort pending hovercard showing, if any.
         */
        cancelTrigger(): void;
    
        /**
         * This method gets called when we detect that a trigger event will not lead
         * to the hovercard being shown.
         * @protected
         */
        onCancelTrigger(): void;
    
        /**
         * Gets the DOM element that triggered the current hovercard.  Note that in
         * the TRIGGER or CANCEL_TRIGGER events, the current hovercard's anchor may not
         * be the one that caused the event, so use the event's anchor property instead.
         * @return {Element} Object that caused the currently displayed hovercard (or
         *     pending hovercard if none is displayed) to be triggered.
         */
        getAnchorElement(): Element;
    
        /**
         * Make sure we detach from temp anchor when we are done displaying hovercard.
         * @protected
         * @suppress {underscore|visibility}
         * @override
         */
        onHide_(): void;
    
        /**
         * This mouse over event is only received if the anchor is already attached.
         * If it was attached manually, then it may need to be triggered.
         * @param {goog.events.BrowserEvent} event Mouse over event.
         * @override
         */
        handleMouseOver(event: goog.events.BrowserEvent): void;
    
        /**
         * If the mouse moves out of the trigger while we're being triggered, then
         * cancel it.
         * @param {goog.events.BrowserEvent} event Mouse out or blur event.
         * @override
         */
        handleMouseOutAndBlur(event: goog.events.BrowserEvent): void;
    
        /**
         * Called by timer from mouse over handler. If this is called and the hovercard
         * is not shown for whatever reason, then send a cancel trigger event.
         * @param {Element} el Element to show tooltip for.
         * @param {goog.positioning.AbstractPosition=} opt_pos Position to display popup
         *     at.
         * @override
         */
        maybeShow(el: Element, opt_pos?: goog.positioning.AbstractPosition): void;
    
        /**
         * Sets the max number of levels to search up the dom if checking descendants.
         * @param {number} maxSearchSteps Maximum number of levels to search up the
         *     dom if checking descendants.
         */
        setMaxSearchSteps(maxSearchSteps: number): void;
    }

    /**
     * Creates an HSVA palette. Allows a user to select the hue, saturation,
     * value/brightness and alpha/opacity.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {string=} opt_color Optional initial color, without alpha (default is
     *     red).
     * @param {number=} opt_alpha Optional initial alpha (default is 1).
     * @param {string=} opt_class Optional base for creating classnames (default is
     *     'goog-hsva-palette').
     * @extends {goog.ui.HsvPalette}
     * @constructor
     * @final
     */
    class HsvaPalette extends goog.ui.HsvPalette {
        /**
         * Creates an HSVA palette. Allows a user to select the hue, saturation,
         * value/brightness and alpha/opacity.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {string=} opt_color Optional initial color, without alpha (default is
         *     red).
         * @param {number=} opt_alpha Optional initial alpha (default is 1).
         * @param {string=} opt_class Optional base for creating classnames (default is
         *     'goog-hsva-palette').
         * @extends {goog.ui.HsvPalette}
         * @constructor
         * @final
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_color?: string, opt_alpha?: number, opt_class?: string);
    
        /** @override */
        getAlpha(): void;
    
        /**
         * Sets which color is selected and update the UI. The passed color should be
         * in #rrggbb format. The alpha value will be set to 1.
         * @param {number} alpha The selected alpha value, in [0, 1].
         */
        setAlpha(alpha: number): void;
    
        /**
         * Sets which color is selected and update the UI. The passed color should be
         * in #rrggbb format. The alpha value will be set to 1.
         * @param {string} color The selected color.
         * @override
         */
        setColor(color: string): void;
    
        /**
         * Gets the color that is currently selected in this color picker, in #rrggbbaa
         * format.
         * @return {string} The string of the selected color with alpha.
         */
        getColorRgbaHex(): string;
    
        /**
         * Sets which color is selected and update the UI. The passed color should be
         * in #rrggbbaa format. The alpha value will be set to 1.
         * @param {string} color The selected color with alpha.
         */
        setColorRgbaHex(color: string): void;
    
        /** @override */
        createDom(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /** @override */
        updateUi(): void;
    
        /** @override */
        updateInput(): void;
    
        /** @override */
        handleMouseDown(): void;
    
        /** @override */
        handleInput(): void;
    }

    /**
     * Creates an HSV palette. Allows a user to select the hue, saturation and
     * value/brightness.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {string=} opt_color Optional initial color (default is red).
     * @param {string=} opt_class Optional base for creating classnames (default is
     *     goog.getCssName('goog-hsv-palette')).
     * @extends {goog.ui.Component}
     * @constructor
     */
    class HsvPalette extends goog.ui.Component {
        /**
         * Creates an HSV palette. Allows a user to select the hue, saturation and
         * value/brightness.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {string=} opt_color Optional initial color (default is red).
         * @param {string=} opt_class Optional base for creating classnames (default is
         *     goog.getCssName('goog-hsv-palette')).
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_color?: string, opt_class?: string);
    
        /**
         * DOM element representing the value background image.
         * @type {Element}
         * @protected
         */
        valueBackgroundImageElement: Element;
    
        /**
         * DOM element representing the current color swatch.
         * @type {Element}
         * @protected
         */
        swatchElement: Element;
    
        /**
         * DOM element representing the hex color input text field.
         * @type {Element}
         * @protected
         */
        inputElement: Element;
    
        /**
         * Listener key for the mousemove event (during a drag operation).
         * @type {goog.events.Key}
         * @protected
         */
        mouseMoveListener: goog.events.Key;
    
        /**
         * Listener key for the mouseup event (during a drag operation).
         * @type {goog.events.Key}
         * @protected
         */
        mouseUpListener: goog.events.Key;
    
        /**
         * Gets the color that is currently selected in this color picker.
         * @return {string} The string of the selected color.
         */
        getColor(): string;
    
        /**
         * Alpha transparency of the currently selected color, in [0, 1].
         * For the HSV palette this always returns 1. The HSVA palette overrides
         * this method.
         * @return {number} The current alpha value.
         */
        getAlpha(): number;
    
        /**
         * Updates the text entry field.
         * @protected
         */
        updateInput(): void;
    
        /**
         * Sets which color is selected and update the UI.
         * @param {string} color The selected color.
         */
        setColor(color: string): void;
    
        /**
         * Sets which color is selected.
         * @param {string} color The selected color.
         * @protected
         */
        setColorInternal(color: string): void;
    
        /**
         * Alters the hue, saturation, and/or value of the currently selected color and
         * updates the UI.
         * @param {?number=} opt_hue (optional) hue in [0, 1].
         * @param {?number=} opt_saturation (optional) saturation in [0, 1].
         * @param {?number=} opt_value (optional) value in [0, 255].
         */
        setHsv(opt_hue?: number, opt_saturation?: number, opt_value?: number): void;
    
        /**
         * HsvPalettes cannot be used to decorate pre-existing html, since the
         * structure they build is fairly complicated.
         * @param {Element} element Element to decorate.
         * @return {boolean} Returns always false.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /** @override */
        createDom(): void;
    
        /**
         * Renders the color picker inside the provided element. This will override the
         * current content of the element.
         * @override
         */
        enterDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Updates the position, opacity, and styles for the UI representation of the
         * palette.
         * @protected
         */
        updateUi(): void;
    
        /**
         * Handles mousedown events on palette UI elements.
         * @param {goog.events.BrowserEvent} e Event object.
         * @protected
         */
        handleMouseDown(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles mouseup events on the document, which ends a drag operation.
         * @param {goog.events.Event} e Event object.
         * @protected
         */
        handleMouseUp(e: goog.events.Event): void;
    
        /**
         * Handles input events on the hex value input field.
         * @param {goog.events.Event} e Event object.
         * @protected
         */
        handleInput(e: goog.events.Event): void;
    }

    /**
     * Creates a new id generator.
     * @constructor
     * @final
     */
    class IdGenerator {
        /**
         * Creates a new id generator.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Gets the next unique ID.
         * @return {string} The next unique identifier.
         */
        getNextUniqueId(): string;
    }

    /**
     * Event target that will give notification of state changes between active and
     * idle. This class is designed to require few resources while the user is
     * active.
     * @param {number} idleThreshold Amount of time in ms at which we consider the
     *     user has gone idle.
     * @param {goog.ui.ActivityMonitor=} opt_activityMonitor The activity monitor
     *     keeping track of user interaction. Defaults to a default-constructed
     *     activity monitor. If a default activity monitor is used then this class
     *     will dispose of it. If an activity monitor is passed in then the caller
     *     remains responsible for disposing of it.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class IdleTimer extends goog.events.EventTarget {
        /**
         * Event target that will give notification of state changes between active and
         * idle. This class is designed to require few resources while the user is
         * active.
         * @param {number} idleThreshold Amount of time in ms at which we consider the
         *     user has gone idle.
         * @param {goog.ui.ActivityMonitor=} opt_activityMonitor The activity monitor
         *     keeping track of user interaction. Defaults to a default-constructed
         *     activity monitor. If a default activity monitor is used then this class
         *     will dispose of it. If an activity monitor is passed in then the caller
         *     remains responsible for disposing of it.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(idleThreshold: number, opt_activityMonitor?: goog.ui.ActivityMonitor);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * @return {number} the amount of time at which we consider the user has gone
         *     idle in ms.
         */
        getIdleThreshold(): number;
    
        /**
         * @return {goog.ui.ActivityMonitor} the activity monitor keeping track of user
         *     interaction.
         */
        getActivityMonitor(): goog.ui.ActivityMonitor;
    
        /**
         * Returns true if there has been no user action for at least the specified
         * interval, and false otherwise
         * @return {boolean} true if the user is idle, false otherwise.
         */
        isIdle(): boolean;
    }

    /**
     * Controller for an iframe mask. The mask is only valid in the current
     * document, or else the document of the given DOM helper.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper for the relevant
     *     document.
     * @param {goog.structs.Pool=} opt_iframePool An optional source of iframes.
     *     Iframes will be grabbed from the pool when they're needed and returned
     *     to the pool (but still attached to the DOM) when they're done.
     * @constructor
     * @extends {goog.Disposable}
     */
    class IframeMask extends goog.Disposable {
        /**
         * Controller for an iframe mask. The mask is only valid in the current
         * document, or else the document of the given DOM helper.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper for the relevant
         *     document.
         * @param {goog.structs.Pool=} opt_iframePool An optional source of iframes.
         *     Iframes will be grabbed from the pool when they're needed and returned
         *     to the pool (but still attached to the DOM) when they're done.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_iframePool?: goog.structs.Pool);
    
        /**
         * Removes the iframe from the DOM.
         * @override
         * @protected
         */
        disposeInternal(): void;
    
        /**
         * Removes the mask from the screen.
         */
        hideMask(): void;
    
        /**
         * Applies the iframe mask to the screen.
         */
        applyMask(): void;
    
        /**
         * Sets the opacity of the mask. Will take effect the next time the mask
         * is applied.
         * @param {number} opacity A value between 0 and 1, with 1 being
         *     totally opaque.
         */
        setOpacity(opacity: number): void;
    
        /**
         * Sets the z-index of the mask. Will take effect the next time the mask
         * is applied.
         * @param {number} zIndex A z-index value.
         */
        setZIndex(zIndex: number): void;
    
        /**
         * Sets the element to use as the bounds of the mask. Takes effect immediately.
         * @param {Element} snapElement The snap element, which the iframe will be
         *     "snapped" around.
         */
        setSnapElement(snapElement: Element): void;
    
        /**
         * Listens on the specified target, hiding and showing the iframe mask
         * when the given event types are dispatched.
         * @param {goog.events.EventTarget} target The event target to listen on.
         * @param {string} showEvent When this event fires, the mask will be applied.
         * @param {string} hideEvent When this event fires, the mask will be hidden.
         * @param {Element=} opt_snapElement When the mask is applied, it will
         *     automatically snap to this element. If no element is specified, it will
         *     use the default snap element.
         */
        listenOnTarget(target: goog.events.EventTarget, showEvent: string, hideEvent: string, opt_snapElement?: Element): void;
    
        /**
         * Removes all handlers attached by listenOnTarget.
         */
        removeHandlers(): void;
    }

    /**
     * Custom renderer for {@link goog.ui.Button}s. Imageless buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     *
     * @deprecated These contain a lot of unnecessary DOM for modern user agents.
     *     Please use a simpler button renderer like css3buttonrenderer.
     * @constructor
     * @extends {goog.ui.CustomButtonRenderer}
     */
    class ImagelessButtonRenderer extends goog.ui.CustomButtonRenderer {
        /**
         * Custom renderer for {@link goog.ui.Button}s. Imageless buttons can contain
         * almost arbitrary HTML content, will flow like inline elements, but can be
         * styled like block-level elements.
         *
         * @deprecated These contain a lot of unnecessary DOM for modern user agents.
         *     Please use a simpler button renderer like css3buttonrenderer.
         * @constructor
         * @extends {goog.ui.CustomButtonRenderer}
         */
        constructor();
    
        /**
         * Returns the button's contents wrapped in the following DOM structure:
         *    <div class="goog-inline-block goog-imageless-button">
         *      <div class="goog-inline-block goog-imageless-button-outer-box">
         *        <div class="goog-imageless-button-inner-box">
         *          <div class="goog-imageless-button-pos-box">
         *            <div class="goog-imageless-button-top-shadow">&nbsp;</div>
         *            <div class="goog-imageless-button-content">Contents...</div>
         *          </div>
         *        </div>
         *      </div>
         *    </div>
         * @override
         */
        createDom: any /*missing*/;
    
        /** @override */
        getContentElement(): void;
    
        /**
         * Takes a text caption or existing DOM structure, and returns the content
         * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
         *  <div class="goog-inline-block goog-imageless-button-outer-box">
         *    <div class="goog-inline-block goog-imageless-button-inner-box">
         *      <div class="goog-imageless-button-pos">
         *        <div class="goog-imageless-button-top-shadow">&nbsp;</div>
         *        <div class="goog-imageless-button-content">Contents...</div>
         *      </div>
         *    </div>
         *  </div>
         * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
         * by subclasses.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
         *     in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Pseudo-rounded-corner box containing the content.
         * @override
         */
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
        /**
         * Check if the button's element has a box structure.
         * @param {goog.ui.Button} button Button instance whose structure is being
         *     checked.
         * @param {Element} element Element of the button.
         * @return {boolean} Whether the element has a box structure.
         * @protected
         * @override
         */
        hasBoxStructure(button: goog.ui.Button, element: Element): boolean;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * Custom renderer for {@link goog.ui.MenuButton}s. Imageless buttons can
     * contain almost arbitrary HTML content, will flow like inline elements, but
     * can be styled like block-level elements.
     *
     * @deprecated These contain a lot of unnecessary DOM for modern user agents.
     *     Please use a simpler button renderer like css3buttonrenderer.
     * @constructor
     * @extends {goog.ui.MenuButtonRenderer}
     * @final
     */
    class ImagelessMenuButtonRenderer extends goog.ui.MenuButtonRenderer {
        /**
         * Custom renderer for {@link goog.ui.MenuButton}s. Imageless buttons can
         * contain almost arbitrary HTML content, will flow like inline elements, but
         * can be styled like block-level elements.
         *
         * @deprecated These contain a lot of unnecessary DOM for modern user agents.
         *     Please use a simpler button renderer like css3buttonrenderer.
         * @constructor
         * @extends {goog.ui.MenuButtonRenderer}
         * @final
         */
        constructor();
    
        /** @override */
        getContentElement(): void;
    
        /**
         * Returns true if this renderer can decorate the element.  Overrides
         * {@link goog.ui.MenuButtonRenderer#canDecorate} by returning true if the
         * element is a DIV, false otherwise.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Takes a text caption or existing DOM structure, and returns the content
         * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
         *  <div class="goog-inline-block goog-imageless-button">
         *    <div class="goog-inline-block goog-imageless-button-outer-box">
         *      <div class="goog-imageless-button-inner-box">
         *        <div class="goog-imageless-button-pos-box">
         *          <div class="goog-imageless-button-top-shadow">&nbsp;</div>
         *          <div class="goog-imageless-button-content
         *                      goog-imageless-menubutton-caption">Contents...
         *          </div>
         *          <div class="goog-imageless-menubutton-dropdown"></div>
         *        </div>
         *      </div>
         *    </div>
         *  </div>
         * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
         * by subclasses.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
         *     in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {!Element} Pseudo-rounded-corner box containing the content.
         * @override
         */
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
        /**
         * Check if the button's element has a box structure.
         * @param {goog.ui.Button} button Button instance whose structure is being
         *     checked.
         * @param {Element} element Element of the button.
         * @return {boolean} Whether the element has a box structure.
         * @protected
         * @override
         */
        hasBoxStructure(button: goog.ui.Button, element: Element): boolean;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * Input date picker widget.
     *
     * @param {goog.i18n.DateTimeFormat} dateTimeFormatter A formatter instance
     *     used to format the date picker's date for display in the input element.
     * @param {goog.i18n.DateTimeParse} dateTimeParser A parser instance used to
     *     parse the input element's string as a date to set the picker.
     * @param {goog.ui.DatePicker=} opt_datePicker Optional DatePicker.  This
     *     enables the use of a custom date-picker instance.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class InputDatePicker extends goog.ui.Component {
        /**
         * Input date picker widget.
         *
         * @param {goog.i18n.DateTimeFormat} dateTimeFormatter A formatter instance
         *     used to format the date picker's date for display in the input element.
         * @param {goog.i18n.DateTimeParse} dateTimeParser A parser instance used to
         *     parse the input element's string as a date to set the picker.
         * @param {goog.ui.DatePicker=} opt_datePicker Optional DatePicker.  This
         *     enables the use of a custom date-picker instance.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(dateTimeFormatter: goog.i18n.DateTimeFormat, dateTimeParser: goog.i18n.DateTimeParse, opt_datePicker?: goog.ui.DatePicker, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns the PopupDatePicker's internal DatePicker instance.  This can be
         * used to customize the date picker's styling.
         *
         * @return {goog.ui.DatePicker} The internal DatePicker instance.
         */
        getDatePicker(): goog.ui.DatePicker;
    
        /**
         * Returns the PopupDatePicker instance.
         *
         * @return {goog.ui.PopupDatePicker} Popup instance.
         */
        getPopupDatePicker(): goog.ui.PopupDatePicker;
    
        /**
         * Returns the selected date, if any.  Compares the dates from the date picker
         * and the input field, causing them to be synced if different.
         * @return {goog.date.Date?} The selected date, if any.
         */
        getDate(): goog.date.Date;
    
        /**
         * Sets the selected date.  See goog.ui.PopupDatePicker.setDate().
         * @param {goog.date.Date?} date The date to set.
         */
        setDate(date: goog.date.Date): void;
    
        /**
         * Sets the value of the input element.  This can be overridden to support
         * alternative types of input setting.
         *
         * @param {string} value The value to set.
         */
        setInputValue(value: string): void;
    
        /**
         * Returns the value of the input element.  This can be overridden to support
         * alternative types of input getting.
         *
         * @return {string} The input value.
         */
        getInputValue(): string;
    
        /**
         * Creates an input element for use with the popup date picker.
         * @override
         */
        createDom(): void;
    
        /**
         * Sets the element that the PopupDatePicker should be parented to. If not set,
         * defaults to the body element of the page.
         * @param {Element} el The element that the PopupDatePicker should be parented
         *     to.
         */
        setPopupParentElement(el: Element): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /** @override */
        decorateInternal(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * See goog.ui.PopupDatePicker.showPopup().
         * @param {Element} element Reference element for displaying the popup -- popup
         *     will appear at the bottom-left corner of this element.
         */
        showForElement(element: Element): void;
    
        /**
         * See goog.ui.PopupDatePicker.hidePopup().
         */
        hidePopup(): void;
    }

    /**
     * Generic ui event class for events that take a single item like a menu click
     * event.
     *
     * @constructor
     * @extends {goog.events.Event}
     * @param {string} type Event Type.
     * @param {Object} target Reference to the object that is the target
     *                        of this event.
     * @param {Object} item The item that was clicked.
     * @final
     */
    class ItemEvent extends goog.events.Event {
        /**
         * Generic ui event class for events that take a single item like a menu click
         * event.
         *
         * @constructor
         * @extends {goog.events.Event}
         * @param {string} type Event Type.
         * @param {Object} target Reference to the object that is the target
         *                        of this event.
         * @param {Object} item The item that was clicked.
         * @final
         */
        constructor(type: string, target: Object, item: Object);
    }

    /**
     * Component for handling keyboard shortcuts. A shortcut is registered and bound
     * to a specific identifier. Once the shortcut is triggered an event is fired
     * with the identifier for the shortcut. This allows keyboard shortcuts to be
     * customized without modifying the code that listens for them.
     *
     * Supports keyboard shortcuts triggered by a single key, a stroke stroke (key
     * plus at least one modifier) and a sequence of keys or strokes.
     *
     * @param {goog.events.EventTarget|EventTarget} keyTarget Event target that the
     *     key event listener is attached to, typically the applications root
     *     container.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class KeyboardShortcutHandler extends goog.events.EventTarget {
        /**
         * Component for handling keyboard shortcuts. A shortcut is registered and bound
         * to a specific identifier. Once the shortcut is triggered an event is fired
         * with the identifier for the shortcut. This allows keyboard shortcuts to be
         * customized without modifying the code that listens for them.
         *
         * Supports keyboard shortcuts triggered by a single key, a stroke stroke (key
         * plus at least one modifier) and a sequence of keys or strokes.
         *
         * @param {goog.events.EventTarget|EventTarget} keyTarget Event target that the
         *     key event listener is attached to, typically the applications root
         *     container.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(keyTarget: any /*goog.events.EventTarget|EventTarget*/);
    
        /**
         * Sets whether to always prevent the default action when a shortcut event is
         * fired. If false, the default action is prevented only if preventDefault is
         * called on either of the corresponding SHORTCUT_TRIGGERED or SHORTCUT_PREFIX
         * events. If true, the default action is prevented whenever a shortcut event
         * is fired. The default value is true.
         * @param {boolean} alwaysPreventDefault Whether to always call preventDefault.
         */
        setAlwaysPreventDefault(alwaysPreventDefault: boolean): void;
    
        /**
         * Returns whether the default action will always be prevented when a shortcut
         * event is fired. The default value is true.
         * @see #setAlwaysPreventDefault
         * @return {boolean} Whether preventDefault will always be called.
         */
        getAlwaysPreventDefault(): boolean;
    
        /**
         * Sets whether to always stop propagation for the event when fired. If false,
         * the propagation is stopped only if stopPropagation is called on either of the
         * corresponding SHORT_CUT_TRIGGERED or SHORTCUT_PREFIX events. If true, the
         * event is prevented from propagating beyond its target whenever it is fired.
         * The default value is false.
         * @param {boolean} alwaysStopPropagation Whether to always call
         *     stopPropagation.
         */
        setAlwaysStopPropagation(alwaysStopPropagation: boolean): void;
    
        /**
         * Returns whether the event will always be stopped from propagating beyond its
         * target when a shortcut event is fired. The default value is false.
         * @see #setAlwaysStopPropagation
         * @return {boolean} Whether stopPropagation will always be called.
         */
        getAlwaysStopPropagation(): boolean;
    
        /**
         * Sets whether to treat all shortcuts (including modifier shortcuts) as if the
         * keys had been passed to the setGlobalKeys function.
         * @param {boolean} allShortcutsGlobal Whether to treat all shortcuts as global.
         */
        setAllShortcutsAreGlobal(allShortcutsGlobal: boolean): void;
    
        /**
         * Returns whether all shortcuts (including modifier shortcuts) are treated as
         * if the keys had been passed to the setGlobalKeys function.
         * @see #setAllShortcutsAreGlobal
         * @return {boolean} Whether all shortcuts are treated as globals.
         */
        getAllShortcutsAreGlobal(): boolean;
    
        /**
         * Sets whether to treat shortcuts with modifiers as if the keys had been
         * passed to the setGlobalKeys function.  Ignored if you have called
         * setAllShortcutsAreGlobal(true).  Applies only to form elements (not
         * content-editable).
         * @param {boolean} modifierShortcutsGlobal Whether to treat shortcuts with
         *     modifiers as global.
         */
        setModifierShortcutsAreGlobal(modifierShortcutsGlobal: boolean): void;
    
        /**
         * Returns whether shortcuts with modifiers are treated as if the keys had been
         * passed to the setGlobalKeys function.  Ignored if you have called
         * setAllShortcutsAreGlobal(true).  Applies only to form elements (not
         * content-editable).
         * @see #setModifierShortcutsAreGlobal
         * @return {boolean} Whether shortcuts with modifiers are treated as globals.
         */
        getModifierShortcutsAreGlobal(): boolean;
    
        /**
         * Sets whether to treat space key as a shortcut when the focused element is a
         * checkbox, radiobutton or button.
         * @param {boolean} allowSpaceKeyOnButtons Whether to treat space key as a
         *     shortcut when the focused element is a checkbox, radiobutton or button.
         */
        setAllowSpaceKeyOnButtons(allowSpaceKeyOnButtons: boolean): void;
    
        /**
         * Registers a keyboard shortcut.
         * @param {string} identifier Identifier for the task performed by the keyboard
         *                 combination. Multiple shortcuts can be provided for the same
         *                 task by specifying the same identifier.
         * @param {...(number|string|Array.<number>)} var_args See below.
         *
         * param {number} keyCode Numeric code for key
         * param {number=} opt_modifiers Bitmap indicating required modifier keys.
         *                goog.ui.KeyboardShortcutHandler.Modifiers.SHIFT, CONTROL,
         *                ALT, or META.
         *
         * The last two parameters can be repeated any number of times to create a
         * shortcut using a sequence of strokes. Instead of varagrs the second parameter
         * could also be an array where each element would be ragarded as a parameter.
         *
         * A string representation of the shortcut can be supplied instead of the last
         * two parameters. In that case the method only takes two arguments, the
         * identifier and the string.
         *
         * Examples:
         *   g               registerShortcut(str, G_KEYCODE)
         *   Ctrl+g          registerShortcut(str, G_KEYCODE, CTRL)
         *   Ctrl+Shift+g    registerShortcut(str, G_KEYCODE, CTRL | SHIFT)
         *   Ctrl+g a        registerShortcut(str, G_KEYCODE, CTRL, A_KEYCODE)
         *   Ctrl+g Shift+a  registerShortcut(str, G_KEYCODE, CTRL, A_KEYCODE, SHIFT)
         *   g a             registerShortcut(str, G_KEYCODE, NONE, A_KEYCODE)
         *
         * Examples using string representation for shortcuts:
         *   g               registerShortcut(str, 'g')
         *   Ctrl+g          registerShortcut(str, 'ctrl+g')
         *   Ctrl+Shift+g    registerShortcut(str, 'ctrl+shift+g')
         *   Ctrl+g a        registerShortcut(str, 'ctrl+g a')
         *   Ctrl+g Shift+a  registerShortcut(str, 'ctrl+g shift+a')
         *   g a             registerShortcut(str, 'g a').
         */
        registerShortcut(identifier: string, ...var_args: any /*number|string|number[]*/[]): void;
    
        /**
         * Unregisters a keyboard shortcut by keyCode and modifiers or string
         * representation of sequence.
         *
         * param {number} keyCode Numeric code for key
         * param {number=} opt_modifiers Bitmap indicating required modifier keys.
         *                 goog.ui.KeyboardShortcutHandler.Modifiers.SHIFT, CONTROL,
         *                 ALT, or META.
         *
         * The two parameters can be repeated any number of times to create a shortcut
         * using a sequence of strokes.
         *
         * A string representation of the shortcut can be supplied instead see
         * {@link #registerShortcut} for syntax. In that case the method only takes one
         * argument.
         *
         * @param {...(number|string|Array.<number>)} var_args String representation, or
         *     array or list of alternating key codes and modifiers.
         */
        unregisterShortcut(...var_args: any /*number|string|number[]*/[]): void;
    
        /**
         * Verifies if a particular keyboard shortcut is registered already. It has
         * the same interface as the unregistering of shortcuts.
         *
         * param {number} keyCode Numeric code for key
         * param {number=} opt_modifiers Bitmap indicating required modifier keys.
         *                 goog.ui.KeyboardShortcutHandler.Modifiers.SHIFT, CONTROL,
         *                 ALT, or META.
         *
         * The two parameters can be repeated any number of times to create a shortcut
         * using a sequence of strokes.
         *
         * A string representation of the shortcut can be supplied instead see
         * {@link #registerShortcut} for syntax. In that case the method only takes one
         * argument.
         *
         * @param {...(number|string|Array.<number>)} var_args String representation, or
         *     array or list of alternating key codes and modifiers.
         * @return {boolean} Whether the specified keyboard shortcut is registered.
         */
        isShortcutRegistered(...var_args: any /*number|string|number[]*/[]): boolean;
    
        /**
         * Unregisters all keyboard shortcuts.
         */
        unregisterAll(): void;
    
        /**
         * Sets the global keys; keys that are safe to always regarded as shortcuts,
         * even if entered in a textarea or input field.
         * @param {Array.<number>} keys List of keys.
         */
        setGlobalKeys(keys: number[]): void;
    
        /**
         * @return {!Array.<string>} The global keys, i.e. keys that are safe to always
         *     regard as shortcuts, even if entered in a textarea or input field.
         */
        getGlobalKeys(): string[];
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Returns event type for a specific shortcut.
         * @param {string} identifier Identifier for the shortcut task.
         * @return {string} Theh event type.
         */
        getEventType(identifier: string): string;
    
        /**
         * Adds a key event listener that triggers {@link #handleKeyDown_} when keys
         * are pressed.
         * @param {goog.events.EventTarget|EventTarget} keyTarget Event target that the
         *     event listener should be attached to.
         * @protected
         */
        initializeKeyListener(keyTarget: any /*goog.events.EventTarget|EventTarget*/): void;
    
        /**
         * Removes the listener that was added by link {@link #initializeKeyListener}.
         * @protected
         */
        clearKeyListener(): void;
    }

    /**
     * Object representing a keyboard shortcut event.
     * @param {string} type Event type.
     * @param {string} identifier Task identifier for the triggered shortcut.
     * @param {Node|goog.events.EventTarget} target Target the original key press
     *     event originated from.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class KeyboardShortcutEvent extends goog.events.Event {
        /**
         * Object representing a keyboard shortcut event.
         * @param {string} type Event type.
         * @param {string} identifier Task identifier for the triggered shortcut.
         * @param {Node|goog.events.EventTarget} target Target the original key press
         *     event originated from.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(type: string, identifier: string, target: any /*Node|goog.events.EventTarget*/);
    }

    /**
     * This creates the label input object.
     * @param {string=} opt_label The text to show as the label.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class LabelInput extends goog.ui.Component {
        /**
         * This creates the label input object.
         * @param {string=} opt_label The text to show as the label.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(opt_label?: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * The label restore delay after leaving the input.
         * @type {number} Delay for restoring the label.
         * @protected
         */
        labelRestoreDelayMs: number;
    
        /**
         * Creates the DOM nodes needed for the label input.
         * @override
         */
        createDom(): void;
    
        /**
         * Decorates an existing HTML input element as a label input. If the element
         * has a "label" attribute then that will be used as the label property for the
         * label input object.
         * @param {Element} element The HTML input element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * The CSS class name to add to the input when the user has not entered a
         * value.
         */
        LABEL_CLASS_NAME: any /*missing*/;
    
        /**
         * @return {boolean} Whether the control is currently focused on.
         */
        hasFocus(): boolean;
    
        /**
         * @return {boolean} Whether the value has been changed by the user.
         */
        hasChanged(): boolean;
    
        /**
         * Clears the value of the input element without resetting the default text.
         */
        clear(): void;
    
        /**
         * Clears the value of the input element and resets the default text.
         */
        reset(): void;
    
        /**
         * Use this to set the value through script to ensure that the label state is
         * up to date
         * @param {string} s The new value for the input.
         */
        setValue(s: string): void;
    
        /**
         * Returns the current value of the text box, returning an empty string if the
         * search box is the default value
         * @return {string} The value of the input box.
         */
        getValue(): string;
    
        /**
         * Sets the label text.
         * @param {string} label The text to show as the label.
         */
        setLabel(label: string): void;
    
        /**
         * @return {string} The text to show as the label.
         */
        getLabel(): string;
    
        /**
         * This method focuses the input and selects all the text. If the value hasn't
         * changed it will set the value to the label so that the label text is
         * selected.
         */
        focusAndSelect(): void;
    
        /**
         * Enables/Disables the label input.
         * @param {boolean} enabled Whether to enable (true) or disable (false) the
         *     label input.
         */
        setEnabled(enabled: boolean): void;
    
        /**
         * @return {boolean} True if the label input is enabled, false otherwise.
         */
        isEnabled(): boolean;
    }

    /**
     * Link renderer for {@link goog.ui.Button}s.  Link buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     * @constructor
     * @extends {goog.ui.FlatButtonRenderer}
     */
    class LinkButtonRenderer extends goog.ui.FlatButtonRenderer {
        /**
         * Link renderer for {@link goog.ui.Button}s.  Link buttons can contain
         * almost arbitrary HTML content, will flow like inline elements, but can be
         * styled like block-level elements.
         * @constructor
         * @extends {goog.ui.FlatButtonRenderer}
         */
        constructor();
    
        /** @override */
        getCssClass(): void;
    }

    /**
     * Default renderer for {@link goog.ui.menuBar}s, based on {@link
     * goog.ui.ContainerRenderer}.
     * @constructor
     * @extends {goog.ui.ContainerRenderer}
     * @final
     */
    class MenuBarRenderer extends goog.ui.ContainerRenderer {
        /**
         * Default renderer for {@link goog.ui.menuBar}s, based on {@link
         * goog.ui.ContainerRenderer}.
         * @constructor
         * @extends {goog.ui.ContainerRenderer}
         * @final
         */
        constructor();
    
        /**
         * @override
         */
        getCssClass(): void;
    
        /**
         * Returns the default orientation of containers rendered or decorated by this
         * renderer.  This implementation returns {@code HORIZONTAL}.
         * @return {goog.ui.Container.Orientation} Default orientation for containers
         *     created or decorated by this renderer.
         * @override
         */
        getDefaultOrientation(): goog.ui.Container.Orientation;
    }

    /**
     * The MenuBase class provides an abstract base class for different
     * implementations of menu controls.
     *
     * @param {Element=} opt_element A DOM element for the popup.
     * @deprecated Use goog.ui.Menu.
     * @constructor
     * @extends {goog.ui.Popup}
     */
    class MenuBase extends goog.ui.Popup {
        /**
         * The MenuBase class provides an abstract base class for different
         * implementations of menu controls.
         *
         * @param {Element=} opt_element A DOM element for the popup.
         * @deprecated Use goog.ui.Menu.
         * @constructor
         * @extends {goog.ui.Popup}
         */
        constructor(opt_element?: Element);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Called after the menu is shown. Derived classes can override to hook this
         * event but should make sure to call the parent class method.
         *
         * @protected
         * @suppress {underscore|visibility}
         * @override
         */
        onShow_(): void;
    
        /**
         * Called after the menu is hidden. Derived classes can override to hook this
         * event but should make sure to call the parent class method.
         * @param {Object=} opt_target Target of the event causing the hide.
         * @protected
         * @suppress {underscore|visibility}
         * @override
         */
        onHide_(opt_target?: Object): void;
    
        /**
         * Returns the selected item
         *
         * @return {Object} The item selected or null if no item is selected.
         */
        getSelectedItem(): Object;
    
        /**
         * Sets the selected item
         *
         * @param {Object} item The item to select. The type of this item is specific
         *     to the menu class.
         */
        setSelectedItem(item: Object): void;
    
        /**
         * Mouse over handler for the menu. Derived classes should override.
         *
         * @param {goog.events.Event} e The event object.
         * @protected
         */
        onMouseOver(e: goog.events.Event): void;
    
        /**
         * Mouse out handler for the menu. Derived classes should override.
         *
         * @param {goog.events.Event} e The event object.
         * @protected
         */
        onMouseOut(e: goog.events.Event): void;
    
        /**
         * Mouse down handler for the menu. Derived classes should override.
         *
         * @param {!goog.events.Event} e The event object.
         * @protected
         */
        onMouseDown(e: goog.events.Event): void;
    
        /**
         * Mouse up handler for the menu. Derived classes should override.
         *
         * @param {goog.events.Event} e The event object.
         * @protected
         */
        onMouseUp(e: goog.events.Event): void;
    
        /**
         * Key down handler for the menu. Derived classes should override.
         *
         * @param {goog.events.KeyEvent} e The event object.
         * @protected
         */
        onKeyDown(e: goog.events.KeyEvent): void;
    }

    /**
     * A menu button control.  Extends {@link goog.ui.Button} by composing a button
     * with a dropdown arrow and a popup menu.
     *
     * @param {goog.ui.ControlContent=} opt_content Text caption or existing DOM
     *     structure to display as the button's caption (if any).
     * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
     *     decorate the menu button; defaults to {@link goog.ui.MenuButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @param {!goog.ui.MenuRenderer=} opt_menuRenderer Renderer used to render or
     *     decorate the menu; defaults to {@link goog.ui.MenuRenderer}.
     * @constructor
     * @extends {goog.ui.Button}
     */
    class MenuButton extends goog.ui.Button {
        /**
         * A menu button control.  Extends {@link goog.ui.Button} by composing a button
         * with a dropdown arrow and a popup menu.
         *
         * @param {goog.ui.ControlContent=} opt_content Text caption or existing DOM
         *     structure to display as the button's caption (if any).
         * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked.
         * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
         *     decorate the menu button; defaults to {@link goog.ui.MenuButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @param {!goog.ui.MenuRenderer=} opt_menuRenderer Renderer used to render or
         *     decorate the menu; defaults to {@link goog.ui.MenuRenderer}.
         * @constructor
         * @extends {goog.ui.Button}
         */
        constructor(opt_content?: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper, opt_menuRenderer?: goog.ui.MenuRenderer);
    
        /**
         * Sets up event handlers specific to menu buttons.
         * @override
         */
        enterDocument(): void;
    
        /**
         * Removes event handlers specific to menu buttons, and ensures that the
         * attached menu also exits the document.
         * @override
         */
        exitDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Handles mousedown events.  Invokes the superclass implementation to dispatch
         * an ACTIVATE event and activate the button.  Also toggles the visibility of
         * the attached menu.
         * @param {goog.events.Event} e Mouse event to handle.
         * @override
         * @protected
         */
        handleMouseDown(e: goog.events.Event): void;
    
        /**
         * Handles mouseup events.  Invokes the superclass implementation to dispatch
         * an ACTION event and deactivate the button.
         * @param {goog.events.Event} e Mouse event to handle.
         * @override
         * @protected
         */
        handleMouseUp(e: goog.events.Event): void;
    
        /**
         * Performs the appropriate action when the menu button is activated by the
         * user.  Overrides the superclass implementation by not dispatching an {@code
         * ACTION} event, because menu buttons exist only to reveal menus, not to
         * perform actions themselves.  Calls {@link #setActive} to deactivate the
         * button.
         * @param {goog.events.Event} e Mouse or key event that triggered the action.
         * @return {boolean} Whether the action was allowed to proceed.
         * @override
         * @protected
         */
        performActionInternal(e: goog.events.Event): boolean;
    
        /**
         * Handles mousedown events over the document.  If the mousedown happens over
         * an element unrelated to the component, hides the menu.
         * TODO(attila): Reconcile this with goog.ui.Popup (and handle frames/windows).
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         * @protected
         */
        handleDocumentMouseDown(e: goog.events.BrowserEvent): void;
    
        /**
         * Returns true if the given element is to be considered part of the component,
         * even if it isn't a DOM descendant of the component's root element.
         * @param {Element} element Element to test (if any).
         * @return {boolean} Whether the element is considered part of the component.
         * @protected
         */
        containsElement(element: Element): boolean;
    
        /** @override */
        handleKeyEventInternal(): void;
    
        /**
         * Handles {@code ACTION} events dispatched by an activated menu item.
         * @param {goog.events.Event} e Action event to handle.
         * @protected
         */
        handleMenuAction(e: goog.events.Event): void;
    
        /**
         * Handles {@code BLUR} events dispatched by the popup menu by closing it.
         * Only registered if the menu is focusable.
         * @param {goog.events.Event} e Blur event dispatched by a focusable menu.
         */
        handleMenuBlur(e: goog.events.Event): void;
    
        /**
         * Handles blur events dispatched by the button's key event target when it
         * loses keyboard focus by closing the popup menu (unless it is focusable).
         * Only registered if the button is focusable.
         * @param {goog.events.Event} e Blur event dispatched by the menu button.
         * @override
         * @protected
         */
        handleBlur(e: goog.events.Event): void;
    
        /**
         * Returns the menu attached to the button.  If no menu is attached, creates a
         * new empty menu.
         * @return {goog.ui.Menu} Popup menu attached to the menu button.
         */
        getMenu(): goog.ui.Menu;
    
        /**
         * Replaces the menu attached to the button with the argument, and returns the
         * previous menu (if any).
         * @param {goog.ui.Menu?} menu New menu to be attached to the menu button (null
         *     to remove the menu).
         * @return {goog.ui.Menu|undefined} Previous menu (undefined if none).
         */
        setMenu(menu: goog.ui.Menu): any /*goog.ui.Menu|any (undefined)*/;
    
        /**
         * Specify which positioning algorithm to use.
         *
         * This method is preferred over the fine-grained positioning methods like
         * setPositionElement, setAlignMenuToStart, and setScrollOnOverflow. Calling
         * this method will override settings by those methods.
         *
         * @param {goog.positioning.AnchoredPosition} position The position of the
         *     Menu the button. If the position has a null anchor, we will use the
         *     menubutton element as the anchor.
         */
        setMenuPosition(position: goog.positioning.AnchoredPosition): void;
    
        /**
         * Sets an element for anchoring the menu.
         * @param {Element} positionElement New element to use for
         *     positioning the dropdown menu.  Null to use the default behavior
         *     of positioning to this menu button.
         */
        setPositionElement(positionElement: Element): void;
    
        /**
         * Sets a margin that will be applied to the menu's position when it is shown.
         * If null, no margin will be applied.
         * @param {goog.math.Box} margin Margin to apply.
         */
        setMenuMargin(margin: goog.math.Box): void;
    
        /**
         * Adds a new menu item at the end of the menu.
         * @param {goog.ui.MenuItem|goog.ui.MenuSeparator|goog.ui.Control} item Menu
         *     item to add to the menu.
         */
        addItem(item: any /*goog.ui.MenuItem|goog.ui.MenuSeparator|goog.ui.Control*/): void;
    
        /**
         * Adds a new menu item at the specific index in the menu.
         * @param {goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu item to add to the
         *     menu.
         * @param {number} index Index at which to insert the menu item.
         */
        addItemAt(item: any /*goog.ui.MenuItem|goog.ui.MenuSeparator*/, index: number): void;
    
        /**
         * Removes the item from the menu and disposes of it.
         * @param {goog.ui.MenuItem|goog.ui.MenuSeparator} item The menu item to remove.
         */
        removeItem(item: any /*goog.ui.MenuItem|goog.ui.MenuSeparator*/): void;
    
        /**
         * Removes the menu item at a given index in the menu and disposes of it.
         * @param {number} index Index of item.
         */
        removeItemAt(index: number): void;
    
        /**
         * Returns the menu item at a given index.
         * @param {number} index Index of menu item.
         * @return {goog.ui.MenuItem?} Menu item (null if not found).
         */
        getItemAt(index: number): goog.ui.MenuItem;
    
        /**
         * Returns the number of items in the menu (including separators).
         * @return {number} The number of items in the menu.
         */
        getItemCount(): number;
    
        /**
         * Shows/hides the menu button based on the value of the argument.  Also hides
         * the popup menu if the button is being hidden.
         * @param {boolean} visible Whether to show or hide the button.
         * @param {boolean=} opt_force If true, doesn't check whether the component
         *     already has the requested visibility, and doesn't dispatch any events.
         * @return {boolean} Whether the visibility was changed.
         * @override
         */
        setVisible(visible: boolean, opt_force?: boolean): boolean;
    
        /**
         * Enables/disables the menu button based on the value of the argument, and
         * updates its CSS styling.  Also hides the popup menu if the button is being
         * disabled.
         * @param {boolean} enable Whether to enable or disable the button.
         * @override
         */
        setEnabled(enable: boolean): void;
    
        /**
         * @return {boolean} Whether the menu is aligned to the start of the button
         *     (left if the render direction is left-to-right, right if the render
         *     direction is right-to-left).
         */
        isAlignMenuToStart(): boolean;
    
        /**
         * Sets whether the menu is aligned to the start or the end of the button.
         * @param {boolean} alignToStart Whether the menu is to be aligned to the start
         *     of the button (left if the render direction is left-to-right, right if
         *     the render direction is right-to-left).
         */
        setAlignMenuToStart(alignToStart: boolean): void;
    
        /**
         * Sets whether the menu should scroll when it's too big to fix vertically on
         * the screen.  The css of the menu element should have overflow set to auto.
         * Note: Adding or removing items while the menu is open will not work correctly
         * if scrollOnOverflow is on.
         * @param {boolean} scrollOnOverflow Whether the menu should scroll when too big
         *     to fit on the screen.  If false, adjust logic will be used to try and
         *     reposition the menu to fit.
         */
        setScrollOnOverflow(scrollOnOverflow: boolean): void;
    
        /**
         * @return {boolean} Wether the menu will scroll when it's to big to fit
         *     vertically on the screen.
         */
        isScrollOnOverflow(): boolean;
    
        /**
         * @return {boolean} Whether the attached menu is focusable.
         */
        isFocusablePopupMenu(): boolean;
    
        /**
         * Sets whether the attached popup menu is focusable.  If the popup menu is
         * focusable, it may steal keyboard focus from the menu button, so the button
         * will not hide the menu on blur.
         * @param {boolean} focusable Whether the attached menu is focusable.
         */
        setFocusablePopupMenu(focusable: boolean): void;
    
        /**
         * Sets whether to render the menu as a sibling element of the button.
         * Normally, the menu is a child of document.body.  This option is useful if
         * you need the menu to inherit styles from a common parent element, or if you
         * otherwise need it to share a parent element for desired event handling.  One
         * example of the latter is if the parent is in a goog.ui.Popup, to ensure that
         * clicks on the menu are considered being within the popup.
         * @param {boolean} renderMenuAsSibling Whether we render the menu at the end
         *     of the dom or as a sibling to the button/label that renders the drop
         *     down.
         */
        setRenderMenuAsSibling(renderMenuAsSibling: boolean): void;
    
        /**
         * Reveals the menu and hooks up menu-specific event handling.
         * @deprecated Use {@link #setOpen} instead.
         */
        showMenu(): void;
    
        /**
         * Hides the menu and cleans up menu-specific event handling.
         * @deprecated Use {@link #setOpen} instead.
         */
        hideMenu(): void;
    
        /**
         * Opens or closes the attached popup menu.
         * @param {boolean} open Whether to open or close the menu.
         * @param {goog.events.Event=} opt_e Event that caused the menu to be opened.
         * @override
         */
        setOpen(open: boolean, opt_e?: goog.events.Event): void;
    
        /**
         * Resets the MenuButton's size.  This is useful for cases where items are added
         * or removed from the menu and scrollOnOverflow is on.  In those cases the
         * menu will not behave correctly and resize itself unless this is called
         * (usually followed by positionMenu()).
         */
        invalidateMenuSize(): void;
    
        /**
         * Positions the menu under the button.  May be called directly in cases when
         * the menu size is known to change.
         */
        positionMenu(): void;
    
        /**
         * Handles {@code HIGHLIGHT} events dispatched by the attached menu.
         * @param {goog.events.Event} e Highlight event to handle.
         */
        handleHighlightItem(e: goog.events.Event): void;
    
        /**
         * Handles UNHIGHLIGHT events dispatched by the associated menu.
         * @param {goog.events.Event} e Unhighlight event to handle.
         */
        handleUnHighlightItem(e: goog.events.Event): void;
    }

    /**
     * Renderer for {@link goog.ui.MenuButton}s.  This implementation overrides
     * {@link goog.ui.CustomButtonRenderer#createButton} to create a separate
     * caption and dropdown element.
     * @constructor
     * @extends {goog.ui.CustomButtonRenderer}
     */
    class MenuButtonRenderer extends goog.ui.CustomButtonRenderer {
        /**
         * Renderer for {@link goog.ui.MenuButton}s.  This implementation overrides
         * {@link goog.ui.CustomButtonRenderer#createButton} to create a separate
         * caption and dropdown element.
         * @constructor
         * @extends {goog.ui.CustomButtonRenderer}
         */
        constructor();
    
        /**
         * Takes the button's root element and returns the parent element of the
         * button's contents.  Overrides the superclass implementation by taking
         * the nested DIV structure of menu buttons into account.
         * @param {Element} element Root element of the button whose content element
         *     is to be returned.
         * @return {Element} The button's content element.
         * @override
         */
        getContentElement(element: Element): Element;
    
        /**
         * Takes an element, decorates it with the menu button control, and returns
         * the element.  Overrides {@link goog.ui.CustomButtonRenderer#decorate} by
         * looking for a child element that can be decorated by a menu, and if it
         * finds one, decorates it and attaches it to the menu button.
         * @param {goog.ui.Control} control goog.ui.MenuButton to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(control: goog.ui.Control, element: Element): Element;
    
        /**
         * Takes a text caption or existing DOM structure, and returns the content and
         * a dropdown arrow element wrapped in a pseudo-rounded-corner box.  Creates
         * the following DOM structure:
         *    <div class="goog-inline-block goog-menu-button-outer-box">
         *      <div class="goog-inline-block goog-menu-button-inner-box">
         *        <div class="goog-inline-block goog-menu-button-caption">
         *          Contents...
         *        </div>
         *        <div class="goog-inline-block goog-menu-button-dropdown">
         *          &nbsp;
         *        </div>
         *      </div>
         *    </div>
         * @param {goog.ui.ControlContent} content Text caption or DOM structure
         *     to wrap in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Pseudo-rounded-corner box containing the content.
         * @override
         */
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
        /**
         * Takes a text caption or existing DOM structure, and returns it wrapped in
         * an appropriately-styled DIV.  Creates the following DOM structure:
         *    <div class="goog-inline-block goog-menu-button-caption">
         *      Contents...
         *    </div>
         * @param {goog.ui.ControlContent} content Text caption or DOM structure
         *     to wrap in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Caption element.
         */
        createCaption(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns an appropriately-styled DIV containing a dropdown arrow element.
         * Creates the following DOM structure:
         *    <div class="goog-inline-block goog-menu-button-dropdown">
         *      &nbsp;
         *    </div>
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Dropdown element.
         */
        createDropdown(dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * Class representing a menu header.
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @param {goog.ui.MenuHeaderRenderer=} opt_renderer Optional renderer.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class MenuHeader extends goog.ui.Control {
        /**
         * Class representing a menu header.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to
         *     display as the content of the item (use to add icons or styling to
         *     menus).
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
         *     document interactions.
         * @param {goog.ui.MenuHeaderRenderer=} opt_renderer Optional renderer.
         * @constructor
         * @extends {goog.ui.Control}
         */
        constructor(content: goog.ui.ControlContent, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuHeaderRenderer);
    }

    /**
     * Renderer for menu headers.
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class MenuHeaderRenderer extends goog.ui.ControlRenderer {
        /**
         * Renderer for menu headers.
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * Class representing an item in a menu.
     *
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {*=} opt_model Data/model associated with the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class MenuItem extends goog.ui.Control {
        /**
         * Class representing an item in a menu.
         *
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to
         *     display as the content of the item (use to add icons or styling to
         *     menus).
         * @param {*=} opt_model Data/model associated with the menu item.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
         *     document interactions.
         * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
         * @constructor
         * @extends {goog.ui.Control}
         */
        constructor(content: goog.ui.ControlContent, opt_model?: any, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer);
    
        /**
         * Returns the value associated with the menu item.  The default implementation
         * returns the model object associated with the item (if any), or its caption.
         * @return {*} Value associated with the menu item, if any, or its caption.
         */
        getValue(): any;
    
        /**
         * Sets the value associated with the menu item.  The default implementation
         * stores the value as the model of the menu item.
         * @param {*} value Value to be associated with the menu item.
         */
        setValue(value: any): void;
    
        /**
         * Sets the menu item to be selectable or not.  Set to true for menu items
         * that represent selectable options.
         * @param {boolean} selectable Whether the menu item is selectable.
         */
        setSelectable(selectable: boolean): void;
    
        /**
         * Sets the menu item to be checkable or not.  Set to true for menu items
         * that represent checkable options.
         * @param {boolean} checkable Whether the menu item is checkable.
         */
        setCheckable(checkable: boolean): void;
    
        /**
         * Returns the text caption of the component while ignoring accelerators.
         * @override
         */
        getCaption(): void;
    
        /** @override */
        handleMouseUp(): void;
    
        /** @override */
        handleKeyEventInternal(): void;
    
        /**
         * Sets the mnemonic key code. The mnemonic is the key associated with this
         * action.
         * @param {goog.events.KeyCodes} key The key code.
         */
        setMnemonic(key: goog.events.KeyCodes): void;
    
        /**
         * Gets the mnemonic key code. The mnemonic is the key associated with this
         * action.
         * @return {goog.events.KeyCodes} The key code of the mnemonic key.
         */
        getMnemonic(): goog.events.KeyCodes;
    
        /**
         * @override
         */
        createDom(): void;
    
        /**
         * @override
         */
        getPreferredAriaRole(): void;
    }

    /**
     * Default renderer for {@link goog.ui.MenuItem}s.  Each item has the following
     * structure:
     * <pre>
     *   <div class="goog-menuitem">
     *     <div class="goog-menuitem-content">
     *       ...(menu item contents)...
     *     </div>
     *   </div>
     * </pre>
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class MenuItemRenderer extends goog.ui.ControlRenderer {
        /**
         * Default renderer for {@link goog.ui.MenuItem}s.  Each item has the following
         * structure:
         * <pre>
         *   <div class="goog-menuitem">
         *     <div class="goog-menuitem-content">
         *       ...(menu item contents)...
         *     </div>
         *   </div>
         * </pre>
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /** @override */
        getAriaRole(): void;
    
        /**
         * Overrides {@link goog.ui.ControlRenderer#createDom} by adding extra markup
         * and stying to the menu item's element if it is selectable or checkable.
         * @param {goog.ui.Control} item Menu item to render.
         * @return {Element} Root element for the item.
         * @override
         */
        createDom(item: goog.ui.Control): Element;
    
        /** @override */
        getContentElement(): void;
    
        /**
         * Overrides {@link goog.ui.ControlRenderer#decorate} by initializing the
         * menu item to checkable based on whether the element to be decorated has
         * extra stying indicating that it should be.
         * @param {goog.ui.Control} item Menu item instance to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(item: goog.ui.Control, element: Element): Element;
    
        /**
         * Takes a menu item's root element, and sets its content to the given text
         * caption or DOM structure.  Overrides the superclass immplementation by
         * making sure that the checkbox structure (for selectable/checkable menu
         * items) is preserved.
         * @param {Element} element The item's root element.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to be
         *     set as the item's content.
         * @override
         */
        setContent(element: Element, content: goog.ui.ControlContent): void;
    
        /**
         * Returns true if the element appears to have a proper menu item structure by
         * checking whether its first child has the appropriate structural class name.
         * @param {Element} element Element to check.
         * @return {boolean} Whether the element appears to have a proper menu item DOM.
         * @protected
         */
        hasContentStructure(element: Element): boolean;
    
        /**
         * Wraps the given text caption or existing DOM node(s) in a structural element
         * containing the menu item's contents.
         * @param {goog.ui.ControlContent} content Menu item contents.
         * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
         * @return {Element} Menu item content element.
         * @protected
         */
        createContent(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
        /**
         * Enables/disables radio button semantics on the menu item.
         * @param {goog.ui.Control} item Menu item to update.
         * @param {Element} element Menu item element to update (may be null if the
         *     item hasn't been rendered yet).
         * @param {boolean} selectable Whether the item should be selectable.
         */
        setSelectable(item: goog.ui.Control, element: Element, selectable: boolean): void;
    
        /**
         * Enables/disables checkbox semantics on the menu item.
         * @param {goog.ui.Control} item Menu item to update.
         * @param {Element} element Menu item element to update (may be null if the
         *     item hasn't been rendered yet).
         * @param {boolean} checkable Whether the item should be checkable.
         */
        setCheckable(item: goog.ui.Control, element: Element, checkable: boolean): void;
    
        /**
         * Determines whether the item contains a checkbox element.
         * @param {Element} element Menu item root element.
         * @return {boolean} Whether the element contains a checkbox element.
         * @protected
         */
        hasCheckBoxStructure(element: Element): boolean;
    
        /**
         * Adds or removes extra markup and CSS styling to the menu item to make it
         * selectable or non-selectable, depending on the value of the
         * {@code selectable} argument.
         * @param {goog.ui.Control} item Menu item to update.
         * @param {Element} element Menu item element to update.
         * @param {boolean} enable Whether to add or remove the checkbox structure.
         * @protected
         */
        setEnableCheckBoxStructure(item: goog.ui.Control, element: Element, enable: boolean): void;
    
        /**
         * Takes a single {@link goog.ui.Component.State}, and returns the
         * corresponding CSS class name (null if none).  Overrides the superclass
         * implementation by using 'highlight' as opposed to 'hover' as the CSS
         * class name suffix for the HOVER state, for backwards compatibility.
         * @param {goog.ui.Component.State} state Component state.
         * @return {string|undefined} CSS class representing the given state
         *     (undefined if none).
         * @override
         */
        getClassForState(state: goog.ui.Component.State): any /*string|any (undefined)*/;
    
        /**
         * Takes a single CSS class name which may represent a component state, and
         * returns the corresponding component state (0x00 if none).  Overrides the
         * superclass implementation by treating 'goog-option-selected' as special,
         * for backwards compatibility.
         * @param {string} className CSS class name, possibly representing a component
         *     state.
         * @return {goog.ui.Component.State} state Component state corresponding
         *     to the given CSS class (0x00 if none).
         * @override
         */
        getStateFromClass(className: string): goog.ui.Component.State;
    
        /** @override */
        getCssClass(): void;
    
        /**
         * Corrects the ARIA role based on checkable and selectable.
         * @param {goog.ui.Control} item The owner menu item.
         * @param {Element} element The element.
         */
        correctAriaRole(item: goog.ui.Control, element: Element): void;
    }

    /**
     * A basic menu class.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render or
     *     decorate the container; defaults to {@link goog.ui.MenuRenderer}.
     * @constructor
     * @extends {goog.ui.Container}
     */
    class Menu extends goog.ui.Container {
        /**
         * A basic menu class.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render or
         *     decorate the container; defaults to {@link goog.ui.MenuRenderer}.
         * @constructor
         * @extends {goog.ui.Container}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuRenderer);
    
        /**
         * Coordinates of the mousedown event that caused this menu to be made visible.
         * Used to prevent the consequent mouseup event due to a simple click from
         * activating a menu item immediately. Considered protected; should only be used
         * within this package or by subclasses.
         * @type {goog.math.Coordinate|undefined}
         */
        openingCoords: any /*goog.math.Coordinate|any (undefined)*/;
    
        /**
         * Returns the CSS class applied to menu elements, also used as the prefix for
         * derived styles, if any.  Subclasses should override this method as needed.
         * Considered protected.
         * @return {string} The CSS class applied to menu elements.
         * @protected
         * @deprecated Use getRenderer().getCssClass().
         */
        getCssClass(): string;
    
        /**
         * Returns whether the provided element is to be considered inside the menu for
         * purposes such as dismissing the menu on an event.  This is so submenus can
         * make use of elements outside their own DOM.
         * @param {Element} element The element to test for.
         * @return {boolean} Whether the provided element is to be considered inside
         *     the menu.
         */
        containsElement(element: Element): boolean;
    
        /**
         * Adds a new menu item at the end of the menu.
         * @param {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu
         *     item to add to the menu.
         * @deprecated Use {@link #addChild} instead, with true for the second argument.
         */
        addItem(item: any /*goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator*/): void;
    
        /**
         * Adds a new menu item at a specific index in the menu.
         * @param {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu
         *     item to add to the menu.
         * @param {number} n Index at which to insert the menu item.
         * @deprecated Use {@link #addChildAt} instead, with true for the third
         *     argument.
         */
        addItemAt(item: any /*goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator*/, n: number): void;
    
        /**
         * Removes an item from the menu and disposes of it.
         * @param {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator} item The
         *     menu item to remove.
         * @deprecated Use {@link #removeChild} instead.
         */
        removeItem(item: any /*goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator*/): void;
    
        /**
         * Removes a menu item at a given index in the menu and disposes of it.
         * @param {number} n Index of item.
         * @deprecated Use {@link #removeChildAt} instead.
         */
        removeItemAt(n: number): void;
    
        /**
         * Returns a reference to the menu item at a given index.
         * @param {number} n Index of menu item.
         * @return {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator|null}
         *     Reference to the menu item.
         * @deprecated Use {@link #getChildAt} instead.
         */
        getItemAt(n: number): any /*goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator|any (null)*/;
    
        /**
         * Returns the number of items in the menu (including separators).
         * @return {number} The number of items in the menu.
         * @deprecated Use {@link #getChildCount} instead.
         */
        getItemCount(): number;
    
        /**
         * Returns an array containing the menu items contained in the menu.
         * @return {Array.<goog.ui.MenuItem>} An array of menu items.
         * @deprecated Use getChildAt, forEachChild, and getChildCount.
         */
        getItems(): goog.ui.MenuItem[];
    
        /**
         * Sets the position of the menu relative to the view port.
         * @param {number|goog.math.Coordinate} x Left position or coordinate obj.
         * @param {number=} opt_y Top position.
         */
        setPosition(x: any /*number|goog.math.Coordinate*/, opt_y?: number): void;
    
        /**
         * Gets the page offset of the menu, or null if the menu isn't visible
         * @return {goog.math.Coordinate?} Object holding the x-y coordinates of the
         *     menu or null if the menu is not visible.
         */
        getPosition(): goog.math.Coordinate;
    
        /**
         * Sets whether the menu can automatically move focus to its key event target
         * when it is set to visible.
         * @param {boolean} allow Whether the menu can automatically move focus to its
         *     key event target when it is set to visible.
         */
        setAllowAutoFocus(allow: boolean): void;
    
        /**
         * @return {boolean} Whether the menu can automatically move focus to its key
         *     event target when it is set to visible.
         */
        getAllowAutoFocus(): boolean;
    
        /**
         * Sets whether the menu will highlight disabled menu items or skip to the next
         * active item.
         * @param {boolean} allow Whether the menu will highlight disabled menu items or
         *     skip to the next active item.
         */
        setAllowHighlightDisabled(allow: boolean): void;
    
        /**
         * @return {boolean} Whether the menu will highlight disabled menu items or skip
         *     to the next active item.
         */
        getAllowHighlightDisabled(): boolean;
    
        /**
         * @override
         * @param {goog.events.Event=} opt_e Mousedown event that caused this menu to
         *     be made visible (ignored if show is false).
         */
        setVisible(opt_e?: goog.events.Event): void;
    
        /** @override */
        handleEnterItem(): void;
    
        /**
         * Highlights the next item that begins with the specified string.  If no
         * (other) item begins with the given string, the selection is unchanged.
         * @param {string} charStr The prefix to match.
         * @return {boolean} Whether a matching prefix was found.
         */
        highlightNextPrefix(charStr: string): boolean;
    
        /** @override */
        canHighlightItem(): void;
    
        /** @override */
        decorateInternal(): void;
    
        /** @override */
        handleKeyEventInternal(): void;
    
        /** @override */
        setHighlightedIndex(): void;
    
        /**
         * Decorate menu items located in any descendent node which as been explicitly
         * marked as a 'content' node.
         * @param {Element} element Element to decorate.
         * @protected
         */
        decorateContent(element: Element): void;
    }

    /**
     * Default renderer for {@link goog.ui.Menu}s, based on {@link
     * goog.ui.ContainerRenderer}.
     * @param {string=} opt_ariaRole Optional ARIA role used for the element.
     * @constructor
     * @extends {goog.ui.ContainerRenderer}
     */
    class MenuRenderer extends goog.ui.ContainerRenderer {
        /**
         * Default renderer for {@link goog.ui.Menu}s, based on {@link
         * goog.ui.ContainerRenderer}.
         * @param {string=} opt_ariaRole Optional ARIA role used for the element.
         * @constructor
         * @extends {goog.ui.ContainerRenderer}
         */
        constructor(opt_ariaRole?: string);
    
        /**
         * Returns whether the element is a UL or acceptable to our superclass.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Inspects the element, and creates an instance of {@link goog.ui.Control} or
         * an appropriate subclass best suited to decorate it.  Overrides the superclass
         * implementation by recognizing HR elements as separators.
         * @param {Element} element Element to decorate.
         * @return {goog.ui.Control?} A new control suitable to decorate the element
         *     (null if none).
         * @override
         */
        getDecoratorForChild(element: Element): goog.ui.Control;
    
        /**
         * Returns whether the given element is contained in the menu's DOM.
         * @param {goog.ui.Menu} menu The menu to test.
         * @param {Element} element The element to test.
         * @return {boolean} Whether the given element is contained in the menu.
         */
        containsElement(menu: goog.ui.Menu, element: Element): boolean;
    
        /**
         * Returns the CSS class to be applied to the root element of containers
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    
        /** @override */
        initializeDom(): void;
    }

    /**
     * Class representing a menu separator.  A menu separator extends {@link
     * goog.ui.Separator} by always setting its renderer to {@link
     * goog.ui.MenuSeparatorRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @constructor
     * @extends {goog.ui.Separator}
     */
    class MenuSeparator extends goog.ui.Separator {
        /**
         * Class representing a menu separator.  A menu separator extends {@link
         * goog.ui.Separator} by always setting its renderer to {@link
         * goog.ui.MenuSeparatorRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
         *     document interactions.
         * @constructor
         * @extends {goog.ui.Separator}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * Renderer for menu separators.
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class MenuSeparatorRenderer extends goog.ui.ControlRenderer {
        /**
         * Renderer for menu separators.
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /**
         * Returns an empty, styled menu separator DIV.  Overrides {@link
         * goog.ui.ControlRenderer#createDom}.
         * @param {goog.ui.Control} separator goog.ui.Separator to render.
         * @return {Element} Root element for the separator.
         * @override
         */
        createDom(separator: goog.ui.Control): Element;
    
        /**
         * Takes an existing element, and decorates it with the separator.  Overrides
         * {@link goog.ui.ControlRenderer#decorate}.
         * @param {goog.ui.Control} separator goog.ui.MenuSeparator to decorate the
         *     element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(separator: goog.ui.Control, element: Element): Element;
    
        /**
         * Overrides {@link goog.ui.ControlRenderer#setContent} to do nothing, since
         * separators are empty.
         * @param {Element} separator The separator's root element.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to be
         *    set as the separators's content (ignored).
         * @override
         */
        setContent(separator: Element, content: goog.ui.ControlContent): void;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * A mock implementation of goog.ui.ActivityMonitor for unit testing. Clients
     * of this class should override goog.now to return a synthetic time from
     * the unit test.
     * @constructor
     * @extends {goog.ui.ActivityMonitor}
     * @final
     */
    class MockActivityMonitor extends goog.ui.ActivityMonitor {
        /**
         * A mock implementation of goog.ui.ActivityMonitor for unit testing. Clients
         * of this class should override goog.now to return a synthetic time from
         * the unit test.
         * @constructor
         * @extends {goog.ui.ActivityMonitor}
         * @final
         */
        constructor();
    
        /**
         * Simulates an event that updates the user to being non-idle.
         * @param {goog.events.EventType=} opt_type The type of event that made the user
         *     not idle. If not specified, defaults to MOUSEMOVE.
         */
        simulateEvent(opt_type?: goog.events.EventType): void;
    
        /**
         * @override
         */
        dispatchEvent(): void;
    }

    /**
     * Base class for modal popup UI components. This can also be used as
     * a standalone component to render a modal popup with an empty div.
     *
     * WARNING: goog.ui.ModalPopup is only guaranteed to work when it is rendered
     * directly in the 'body' element.
     *
     * The Html structure of the modal popup is:
     * <pre>
     *  Element         Function              Class-name, goog-modalpopup = default
     * ----------------------------------------------------------------------------
     * - iframe         Iframe mask           goog-modalpopup-bg
     * - div            Background mask       goog-modalpopup-bg
     * - div            Modal popup area      goog-modalpopup
     * - span           Tab catcher
     * </pre>
     * @constructor
     * @param {boolean=} opt_useIframeMask Work around windowed controls z-index
     *     issue by using an iframe instead of a div for bg element.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
     *     goog.ui.Component} for semantics.
     * @extends {goog.ui.Component}
     */
    class ModalPopup extends goog.ui.Component {
        /**
         * Base class for modal popup UI components. This can also be used as
         * a standalone component to render a modal popup with an empty div.
         *
         * WARNING: goog.ui.ModalPopup is only guaranteed to work when it is rendered
         * directly in the 'body' element.
         *
         * The Html structure of the modal popup is:
         * <pre>
         *  Element         Function              Class-name, goog-modalpopup = default
         * ----------------------------------------------------------------------------
         * - iframe         Iframe mask           goog-modalpopup-bg
         * - div            Background mask       goog-modalpopup-bg
         * - div            Modal popup area      goog-modalpopup
         * - span           Tab catcher
         * </pre>
         * @constructor
         * @param {boolean=} opt_useIframeMask Work around windowed controls z-index
         *     issue by using an iframe instead of a div for bg element.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
         *     goog.ui.Component} for semantics.
         * @extends {goog.ui.Component}
         */
        constructor(opt_useIframeMask?: boolean, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {string} Base CSS class for this component.
         * @protected
         */
        getCssClass(): string;
    
        /**
         * Returns the background iframe mask element, if any.
         * @return {Element} The background iframe mask element, may return
         *     null/undefined if the modal popup does not use iframe mask.
         */
        getBackgroundIframe(): Element;
    
        /**
         * Returns the background mask element.
         * @return {Element} The background mask element.
         */
        getBackgroundElement(): Element;
    
        /**
         * Creates the initial DOM representation for the modal popup.
         * @override
         */
        createDom(): void;
    
        /**
         * Allow a shift-tab from the top of the modal popup to the last tabbable
         * element by moving focus to the tab catcher. This should be called after
         * catching a wrapping shift-tab event and before allowing it to propagate, so
         * that focus will land on the last tabbable element before the tab catcher.
         * @protected
         */
        setupBackwardTabWrap(): void;
    
        /** @override */
        canDecorate(): void;
    
        /** @override */
        decorateInternal(): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /**
         * Sets the visibility of the modal popup box and focus to the popup.
         * Lazily renders the component if needed.
         * @param {boolean} visible Whether the modal popup should be visible.
         */
        setVisible(visible: boolean): void;
    
        /**
         * Sets aria-hidden of the rest of the page to restrict keyboard focus.
         * @param {boolean} hide Whether to hide or show the rest of the page.
         * @protected
         */
        setA11YDetectBackground(hide: boolean): void;
    
        /**
         * Sets the transitions to show and hide the popup and background.
         * @param {!goog.fx.Transition} popupShowTransition Transition to show the
         *     popup.
         * @param {!goog.fx.Transition} popupHideTransition Transition to hide the
         *     popup.
         * @param {!goog.fx.Transition} bgShowTransition Transition to show
         *     the background.
         * @param {!goog.fx.Transition} bgHideTransition Transition to hide
         *     the background.
         */
        setTransition(popupShowTransition: goog.fx.Transition, popupHideTransition: goog.fx.Transition, bgShowTransition: goog.fx.Transition, bgHideTransition: goog.fx.Transition): void;
    
        /**
         * Called after the popup is shown. If there is a transition, this
         * will be called after the transition completed or stopped.
         * @protected
         */
        onShow(): void;
    
        /**
         * Called after the popup is hidden. If there is a transition, this
         * will be called after the transition completed or stopped.
         * @protected
         */
        onHide(): void;
    
        /**
         * @return {boolean} Whether the modal popup is visible.
         */
        isVisible(): boolean;
    
        /**
         * Focuses on the modal popup.
         */
        focus(): void;
    
        /**
         * Centers the modal popup in the viewport, taking scrolling into account.
         */
        reposition(): void;
    
        /**
         * Handles focus events.  Makes sure that if the user tabs past the
         * elements in the modal popup, the focus wraps back to the beginning, and that
         * if the user shift-tabs past the front of the modal popup, focus wraps around
         * to the end.
         * @param {goog.events.BrowserEvent} e Browser's event object.
         * @protected
         */
        onFocus(e: goog.events.BrowserEvent): void;
    
        /**
         * Returns the magic tab catcher element used to detect when the user has
         * rolled focus off of the popup content.  It is automatically created during
         * the createDom method() and can be used by subclasses to implement custom
         * tab-loop behavior.
         * @return {Element} The tab catcher element.
         * @protected
         */
        getTabCatcherElement(): Element;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Renderer for {@link goog.ui.Button}s.  Renders and decorates native HTML
     * button elements.  Since native HTML buttons have built-in support for many
     * features, overrides many expensive (and redundant) superclass methods to
     * be no-ops.
     * @constructor
     * @extends {goog.ui.ButtonRenderer}
     */
    class NativeButtonRenderer extends goog.ui.ButtonRenderer {
        /**
         * Renderer for {@link goog.ui.Button}s.  Renders and decorates native HTML
         * button elements.  Since native HTML buttons have built-in support for many
         * features, overrides many expensive (and redundant) superclass methods to
         * be no-ops.
         * @constructor
         * @extends {goog.ui.ButtonRenderer}
         */
        constructor();
    
        /** @override */
        getAriaRole(): void;
    
        /**
         * Returns the button's contents wrapped in a native HTML button element.  Sets
         * the button's disabled attribute as needed.
         * @param {goog.ui.Control} button Button to render.
         * @return {Element} Root element for the button (a native HTML button element).
         * @override
         */
        createDom(button: goog.ui.Control): Element;
    
        /**
         * Overrides {@link goog.ui.ButtonRenderer#canDecorate} by returning true only
         * if the element is an HTML button.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /** @override */
        decorate(): void;
    
        /**
         * Native buttons natively support BiDi and keyboard focus.
         * @suppress {visibility} getHandler and performActionInternal
         * @override
         */
        initializeDom(): void;
    
        /**
         * @override
         * Native buttons don't support text selection.
         */
        setAllowTextSelection: any /*missing*/;
    
        /**
         * @override
         * Native buttons natively support right-to-left rendering.
         */
        setRightToLeft: any /*missing*/;
    
        /**
         * @override
         * Native buttons are always focusable as long as they are enabled.
         */
        isFocusable(): void;
    
        /**
         * @override
         * Native buttons natively support keyboard focus.
         */
        setFocusable: any /*missing*/;
    
        /**
         * @override
         * Native buttons also expose the DISABLED state in the HTML button's
         * {@code disabled} attribute.
         */
        setState(): void;
    
        /**
         * @override
         * Native buttons store their value in the HTML button's {@code value}
         * attribute.
         */
        getValue(): void;
    
        /**
         * @override
         * Native buttons also expose their value in the HTML button's {@code value}
         * attribute.
         */
        setValue(): void;
    
        /**
         * @override
         * Native buttons don't need ARIA states to support accessibility, so this is
         * a no-op.
         */
        updateAriaState: any /*missing*/;
    }

    /**
     * Class representing a menu option.  This is just a convenience class that
     * extends {@link goog.ui.MenuItem} by making it selectable.
     *
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {*=} opt_model Data/model associated with the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @constructor
     * @extends {goog.ui.MenuItem}
     */
    class Option extends goog.ui.MenuItem {
        /**
         * Class representing a menu option.  This is just a convenience class that
         * extends {@link goog.ui.MenuItem} by making it selectable.
         *
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to
         *     display as the content of the item (use to add icons or styling to
         *     menus).
         * @param {*=} opt_model Data/model associated with the menu item.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
         *     document interactions.
         * @constructor
         * @extends {goog.ui.MenuItem}
         */
        constructor(content: goog.ui.ControlContent, opt_model?: any, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Performs the appropriate action when the option is activated by the user.
         * Overrides the superclass implementation by not changing the selection state
         * of the option and not dispatching any SELECTED events, for backwards
         * compatibility with existing uses of this class.
         * @param {goog.events.Event} e Mouse or key event that triggered the action.
         * @return {boolean} True if the action was allowed to proceed, false otherwise.
         * @override
         */
        performActionInternal(e: goog.events.Event): boolean;
    }

    /**
     * A palette is a grid of DOM nodes that the user can highlight or select via
     * the keyboard or the mouse.  The selection state of the palette is controlled
     * an ACTION event.  Event listeners may retrieve the selected item using the
     * {@link #getSelectedItem} or {@link #getSelectedIndex} method.
     *
     * Use this class as the base for components like color palettes or emoticon
     * pickers.  Use {@link #setContent} to set/change the items in the palette
     * after construction.  See palette.html demo for example usage.
     *
     * @param {Array.<Node>} items Array of DOM nodes to be displayed as items
     *     in the palette grid (limited to one per cell).
     * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
     *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Palette extends goog.ui.Control {
        /**
         * A palette is a grid of DOM nodes that the user can highlight or select via
         * the keyboard or the mouse.  The selection state of the palette is controlled
         * an ACTION event.  Event listeners may retrieve the selected item using the
         * {@link #getSelectedItem} or {@link #getSelectedIndex} method.
         *
         * Use this class as the base for components like color palettes or emoticon
         * pickers.  Use {@link #setContent} to set/change the items in the palette
         * after construction.  See palette.html demo for example usage.
         *
         * @param {Array.<Node>} items Array of DOM nodes to be displayed as items
         *     in the palette grid (limited to one per cell).
         * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
         *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Control}
         */
        constructor(items: Node[], opt_renderer?: goog.ui.PaletteRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Overrides {@link goog.ui.Control#setContentInternal} by also updating the
         * grid size and the selection model.  Considered protected.
         * @param {goog.ui.ControlContent} content Array of DOM nodes to be displayed
         *     as items in the palette grid (one item per cell).
         * @protected
         * @override
         */
        setContentInternal(content: goog.ui.ControlContent): void;
    
        /**
         * Overrides {@link goog.ui.Control#getCaption} to return the empty string,
         * since palettes don't have text captions.
         * @return {string} The empty string.
         * @override
         */
        getCaption(): string;
    
        /**
         * Overrides {@link goog.ui.Control#setCaption} to be a no-op, since palettes
         * don't have text captions.
         * @param {string} caption Ignored.
         * @override
         */
        setCaption(caption: string): void;
    
        /**
         * Handles mouseover events.  Overrides {@link goog.ui.Control#handleMouseOver}
         * by determining which palette item (if any) was moused over, highlighting it,
         * and un-highlighting any previously-highlighted item.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         * @override
         */
        handleMouseOver(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles mousedown events.  Overrides {@link goog.ui.Control#handleMouseDown}
         * by ensuring that the item on which the user moused down is highlighted.
         * @param {goog.events.Event} e Mouse event to handle.
         * @override
         */
        handleMouseDown(e: goog.events.Event): void;
    
        /**
         * Selects the currently highlighted palette item (triggered by mouseup or by
         * keyboard action).  Overrides {@link goog.ui.Control#performActionInternal}
         * by selecting the highlighted item and dispatching an ACTION event.
         * @param {goog.events.Event} e Mouse or key event that triggered the action.
         * @return {boolean} True if the action was allowed to proceed, false otherwise.
         * @override
         */
        performActionInternal(e: goog.events.Event): boolean;
    
        /**
         * Handles keyboard events dispatched while the palette has focus.  Moves the
         * highlight on arrow keys, and selects the highlighted item on Enter or Space.
         * Returns true if the event was handled, false otherwise.  In particular, if
         * the user attempts to navigate out of the grid, the highlight isn't changed,
         * and this method returns false; it is then up to the parent component to
         * handle the event (e.g. by wrapping the highlight around).  Overrides {@link
         * goog.ui.Control#handleKeyEvent}.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} True iff the key event was handled by the component.
         * @override
         */
        handleKeyEvent(e: goog.events.KeyEvent): boolean;
    
        /**
         * Handles selection change events dispatched by the selection model.
         * @param {goog.events.Event} e Selection event to handle.
         */
        handleSelectionChange(e: goog.events.Event): void;
    
        /**
         * Returns the size of the palette grid.
         * @return {goog.math.Size} Palette size (columns x rows).
         */
        getSize(): goog.math.Size;
    
        /**
         * Sets the size of the palette grid to the given size.  Callers can either
         * pass a single {@link goog.math.Size} or a pair of numbers (first the number
         * of columns, then the number of rows) to this method.  In both cases, the
         * number of rows is optional and will be calculated automatically if needed.
         * It is an error to attempt to change the size of the palette after it has
         * been rendered.
         * @param {goog.math.Size|number} size Either a size object or the number of
         *     columns.
         * @param {number=} opt_rows The number of rows (optional).
         */
        setSize(size: any /*goog.math.Size|number*/, opt_rows?: number): void;
    
        /**
         * Returns the 0-based index of the currently highlighted palette item, or -1
         * if no item is highlighted.
         * @return {number} Index of the highlighted item (-1 if none).
         */
        getHighlightedIndex(): number;
    
        /**
         * Returns the currently highlighted palette item, or null if no item is
         * highlighted.
         * @return {Node} The highlighted item (undefined if none).
         */
        getHighlightedItem(): Node;
    
        /**
         * Highlights the item at the given 0-based index, or removes the highlight
         * if the argument is -1 or out of range.  Any previously-highlighted item
         * will be un-highlighted.
         * @param {number} index 0-based index of the item to highlight.
         */
        setHighlightedIndex(index: number): void;
    
        /**
         * Highlights the given item, or removes the highlight if the argument is null
         * or invalid.  Any previously-highlighted item will be un-highlighted.
         * @param {Node|undefined} item Item to highlight.
         */
        setHighlightedItem(item: any /*Node|any (undefined)*/): void;
    
        /**
         * Returns the 0-based index of the currently selected palette item, or -1
         * if no item is selected.
         * @return {number} Index of the selected item (-1 if none).
         */
        getSelectedIndex(): number;
    
        /**
         * Returns the currently selected palette item, or null if no item is selected.
         * @return {Node} The selected item (null if none).
         */
        getSelectedItem(): Node;
    
        /**
         * Selects the item at the given 0-based index, or clears the selection
         * if the argument is -1 or out of range.  Any previously-selected item
         * will be deselected.
         * @param {number} index 0-based index of the item to select.
         */
        setSelectedIndex(index: number): void;
    
        /**
         * Selects the given item, or clears the selection if the argument is null or
         * invalid.  Any previously-selected item will be deselected.
         * @param {Node} item Item to select.
         */
        setSelectedItem(item: Node): void;
    
        /** @override */
        setHighlighted(): void;
    }

    /**
     * Default renderer for {@link goog.ui.Palette}s.  Renders the palette as an
     * HTML table wrapped in a DIV, with one palette item per cell:
     *
     *    <div class="goog-palette">
     *      <table class="goog-palette-table">
     *        <tbody class="goog-palette-body">
     *          <tr class="goog-palette-row">
     *            <td class="goog-palette-cell">...Item 0...</td>
     *            <td class="goog-palette-cell">...Item 1...</td>
     *            ...
     *          </tr>
     *          <tr class="goog-palette-row">
     *            ...
     *          </tr>
     *        </tbody>
     *      </table>
     *    </div>
     *
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class PaletteRenderer extends goog.ui.ControlRenderer {
        /**
         * Default renderer for {@link goog.ui.Palette}s.  Renders the palette as an
         * HTML table wrapped in a DIV, with one palette item per cell:
         *
         *    <div class="goog-palette">
         *      <table class="goog-palette-table">
         *        <tbody class="goog-palette-body">
         *          <tr class="goog-palette-row">
         *            <td class="goog-palette-cell">...Item 0...</td>
         *            <td class="goog-palette-cell">...Item 1...</td>
         *            ...
         *          </tr>
         *          <tr class="goog-palette-row">
         *            ...
         *          </tr>
         *        </tbody>
         *      </table>
         *    </div>
         *
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /**
         * Returns the palette items arranged in a table wrapped in a DIV, with the
         * renderer's own CSS class and additional state-specific classes applied to
         * it.
         * @param {goog.ui.Control} palette goog.ui.Palette to render.
         * @return {Element} Root element for the palette.
         * @override
         */
        createDom(palette: goog.ui.Control): Element;
    
        /**
         * Returns the given items in a table with {@code size.width} columns and
         * {@code size.height} rows.  If the table is too big, empty cells will be
         * created as needed.  If the table is too small, the items that don't fit
         * will not be rendered.
         * @param {Array.<Node>} items Palette items.
         * @param {goog.math.Size} size Palette size (columns x rows); both dimensions
         *     must be specified as numbers.
         * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
         * @return {Element} Palette table element.
         */
        createGrid(items: Node[], size: goog.math.Size, dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns a table element (or equivalent) that wraps the given rows.
         * @param {Array.<Element>} rows Array of row elements.
         * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
         * @return {Element} Palette table element.
         */
        createTable(rows: Element[], dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns a table row element (or equivalent) that wraps the given cells.
         * @param {Array.<Element>} cells Array of cell elements.
         * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
         * @return {Element} Row element.
         */
        createRow(cells: Element[], dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns a table cell element (or equivalent) that wraps the given palette
         * item (which must be a DOM node).
         * @param {Node|string} node Palette item.
         * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
         * @return {Element} Cell element.
         */
        createCell(node: any /*Node|string*/, dom: goog.dom.DomHelper): Element;
    
        /**
         * Overrides {@link goog.ui.ControlRenderer#canDecorate} to always return false.
         * @param {Element} element Ignored.
         * @return {boolean} False, since palettes don't support the decorate flow (for
         *     now).
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Overrides {@link goog.ui.ControlRenderer#decorate} to be a no-op, since
         * palettes don't support the decorate flow (for now).
         * @param {goog.ui.Control} palette Ignored.
         * @param {Element} element Ignored.
         * @return {null} Always null.
         * @override
         */
        decorate(palette: goog.ui.Control, element: Element): any /*null*/;
    
        /**
         * Overrides {@link goog.ui.ControlRenderer#setContent} for palettes.  Locates
         * the HTML table representing the palette grid, and replaces the contents of
         * each cell with a new element from the array of nodes passed as the second
         * argument.  If the new content has too many items the table will have more
         * rows added to fit, if there are less items than the table has cells, then the
         * left over cells will be empty.
         * @param {Element} element Root element of the palette control.
         * @param {goog.ui.ControlContent} content Array of items to replace existing
         *     palette items.
         * @override
         */
        setContent(element: Element, content: goog.ui.ControlContent): void;
    
        /**
         * Returns the item corresponding to the given node, or null if the node is
         * neither a palette cell nor part of a palette item.
         * @param {goog.ui.Palette} palette Palette in which to look for the item.
         * @param {Node} node Node to look for.
         * @return {Node} The corresponding palette item (null if not found).
         */
        getContainingItem(palette: goog.ui.Palette, node: Node): Node;
    
        /**
         * Updates the highlight styling of the palette cell containing the given node
         * based on the value of the Boolean argument.
         * @param {goog.ui.Palette} palette Palette containing the item.
         * @param {Node} node Item whose cell is to be highlighted or un-highlighted.
         * @param {boolean} highlight If true, the cell is highlighted; otherwise it is
         *     un-highlighted.
         */
        highlightCell(palette: goog.ui.Palette, node: Node, highlight: boolean): void;
    
        /**
         * @param {Node} node Item whose cell is to be returned.
         * @return {Element} The grid cell for the palette item.
         */
        getCellForItem(node: Node): Element;
    
        /**
         * Updates the selection styling of the palette cell containing the given node
         * based on the value of the Boolean argument.
         * @param {goog.ui.Palette} palette Palette containing the item.
         * @param {Node} node Item whose cell is to be selected or deselected.
         * @param {boolean} select If true, the cell is selected; otherwise it is
         *     deselected.
         */
        selectCell(palette: goog.ui.Palette, node: Node, select: boolean): void;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * Plain text spell checker implementation.
     *
     * @param {goog.spell.SpellCheck} handler Instance of the SpellCheckHandler
     *     support object to use. A single instance can be shared by multiple
     *     editor components.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.AbstractSpellChecker}
     * @final
     */
    class PlainTextSpellChecker extends goog.ui.AbstractSpellChecker {
        /**
         * Plain text spell checker implementation.
         *
         * @param {goog.spell.SpellCheck} handler Instance of the SpellCheckHandler
         *     support object to use. A single instance can be shared by multiple
         *     editor components.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.AbstractSpellChecker}
         * @final
         */
        constructor(handler: goog.spell.SpellCheck, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Class name for invalid words.
         * @type {string}
         */
        invalidWordClassName: string;
    
        /**
         * Class name for corrected words.
         * @type {string}
         */
        correctedWordClassName: string;
    
        /**
         * Class name for correction pane.
         * @type {string}
         */
        correctionPaneClassName: string;
    
        /**
         * Creates the initial DOM representation for the component.
         * @override
         */
        createDom(): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /**
         * Initializes suggestions menu. Populates menu with separator and ignore option
         * that are always valid. Suggestions are later added above the separator.
         * @override
         */
        initSuggestionsMenu(): void;
    
        /**
         * Checks spelling for all text and displays correction UI.
         * @override
         */
        check(): void;
    
        /**
         * Processes word.
         *
         * @param {Node} node Node containing word.
         * @param {string} word Word to process.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @override
         */
        processWord(node: Node, word: string, status: goog.spell.SpellCheck.WordStatus): void;
    
        /**
         * Processes range of text - recognized words and separators.
         *
         * @param {Node} node Node containing separator.
         * @param {string} text text to process.
         * @override
         */
        processRange(node: Node, text: string): void;
    
        /**
         * Hides correction UI.
         * @override
         */
        resume(): void;
    
        /**
         * Returns desired element properties for the specified status.
         *
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @return {Object} Properties to apply to word element.
         * @override
         */
        getElementProperties(status: goog.spell.SpellCheck.WordStatus): Object;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Handles key down for overlay.
         * @param {goog.events.BrowserEvent} e The browser event.
         * @return {boolean|undefined} The handled value.
         */
        handleOverlayKeyEvent(e: goog.events.BrowserEvent): any /*boolean|any (undefined)*/;
    
        /**
         * Handles correction menu actions.
         *
         * @param {goog.events.Event} event Action event.
         * @override
         */
        onCorrectionAction(event: goog.events.Event): void;
    }

    /**
     * The PopupBase class provides functionality for showing and hiding a generic
     * container element. It also provides the option for hiding the popup element
     * if the user clicks outside the popup or the popup loses focus.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     * @param {Element=} opt_element A DOM element for the popup.
     * @param {goog.ui.PopupBase.Type=} opt_type Type of popup.
     */
    class PopupBase extends goog.events.EventTarget {
        /**
         * The PopupBase class provides functionality for showing and hiding a generic
         * container element. It also provides the option for hiding the popup element
         * if the user clicks outside the popup or the popup loses focus.
         *
         * @constructor
         * @extends {goog.events.EventTarget}
         * @param {Element=} opt_element A DOM element for the popup.
         * @param {goog.ui.PopupBase.Type=} opt_type Type of popup.
         */
        constructor(opt_element?: Element, opt_type?: goog.ui.PopupBase.Type);
    
        /**
         * @return {goog.ui.PopupBase.Type} The type of popup this is.
         */
        getType(): goog.ui.PopupBase.Type;
    
        /**
         * Specifies the type of popup to use.
         *
         * @param {goog.ui.PopupBase.Type} type Type of popup.
         */
        setType(type: goog.ui.PopupBase.Type): void;
    
        /**
         * Returns whether the popup should hide itself asynchronously using a timeout
         * instead of synchronously.
         * @return {boolean} Whether to hide async.
         */
        shouldHideAsync(): boolean;
    
        /**
         * Sets whether the popup should hide itself asynchronously using a timeout
         * instead of synchronously.
         * @param {boolean} b Whether to hide async.
         */
        setShouldHideAsync(b: boolean): void;
    
        /**
         * Returns the dom element that should be used for the popup.
         *
         * @return {Element} The popup element.
         */
        getElement(): Element;
    
        /**
         * Specifies the dom element that should be used for the popup.
         *
         * @param {Element} elt A DOM element for the popup.
         */
        setElement(elt: Element): void;
    
        /**
         * Returns whether the Popup dismisses itself when the user clicks outside of
         * it.
         * @return {boolean} Whether the Popup autohides on an external click.
         */
        getAutoHide(): boolean;
    
        /**
         * Sets whether the Popup dismisses itself when the user clicks outside of it.
         * @param {boolean} autoHide Whether to autohide on an external click.
         */
        setAutoHide(autoHide: boolean): void;
    
        /**
         * @return {boolean} Whether the Popup autohides on the escape key.
         */
        getHideOnEscape(): boolean;
    
        /**
         * Sets whether the Popup dismisses itself on the escape key.
         * @param {boolean} hideOnEscape Whether to autohide on the escape key.
         */
        setHideOnEscape(hideOnEscape: boolean): void;
    
        /**
         * @return {boolean} Whether cross iframe dismissal is enabled.
         */
        getEnableCrossIframeDismissal(): boolean;
    
        /**
         * Sets whether clicks in other iframes should dismiss this popup.  In some
         * cases it should be disabled, because it can cause spurious
         * @param {boolean} enable Whether to enable cross iframe dismissal.
         */
        setEnableCrossIframeDismissal(enable: boolean): void;
    
        /**
         * Returns the region inside which the Popup dismisses itself when the user
         * clicks, or null if it's the entire document.
         * @return {Element} The DOM element for autohide, or null if it hasn't been
         *     set.
         */
        getAutoHideRegion(): Element;
    
        /**
         * Sets the region inside which the Popup dismisses itself when the user
         * clicks.
         * @param {Element} element The DOM element for autohide.
         */
        setAutoHideRegion(element: Element): void;
    
        /**
         * Sets transition animation on showing and hiding the popup.
         * @param {goog.fx.Transition=} opt_showTransition Transition to play on
         *     showing the popup.
         * @param {goog.fx.Transition=} opt_hideTransition Transition to play on
         *     hiding the popup.
         */
        setTransition(opt_showTransition?: goog.fx.Transition, opt_hideTransition?: goog.fx.Transition): void;
    
        /**
         * Returns the time when the popup was last shown.
         *
         * @return {number} time in ms since epoch when the popup was last shown, or
         * -1 if the popup was never shown.
         */
        getLastShowTime(): number;
    
        /**
         * Returns the time when the popup was last hidden.
         *
         * @return {number} time in ms since epoch when the popup was last hidden, or
         * -1 if the popup was never hidden or is currently showing.
         */
        getLastHideTime(): number;
    
        /**
         * Returns the event handler for the popup. All event listeners belonging to
         * this handler are removed when the tooltip is hidden. Therefore,
         * the recommended usage of this handler is to listen on events in
         * {@link #onShow_}.
         * @return {goog.events.EventHandler.<T>} Event handler for this popup.
         * @protected
         * @this T
         * @template T
         */
        getHandler(): goog.events.EventHandler<T>;
    
        /**
         * Returns whether the popup is currently visible.
         *
         * @return {boolean} whether the popup is currently visible.
         */
        isVisible(): boolean;
    
        /**
         * Returns whether the popup is currently visible or was visible within about
         * 150 ms ago. This is used by clients to handle a very specific, but common,
         * popup scenario. The button that launches the popup should close the popup
         * on mouse down if the popup is alrady open. The problem is that the popup
         * closes itself during the capture phase of the mouse down and thus the button
         * thinks it's hidden and this should show it again. This method provides a
         * good heuristic for clients. Typically in their event handler they will have
         * code that is:
         *
         * if (menu.isOrWasRecentlyVisible()) {
         *   menu.setVisible(false);
         * } else {
         *   ... // code to position menu and initialize other state
         *   menu.setVisible(true);
         * }
         * @return {boolean} Whether the popup is currently visible or was visible
         *     within about 150 ms ago.
         */
        isOrWasRecentlyVisible(): boolean;
    
        /**
         * Sets whether the popup should be visible. After this method
         * returns, isVisible() will always return the new state, even if
         * there is a transition.
         *
         * @param {boolean} visible Desired visibility state.
         */
        setVisible(visible: boolean): void;
    
        /**
         * Repositions the popup according to the current state.
         * Should be overriden by subclases.
         */
        reposition: any /*missing*/;
    
        /**
         * Shows the popup element.
         * @protected
         */
        showPopupElement(): void;
    
        /**
         * Hides the popup element.
         * @protected
         */
        hidePopupElement(): void;
    
        /**
         * Called before the popup is shown. Derived classes can override to hook this
         * event but should make sure to call the parent class method.
         *
         * @return {boolean} If anyone called preventDefault on the event object (or
         *     if any of the handlers returns false this will also return false.
         * @protected
         */
        onBeforeShow(): boolean;
    
        /**
         * Called after the popup is shown. Derived classes can override to hook this
         * event but should make sure to call the parent class method.
         * @protected
         * @suppress {underscore|visibility}
         */
        onShow_(): void;
    
        /**
         * Called before the popup is hidden. Derived classes can override to hook this
         * event but should make sure to call the parent class method.
         *
         * @param {Object=} opt_target Target of the event causing the hide.
         * @return {boolean} If anyone called preventDefault on the event object (or
         *     if any of the handlers returns false this will also return false.
         * @protected
         * @suppress {underscore|visibility}
         */
        onBeforeHide_(opt_target?: Object): boolean;
    
        /**
         * Called after the popup is hidden. Derived classes can override to hook this
         * event but should make sure to call the parent class method.
         * @param {Object=} opt_target Target of the event causing the hide.
         * @protected
         * @suppress {underscore|visibility}
         */
        onHide_(opt_target?: Object): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Popup color picker widget.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.ColorPicker=} opt_colorPicker Optional color picker to use
     *     for this popup.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class PopupColorPicker extends goog.ui.Component {
        /**
         * Popup color picker widget.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {goog.ui.ColorPicker=} opt_colorPicker Optional color picker to use
         *     for this popup.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_colorPicker?: goog.ui.ColorPicker);
    
        /** @override */
        createDom(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * ColorPickers cannot be used to decorate pre-existing html, since the
         * structure they build is fairly complicated.
         * @param {Element} element Element to decorate.
         * @return {boolean} Returns always false.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * @return {goog.ui.ColorPicker} The color picker instance.
         */
        getColorPicker(): goog.ui.ColorPicker;
    
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
         * @return {goog.ui.PopupBase?} The popup or null if it hasn't been created.
         */
        getPopup(): goog.ui.PopupBase;
    
        /**
         * @return {Element} The last element that triggered the popup.
         */
        getLastTarget(): Element;
    
        /**
         * Attaches the popup color picker to an element.
         * @param {Element} element The element to attach to.
         */
        attach(element: Element): void;
    
        /**
         * Detatches the popup color picker from an element.
         * @param {Element} element The element to detach from.
         */
        detach(element: Element): void;
    
        /**
         * Gets the color that is currently selected in this color picker.
         * @return {?string} The hex string of the color selected, or null if no
         *     color is selected.
         */
        getSelectedColor(): string;
    
        /**
         * Sets whether the color picker can accept focus.
         * @param {boolean} focusable True iff the color picker can accept focus.
         */
        setFocusable(focusable: boolean): void;
    
        /**
         * Sets whether the color picker can automatically move focus to its key event
         * target when it is set to visible.
         * @param {boolean} allow Whether to allow auto focus.
         */
        setAllowAutoFocus(allow: boolean): void;
    
        /**
         * @return {boolean} Whether the color picker can automatically move focus to
         *     its key event target when it is set to visible.
         */
        getAllowAutoFocus(): boolean;
    
        /**
         * Sets whether the color picker should toggle off if it is already open.
         * @param {boolean} toggle The new toggle mode.
         */
        setToggleMode(toggle: boolean): void;
    
        /**
         * Gets whether the colorpicker is in toggle mode
         * @return {boolean} toggle.
         */
        getToggleMode(): boolean;
    
        /**
         * Sets whether the picker remembers the last selected color between popups.
         *
         * @param {boolean} remember Whether to remember the selection.
         */
        setRememberSelection(remember: boolean): void;
    
        /**
         * @return {boolean} Whether the picker remembers the last selected color
         *     between popups.
         */
        getRememberSelection(): boolean;
    
        /**
         * Add an array of colors to the colors displayed by the color picker.
         * Does not add duplicated colors.
         * @param {Array.<string>} colors The array of colors to be added.
         */
        addColors(colors: string[]): void;
    
        /**
         * Clear the colors displayed by the color picker.
         */
        clearColors(): void;
    
        /**
         * Set the pinned corner of the popup.
         * @param {goog.positioning.Corner} corner The corner of the popup which is
         *     pinned to the attaching element.
         */
        setPinnedCorner(corner: goog.positioning.Corner): void;
    
        /**
         * Sets which corner of the attaching element this popup shows up.
         * @param {goog.positioning.Corner} corner The corner of the attaching element
         *     where to show the popup.
         */
        setPopupCorner(corner: goog.positioning.Corner): void;
    
        /**
         * Sets whether the popup shows up on hover. By default, appears on click.
         * @param {boolean} showOnHover True if popup should appear on hover.
         */
        setShowOnHover(showOnHover: boolean): void;
    }

    /**
     * Popup date picker widget. Fires goog.ui.PopupBase.EventType.SHOW or HIDE
     * events when its visibility changes.
     *
     * @param {goog.ui.DatePicker=} opt_datePicker Optional DatePicker.  This
     *     enables the use of a custom date-picker instance.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class PopupDatePicker extends goog.ui.Component {
        /**
         * Popup date picker widget. Fires goog.ui.PopupBase.EventType.SHOW or HIDE
         * events when its visibility changes.
         *
         * @param {goog.ui.DatePicker=} opt_datePicker Optional DatePicker.  This
         *     enables the use of a custom date-picker instance.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(opt_datePicker?: goog.ui.DatePicker, opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        createDom(): void;
    
        /**
         * @return {boolean} Whether the date picker is visible.
         */
        isVisible(): boolean;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * DatePicker cannot be used to decorate pre-existing html, since they're
         * not based on Components.
         * @param {Element} element Element to decorate.
         * @return {boolean} Returns always false.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * @return {goog.ui.DatePicker} The date picker instance.
         */
        getDatePicker(): goog.ui.DatePicker;
    
        /**
         * @return {goog.date.Date?} The selected date, if any.  See
         *     goog.ui.DatePicker.getDate().
         */
        getDate(): goog.date.Date;
    
        /**
         * Sets the selected date.  See goog.ui.DatePicker.setDate().
         * @param {goog.date.Date?} date The date to select.
         */
        setDate(date: goog.date.Date): void;
    
        /**
         * @return {Element} The last element that triggered the popup.
         */
        getLastTarget(): Element;
    
        /**
         * Attaches the popup date picker to an element.
         * @param {Element} element The element to attach to.
         */
        attach(element: Element): void;
    
        /**
         * Detatches the popup date picker from an element.
         * @param {Element} element The element to detach from.
         */
        detach(element: Element): void;
    
        /**
         * Sets whether the date picker can automatically move focus to its key event
         * target when it is set to visible.
         * @param {boolean} allow Whether to allow auto focus.
         */
        setAllowAutoFocus(allow: boolean): void;
    
        /**
         * @return {boolean} Whether the date picker can automatically move focus to
         * its key event target when it is set to visible.
         */
        getAllowAutoFocus(): boolean;
    
        /**
         * Show the popup at the bottom-left corner of the specified element.
         * @param {Element} element Reference element for displaying the popup -- popup
         *     will appear at the bottom-left corner of this element.
         */
        showPopup(element: Element): void;
    
        /**
         * Hides this popup.
         */
        hidePopup(): void;
    }

    /**
     * The Popup class provides functionality for displaying an absolutely
     * positioned element at a particular location in the window. It's designed to
     * be used as the foundation for building controls like a menu or tooltip. The
     * Popup class includes functionality for displaying a Popup near adjacent to
     * an anchor element.
     *
     * This works cross browser and thus does not use IE's createPopup feature
     * which supports extending outside the edge of the brower window.
     *
     * @param {Element=} opt_element A DOM element for the popup.
     * @param {goog.positioning.AbstractPosition=} opt_position A positioning helper
     *     object.
     * @constructor
     * @extends {goog.ui.PopupBase}
     */
    class Popup extends goog.ui.PopupBase {
        /**
         * The Popup class provides functionality for displaying an absolutely
         * positioned element at a particular location in the window. It's designed to
         * be used as the foundation for building controls like a menu or tooltip. The
         * Popup class includes functionality for displaying a Popup near adjacent to
         * an anchor element.
         *
         * This works cross browser and thus does not use IE's createPopup feature
         * which supports extending outside the edge of the brower window.
         *
         * @param {Element=} opt_element A DOM element for the popup.
         * @param {goog.positioning.AbstractPosition=} opt_position A positioning helper
         *     object.
         * @constructor
         * @extends {goog.ui.PopupBase}
         */
        constructor(opt_element?: Element, opt_position?: goog.positioning.AbstractPosition);
    
        /**
         * Returns the corner of the popup to used in the positioning algorithm.
         *
         * @return {goog.positioning.Corner} The popup corner used for positioning.
         */
        getPinnedCorner(): goog.positioning.Corner;
    
        /**
         * Sets the corner of the popup to used in the positioning algorithm.
         *
         * @param {goog.positioning.Corner} corner The popup corner used for
         *     positioning.
         */
        setPinnedCorner(corner: goog.positioning.Corner): void;
    
        /**
         * @return {goog.positioning.AbstractPosition} The position helper object
         *     associated with the popup.
         */
        getPosition(): goog.positioning.AbstractPosition;
    
        /**
         * Sets the position helper object associated with the popup.
         *
         * @param {goog.positioning.AbstractPosition} position A position helper object.
         */
        setPosition(position: goog.positioning.AbstractPosition): void;
    
        /**
         * Returns the margin to place around the popup.
         *
         * @return {goog.math.Box?} The margin.
         */
        getMargin(): goog.math.Box;
    
        /**
         * Sets the margin to place around the popup.
         *
         * @param {goog.math.Box|number|null} arg1 Top value or Box.
         * @param {number=} opt_arg2 Right value.
         * @param {number=} opt_arg3 Bottom value.
         * @param {number=} opt_arg4 Left value.
         */
        setMargin(arg1: any /*goog.math.Box|number|any (null)*/, opt_arg2?: number, opt_arg3?: number, opt_arg4?: number): void;
    
        /**
         * Repositions the popup according to the current state.
         * @override
         */
        reposition(): void;
    }

    /**
     * A basic menu class.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render or
     *     decorate the container; defaults to {@link goog.ui.MenuRenderer}.
     * @extends {goog.ui.Menu}
     * @constructor
     */
    class PopupMenu extends goog.ui.Menu {
        /**
         * A basic menu class.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render or
         *     decorate the container; defaults to {@link goog.ui.MenuRenderer}.
         * @extends {goog.ui.Menu}
         * @constructor
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuRenderer);
    
        /**
         * Decorate an existing HTML structure with the menu. Menu items will be
         * constructed from elements with classname 'goog-menuitem', separators will be
         * made from HR elements.
         * @param {Element} element Element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
    
        /** @override */
        enterDocument(): void;
    
        /**
         * Attaches the menu to a new popup position and anchor element.  A menu can
         * only be attached to an element once, since attaching the same menu for
         * multiple positions doesn't make sense.
         *
         * @param {Element} element Element whose click event should trigger the menu.
         * @param {goog.positioning.Corner=} opt_targetCorner Corner of the target that
         *     the menu should be anchored to.
         * @param {goog.positioning.Corner=} opt_menuCorner Corner of the menu that
         *     should be anchored.
         * @param {boolean=} opt_contextMenu Whether the menu should show on
         *     {@link goog.events.EventType.CONTEXTMENU} events, false if it should
         *     show on {@link goog.events.EventType.MOUSEDOWN} events. Default is
         *     MOUSEDOWN.
         * @param {goog.math.Box=} opt_margin Margin for the popup used in positioning
         *     algorithms.
         */
        attach(element: Element, opt_targetCorner?: goog.positioning.Corner, opt_menuCorner?: goog.positioning.Corner, opt_contextMenu?: boolean, opt_margin?: goog.math.Box): void;
    
        /**
         * Creates an object describing how the popup menu should be attached to the
         * anchoring element based on the given parameters. The created object is
         * stored, keyed by {@code element} and is retrievable later by invoking
         * {@link #getAttachTarget(element)} at a later point.
         *
         * Subclass may add more properties to the returned object, as needed.
         *
         * @param {Element} element Element whose click event should trigger the menu.
         * @param {goog.positioning.Corner=} opt_targetCorner Corner of the target that
         *     the menu should be anchored to.
         * @param {goog.positioning.Corner=} opt_menuCorner Corner of the menu that
         *     should be anchored.
         * @param {boolean=} opt_contextMenu Whether the menu should show on
         *     {@link goog.events.EventType.CONTEXTMENU} events, false if it should
         *     show on {@link goog.events.EventType.MOUSEDOWN} events. Default is
         *     MOUSEDOWN.
         * @param {goog.math.Box=} opt_margin Margin for the popup used in positioning
         *     algorithms.
         *
         * @return {Object} An object that describes how the popup menu should be
         *     attached to the anchoring element.
         *
         * @protected
         */
        createAttachTarget(element: Element, opt_targetCorner?: goog.positioning.Corner, opt_menuCorner?: goog.positioning.Corner, opt_contextMenu?: boolean, opt_margin?: goog.math.Box): Object;
    
        /**
         * Returns the object describing how the popup menu should be attach to given
         * element or {@code null}. The object is created and the association is formed
         * when {@link #attach} is invoked.
         *
         * @param {Element} element DOM element.
         * @return {Object} The object created when {@link attach} is invoked on
         *     {@code element}. Returns {@code null} if the element does not trigger
         *     the menu (i.e. {@link attach} has never been invoked on
         *     {@code element}).
         * @protected
         */
        getAttachTarget(element: Element): Object;
    
        /**
         * @param {Element} element Any DOM element.
         * @return {boolean} Whether clicking on the given element will trigger the
         *     menu.
         *
         * @protected
         */
        isAttachTarget(element: Element): boolean;
    
        /**
         * @return {Element} The current element where the popup is anchored, if it's
         *     visible.
         */
        getAttachedElement(): Element;
    
        /**
         * Detaches all listeners
         */
        detachAll(): void;
    
        /**
         * Detaches a menu from a given element.
         * @param {Element} element Element whose click event should trigger the menu.
         */
        detach(element: Element): void;
    
        /**
         * Sets whether the menu should toggle if it is already open.  For context
         * menus this should be false, for toolbar menus it makes more sense to be true.
         * @param {boolean} toggle The new toggle mode.
         */
        setToggleMode(toggle: boolean): void;
    
        /**
         * Gets whether the menu is in toggle mode
         * @return {boolean} toggle.
         */
        getToggleMode(): boolean;
    
        /**
         * Show the menu using given positioning object.
         * @param {goog.positioning.AbstractPosition} position The positioning instance.
         * @param {goog.positioning.Corner=} opt_menuCorner The corner of the menu to be
         *     positioned.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {Element=} opt_anchor The element which acts as visual anchor for this
         *     menu.
         */
        showWithPosition(position: goog.positioning.AbstractPosition, opt_menuCorner?: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_anchor?: Element): void;
    
        /**
         * Show the menu at a given attached target.
         * @param {Object} target Popup target.
         * @param {number} x The client-X associated with the show event.
         * @param {number} y The client-Y associated with the show event.
         * @protected
         */
        showMenu(target: Object, x: number, y: number): void;
    
        /**
         * Shows the menu immediately at the given client coordinates.
         * @param {number} x The client-X associated with the show event.
         * @param {number} y The client-Y associated with the show event.
         * @param {goog.positioning.Corner=} opt_menuCorner Corner of the menu that
         *     should be anchored.
         */
        showAt(x: number, y: number, opt_menuCorner?: goog.positioning.Corner): void;
    
        /**
         * Shows the menu immediately attached to the given element
         * @param {Element} element The element to show at.
         * @param {goog.positioning.Corner} targetCorner The corner of the target to
         *     anchor to.
         * @param {goog.positioning.Corner=} opt_menuCorner Corner of the menu that
         *     should be anchored.
         */
        showAtElement(element: Element, targetCorner: goog.positioning.Corner, opt_menuCorner?: goog.positioning.Corner): void;
    
        /**
         * Hides the menu.
         */
        hide(): void;
    
        /**
         * Returns whether the menu is currently visible or was visible within about
         * 150 ms ago.  This stops the menu toggling back on if the toggleMode == false.
         * @return {boolean} Whether the popup is currently visible or was visible
         *     within about 150 ms ago.
         */
        isOrWasRecentlyVisible(): boolean;
    
        /**
         * Used to stop the menu toggling back on if the toggleMode == false.
         * @return {boolean} Whether the menu was recently hidden.
         * @protected
         */
        wasRecentlyHidden(): boolean;
    
        /**
         * Handles click events that propagate to the document.
         * @param {goog.events.BrowserEvent} e The browser event.
         * @protected
         */
        onDocClick(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles the key event target loosing focus.
         * @param {goog.events.BrowserEvent} e The browser event.
         * @protected
         * @override
         */
        handleBlur(e: goog.events.BrowserEvent): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * This creates a progress bar object.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class ProgressBar extends goog.ui.Component {
        /**
         * This creates a progress bar object.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Creates the DOM nodes needed for the progress bar
         * @override
         */
        createDom(): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /**
         * Decorates an existing HTML DIV element as a progress bar input. If the
         * element contains a child with a class name of 'progress-bar-thumb' that will
         * be used as the thumb.
         * @param {Element} element  The HTML element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
    
        /**
         * @return {number} The value.
         */
        getValue(): number;
    
        /**
         * Sets the value
         * @param {number} v The value.
         */
        setValue(v: number): void;
    
        /**
         * @return {number} The minimum value.
         */
        getMinimum(): number;
    
        /**
         * Sets the minimum number
         * @param {number} v The minimum value.
         */
        setMinimum(v: number): void;
    
        /**
         * @return {number} The maximum value.
         */
        getMaximum(): number;
    
        /**
         * Sets the maximum number
         * @param {number} v The maximum value.
         */
        setMaximum(v: number): void;
    
        /**
         * Changes the orientation
         * @param {goog.ui.ProgressBar.Orientation} orient The orientation.
         */
        setOrientation(orient: goog.ui.ProgressBar.Orientation): void;
    
        /**
         * @return {goog.ui.ProgressBar.Orientation} The orientation of the
         *     progress bar.
         */
        getOrientation(): goog.ui.ProgressBar.Orientation;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * @return {?number} The step value used to determine how to round the value.
         */
        getStep(): number;
    
        /**
         * Sets the step value. The step value is used to determine how to round the
         * value.
         * @param {?number} step  The step size.
         */
        setStep(step: number): void;
    }

    /**
     * Creates an object that represents a prompt (used in place of javascript's
     * prompt). The html structure of the prompt is the same as the layout for
     * dialog.js except for the addition of a text box which is placed inside the
     * "Content area" and has the default class-name 'modal-dialog-userInput'
     *
     * @param {string} promptTitle The title of the prompt.
     * @param {string|!goog.html.SafeHtml} promptHtml The HTML body of the prompt.
     *     The variable is trusted and it should be already properly escaped.
     * @param {Function} callback The function to call when the user selects Ok or
     *     Cancel. The function should expect a single argument which represents
     *     what the user entered into the prompt. If the user presses cancel, the
     *     value of the argument will be null.
     * @param {string=} opt_defaultValue Optional default value that should be in
     *     the text box when the prompt appears.
     * @param {string=} opt_class Optional prefix for the classes.
     * @param {boolean=} opt_useIframeForIE For IE, workaround windowed controls
     *     z-index issue by using a an iframe instead of a div for bg element.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
     *    goog.ui.Component} for semantics.
     * @constructor
     * @extends {goog.ui.Dialog}
     */
    class Prompt extends goog.ui.Dialog {
        /**
         * Creates an object that represents a prompt (used in place of javascript's
         * prompt). The html structure of the prompt is the same as the layout for
         * dialog.js except for the addition of a text box which is placed inside the
         * "Content area" and has the default class-name 'modal-dialog-userInput'
         *
         * @param {string} promptTitle The title of the prompt.
         * @param {string|!goog.html.SafeHtml} promptHtml The HTML body of the prompt.
         *     The variable is trusted and it should be already properly escaped.
         * @param {Function} callback The function to call when the user selects Ok or
         *     Cancel. The function should expect a single argument which represents
         *     what the user entered into the prompt. If the user presses cancel, the
         *     value of the argument will be null.
         * @param {string=} opt_defaultValue Optional default value that should be in
         *     the text box when the prompt appears.
         * @param {string=} opt_class Optional prefix for the classes.
         * @param {boolean=} opt_useIframeForIE For IE, workaround windowed controls
         *     z-index issue by using a an iframe instead of a div for bg element.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
         *    goog.ui.Component} for semantics.
         * @constructor
         * @extends {goog.ui.Dialog}
         */
        constructor(promptTitle: string, promptHtml: any /*string|goog.html.SafeHtml*/, callback: Function, opt_defaultValue?: string, opt_class?: string, opt_useIframeForIE?: boolean, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the validation function that takes a string and returns true if the
         * string is accepted, false otherwise.
         * @param {function(string): boolean} fn The validation function to use on user
         *     input.
         */
        setValidationFunction(fn: (_0: string) => boolean): void;
    
        /** @override */
        enterDocument(): void;
    
        /**
         * @return {HTMLInputElement} The user input element. May be null if the Prompt
         *     has not been rendered.
         */
        getInputElement(): HTMLInputElement;
    
        /**
         * Sets an input decorator function.  This function will be called in
         * #enterDocument and will be passed the input element.  This is useful for
         * attaching handlers to the input element for specific change events,
         * for example.
         * @param {function(Element)} inputDecoratorFn A function to call on the input
         *     element on #enterDocument.
         */
        setInputDecoratorFn(inputDecoratorFn: (_0: Element) => any /*missing*/): void;
    
        /**
         * Set the number of rows in the user input element.
         * A values of 1 means use an <input> element.  If the prompt is already
         * rendered then you cannot change from <input> to <textarea> or vice versa.
         * @param {number} rows Number of rows for user input element.
         * @throws {goog.ui.Component.Error.ALREADY_RENDERED} If the component is
         *    already rendered and an attempt to change between <input> and <textarea>
         *    is made.
         */
        setRows(rows: number): void;
    
        /**
         * @return {number} The number of rows in the user input element.
         */
        getRows(): number;
    
        /**
         * Set the number of cols in the user input element.
         * @param {number} cols Number of cols for user input element.
         */
        setCols(cols: number): void;
    
        /**
         * @return {number} The number of cols in the user input element.
         */
        getCols(): number;
    
        /**
         * Create the initial DOM representation for the prompt.
         * @override
         */
        createDom(): void;
    
        /**
         * Causes the prompt to appear, centered on the screen, gives focus
         * to the text box, and selects the text
         * @param {boolean} visible Whether the dialog should be visible.
         * @override
         */
        setVisible(visible: boolean): void;
    
        /**
         * Overrides setFocus to put focus on the input element.
         * @override
         */
        focus(): void;
    
        /**
         * Sets the default value of the prompt when it is displayed.
         * @param {string} defaultValue The default value to display.
         */
        setDefaultValue(defaultValue: string): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Creates a range model
     * @extends {goog.events.EventTarget}
     * @constructor
     */
    class RangeModel extends goog.events.EventTarget {
        /**
         * Creates a range model
         * @extends {goog.events.EventTarget}
         * @constructor
         */
        constructor();
    
        /**
         * Sets the model to mute / unmute.
         * @param {boolean} muteValue Whether or not to mute the range, i.e.,
         *     suppress any CHANGE events.
         */
        setMute(muteValue: boolean): void;
    
        /**
         * Sets the value.
         * @param {number} value The new value.
         */
        setValue(value: number): void;
    
        /**
         * @return {number} the current value.
         */
        getValue(): number;
    
        /**
         * Sets the extent. The extent is the 'size' of the value.
         * @param {number} extent The new extent.
         */
        setExtent(extent: number): void;
    
        /**
         * @return {number} The extent for the range model.
         */
        getExtent(): number;
    
        /**
         * Sets the minimum
         * @param {number} minimum The new minimum.
         */
        setMinimum(minimum: number): void;
    
        /**
         * @return {number} The minimum value for the range model.
         */
        getMinimum(): number;
    
        /**
         * Sets the maximum
         * @param {number} maximum The new maximum.
         */
        setMaximum(maximum: number): void;
    
        /**
         * @return {number} The maximimum value for the range model.
         */
        getMaximum(): number;
    
        /**
         * Returns the step value. The step value is used to determine how to round the
         * value.
         * @return {?number} The maximimum value for the range model.
         */
        getStep(): number;
    
        /**
         * Sets the step. The step value is used to determine how to round the value.
         * @param {?number} step  The step size.
         */
        setStep(step: number): void;
    
        /**
         * Rounds to the closest step using the minimum value as the base.
         * @param {number} value  The number to round.
         * @return {number} The number rounded to the closest step.
         */
        roundToStepWithMin(value: number): number;
    
        /**
         * Rounds to the closest step.
         * @param {number} value  The number to round.
         * @return {number} The number rounded to the closest step.
         */
        roundToStep(value: number): number;
    }

    /**
     * A UI Control used for rating things, i.e. videos on Google Video.
     * @param {Array.<string>=} opt_ratings Ratings. Default: [1,2,3,4,5].
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class Ratings extends goog.ui.Component {
        /**
         * A UI Control used for rating things, i.e. videos on Google Video.
         * @param {Array.<string>=} opt_ratings Ratings. Default: [1,2,3,4,5].
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_ratings?: string[], opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Decorate a HTML structure already in the document.  Expects the structure:
         * <pre>
         * - div
         *   - select
         *       - option 1 #text = 1 star
         *       - option 2 #text = 2 stars
         *       - option 3 #text = 3 stars
         *       - option N (where N is max number of ratings)
         * </pre>
         *
         * The div can contain other elements for graceful degredation, but they will be
         * hidden when the decoration occurs.
         *
         * @param {Element} el Div element to decorate.
         * @override
         */
        decorateInternal(el: Element): void;
    
        /**
         * Render the rating widget inside the provided element. This will override the
         * current content of the element.
         * @override
         */
        enterDocument(): void;
    
        /**
         * Should be called when the widget is removed from the document but may be
         * reused.  This removes all the listeners the widget has attached and destroys
         * the DOM nodes it uses.
         * @override
         */
        exitDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Returns the base CSS class used by subcomponents of this component.
         * @return {string} Component-specific CSS class.
         */
        getCssClass(): string;
    
        /**
         * Sets the selected index. If the provided index is greater than the number of
         * ratings then the max is set.  0 is the first item, -1 is no selection.
         * @param {number} index The index of the rating to select.
         */
        setSelectedIndex(index: number): void;
    
        /**
         * @return {number} The index of the currently selected rating.
         */
        getSelectedIndex(): number;
    
        /**
         * Returns the rating value of the currently selected rating
         * @return {?string} The value of the currently selected rating (or null).
         */
        getValue(): string;
    
        /**
         * Returns the index of the currently highlighted rating, -1 if the mouse isn't
         * currently over the widget
         * @return {number} The index of the currently highlighted rating.
         */
        getHighlightedIndex(): number;
    
        /**
         * Returns the value of the currently highlighted rating, null if the mouse
         * isn't currently over the widget
         * @return {?string} The value of the currently highlighted rating, or null.
         */
        getHighlightedValue(): string;
    
        /**
         * Sets the array of ratings that the comonent
         * @param {Array.<string>} ratings Array of value to use as ratings.
         */
        setRatings(ratings: string[]): void;
    
        /**
         * Gets the array of ratings that the component
         * @return {Array.<string>} Array of ratings.
         */
        getRatings(): string[];
    
        /**
         * Attaches an input or select element to the ratings widget. The value or
         * index of the field will be updated along with the ratings widget.
         * @param {HTMLSelectElement|HTMLInputElement} field The field to attach to.
         */
        setAttachedFormField(field: any /*HTMLSelectElement|HTMLInputElement*/): void;
    
        /**
         * Returns the attached input or select element to the ratings widget.
         * @return {HTMLSelectElement|HTMLInputElement|null} The attached form field.
         */
        getAttachedFormField(): any /*HTMLSelectElement|HTMLInputElement|any (null)*/;
    
        /**
         * Enables or disables the ratings control.
         * @param {boolean} enable Whether to enable or disable the control.
         */
        setEnabled(enable: boolean): void;
    
        /**
         * @return {boolean} Whether the ratings control is enabled.
         */
        isEnabled(): boolean;
    }

    /**
     * Rich text spell checker implementation.
     *
     * @param {goog.spell.SpellCheck} handler Instance of the SpellCheckHandler
     *     support object to use. A single instance can be shared by multiple editor
     *     components.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.AbstractSpellChecker}
     * @final
     */
    class RichTextSpellChecker extends goog.ui.AbstractSpellChecker {
        /**
         * Rich text spell checker implementation.
         *
         * @param {goog.spell.SpellCheck} handler Instance of the SpellCheckHandler
         *     support object to use. A single instance can be shared by multiple editor
         *     components.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.AbstractSpellChecker}
         * @final
         */
        constructor(handler: goog.spell.SpellCheck, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Class name for word spans.
         * @type {string}
         */
        wordClassName: string;
    
        /**
         * Tag name porition of the marker for the text that does not need to be checked
         * for spelling.
         *
         * @type {Array.<string|undefined>}
         */
        excludeTags: any /*string|any (undefined)*/[];
    
        /**
         * CSS Style text for invalid words. As it's set inside the rich edit iframe
         * classes defined in the parent document are not availble, thus the style is
         * set inline.
         * @type {string}
         */
        invalidWordCssText: string;
    
        /**
         * Creates the initial DOM representation for the component.
         *
         * @throws {Error} Not supported. Use decorate.
         * @see #decorate
         * @override
         */
        createDom(): void;
    
        /**
         * Decorates the element for the UI component.
         *
         * @param {Element} element Element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
    
        /** @override */
        enterDocument(): void;
    
        /**
         * Checks spelling for all text and displays correction UI.
         * @override
         */
        check(): void;
    
        /** @override */
        setExcludeMarker(): void;
    
        /**
         * Processes word.
         *
         * @param {Node} node Node containing word.
         * @param {string} word Word to process.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of the word.
         * @protected
         * @override
         */
        processWord(node: Node, word: string, status: goog.spell.SpellCheck.WordStatus): void;
    
        /**
         * Processes recognized text and separators.
         *
         * @param {Node} node Node containing separator.
         * @param {string} text Text to process.
         * @protected
         * @override
         */
        processRange(node: Node, text: string): void;
    
        /** @override */
        createWordElement(): void;
    
        /**
         * Updates or replaces element based on word status.
         * @see goog.ui.AbstractSpellChecker.prototype.updateElement_
         *
         * Overridden from AbstractSpellChecker because we need to be mindful of
         * deleting the currentNode_ - this can break our pending processing.
         *
         * @param {Element} el Word element.
         * @param {string} word Word to update status for.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @protected
         * @override
         */
        updateElement(el: Element, word: string, status: goog.spell.SpellCheck.WordStatus): void;
    
        /**
         * Hides correction UI.
         * @override
         */
        resume(): void;
    
        /**
         * Returns desired element properties for the specified status.
         *
         * @param {goog.spell.SpellCheck.WordStatus} status Status of the word.
         * @return {Object} Properties to apply to word element.
         * @protected
         * @override
         */
        getElementProperties(status: goog.spell.SpellCheck.WordStatus): Object;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Base class for the hierarchy of RoundedPanel classes. Do not
     * instantiate directly. Instead, call goog.ui.RoundedPanel.create().
     * The HTML structure for the RoundedPanel is:
     * <pre>
     * - div (Contains the background and content. Class name: goog-roundedpanel)
     *   - div (Contains the background/rounded corners. Class name:
     *       goog-roundedpanel-bg)
     *   - div (Contains the content. Class name: goog-roundedpanel-content)
     * </pre>
     * @param {number} radius The radius of the rounded corner(s), in pixels.
     * @param {number} borderWidth The thickness of the border, in pixels.
     * @param {string} borderColor The border color of the panel.
     * @param {string=} opt_backgroundColor The background color of the panel.
     * @param {number=} opt_corners The corners of the panel to be rounded. Any
     *     corners not specified will be rendered as square corners. Will default
     *     to all square corners if not specified.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class BaseRoundedPanel extends goog.ui.Component {
        /**
         * Base class for the hierarchy of RoundedPanel classes. Do not
         * instantiate directly. Instead, call goog.ui.RoundedPanel.create().
         * The HTML structure for the RoundedPanel is:
         * <pre>
         * - div (Contains the background and content. Class name: goog-roundedpanel)
         *   - div (Contains the background/rounded corners. Class name:
         *       goog-roundedpanel-bg)
         *   - div (Contains the content. Class name: goog-roundedpanel-content)
         * </pre>
         * @param {number} radius The radius of the rounded corner(s), in pixels.
         * @param {number} borderWidth The thickness of the border, in pixels.
         * @param {string} borderColor The border color of the panel.
         * @param {string=} opt_backgroundColor The background color of the panel.
         * @param {number=} opt_corners The corners of the panel to be rounded. Any
         *     corners not specified will be rendered as square corners. Will default
         *     to all square corners if not specified.
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
         *     document we want to render in.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * This method performs all the necessary DOM manipulation to create the panel.
         * Overrides {@link goog.ui.Component#decorateInternal}.
         * @param {Element} element The element to decorate.
         * @protected
         * @override
         */
        decorateInternal(element: Element): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Returns the DOM element containing the actual content.
         * @return {Element} The element containing the actual content (null if none).
         * @override
         */
        getContentElement(): Element;
    }

    /**
     * RoundedPanel class specifically for browsers that support CSS attributes
     * for elements with rounded borders (ex. Safari 3.0+, Firefox 3.0+). Do not
     * instantiate directly. Instead, call goog.ui.RoundedPanel.create().
     * @param {number} radius The radius of the rounded corner(s), in pixels.
     * @param {number} borderWidth The thickness of the border, in pixels.
     * @param {string} borderColor The border color of the panel.
     * @param {string=} opt_backgroundColor The background color of the panel.
     * @param {number=} opt_corners The corners of the panel to be rounded. Any
     *     corners not specified will be rendered as square corners. Will
     *     default to all square corners if not specified.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @extends {goog.ui.BaseRoundedPanel}
     * @constructor
     * @final
     */
    class CssRoundedPanel extends goog.ui.BaseRoundedPanel {
        /**
         * RoundedPanel class specifically for browsers that support CSS attributes
         * for elements with rounded borders (ex. Safari 3.0+, Firefox 3.0+). Do not
         * instantiate directly. Instead, call goog.ui.RoundedPanel.create().
         * @param {number} radius The radius of the rounded corner(s), in pixels.
         * @param {number} borderWidth The thickness of the border, in pixels.
         * @param {string} borderColor The border color of the panel.
         * @param {string=} opt_backgroundColor The background color of the panel.
         * @param {number=} opt_corners The corners of the panel to be rounded. Any
         *     corners not specified will be rendered as square corners. Will
         *     default to all square corners if not specified.
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
         *     document we want to render in.
         * @extends {goog.ui.BaseRoundedPanel}
         * @constructor
         * @final
         */
        constructor(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * This method performs all the necessary DOM manipulation to create the panel.
         * Overrides {@link goog.ui.Component#decorateInternal}.
         * @param {Element} element The element to decorate.
         * @protected
         * @override
         */
        decorateInternal(element: Element): void;
    }

    /**
     * RoundedPanel class that uses goog.graphics to create the rounded corners.
     * Do not instantiate directly. Instead, call goog.ui.RoundedPanel.create().
     * @param {number} radius The radius of the rounded corner(s), in pixels.
     * @param {number} borderWidth The thickness of the border, in pixels.
     * @param {string} borderColor The border color of the panel.
     * @param {string=} opt_backgroundColor The background color of the panel.
     * @param {number=} opt_corners The corners of the panel to be rounded. Any
     *     corners not specified will be rendered as square corners. Will
     *     default to all square corners if not specified.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @extends {goog.ui.BaseRoundedPanel}
     * @constructor
     * @final
     */
    class GraphicsRoundedPanel extends goog.ui.BaseRoundedPanel {
        /**
         * RoundedPanel class that uses goog.graphics to create the rounded corners.
         * Do not instantiate directly. Instead, call goog.ui.RoundedPanel.create().
         * @param {number} radius The radius of the rounded corner(s), in pixels.
         * @param {number} borderWidth The thickness of the border, in pixels.
         * @param {string} borderColor The border color of the panel.
         * @param {string=} opt_backgroundColor The background color of the panel.
         * @param {number=} opt_corners The corners of the panel to be rounded. Any
         *     corners not specified will be rendered as square corners. Will
         *     default to all square corners if not specified.
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
         *     document we want to render in.
         * @extends {goog.ui.BaseRoundedPanel}
         * @constructor
         * @final
         */
        constructor(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * This method performs all the necessary DOM manipulation to create the panel.
         * Overrides {@link goog.ui.Component#decorateInternal}.
         * @param {Element} element The element to decorate.
         * @protected
         * @override
         */
        decorateInternal(element: Element): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Rounded corner tab renderer for {@link goog.ui.Tab}s.
     * @constructor
     * @extends {goog.ui.TabRenderer}
     * @final
     */
    class RoundedTabRenderer extends goog.ui.TabRenderer {
        /**
         * Rounded corner tab renderer for {@link goog.ui.Tab}s.
         * @constructor
         * @extends {goog.ui.TabRenderer}
         * @final
         */
        constructor();
    
        /**
         * Returns the CSS class name to be applied to the root element of all tabs
         * rendered or decorated using this renderer.
         * @return {string} Renderer-specific CSS class name.
         * @override
         */
        getCssClass(): string;
    
        /**
         * Creates the tab's DOM structure, based on the containing tab bar's location
         * relative to tab contents.  For example, the DOM for a tab in a tab bar
         * located above tab contents would look like this:
         * <pre>
         *   <div class="goog-rounded-tab" title="...">
         *     <table class="goog-rounded-tab-table">
         *       <tbody>
         *         <tr>
         *           <td nowrap>
         *             <div class="goog-rounded-tab-outer-edge"></div>
         *             <div class="goog-rounded-tab-inner-edge"></div>
         *           </td>
         *         </tr>
         *         <tr>
         *           <td nowrap>
         *             <div class="goog-rounded-tab-caption">Hello, world</div>
         *           </td>
         *         </tr>
         *       </tbody>
         *     </table>
         *   </div>
         * </pre>
         * @param {goog.ui.Control} tab Tab to render.
         * @return {Element} Root element for the tab.
         * @override
         */
        createDom(tab: goog.ui.Control): Element;
    
        /**
         * Decorates the element with the tab.  Overrides the superclass implementation
         * by wrapping the tab's content in a table that implements rounded corners.
         * @param {goog.ui.Control} tab Tab to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(tab: goog.ui.Control, element: Element): Element;
    
        /**
         * Creates a table implementing a rounded corner tab.
         * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
         * @param {goog.ui.ControlContent} caption Text caption or DOM structure
         *     to display as the tab's caption.
         * @param {goog.ui.TabBar.Location} location Tab bar location relative to the
         *     tab contents.
         * @return {Element} Table implementing a rounded corner tab.
         * @protected
         */
        createTab(dom: goog.dom.DomHelper, caption: goog.ui.ControlContent, location: goog.ui.TabBar.Location): Element;
    
        /**
         * Creates a table row implementing the tab caption.
         * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
         * @param {goog.ui.ControlContent} caption Text caption or DOM structure
         *     to display as the tab's caption.
         * @return {Element} Tab caption table row.
         * @protected
         */
        createCaption(dom: goog.dom.DomHelper, caption: goog.ui.ControlContent): Element;
    
        /**
         * Creates a table row implementing a rounded tab edge.
         * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
         * @param {boolean} isTopEdge Whether to create a top or bottom edge.
         * @return {Element} Rounded tab edge table row.
         * @protected
         */
        createEdge(dom: goog.dom.DomHelper, isTopEdge: boolean): Element;
    
        /** @override */
        getContentElement(): void;
    }

    /**
     * Creates a ScrollFloater; see file overview for details.
     *
     * @param {Element=} opt_parentElement Where to attach the element when it's
     *     floating.  Default is the document body.  If the floating element
     *     contains form inputs, it will be necessary to attach it to the
     *     corresponding form element, or to an element in the DOM subtree under
     *     the form element.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class ScrollFloater extends goog.ui.Component {
        /**
         * Creates a ScrollFloater; see file overview for details.
         *
         * @param {Element=} opt_parentElement Where to attach the element when it's
         *     floating.  Default is the document body.  If the floating element
         *     contains form inputs, it will be necessary to attach it to the
         *     corresponding form element, or to an element in the DOM subtree under
         *     the form element.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_parentElement?: Element, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Delegates dom creation to superclass, then constructs and
         * decorates required DOM elements.
         * @override
         */
        createDom(): void;
    
        /**
         * Decorates the floated element with the standard ScrollFloater CSS class.
         * @param {Element} element The element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
    
        /** @override */
        enterDocument(): void;
    
        /**
         * Forces the component to update the cached element positions and sizes and
         * to re-evaluate whether the the component should be docked, floated or
         * pinned.
         */
        update(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Sets whether the element should be floated if it scrolls out of view.
         * @param {boolean} enable Whether floating is enabled for this element.
         */
        setScrollingEnabled(enable: boolean): void;
    
        /**
         * @return {boolean} Whether the component is enabled for scroll-floating.
         */
        isScrollingEnabled(): boolean;
    
        /**
         * @return {boolean} Whether the component is currently scroll-floating.
         */
        isFloating(): boolean;
    
        /**
         * @return {boolean} Whether the component is currently pinned to the bottom
         *     of the container.
         */
        isPinned(): boolean;
    
        /**
         * @param {number} offset A vertical offset from the top of the viewport, from
         *    which to start floating the element. Default is 0. This is useful in cases
         *    when there are 'position:fixed' elements covering up part of the viewport.
         */
        setViewportTopOffset(offset: number): void;
    
        /**
         * @param {Element} container An element used to define the boundaries within
         *     which the floater can be positioned. If not specified, scrolling the page
         *     down far enough may result in the floated element extending past the
         *     containing element as it is being scrolled out of the viewport. In some
         *     cases, such as a list with a sticky header, this may be undesirable. If
         *     the container element is specified and the floated element extends past
         *     the bottom of the container, the element will be pinned to the bottom of
         *     the container.
         */
        setContainerElement(container: Element): void;
    }

    /**
     * A selection menu button control.  Extends {@link goog.ui.MenuButton}.
     * Menu contains 'select all' and 'select none' MenuItems for selecting all and
     * no items by default. Other MenuItems can be added by user.
     *
     * The checkbox content fires the action events associated with the 'select all'
     * and 'select none' menu items.
     *
     * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
     *     decorate the menu button; defaults to {@link goog.ui.MenuButtonRenderer}.
     * @param {goog.ui.MenuItemRenderer=} opt_itemRenderer Optional menu item
     *     renderer.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.MenuButton}
     */
    class SelectionMenuButton extends goog.ui.MenuButton {
        /**
         * A selection menu button control.  Extends {@link goog.ui.MenuButton}.
         * Menu contains 'select all' and 'select none' MenuItems for selecting all and
         * no items by default. Other MenuItems can be added by user.
         *
         * The checkbox content fires the action events associated with the 'select all'
         * and 'select none' menu items.
         *
         * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
         *     decorate the menu button; defaults to {@link goog.ui.MenuButtonRenderer}.
         * @param {goog.ui.MenuItemRenderer=} opt_itemRenderer Optional menu item
         *     renderer.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.MenuButton}
         */
        constructor(opt_renderer?: goog.ui.ButtonRenderer, opt_itemRenderer?: goog.ui.MenuItemRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Select button state
         * @type {goog.ui.SelectionMenuButton.SelectionState}
         * @protected
         */
        selectionState: goog.ui.SelectionMenuButton.SelectionState;
    
        /**
         * Enables button and embedded checkbox.
         * @param {boolean} enable Whether to enable or disable the button.
         * @override
         */
        setEnabled(enable: boolean): void;
    
        /**
         * Enables the embedded checkbox.
         * @param {boolean} enable Whether to enable or disable the checkbox.
         * @protected
         */
        setCheckboxEnabled(enable: boolean): void;
    
        /** @override */
        handleMouseDown(): void;
    
        /**
         * Gets the checkbox element. Needed because if decorating html, getContent()
         * may include and comment/text elements in addition to the input element.
         * @return {Element} Checkbox.
         * @protected
         */
        getCheckboxElement(): Element;
    
        /**
         * Checkbox click handler.
         * @param {goog.events.BrowserEvent} e Checkbox click event.
         * @protected
         */
        handleCheckboxClick(e: goog.events.BrowserEvent): void;
    
        /**
         * Set up events related to the checkbox.
         * @protected
         */
        addCheckboxEvent(): void;
    
        /**
         * Adds the checkbox to the button, and adds 2 items to the menu corresponding
         * to 'select all' and 'select none'.
         * @override
         * @protected
         */
        createDom(): void;
    
        /**
         * Creates and adds the checkbox to the button.
         * @protected
         */
        createCheckbox(): void;
    
        /** @override */
        decorateInternal(): void;
    
        /** @override */
        setMenu(): void;
    
        /**
         * Set selection state and update checkbox.
         * @param {goog.ui.SelectionMenuButton.SelectionState} state Selection state.
         */
        setSelectionState(state: goog.ui.SelectionMenuButton.SelectionState): void;
    
        /**
    * Get selection state.
    * @return {goog.ui.SelectionMenuButton.SelectionState} Selection state.
    */
        getSelectionState(): goog.ui.SelectionMenuButton.SelectionState;
    }

    /**
     * Single-selection model.  Dispatches a {@link goog.events.EventType.SELECT}
     * event when a selection is made.
     * @param {Array.<Object>=} opt_items Array of items; defaults to empty.
     * @extends {goog.events.EventTarget}
     * @constructor
     */
    class SelectionModel extends goog.events.EventTarget {
        /**
         * Single-selection model.  Dispatches a {@link goog.events.EventType.SELECT}
         * event when a selection is made.
         * @param {Array.<Object>=} opt_items Array of items; defaults to empty.
         * @extends {goog.events.EventTarget}
         * @constructor
         */
        constructor(opt_items?: Object[]);
    
        /**
         * Returns the selection handler function used by the selection model to change
         * the internal selection state of items under its control.
         * @return {Function} Selection handler function (null if none).
         */
        getSelectionHandler(): Function;
    
        /**
         * Sets the selection handler function to be used by the selection model to
         * change the internal selection state of items under its control.  The
         * function must take two arguments:  an item and a Boolean to indicate whether
         * the item is to be selected or deselected.  Selection handler functions are
         * only needed if the items in the selection model don't natively support the
         * {@code setSelected(Boolean)} interface.
         * @param {Function} handler Selection handler function.
         */
        setSelectionHandler(handler: Function): void;
    
        /**
         * Returns the number of items controlled by the selection model.
         * @return {number} Number of items.
         */
        getItemCount(): number;
    
        /**
         * Returns the 0-based index of the given item within the selection model, or
         * -1 if no such item is found.
         * @param {Object|undefined} item Item to look for.
         * @return {number} Index of the given item (-1 if none).
         */
        indexOfItem(item: any /*Object|any (undefined)*/): number;
    
        /**
         * @return {Object|undefined} The first item, or undefined if there are no items
         *     in the model.
         */
        getFirst(): any /*Object|any (undefined)*/;
    
        /**
         * @return {Object|undefined} The last item, or undefined if there are no items
         *     in the model.
         */
        getLast(): any /*Object|any (undefined)*/;
    
        /**
         * Returns the item at the given 0-based index.
         * @param {number} index Index of the item to return.
         * @return {Object} Item at the given index (null if none).
         */
        getItemAt(index: number): Object;
    
        /**
         * Bulk-adds items to the selection model.  This is more efficient than calling
         * {@link #addItem} for each new item.
         * @param {Array.<Object>|undefined} items New items to add.
         */
        addItems(items: any /*Object[]|any (undefined)*/): void;
    
        /**
         * Adds an item at the end of the list.
         * @param {Object} item Item to add.
         */
        addItem(item: Object): void;
    
        /**
         * Adds an item at the given index.
         * @param {Object} item Item to add.
         * @param {number} index Index at which to add the new item.
         */
        addItemAt(item: Object, index: number): void;
    
        /**
         * Removes the given item (if it exists).  Dispatches a {@code SELECT} event if
         * the removed item was the currently selected item.
         * @param {Object} item Item to remove.
         */
        removeItem(item: Object): void;
    
        /**
         * Removes the item at the given index.
         * @param {number} index Index of the item to remove.
         */
        removeItemAt(index: number): void;
    
        /**
         * @return {Object} The currently selected item, or null if none.
         */
        getSelectedItem(): Object;
    
        /**
         * @return {!Array.<Object>} All items in the selection model.
         */
        getItems(): Object[];
    
        /**
         * Selects the given item, deselecting any previously selected item, and
         * dispatches a {@code SELECT} event.
         * @param {Object} item Item to select (null to clear the selection).
         */
        setSelectedItem(item: Object): void;
    
        /**
         * @return {number} The 0-based index of the currently selected item, or -1
         *     if none.
         */
        getSelectedIndex(): number;
    
        /**
         * Selects the item at the given index, deselecting any previously selected
         * item, and dispatches a {@code SELECT} event.
         * @param {number} index Index to select (-1 to clear the selection).
         */
        setSelectedIndex(index: number): void;
    
        /**
         * Clears the selection model by removing all items from the selection.
         */
        clear(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * A selection control.  Extends {@link goog.ui.MenuButton} by composing a
     * menu with a selection model, and automatically updating the button's caption
     * based on the current selection.
     *
     * Select fires the following events:
     *   CHANGE - after selection changes.
     *
     * @param {goog.ui.ControlContent=} opt_caption Default caption or existing DOM
     *     structure to display as the button's caption when nothing is selected.
     *     Defaults to no caption.
     * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
     *     decorate the control; defaults to {@link goog.ui.MenuButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @param {!goog.ui.MenuRenderer=} opt_menuRenderer Renderer used to render or
     *     decorate the menu; defaults to {@link goog.ui.MenuRenderer}.
     * @constructor
     * @extends {goog.ui.MenuButton}
     */
    class Select extends goog.ui.MenuButton {
        /**
         * A selection control.  Extends {@link goog.ui.MenuButton} by composing a
         * menu with a selection model, and automatically updating the button's caption
         * based on the current selection.
         *
         * Select fires the following events:
         *   CHANGE - after selection changes.
         *
         * @param {goog.ui.ControlContent=} opt_caption Default caption or existing DOM
         *     structure to display as the button's caption when nothing is selected.
         *     Defaults to no caption.
         * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
         * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
         *     decorate the control; defaults to {@link goog.ui.MenuButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @param {!goog.ui.MenuRenderer=} opt_menuRenderer Renderer used to render or
         *     decorate the menu; defaults to {@link goog.ui.MenuRenderer}.
         * @constructor
         * @extends {goog.ui.MenuButton}
         */
        constructor(opt_caption?: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper, opt_menuRenderer?: goog.ui.MenuRenderer);
    
        /** @override */
        enterDocument(): void;
    
        /**
         * Decorates the given element with this control.  Overrides the superclass
         * implementation by initializing the default caption on the select button.
         * @param {Element} element Element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Handles {@link goog.ui.Component.EventType.ACTION} events dispatched by
         * the menu item clicked by the user.  Updates the selection model, calls
         * the superclass implementation to hide the menu, stops the propagation of
         * the event, and dispatches an ACTION event on behalf of the select control
         * itself.  Overrides {@link goog.ui.MenuButton#handleMenuAction}.
         * @param {goog.events.Event} e Action event to handle.
         * @override
         */
        handleMenuAction(e: goog.events.Event): void;
    
        /**
         * Handles {@link goog.events.EventType.SELECT} events raised by the
         * selection model when the selection changes.  Updates the contents of the
         * select button.
         * @param {goog.events.Event} e Selection event to handle.
         */
        handleSelectionChange(e: goog.events.Event): void;
    
        /**
         * Replaces the menu currently attached to the control (if any) with the given
         * argument, and updates the selection model.  Does nothing if the new menu is
         * the same as the old one.  Overrides {@link goog.ui.MenuButton#setMenu}.
         * @param {goog.ui.Menu} menu New menu to be attached to the menu button.
         * @return {goog.ui.Menu|undefined} Previous menu (undefined if none).
         * @override
         */
        setMenu(menu: goog.ui.Menu): any /*goog.ui.Menu|any (undefined)*/;
    
        /**
         * Returns the default caption to be shown when no option is selected.
         * @return {goog.ui.ControlContent} Default caption.
         */
        getDefaultCaption(): goog.ui.ControlContent;
    
        /**
         * Sets the default caption to the given string or DOM structure.
         * @param {goog.ui.ControlContent} caption Default caption to be shown
         *    when no option is selected.
         */
        setDefaultCaption(caption: goog.ui.ControlContent): void;
    
        /**
         * Adds a new menu item at the end of the menu.
         * @param {goog.ui.Control} item Menu item to add to the menu.
         * @override
         */
        addItem(item: goog.ui.Control): void;
    
        /**
         * Adds a new menu item at a specific index in the menu.
         * @param {goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu item to add to the
         *     menu.
         * @param {number} index Index at which to insert the menu item.
         * @override
         */
        addItemAt(item: any /*goog.ui.MenuItem|goog.ui.MenuSeparator*/, index: number): void;
    
        /**
         * Removes an item from the menu and disposes it.
         * @param {goog.ui.MenuItem|goog.ui.MenuSeparator} item The menu item to remove.
         * @override
         */
        removeItem(item: any /*goog.ui.MenuItem|goog.ui.MenuSeparator*/): void;
    
        /**
         * Removes a menu item at a given index in the menu and disposes it.
         * @param {number} index Index of item.
         * @override
         */
        removeItemAt(index: number): void;
    
        /**
         * Selects the specified option (assumed to be in the select menu), and
         * deselects the previously selected option, if any.  A null argument clears
         * the selection.
         * @param {goog.ui.MenuItem} item Option to be selected (null to clear
         *     the selection).
         */
        setSelectedItem(item: goog.ui.MenuItem): void;
    
        /**
         * Selects the option at the specified index, or clears the selection if the
         * index is out of bounds.
         * @param {number} index Index of the option to be selected.
         */
        setSelectedIndex(index: number): void;
    
        /**
         * Selects the first option found with an associated value equal to the
         * argument, or clears the selection if no such option is found.  A null
         * argument also clears the selection.  Overrides {@link
         * goog.ui.Button#setValue}.
         * @param {*} value Value of the option to be selected (null to clear
         *     the selection).
         * @override
         */
        setValue(value: any): void;
    
        /**
         * Gets the value associated with the currently selected option (null if none).
         *
         * Note that unlike {@link goog.ui.Button#getValue} which this method overrides,
         * the "value" of a Select instance is the value of its selected menu item, not
         * its own value. This makes a difference because the "value" of a Button is
         * reset to the value of the element it decorates when it's added to the DOM
         * (via ButtonRenderer), whereas the value of the selected item is unaffected.
         * So while setValue() has no effect on a Button before it is added to the DOM,
         * it will make a persistent change to a Select instance (which is consistent
         * with any changes made by {@link goog.ui.Select#setSelectedItem} and
         * {@link goog.ui.Select#setSelectedIndex}).
         *
         * @override
         */
        getValue(): void;
    
        /**
         * Returns the currently selected option.
         * @return {goog.ui.MenuItem} The currently selected option (null if none).
         */
        getSelectedItem(): goog.ui.MenuItem;
    
        /**
         * Returns the index of the currently selected option.
         * @return {number} 0-based index of the currently selected option (-1 if none).
         */
        getSelectedIndex(): number;
    
        /**
         * @return {goog.ui.SelectionModel} The selection model.
         * @protected
         */
        getSelectionModel(): goog.ui.SelectionModel;
    
        /**
         * Updates the caption to be shown in the select button.  If no option is
         * selected and a default caption is set, sets the caption to the default
         * caption; otherwise to the empty string.
         * @protected
         */
        updateCaption(): void;
    
        /**
         * Opens or closes the menu.  Overrides {@link goog.ui.MenuButton#setOpen} by
         * highlighting the currently selected option on open.
         * @param {boolean} open Whether to open or close the menu.
         * @param {goog.events.Event=} opt_e Mousedown event that caused the menu to
         *     be opened.
         * @override
         */
        setOpen(open: boolean, opt_e?: goog.events.Event): void;
    }

    /**
     * Class representing a separator.  Although it extends {@link goog.ui.Control},
     * the Separator class doesn't allocate any event handlers, nor does it change
     * its appearance on mouseover, etc.
     * @param {goog.ui.MenuSeparatorRenderer=} opt_renderer Renderer to render or
     *    decorate the separator; defaults to {@link goog.ui.MenuSeparatorRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *    document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Separator extends goog.ui.Control {
        /**
         * Class representing a separator.  Although it extends {@link goog.ui.Control},
         * the Separator class doesn't allocate any event handlers, nor does it change
         * its appearance on mouseover, etc.
         * @param {goog.ui.MenuSeparatorRenderer=} opt_renderer Renderer to render or
         *    decorate the separator; defaults to {@link goog.ui.MenuSeparatorRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *    document interaction.
         * @constructor
         * @extends {goog.ui.Control}
         */
        constructor(opt_renderer?: goog.ui.MenuSeparatorRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Configures the component after its DOM has been rendered.  Overrides
         * {@link goog.ui.Control#enterDocument} by making sure no event handler
         * is allocated.
         * @override
         */
        enterDocument(): void;
    }

    /**
     * Will construct a chart using Google's chartserver.
     *
     * @param {goog.ui.ServerChart.ChartType} type The chart type.
     * @param {number=} opt_width The width of the chart.
     * @param {number=} opt_height The height of the chart.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM Helper.
     * @param {string=} opt_uri Optional uri used to connect to the chart server, if
     *     different than goog.ui.ServerChart.CHART_SERVER_SCHEME_INDEPENDENT_URI.
     * @constructor
     * @extends {goog.ui.Component}
     *
     * @deprecated Google Chart Server has been deprecated. See
     *     https://developers.google.com/chart/image/ for details.
     * @final
     */
    class ServerChart extends goog.ui.Component {
        /**
         * Will construct a chart using Google's chartserver.
         *
         * @param {goog.ui.ServerChart.ChartType} type The chart type.
         * @param {number=} opt_width The width of the chart.
         * @param {number=} opt_height The height of the chart.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM Helper.
         * @param {string=} opt_uri Optional uri used to connect to the chart server, if
         *     different than goog.ui.ServerChart.CHART_SERVER_SCHEME_INDEPENDENT_URI.
         * @constructor
         * @extends {goog.ui.Component}
         *
         * @deprecated Google Chart Server has been deprecated. See
         *     https://developers.google.com/chart/image/ for details.
         * @final
         */
        constructor(type: goog.ui.ServerChart.ChartType, opt_width?: number, opt_height?: number, opt_domHelper?: goog.dom.DomHelper, opt_uri?: string);
    
        /**
         * Creates the DOM node (image) needed for the Chart
         * @override
         */
        createDom(): void;
    
        /**
         * Decorate an image already in the DOM.
         * Expects the following structure:
         * <pre>
         *   - img
         * </pre>
         *
         * @param {Element} img Image to decorate.
         * @override
         */
        decorateInternal(img: Element): void;
    
        /**
         * Updates the image if any of the data or settings have changed.
         */
        updateChart(): void;
    
        /**
         * Sets the URI of the chart.
         *
         * @param {goog.Uri} uri The chart URI.
         */
        setUri(uri: goog.Uri): void;
    
        /**
         * Returns the URI of the chart.
         *
         * @return {goog.Uri} The chart URI.
         */
        getUri(): goog.Uri;
    
        /**
         * Returns the upper limit on the length of the chart image URI, after encoding.
         * If the URI's length equals or exceeds it, goog.ui.ServerChart.UriTooLongEvent
         * is dispatched on the goog.ui.ServerChart object.
         *
         * @return {number} The chart URI length limit.
         */
        getUriLengthLimit(): number;
    
        /**
         * Sets the upper limit on the length of the chart image URI, after encoding.
         * If the URI's length equals or exceeds it, goog.ui.ServerChart.UriTooLongEvent
         * is dispatched on the goog.ui.ServerChart object.
         *
         * @param {number} uriLengthLimit The chart URI length limit.
         */
        setUriLengthLimit(uriLengthLimit: number): void;
    
        /**
         * Sets the 'chg' parameter of the chart Uri.
         * This is used by various types of charts to specify Grids.
         *
         * @param {string} value Value for the 'chg' parameter in the chart Uri.
         */
        setGridParameter(value: string): void;
    
        /**
         * Returns the 'chg' parameter of the chart Uri.
         * This is used by various types of charts to specify Grids.
         *
         * @return {string|undefined} The 'chg' parameter of the chart Uri.
         */
        getGridParameter(): any /*string|any (undefined)*/;
    
        /**
         * Sets the 'chm' parameter of the chart Uri.
         * This is used by various types of charts to specify Markers.
         *
         * @param {string} value Value for the 'chm' parameter in the chart Uri.
         */
        setMarkerParameter(value: string): void;
    
        /**
         * Returns the 'chm' parameter of the chart Uri.
         * This is used by various types of charts to specify Markers.
         *
         * @return {string|undefined} The 'chm' parameter of the chart Uri.
         */
        getMarkerParameter(): any /*string|any (undefined)*/;
    
        /**
         * Sets the 'chp' parameter of the chart Uri.
         * This is used by various types of charts to specify certain options.
         * e.g., finance charts use this to designate which line is the 0 axis.
         *
         * @param {string|number} value Value for the 'chp' parameter in the chart Uri.
         */
        setMiscParameter(value: any /*string|number*/): void;
    
        /**
         * Returns the 'chp' parameter of the chart Uri.
         * This is used by various types of charts to specify certain options.
         * e.g., finance charts use this to designate which line is the 0 axis.
         *
         * @return {string|undefined} The 'chp' parameter of the chart Uri.
         */
        getMiscParameter(): any /*string|any (undefined)*/;
    
        /**
         * Sets the background fill.
         *
         * @param {Array.<Object>} fill An array of background fill specification
         *     objects. Each object may have the following properties:
         *     {string} area The area to fill, either 'bg' for background or 'c' for
         *         chart area.  The default is 'bg'.
         *     {string} color (required) The color of the background fill.
         *     // TODO(user): Add support for gradient/stripes, which requires
         *     // a different object structure.
         */
        setBackgroundFill(fill: Object[]): void;
    
        /**
         * Returns the background fill.
         *
         * @return {Array.<Object>} An array of background fill specifications.
         *     If the fill specification string is in an unsupported format, the method
         *    returns an empty array.
         */
        getBackgroundFill(): Object[];
    
        /**
         * Sets the encoding type.
         *
         * @param {goog.ui.ServerChart.EncodingType} type Desired data encoding type.
         */
        setEncodingType(type: goog.ui.ServerChart.EncodingType): void;
    
        /**
         * Gets the encoding type.
         *
         * @return {goog.ui.ServerChart.EncodingType} The encoding type.
         */
        getEncodingType(): goog.ui.ServerChart.EncodingType;
    
        /**
         * Sets the chart type.
         *
         * @param {goog.ui.ServerChart.ChartType} type The desired chart type.
         */
        setType(type: goog.ui.ServerChart.ChartType): void;
    
        /**
         * Returns the chart type.
         *
         * @return {goog.ui.ServerChart.ChartType} The chart type.
         */
        getType(): goog.ui.ServerChart.ChartType;
    
        /**
         * Sets the chart size.
         *
         * @param {number=} opt_width Optional chart width, defaults to 300.
         * @param {number=} opt_height Optional chart height, defaults to 150.
         */
        setSize(opt_width?: number, opt_height?: number): void;
    
        /**
         * Returns the chart size.
         *
         * @return {Array.<string>} [Width, Height].
         */
        getSize(): string[];
    
        /**
         * Sets the minimum value of the chart.
         *
         * @param {number} minValue The minimum value of the chart.
         */
        setMinValue(minValue: number): void;
    
        /**
         * @return {number} The minimum value of the chart.
         */
        getMinValue(): number;
    
        /**
         * Sets the maximum value of the chart.
         *
         * @param {number} maxValue The maximum value of the chart.
         */
        setMaxValue(maxValue: number): void;
    
        /**
         * @return {number} The maximum value of the chart.
         */
        getMaxValue(): number;
    
        /**
         * Sets the chart margins.
         *
         * @param {number} leftMargin The size in pixels of the left margin.
         * @param {number} rightMargin The size in pixels of the right margin.
         * @param {number} topMargin The size in pixels of the top margin.
         * @param {number} bottomMargin The size in pixels of the bottom margin.
         */
        setMargins(leftMargin: number, rightMargin: number, topMargin: number, bottomMargin: number): void;
    
        /**
         * Sets the number of grid lines along the X-axis.
         *
         * @param {number} gridlines The number of X-axis grid lines.
         */
        setGridX(gridlines: number): void;
    
        /**
         * @return {number} The number of gridlines along the X-axis.
         */
        getGridX(): number;
    
        /**
         * Sets the number of grid lines along the Y-axis.
         *
         * @param {number} gridlines The number of Y-axis grid lines.
         */
        setGridY(gridlines: number): void;
    
        /**
         * @return {number} The number of gridlines along the Y-axis.
         */
        getGridY(): number;
    
        /**
         * Sets the X Labels for the chart.
         *
         * @param {Array.<string>} labels The X Labels for the chart.
         */
        setXLabels(labels: string[]): void;
    
        /**
         * @return {Array.<string>} The X Labels for the chart.
         */
        getXLabels(): string[];
    
        /**
         * @return {boolean} Whether the chart is a bar chart.
         */
        isBarChart(): boolean;
    
        /**
         * @return {boolean} Whether the chart is a pie chart.
         */
        isPieChart(): boolean;
    
        /**
         * @return {boolean} Whether the chart is a grouped bar chart.
         */
        isGroupedBarChart(): boolean;
    
        /**
         * @return {boolean} Whether the chart is a horizontal bar chart.
         */
        isHorizontalBarChart(): boolean;
    
        /**
         * @return {boolean} Whether the chart is a line chart.
         */
        isLineChart(): boolean;
    
        /**
         * @return {boolean} Whether the chart is a map.
         */
        isMap(): boolean;
    
        /**
         * @return {boolean} Whether the chart is a stacked bar chart.
         */
        isStackedBarChart(): boolean;
    
        /**
         * @return {boolean} Whether the chart is a vertical bar chart.
         */
        isVerticalBarChart(): boolean;
    
        /**
         * Sets the Left Labels for the chart.
         * NOTE: The array should start with the lowest value, and then
         *       move progessively up the axis. So if you want labels
         *       from 0 to 100 with 0 at bottom of the graph, then you would
         *       want to pass something like [0,25,50,75,100].
         *
         * @param {Array.<string>} labels The Left Labels for the chart.
         */
        setLeftLabels(labels: string[]): void;
    
        /**
         * @return {Array.<string>} The Left Labels for the chart.
         */
        getLeftLabels(): string[];
    
        /**
         * Sets the given ChartServer parameter.
         *
         * @param {goog.ui.ServerChart.UriParam} key The ChartServer parameter to set.
         * @param {string} value The value to set for the ChartServer parameter.
         */
        setParameterValue(key: goog.ui.ServerChart.UriParam, value: string): void;
    
        /**
         * Removes the given ChartServer parameter.
         *
         * @param {goog.ui.ServerChart.UriParam} key The ChartServer parameter to
         *     remove.
         */
        removeParameter(key: goog.ui.ServerChart.UriParam): void;
    
        /**
         * Sets the Right Labels for the chart.
         * NOTE: The array should start with the lowest value, and then
         *       move progessively up the axis. So if you want labels
         *       from 0 to 100 with 0 at bottom of the graph, then you would
         *       want to pass something like [0,25,50,75,100].
         *
         * @param {Array.<string>} labels The Right Labels for the chart.
         */
        setRightLabels(labels: string[]): void;
    
        /**
         * @return {Array.<string>} The Right Labels for the chart.
         */
        getRightLabels(): string[];
    
        /**
         * Sets the position relative to the chart where the legend is to be displayed.
         *
         * @param {goog.ui.ServerChart.LegendPosition} value Legend position.
         */
        setLegendPosition(value: goog.ui.ServerChart.LegendPosition): void;
    
        /**
         * Returns the position relative to the chart where the legend is to be
         * displayed.
         *
         * @return {goog.ui.ServerChart.LegendPosition} Legend position.
         */
        getLegendPosition(): goog.ui.ServerChart.LegendPosition;
    
        /**
         * Sets the number of "visible" data sets. All data sets that come after
         * the visible data set are not drawn as part of the chart. Instead, they
         * are available for positioning markers.
         * @param {?number} n The number of visible data sets, or null if all data
         * sets are to be visible.
         */
        setNumVisibleDataSets(n: number): void;
    
        /**
         * Returns the number of "visible" data sets. All data sets that come after
         * the visible data set are not drawn as part of the chart. Instead, they
         * are available for positioning markers.
         *
         * @return {?number} The number of visible data sets, or null if all data
         * sets are visible.
         */
        getNumVisibleDataSets(): number;
    
        /**
         * Sets the weight function for a Venn Diagram along with the associated
         *     colors and legend text. Weights are assigned as follows:
         *     weights[0] is relative area of circle A.
         *     weights[1] is relative area of circle B.
         *     weights[2] is relative area of circle C.
         *     weights[3] is relative area of overlap of circles A and B.
         *     weights[4] is relative area of overlap of circles A and C.
         *     weights[5] is relative area of overlap of circles B and C.
         *     weights[6] is relative area of overlap of circles A, B and C.
         * For a two circle Venn Diagram the weights are assigned as follows:
         *     weights[0] is relative area of circle A.
         *     weights[1] is relative area of circle B.
         *     weights[2] is relative area of overlap of circles A and B.
         *
         * @param {Array.<number>} weights The relative weights of the circles.
         * @param {Array.<string>=} opt_legendText The legend labels for the circles.
         * @param {Array.<string>=} opt_colors The colors for the circles.
         */
        setVennSeries(weights: number[], opt_legendText?: string[], opt_colors?: string[]): void;
    
        /**
         * Sets the title of the chart.
         *
         * @param {string} title The chart title.
         */
        setTitle(title: string): void;
    
        /**
         * Sets the size of the chart title.
         *
         * @param {number} size The title size, in points.
         */
        setTitleSize(size: number): void;
    
        /**
         * @return {number} size The title size, in points.
         */
        getTitleSize(): number;
    
        /**
         * Sets the color of the chart title.
         *
         * NOTE: The color string should NOT have a '#' at the beginning of it.
         *
         * @param {string} color The hex value for the title color.
         */
        setTitleColor(color: string): void;
    
        /**
         * @return {string} color The hex value for the title color.
         */
        getTitleColor(): string;
    
        /**
         * Adds a legend to the chart.
         *
         * @param {Array.<string>} legend The legend to add.
         */
        setLegend(legend: string[]): void;
    
        /**
         * Sets the data scaling.
         * NOTE: This also changes the encoding type because data scaling will
         *     only work with {@code goog.ui.ServerChart.EncodingType.TEXT}
         *     encoding.
         * @param {number} minimum The lowest number to apply to the data.
         * @param {number} maximum The highest number to apply to the data.
         */
        setDataScaling(minimum: number, maximum: number): void;
    
        /**
         * Sets the widths of the bars and the spaces between the bars in a bar
         * chart.
         * NOTE: If the space between groups is specified but the space between
         *     bars is left undefined, the space between groups will be interpreted
         *     as the space between bars because this is the behavior exposed
         *     in the external developers guide.
         * @param {number} barWidth The width of a bar in pixels.
         * @param {number=} opt_spaceBars The width of the space between
         *     bars in a group in pixels.
         * @param {number=} opt_spaceGroups The width of the space between
         *     groups.
         */
        setBarSpaceWidths(barWidth: number, opt_spaceBars?: number, opt_spaceGroups?: number): void;
    
        /**
         * Specifies that the bar width in a bar chart should be calculated
         * automatically given the space available in the chart, while optionally
         * setting the spaces between the bars.
         * NOTE: If the space between groups is specified but the space between
         *     bars is left undefined, the space between groups will be interpreted
         *     as the space between bars because this is the behavior exposed
         *     in the external developers guide.
         * @param {number=} opt_spaceBars The width of the space between
         *     bars in a group in pixels.
         * @param {number=} opt_spaceGroups The width of the space between
         *     groups.
         */
        setAutomaticBarWidth(opt_spaceBars?: number, opt_spaceGroups?: number): void;
    
        /**
         * Adds a multi-axis to the chart, and sets its type. Multiple axes of the same
         * type can be added.
         *
         * @param {goog.ui.ServerChart.MultiAxisType} axisType The desired axis type.
         * @return {number} The index of the newly inserted axis, suitable for feeding
         *     to the setMultiAxis*() functions.
         */
        addMultiAxis(axisType: goog.ui.ServerChart.MultiAxisType): number;
    
        /**
         * Returns the axis type for the given axis, or all of them in an array if the
         * axis number is not given.
         *
         * @param {number=} opt_axisNumber The axis index, as returned by addMultiAxis.
         * @return {goog.ui.ServerChart.MultiAxisType|
         *     Array.<goog.ui.ServerChart.MultiAxisType>}
         *     The axis type for the given axis, or all of them in an array if the
         *     axis number is not given.
         */
        getMultiAxisType(opt_axisNumber?: number): void;
    
        /**
         * Sets the label text (usually multiple values) for a given axis, overwriting
         * any existing values.
         *
         * @param {number} axisNumber The axis index, as returned by addMultiAxis.
         * @param {Array.<string>} labelText The actual label text to be added.
         */
        setMultiAxisLabelText(axisNumber: number, labelText: string[]): void;
    
        /**
         * Returns the label text, or all of them in a two-dimensional array if the
         * axis number is not given.
         *
         * @param {number=} opt_axisNumber The axis index, as returned by addMultiAxis.
         * @return {Object|Array.<string>} The label text, or all of them in a
         *     two-dimensional array if the axis number is not given.
         */
        getMultiAxisLabelText(opt_axisNumber?: number): any /*Object|string[]*/;
    
        /**
         * Sets the label positions for a given axis, overwriting any existing values.
         * The label positions are assumed to be floating-point numbers within the
         * range of the axis.
         *
         * @param {number} axisNumber The axis index, as returned by addMultiAxis.
         * @param {Array.<number>} labelPosition The actual label positions to be added.
         */
        setMultiAxisLabelPosition(axisNumber: number, labelPosition: number[]): void;
    
        /**
         * Returns the label positions for a given axis number, or all of them in a
         * two-dimensional array if the axis number is not given.
         *
         * @param {number=} opt_axisNumber The axis index, as returned by addMultiAxis.
         * @return {Object|Array.<number>} The label positions for a given axis number,
         *     or all of them in a two-dimensional array if the axis number is not
         *     given.
         */
        getMultiAxisLabelPosition(opt_axisNumber?: number): any /*Object|number[]*/;
    
        /**
         * Sets the label range for a given axis, overwriting any existing range.
         * The default range is from 0 to 100. If the start value is larger than the
         * end value, the axis direction is reversed.  rangeStart and rangeEnd must
         * be two different finite numbers.
         *
         * @param {number} axisNumber The axis index, as returned by addMultiAxis.
         * @param {number} rangeStart The new start of the range.
         * @param {number} rangeEnd The new end of the range.
         * @param {number=} opt_interval The interval between axis labels.
         */
        setMultiAxisRange(axisNumber: number, rangeStart: number, rangeEnd: number, opt_interval?: number): void;
    
        /**
         * Returns the label range for a given axis number as a two-element array of
         * (range start, range end), or all of them in a two-dimensional array if the
         * axis number is not given.
         *
         * @param {number=} opt_axisNumber The axis index, as returned by addMultiAxis.
         * @return {Object|Array.<number>} The label range for a given axis number as a
         *     two-element array of (range start, range end), or all of them in a
         *     two-dimensional array if the axis number is not given.
         */
        getMultiAxisRange(opt_axisNumber?: number): any /*Object|number[]*/;
    
        /**
         * Sets the label style for a given axis, overwriting any existing style.
         * The default style is as follows: Default is x-axis labels are centered, left
         * hand y-axis labels are right aligned, right hand y-axis labels are left
         * aligned. The font size and alignment are optional parameters.
         *
         * NOTE: The color string should NOT have a '#' at the beginning of it.
         *
         * @param {number} axisNumber The axis index, as returned by addMultiAxis.
         * @param {string} color The hex value for this label's color.
         * @param {number=} opt_fontSize The label font size, in pixels.
         * @param {goog.ui.ServerChart.MultiAxisAlignment=} opt_alignment The label
         *     alignment.
         * @param {goog.ui.ServerChart.AxisDisplayType=} opt_axisDisplay The axis
         *     line and ticks.
         */
        setMultiAxisLabelStyle(axisNumber: number, color: string, opt_fontSize?: number, opt_alignment?: goog.ui.ServerChart.MultiAxisAlignment, opt_axisDisplay?: goog.ui.ServerChart.AxisDisplayType): void;
    
        /**
         * Returns the label style for a given axis number as a one- to three-element
         * array, or all of them in a two-dimensional array if the axis number is not
         * given.
         *
         * @param {number=} opt_axisNumber The axis index, as returned by addMultiAxis.
         * @return {Object|Array.<number>} The label style for a given axis number as a
         *     one- to three-element array, or all of them in a two-dimensional array if
         *     the axis number is not given.
         */
        getMultiAxisLabelStyle(opt_axisNumber?: number): any /*Object|number[]*/;
    
        /**
         * Adds a data set.
         * NOTE: The color string should NOT have a '#' at the beginning of it.
         *
         * @param {Array.<number|null>} data An array of numbers (values can be
         *     NaN or null).
         * @param {string} color The hex value for this data set's color.
         * @param {string=} opt_legendText The legend text, if any, for this data
         *     series. NOTE: If specified, all previously added data sets must also
         *     have a legend text.
         */
        addDataSet(data: any /*number|any (null)*/[], color: string, opt_legendText?: string): void;
    
        /**
         * Clears the data sets from the graph. All data, including the colors and
         * legend text, is cleared.
         */
        clearDataSets(): void;
    
        /**
         * Returns the given data set or all of them in a two-dimensional array if
         * the set number is not given.
         *
         * @param {number=} opt_setNumber Optional data set number to get.
         * @return {Array} The given data set or all of them in a two-dimensional array
         *     if the set number is not given.
         */
        getData(opt_setNumber?: number): any[];
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * This creates a SliderBase object.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {(function(number):string)=} opt_labelFn An optional function mapping
     *     slider values to a description of the value.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class SliderBase extends goog.ui.Component {
        /**
         * This creates a SliderBase object.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {(function(number):string)=} opt_labelFn An optional function mapping
         *     slider values to a description of the value.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_labelFn?: any /*(_0: number) => string*/);
    
        /**
         * The underlying range model
         * @type {goog.ui.RangeModel}
         * @protected
         */
        rangeModel: goog.ui.RangeModel;
    
        /**
         * The minThumb dom-element, pointing to the start of the selected range.
         * @type {HTMLDivElement}
         * @protected
         */
        valueThumb: HTMLDivElement;
    
        /**
         * The maxThumb dom-element, pointing to the end of the selected range.
         * @type {HTMLDivElement}
         * @protected
         */
        extentThumb: HTMLDivElement;
    
        /**
         * The dom-element highlighting the selected range.
         * @type {HTMLDivElement}
         * @protected
         */
        rangeHighlight: HTMLDivElement;
    
        /**
         * Enables/disables true RTL behavior.  This should be called immediately after
         * construction.  This is a temporary flag to allow clients to transition
         * to the new behavior at their convenience.  At some point it will be the
         * default.
         * @param {boolean} flipForRtl True if the slider should be flipped for RTL,
         *     false otherwise.
         */
        enableFlipForRtl(flipForRtl: boolean): void;
    
        /**
         * Returns the CSS class applied to the slider element for the given
         * orientation. Subclasses must override this method.
         * @param {goog.ui.SliderBase.Orientation} orient The orientation.
         * @return {string} The CSS class applied to slider elements.
         * @protected
         */
        getCssClass: any /*missing*/;
    
        /** @override */
        createDom(): void;
    
        /**
         * Subclasses must implement this method and set the valueThumb and
         * extentThumb to non-null values. They can also set the rangeHighlight
         * element if a range highlight is desired.
         * @type {function() : void}
         * @protected
         */
        createThumbs: () => void;
    
        /** @override */
        decorateInternal(): void;
    
        /**
         * Called when the DOM for the component is for sure in the document.
         * Subclasses should override this method to set this element's role.
         * @override
         */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /**
         * Returns the value to use for the current mouse position
         * @param {goog.events.Event} e  The mouse event object.
         * @return {number} The value that this mouse position represents.
         */
        getValueFromMousePosition(e: goog.events.Event): number;
    
        /**
         * Returns whether a thumb is currently being dragged with the mouse (or via
         * touch). Note that changing the value with keyboard, mouswheel, or via
         * move-to-point click immediately sends a CHANGE event without going through a
         * dragged state.
         * @return {boolean} Whether a dragger is currently being dragged.
         */
        isDragging(): boolean;
    
        /**
         * Moves the thumbs by the specified delta as follows
         * - as long as both thumbs stay within [min,max], both thumbs are moved
         * - once a thumb reaches or exceeds min (or max, respectively), it stays
         * - at min (or max, respectively).
         * In case both thumbs have reached min (or max), no change event will fire.
         * If the specified delta is smaller than the step size, it will be rounded
         * to the step size.
         * @param {number} delta The delta by which to move the selected range.
         */
        moveThumbs(delta: number): void;
    
        /**
         * Sets the value and extent of the underlying range model. We enforce that
         * getMinimum() <= value <= getMaximum() - extent and
         * getMinExtent <= extent <= getMaximum() - getValue()
         * If this is not satisfied for the given extent, the call is ignored and no
         * CHANGE event fires. This is a utility method to allow setting the thumbs
         * simultaneously and ensuring that only one event fires.
         * @param {number} value The value to which to set the value.
         * @param {number} extent The value to which to set the extent.
         */
        setValueAndExtent(value: number, extent: number): void;
    
        /**
         * @return {number} The minimum value.
         */
        getMinimum(): number;
    
        /**
         * Sets the minimum number.
         * @param {number} min The minimum value.
         */
        setMinimum(min: number): void;
    
        /**
         * @return {number} The maximum value.
         */
        getMaximum(): number;
    
        /**
         * Sets the maximum number.
         * @param {number} max The maximum value.
         */
        setMaximum(max: number): void;
    
        /**
         * @return {HTMLDivElement} The value thumb element.
         */
        getValueThumb(): HTMLDivElement;
    
        /**
         * @return {HTMLDivElement} The extent thumb element.
         */
        getExtentThumb(): HTMLDivElement;
    
        /**
         * Call back when the internal range model changes. Sub-classes may override
         * and re-enter this method to update a11y state. Consider protected.
         * @param {goog.events.Event} e The event object.
         * @protected
         */
        handleRangeModelChange(e: goog.events.Event): void;
    
        /**
         * Returns the position to move the handle to for a given value
         * @param {number} val  The value to get the coordinate for.
         * @return {goog.math.Coordinate} Coordinate with either x or y set.
         */
        getThumbCoordinateForValue(val: number): goog.math.Coordinate;
    
        /**
         * Sets the value and starts animating the handle towards that position.
         * @param {number} v Value to set and animate to.
         */
        animatedSetValue(v: number): void;
    
        /**
         * @return {boolean} True if the slider is animating, false otherwise.
         */
        isAnimating(): boolean;
    
        /**
         * Sets the factory that will be used to create additional animations to be
         * played when animating to a new value.  These animations can be for any
         * element and the animations will be played in addition to the default
         * animation(s).  The animations will also be played in the same parallel queue
         * ensuring that all animations are played at the same time.
         * @see #animatedSetValue
         *
         * @param {goog.ui.SliderBase.AnimationFactory} factory The animation factory to
         *     use.  This will not change the default animations played by the slider.
         *     It will only allow for additional animations.
         */
        setAdditionalAnimations(factory: goog.ui.SliderBase.AnimationFactory): void;
    
        /**
         * Changes the orientation.
         * @param {goog.ui.SliderBase.Orientation} orient The orientation.
         */
        setOrientation(orient: goog.ui.SliderBase.Orientation): void;
    
        /**
         * @return {goog.ui.SliderBase.Orientation} the orientation of the slider.
         */
        getOrientation(): goog.ui.SliderBase.Orientation;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * @return {number} The amount to increment/decrement for page up/down as well
         *     as when holding down the mouse button on the background.
         */
        getBlockIncrement(): number;
    
        /**
         * Sets the amount to increment/decrement for page up/down as well as when
         * holding down the mouse button on the background.
         *
         * @param {number} value The value to set the block increment to.
         */
        setBlockIncrement(value: number): void;
    
        /**
         * Sets the minimal value that the extent may have.
         *
         * @param {number} value The minimal value for the extent.
         */
        setMinExtent(value: number): void;
    
        /**
         * @return {number} The amount to increment/decrement for up, down, left and
         *     right arrow keys and mouse wheel events.
         */
        getUnitIncrement(): number;
    
        /**
         * Sets the amount to increment/decrement for up, down, left and right arrow
         * keys and mouse wheel events.
         * @param {number} value  The value to set the unit increment to.
         */
        setUnitIncrement(value: number): void;
    
        /**
         * @return {?number} The step value used to determine how to round the value.
         */
        getStep(): number;
    
        /**
         * Sets the step value. The step value is used to determine how to round the
         * value.
         * @param {?number} step  The step size.
         */
        setStep(step: number): void;
    
        /**
         * @return {boolean} Whether clicking on the backgtround should move directly to
         *     that point.
         */
        getMoveToPointEnabled(): boolean;
    
        /**
         * Sets whether clicking on the background should move directly to that point.
         * @param {boolean} val Whether clicking on the background should move directly
         *     to that point.
         */
        setMoveToPointEnabled(val: boolean): void;
    
        /**
         * @return {number} The value of the underlying range model.
         */
        getValue(): number;
    
        /**
         * Sets the value of the underlying range model. We enforce that
         * getMinimum() <= value <= getMaximum() - getExtent()
         * If this is not satisifed for the given value, the call is ignored and no
         * CHANGE event fires.
         * @param {number} value The value.
         */
        setValue(value: number): void;
    
        /**
         * @return {number} The value of the extent of the underlying range model.
         */
        getExtent(): number;
    
        /**
         * Sets the extent of the underlying range model. We enforce that
         * getMinExtent() <= extent <= getMaximum() - getValue()
         * If this is not satisifed for the given extent, the call is ignored and no
         * CHANGE event fires.
         * @param {number} extent The value to which to set the extent.
         */
        setExtent(extent: number): void;
    
        /**
         * Change the visibility of the slider.
         * You must call this if you had set the slider's value when it was invisible.
         * @param {boolean} visible Whether to show the slider.
         */
        setVisible(visible: boolean): void;
    
        /**
         * Set a11y roles and state.
         * @protected
         */
        setAriaRoles(): void;
    
        /**
         * Set a11y roles and state when values change.
         * @protected
         */
        updateAriaStates(): void;
    
        /**
         * Enables or disables mouse wheel handling for the slider. The mouse wheel
         * handler enables the user to change the value of slider using a mouse wheel.
         *
         * @param {boolean} enable Whether to enable mouse wheel handling.
         */
        setHandleMouseWheel(enable: boolean): void;
    
        /**
         * @return {boolean} Whether the slider handles mousewheel.
         */
        isHandleMouseWheel(): boolean;
    
        /**
         * Enables or disables the slider. A disabled slider will ignore all
         * user-initiated events. Also fires goog.ui.Component.EventType.ENABLE/DISABLE
         * event as appropriate.
         * @param {boolean} enable Whether to enable the slider or not.
         */
        setEnabled(enable: boolean): void;
    
        /**
         * @return {boolean} Whether the slider is enabled or not.
         */
        isEnabled(): boolean;
    
        /**
         * @return {?string} The text value for the slider's current value, or null if
         *     unavailable.
         */
        getTextValue(): string;
    }

    /**
     * This creates a slider object.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {(function(number):string)=} opt_labelFn An optional function mapping
     *     slider values to a description of the value.
     * @constructor
     * @extends {goog.ui.SliderBase}
     */
    class Slider extends goog.ui.SliderBase {
        /**
         * This creates a slider object.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {(function(number):string)=} opt_labelFn An optional function mapping
         *     slider values to a description of the value.
         * @constructor
         * @extends {goog.ui.SliderBase}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_labelFn?: any /*(_0: number) => string*/);
    
        /**
         * Returns CSS class applied to the slider element.
         * @param {goog.ui.SliderBase.Orientation} orient Orientation of the slider.
         * @return {string} The CSS class applied to the slider element.
         * @protected
         * @override
         */
        getCssClass(orient: goog.ui.SliderBase.Orientation): string;
    
        /** @override */
        createThumbs(): void;
    }

    /**
     * Creates a behavior for combining two controls. The behavior is triggered
     * by a given event type which applies the behavior handler.
     * Can be used to also render or decorate  the controls.
     * For a usage example see {@link goog.ui.ColorSplitBehavior}
     *
     * @param {goog.ui.Control} first A ui control.
     * @param {goog.ui.Control} second A ui control.
     * @param {function(goog.ui.Control,Event)=} opt_behaviorHandler A handler
     *     to apply for the behavior.
     * @param {string=} opt_eventType The event type triggering the
     *     handler.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.Disposable}
     */
    class SplitBehavior extends goog.Disposable {
        /**
         * Creates a behavior for combining two controls. The behavior is triggered
         * by a given event type which applies the behavior handler.
         * Can be used to also render or decorate  the controls.
         * For a usage example see {@link goog.ui.ColorSplitBehavior}
         *
         * @param {goog.ui.Control} first A ui control.
         * @param {goog.ui.Control} second A ui control.
         * @param {function(goog.ui.Control,Event)=} opt_behaviorHandler A handler
         *     to apply for the behavior.
         * @param {string=} opt_eventType The event type triggering the
         *     handler.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor(first: goog.ui.Control, second: goog.ui.Control, opt_behaviorHandler?: (_0: goog.ui.Control, _1: Event) => any /*missing*/, opt_eventType?: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {Element} The element containing the controls.
         */
        getElement(): Element;
    
        /**
         * @return {function(goog.ui.Control,Event)} The behavior handler.
         */
        getBehaviorHandler(): (_0: goog.ui.Control, _1: Event) => any /*missing*/;
    
        /**
         * @return {string} The behavior event type.
         */
        getEventType(): string;
    
        /**
         * Sets the disposeControls flags.
         * @param {boolean} disposeFirst Whether to dispose the first control
         *     when dispose is called.
         * @param {boolean} disposeSecond Whether to dispose the second control
         *     when dispose is called.
         */
        setDisposeControls(disposeFirst: boolean, disposeSecond: boolean): void;
    
        /**
         * Sets the behavior handler.
         * @param {function(goog.ui.Control,Event)} behaviorHandler The behavior
         *     handler.
         */
        setHandler(behaviorHandler: (_0: goog.ui.Control, _1: Event) => any /*missing*/): void;
    
        /**
         * Sets the behavior event type.
         * @param {string} eventType The behavior event type.
         */
        setEventType(eventType: string): void;
    
        /**
         * Decorates an element and returns the behavior.
         * @param {Element} element An element to decorate.
         * @param {boolean=} opt_activate Whether to activate the behavior
         *     (default=true).
         * @return {goog.ui.SplitBehavior} A split behavior.
         */
        decorate(element: Element, opt_activate?: boolean): goog.ui.SplitBehavior;
    
        /**
         * Renders an element and returns the behavior.
         * @param {Element} element An element to decorate.
         * @param {boolean=} opt_activate Whether to activate the behavior
         *     (default=true).
         * @return {goog.ui.SplitBehavior} A split behavior.
         */
        render(element: Element, opt_activate?: boolean): goog.ui.SplitBehavior;
    
        /**
         * Activate or deactivate the behavior.
         * @param {boolean} activate Whether to activate or deactivate the behavior.
         */
        setActive(activate: boolean): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * A left/right up/down Container SplitPane.
     * Create SplitPane with two goog.ui.Component opjects to split.
     * TODO(user): Support minimum splitpane size.
     * TODO(user): Allow component change/orientation after init.
     * TODO(user): Support hiding either side of handle (plus handle).
     * TODO(user): Look at setBorderBoxSize fixes and revist borderwidth code.
     *
     * @param {goog.ui.Component} firstComponent Left or Top component.
     * @param {goog.ui.Component} secondComponent Right or Bottom component.
     * @param {goog.ui.SplitPane.Orientation} orientation SplitPane orientation.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class SplitPane extends goog.ui.Component {
        /**
         * A left/right up/down Container SplitPane.
         * Create SplitPane with two goog.ui.Component opjects to split.
         * TODO(user): Support minimum splitpane size.
         * TODO(user): Allow component change/orientation after init.
         * TODO(user): Support hiding either side of handle (plus handle).
         * TODO(user): Look at setBorderBoxSize fixes and revist borderwidth code.
         *
         * @param {goog.ui.Component} firstComponent Left or Top component.
         * @param {goog.ui.Component} secondComponent Right or Bottom component.
         * @param {goog.ui.SplitPane.Orientation} orientation SplitPane orientation.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(firstComponent: goog.ui.Component, secondComponent: goog.ui.Component, orientation: goog.ui.SplitPane.Orientation, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Create the DOM node & text node needed for the splitpane.
         * @override
         */
        createDom(): void;
    
        /**
         * Determines if a given element can be decorated by this type of component.
         * @param {Element} element Element to decorate.
         * @return {boolean} True if the element can be decorated, false otherwise.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Decorates the given HTML element as a SplitPane.  Overrides {@link
         * goog.ui.Component#decorateInternal}.  Considered protected.
         * @param {Element} element Element (SplitPane div) to decorate.
         * @protected
         * @override
         */
        decorateInternal(element: Element): void;
    
        /**
         * Setup all events and do an initial resize.
         * @override
         */
        enterDocument(): void;
    
        /**
         * Sets the initial size of the left or top component.
         * @param {number} size The size in Pixels of the container.
         */
        setInitialSize(size: number): void;
    
        /**
         * Sets the SplitPane handle size.
         * TODO(user): Make sure this works after initialization.
         * @param {number} size The size of the handle in pixels.
         */
        setHandleSize(size: number): void;
    
        /**
         * Sets whether we resize on handle drag.
         * @param {boolean} continuous The continuous resize value.
         */
        setContinuousResize(continuous: boolean): void;
    
        /**
         * Returns whether the orientation for the split pane is vertical
         * or not.
         * @return {boolean} True if the orientation is vertical, false otherwise.
         */
        isVertical(): boolean;
    
        /**
         * Sets the orientation class for the split pane handle.
         * @protected
         */
        setOrientationClassForHandle(): void;
    
        /**
         * Sets the orientation of the split pane.
         * @param {goog.ui.SplitPane.Orientation} orientation SplitPane orientation.
         */
        setOrientation(orientation: goog.ui.SplitPane.Orientation): void;
    
        /**
         * Gets the orientation of the split pane.
         * @return {goog.ui.SplitPane.Orientation} The orientation.
         */
        getOrientation(): goog.ui.SplitPane.Orientation;
    
        /**
         * @return {?number} The size of the left/top component.
         */
        getFirstComponentSize(): number;
    
        /**
         * Set the size of the left/top component, and resize the other component based
         * on that size and handle size.
         * @param {?number=} opt_size The size of the top or left, in pixels.
         */
        setFirstComponentSize(opt_size?: number): void;
    
        /**
         * Set the size of the splitpane.  This is usually called by the controlling
         * application.  This will set the SplitPane BorderBoxSize.
         * @param {goog.math.Size} size The size to set the splitpane.
         */
        setSize(size: goog.math.Size): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Class representing a submenu that can be added as an item to other menus.
     *
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the submenu (use to add icons or styling to
     *     menus).
     * @param {*=} opt_model Data/model associated with the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional dom helper used for dom
     *     interactions.
     * @param {goog.ui.MenuItemRenderer=} opt_renderer Renderer used to render or
     *     decorate the component; defaults to {@link goog.ui.SubMenuRenderer}.
     * @constructor
     * @extends {goog.ui.MenuItem}
     */
    class SubMenu extends goog.ui.MenuItem {
        /**
         * Class representing a submenu that can be added as an item to other menus.
         *
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to
         *     display as the content of the submenu (use to add icons or styling to
         *     menus).
         * @param {*=} opt_model Data/model associated with the menu item.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional dom helper used for dom
         *     interactions.
         * @param {goog.ui.MenuItemRenderer=} opt_renderer Renderer used to render or
         *     decorate the component; defaults to {@link goog.ui.SubMenuRenderer}.
         * @constructor
         * @extends {goog.ui.MenuItem}
         */
        constructor(content: goog.ui.ControlContent, opt_model?: any, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer);
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * @override
         * Dismisses the submenu on a delay, with the result that the user needs less
         * accuracy when moving to submenus.  Alternate implementations could use
         * geometry instead of a timer.
         * @param {boolean} highlight Whether item should be highlighted.
         * @param {boolean=} opt_btnPressed Whether the mouse button is held down.
         */
        setHighlighted(highlight: boolean, opt_btnPressed?: boolean): void;
    
        /**
         * Show the submenu and ensure that all siblings are hidden.
         */
        showSubMenu(): void;
    
        /**
         * Dismisses the menu and all further submenus.
         */
        dismissSubMenu(): void;
    
        /**
         * Clears the show and hide timers for the sub menu.
         */
        clearTimers(): void;
    
        /**
         * Sets the menu item to be visible or invisible.
         * @param {boolean} visible Whether to show or hide the component.
         * @param {boolean=} opt_force If true, doesn't check whether the component
         *     already has the requested visibility, and doesn't dispatch any events.
         * @return {boolean} Whether the visibility was changed.
         * @override
         */
        setVisible(visible: boolean, opt_force?: boolean): boolean;
    
        /**
         * Handles a key event that is passed to the menu item from its parent because
         * it is highlighted.  If the right key is pressed the sub menu takes control
         * and delegates further key events to its menu until it is dismissed OR the
         * left key is pressed.
         * @param {goog.events.KeyEvent} e A key event.
         * @return {boolean} Whether the event was handled.
         * @override
         */
        handleKeyEvent(e: goog.events.KeyEvent): boolean;
    
        /**
         * @override
         * Sets a timer to show the submenu and then dispatches an ENTER event to the
         * parent menu.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         * @protected
         */
        handleMouseOver(e: goog.events.BrowserEvent): void;
    
        /**
         * Overrides the default mouseup event handler, so that the ACTION isn't
         * dispatched for the submenu itself, instead the submenu is shown instantly.
         * @param {goog.events.Event} e The browser event.
         * @return {boolean} True if the action was allowed to proceed, false otherwise.
         * @override
         */
        performActionInternal(e: goog.events.Event): boolean;
    
        /**
         * Sets whether the submenu is aligned at the end of the parent menu.
         * @param {boolean} alignToEnd True to align to end, false to align to start.
         */
        setAlignToEnd(alignToEnd: boolean): void;
    
        /**
         * Determines whether the submenu is aligned at the end of the parent menu.
         * @return {boolean} True if aligned to the end (the default), false if
         *     aligned to the start.
         */
        isAlignedToEnd(): boolean;
    
        /**
         * Positions the submenu. This method should be called if the sub menu is
         * opened and the menu element's size changes (e.g., when adding/removing items
         * to an opened sub menu).
         */
        positionSubMenu(): void;
    
        /**
         * Adds a new menu item at the end of the menu.
         * @param {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu
         *     item to add to the menu.
         */
        addItem(item: any /*goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator*/): void;
    
        /**
         * Adds a new menu item at a specific index in the menu.
         * @param {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu
         *     item to add to the menu.
         * @param {number} n Index at which to insert the menu item.
         */
        addItemAt(item: any /*goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator*/, n: number): void;
    
        /**
         * Removes an item from the menu and disposes it.
         * @param {goog.ui.MenuItem} item The menu item to remove.
         */
        removeItem(item: goog.ui.MenuItem): void;
    
        /**
         * Removes a menu item at a given index in the menu and disposes it.
         * @param {number} n Index of item.
         */
        removeItemAt(n: number): void;
    
        /**
         * Returns a reference to the menu item at a given index.
         * @param {number} n Index of menu item.
         * @return {goog.ui.Component} Reference to the menu item.
         */
        getItemAt(n: number): goog.ui.Component;
    
        /**
         * Returns the number of items in the sub menu (including separators).
         * @return {number} The number of items in the menu.
         */
        getItemCount(): number;
    
        /**
         * Returns the menu items contained in the sub menu.
         * @return {Array.<goog.ui.MenuItem>} An array of menu items.
         * @deprecated Use getItemAt/getItemCount instead.
         */
        getItems(): goog.ui.MenuItem[];
    
        /**
         * Gets a reference to the submenu's actual menu.
         * @return {goog.ui.Menu} Reference to the object representing the sub menu.
         */
        getMenu(): goog.ui.Menu;
    
        /**
         * Sets the submenu to a specific menu.
         * @param {goog.ui.Menu} menu The menu to show when this item is selected.
         * @param {boolean=} opt_internal Whether this menu is an "internal" menu, and
         *     should be disposed of when this object is disposed of.
         */
        setMenu(menu: goog.ui.Menu, opt_internal?: boolean): void;
    
        /**
         * Returns true if the provided element is to be considered inside the menu for
         * purposes such as dismissing the menu on an event.  This is so submenus can
         * make use of elements outside their own DOM.
         * @param {Element} element The element to test for.
         * @return {boolean} Whether or not the provided element is contained.
         */
        containsElement(element: Element): boolean;
    
        /**
         * @param {boolean} isAdjustable Whether this submenu is adjustable.
         */
        setPositionAdjustable(isAdjustable: boolean): void;
    
        /**
         * @return {boolean} Whether this submenu is adjustable.
         */
        isPositionAdjustable(): boolean;
    }

    /**
     * Default renderer for {@link goog.ui.SubMenu}s.  Each item has the following
     * structure:
     *    <div class="goog-submenu">
     *      ...(menuitem content)...
     *      <div class="goog-menu">
     *        ... (submenu content) ...
     *      </div>
     *    </div>
     * @constructor
     * @extends {goog.ui.MenuItemRenderer}
     * @final
     */
    class SubMenuRenderer extends goog.ui.MenuItemRenderer {
        /**
         * Default renderer for {@link goog.ui.SubMenu}s.  Each item has the following
         * structure:
         *    <div class="goog-submenu">
         *      ...(menuitem content)...
         *      <div class="goog-menu">
         *        ... (submenu content) ...
         *      </div>
         *    </div>
         * @constructor
         * @extends {goog.ui.MenuItemRenderer}
         * @final
         */
        constructor();
    
        /**
         * Overrides {@link goog.ui.MenuItemRenderer#createDom} by adding
         * the additional class 'goog-submenu' to the created element,
         * and passes the element to {@link goog.ui.SubMenuItemRenderer#addArrow_}
         * to add an child element that can be styled to show an arrow.
         * @param {goog.ui.Control} control goog.ui.SubMenu to render.
         * @return {Element} Root element for the item.
         * @override
         */
        createDom(control: goog.ui.Control): Element;
    
        /**
         * Overrides {@link goog.ui.MenuItemRenderer#decorate} by adding
         * the additional class 'goog-submenu' to the decorated element,
         * and passing the element to {@link goog.ui.SubMenuItemRenderer#addArrow_}
         * to add a child element that can be styled to show an arrow.
         * Also searches the element for a child with the class goog-menu. If a
         * matching child element is found, creates a goog.ui.Menu, uses it to
         * decorate the child element, and passes that menu to subMenu.setMenu.
         * @param {goog.ui.Control} control goog.ui.SubMenu to render.
         * @param {Element} element Element to decorate.
         * @return {Element} Root element for the item.
         * @override
         */
        decorate(control: goog.ui.Control, element: Element): Element;
    
        /**
         * Takes a menu item's root element, and sets its content to the given text
         * caption or DOM structure.  Overrides the superclass immplementation by
         * making sure that the submenu arrow structure is preserved.
         * @param {Element} element The item's root element.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to be
         *     set as the item's content.
         * @override
         */
        setContent(element: Element, content: goog.ui.ControlContent): void;
    
        /**
         * Overrides {@link goog.ui.MenuItemRenderer#initializeDom} to tweak
         * the DOM structure for the span.goog-submenu-arrow element
         * depending on the text direction (LTR or RTL). When the SubMenu is RTL
         * the arrow will be given the additional class of goog-submenu-arrow-rtl,
         * and the arrow will be moved up to be the first child in the SubMenu's
         * element. Otherwise the arrow will have the class goog-submenu-arrow-ltr,
         * and be kept as the last child of the SubMenu's element.
         * @param {goog.ui.Control} control goog.ui.SubMenu whose DOM is to be
         *     initialized as it enters the document.
         * @override
         */
        initializeDom(control: goog.ui.Control): void;
    }

    /**
     * Tab bar UI component.  A tab bar contains tabs, rendered above, below,
     * before, or after tab contents.  Tabs in tab bars dispatch the following
     * events:
     * <ul>
     *   <li>{@link goog.ui.Component.EventType.ACTION} when activated via the
     *       keyboard or the mouse,
     *   <li>{@link goog.ui.Component.EventType.SELECT} when selected, and
     *   <li>{@link goog.ui.Component.EventType.UNSELECT} when deselected.
     * </ul>
     * Clients may listen for all of the above events on the tab bar itself, and
     * refer to the event target to identify the tab that dispatched the event.
     * When an unselected tab is clicked for the first time, it dispatches both a
     * {@code SELECT} event and an {@code ACTION} event; subsequent clicks on an
     * already selected tab only result in {@code ACTION} events.
     *
     * @param {goog.ui.TabBar.Location=} opt_location Tab bar location; defaults to
     *     {@link goog.ui.TabBar.Location.TOP}.
     * @param {goog.ui.TabBarRenderer=} opt_renderer Renderer used to render or
     *     decorate the container; defaults to {@link goog.ui.TabBarRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for document
     *     interaction.
     * @constructor
     * @extends {goog.ui.Container}
     */
    class TabBar extends goog.ui.Container {
        /**
         * Tab bar UI component.  A tab bar contains tabs, rendered above, below,
         * before, or after tab contents.  Tabs in tab bars dispatch the following
         * events:
         * <ul>
         *   <li>{@link goog.ui.Component.EventType.ACTION} when activated via the
         *       keyboard or the mouse,
         *   <li>{@link goog.ui.Component.EventType.SELECT} when selected, and
         *   <li>{@link goog.ui.Component.EventType.UNSELECT} when deselected.
         * </ul>
         * Clients may listen for all of the above events on the tab bar itself, and
         * refer to the event target to identify the tab that dispatched the event.
         * When an unselected tab is clicked for the first time, it dispatches both a
         * {@code SELECT} event and an {@code ACTION} event; subsequent clicks on an
         * already selected tab only result in {@code ACTION} events.
         *
         * @param {goog.ui.TabBar.Location=} opt_location Tab bar location; defaults to
         *     {@link goog.ui.TabBar.Location.TOP}.
         * @param {goog.ui.TabBarRenderer=} opt_renderer Renderer used to render or
         *     decorate the container; defaults to {@link goog.ui.TabBarRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for document
         *     interaction.
         * @constructor
         * @extends {goog.ui.Container}
         */
        constructor(opt_location?: goog.ui.TabBar.Location, opt_renderer?: goog.ui.TabBarRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @override
         */
        enterDocument(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Removes the tab from the tab bar.  Overrides the superclass implementation
         * by deselecting the tab being removed.  Since {@link #removeChildAt} uses
         * {@link #removeChild} internally, we only need to override this method.
         * @param {string|goog.ui.Component} tab Tab to remove.
         * @param {boolean=} opt_unrender Whether to call {@code exitDocument} on the
         *     removed tab, and detach its DOM from the document (defaults to false).
         * @return {goog.ui.Control} The removed tab, if any.
         * @override
         */
        removeChild(tab: any /*string|goog.ui.Component*/, opt_unrender?: boolean): goog.ui.Control;
    
        /**
         * @return {goog.ui.TabBar.Location} Tab bar location relative to tab contents.
         */
        getLocation(): goog.ui.TabBar.Location;
    
        /**
         * Sets the location of the tab bar relative to tab contents.
         * @param {goog.ui.TabBar.Location} location Tab bar location relative to tab
         *     contents.
         * @throws {Error} If the tab bar has already been rendered.
         */
        setLocation(location: goog.ui.TabBar.Location): void;
    
        /**
         * @return {boolean} Whether keyboard navigation should change the selected tab,
         *     or just move the highlight.
         */
        isAutoSelectTabs(): boolean;
    
        /**
         * Enables or disables auto-selecting tabs using the keyboard.  If auto-select
         * is enabled, keyboard navigation switches tabs immediately, otherwise it just
         * moves the highlight.
         * @param {boolean} enable Whether keyboard navigation should change the
         *     selected tab, or just move the highlight.
         */
        setAutoSelectTabs(enable: boolean): void;
    
        /**
         * Highlights the tab at the given index in response to a keyboard event.
         * Overrides the superclass implementation by also selecting the tab if
         * {@link #isAutoSelectTabs} returns true.
         * @param {number} index Index of tab to highlight.
         * @protected
         * @override
         */
        setHighlightedIndexFromKeyEvent(index: number): void;
    
        /**
         * @return {goog.ui.Control?} The currently selected tab (null if none).
         */
        getSelectedTab(): goog.ui.Control;
    
        /**
         * Selects the given tab.
         * @param {goog.ui.Control?} tab Tab to select (null to select none).
         */
        setSelectedTab(tab: goog.ui.Control): void;
    
        /**
         * @return {number} Index of the currently selected tab (-1 if none).
         */
        getSelectedTabIndex(): number;
    
        /**
         * Selects the tab at the given index.
         * @param {number} index Index of the tab to select (-1 to select none).
         */
        setSelectedTabIndex(index: number): void;
    
        /**
         * If the specified tab is the currently selected tab, deselects it, and
         * selects the closest selectable tab in the tab bar (first looking before,
         * then after the deselected tab).  Does nothing if the argument is not the
         * currently selected tab.  Called internally when a tab is removed, hidden,
         * or disabled, to ensure that another tab is selected instead.
         * @param {goog.ui.Control?} tab Tab to deselect (if any).
         * @protected
         */
        deselectIfSelected(tab: goog.ui.Control): void;
    
        /**
         * Returns true if the tab is selectable, false otherwise.  Only visible and
         * enabled tabs are selectable.
         * @param {goog.ui.Control} tab Tab to check.
         * @return {boolean} Whether the tab is selectable.
         * @protected
         */
        isSelectableTab(tab: goog.ui.Control): boolean;
    
        /**
         * Handles {@code SELECT} events dispatched by tabs as they become selected.
         * @param {goog.events.Event} e Select event to handle.
         * @protected
         */
        handleTabSelect(e: goog.events.Event): void;
    
        /**
         * Handles {@code UNSELECT} events dispatched by tabs as they become deselected.
         * @param {goog.events.Event} e Unselect event to handle.
         * @protected
         */
        handleTabUnselect(e: goog.events.Event): void;
    
        /**
         * Handles {@code DISABLE} events displayed by tabs.
         * @param {goog.events.Event} e Disable event to handle.
         * @protected
         */
        handleTabDisable(e: goog.events.Event): void;
    
        /**
         * Handles {@code HIDE} events displayed by tabs.
         * @param {goog.events.Event} e Hide event to handle.
         * @protected
         */
        handleTabHide(e: goog.events.Event): void;
    
        /**
         * Handles focus events dispatched by the tab bar's key event target.  If no tab
         * is currently highlighted, highlights the selected tab or the first tab if no
         * tab is selected either.
         * @param {goog.events.Event} e Focus event to handle.
         * @protected
         * @override
         */
        handleFocus(e: goog.events.Event): void;
    }

    /**
     * Default renderer for {@link goog.ui.TabBar}s, based on the {@code TabPane}
     * code.  The tab bar's DOM structure is determined by its orientation and
     * location relative to tab contents.  For example, a horizontal tab bar
     * located above tab contents looks like this:
     * <pre>
     *   <div class="goog-tab-bar goog-tab-bar-horizontal goog-tab-bar-top">
     *     ...(tabs here)...
     *   </div>
     * </pre>
     * @constructor
     * @extends {goog.ui.ContainerRenderer}
     */
    class TabBarRenderer extends goog.ui.ContainerRenderer {
        /**
         * Default renderer for {@link goog.ui.TabBar}s, based on the {@code TabPane}
         * code.  The tab bar's DOM structure is determined by its orientation and
         * location relative to tab contents.  For example, a horizontal tab bar
         * located above tab contents looks like this:
         * <pre>
         *   <div class="goog-tab-bar goog-tab-bar-horizontal goog-tab-bar-top">
         *     ...(tabs here)...
         *   </div>
         * </pre>
         * @constructor
         * @extends {goog.ui.ContainerRenderer}
         */
        constructor();
    
        /**
         * Returns the CSS class name to be applied to the root element of all tab bars
         * rendered or decorated using this renderer.
         * @return {string} Renderer-specific CSS class name.
         * @override
         */
        getCssClass(): string;
    
        /**
         * Sets the tab bar's state based on the given CSS class name, encountered
         * during decoration.  Overrides the superclass implementation by recognizing
         * class names representing tab bar orientation and location.
         * @param {goog.ui.Container} tabBar Tab bar to configure.
         * @param {string} className CSS class name.
         * @param {string} baseClass Base class name used as the root of state-specific
         *     class names (typically the renderer's own class name).
         * @protected
         * @override
         */
        setStateFromClassName(tabBar: goog.ui.Container, className: string, baseClass: string): void;
    
        /**
         * Returns all CSS class names applicable to the tab bar, based on its state.
         * Overrides the superclass implementation by appending the location-specific
         * class name to the list.
         * @param {goog.ui.Container} tabBar Tab bar whose CSS classes are to be
         *     returned.
         * @return {Array.<string>} Array of CSS class names applicable to the tab bar.
         * @override
         */
        getClassNames(tabBar: goog.ui.Container): string[];
    }

    /**
     * Tab control, designed to be hosted in a {@link goog.ui.TabBar}.  The tab's
     * DOM may be different based on the configuration of the containing tab bar,
     * so tabs should only be rendered or decorated as children of a tab bar.
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the tab's caption (if any).
     * @param {goog.ui.TabRenderer=} opt_renderer Optional renderer used to render
     *     or decorate the tab.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Tab extends goog.ui.Control {
        /**
         * Tab control, designed to be hosted in a {@link goog.ui.TabBar}.  The tab's
         * DOM may be different based on the configuration of the containing tab bar,
         * so tabs should only be rendered or decorated as children of a tab bar.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to
         *     display as the tab's caption (if any).
         * @param {goog.ui.TabRenderer=} opt_renderer Optional renderer used to render
         *     or decorate the tab.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Control}
         */
        constructor(content: goog.ui.ControlContent, opt_renderer?: goog.ui.TabRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {string|undefined} Tab tooltip text (if any).
         */
        getTooltip(): any /*string|any (undefined)*/;
    
        /**
         * Sets the tab tooltip text.  If the tab has already been rendered, updates
         * its tooltip.
         * @param {string} tooltip New tooltip text.
         */
        setTooltip(tooltip: string): void;
    
        /**
         * Sets the tab tooltip text.  Considered protected; to be called only by the
         * renderer during element decoration.
         * @param {string} tooltip New tooltip text.
         * @protected
         */
        setTooltipInternal(tooltip: string): void;
    }

    /**
     * A table sorter allows for sorting of a table by column.  This component can
     * be used to decorate an already existing TABLE element with sorting
     * features.
     *
     * The TABLE should use a THEAD containing TH elements for the table column
     * headers.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class TableSorter extends goog.ui.Component {
        /**
         * A table sorter allows for sorting of a table by column.  This component can
         * be used to decorate an already existing TABLE element with sorting
         * features.
         *
         * The TABLE should use a THEAD containing TH elements for the table column
         * headers.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the row index (in <thead>) to be used for sorting.
         * By default, the first row (index 0) is used.
         * Must be called before decorate() is called.
         * @param {number} index The row index.
         */
        setSortableHeaderRowIndex(index: number): void;
    
        /** @override */
        canDecorate(): void;
    
        /** @override */
        enterDocument(): void;
    
        /**
         * @return {number} The current sort column of the table, or -1 if none.
         */
        getSortColumn(): number;
    
        /**
         * @return {boolean} Whether the last sort was in reverse.
         */
        isSortReversed(): boolean;
    
        /**
         * @return {function(*, *) : number} The default sort function to be used by
         *     all columns.
         */
        getDefaultSortFunction(): (_0: any, _1: any) => number;
    
        /**
         * Sets the default sort function to be used by all columns.  If not set
         * explicitly, this defaults to numeric sorting.
         * @param {function(*, *) : number} sortFunction The new default sort function.
         */
        setDefaultSortFunction(sortFunction: (_0: any, _1: any) => number): void;
    
        /**
         * Gets the sort function to be used by the given column.  Returns the default
         * sort function if no sort function is explicitly set for this column.
         * @param {number} column The column index.
         * @return {function(*, *) : number} The sort function used by the column.
         */
        getSortFunction(column: number): (_0: any, _1: any) => number;
    
        /**
         * Set the sort function for the given column, overriding the default sort
         * function.
         * @param {number} column The column index.
         * @param {function(*, *) : number} sortFunction The new sort function.
         */
        setSortFunction(column: number, sortFunction: (_0: any, _1: any) => number): void;
    
        /**
         * Sort the table contents by the values in the given column.
         * @param {number} column The column to sort by.
         * @param {boolean=} opt_reverse Whether to sort in reverse.
         * @return {boolean} Whether the sort was executed.
         */
        sort(column: number, opt_reverse?: boolean): boolean;
    }

    /**
     * TabPane widget. All children already inside the tab pane container element
     * will be be converted to tabs. Each tab is represented by a goog.ui.TabPane.
     * TabPage object. Further pages can be constructed either from an existing
     * container or created from scratch.
     *
     * @param {Element} el Container element to create the tab pane out of.
     * @param {goog.ui.TabPane.TabLocation=} opt_tabLocation Location of the tabs
     *     in relation to the content container. Default is top.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {boolean=} opt_useMouseDown Whether to use MOUSEDOWN instead of CLICK
     *     for tab changes.
     * @extends {goog.events.EventTarget}
     * @constructor
     * @see ../demos/tabpane.html
     * @deprecated Use goog.ui.TabBar instead.
     */
    class TabPane extends goog.events.EventTarget {
        /**
         * TabPane widget. All children already inside the tab pane container element
         * will be be converted to tabs. Each tab is represented by a goog.ui.TabPane.
         * TabPage object. Further pages can be constructed either from an existing
         * container or created from scratch.
         *
         * @param {Element} el Container element to create the tab pane out of.
         * @param {goog.ui.TabPane.TabLocation=} opt_tabLocation Location of the tabs
         *     in relation to the content container. Default is top.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {boolean=} opt_useMouseDown Whether to use MOUSEDOWN instead of CLICK
         *     for tab changes.
         * @extends {goog.events.EventTarget}
         * @constructor
         * @see ../demos/tabpane.html
         * @deprecated Use goog.ui.TabBar instead.
         */
        constructor(el: Element, opt_tabLocation?: goog.ui.TabPane.TabLocation, opt_domHelper?: goog.dom.DomHelper, opt_useMouseDown?: boolean);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Adds a page to the tab pane.
         *
         * @param {goog.ui.TabPane.TabPage} page Tab page to add.
         * @param {number=} opt_index Zero based index to insert tab at. Inserted at the
         *                           end if not specified.
         */
        addPage(page: goog.ui.TabPane.TabPage, opt_index?: number): void;
    
        /**
         * Removes the specified page from the tab pane.
         *
         * @param {goog.ui.TabPane.TabPage|number} page Reference to tab page or zero
         *     based index.
         */
        removePage(page: any /*goog.ui.TabPane.TabPage|number*/): void;
    
        /**
         * Gets the tab page by zero based index.
         *
         * @param {number} index Index of page to return.
         * @return {goog.ui.TabPane.TabPage?} page The tab page.
         */
        getPage(index: number): goog.ui.TabPane.TabPage;
    
        /**
         * Sets the selected tab page by object reference.
         *
         * @param {goog.ui.TabPane.TabPage} page Tab page to select.
         */
        setSelectedPage(page: goog.ui.TabPane.TabPage): void;
    
        /**
         * Sets the selected tab page by zero based index.
         *
         * @param {number} index Index of page to select.
         */
        setSelectedIndex(index: number): void;
    
        /**
         * @return {number} The index for the selected tab page or -1 if no page is
         *     selected.
         */
        getSelectedIndex(): number;
    
        /**
         * @return {goog.ui.TabPane.TabPage?} The selected tab page.
         */
        getSelectedPage(): goog.ui.TabPane.TabPage;
    
        /**
         * @return {Element} The element that contains the tab pages.
         */
        getContentElement(): Element;
    
        /**
         * @return {Element} The main element for the tabpane.
         */
        getElement(): Element;
    }

    /**
     * Object representing a tab pane page changed event.
     *
     * @param {string} type Event type.
     * @param {goog.ui.TabPane} target Tab widget initiating event.
     * @param {goog.ui.TabPane.TabPage} page Selected page in tab pane.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class TabPaneEvent extends goog.events.Event {
        /**
         * Object representing a tab pane page changed event.
         *
         * @param {string} type Event type.
         * @param {goog.ui.TabPane} target Tab widget initiating event.
         * @param {goog.ui.TabPane.TabPage} page Selected page in tab pane.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(type: string, target: goog.ui.TabPane, page: goog.ui.TabPane.TabPage);
    }

    /**
     * Default renderer for {@link goog.ui.Tab}s, based on the {@code TabPane} code.
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class TabRenderer extends goog.ui.ControlRenderer {
        /**
         * Default renderer for {@link goog.ui.Tab}s, based on the {@code TabPane} code.
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /**
         * Returns the CSS class name to be applied to the root element of all tabs
         * rendered or decorated using this renderer.
         * @return {string} Renderer-specific CSS class name.
         * @override
         */
        getCssClass(): string;
    
        /**
         * Returns the ARIA role to be applied to the tab element.
         * See http://wiki/Main/ARIA for more info.
         * @return {goog.a11y.aria.Role} ARIA role.
         * @override
         */
        getAriaRole(): goog.a11y.aria.Role;
    
        /**
         * Returns the tab's contents wrapped in a DIV, with the renderer's own CSS
         * class and additional state-specific classes applied to it.  Creates the
         * following DOM structure:
         * <pre>
         *   <div class="goog-tab" title="Title">Content</div>
         * </pre>
         * @param {goog.ui.Control} tab Tab to render.
         * @return {Element} Root element for the tab.
         * @override
         */
        createDom(tab: goog.ui.Control): Element;
    
        /**
         * Decorates the element with the tab.  Initializes the tab's ID, content,
         * tooltip, and state based on the ID of the element, its title, child nodes,
         * and CSS classes, respectively.  Returns the element.
         * @param {goog.ui.Control} tab Tab to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(tab: goog.ui.Control, element: Element): Element;
    
        /**
         * Takes a tab's root element, and returns its tooltip text, or the empty
         * string if the element has no tooltip.
         * @param {Element} element The tab's root element.
         * @return {string} The tooltip text (empty string if none).
         */
        getTooltip(element: Element): string;
    
        /**
         * Takes a tab's root element and a tooltip string, and updates the element
         * with the new tooltip.  If the new tooltip is null or undefined, sets the
         * element's title to the empty string.
         * @param {Element} element The tab's root element.
         * @param {string|null|undefined} tooltip New tooltip text (if any).
         */
        setTooltip(element: Element, tooltip: any /*string|any (null)|any (undefined)*/): void;
    }

    /**
     * A textarea control to handle growing/shrinking with textarea.value.
     *
     * @param {string} content Text to set as the textarea's value.
     * @param {goog.ui.TextareaRenderer=} opt_renderer Renderer used to render or
     *     decorate the textarea. Defaults to {@link goog.ui.TextareaRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Textarea extends goog.ui.Control {
        /**
         * A textarea control to handle growing/shrinking with textarea.value.
         *
         * @param {string} content Text to set as the textarea's value.
         * @param {goog.ui.TextareaRenderer=} opt_renderer Renderer used to render or
         *     decorate the textarea. Defaults to {@link goog.ui.TextareaRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Control}
         */
        constructor(content: string, opt_renderer?: goog.ui.TextareaRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the default text for the textarea.
         * @param {string} text The default text for the textarea.
         */
        setPlaceholder(text: string): void;
    
        /**
         * @return {number} The minHeight value.
         */
        getMinHeight(): number;
    
        /**
         * Sets a minimum height for the textarea, and calls resize if rendered.
         * @param {number} height New minHeight value.
         */
        setMinHeight(height: number): void;
    
        /**
         * @return {number} The maxHeight value.
         */
        getMaxHeight(): number;
    
        /**
         * Sets a maximum height for the textarea, and calls resize if rendered.
         * @param {number} height New maxHeight value.
         */
        setMaxHeight(height: number): void;
    
        /**
         * Sets the textarea's value.
         * @param {*} value The value property for the textarea, will be cast to a
         *     string by the browser when setting textarea.value.
         */
        setValue(value: any): void;
    
        /**
         * Gets the textarea's value.
         * @return {string} value The value of the textarea.
         */
        getValue(): string;
    
        /** @override */
        setContent(): void;
    
        /** @override **/
        setEnabled(): void;
    
        /**
         * Resizes the textarea vertically.
         */
        resize(): void;
    
        /** @override **/
        enterDocument(): void;
    }

    /**
     * Renderer for {@link goog.ui.Textarea}s.  Renders and decorates native HTML
     * textarea elements.  Since native HTML textareas have built-in support for
     * many features, overrides many expensive (and redundant) superclass methods to
     * be no-ops.
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     * @final
     */
    class TextareaRenderer extends goog.ui.ControlRenderer {
        /**
         * Renderer for {@link goog.ui.Textarea}s.  Renders and decorates native HTML
         * textarea elements.  Since native HTML textareas have built-in support for
         * many features, overrides many expensive (and redundant) superclass methods to
         * be no-ops.
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         * @final
         */
        constructor();
    
        /** @override */
        getAriaRole(): void;
    
        /** @override */
        decorate(): void;
    
        /**
         * Returns the textarea's contents wrapped in an HTML textarea element.  Sets
         * the textarea's disabled attribute as needed.
         * @param {goog.ui.Control} textarea Textarea to render.
         * @return {Element} Root element for the Textarea control (an HTML textarea
         *     element).
         * @override
         */
        createDom(textarea: goog.ui.Control): Element;
    
        /**
         * Overrides {@link goog.ui.TextareaRenderer#canDecorate} by returning true only
         * if the element is an HTML textarea.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
    
        /**
         * Textareas natively support right-to-left rendering.
         * @override
         */
        setRightToLeft: any /*missing*/;
    
        /**
         * Textareas are always focusable as long as they are enabled.
         * @override
         */
        isFocusable(): void;
    
        /**
         * Textareas natively support keyboard focus.
         * @override
         */
        setFocusable: any /*missing*/;
    
        /**
         * Textareas also expose the DISABLED state in the HTML textarea's
         * {@code disabled} attribute.
         * @override
         */
        setState(): void;
    
        /**
         * Textareas don't need ARIA states to support accessibility, so this is
         * a no-op.
         * @override
         */
        updateAriaState: any /*missing*/;
    
        /** @override **/
        setContent(): void;
    
        /** @override **/
        getCssClass(): void;
    }

    /**
     * A toggle button, with checkbox-like semantics.  Rendered using
     * {@link goog.ui.CustomButtonRenderer} by default, though any
     * {@link goog.ui.ButtonRenderer} would work.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *     structure to display as the button's caption.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
     *     decorate the button; defaults to {@link goog.ui.CustomButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Button}
     */
    class ToggleButton extends goog.ui.Button {
        /**
         * A toggle button, with checkbox-like semantics.  Rendered using
         * {@link goog.ui.CustomButtonRenderer} by default, though any
         * {@link goog.ui.ButtonRenderer} would work.
         *
         * @param {goog.ui.ControlContent} content Text caption or existing DOM
         *     structure to display as the button's caption.
         * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
         *     decorate the button; defaults to {@link goog.ui.CustomButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Button}
         */
        constructor(content: goog.ui.ControlContent, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * A button control for a toolbar.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *     structure to display as the button's caption.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
     *     render or decorate the button; defaults to
     *     {@link goog.ui.ToolbarButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Button}
     */
    class ToolbarButton extends goog.ui.Button {
        /**
         * A button control for a toolbar.
         *
         * @param {goog.ui.ControlContent} content Text caption or existing DOM
         *     structure to display as the button's caption.
         * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
         *     render or decorate the button; defaults to
         *     {@link goog.ui.ToolbarButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Button}
         */
        constructor(content: goog.ui.ControlContent, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * Toolbar-specific renderer for {@link goog.ui.Button}s, based on {@link
     * goog.ui.CustomButtonRenderer}.
     * @constructor
     * @extends {goog.ui.CustomButtonRenderer}
     */
    class ToolbarButtonRenderer extends goog.ui.CustomButtonRenderer {
        /**
         * Toolbar-specific renderer for {@link goog.ui.Button}s, based on {@link
         * goog.ui.CustomButtonRenderer}.
         * @constructor
         * @extends {goog.ui.CustomButtonRenderer}
         */
        constructor();
    
        /**
         * Returns the CSS class to be applied to the root element of buttons rendered
         * using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * A color menu button control for a toolbar.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *     structure to display as the button's caption.
     * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked;
     *     should contain at least one {@link goog.ui.ColorPalette} if present.
     * @param {goog.ui.ColorMenuButtonRenderer=} opt_renderer Optional
     *     renderer used to render or decorate the button; defaults to
     *     {@link goog.ui.ToolbarColorMenuButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.ColorMenuButton}
     */
    class ToolbarColorMenuButton extends goog.ui.ColorMenuButton {
        /**
         * A color menu button control for a toolbar.
         *
         * @param {goog.ui.ControlContent} content Text caption or existing DOM
         *     structure to display as the button's caption.
         * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked;
         *     should contain at least one {@link goog.ui.ColorPalette} if present.
         * @param {goog.ui.ColorMenuButtonRenderer=} opt_renderer Optional
         *     renderer used to render or decorate the button; defaults to
         *     {@link goog.ui.ToolbarColorMenuButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.ColorMenuButton}
         */
        constructor(content: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ColorMenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * Toolbar-style renderer for {@link goog.ui.ColorMenuButton}s.
     * @constructor
     * @extends {goog.ui.ToolbarMenuButtonRenderer}
     * @final
     */
    class ToolbarColorMenuButtonRenderer extends goog.ui.ToolbarMenuButtonRenderer {
        /**
         * Toolbar-style renderer for {@link goog.ui.ColorMenuButton}s.
         * @constructor
         * @extends {goog.ui.ToolbarMenuButtonRenderer}
         * @final
         */
        constructor();
    
        /**
         * Overrides the superclass implementation by wrapping the caption text or DOM
         * structure in a color indicator element.  Creates the following DOM structure:
         *   <div class="goog-inline-block goog-toolbar-menu-button-caption">
         *     <div class="goog-color-menu-button-indicator">
         *       Contents...
         *     </div>
         *   </div>
         * @param {goog.ui.ControlContent} content Text caption or DOM structure.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Caption element.
         * @see goog.ui.ToolbarColorMenuButtonRenderer#createColorIndicator
         * @override
         */
        createCaption(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
        /**
         * Takes a color menu button control's root element and a value object
         * (which is assumed to be a color), and updates the button's DOM to reflect
         * the new color.  Overrides {@link goog.ui.ButtonRenderer#setValue}.
         * @param {Element} element The button control's root element (if rendered).
         * @param {*} value New value; assumed to be a color spec string.
         * @override
         */
        setValue(element: Element, value: any): void;
    
        /**
         * Initializes the button's DOM when it enters the document.  Overrides the
         * superclass implementation by making sure the button's color indicator is
         * initialized.
         * @param {goog.ui.Control} button goog.ui.ColorMenuButton whose DOM is to be
         *     initialized as it enters the document.
         * @override
         */
        initializeDom(button: goog.ui.Control): void;
    }

    /**
     * A toolbar class, implemented as a {@link goog.ui.Container} that defaults to
     * having a horizontal orientation and {@link goog.ui.ToolbarRenderer} as its
     * renderer.
     * @param {goog.ui.ToolbarRenderer=} opt_renderer Renderer used to render or
     *     decorate the toolbar; defaults to {@link goog.ui.ToolbarRenderer}.
     * @param {?goog.ui.Container.Orientation=} opt_orientation Toolbar orientation;
     *     defaults to {@code HORIZONTAL}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Container}
     */
    class Toolbar extends goog.ui.Container {
        /**
         * A toolbar class, implemented as a {@link goog.ui.Container} that defaults to
         * having a horizontal orientation and {@link goog.ui.ToolbarRenderer} as its
         * renderer.
         * @param {goog.ui.ToolbarRenderer=} opt_renderer Renderer used to render or
         *     decorate the toolbar; defaults to {@link goog.ui.ToolbarRenderer}.
         * @param {?goog.ui.Container.Orientation=} opt_orientation Toolbar orientation;
         *     defaults to {@code HORIZONTAL}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Container}
         */
        constructor(opt_renderer?: goog.ui.ToolbarRenderer, opt_orientation?: goog.ui.Container.Orientation, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * A menu button control for a toolbar.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *     structure to display as the button's caption.
     * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
     *     render or decorate the button; defaults to
     *     {@link goog.ui.ToolbarMenuButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.MenuButton}
     */
    class ToolbarMenuButton extends goog.ui.MenuButton {
        /**
         * A menu button control for a toolbar.
         *
         * @param {goog.ui.ControlContent} content Text caption or existing DOM
         *     structure to display as the button's caption.
         * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked.
         * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
         *     render or decorate the button; defaults to
         *     {@link goog.ui.ToolbarMenuButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.MenuButton}
         */
        constructor(content: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * Toolbar-specific renderer for {@link goog.ui.MenuButton}s, based on {@link
     * goog.ui.MenuButtonRenderer}.
     * @constructor
     * @extends {goog.ui.MenuButtonRenderer}
     */
    class ToolbarMenuButtonRenderer extends goog.ui.MenuButtonRenderer {
        /**
         * Toolbar-specific renderer for {@link goog.ui.MenuButton}s, based on {@link
         * goog.ui.MenuButtonRenderer}.
         * @constructor
         * @extends {goog.ui.MenuButtonRenderer}
         */
        constructor();
    
        /**
         * Returns the CSS class to be applied to the root element of menu buttons
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * Default renderer for {@link goog.ui.Toolbar}s, based on {@link
     * goog.ui.ContainerRenderer}.
     * @constructor
     * @extends {goog.ui.ContainerRenderer}
     */
    class ToolbarRenderer extends goog.ui.ContainerRenderer {
        /**
         * Default renderer for {@link goog.ui.Toolbar}s, based on {@link
         * goog.ui.ContainerRenderer}.
         * @constructor
         * @extends {goog.ui.ContainerRenderer}
         */
        constructor();
    
        /**
         * Inspects the element, and creates an instance of {@link goog.ui.Control} or
         * an appropriate subclass best suited to decorate it.  Overrides the superclass
         * implementation by recognizing HR elements as separators.
         * @param {Element} element Element to decorate.
         * @return {goog.ui.Control?} A new control suitable to decorate the element
         *     (null if none).
         * @override
         */
        getDecoratorForChild(element: Element): goog.ui.Control;
    
        /**
         * Returns the CSS class to be applied to the root element of containers
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    
        /**
         * Returns the default orientation of containers rendered or decorated by this
         * renderer.  This implementation returns {@code HORIZONTAL}.
         * @return {goog.ui.Container.Orientation} Default orientation for containers
         *     created or decorated by this renderer.
         * @override
         */
        getDefaultOrientation(): goog.ui.Container.Orientation;
    }

    /**
     * A select control for a toolbar.
     *
     * @param {goog.ui.ControlContent} caption Default caption or existing DOM
     *     structure to display as the button's caption when nothing is selected.
     * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
     * @param {goog.ui.MenuButtonRenderer=} opt_renderer Renderer used to
     *     render or decorate the control; defaults to
     *     {@link goog.ui.ToolbarMenuButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Select}
     */
    class ToolbarSelect extends goog.ui.Select {
        /**
         * A select control for a toolbar.
         *
         * @param {goog.ui.ControlContent} caption Default caption or existing DOM
         *     structure to display as the button's caption when nothing is selected.
         * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
         * @param {goog.ui.MenuButtonRenderer=} opt_renderer Renderer used to
         *     render or decorate the control; defaults to
         *     {@link goog.ui.ToolbarMenuButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Select}
         */
        constructor(caption: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.MenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * A separator control for a toolbar.
     *
     * @param {goog.ui.ToolbarSeparatorRenderer=} opt_renderer Renderer to render or
     *    decorate the separator; defaults to
     *     {@link goog.ui.ToolbarSeparatorRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *    document interaction.
     * @constructor
     * @extends {goog.ui.Separator}
     * @final
     */
    class ToolbarSeparator extends goog.ui.Separator {
        /**
         * A separator control for a toolbar.
         *
         * @param {goog.ui.ToolbarSeparatorRenderer=} opt_renderer Renderer to render or
         *    decorate the separator; defaults to
         *     {@link goog.ui.ToolbarSeparatorRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *    document interaction.
         * @constructor
         * @extends {goog.ui.Separator}
         * @final
         */
        constructor(opt_renderer?: goog.ui.ToolbarSeparatorRenderer, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * Renderer for toolbar separators.
     * @constructor
     * @extends {goog.ui.MenuSeparatorRenderer}
     */
    class ToolbarSeparatorRenderer extends goog.ui.MenuSeparatorRenderer {
        /**
         * Renderer for toolbar separators.
         * @constructor
         * @extends {goog.ui.MenuSeparatorRenderer}
         */
        constructor();
    
        /**
         * Returns a styled toolbar separator implemented by the following DOM:
         * <div class="goog-toolbar-separator goog-inline-block">&nbsp;</div>
         * Overrides {@link goog.ui.MenuSeparatorRenderer#createDom}.
         * @param {goog.ui.Control} separator goog.ui.Separator to render.
         * @return {Element} Root element for the separator.
         * @override
         */
        createDom(separator: goog.ui.Control): Element;
    
        /**
         * Takes an existing element, and decorates it with the separator.  Overrides
         * {@link goog.ui.MenuSeparatorRenderer#decorate}.
         * @param {goog.ui.Control} separator goog.ui.Separator to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(separator: goog.ui.Control, element: Element): Element;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * A toggle button control for a toolbar.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *     structure to display as the button's caption.
     * @param {goog.ui.ToolbarButtonRenderer=} opt_renderer Optional renderer used
     *     to render or decorate the button; defaults to
     *     {@link goog.ui.ToolbarButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.ToggleButton}
     */
    class ToolbarToggleButton extends goog.ui.ToggleButton {
        /**
         * A toggle button control for a toolbar.
         *
         * @param {goog.ui.ControlContent} content Text caption or existing DOM
         *     structure to display as the button's caption.
         * @param {goog.ui.ToolbarButtonRenderer=} opt_renderer Optional renderer used
         *     to render or decorate the button; defaults to
         *     {@link goog.ui.ToolbarButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.ToggleButton}
         */
        constructor(content: goog.ui.ControlContent, opt_renderer?: goog.ui.ToolbarButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * Tooltip widget. Can be attached to one or more elements and is shown, with a
     * slight delay, when the the cursor is over the element or the element gains
     * focus.
     *
     * @param {Element|string=} opt_el Element to display tooltip for, either
     *     element reference or string id.
     * @param {?string=} opt_str Text message to display in tooltip.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Popup}
     */
    class Tooltip extends goog.ui.Popup {
        /**
         * Tooltip widget. Can be attached to one or more elements and is shown, with a
         * slight delay, when the the cursor is over the element or the element gains
         * focus.
         *
         * @param {Element|string=} opt_el Element to display tooltip for, either
         *     element reference or string id.
         * @param {?string=} opt_str Text message to display in tooltip.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Popup}
         */
        constructor(opt_el?: any /*Element|string*/, opt_str?: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * CSS class name for tooltip.
         *
         * @type {string}
         */
        className: string;
    
        /**
         * Timer for when to show.
         *
         * @type {number|undefined}
         * @protected
         */
        showTimer: any /*number|any (undefined)*/;
    
        /**
         * Timer for when to hide.
         *
         * @type {number|undefined}
         * @protected
         */
        hideTimer: any /*number|any (undefined)*/;
    
        /**
         * Element that triggered the tooltip.  Note that if a second element triggers
         * this tooltip, anchor becomes that second element, even if its show is
         * cancelled and the original tooltip survives.
         *
         * @type {Element|undefined}
         * @protected
         */
        anchor: any /*Element|any (undefined)*/;
    
        /**
         * Returns the dom helper that is being used on this component.
         * @return {goog.dom.DomHelper} The dom helper used on this component.
         */
        getDomHelper(): goog.dom.DomHelper;
    
        /**
         * @return {goog.ui.Tooltip} Active tooltip in a child element, or null if none.
         * @protected
         */
        getChildTooltip(): goog.ui.Tooltip;
    
        /**
         * Attach to element. Tooltip will be displayed when the cursor is over the
         * element or when the element has been active for a few milliseconds.
         *
         * @param {Element|string} el Element to display tooltip for, either element
         *                            reference or string id.
         */
        attach(el: any /*Element|string*/): void;
    
        /**
         * Detach from element(s).
         *
         * @param {Element|string=} opt_el Element to detach from, either element
         *                                reference or string id. If no element is
         *                                specified all are detached.
         */
        detach(opt_el?: any /*Element|string*/): void;
    
        /**
         * Sets delay in milliseconds before tooltip is displayed for an element.
         *
         * @param {number} delay The delay in milliseconds.
         */
        setShowDelayMs(delay: number): void;
    
        /**
         * @return {number} The delay in milliseconds before tooltip is displayed for an
         *     element.
         */
        getShowDelayMs(): number;
    
        /**
         * Sets delay in milliseconds before tooltip is hidden once the cursor leavs
         * the element.
         *
         * @param {number} delay The delay in milliseconds.
         */
        setHideDelayMs(delay: number): void;
    
        /**
         * @return {number} The delay in milliseconds before tooltip is hidden once the
         *     cursor leaves the element.
         */
        getHideDelayMs(): number;
    
        /**
         * Sets tooltip message as plain text.
         *
         * @param {string} str Text message to display in tooltip.
         */
        setText(str: string): void;
    
        /**
         * Sets tooltip message as HTML markup.
         * using goog.html.SafeHtml are in place.
         *
         * @param {string} str HTML message to display in tooltip.
         */
        setHtml(str: string): void;
    
        /**
         * Sets tooltip message as HTML markup.
         * @param {!goog.html.SafeHtml} html HTML message to display in tooltip.
         */
        setSafeHtml(html: goog.html.SafeHtml): void;
    
        /**
         * Sets tooltip element.
         *
         * @param {Element} el HTML element to use as the tooltip.
         * @override
         */
        setElement(el: Element): void;
    
        /**
         * @return {string} The tooltip message as plain text.
         */
        getText(): string;
    
        /**
         * @return {string} The tooltip message as HTML as plain string.
         */
        getHtml(): string;
    
        /**
         * @return {goog.ui.Tooltip.State} Current state of tooltip.
         */
        getState(): goog.ui.Tooltip.State;
    
        /**
         * Sets whether tooltip requires the mouse to have moved or the anchor receive
         * focus before the tooltip will be shown.
         * @param {boolean} requireInteraction Whether tooltip should require some user
         *     interaction before showing tooltip.
         */
        setRequireInteraction(requireInteraction: boolean): void;
    
        /**
         * Returns true if the coord is in the tooltip.
         * @param {goog.math.Coordinate} coord Coordinate being tested.
         * @return {boolean} Whether the coord is in the tooltip.
         */
        isCoordinateInTooltip(coord: goog.math.Coordinate): boolean;
    
        /**
         * Called before the popup is shown.
         *
         * @return {boolean} Whether tooltip should be shown.
         * @protected
         * @override
         */
        onBeforeShow(): boolean;
    
        /**
         * Called after the popup is hidden.
         *
         * @protected
         * @suppress {underscore|visibility}
         * @override
         */
        onHide_(): void;
    
        /**
         * Called by timer from mouse over handler. Shows tooltip if cursor is still
         * over the same element.
         *
         * @param {Element} el Element to show tooltip for.
         * @param {goog.positioning.AbstractPosition=} opt_pos Position to display popup
         *     at.
         */
        maybeShow(el: Element, opt_pos?: goog.positioning.AbstractPosition): void;
    
        /**
         * @return {goog.structs.Set} Elements this widget is attached to.
         * @protected
         */
        getElements(): goog.structs.Set;
    
        /**
         * @return {Element} Active element reference.
         */
        getActiveElement(): Element;
    
        /**
         * @param {Element} activeEl Active element reference.
         * @protected
         */
        setActiveElement(activeEl: Element): void;
    
        /**
         * Shows tooltip for a specific element.
         *
         * @param {Element} el Element to show tooltip for.
         * @param {goog.positioning.AbstractPosition=} opt_pos Position to display popup
         *     at.
         */
        showForElement(el: Element, opt_pos?: goog.positioning.AbstractPosition): void;
    
        /**
         * Called by timer from mouse out handler. Hides tooltip if cursor is still
         * outside element and tooltip, or if a child of tooltip has the focus.
         * @param {Element} el Tooltip's anchor when hide timer was started.
         */
        maybeHide(el: Element): void;
    
        /**
         * @return {boolean} Whether tooltip element contains an active child tooltip,
         *     and should thus not be hidden.  When the child tooltip is hidden, it
         *     will check if the parent should be hidden, too.
         * @protected
         */
        hasActiveChild(): boolean;
    
        /**
         * Handler for mouse over events.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         */
        handleMouseOver(event: goog.events.BrowserEvent): void;
    
        /**
         * Find anchor containing the given element, if any.
         *
         * @param {Element} el Element that triggered event.
         * @return {Element} Element in elements_ array that contains given element,
         *     or null if not found.
         * @protected
         */
        getAnchorFromElement(el: Element): Element;
    
        /**
         * Handler for mouse move events.
         *
         * @param {goog.events.BrowserEvent} event MOUSEMOVE event.
         * @protected
         */
        handleMouseMove(event: goog.events.BrowserEvent): void;
    
        /**
         * Handler for focus events.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         */
        handleFocus(event: goog.events.BrowserEvent): void;
    
        /**
         * Return a Position instance for repositioning the tooltip. Override in
         * subclasses to customize the way repositioning is done.
         *
         * @param {goog.ui.Tooltip.Activation} activationType Information about what
         *    kind of event caused the popup to be shown.
         * @return {!goog.positioning.AbstractPosition} The position object used
         *    to position the tooltip.
         * @protected
         */
        getPositioningStrategy(activationType: goog.ui.Tooltip.Activation): goog.positioning.AbstractPosition;
    
        /**
         * Handler for mouse out and blur events.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         */
        handleMouseOutAndBlur(event: goog.events.BrowserEvent): void;
    
        /**
         * Handler for mouse over events for the tooltip element.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         */
        handleTooltipMouseOver(event: goog.events.BrowserEvent): void;
    
        /**
         * Handler for mouse out events for the tooltip element.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         */
        handleTooltipMouseOut(event: goog.events.BrowserEvent): void;
    
        /**
         * Helper method, starts timer that calls maybeShow. Parameters are passed to
         * the maybeShow method.
         *
         * @param {Element} el Element to show tooltip for.
         * @param {goog.positioning.AbstractPosition=} opt_pos Position to display popup
         *     at.
         * @protected
         */
        startShowTimer(el: Element, opt_pos?: goog.positioning.AbstractPosition): void;
    
        /**
         * Helper method called to clear the show timer.
         *
         * @protected
         */
        clearShowTimer(): void;
    
        /**
         * Helper method called to start the close timer.
         * @protected
         */
        startHideTimer(): void;
    
        /**
         * Helper method called to clear the close timer.
         * @protected
         */
        clearHideTimer(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Class representing a three state checkbox menu item.
     *
     * @param {goog.ui.ControlContent} content Text caption or DOM structure
     *     to display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {Object=} opt_model Data/model associated with the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
     * @param {boolean=} opt_alwaysAllowPartial  If true, always allow partial
     *     state.
     * @constructor
     * @extends {goog.ui.MenuItem}
     * TODO(attila): Figure out how to better integrate this into the
     * goog.ui.Control state management framework.
     * @final
     */
    class TriStateMenuItem {
        /**
         * Class representing a three state checkbox menu item.
         *
         * @param {goog.ui.ControlContent} content Text caption or DOM structure
         *     to display as the content of the item (use to add icons or styling to
         *     menus).
         * @param {Object=} opt_model Data/model associated with the menu item.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
         *     document interactions.
         * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
         * @param {boolean=} opt_alwaysAllowPartial  If true, always allow partial
         *     state.
         * @constructor
         * @extends {goog.ui.MenuItem}
         * TODO(attila): Figure out how to better integrate this into the
         * goog.ui.Control state management framework.
         * @final
         */
        constructor(content: goog.ui.ControlContent, opt_model?: Object, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer, opt_alwaysAllowPartial?: boolean);
    
        /**
         * @return {goog.ui.TriStateMenuItem.State} The menu item's check state.
         */
        getCheckedState(): goog.ui.TriStateMenuItem.State;
    
        /**
         * Sets the checked state.
         * @param {goog.ui.TriStateMenuItem.State} state The checked state.
         */
        setCheckedState(state: goog.ui.TriStateMenuItem.State): void;
    
        /** @override */
        performActionInternal(): void;
    }

    /**
     * Default renderer for {@link goog.ui.TriStateMenuItemRenderer}s. Each item has
     * the following structure:
     *    <div class="goog-tristatemenuitem">
     *        <div class="goog-tristatemenuitem-checkbox"></div>
     *        <div>...(content)...</div>
     *    </div>
     * @constructor
     * @extends {goog.ui.MenuItemRenderer}
     * @final
     */
    class TriStateMenuItemRenderer extends goog.ui.MenuItemRenderer {
        /**
         * Default renderer for {@link goog.ui.TriStateMenuItemRenderer}s. Each item has
         * the following structure:
         *    <div class="goog-tristatemenuitem">
         *        <div class="goog-tristatemenuitem-checkbox"></div>
         *        <div>...(content)...</div>
         *    </div>
         * @constructor
         * @extends {goog.ui.MenuItemRenderer}
         * @final
         */
        constructor();
    
        /**
         * Overrides {@link goog.ui.ControlRenderer#decorate} by initializing the
         * menu item to checkable based on whether the element to be decorated has
         * extra styling indicating that it should be.
         * @param {goog.ui.Control} item goog.ui.MenuItem to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(item: goog.ui.Control, element: Element): Element;
    
        /** @override */
        getCssClass(): void;
    }

    /**
     * This creates a TwoThumbSlider object.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.SliderBase}
     */
    class TwoThumbSlider extends goog.ui.SliderBase {
        /**
         * This creates a TwoThumbSlider object.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.SliderBase}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @param {goog.ui.SliderBase.Orientation} orient orientation of the slider.
         * @return {string} The CSS class applied to the twothumbslider element.
         * @protected
         * @override
         */
        getCssClass(orient: goog.ui.SliderBase.Orientation): string;
    
        /**
         * Creates the thumb members for a twothumbslider. If the
         * element contains a child with a class name 'goog-twothumbslider-value-thumb'
         * (or 'goog-twothumbslider-extent-thumb', respectively), then that will be used
         * as the valueThumb (or as the extentThumb, respectively). If the element
         * contains a child with a class name 'goog-twothumbslider-rangehighlight',
         * then that will be used as the range highlight.
         * @override
         */
        createThumbs(): void;
    }

    /**
     * Zippy widget. Expandable/collapsible container, clicking the header toggles
     * the visibility of the content.
     *
     * @extends {goog.events.EventTarget}
     * @param {Element|string|null} header Header element, either element
     *     reference, string id or null if no header exists.
     * @param {Element|string|function():Element=} opt_content Content element
     *     (if any), either element reference or string id.  If skipped, the caller
     *     should handle the TOGGLE event in its own way. If a function is passed,
     *     then if will be called to create the content element the first time the
     *     zippy is expanded.
     * @param {boolean=} opt_expanded Initial expanded/visibility state. Defaults to
     *     false.
     * @param {Element|string=} opt_expandedHeader Element to use as the header when
     *     the zippy is expanded.
     * @param {goog.dom.DomHelper=} opt_domHelper An optional DOM helper.
     * @constructor
     */
    class Zippy extends goog.events.EventTarget {
        /**
         * Zippy widget. Expandable/collapsible container, clicking the header toggles
         * the visibility of the content.
         *
         * @extends {goog.events.EventTarget}
         * @param {Element|string|null} header Header element, either element
         *     reference, string id or null if no header exists.
         * @param {Element|string|function():Element=} opt_content Content element
         *     (if any), either element reference or string id.  If skipped, the caller
         *     should handle the TOGGLE event in its own way. If a function is passed,
         *     then if will be called to create the content element the first time the
         *     zippy is expanded.
         * @param {boolean=} opt_expanded Initial expanded/visibility state. Defaults to
         *     false.
         * @param {Element|string=} opt_expandedHeader Element to use as the header when
         *     the zippy is expanded.
         * @param {goog.dom.DomHelper=} opt_domHelper An optional DOM helper.
         * @constructor
         */
        constructor(header: any /*Element|string|any (null)*/, opt_content?: any /*Element|string|() => Element*/, opt_expanded?: boolean, opt_expandedHeader?: any /*Element|string*/, opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * @return {goog.a11y.aria.Role} The ARIA role to be applied to Zippy element.
         */
        getAriaRole(): goog.a11y.aria.Role;
    
        /**
         * @return {Element} The content element.
         */
        getContentElement(): Element;
    
        /**
         * @return {Element} The visible header element.
         */
        getVisibleHeaderElement(): Element;
    
        /**
         * Expands content pane.
         */
        expand(): void;
    
        /**
         * Collapses content pane.
         */
        collapse(): void;
    
        /**
         * Toggles expanded state.
         */
        toggle(): void;
    
        /**
         * Sets expanded state.
         *
         * @param {boolean} expanded Expanded/visibility state.
         */
        setExpanded(expanded: boolean): void;
    
        /**
         * Sets expanded internal state.
         *
         * @param {boolean} expanded Expanded/visibility state.
         * @protected
         */
        setExpandedInternal(expanded: boolean): void;
    
        /**
         * @return {boolean} Whether the zippy is expanded.
         */
        isExpanded(): boolean;
    
        /**
         * Updates the header element's className and ARIA (accessibility) EXPANDED
         * state.
         *
         * @param {boolean} expanded Expanded/visibility state.
         * @protected
         */
        updateHeaderClassName(expanded: boolean): void;
    
        /**
         * @return {boolean} Whether the Zippy handles its own key events.
         */
        isHandleKeyEvents(): boolean;
    
        /**
         * @return {boolean} Whether the Zippy handles its own mouse events.
         */
        isHandleMouseEvents(): boolean;
    
        /**
         * Sets whether the Zippy handles it's own keyboard events.
         * @param {boolean} enable Whether the Zippy handles keyboard events.
         */
        setHandleKeyboardEvents(enable: boolean): void;
    
        /**
         * Sets whether the Zippy handles it's own mouse events.
         * @param {boolean} enable Whether the Zippy handles mouse events.
         */
        setHandleMouseEvents(enable: boolean): void;
    }

    /**
     * Object representing a zippy toggle event.
     *
     * @param {string} type Event type.
     * @param {goog.ui.Zippy} target Zippy widget initiating event.
     * @param {boolean} expanded Expanded state.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class ZippyEvent extends goog.events.Event {
        /**
         * Object representing a zippy toggle event.
         *
         * @param {string} type Event type.
         * @param {goog.ui.Zippy} target Zippy widget initiating event.
         * @param {boolean} expanded Expanded state.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(type: string, target: goog.ui.Zippy, expanded: boolean);
    }
}

declare module 'goog.ui.CharCounter' {

    /**
     * Display mode for the char counter.
     * @enum {number}
     */
    enum Display { REMAINING, INCREMENTAL } 
}

declare module 'goog.ui.Checkbox' {

    /**
     * Possible checkbox states.
     * @enum {?boolean}
     */
    enum State { CHECKED, UNCHECKED, UNDETERMINED } 
}

declare module 'goog.ui.CheckboxRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.ColorButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer. Additionally, applies class to the button's caption.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.ColorMenuButton' {

    /**
     * Default color palettes.
     * @type {!Object}
     */
    var PALETTES: Object;

    /**
     * Value for the "no color" menu item object in the color menu (if present).
     * The {@link goog.ui.ColorMenuButton#handleMenuAction} method interprets
     * ACTION events dispatched by an item with this value as meaning "clear the
     * selected color."
     * @type {string}
     */
    var NO_COLOR: string;

    /**
     * Factory method that creates and returns a new {@link goog.ui.Menu} instance
     * containing default color palettes.
     * @param {Array.<goog.ui.Control>=} opt_extraItems Optional extra menu items to
     *     add before the color palettes.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @return {goog.ui.Menu} Color menu.
     */
    function newColorMenu(opt_extraItems?: goog.ui.Control[], opt_domHelper?: goog.dom.DomHelper): goog.ui.Menu;
}

declare module 'goog.ui.ColorMenuButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Wrap a caption in a div with the color-menu-button-indicator CSS class.
     * @param {goog.ui.ControlContent} content Text caption or DOM structure.
     * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
     * @return {Element} Caption element.
     */
    function wrapCaption(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;

    /**
     * Takes a control's content element and a value object (which is assumed
     * to be a color), and updates its DOM to reflect the new color.
     * @param {Element} caption A content element of a control.
     * @param {*} value New value; assumed to be a color spec string.
     */
    function setCaptionValue(caption: Element, value: any): void;
}

declare module 'goog.ui.ColorPicker' {

    /**
     * Default number of columns in the color palette. May be overridden by calling
     * setSize.
     *
     * @type {number}
     */
    var DEFAULT_NUM_COLS: number;

    /**
     * Constants for event names.
     * @enum {string}
     */
    enum EventType { CHANGE } 

    /**
     * Returns an unrendered instance of the color picker.  The colors and layout
     * are a simple color grid, the same as the old Gmail color picker.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @return {goog.ui.ColorPicker} The unrendered instance.
     */
    function createSimpleColorGrid(opt_domHelper?: goog.dom.DomHelper): goog.ui.ColorPicker;

    /**
     * Array of colors for a 7-cell wide simple-grid color picker.
     * @type {Array.<string>}
     */
    var SIMPLE_GRID_COLORS: string[];
}

declare module 'goog.ui.ComboBox' {

    /**
     * Number of milliseconds to wait before dismissing combobox after blur.
     * @type {number}
     */
    var BLUR_DISMISS_TIMER_MS: number;
}

declare module 'goog.ui.Component' {

    /**
     * Common events fired by components so that event propagation is useful.  Not
     * all components are expected to dispatch or listen for all event types.
     * Events dispatched before a state transition should be cancelable to prevent
     * the corresponding state change.
     * @enum {string}
     */
    enum EventType { BEFORE_SHOW, SHOW, HIDE, DISABLE, ENABLE, HIGHLIGHT, UNHIGHLIGHT, ACTIVATE, DEACTIVATE, SELECT, UNSELECT, CHECK, UNCHECK, FOCUS, BLUR, OPEN, CLOSE, ENTER, LEAVE, ACTION, CHANGE } 

    /**
     * Errors thrown by the component.
     * @enum {string}
     */
    enum Error { NOT_SUPPORTED, DECORATE_INVALID, ALREADY_RENDERED, PARENT_UNABLE_TO_BE_SET, CHILD_INDEX_OUT_OF_BOUNDS, NOT_OUR_CHILD, NOT_IN_DOCUMENT, STATE_INVALID } 

    /**
     * Common component states.  Components may have distinct appearance depending
     * on what state(s) apply to them.  Not all components are expected to support
     * all states.
     * @enum {number}
     */
    enum State { ALL, DISABLED, HOVER, ACTIVE, SELECTED, CHECKED, FOCUSED, OPENED } 

    /**
     * Static helper method; returns the type of event components are expected to
     * dispatch when transitioning to or from the given state.
     * @param {goog.ui.Component.State} state State to/from which the component
     *     is transitioning.
     * @param {boolean} isEntering Whether the component is entering or leaving the
     *     state.
     * @return {goog.ui.Component.EventType} Event type to dispatch.
     */
    function getStateTransitionEvent(state: goog.ui.Component.State, isEntering: boolean): goog.ui.Component.EventType;

    /**
     * Set the default right-to-left value. This causes all component's created from
     * this point foward to have the given value. This is useful for cases where
     * a given page is always in one directionality, avoiding unnecessary
     * right to left determinations.
     * @param {?boolean} rightToLeft Whether the components should be rendered
     *     right-to-left. Null iff components should determine their directionality.
     */
    function setDefaultRightToLeft(rightToLeft: boolean): void;
}

declare module 'goog.ui.Container' {

    /**
     * Container-specific events.
     * @enum {string}
     */
    enum EventType { AFTER_SHOW, AFTER_HIDE } 

    /**
     * Container orientation constants.
     * @enum {string}
     */
    enum Orientation { HORIZONTAL, VERTICAL } 
}

declare module 'goog.ui.ContainerRenderer' {

    /**
     * Constructs a new renderer and sets the CSS class that the renderer will use
     * as the base CSS class to apply to all elements rendered by that renderer.
     * An example to use this function using a menu is:
     *
     * <pre>
     * var myCustomRenderer = goog.ui.ContainerRenderer.getCustomRenderer(
     *     goog.ui.MenuRenderer, 'my-special-menu');
     * var newMenu = new goog.ui.Menu(opt_domHelper, myCustomRenderer);
     * </pre>
     *
     * Your styles for the menu can now be:
     * <pre>
     * .my-special-menu { }
     * </pre>
     *
     * <em>instead</em> of
     * <pre>
     * .CSS_MY_SPECIAL_MENU .goog-menu { }
     * </pre>
     *
     * You would want to use this functionality when you want an instance of a
     * component to have specific styles different than the other components of the
     * same type in your application.  This avoids using descendant selectors to
     * apply the specific styles to this component.
     *
     * @param {Function} ctor The constructor of the renderer you want to create.
     * @param {string} cssClassName The name of the CSS class for this renderer.
     * @return {goog.ui.ContainerRenderer} An instance of the desired renderer with
     *     its getCssClass() method overridden to return the supplied custom CSS
     *     class name.
     */
    function getCustomRenderer(ctor: Function, cssClassName: string): goog.ui.ContainerRenderer;

    /**
     * Default CSS class to be applied to the root element of containers rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.Control' {

    /**
     * Maps a CSS class name to a function that returns a new instance of
     * {@link goog.ui.Control} or a subclass thereof, suitable to decorate
     * an element that has the specified CSS class.  UI components that extend
     * {@link goog.ui.Control} and want {@link goog.ui.Container}s to be able
     * to discover and decorate elements using them should register a factory
     * function via this API.
     * @param {string} className CSS class name.
     * @param {Function} decoratorFunction Function that takes no arguments and
     *     returns a new instance of a control to decorate an element with the
     *     given class.
     * @deprecated Use {@link goog.ui.registry.setDecoratorByClassName} instead.
     */
    var registerDecorator: any /*missing*/;

    /**
     * Takes an element and returns a new instance of {@link goog.ui.Control}
     * or a subclass, suitable to decorate it (based on the element's CSS class).
     * @param {Element} element Element to decorate.
     * @return {goog.ui.Control?} New control instance to decorate the element
     *     (null if none).
     * @deprecated Use {@link goog.ui.registry.getDecorator} instead.
     */
    var getDecorator: any /*missing*/;

    /**
     * Takes an element, and decorates it with a {@link goog.ui.Control} instance
     * if a suitable decorator is found.
     * @param {Element} element Element to decorate.
     * @return {goog.ui.Control?} New control instance that decorates the element
     *     (null if none).
     * @deprecated Use {@link goog.ui.decorate} instead.
     */
    var decorate: any /*missing*/;
}

declare module 'goog.ui.ControlRenderer' {

    /**
     * Constructs a new renderer and sets the CSS class that the renderer will use
     * as the base CSS class to apply to all elements rendered by that renderer.
     * An example to use this function using a color palette:
     *
     * <pre>
     * var myCustomRenderer = goog.ui.ControlRenderer.getCustomRenderer(
     *     goog.ui.PaletteRenderer, 'my-special-palette');
     * var newColorPalette = new goog.ui.ColorPalette(
     *     colors, myCustomRenderer, opt_domHelper);
     * </pre>
     *
     * Your CSS can look like this now:
     * <pre>
     * .my-special-palette { }
     * .my-special-palette-table { }
     * .my-special-palette-cell { }
     * etc.
     * </pre>
     *
     * <em>instead</em> of
     * <pre>
     * .CSS_MY_SPECIAL_PALETTE .goog-palette { }
     * .CSS_MY_SPECIAL_PALETTE .goog-palette-table { }
     * .CSS_MY_SPECIAL_PALETTE .goog-palette-cell { }
     * etc.
     * </pre>
     *
     * You would want to use this functionality when you want an instance of a
     * component to have specific styles different than the other components of the
     * same type in your application.  This avoids using descendant selectors to
     * apply the specific styles to this component.
     *
     * @param {Function} ctor The constructor of the renderer you are trying to
     *     create.
     * @param {string} cssClassName The name of the CSS class for this renderer.
     * @return {goog.ui.ControlRenderer} An instance of the desired renderer with
     *     its getCssClass() method overridden to return the supplied custom CSS
     *     class name.
     */
    function getCustomRenderer(ctor: Function, cssClassName: string): goog.ui.ControlRenderer;

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Array of arrays of CSS classes that we want composite classes added and
     * removed for in IE6 and lower as a workaround for lack of multi-class CSS
     * selector support.
     *
     * Subclasses that have accompanying CSS requiring this workaround should define
     * their own static IE6_CLASS_COMBINATIONS constant and override
     * getIe6ClassCombinations to return it.
     *
     * For example, if your stylesheet uses the selector .button.collapse-left
     * (and is compiled to .button_collapse-left for the IE6 version of the
     * stylesheet,) you should include ['button', 'collapse-left'] in this array
     * and the class button_collapse-left will be applied to the root element
     * whenever both button and collapse-left are applied individually.
     *
     * Members of each class name combination will be joined with underscores in the
     * order that they're defined in the array. You should alphabetize them (for
     * compatibility with the CSS compiler) unless you are doing something special.
     * @type {Array.<Array.<string>>}
     */
    var IE6_CLASS_COMBINATIONS: string[][];

    /**
     * Map of certain ARIA states to ARIA roles that support them. Used for checked
     * and selected Component states because they are used on Components with ARIA
     * roles that do not support the corresponding ARIA state.
     * @private {!Object.<goog.a11y.aria.Role, goog.a11y.aria.State>}
     * @const
     */
    var TOGGLE_ARIA_STATE_MAP_: any /*missing*/;
}

declare module 'goog.ui.Css3ButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.Css3MenuButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.CustomButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.DatePicker' {

    /**
     * Constants for event names
     *
     * @type {Object}
     */
    var Events: Object;
}

declare module 'goog.ui.Dialog' {

    /**
     * Event type constant for dialog events.
     * TODO(attila): Change this to goog.ui.Dialog.EventType.SELECT.
     * @type {string}
     * @deprecated Use goog.ui.Dialog.EventType.SELECT.
     */
    var SELECT_EVENT: string;

    /**
     * Events dispatched by dialogs.
     * @enum {string}
     */
    enum EventType { SELECT, AFTER_HIDE, AFTER_SHOW } 

    /**
     * The keys used to identify standard buttons in events.
     * @enum {string}
     */
    enum DefaultButtonKeys { OK, CANCEL, YES, NO, SAVE, CONTINUE } 

    /**
     * The default captions for the default buttons.
     * @enum {string}
     */
    enum DefaultButtonCaptions { OK, CANCEL, YES, NO, SAVE, CONTINUE } 

    /**
     * Dialog event class.
     * @param {string} key Key identifier for the button.
     * @param {string|Element} caption Caption on the button (might be i18nlized).
     * @constructor
     * @extends {goog.events.Event}
     */
    class Event extends goog.events.Event {
        /**
         * Dialog event class.
         * @param {string} key Key identifier for the button.
         * @param {string|Element} caption Caption on the button (might be i18nlized).
         * @constructor
         * @extends {goog.events.Event}
         */
        constructor(key: string, caption: any /*string|Element*/);
    }

    /**
     * A button set defines the behaviour of a set of buttons that the dialog can
     * show.  Uses the {@link goog.structs.Map} interface.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
     *    goog.ui.Component} for semantics.
     * @constructor
     * @extends {goog.structs.Map}
     */
    class ButtonSet extends goog.structs.Map {
        /**
         * A button set defines the behaviour of a set of buttons that the dialog can
         * show.  Uses the {@link goog.structs.Map} interface.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
         *    goog.ui.Component} for semantics.
         * @constructor
         * @extends {goog.structs.Map}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Adds a button to the button set.  Buttons will be displayed in the order they
         * are added.
         *
         * @param {*} key Key used to identify the button in events.
         * @param {*} caption A string caption or a DOM node that can be
         *     appended to a button element.
         * @param {boolean=} opt_isDefault Whether this button is the default button,
         *     Dialog will dispatch for this button if enter is pressed.
         * @param {boolean=} opt_isCancel Whether this button has the same behaviour as
         *    cancel.  If escape is pressed this button will fire.
         * @return {!goog.ui.Dialog.ButtonSet} The button set, to make it easy to chain
         *    "set" calls and build new ButtonSets.
         * @override
         */
        set(key: any, caption: any, opt_isDefault?: boolean, opt_isCancel?: boolean): goog.ui.Dialog.ButtonSet;
    
        /**
         * Adds a button (an object with a key and caption) to this button set. Buttons
         * will be displayed in the order they are added.
         * @see goog.ui.Dialog.DefaultButtons
         * @param {!{key: string, caption: string}} button The button key and caption.
         * @param {boolean=} opt_isDefault Whether this button is the default button.
         *     Dialog will dispatch for this button if enter is pressed.
         * @param {boolean=} opt_isCancel Whether this button has the same behavior as
         *     cancel. If escape is pressed this button will fire.
         * @return {!goog.ui.Dialog.ButtonSet} The button set, to make it easy to chain
         *     "addButton" calls and build new ButtonSets.
         */
        addButton(button: { key: string, caption: string }, opt_isDefault?: boolean, opt_isCancel?: boolean): goog.ui.Dialog.ButtonSet;
    
        /**
         * Attaches the button set to an element, rendering it inside.
         * @param {Element} el Container.
         */
        attachToElement(el: Element): void;
    
        /**
         * Renders the button set inside its container element.
         */
        render(): void;
    
        /**
         * Decorates the given element by adding any {@code button} elements found
         * among its descendants to the button set.  The first button found is assumed
         * to be the default and will receive focus when the button set is rendered.
         * If a button with a name of {@link goog.ui.Dialog.DefaultButtonKeys.CANCEL}
         * is found, it is assumed to have "Cancel" semantics.
         * TODO(attila):  ButtonSet should be a goog.ui.Component.  Really.
         * @param {Element} element The element to decorate; should contain buttons.
         */
        decorate(element: Element): void;
    
        /**
         * Gets the component's element.
         * @return {Element} The element for the component.
         * TODO(user): Remove after refactoring to goog.ui.Component.
         */
        getElement(): Element;
    
        /**
         * Returns the dom helper that is being used on this component.
         * @return {!goog.dom.DomHelper} The dom helper used on this component.
         * TODO(user): Remove after refactoring to goog.ui.Component.
         */
        getDomHelper(): goog.dom.DomHelper;
    
        /**
         * Sets the default button.
         * @param {?string} key The default button.
         */
        setDefault(key: string): void;
    
        /**
         * Returns the default button.
         * @return {?string} The default button.
         */
        getDefault(): string;
    
        /**
         * Sets the cancel button.
         * @param {?string} key The cancel button.
         */
        setCancel(key: string): void;
    
        /**
         * Returns the cancel button.
         * @return {?string} The cancel button.
         */
        getCancel(): string;
    
        /**
         * Returns the HTML Button element.
         * @param {string} key The button to return.
         * @return {Element} The button, if found else null.
         */
        getButton(key: string): Element;
    
        /**
         * Returns all the HTML Button elements in the button set container.
         * @return {NodeList} A live NodeList of the buttons.
         */
        getAllButtons(): NodeList;
    
        /**
         * Enables or disables a button in this set by key. If the button is not found,
         * does nothing.
         * @param {string} key The button to enable or disable.
         * @param {boolean} enabled True to enable; false to disable.
         */
        setButtonEnabled(key: string, enabled: boolean): void;
    
        /**
         * Enables or disables all of the buttons in this set.
         * @param {boolean} enabled True to enable; false to disable.
         */
        setAllButtonsEnabled(enabled: boolean): void;
    }
}

declare module 'goog.ui.Dialog.ButtonSet' {

    /**
     * The standard buttons (keys associated with captions).
     * @enum {!{key: string, caption: string}}
     */
    enum DefaultButtons { OK, CANCEL, YES, NO, SAVE, CONTINUE } 

    /**
     * Creates a new ButtonSet with a single 'OK' button, which is also set with
     * cancel button semantics so that pressing escape will close the dialog.
     * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
     */
    function createOk(): goog.ui.Dialog.ButtonSet;

    /**
     * Creates a new ButtonSet with 'OK' (default) and 'Cancel' buttons.
     * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
     */
    function createOkCancel(): goog.ui.Dialog.ButtonSet;

    /**
     * Creates a new ButtonSet with 'Yes' (default) and 'No' buttons.
     * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
     */
    function createYesNo(): goog.ui.Dialog.ButtonSet;

    /**
     * Creates a new ButtonSet with 'Yes', 'No' (default), and 'Cancel' buttons.
     * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
     */
    function createYesNoCancel(): goog.ui.Dialog.ButtonSet;

    /**
     * Creates a new ButtonSet with 'Continue', 'Save', and 'Cancel' (default)
     * buttons.
     * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
     */
    function createContinueSaveCancel(): goog.ui.Dialog.ButtonSet;

    /** @deprecated Use goog.ui.Dialog.ButtonSet#createOk. */
    var OK: any /*missing*/;

    /** @deprecated Use goog.ui.Dialog.ButtonSet#createOkCancel. */
    var OK_CANCEL: any /*missing*/;

    /** @deprecated Use goog.ui.Dialog.ButtonSet#createYesNo. */
    var YES_NO: any /*missing*/;

    /** @deprecated Use goog.ui.Dialog.ButtonSet#createYesNoCancel. */
    var YES_NO_CANCEL: any /*missing*/;

    /** @deprecated Use goog.ui.Dialog.ButtonSet#createContinueSaveCancel. */
    var CONTINUE_SAVE_CANCEL: any /*missing*/;
}

declare module 'goog.ui.DimensionPickerRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.DragDropDetector' {

    /**
     * Drag and drop event types.
     * @enum {string}
     */
    enum EventType { IMAGE_DROPPED, LINK_DROPPED } 

    /**
     * Initial value for clientX and clientY indicating that the location has
     * never been updated.
     */
    var INIT_POSITION: any /*missing*/;

    /**
     * Creates a new image drop event object.
     * @param {string} url The url of the dropped image.
     * @param {goog.math.Coordinate} position The screen position where the drop
     *     occurred.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class ImageDropEvent extends goog.events.Event {
        /**
         * Creates a new image drop event object.
         * @param {string} url The url of the dropped image.
         * @param {goog.math.Coordinate} position The screen position where the drop
         *     occurred.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(url: string, position: goog.math.Coordinate);
    
        /**
         * @return {string} The url of the image that was dropped.
         */
        getUrl(): string;
    
        /**
         * @return {goog.math.Coordinate} The screen position where the drop occurred.
         *     This may be have x and y of goog.ui.DragDropDetector.INIT_POSITION,
         *     indicating the drop position is unknown.
         */
        getPosition(): goog.math.Coordinate;
    }

    /**
     * Creates a new link drop event object.
     * @param {string} url The url of the dropped link.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class LinkDropEvent extends goog.events.Event {
        /**
         * Creates a new link drop event object.
         * @param {string} url The url of the dropped link.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(url: string);
    
        /**
         * @return {string} The url of the link that was dropped.
         */
        getUrl(): string;
    }
}

declare module 'goog.ui.DrilldownRow' {

    /**
     * Example object with properties of the form accepted by the class
     * constructor.  These are educational and show the compiler that
     * these properties can be set so it doesn't emit warnings.
     */
    var sampleProperties: any /*missing*/;

    /**
     * This static function is a default decorator that adds HTML at the
     * beginning of the first cell to display indentation and an expander
     * image; sets up a click handler on the toggler; initializes a class
     * for the row: either goog-drilldown-expanded or
     * goog-drilldown-collapsed, depending on the initial state of the
     * DrilldownRow; and sets up a click event handler on the toggler
     * element.
     *
     * This creates a DIV with class=toggle.  Your application can set up
     * CSS style rules something like this:
     *
     * tr.goog-drilldown-expanded .toggle {
     *   background-image: url('minus.png');
     * }
     *
     * tr.goog-drilldown-collapsed .toggle {
     *   background-image: url('plus.png');
     * }
     *
     * These background images show whether the DrilldownRow is expanded.
     *
     * @param {goog.ui.DrilldownRow} selfObj DrilldownRow to be decorated.
     */
    function decorate(selfObj: goog.ui.DrilldownRow): void;
}

declare module 'goog.ui.FilteredMenu' {

    /**
     * Events fired by component.
     * @enum {string}
     */
    enum EventType { FILTER_CHANGED } 
}

declare module 'goog.ui.FilterObservingMenuItemRenderer' {

    /**
     * CSS class name the renderer applies to menu item elements.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.FlatButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.FlatMenuButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.Gauge' {

    /**
     * Constant for a background color for a gauge area.
     */
    var RED: any /*missing*/;

    /**
     * Constant for a background color for a gauge area.
     */
    var GREEN: any /*missing*/;

    /**
     * Constant for a background color for a gauge area.
     */
    var YELLOW: any /*missing*/;

    /**
     * The radius of the entire gauge from the canvas size.
     * @type {number}
     */
    var FACTOR_RADIUS_FROM_SIZE: number;

    /**
     * The ratio of internal gauge radius from entire radius.
     * The remaining area is the border around the gauge.
     * @type {number}
     */
    var FACTOR_MAIN_AREA: number;

    /**
     * The ratio of the colored background area for value ranges.
     * The colored area width is computed as
     * InternalRadius * (1 - FACTOR_COLOR_RADIUS)
     * @type {number}
     */
    var FACTOR_COLOR_RADIUS: number;

    /**
     * The ratio of the major ticks length start position, from the radius.
     * The major ticks length width is computed as
     * InternalRadius * (1 - FACTOR_MAJOR_TICKS)
     * @type {number}
     */
    var FACTOR_MAJOR_TICKS: number;

    /**
     * The ratio of the minor ticks length start position, from the radius.
     * The minor ticks length width is computed as
     * InternalRadius * (1 - FACTOR_MINOR_TICKS)
     * @type {number}
     */
    var FACTOR_MINOR_TICKS: number;

    /**
     * The length of the needle front (value facing) from the internal radius.
     * The needle front is the part of the needle that points to the value.
     * @type {number}
     */
    var FACTOR_NEEDLE_FRONT: number;

    /**
     * The length of the needle back relative to the internal radius.
     * The needle back is the part of the needle that points away from the value.
     * @type {number}
     */
    var FACTOR_NEEDLE_BACK: number;

    /**
     * The width of the needle front at the hinge.
     * This is the width of the curve control point, the actual width is
     * computed by the curve itself.
     * @type {number}
     */
    var FACTOR_NEEDLE_WIDTH: number;

    /**
     * The width (radius) of the needle hinge from the gauge radius.
     * @type {number}
     */
    var FACTOR_NEEDLE_HINGE: number;

    /**
     * The title font size (height) for titles relative to the internal radius.
     * @type {number}
     */
    var FACTOR_TITLE_FONT_SIZE: number;

    /**
     * The offset of the title from the center, relative to the internal radius.
     * @type {number}
     */
    var FACTOR_TITLE_OFFSET: number;

    /**
     * The formatted value font size (height) relative to the internal radius.
     * @type {number}
     */
    var FACTOR_VALUE_FONT_SIZE: number;

    /**
     * The title font size (height) for tick labels relative to the internal radius.
     * @type {number}
     */
    var FACTOR_TICK_LABEL_FONT_SIZE: number;

    /**
     * The offset of the formatted value down from the center, relative to the
     * internal radius.
     * @type {number}
     */
    var FACTOR_VALUE_OFFSET: number;

    /**
     * The font name for title text.
     * @type {string}
     */
    var TITLE_FONT_NAME: string;

    /**
     * The maximal size of a step the needle can move (percent from size of range).
     * If the needle needs to move more, it will be moved in animated steps, to
     * show a smooth transition between values.
     * @type {number}
     */
    var NEEDLE_MOVE_MAX_STEP: number;

    /**
     * Time in miliseconds for animating a move of the value pointer.
     * @type {number}
     */
    var NEEDLE_MOVE_TIME: number;

    /**
     * Tolerance factor for how much values can exceed the range (being too
     * low or too high). The value is presented as a position (percentage).
     * @type {number}
     */
    var MAX_EXCEED_POSITION_POSITION: number;
}

declare module 'goog.ui.HoverCard' {

    /**
     * Enum for event type fired by HoverCard.
     * @enum {string}
     */
    enum EventType { TRIGGER, CANCEL_TRIGGER, BEFORE_SHOW, SHOW, BEFORE_HIDE, HIDE } 

    /**
     * Create a trigger event for specified anchor and optional data.
     * @param {goog.ui.HoverCard.EventType} type Event type.
     * @param {goog.ui.HoverCard} target Hovercard that is triggering the event.
     * @param {Element} anchor Element that triggered event.
     * @param {Object=} opt_data Optional data to be available in the TRIGGER event.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class TriggerEvent extends goog.events.Event {
        /**
         * Create a trigger event for specified anchor and optional data.
         * @param {goog.ui.HoverCard.EventType} type Event type.
         * @param {goog.ui.HoverCard} target Hovercard that is triggering the event.
         * @param {Element} anchor Element that triggered event.
         * @param {Object=} opt_data Optional data to be available in the TRIGGER event.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(type: goog.ui.HoverCard.EventType, target: goog.ui.HoverCard, anchor: Element, opt_data?: Object);
    }
}

declare module 'goog.ui.IdleTimer' {

    /**
     * Event constants for the idle timer event target
     * @enum {string}
     */
    enum Event { BECOME_ACTIVE, BECOME_IDLE } 
}

declare module 'goog.ui.ImagelessButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.ImagelessMenuButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.KeyboardShortcutHandler' {

    /**
     * Maximum allowed delay, in milliseconds, allowed between the first and second
     * key in a key sequence.
     * @type {number}
     */
    var MAX_KEY_SEQUENCE_DELAY: number;

    /**
     * Bit values for modifier keys.
     * @enum {number}
     */
    enum Modifiers { NONE, SHIFT, CTRL, ALT, META } 

    /**
     * Events.
     * @enum {string}
     */
    enum EventType { SHORTCUT_TRIGGERED, SHORTCUT_PREFIX } 

    /**
     * Static method for getting the key code for a given key.
     * @param {string} name Name of key.
     * @return {number} The key code.
     */
    function getKeyCode(name: string): number;

    /**
     * Builds stroke array from string representation of shortcut.
     * @param {string} s String representation of shortcut.
     * @return {!Array.<Object>} The stroke array.
     */
    function parseStringShortcut(s: string): Object[];
}

declare module 'goog.ui.LinkButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.menuBar' {

    /**
     * The menuBar factory creates a new menu bar.
     * @param {goog.ui.ContainerRenderer=} opt_renderer Renderer used to render or
     *     decorate the menu bar; defaults to {@link goog.ui.MenuBarRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for document
     *     interaction.
     * @return {goog.ui.Container} The created menu bar.
     */
    function create(opt_renderer?: goog.ui.ContainerRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.Container;
}

declare module 'goog.ui.MenuBarRenderer' {

    /**
     * Default CSS class to be applied to the root element of elements rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.MenuBase' {

    /**
     * Events fired by the Menu
     */
    var Events: any /*missing*/;
}

declare module 'goog.ui.MenuBase.Events' {

    /**
     * Event fired by the Menu when an item is "clicked".
     */
    var ITEM_ACTION: any /*missing*/;
}

declare module 'goog.ui.MenuButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Takes a text caption or existing DOM structure, and returns it wrapped in
     * an appropriately-styled DIV.  Creates the following DOM structure:
     *    <div class="goog-inline-block goog-menu-button-caption">
     *      Contents...
     *    </div>
     * @param {goog.ui.ControlContent} content Text caption or DOM structure
     *     to wrap in a box.
     * @param {string} cssClass The CSS class for the renderer.
     * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
     * @return {Element} Caption element.
     */
    function wrapCaption(content: goog.ui.ControlContent, cssClass: string, dom: goog.dom.DomHelper): Element;
}

declare module 'goog.ui.MenuHeaderRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.MenuItemRenderer' {

    /**
     * CSS class name the renderer applies to menu item elements.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.Menu' {

    /**
     * Event types dispatched by the menu.
     * @enum {string}
     * @deprecated Use goog.ui.Component.EventType.
     */
    enum EventType { BEFORE_SHOW, SHOW, BEFORE_HIDE, HIDE } 

    /**
     * CSS class for menus.
     * @type {string}
     * @deprecated Use goog.ui.MenuRenderer.CSS_CLASS.
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.MenuRenderer' {

    /**
     * Default CSS class to be applied to the root element of toolbars rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.MenuSeparatorRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.Palette' {

    /**
     * Events fired by the palette object
     * @enum {string}
     */
    enum EventType { AFTER_HIGHLIGHT } 
}

declare module 'goog.ui.PaletteRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.PopupBase' {

    /**
     * Constants for type of Popup
     * @enum {string}
     */
    enum Type { TOGGLE_DISPLAY, MOVE_OFFSCREEN } 

    /**
     * Constants for event type fired by Popup
     *
     * @enum {string}
     */
    enum EventType { BEFORE_SHOW, SHOW, BEFORE_HIDE, HIDE } 

    /**
     * A time in ms used to debounce events that happen right after each other.
     *
     * A note about why this is necessary. There are two cases to consider.
     * First case, a popup will usually see a focus event right after it's launched
     * because it's typical for it to be launched in a mouse-down event which will
     * then move focus to the launching button. We don't want to think this is a
     * separate user action moving focus. Second case, a user clicks on the
     * launcher button to close the menu. In that case, we'll close the menu in the
     * focus event and then show it again because of the mouse down event, even
     * though the intention is to just close the menu. This workaround appears to
     * be the least intrusive fix.
     *
     * @type {number}
     */
    var DEBOUNCE_DELAY_MS: number;
}

declare module 'goog.ui.ProgressBar' {

    /**
     * Enum for representing the orientation of the progress bar.
     *
     * @enum {string}
     */
    enum Orientation { VERTICAL, HORIZONTAL } 
}

declare module 'goog.ui.Ratings' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Enums for Ratings event type.
     * @enum {string}
     */
    enum EventType { CHANGE, HIGHLIGHT_CHANGE, HIGHLIGHT, UNHIGHLIGHT } 
}

declare module 'goog.ui.registry' {

    /**
     * Given a {@link goog.ui.Component} constructor, returns an instance of its
     * default renderer.  If the default renderer is a singleton, returns the
     * singleton instance; otherwise returns a new instance of the renderer class.
     * @param {Function} componentCtor Component constructor function (for example
     *     {@code goog.ui.Button}).
     * @return {goog.ui.ControlRenderer?} Renderer instance (for example the
     *     singleton instance of {@code goog.ui.ButtonRenderer}), or null if
     *     no default renderer was found.
     */
    function getDefaultRenderer(componentCtor: Function): goog.ui.ControlRenderer;

    /**
     * Sets the default renderer for the given {@link goog.ui.Component}
     * constructor.
     * @param {Function} componentCtor Component constructor function (for example
     *     {@code goog.ui.Button}).
     * @param {Function} rendererCtor Renderer constructor function (for example
     *     {@code goog.ui.ButtonRenderer}).
     * @throws {Error} If the arguments aren't functions.
     */
    function setDefaultRenderer(componentCtor: Function, rendererCtor: Function): void;

    /**
     * Returns the {@link goog.ui.Component} instance created by the decorator
     * factory function registered for the given CSS class name, or null if no
     * decorator factory function was found.
     * @param {string} className CSS class name.
     * @return {goog.ui.Component?} Component instance.
     */
    function getDecoratorByClassName(className: string): goog.ui.Component;

    /**
     * Maps a CSS class name to a function that returns a new instance of
     * {@link goog.ui.Component} or a subclass, suitable to decorate an element
     * that has the specified CSS class.
     * @param {string} className CSS class name.
     * @param {Function} decoratorFn No-argument function that returns a new
     *     instance of a {@link goog.ui.Component} to decorate an element.
     * @throws {Error} If the class name or the decorator function is invalid.
     */
    function setDecoratorByClassName(className: string, decoratorFn: Function): void;

    /**
     * Returns an instance of {@link goog.ui.Component} or a subclass suitable to
     * decorate the given element, based on its CSS class.
     *
     * TODO(nnaze): Type of element should be {!Element}.
     *
     * @param {Element} element Element to decorate.
     * @return {goog.ui.Component?} Component to decorate the element (null if
     *     none).
     */
    function getDecorator(element: Element): goog.ui.Component;

    /**
     * Resets the global renderer and decorator registry.
     */
    function reset(): void;
}

declare module 'goog.ui.RoundedPanel' {

    /**
     * Factory method that returns an instance of a BaseRoundedPanel.
     * @param {number} radius The radius of the rounded corner(s), in pixels.
     * @param {number} borderWidth The thickness of the border, in pixels.
     * @param {string} borderColor The border color of the panel.
     * @param {string=} opt_backgroundColor The background color of the panel.
     * @param {number=} opt_corners The corners of the panel to be rounded. Any
     *     corners not specified will be rendered as square corners. Will default
     *     to all square corners if not specified.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @return {goog.ui.BaseRoundedPanel} An instance of a
     *     goog.ui.BaseRoundedPanel subclass.
     */
    function create(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: goog.dom.DomHelper): goog.ui.BaseRoundedPanel;

    /**
     * Enum for specifying which corners to render.
     * @enum {number}
     */
    enum Corner { NONE, BOTTOM_LEFT, TOP_LEFT, LEFT, TOP_RIGHT, TOP, BOTTOM_RIGHT, BOTTOM, RIGHT, ALL } 
}

declare module 'goog.ui.RoundedTabRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.ScrollFloater' {

    /**
     * Events dispatched by this component.
     * @enum {string}
     */
    enum EventType { FLOAT, DOCK, PIN } 
}

declare module 'goog.ui.SelectionMenuButton' {

    /**
     * Constants for menu action types.
     * @enum {number}
     */
    enum SelectionState { ALL, SOME, NONE } 
}

declare module 'goog.ui.ServerChart' {

    /**
     * Base scheme-independent URI for the chart renderer.
     * @type {string}
     */
    var CHART_SERVER_SCHEME_INDEPENDENT_URI: string;

    /**
     * Base HTTP URI for the chart renderer.
     * @type {string}
     */
    var CHART_SERVER_HTTP_URI: string;

    /**
     * Base HTTPS URI for the chart renderer.
     * @type {string}
     */
    var CHART_SERVER_HTTPS_URI: string;

    /**
     * Base URI for the chart renderer.
     * @type {string}
     * @deprecated Use
     *     {@link goog.ui.ServerChart.CHART_SERVER_SCHEME_INDEPENDENT_URI},
     *     {@link goog.ui.ServerChart.CHART_SERVER_HTTP_URI} or
     *     {@link goog.ui.ServerChart.CHART_SERVER_HTTPS_URI} instead.
     */
    var CHART_SERVER_URI: string;

    /**
     * The 0 - 1.0 ("fraction of the range") value to use when getMinValue() ==
     * getMaxValue(). This determines, for example, the vertical position
     * of the line in a flat line-chart.
     * @type {number}
     */
    var DEFAULT_NORMALIZATION: number;

    /**
     * Enum of chart data encoding types
     *
     * @enum {string}
     */
    enum EncodingType { AUTOMATIC, EXTENDED, SIMPLE, TEXT } 

    /**
     * Enum of chart types with their short names used by the chartserver.
     *
     * @enum {string}
     */
    enum ChartType { BAR, CLOCK, CONCENTRIC_PIE, FILLEDLINE, FINANCE, GOOGLEOMETER, HORIZONTAL_GROUPED_BAR, HORIZONTAL_STACKED_BAR, LINE, MAP, MAPUSA, MAPWORLD, PIE, PIE3D, RADAR, SCATTER, SPARKLINE, VENN, VERTICAL_GROUPED_BAR, VERTICAL_STACKED_BAR, XYLINE } 

    /**
     * Enum of multi-axis types.
     *
     * @enum {string}
     */
    enum MultiAxisType { X_AXIS, LEFT_Y_AXIS, RIGHT_Y_AXIS, TOP_AXIS } 

    /**
     * Enum of multi-axis alignments.
     *
     * @enum {number}
     */
    enum MultiAxisAlignment { ALIGN_LEFT, ALIGN_CENTER, ALIGN_RIGHT } 

    /**
     * Enum of legend positions.
     *
     * @enum {string}
     */
    enum LegendPosition { TOP, BOTTOM, LEFT, RIGHT } 

    /**
     * Enum of line and tick options for an axis.
     *
     * @enum {string}
     */
    enum AxisDisplayType { LINE_AND_TICKS, LINE, TICKS } 

    /**
     * Enum of chart maximum values in pixels, as listed at:
     * http://code.google.com/apis/chart/basics.html
     *
     * @enum {number}
     */
    enum MaximumValue { WIDTH, HEIGHT, MAP_WIDTH, MAP_HEIGHT, TOTAL_AREA } 

    /**
     * Enum of ChartServer URI parameters.
     *
     * @enum {string}
     */
    enum UriParam { BACKGROUND_FILL, BAR_HEIGHT, DATA, DATA_COLORS, DATA_LABELS, DATA_SCALING, DIGITAL_SIGNATURE, GEOGRAPHICAL_REGION, GRID, LABEL_COLORS, LEFT_Y_LABELS, LEGEND, LEGEND_POSITION, LEGEND_TEXTS, LINE_STYLES, MARGINS, MARKERS, MISC_PARAMS, MULTI_AXIS_LABEL_POSITION, MULTI_AXIS_LABEL_TEXT, MULTI_AXIS_RANGE, MULTI_AXIS_STYLE, MULTI_AXIS_TYPES, RIGHT_LABELS, RIGHT_LABEL_POSITIONS, SIZE, TITLE, TITLE_FORMAT, TYPE, X_AXIS_STYLE, X_LABELS } 

    /**
     * Array of possible ChartServer data values
     * @type {string}
     */
    var CHART_VALUES: string;

    /**
     * Array of extended ChartServer data values
     * @type {string}
     */
    var CHART_VALUES_EXTENDED: string;

    /**
     * Upper bound for extended values
     */
    var EXTENDED_UPPER_BOUND: any /*missing*/;

    /**
     * Event types dispatched by the ServerChart object
     * @enum {string}
     */
    enum Event { URI_TOO_LONG } 

    /**
     * Class for the event dispatched on the ServerChart when the resulting URI
     * exceeds the URI length limit.
     * @constructor
     * @param {string} uri The overly-long URI string.
     * @extends {goog.events.Event}
     * @final
     */
    class UriTooLongEvent extends goog.events.Event {
        /**
         * Class for the event dispatched on the ServerChart when the resulting URI
         * exceeds the URI length limit.
         * @constructor
         * @param {string} uri The overly-long URI string.
         * @extends {goog.events.Event}
         * @final
         */
        constructor(uri: string);
    }
}

declare module 'goog.ui.SliderBase' {

    /**
     * Event types used to listen for dragging events. Note that extent drag events
     * are also sent for single-thumb sliders, since the one thumb controls both
     * value and extent together; in this case, they can simply be ignored.
     * @enum {string}
     */
    enum EventType { DRAG_VALUE_START, DRAG_VALUE_END, DRAG_EXTENT_START, DRAG_EXTENT_END, DRAG_START, DRAG_END } 

    /**
     * Enum for representing the orientation of the slider.
     *
     * @enum {string}
     */
    enum Orientation { VERTICAL, HORIZONTAL } 

    /**
     * The factory for creating additional animations to be played when animating to
     * a new value.
     * @interface
     */
    interface AnimationFactory {
        createAnimations: any /*missing*/;
    }
}

declare module 'goog.ui.Slider' {

    /**
     * The prefix we use for the CSS class names for the slider and its elements.
     * @type {string}
     */
    var CSS_CLASS_PREFIX: string;

    /**
     * CSS class name for the single thumb element.
     * @type {string}
     */
    var THUMB_CSS_CLASS: string;
}

declare module 'goog.ui.SplitBehavior' {

    /**
     * Css class for elements rendered by this behavior.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * An emum of split behavior handlers.
     * @enum {function(goog.ui.Control,Event)}
     */
    enum DefaultHandlers { NONE, CAPTION, VALUE } 
}

declare module 'goog.ui.SplitPane' {

    /**
     * Events.
     * @enum {string}
     */
    enum EventType { HANDLE_DRAG, HANDLE_DRAG_END, HANDLE_SNAP } 

    /**
    * Orientation values for the splitpane.
    * @enum {string}
    */
    enum Orientation { HORIZONTAL, VERTICAL } 
}

declare module 'goog.ui.SubMenu' {

    /**
     * The delay before opening the sub menu in milliseconds.
     * @type {number}
     */
    var MENU_DELAY_MS: number;
}

declare module 'goog.ui.SubMenuRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.TabBar' {

    /**
     * Tab bar location relative to tab contents.
     * @enum {string}
     */
    enum Location { TOP, BOTTOM, START, END } 

    /**
     * Returns the {@link goog.ui.Container.Orientation} that is implied by the
     * given {@link goog.ui.TabBar.Location}.
     * @param {goog.ui.TabBar.Location} location Tab bar location.
     * @return {goog.ui.Container.Orientation} Corresponding orientation.
     */
    function getOrientationFromLocation(location: goog.ui.TabBar.Location): goog.ui.Container.Orientation;
}

declare module 'goog.ui.TabBarRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.TableSorter' {

    /**
     * Table sorter events.
     * @enum {string}
     */
    enum EventType { BEFORESORT, SORT } 

    /**
     * Disables sorting on the specified column
     * @param {*} a First sort value.
     * @param {*} b Second sort value.
     * @return {number} Negative if a < b, 0 if a = b, and positive if a > b.
     */
    var noSort: any /*missing*/;

    /**
     * A numeric sort function.
     * @param {*} a First sort value.
     * @param {*} b Second sort value.
     * @return {number} Negative if a < b, 0 if a = b, and positive if a > b.
     */
    function numericSort(a: any, b: any): number;

    /**
     * Alphabetic sort function.
     * @param {*} a First sort value.
     * @param {*} b Second sort value.
     * @return {number} Negative if a < b, 0 if a = b, and positive if a > b.
     */
    var alphaSort: any /*missing*/;

    /**
     * Returns a function that is the given sort function in reverse.
     * @param {function(*, *) : number} sortFunction The original sort function.
     * @return {function(*, *) : number} A new sort function that reverses the
     *     given sort function.
     */
    function createReverseSort(sortFunction: (_0: any, _1: any) => number): (_0: any, _1: any) => number;
}

declare module 'goog.ui.TabPane' {

    /**
     * Constants for event names
     *
     * @type {Object}
     */
    var Events: Object;

    /**
     * Enum for representing the location of the tabs in relation to the content.
     *
     * @enum {number}
     */
    enum TabLocation { TOP, BOTTOM, LEFT, RIGHT } 

    /**
     * Object representing an individual tab pane.
     *
     * @param {Element=} opt_el Container element to create the pane out of.
     * @param {(Element|string)=} opt_title Pane title or element to use as the
     *     title. If not specified the first element in the container is used as
     *     the title.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper
     * The first parameter can be omitted.
     * @constructor
     */
    class TabPage {
        /**
         * Object representing an individual tab pane.
         *
         * @param {Element=} opt_el Container element to create the pane out of.
         * @param {(Element|string)=} opt_title Pane title or element to use as the
         *     title. If not specified the first element in the container is used as
         *     the title.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper
         * The first parameter can be omitted.
         * @constructor
         */
        constructor(opt_el?: Element, opt_title?: any /*Element|string*/, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {string} The title for tab page.
         */
        getTitle(): string;
    
        /**
         * Sets title for tab page.
         *
         * @param {string} title Title for tab page.
         */
        setTitle(title: string): void;
    
        /**
         * @return {Element} The title element.
         */
        getTitleElement(): Element;
    
        /**
         * @return {Element} The content element.
         */
        getContentElement(): Element;
    
        /**
         * @return {?number} The index of page in tab pane.
         */
        getIndex(): number;
    
        /**
         * @return {goog.ui.TabPane?} The parent tab pane for page.
         */
        getParent(): goog.ui.TabPane;
    
        /**
         * Selects page in the associated tab pane.
         */
        select(): void;
    
        /**
         * Sets the enabled state.
         *
         * @param {boolean} enabled Enabled state.
         */
        setEnabled(enabled: boolean): void;
    
        /**
         * Returns if the page is enabled.
         * @return {boolean} Whether the page is enabled or not.
         */
        isEnabled(): boolean;
    }
}

declare module 'goog.ui.TabRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.Textarea' {

    /**
     * Constants for event names.
     * @enum {string}
     */
    enum EventType { RESIZE } 

    /**
     * The CSS class name to add to the input when the user has not entered a
     * value.
     */
    var TEXTAREA_PLACEHOLDER_CLASS: any /*missing*/;
}

declare module 'goog.ui.TextareaRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.ToolbarButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of buttons rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.ToolbarMenuButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of menu buttons rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.ToolbarRenderer' {

    /**
     * Default CSS class to be applied to the root element of toolbars rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.ToolbarSeparatorRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.Tooltip' {

    /**
     * Possible states for the tooltip to be in.
     * @enum {number}
     */
    enum State { INACTIVE, WAITING_TO_SHOW, SHOWING, WAITING_TO_HIDE, UPDATING } 

    /**
     * Popup activation types. Used to select a positioning strategy.
     * @enum {number}
     */
    enum Activation { CURSOR, FOCUS } 

    /**
     * Popup position implementation that positions the popup (the tooltip in this
     * case) based on the cursor position. It's positioned below the cursor to the
     * right if there's enough room to fit all of it inside the Viewport. Otherwise
     * it's displayed as far right as possible either above or below the element.
     *
     * Used to position tooltips triggered by the cursor.
     *
     * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.positioning.ViewportPosition}
     * @final
     */
    class CursorTooltipPosition extends goog.positioning.ViewportPosition {
        /**
         * Popup position implementation that positions the popup (the tooltip in this
         * case) based on the cursor position. It's positioned below the cursor to the
         * right if there's enough room to fit all of it inside the Viewport. Otherwise
         * it's displayed as far right as possible either above or below the element.
         *
         * Used to position tooltips triggered by the cursor.
         *
         * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position.
         * @constructor
         * @extends {goog.positioning.ViewportPosition}
         * @final
         */
        constructor(arg1: any /*number|goog.math.Coordinate*/, opt_arg2?: number);
    
        /**
         * Repositions the popup based on cursor position.
         *
         * @param {Element} element The DOM element of the popup.
         * @param {goog.positioning.Corner} popupCorner The corner of the popup element
         *     that that should be positioned adjacent to the anchorElement.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @override
         */
        reposition(element: Element, popupCorner: goog.positioning.Corner, opt_margin?: goog.math.Box): void;
    }

    /**
     * Popup position implementation that positions the popup (the tooltip in this
     * case) based on the element position. It's positioned below the element to the
     * right if there's enough room to fit all of it inside the Viewport. Otherwise
     * it's displayed as far right as possible either above or below the element.
     *
     * Used to position tooltips triggered by focus changes.
     *
     * @param {Element} element The element to anchor the popup at.
     * @constructor
     * @extends {goog.positioning.AnchoredPosition}
     */
    class ElementTooltipPosition extends goog.positioning.AnchoredPosition {
        /**
         * Popup position implementation that positions the popup (the tooltip in this
         * case) based on the element position. It's positioned below the element to the
         * right if there's enough room to fit all of it inside the Viewport. Otherwise
         * it's displayed as far right as possible either above or below the element.
         *
         * Used to position tooltips triggered by focus changes.
         *
         * @param {Element} element The element to anchor the popup at.
         * @constructor
         * @extends {goog.positioning.AnchoredPosition}
         */
        constructor(element: Element);
    
        /**
         * Repositions the popup based on element position.
         *
         * @param {Element} element The DOM element of the popup.
         * @param {goog.positioning.Corner} popupCorner The corner of the popup element
         *     that should be positioned adjacent to the anchorElement.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @override
         */
        reposition(element: Element, popupCorner: goog.positioning.Corner, opt_margin?: goog.math.Box): void;
    }
}

declare module 'goog.ui.TriStateMenuItem' {

    /**
     * Checked states for component.
     * @enum {number}
     */
    enum State { NOT_CHECKED, PARTIALLY_CHECKED, FULLY_CHECKED } 
}

declare module 'goog.ui.TriStateMenuItemRenderer' {

    /**
     * CSS class name the renderer applies to menu item elements.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.TwoThumbSlider' {

    /**
     * The prefix we use for the CSS class names for the slider and its elements.
     * @type {string}
     */
    var CSS_CLASS_PREFIX: string;

    /**
     * CSS class name for the value thumb element.
     * @type {string}
     */
    var VALUE_THUMB_CSS_CLASS: string;

    /**
     * CSS class name for the extent thumb element.
     * @type {string}
     */
    var EXTENT_THUMB_CSS_CLASS: string;

    /**
     * CSS class name for the range highlight element.
     * @type {string}
     */
    var RANGE_HIGHLIGHT_CSS_CLASS: string;
}

declare module 'goog.ui.Zippy' {

    /**
     * Constants for event names
     *
     * @type {Object}
     */
    var Events: Object;
}

declare module 'goog.ui.Popup' {

    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element.
     *
     * When using AnchoredPosition, it is recommended that the popup element
     * specified in the Popup constructor or Popup.setElement be absolutely
     * positioned.
     *
     * @param {Element} element The element to anchor the popup at.
     * @param {goog.positioning.Corner} corner The corner of the element to anchor
     *     the popup at.
     * @constructor
     * @extends {goog.positioning.AbstractPosition}
     *
     * @deprecated Use {@link goog.positioning.AnchoredPosition} instead, this
     *     alias will be removed at the end of Q1 2009.
     * @final
     */
    class AnchoredPosition extends goog.positioning.AbstractPosition {
        /**
         * Encapsulates a popup position where the popup is anchored at a corner of
         * an element.
         *
         * When using AnchoredPosition, it is recommended that the popup element
         * specified in the Popup constructor or Popup.setElement be absolutely
         * positioned.
         *
         * @param {Element} element The element to anchor the popup at.
         * @param {goog.positioning.Corner} corner The corner of the element to anchor
         *     the popup at.
         * @constructor
         * @extends {goog.positioning.AbstractPosition}
         *
         * @deprecated Use {@link goog.positioning.AnchoredPosition} instead, this
         *     alias will be removed at the end of Q1 2009.
         * @final
         */
        constructor(element: Element, corner: goog.positioning.Corner);
    }

    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element. The corners are swapped if dictated by the viewport. For instance
     * if a popup is anchored with its top left corner to the bottom left corner of
     * the anchor the popup is either displayed below the anchor (as specified) or
     * above it if there's not enough room to display it below.
     *
     * When using AnchoredPosition, it is recommended that the popup element
     * specified in the Popup constructor or Popup.setElement be absolutely
     * positioned.
     *
     * @param {Element} element The element to anchor the popup at.
     * @param {goog.positioning.Corner} corner The corner of the element to anchor
     *    the popup at.
     * @param {boolean=} opt_adjust Whether the positioning should be adjusted until
     *    the element fits inside the viewport even if that means that the anchored
     *    corners are ignored.
     * @constructor
     * @extends {goog.ui.Popup.AnchoredPosition}
     *
     * @deprecated Use {@link goog.positioning.AnchoredViewportPosition} instead,
     *     this alias will be removed at the end of Q1 2009.
     */
    class AnchoredViewPortPosition extends goog.ui.Popup.AnchoredPosition {
        /**
         * Encapsulates a popup position where the popup is anchored at a corner of
         * an element. The corners are swapped if dictated by the viewport. For instance
         * if a popup is anchored with its top left corner to the bottom left corner of
         * the anchor the popup is either displayed below the anchor (as specified) or
         * above it if there's not enough room to display it below.
         *
         * When using AnchoredPosition, it is recommended that the popup element
         * specified in the Popup constructor or Popup.setElement be absolutely
         * positioned.
         *
         * @param {Element} element The element to anchor the popup at.
         * @param {goog.positioning.Corner} corner The corner of the element to anchor
         *    the popup at.
         * @param {boolean=} opt_adjust Whether the positioning should be adjusted until
         *    the element fits inside the viewport even if that means that the anchored
         *    corners are ignored.
         * @constructor
         * @extends {goog.ui.Popup.AnchoredPosition}
         *
         * @deprecated Use {@link goog.positioning.AnchoredViewportPosition} instead,
         *     this alias will be removed at the end of Q1 2009.
         */
        constructor(element: Element, corner: goog.positioning.Corner, opt_adjust?: boolean);
    }

    /**
     * Encapsulates a popup position where the popup absolutely positioned by
     * setting the left/top style elements directly to the specified values.
     * The position is generally relative to the element's offsetParent. Normally,
     * this is the document body, but can be another element if the popup element
     * is scoped by an element with relative position.
     *
     * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.positioning.AbstractPosition}
     *
     * @deprecated Use {@link goog.positioning.AbsolutePosition} instead, this alias
     *     will be removed at the end of Q1 2009.
     * @final
     */
    class AbsolutePosition extends goog.positioning.AbstractPosition {
        /**
         * Encapsulates a popup position where the popup absolutely positioned by
         * setting the left/top style elements directly to the specified values.
         * The position is generally relative to the element's offsetParent. Normally,
         * this is the document body, but can be another element if the popup element
         * is scoped by an element with relative position.
         *
         * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position.
         * @constructor
         * @extends {goog.positioning.AbstractPosition}
         *
         * @deprecated Use {@link goog.positioning.AbsolutePosition} instead, this alias
         *     will be removed at the end of Q1 2009.
         * @final
         */
        constructor(arg1: any /*number|goog.math.Coordinate*/, opt_arg2?: number);
    }

    /**
     * Encapsulates a popup position where the popup is positioned according to
     * coordinates relative to the  element's view port (page). This calculates the
     * correct position to use even if the element is relatively positioned to some
     * other element.
     *
     * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.ui.Popup.AbsolutePosition}
     *
     * @deprecated Use {@link goog.positioning.ViewPortPosition} instead, this alias
     *     will be removed at the end of Q1 2009.
     */
    class ViewPortPosition extends goog.ui.Popup.AbsolutePosition {
        /**
         * Encapsulates a popup position where the popup is positioned according to
         * coordinates relative to the  element's view port (page). This calculates the
         * correct position to use even if the element is relatively positioned to some
         * other element.
         *
         * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position.
         * @constructor
         * @extends {goog.ui.Popup.AbsolutePosition}
         *
         * @deprecated Use {@link goog.positioning.ViewPortPosition} instead, this alias
         *     will be removed at the end of Q1 2009.
         */
        constructor(arg1: any /*number|goog.math.Coordinate*/, opt_arg2?: number);
    }

    /**
     * Encapsulates a popup position where the popup is positioned relative to the
     * window (client) coordinates. This calculates the correct position to
     * use even if the element is relatively positioned to some other element. This
     * is for trying to position an element at the spot of the mouse cursor in
     * a MOUSEMOVE event. Just use the event.clientX and event.clientY as the
     * parameters.
     *
     * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.ui.Popup.AbsolutePosition}
     *
     * @deprecated Use {@link goog.positioning.ClientPosition} instead, this alias
     *     will be removed at the end of Q1 2009.
     * @final
     */
    class ClientPosition extends goog.ui.Popup.AbsolutePosition {
        /**
         * Encapsulates a popup position where the popup is positioned relative to the
         * window (client) coordinates. This calculates the correct position to
         * use even if the element is relatively positioned to some other element. This
         * is for trying to position an element at the spot of the mouse cursor in
         * a MOUSEMOVE event. Just use the event.clientX and event.clientY as the
         * parameters.
         *
         * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position.
         * @constructor
         * @extends {goog.ui.Popup.AbsolutePosition}
         *
         * @deprecated Use {@link goog.positioning.ClientPosition} instead, this alias
         *     will be removed at the end of Q1 2009.
         * @final
         */
        constructor(arg1: any /*number|goog.math.Coordinate*/, opt_arg2?: number);
    }

    /**
     * Encapsulates a popup position where the popup is positioned relative to the
     * window (client) coordinates, and made to stay within the viewport.
     *
     * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position if arg1 is a number representing the
     *     left position, ignored otherwise.
     * @constructor
     * @extends {goog.ui.Popup.ClientPosition}
     *
     * @deprecated Use {@link goog.positioning.ViewPortClientPosition} instead, this
     *     alias will be removed at the end of Q1 2009.
     */
    class ViewPortClientPosition extends goog.ui.Popup.ClientPosition {
        /**
         * Encapsulates a popup position where the popup is positioned relative to the
         * window (client) coordinates, and made to stay within the viewport.
         *
         * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position if arg1 is a number representing the
         *     left position, ignored otherwise.
         * @constructor
         * @extends {goog.ui.Popup.ClientPosition}
         *
         * @deprecated Use {@link goog.positioning.ViewPortClientPosition} instead, this
         *     alias will be removed at the end of Q1 2009.
         */
        constructor(arg1: any /*number|goog.math.Coordinate*/, opt_arg2?: number);
    }
}

