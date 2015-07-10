/// <reference path="../../../globals.d.ts" />

declare module goog.stats {

    class BasicStat extends BasicStat__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class BasicStat__Class  { 
    
            /**
             * Tracks basic statistics over a specified time interval.
             *
             * Statistics are kept in a fixed number of slots, each representing
             * an equal portion of the time interval.
             *
             * Most methods optionally allow passing in the current time, so that
             * higher level stats can synchronize operations on multiple child
             * objects.  Under normal usage, the default of goog.now() should be
             * sufficient.
             *
             * @param {number} interval The stat interval, in milliseconds.
             * @constructor
             * @final
             */
            constructor(interval: number);
    
            /**
             * @return {number} The interval which over statistics are being
             *     accumulated, in milliseconds.
             */
            getInterval(): number;
    
            /**
             * Increments the count of this statistic by the specified amount.
             *
             * @param {number} amt The amount to increase the count by.
             * @param {number=} opt_now The time, in milliseconds, to be treated
             *     as the "current" time.  The current time must always be greater
             *     than or equal to the last time recorded by this stat tracker.
             */
            incBy(amt: number, opt_now?: number): void;
    
            /**
             * Returns the count of the statistic over its configured time
             * interval.
             * @param {number=} opt_now The time, in milliseconds, to be treated
             *     as the "current" time.  The current time must always be greater
             *     than or equal to the last time recorded by this stat tracker.
             * @return {number} The total count over the tracked interval.
             */
            get(opt_now?: number): number;
    
            /**
             * Returns the magnitute of the largest atomic increment that occurred
             * during the watched time interval.
             * @param {number=} opt_now The time, in milliseconds, to be treated
             *     as the "current" time.  The current time must always be greater
             *     than or equal to the last time recorded by this stat tracker.
             * @return {number} The maximum count of this statistic.
             */
            getMax(opt_now?: number): number;
    
            /**
             * Returns the magnitute of the smallest atomic increment that
             * occurred during the watched time interval.
             * @param {number=} opt_now The time, in milliseconds, to be treated
             *     as the "current" time.  The current time must always be greater
             *     than or equal to the last time recorded by this stat tracker.
             * @return {number} The minimum count of this statistic.
             */
            getMin(opt_now?: number): number;
    } 
    
}

declare module goog.stats.BasicStat {

    class Slot_ extends Slot___Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Slot___Class  { 
    
            /**
             * A struct containing information for each sub-interval.
             * @param {number} end The end time for this slot, in milliseconds.
             * @constructor
             * @private
             */
            constructor(end: number);
    
            /**
             * End time of this slot, exclusive.
             * @type {number}
             */
            end: number;
    
            /**
             * Aggregated count within this slot.
             * @type {number}
             */
            count: number;
    
            /**
             * The smallest atomic increment of the count within this slot.
             * @type {number}
             */
            min: number;
    
            /**
             * The largest atomic increment of the count within this slot.
             * @type {number}
             */
            max: number;
    } 
    
}
