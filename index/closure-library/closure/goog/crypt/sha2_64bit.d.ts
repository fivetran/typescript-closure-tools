/// <reference path="../../../globals.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt {

    class Sha2_64bit extends Sha2_64bit.__Class { }
    module Sha2_64bit {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.crypt.Hash.__Class {
    
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
}
