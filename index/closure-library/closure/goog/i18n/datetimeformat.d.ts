/// <reference path="../../../globals.d.ts" />
/// <reference path="./timezone.d.ts" />
/// <reference path="../date/date.d.ts" />

declare module goog.i18n {

    class DateTimeFormat extends DateTimeFormat.__Class { }
    module DateTimeFormat {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Construct a DateTimeFormat object based on current locale.
             * @constructor
             * @param {string|number} pattern pattern specification or pattern type.
             * @param {!Object=} opt_dateTimeSymbols Optional symbols to use use for this
             *     instance rather than the global symbols.
             * @final
             */
            constructor(pattern: string, opt_dateTimeSymbols?: Object);
            /**
             * Construct a DateTimeFormat object based on current locale.
             * @constructor
             * @param {string|number} pattern pattern specification or pattern type.
             * @param {!Object=} opt_dateTimeSymbols Optional symbols to use use for this
             *     instance rather than the global symbols.
             * @final
             */
            constructor(pattern: number, opt_dateTimeSymbols?: Object);
    
            /**
             * Format the given date object according to preset pattern and current lcoale.
             * @param {goog.date.DateLike} date The Date object that is being formatted.
             * @param {goog.i18n.TimeZone=} opt_timeZone optional, if specified, time
             *    related fields will be formatted based on its setting. When this field
             *    is not specified, "undefined" will be pass around and those function
             *    that really need time zone service will create a default one.
             * @return {string} Formatted string for the given date.
             *    Throws an error if the date is null or if one tries to format a date-only
             *    object (for instance goog.date.Date) using a pattern with time fields.
             */
            format(date: Date, opt_timeZone?: goog.i18n.TimeZone): string;
            /**
             * Format the given date object according to preset pattern and current lcoale.
             * @param {goog.date.DateLike} date The Date object that is being formatted.
             * @param {goog.i18n.TimeZone=} opt_timeZone optional, if specified, time
             *    related fields will be formatted based on its setting. When this field
             *    is not specified, "undefined" will be pass around and those function
             *    that really need time zone service will create a default one.
             * @return {string} Formatted string for the given date.
             *    Throws an error if the date is null or if one tries to format a date-only
             *    object (for instance goog.date.Date) using a pattern with time fields.
             */
            format(date: goog.date.Date, opt_timeZone?: goog.i18n.TimeZone): string;
        }
    }
}

declare module goog.i18n.DateTimeFormat {

    /**
     * Enum to identify predefined Date/Time format pattern.
     * @enum {number}
     */
    enum Format { FULL_DATE, LONG_DATE, MEDIUM_DATE, SHORT_DATE, FULL_TIME, LONG_TIME, MEDIUM_TIME, SHORT_TIME, FULL_DATETIME, LONG_DATETIME, MEDIUM_DATETIME, SHORT_DATETIME } 

    /**
     * These are token types, corresponding to above token definitions.
     * @enum {number}
     * @private
     */
    enum PartTypes_ { QUOTED_STRING, FIELD, LITERAL } 

    /**
     * Localizes a string potentially containing numbers, replacing ASCII digits
     * with native digits if specified so by the locale. Leaves other characters.
     * @param {number|string} input the string to be localized, using ASCII digits.
     * @param {!Object=} opt_dateTimeSymbols Optional symbols to use use rather than
     *     the global symbols.
     * @return {string} localized string, potentially using native digits.
     */
    function localizeNumbers(input: number, opt_dateTimeSymbols?: Object): string;
    /**
     * Localizes a string potentially containing numbers, replacing ASCII digits
     * with native digits if specified so by the locale. Leaves other characters.
     * @param {number|string} input the string to be localized, using ASCII digits.
     * @param {!Object=} opt_dateTimeSymbols Optional symbols to use use rather than
     *     the global symbols.
     * @return {string} localized string, potentially using native digits.
     */
    function localizeNumbers(input: string, opt_dateTimeSymbols?: Object): string;
}
