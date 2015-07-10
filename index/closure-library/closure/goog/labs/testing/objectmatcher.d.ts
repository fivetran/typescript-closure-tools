/// <reference path="../../../../globals.d.ts" />
/// <reference path="./matcher.d.ts" />

declare module goog.labs.testing {

    class ObjectEqualsMatcher extends ObjectEqualsMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ObjectEqualsMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
    

    class HasPropertyMatcher extends HasPropertyMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class HasPropertyMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
    

    class InstanceOfMatcher extends InstanceOfMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class InstanceOfMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
    

    class IsNullOrUndefinedMatcher extends IsNullOrUndefinedMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class IsNullOrUndefinedMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
    

    class IsNullMatcher extends IsNullMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class IsNullMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
    

    class IsUndefinedMatcher extends IsUndefinedMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class IsUndefinedMatcher__Class implements goog.labs.testing.Matcher  { 
    
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
