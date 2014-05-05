// Generated Sun May  4 18:11:45 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />

declare module goog.proto2.Util {

    /**
     * Asserts that the given condition is true, if and only if the PBCHECK
     * flag is on.
     *
     * @param {*} condition The condition to check.
     * @param {string=} opt_message Error message in case of failure.
     * @throws {Error} Assertion failed, the condition evaluates to false.
     */
    function assert(condition: any, opt_message?: string): void;

    /**
     * Returns true if debug assertions (checks) are on.
     *
     * @return {boolean} The value of the PBCHECK constant.
     */
    function conductChecks(): boolean;
}

