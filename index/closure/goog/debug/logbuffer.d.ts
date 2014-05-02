// Generated Thu May  1 16:45:11 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />

declare module goog.debug.LogBuffer {

    /**
     * A static method that always returns the same instance of LogBuffer.
     * @return {!goog.debug.LogBuffer} The LogBuffer singleton instance.
     */
    function getInstance(): goog.debug.LogBuffer;

    /**
     * @return {boolean} Whether the log buffer is enabled.
     */
    function isBufferingEnabled(): boolean;
}

declare module goog.debug {

    /**
     * Creates the log buffer.
     * @constructor
     * @final
     */
    class LogBuffer {
        /**
         * Creates the log buffer.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Adds a log record to the buffer, possibly overwriting the oldest record.
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {string} msg The string message.
         * @param {string} loggerName The name of the source logger.
         * @return {!goog.debug.LogRecord} The log record.
         */
        addRecord(level: goog.debug.Logger.Level, msg: string, loggerName: string): goog.debug.LogRecord;
    
        /**
         * Removes all buffered log records.
         */
        clear(): void;
    
        /**
         * Calls the given function for each buffered log record, starting with the
         * oldest one.
         * @param {function(!goog.debug.LogRecord)} func The function to call.
         */
        forEachRecord(func: (_0: goog.debug.LogRecord) => any /*missing*/): void;
    }
}

