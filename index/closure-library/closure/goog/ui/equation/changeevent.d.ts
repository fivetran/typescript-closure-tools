/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/event.d.ts" />

declare module goog.ui.equation {

    class ChangeEvent extends goog.events.Event {
    
        /**
         * Event fired when equation changes.
         * @constructor
         * @param {boolean} isValid Whether the equation is valid.
         * @extends {goog.events.Event}
         * @final
         */
        constructor(isValid: boolean);
    }
}