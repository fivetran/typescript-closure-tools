/// <reference path="../../../globals.d.ts" />
/// <reference path="./sha2_64bit.d.ts" />

declare module goog.crypt {

    class Sha384 extends Sha384__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Sha384__Class extends goog.crypt.Sha2_64bit__Class  { 
    
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
