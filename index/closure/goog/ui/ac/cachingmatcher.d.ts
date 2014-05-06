/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/ui/ac/renderoptions.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/async/throttle.d.ts" />
/// <reference path="../../../../closure/goog/ui/ac/arraymatcher.d.ts" />

declare module goog.ui.ac {

    /**
     * A matcher which wraps another (typically slow) matcher and
     * keeps a client-side cache of the results. For instance, you can use this to
     * wrap a RemoteArrayMatcher to hide the latency of the underlying matcher
     * having to make ajax request.
     *
     * Objects in the cache are deduped on their stringified forms.
     *
     * Note - when the user types a character, they will instantly get a set of
     * local results, and then some time later, the results from the server will
     * show up.
     *
     * @constructor
     * @param {!Object} baseMatcher The underlying matcher to use. Must implement
     *     requestMatchingRows.
     * @final
     */
    class CachingMatcher {
        /**
         * A matcher which wraps another (typically slow) matcher and
         * keeps a client-side cache of the results. For instance, you can use this to
         * wrap a RemoteArrayMatcher to hide the latency of the underlying matcher
         * having to make ajax request.
         *
         * Objects in the cache are deduped on their stringified forms.
         *
         * Note - when the user types a character, they will instantly get a set of
         * local results, and then some time later, the results from the server will
         * show up.
         *
         * @constructor
         * @param {!Object} baseMatcher The underlying matcher to use. Must implement
         *     requestMatchingRows.
         * @final
         */
        constructor(baseMatcher: Object);
    
        /**
         * Sets the number of milliseconds with which to throttle the match requests
         * on the underlying matcher.
         *
         * Default value: 150.
         *
         * @param {number} throttleTime .
         */
        setThrottleTime(throttleTime: number): void;
    
        /**
         * Sets the maxMatches to use for the base matcher. If the base matcher makes
         * AJAX requests, it may help to make this a large number so that the local
         * cache gets populated quickly.
         *
         * Default value: 100.
         *
         * @param {number} maxMatches The value to set.
         */
        setBaseMatcherMaxMatches(maxMatches: number): void;
    
        /**
         * Sets the maximum size of the local cache. If the local cache grows larger
         * than this size, it will be emptied.
         *
         * Default value: 1000.
         *
         * @param {number} maxCacheSize .
         */
        setMaxCacheSize(maxCacheSize: number): void;
    
        /**
         * Sets the local matcher to use.
         *
         * The local matcher should be a function with the same signature as
         * {@link goog.ui.ac.ArrayMatcher.getMatchesForRows}, i.e. its arguments are
         * searchToken, maxMatches, rowsToSearch; and it returns a list of matching
         * rows.
         *
         * Default value: {@link goog.ui.ac.ArrayMatcher.getMatchesForRows}.
         *
         * @param {function(string, number, !Array.<!Object>): !Array.<!Object>}
         *     localMatcher
         */
        setLocalMatcher(localMatcher: (_0: string, _1: number, _2: Object[]) => Object[]): void;
    
        /**
         * Function used to pass matches to the autocomplete.
         * @param {string} token Token to match.
         * @param {number} maxMatches Max number of matches to return.
         * @param {Function} matchHandler callback to execute after matching.
         */
        requestMatchingRows(token: string, maxMatches: number, matchHandler: Function): void;
    }
}

