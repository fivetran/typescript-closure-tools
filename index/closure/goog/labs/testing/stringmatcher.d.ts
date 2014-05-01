// Generated Wed Apr 30 22:45:15 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/labs/testing/matcher.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />

declare module goog.labs.testing {

    /**
     * The ContainsString matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class ContainsStringMatcher implements goog.labs.testing.Matcher {
        /**
         * The ContainsString matcher.
         *
         * @param {string} value The expected string.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: string);
    }

    /**
     * The EndsWith matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class EndsWithMatcher implements goog.labs.testing.Matcher {
        /**
         * The EndsWith matcher.
         *
         * @param {string} value The expected string.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: string);
    }

    /**
     * The EqualToIgnoringWhitespace matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class EqualToIgnoringWhitespaceMatcher implements goog.labs.testing.Matcher {
        /**
         * The EqualToIgnoringWhitespace matcher.
         *
         * @param {string} value The expected string.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: string);
    }

    /**
     * The Equals matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class EqualsMatcher implements goog.labs.testing.Matcher {
        /**
         * The Equals matcher.
         *
         * @param {string} value The expected string.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: string);
    }

    /**
     * The MatchesRegex matcher.
     *
     * @param {!RegExp} regex The expected regex.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class RegexMatcher implements goog.labs.testing.Matcher {
        /**
         * The MatchesRegex matcher.
         *
         * @param {!RegExp} regex The expected regex.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(regex: RegExp);
    }

    /**
     * The StartsWith matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class StartsWithMatcher implements goog.labs.testing.Matcher {
        /**
         * The StartsWith matcher.
         *
         * @param {string} value The expected string.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: string);
    }

    /**
     * The StringContainsInOrdermatcher.
     *
     * @param {Array.<string>} values The expected string values.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class StringContainsInOrderMatcher implements goog.labs.testing.Matcher {
        /**
         * The StringContainsInOrdermatcher.
         *
         * @param {Array.<string>} values The expected string values.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(values: string[]);
    }
}

