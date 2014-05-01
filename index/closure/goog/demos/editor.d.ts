// Generated Wed Apr 30 16:37:53 PDT 2014

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
/// <reference path="../../goog/editor/plugins.d.ts" />
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
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />
/// <reference path="../../goog/style.d.ts" />
/// <reference path="../../goog/timer.d.ts" />
/// <reference path="../../goog/ui.d.ts" />
/// <reference path="../../goog/ui/editor.d.ts" />
/// <reference path="../../goog/ui/equation.d.ts" />
/// <reference path="../../goog/uri.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.demos.editor.HelloWorldDialogPlugin' {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    enum Command { HELLO_WORLD_DIALOG } 
}

declare module 'goog.demos.editor.HelloWorld' {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    enum COMMAND { HELLO_WORLD } 
}

declare module 'goog.demos.editor' {

    /**
     * @constructor
     * @final
     */
    class EquationEditor {
        /**
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Creates a new editor and opens the dialog.
         * @param {string} initialEquation The initial equation value to use.
         */
        openEditor(initialEquation: string): void;
    }

    /**
     * Creates a dialog to let the user enter a customized hello world message.
     * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
     * dialog's dom structure.
     * @constructor
     * @extends {goog.ui.editor.AbstractDialog}
     * @final
     */
    class HelloWorldDialog extends goog.ui.editor.AbstractDialog {
        /**
         * Creates a dialog to let the user enter a customized hello world message.
         * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
         * dialog's dom structure.
         * @constructor
         * @extends {goog.ui.editor.AbstractDialog}
         * @final
         */
        constructor(domHelper: goog.dom.DomHelper);
    
        /** @override */
        createDialogControl(): void;
    
        /**
         * Creates and returns the event object to be used when dispatching the OK
         * event to listeners, or returns null to prevent the dialog from closing.
         * @param {goog.events.Event} e The event object dispatched by the wrapped
         *     dialog.
         * @return {goog.demos.editor.HelloWorldDialog.OkEvent} The event object to be
         *     used when dispatching the OK event to listeners.
         * @protected
         * @override
         */
        createOkEvent(e: goog.events.Event): goog.demos.editor.HelloWorldDialog.OkEvent;
    }

    /**
     * A plugin that opens the hello world dialog.
     * @constructor
     * @extends {goog.editor.plugins.AbstractDialogPlugin}
     * @final
     */
    class HelloWorldDialogPlugin extends goog.editor.plugins.AbstractDialogPlugin {
        /**
         * A plugin that opens the hello world dialog.
         * @constructor
         * @extends {goog.editor.plugins.AbstractDialogPlugin}
         * @final
         */
        constructor();
    
        /** @override */
        getTrogClassId: any /*missing*/;
    
        /**
         * Creates a new instance of the dialog and registers for the relevant events.
         * @param {goog.dom.DomHelper} dialogDomHelper The dom helper to be used to
         *     create the dialog.
         * @return {goog.demos.editor.HelloWorldDialog} The dialog.
         * @override
         * @protected
         */
        createDialog(dialogDomHelper: goog.dom.DomHelper): goog.demos.editor.HelloWorldDialog;
    }

    /**
     * Plugin to insert 'Hello World!' into an editable field.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class HelloWorld extends goog.editor.Plugin {
        /**
         * Plugin to insert 'Hello World!' into an editable field.
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor();
    
        /** @override */
        getTrogClassId(): void;
    
        /** @override */
        isSupportedCommand(): void;
    
        /**
         * Executes a command. Does not fire any BEFORECHANGE, CHANGE, or
         * SELECTIONCHANGE events (these are handled by the super class implementation
         * of {@code execCommand}.
         * @param {string} command Command to execute.
         * @override
         * @protected
         */
        execCommandInternal(command: string): void;
    }
}

declare module 'goog.demos.editor.HelloWorldDialog' {

    /**
     * OK event object for the hello world dialog.
     * @param {string} message Customized hello world message chosen by the user.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class OkEvent extends goog.events.Event {
        /**
         * OK event object for the hello world dialog.
         * @param {string} message Customized hello world message chosen by the user.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(message: string);
    
        /**
         * Event type.
         * @type {goog.ui.editor.AbstractDialog.EventType}
         * @override
         */
        type: goog.ui.editor.AbstractDialog.EventType;
    
        /**
         * Customized hello world message chosen by the user.
         * @type {string}
         */
        message: string;
    }
}

