/// <reference path="../../../globals.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt {

    class Sha1 extends Sha1.__Class { }
    module Sha1 {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.crypt.Hash.__Class {
    
            /**
             * SHA-1 cryptographic hash constructor.
             *
             * The properties declared here are discussed in the above algorithm document.
             * @constructor
             * @extends {goog.crypt.Hash}
             * @final
             * @struct
             */
            constructor();
        }
    }
}
