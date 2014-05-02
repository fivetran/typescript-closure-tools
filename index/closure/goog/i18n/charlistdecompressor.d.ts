// Generated Thu May  1 16:47:15 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/i18n/uchar.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />

declare module goog.i18n {

    /**
     * Class to decompress base88 compressed character list.
     * @constructor
     * @final
     */
    class CharListDecompressor {
        /**
         * Class to decompress base88 compressed character list.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Gets the list of characters specified in the given string by base 88 scheme.
         * @param {string} str The string encoding character list.
         * @return {!Array.<string>} The list of characters specified by the given
         *     string in base 88 scheme.
         */
        toCharList(str: string): string[];
    }
}

