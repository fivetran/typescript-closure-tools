/// <reference path="../../../globals.d.ts" />
/// <reference path="./sha2.d.ts" />

declare module goog.crypt {

    class Sha256 extends __Sha256 { }
    class __Sha256 extends goog.crypt.__Sha2 {
    
        /**
         * SHA-256 cryptographic hash constructor.
         *
         * @constructor
         * @extends {goog.crypt.Sha2}
         * @final
         * @struct
         */
        constructor();
    }
}
