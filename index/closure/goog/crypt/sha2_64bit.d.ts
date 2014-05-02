// Generated Fri May  2 10:37:07 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/long.d.ts" />
/// <reference path="../../goog/crypt/hash.d.ts" />

declare module goog.crypt.Sha2_64bit {

    /**
     * Constants used in SHA-512 variants
     * @const
     * @private {!Array.<!goog.math.Long>}
     */
    var K_: any /*missing*/;
}

declare module goog.crypt {

    /**
     * Constructs a SHA-2 64-bit cryptographic hash.
     * This constructor should not be used directly to create the object. Rather,
     * one should use the constructor of one of its subclasses.
     * @constructor
     * @param {number} numHashBlocks The size of the output in 16-byte blocks
     * @param {!Array.<number>} initHashBlocks The hash-specific initialization
     *     vector, as a sequence of 32-bit numbers.
     * @extends {goog.crypt.Hash}
     * @struct
     */
    class Sha2_64bit extends goog.crypt.Hash {
        /**
         * Constructs a SHA-2 64-bit cryptographic hash.
         * This constructor should not be used directly to create the object. Rather,
         * one should use the constructor of one of its subclasses.
         * @constructor
         * @param {number} numHashBlocks The size of the output in 16-byte blocks
         * @param {!Array.<number>} initHashBlocks The hash-specific initialization
         *     vector, as a sequence of 32-bit numbers.
         * @extends {goog.crypt.Hash}
         * @struct
         */
        constructor(numHashBlocks: number, initHashBlocks: number[]);
    
        /**
         * Resets this hash function.
         */
        reset(): void;
    }
}

