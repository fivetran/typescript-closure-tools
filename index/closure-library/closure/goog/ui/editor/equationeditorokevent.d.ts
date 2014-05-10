/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/event.d.ts" />

declare module goog.ui.editor {

    class EquationEditorOkEvent extends __EquationEditorOkEvent { }
    class __EquationEditorOkEvent extends goog.events.__Event {
    
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
         * HTML containing the equation to put in the editable field.
         * @type {string}
         */
        equationHtml: string;
    }
}
