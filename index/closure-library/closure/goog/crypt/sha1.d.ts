/// <reference path="../../../globals.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt {

    class Sha1 extends Sha1__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Sha1__Class extends goog.crypt.Hash__Class  { 
    
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
