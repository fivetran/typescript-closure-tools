/// <reference path="../../../globals.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt {

    class Md5 extends Md5__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Md5__Class extends goog.crypt.Hash__Class  { 
    
            /**
             * MD5 cryptographic hash constructor.
             * @constructor
             * @extends {goog.crypt.Hash}
             * @final
             * @struct
             */
            constructor();
    } 
    
}
