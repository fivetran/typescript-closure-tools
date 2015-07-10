/// <reference path="../../../globals.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt {

    class Sha2 extends Sha2__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Sha2__Class extends goog.crypt.Hash__Class  { 
    
            /**
             * SHA-2 cryptographic hash constructor.
             * This constructor should not be used directly to create the object. Rather,
             * one should use the constructor of the sub-classes.
             * @constructor
             * @extends {goog.crypt.Hash}
             * @struct
             */
            constructor();
    
            /**
             * A chunk holding the currently processed message bytes. Once the chunk has
             * 64 bytes, we feed it into computeChunk_ function and reset this.chunk_.
             * Sub-class needs to reset it when overriding reset().
             * @type {!Array.<number>}
             * @protected
             */
            chunk: number[];
    
            /**
             * Current number of bytes in this.chunk_.
             * Sub-class needs to reset it when overriding reset().
             * @type {number}
             * @protected
             */
            inChunk: number;
    
            /**
             * Total number of bytes in currently processed message.
             * Sub-class needs to reset it when overriding reset().
             * @type {number}
             * @protected
             */
            total: number;
    
            /**
             * Holds the previous values of accumulated hash a-h in the computeChunk_
             * function.
             * It is a subclass-dependent value. Sub-class needs to explicitly set it
             * when overriding reset().
             * @type {!Array.<number>}
             * @protected
             */
            hash: number[];
    
            /**
             * The number of output hash blocks (each block is 4 bytes long).
             * It is a subclass-dependent value. Sub-class needs to explicitly set it
             * when overriding reset().
             * @type {number}
             * @protected
             */
            numHashBlocks: number;
    } 
    
}
