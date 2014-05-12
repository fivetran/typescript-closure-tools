/// <reference path="../../../globals.d.ts" />
/// <reference path="../graphics/path.d.ts" />

declare module goog.testing.graphics {

    /**
     * Test if the given path matches the expected array of commands and parameters.
     * @param {Array.<string|number>} expected The expected array of commands and
     *     parameters.
     * @param {goog.graphics.Path} path The path to test against.
     */
    function assertPathEquals(expected: any /*string|number*/[], path: goog.graphics.Path): void;
}
