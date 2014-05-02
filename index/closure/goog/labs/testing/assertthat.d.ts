// Generated Thu May  1 17:25:46 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/labs/testing/matcher.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />

declare module goog.labs.testing {

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
     * Error thrown when a Matcher fails to match the input value.
     * @param {string=} opt_message The error message.
     * @constructor
     * @extends {goog.debug.GoogError}
     * @final
     */
    class MatcherError extends goog.debug.GoogError {
        /**
         * Error thrown when a Matcher fails to match the input value.
         * @param {string=} opt_message The error message.
         * @constructor
         * @extends {goog.debug.GoogError}
         * @final
         */
        constructor(opt_message?: string);
    }
}

