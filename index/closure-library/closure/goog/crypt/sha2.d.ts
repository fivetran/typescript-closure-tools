/// <reference path="../../../globals.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt {

    class Sha2 extends goog.crypt.Hash {
    
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

declare module goog.crypt.Sha2 {

    /**
     * Constants used in SHA-2.
     * @const
     * @private {!Array.<number>}
     */
    var K_: any /*missing*/;
}
