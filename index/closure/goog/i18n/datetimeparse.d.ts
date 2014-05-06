/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/i18n/datetimesymbols.d.ts" />
/// <reference path="../../../closure/goog/date/datelike.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/date/date.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/i18n/timezone.d.ts" />
/// <reference path="../../../closure/goog/i18n/datetimeformat.d.ts" />

declare module goog.i18n {

    /**
     * Construct a DateTimeParse based on current locale.
     * @param {string|number} pattern pattern specification or pattern type.
     * @constructor
     * @final
     */
    class DateTimeParse {
        /**
         * Construct a DateTimeParse based on current locale.
         * @param {string|number} pattern pattern specification or pattern type.
         * @constructor
         * @final
         */
        constructor(pattern: any /*string|number*/);
    
        /**
         * Parse the given string and fill info into date object. This version does
         * not validate the input.
         * @param {string} text The string being parsed.
         * @param {goog.date.DateLike} date The Date object to hold the parsed date.
         * @param {number=} opt_start The position from where parse should begin.
         * @return {number} How many characters parser advanced.
         */
        parse(text: string, date: goog.date.DateLike, opt_start?: number): number;
    
        /**
         * Parse the given string and fill info into date object. This version will
         * validate the input and make sure it is a validate date/time.
         * @param {string} text The string being parsed.
         * @param {goog.date.DateLike} date The Date object to hold the parsed date.
         * @param {number=} opt_start The position from where parse should begin.
         * @return {number} How many characters parser advanced.
         */
        strictParse(text: string, date: goog.date.DateLike, opt_start?: number): number;
    }
}

declare module goog.i18n.DateTimeParse {

    /**
     * Number of years prior to now that the century used to
     * disambiguate two digit years will begin
     *
     * @type {number}
     */
    var ambiguousYearCenturyStart: number;
}

