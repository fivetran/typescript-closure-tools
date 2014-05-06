/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />

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

