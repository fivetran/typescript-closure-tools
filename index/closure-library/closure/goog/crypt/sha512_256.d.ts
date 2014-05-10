/// <reference path="../../../globals.d.ts" />
/// <reference path="./sha2_64bit.d.ts" />

declare module goog.crypt {

    class Sha512_256 extends __Sha512_256 { }
    class __Sha512_256 extends goog.crypt.__Sha2_64bit {
    
        /**
         * Constructs a SHA-512/256 cryptographic hash.
         *
         * @constructor
         * @extends {goog.crypt.Sha2_64bit}
         * @final
         * @struct
         */
        constructor();
    }
}
