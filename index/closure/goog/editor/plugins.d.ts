// Generated Wed Apr 30 16:30:07 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/a11y/aria.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/async.d.ts" />
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
/// <reference path="../../goog/ui/editor.d.ts" />
/// <reference path="../../goog/ui/emoji.d.ts" />
/// <reference path="../../goog/ui/equation.d.ts" />
/// <reference path="../../goog/uri.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />
/// <reference path="../../goog/window.d.ts" />

declare module 'goog.editor.plugins.AbstractBubblePlugin' {

    /**
     * The constant string used to separate option links.
     * @type {string}
     * @protected
     */
    var DASH_NBSP_STRING: string;

    /**
     * Sets the global bubble factory function.
     * @param {function(!Element, number): !goog.ui.editor.Bubble}
     *     bubbleFactory Function that creates a bubble for the given bubble parent
     *     element and z index.
     */
    function setBubbleFactory(bubbleFactory: (_0: Element, _1: number) => goog.ui.editor.Bubble): void;
}

declare module 'goog.editor.plugins.AbstractDialogPlugin' {

    /**
     * Event type constants for events the dialog plugins fire.
     * @enum {string}
     */
    enum EventType { OPENED, CLOSED } 
}

declare module 'goog.editor.plugins.BasicTextFormatter' {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    enum COMMAND { LINK, FORMAT_BLOCK, INDENT, OUTDENT, STRIKE_THROUGH, HORIZONTAL_RULE, SUBSCRIPT, SUPERSCRIPT, UNDERLINE, BOLD, ITALIC, FONT_SIZE, FONT_FACE, FONT_COLOR, BACKGROUND_COLOR, ORDERED_LIST, UNORDERED_LIST, JUSTIFY_CENTER, JUSTIFY_FULL, JUSTIFY_RIGHT, JUSTIFY_LEFT } 
}

declare module 'goog.editor.plugins.Blockquote' {

    /**
     * Command implemented by this plugin.
     * @type {string}
     */
    var SPLIT_COMMAND: string;

    /**
     * Class ID used to identify this plugin.
     * @type {string}
     */
    var CLASS_ID: string;

    /**
     * Checks if a node is a blockquote node.  If isAlreadySetup is set, it also
     * makes sure the node has the blockquote classname applied.  Otherwise, it
     * ensures that the blockquote does not already have the classname applied.
     * @param {Node} node DOM node to check.
     * @param {boolean} isAlreadySetup True to enforce that the classname must be
     *                  set in order for it to count as a blockquote, false to
     *                  enforce that the classname must not be set in order for
     *                  it to count as a blockquote.
     * @param {boolean} requiresClassNameToSplit Whether only blockquotes with the
     *     class name should be split.
     * @param {string} className The official blockquote class name.
     * @return {boolean} Whether node is a blockquote and if isAlreadySetup is
     *    true, then whether this is a setup blockquote.
     * @deprecated Use {@link #isSplittableBlockquote},
     *     {@link #isSetupBlockquote}, or {@link #isUnsetupBlockquote} instead
     *     since this has confusing behavior.
     */
    function isBlockquote(node: Node, isAlreadySetup: boolean, requiresClassNameToSplit: boolean, className: string): boolean;
}

declare module 'goog.editor.plugins.Emoticons' {

    /** The emoticon command. */
    var COMMAND: any /*missing*/;
}

declare module 'goog.editor.plugins.EnterHandler' {

    /**
     * Determines whether the lowest containing block node is a blockquote.
     * @param {Node} n The node.
     * @return {boolean} Whether the deepest block ancestor of n is a blockquote.
     */
    function isDirectlyInBlockquote(n: Node): boolean;

    /**
     * Whether this is a node that contains a single BR tag and non-nbsp
     * whitespace.
     * @param {Node} node Node to check.
     * @return {boolean} Whether this is an element that only contains a BR.
     * @protected
     */
    function isBrElem(node: Node): boolean;
}

declare module 'goog.editor.plugins.FirstStrong' {

    /**
     * The name of the attribute which records the input text.
     *
     * @type {string}
     * @const
     */
    var INPUT_ATTRIBUTE: string;
}

declare module 'goog.editor.plugins.HeaderFormatter' {

    /**
     * Commands that can be passed as the optional argument to execCommand.
     * @enum {string}
     */
    enum HEADER_COMMAND { H1, H2, H3, H4 } 
}

declare module 'goog.editor.plugins.RemoveFormatting' {

    /**
     * The editor command this plugin in handling.
     * @type {string}
     */
    var REMOVE_FORMATTING_COMMAND: string;
}

declare module 'goog.editor.plugins.TableEditor' {

    /**
     * Commands supported by goog.editor.plugins.TableEditor.
     * @enum {string}
     */
    enum COMMAND { TABLE, INSERT_ROW_AFTER, INSERT_ROW_BEFORE, INSERT_COLUMN_AFTER, INSERT_COLUMN_BEFORE, REMOVE_ROWS, REMOVE_COLUMNS, SPLIT_CELL, MERGE_CELLS, REMOVE_TABLE } 
}

declare module 'goog.editor.plugins.UndoRedo' {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    enum COMMAND { UNDO, REDO } 
}

declare module 'goog.editor.plugins.UndoRedoManager' {

    /**
     * Event types for the events dispatched by undo-redo manager.
     * @enum {string}
     */
    enum EventType { STATE_CHANGE, STATE_ADDED, BEFORE_UNDO, BEFORE_REDO } 
}

declare module 'goog.editor.plugins.UndoRedoState' {

    /**
     * Event type for events indicating that this state has completed an undo or
     * redo operation.
     */
    var ACTION_COMPLETED: any /*missing*/;
}

declare module 'goog.editor.plugins' {

    /**
     * Base class for bubble plugins. This is used for to connect user behavior
     * in the editor to a goog.ui.editor.Bubble UI element that allows
     * the user to modify the properties of an element on their page (e.g. the alt
     * text of an image tag).
     *
     * Subclasses should override the abstract method getBubbleTargetFromSelection()
     * with code to determine if the current selection should activate the bubble
     * type. The other abstract method createBubbleContents() should be overriden
     * with code to create the inside markup of the bubble.  The base class creates
     * the rest of the bubble.
     *
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    class AbstractBubblePlugin extends goog.editor.Plugin {
        /**
         * Base class for bubble plugins. This is used for to connect user behavior
         * in the editor to a goog.ui.editor.Bubble UI element that allows
         * the user to modify the properties of an element on their page (e.g. the alt
         * text of an image tag).
         *
         * Subclasses should override the abstract method getBubbleTargetFromSelection()
         * with code to determine if the current selection should activate the bubble
         * type. The other abstract method createBubbleContents() should be overriden
         * with code to create the inside markup of the bubble.  The base class creates
         * the rest of the bubble.
         *
         * @constructor
         * @extends {goog.editor.Plugin}
         */
        constructor();
    
        /**
         * Sets the instance bubble factory function.  If set to a non-null value, this
         * function will be used to create a bubble instead of the global factory
         * function.
         * @param {?function(!Element, number): !goog.ui.editor.Bubble} bubbleFactory
         *     Function that creates a bubble for the given bubble parent element and z
         *     index.  Null to reset the factory function.
         */
        setBubbleFactory(bubbleFactory: (_0: Element, _1: number) => goog.ui.editor.Bubble): void;
    
        /**
         * Sets whether the bubble should support tabbing through the link elements.
         * @param {boolean} keyboardNavigationEnabled Whether the bubble should support
         *     tabbing through the link elements.
         */
        enableKeyboardNavigation(keyboardNavigationEnabled: boolean): void;
    
        /**
         * Sets the bubble parent.
         * @param {Element} bubbleParent An element where the bubble will be
         *     anchored. If null, we will use the application document. This
         *     is useful when you have an editor embedded in a scrolling div.
         */
        setBubbleParent(bubbleParent: Element): void;
    
        /**
         * @return {goog.dom.DomHelper} The dom helper for the bubble window.
         */
        getBubbleDom(): goog.dom.DomHelper;
    
        /** @override */
        getTrogClassId: any /*missing*/;
    
        /**
         * Returns the element whose properties the bubble manipulates.
         * @return {Element} The target element.
         */
        getTargetElement(): Element;
    
        /** @override */
        handleKeyUp(): void;
    
        /**
         * Pops up a property bubble for the given selection if appropriate and closes
         * open property bubbles if no longer needed.  This should not be overridden.
         * @override
         */
        handleSelectionChange(): void;
    
        /**
         * Pops up a property bubble for the given selection if appropriate and closes
         * open property bubbles if no longer needed.
         * @param {Element?} selectedElement The selected element.
         * @return {boolean} Always false, allowing every bubble plugin to handle the
         *     event.
         * @protected
         */
        handleSelectionChangeInternal(selectedElement: Element): boolean;
    
        /**
         * Should be overriden by subclasses to return the bubble target element or
         * null if an element of their required type isn't found.
         * @param {Element} selectedElement The target of the selection change event or
         *     the parent container of the current entire selection.
         * @return {Element?} The HTML bubble target element or null if no element of
         *     the required type is not found.
         */
        getBubbleTargetFromSelection: any /*missing*/;
    
        /** @override */
        disable(): void;
    
        /**
         * Creates and shows the property bubble.
         * @param {Element} targetElement The target element of the bubble.
         */
        createBubble(targetElement: Element): void;
    
        /**
         * @return {string} The type of bubble shown by this plugin.  Usually the tag
         *     name of the element this bubble targets.
         * @protected
         */
        getBubbleType(): string;
    
        /**
         * @return {string} The title for bubble shown by this plugin.  Defaults to no
         *     title.  Should be overridden by subclasses.
         * @protected
         */
        getBubbleTitle(): string;
    
        /**
         * @return {boolean} Whether the bubble should prefer placement above the
         *     target element.
         * @protected
         */
        shouldPreferBubbleAboveElement: any /*missing*/;
    
        /**
         * Should be overriden by subclasses to add the type specific contents to the
         *     bubble.
         * @param {Element} bubbleContainer The container element of the bubble to
         *     which the contents should be added.
         * @protected
         */
        createBubbleContents: any /*missing*/;
    
        /**
         * Register the handler for the target's CLICK event.
         * @param {Element} target The event source element.
         * @param {Function} handler The event handler.
         * @protected
         * @deprecated Use goog.editor.plugins.AbstractBubblePlugin.
         *     registerActionHandler to register click and enter events.
         */
        registerClickHandler(target: Element, handler: Function): void;
    
        /**
         * Register the handler for the target's CLICK and ENTER key events.
         * @param {Element} target The event source element.
         * @param {Function} handler The event handler.
         * @protected
         */
        registerActionHandler(target: Element, handler: Function): void;
    
        /**
         * Closes the bubble.
         */
        closeBubble(): void;
    
        /**
         * Called after the bubble is shown. The default implementation does nothing.
         * Override it to provide your own one.
         * @protected
         */
        onShow: any /*missing*/;
    
        /**
         * Called when the bubble is closed or hidden. The default implementation does
         * nothing.
         * @protected
         */
        cleanOnBubbleClose: any /*missing*/;
    
        /**
         * In case the keyboard navigation is enabled, this will focus to the first link
         * element in the bubble when TAB is clicked. The user could still go through
         * the rest of tabbable UI elements using shift + TAB.
         * @override
         */
        handleKeyDown(): void;
    
        /**
         * @return {boolean} Whether the bubble is visible.
         */
        isVisible(): boolean;
    
        /**
         * Reposition the property bubble.
         */
        reposition(): void;
    
        /**
         * Helper method that creates option links (such as edit, test, remove)
         * @param {string} id String id for the span id.
         * @return {Element} The option link element.
         * @protected
         */
        createLinkOption(id: string): Element;
    
        /**
         * Helper method that creates a link with text set to linkText and optionaly
         * wires up a listener for the CLICK event or the link.
         * @param {string} linkId The id of the link.
         * @param {string} linkText Text of the link.
         * @param {Function=} opt_onClick Optional function to call when the link is
         *     clicked.
         * @param {Element=} opt_container If specified, location to insert link. If no
         *     container is specified, the old link is removed and replaced.
         * @return {Element} The link element.
         * @protected
         */
        createLink(linkId: string, linkText: string, opt_onClick?: Function, opt_container?: Element): Element;
    
        /**
         * Helper method to create a link to insert into the bubble.
         * @param {string} linkId The id of the link.
         * @param {string} linkText Text of the link.
         * @param {boolean} isAnchor Set to true to create an actual anchor tag
         *     instead of a span.  Actual links are right clickable (e.g. to open in
         *     a new window) and also update window status on hover.
         * @param {Element=} opt_container If specified, location to insert link. If no
         *     container is specified, the old link is removed and replaced.
         * @return {Element} The link element.
         * @protected
         */
        createLinkHelper(linkId: string, linkText: string, isAnchor: boolean, opt_container?: Element): Element;
    
        /**
         * Inserts a link in the given container if it is specified or removes
         * the old link with this id and replaces it with the new link
         * @param {Element} link Html element to insert.
         * @param {string} linkId Id of the link.
         * @param {Element=} opt_container If specified, location to insert link.
         * @protected
         */
        setupLink(link: Element, linkId: string, opt_container?: Element): void;
    }

    /**
     * An abstract superclass for a Trogedit plugin that creates exactly one
     * dialog. By default dialogs are not reused -- each time execCommand is called,
     * a new instance of the dialog object is created (and the old one disposed of).
     * To enable reusing of the dialog object, subclasses should call
     * setReuseDialog() after calling the superclass constructor.
     * @param {string} command The command that this plugin handles.
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    class AbstractDialogPlugin extends goog.editor.Plugin {
        /**
         * An abstract superclass for a Trogedit plugin that creates exactly one
         * dialog. By default dialogs are not reused -- each time execCommand is called,
         * a new instance of the dialog object is created (and the old one disposed of).
         * To enable reusing of the dialog object, subclasses should call
         * setReuseDialog() after calling the superclass constructor.
         * @param {string} command The command that this plugin handles.
         * @constructor
         * @extends {goog.editor.Plugin}
         */
        constructor(command: string);
    
        /** @override */
        isSupportedCommand(): void;
    
        /**
         * Handles execCommand. Dialog plugins don't make any changes when they open a
         * dialog, just when the dialog closes (because only modal dialogs are
         * supported). Hence this method does not dispatch the change events that the
         * superclass method does.
         * @param {string} command The command to execute.
         * @param {...*} var_args Any additional parameters needed to
         *     execute the command.
         * @return {*} The result of the execCommand, if any.
         * @override
         */
        execCommand(command: string, ...var_args: any[]): any;
    
        /**
         * Creates a new instance of this plugin's dialog. Must be overridden by
         * subclasses.
         * @param {!goog.dom.DomHelper} dialogDomHelper The dom helper to be used to
         *     create the dialog.
         * @param {*=} opt_arg The dialog specific argument. Concrete subclasses should
         *     declare a specific type.
         * @return {goog.ui.editor.AbstractDialog} The newly created dialog.
         * @protected
         */
        createDialog: any /*missing*/;
    
        /**
         * Returns the current dialog that was created and opened by this plugin.
         * @return {goog.ui.editor.AbstractDialog} The current dialog that was created
         *     and opened by this plugin.
         * @protected
         */
        getDialog(): goog.ui.editor.AbstractDialog;
    
        /**
         * Sets whether this plugin should reuse the same instance of the dialog each
         * time execCommand is called or create a new one. This is intended for use by
         * subclasses only, hence protected.
         * @param {boolean} reuse Whether to reuse the dialog.
         * @protected
         */
        setReuseDialog(reuse: boolean): void;
    
        /**
         * Handles execCommand by opening the dialog. Dispatches
         * {@link goog.editor.plugins.AbstractDialogPlugin.EventType.OPENED} after the
         * dialog is shown.
         * @param {string} command The command to execute.
         * @param {*=} opt_arg The dialog specific argument. Should be the same as
         *     {@link createDialog}.
         * @return {*} Always returns true, indicating the dialog was shown.
         * @protected
         * @override
         */
        execCommandInternal(command: string, opt_arg?: any): any;
    
        /**
         * Cleans up after the dialog has closed, including restoring the selection to
         * what it was before the dialog was opened. If a subclass modifies the editable
         * field's content such that the original selection is no longer valid (usually
         * the case when the user clicks OK, and sometimes also on Cancel), it is that
         * subclass' responsibility to place the selection in the desired place during
         * the OK or Cancel (or other) handler. In that case, this method will leave the
         * selection in place.
         * @param {goog.events.Event} e The AFTER_HIDE event object.
         * @protected
         */
        handleAfterHide(e: goog.events.Event): void;
    
        /**
         * Restores the selection in the editable field to what it was before the dialog
         * was opened. This is not guaranteed to work if the contents of the field
         * have changed.
         * @protected
         */
        restoreOriginalSelection(): void;
    
        /**
         * Cleans up the structure used to save the original selection before the dialog
         * was opened. Should be used by subclasses that don't restore the original
         * selection via restoreOriginalSelection.
         * @protected
         */
        disposeOriginalSelection(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Plugin to handle tab keys. Specific tab behavior defined by subclasses.
     *
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    class AbstractTabHandler extends goog.editor.Plugin {
        /**
         * Plugin to handle tab keys. Specific tab behavior defined by subclasses.
         *
         * @constructor
         * @extends {goog.editor.Plugin}
         */
        constructor();
    
        /** @override */
        getTrogClassId: any /*missing*/;
    
        /** @override */
        handleKeyboardShortcut(): void;
    
        /**
         * Handle a tab key press.
         * @param {goog.events.Event} e The key event.
         * @return {boolean} Whether this event was handled by this plugin.
         * @protected
         */
        handleTabKey: any /*missing*/;
    }

    /**
     * Functions to style text (e.g. underline, make bold, etc.)
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    class BasicTextFormatter extends goog.editor.Plugin {
        /**
         * Functions to style text (e.g. underline, make bold, etc.)
         * @constructor
         * @extends {goog.editor.Plugin}
         */
        constructor();
    
        /** @override */
        getTrogClassId(): void;
    
        /**
         * Logging object.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
    
        /**
         * Whether the string corresponds to a command this plugin handles.
         * @param {string} command Command string to check.
         * @return {boolean} Whether the string corresponds to a command
         *     this plugin handles.
         * @override
         */
        isSupportedCommand(command: string): boolean;
    
        /**
         * Execute a user-initiated command.
         * @param {string} command Command to execute.
         * @param {...*} var_args For color commands, this
         *     should be the hex color (with the #). For FORMAT_BLOCK, this should be
         *     the goog.editor.plugins.BasicTextFormatter.BLOCK_COMMAND.
         *     It will be unused for other commands.
         * @return {Object|undefined} The result of the command.
         * @override
         */
        execCommandInternal(command: string, ...var_args: any[]): any /*Object|any (undefined)*/;
    
        /**
         * Gets the command value.
         * @param {string} command The command value to get.
         * @return {string|boolean|null} The current value of the command in the given
         *     selection.  NOTE: This return type list is not documented in MSDN or MDC
         *     and has been constructed from experience.  Please update it
         *     if necessary.
         * @override
         */
        queryCommandValue(command: string): any /*string|boolean|any (null)*/;
    
        /**
         * @override
         */
        prepareContentsHtml(): void;
    
        /**
         * @override
         */
        cleanContentsDom(): void;
    
        /**
         * @override
         */
        cleanContentsHtml(): void;
    
        /**
         * @override
         */
        handleKeyboardShortcut(): void;
    }

    /**
     * Plugin to handle splitting block quotes.  This plugin does nothing on its
     * own and should be used in conjunction with EnterHandler or one of its
     * subclasses.
     * @param {boolean} requiresClassNameToSplit Whether to split only blockquotes
     *     that have the given classname.
     * @param {string=} opt_className The classname to apply to generated
     *     blockquotes.  Defaults to 'tr_bq'.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class Blockquote extends goog.editor.Plugin {
        /**
         * Plugin to handle splitting block quotes.  This plugin does nothing on its
         * own and should be used in conjunction with EnterHandler or one of its
         * subclasses.
         * @param {boolean} requiresClassNameToSplit Whether to split only blockquotes
         *     that have the given classname.
         * @param {string=} opt_className The classname to apply to generated
         *     blockquotes.  Defaults to 'tr_bq'.
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor(requiresClassNameToSplit: boolean, opt_className?: string);
    
        /**
         * Logging object.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
    
        /** @override */
        getTrogClassId(): void;
    
        /**
         * Since our exec command is always called from elsewhere, we make it silent.
         * @override
         */
        isSilentCommand: any /*missing*/;
    
        /**
         * Checks if a node is a blockquote which can be split. A splittable blockquote
         * meets the following criteria:
         * <ol>
         *   <li>Node is a blockquote element</li>
         *   <li>Node has the blockquote classname if the classname is required to
         *       split</li>
         * </ol>
         *
         * @param {Node} node DOM node in question.
         * @return {boolean} Whether the node is a splittable blockquote.
         */
        isSplittableBlockquote(node: Node): boolean;
    
        /**
         * Checks if a node is a blockquote element which has been setup.
         * @param {Node} node DOM node to check.
         * @return {boolean} Whether the node is a blockquote with the required class
         *     name applied.
         */
        isSetupBlockquote(node: Node): boolean;
    
        /**
         * Checks if a node is a blockquote element which has not been setup yet.
         * @param {Node} node DOM node to check.
         * @return {boolean} Whether the node is a blockquote without the required
         *     class name applied.
         */
        isUnsetupBlockquote(node: Node): boolean;
    
        /**
         * Gets the class name required for setup blockquotes.
         * @return {string} The blockquote class name.
         */
        getBlockquoteClassName(): string;
    
        /** @override */
        isSupportedCommand(): void;
    
        /**
         * Splits a quoted region if any.  To be called on a key press event.  When this
         * function returns true, the event that caused it to be called should be
         * canceled.
         * @param {string} command The command to execute.
         * @param {...*} var_args Single additional argument representing the
         *     current cursor position.  In IE, it is a single node.  In any other
         *     browser, it is an object with a {@code node} key and an {@code offset}
         *     key.
         * @return {boolean|undefined} Boolean true when the quoted region has been
         *     split, false or undefined otherwise.
         * @override
         */
        execCommandInternal(command: string, ...var_args: any[]): any /*boolean|any (undefined)*/;
    }

    /**
     * Plugin for generating emoticons.
     *
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class Emoticons extends goog.editor.Plugin {
        /**
         * Plugin for generating emoticons.
         *
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor();
    
        /** @override */
        getTrogClassId: any /*missing*/;
    
        /** @override */
        isSupportedCommand(): void;
    
        /**
         * Inserts an emoticon into the editor at the cursor location. Places the
         * cursor to the right of the inserted emoticon.
         * @param {string} command Command to execute.
         * @param {*=} opt_arg Emoji to insert.
         * @return {!Object|undefined} The result of the command.
         * @override
         */
        execCommandInternal(command: string, opt_arg?: any): any /*Object|any (undefined)*/;
    }

    /**
     * Plugin to handle enter keys. This does all the crazy to normalize (as much as
     * is reasonable) what happens when you hit enter. This also handles the
     * special casing of hitting enter in a blockquote.
     *
     * In IE, Webkit, and Opera, the resulting HTML uses one DIV tag per line. In
     * Firefox, the resulting HTML uses BR tags at the end of each line.
     *
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    class EnterHandler extends goog.editor.Plugin {
        /**
         * Plugin to handle enter keys. This does all the crazy to normalize (as much as
         * is reasonable) what happens when you hit enter. This also handles the
         * special casing of hitting enter in a blockquote.
         *
         * In IE, Webkit, and Opera, the resulting HTML uses one DIV tag per line. In
         * Firefox, the resulting HTML uses BR tags at the end of each line.
         *
         * @constructor
         * @extends {goog.editor.Plugin}
         */
        constructor();
    
        /**
         * The type of block level tag to add on enter, for browsers that support
         * specifying the default block-level tag. Can be overriden by subclasses; must
         * be either DIV or P.
         * @type {goog.dom.TagName}
         * @protected
         */
        tag: goog.dom.TagName;
    
        /** @override */
        getTrogClassId(): void;
    
        /** @override */
        enable(): void;
    
        /**
         * If the contents are empty, return the 'default' html for the field.
         * The 'default' contents depend on the enter handling mode, so it
         * makes the most sense in this plugin.
         * @param {string} html The html to prepare.
         * @return {string} The original HTML, or default contents if that
         *    html is empty.
         * @override
         */
        prepareContentsHtml(html: string): string;
    
        /**
         * Gets HTML with no contents that won't collapse, for browsers that
         * collapse the empty string.
         * @return {string} Blank html.
         * @protected
         */
        getNonCollapsingBlankHtml: any /*missing*/;
    
        /**
         * Internal backspace handler.
         * @param {goog.events.Event} e The keypress event.
         * @param {goog.dom.AbstractRange} range The closure range object.
         * @protected
         */
        handleBackspaceInternal(e: goog.events.Event, range: goog.dom.AbstractRange): void;
    
        /**
         * Fix paragraphs to be the correct type of node.
         * @param {goog.events.Event} e The <enter> key event.
         * @param {boolean} split Whether we already split up a blockquote by
         *     manually inserting elements.
         * @protected
         */
        processParagraphTagsInternal(e: goog.events.Event, split: boolean): void;
    
        /**
         * Internal delete key handler.
         * @param {goog.events.Event} e The keypress event.
         * @protected
         */
        handleDeleteGecko(e: goog.events.Event): void;
    
        /**
         * Deletes the element at the cursor if it is a BR node, and if it does, calls
         * e.preventDefault to stop the browser from deleting. Only necessary in Gecko
         * as a workaround for mozilla bug 205350 where deleting a BR that is followed
         * by a block element doesn't work (the BR gets immediately replaced). We also
         * need to account for an ill-formed cursor which occurs from us trying to
         * stop the browser from deleting.
         *
         * @param {goog.events.Event} e The DELETE keypress event.
         * @protected
         */
        deleteBrGecko(e: goog.events.Event): void;
    
        /** @override */
        handleKeyPress(): void;
    
        /** @override */
        handleKeyUp(): void;
    
        /**
         * Internal handler for keyup events.
         * @param {goog.events.Event} e The key event.
         * @protected
         */
        handleKeyUpInternal(e: goog.events.Event): void;
    
        /**
         * Handle an enter key press in WebKit.
         * @param {goog.events.BrowserEvent} e The key press event.
         * @protected
         */
        handleEnterWebkitInternal: any /*missing*/;
    
        /**
         * Handle an enter key press on collapsed selection.  handleEnterGecko_ ensures
         * the selection is collapsed by deleting its contents if it is not.  The
         * default implementation does nothing.
         * @param {goog.events.BrowserEvent} e The key press event.
         * @param {boolean} wasCollapsed Whether the selection was collapsed before
         *     the key press.  If it was not, code before this function has already
         *     cleared the contents of the selection.
         * @param {goog.dom.AbstractRange} range Object representing the selection.
         * @protected
         */
        handleEnterAtCursorGeckoInternal: any /*missing*/;
    
        /**
         * Ensures all text in IE and Opera to be in the given tag in order to control
         * Enter spacing. Call this when Enter is pressed if desired.
         *
         * We want to make sure the user is always inside of a block (or other nodes
         * listed in goog.editor.plugins.EnterHandler.IGNORE_ENSURE_BLOCK_NODES_).  We
         * listen to keypress to force nodes that the user is leaving to turn into
         * blocks, but we also need to listen to keyup to force nodes that the user is
         * entering to turn into blocks.
         * Example:  html is: "<h2>foo[cursor]</h2>", and the user hits enter.  We
         * don't want to format the h2, but we do want to format the P that is
         * created on enter.  The P node is not available until keyup.
         * @param {goog.dom.TagName} tag The tag name to convert to.
         * @param {boolean=} opt_keyUp Whether the function is being called on key up.
         *     When called on key up, the cursor is in the newly created node, so the
         *     semantics for when to change it to a block are different.  Specifically,
         *     if the resulting node contains only a BR, it is converted to <tag>.
         * @protected
         */
        ensureBlockIeOpera(tag: goog.dom.TagName, opt_keyUp?: boolean): void;
    }

    /**
     * A plugin that opens the equation editor in a dialog window.
     * @param {string=} opt_helpUrl A URL pointing to help documentation.
     * @constructor
     * @extends {goog.editor.plugins.AbstractDialogPlugin}
     * @final
     */
    class EquationEditorPlugin extends goog.editor.plugins.AbstractDialogPlugin {
        /**
         * A plugin that opens the equation editor in a dialog window.
         * @param {string=} opt_helpUrl A URL pointing to help documentation.
         * @constructor
         * @extends {goog.editor.plugins.AbstractDialogPlugin}
         * @final
         */
        constructor(opt_helpUrl?: string);
    
        /** @override */
        getTrogClassId: any /*missing*/;
    
        /**
         * @override
         */
        createDialog(): void;
    
        /** @override */
        enable(): void;
    
        /** @override */
        disable(): void;
    }

    /**
     * First Strong plugin.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class FirstStrong extends goog.editor.Plugin {
        /**
         * First Strong plugin.
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor();
    
        /** @override */
        getTrogClassId(): void;
    
        /** @override */
        queryCommandValue(): void;
    
        /** @override */
        handleSelectionChange(): void;
    
        /** @override */
        handleKeyPress(): void;
    
        /**
         * Calls the flip directionality commands.  This is done here so things go into
         * the redo-undo stack at the expected order; fist enter the input, then flip
         * directionality.
         * @override
         */
        handleKeyUp(): void;
    }

    /**
     * Applies header styles to text.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class HeaderFormatter extends goog.editor.Plugin {
        /**
         * Applies header styles to text.
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor();
    
        /** @override */
        getTrogClassId(): void;
    
        /**
         * @override
         */
        handleKeyboardShortcut(): void;
    }

    /**
     * Property bubble plugin for links.
     * @param {...!goog.editor.plugins.LinkBubble.Action} var_args List of
     *     extra actions supported by the bubble.
     * @constructor
     * @extends {goog.editor.plugins.AbstractBubblePlugin}
     */
    class LinkBubble extends goog.editor.plugins.AbstractBubblePlugin {
        /**
         * Property bubble plugin for links.
         * @param {...!goog.editor.plugins.LinkBubble.Action} var_args List of
         *     extra actions supported by the bubble.
         * @constructor
         * @extends {goog.editor.plugins.AbstractBubblePlugin}
         */
        constructor(...var_args: goog.editor.plugins.LinkBubble.Action[]);
    
        /**
         * Tells the plugin to stop leaking the page's url via the referrer header when
         * the link text link is clicked. When the user clicks on a link, the
         * browser makes a request for the link url, passing the url of the current page
         * in the request headers. If the user wants the current url to be kept secret
         * (e.g. an unpublished document), the owner of the url that was clicked will
         * see the secret url in the request headers, and it will no longer be a secret.
         * Calling this method will not send a referrer header in the request, just as
         * if the user had opened a blank window and typed the url in themselves.
         */
        stopReferrerLeaks(): void;
    
        /**
         * Tells the plugin whether to block URLs with schemes not in the whitelist.
         * If blocking is enabled, this plugin will not linkify the link in the bubble
         * popup.
         * @param {boolean} blockOpeningUnsafeSchemes Whether to block non-whitelisted
         *     schemes.
         */
        setBlockOpeningUnsafeSchemes(blockOpeningUnsafeSchemes: boolean): void;
    
        /**
         * Sets a whitelist of allowed URL schemes that are safe to open.
         * Schemes should all be in lowercase. If the plugin is set to block opening
         * unsafe schemes, user-entered URLs will be converted to lowercase and checked
         * against this list. The whitelist has no effect if blocking is not enabled.
         * @param {Array.<string>} schemes String array of URL schemes to allow (http,
         *     https, etc.).
         */
        setSafeToOpenSchemes(schemes: string[]): void;
    
        /** @override */
        getTrogClassId(): void;
    
        /** @override */
        isSupportedCommand(): void;
    
        /** @override */
        execCommandInternal(): void;
    
        /** @override */
        getBubbleTargetFromSelection(): void;
    
        /**
         * Set the optional function for getting the "test" link of a url.
         * @param {function(string) : string} func The function to use.
         */
        setTestLinkUrlFn(func: (_0: string) => string): void;
    
        /**
         * Returns the target element url for the bubble.
         * @return {string} The url href.
         * @protected
         */
        getTargetUrl(): string;
    
        /** @override */
        getBubbleType(): void;
    
        /** @override */
        getBubbleTitle(): void;
    
        /** @override */
        createBubbleContents(): void;
    
        /**
         * Tests the link by opening it in a new tab/window. Should be used as the
         * click event handler for the test pseudo-link.
         * @protected
         */
        testLink(): void;
    
        /**
         * Returns whether the URL should be considered invalid.  This always returns
         * false in the base class, and should be overridden by subclasses that wish
         * to impose validity rules on URLs.
         * @param {string} url The url to check.
         * @return {boolean} Whether the URL should be considered invalid.
         */
        isInvalidUrl: any /*missing*/;
    
        /**
         * Sets the proper state for the action links.
         * @protected
         * @override
         */
        onShow(): void;
    
        /**
         * Checks whether the plugin should open the given url in a new window.
         * @param {string} url The url to check.
         * @return {boolean} If the plugin should open the given url in a new window.
         * @protected
         */
        shouldOpenUrl(url: string): boolean;
    }

    /**
     * A plugin that opens the link dialog.
     * @constructor
     * @extends {goog.editor.plugins.AbstractDialogPlugin}
     */
    class LinkDialogPlugin extends goog.editor.plugins.AbstractDialogPlugin {
        /**
         * A plugin that opens the link dialog.
         * @constructor
         * @extends {goog.editor.plugins.AbstractDialogPlugin}
         */
        constructor();
    
        /**
         * Link object that the dialog is editing.
         * @type {goog.editor.Link}
         * @protected
         */
        currentLink_: goog.editor.Link;
    
        /** @override */
        getTrogClassId: any /*missing*/;
    
        /**
         * Tells the plugin whether to block URLs with schemes not in the whitelist.
         * If blocking is enabled, this plugin will stop the 'Test Link' popup
         * window from being created. Blocking doesn't affect link creation--if the
         * user clicks the 'OK' button with an unsafe URL, the link will still be
         * created as normal.
         * @param {boolean} blockOpeningUnsafeSchemes Whether to block non-whitelisted
         *     schemes.
         */
        setBlockOpeningUnsafeSchemes(blockOpeningUnsafeSchemes: boolean): void;
    
        /**
         * Sets a whitelist of allowed URL schemes that are safe to open.
         * Schemes should all be in lowercase. If the plugin is set to block opening
         * unsafe schemes, user-entered URLs will be converted to lowercase and checked
         * against this list. The whitelist has no effect if blocking is not enabled.
         * @param {Array.<string>} schemes String array of URL schemes to allow (http,
         *     https, etc.).
         */
        setSafeToOpenSchemes(schemes: string[]): void;
    
        /**
         * Tells the dialog to show a checkbox where the user can choose to have the
         * link open in a new window.
         * @param {boolean} startChecked Whether to check the checkbox the first
         *     time the dialog is shown. Subesquent times the checkbox will remember its
         *     previous state.
         */
        showOpenLinkInNewWindow(startChecked: boolean): void;
    
        /**
         * Tells the dialog to show a checkbox where the user can choose to have
         * 'rel=nofollow' attribute added to the link.
         */
        showRelNoFollow(): void;
    
        /**
         * Returns whether the"open link in new window" checkbox was checked last time
         * the dialog was closed.
         * @return {boolean} Whether the"open link in new window" checkbox was checked
         *     last time the dialog was closed.
         */
        getOpenLinkInNewWindowCheckedState(): boolean;
    
        /**
         * Tells the plugin to stop leaking the page's url via the referrer header when
         * the "test this link" link is clicked. When the user clicks on a link, the
         * browser makes a request for the link url, passing the url of the current page
         * in the request headers. If the user wants the current url to be kept secret
         * (e.g. an unpublished document), the owner of the url that was clicked will
         * see the secret url in the request headers, and it will no longer be a secret.
         * Calling this method will not send a referrer header in the request, just as
         * if the user had opened a blank window and typed the url in themselves.
         */
        stopReferrerLeaks(): void;
    
        /**
         * Sets the warning message to show to users about including email addresses on
         * public web pages.
         * @param {string} emailWarning Warning message to show users about including
         *     email addresses on the web.
         */
        setEmailWarning(emailWarning: string): void;
    
        /**
         * Handles execCommand by opening the dialog.
         * @param {string} command The command to execute.
         * @param {*=} opt_arg {@link A goog.editor.Link} object representing the link
         *     being edited.
         * @return {*} Always returns true, indicating the dialog was shown.
         * @protected
         * @override
         */
        execCommandInternal(command: string, opt_arg?: any): any;
    
        /**
         * Handles when the dialog closes.
         * @param {goog.events.Event} e The AFTER_HIDE event object.
         * @override
         * @protected
         */
        handleAfterHide(e: goog.events.Event): void;
    
        /**
         * @return {goog.events.EventHandler.<T>} The event handler.
         * @protected
         * @this T
         * @template T
         */
        getEventHandler(): goog.events.EventHandler<T>;
    
        /**
         * @return {goog.editor.Link} The link being edited.
         * @protected
         */
        getCurrentLink(): goog.editor.Link;
    
        /**
         * Creates a new instance of the dialog and registers for the relevant events.
         * @param {goog.dom.DomHelper} dialogDomHelper The dom helper to be used to
         *     create the dialog.
         * @param {*=} opt_link The target link (should be a goog.editor.Link).
         * @return {!goog.ui.editor.LinkDialog} The dialog.
         * @override
         * @protected
         */
        createDialog(dialogDomHelper: goog.dom.DomHelper, opt_link?: any): goog.ui.editor.LinkDialog;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Handles the OK event from the dialog by updating the link in the field.
         * @param {goog.ui.editor.LinkDialog.OkEvent} e OK event object.
         * @protected
         */
        handleOk(e: goog.ui.editor.LinkDialog.OkEvent): void;
    
        /**
         * Handles the BeforeTestLink event fired when the 'test' link is clicked.
         * @param {goog.ui.editor.LinkDialog.BeforeTestLinkEvent} e BeforeTestLink event
         *     object.
         * @protected
         */
        handleBeforeTestLink(e: goog.ui.editor.LinkDialog.BeforeTestLinkEvent): void;
    
        /**
         * Checks whether the plugin should open the given url in a new window.
         * @param {string} url The url to check.
         * @return {boolean} If the plugin should open the given url in a new window.
         * @protected
         */
        shouldOpenUrl(url: string): boolean;
    }

    /**
     * Plugin to add a keyboard shortcut for the link command
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class LinkShortcutPlugin extends goog.editor.Plugin {
        /**
         * Plugin to add a keyboard shortcut for the link command
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor();
    
        /** @override */
        getTrogClassId(): void;
    
        /**
         * @override
         */
        handleKeyboardShortcut(): void;
    }

    /**
     * Plugin to handle tab keys in lists to indent and outdent.
     * @constructor
     * @extends {goog.editor.plugins.AbstractTabHandler}
     * @final
     */
    class ListTabHandler extends goog.editor.plugins.AbstractTabHandler {
        /**
         * Plugin to handle tab keys in lists to indent and outdent.
         * @constructor
         * @extends {goog.editor.plugins.AbstractTabHandler}
         * @final
         */
        constructor();
    
        /** @override */
        getTrogClassId(): void;
    
        /** @override */
        handleTabKey(): void;
    }

    /**
     * A plugin that manages lorem ipsum state of editable fields.
     * @param {string} message The lorem ipsum message.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class LoremIpsum extends goog.editor.Plugin {
        /**
         * A plugin that manages lorem ipsum state of editable fields.
         * @param {string} message The lorem ipsum message.
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor(message: string);
    
        /** @override */
        getTrogClassId: any /*missing*/;
    
        /** @override */
        activeOnUneditableFields: any /*missing*/;
    
        /**
         * Handles queryCommandValue.
         * @param {string} command The command to query.
         * @return {boolean} The result.
         * @override
         */
        queryCommandValue(command: string): boolean;
    
        /**
         * Handles execCommand.
         * @param {string} command The command to execute.
         *     Should be CLEAR_LOREM or UPDATE_LOREM.
         * @param {*=} opt_placeCursor Whether to place the cursor in the field
         *     after clearing lorem. Should be a boolean.
         * @override
         */
        execCommand(command: string, opt_placeCursor?: any): void;
    
        /** @override */
        isSupportedCommand(): void;
    }

    /**
     * A plugin to handle removing formatting from selected text.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class RemoveFormatting extends goog.editor.Plugin {
        /**
         * A plugin to handle removing formatting from selected text.
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor();
    
        /** @override */
        getTrogClassId(): void;
    
        /** @override */
        isSupportedCommand(): void;
    
        /** @override */
        execCommandInternal(): void;
    
        /** @override */
        handleKeyboardShortcut(): void;
    
        /**
         * Handle per node special processing if neccessary. If this function returns
         * null then standard cleanup is applied. Otherwise this node and all children
         * are assumed to be cleaned.
         * NOTE(user): If an alternate RemoveFormatting processor is provided
         * (setRemoveFormattingFunc()), this will no longer work.
         * @param {Element} node The node to clean.
         * @return {?string} The HTML strig representation of the cleaned data.
         */
        getValueForNode(node: Element): string;
    
        /**
         * Sets a function to be used for remove formatting.
         * @param {function(string): string} removeFormattingFunc - A function that
         *     takes  a string of html and returns a string of html that does any other
         *     formatting changes desired.  Use this only if trogedit's behavior doesn't
         *     meet your needs.
         */
        setRemoveFormattingFunc(removeFormattingFunc: (_0: string) => string): void;
    }

    /**
     * Plugin to handle tab keys when not in lists to add 4 spaces.
     * @constructor
     * @extends {goog.editor.plugins.AbstractTabHandler}
     * @final
     */
    class SpacesTabHandler extends goog.editor.plugins.AbstractTabHandler {
        /**
         * Plugin to handle tab keys when not in lists to add 4 spaces.
         * @constructor
         * @extends {goog.editor.plugins.AbstractTabHandler}
         * @final
         */
        constructor();
    
        /** @override */
        getTrogClassId(): void;
    
        /** @override */
        handleTabKey(): void;
    }

    /**
     * Plugin that adds support for table creation and editing commands.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class TableEditor extends goog.editor.Plugin {
        /**
         * Plugin that adds support for table creation and editing commands.
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor();
    
        /** @override */
        getTrogClassId(): void;
    
        /**
         * Whether the string corresponds to a command this plugin handles.
         * @param {string} command Command string to check.
         * @return {boolean} Whether the string corresponds to a command
         *     this plugin handles.
         * @override
         */
        isSupportedCommand(command: string): boolean;
    
        /** @override */
        enable(): void;
    
        /**
         * Returns the current value of a given command. Currently this plugin
         * only returns a value for goog.editor.plugins.TableEditor.COMMAND.TABLE.
         * @override
         */
        queryCommandValue(): void;
    
        /** @override */
        execCommandInternal(): void;
    
        /**
         * Adds a function to filter out non-user-editable tables.
         * @param {function(Element):boolean} func A function to decide whether the
         *   table element could be editable by the user or not.
         */
        addIsTableEditableFunction(func: (_0: Element) => boolean): void;
    }

    /**
     * Plugin to handle enter keys. This subclass normalizes all browsers to use
     * the given block tag on enter.
     * @param {goog.dom.TagName} tag The type of tag to add on enter.
     * @constructor
     * @extends {goog.editor.plugins.EnterHandler}
     */
    class TagOnEnterHandler extends goog.editor.plugins.EnterHandler {
        /**
         * Plugin to handle enter keys. This subclass normalizes all browsers to use
         * the given block tag on enter.
         * @param {goog.dom.TagName} tag The type of tag to add on enter.
         * @constructor
         * @extends {goog.editor.plugins.EnterHandler}
         */
        constructor(tag: goog.dom.TagName);
    
        /** @override */
        getTrogClassId(): void;
    
        /** @override */
        getNonCollapsingBlankHtml(): void;
    
        /**
         * This plugin is active on uneditable fields so it can provide a value for
         * queryCommandValue calls asking for goog.editor.Command.BLOCKQUOTE.
         * @return {boolean} True.
         * @override
         */
        activeOnUneditableFields: any /*missing*/;
    
        /** @override */
        isSupportedCommand(): void;
    
        /** @override */
        queryCommandValue(): void;
    
        /** @override */
        handleBackspaceInternal(): void;
    
        /** @override */
        processParagraphTagsInternal(): void;
    
        /** @override */
        handleDeleteGecko(): void;
    
        /** @override */
        handleKeyUpInternal(): void;
    
        /** @override */
        handleEnterWebkitInternal(): void;
    
        /** @override */
        handleEnterAtCursorGeckoInternal(): void;
    }

    /**
     * Encapsulates undo/redo logic using a custom undo stack (i.e. not browser
     * built-in). Browser built-in undo stacks are too flaky (e.g. IE's gets
     * clobbered on DOM modifications). Also, this allows interleaving non-editing
     * commands into the undo stack via the UndoRedoManager.
     *
     * @param {goog.editor.plugins.UndoRedoManager=} opt_manager An undo redo
     *    manager to be used by this plugin. If none is provided one is created.
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    class UndoRedo extends goog.editor.Plugin {
        /**
         * Encapsulates undo/redo logic using a custom undo stack (i.e. not browser
         * built-in). Browser built-in undo stacks are too flaky (e.g. IE's gets
         * clobbered on DOM modifications). Also, this allows interleaving non-editing
         * commands into the undo stack via the UndoRedoManager.
         *
         * @param {goog.editor.plugins.UndoRedoManager=} opt_manager An undo redo
         *    manager to be used by this plugin. If none is provided one is created.
         * @constructor
         * @extends {goog.editor.Plugin}
         */
        constructor(opt_manager?: goog.editor.plugins.UndoRedoManager);
    
        /**
         * The logger for this class.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
    
        /**
         * Set the max undo stack depth (not the real memory usage).
         * @param {number} depth Depth of the stack.
         */
        setMaxUndoDepth(depth: number): void;
    
        /**
         * Set the undo-redo manager used by this plugin. Any state on a previous
         * undo-redo manager is lost.
         * @param {goog.editor.plugins.UndoRedoManager} manager The undo-redo manager.
         */
        setUndoRedoManager(manager: goog.editor.plugins.UndoRedoManager): void;
    
        /**
         * Whether the string corresponds to a command this plugin handles.
         * @param {string} command Command string to check.
         * @return {boolean} Whether the string corresponds to a command
         *     this plugin handles.
         * @override
         */
        isSupportedCommand(command: string): boolean;
    
        /**
         * Unregisters and disables the fieldObject with this plugin. Thie does *not*
         * clobber the undo stack for the fieldObject though.
         * TODO(user): For the multifield version, we really should add a way to
         * ignore undo actions on field's that have been made uneditable.
         * This is probably as simple as skipping over entries in the undo stack
         * that have a hashcode of an uneditable field.
         * @param {goog.editor.Field} fieldObject The field to register with the plugin.
         * @override
         */
        unregisterFieldObject(fieldObject: goog.editor.Field): void;
    
        /**
         * This is so subclasses can deal with multifield undo-redo.
         * @return {goog.editor.Field} The active field object for this field. This is
         *     the one registered field object for the single-plugin case and the
         *     focused field for the multi-field plugin case.
         */
        getCurrentFieldObject(): goog.editor.Field;
    
        /**
         * This is so subclasses can deal with multifield undo-redo.
         * @param {string} fieldHashCode The Field's hashcode.
         * @return {goog.editor.Field} The field object with the hashcode.
         */
        getFieldObjectForHash(fieldHashCode: string): goog.editor.Field;
    
        /**
         * This is so subclasses can deal with multifield undo-redo.
         * @return {goog.editor.Field} Target for COMMAND_VALUE_CHANGE events.
         */
        getCurrentEventTarget(): goog.editor.Field;
    
        /** @override */
        enable(): void;
    
        /** @override */
        disable(): void;
    
        /** @override */
        isEnabled(): void;
    
        /** @override */
        disposeInternal(): void;
    
        /** @override */
        getTrogClassId(): void;
    
        /** @override */
        execCommand(): void;
    
        /** @override */
        queryCommandValue(): void;
    
        /**
         * Restores the state of the editable field.
         * @param {goog.editor.plugins.UndoRedo.UndoState_} state The state initiating
         *    the restore.
         * @param {string} content The content to restore.
         * @param {goog.editor.plugins.UndoRedo.CursorPosition_?} cursorPosition
         *     The cursor position within the content.
         */
        restoreState(state: goog.editor.plugins.UndoRedo.UndoState_, content: string, cursorPosition: goog.editor.plugins.UndoRedo.CursorPosition_): void;
    
        /**
         * @override
         */
        handleKeyboardShortcut(): void;
    
        /**
         * Clear the undo/redo stack.
         */
        clearHistory(): void;
    
        /**
         * Refreshes the current state of the editable field as maintained by undo-redo,
         * without adding any undo-redo states to the stack.
         * @param {goog.editor.Field} fieldObject The editable field.
         */
        refreshCurrentState(fieldObject: goog.editor.Field): void;
    }

    /**
     * Manages undo and redo operations through a series of {@code UndoRedoState}s
     * maintained on undo and redo stacks.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class UndoRedoManager extends goog.events.EventTarget {
        /**
         * Manages undo and redo operations through a series of {@code UndoRedoState}s
         * maintained on undo and redo stacks.
         *
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor();
    
        /**
         * Set the max undo stack depth (not the real memory usage).
         * @param {number} depth Depth of the stack.
         */
        setMaxUndoDepth(depth: number): void;
    
        /**
         * Add state to the undo stack. This clears the redo stack.
         *
         * @param {goog.editor.plugins.UndoRedoState} state The state to add to the undo
         *     stack.
         */
        addState(state: goog.editor.plugins.UndoRedoState): void;
    
        /**
         * Performs the undo operation of the state at the top of the undo stack, moving
         * that state to the top of the redo stack. If the undo stack is empty, does
         * nothing.
         */
        undo(): void;
    
        /**
         * Performs the redo operation of the state at the top of the redo stack, moving
         * that state to the top of the undo stack. If redo undo stack is empty, does
         * nothing.
         */
        redo(): void;
    
        /**
         * @return {boolean} Wether the undo stack has items on it, i.e., if it is
         *     possible to perform an undo operation.
         */
        hasUndoState(): boolean;
    
        /**
         * @return {boolean} Wether the redo stack has items on it, i.e., if it is
         *     possible to perform a redo operation.
         */
        hasRedoState(): boolean;
    
        /**
         * Clears the undo and redo stacks.
         */
        clearHistory(): void;
    
        /**
         * @return {goog.editor.plugins.UndoRedoState|undefined} The state at the top of
         *     the undo stack without removing it from the stack.
         */
        undoPeek(): any /*goog.editor.plugins.UndoRedoState|any (undefined)*/;
    
        /**
         * @return {goog.editor.plugins.UndoRedoState|undefined} The state at the top of
         *     the redo stack without removing it from the stack.
         */
        redoPeek(): any /*goog.editor.plugins.UndoRedoState|any (undefined)*/;
    }

    /**
     * Represents an undo and redo action for a particular state transition.
     *
     * @param {boolean} asynchronous Whether the undo or redo actions for this
     *     state complete asynchronously. If true, then this state must fire
     *     an ACTION_COMPLETED event when undo or redo is complete.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class UndoRedoState extends goog.events.EventTarget {
        /**
         * Represents an undo and redo action for a particular state transition.
         *
         * @param {boolean} asynchronous Whether the undo or redo actions for this
         *     state complete asynchronously. If true, then this state must fire
         *     an ACTION_COMPLETED event when undo or redo is complete.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(asynchronous: boolean);
    
        /**
         * @return {boolean} Whether or not the undo and redo actions of this state
         *     complete asynchronously. If true, the state will fire an ACTION_COMPLETED
         *     event when an undo or redo action is complete.
         */
        isAsynchronous(): boolean;
    
        /**
         * Undoes the action represented by this state.
         */
        undo: any /*missing*/;
    
        /**
         * Redoes the action represented by this state.
         */
        redo: any /*missing*/;
    
        /**
         * Checks if two undo-redo states are the same.
         * @param {goog.editor.plugins.UndoRedoState} state The state to compare.
         * @return {boolean} Wether the two states are equal.
         */
        equals: any /*missing*/;
    }
}

declare module 'goog.editor.plugins.equation' {

    /**
     * Property bubble plugin for equations.
     *
     * @constructor
     * @extends {goog.editor.plugins.AbstractBubblePlugin}
     * @final
     */
    class EquationBubble extends goog.editor.plugins.AbstractBubblePlugin {
        /**
         * Property bubble plugin for equations.
         *
         * @constructor
         * @extends {goog.editor.plugins.AbstractBubblePlugin}
         * @final
         */
        constructor();
    
        /** @override */
        getTrogClassId(): void;
    
        /** @override */
        getBubbleTargetFromSelection(): void;
    
        /** @override */
        createBubbleContents(): void;
    
        /** @override */
        getBubbleType(): void;
    
        /** @override */
        getBubbleTitle(): void;
    }
}

declare module 'goog.editor.plugins.LinkBubble' {

    /**
     * Constructor for extra actions that can be added to the link bubble.
     * @param {string} spanId The ID for the span showing the action.
     * @param {string} linkId The ID for the link showing the action.
     * @param {string} message The text for the link showing the action.
     * @param {function(string):boolean} toShowFn Test function to determine whether
     *     to show the action for the given URL.
     * @param {function(string):void} actionFn Action function to run when the
     *     action is clicked.  Takes the current target URL as a parameter.
     * @constructor
     * @final
     */
    class Action {
        /**
         * Constructor for extra actions that can be added to the link bubble.
         * @param {string} spanId The ID for the span showing the action.
         * @param {string} linkId The ID for the link showing the action.
         * @param {string} message The text for the link showing the action.
         * @param {function(string):boolean} toShowFn Test function to determine whether
         *     to show the action for the given URL.
         * @param {function(string):void} actionFn Action function to run when the
         *     action is clicked.  Takes the current target URL as a parameter.
         * @constructor
         * @final
         */
        constructor(spanId: string, linkId: string, message: string, toShowFn: (_0: string) => boolean, actionFn: (_0: string) => void);
    }
}

