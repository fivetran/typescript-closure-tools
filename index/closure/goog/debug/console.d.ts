// Generated Fri May  2 10:42:13 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/debug/relativetimeprovider.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/debug/formatter.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />

declare module goog.debug.Console {

    /**
     * Global console logger instance
     * @type {goog.debug.Console}
     */
    var instance: goog.debug.Console;

    /**
     * Sets the console to which to log.
     * @param {!Object} console The console to which to log.
     */
    function setConsole(console: Object): void;

    /**
     * Install the console and start capturing if "Debug=true" is in the page URL
     */
    function autoInstall(): void;

    /**
     * Show an alert with all of the captured debug information.
     * Information is only captured if console is not available
     */
    function show(): void;
}

declare module goog.debug {

    /**
     * Create and install a log handler that logs to window.console if available
     * @constructor
     */
    class Console {
        /**
         * Create and install a log handler that logs to window.console if available
         * @constructor
         */
        constructor();
    
        /**
         * Returns the text formatter used by this console
         * @return {!goog.debug.TextFormatter} The text formatter.
         */
        getFormatter(): goog.debug.TextFormatter;
    
        /**
         * Sets whether we are currently capturing logger output.
         * @param {boolean} capturing Whether to capture logger output.
         */
        setCapturing(capturing: boolean): void;
    
        /**
         * Adds a log record.
         * @param {goog.debug.LogRecord} logRecord The log entry.
         */
        addLogRecord(logRecord: goog.debug.LogRecord): void;
    
        /**
         * Adds a logger name to be filtered.
         * @param {string} loggerName the logger name to add.
         */
        addFilter(loggerName: string): void;
    
        /**
         * Removes a logger name to be filtered.
         * @param {string} loggerName the logger name to remove.
         */
        removeFilter(loggerName: string): void;
    }
}

