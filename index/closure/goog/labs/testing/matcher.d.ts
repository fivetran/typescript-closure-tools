// Generated Wed Apr 30 22:45:16 PDT 2014

/// <reference path="../../../goog/base.d.ts" />

declare module goog.labs.testing.Matcher {

    /**
     * Generates a Matcher from the ‘matches’ and ‘describe’ functions passed in.
     *
     * @param {!Function} matchesFunction The ‘matches’ function.
     * @param {Function=} opt_describeFunction The ‘describe’ function.
     * @return {!Function} The custom matcher.
     */
    function makeMatcher(matchesFunction: Function, opt_describeFunction?: Function): Function;
}

declare module goog.labs.testing {

    /**
     * A matcher object to be used in assertThat statements.
     * @interface
     */
    interface Matcher {
        matches(value: any): boolean;
        describe(value: any, opt_description?: string): string;
    }
}

