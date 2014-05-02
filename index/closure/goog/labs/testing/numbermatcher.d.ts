// Generated Fri May  2 15:03:26 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/labs/testing/matcher.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />

declare module goog.labs.testing {

    /**
     * The GreaterThan matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class GreaterThanMatcher implements goog.labs.testing.Matcher {
        /**
         * The GreaterThan matcher.
         *
         * @param {number} value The value to compare.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: number);
    }

    /**
     * The lessThan matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class LessThanMatcher implements goog.labs.testing.Matcher {
        /**
         * The lessThan matcher.
         *
         * @param {number} value The value to compare.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: number);
    }

    /**
     * The GreaterThanEqualTo matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class GreaterThanEqualToMatcher implements goog.labs.testing.Matcher {
        /**
         * The GreaterThanEqualTo matcher.
         *
         * @param {number} value The value to compare.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: number);
    }

    /**
     * The LessThanEqualTo matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class LessThanEqualToMatcher implements goog.labs.testing.Matcher {
        /**
         * The LessThanEqualTo matcher.
         *
         * @param {number} value The value to compare.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: number);
    }

    /**
     * The EqualTo matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class EqualToMatcher implements goog.labs.testing.Matcher {
        /**
         * The EqualTo matcher.
         *
         * @param {number} value The value to compare.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: number);
    }

    /**
     * The CloseTo matcher.
     *
     * @param {number} value The value to compare.
     * @param {number} range The range to check within.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class CloseToMatcher implements goog.labs.testing.Matcher {
        /**
         * The CloseTo matcher.
         *
         * @param {number} value The value to compare.
         * @param {number} range The range to check within.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: number, range: number);
    }
}

