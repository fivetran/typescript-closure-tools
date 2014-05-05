// Generated Mon May  5 11:04:03 PDT 2014

/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/labs/testing/matcher.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />

declare module goog.labs.testing {

    /**
     * The AllOf matcher.
     *
     * @param {!Array.<!goog.labs.testing.Matcher>} matchers Input matchers.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class AllOfMatcher implements goog.labs.testing.Matcher {
        /**
         * The AllOf matcher.
         *
         * @param {!Array.<!goog.labs.testing.Matcher>} matchers Input matchers.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(matchers: goog.labs.testing.Matcher[]);
    }

    /**
     * The AnyOf matcher.
     *
     * @param {!Array.<!goog.labs.testing.Matcher>} matchers Input matchers.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class AnyOfMatcher implements goog.labs.testing.Matcher {
        /**
         * The AnyOf matcher.
         *
         * @param {!Array.<!goog.labs.testing.Matcher>} matchers Input matchers.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(matchers: goog.labs.testing.Matcher[]);
    }

    /**
     * The IsNot matcher.
     *
     * @param {!goog.labs.testing.Matcher} matcher The matcher to negate.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class IsNotMatcher implements goog.labs.testing.Matcher {
        /**
         * The IsNot matcher.
         *
         * @param {!goog.labs.testing.Matcher} matcher The matcher to negate.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(matcher: goog.labs.testing.Matcher);
    }
}

