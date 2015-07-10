/// <reference path="../../../globals.d.ts" />
/// <reference path="./date.d.ts" />
/// <reference path="../iter/iter.d.ts" />

declare module goog.date {

    class DateRange extends DateRange__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class DateRange__Class  { 
    
            /**
             * Constructs a date range.
             * @constructor
             * @param {goog.date.Date} startDate The first date in the range.
             * @param {goog.date.Date} endDate The last date in the range.
             * @final
             */
            constructor(startDate: goog.date.Date, endDate: goog.date.Date);
    
            /**
             * @return {goog.date.Date} The first date in the range.
             */
            getStartDate(): goog.date.Date;
    
            /**
             * @return {goog.date.Date} The last date in the range.
             */
            getEndDate(): goog.date.Date;
    
            /**
             * Tests if a date falls within this range.
             *
             * @param {goog.date.Date} date The date to test.
             * @return {boolean} Whether the date is in the range.
             */
            contains(date: goog.date.Date): boolean;
    
            /**
             * @return {!goog.iter.Iterator} An iterator over the date range.
             */
            iterator(): goog.iter.Iterator<any>;
    } 
    
}

declare module goog.date.DateRange {

    class Iterator extends Iterator__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Iterator__Class extends goog.iter.Iterator__Class<any>  { 
    
            /**
             * Creates an iterator over the dates in a {@link goog.date.DateRange}.
             * @constructor
             * @extends {goog.iter.Iterator}
             * @param {goog.date.DateRange} dateRange The date range to iterate.
             * @final
             */
            constructor(dateRange: goog.date.DateRange);
    } 
    

    /**
     * The first possible day, as far as this class is concerned.
     * @type {goog.date.Date}
     */
    var MINIMUM_DATE: goog.date.Date;

    /**
     * The last possible day, as far as this class is concerned.
     * @type {goog.date.Date}
     */
    var MAXIMUM_DATE: goog.date.Date;

    /**
     * Tests two {@link goog.date.DateRange} objects for equality.
     * @param {goog.date.DateRange} a A date range.
     * @param {goog.date.DateRange} b A date range.
     * @return {boolean} Whether |a| is the same range as |b|.
     */
    function equals(a: goog.date.DateRange, b: goog.date.DateRange): boolean;

    /**
     * Returns the range from yesterday to yesterday.
     * @param {goog.date.Date=} opt_today The date to consider today.
     *     Defaults to today.
     * @return {!goog.date.DateRange} The range that includes only yesterday.
     */
    function yesterday(opt_today?: goog.date.Date): goog.date.DateRange;

    /**
     * Returns the range from today to today.
     * @param {goog.date.Date=} opt_today The date to consider today.
     *     Defaults to today.
     * @return {!goog.date.DateRange} The range that includes only today.
     */
    function today(opt_today?: goog.date.Date): goog.date.DateRange;

    /**
     * Returns the range that includes the seven days that end yesterday.
     * @param {goog.date.Date=} opt_today The date to consider today.
     *     Defaults to today.
     * @return {!goog.date.DateRange} The range that includes the seven days that
     *     end yesterday.
     */
    function last7Days(opt_today?: goog.date.Date): goog.date.DateRange;

    /**
     * Returns the range that starts the first of this month and ends the last day
     * of this month.
     * @param {goog.date.Date=} opt_today The date to consider today.
     *     Defaults to today.
     * @return {!goog.date.DateRange} The range that starts the first of this month
     *     and ends the last day of this month.
     */
    function thisMonth(opt_today?: goog.date.Date): goog.date.DateRange;

    /**
     * Returns the range that starts the first of last month and ends the last day
     * of last month.
     * @param {goog.date.Date=} opt_today The date to consider today.
     *     Defaults to today.
     * @return {!goog.date.DateRange} The range that starts the first of last month
     *     and ends the last day of last month.
     */
    function lastMonth(opt_today?: goog.date.Date): goog.date.DateRange;

    /**
     * Returns the seven-day range that starts on the first day of the week
     * (see {@link goog.i18n.DateTimeSymbols.FIRSTDAYOFWEEK}) on or before today.
     * @param {goog.date.Date=} opt_today The date to consider today.
     *     Defaults to today.
     * @return {!goog.date.DateRange} The range that starts the Monday on or before
     *     today and ends the Sunday on or after today.
     */
    function thisWeek(opt_today?: goog.date.Date): goog.date.DateRange;

    /**
     * Returns the seven-day range that ends the day before the first day of
     * the week (see {@link goog.i18n.DateTimeSymbols.FIRSTDAYOFWEEK}) that
     * contains today.
     * @param {goog.date.Date=} opt_today The date to consider today.
     *     Defaults to today.
     * @return {!goog.date.DateRange} The range that starts seven days before the
     *     Monday on or before today and ends the Sunday on or before yesterday.
     */
    function lastWeek(opt_today?: goog.date.Date): goog.date.DateRange;

    /**
     * Returns the range that starts seven days before the Monday on or before
     * today and ends the Friday before today.
     * @param {goog.date.Date=} opt_today The date to consider today.
     *     Defaults to today.
     * @return {!goog.date.DateRange} The range that starts seven days before the
     *     Monday on or before today and ends the Friday before today.
     */
    function lastBusinessWeek(opt_today?: goog.date.Date): goog.date.DateRange;

    /**
     * Returns the range that includes all days between January 1, 1900 and
     * December 31, 9999.
     * @param {goog.date.Date=} opt_today The date to consider today.
     *     Defaults to today.
     * @return {!goog.date.DateRange} The range that includes all days between
     *     January 1, 1900 and December 31, 9999.
     */
    function allTime(opt_today?: goog.date.Date): goog.date.DateRange;

    /**
     * Standard date range keys. Equivalent to the enum IDs in
     * DateRange.java http://go/datarange.java
     *
     * @enum {string}
     */
    enum StandardDateRangeKeys { YESTERDAY, TODAY, LAST_7_DAYS, THIS_MONTH, LAST_MONTH, THIS_WEEK, LAST_WEEK, LAST_BUSINESS_WEEK, ALL_TIME } 

    /**
     * @param {string} dateRangeKey A standard date range key.
     * @param {goog.date.Date=} opt_today The date to consider today.
     *     Defaults to today.
     * @return {!goog.date.DateRange} The date range that corresponds to that key.
     * @throws {Error} If no standard date range with that key exists.
     */
    function standardDateRange(dateRangeKey: string, opt_today?: goog.date.Date): goog.date.DateRange;
}
