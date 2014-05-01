// Generated Wed Apr 30 16:34:40 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/a11y/aria.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/async.d.ts" />
/// <reference path="../../goog/color.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/dom/browserrange.d.ts" />
/// <reference path="../../goog/editor.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/fx.d.ts" />
/// <reference path="../../goog/html.d.ts" />
/// <reference path="../../goog/i18n.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/log.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/positioning.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />
/// <reference path="../../goog/style.d.ts" />
/// <reference path="../../goog/timer.d.ts" />
/// <reference path="../../goog/ui.d.ts" />
/// <reference path="../../goog/ui/equation.d.ts" />
/// <reference path="../../goog/uri.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />
/// <reference path="../../goog/window.d.ts" />

declare module 'goog.ui.editor.AbstractDialog' {

    /**
     * Event type constants for events the dialog fires.
     * @enum {string}
     */
    enum EventType { AFTER_HIDE, CANCEL, OK } 

    /**
     * A builder class for the dialog control. All methods except build return this.
     * @param {goog.ui.editor.AbstractDialog} editorDialog Editor dialog object
     *     that will wrap the wrapped dialog object this builder will create.
     * @constructor
     */
    class Builder {
        /**
         * A builder class for the dialog control. All methods except build return this.
         * @param {goog.ui.editor.AbstractDialog} editorDialog Editor dialog object
         *     that will wrap the wrapped dialog object this builder will create.
         * @constructor
         */
        constructor(editorDialog: goog.ui.editor.AbstractDialog);
    
        /**
         * Sets the title of the dialog.
         * @param {string} title Title HTML (escaped).
         * @return {!goog.ui.editor.AbstractDialog.Builder} This.
         */
        setTitle(title: string): goog.ui.editor.AbstractDialog.Builder;
    
        /**
         * Adds an OK button to the dialog. Clicking this button will cause {@link
         * handleOk} to run, subsequently dispatching an OK event.
         * @param {string=} opt_label The caption for the button, if not "OK".
         * @return {!goog.ui.editor.AbstractDialog.Builder} This.
         */
        addOkButton(opt_label?: string): goog.ui.editor.AbstractDialog.Builder;
    
        /**
         * Adds a Cancel button to the dialog. Clicking this button will cause {@link
         * handleCancel} to run, subsequently dispatching a CANCEL event.
         * @param {string=} opt_label The caption for the button, if not "Cancel".
         * @return {!goog.ui.editor.AbstractDialog.Builder} This.
         */
        addCancelButton(opt_label?: string): goog.ui.editor.AbstractDialog.Builder;
    
        /**
         * Adds a custom button to the dialog.
         * @param {string} label The caption for the button.
         * @param {function(goog.ui.Dialog.EventType):*} handler Function called when
         *     the button is clicked. It is recommended that this function be a method
         *     in the concrete subclass of AbstractDialog using this Builder, and that
         *     it dispatch an event (see {@link handleOk}).
         * @param {string=} opt_buttonId Identifier to be used to access the button when
         *     calling AbstractDialog.getButtonElement().
         * @return {!goog.ui.editor.AbstractDialog.Builder} This.
         */
        addButton(label: string, handler: (_0: goog.ui.Dialog.EventType) => any, opt_buttonId?: string): goog.ui.editor.AbstractDialog.Builder;
    
        /**
         * Puts a CSS class on the dialog's main element.
         * @param {string} className The class to add.
         * @return {!goog.ui.editor.AbstractDialog.Builder} This.
         */
        addClassName(className: string): goog.ui.editor.AbstractDialog.Builder;
    
        /**
         * Sets the content element of the dialog.
         * @param {Element} contentElem An element for the main body.
         * @return {!goog.ui.editor.AbstractDialog.Builder} This.
         */
        setContent(contentElem: Element): goog.ui.editor.AbstractDialog.Builder;
    
        /**
         * Builds the wrapped dialog control. May only be called once, after which
         * no more methods may be called on this builder.
         * @return {!goog.ui.Dialog} The wrapped dialog control.
         */
        build(): goog.ui.Dialog;
    }
}

declare module 'goog.ui.editor.Bubble' {

    /**
     * The css class name of the bubble container element.
     * @type {string}
     */
    var BUBBLE_CLASSNAME: string;
}

declare module 'goog.ui.editor.DefaultToolbar' {

    /** @desc Font menu item caption for the default sans-serif font. */
    var MSG_FONT_NORMAL: any /*missing*/;

    /** @desc Font menu item caption for the default serif font. */
    var MSG_FONT_NORMAL_SERIF: any /*missing*/;

    /**
     * Sets the locale for the font names.  If not set, defaults to 'en-us'.
     * Used only for default creation of font names name.  Must be set
     * before font name menu is created.
     * @param {string} locale Locale to use for the toolbar font names.
     */
    function setLocale(locale: string): void;

    /**
     * Initializes the given font menu button by adding default fonts to the menu.
     * If goog.ui.editor.DefaultToolbar.setLocale was called to specify a locale
     * for which locale-specific default fonts exist, those are added before
     * common fonts.
     * @param {!goog.ui.Select} button Font menu button.
     */
    function addDefaultFonts(button: goog.ui.Select): void;

    /** @desc Font size menu item caption for the 'Small' size. */
    var MSG_FONT_SIZE_SMALL: any /*missing*/;

    /** @desc Font size menu item caption for the 'Normal' size. */
    var MSG_FONT_SIZE_NORMAL: any /*missing*/;

    /** @desc Font size menu item caption for the 'Large' size. */
    var MSG_FONT_SIZE_LARGE: any /*missing*/;

    /** @desc Font size menu item caption for the 'Huge' size. */
    var MSG_FONT_SIZE_HUGE: any /*missing*/;

    /**
     * Initializes the given font size menu button by adding default font sizes to
     * it.
     * @param {!goog.ui.Select} button Font size menu button.
     */
    function addDefaultFontSizes(button: goog.ui.Select): void;

    /** @desc Caption for "Heading" block format option. */
    var MSG_FORMAT_HEADING: any /*missing*/;

    /** @desc Caption for "Subheading" block format option. */
    var MSG_FORMAT_SUBHEADING: any /*missing*/;

    /** @desc Caption for "Minor heading" block format option. */
    var MSG_FORMAT_MINOR_HEADING: any /*missing*/;

    /** @desc Caption for "Normal" block format option. */
    var MSG_FORMAT_NORMAL: any /*missing*/;

    /**
     * Initializes the given "Format block" menu button by adding default format
     * options to the menu.
     * @param {!goog.ui.Select} button "Format block" menu button.
     */
    function addDefaultFormatOptions(button: goog.ui.Select): void;

    /**
     * Creates a {@link goog.ui.Toolbar} containing a default set of editor
     * toolbar buttons, and renders it into the given parent element.
     * @param {!Element} elem Toolbar parent element.
     * @param {boolean=} opt_isRightToLeft Whether the editor chrome is
     *     right-to-left; defaults to the directionality of the toolbar parent
     *     element.
     * @return {!goog.ui.Toolbar} Default editor toolbar, rendered into the given
     *     parent element.
     * @see goog.ui.editor.DefaultToolbar.DEFAULT_BUTTONS
     */
    function makeDefaultToolbar(elem: Element, opt_isRightToLeft?: boolean): goog.ui.Toolbar;

    /**
     * Creates a {@link goog.ui.Toolbar} containing the specified set of
     * toolbar buttons, and renders it into the given parent element.  Each
     * item in the {@code items} array must either be a
     * {@link goog.editor.Command} (to create a built-in button) or a subclass
     * of {@link goog.ui.Control} (to create a custom control).
     * @param {!Array.<string|goog.ui.Control>} items Toolbar items; each must
     *     be a {@link goog.editor.Command} or a {@link goog.ui.Control}.
     * @param {!Element} elem Toolbar parent element.
     * @param {boolean=} opt_isRightToLeft Whether the editor chrome is
     *     right-to-left; defaults to the directionality of the toolbar parent
     *     element.
     * @return {!goog.ui.Toolbar} Editor toolbar, rendered into the given parent
     *     element.
     */
    function makeToolbar(items: any /*string|goog.ui.Control*/[], elem: Element, opt_isRightToLeft?: boolean): goog.ui.Toolbar;

    /**
     * Creates an instance of a subclass of {@link goog.ui.Button} for the given
     * {@link goog.editor.Command}, or null if no built-in button exists for the
     * command.  Note that this function is only intended to create built-in
     * buttons; please don't try to hack it!
     * @param {string} command Editor command ID.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {goog.ui.Button} Toolbar button (null if no built-in button exists
     *     for the command).
     */
    function makeBuiltInToolbarButton(command: string, opt_domHelper?: goog.dom.DomHelper): goog.ui.Button;

    /**
     * A set of built-in buttons to display in the default editor toolbar.
     * @type {!Array.<string>}
     */
    var DEFAULT_BUTTONS: string[];

    /**
     * A set of built-in buttons to display in the default editor toolbar when
     * the editor chrome is right-to-left (BiDi mode only).
     * @type {!Array.<string>}
     */
    var DEFAULT_BUTTONS_RTL: string[];

    /** @desc Format menu tooltip. */
    var MSG_FORMAT_BLOCK_TITLE: any /*missing*/;

    /** @desc Format menu caption. */
    var MSG_FORMAT_BLOCK_CAPTION: any /*missing*/;

    /** @desc Undo button tooltip. */
    var MSG_UNDO_TITLE: any /*missing*/;

    /** @desc Redo button tooltip. */
    var MSG_REDO_TITLE: any /*missing*/;

    /** @desc Font menu tooltip. */
    var MSG_FONT_FACE_TITLE: any /*missing*/;

    /** @desc Font size menu tooltip. */
    var MSG_FONT_SIZE_TITLE: any /*missing*/;

    /** @desc Text foreground color menu tooltip. */
    var MSG_FONT_COLOR_TITLE: any /*missing*/;

    /** @desc Bold button tooltip. */
    var MSG_BOLD_TITLE: any /*missing*/;

    /** @desc Italic button tooltip. */
    var MSG_ITALIC_TITLE: any /*missing*/;

    /** @desc Underline button tooltip. */
    var MSG_UNDERLINE_TITLE: any /*missing*/;

    /** @desc Text background color menu tooltip. */
    var MSG_BACKGROUND_COLOR_TITLE: any /*missing*/;

    /** @desc Link button tooltip. */
    var MSG_LINK_TITLE: any /*missing*/;

    /** @desc Numbered list button tooltip. */
    var MSG_ORDERED_LIST_TITLE: any /*missing*/;

    /** @desc Bullet list button tooltip. */
    var MSG_UNORDERED_LIST_TITLE: any /*missing*/;

    /** @desc Outdent button tooltip. */
    var MSG_OUTDENT_TITLE: any /*missing*/;

    /** @desc Indent button tooltip. */
    var MSG_INDENT_TITLE: any /*missing*/;

    /** @desc Align left button tooltip. */
    var MSG_ALIGN_LEFT_TITLE: any /*missing*/;

    /** @desc Align center button tooltip. */
    var MSG_ALIGN_CENTER_TITLE: any /*missing*/;

    /** @desc Align right button tooltip. */
    var MSG_ALIGN_RIGHT_TITLE: any /*missing*/;

    /** @desc Justify button tooltip. */
    var MSG_JUSTIFY_TITLE: any /*missing*/;

    /** @desc Remove formatting button tooltip. */
    var MSG_REMOVE_FORMAT_TITLE: any /*missing*/;

    /** @desc Insert image button tooltip. */
    var MSG_IMAGE_TITLE: any /*missing*/;

    /** @desc Strike through button tooltip. */
    var MSG_STRIKE_THROUGH_TITLE: any /*missing*/;

    /** @desc Left-to-right button tooltip. */
    var MSG_DIR_LTR_TITLE: any /*missing*/;

    /** @desc Right-to-left button tooltip. */
    var MSG_DIR_RTL_TITLE: any /*missing*/;

    /** @desc Blockquote button tooltip. */
    var MSG_BLOCKQUOTE_TITLE: any /*missing*/;

    /** @desc Edit HTML button tooltip. */
    var MSG_EDIT_HTML_TITLE: any /*missing*/;

    /** @desc Subscript button tooltip. */
    var MSG_SUBSCRIPT: any /*missing*/;

    /** @desc Superscript button tooltip. */
    var MSG_SUPERSCRIPT: any /*missing*/;

    /** @desc Edit HTML button caption. */
    var MSG_EDIT_HTML_CAPTION: any /*missing*/;
}

declare module 'goog.ui.editor' {

    /**
     * @typedef {{command: string, tooltip: ?string,
     *   caption: ?goog.ui.ControlContent, classes: ?string,
     *   factory: ?function(string, string, goog.ui.ControlContent, ?string,
     *       goog.ui.ButtonRenderer, goog.dom.DomHelper):goog.ui.Button,
     *   queryable:?boolean}}
     */
    var ButtonDescriptor: any /*missing*/;

    /**
     * Creates an object that represents a dialog box.
     * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
     * dialog's dom structure.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class AbstractDialog extends goog.events.EventTarget {
        /**
         * Creates an object that represents a dialog box.
         * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
         * dialog's dom structure.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(domHelper: goog.dom.DomHelper);
    
        /**
         * Causes the dialog box to appear, centered on the screen. Lazily creates the
         * dialog if needed.
         */
        show(): void;
    
        /**
         * Hides the dialog, causing AFTER_HIDE to fire.
         */
        hide(): void;
    
        /**
         * @return {boolean} Whether the dialog is open.
         */
        isOpen(): boolean;
    
        /**
         * Runs the handler registered on the OK button event and closes the dialog if
         * that handler succeeds.
         * This is useful in cases such as double-clicking an item in the dialog is
         * equivalent to selecting it and clicking the default button.
         * @protected
         */
        processOkAndClose(): void;
    
        /**
         * The DOM helper for the parent document.
         * @type {goog.dom.DomHelper}
         * @protected
         */
        dom: goog.dom.DomHelper;
    
        /**
         * Creates and returns the goog.ui.Dialog control that is being wrapped
         * by this object.
         * @return {goog.ui.Dialog} Created Dialog control.
         * @protected
         */
        createDialogControl: any /*missing*/;
    
        /**
         * Returns the HTML Button element for the OK button in this dialog.
         * @return {Element} The button element if found, else null.
         * @protected
         */
        getOkButtonElement(): Element;
    
        /**
         * Returns the HTML Button element for the Cancel button in this dialog.
         * @return {Element} The button element if found, else null.
         * @protected
         */
        getCancelButtonElement(): Element;
    
        /**
         * Returns the HTML Button element for the button added to this dialog with
         * the given button id.
         * @param {string} buttonId The id of the button to get.
         * @return {Element} The button element if found, else null.
         * @protected
         */
        getButtonElement(buttonId: string): Element;
    
        /**
         * Creates and returns the event object to be used when dispatching the OK
         * event to listeners, or returns null to prevent the dialog from closing.
         * Subclasses should override this to return their own subclass of
         * goog.events.Event that includes all data a plugin would need from the dialog.
         * @param {goog.events.Event} e The event object dispatched by the wrapped
         *     dialog.
         * @return {goog.events.Event} The event object to be used when dispatching the
         *     OK event to listeners.
         * @protected
         */
        createOkEvent: any /*missing*/;
    
        /**
         * Handles the event dispatched by the wrapped dialog control when the user
         * clicks the OK button. Attempts to create the OK event object and dispatches
         * it if successful.
         * @param {goog.ui.Dialog.Event} e wrapped dialog OK event object.
         * @return {boolean} Whether the default action (closing the dialog) should
         *     still be executed. This will be false if the OK event could not be
         *     created to be dispatched, or if any listener to that event returs false
         *     or calls preventDefault.
         * @protected
         */
        handleOk(e: goog.ui.Dialog.Event): boolean;
    
        /**
         * Handles the event dispatched by the wrapped dialog control when the user
         * clicks the Cancel button. Simply dispatches a CANCEL event.
         * @return {boolean} Returns false if any of the handlers called prefentDefault
         *     on the event or returned false themselves.
         * @protected
         */
        handleCancel(): boolean;
    
        /**
         * Disposes of the dialog. If the dialog is open, it will be hidden and
         * AFTER_HIDE will be dispatched.
         * @override
         * @protected
         */
        disposeInternal(): void;
    }

    /**
     * Property bubble UI element.
     * @param {Element} parent The parent element for this bubble.
     * @param {number} zIndex The z index to draw the bubble at.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class Bubble extends goog.events.EventTarget {
        /**
         * Property bubble UI element.
         * @param {Element} parent The parent element for this bubble.
         * @param {number} zIndex The z index to draw the bubble at.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(parent: Element, zIndex: number);
    
        /**
         * Creates and adds DOM for the bubble UI to the given container.  This default
         * implementation just returns the container itself.
         * @param {!goog.dom.DomHelper} dom DOM helper to use.
         * @param {!Element} container Element to add the new elements to.
         * @return {!Element} The element where bubble content should be added.
         * @protected
         */
        createBubbleDom(dom: goog.dom.DomHelper, container: Element): Element;
    
        /**
         * A logger for goog.ui.editor.Bubble.
         * @type {goog.log.Logger}
         * @protected
         */
        logger: goog.log.Logger;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * @return {Element} The element that where the bubble's contents go.
         */
        getContentElement(): Element;
    
        /**
         * @return {Element} The element that contains the bubble.
         * @protected
         */
        getContainerElement(): Element;
    
        /**
         * @return {goog.events.EventHandler.<T>} The event handler.
         * @protected
         * @this T
         * @template T
         */
        getEventHandler(): goog.events.EventHandler<T>;
    
        /**
         * Sets whether the bubble dismisses itself when the user clicks outside of it.
         * @param {boolean} autoHide Whether to autohide on an external click.
         */
        setAutoHide(autoHide: boolean): void;
    
        /**
         * Returns whether there is already a panel of the given type.
         * @param {string} type Type of panel to check.
         * @return {boolean} Whether there is already a panel of the given type.
         */
        hasPanelOfType(type: string): boolean;
    
        /**
         * Adds a panel to the bubble.
         * @param {string} type The type of bubble panel this is.  Should usually be
         *     the same as the tagName of the targetElement.  This ensures multiple
         *     bubble panels don't appear for the same element.
         * @param {string} title The title of the panel.
         * @param {Element} targetElement The target element of the bubble.
         * @param {function(Element): void} contentFn Function that when called with
         *     a container element, will add relevant panel content to it.
         * @param {boolean=} opt_preferTopPosition Whether to prefer placing the bubble
         *     above the element instead of below it.  Defaults to preferring below.
         *     If any panel prefers the top position, the top position is used.
         * @return {string} The id of the panel.
         */
        addPanel(type: string, title: string, targetElement: Element, contentFn: (_0: Element) => void, opt_preferTopPosition?: boolean): string;
    
        /**
         * Removes the panel with the given id.
         * @param {string} id The id of the panel.
         */
        removePanel(id: string): void;
    
        /**
         * Handles the popup's hide event by removing all panels and dispatching a
         * HIDE event.
         * @protected
         */
        handlePopupHide(): void;
    
        /**
         * Returns the visibility of the bubble.
         * @return {boolean} True if visible false if not.
         */
        isVisible(): boolean;
    
        /**
         * Positions and displays this bubble below its targetElement. Assumes that
         * the bubbleContainer is already contained in the document object it applies
         * to.
         */
        reposition(): void;
    }

    /**
     * Equation editor dialog (based on goog.ui.editor.AbstractDialog).
     * @param {Object} context The context that this dialog runs in.
     * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
     *     dialog's dom structure.
     * @param {string} equation Initial equation.
     * @param {string} helpUrl URL pointing to help documentation.
     * @constructor
     * @extends {goog.ui.editor.AbstractDialog}
     * @final
     */
    class EquationEditorDialog extends goog.ui.editor.AbstractDialog {
        /**
         * Equation editor dialog (based on goog.ui.editor.AbstractDialog).
         * @param {Object} context The context that this dialog runs in.
         * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
         *     dialog's dom structure.
         * @param {string} equation Initial equation.
         * @param {string} helpUrl URL pointing to help documentation.
         * @constructor
         * @extends {goog.ui.editor.AbstractDialog}
         * @final
         */
        constructor(context: Object, domHelper: goog.dom.DomHelper, equation: string, helpUrl: string);
    
        /** @override */
        createDialogControl(): void;
    
        /**
         * @override
         */
        createOkEvent(): void;
    }

    /**
     * OK event object for the equation editor dialog.
     * @param {string} equationHtml html containing the equation to put in the
     *     editable field.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class EquationEditorOkEvent extends goog.events.Event {
        /**
         * OK event object for the equation editor dialog.
         * @param {string} equationHtml html containing the equation to put in the
         *     editable field.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(equationHtml: string);
    
        /**
         * Event type.
         * @type {goog.ui.editor.AbstractDialog.EventType}
         * @override
         */
        type: goog.ui.editor.AbstractDialog.EventType;
    
        /**
         * HTML containing the equation to put in the editable field.
         * @type {string}
         */
        equationHtml: string;
    }

    /**
     * A type of goog.ui.editor.AbstractDialog for editing/creating a link.
     * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
     *     dialog's dom structure.
     * @param {goog.editor.Link} link The target link.
     * @constructor
     * @extends {goog.ui.editor.AbstractDialog}
     * @final
     */
    class LinkDialog extends goog.ui.editor.AbstractDialog {
        /**
         * A type of goog.ui.editor.AbstractDialog for editing/creating a link.
         * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
         *     dialog's dom structure.
         * @param {goog.editor.Link} link The target link.
         * @constructor
         * @extends {goog.ui.editor.AbstractDialog}
         * @final
         */
        constructor(domHelper: goog.dom.DomHelper, link: goog.editor.Link);
    
        /**
         * Sets the warning message to show to users about including email addresses on
         * public web pages.
         * @param {string} emailWarning Warning message to show users about including
         *     email addresses on the web.
         */
        setEmailWarning(emailWarning: string): void;
    
        /**
         * Tells the dialog to show a checkbox where the user can choose to have the
         * link open in a new window.
         * @param {boolean} startChecked Whether to check the checkbox the first
         *     time the dialog is shown. Subesquent times the checkbox will remember its
         *     previous state.
         */
        showOpenLinkInNewWindow(startChecked: boolean): void;
    
        /**
         * Tells the dialog to show a checkbox where the user can choose to add
         * 'rel=nofollow' attribute to the link.
         */
        showRelNoFollow(): void;
    
        /** @override */
        show(): void;
    
        /** @override */
        hide(): void;
    
        /**
         * Tells the dialog whether to show the 'text to display' div.
         * When the target element of the dialog is an image, there is no link text
         * to modify. This function can be used for this kind of situations.
         * @param {boolean} visible Whether to make 'text to display' div visible.
         */
        setTextToDisplayVisible(visible: boolean): void;
    
        /**
         * Tells the plugin whether to stop leaking the page's url via the referrer
         * header when the "test this link" link is clicked.
         * @param {boolean} stop Whether to stop leaking the referrer.
         */
        setStopReferrerLeaks(stop: boolean): void;
    
        /**
         * Tells the dialog whether the autogeneration of text to display is to be
         * enabled.
         * @param {boolean} enable Whether to enable the feature.
         */
        setAutogenFeatureEnabled(enable: boolean): void;
    
        /** @override */
        createDialogControl(): void;
    
        /**
         * Creates and returns the event object to be used when dispatching the OK
         * event to listeners based on which tab is currently selected and the contents
         * of the input fields of that tab.
         * @return {goog.ui.editor.LinkDialog.OkEvent} The event object to be used when
         *     dispatching the OK event to listeners.
         * @protected
         * @override
         */
        createOkEvent(): goog.ui.editor.LinkDialog.OkEvent;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Creates a new Editor-style tab pane.
     * @param {goog.dom.DomHelper} dom The dom helper for the window to create this
     *     tab pane in.
     * @param {string=} opt_caption Optional caption of the tab pane.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class TabPane extends goog.ui.Component {
        /**
         * Creates a new Editor-style tab pane.
         * @param {goog.dom.DomHelper} dom The dom helper for the window to create this
         *     tab pane in.
         * @param {string=} opt_caption Optional caption of the tab pane.
         * @constructor
         * @extends {goog.ui.Component}
         * @final
         */
        constructor(dom: goog.dom.DomHelper, opt_caption?: string);
    
        /**
         * @return {string} The ID of the content element for the current tab.
         */
        getCurrentTabId(): string;
    
        /**
         * Selects the tab with the given id.
         * @param {string} id Id of the tab to select.
         */
        setSelectedTabId(id: string): void;
    
        /**
         * Adds a tab to the tab pane.
         * @param {string} id The id of the tab to add.
         * @param {string} caption The caption of the tab.
         * @param {string} tooltip The tooltip for the tab.
         * @param {string} groupName for the radio button group.
         * @param {Element} content The content element to show when this tab is
         *     selected.
         */
        addTab(id: string, caption: string, tooltip: string, groupName: string, content: Element): void;
    
        /** @override */
        enterDocument(): void;
    }

    /**
     * A class for managing the editor toolbar.  Acts as a bridge between
     * a {@link goog.editor.Field} and a {@link goog.ui.Toolbar}.
     *
     * The {@code toolbar} argument must be an instance of {@link goog.ui.Toolbar}
     * or a subclass.  This class doesn't care how the toolbar was created.  As
     * long as one or more controls hosted  in the toolbar have IDs that match
     * built-in {@link goog.editor.Command}s, they will function as expected.  It is
     * the caller's responsibility to ensure that the toolbar is already rendered
     * or that it decorates an existing element.
     *
     *
     * @param {!goog.editor.Field} field Editable field to be controlled by the
     *     toolbar.
     * @param {!goog.ui.Toolbar} toolbar Toolbar to control the editable field.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class ToolbarController extends goog.events.EventTarget {
        /**
         * A class for managing the editor toolbar.  Acts as a bridge between
         * a {@link goog.editor.Field} and a {@link goog.ui.Toolbar}.
         *
         * The {@code toolbar} argument must be an instance of {@link goog.ui.Toolbar}
         * or a subclass.  This class doesn't care how the toolbar was created.  As
         * long as one or more controls hosted  in the toolbar have IDs that match
         * built-in {@link goog.editor.Command}s, they will function as expected.  It is
         * the caller's responsibility to ensure that the toolbar is already rendered
         * or that it decorates an existing element.
         *
         *
         * @param {!goog.editor.Field} field Editable field to be controlled by the
         *     toolbar.
         * @param {!goog.ui.Toolbar} toolbar Toolbar to control the editable field.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(field: goog.editor.Field, toolbar: goog.ui.Toolbar);
    
        /**
         * Returns the Closure component ID of the control that corresponds to the
         * given {@link goog.editor.Command} constant.
         * Subclasses may override this method if they want to use a custom mapping
         * scheme from commands to controls.
         * @param {string} command Editor command.
         * @return {string} Closure component ID of the corresponding toolbar
         *     control, if any.
         * @protected
         */
        getComponentId(command: string): string;
    
        /**
         * Returns the {@link goog.editor.Command} constant
         * that corresponds to the given Closure component ID.  Subclasses may override
         * this method if they want to use a custom mapping scheme from controls to
         * commands.
         * @param {string} id Closure component ID of a toolbar control.
         * @return {string} Editor command or dialog constant corresponding to the
         *     toolbar control, if any.
         * @protected
         */
        getCommand(id: string): string;
    
        /**
         * Returns the event handler object for the editor toolbar.  Useful for classes
         * that extend {@code goog.ui.editor.ToolbarController}.
         * @return {!goog.events.EventHandler.<T>} The event handler object.
         * @protected
         * @this T
         * @template T
         */
        getHandler(): goog.events.EventHandler<T>;
    
        /**
         * Returns the field instance managed by the toolbar.  Useful for
         * classes that extend {@code goog.ui.editor.ToolbarController}.
         * @return {!goog.editor.Field} The field managed by the toolbar.
         * @protected
         */
        getField(): goog.editor.Field;
    
        /**
         * Returns the toolbar UI component that manages the editor.  Useful for
         * classes that extend {@code goog.ui.editor.ToolbarController}.
         * @return {!goog.ui.Toolbar} The toolbar UI component.
         */
        getToolbar(): goog.ui.Toolbar;
    
        /**
         * @return {boolean} Whether the toolbar is visible.
         */
        isVisible(): boolean;
    
        /**
         * Shows or hides the toolbar.
         * @param {boolean} visible Whether to show or hide the toolbar.
         */
        setVisible(visible: boolean): void;
    
        /**
         * @return {boolean} Whether the toolbar is enabled.
         */
        isEnabled(): boolean;
    
        /**
         * Enables or disables the toolbar.
         * @param {boolean} enabled Whether to enable or disable the toolbar.
         */
        setEnabled(enabled: boolean): void;
    
        /**
         * Programmatically blurs the editor toolbar, un-highlighting the currently
         * highlighted item, and closing the currently open menu (if any).
         */
        blur(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Updates the toolbar in response to editor events.  Specifically, updates
         * button states based on {@code COMMAND_VALUE_CHANGE} events, reflecting the
         * effective formatting of the selection.
         * @param {goog.events.Event} e Editor event to handle.
         * @protected
         */
        updateToolbar(e: goog.events.Event): void;
    
        /**
         * Updates the toolbar to reflect a given state.
         * @param {Object} state Object mapping editor commands to values.
         */
        updateToolbarFromState(state: Object): void;
    
        /**
         * Handles {@code ACTION} events dispatched by toolbar buttons in response to
         * user actions by executing the corresponding field command.
         * @param {goog.events.Event} e Action event to handle.
         * @protected
         */
        handleAction(e: goog.events.Event): void;
    }
}

declare module 'goog.ui.editor.LinkDialog' {

    /**
     * Events specific to the link dialog.
     * @enum {string}
     */
    enum EventType { BEFORE_TEST_LINK } 

    /**
     * Checks if {@code str} contains {@code "nofollow"} as a separate word.
     * @param {string} str String to be tested.  This is usually {@code rel}
     *     attribute of an {@code HTMLAnchorElement} object.
     * @return {boolean} {@code true} if {@code str} contains {@code nofollow}.
     */
    function hasNoFollow(str: string): boolean;

    /**
     * Removes {@code "nofollow"} from {@code rel} if it's present as a separate
     * word.
     * @param {string} rel Input string.  This is usually {@code rel} attribute of
     *     an {@code HTMLAnchorElement} object.
     * @return {string} {@code rel} with any {@code "nofollow"} removed.
     */
    function removeNoFollow(rel: string): string;

    /**
     * OK event object for the link dialog.
     * @param {string} linkText Text the user chose to display for the link.
     * @param {string} linkUrl Url the user chose for the link to point to.
     * @param {boolean} openInNewWindow Whether the link should open in a new window
     *     when clicked.
     * @param {boolean} noFollow Whether the link should have 'rel=nofollow'
     *     attribute.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class OkEvent extends goog.events.Event {
        /**
         * OK event object for the link dialog.
         * @param {string} linkText Text the user chose to display for the link.
         * @param {string} linkUrl Url the user chose for the link to point to.
         * @param {boolean} openInNewWindow Whether the link should open in a new window
         *     when clicked.
         * @param {boolean} noFollow Whether the link should have 'rel=nofollow'
         *     attribute.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(linkText: string, linkUrl: string, openInNewWindow: boolean, noFollow: boolean);
    }

    /**
     * Event fired before testing a link by opening it in another window.
     * Calling preventDefault will stop the link from being opened.
     * @param {string} url Url of the link being tested.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class BeforeTestLinkEvent extends goog.events.Event {
        /**
         * Event fired before testing a link by opening it in another window.
         * Calling preventDefault will stop the link from being opened.
         * @param {string} url Url of the link being tested.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(url: string);
    }
}

declare module 'goog.ui.editor.messages' {

    /** @desc Link button / bubble caption. */
    var MSG_LINK_CAPTION: any /*missing*/;

    /** @desc Title for the dialog that edits a link. */
    var MSG_EDIT_LINK: any /*missing*/;

    /** @desc Prompt the user for the text of the link they've written. */
    var MSG_TEXT_TO_DISPLAY: any /*missing*/;

    /** @desc Prompt the user for the URL of the link they've created. */
    var MSG_LINK_TO: any /*missing*/;

    /** @desc Prompt the user to type a web address for their link. */
    var MSG_ON_THE_WEB: any /*missing*/;

    /** @desc More details on what linking to a web address involves.. */
    var MSG_ON_THE_WEB_TIP: any /*missing*/;

    /**
     * @desc Text for a button that allows the user to test the link that
     *     they created.
     */
    var MSG_TEST_THIS_LINK: any /*missing*/;

    /**
     * @desc Explanation for how to create a link with the link-editing dialog.
     */
    var MSG_TR_LINK_EXPLANATION: any /*missing*/;

    /** @desc Prompt for the URL of a link that the user is creating. */
    var MSG_WHAT_URL: any /*missing*/;

    /**
     * @desc Prompt for an email address, so that the user can create a link
     *    that sends an email.
     */
    var MSG_EMAIL_ADDRESS: any /*missing*/;

    /**
     * @desc Explanation of the prompt for an email address in a link.
     */
    var MSG_EMAIL_ADDRESS_TIP: any /*missing*/;

    /** @desc Error message when the user enters an invalid email address. */
    var MSG_INVALID_EMAIL: any /*missing*/;

    /**
     * @desc When the user creates a mailto link, asks them what email
     *     address clicking on this link will send mail to.
     */
    var MSG_WHAT_EMAIL: any /*missing*/;

    /**
     * @desc Warning about the dangers of creating links with email
     *     addresses in them.
     */
    var MSG_EMAIL_EXPLANATION: any /*missing*/;

    /**
     * @desc Label for the checkbox that allows the user to specify what when this
     *     link is clicked, it should be opened in a new window.
     */
    var MSG_OPEN_IN_NEW_WINDOW: any /*missing*/;

    /** @desc Image bubble caption. */
    var MSG_IMAGE_CAPTION: any /*missing*/;
}

declare module 'goog.ui.editor.ToolbarFactory' {

    /**
     * Takes a font spec (e.g. "Arial, Helvetica, sans-serif") and returns the
     * primary font name, normalized to lowercase (e.g. "arial").
     * @param {string} fontSpec Font specification.
     * @return {string} The primary font name, in lowercase.
     */
    function getPrimaryFont(fontSpec: string): string;

    /**
     * Bulk-adds fonts to the given font menu button.  The argument must be an
     * array of font descriptor objects, each of which must have the following
     * attributes:
     * <ul>
     *   <li>{@code caption} - Caption to show in the font menu (e.g. 'Tahoma')
     *   <li>{@code value} - Value for the corresponding 'font-family' CSS style
     *       (e.g. 'Tahoma, Arial, sans-serif')
     * </ul>
     * @param {!goog.ui.Select} button Font menu button.
     * @param {!Array.<{caption: string, value: string}>} fonts Array of
     *     font descriptors.
     */
    function addFonts(button: goog.ui.Select, fonts: { caption: string, value: string }[]): void;

    /**
     * Adds a menu item to the given font menu button.  The first font listed in
     * the {@code value} argument is considered the font ID, so adding two items
     * whose CSS style starts with the same font may lead to unpredictable results.
     * @param {!goog.ui.Select} button Font menu button.
     * @param {string} caption Caption to show for the font menu.
     * @param {string} value Value for the corresponding 'font-family' CSS style.
     */
    function addFont(button: goog.ui.Select, caption: string, value: string): void;

    /**
     * Bulk-adds font sizes to the given font size menu button.  The argument must
     * be an array of font size descriptor objects, each of which must have the
     * following attributes:
     * <ul>
     *   <li>{@code caption} - Caption to show in the font size menu (e.g. 'Huge')
     *   <li>{@code value} - Value for the corresponding HTML font size (e.g. 6)
     * </ul>
     * @param {!goog.ui.Select} button Font size menu button.
     * @param {!Array.<{caption: string, value:number}>} sizes Array of font
     *     size descriptors.
     */
    function addFontSizes(button: goog.ui.Select, sizes: { caption: string, value: number }[]): void;

    /**
     * Adds a menu item to the given font size menu button.  The {@code value}
     * argument must be a legacy HTML font size in the 0-7 range.
     * @param {!goog.ui.Select} button Font size menu button.
     * @param {string} caption Caption to show in the font size menu.
     * @param {number} value Value for the corresponding HTML font size.
     */
    function addFontSize(button: goog.ui.Select, caption: string, value: number): void;

    /**
     * Converts a legacy font size specification into an equivalent pixel size.
     * For example, {@code &lt;font size="6"&gt;} is {@code font-size: 32px;}, etc.
     * @param {number} fontSize Legacy font size spec in the 0-7 range.
     * @return {number} Equivalent pixel size.
     */
    function getPxFromLegacySize(fontSize: number): number;

    /**
     * Converts a pixel font size specification into an equivalent legacy size.
     * For example, {@code font-size: 32px;} is {@code &lt;font size="6"&gt;}, etc.
     * If the given pixel size doesn't exactly match one of the legacy sizes, -1 is
     * returned.
     * @param {number} px Pixel font size.
     * @return {number} Equivalent legacy size spec in the 0-7 range, or -1 if none
     *     exists.
     */
    function getLegacySizeFromPx(px: number): number;

    /**
     * Bulk-adds format options to the given "Format block" menu button.  The
     * argument must be an array of format option descriptor objects, each of
     * which must have the following attributes:
     * <ul>
     *   <li>{@code caption} - Caption to show in the menu (e.g. 'Minor heading')
     *   <li>{@code command} - Corresponding {@link goog.dom.TagName} (e.g.
     *       'H4')
     * </ul>
     * @param {!goog.ui.Select} button "Format block" menu button.
     * @param {!Array.<{caption: string, command: goog.dom.TagName}>} formats Array
     *     of format option descriptors.
     */
    function addFormatOptions(button: goog.ui.Select, formats: { caption: string, command: goog.dom.TagName }[]): void;

    /**
     * Adds a menu item to the given "Format block" menu button.
     * @param {!goog.ui.Select} button "Format block" menu button.
     * @param {string} caption Caption to show in the menu.
     * @param {goog.dom.TagName} tag Corresponding block format tag.
     */
    function addFormatOption(button: goog.ui.Select, caption: string, tag: goog.dom.TagName): void;

    /**
     * Creates a {@link goog.ui.Toolbar} containing the specified set of
     * toolbar buttons, and renders it into the given parent element.  Each
     * item in the {@code items} array must a {@link goog.ui.Control}.
     * @param {!Array.<goog.ui.Control>} items Toolbar items; each must
     *     be a {@link goog.ui.Control}.
     * @param {!Element} elem Toolbar parent element.
     * @param {boolean=} opt_isRightToLeft Whether the editor chrome is
     *     right-to-left; defaults to the directionality of the toolbar parent
     *     element.
     * @return {!goog.ui.Toolbar} Editor toolbar, rendered into the given parent
     *     element.
     */
    function makeToolbar(items: goog.ui.Control[], elem: Element, opt_isRightToLeft?: boolean): goog.ui.Toolbar;

    /**
     * Creates a toolbar button with the given ID, tooltip, and caption.  Applies
     * any custom CSS class names to the button's caption element.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in buttons, anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption.
     * @param {string=} opt_classNames CSS class name(s) to apply to the caption
     *     element.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Button renderer; defaults to
     *     {@link goog.ui.ToolbarButtonRenderer} if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.Button} A toolbar button.
     */
    function makeButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.Button;

    /**
     * Creates a toggle button with the given ID, tooltip, and caption. Applies
     * any custom CSS class names to the button's caption element. The button
     * returned has checkbox-like toggle semantics.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in buttons, anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption.
     * @param {string=} opt_classNames CSS class name(s) to apply to the caption
     *     element.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Button renderer; defaults to
     *     {@link goog.ui.ToolbarButtonRenderer} if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.Button} A toggle button.
     */
    function makeToggleButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.Button;

    /**
     * Creates a menu button with the given ID, tooltip, and caption. Applies
     * any custom CSS class names to the button's caption element.  The button
     * returned doesn't have an actual menu attached; use {@link
     * goog.ui.MenuButton#setMenu} to attach a {@link goog.ui.Menu} to the
     * button.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in buttons, anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption.
     * @param {string=} opt_classNames CSS class name(s) to apply to the caption
     *     element.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Button renderer; defaults to
     *     {@link goog.ui.ToolbarMenuButtonRenderer} if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.MenuButton} A menu button.
     */
    function makeMenuButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.MenuButton;

    /**
     * Creates a select button with the given ID, tooltip, and caption. Applies
     * any custom CSS class names to the button's root element.  The button
     * returned doesn't have an actual menu attached; use {@link
     * goog.ui.Select#setMenu} to attach a {@link goog.ui.Menu} containing
     * {@link goog.ui.Option}s to the select button.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in buttons, anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption; used as the
     *     default caption when nothing is selected.
     * @param {string=} opt_classNames CSS class name(s) to apply to the button's
     *     root element.
     * @param {goog.ui.MenuButtonRenderer=} opt_renderer Button renderer;
     *     defaults to {@link goog.ui.ToolbarMenuButtonRenderer} if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.Select} A select button.
     */
    function makeSelectButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.MenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.Select;

    /**
     * Creates a color menu button with the given ID, tooltip, and caption.
     * Applies any custom CSS class names to the button's caption element.  The
     * button is created with a default color menu containing standard color
     * palettes.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in toolbar buttons, but can be anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption.
     * @param {string=} opt_classNames CSS class name(s) to apply to the caption
     *     element.
     * @param {goog.ui.ColorMenuButtonRenderer=} opt_renderer Button renderer;
     *     defaults to {@link goog.ui.ToolbarColorMenuButtonRenderer}
     *     if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.ColorMenuButton} A color menu button.
     */
    function makeColorMenuButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.ColorMenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.ColorMenuButton;
}

