// Generated Thu May  1 21:07:26 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/labs/testing/matcher.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />

declare module goog.labs.testing {

    /**
     * The HasEntries matcher.
     *
     * @param {!Object} entries The entries to check in the object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class HasEntriesMatcher implements goog.labs.testing.Matcher {
        /**
         * The HasEntries matcher.
         *
         * @param {!Object} entries The entries to check in the object.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(entries: Object);
    }

    /**
     * The HasEntry matcher.
     *
     * @param {string} key The key for the entry.
     * @param {*} value The value for the key.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class HasEntryMatcher implements goog.labs.testing.Matcher {
        /**
         * The HasEntry matcher.
         *
         * @param {string} key The key for the entry.
         * @param {*} value The value for the key.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(key: string, value: any);
    }

    /**
     * The HasKey matcher.
     *
     * @param {string} key The key to check in the object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class HasKeyMatcher implements goog.labs.testing.Matcher {
        /**
         * The HasKey matcher.
         *
         * @param {string} key The key to check in the object.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(key: string);
    }

    /**
     * The HasValue matcher.
     *
     * @param {*} value The value to check in the object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class HasValueMatcher implements goog.labs.testing.Matcher {
        /**
         * The HasValue matcher.
         *
         * @param {*} value The value to check in the object.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: any);
    }
}

