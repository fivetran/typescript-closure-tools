/// <reference path="../../../globals.d.ts" />
/// <reference path="./sha2_64bit.d.ts" />

declare module goog.crypt {

    class Sha512 extends __Sha512 { }
    class __Sha512 extends goog.crypt.__Sha2_64bit {
    
        /**
         * Constructs a SHA-512 cryptographic hash.
         *
         * @constructor
         * @extends {goog.crypt.Sha2_64bit}
         * @final
         * @struct
         */
        constructor();
    }
}
