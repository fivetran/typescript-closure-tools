/// <reference path="../../../globals.d.ts" />
/// <reference path="./logrecord.d.ts" />
/// <reference path="./formatter.d.ts" />

declare module goog.debug {

    class DivConsole extends DivConsole.__Class { }
    module DivConsole {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * A class for visualising logger calls in a div element.
             * @param {Element} element The element to append to.
             * @constructor
             */
            constructor(element: Element);
    
            /**
             * Installs styles for the log messages and its div
             */
            installStyles(): void;
    
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
             * Gets the formatter for outputting to the console. The default formatter
             * is an instance of goog.debug.HtmlFormatter
             * @return {!goog.debug.Formatter} The formatter in use.
             */
            getFormatter(): goog.debug.Formatter;
    
            /**
             * Sets the formatter for outputting to the console.
             * @param {goog.debug.Formatter} formatter The formatter to use.
             */
            setFormatter(formatter: goog.debug.Formatter): void;
    
            /**
             * Adds a separator to the debug window.
             */
            addSeparator(): void;
    
            /**
             * Clears the console.
             */
            clear(): void;
        }
    }
}
