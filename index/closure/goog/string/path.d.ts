// Generated Wed Apr 30 22:44:16 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />

declare module goog.string.path {

    /**
     * Returns the final component of a pathname.
     * See http://docs.python.org/library/os.path.html#os.path.basename
     * @param {string} path A pathname.
     * @return {string} path The final component of a pathname, i.e. everything
     *     after the final slash.
     */
    function baseName(path: string): string;

    /**
     * Alias to goog.string.path.baseName.
     * @param {string} path A pathname.
     * @return {string} path The final component of a pathname.
     * @deprecated Use goog.string.path.baseName.
     */
    var basename: any /*missing*/;

    /**
     * Returns the directory component of a pathname.
     * See http://docs.python.org/library/os.path.html#os.path.dirname
     * @param {string} path A pathname.
     * @return {string} The directory component of a pathname, i.e. everything
     *     leading up to the final slash.
     */
    function dirname(path: string): string;

    /**
     * Extracts the extension part of a pathname.
     * @param {string} path The path name to process.
     * @return {string} The extension if any, otherwise the empty string.
     */
    function extension(path: string): string;

    /**
     * Joins one or more path components (e.g. 'foo/' and 'bar' make 'foo/bar').
     * An absolute component will discard all previous component.
     * See http://docs.python.org/library/os.path.html#os.path.join
     * @param {...string} var_args One of more path components.
     * @return {string} The path components joined.
     */
    function join(...var_args: string[]): string;

    /**
     * Normalizes a pathname by collapsing duplicate separators, parent directory
     * references ('..'), and current directory references ('.').
     * See http://docs.python.org/library/os.path.html#os.path.normpath
     * @param {string} path One or more path components.
     * @return {string} The path after normalization.
     */
    function normalizePath(path: string): string;

    /**
     * Splits a pathname into "dirname" and "baseName" components, where "baseName"
     * is everything after the final slash. Either part may return an empty string.
     * See http://docs.python.org/library/os.path.html#os.path.split
     * @param {string} path A pathname.
     * @return {!Array.<string>} An array of [dirname, basename].
     */
    function split(path: string): string[];
}

