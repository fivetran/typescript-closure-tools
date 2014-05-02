// Generated Thu May  1 16:42:47 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />

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

