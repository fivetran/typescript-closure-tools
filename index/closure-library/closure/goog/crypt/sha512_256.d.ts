/// <reference path="../../../globals.d.ts" />
/// <reference path="./sha2_64bit.d.ts" />

declare module goog.crypt {

    class Sha512_256 extends Sha512_256__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Sha512_256__Class extends goog.crypt.Sha2_64bit__Class  { 
    
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
