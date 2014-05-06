/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/i18n/uchar.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />

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

