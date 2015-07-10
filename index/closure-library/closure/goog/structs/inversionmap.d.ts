/// <reference path="../../../globals.d.ts" />

declare module goog.structs {

    class InversionMap<T> extends InversionMap__Class<T> { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class InversionMap__Class<T>  { 
    
            /**
             * Maps ranges to values.
             * @param {Array.<number>} rangeArray An array of monotonically
             *     increasing integer values, with at least one instance.
             * @param {Array.<T>} valueArray An array of corresponding values.
             *     Length must be the same as rangeArray.
             * @param {boolean=} opt_delta If true, saves only delta from previous value.
             * @constructor
             * @template T
             */
            constructor(rangeArray: number[], valueArray: T[], opt_delta?: boolean);
    
            /**
             * @protected {Array}
             */
            rangeArray: any /*missing*/;
    
            /** @protected {Array.<T>} */
            values: any /*missing*/;
    
            /**
             * Splices a range -> value map into this inversion map.
             * @param {Array.<number>} rangeArray An array of monotonically
             *     increasing integer values, with at least one instance.
             * @param {Array.<T>} valueArray An array of corresponding values.
             *     Length must be the same as rangeArray.
             * @param {boolean=} opt_delta If true, saves only delta from previous value.
             */
            spliceInversion(rangeArray: number[], valueArray: T[], opt_delta?: boolean): void;
    
            /**
             * Gets the value corresponding to a number from the inversion map.
             * @param {number} intKey The number for which value needs to be retrieved
             *     from inversion map.
             * @return {T|null} Value retrieved from inversion map; null if not found.
             */
            at(intKey: number): T|any /*null*/;
    
            /**
             * Gets the largest index such that rangeArray[index] <= intKey from the
             * inversion map.
             * @param {number} intKey The probe for which rangeArray is searched.
             * @return {number} Largest index such that rangeArray[index] <= intKey.
             * @protected
             */
            getLeast(intKey: number): number;
    } 
    
}
