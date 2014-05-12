/// <reference path="../../../globals.d.ts" />
/// <reference path="./sha2.d.ts" />

declare module goog.crypt {

    class Sha224 extends Sha224.__Class { }
    module Sha224 {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.crypt.Sha2.__Class {
    
            /**
             * SHA-224 cryptographic hash constructor.
             *
             * @constructor
             * @extends {goog.crypt.Sha2}
             * @final
             * @struct
             */
            constructor();
        }
    }
}
