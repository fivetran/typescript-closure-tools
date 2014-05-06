/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/long.d.ts" />
/// <reference path="../../../closure/goog/crypt/hash.d.ts" />
/// <reference path="../../../closure/goog/crypt/sha2_64bit.d.ts" />

declare module goog.crypt {

    /**
     * Constructs a SHA-384 cryptographic hash.
     *
     * @constructor
     * @extends {goog.crypt.Sha2_64bit}
     * @final
     * @struct
     */
    class Sha384 extends goog.crypt.Sha2_64bit {
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

