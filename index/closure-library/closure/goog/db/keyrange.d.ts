/// <reference path="../../../globals.d.ts" />

declare module goog.db {

    class KeyRange extends KeyRange.__Class { }
    module KeyRange {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Creates a new IDBKeyRange wrapper object. Should not be created directly,
             * instead use one of the static factory methods. For example:
             * @see goog.db.KeyRange.bound
             * @see goog.db.KeyRange.lowerBound
             *
             * @param {!IDBKeyRange} range Underlying IDBKeyRange object.
             * @constructor
             * @final
             */
            constructor(range: IDBKeyRange);
    
            /**
             * Returns underlying key range object. This is used in ObjectStore's openCursor
             * and count methods.
             * @return {!IDBKeyRange}
             */
            range(): IDBKeyRange;
        }
    }
}

declare module goog.db.KeyRange {

    /**
     * Creates a new key range for a single value.
     *
     * @param {IDBKeyType} key The single value in the range.
     * @return {!goog.db.KeyRange} The key range.
     */
    function only(key: IDBKeyType): goog.db.KeyRange;

    /**
     * Creates a key range with upper and lower bounds.
     *
     * @param {IDBKeyType} lower The value of the lower bound.
     * @param {IDBKeyType} upper The value of the upper bound.
     * @param {boolean=} opt_lowerOpen If true, the range excludes the lower bound
     *     value.
     * @param {boolean=} opt_upperOpen If true, the range excludes the upper bound
     *     value.
     * @return {!goog.db.KeyRange} The key range.
     */
    function bound(lower: IDBKeyType, upper: IDBKeyType, opt_lowerOpen?: boolean, opt_upperOpen?: boolean): goog.db.KeyRange;

    /**
     * Creates a key range with a lower bound only, finishes at the last record.
     *
     * @param {IDBKeyType} lower The value of the lower bound.
     * @param {boolean=} opt_lowerOpen If true, the range excludes the lower bound
     *     value.
     * @return {!goog.db.KeyRange} The key range.
     */
    function lowerBound(lower: IDBKeyType, opt_lowerOpen?: boolean): goog.db.KeyRange;

    /**
     * Creates a key range with a upper bound only, starts at the first record.
     *
     * @param {IDBKeyType} upper The value of the upper bound.
     * @param {boolean=} opt_upperOpen If true, the range excludes the upper bound
     *     value.
     * @return {!goog.db.KeyRange} The key range.
     */
    function upperBound(upper: IDBKeyType, opt_upperOpen?: boolean): goog.db.KeyRange;
}
