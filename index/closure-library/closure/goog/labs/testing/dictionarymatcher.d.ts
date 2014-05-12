/// <reference path="../../../../globals.d.ts" />
/// <reference path="./matcher.d.ts" />

declare module goog.labs.testing {

    class HasEntriesMatcher extends HasEntriesMatcher.__Class { }
    module HasEntriesMatcher {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.labs.testing.Matcher {
    
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
    
            /**
             * Determines whether a value matches the constraints of the match.
             *
             * @param {*} value The object to match.
             * @return {boolean} Whether the input value matches this matcher.
             */
            matches(value: any): boolean;
    
            /**
             * Describes why the matcher failed.
             *
             * @param {*} value The value that didn't match.
             * @param {string=} opt_description A partial description to which the reason
             *     will be appended.
             *
             * @return {string} Description of why the matcher failed.
             */
            describe(value: any, opt_description?: string): string;
        }
    }

    class HasEntryMatcher extends HasEntryMatcher.__Class { }
    module HasEntryMatcher {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.labs.testing.Matcher {
    
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
    
            /**
             * Determines whether a value matches the constraints of the match.
             *
             * @param {*} value The object to match.
             * @return {boolean} Whether the input value matches this matcher.
             */
            matches(value: any): boolean;
    
            /**
             * Describes why the matcher failed.
             *
             * @param {*} value The value that didn't match.
             * @param {string=} opt_description A partial description to which the reason
             *     will be appended.
             *
             * @return {string} Description of why the matcher failed.
             */
            describe(value: any, opt_description?: string): string;
        }
    }

    class HasKeyMatcher extends HasKeyMatcher.__Class { }
    module HasKeyMatcher {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.labs.testing.Matcher {
    
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
    
            /**
             * Determines whether a value matches the constraints of the match.
             *
             * @param {*} value The object to match.
             * @return {boolean} Whether the input value matches this matcher.
             */
            matches(value: any): boolean;
    
            /**
             * Describes why the matcher failed.
             *
             * @param {*} value The value that didn't match.
             * @param {string=} opt_description A partial description to which the reason
             *     will be appended.
             *
             * @return {string} Description of why the matcher failed.
             */
            describe(value: any, opt_description?: string): string;
        }
    }

    class HasValueMatcher extends HasValueMatcher.__Class { }
    module HasValueMatcher {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.labs.testing.Matcher {
    
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
    
            /**
             * Determines whether a value matches the constraints of the match.
             *
             * @param {*} value The object to match.
             * @return {boolean} Whether the input value matches this matcher.
             */
            matches(value: any): boolean;
    
            /**
             * Describes why the matcher failed.
             *
             * @param {*} value The value that didn't match.
             * @param {string=} opt_description A partial description to which the reason
             *     will be appended.
             *
             * @return {string} Description of why the matcher failed.
             */
            describe(value: any, opt_description?: string): string;
        }
    }
}
