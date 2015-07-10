/// <reference path="../../../globals.d.ts" />

declare module goog.i18n {

    class CharListDecompressor extends CharListDecompressor__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class CharListDecompressor__Class  { 
    
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
