/// <reference path="../../../globals.d.ts" />
/// <reference path="./sha2.d.ts" />

declare module goog.crypt {

    class Sha224 extends Sha224__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Sha224__Class extends goog.crypt.Sha2__Class  { 
    
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
