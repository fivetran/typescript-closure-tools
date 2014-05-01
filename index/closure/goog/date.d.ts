// Generated Wed Apr 30 16:37:31 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/i18n.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/string.d.ts" />

declare module 'goog.date' {

    /**
     * Constants for weekdays.
     * @enum {number}
     */
    enum weekDay { MON, TUE, WED, THU, FRI, SAT, SUN } 

    /**
     * Constants for months.
     * @enum {number}
     */
    enum month { JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC } 

    /**
     * Formats a month/year string.
     * Example: "January 2008"
     *
     * @param {string} monthName The month name to use in the result.
     * @param {number} yearNum The numeric year to use in the result.
     * @return {string} A formatted month/year string.
     */
    function formatMonthAndYear(monthName: string, yearNum: number): string;

    /**
     * Returns whether the given year is a leap year.
     *
     * @param {number} year Year part of date.
     * @return {boolean} Whether the given year is a leap year.
     */
    function isLeapYear(year: number): boolean;

    /**
     * Returns whether the given year is a long ISO year.
     * See {@link http://www.phys.uu.nl/~vgent/calendar/isocalendar_text3.htm}.
     *
     * @param {number} year Full year part of date.
     * @return {boolean} Whether the given year is a long ISO year.
     */
    function isLongIsoYear(year: number): boolean;

    /**
     * Returns the number of days for a given month.
     *
     * @param {number} year Year part of date.
     * @param {number} month Month part of date.
     * @return {number} The number of days for the given month.
     */
    function getNumberOfDaysInMonth(year: number, month: number): number;

    /**
     * Returns true if the 2 dates are in the same day.
     * @param {goog.date.DateLike} date The time to check.
     * @param {goog.date.DateLike=} opt_now The current time.
     * @return {boolean} Whether the dates are on the same day.
     */
    function isSameDay(date: goog.date.DateLike, opt_now?: goog.date.DateLike): boolean;

    /**
     * Returns true if the 2 dates are in the same month.
     * @param {goog.date.DateLike} date The time to check.
     * @param {goog.date.DateLike=} opt_now The current time.
     * @return {boolean} Whether the dates are in the same calendar month.
     */
    function isSameMonth(date: goog.date.DateLike, opt_now?: goog.date.DateLike): boolean;

    /**
     * Returns true if the 2 dates are in the same year.
     * @param {goog.date.DateLike} date The time to check.
     * @param {goog.date.DateLike=} opt_now The current time.
     * @return {boolean} Whether the dates are in the same calendar year.
     */
    function isSameYear(date: goog.date.DateLike, opt_now?: goog.date.DateLike): boolean;

    /**
     * Static function for week number calculation. ISO 8601 implementation.
     *
     * @param {number} year Year part of date.
     * @param {number} month Month part of date (0-11).
     * @param {number} date Day part of date (1-31).
     * @param {number=} opt_weekDay Cut off weekday, defaults to Thursday.
     * @param {number=} opt_firstDayOfWeek First day of the week, defaults to
     *     Monday.
     *     Monday=0, Sunday=6.
     * @return {number} The week number (1-53).
     */
    function getWeekNumber(year: number, month: number, date: number, opt_weekDay?: number, opt_firstDayOfWeek?: number): number;

    /**
     * @param {!T} date1 A datelike object.
     * @param {!S} date2 Another datelike object.
     * @return {!(T|S)} The earlier of them in time.
     * @template T,S
     */
    function min<T,S>(date1: T, date2: S): any /*T|S*/;

    /**
     * @param {!T} date1 A datelike object.
     * @param {!S} date2 Another datelike object.
     * @return {!(T|S)} The later of them in time.
     * @template T,S
     */
    function max<T,S>(date1: T, date2: S): any /*T|S*/;

    /**
     * Creates a DateTime from a datetime string expressed in ISO 8601 format.
     *
     * @param {string} formatted A date or datetime expressed in ISO 8601 format.
     * @return {goog.date.DateTime} Parsed date or null if parse fails.
     */
    function fromIsoString(formatted: string): goog.date.DateTime;

    /**
     * Parses a datetime string expressed in ISO 8601 format. Overwrites the date
     * and optionally the time part of the given object with the parsed values.
     *
     * @param {!goog.date.DateTime} dateTime Object whose fields will be set.
     * @param {string} formatted A date or datetime expressed in ISO 8601 format.
     * @return {boolean} Whether the parsing succeeded.
     */
    function setIso8601DateTime(dateTime: goog.date.DateTime, formatted: string): boolean;

    /**
     * @typedef {(Date|goog.date.Date)}
     */
    interface DateLike { /*any (Date|goog.date.Date)*/ }

    /**
     * Class representing a date/time interval. Used for date calculations.
     * <pre>
     * new goog.date.Interval(0, 1) // One month
     * new goog.date.Interval(0, 0, 3, 1) // Three days and one hour
     * new goog.date.Interval(goog.date.Interval.DAYS, 1) // One day
     * </pre>
     *
     * @param {number|string=} opt_years Years or string representing date part.
     * @param {number=} opt_months Months or number of whatever date part specified
     *     by first parameter.
     * @param {number=} opt_days Days.
     * @param {number=} opt_hours Hours.
     * @param {number=} opt_minutes Minutes.
     * @param {number=} opt_seconds Seconds.
     * @constructor
     * @final
     */
    class Interval {
        /**
         * Class representing a date/time interval. Used for date calculations.
         * <pre>
         * new goog.date.Interval(0, 1) // One month
         * new goog.date.Interval(0, 0, 3, 1) // Three days and one hour
         * new goog.date.Interval(goog.date.Interval.DAYS, 1) // One day
         * </pre>
         *
         * @param {number|string=} opt_years Years or string representing date part.
         * @param {number=} opt_months Months or number of whatever date part specified
         *     by first parameter.
         * @param {number=} opt_days Days.
         * @param {number=} opt_hours Hours.
         * @param {number=} opt_minutes Minutes.
         * @param {number=} opt_seconds Seconds.
         * @constructor
         * @final
         */
        constructor(opt_years?: any /*number|string*/, opt_months?: number, opt_days?: number, opt_hours?: number, opt_minutes?: number, opt_seconds?: number);
    
        /**
         * Serializes goog.date.Interval into XML Schema duration (ISO 8601 extended).
         * @see http://www.w3.org/TR/xmlschema-2/#duration
         *
         * @param {boolean=} opt_verbose Include zero fields in the duration string.
         * @return {?string} An XML schema duration in ISO 8601 extended format,
         *     or null if the interval contains both positive and negative fields.
         */
        toIsoString(opt_verbose?: boolean): string;
    
        /**
         * Tests whether the given interval is equal to this interval.
         * Note, this is a simple field-by-field comparison, it doesn't
         * account for comparisons like "12 months == 1 year".
         *
         * @param {goog.date.Interval} other The interval to test.
         * @return {boolean} Whether the intervals are equal.
         */
        equals(other: goog.date.Interval): boolean;
    
        /**
         * @return {!goog.date.Interval} A clone of the interval object.
         */
        clone(): goog.date.Interval;
    
        /**
         * @return {boolean} Whether all fields of the interval are zero.
         */
        isZero(): boolean;
    
        /**
         * @return {!goog.date.Interval} Negative of this interval.
         */
        getInverse(): goog.date.Interval;
    
        /**
         * Calculates n * (this interval) by memberwise multiplication.
         * @param {number} n An integer.
         * @return {!goog.date.Interval} n * this.
         */
        times(n: number): goog.date.Interval;
    
        /**
         * Gets the total number of seconds in the time interval. Assumes that months
         * and years are empty.
         * @return {number} Total number of seconds in the interval.
         */
        getTotalSeconds(): number;
    
        /**
         * Adds the Interval in the argument to this Interval field by field.
         *
         * @param {goog.date.Interval} interval The Interval to add.
         */
        add(interval: goog.date.Interval): void;
    }

    /**
     * Class representing a date. Defaults to current date if none is specified.
     *
     * Implements most methods of the native js Date object (except the time related
     * ones, {@see goog.date.DateTime}) and can be used interchangeably with it just
     * as if goog.date.Date was a synonym of Date. To make this more transparent,
     * Closure APIs should accept goog.date.DateLike instead of the real Date
     * object.
     *
     * To allow goog.date.Date objects to be passed as arguments to methods
     * expecting Date objects this class is marked as extending the built in Date
     * object even though that's not strictly true.
     *
     * @param {number|Object=} opt_year Four digit year or a date-like object. If
     *     not set, the created object will contain the date determined by
     *     goog.now().
     * @param {number=} opt_month Month, 0 = Jan, 11 = Dec.
     * @param {number=} opt_date Date of month, 1 - 31.
     * @constructor
     * @see goog.date.DateTime
     */
    class Date {
        /**
         * Class representing a date. Defaults to current date if none is specified.
         *
         * Implements most methods of the native js Date object (except the time related
         * ones, {@see goog.date.DateTime}) and can be used interchangeably with it just
         * as if goog.date.Date was a synonym of Date. To make this more transparent,
         * Closure APIs should accept goog.date.DateLike instead of the real Date
         * object.
         *
         * To allow goog.date.Date objects to be passed as arguments to methods
         * expecting Date objects this class is marked as extending the built in Date
         * object even though that's not strictly true.
         *
         * @param {number|Object=} opt_year Four digit year or a date-like object. If
         *     not set, the created object will contain the date determined by
         *     goog.now().
         * @param {number=} opt_month Month, 0 = Jan, 11 = Dec.
         * @param {number=} opt_date Date of month, 1 - 31.
         * @constructor
         * @see goog.date.DateTime
         */
        constructor(opt_year?: any /*number|Object*/, opt_month?: number, opt_date?: number);
    
        /**
         * @return {!goog.date.Date} A clone of the date object.
         */
        clone(): goog.date.Date;
    
        /**
         * @return {number} The four digit year of date.
         */
        getFullYear(): number;
    
        /**
         * Alias for getFullYear.
         *
         * @return {number} The four digit year of date.
         * @see #getFullyear
         */
        getYear(): number;
    
        /**
         * @return {goog.date.month} The month of date, 0 = Jan, 11 = Dec.
         */
        getMonth(): goog.date.month;
    
        /**
         * @return {number} The date of month.
         */
        getDate(): number;
    
        /**
         * Returns the number of milliseconds since 1 January 1970 00:00:00.
         *
         * @return {number} The number of milliseconds since 1 January 1970 00:00:00.
         */
        getTime(): number;
    
        /**
         * @return {goog.date.weekDay} The day of week, US style. 0 = Sun, 6 = Sat.
         */
        getDay(): goog.date.weekDay;
    
        /**
         * @return {number} The day of week, ISO style. 0 = Mon, 6 = Sun.
         */
        getIsoWeekday(): number;
    
        /**
         * @return {number} The day of week according to firstDayOfWeek setting.
         */
        getWeekday(): number;
    
        /**
         * @return {number} The four digit year of date according to universal time.
         */
        getUTCFullYear(): number;
    
        /**
         * @return {goog.date.month} The month of date according to universal time,
         *     0 = Jan, 11 = Dec.
         */
        getUTCMonth(): goog.date.month;
    
        /**
         * @return {number} The date of month according to universal time.
         */
        getUTCDate(): number;
    
        /**
         * @return {goog.date.weekDay} The day of week according to universal time,
         *     US style. 0 = Sun, 1 = Mon, 6 = Sat.
         */
        getUTCDay(): goog.date.weekDay;
    
        /**
         * @return {number} The hours value according to universal time.
         */
        getUTCHours(): number;
    
        /**
         * @return {number} The hours value according to universal time.
         */
        getUTCMinutes(): number;
    
        /**
         * @return {number} The day of week according to universal time, ISO style.
         *     0 = Mon, 6 = Sun.
         */
        getUTCIsoWeekday(): number;
    
        /**
         * @return {number} The day of week according to universal time and
         *     firstDayOfWeek setting.
         */
        getUTCWeekday(): number;
    
        /**
         * @return {number} The first day of the week. 0 = Mon, 6 = Sun.
         */
        getFirstDayOfWeek(): number;
    
        /**
         * @return {number} The cut off weekday used for week number calculations.
         *     0 = Mon, 6 = Sun.
         */
        getFirstWeekCutOffDay(): number;
    
        /**
         * @return {number} The number of days for the selected month.
         */
        getNumberOfDaysInMonth(): number;
    
        /**
         * @return {number} The week number.
         */
        getWeekNumber(): number;
    
        /**
         * @return {number} The day of year.
         */
        getDayOfYear(): number;
    
        /**
         * Returns timezone offset. The timezone offset is the delta in minutes between
         * UTC and your local time. E.g., UTC+10 returns -600. Daylight savings time
         * prevents this value from being constant.
         *
         * @return {number} The timezone offset.
         */
        getTimezoneOffset(): number;
    
        /**
         * Returns timezone offset as a string. Returns offset in [+-]HH:mm format or Z
         * for UTC.
         *
         * @return {string} The timezone offset as a string.
         */
        getTimezoneOffsetString(): string;
    
        /**
         * Sets the date.
         *
         * @param {goog.date.Date} date Date object to set date from.
         */
        set(date: goog.date.Date): void;
    
        /**
         * Sets the year part of the date.
         *
         * @param {number} year Four digit year.
         */
        setFullYear(year: number): void;
    
        /**
         * Alias for setFullYear.
         *
         * @param {number} year Four digit year.
         * @see #setFullYear
         */
        setYear(year: number): void;
    
        /**
         * Sets the month part of the date.
         *
         * TODO(nnaze): Update type to goog.date.month.
         *
         * @param {number} month The month, where 0 = Jan, 11 = Dec.
         */
        setMonth(month: number): void;
    
        /**
         * Sets the day part of the date.
         *
         * @param {number} date The day part.
         */
        setDate(date: number): void;
    
        /**
         * Sets the value of the date object as expressed in the number of milliseconds
         * since 1 January 1970 00:00:00.
         *
         * @param {number} ms Number of milliseconds since 1 Jan 1970.
         */
        setTime(ms: number): void;
    
        /**
         * Sets the year part of the date according to universal time.
         *
         * @param {number} year Four digit year.
         */
        setUTCFullYear(year: number): void;
    
        /**
         * Sets the month part of the date according to universal time.
         *
         * @param {number} month The month, where 0 = Jan, 11 = Dec.
         */
        setUTCMonth(month: number): void;
    
        /**
         * Sets the day part of the date according to universal time.
         *
         * @param {number} date The UTC date.
         */
        setUTCDate(date: number): void;
    
        /**
         * Sets the first day of week.
         *
         * @param {number} day 0 = Mon, 6 = Sun.
         */
        setFirstDayOfWeek(day: number): void;
    
        /**
         * Sets cut off weekday used for week number calculations. 0 = Mon, 6 = Sun.
         *
         * @param {number} day The cut off weekday.
         */
        setFirstWeekCutOffDay(day: number): void;
    
        /**
         * Performs date calculation by adding the supplied interval to the date.
         *
         * @param {goog.date.Interval} interval Date interval to add.
         */
        add(interval: goog.date.Interval): void;
    
        /**
         * Returns ISO 8601 string representation of date.
         *
         * @param {boolean=} opt_verbose Whether the verbose format should be used
         *     instead of the default compact one.
         * @param {boolean=} opt_tz Whether the timezone offset should be included
         *     in the string.
         * @return {string} ISO 8601 string representation of date.
         */
        toIsoString(opt_verbose?: boolean, opt_tz?: boolean): string;
    
        /**
         * Returns ISO 8601 string representation of date according to universal time.
         *
         * @param {boolean=} opt_verbose Whether the verbose format should be used
         *     instead of the default compact one.
         * @param {boolean=} opt_tz Whether the timezone offset should be included in
         *     the string.
         * @return {string} ISO 8601 string representation of date according to
         *     universal time.
         */
        toUTCIsoString(opt_verbose?: boolean, opt_tz?: boolean): string;
    
        /**
         * Tests whether given date is equal to this Date.
         * Note: This ignores units more precise than days (hours and below)
         * and also ignores timezone considerations.
         *
         * @param {goog.date.Date} other The date to compare.
         * @return {boolean} Whether the given date is equal to this one.
         */
        equals(other: goog.date.Date): boolean;
    
        /**
         * Overloaded toString method for object.
         * @return {string} ISO 8601 string representation of date.
         * @override
         */
        toString(): string;
    
        /**
         * @return {number} Value of wrapped date.
         * @override
         */
        valueOf(): number;
    }

    /**
     * Class representing a date and time. Defaults to current date and time if none
     * is specified.
     *
     * Implements most methods of the native js Date object and can be used
     * interchangeably with it just as if goog.date.DateTime was a subclass of Date.
     *
     * @param {number|Object=} opt_year Four digit year or a date-like object. If
     *     not set, the created object will contain the date determined by
     *     goog.now().
     * @param {number=} opt_month Month, 0 = Jan, 11 = Dec.
     * @param {number=} opt_date Date of month, 1 - 31.
     * @param {number=} opt_hours Hours, 0 - 24.
     * @param {number=} opt_minutes Minutes, 0 - 59.
     * @param {number=} opt_seconds Seconds, 0 - 61.
     * @param {number=} opt_milliseconds Milliseconds, 0 - 999.
     * @constructor
     * @extends {goog.date.Date}
     */
    class DateTime extends goog.date.Date {
        /**
         * Class representing a date and time. Defaults to current date and time if none
         * is specified.
         *
         * Implements most methods of the native js Date object and can be used
         * interchangeably with it just as if goog.date.DateTime was a subclass of Date.
         *
         * @param {number|Object=} opt_year Four digit year or a date-like object. If
         *     not set, the created object will contain the date determined by
         *     goog.now().
         * @param {number=} opt_month Month, 0 = Jan, 11 = Dec.
         * @param {number=} opt_date Date of month, 1 - 31.
         * @param {number=} opt_hours Hours, 0 - 24.
         * @param {number=} opt_minutes Minutes, 0 - 59.
         * @param {number=} opt_seconds Seconds, 0 - 61.
         * @param {number=} opt_milliseconds Milliseconds, 0 - 999.
         * @constructor
         * @extends {goog.date.Date}
         */
        constructor(opt_year?: any /*number|Object*/, opt_month?: number, opt_date?: number, opt_hours?: number, opt_minutes?: number, opt_seconds?: number, opt_milliseconds?: number);
    
        /**
         * Returns the hours part of the datetime.
         *
         * @return {number} An integer between 0 and 23, representing the hour.
         */
        getHours(): number;
    
        /**
         * Returns the minutes part of the datetime.
         *
         * @return {number} An integer between 0 and 59, representing the minutes.
         */
        getMinutes(): number;
    
        /**
         * Returns the seconds part of the datetime.
         *
         * @return {number} An integer between 0 and 59, representing the seconds.
         */
        getSeconds(): number;
    
        /**
         * Returns the milliseconds part of the datetime.
         *
         * @return {number} An integer between 0 and 999, representing the milliseconds.
         */
        getMilliseconds(): number;
    
        /**
         * Returns the day of week according to universal time, US style.
         *
         * @return {goog.date.weekDay} Day of week, 0 = Sun, 1 = Mon, 6 = Sat.
         * @override
         */
        getUTCDay(): goog.date.weekDay;
    
        /**
         * Returns the hours part of the datetime according to universal time.
         *
         * @return {number} An integer between 0 and 23, representing the hour.
         * @override
         */
        getUTCHours(): number;
    
        /**
         * Returns the minutes part of the datetime according to universal time.
         *
         * @return {number} An integer between 0 and 59, representing the minutes.
         * @override
         */
        getUTCMinutes(): number;
    
        /**
         * Returns the seconds part of the datetime according to universal time.
         *
         * @return {number} An integer between 0 and 59, representing the seconds.
         */
        getUTCSeconds(): number;
    
        /**
         * Returns the milliseconds part of the datetime according to universal time.
         *
         * @return {number} An integer between 0 and 999, representing the milliseconds.
         */
        getUTCMilliseconds(): number;
    
        /**
         * Sets the hours part of the datetime.
         *
         * @param {number} hours An integer between 0 and 23, representing the hour.
         */
        setHours(hours: number): void;
    
        /**
         * Sets the minutes part of the datetime.
         *
         * @param {number} minutes Integer between 0 and 59, representing the minutes.
         */
        setMinutes(minutes: number): void;
    
        /**
         * Sets the seconds part of the datetime.
         *
         * @param {number} seconds Integer between 0 and 59, representing the seconds.
         */
        setSeconds(seconds: number): void;
    
        /**
         * Sets the seconds part of the datetime.
         *
         * @param {number} ms Integer between 0 and 999, representing the milliseconds.
         */
        setMilliseconds(ms: number): void;
    
        /**
         * Sets the hours part of the datetime according to universal time.
         *
         * @param {number} hours An integer between 0 and 23, representing the hour.
         */
        setUTCHours(hours: number): void;
    
        /**
         * Sets the minutes part of the datetime according to universal time.
         *
         * @param {number} minutes Integer between 0 and 59, representing the minutes.
         */
        setUTCMinutes(minutes: number): void;
    
        /**
         * Sets the seconds part of the datetime according to universal time.
         *
         * @param {number} seconds Integer between 0 and 59, representing the seconds.
         */
        setUTCSeconds(seconds: number): void;
    
        /**
         * Sets the seconds part of the datetime according to universal time.
         *
         * @param {number} ms Integer between 0 and 999, representing the milliseconds.
         */
        setUTCMilliseconds(ms: number): void;
    
        /**
         * @return {boolean} Whether the datetime is aligned to midnight.
         */
        isMidnight(): boolean;
    
        /**
         * Performs date calculation by adding the supplied interval to the date.
         *
         * @param {goog.date.Interval} interval Date interval to add.
         * @override
         */
        add(interval: goog.date.Interval): void;
    
        /**
         * Returns ISO 8601 string representation of date/time.
         *
         * @param {boolean=} opt_verbose Whether the verbose format should be used
         *     instead of the default compact one.
         * @param {boolean=} opt_tz Whether the timezone offset should be included
         *     in the string.
         * @return {string} ISO 8601 string representation of date/time.
         * @override
         */
        toIsoString(opt_verbose?: boolean, opt_tz?: boolean): string;
    
        /**
         * Returns XML Schema 2 string representation of date/time.
         * The return value is also ISO 8601 compliant.
         *
         * @param {boolean=} opt_timezone Should the timezone offset be included in the
         *     string?.
         * @return {string} XML Schema 2 string representation of date/time.
         */
        toXmlDateTime(opt_timezone?: boolean): string;
    
        /**
         * Returns ISO 8601 string representation of date/time according to universal
         * time.
         *
         * @param {boolean=} opt_verbose Whether the opt_verbose format should be
         *     returned instead of the default compact one.
         * @param {boolean=} opt_tz Whether the the timezone offset should be included
         *     in the string.
         * @return {string} ISO 8601 string representation of date/time according to
         *     universal time.
         * @override
         */
        toUTCIsoString(opt_verbose?: boolean, opt_tz?: boolean): string;
    
        /**
         * Tests whether given datetime is exactly equal to this DateTime.
         *
         * @param {goog.date.Date} other The datetime to compare.
         * @return {boolean} Whether the given datetime is exactly equal to this one.
         * @override
         */
        equals(other: goog.date.Date): boolean;
    
        /**
         * Overloaded toString method for object.
         * @return {string} ISO 8601 string representation of date/time.
         * @override
         */
        toString(): string;
    
        /**
         * Generates time label for the datetime, e.g., '5:30am'.
         * By default this does not pad hours (e.g., to '05:30') and it does add
         * an am/pm suffix.
         * TODO(user): i18n -- hardcoding time format like this is bad.  E.g., in CJK
         *               locales, need Chinese characters for hour and minute units.
         * @param {boolean=} opt_padHours Whether to pad hours, e.g., '05:30' vs '5:30'.
         * @param {boolean=} opt_showAmPm Whether to show the 'am' and 'pm' suffix.
         * @param {boolean=} opt_omitZeroMinutes E.g., '5:00pm' becomes '5pm',
         *                                      but '5:01pm' remains '5:01pm'.
         * @return {string} The time label.
         */
        toUsTimeString(opt_padHours?: boolean, opt_showAmPm?: boolean, opt_omitZeroMinutes?: boolean): string;
    
        /**
         * Generates time label for the datetime in standard ISO 24-hour time format.
         * E.g., '06:00:00' or '23:30:15'.
         * @param {boolean=} opt_showSeconds Whether to shows seconds. Defaults to TRUE.
         * @return {string} The time label.
         */
        toIsoTimeString(opt_showSeconds?: boolean): string;
    
        /**
         * @return {!goog.date.DateTime} A clone of the datetime object.
         * @override
         */
        clone(): goog.date.DateTime;
    }

    /**
     * Constructs a date range.
     * @constructor
     * @param {goog.date.Date} startDate The first date in the range.
     * @param {goog.date.Date} endDate The last date in the range.
     * @final
     */
    class DateRange {
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
        iterator(): goog.iter.Iterator;
    }

    /**
     * Class representing a date/time in GMT+0 time zone, without daylight saving.
     * Defaults to current date and time if none is specified. The get... and the
     * getUTC... methods are equivalent.
     *
     * @param {number|Object=} opt_year Four digit UTC year or a date-like object.
     *     If not set, the created object will contain the date determined by
     *     goog.now().
     * @param {number=} opt_month UTC month, 0 = Jan, 11 = Dec.
     * @param {number=} opt_date UTC date of month, 1 - 31.
     * @param {number=} opt_hours UTC hours, 0 - 23.
     * @param {number=} opt_minutes UTC minutes, 0 - 59.
     * @param {number=} opt_seconds UTC seconds, 0 - 59.
     * @param {number=} opt_milliseconds UTC milliseconds, 0 - 999.
     * @constructor
     * @extends {goog.date.DateTime}
     */
    class UtcDateTime extends goog.date.DateTime {
        /**
         * Class representing a date/time in GMT+0 time zone, without daylight saving.
         * Defaults to current date and time if none is specified. The get... and the
         * getUTC... methods are equivalent.
         *
         * @param {number|Object=} opt_year Four digit UTC year or a date-like object.
         *     If not set, the created object will contain the date determined by
         *     goog.now().
         * @param {number=} opt_month UTC month, 0 = Jan, 11 = Dec.
         * @param {number=} opt_date UTC date of month, 1 - 31.
         * @param {number=} opt_hours UTC hours, 0 - 23.
         * @param {number=} opt_minutes UTC minutes, 0 - 59.
         * @param {number=} opt_seconds UTC seconds, 0 - 59.
         * @param {number=} opt_milliseconds UTC milliseconds, 0 - 999.
         * @constructor
         * @extends {goog.date.DateTime}
         */
        constructor(opt_year?: any /*number|Object*/, opt_month?: number, opt_date?: number, opt_hours?: number, opt_minutes?: number, opt_seconds?: number, opt_milliseconds?: number);
    
        /**
         * Clones the UtcDateTime object.
         *
         * @return {!goog.date.UtcDateTime} A clone of the datetime object.
         * @override
         */
        clone(): goog.date.UtcDateTime;
    
        /** @override */
        add(): void;
    
        /** @override */
        getTimezoneOffset(): void;
    
        /** @override */
        getFullYear: any /*missing*/;
    
        /** @override */
        getMonth: any /*missing*/;
    
        /** @override */
        getDate: any /*missing*/;
    
        /** @override */
        getHours: any /*missing*/;
    
        /** @override */
        getMinutes: any /*missing*/;
    
        /** @override */
        getSeconds: any /*missing*/;
    
        /** @override */
        getMilliseconds: any /*missing*/;
    
        /** @override */
        getDay: any /*missing*/;
    
        /** @override */
        setFullYear: any /*missing*/;
    
        /** @override */
        setMonth: any /*missing*/;
    
        /** @override */
        setDate: any /*missing*/;
    
        /** @override */
        setHours: any /*missing*/;
    
        /** @override */
        setMinutes: any /*missing*/;
    
        /** @override */
        setSeconds: any /*missing*/;
    
        /** @override */
        setMilliseconds: any /*missing*/;
    }
}

declare module 'goog.date.Interval' {

    /**
     * Parses an XML Schema duration (ISO 8601 extended).
     * @see http://www.w3.org/TR/xmlschema-2/#duration
     *
     * @param  {string} duration An XML schema duration in textual format.
     *     Recurring durations and weeks are not supported.
     * @return {goog.date.Interval} The duration as a goog.date.Interval or null
     *     if the parse fails.
     */
    function fromIsoString(duration: string): goog.date.Interval;

    /**
     * Years constant for the date parts.
     * @type {string}
     */
    var YEARS: string;

    /**
     * Months constant for the date parts.
     * @type {string}
     */
    var MONTHS: string;

    /**
     * Days constant for the date parts.
     * @type {string}
     */
    var DAYS: string;

    /**
     * Hours constant for the date parts.
     * @type {string}
     */
    var HOURS: string;

    /**
     * Minutes constant for the date parts.
     * @type {string}
     */
    var MINUTES: string;

    /**
     * Seconds constant for the date parts.
     * @type {string}
     */
    var SECONDS: string;
}

declare module 'goog.date.Date' {

    /**
     * Compares two dates.  May be used as a sorting function.
     * @see goog.array.sort
     * @param {!goog.date.DateLike} date1 Date to compare.
     * @param {!goog.date.DateLike} date2 Date to compare.
     * @return {number} Comparison result. 0 if dates are the same, less than 0 if
     *     date1 is earlier than date2, greater than 0 if date1 is later than date2.
     */
    function compare(date1: goog.date.DateLike, date2: goog.date.DateLike): number;
}

declare module 'goog.date.DateTime' {

    /**
     * Creates a DateTime from a datetime string expressed in RFC 822 format.
     *
     * @param {string} formatted A date or datetime expressed in RFC 822 format.
     * @return {goog.date.DateTime} Parsed date or null if parse fails.
     */
    function fromRfc822String(formatted: string): goog.date.DateTime;
}

declare module 'goog.date.DateRange' {

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
     * @return {goog.date.DateRange} The date range that corresponds to that key.
     * @throws {Error} If no standard date range with that key exists.
     */
    function standardDateRange(dateRangeKey: string, opt_today?: goog.date.Date): goog.date.DateRange;

    /**
     * Creates an iterator over the dates in a {@link goog.date.DateRange}.
     * @constructor
     * @extends {goog.iter.Iterator}
     * @param {goog.date.DateRange} dateRange The date range to iterate.
     * @final
     */
    class Iterator extends goog.iter.Iterator {
        /**
         * Creates an iterator over the dates in a {@link goog.date.DateRange}.
         * @constructor
         * @extends {goog.iter.Iterator}
         * @param {goog.date.DateRange} dateRange The date range to iterate.
         * @final
         */
        constructor(dateRange: goog.date.DateRange);
    
        /** @override */
        next(): void;
    }
}

declare module 'goog.date.duration' {

    /**
     * Accepts a duration in milliseconds and outputs an absolute duration time in
     * form of "1 day", "2 hours", "20 minutes", "2 days 1 hour 15 minutes" etc.
     * @param {number} durationMs Duration in milliseconds.
     * @return {string} The formatted duration.
     */
    function format(durationMs: number): string;
}

declare module 'goog.date.relative' {

    /**
     * Enumeration used to identify time units internally.
     * @enum {number}
     */
    enum Unit { MINUTES, HOURS, DAYS } 

    /**
     * @typedef {function(number, boolean, goog.date.relative.Unit): string}
     */
    interface TimeDeltaFormatter {
        (number, boolean, goog.date.relative.Unit): string
    }

    /**
     * Handles formatting of time deltas.
     * @private {goog.date.relative.TimeDeltaFormatter}
     */
    var formatTimeDelta_: any /*missing*/;

    /**
     * Sets a different formatting function for time deltas ("3 days ago").
     * While its visibility is public, this function is Closure-internal and should
     * not be used in application code.
     * @param {goog.date.relative.TimeDeltaFormatter} formatter The function to use
     *     for formatting time deltas (i.e. relative times).
     */
    function setTimeDeltaFormatter(formatter: goog.date.relative.TimeDeltaFormatter): void;

    /**
     * Accepts a timestamp in milliseconds and outputs a relative time in the form
     * of "1 hour ago", "1 day ago", "in 1 hour", "in 2 days" etc.  If the date
     * delta is over 2 weeks, then the output string will be empty.
     * @param {number} dateMs Date in milliseconds.
     * @return {string} The formatted date.
     */
    function format(dateMs: number): string;

    /**
     * Accepts a timestamp in milliseconds and outputs a relative time in the form
     * of "1 hour ago", "1 day ago".  All future times will be returned as 0 minutes
     * ago.
     *
     * This is provided for compatibility with users of the previous incarnation of
     * the above {@see #format} method who relied on it protecting against
     * future dates.
     *
     * @param {number} dateMs Date in milliseconds.
     * @return {string} The formatted date.
     */
    function formatPast(dateMs: number): string;

    /**
     * Accepts a timestamp in milliseconds and outputs a relative day. i.e. "Today",
     * "Yesterday", "Tomorrow", or "Sept 15".
     *
     * @param {number} dateMs Date in milliseconds.
     * @param {function(!Date):string=} opt_formatter Formatter for the date.
     *     Defaults to form 'MMM dd'.
     * @return {string} The formatted date.
     */
    function formatDay(dateMs: number, opt_formatter?: (_0: Date) => string): string;

    /**
     * Formats a date, adding the relative date in parenthesis.  If the date is less
     * than 24 hours then the time will be printed, otherwise the full-date will be
     * used.  Examples:
     *   2:20 PM (1 minute ago)
     *   Monday, February 27, 2009 (4 days ago)
     *   Tuesday, March 20, 2005    // Too long ago for a relative date.
     *
     * @param {Date|goog.date.DateTime} date A date object.
     * @param {string=} opt_shortTimeMsg An optional short time message can be
     *     provided if available, so that it's not recalculated in this function.
     * @param {string=} opt_fullDateMsg An optional date message can be
     *     provided if available, so that it's not recalculated in this function.
     * @return {string} The date string in the above form.
     */
    function getDateString(date: any /*Date|goog.date.DateTime*/, opt_shortTimeMsg?: string, opt_fullDateMsg?: string): string;

    /**
     * Formats a date, adding the relative date in parenthesis.   Functions the same
     * as #getDateString but ensures that the date is always seen to be in the past.
     * If the date is in the future, it will be shown as 0 minutes ago.
     *
     * This is provided for compatibility with users of the previous incarnation of
     * the above {@see #getDateString} method who relied on it protecting against
     * future dates.
     *
     * @param {Date|goog.date.DateTime} date A date object.
     * @param {string=} opt_shortTimeMsg An optional short time message can be
     *     provided if available, so that it's not recalculated in this function.
     * @param {string=} opt_fullDateMsg An optional date message can be
     *     provided if available, so that it's not recalculated in this function.
     * @return {string} The date string in the above form.
     */
    function getPastDateString(date: any /*Date|goog.date.DateTime*/, opt_shortTimeMsg?: string, opt_fullDateMsg?: string): string;
}

declare module 'goog.date.UtcDateTime' {

    /**
     * Creates a DateTime from a UTC datetime string expressed in ISO 8601 format.
     *
     * @param {string} formatted A date or datetime expressed in ISO 8601 format.
     * @return {goog.date.UtcDateTime} Parsed date or null if parse fails.
     */
    function fromIsoString(formatted: string): goog.date.UtcDateTime;
}

