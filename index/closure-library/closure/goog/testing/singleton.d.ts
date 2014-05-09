/// <reference path="../../../globals.d.ts" />

declare module goog.testing.singleton {

    /**
     * Deletes all singleton instances, so {@code getInstance} will return a new
     * instance on next call.
     */
    function reset(): void;

    /**
     * @deprecated Please use {@code goog.addSingletonGetter}.
     */
    var addSingletonGetter: any /*missing*/;
}
