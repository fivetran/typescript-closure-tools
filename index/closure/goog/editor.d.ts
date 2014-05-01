// Generated Wed Apr 30 16:29:53 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/a11y/aria.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/async.d.ts" />
/// <reference path="../goog/cssom.d.ts" />
/// <reference path="../goog/cssom/iframe.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/dom/browserrange.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/log.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/style.d.ts" />
/// <reference path="../goog/timer.d.ts" />
/// <reference path="../goog/uri.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.editor' {

    /**
     * Maps browser quirks to boolean values, detailing what the current
     * browser supports.
     * @type {Object}
     */
    var BrowserFeature: Object;

    /**
     * Commands that the editor can excute via execCommand or queryCommandValue.
     * @enum {string}
     */
    enum Command { UNDO, REDO, LINK, FORMAT_BLOCK, INDENT, OUTDENT, REMOVE_FORMAT, STRIKE_THROUGH, HORIZONTAL_RULE, SUBSCRIPT, SUPERSCRIPT, UNDERLINE, BOLD, ITALIC, FONT_SIZE, FONT_FACE, FONT_COLOR, EMOTICON, EQUATION, BACKGROUND_COLOR, ORDERED_LIST, UNORDERED_LIST, TABLE, JUSTIFY_CENTER, JUSTIFY_FULL, JUSTIFY_RIGHT, JUSTIFY_LEFT, BLOCKQUOTE, DIR_LTR, DIR_RTL, IMAGE, EDIT_HTML, UPDATE_LINK_BUBBLE, DEFAULT_TAG, CLEAR_LOREM, UPDATE_LOREM, USING_LOREM, MODAL_LINK_EDITOR } 

    /**
     * Initialize the wrapper, and begin listening to mouse events immediately.
     * @param {goog.editor.Field} fieldObj The editable field being wrapped.
     * @constructor
     * @extends {goog.Disposable}
     */
    class ClickToEditWrapper extends goog.Disposable {
        /**
         * Initialize the wrapper, and begin listening to mouse events immediately.
         * @param {goog.editor.Field} fieldObj The editable field being wrapped.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor(fieldObj: goog.editor.Field);
    
        /** @return {goog.editor.Field} The field. */
        getFieldObject(): goog.editor.Field;
    
        /** @return {goog.dom.DomHelper} The dom helper of the uneditable element. */
        getOriginalDomHelper(): goog.dom.DomHelper;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Initialize listeners when the uneditable field is added to the document.
         * Also sets up lorem ipsum text.
         */
        enterDocument(): void;
    
        /**
         * Destroy listeners when the field is removed from the document.
         */
        exitDocument(): void;
    
        /**
         * Returns the uneditable field element if the field is not yet editable
         * (equivalent to EditableField.getOriginalElement()), and the editable DOM
         * element if the field is currently editable (equivalent to
         * EditableField.getElement()).
         * @return {Element} The element containing the editable field contents.
         */
        getElement(): Element;
    
        /**
         * Focus on the field object.
         * @param {goog.editor.Field} field The field to focus.
         * @protected
         */
        focusOnFieldObj(field: goog.editor.Field): void;
    
        /**
         * Make the field object editable.
         * @param {goog.editor.Field} field The field to make editable.
         * @protected
         */
        makeFieldEditable(field: goog.editor.Field): void;
    }

    /**
     * This class encapsulates an editable field that is just a contentEditable
     * div.
     *
     * To see events fired by this object, please see the base class.
     *
     * @param {string} id An identifer for the field. This is used to find the
     *     field and the element associated with this field.
     * @param {Document=} opt_doc The document that the element with the given
     *     id can be found in.
     * @constructor
     * @extends {goog.editor.Field}
     */
    class ContentEditableField extends goog.editor.Field {
        /**
         * This class encapsulates an editable field that is just a contentEditable
         * div.
         *
         * To see events fired by this object, please see the base class.
         *
         * @param {string} id An identifer for the field. This is used to find the
         *     field and the element associated with this field.
         * @param {Document=} opt_doc The document that the element with the given
         *     id can be found in.
         * @constructor
         * @extends {goog.editor.Field}
         */
        constructor(id: string, opt_doc?: Document);
    
        /**
         * @override
         */
        logger: any /*missing*/;
    
        /** @override */
        usesIframe(): void;
    
        /** @override */
        turnOnDesignModeGecko: any /*missing*/;
    
        /** @override */
        installStyles(): void;
    
        /** @override */
        makeEditableInternal(): void;
    
        /**
         * @override
         *
         * ContentEditableField does not make any changes to the DOM when it is made
         * editable other than setting contentEditable to true.
         */
        restoreDom: any /*missing*/;
    }

    /**
     * This class encapsulates an editable field.
     *
     * event: load Fires when the field is loaded
     * event: unload Fires when the field is unloaded (made not editable)
     *
     * event: beforechange Fires before the content of the field might change
     *
     * event: delayedchange Fires a short time after field has changed. If multiple
     *                      change events happen really close to each other only
     *                      the last one will trigger the delayedchange event.
     *
     * event: beforefocus Fires before the field becomes active
     * event: focus Fires when the field becomes active. Fires after the blur event
     * event: blur Fires when the field becomes inactive
     *
     * TODO: figure out if blur or beforefocus fires first in IE and make FF match
     *
     * @param {string} id An identifer for the field. This is used to find the
     *    field and the element associated with this field.
     * @param {Document=} opt_doc The document that the element with the given
     *     id can be found in.  If not provided, the default document is used.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class Field extends goog.events.EventTarget {
        /**
         * This class encapsulates an editable field.
         *
         * event: load Fires when the field is loaded
         * event: unload Fires when the field is unloaded (made not editable)
         *
         * event: beforechange Fires before the content of the field might change
         *
         * event: delayedchange Fires a short time after field has changed. If multiple
         *                      change events happen really close to each other only
         *                      the last one will trigger the delayedchange event.
         *
         * event: beforefocus Fires before the field becomes active
         * event: focus Fires when the field becomes active. Fires after the blur event
         * event: blur Fires when the field becomes inactive
         *
         * TODO: figure out if blur or beforefocus fires first in IE and make FF match
         *
         * @param {string} id An identifer for the field. This is used to find the
         *    field and the element associated with this field.
         * @param {Document=} opt_doc The document that the element with the given
         *     id can be found in.  If not provided, the default document is used.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(id: string, opt_doc?: Document);
    
        /**
         * The editable dom node.
         * @type {Element}
         * TODO(user): Make this private!
         */
        field: Element;
    
        /**
         * The original node that is being made editable, or null if it has
         * not yet been found.
         * @type {Element}
         * @protected
         */
        originalElement: Element;
    
        /**
         * Logging object.
         * @type {goog.log.Logger}
         * @protected
         */
        logger: goog.log.Logger;
    
        /**
         * The dom helper for the node to be made editable.
         * @type {goog.dom.DomHelper}
         * @protected
         */
        originalDomHelper: goog.dom.DomHelper;
    
        /**
         * Sets flag to control whether to use window mouse up after seeing
         * a mouse down operation on the field.
         * @param {boolean} flag True to track window mouse up.
         */
        setUseWindowMouseUp(flag: boolean): void;
    
        /**
         * @return {boolean} Whether we're in modal interaction mode. When this
         *     returns true, another plugin is interacting with the field contents
         *     in a synchronous way, and expects you not to make changes to
         *     the field's DOM structure or selection.
         */
        inModalMode(): boolean;
    
        /**
         * @param {boolean} inModalMode Sets whether we're in modal interaction mode.
         */
        setModalMode(inModalMode: boolean): void;
    
        /**
         * Returns a string usable as a hash code for this field. For field's
         * that were created with an id, the hash code is guaranteed to be the id.
         * TODO(user): I think we can get rid of this.  Seems only used from editor.
         * @return {string} The hash code for this editable field.
         */
        getHashCode(): string;
    
        /**
         * Returns the editable DOM element or null if this field
         * is not editable.
         * <p>On IE or Safari this is the element with contentEditable=true
         * (in whitebox mode, the iFrame body).
         * <p>On Gecko this is the iFrame body
         * TODO(user): How do we word this for subclass version?
         * @return {Element} The editable DOM element, defined as above.
         */
        getElement(): Element;
    
        /**
         * Returns original DOM element that is being made editable by Trogedit or
         * null if that element has not yet been found in the appropriate document.
         * @return {Element} The original element.
         */
        getOriginalElement(): Element;
    
        /**
         * Registers a keyboard event listener on the field.  This is necessary for
         * Gecko since the fields are contained in an iFrame and there is no way to
         * auto-propagate key events up to the main window.
         * @param {string|Array.<string>} type Event type to listen for or array of
         *    event types, for example goog.events.EventType.KEYDOWN.
         * @param {Function} listener Function to be used as the listener.
         * @param {boolean=} opt_capture Whether to use capture phase (optional,
         *    defaults to false).
         * @param {Object=} opt_handler Object in whose scope to call the listener.
         */
        addListener(type: any /*string|string[]*/, listener: Function, opt_capture?: boolean, opt_handler?: Object): void;
    
        /**
         * Returns the registered plugin with the given classId.
         * @param {string} classId classId of the plugin.
         * @return {goog.editor.Plugin} Registered plugin with the given classId.
         */
        getPluginByClassId(classId: string): goog.editor.Plugin;
    
        /**
         * Registers the plugin with the editable field.
         * @param {goog.editor.Plugin} plugin The plugin to register.
         */
        registerPlugin(plugin: goog.editor.Plugin): void;
    
        /**
         * Unregisters the plugin with this field.
         * @param {goog.editor.Plugin} plugin The plugin to unregister.
         */
        unregisterPlugin(plugin: goog.editor.Plugin): void;
    
        /**
         * Sets the value that will replace the style attribute of this field's
         * element when the field is made non-editable. This method is called with the
         * current value of the style attribute when the field is made editable.
         * @param {string} cssText The value of the style attribute.
         */
        setInitialStyle(cssText: string): void;
    
        /**
         * Reset the properties on the original field element to how it was before
         * it was made editable.
         */
        resetOriginalElemProperties(): void;
    
        /**
         * Checks the modified state of the field.
         * Note: Changes that take place while the goog.editor.Field.EventType.CHANGE
         * event is stopped do not effect the modified state.
         * @param {boolean=} opt_useIsEverModified Set to true to check if the field
         *   has ever been modified since it was created, otherwise checks if the field
         *   has been modified since the last goog.editor.Field.EventType.DELAYEDCHANGE
         *   event was dispatched.
         * @return {boolean} Whether the field has been modified.
         */
        isModified(opt_useIsEverModified?: boolean): boolean;
    
        /**
         * @return {boolean} Whether the field is implemented as an iframe.
         */
        usesIframe: any /*missing*/;
    
        /**
         * @return {boolean} Whether the field should be rendered with a fixed
         *     height, or should expand to fit its contents.
         */
        isFixedHeight: any /*missing*/;
    
        /**
         * @return {boolean} Whether the field should be refocused on input.
         *    This is a workaround for the iOS bug that text input doesn't work
         *    when the main window listens touch events.
         */
        shouldRefocusOnInputMobileSafari: any /*missing*/;
    
        /**
         * Sets the application window.
         * @param {!Window} appWindow The window where dialogs and bubbles should be
         *     rendered.
         */
        setAppWindow(appWindow: Window): void;
    
        /**
         * Returns the "application" window, where dialogs and bubbles
         * should be rendered.
         * @return {!Window} The window.
         */
        getAppWindow(): Window;
    
        /**
         * Sets the zIndex that the field should be based off of.
         * TODO(user): Get rid of this completely.  Here for Sites.
         *     Should this be set directly on UI plugins?
         *
         * @param {number} zindex The base zIndex of the editor.
         */
        setBaseZindex(zindex: number): void;
    
        /**
         * Returns the zindex of the base level of the field.
         *
         * @return {number} The base zindex of the editor.
         */
        getBaseZindex(): number;
    
        /**
         * Sets up the field object and window util of this field, and enables this
         * editable field with all registered plugins.
         * This is essential to the initialization of the field.
         * It must be called when the field becomes fully loaded and editable.
         * @param {Element} field The field property.
         * @protected
         */
        setupFieldObject(field: Element): void;
    
        /**
         * Stops all listeners and timers.
         * @protected
         */
        clearListeners(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Attach an wrapper to this field, to be thrown out when the field
         * is disposed.
         * @param {goog.Disposable} wrapper The wrapper to attach.
         */
        attachWrapper(wrapper: goog.Disposable): void;
    
        /**
         * Removes all wrappers and destroys them.
         */
        removeAllWrappers(): void;
    
        /**
         * Mutation events tell us when something has changed for mozilla.
         * @protected
         */
        setupMutationEventHandlersGecko(): void;
    
        /**
         * Prepare the given contents, then inject them into the editable field.
         * @param {?string} contents The contents to prepare.
         * @param {Element} field The field element.
         * @protected
         */
        injectContents(contents: string, field: Element): void;
    
        /**
         * Returns prepared contents that can be injected into the editable field.
         * @param {?string} contents The contents to prepare.
         * @param {Object} styles A map that will be populated with styles that should
         *     be applied to the field element together with the contents.
         * @return {string} The prepared contents.
         */
        getInjectableContents(contents: string, styles: Object): string;
    
        /**
         * Executes an editing command as per the registered plugins.
         * @param {string} command The command to execute.
         * @param {...*} var_args Any additional parameters needed to execute the
         *     command.
         * @return {*} False if the command wasn't handled, otherwise, the result of
         *     the command.
         */
        execCommand(command: string, ...var_args: any[]): any;
    
        /**
         * Gets the value of command(s).
         * @param {string|Array.<string>} commands String name(s) of the command.
         * @return {*} Value of each command. Returns false (or array of falses)
         *     if designMode is off or the field is otherwise uneditable, and
         *     there are no activeOnUneditable plugins for the command.
         */
        queryCommandValue(commands: any /*string|string[]*/): any;
    
        /**
         * Fires a change event only if the attribute change effects the editiable
         * field. We ignore events that are internal browser events (ie scrollbar
         * state change)
         * @param {Function} handler The function to call if this is not an internal
         *     browser event.
         * @param {goog.events.BrowserEvent} browserEvent The browser event.
         * @protected
         */
        handleDomAttrChange(handler: Function, browserEvent: goog.events.BrowserEvent): void;
    
        /**
         * @return {HTMLIFrameElement} The iframe that's body is editable.
         * @protected
         */
        getEditableIframe(): HTMLIFrameElement;
    
        /**
         * @return {goog.dom.DomHelper?} The dom helper for the editable node.
         */
        getEditableDomHelper(): goog.dom.DomHelper;
    
        /**
         * @return {goog.dom.AbstractRange?} Closure range object wrapping the selection
         *     in this field or null if this field is not currently editable.
         */
        getRange(): goog.dom.AbstractRange;
    
        /**
         * Dispatch a selection change event, optionally caused by the given browser
         * event or selecting the given target.
         * @param {goog.events.BrowserEvent=} opt_e Optional browser event causing this
         *     event.
         * @param {Node=} opt_target The node the selection changed to.
         */
        dispatchSelectionChangeEvent(opt_e?: goog.events.BrowserEvent, opt_target?: Node): void;
    
        /**
         * This dispatches the beforechange event on the editable field
         */
        dispatchBeforeChange(): void;
    
        /**
         * Temporarily ignore change events. If the time has already been set, it will
         * fire immediately now.  Further setting of the timer is stopped and
         * dispatching of events is stopped until startChangeEvents is called.
         * @param {boolean=} opt_stopChange Whether to ignore base change events.
         * @param {boolean=} opt_stopDelayedChange Whether to ignore delayed change
         *     events.
         */
        stopChangeEvents(opt_stopChange?: boolean, opt_stopDelayedChange?: boolean): void;
    
        /**
         * Start change events again and fire once if desired.
         * @param {boolean=} opt_fireChange Whether to fire the change event
         *      immediately.
         * @param {boolean=} opt_fireDelayedChange Whether to fire the delayed change
         *      event immediately.
         */
        startChangeEvents(opt_fireChange?: boolean, opt_fireDelayedChange?: boolean): void;
    
        /**
         * Stops the event of the given type from being dispatched.
         * @param {goog.editor.Field.EventType} eventType type of event to stop.
         */
        stopEvent(eventType: goog.editor.Field.EventType): void;
    
        /**
         * Re-starts the event of the given type being dispatched, if it had
         * previously been stopped with stopEvent().
         * @param {goog.editor.Field.EventType} eventType type of event to start.
         */
        startEvent(eventType: goog.editor.Field.EventType): void;
    
        /**
         * Block an event for a short amount of time. Intended
         * for the situation where an event pair fires in quick succession
         * (e.g., mousedown/mouseup, keydown/keyup, focus/blur),
         * and we want the second event in the pair to get "debounced."
         *
         * WARNING: This should never be used to solve race conditions or for
         * mission-critical actions. It should only be used for UI improvements,
         * where it's okay if the behavior is non-deterministic.
         *
         * @param {goog.editor.Field.EventType} eventType type of event to debounce.
         */
        debounceEvent(eventType: goog.editor.Field.EventType): void;
    
        /**
         * Checks if the event of the given type has stopped being dispatched
         * @param {goog.editor.Field.EventType} eventType type of event to check.
         * @return {boolean} true if the event has been stopped with stopEvent().
         * @protected
         */
        isEventStopped(eventType: goog.editor.Field.EventType): boolean;
    
        /**
         * Calls a function to manipulate the dom of this field. This method should be
         * used whenever Trogedit clients need to modify the dom of the field, so that
         * delayed change events are handled appropriately. Extra delayed change events
         * will cause undesired states to be added to the undo-redo stack. This method
         * will always fire at most one delayed change event, depending on the value of
         * {@code opt_preventDelayedChange}.
         *
         * @param {function()} func The function to call that will manipulate the dom.
         * @param {boolean=} opt_preventDelayedChange Whether delayed change should be
         *      prevented after calling {@code func}. Defaults to always firing
         *      delayed change.
         * @param {Object=} opt_handler Object in whose scope to call the listener.
         */
        manipulateDom(func: () => any /*missing*/, opt_preventDelayedChange?: boolean, opt_handler?: Object): void;
    
        /**
         * Dispatches a command value change event.
         * @param {Array.<string>=} opt_commands Commands whose state has
         *     changed.
         */
        dispatchCommandValueChange(opt_commands?: string[]): void;
    
        /**
         * Dispatches the appropriate set of change events. This only fires
         * synchronous change events in blended-mode, iframe-using mozilla. It just
         * starts the appropriate timer for goog.editor.Field.EventType.DELAYEDCHANGE.
         * This also starts up change events again if they were stopped.
         *
         * @param {boolean=} opt_noDelay True if
         *      goog.editor.Field.EventType.DELAYEDCHANGE should be fired syncronously.
         */
        dispatchChange(opt_noDelay?: boolean): void;
    
        /**
         * Handle a change in the Editable Field.  Marks the field has modified,
         * dispatches the change event on the editable field (moz only), starts the
         * timer for the delayed change event.  Note that these actions only occur if
         * the proper events are not stopped.
         */
        handleChange(): void;
    
        /**
         * Don't wait for the timer and just fire the delayed change event if it's
         * pending.
         */
        clearDelayedChange(): void;
    
        /**
         * Dispatches a blur event.
         * @protected
         */
        dispatchBlur(): void;
    
        /**
         * @return {boolean} Whether the selection is editable.
         */
        isSelectionEditable(): boolean;
    
        /**
         * Retrieve the HTML contents of a field.
         *
         * Do NOT just get the innerHTML of a field directly--there's a lot of
         * processing that needs to happen.
         * @return {string} The scrubbed contents of the field.
         */
        getCleanContents(): string;
    
        /**
         * Get the copy of the editable field element, which has the innerHTML set
         * correctly.
         * @return {!Element} The copy of the editable field.
         * @protected
         */
        getFieldCopy(): Element;
    
        /**
         * Sets the contents of the field.
         * @param {boolean} addParas Boolean to specify whether to add paragraphs
         *    to long fields.
         * @param {?string} html html to insert.  If html=null, then this defaults
         *    to a nsbp for mozilla and an empty string for IE.
         * @param {boolean=} opt_dontFireDelayedChange True to make this content change
         *    not fire a delayed change event.
         * @param {boolean=} opt_applyLorem Whether to apply lorem ipsum styles.
         */
        setHtml(addParas: boolean, html: string, opt_dontFireDelayedChange?: boolean, opt_applyLorem?: boolean): void;
    
        /**
         * Attemps to turn on designMode for a document.  This function can fail under
         * certain circumstances related to the load event, and will throw an exception.
         * @protected
         */
        turnOnDesignModeGecko(): void;
    
        /**
         * Installs styles if needed. Only writes styles when they can't be written
         * inline directly into the field.
         * @protected
         */
        installStyles(): void;
    
        /**
         * @return {boolean} Whether the field is uneditable.
         */
        isUneditable(): boolean;
    
        /**
         * @return {boolean} Whether the field has finished loading.
         */
        isLoaded(): boolean;
    
        /**
         * @return {boolean} Whether the field is in the process of loading.
         */
        isLoading(): boolean;
    
        /**
         * Gives the field focus.
         */
        focus(): void;
    
        /**
         * Gives the field focus and places the cursor at the start of the field.
         */
        focusAndPlaceCursorAtStart(): void;
    
        /**
         * Place the cursor at the start of this field. It's recommended that you only
         * use this method (and manipulate the selection in general) when there is not
         * an existing selection in the field.
         */
        placeCursorAtStart(): void;
    
        /**
         * Place the cursor at the start of this field. It's recommended that you only
         * use this method (and manipulate the selection in general) when there is not
         * an existing selection in the field.
         */
        placeCursorAtEnd(): void;
    
        /**
         * Restore a saved range, and set the focus on the field.
         * If no range is specified, we simply set the focus.
         * @param {goog.dom.SavedRange=} opt_range A previously saved selected range.
         */
        restoreSavedRange(opt_range?: goog.dom.SavedRange): void;
    
        /**
         * Makes a field editable.
         *
         * @param {string=} opt_iframeSrc URL to set the iframe src to if necessary.
         */
        makeEditable(opt_iframeSrc?: string): void;
    
        /**
         * Handles actually making something editable - creating necessary nodes,
         * injecting content, etc.
         * @param {string=} opt_iframeSrc URL to set the iframe src to if necessary.
         * @protected
         */
        makeEditableInternal(opt_iframeSrc?: string): void;
    
        /**
         * Handle the loading of the field (e.g. once the field is ready to setup).
         * TODO(user): this should probably just be moved into dispatchLoadEvent_.
         * @protected
         */
        handleFieldLoad(): void;
    
        /**
         * Closes the field and cancels all pending change timers.  Note that this
         * means that if a change event has not fired yet, it will not fire.  Clients
         * should check fieldOj.isModified() if they depend on the final change event.
         * Throws an error if the field is already uneditable.
         *
         * @param {boolean=} opt_skipRestore True to prevent copying of editable field
         *     contents back into the original node.
         */
        makeUneditable(opt_skipRestore?: boolean): void;
    
        /**
         * Restores the dom to how it was before being made editable.
         * @protected
         */
        restoreDom(): void;
    
        /**
         * Returns true if the field needs to be loaded asynchrnously.
         * @return {boolean} True if loads are async.
         * @protected
         */
        shouldLoadAsynchronously(): boolean;
    
        /**
         * Given the original field element, and the iframe that is destined to
         * become the editable field, styles them appropriately and add the iframe
         * to the dom.
         *
         * @param {HTMLIFrameElement} iframe The iframe element.
         * @protected
         */
        attachIframe(iframe: HTMLIFrameElement): void;
    
        /**
         * @param {Object} extraStyles A map of extra styles.
         * @return {!goog.editor.icontent.FieldFormatInfo} The FieldFormatInfo
         *     object for this field's configuration.
         * @protected
         */
        getFieldFormatInfo(extraStyles: Object): goog.editor.icontent.FieldFormatInfo;
    
        /**
         * Writes the html content into the iframe.  Handles writing any aditional
         * styling as well.
         * @param {HTMLIFrameElement} iframe Iframe to write contents into.
         * @param {string} innerHtml The html content to write into the iframe.
         * @param {Object} extraStyles A map of extra style attributes.
         * @protected
         */
        writeIframeContent(iframe: HTMLIFrameElement, innerHtml: string, extraStyles: Object): void;
    
        /**
         * The function to call when the editable iframe loads.
         *
         * @param {HTMLIFrameElement} iframe Iframe that just loaded.
         * @param {string} innerHtml Html to put inside the body of the iframe.
         * @param {Object} styles Property-value map of CSS styles to install on
         *     editable field.
         * @protected
         */
        iframeFieldLoadHandler(iframe: HTMLIFrameElement, innerHtml: string, styles: Object): void;
    
        /**
         * @return {!Object} Get the HTML attributes for this field's iframe.
         * @protected
         */
        getIframeAttributes(): Object;
    }

    /**
     * Wrap an editable link.
     * @param {HTMLAnchorElement} anchor The anchor element.
     * @param {boolean} isNew Whether this is a new link.
     * @constructor
     * @final
     */
    class Link {
        /**
         * Wrap an editable link.
         * @param {HTMLAnchorElement} anchor The anchor element.
         * @param {boolean} isNew Whether this is a new link.
         * @constructor
         * @final
         */
        constructor(anchor: HTMLAnchorElement, isNew: boolean);
    
        /**
         * @return {HTMLAnchorElement} The anchor element.
         */
        getAnchor(): HTMLAnchorElement;
    
        /**
         * @return {!Array.<HTMLAnchorElement>} The extra anchor elements, if any,
         *     created by the browser from a selection.
         */
        getExtraAnchors(): HTMLAnchorElement[];
    
        /**
         * @return {string} The inner text for the anchor.
         */
        getCurrentText(): string;
    
        /**
         * @return {boolean} Whether the link is new.
         */
        isNew(): boolean;
    
        /**
         * Set the url without affecting the isNew() status of the link.
         * @param {string} url A URL.
         */
        initializeUrl(url: string): void;
    
        /**
         * Removes the link, leaving its contents in the document.  Note that this
         * object will no longer be usable/useful after this call.
         */
        removeLink(): void;
    
        /**
         * Change the link.
         * @param {string} newText New text for the link. If the link contains all its
         *     text in one descendent, newText will only replace the text in that
         *     one node. Otherwise, we'll change the innerHTML of the whole
         *     link to newText.
         * @param {string} newUrl A new URL.
         */
        setTextAndUrl(newText: string, newUrl: string): void;
    
        /**
         * Places the cursor to the right of the anchor.
         * Note that this is different from goog.editor.range's placeCursorNextTo
         * in that it specifically handles the placement of a cursor in browsers
         * that trap you in links, by adding a space when necessary and placing the
         * cursor after that space.
         */
        placeCursorRightOf(): void;
    
        /**
         * @return {string?} The modified string for the link if the link
         *     text appears to be a valid link. Returns null if this is not
         *     a valid link address.
         */
        getValidLinkFromText(): string;
    
        /**
         * After link creation, finish creating the link depending on the type
         * of link being created.
         * @param {goog.editor.Field} field The field where this link is being created.
         */
        finishLinkCreation(field: goog.editor.Field): void;
    }

    /**
     * Abstract API for trogedit plugins.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class Plugin extends goog.events.EventTarget {
        /**
         * Abstract API for trogedit plugins.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor();
    
        /**
         * The field object this plugin is attached to.
         * @type {goog.editor.Field}
         * @protected
         * @deprecated Use goog.editor.Plugin.getFieldObject and
         *     goog.editor.Plugin.setFieldObject.
         */
        fieldObject: goog.editor.Field;
    
        /**
         * @return {goog.dom.DomHelper?} The dom helper object associated with the
         *     currently active field.
         */
        getFieldDomHelper(): goog.dom.DomHelper;
    
        /**
         * The logger for this plugin.
         * @type {goog.log.Logger}
         * @protected
         */
        logger: goog.log.Logger;
    
        /**
         * Sets the field object for use with this plugin.
         * @return {goog.editor.Field} The editable field object.
         * @protected
         * @suppress {deprecated} Until fieldObject can be made private.
         */
        getFieldObject(): goog.editor.Field;
    
        /**
         * Sets the field object for use with this plugin.
         * @param {goog.editor.Field} fieldObject The editable field object.
         * @protected
         * @suppress {deprecated} Until fieldObject can be made private.
         */
        setFieldObject(fieldObject: goog.editor.Field): void;
    
        /**
         * Registers the field object for use with this plugin.
         * @param {goog.editor.Field} fieldObject The editable field object.
         */
        registerFieldObject(fieldObject: goog.editor.Field): void;
    
        /**
         * Unregisters and disables this plugin for the current field object.
         * @param {goog.editor.Field} fieldObj The field object. For single-field
         *     plugins, this parameter is ignored.
         */
        unregisterFieldObject(fieldObj: goog.editor.Field): void;
    
        /**
         * Enables this plugin for the specified, registered field object. A field
         * object should only be enabled when it is loaded.
         * @param {goog.editor.Field} fieldObject The field object.
         */
        enable(fieldObject: goog.editor.Field): void;
    
        /**
         * Disables this plugin for the specified, registered field object.
         * @param {goog.editor.Field} fieldObject The field object.
         */
        disable(fieldObject: goog.editor.Field): void;
    
        /**
         * Returns whether this plugin is enabled for the field object.
         *
         * @param {goog.editor.Field} fieldObject The field object.
         * @return {boolean} Whether this plugin is enabled for the field object.
         */
        isEnabled(fieldObject: goog.editor.Field): boolean;
    
        /**
         * Set if this plugin should automatically be disposed when the registered
         * field is disposed.
         * @param {boolean} autoDispose Whether to autoDispose.
         */
        setAutoDispose(autoDispose: boolean): void;
    
        /**
         * @return {boolean} Whether or not this plugin should automatically be disposed
         *     when it's registered field is disposed.
         */
        isAutoDispose(): boolean;
    
        /**
         * @return {boolean} If true, field will not disable the command
         *     when the field becomes uneditable.
         */
        activeOnUneditableFields: any /*missing*/;
    
        /**
         * @param {string} command The command to check.
         * @return {boolean} If true, field will not dispatch change events
         *     for commands of this type. This is useful for "seamless" plugins like
         *     dialogs and lorem ipsum.
         */
        isSilentCommand: any /*missing*/;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * @return {string} The ID unique to this plugin class. Note that different
         *     instances off the plugin share the same classId.
         */
        getTrogClassId: any /*missing*/;
    
        /**
         * Handles keydown. It is run before handleKeyboardShortcut and if it returns
         * true handleKeyboardShortcut will not be called.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @return {boolean} Whether the event was handled and thus should *not* be
         *     propagated to other plugins or handleKeyboardShortcut.
         */
        handleKeyDown: any /*missing*/;
    
        /**
         * Handles keypress. It is run before handleKeyboardShortcut and if it returns
         * true handleKeyboardShortcut will not be called.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @return {boolean} Whether the event was handled and thus should *not* be
         *     propagated to other plugins or handleKeyboardShortcut.
         */
        handleKeyPress: any /*missing*/;
    
        /**
         * Handles keyup.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @return {boolean} Whether the event was handled and thus should *not* be
         *     propagated to other plugins.
         */
        handleKeyUp: any /*missing*/;
    
        /**
         * Handles selection change.
         * @param {!goog.events.BrowserEvent=} opt_e The browser event.
         * @param {!Node=} opt_target The node the selection changed to.
         * @return {boolean} Whether the event was handled and thus should *not* be
         *     propagated to other plugins.
         */
        handleSelectionChange: any /*missing*/;
    
        /**
         * Handles keyboard shortcuts.  Preferred to using handleKey* as it will use
         * the proper event based on browser and will be more performant. If
         * handleKeyPress/handleKeyDown returns true, this will not be called. If the
         * plugin handles the shortcut, it is responsible for dispatching appropriate
         * events (change, selection change at the time of this comment). If the plugin
         * calls execCommand on the editable field, then execCommand already takes care
         * of dispatching events.
         * NOTE: For performance reasons this is only called when any key is pressed
         * in conjunction with ctrl/meta keys OR when a small subset of keys (defined
         * in goog.editor.Field.POTENTIAL_SHORTCUT_KEYCODES_) are pressed without
         * ctrl/meta keys. We specifically don't invoke it when altKey is pressed since
         * alt key is used in many i8n UIs to enter certain characters.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @param {string} key The key pressed.
         * @param {boolean} isModifierPressed Whether the ctrl/meta key was pressed or
         *     not.
         * @return {boolean} Whether the event was handled and thus should *not* be
         *     propagated to other plugins. We also call preventDefault on the event if
         *     the return value is true.
         */
        handleKeyboardShortcut: any /*missing*/;
    
        /**
         * Handles execCommand. This default implementation handles dispatching
         * BEFORECHANGE, CHANGE, and SELECTIONCHANGE events, and calls
         * execCommandInternal to perform the actual command. Plugins that want to
         * do their own event dispatching should override execCommand, otherwise
         * it is preferred to only override execCommandInternal.
         *
         * This version of execCommand will only work for single field plugins.
         * Multi-field plugins must override execCommand.
         *
         * @param {string} command The command to execute.
         * @param {...*} var_args Any additional parameters needed to
         *     execute the command.
         * @return {*} The result of the execCommand, if any.
         */
        execCommand(command: string, ...var_args: any[]): any;
    
        /**
         * Handles execCommand. This default implementation does nothing, and is
         * called by execCommand, which handles event dispatching. This method should
         * be overriden by plugins that don't need to do their own event dispatching.
         * If custom event dispatching is needed, execCommand shoul be overriden
         * instead.
         *
         * @param {string} command The command to execute.
         * @param {...*} var_args Any additional parameters needed to
         *     execute the command.
         * @return {*} The result of the execCommand, if any.
         * @protected
         */
        execCommandInternal: any /*missing*/;
    
        /**
         * Gets the state of this command if this plugin serves that command.
         * @param {string} command The command to check.
         * @return {*} The value of the command.
         */
        queryCommandValue: any /*missing*/;
    
        /**
         * Prepares the given HTML for editing. Strips out content that should not
         * appear in an editor, and normalizes content as appropriate. The inverse
         * of cleanContentsHtml.
         *
         * This op is invoked even on disabled plugins.
         *
         * @param {string} originalHtml The original HTML.
         * @param {Object} styles A map of strings. If the plugin wants to add
         *     any styles to the field element, it should add them as key-value
         *     pairs to this object.
         * @return {string} New HTML that's ok for editing.
         */
        prepareContentsHtml: any /*missing*/;
    
        /**
         * Cleans the contents of the node passed to it. The node contents are modified
         * directly, and the modifications will subsequently be used, for operations
         * such as saving the innerHTML of the editor etc. Since the plugins act on
         * the DOM directly, this method can be very expensive.
         *
         * This op is invoked even on disabled plugins.
         *
         * @param {!Element} fieldCopy The copy of the editable field which
         *     needs to be cleaned up.
         */
        cleanContentsDom: any /*missing*/;
    
        /**
         * Cleans the html contents of Trogedit. Both cleanContentsDom and
         * and cleanContentsHtml will be called on contents extracted from Trogedit.
         * The inverse of prepareContentsHtml.
         *
         * This op is invoked even on disabled plugins.
         *
         * @param {string} originalHtml The trogedit HTML.
         * @return {string} Cleaned-up HTML.
         */
        cleanContentsHtml: any /*missing*/;
    
        /**
         * Whether the string corresponds to a command this plugin handles.
         * @param {string} command Command string to check.
         * @return {boolean} Whether the plugin handles this type of command.
         */
        isSupportedCommand(command: string): boolean;
    }

    /**
     * This class encapsulates an editable field that blends in with the
     * surrounding page.
     * To see events fired by this object, please see the base class.
     *
     * @param {string} id An identifer for the field. This is used to find the
     *     field and the element associated with this field.
     * @param {Document=} opt_doc The document that the element with the given
     *     id can be found it.
     * @constructor
     * @extends {goog.editor.Field}
     */
    class SeamlessField extends goog.editor.Field {
        /**
         * This class encapsulates an editable field that blends in with the
         * surrounding page.
         * To see events fired by this object, please see the base class.
         *
         * @param {string} id An identifer for the field. This is used to find the
         *     field and the element associated with this field.
         * @param {Document=} opt_doc The document that the element with the given
         *     id can be found it.
         * @constructor
         * @extends {goog.editor.Field}
         */
        constructor(id: string, opt_doc?: Document);
    
        /**
         * @override
         */
        logger: any /*missing*/;
    
        /**
         * Sets the min height of this editable field's iframe. Only used in growing
         * mode when an iframe is used. This will cause an immediate field sizing to
         * update the field if necessary based on the new min height.
         * @param {number} height The min height specified as a number of pixels,
         *    e.g., 75.
         */
        setMinHeight(height: number): void;
    
        /**
         * @return {boolean} Whether the field should be rendered with a fixed
         *    height, or should expand to fit its contents.
         * @override
         */
        isFixedHeight(): boolean;
    
        /**
         * @param {boolean} newVal Explicitly set whether the field should be
         *    of a fixed-height. This overrides auto-detection.
         */
        overrideFixedHeight(newVal: boolean): void;
    
        /**
         * Perform all the sizing immediately.
         */
        doFieldSizingGecko(): void;
    
        /**
         * Gets the css rules that should be used to style an iframe's body as if it
         * were the original element that we made editable.
         * @param {boolean=} opt_forceRegeneration Set to true to not read the cached
         * copy and instead completely regenerate the css rules.
         * @return {string} The string containing the css rules to use.
         */
        getIframeableCss(opt_forceRegeneration?: boolean): string;
    
        /**
         * Sets the css rules that should be used inside the editable iframe.
         * Note: to clear the css cache between makeNotEditable/makeEditable,
         * call this with "" as iframeableCss.
         * TODO(user): Unify all these css setting methods + Nick's open
         * CL.  This is getting ridiculous.
         * @param {string} iframeableCss String containing the css rules to use.
         */
        setIframeableCss(iframeableCss: string): void;
    
        /**
         * Applies CSS from the wrapper-div to the field iframe.
         */
        inheritBlendedCSS(): void;
    
        /** @override */
        usesIframe(): void;
    
        /** @override */
        setupMutationEventHandlersGecko(): void;
    
        /** @override */
        handleChange(): void;
    
        /** @override */
        dispatchBlur(): void;
    
        /** @override */
        turnOnDesignModeGecko(): void;
    
        /** @override */
        installStyles(): void;
    
        /** @override */
        makeEditableInternal(): void;
    
        /** @override */
        handleFieldLoad(): void;
    
        /** @override */
        getIframeAttributes(): void;
    
        /** @override */
        attachIframe(): void;
    
        /** @override */
        getFieldFormatInfo(): void;
    
        /** @override */
        writeIframeContent(): void;
    
        /** @override */
        restoreDom(): void;
    
        /** @override */
        clearListeners(): void;
    }

    /**
     * Class providing high level table editing functions.
     * @param {Element} node Element that is a table or descendant of a table.
     * @constructor
     * @final
     */
    class Table {
        /**
         * Class providing high level table editing functions.
         * @param {Element} node Element that is a table or descendant of a table.
         * @constructor
         * @final
         */
        constructor(node: Element);
    
        /**
         * Walks the dom structure of this object's table element and populates
         * this.rows with goog.editor.TableRow objects. This is done initially
         * to populate the internal data structures, and also after each time the
         * DOM structure is modified. Currently this means that the all existing
         * information is discarded and re-read from the DOM.
         */
        refresh(): void;
    
        /**
         * Inserts a new row in the table. The row will be populated with new
         * cells, and existing rowspanned cells that overlap the new row will
         * be extended.
         * @param {number=} opt_rowIndex Index at which to insert the row. If
         *     this is omitted the row will be appended to the end of the table.
         * @return {!Element} The new row.
         */
        insertRow(opt_rowIndex?: number): Element;
    
        /**
         * Inserts a new column in the table. The column will be created by
         * inserting new TD elements in each row, or extending the colspan
         * of existing TD elements.
         * @param {number=} opt_colIndex Index at which to insert the column. If
         *     this is omitted the column will be appended to the right side of
         *     the table.
         * @return {!Array.<Element>} Array of new cell elements that were created
         *     to populate the new column.
         */
        insertColumn(opt_colIndex?: number): Element[];
    
        /**
         * Removes a row from the table, removing the TR element and
         * decrementing the rowspan of any cells in other rows that overlap the row.
         * @param {number} rowIndex Index of the row to delete.
         */
        removeRow(rowIndex: number): void;
    
        /**
         * Removes a column from the table. This is done by removing cell elements,
         * or shrinking the colspan of elements that span multiple columns.
         * @param {number} colIndex Index of the column to delete.
         */
        removeColumn(colIndex: number): void;
    
        /**
         * Merges multiple cells into a single cell, and sets the rowSpan and colSpan
         * attributes of the cell to take up the same space as the original cells.
         * @param {number} startRowIndex Top coordinate of the cells to merge.
         * @param {number} startColIndex Left coordinate of the cells to merge.
         * @param {number} endRowIndex Bottom coordinate of the cells to merge.
         * @param {number} endColIndex Right coordinate of the cells to merge.
         * @return {boolean} Whether or not the merge was possible. If the cells
         *     in the supplied coordinates can't be merged this will return false.
         */
        mergeCells(startRowIndex: number, startColIndex: number, endRowIndex: number, endColIndex: number): boolean;
    
        /**
         * Splits a cell with colspans or rowspans into multiple descrete cells.
         * @param {number} rowIndex y coordinate of the cell to split.
         * @param {number} colIndex x coordinate of the cell to split.
         * @return {!Array.<Element>} Array of new cell elements created by splitting
         *     the cell.
         */
        splitCell(rowIndex: number, colIndex: number): Element[];
    
        /**
         * Inserts a cell element at the given position. The colIndex is the logical
         * column index, not the position in the dom. This takes into consideration
         * that cells in a given logical  row may actually be children of a previous
         * DOM row that have used rowSpan to extend into the row.
         * @param {Element} td The new cell element to insert.
         * @param {number} rowIndex Row in which to insert the element.
         * @param {number} colIndex Column in which to insert the element.
         */
        insertCellElement(td: Element, rowIndex: number, colIndex: number): void;
    
        /**
         * Creates an empty TD element and fill it with some empty content so it will
         * show up with borders even in IE pre-7 or if empty-cells is set to 'hide'
         * @return {!Element} a new TD element.
         */
        createEmptyTd(): Element;
    }

    /**
     * Class representing a logical table row: a tr element and any cells
     * that appear in that row.
     * @param {Element} trElement This rows's underlying TR element.
     * @param {number} rowIndex This row's index in its parent table.
     * @constructor
     * @final
     */
    class TableRow {
        /**
         * Class representing a logical table row: a tr element and any cells
         * that appear in that row.
         * @param {Element} trElement This rows's underlying TR element.
         * @param {number} rowIndex This row's index in its parent table.
         * @constructor
         * @final
         */
        constructor(trElement: Element, rowIndex: number);
    }

    /**
     * Class representing a table cell, which may span across multiple
     * rows and columns
     * @param {Element} td This cell's underlying TD or TH element.
     * @param {number} startRow Index of the row where this cell begins.
     * @param {number} startCol Index of the column where this cell begins.
     * @constructor
     * @final
     */
    class TableCell {
        /**
         * Class representing a table cell, which may span across multiple
         * rows and columns
         * @param {Element} td This cell's underlying TD or TH element.
         * @param {number} startRow Index of the row where this cell begins.
         * @param {number} startCol Index of the column where this cell begins.
         * @constructor
         * @final
         */
        constructor(td: Element, startRow: number, startCol: number);
    
        /**
         * Set this cell's colSpan, updating both its colSpan property and the
         * underlying element's colSpan attribute.
         * @param {number} colSpan The new colSpan.
         */
        setColSpan(colSpan: number): void;
    
        /**
         * Set this cell's rowSpan, updating both its rowSpan property and the
         * underlying element's rowSpan attribute.
         * @param {number} rowSpan The new rowSpan.
         */
        setRowSpan(rowSpan: number): void;
    }
}

declare module 'goog.editor.Field' {

    /**
     * Event types that can be stopped/started.
     * @enum {string}
     */
    enum EventType { COMMAND_VALUE_CHANGE, LOAD, UNLOAD, BEFORECHANGE, CHANGE, DELAYEDCHANGE, BEFOREFOCUS, FOCUS, BLUR, BEFORETAB, IFRAME_RESIZED, SELECTIONCHANGE } 

    /**
     * Sets the active field id.
     * @param {?string} fieldId The active field id.
     */
    function setActiveFieldId(fieldId: string): void;

    /**
     * @return {?string} The id of the active field.
     */
    function getActiveFieldId(): string;

    /**
     * Number of milliseconds after a change when the change event should be fired.
     * @type {number}
     */
    var CHANGE_FREQUENCY: number;

    /**
     * Number of milliseconds between delayed change events.
     * @type {number}
     */
    var DELAYED_CHANGE_FREQUENCY: number;

    /**
     * List of mutation events in Gecko browsers.
     * @type {Array.<string>}
     * @protected
     */
    var MUTATION_EVENTS_GECKO: string[];
}

declare module 'goog.editor.focus' {

    /**
     * Change focus to the given input field and set cursor to end of current text.
     * @param {Element} inputElem Input DOM element.
     */
    function focusInputField(inputElem: Element): void;
}

declare module 'goog.editor.icontent' {

    /**
     * Sets up goog.editor.icontent to always use standards-mode iframes.
     */
    function forceStandardsModeIframes(): void;

    /**
     * Write the initial iframe content in normal mode.
     * @param {goog.editor.icontent.FieldFormatInfo} info Formatting info about
     *     the field.
     * @param {string} bodyHtml The HTML to insert as the iframe body.
     * @param {goog.editor.icontent.FieldStyleInfo?} style Style info about
     *     the field, if needed.
     * @param {HTMLIFrameElement} iframe The iframe.
     */
    function writeNormalInitialBlendedIframe(info: goog.editor.icontent.FieldFormatInfo, bodyHtml: string, style: goog.editor.icontent.FieldStyleInfo, iframe: HTMLIFrameElement): void;

    /**
     * Write the initial iframe content in normal mode.
     * @param {goog.editor.icontent.FieldFormatInfo} info Formatting info about
     *     the field.
     * @param {string} bodyHtml The HTML to insert as the iframe body.
     * @param {goog.editor.icontent.FieldStyleInfo?} style Style info about
     *     the field, if needed.
     * @param {HTMLIFrameElement} iframe The iframe.
     */
    function writeNormalInitialIframe(info: goog.editor.icontent.FieldFormatInfo, bodyHtml: string, style: goog.editor.icontent.FieldStyleInfo, iframe: HTMLIFrameElement): void;

    /**
     * Write the initial iframe content in IE/HTTPS mode.
     * @param {goog.editor.icontent.FieldFormatInfo} info Formatting info about
     *     the field.
     * @param {Document} doc The iframe document.
     * @param {string} bodyHtml The HTML to insert as the iframe body.
     */
    function writeHttpsInitialIframe(info: goog.editor.icontent.FieldFormatInfo, doc: Document, bodyHtml: string): void;

    /**
     * A data structure for storing simple rendering info about a field.
     *
     * @param {string} fieldId The id of the field.
     * @param {boolean} standards Whether the field should be rendered in
     *     standards mode.
     * @param {boolean} blended Whether the field is in blended mode.
     * @param {boolean} fixedHeight Whether the field is in fixedHeight mode.
     * @param {Object=} opt_extraStyles Other style attributes for the field,
     *     represented as a map of strings.
     * @constructor
     * @final
     */
    class FieldFormatInfo {
        /**
         * A data structure for storing simple rendering info about a field.
         *
         * @param {string} fieldId The id of the field.
         * @param {boolean} standards Whether the field should be rendered in
         *     standards mode.
         * @param {boolean} blended Whether the field is in blended mode.
         * @param {boolean} fixedHeight Whether the field is in fixedHeight mode.
         * @param {Object=} opt_extraStyles Other style attributes for the field,
         *     represented as a map of strings.
         * @constructor
         * @final
         */
        constructor(fieldId: string, standards: boolean, blended: boolean, fixedHeight: boolean, opt_extraStyles?: Object);
    }

    /**
     * A data structure for storing simple info about the styles of a field.
     * Only needed in Firefox/Blended mode.
     * @param {Element} wrapper The wrapper div around a field.
     * @param {string} css The css for a field.
     * @constructor
     * @final
     */
    class FieldStyleInfo {
        /**
         * A data structure for storing simple info about the styles of a field.
         * Only needed in Firefox/Blended mode.
         * @param {Element} wrapper The wrapper div around a field.
         * @param {string} css The css for a field.
         * @constructor
         * @final
         */
        constructor(wrapper: Element, css: string);
    }
}

declare module 'goog.editor.Link' {

    /**
     * Initialize a new link.
     * @param {HTMLAnchorElement} anchor The anchor element.
     * @param {string} url The initial URL.
     * @param {string=} opt_target The target.
     * @param {Array.<HTMLAnchorElement>=} opt_extraAnchors Extra anchors created
     *     by the browser when parsing a selection.
     * @return {!goog.editor.Link} The link.
     */
    function createNewLink(anchor: HTMLAnchorElement, url: string, opt_target?: string, opt_extraAnchors?: HTMLAnchorElement[]): goog.editor.Link;

    /**
     * Returns true if str could be a URL, false otherwise
     *
     * Ex: TR_Util.isLikelyUrl_("http://www.google.com") == true
     *     TR_Util.isLikelyUrl_("www.google.com") == true
     *
     * @param {string} str String to check if it looks like a URL.
     * @return {boolean} Whether str could be a URL.
     */
    function isLikelyUrl(str: string): boolean;

    /**
     * Returns true if str could be an email address, false otherwise
     *
     * Ex: goog.editor.Link.isLikelyEmailAddress_("some word") == false
     *     goog.editor.Link.isLikelyEmailAddress_("foo@foo.com") == true
     *
     * @param {string} str String to test for being email address.
     * @return {boolean} Whether "str" looks like an email address.
     */
    function isLikelyEmailAddress(str: string): boolean;

    /**
     * Determines whether or not a url is an email link.
     * @param {string} url A url.
     * @return {boolean} Whether the url is a mailto link.
     */
    function isMailto(url: string): boolean;
}

declare module 'goog.editor.node' {

    /**
     * Check if the node is in a standards mode document.
     * @param {Node} node The node to test.
     * @return {boolean} Whether the node is in a standards mode document.
     */
    function isStandardsMode(node: Node): boolean;

    /**
     * Get the right-most non-ignorable leaf node of the given node.
     * @param {Node} parent The parent ndoe.
     * @return {Node} The right-most non-ignorable leaf node.
     */
    function getRightMostLeaf(parent: Node): Node;

    /**
     * Get the left-most non-ignorable leaf node of the given node.
     * @param {Node} parent The parent ndoe.
     * @return {Node} The left-most non-ignorable leaf node.
     */
    function getLeftMostLeaf(parent: Node): Node;

    /**
     * Version of firstChild that skips nodes that are entirely
     * whitespace and comments.
     * @param {Node} parent The reference node.
     * @return {Node} The first child of sibling that is important according to
     *     goog.editor.node.isImportant, or null if no such node exists.
     */
    function getFirstChild(parent: Node): Node;

    /**
     * Version of lastChild that skips nodes that are entirely whitespace or
     * comments.  (Normally lastChild is a property of all DOM nodes that gives the
     * last of the nodes contained directly in the reference node.)
     * @param {Node} parent The reference node.
     * @return {Node} The last child of sibling that is important according to
     *     goog.editor.node.isImportant, or null if no such node exists.
     */
    function getLastChild(parent: Node): Node;

    /**
     * Version of previoussibling that skips nodes that are entirely
     * whitespace or comments.  (Normally previousSibling is a property
     * of all DOM nodes that gives the sibling node, the node that is
     * a child of the same parent, that occurs immediately before the
     * reference node.)
     * @param {Node} sibling The reference node.
     * @return {Node} The closest previous sibling to sibling that is
     *     important according to goog.editor.node.isImportant, or null if no such
     *     node exists.
     */
    function getPreviousSibling(sibling: Node): Node;

    /**
     * Version of nextSibling that skips nodes that are entirely whitespace or
     * comments.
     * @param {Node} sibling The reference node.
     * @return {Node} The closest next sibling to sibling that is important
     *     according to goog.editor.node.isImportant, or null if no
     *     such node exists.
     */
    function getNextSibling(sibling: Node): Node;

    /**
     * Determine if a node should be returned by the iterator functions.
     * @param {Node} node An object implementing the DOM1 Node interface.
     * @return {boolean} Whether the node is an element, or a text node that
     *     is not all whitespace.
     */
    function isImportant(node: Node): boolean;

    /**
     * Determine whether a node's text content is entirely whitespace.
     * @param {Node} textNode A node implementing the CharacterData interface (i.e.,
     *     a Text, Comment, or CDATASection node.
     * @return {boolean} Whether the text content of node is whitespace,
     *     otherwise false.
     */
    function isAllNonNbspWhiteSpace(textNode: Node): boolean;

    /**
     * Returns true if the node contains only whitespace and is not and does not
     * contain any images, iframes or embed tags.
     * @param {Node} node The node to check.
     * @param {boolean=} opt_prohibitSingleNbsp By default, this function treats a
     *     single nbsp as empty.  Set this to true to treat this case as non-empty.
     * @return {boolean} Whether the node contains only whitespace.
     */
    function isEmpty(node: Node, opt_prohibitSingleNbsp?: boolean): boolean;

    /**
     * Returns the length of the text in node if it is a text node, or the number
     * of children of the node, if it is an element. Useful for range-manipulation
     * code where you need to know the offset for the right side of the node.
     * @param {Node} node The node to get the length of.
     * @return {number} The length of the node.
     */
    function getLength(node: Node): number;

    /**
     * Search child nodes using a predicate function and return the first node that
     * satisfies the condition.
     * @param {Node} parent The parent node to search.
     * @param {function(Node):boolean} hasProperty A function that takes a child
     *    node as a parameter and returns true if it meets the criteria.
     * @return {?number} The index of the node found, or null if no node is found.
     */
    function findInChildren(parent: Node, hasProperty: (_0: Node) => boolean): number;

    /**
     * Search ancestor nodes using a predicate function and returns the topmost
     * ancestor in the chain of consecutive ancestors that satisfies the condition.
     *
     * @param {Node} node The node whose ancestors have to be searched.
     * @param {function(Node): boolean} hasProperty A function that takes a parent
     *     node as a parameter and returns true if it meets the criteria.
     * @return {Node} The topmost ancestor or null if no ancestor satisfies the
     *     predicate function.
     */
    function findHighestMatchingAncestor(node: Node, hasProperty: (_0: Node) => boolean): Node;

    /**
    * Checks if node is a block-level html element. The <tt>display</tt> css
     * property is ignored.
     * @param {Node} node The node to test.
     * @return {boolean} Whether the node is a block-level node.
     */
    function isBlockTag(node: Node): boolean;

    /**
     * Skips siblings of a node that are empty text nodes.
     * @param {Node} node A node. May be null.
     * @return {Node} The node or the first sibling of the node that is not an
     *     empty text node. May be null.
     */
    function skipEmptyTextNodes(node: Node): Node;

    /**
     * Checks if an element is a top-level editable container (meaning that
     * it itself is not editable, but all its child nodes are editable).
     * @param {Node} element The element to test.
     * @return {boolean} Whether the element is a top-level editable container.
     */
    function isEditableContainer(element: Node): boolean;

    /**
     * Checks if a node is inside an editable container.
     * @param {Node} node The node to test.
     * @return {boolean} Whether the node is in an editable container.
     */
    function isEditable(node: Node): boolean;

    /**
     * Finds the top-most DOM node inside an editable field that is an ancestor
     * (or self) of a given DOM node and meets the specified criteria.
     * @param {Node} node The DOM node where the search starts.
     * @param {function(Node) : boolean} criteria A function that takes a DOM node
     *     as a parameter and returns a boolean to indicate whether the node meets
     *     the criteria or not.
     * @return {Node} The DOM node if found, or null.
     */
    function findTopMostEditableAncestor(node: Node, criteria: (_0: Node) => boolean): Node;

    /**
     * Splits off a subtree.
     * @param {!Node} currentNode The starting splitting point.
     * @param {Node=} opt_secondHalf The initial leftmost leaf the new subtree.
     *     If null, siblings after currentNode will be placed in the subtree, but
     *     no additional node will be.
     * @param {Node=} opt_root The top of the tree where splitting stops at.
     * @return {!Node} The new subtree.
     */
    function splitDomTreeAt(currentNode: Node, opt_secondHalf?: Node, opt_root?: Node): Node;

    /**
     * Appends all of oldNode's children to newNode. This removes all children from
     * oldNode and appends them to newNode. oldNode is left with no children.
     * @param {!Node} newNode Node to transfer children to.
     * @param {Node} oldNode Node to transfer children from.
     * @deprecated Use goog.dom.append directly instead.
     */
    function transferChildren(newNode: Node, oldNode: Node): void;

    /**
     * Replaces the innerHTML of a node.
     *
     * IE has serious problems if you try to set innerHTML of an editable node with
     * any selection. Early versions of IE tear up the old internal tree storage, to
     * help avoid ref-counting loops. But this sometimes leaves the selection object
     * in a bad state and leads to segfaults.
     *
     * Removing the nodes first prevents IE from tearing them up. This is not
     * strictly necessary in nodes that do not have the selection. You should always
     * use this function when setting innerHTML inside of a field.
     *
     * @param {Node} node A node.
     * @param {string} html The innerHTML to set on the node.
     */
    function replaceInnerHtml(node: Node, html: string): void;
}

declare module 'goog.editor.Plugin' {

    /**
     * An enum of operations that plugins may support.
     * @enum {number}
     */
    enum Op { KEYDOWN, KEYPRESS, KEYUP, SELECTION, SHORTCUT, EXEC_COMMAND, QUERY_COMMAND, PREPARE_CONTENTS_HTML, CLEAN_CONTENTS_HTML, CLEAN_CONTENTS_DOM } 

    /**
     * A map from plugin operations to the names of the methods that
     * invoke those operations.
     */
    var OPCODE: any /*missing*/;

    /**
     * A set of op codes that run even on disabled plugins.
     */
    var IRREPRESSIBLE_OPS: any /*missing*/;
}

declare module 'goog.editor.range' {

    /**
     * Given a range and an element, create a narrower range that is limited to the
     * boundaries of the element. If the range starts (or ends) outside the
     * element, the narrowed range's start point (or end point) will be the
     * leftmost (or rightmost) leaf of the element.
     * @param {goog.dom.AbstractRange} range The range.
     * @param {Element} el The element to limit the range to.
     * @return {goog.dom.AbstractRange} A new narrowed range, or null if the
     *     element does not contain any part of the given range.
     */
    function narrow(range: goog.dom.AbstractRange, el: Element): goog.dom.AbstractRange;

    /**
     * Given a range, expand the range to include outer tags if the full contents of
     * those tags are entirely selected.  This essentially changes the dom position,
     * but not the visible position of the range.
     * Ex. <li>foo</li> if "foo" is selected, instead of returning start and end
     * nodes as the foo text node, return the li.
     * @param {goog.dom.AbstractRange} range The range.
     * @param {Node=} opt_stopNode Optional node to stop expanding past.
     * @return {goog.dom.AbstractRange} The expanded range.
     */
    function expand(range: goog.dom.AbstractRange, opt_stopNode?: Node): goog.dom.AbstractRange;

    /**
     * Cause the window's selection to be the start of this node.
     * @param {Node} node The node to select the start of.
     */
    function selectNodeStart(node: Node): void;

    /**
     * Position the cursor immediately to the left or right of "node".
     * In Firefox, the selection parent is outside of "node", so the cursor can
     * effectively be moved to the end of a link node, without being considered
     * inside of it.
     * Note: This does not always work in WebKit. In particular, if you try to
     * place a cursor to the right of a link, typing still puts you in the link.
     * Bug: http://bugs.webkit.org/show_bug.cgi?id=17697
     * @param {Node} node The node to position the cursor relative to.
     * @param {boolean} toLeft True to place it to the left, false to the right.
     * @return {!goog.dom.AbstractRange} The newly selected range.
     */
    function placeCursorNextTo(node: Node, toLeft: boolean): goog.dom.AbstractRange;

    /**
     * Normalizes the node, preserving the selection of the document.
     *
     * May also normalize things outside the node, if it is more efficient to do so.
     *
     * @param {Node} node The node to normalize.
     */
    function selectionPreservingNormalize(node: Node): void;

    /**
     * Normalizes the given node.
     * @param {Node} node The node to normalize.
     */
    function normalizeNode(node: Node): void;

    /**
     * Normalizes the node, preserving a range of the document.
     *
     * May also normalize things outside the node, if it is more efficient to do so.
     *
     * @param {Node} node The node to normalize.
     * @param {goog.dom.AbstractRange?} range The range to normalize.
     * @return {goog.dom.AbstractRange?} The range, adjusted for normalization.
     */
    function rangePreservingNormalize(node: Node, range: goog.dom.AbstractRange): goog.dom.AbstractRange;

    /**
     * Get the deepest point in the DOM that's equivalent to the endpoint of the
     * given range.
     *
     * @param {goog.dom.AbstractRange} range A range.
     * @param {boolean} atStart True for the start point, false for the end point.
     * @return {goog.editor.range.Point} The end point, expressed as a node
     *    and an offset.
     */
    function getDeepEndPoint(range: goog.dom.AbstractRange, atStart: boolean): goog.editor.range.Point;

    /**
     * Given a range in the current DOM, create a factory for a range that
     * represents the same selection in a normalized DOM. The factory function
     * should be invoked after the DOM is normalized.
     *
     * All browsers do a bad job preserving ranges across DOM normalization.
     * The issue is best described in this 5-year-old bug report:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=191864
     * For most applications, this isn't a problem. The browsers do a good job
     * handling un-normalized text, so there's usually no reason to normalize.
     *
     * The exception to this rule is the rich text editing commands
     * execCommand and queryCommandValue, which will fail often if there are
     * un-normalized text nodes.
     *
     * The factory function creates new ranges so that we can normalize the DOM
     * without problems. It must be created before any normalization happens,
     * and invoked after normalization happens.
     *
     * @param {goog.dom.AbstractRange} range The range to normalize. It may
     *    become invalid after body.normalize() is called.
     * @return {function(): goog.dom.AbstractRange} A factory for a normalized
     *    range. Should be called after body.normalize() is called.
     */
    function normalize(range: goog.dom.AbstractRange): () => goog.dom.AbstractRange;

    /**
     * Checks if a range is completely inside an editable region.
     * @param {goog.dom.AbstractRange} range The range to test.
     * @return {boolean} Whether the range is completely inside an editable region.
     */
    function isEditable(range: goog.dom.AbstractRange): boolean;

    /**
     * Returns whether the given range intersects with any instance of the given
     * tag.
     * @param {goog.dom.AbstractRange} range The range to check.
     * @param {goog.dom.TagName} tagName The name of the tag.
     * @return {boolean} Whether the given range intersects with any instance of
     *     the given tag.
     */
    function intersectsTag(range: goog.dom.AbstractRange, tagName: goog.dom.TagName): boolean;

    /**
     * Saves the range by inserting carets into the HTML.
     *
     * Unlike the regular saveUsingCarets, this SavedRange normalizes text nodes.
     * Browsers have other bugs where they don't handle split text nodes in
     * contentEditable regions right.
     *
     * @param {goog.dom.AbstractRange} range The abstract range object.
     * @return {!goog.dom.SavedCaretRange} A saved caret range that normalizes
     *     text nodes.
     */
    function saveUsingNormalizedCarets(range: goog.dom.AbstractRange): goog.dom.SavedCaretRange;

    /**
     * One endpoint of a range, represented as a Node and and offset.
     * @param {Node} node The node containing the point.
     * @param {number} offset The offset of the point into the node.
     * @constructor
     * @final
     */
    class Point {
        /**
         * One endpoint of a range, represented as a Node and and offset.
         * @param {Node} node The node containing the point.
         * @param {number} offset The offset of the point into the node.
         * @constructor
         * @final
         */
        constructor(node: Node, offset: number);
    
        /**
         * Gets the point of this point's node in the DOM.
         * @return {!goog.editor.range.Point} The node's point.
         */
        getParentPoint(): goog.editor.range.Point;
    }
}

declare module 'goog.editor.range.Point' {

    /**
     * Construct the deepest possible point in the DOM that's equivalent
     * to the given point, expressed as a node and an offset.
     * @param {Node} node The node containing the point.
     * @param {number} offset The offset of the point from the node.
     * @param {boolean=} opt_trendLeft Notice that a (node, offset) pair may be
     *     equivalent to more than one descendent (node, offset) pair in the DOM.
     *     By default, we trend rightward. If this parameter is true, then we
     *     trend leftward. The tendency to fall rightward by default is for
     *     consistency with other range APIs (like placeCursorNextTo).
     * @param {boolean=} opt_stopOnChildlessElement If true, and we encounter
     *     a Node which is an Element that cannot have children, we return a Point
     *     based on its parent rather than that Node itself.
     * @return {!goog.editor.range.Point} A new point.
     */
    function createDeepestPoint(node: Node, offset: number, opt_trendLeft?: boolean, opt_stopOnChildlessElement?: boolean): goog.editor.range.Point;

    /**
     * Construct a point at the very end of the given node.
     * @param {Node} node The node to create a point for.
     * @return {!goog.editor.range.Point} A new point.
     */
    function getPointAtEndOfNode(node: Node): goog.editor.range.Point;
}

declare module 'goog.editor.style' {

    /**
     * Checks whether the given element inherits display: block.
     * @param {Node} node The Node to check.
     * @return {boolean} Whether the element inherits CSS display: block.
     */
    function isDisplayBlock(node: Node): boolean;

    /**
     * Returns true if the element is a container of other non-inline HTML
     * Note that span, strong and em tags, being inline can only contain
     * other inline elements and are thus, not containers. Containers are elements
     * that should not be broken up when wrapping selections with a node of an
     * inline block styling.
     * @param {Node} element The element to check.
     * @return {boolean} Whether the element is a container.
     */
    function isContainer(element: Node): boolean;

    /**
     * Return the first ancestor of this node that is a container, inclusive.
     * @see isContainer
     * @param {Node} node Node to find the container of.
     * @return {Element} The element which contains node.
     */
    function getContainer(node: Node): Element;

    /**
     * Makes the given element unselectable, as well as all of its children, except
     * for text areas, text, file and url inputs.
     * @param {Element} element The element to make unselectable.
     * @param {goog.events.EventHandler} eventHandler An EventHandler to register
     *     the event with. Assumes when the node is destroyed, the eventHandler's
     *     listeners are destroyed as well.
     */
    function makeUnselectable(element: Element, eventHandler: goog.events.EventHandler): void;

    /**
     * Make the given element selectable.
     *
     * For IE this simply turns off the "unselectable" property.
     *
     * Under FF no descendent of an unselectable node can be selectable:
     *
     * https://bugzilla.mozilla.org/show_bug.cgi?id=203291
     *
     * So we make each ancestor of node selectable, while trying to preserve the
     * unselectability of other nodes along that path
     *
     * This may cause certain text nodes which should be unselectable, to become
     * selectable. For example:
     *
     * <div id=div1 style="-moz-user-select: none">
     *   Text1
     *   <span id=span1>Text2</span>
     * </div>
     *
     * If we call makeSelectable on span1, then it will cause "Text1" to become
     * selectable, since it had to make div1 selectable in order for span1 to be
     * selectable.
     *
     * If "Text1" were enclosed within a <p> or <span>, then this problem would
     * not arise.  Text nodes do not have styles, so its style can't be set to
     * unselectable.
     *
     * @param {Element} element The element to make selectable.
     */
    function makeSelectable(element: Element): void;
}

declare module 'goog.editor.Table' {

    /**
     * Returns all child elements of a TR element that are of type TD or TH.
     * @param {Element} tr TR element in which to find children.
     * @return {!Array.<Element>} array of child cell elements.
     */
    function getChildCellElements(tr: Element): Element[];

    /**
     * Optimum size of empty cells (in pixels), if possible.
     * @type {number}
     */
    var OPTIMUM_EMPTY_CELL_WIDTH: number;

    /**
     * Maximum width for new tables.
     * @type {number}
     */
    var OPTIMUM_MAX_NEW_TABLE_WIDTH: number;

    /**
     * Default color for table borders.
     * @type {string}
     */
    var DEFAULT_BORDER_COLOR: string;

    /**
     * Creates a new table element, populated with cells and formatted.
     * @param {Document} doc Document in which to create the table element.
     * @param {number} columns Number of columns in the table.
     * @param {number} rows Number of rows in the table.
     * @param {Object=} opt_tableStyle Object containing borderWidth and borderColor
     *    properties, used to set the inital style of the table.
     * @return {!Element} a table element.
     */
    function createDomTable(doc: Document, columns: number, rows: number, opt_tableStyle?: Object): Element;
}

