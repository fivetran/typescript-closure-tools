/// <reference path="../../../../../closure/goog/base.d.ts" />

declare module goog.dom.pattern.callback {

    /**
     * Callback class for counting matches.
     * @constructor
     * @final
     */
    class Counter {
        /**
         * Callback class for counting matches.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * The count of objects matched so far.
         *
         * @type {number}
         */
        count: number;
    
        /**
         * Get a bound callback function that is suitable as a callback for
         * {@link goog.dom.pattern.Matcher}.
         *
         * @return {Function} A callback function.
         */
        getCallback(): Function;
    
        /**
         * Reset the counter.
         */
        reset(): void;
    }
}

