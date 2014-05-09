/// <reference path="../../../globals.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt {

    class Md5 extends goog.crypt.Hash {
    
        /**
         * MD5 cryptographic hash constructor.
         * @constructor
         * @extends {goog.crypt.Hash}
         * @final
         * @struct
         */
        constructor();
    }
}
