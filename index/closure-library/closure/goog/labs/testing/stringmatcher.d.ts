/// <reference path="../../../../globals.d.ts" />
/// <reference path="./matcher.d.ts" />

declare module goog.labs.testing {

    class ContainsStringMatcher extends ContainsStringMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ContainsStringMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
    

    class EndsWithMatcher extends EndsWithMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class EndsWithMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
    

    class EqualToIgnoringWhitespaceMatcher extends EqualToIgnoringWhitespaceMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class EqualToIgnoringWhitespaceMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
    

    class EqualsMatcher extends EqualsMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class EqualsMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
    

    class RegexMatcher extends RegexMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class RegexMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
    

    class StartsWithMatcher extends StartsWithMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class StartsWithMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
    

    class StringContainsInOrderMatcher extends StringContainsInOrderMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class StringContainsInOrderMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
