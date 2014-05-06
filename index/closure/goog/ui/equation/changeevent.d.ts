/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />

declare module goog.ui.equation {

    /**
     * Event fired when equation changes.
     * @constructor
     * @param {boolean} isValid Whether the equation is valid.
     * @extends {goog.events.Event}
     * @final
     */
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

