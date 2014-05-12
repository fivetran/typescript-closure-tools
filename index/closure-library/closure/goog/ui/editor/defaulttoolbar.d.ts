/// <reference path="../../../../globals.d.ts" />
/// <reference path="../select.d.ts" />
/// <reference path="../toolbar.d.ts" />
/// <reference path="../control.d.ts" />
/// <reference path="../../dom/dom.d.ts" />
/// <reference path="../button.d.ts" />
/// <reference path="../controlcontent.d.ts" />
/// <reference path="../buttonrenderer.d.ts" />

declare module goog.ui.editor.DefaultToolbar {

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

declare module goog.ui.editor {

    /**
     * @typedef {{command: string, tooltip: ?string,
     *   caption: ?goog.ui.ControlContent, classes: ?string,
     *   factory: ?function(string, string, goog.ui.ControlContent, ?string,
     *       goog.ui.ButtonRenderer, goog.dom.DomHelper):goog.ui.Button,
     *   queryable:?boolean}}
     */
    interface ButtonDescriptor {
        command: string;
        tooltip: string;
        caption: goog.ui.ControlContent;
        classes: string;
        factory: (_0: string, _1: string, _2: goog.ui.ControlContent, _3: string, _4: goog.ui.ButtonRenderer, _5: goog.dom.DomHelper) => goog.ui.Button;
        queryable: boolean
    }
}
