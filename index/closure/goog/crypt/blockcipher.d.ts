// Generated Fri May  2 11:36:44 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.crypt {

    /**
     * Interface definition for a block cipher.
     * @interface
     */
    interface BlockCipher {
        encrypt(input: number[]): number[];
        decrypt(input: number[]): number[];
    }
}

