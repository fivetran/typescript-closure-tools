/// <reference path="../../../globals.d.ts" />

declare module goog.crypt {

    class Hash extends Hash.__Class { }
    module Hash {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Create a cryptographic hash instance.
             *
             * @constructor
             * @struct
             */
            constructor();
    
            /**
             * Resets the internal accumulator.
             */
            reset(): void;
    
            /**
             * Adds a byte array (array with values in [0-255] range) or a string (might
             * only contain 8-bit, i.e., Latin1 characters) to the internal accumulator.
             *
             * Many hash functions operate on blocks of data and implement optimizations
             * when a full chunk of data is readily available. Hence it is often preferable
             * to provide large chunks of data (a kilobyte or more) than to repeatedly
             * call the update method with few tens of bytes. If this is not possible, or
             * not feasible, it might be good to provide data in multiplies of hash block
             * size (often 64 bytes). Please see the implementation and performance tests
             * of your favourite hash.
             *
             * @param {Array.<number>|Uint8Array|string} bytes Data used for the update.
             * @param {number=} opt_length Number of bytes to use.
             */
            update(bytes: number[], opt_length?: number): void;
            /**
             * Adds a byte array (array with values in [0-255] range) or a string (might
             * only contain 8-bit, i.e., Latin1 characters) to the internal accumulator.
             *
             * Many hash functions operate on blocks of data and implement optimizations
             * when a full chunk of data is readily available. Hence it is often preferable
             * to provide large chunks of data (a kilobyte or more) than to repeatedly
             * call the update method with few tens of bytes. If this is not possible, or
             * not feasible, it might be good to provide data in multiplies of hash block
             * size (often 64 bytes). Please see the implementation and performance tests
             * of your favourite hash.
             *
             * @param {Array.<number>|Uint8Array|string} bytes Data used for the update.
             * @param {number=} opt_length Number of bytes to use.
             */
            update(bytes: Uint8Array, opt_length?: number): void;
            /**
             * Adds a byte array (array with values in [0-255] range) or a string (might
             * only contain 8-bit, i.e., Latin1 characters) to the internal accumulator.
             *
             * Many hash functions operate on blocks of data and implement optimizations
             * when a full chunk of data is readily available. Hence it is often preferable
             * to provide large chunks of data (a kilobyte or more) than to repeatedly
             * call the update method with few tens of bytes. If this is not possible, or
             * not feasible, it might be good to provide data in multiplies of hash block
             * size (often 64 bytes). Please see the implementation and performance tests
             * of your favourite hash.
             *
             * @param {Array.<number>|Uint8Array|string} bytes Data used for the update.
             * @param {number=} opt_length Number of bytes to use.
             */
            update(bytes: string, opt_length?: number): void;
    
            /**
             * @return {!Array.<number>} The finalized hash computed
             *     from the internal accumulator.
             */
            digest(): number[];
        }
    }
}
