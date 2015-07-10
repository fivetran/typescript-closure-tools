/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/event.d.ts" />

declare module goog.history {

    class Event extends Event__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Event__Class extends goog.events.Event__Class  { 
    
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
    
            /**
             * The current history state.
             * @type {string}
             */
            token: string;
    
            /**
             * Whether the event was triggered by browser navigation.
             * @type {boolean}
             */
            isNavigation: boolean;
    } 
    
}
