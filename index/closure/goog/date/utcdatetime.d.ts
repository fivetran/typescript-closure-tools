/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/i18n/datetimesymbols.d.ts" />
/// <reference path="../../../closure/goog/date/datelike.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/date/date.d.ts" />

declare module goog.date {

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
    }
}

declare module goog.date.UtcDateTime {

    /**
     * Creates a DateTime from a UTC datetime string expressed in ISO 8601 format.
     *
     * @param {string} formatted A date or datetime expressed in ISO 8601 format.
     * @return {goog.date.UtcDateTime} Parsed date or null if parse fails.
     */
    function fromIsoString(formatted: string): goog.date.UtcDateTime;
}

