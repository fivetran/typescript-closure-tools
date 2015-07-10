/// <reference path="../../../globals.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt {

    class Hmac extends Hmac__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Hmac__Class extends goog.crypt.Hash__Class  { 
    
            /**
             * @constructor
             * @param {!goog.crypt.Hash} hasher An object to serve as a hash function.
             * @param {Array.<number>} key The secret key to use to calculate the hmac.
             *     Should be an array of not more than {@code blockSize} integers in
                   {0, 255}.
             * @param {number=} opt_blockSize Optional. The block size {@code hasher} uses.
             *     If not specified, uses the block size from the hasher, or 16 if it is
             *     not specified.
             * @extends {goog.crypt.Hash}
             * @final
             * @struct
             */
            constructor(hasher: goog.crypt.Hash, key: number[], opt_blockSize?: number);
    
            /**
             * Calculates an HMAC for a given message.
             *
             * @param {Array.<number>} message  An array of integers in {0, 255}.
             * @return {!Array.<number>} the digest of the given message.
             */
            getHmac(message: number[]): number[];
    } 
    
}
