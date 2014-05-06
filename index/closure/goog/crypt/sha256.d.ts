/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/crypt/hash.d.ts" />
/// <reference path="../../../closure/goog/crypt/sha2.d.ts" />

declare module goog.crypt {

    /**
     * SHA-256 cryptographic hash constructor.
     *
     * @constructor
     * @extends {goog.crypt.Sha2}
     * @final
     * @struct
     */
    class Sha256 extends goog.crypt.Sha2 {
        /**
         * SHA-256 cryptographic hash constructor.
         *
         * @constructor
         * @extends {goog.crypt.Sha2}
         * @final
         * @struct
         */
        constructor();
    }
}

