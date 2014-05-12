/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../debug/error.d.ts" />

declare module goog.labs.format.csv {

    class ParseError extends ParseError.__Class { }
    module ParseError {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.debug.Error.__Class {
    
            /**
             * Error thrown when parsing fails.
             *
             * @param {string} text The CSV source text being parsed.
             * @param {number} index The index, in the string, of the position of the
             *      error.
             * @param {string=} opt_message A description of the violated parse expectation.
             * @constructor
             * @extends {goog.debug.Error}
             * @final
             */
            constructor(text: string, index: number, opt_message?: string);
    
            /** @inheritDoc */
            name: any /*missing*/;
        }
    }

    /**
     * @define {boolean} Enable verbose debugging. This is a flag so it can be
     * enabled in production if necessary post-compilation.  Otherwise, debug
     * information will be stripped to minimize final code size.
     */
    var ENABLE_VERBOSE_DEBUGGING: any /*missing*/;

    /**
     * A token -- a single-character string or a sentinel.
     * @typedef {string|!goog.labs.format.csv.Sentinels_}
     */
    interface Token { /*any (string|goog.labs.format.csv.Sentinels_)*/ }

    /**
     * Parses a CSV string to create a two-dimensional array.
     *
     * This function does not process header lines, etc -- such transformations can
     * be made on the resulting array.
     *
     * @param {string} text The entire CSV text to be parsed.
     * @param {boolean=} opt_ignoreErrors Whether to ignore parsing errors and
     *      instead try to recover and keep going.
     * @return {!Array.<!Array.<string>>} The parsed CSV.
     */
    function parse(text: string, opt_ignoreErrors?: boolean): string[][];

    /**
     * Sentinel tracking objects.
     * @enum {Object}
     * @private
     */
    enum Sentinels_ { EMPTY, EOF, EOR, NEWLINE } 
}
