// Generated Fri May  2 10:36:42 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/editor/defines.d.ts" />
/// <reference path="../../../goog/useragent/product.d.ts" />
/// <reference path="../../../goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../goog/editor/browserfeature.d.ts" />
/// <reference path="../../../goog/editor/style.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../goog/dom/iter.d.ts" />
/// <reference path="../../../goog/editor/node.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/dom/savedrange.d.ts" />
/// <reference path="../../../goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/dom/abstractrange.d.ts" />
/// <reference path="../../../goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../goog/string/stringbuffer.d.ts" />
/// <reference path="../../../goog/dom/browserrange/abstractrange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/operarange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/browserrange.d.ts" />
/// <reference path="../../../goog/dom/textrange.d.ts" />
/// <reference path="../../../goog/dom/abstractmultirange.d.ts" />
/// <reference path="../../../goog/dom/controlrange.d.ts" />
/// <reference path="../../../goog/dom/multirange.d.ts" />
/// <reference path="../../../goog/dom/range.d.ts" />
/// <reference path="../../../goog/editor/range.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/editor/icontent.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/editor/command.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/editor/plugin.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/async/delay.d.ts" />
/// <reference path="../../../goog/editor/field.d.ts" />
/// <reference path="../../../goog/style/bidi.d.ts" />
/// <reference path="../../../goog/fx/dragger.d.ts" />
/// <reference path="../../../goog/i18n/bidi.d.ts" />
/// <reference path="../../../goog/string/typedstring.d.ts" />
/// <reference path="../../../goog/string/const.d.ts" />
/// <reference path="../../../goog/html/safeurl.d.ts" />
/// <reference path="../../../goog/dom/tags.d.ts" />
/// <reference path="../../../goog/html/safestyle.d.ts" />
/// <reference path="../../../goog/html/safehtml.d.ts" />
/// <reference path="../../../goog/dom/safe.d.ts" />
/// <reference path="../../../goog/fx/transition.d.ts" />
/// <reference path="../../../goog/ui/popupbase.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/dom/iframe.d.ts" />
/// <reference path="../../../goog/events/focushandler.d.ts" />
/// <reference path="../../../goog/ui/modalpopup.d.ts" />
/// <reference path="../../../goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../../goog/html/legacyconversions.d.ts" />
/// <reference path="../../../goog/ui/dialog.d.ts" />
/// <reference path="../../../goog/ui/editor/abstractdialog.d.ts" />

declare module goog.editor.plugins.AbstractDialogPlugin {

    /**
     * Event type constants for events the dialog plugins fire.
     * @enum {string}
     */
    enum EventType { OPENED, CLOSED } 
}

declare module goog.editor.plugins {

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

