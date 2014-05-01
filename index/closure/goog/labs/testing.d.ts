// Generated Wed Apr 30 16:38:57 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/string.d.ts" />

declare module 'goog.labs.testing' {

    /**
     * Asserts that the actual value evaluated by the matcher is true.
     *
     * @param {*} actual The object to assert by the matcher.
     * @param {!goog.labs.testing.Matcher} matcher A matcher to verify values.
     * @param {string=} opt_reason Description of what is asserted.
     *
     */
    function assertThat(actual: any, matcher: goog.labs.testing.Matcher, opt_reason?: string): void;

    /**
     * A matcher object to be used in assertThat statements.
     * @interface
     */
    interface Matcher {
        matches(value: any): boolean;
        describe(value: any, opt_description?: string): string;
    }

    /**
     * Error thrown when a Matcher fails to match the input value.
     * @param {string=} opt_message The error message.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class MatcherError extends goog.debug.Error {
        /**
         * Error thrown when a Matcher fails to match the input value.
         * @param {string=} opt_message The error message.
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor(opt_message?: string);
    }

    /**
     * The Anything matcher. Matches all possible inputs.
     *
     * @constructor
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class AnythingMatcher implements goog.labs.testing.Matcher {
        /**
         * The Anything matcher. Matches all possible inputs.
         *
         * @constructor
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor();
    
        /**
         * Matches anything. Useful if one doesn't care what the object under test is.
         *
         * @override
         */
        matches(): void;
    
        /**
         * This method is never called but is needed so AnythingMatcher implements the
         * Matcher interface.
         *
         * @override
         */
        describe(): void;
    }

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
    
        /**
         * Determines if an object has particular entries.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if an object has a particular entry.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if an object has a key.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if an object contains a value
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
    }

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
    
        /**
         * Determines if all of the matchers match the input value.
         *
         * @override
         */
        matches(): void;
    
        /**
         * Describes why the matcher failed. The returned string is a concatenation of
         * all the failed matchers' error strings.
         *
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if any of the matchers matches the input value.
         *
         * @override
         */
        matches(): void;
    
        /**
         * Describes why the matcher failed.
         *
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if the input value doesn't satisfy a matcher.
         *
         * @override
         */
        matches(): void;
    
        /**
         * Describes why the matcher failed.
         *
         * @override
         */
        describe(): void;
    }

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
    
        /**
         * Determines if input value is greater than the expected value.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if the input value is less than the expected value.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if the input value is greater than equal to the expected value.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if the input value is less than or equal to the expected value.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if the input value is equal to the expected value.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if input value is within a certain range of the expected value.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
    }

    /**
     * The Equals matcher.
     *
     * @param {!Object} expectedObject The expected object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class ObjectEqualsMatcher implements goog.labs.testing.Matcher {
        /**
         * The Equals matcher.
         *
         * @param {!Object} expectedObject The expected object.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(expectedObject: Object);
    
        /**
         * Determines if two objects are the same.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
    }

    /**
     * The HasProperty matcher.
     *
     * @param {string} property Name of the property to test.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class HasPropertyMatcher implements goog.labs.testing.Matcher {
        /**
         * The HasProperty matcher.
         *
         * @param {string} property Name of the property to test.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(property: string);
    
        /**
         * Determines if an object has a property.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
    }

    /**
     * The InstanceOf matcher.
     *
     * @param {!Object} object The expected class object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class InstanceOfMatcher implements goog.labs.testing.Matcher {
        /**
         * The InstanceOf matcher.
         *
         * @param {!Object} object The expected class object.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(object: Object);
    
        /**
         * Determines if an object is an instance of another object.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
    }

    /**
     * The IsNullOrUndefined matcher.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class IsNullOrUndefinedMatcher implements goog.labs.testing.Matcher {
        /**
         * The IsNullOrUndefined matcher.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor();
    
        /**
         * Determines if input value is null or undefined.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
    }

    /**
     * The IsNull matcher.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class IsNullMatcher implements goog.labs.testing.Matcher {
        /**
         * The IsNull matcher.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor();
    
        /**
         * Determines if input value is null.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
    }

    /**
     * The IsUndefined matcher.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class IsUndefinedMatcher implements goog.labs.testing.Matcher {
        /**
         * The IsUndefined matcher.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor();
    
        /**
         * Determines if input value is undefined.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
    }

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
    
        /**
         * Determines if input string contains the expected string.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if input string ends with the expected string.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if input string contains the expected string.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if input string is equal to the expected string.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if input string is equal to the expected string.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if input string starts with the expected string.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
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
    
        /**
         * Determines if input string contains, in order, the expected array of strings.
         *
         * @override
         */
        matches(): void;
    
        /**
         * @override
         */
        describe(): void;
    }
}

declare module 'goog.labs.testing.Matcher' {

    /**
     * Generates a Matcher from the ‘matches’ and ‘describe’ functions passed in.
     *
     * @param {!Function} matchesFunction The ‘matches’ function.
     * @param {Function=} opt_describeFunction The ‘describe’ function.
     * @return {!Function} The custom matcher.
     */
    function makeMatcher(matchesFunction: Function, opt_describeFunction?: Function): Function;
}

