// Generated Thu May  1 16:40:16 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/crypt/crypt.d.ts" />
/// <reference path="../../goog/crypt/hash.d.ts" />
/// <reference path="../../goog/crypt/sha1.d.ts" />
/// <reference path="../../goog/crypt/hmac.d.ts" />

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

