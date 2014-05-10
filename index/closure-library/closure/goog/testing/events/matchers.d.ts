/// <reference path="../../../../globals.d.ts" />
/// <reference path="../mockmatchers.d.ts" />

declare module goog.testing.events {

    class EventMatcher extends __EventMatcher { }
    class __EventMatcher extends goog.testing.mockmatchers.__ArgumentMatcher {
    
        /**
         * A matcher that verifies that an argument is a {@code goog.events.Event} of a
         * particular type.
         * @param {string} type The single type the event argument must be of.
         * @constructor
         * @extends {goog.testing.mockmatchers.ArgumentMatcher}
         * @final
         */
        constructor(type: string);
    }
}
