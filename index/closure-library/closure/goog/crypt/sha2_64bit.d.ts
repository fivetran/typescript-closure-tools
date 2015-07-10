/// <reference path="../../../globals.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt {

    class Sha2_64bit extends Sha2_64bit__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Sha2_64bit__Class extends goog.crypt.Hash__Class  { 
    
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
             * The number of bytes that are digested in each pass of this hasher.
             * @type {number}
             */
            blockSize: number;
    
            /**
             * Resets this hash function.
             */
            reset(): void;
    } 
    
}
