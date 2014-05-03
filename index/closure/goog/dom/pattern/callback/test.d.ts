// Generated Sat May  3 12:12:18 PDT 2014

/// <reference path="../../../../goog/base.d.ts" />
/// <reference path="../../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../../goog/debug/error.d.ts" />
/// <reference path="../../../../goog/string/string.d.ts" />
/// <reference path="../../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../../goog/array/array.d.ts" />
/// <reference path="../../../../goog/math/math.d.ts" />
/// <reference path="../../../../goog/functions/functions.d.ts" />
/// <reference path="../../../../goog/iter/iter.d.ts" />

declare module goog.dom.pattern.callback {

    /**
     * Callback class for testing for at least one match.
     * @constructor
     * @final
     */
    class Test {
        /**
         * Callback class for testing for at least one match.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Whether or not the pattern matched.
         *
         * @type {boolean}
         */
        matched: boolean;
    
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

