/// <reference path="../../../globals.d.ts" />

declare module goog.vec {

    class Float64Array extends Float64Array__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Float64Array__Class  { 
    
            /**
             * Constructs a new Float64Array. The new array is initialized to all zeros.
             *
             * @param {goog.vec.Float64Array|Array|ArrayBuffer|number} p0
             *     The length of the array, or an array to initialize the contents of the
             *     new Float64Array.
             * @constructor
             * @final
             */
            constructor(p0: goog.vec.Float64Array|any[]|ArrayBuffer|number);
    
            /**
             * The number of bytes in an element (as defined by the Typed Array
             * specification).
             *
             * @type {number}
             */
            BYTES_PER_ELEMENT: number;
    
            /**
             * Sets elements of the array.
             * @param {Array.<number>|Float64Array} values The array of values.
             * @param {number=} opt_offset The offset in this array to start.
             */
            set(values: number[]|Float64Array, opt_offset?: number): void;
    } 
    
}

declare module goog.vec.Float64Array {

    /**
     * The number of bytes in an element (as defined by the Typed Array
     * specification).
     *
     * @type {number}
     */
    var BYTES_PER_ELEMENT: number;
}
