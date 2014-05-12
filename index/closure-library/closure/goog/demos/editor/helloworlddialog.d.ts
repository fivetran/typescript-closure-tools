/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../ui/editor/abstractdialog.d.ts" />
/// <reference path="../../dom/dom.d.ts" />
/// <reference path="../../events/event.d.ts" />

declare module goog.demos.editor {

    class HelloWorldDialog extends HelloWorldDialog.__Class { }
    module HelloWorldDialog {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.editor.AbstractDialog.__Class {
    
            /**
             * Creates a dialog to let the user enter a customized hello world message.
             * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
             * dialog's dom structure.
             * @constructor
             * @extends {goog.ui.editor.AbstractDialog}
             * @final
             */
            constructor(domHelper: goog.dom.DomHelper);
        }
    }
}

declare module goog.demos.editor.HelloWorldDialog {

    class OkEvent extends OkEvent.__Class { }
    module OkEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class {
    
            /**
             * OK event object for the hello world dialog.
             * @param {string} message Customized hello world message chosen by the user.
             * @constructor
             * @extends {goog.events.Event}
             * @final
             */
            constructor(message: string);
    
            /**
             * Customized hello world message chosen by the user.
             * @type {string}
             */
            message: string;
        }
    }
}
