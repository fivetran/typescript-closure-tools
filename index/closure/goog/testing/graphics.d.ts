// Generated Wed Apr 30 22:45:48 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/testing/stacktrace.d.ts" />
/// <reference path="../../goog/testing/asserts.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/graphics/path.d.ts" />

declare module goog.testing.graphics {

    /**
     * Test if the given path matches the expected array of commands and parameters.
     * @param {Array.<string|number>} expected The expected array of commands and
     *     parameters.
     * @param {goog.graphics.Path} path The path to test against.
     */
    function assertPathEquals(expected: any /*string|number*/[], path: goog.graphics.Path): void;
}

