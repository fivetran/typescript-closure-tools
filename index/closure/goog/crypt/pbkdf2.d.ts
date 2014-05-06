/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/crypt/crypt.d.ts" />
/// <reference path="../../../closure/goog/crypt/hash.d.ts" />
/// <reference path="../../../closure/goog/crypt/sha1.d.ts" />
/// <reference path="../../../closure/goog/crypt/hmac.d.ts" />

declare module goog.crypt.pbkdf2 {

    /**
     * Derives key from password using PBKDF2-SHA1
     * @param {!Array.<number>} password Byte array representation of the password
     *     from which the key is derived.
     * @param {!Array.<number>} initialSalt Byte array representation of the salt.
     * @param {number} iterations Number of interations when computing the key.
     * @param {number} keyLength Length of the output key in bits.
     *     Must be multiple of 8.
     * @return {!Array.<number>} Byte array representation of the output key.
     */
    function deriveKeySha1(password: number[], initialSalt: number[], iterations: number, keyLength: number): number[];
}

