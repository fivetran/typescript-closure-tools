/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />
/// <reference path="../../dom/dom.d.ts" />
/// <reference path="../../ui/editor/abstractdialog.d.ts" />
/// <reference path="../../events/event.d.ts" />

declare module goog.editor.plugins {

    class AbstractDialogPlugin extends AbstractDialogPlugin.__Class { }
    module AbstractDialogPlugin {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.editor.Plugin.__Class {
    
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
            createDialog(dialogDomHelper: goog.dom.DomHelper, opt_arg?: any): goog.ui.editor.AbstractDialog;
    
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
        }
    }
}

declare module goog.editor.plugins.AbstractDialogPlugin {

    /**
     * Event type constants for events the dialog plugins fire.
     * @enum {string}
     */
    enum EventType { OPENED, CLOSED } 
}
