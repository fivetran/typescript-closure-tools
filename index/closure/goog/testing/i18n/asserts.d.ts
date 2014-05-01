// Generated Thu May  1 12:42:28 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/testing/stacktrace.d.ts" />
/// <reference path="../../../goog/testing/asserts.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/testing/testcase.d.ts" />
/// <reference path="../../../goog/testing/testrunner.d.ts" />
/// <reference path="../../../goog/testing/jsunit.d.ts" />

declare module goog.testing.i18n.asserts {

    /**
     * Asserts that the two values are "almost equal" from i18n perspective
     * (based on a manually maintained and validated whitelist).
     * @param {string} expected The expected value.
     * @param {string} actual The actual value.
     */
    function assertI18nEquals(expected: string, actual: string): void;
}

