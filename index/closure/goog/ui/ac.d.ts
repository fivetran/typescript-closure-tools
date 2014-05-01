// Generated Wed Apr 30 16:35:25 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/a11y/aria.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/async.d.ts" />
/// <reference path="../../goog/color.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/fx.d.ts" />
/// <reference path="../../goog/fx/anim.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/json.d.ts" />
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
/// <reference path="../../goog/uri.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.ui.ac' {

    /**
     * Factory function for building a basic autocomplete widget that autocompletes
     * an inputbox or text area from a data array.
     * @param {Array} data Data array.
     * @param {Element} input Input element or text area.
     * @param {boolean=} opt_multi Whether to allow multiple entries separated with
     *     semi-colons or commas.
     * @param {boolean=} opt_useSimilar use similar matches. e.g. "gost" => "ghost".
     * @return {!goog.ui.ac.AutoComplete} A new autocomplete object.
     */
    function createSimpleAutoComplete(data: any[], input: Element, opt_multi?: boolean, opt_useSimilar?: boolean): goog.ui.ac.AutoComplete;

    /**
     * Basic class for matching words in an array
     * @constructor
     * @param {Array} rows Dictionary of items to match.  Can be objects if they
     *     have a toString method that returns the value to match against.
     * @param {boolean=} opt_noSimilar if true, do not do similarity matches for the
     *     input token against the dictionary.
     */
    class ArrayMatcher {
        /**
         * Basic class for matching words in an array
         * @constructor
         * @param {Array} rows Dictionary of items to match.  Can be objects if they
         *     have a toString method that returns the value to match against.
         * @param {boolean=} opt_noSimilar if true, do not do similarity matches for the
         *     input token against the dictionary.
         */
        constructor(rows: any[], opt_noSimilar?: boolean);
    
        /**
         * Replaces the rows that this object searches over.
         * @param {Array} rows Dictionary of items to match.
         */
        setRows(rows: any[]): void;
    
        /**
         * Function used to pass matches to the autocomplete
         * @param {string} token Token to match.
         * @param {number} maxMatches Max number of matches to return.
         * @param {Function} matchHandler callback to execute after matching.
         * @param {string=} opt_fullString The full string from the input box.
         */
        requestMatchingRows(token: string, maxMatches: number, matchHandler: Function, opt_fullString?: string): void;
    
        /**
         * Matches the token against the start of words in the row.
         * @param {string} token Token to match.
         * @param {number} maxMatches Max number of matches to return.
         * @return {Array} Rows that match.
         */
        getPrefixMatches(token: string, maxMatches: number): any[];
    
        /**
         * Matches the token against similar rows, by calculating "distance" between the
         * terms.
         * @param {string} token Token to match.
         * @param {number} maxMatches Max number of matches to return.
         * @return {Array} The best maxMatches rows.
         */
        getSimilarRows(token: string, maxMatches: number): any[];
    }

    /**
     * This is the central manager class for an AutoComplete instance. The matcher
     * can specify disabled rows that should not be hilited or selected by
     * implementing <code>isRowDisabled(row):boolean</code> for each autocomplete
     * row. No row will be considered disabled if this method is not implemented.
     *
     * @param {Object} matcher A data source and row matcher, implements
     *        <code>requestMatchingRows(token, maxMatches, matchCallback)</code>.
     * @param {goog.events.EventTarget} renderer An object that implements
     *        <code>
     *          isVisible():boolean<br>
     *          renderRows(rows:Array, token:string, target:Element);<br>
     *          hiliteId(row-id:number);<br>
     *          dismiss();<br>
     *          dispose():
     *        </code>.
     * @param {Object} selectionHandler An object that implements
     *        <code>
     *          selectRow(row);<br>
     *          update(opt_force);
     *        </code>.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class AutoComplete extends goog.events.EventTarget {
        /**
         * This is the central manager class for an AutoComplete instance. The matcher
         * can specify disabled rows that should not be hilited or selected by
         * implementing <code>isRowDisabled(row):boolean</code> for each autocomplete
         * row. No row will be considered disabled if this method is not implemented.
         *
         * @param {Object} matcher A data source and row matcher, implements
         *        <code>requestMatchingRows(token, maxMatches, matchCallback)</code>.
         * @param {goog.events.EventTarget} renderer An object that implements
         *        <code>
         *          isVisible():boolean<br>
         *          renderRows(rows:Array, token:string, target:Element);<br>
         *          hiliteId(row-id:number);<br>
         *          dismiss();<br>
         *          dispose():
         *        </code>.
         * @param {Object} selectionHandler An object that implements
         *        <code>
         *          selectRow(row);<br>
         *          update(opt_force);
         *        </code>.
         *
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(matcher: Object, renderer: goog.events.EventTarget, selectionHandler: Object);
    
        /**
         * @return {!Object} The data source providing the `autocomplete
         *     suggestions.
         */
        getMatcher(): Object;
    
        /**
         * Sets the data source providing the autocomplete suggestions.
         *
         * See constructor documentation for the interface.
         *
         * @param {!Object} matcher The matcher.
         * @protected
         */
        setMatcher(matcher: Object): void;
    
        /**
         * @return {!Object} The handler used to interact with the input DOM
         *     element (textfield, textarea, or richedit), e.g. to update the
         *     input DOM element with selected value.
         * @protected
         */
        getSelectionHandler(): Object;
    
        /**
         * @return {goog.events.EventTarget} The renderer that
         *     renders/shows/highlights/hides the autocomplete menu.
         *     See constructor documentation for the expected renderer API.
         */
        getRenderer(): goog.events.EventTarget;
    
        /**
         * Sets the renderer that renders/shows/highlights/hides the autocomplete
         * menu.
         *
         * See constructor documentation for the expected renderer API.
         *
         * @param {goog.events.EventTarget} renderer The renderer.
         * @protected
         */
        setRenderer(renderer: goog.events.EventTarget): void;
    
        /**
         * @return {?string} The currently typed token used for completion.
         * @protected
         */
        getToken(): string;
    
        /**
         * Sets the current token (without changing the rendered autocompletion).
         *
         * NOTE(user): This method will likely go away when we figure
         * out a better API.
         *
         * @param {?string} token The new token.
         * @protected
         */
        setTokenInternal(token: string): void;
    
        /**
         * @param {number} index The suggestion index, must be within the
         *     interval [0, this.getSuggestionCount()).
         * @return {Object} The currently suggested item at the given index
         *     (or null if there is none).
         */
        getSuggestion(index: number): Object;
    
        /**
         * @return {!Array} The current autocomplete suggestion items.
         */
        getAllSuggestions(): any[];
    
        /**
         * @return {number} The number of currently suggested items.
         */
        getSuggestionCount(): number;
    
        /**
         * @return {number} The id (not index!) of the currently highlighted row.
         */
        getHighlightedId(): number;
    
        /**
         * Sets the current highlighted row to the given id (not index). Note
         * that this does not change any rendering.
         *
         * NOTE(user): This method will likely go away when we figure
         * out a better API.
         *
         * @param {number} id The new highlighted row id.
         */
        setHighlightedIdInternal(id: number): void;
    
        /**
         * Generic event handler that handles any events this object is listening to.
         * @param {goog.events.Event} e Event Object.
         */
        handleEvent(e: goog.events.Event): void;
    
        /**
         * Sets the max number of matches to fetch from the Matcher.
         *
         * @param {number} max Max number of matches.
         */
        setMaxMatches(max: number): void;
    
        /**
         * Sets whether or not the first row should be highlighted by default.
         *
         * @param {boolean} autoHilite true iff the first row should be
         *      highlighted by default.
         */
        setAutoHilite(autoHilite: boolean): void;
    
        /**
         * Sets whether or not the up/down arrow can unhilite all rows.
         *
         * @param {boolean} allowFreeSelect true iff the up arrow can unhilite all rows.
         */
        setAllowFreeSelect(allowFreeSelect: boolean): void;
    
        /**
         * Sets whether or not selections can wrap around the edges.
         *
         * @param {boolean} wrap true iff sections should wrap around the edges.
         */
        setWrap(wrap: boolean): void;
    
        /**
         * Sets whether or not to request new suggestions immediately after completion
         * of a suggestion.
         *
         * @param {boolean} triggerSuggestionsOnUpdate true iff completion should fetch
         *     new suggestions.
         */
        setTriggerSuggestionsOnUpdate(triggerSuggestionsOnUpdate: boolean): void;
    
        /**
         * Sets the token to match against.  This triggers calls to the Matcher to
         * fetch the matches (up to maxMatches), and then it triggers a call to
         * <code>renderer.renderRows()</code>.
         *
         * @param {string} token The string for which to search in the Matcher.
         * @param {string=} opt_fullString Optionally, the full string in the input
         *     field.
         */
        setToken(token: string, opt_fullString?: string): void;
    
        /**
         * Gets the current target HTML node for displaying autocomplete UI.
         * @return {Element} The current target HTML node for displaying autocomplete
         *     UI.
         */
        getTarget(): Element;
    
        /**
         * Sets the current target HTML node for displaying autocomplete UI.
         * Can be an implementation specific definition of how to display UI in relation
         * to the target node.
         * This target will be passed into  <code>renderer.renderRows()</code>
         *
         * @param {Element} target The current target HTML node for displaying
         *     autocomplete UI.
         */
        setTarget(target: Element): void;
    
        /**
         * @return {boolean} Whether the autocomplete's renderer is open.
         */
        isOpen(): boolean;
    
        /**
         * @return {number} Number of rows in the autocomplete.
         * @deprecated Use this.getSuggestionCount().
         */
        getRowCount(): number;
    
        /**
         * Moves the hilite to the next non-disabled row.
         * Calls renderer.hiliteId() when there's something to do.
         * @return {boolean} Returns true on a successful hilite.
         */
        hiliteNext(): boolean;
    
        /**
         * Moves the hilite to the previous non-disabled row.  Calls
         * renderer.hiliteId() when there's something to do.
         * @return {boolean} Returns true on a successful hilite.
         */
        hilitePrev(): boolean;
    
        /**
         * Hilites the id if it's valid and the row is not disabled, otherwise does
         * nothing.
         * @param {number} id A row id (not index).
         * @return {boolean} Whether the id was hilited. Returns false if the row is
         *     disabled.
         */
        hiliteId(id: number): boolean;
    
        /**
         * Hilites the index, if it's valid and the row is not disabled, otherwise does
         * nothing.
         * @param {number} index The row's index.
         * @return {boolean} Whether the index was hilited.
         */
        hiliteIndex(index: number): boolean;
    
        /**
         * If there are any current matches, this passes the hilited row data to
         * <code>selectionHandler.selectRow()</code>
         * @return {boolean} Whether there are any current matches.
         */
        selectHilited(): boolean;
    
        /**
         * Returns whether or not the autocomplete is open and has a highlighted row.
         * @return {boolean} Whether an autocomplete row is highlighted.
         */
        hasHighlight(): boolean;
    
        /**
         * Clears out the token, rows, and hilite, and calls
         * <code>renderer.dismiss()</code>
         */
        dismiss(): void;
    
        /**
         * Call a dismiss after a delay, if there's already a dismiss active, ignore.
         */
        dismissOnDelay(): void;
    
        /**
         * Cancel the active delayed dismiss if there is one.
         */
        cancelDelayedDismiss(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Renders the rows and adds highlighting.
         * @param {!Array} rows Set of data that match the given token.
         * @param {(boolean|goog.ui.ac.RenderOptions)=} opt_options If true,
         *     keeps the currently hilited (by index) element hilited. If false not.
         *     Otherwise a RenderOptions object.
         */
        renderRows(rows: any[], opt_options?: any /*boolean|goog.ui.ac.RenderOptions*/): void;
    
        /**
         * Gets the index corresponding to a particular id.
         * @param {number} id A unique id for the row.
         * @return {number} A valid index into rows_, or -1 if the id is invalid.
         * @protected
         */
        getIndexOfId(id: number): number;
    
        /**
         * Attach text areas or input boxes to the autocomplete by DOM reference.  After
         * elements are attached to the autocomplete, when a user types they will see
         * the autocomplete drop down.
         * @param {...Element} var_args Variable args: Input or text area elements to
         *     attach the autocomplete too.
         */
        attachInputs(...var_args: Element[]): void;
    
        /**
         * Detach text areas or input boxes to the autocomplete by DOM reference.
         * @param {...Element} var_args Variable args: Input or text area elements to
         *     detach from the autocomplete.
         */
        detachInputs(...var_args: Element[]): void;
    
        /**
         * Attaches the autocompleter to a text area or text input element
         * with an anchor element. The anchor element is the element the
         * autocomplete box will be positioned against.
         * @param {Element} inputElement The input element. May be 'textarea',
         *     text 'input' element, or any other element that exposes similar
         *     interface.
         * @param {Element} anchorElement The anchor element.
         */
        attachInputWithAnchor(inputElement: Element, anchorElement: Element): void;
    
        /**
         * Forces an update of the display.
         * @param {boolean=} opt_force Whether to force an update.
         */
        update(opt_force?: boolean): void;
    }

    /**
     * A matcher which wraps another (typically slow) matcher and
     * keeps a client-side cache of the results. For instance, you can use this to
     * wrap a RemoteArrayMatcher to hide the latency of the underlying matcher
     * having to make ajax request.
     *
     * Objects in the cache are deduped on their stringified forms.
     *
     * Note - when the user types a character, they will instantly get a set of
     * local results, and then some time later, the results from the server will
     * show up.
     *
     * @constructor
     * @param {!Object} baseMatcher The underlying matcher to use. Must implement
     *     requestMatchingRows.
     * @final
     */
    class CachingMatcher {
        /**
         * A matcher which wraps another (typically slow) matcher and
         * keeps a client-side cache of the results. For instance, you can use this to
         * wrap a RemoteArrayMatcher to hide the latency of the underlying matcher
         * having to make ajax request.
         *
         * Objects in the cache are deduped on their stringified forms.
         *
         * Note - when the user types a character, they will instantly get a set of
         * local results, and then some time later, the results from the server will
         * show up.
         *
         * @constructor
         * @param {!Object} baseMatcher The underlying matcher to use. Must implement
         *     requestMatchingRows.
         * @final
         */
        constructor(baseMatcher: Object);
    
        /**
         * Sets the number of milliseconds with which to throttle the match requests
         * on the underlying matcher.
         *
         * Default value: 150.
         *
         * @param {number} throttleTime .
         */
        setThrottleTime(throttleTime: number): void;
    
        /**
         * Sets the maxMatches to use for the base matcher. If the base matcher makes
         * AJAX requests, it may help to make this a large number so that the local
         * cache gets populated quickly.
         *
         * Default value: 100.
         *
         * @param {number} maxMatches The value to set.
         */
        setBaseMatcherMaxMatches(maxMatches: number): void;
    
        /**
         * Sets the maximum size of the local cache. If the local cache grows larger
         * than this size, it will be emptied.
         *
         * Default value: 1000.
         *
         * @param {number} maxCacheSize .
         */
        setMaxCacheSize(maxCacheSize: number): void;
    
        /**
         * Sets the local matcher to use.
         *
         * The local matcher should be a function with the same signature as
         * {@link goog.ui.ac.ArrayMatcher.getMatchesForRows}, i.e. its arguments are
         * searchToken, maxMatches, rowsToSearch; and it returns a list of matching
         * rows.
         *
         * Default value: {@link goog.ui.ac.ArrayMatcher.getMatchesForRows}.
         *
         * @param {function(string, number, !Array.<!Object>): !Array.<!Object>}
         *     localMatcher
         */
        setLocalMatcher(localMatcher: (_0: string, _1: number, _2: Object[]) => Object[]): void;
    
        /**
         * Function used to pass matches to the autocomplete.
         * @param {string} token Token to match.
         * @param {number} maxMatches Max number of matches to return.
         * @param {Function} matchHandler callback to execute after matching.
         */
        requestMatchingRows(token: string, maxMatches: number, matchHandler: Function): void;
    }

    /**
     * Class for managing the interaction between an auto-complete object and a
     * text-input or textarea.
     *
     * @param {?string=} opt_separators Separators to split multiple entries.
     *     If none passed, uses ',' and ';'.
     * @param {?string=} opt_literals Characters used to delimit text literals.
     * @param {?boolean=} opt_multi Whether to allow multiple entries
     *     (Default: true).
     * @param {?number=} opt_throttleTime Number of milliseconds to throttle
     *     keyevents with (Default: 150). Use -1 to disable updates on typing. Note
     *     that typing the separator will update autocomplete suggestions.
     * @constructor
     * @extends {goog.Disposable}
     */
    class InputHandler extends goog.Disposable {
        /**
         * Class for managing the interaction between an auto-complete object and a
         * text-input or textarea.
         *
         * @param {?string=} opt_separators Separators to split multiple entries.
         *     If none passed, uses ',' and ';'.
         * @param {?string=} opt_literals Characters used to delimit text literals.
         * @param {?boolean=} opt_multi Whether to allow multiple entries
         *     (Default: true).
         * @param {?number=} opt_throttleTime Number of milliseconds to throttle
         *     keyevents with (Default: 150). Use -1 to disable updates on typing. Note
         *     that typing the separator will update autocomplete suggestions.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor(opt_separators?: string, opt_literals?: string, opt_multi?: boolean, opt_throttleTime?: number);
    
        /**
         * The AutoComplete instance this inputhandler is associated with.
         * @type {goog.ui.ac.AutoComplete}
         */
        ac_: goog.ui.ac.AutoComplete;
    
        /**
         * Attach an instance of an AutoComplete
         * @param {goog.ui.ac.AutoComplete} ac Autocomplete object.
         */
        attachAutoComplete(ac: goog.ui.ac.AutoComplete): void;
    
        /**
         * Returns the associated autocomplete instance.
         * @return {goog.ui.ac.AutoComplete} The associated autocomplete instance.
         */
        getAutoComplete(): goog.ui.ac.AutoComplete;
    
        /**
         * Returns the current active element.
         * @return {Element} The currently active element.
         */
        getActiveElement(): Element;
    
        /**
         * Returns the value of the current active element.
         * @return {string} The value of the current active element.
         */
        getValue(): string;
    
        /**
         * Sets the value of the current active element.
         * @param {string} value The new value.
         */
        setValue(value: string): void;
    
        /**
         * Returns the current cursor position.
         * @return {number} The index of the cursor position.
         */
        getCursorPosition(): number;
    
        /**
         * Sets the cursor at the given position.
         * @param {number} pos The index of the cursor position.
         */
        setCursorPosition(pos: number): void;
    
        /**
         * Attaches the input handler to a target element. The target element
         * should be a textarea, input box, or other focusable element with the
         * same interface.
         * @param {Element|goog.events.EventTarget} target An element to attach the
         *     input handler too.
         */
        attachInput(target: any /*Element|goog.events.EventTarget*/): void;
    
        /**
         * Detaches the input handler from the provided element.
         * @param {Element|goog.events.EventTarget} target An element to detach the
         *     input handler from.
         */
        detachInput(target: any /*Element|goog.events.EventTarget*/): void;
    
        /**
         * Attaches the input handler to multiple elements.
         * @param {...Element} var_args Elements to attach the input handler too.
         */
        attachInputs(...var_args: Element[]): void;
    
        /**
         * Detaches the input handler from multuple elements.
         * @param {...Element} var_args Variable arguments for elements to unbind from.
         */
        detachInputs(...var_args: Element[]): void;
    
        /**
         * Selects the given row.  Implements the SelectionHandler interface.
         * @param {Object} row The row to select.
         * @param {boolean=} opt_multi Should this be treated as a single or multi-token
         *     auto-complete?  Overrides previous setting of opt_multi on constructor.
         * @return {boolean} Whether to suppress the update event.
         */
        selectRow(row: Object, opt_multi?: boolean): boolean;
    
        /**
         * Sets the text of the current token without updating the autocomplete
         * choices.
         * @param {string} tokenText The text for the current token.
         * @param {boolean=} opt_multi Should this be treated as a single or multi-token
         *     auto-complete?  Overrides previous setting of opt_multi on constructor.
         * @protected
         */
        setTokenText(tokenText: string, opt_multi?: boolean): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Sets the entry separator characters.
         *
         * @param {string} separators The separator characters to set.
         * @param {string=} opt_defaultSeparators The defaultSeparator character to set.
         */
        setSeparators(separators: string, opt_defaultSeparators?: string): void;
    
        /**
         * Sets whether to flip the orientation of up & down for hiliting next
         * and previous autocomplete entries.
         * @param {boolean} upsideDown Whether the orientation is upside down.
         */
        setUpsideDown(upsideDown: boolean): void;
    
        /**
         * Sets whether auto-completed tokens should be wrapped with whitespace.
         * @param {boolean} newValue boolean value indicating whether or not
         *     auto-completed tokens should be wrapped with whitespace.
         */
        setWhitespaceWrapEntries(newValue: boolean): void;
    
        /**
         * Sets whether new tokens should be generated from literals.  That is, should
         * hello'world be two tokens, assuming ' is a literal?
         * @param {boolean} newValue boolean value indicating whether or not
         * new tokens should be generated from literals.
         */
        setGenerateNewTokenOnLiteral(newValue: boolean): void;
    
        /**
         * Sets the regular expression used to trim the tokens before passing them to
         * the matcher:  every substring that matches the given regular expression will
         * be removed.  This can also be set to null to disable trimming.
         * @param {RegExp} trimmer Regexp to use for trimming or null to disable it.
         */
        setTrimmingRegExp(trimmer: RegExp): void;
    
        /**
         * Sets whether we will prevent the default input behavior (moving focus to the
         * next focusable  element) on TAB.
         * @param {boolean} newValue Whether to preventDefault on TAB.
         */
        setPreventDefaultOnTab(newValue: boolean): void;
    
        /**
         * Sets whether separators perform autocomplete.
         * @param {boolean} newValue Whether to autocomplete on separators.
         */
        setSeparatorCompletes(newValue: boolean): void;
    
        /**
         * Sets whether separators perform autocomplete.
         * @param {boolean} newValue Whether to autocomplete on separators.
         */
        setSeparatorSelects(newValue: boolean): void;
    
        /**
         * Gets the time to wait before updating the results. If the update during
         * typing flag is switched on, this delay counts from the last update,
         * otherwise from the last keypress.
         * @return {number} Throttle time in milliseconds.
         */
        getThrottleTime(): number;
    
        /**
         * Sets whether a row has just been selected.
         * @param {boolean} justSelected Whether or not the row has just been selected.
         */
        setRowJustSelected(justSelected: boolean): void;
    
        /**
         * Sets the time to wait before updating the results.
         * @param {number} time New throttle time in milliseconds.
         */
        setThrottleTime(time: number): void;
    
        /**
         * Gets whether the result list is updated during typing.
         * @return {boolean} Value of the flag.
         */
        getUpdateDuringTyping(): boolean;
    
        /**
         * Sets whether the result list should be updated during typing.
         * @param {boolean} value New value of the flag.
         */
        setUpdateDuringTyping(value: boolean): void;
    
        /**
         * Handles a key event.
         * @param {goog.events.BrowserEvent} e Browser event object.
         * @return {boolean} True if the key event was handled.
         * @protected
         */
        handleKeyEvent(e: goog.events.BrowserEvent): boolean;
    
        /**
         * @return {boolean} Whether this inputhandler need to listen on key-up.
         * @protected
         */
        needKeyUpListener(): boolean;
    
        /**
         * Handles the key up event. Registered only if needKeyUpListener returns true.
         * @param {goog.events.Event} e The keyup event.
         * @return {boolean} Whether an action was taken or not.
         * @protected
         */
        handleKeyUp(e: goog.events.Event): boolean;
    
        /**
         * Handles an element getting focus.
         * @param {goog.events.Event} e Browser event object.
         * @protected
         */
        handleFocus(e: goog.events.Event): void;
    
        /**
         * Registers handlers for the active element when it receives focus.
         * @param {Element} target The element to focus.
         * @protected
         */
        processFocus(target: Element): void;
    
        /**
         * Handles an element blurring.
         * @param {goog.events.Event=} opt_e Browser event object.
         * @protected
         */
        handleBlur(opt_e?: goog.events.Event): void;
    
        /**
         * For subclasses to override to handle the mouse-down event.
         * @param {goog.events.BrowserEvent} e Browser event object.
         * @protected
         */
        handleMouseDown(e: goog.events.BrowserEvent): void;
    
        /**
         * Checks if an update has occurred and notified the autocomplete of the new
         * token.
         * @param {boolean=} opt_force If true the menu will be forced to update.
         */
        update(opt_force?: boolean): void;
    
        /**
         * Parses a text area or input box for the currently highlighted token.
         * @return {string} Token to complete.
         * @protected
         */
        parseToken(): string;
    }

    /**
     * An array matcher that requests matches via ajax.
     * @param {string} url The Uri which generates the auto complete matches.  The
     *     search term is passed to the server as the 'token' query param.
     * @param {boolean=} opt_noSimilar If true, request that the server does not do
     *     similarity matches for the input token against the dictionary.
     *     The value is sent to the server as the 'use_similar' query param which is
     *     either "1" (opt_noSimilar==false) or "0" (opt_noSimilar==true).
     * @constructor
     * @extends {goog.Disposable}
     */
    class RemoteArrayMatcher extends goog.Disposable {
        /**
         * An array matcher that requests matches via ajax.
         * @param {string} url The Uri which generates the auto complete matches.  The
         *     search term is passed to the server as the 'token' query param.
         * @param {boolean=} opt_noSimilar If true, request that the server does not do
         *     similarity matches for the input token against the dictionary.
         *     The value is sent to the server as the 'use_similar' query param which is
         *     either "1" (opt_noSimilar==false) or "0" (opt_noSimilar==true).
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor(url: string, opt_noSimilar?: boolean);
    
        /**
         * Set the send method ("GET", "POST").
         * @param {string} method The send method; default: GET.
         */
        setMethod(method: string): void;
    
        /**
         * Set the post data.
         * @param {string} content Post data.
         */
        setContent(content: string): void;
    
        /**
         * Set the HTTP headers.
         * @param {Object|goog.structs.Map} headers Map of headers to add to the
         *     request.
         */
        setHeaders(headers: any /*Object|goog.structs.Map*/): void;
    
        /**
         * Set the timeout interval.
         * @param {number} interval Number of milliseconds after which an
         *     incomplete request will be aborted; 0 means no timeout is set.
         */
        setTimeoutInterval(interval: number): void;
    
        /**
         * Builds a complete GET-style URL, given the base URI and autocomplete related
         * parameter values.
         * <b>Override this to build any customized lookup URLs.</b>
         * <b>Can be used to change request method and any post content as well.</b>
         * @param {string} uri The base URI of the request target.
         * @param {string} token Current token in autocomplete.
         * @param {number} maxMatches Maximum number of matches required.
         * @param {boolean} useSimilar A hint to the server.
         * @param {string=} opt_fullString Complete text in the input element.
         * @return {?string} The complete url. Return null if no request should be sent.
         * @protected
         */
        buildUrl(uri: string, token: string, maxMatches: number, useSimilar: boolean, opt_fullString?: string): string;
    
        /**
         * Returns whether the suggestions should be updated?
         * <b>Override this to prevent updates eg - when token is empty.</b>
         * @param {string} uri The base URI of the request target.
         * @param {string} token Current token in autocomplete.
         * @param {number} maxMatches Maximum number of matches required.
         * @param {boolean} useSimilar A hint to the server.
         * @param {string=} opt_fullString Complete text in the input element.
         * @return {boolean} Whether new matches be requested.
         * @protected
         */
        shouldRequestMatches(uri: string, token: string, maxMatches: number, useSimilar: boolean, opt_fullString?: string): boolean;
    
        /**
         * Parses and retrieves the array of suggestions from XHR response.
         * <b>Override this if the response is not a simple JSON array.</b>
         * @param {string} responseText The XHR response text.
         * @return {Array.<string>} The array of suggestions.
         * @protected
         */
        parseResponseText(responseText: string): string[];
    
        /**
         * Handles the XHR response.
         * @param {string} token The XHR autocomplete token.
         * @param {Function} matchHandler The AutoComplete match handler.
         * @param {goog.events.Event} event The XHR success event.
         */
        xhrCallback(token: string, matchHandler: Function, event: goog.events.Event): void;
    
        /**
         * Retrieve a set of matching rows from the server via ajax.
         * @param {string} token The text that should be matched; passed to the server
         *     as the 'token' query param.
         * @param {number} maxMatches The maximum number of matches requested from the
         *     server; passed as the 'max_matches' query param.  The server is
         *     responsible for limiting the number of matches that are returned.
         * @param {Function} matchHandler Callback to execute on the result after
         *     matching.
         * @param {string=} opt_fullString The full string from the input box.
         */
        requestMatchingRows(token: string, maxMatches: number, matchHandler: Function, opt_fullString?: string): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Factory class for building a remote autocomplete widget that autocompletes
     * an inputbox or text area from a data array provided via ajax.
     * @param {string} url The Uri which generates the auto complete matches.
     * @param {Element} input Input element or text area.
     * @param {boolean=} opt_multi Whether to allow multiple entries; defaults
     *     to false.
     * @param {boolean=} opt_useSimilar Whether to use similar matches; e.g.
     *     "gost" => "ghost".
     * @constructor
     * @extends {goog.ui.ac.AutoComplete}
     */
    class Remote extends goog.ui.ac.AutoComplete {
        /**
         * Factory class for building a remote autocomplete widget that autocompletes
         * an inputbox or text area from a data array provided via ajax.
         * @param {string} url The Uri which generates the auto complete matches.
         * @param {Element} input Input element or text area.
         * @param {boolean=} opt_multi Whether to allow multiple entries; defaults
         *     to false.
         * @param {boolean=} opt_useSimilar Whether to use similar matches; e.g.
         *     "gost" => "ghost".
         * @constructor
         * @extends {goog.ui.ac.AutoComplete}
         */
        constructor(url: string, input: Element, opt_multi?: boolean, opt_useSimilar?: boolean);
    
        /**
         * Set whether or not standard highlighting should be used when rendering rows.
         * @param {boolean} useStandardHighlighting true if standard highlighting used.
         */
        setUseStandardHighlighting(useStandardHighlighting: boolean): void;
    
        /**
         * Gets the attached InputHandler object.
         * @return {goog.ui.ac.InputHandler} The input handler.
         */
        getInputHandler(): goog.ui.ac.InputHandler;
    
        /**
         * Set the send method ("GET", "POST") for the matcher.
         * @param {string} method The send method; default: GET.
         */
        setMethod(method: string): void;
    
        /**
         * Set the post data for the matcher.
         * @param {string} content Post data.
         */
        setContent(content: string): void;
    
        /**
         * Set the HTTP headers for the matcher.
         * @param {Object|goog.structs.Map} headers Map of headers to add to the
         *     request.
         */
        setHeaders(headers: any /*Object|goog.structs.Map*/): void;
    
        /**
         * Set the timeout interval for the matcher.
         * @param {number} interval Number of milliseconds after which an
         *     incomplete request will be aborted; 0 means no timeout is set.
         */
        setTimeoutInterval(interval: number): void;
    }

    /**
     * Class for rendering the results of an auto-complete in a drop down list.
     *
     * @constructor
     * @param {Element=} opt_parentNode optional reference to the parent element
     *     that will hold the autocomplete elements. goog.dom.getDocument().body
     *     will be used if this is null.
     * @param {?({renderRow}|{render})=} opt_customRenderer Custom full renderer to
     *     render each row. Should be something with a renderRow or render method.
     * @param {boolean=} opt_rightAlign Determines if the autocomplete will always
     *     be right aligned. False by default.
     * @param {boolean=} opt_useStandardHighlighting Determines if standard
     *     highlighting should be applied to each row of data. Standard highlighting
     *     bolds every matching substring for a given token in each row. True by
     *     default.
     * @extends {goog.events.EventTarget}
     */
    class Renderer extends goog.events.EventTarget {
        /**
         * Class for rendering the results of an auto-complete in a drop down list.
         *
         * @constructor
         * @param {Element=} opt_parentNode optional reference to the parent element
         *     that will hold the autocomplete elements. goog.dom.getDocument().body
         *     will be used if this is null.
         * @param {?({renderRow}|{render})=} opt_customRenderer Custom full renderer to
         *     render each row. Should be something with a renderRow or render method.
         * @param {boolean=} opt_rightAlign Determines if the autocomplete will always
         *     be right aligned. False by default.
         * @param {boolean=} opt_useStandardHighlighting Determines if standard
         *     highlighting should be applied to each row of data. Standard highlighting
         *     bolds every matching substring for a given token in each row. True by
         *     default.
         * @extends {goog.events.EventTarget}
         */
        constructor(opt_parentNode?: Element, opt_customRenderer?: any /*{ renderRow: any (missing) }|{ render: any (missing) }*/, opt_rightAlign?: boolean, opt_useStandardHighlighting?: boolean);
    
        /**
         * Gets the renderer's element.
         * @return {Element} The  main element that controls the rendered autocomplete.
         */
        getElement(): Element;
    
        /**
         * Sets the width provider element. The provider is only used on redraw and as
         * such will not automatically update on resize.
         * @param {Node} widthProvider The element whose width should be mirrored.
         */
        setWidthProvider(widthProvider: Node): void;
    
        /**
         * Set whether to align autocomplete to top of target element
         * @param {boolean} align If true, align to top.
         */
        setTopAlign(align: boolean): void;
    
        /**
         * @return {boolean} Whether we should be aligning to the top of
         *     the target element.
         */
        getTopAlign(): boolean;
    
        /**
         * Set whether to align autocomplete to the right of the target element.
         * @param {boolean} align If true, align to right.
         */
        setRightAlign(align: boolean): void;
    
        /**
         * @return {boolean} Whether the autocomplete menu should be right aligned.
         */
        getRightAlign(): boolean;
    
        /**
         * @param {boolean} show Whether we should limit the dropdown from extending
         *     past the bottom of the screen and instead show a scrollbar on the
         *     dropdown.
         */
        setShowScrollbarsIfTooLarge(show: boolean): void;
    
        /**
         * Set whether or not standard highlighting should be used when rendering rows.
         * @param {boolean} useStandardHighlighting true if standard highlighting used.
         */
        setUseStandardHighlighting(useStandardHighlighting: boolean): void;
    
        /**
         * @param {boolean} matchWordBoundary Determines whether matches should be
         *     higlighted only when the token matches text at a whole-word boundary.
         *     True by default.
         */
        setMatchWordBoundary(matchWordBoundary: boolean): void;
    
        /**
         * Set whether or not to highlight all matching tokens rather than just the
         * first.
         * @param {boolean} highlightAllTokens Whether to highlight all matching tokens
         *     rather than just the first.
         */
        setHighlightAllTokens(highlightAllTokens: boolean): void;
    
        /**
         * Sets the duration (in msec) of the fade animation when menu is shown/hidden.
         * Setting to 0 (default) disables animation entirely.
         * @param {number} duration Duration (in msec) of the fade animation (or 0 for
         *     no animation).
         */
        setMenuFadeDuration(duration: number): void;
    
        /**
         * Sets the anchor element for the subsequent call to renderRows.
         * @param {Element} anchor The anchor element.
         */
        setAnchorElement(anchor: Element): void;
    
        /**
         * @return {Element} The anchor element.
         * @protected
         */
        getAnchorElement(): Element;
    
        /**
         * Render the autocomplete UI
         *
         * @param {Array} rows Matching UI rows.
         * @param {string} token Token we are currently matching against.
         * @param {Element=} opt_target Current HTML node, will position popup beneath
         *     this node.
         */
        renderRows(rows: any[], token: string, opt_target?: Element): void;
    
        /**
         * Hide the object.
         */
        dismiss(): void;
    
        /**
         * Show the object.
         */
        show(): void;
    
        /**
         * @return {boolean} True if the object is visible.
         */
        isVisible(): boolean;
    
        /**
         * Sets the 'active' class of the nth item.
         * @param {number} index Index of the item to highlight.
         */
        hiliteRow(index: number): void;
    
        /**
         * Removes the 'active' class from the currently selected row.
         */
        hiliteNone(): void;
    
        /**
         * Sets the 'active' class of the item with a given id.
         * @param {number} id Id of the row to hilight. If id is -1 then no rows get
         *     hilited.
         */
        hiliteId(id: number): void;
    
        /**
         * Redraw (or draw if this is the first call) the rendered auto-complete drop
         * down.
         */
        redraw(): void;
    
        /**
         * @return {goog.positioning.Corner} The anchor corner to position the popup at.
         * @protected
         */
        getAnchorCorner(): goog.positioning.Corner;
    
        /**
         * Repositions the auto complete popup relative to the location node, if it
         * exists and the auto position has been set.
         */
        reposition(): void;
    
        /**
         * Sets whether the renderer should try to determine where to position the
         * drop down.
         * @param {boolean} auto Whether to autoposition the drop down.
         */
        setAutoPosition(auto: boolean): void;
    
        /**
         * @return {boolean} Whether the drop down will be autopositioned.
         * @protected
         */
        getAutoPosition(): boolean;
    
        /**
         * @return {Element} The target element.
         * @protected
         */
        getTarget(): Element;
    
        /**
         * Disposes of the renderer and its associated HTML.
         * @override
         * @protected
         */
        disposeInternal(): void;
    
        /**
         * Render a row by creating a div and then calling row rendering callback or
         * default row handler
         *
         * @param {Object} row Object representing row.
         * @param {string} token Token to highlight.
         * @return {Element} An element with the rendered HTML.
         */
        renderRowHtml(row: Object, token: string): Element;
    }

    /**
     * A simple class that contains options for rendering a set of autocomplete
     * matches.  Used as an optional argument in the callback from the matcher.
     * @constructor
     */
    class RenderOptions {
        /**
         * A simple class that contains options for rendering a set of autocomplete
         * matches.  Used as an optional argument in the callback from the matcher.
         * @constructor
         */
        constructor();
    
        /**
         * @param {boolean} flag The new value for the preserveHilited_ flag.
         */
        setPreserveHilited(flag: boolean): void;
    
        /**
         * @return {boolean} The value of the preserveHilited_ flag.
         */
        getPreserveHilited(): boolean;
    
        /**
         * @param {boolean} flag The new value for the autoHilite_ flag.
         */
        setAutoHilite(flag: boolean): void;
    
        /**
         * @return {boolean|undefined} The value of the autoHilite_ flag.
         */
        getAutoHilite(): any /*boolean|any (undefined)*/;
    }

    /**
     * Class for managing the interaction between an autocomplete object and a
     * text-input or textarea.
     * @param {?string=} opt_separators Seperators to split multiple entries.
     * @param {?string=} opt_literals Characters used to delimit text literals.
     * @param {?boolean=} opt_multi Whether to allow multiple entries
     *     (Default: true).
     * @param {?number=} opt_throttleTime Number of milliseconds to throttle
     *     keyevents with (Default: 150).
     * @constructor
     * @extends {goog.ui.ac.InputHandler}
     */
    class RichInputHandler extends goog.ui.ac.InputHandler {
        /**
         * Class for managing the interaction between an autocomplete object and a
         * text-input or textarea.
         * @param {?string=} opt_separators Seperators to split multiple entries.
         * @param {?string=} opt_literals Characters used to delimit text literals.
         * @param {?boolean=} opt_multi Whether to allow multiple entries
         *     (Default: true).
         * @param {?number=} opt_throttleTime Number of milliseconds to throttle
         *     keyevents with (Default: 150).
         * @constructor
         * @extends {goog.ui.ac.InputHandler}
         */
        constructor(opt_separators?: string, opt_literals?: string, opt_multi?: boolean, opt_throttleTime?: number);
    
        /**
         * Selects the given rich row.  The row's select(target) method is called.
         * @param {Object} row The row to select.
         * @return {boolean} Whether to suppress the update event.
         * @override
         */
        selectRow(row: Object): boolean;
    }

    /**
     * An array matcher that requests rich matches via ajax and converts them into
     * rich rows.
     * @param {string} url The Uri which generates the auto complete matches.  The
     *     search term is passed to the server as the 'token' query param.
     * @param {boolean=} opt_noSimilar If true, request that the server does not do
     *     similarity matches for the input token against the dictionary.
     *     The value is sent to the server as the 'use_similar' query param which is
     *     either "1" (opt_noSimilar==false) or "0" (opt_noSimilar==true).
     * @constructor
     * @extends {goog.ui.ac.RemoteArrayMatcher}
     */
    class RichRemoteArrayMatcher extends goog.ui.ac.RemoteArrayMatcher {
        /**
         * An array matcher that requests rich matches via ajax and converts them into
         * rich rows.
         * @param {string} url The Uri which generates the auto complete matches.  The
         *     search term is passed to the server as the 'token' query param.
         * @param {boolean=} opt_noSimilar If true, request that the server does not do
         *     similarity matches for the input token against the dictionary.
         *     The value is sent to the server as the 'use_similar' query param which is
         *     either "1" (opt_noSimilar==false) or "0" (opt_noSimilar==true).
         * @constructor
         * @extends {goog.ui.ac.RemoteArrayMatcher}
         */
        constructor(url: string, opt_noSimilar?: boolean);
    
        /**
         * Set the filter that is called before the array matches are returned.
         * @param {Function} rowFilter A function(rows) that returns an array of rows as
         *     a subset of the rows input array.
         */
        setRowFilter(rowFilter: Function): void;
    
        /**
         * Retrieve a set of matching rows from the server via ajax and convert them
         * into rich rows.
         * @param {string} token The text that should be matched; passed to the server
         *     as the 'token' query param.
         * @param {number} maxMatches The maximum number of matches requested from the
         *     server; passed as the 'max_matches' query param. The server is
         *     responsible for limiting the number of matches that are returned.
         * @param {Function} matchHandler Callback to execute on the result after
         *     matching.
         * @override
         */
        requestMatchingRows(token: string, maxMatches: number, matchHandler: Function): void;
    }

    /**
     * Factory class to create a rich autocomplete widget that autocompletes an
     * inputbox or textarea from data provided via ajax.  The server returns a
     * complex data structure that is used with client-side javascript functions to
     * render the results.
     * @param {string} url The Uri which generates the auto complete matches.
     * @param {Element} input Input element or text area.
     * @param {boolean=} opt_multi Whether to allow multiple entries; defaults
     *     to false.
     * @param {boolean=} opt_useSimilar Whether to use similar matches; e.g.
     *     "gost" => "ghost".
     * @constructor
     * @extends {goog.ui.ac.Remote}
     */
    class RichRemote extends goog.ui.ac.Remote {
        /**
         * Factory class to create a rich autocomplete widget that autocompletes an
         * inputbox or textarea from data provided via ajax.  The server returns a
         * complex data structure that is used with client-side javascript functions to
         * render the results.
         * @param {string} url The Uri which generates the auto complete matches.
         * @param {Element} input Input element or text area.
         * @param {boolean=} opt_multi Whether to allow multiple entries; defaults
         *     to false.
         * @param {boolean=} opt_useSimilar Whether to use similar matches; e.g.
         *     "gost" => "ghost".
         * @constructor
         * @extends {goog.ui.ac.Remote}
         */
        constructor(url: string, input: Element, opt_multi?: boolean, opt_useSimilar?: boolean);
    
        /**
         * Set the filter that is called before the array matches are returned.
         * @param {Function} rowFilter A function(rows) that returns an array of rows as
         *     a subset of the rows input array.
         */
        setRowFilter(rowFilter: Function): void;
    }
}

declare module 'goog.ui.ac.ArrayMatcher' {

    /**
     * Matches the token against the specified rows, first looking for prefix
     * matches and if that fails, then looking for similar matches.
     *
     * @param {string} token Token to match.
     * @param {number} maxMatches Max number of matches to return.
     * @param {!Array} rows Rows to search for matches. Can be objects if they have
     *     a toString method that returns the value to match against.
     * @return {!Array} Rows that match.
     */
    function getMatchesForRows(token: string, maxMatches: number, rows: any[]): any[];

    /**
     * Matches the token against the start of words in the row.
     * @param {string} token Token to match.
     * @param {number} maxMatches Max number of matches to return.
     * @param {!Array} rows Rows to search for matches. Can be objects if they have
     *     a toString method that returns the value to match against.
     * @return {!Array} Rows that match.
     */
    function getPrefixMatchesForRows(token: string, maxMatches: number, rows: any[]): any[];

    /**
     * Matches the token against similar rows, by calculating "distance" between the
     * terms.
     * @param {string} token Token to match.
     * @param {number} maxMatches Max number of matches to return.
     * @param {!Array} rows Rows to search for matches. Can be objects if they have
     *     a toString method that returns the value to match against.
     * @return {!Array} The best maxMatches rows.
     */
    function getSimilarMatchesForRows(token: string, maxMatches: number, rows: any[]): any[];
}

declare module 'goog.ui.ac.AutoComplete' {

    /**
     * Events associated with the autocomplete
     * @enum {string}
     */
    enum EventType { ROW_HILITE, HILITE, SELECT, DISMISS, CANCEL_DISMISS, UPDATE, SUGGESTIONS_UPDATE } 

    /**
     * @typedef {{
     *   requestMatchingRows:(!Function|undefined),
     *   isRowDisabled:(!Function|undefined)
     * }}
     */
    var Matcher: any /*missing*/;
}

declare module 'goog.ui.ac.InputHandler' {

    /**
     * Standard list separators.
     * @type {string}
     * @const
     */
    var STANDARD_LIST_SEPARATORS: string;

    /**
     * Literals for quotes.
     * @type {string}
     * @const
     */
    var QUOTE_LITERALS: string;
}

declare module 'goog.ui.ac.Renderer' {

    /**
     * The delay before mouseover events are registered, in milliseconds
     * @type {number}
     * @const
     */
    var DELAY_BEFORE_MOUSEOVER: number;

    /**
     * Class allowing different implementations to custom render the autocomplete.
     * Extending classes should override the render function.
     * @constructor
     */
    class CustomRenderer {
        /**
         * Class allowing different implementations to custom render the autocomplete.
         * Extending classes should override the render function.
         * @constructor
         */
        constructor();
    
        /**
         * Renders the autocomplete box. May be set to null.
         *
         * Because of the type, this function cannot be documented with param JSDoc.
         *
         * The function expects the following parameters:
         *
         * renderer, goog.ui.ac.Renderer: The autocomplete renderer.
         * element, Element: The main element that controls the rendered autocomplete.
         * rows, Array: The current set of rows being displayed.
         * token, string: The current token that has been entered. *
         *
         * @type {function(goog.ui.ac.Renderer, Element, Array, string)|
         *        null|undefined}
         */
        render(): void;
    
        /**
         * Generic function that takes a row and renders a DOM structure for that row.
         * @param {Object} row Object representing row.
         * @param {string} token Token to highlight.
         * @param {Node} node The node to render into.
         */
        renderRow(row: Object, token: string, node: Node): void;
    }
}

