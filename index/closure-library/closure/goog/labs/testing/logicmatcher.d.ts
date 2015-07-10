/// <reference path="../../../../globals.d.ts" />
/// <reference path="./matcher.d.ts" />

declare module goog.labs.testing {

    class AllOfMatcher extends AllOfMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class AllOfMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
    

    class AnyOfMatcher extends AnyOfMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class AnyOfMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
    

    class IsNotMatcher extends IsNotMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class IsNotMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
