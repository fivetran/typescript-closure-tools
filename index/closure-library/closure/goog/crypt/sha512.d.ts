/// <reference path="../../../globals.d.ts" />
/// <reference path="./sha2_64bit.d.ts" />

declare module goog.crypt {

    class Sha512 extends Sha512.__Class { }
    module Sha512 {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.crypt.Sha2_64bit.__Class {
    
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
}
