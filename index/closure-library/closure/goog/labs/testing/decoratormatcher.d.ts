/// <reference path="../../../../globals.d.ts" />
/// <reference path="./matcher.d.ts" />

declare module goog.labs.testing {

    class AnythingMatcher extends AnythingMatcher.__Class { }
    module AnythingMatcher {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.labs.testing.Matcher {
    
            /**
             * The Anything matcher. Matches all possible inputs.
             *
             * @constructor
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
}
