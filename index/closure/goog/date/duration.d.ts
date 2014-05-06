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
/// <reference path="../../../closure/goog/i18n/numberformatsymbols.d.ts" />
/// <reference path="../../../closure/goog/i18n/compactnumberformatsymbols.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/i18n/currency.d.ts" />
/// <reference path="../../../closure/goog/i18n/numberformat.d.ts" />
/// <reference path="../../../closure/goog/i18n/ordinalrules.d.ts" />
/// <reference path="../../../closure/goog/i18n/pluralrules.d.ts" />
/// <reference path="../../../closure/goog/i18n/messageformat.d.ts" />

declare module goog.date.duration {

    /**
     * Accepts a duration in milliseconds and outputs an absolute duration time in
     * form of "1 day", "2 hours", "20 minutes", "2 days 1 hour 15 minutes" etc.
     * @param {number} durationMs Duration in milliseconds.
     * @return {string} The formatted duration.
     */
    function format(durationMs: number): string;
}

