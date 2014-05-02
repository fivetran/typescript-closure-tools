// Generated Thu May  1 16:45:14 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/debug/relativetimeprovider.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/debug/formatter.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />

declare module goog.debug {

    /**
     * A class for visualising logger calls in a div element.
     * @param {Element} element The element to append to.
     * @constructor
     */
    class DivConsole {
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

