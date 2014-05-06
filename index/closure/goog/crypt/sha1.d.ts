/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/crypt/hash.d.ts" />

declare module goog.crypt {

    /**
     * SHA-1 cryptographic hash constructor.
     *
     * The properties declared here are discussed in the above algorithm document.
     * @constructor
     * @extends {goog.crypt.Hash}
     * @final
     * @struct
     */
    class Sha1 extends goog.crypt.Hash {
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

