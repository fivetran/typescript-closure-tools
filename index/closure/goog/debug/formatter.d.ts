/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/debug/relativetimeprovider.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />

declare module goog.debug {

    /**
     * Base class for Formatters. A Formatter is used to format a LogRecord into
     * something that can be displayed to the user.
     *
     * @param {string=} opt_prefix The prefix to place before text records.
     * @constructor
     */
    class Formatter {
        /**
         * Base class for Formatters. A Formatter is used to format a LogRecord into
         * something that can be displayed to the user.
         *
         * @param {string=} opt_prefix The prefix to place before text records.
         * @constructor
         */
        constructor(opt_prefix?: string);
    
        /**
         * Whether to append newlines to the end of formatted log records.
         * @type {boolean}
         */
        appendNewline: boolean;
    
        /**
         * Whether to show absolute time in the DebugWindow.
         * @type {boolean}
         */
        showAbsoluteTime: boolean;
    
        /**
         * Whether to show relative time in the DebugWindow.
         * @type {boolean}
         */
        showRelativeTime: boolean;
    
        /**
         * Whether to show the logger name in the DebugWindow.
         * @type {boolean}
         */
        showLoggerName: boolean;
    
        /**
         * Whether to show the logger exception text.
         * @type {boolean}
         */
        showExceptionText: boolean;
    
        /**
         * Whether to show the severity level.
         * @type {boolean}
         */
        showSeverityLevel: boolean;
    
        /**
         * Formats a record.
         * @param {goog.debug.LogRecord} logRecord the logRecord to format.
         * @return {string} The formatted string.
         */
        formatRecord(logRecord: goog.debug.LogRecord): string;
    
        /**
         * Sets the start time provider. By default, this is the default instance
         * but can be changed.
         * @param {goog.debug.RelativeTimeProvider} provider The provider to use.
         */
        setStartTimeProvider(provider: goog.debug.RelativeTimeProvider): void;
    
        /**
         * Returns the start time provider. By default, this is the default instance
         * but can be changed.
         * @return {goog.debug.RelativeTimeProvider} The start time provider.
         */
        getStartTimeProvider(): goog.debug.RelativeTimeProvider;
    
        /**
         * Resets the start relative time.
         */
        resetRelativeTimeStart(): void;
    }

    /**
     * Formatter that returns formatted html. See formatRecord for the classes
     * it uses for various types of formatted output.
     *
     * @param {string=} opt_prefix The prefix to place before text records.
     * @constructor
     * @extends {goog.debug.Formatter}
     */
    class HtmlFormatter extends goog.debug.Formatter {
        /**
         * Formatter that returns formatted html. See formatRecord for the classes
         * it uses for various types of formatted output.
         *
         * @param {string=} opt_prefix The prefix to place before text records.
         * @constructor
         * @extends {goog.debug.Formatter}
         */
        constructor(opt_prefix?: string);
    }

    /**
     * Formatter that returns formatted plain text
     *
     * @param {string=} opt_prefix The prefix to place before text records.
     * @constructor
     * @extends {goog.debug.Formatter}
     * @final
     */
    class TextFormatter extends goog.debug.Formatter {
        /**
         * Formatter that returns formatted plain text
         *
         * @param {string=} opt_prefix The prefix to place before text records.
         * @constructor
         * @extends {goog.debug.Formatter}
         * @final
         */
        constructor(opt_prefix?: string);
    }
}

