/// <reference path="../../../globals.d.ts" />

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
