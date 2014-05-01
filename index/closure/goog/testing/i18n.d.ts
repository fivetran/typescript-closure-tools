// Generated Wed Apr 30 16:40:17 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/testing.d.ts" />

declare module 'goog.testing.i18n.asserts' {

    /**
     * Asserts that the two values are "almost equal" from i18n perspective
     * (based on a manually maintained and validated whitelist).
     * @param {string} expected The expected value.
     * @param {string} actual The actual value.
     */
    function assertI18nEquals(expected: string, actual: string): void;
}

