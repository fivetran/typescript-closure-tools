/// <reference path="../../../globals.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt {

    class Sha2 extends Sha2.__Class { }
    module Sha2 {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.crypt.Hash.__Class {
    
            /**
             * SHA-2 cryptographic hash constructor.
             * This constructor should not be used directly to create the object. Rather,
             * one should use the constructor of the sub-classes.
             * @constructor
             * @extends {goog.crypt.Hash}
             * @struct
             */
            constructor();
        }
    }
}
