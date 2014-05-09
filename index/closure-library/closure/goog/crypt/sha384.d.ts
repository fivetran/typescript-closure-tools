/// <reference path="../../../globals.d.ts" />
/// <reference path="./sha2_64bit.d.ts" />

declare module goog.crypt {

    class Sha384 extends goog.crypt.Sha2_64bit {
    
        /**
         * Constructs a SHA-384 cryptographic hash.
         *
         * @constructor
         * @extends {goog.crypt.Sha2_64bit}
         * @final
         * @struct
         */
        constructor();
    }
}
