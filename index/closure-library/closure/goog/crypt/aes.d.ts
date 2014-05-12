/// <reference path="../../../globals.d.ts" />
/// <reference path="./blockcipher.d.ts" />

declare module goog.crypt {

    class Aes extends Aes.__Class { }
    module Aes {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.crypt.BlockCipher {
    
            /**
             * Implementation of AES in JavaScript.
             * See http://en.wikipedia.org/wiki/Advanced_Encryption_Standard
             *
             * WARNING: This is ECB mode only. If you are encrypting something
             * longer than 16 bytes, or encrypting more than one value with the same key
             * (so basically, always) you need to use this with a block cipher mode of
             * operation.  See goog.crypt.Cbc.
             *
             * See http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation for more
             * information.
             *
             * @constructor
             * @implements {goog.crypt.BlockCipher}
             * @param {!Array.<number>} key The key as an array of integers in {0, 255}.
             *     The key must have lengths of 16, 24, or 32 integers for 128-,
             *     192-, or 256-bit encryption, respectively.
             * @final
             * @struct
             */
            constructor(key: number[]);
    
            /**
             * Encrypt a plaintext block.  The implementation may expect (and assert)
             * a particular block length.
             * @param {!Array.<number>} input Plaintext array of input bytes.
             * @return {!Array.<number>} Encrypted ciphertext array of bytes.  Should be the
             *     same length as input.
             */
            encrypt(input: number[]): number[];
    
            /**
             * Decrypt a plaintext block.  The implementation may expect (and assert)
             * a particular block length.
             * @param {!Array.<number>} input Ciphertext. Array of input bytes.
             * @return {!Array.<number>} Decrypted plaintext array of bytes.  Should be the
             *     same length as input.
             */
            decrypt(input: number[]): number[];
        }
    }
}
