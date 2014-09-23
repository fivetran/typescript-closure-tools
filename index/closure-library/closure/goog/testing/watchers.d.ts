/// <reference path="../../../globals.d.ts" />

declare module goog.testing.watchers {

    /** @private {!Array.<function()>} */
    var resetWatchers_: any /*missing*/;

    /**
     * Fires clock reset watching functions.
     */
    function signalClockReset(): void;

    /**
     * Enqueues a function to be called when the clock used for setTimeout is reset.
     * @param {function()} fn
     */
    function watchClockReset(fn: () => any /*missing*/): void;
}
