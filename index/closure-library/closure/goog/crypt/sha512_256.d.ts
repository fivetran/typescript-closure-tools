/// <reference path="../../../globals.d.ts" />
/// <reference path="./sha2_64bit.d.ts" />

declare module goog.crypt {

    class Sha512_256 extends Sha512_256.__Class { }
    module Sha512_256 {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.crypt.Sha2_64bit.__Class {
    
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
}
