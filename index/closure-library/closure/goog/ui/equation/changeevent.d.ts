/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/event.d.ts" />

declare module goog.ui.equation {

    class ChangeEvent extends ChangeEvent__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ChangeEvent__Class extends goog.events.Event__Class  { 
    
            /**
             * Event fired when equation changes.
             * @constructor
             * @param {boolean} isValid Whether the equation is valid.
             * @extends {goog.events.Event}
             * @final
             */
            constructor(isValid: boolean);
    
            /**
             * Whether equation is valid.
             * @type {boolean}
             */
            isValid: boolean;
    } 
    
}
