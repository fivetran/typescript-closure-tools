// Generated Thu May  1 17:20:12 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/crypt/hash.d.ts" />

declare module goog.crypt.Sha2 {

    /**
     * Constants used in SHA-2.
     * @const
     * @private {!Array.<number>}
     */
    var K_: any /*missing*/;
}

declare module goog.crypt {

    /**
     * SHA-2 cryptographic hash constructor.
     * This constructor should not be used directly to create the object. Rather,
     * one should use the constructor of the sub-classes.
     * @constructor
     * @extends {goog.crypt.Hash}
     * @struct
     */
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

