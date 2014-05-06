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
/// <reference path="../../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/fx/dragger.d.ts" />
/// <reference path="../../../../closure/goog/i18n/bidi.d.ts" />
/// <reference path="../../../../closure/goog/string/typedstring.d.ts" />
/// <reference path="../../../../closure/goog/string/const.d.ts" />
/// <reference path="../../../../closure/goog/html/safeurl.d.ts" />
/// <reference path="../../../../closure/goog/dom/tags.d.ts" />
/// <reference path="../../../../closure/goog/html/safestyle.d.ts" />
/// <reference path="../../../../closure/goog/html/safehtml.d.ts" />
/// <reference path="../../../../closure/goog/dom/safe.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../../closure/goog/ui/popupbase.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../../closure/goog/dom/iframe.d.ts" />
/// <reference path="../../../../closure/goog/events/focushandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/modalpopup.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../../../closure/goog/html/legacyconversions.d.ts" />
/// <reference path="../../../../closure/goog/ui/dialog.d.ts" />

declare module goog.ui.editor {

    /**
     * Creates an object that represents a dialog box.
     * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
     * dialog's dom structure.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class AbstractDialog extends _AbstractDialog { }

    class _AbstractDialog extends goog.events.EventTarget {
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
        createDialogControl(): goog.ui.Dialog;
    
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
        createOkEvent(e: goog.events.Event): goog.events.Event;
    
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
    }
}

declare module goog.ui.editor.AbstractDialog {

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

    /**
     * Event type constants for events the dialog fires.
     * @enum {string}
     */
    enum EventType { AFTER_HIDE, CANCEL, OK } 
}

