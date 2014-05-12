/// <reference path="../../../globals.d.ts" />

declare module goog.crypt {

    interface BlockCipher {
    
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
