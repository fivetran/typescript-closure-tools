/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/event.d.ts" />

declare module goog.ui.editor {

    class EquationEditorOkEvent extends EquationEditorOkEvent__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class EquationEditorOkEvent__Class extends goog.events.Event__Class  { 
    
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
