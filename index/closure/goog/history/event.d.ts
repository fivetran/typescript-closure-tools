/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/history/eventtype.d.ts" />

declare module goog.history {

    /**
     * Event object dispatched after the history state has changed.
     * @param {string} token The string identifying the new history state.
     * @param {boolean} isNavigation True if the event was triggered by a browser
     *     action, such as forward or back, clicking on a link, editing the URL, or
     *     calling {@code window.history.(go|back|forward)}.
     *     False if the token has been changed by a {@code setToken} or
     *     {@code replaceToken} call.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class Event extends goog.events.Event {
        /**
         * Event object dispatched after the history state has changed.
         * @param {string} token The string identifying the new history state.
         * @param {boolean} isNavigation True if the event was triggered by a browser
         *     action, such as forward or back, clicking on a link, editing the URL, or
         *     calling {@code window.history.(go|back|forward)}.
         *     False if the token has been changed by a {@code setToken} or
         *     {@code replaceToken} call.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(token: string, isNavigation: boolean);
    }
}

