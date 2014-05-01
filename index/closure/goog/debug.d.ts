// Generated Wed Apr 30 16:38:01 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/async.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/html.d.ts" />
/// <reference path="../goog/i18n.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/json.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/log.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/net.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/style.d.ts" />
/// <reference path="../goog/timer.d.ts" />
/// <reference path="../goog/ui.d.ts" />
/// <reference path="../goog/uri.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.debug.Console' {

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

declare module 'goog.debug' {

    /**
     * Catches onerror events fired by windows and similar objects.
     * @param {function(Object)} logFunc The function to call with the error
     *    information.
     * @param {boolean=} opt_cancel Whether to stop the error from reaching the
     *    browser.
     * @param {Object=} opt_target Object that fires onerror events.
     */
    function catchErrors(logFunc: (_0: Object) => any /*missing*/, opt_cancel?: boolean, opt_target?: Object): void;

    /**
     * Creates a string representing an object and all its properties.
     * @param {Object|null|undefined} obj Object to expose.
     * @param {boolean=} opt_showFn Show the functions as well as the properties,
     *     default is false.
     * @return {string} The string representation of {@code obj}.
     */
    function expose(obj: any /*Object|any (null)|any (undefined)*/, opt_showFn?: boolean): string;

    /**
     * Creates a string representing a given primitive or object, and for an
     * object, all its properties and nested objects.  WARNING: If an object is
     * given, it and all its nested objects will be modified.  To detect reference
     * cycles, this method identifies objects using goog.getUid() which mutates the
     * object.
     * @param {*} obj Object to expose.
     * @param {boolean=} opt_showFn Also show properties that are functions (by
     *     default, functions are omitted).
     * @return {string} A string representation of {@code obj}.
     */
    function deepExpose(obj: any, opt_showFn?: boolean): string;

    /**
     * Recursively outputs a nested array as a string.
     * @param {Array} arr The array.
     * @return {string} String representing nested array.
     */
    function exposeArray(arr: any[]): string;

    /**
     * Exposes an exception that has been caught by a try...catch and outputs the
     * error with a stack trace.
     * @param {Object} err Error object or string.
     * @param {Function=} opt_fn Optional function to start stack trace from.
     * @return {string} Details of exception.
     */
    function exposeException(err: Object, opt_fn?: Function): string;

    /**
     * Normalizes the error/exception object between browsers.
     * @param {Object} err Raw error object.
     * @return {!Object} Normalized error object.
     */
    function normalizeErrorObject(err: Object): Object;

    /**
     * Converts an object to an Error if it's a String,
     * adds a stacktrace if there isn't one,
     * and optionally adds an extra message.
     * @param {Error|string} err  the original thrown object or string.
     * @param {string=} opt_message  optional additional message to add to the
     *     error.
     * @return {!Error} If err is a string, it is used to create a new Error,
     *     which is enhanced and returned.  Otherwise err itself is enhanced
     *     and returned.
     */
    function enhanceError(err: any /*Error|string*/, opt_message?: string): Error;

    /**
     * Gets the current stack trace. Simple and iterative - doesn't worry about
     * catching circular references or getting the args.
     * @param {number=} opt_depth Optional maximum depth to trace back to.
     * @return {string} A string with the function names of all functions in the
     *     stack, separated by \n.
     * @suppress {es5Strict}
     */
    function getStacktraceSimple(opt_depth?: number): string;

    /**
     * Max length of stack to try and output
     * @type {number}
     */
    var MAX_STACK_DEPTH: number;

    /**
     * Gets the current stack trace, either starting from the caller or starting
     * from a specified function that's currently on the call stack.
     * @param {Function=} opt_fn Optional function to start getting the trace from.
     *     If not provided, defaults to the function that called this.
     * @return {string} Stack trace.
     * @suppress {es5Strict}
     */
    function getStacktrace(opt_fn?: Function): string;

    /**
     * Set a custom function name resolver.
     * @param {function(Function): string} resolver Resolves functions to their
     *     names.
     */
    function setFunctionResolver(resolver: (_0: Function) => string): void;

    /**
     * Gets a function name
     * @param {Function} fn Function to get name of.
     * @return {string} Function's name.
     */
    function getFunctionName(fn: Function): string;

    /**
     * Makes whitespace visible by replacing it with printable characters.
     * This is useful in finding diffrences between the expected and the actual
     * output strings of a testcase.
     * @param {string} string whose whitespace needs to be made visible.
     * @return {string} string whose whitespace is made visible.
     */
    function makeWhitespaceVisible(string: string): string;

    /**
     * Dummy object to work around undefined properties compiler warning.
     * @type {Object}
     */
    var errorHandlerWeakDep: Object;

    /**
     * Singleton GcDiagnostics object
     * @type {goog.debug.GcDiagnostics_}
     */
    var GcDiagnostics: goog.debug.GcDiagnostics_;

    /**
     * A message value that can be handled by a Logger.
     *
     * Functions are treated like callbacks, but are only called when the event's
     * log level is enabled. This is useful for logging messages that are expensive
     * to construct.
     *
     * @typedef {string|function(): string}
     */
    interface Loggable { /*any (string|() => string)*/ }

    /**
     * There is a single global LogManager object that is used to maintain a set of
     * shared state about Loggers and log services. This is loosely based on the
     * java class java.util.logging.LogManager.
     */
    var LogManager: any /*missing*/;

    /**
     * Singleton trace object
     * @type {goog.debug.Trace_}
     */
    var Trace: goog.debug.Trace_;

    /**
     * @interface
     */
    interface EntryPointMonitor {
        wrap: any /*missing*/;
        unwrap: any /*missing*/;
    }

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

    /**
     * Provides a debug DebugWindow that is bound to the goog.debug.Logger.
     * It handles log messages and writes them to the DebugWindow. This doesn't
     * provide a lot of functionality that the old Gmail logging infrastructure
     * provided like saving debug logs for exporting to the server. Now that we
     * have an event-based logging infrastructure, we can encapsulate that
     * functionality in a separate class.
     *
     * @constructor
     * @param {string=} opt_identifier Identifier for this logging class.
     * @param {string=} opt_prefix Prefix prepended to messages.
     */
    class DebugWindow {
        /**
         * Provides a debug DebugWindow that is bound to the goog.debug.Logger.
         * It handles log messages and writes them to the DebugWindow. This doesn't
         * provide a lot of functionality that the old Gmail logging infrastructure
         * provided like saving debug logs for exporting to the server. Now that we
         * have an event-based logging infrastructure, we can encapsulate that
         * functionality in a separate class.
         *
         * @constructor
         * @param {string=} opt_identifier Identifier for this logging class.
         * @param {string=} opt_prefix Prefix prepended to messages.
         */
        constructor(opt_identifier?: string, opt_prefix?: string);
    
        /**
         * HTML string printed when the debug window opens
         * @type {string}
         * @protected
         */
        welcomeMessage: string;
    
        /**
         * Reference to debug window
         * @type {Window}
         * @protected
         */
        win: Window;
    
        /**
         * Timestamp for the last time the log was written to.
         * @protected {number}
         */
        lastCall: any /*missing*/;
    
        /**
         * Sets the welcome message shown when the window is first opened or reset.
         *
         * @param {string} msg An HTML string.
         */
        setWelcomeMessage(msg: string): void;
    
        /**
         * Initializes the debug window.
         */
        init(): void;
    
        /**
         * Whether the DebugWindow is enabled. When the DebugWindow is enabled, it
         * tries to keep its window open and logs all messages to the window.  When the
         * DebugWindow is disabled, it stops logging messages to its window.
         *
         * @return {boolean} Whether the DebugWindow is enabled.
         */
        isEnabled(): boolean;
    
        /**
         * Sets whether the DebugWindow is enabled. When the DebugWindow is enabled, it
         * tries to keep its window open and log all messages to the window. When the
         * DebugWindow is disabled, it stops logging messages to its window. The
         * DebugWindow also saves this state to a cookie so that it's persisted across
         * application refreshes.
         * @param {boolean} enable Whether the DebugWindow is enabled.
         */
        setEnabled(enable: boolean): void;
    
        /**
         * Sets whether the debug window should be force enabled when a severe log is
         * encountered.
         * @param {boolean} enableOnSevere Whether to enable on severe logs..
         */
        setForceEnableOnSevere(enableOnSevere: boolean): void;
    
        /**
         * Whether we are currently capturing logger output.
         * @return {boolean} whether we are currently capturing logger output.
         */
        isCapturing(): boolean;
    
        /**
         * Sets whether we are currently capturing logger output.
         * @param {boolean} capturing Whether to capture logger output.
         */
        setCapturing(capturing: boolean): void;
    
        /**
         * Gets the formatter for outputting to the debug window. The default formatter
         * is an instance of goog.debug.HtmlFormatter
         * @return {goog.debug.Formatter} The formatter in use.
         */
        getFormatter(): goog.debug.Formatter;
    
        /**
         * Sets the formatter for outputting to the debug window.
         * @param {goog.debug.Formatter} formatter The formatter to use.
         */
        setFormatter(formatter: goog.debug.Formatter): void;
    
        /**
         * Adds a separator to the debug window.
         */
        addSeparator(): void;
    
        /**
         * @return {boolean} Whether there is an active window.
         */
        hasActiveWindow(): boolean;
    
        /**
         * Clears the contents of the debug window
         * @protected
         */
        clear(): void;
    
        /**
         * Adds a log record.
         * @param {goog.debug.LogRecord} logRecord the LogRecord.
         */
        addLogRecord(logRecord: goog.debug.LogRecord): void;
    
        /**
         * Write to the log and maybe scroll into view.
         * @protected
         */
        writeBufferToLog(): void;
    
        /**
         * Writes all saved messages to the DebugWindow.
         * @protected
         */
        writeSavedMessages(): void;
    
        /**
         * @return {string} The style rule text, for inclusion in the initial HTML.
         */
        getStyleRules(): string;
    
        /**
         * Writes the initial HTML of the debug window.
         * @protected
         */
        writeInitialDocument(): void;
    
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
    
        /**
         * Modify the size of the circular buffer. Allows the log to retain more
         * information while the window is closed.
         * @param {number} size New size of the circular buffer.
         */
        resetBufferWithNewSize(size: number): void;
    }

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

    /**
     * The ErrorHandler can be used to to wrap functions with a try/catch
     * statement. If an exception is thrown, the given error handler function will
     * be called.
     *
     * When this object is disposed, it will stop handling exceptions and tracing.
     * It will also try to restore window.setTimeout and window.setInterval
     * if it wrapped them. Notice that in the general case, it is not technically
     * possible to remove the wrapper, because functions have no knowledge of
     * what they have been assigned to. So the app is responsible for other
     * forms of unwrapping.
     *
     * @param {Function} handler Handler for exceptions.
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.debug.EntryPointMonitor}
     */
    class ErrorHandler extends goog.Disposable implements goog.debug.EntryPointMonitor {
        /**
         * The ErrorHandler can be used to to wrap functions with a try/catch
         * statement. If an exception is thrown, the given error handler function will
         * be called.
         *
         * When this object is disposed, it will stop handling exceptions and tracing.
         * It will also try to restore window.setTimeout and window.setInterval
         * if it wrapped them. Notice that in the general case, it is not technically
         * possible to remove the wrapper, because functions have no knowledge of
         * what they have been assigned to. So the app is responsible for other
         * forms of unwrapping.
         *
         * @param {Function} handler Handler for exceptions.
         * @constructor
         * @extends {goog.Disposable}
         * @implements {goog.debug.EntryPointMonitor}
         */
        constructor(handler: Function);
    
        /**
         * Enable tracers when instrumenting entry points.
         * @param {boolean} newVal See above.
         */
        setAddTracersToProtectedFunctions(newVal: boolean): void;
    
        /** @override */
        wrap(): void;
    
        /** @override */
        unwrap(): void;
    
        /**
         * Installs exception protection for an entry point function. When an exception
         * is thrown from a protected function, a handler will be invoked to handle it.
         *
         * @param {Function} fn An entry point function to be protected.
         * @return {!Function} A protected wrapper function that calls the entry point
         *     function.
         */
        protectEntryPoint(fn: Function): Function;
    
        /**
         * Helps {@link #protectEntryPoint} by actually creating the protected
         * wrapper function, after {@link #protectEntryPoint} determines that one does
         * not already exist for the given function.  Can be overriden by subclasses
         * that may want to implement different error handling, or add additional
         * entry point hooks.
         * @param {!Function} fn An entry point function to be protected.
         * @return {!Function} protected wrapper function.
         * @protected
         */
        getProtectedFunction(fn: Function): Function;
    
        /**
         * Installs exception protection for window.setTimeout to handle exceptions.
         */
        protectWindowSetTimeout(): void;
    
        /**
         * Install exception protection for window.setInterval to handle exceptions.
         */
        protectWindowSetInterval(): void;
    
        /**
         * Install exception protection for window.requestAnimationFrame to handle
         * exceptions.
         */
        protectWindowRequestAnimationFrame(): void;
    
        /**
         * Set whether to wrap errors that occur in protected functions in a
         * goog.debug.ErrorHandler.ProtectedFunctionError.
         * @param {boolean} wrapErrors Whether to wrap errors.
         */
        setWrapErrors(wrapErrors: boolean): void;
    
        /**
         * Set whether to add a prefix to all error messages that occur in protected
         * functions.
         * @param {boolean} prefixErrorMessages Whether to add a prefix to error
         *     messages.
         */
        setPrefixErrorMessages(prefixErrorMessages: boolean): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Base class for custom error objects.
     * @param {*=} opt_msg The message associated with the error.
     * @constructor
     * @extends {Error}
     */
    class Error extends Error {
        /**
         * Base class for custom error objects.
         * @param {*=} opt_msg The message associated with the error.
         * @constructor
         * @extends {Error}
         */
        constructor(opt_msg?: any);
    
        /** @override */
        name: any /*missing*/;
    }

    /**
     * Constructs an error reporter. Internal Use Only. To install an error
     * reporter see the {@see #install} method below.
     *
     * @param {string} handlerUrl The URL to which all errors will be reported.
     * @param {function(!Error, !Object.<string, string>)=}
     *     opt_contextProvider When a report is to be sent to the server,
     *     this method will be called, and given an opportunity to modify the
     *     context object before submission to the server.
     * @param {boolean=} opt_noAutoProtect Whether to automatically add handlers for
     *     onerror and to protect entry points.  If apps have other error reporting
     *     facilities, it may make sense for them to set these up themselves and use
     *     the ErrorReporter just for transmission of reports.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class ErrorReporter extends goog.events.EventTarget {
        /**
         * Constructs an error reporter. Internal Use Only. To install an error
         * reporter see the {@see #install} method below.
         *
         * @param {string} handlerUrl The URL to which all errors will be reported.
         * @param {function(!Error, !Object.<string, string>)=}
         *     opt_contextProvider When a report is to be sent to the server,
         *     this method will be called, and given an opportunity to modify the
         *     context object before submission to the server.
         * @param {boolean=} opt_noAutoProtect Whether to automatically add handlers for
         *     onerror and to protect entry points.  If apps have other error reporting
         *     facilities, it may make sense for them to set these up themselves and use
         *     the ErrorReporter just for transmission of reports.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(handlerUrl: string, opt_contextProvider?: (_0: Error, _1: { [key: string]: string }) => any /*missing*/, opt_noAutoProtect?: boolean);
    
        /**
         * Installs exception protection for an entry point function in addition
         * to those that are protected by default.
         * Has no effect in IE because window.onerror is used for reporting
         * exceptions in that case.
         *
         * @this {goog.debug.ErrorReporter}
         * @param {Function} fn An entry point function to be protected.
         * @return {Function} A protected wrapper function that calls the entry point
         *     function or null if the entry point could not be protected.
         */
        protectAdditionalEntryPoint: any /*missing*/;
    
        /**
         * Add headers to the logging url.
         * @param {Object|goog.structs.Map} loggingHeaders Extra headers to send
         *     to the logging URL.
         */
        setLoggingHeaders(loggingHeaders: any /*Object|goog.structs.Map*/): void;
    
        /**
         * Set the function used to send error reports to the server.
         * @param {function(string, string, string, (Object|goog.structs.Map)=)}
         *     xhrSender If provided, this will be used to send a report to the
         *     server instead of the default method. The function will be given the URI,
         *     HTTP method request content, and (optionally) request headers to be
         *     added.
         */
        setXhrSender(xhrSender: (_0: string, _1: string, _2: string, _3: any /*Object|goog.structs.Map*/) => any /*missing*/): void;
    
        /**
         * Handler for caught exceptions. Sends report to the LoggingServlet and
         * notifies any listeners.
         *
         * @param {Object} e The exception.
         * @param {!Object.<string, string>=} opt_context Context values to optionally
         *     include in the error report.
         */
        handleException(e: Object, opt_context?: { [key: string]: string }): void;
    
        /**
         * Sends an error report to the logging URL.  This will not consult the context
         * provider, the report will be sent exactly as specified.
         *
         * @param {string} message Error description.
         * @param {string} fileName URL of the JavaScript file with the error.
         * @param {number} line Line number of the error.
         * @param {string=} opt_trace Call stack trace of the error.
         * @param {!Object.<string, string>=} opt_context Context information to include
         *     in the request.
         */
        sendErrorReport(message: string, fileName: string, line: number, opt_trace?: string, opt_context?: { [key: string]: string }): void;
    
        /**
         * @param {string} prefix The prefix to appear prepended to all context
         *     variables in the error report body.
         */
        setContextPrefix(prefix: string): void;
    
        /**
         * @param {?number} limit Size in bytes to begin truncating POST body.  Set to
         *     null to prevent truncation.  The limit must be >= 0.
         */
        setTruncationLimit(limit: number): void;
    
        /**
         * @param {!Object.<string,string>} urlArgs Set of key-value pairs to append
         *     to handlerUrl_ before sending XHR.
         */
        setAdditionalArguments(urlArgs: { [key: string]: string }): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Provides a Fancy extension to the DebugWindow class.  Allows filtering based
     * on loggers and levels.
     *
     * @param {string=} opt_identifier Idenitifier for this logging class.
     * @param {string=} opt_prefix Prefix pre-pended to messages.
     * @constructor
     * @extends {goog.debug.DebugWindow}
     */
    class FancyWindow extends goog.debug.DebugWindow {
        /**
         * Provides a Fancy extension to the DebugWindow class.  Allows filtering based
         * on loggers and levels.
         *
         * @param {string=} opt_identifier Idenitifier for this logging class.
         * @param {string=} opt_prefix Prefix pre-pended to messages.
         * @constructor
         * @extends {goog.debug.DebugWindow}
         */
        constructor(opt_identifier?: string, opt_prefix?: string);
    
        /** @override */
        writeBufferToLog(): void;
    
        /** @override */
        writeInitialDocument(): void;
    
        /** @override */
        getStyleRules(): void;
    }

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
        formatRecord: any /*missing*/;
    
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
    
        /**
         * Whether to show the logger exception text
         * @type {boolean}
         * @override
         */
        showExceptionText: boolean;
    
        /**
         * Formats a record
         * @param {goog.debug.LogRecord} logRecord the logRecord to format.
         * @return {string} The formatted string as html.
         * @override
         */
        formatRecord(logRecord: goog.debug.LogRecord): string;
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
    
        /**
         * Formats a record as text
         * @param {goog.debug.LogRecord} logRecord the logRecord to format.
         * @return {string} The formatted string.
         * @override
         */
        formatRecord(logRecord: goog.debug.LogRecord): string;
    }

    /**
     * Displays frames per seconds that the window this component is
     * rendered in is animating at.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper An optional dom helper.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class FpsDisplay extends goog.ui.Component {
        /**
         * Displays frames per seconds that the window this component is
         * rendered in is animating at.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper An optional dom helper.
         * @constructor
         * @extends {goog.ui.Component}
         * @final
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        createDom(): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /**
         * @return {number} The average frames per second.
         */
        getFps(): number;
    }

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

    /**
     * The Logger is an object used for logging debug messages. Loggers are
     * normally named, using a hierarchical dot-separated namespace. Logger names
     * can be arbitrary strings, but they should normally be based on the package
     * name or class name of the logged component, such as goog.net.BrowserChannel.
     *
     * The Logger object is loosely based on the java class
     * java.util.logging.Logger. It supports different levels of filtering for
     * different loggers.
     *
     * The logger object should never be instantiated by application code. It
     * should always use the goog.debug.Logger.getLogger function.
     *
     * @constructor
     * @param {string} name The name of the Logger.
     * @final
     */
    class Logger {
        /**
         * The Logger is an object used for logging debug messages. Loggers are
         * normally named, using a hierarchical dot-separated namespace. Logger names
         * can be arbitrary strings, but they should normally be based on the package
         * name or class name of the logged component, such as goog.net.BrowserChannel.
         *
         * The Logger object is loosely based on the java class
         * java.util.logging.Logger. It supports different levels of filtering for
         * different loggers.
         *
         * The logger object should never be instantiated by application code. It
         * should always use the goog.debug.Logger.getLogger function.
         *
         * @constructor
         * @param {string} name The name of the Logger.
         * @final
         */
        constructor(name: string);
    
        /**
         * Gets the name of this logger.
         * @return {string} The name of this logger.
         */
        getName(): string;
    
        /**
         * Adds a handler to the logger. This doesn't use the event system because
         * we want to be able to add logging to the event system.
         * @param {Function} handler Handler function to add.
         */
        addHandler(handler: Function): void;
    
        /**
         * Removes a handler from the logger. This doesn't use the event system because
         * we want to be able to add logging to the event system.
         * @param {Function} handler Handler function to remove.
         * @return {boolean} Whether the handler was removed.
         */
        removeHandler(handler: Function): boolean;
    
        /**
         * Returns the parent of this logger.
         * @return {goog.debug.Logger} The parent logger or null if this is the root.
         */
        getParent(): goog.debug.Logger;
    
        /**
         * Returns the children of this logger as a map of the child name to the logger.
         * @return {!Object} The map where the keys are the child leaf names and the
         *     values are the Logger objects.
         */
        getChildren(): Object;
    
        /**
         * Set the log level specifying which message levels will be logged by this
         * logger. Message levels lower than this value will be discarded.
         * The level value Level.OFF can be used to turn off logging. If the new level
         * is null, it means that this node should inherit its level from its nearest
         * ancestor with a specific (non-null) level value.
         *
         * @param {goog.debug.Logger.Level} level The new level.
         */
        setLevel(level: goog.debug.Logger.Level): void;
    
        /**
         * Gets the log level specifying which message levels will be logged by this
         * logger. Message levels lower than this value will be discarded.
         * The level value Level.OFF can be used to turn off logging. If the level
         * is null, it means that this node should inherit its level from its nearest
         * ancestor with a specific (non-null) level value.
         *
         * @return {goog.debug.Logger.Level} The level.
         */
        getLevel(): goog.debug.Logger.Level;
    
        /**
         * Returns the effective level of the logger based on its ancestors' levels.
         * @return {goog.debug.Logger.Level} The level.
         */
        getEffectiveLevel(): goog.debug.Logger.Level;
    
        /**
         * Checks if a message of the given level would actually be logged by this
         * logger. This check is based on the Loggers effective level, which may be
         * inherited from its parent.
         * @param {goog.debug.Logger.Level} level The level to check.
         * @return {boolean} Whether the message would be logged.
         */
        isLoggable(level: goog.debug.Logger.Level): boolean;
    
        /**
         * Logs a message. If the logger is currently enabled for the
         * given message level then the given message is forwarded to all the
         * registered output Handler objects.
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error|Object=} opt_exception An exception associated with the
         *     message.
         */
        log(level: goog.debug.Logger.Level, msg: goog.debug.Loggable, opt_exception?: any /*Error|Object*/): void;
    
        /**
         * Creates a new log record and adds the exception (if present) to it.
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {string} msg The string message.
         * @param {Error|Object=} opt_exception An exception associated with the
         *     message.
         * @param {Function=} opt_fnStackContext A function to use as the base
         *     of the stack trace used in the log record.
         * @return {!goog.debug.LogRecord} A log record.
         * @suppress {es5Strict}
         */
        getLogRecord(level: goog.debug.Logger.Level, msg: string, opt_exception?: any /*Error|Object*/, opt_fnStackContext?: Function): goog.debug.LogRecord;
    
        /**
         * Logs a message at the Logger.Level.SHOUT level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        shout(msg: goog.debug.Loggable, opt_exception?: Error): void;
    
        /**
         * Logs a message at the Logger.Level.SEVERE level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        severe(msg: goog.debug.Loggable, opt_exception?: Error): void;
    
        /**
         * Logs a message at the Logger.Level.WARNING level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        warning(msg: goog.debug.Loggable, opt_exception?: Error): void;
    
        /**
         * Logs a message at the Logger.Level.INFO level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        info(msg: goog.debug.Loggable, opt_exception?: Error): void;
    
        /**
         * Logs a message at the Logger.Level.CONFIG level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        config(msg: goog.debug.Loggable, opt_exception?: Error): void;
    
        /**
         * Logs a message at the Logger.Level.FINE level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        fine(msg: goog.debug.Loggable, opt_exception?: Error): void;
    
        /**
         * Logs a message at the Logger.Level.FINER level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        finer(msg: goog.debug.Loggable, opt_exception?: Error): void;
    
        /**
         * Logs a message at the Logger.Level.FINEST level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        finest(msg: goog.debug.Loggable, opt_exception?: Error): void;
    
        /**
         * Logs a LogRecord. If the logger is currently enabled for the
         * given message level then the given message is forwarded to all the
         * registered output Handler objects.
         * @param {goog.debug.LogRecord} logRecord A log record to log.
         */
        logRecord(logRecord: goog.debug.LogRecord): void;
    }

    /**
     * LogRecord objects are used to pass logging requests between
     * the logging framework and individual log Handlers.
     * @constructor
     * @param {goog.debug.Logger.Level} level One of the level identifiers.
     * @param {string} msg The string message.
     * @param {string} loggerName The name of the source logger.
     * @param {number=} opt_time Time this log record was created if other than now.
     *     If 0, we use #goog.now.
     * @param {number=} opt_sequenceNumber Sequence number of this log record. This
     *     should only be passed in when restoring a log record from persistence.
     */
    class LogRecord {
        /**
         * LogRecord objects are used to pass logging requests between
         * the logging framework and individual log Handlers.
         * @constructor
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {string} msg The string message.
         * @param {string} loggerName The name of the source logger.
         * @param {number=} opt_time Time this log record was created if other than now.
         *     If 0, we use #goog.now.
         * @param {number=} opt_sequenceNumber Sequence number of this log record. This
         *     should only be passed in when restoring a log record from persistence.
         */
        constructor(level: goog.debug.Logger.Level, msg: string, loggerName: string, opt_time?: number, opt_sequenceNumber?: number);
    
        /**
         * Sets all fields of the log record.
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {string} msg The string message.
         * @param {string} loggerName The name of the source logger.
         * @param {number=} opt_time Time this log record was created if other than now.
         *     If 0, we use #goog.now.
         * @param {number=} opt_sequenceNumber Sequence number of this log record. This
         *     should only be passed in when restoring a log record from persistence.
         */
        reset(level: goog.debug.Logger.Level, msg: string, loggerName: string, opt_time?: number, opt_sequenceNumber?: number): void;
    
        /**
         * Get the source Logger's name.
         *
         * @return {string} source logger name (may be null).
         */
        getLoggerName(): string;
    
        /**
         * Get the exception that is part of the log record.
         *
         * @return {Object} the exception.
         */
        getException(): Object;
    
        /**
         * Set the exception that is part of the log record.
         *
         * @param {Object} exception the exception.
         */
        setException(exception: Object): void;
    
        /**
         * Get the exception text that is part of the log record.
         *
         * @return {?string} Exception text.
         */
        getExceptionText(): string;
    
        /**
         * Set the exception text that is part of the log record.
         *
         * @param {string} text The exception text.
         */
        setExceptionText(text: string): void;
    
        /**
         * Get the source Logger's name.
         *
         * @param {string} loggerName source logger name (may be null).
         */
        setLoggerName(loggerName: string): void;
    
        /**
         * Get the logging message level, for example Level.SEVERE.
         * @return {goog.debug.Logger.Level} the logging message level.
         */
        getLevel(): goog.debug.Logger.Level;
    
        /**
         * Set the logging message level, for example Level.SEVERE.
         * @param {goog.debug.Logger.Level} level the logging message level.
         */
        setLevel(level: goog.debug.Logger.Level): void;
    
        /**
         * Get the "raw" log message, before localization or formatting.
         *
         * @return {string} the raw message string.
         */
        getMessage(): string;
    
        /**
         * Set the "raw" log message, before localization or formatting.
         *
         * @param {string} msg the raw message string.
         */
        setMessage(msg: string): void;
    
        /**
         * Get event time in milliseconds since 1970.
         *
         * @return {number} event time in millis since 1970.
         */
        getMillis(): number;
    
        /**
         * Set event time in milliseconds since 1970.
         *
         * @param {number} time event time in millis since 1970.
         */
        setMillis(time: number): void;
    
        /**
         * Get the sequence number.
         * <p>
         * Sequence numbers are normally assigned in the LogRecord
         * constructor, which assigns unique sequence numbers to
         * each new LogRecord in increasing order.
         * @return {number} the sequence number.
         */
        getSequenceNumber(): number;
    }

    /**
     * A simple object to keep track of a timestamp considered the start of
     * something. The main use is for the logger system to maintain a start time
     * that is occasionally reset. For example, in Gmail, we reset this relative
     * time at the start of a user action so that timings are offset from the
     * beginning of the action. This class also provides a singleton as the default
     * behavior for most use cases is to share the same start time.
     *
     * @constructor
     * @final
     */
    class RelativeTimeProvider {
        /**
         * A simple object to keep track of a timestamp considered the start of
         * something. The main use is for the logger system to maintain a start time
         * that is occasionally reset. For example, in Gmail, we reset this relative
         * time at the start of a user action so that timings are offset from the
         * beginning of the action. This class also provides a singleton as the default
         * behavior for most use cases is to share the same start time.
         *
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Sets the start time to the specified time.
         * @param {number} timeStamp The start time.
         */
        set(timeStamp: number): void;
    
        /**
         * Resets the start time to now.
         */
        reset(): void;
    
        /**
         * @return {number} The start time.
         */
        get(): number;
    }
}

declare module 'goog.debug.DebugWindow' {

    /**
     * Max number of messages to be saved
     * @type {number}
     */
    var MAX_SAVED: number;

    /**
     * How long to keep the cookies for in milliseconds
     * @type {number}
     */
    var COOKIE_TIME: number;

    /**
     * @param {string} identifier Identifier for logging class.
     * @return {boolean} Whether the DebugWindow is enabled.
     */
    function isEnabled(identifier: string): boolean;
}

declare module 'goog.debug.entryPointRegistry' {

    /**
     * Register an entry point with this module.
     *
     * The entry point will be instrumented when a monitor is passed to
     * goog.debug.entryPointRegistry.monitorAll. If this has already occurred, the
     * entry point is instrumented immediately.
     *
     * @param {function(!Function)} callback A callback function which is called
     *     with a transforming function to instrument the entry point. The callback
     *     is responsible for wrapping the relevant entry point with the
     *     transforming function.
     */
    function register(callback: (_0: Function) => any /*missing*/): void;

    /**
     * Configures a monitor to wrap all entry points.
     *
     * Entry points that have already been registered are immediately wrapped by
     * the monitor. When an entry point is registered in the future, it will also
     * be wrapped by the monitor when it is registered.
     *
     * @param {!goog.debug.EntryPointMonitor} monitor An entry point monitor.
     */
    function monitorAll(monitor: goog.debug.EntryPointMonitor): void;

    /**
     * Try to unmonitor all the entry points that have already been registered. If
     * an entry point is registered in the future, it will not be wrapped by the
     * monitor when it is registered. Note that this may fail if the entry points
     * have additional wrapping.
     *
     * @param {!goog.debug.EntryPointMonitor} monitor The last monitor to wrap
     *     the entry points.
     * @throws {Error} If the monitor is not the most recently configured monitor.
     */
    function unmonitorAllIfPossible(monitor: goog.debug.EntryPointMonitor): void;
}

declare module 'goog.debug.ErrorHandler.ProtectedFunctionError' {

    /**
     * Text to prefix the message with.
     * @type {string}
     */
    var MESSAGE_PREFIX: string;
}

declare module 'goog.debug.ErrorReporter.ExceptionEvent' {

    /**
     * Event type for notifying of a logged exception.
     * @type {string}
     */
    var TYPE: string;
}

declare module 'goog.debug.ErrorReporter' {

    /**
     * Installs an error reporter to catch all JavaScript errors raised.
     *
     * @param {string} loggingUrl The URL to which the errors caught will be
     *     reported.
     * @param {function(!Error, !Object.<string, string>)=}
     *     opt_contextProvider When a report is to be sent to the server,
     *     this method will be called, and given an opportunity to modify the
     *     context object before submission to the server.
     * @param {boolean=} opt_noAutoProtect Whether to automatically add handlers for
     *     onerror and to protect entry points.  If apps have other error reporting
     *     facilities, it may make sense for them to set these up themselves and use
     *     the ErrorReporter just for transmission of reports.
     * @return {!goog.debug.ErrorReporter} The error reporter.
     */
    function install(loggingUrl: string, opt_contextProvider?: (_0: Error, _1: { [key: string]: string }) => any /*missing*/, opt_noAutoProtect?: boolean): goog.debug.ErrorReporter;

    /**
     * Default implementation of XHR sender interface.
     *
     * @param {string} uri URI to make request to.
     * @param {string} method Send method.
     * @param {string} content Post data.
     * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
     *     request.
     */
    function defaultXhrSender(uri: string, method: string, content: string, opt_headers?: any /*Object|goog.structs.Map*/): void;

    /**
     * Event broadcast when an exception is logged.
     * @param {Error} error The exception that was was reported.
     * @param {!Object.<string, string>} context The context values sent to the
     *     server alongside this error.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class ExceptionEvent extends goog.events.Event {
        /**
         * Event broadcast when an exception is logged.
         * @param {Error} error The exception that was was reported.
         * @param {!Object.<string, string>} context The context values sent to the
         *     server alongside this error.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(error: Error, context: { [key: string]: string });
    }
}

declare module 'goog.debug.FancyWindow' {

    /**
     * Constant indicating if we are able to use localStorage to persist filters
     * @type {boolean}
     */
    var HAS_LOCAL_STORE: boolean;

    /**
     * Constant defining the prefix to use when storing log levels
     * @type {string}
     */
    var LOCAL_STORE_PREFIX: string;
}

declare module 'goog.debug.FpsDisplay' {

    /**
     * CSS class for the FPS display.
     */
    var CSS: any /*missing*/;

    /**
     * The number of samples per FPS report.
     */
    var SAMPLES: any /*missing*/;
}

declare module 'goog.debug.LogBuffer' {

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

declare module 'goog.debug.Logger.Level' {

    /**
     * OFF is a special level that can be used to turn off logging.
     * This level is initialized to <CODE>Infinity</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var OFF: goog.debug.Logger.Level;

    /**
     * SHOUT is a message level for extra debugging loudness.
     * This level is initialized to <CODE>1200</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var SHOUT: goog.debug.Logger.Level;

    /**
     * SEVERE is a message level indicating a serious failure.
     * This level is initialized to <CODE>1000</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var SEVERE: goog.debug.Logger.Level;

    /**
     * WARNING is a message level indicating a potential problem.
     * This level is initialized to <CODE>900</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var WARNING: goog.debug.Logger.Level;

    /**
     * INFO is a message level for informational messages.
     * This level is initialized to <CODE>800</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var INFO: goog.debug.Logger.Level;

    /**
     * CONFIG is a message level for static configuration messages.
     * This level is initialized to <CODE>700</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var CONFIG: goog.debug.Logger.Level;

    /**
     * FINE is a message level providing tracing information.
     * This level is initialized to <CODE>500</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var FINE: goog.debug.Logger.Level;

    /**
     * FINER indicates a fairly detailed tracing message.
     * This level is initialized to <CODE>400</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var FINER: goog.debug.Logger.Level;

    /**
     * FINEST indicates a highly detailed tracing message.
     * This level is initialized to <CODE>300</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var FINEST: goog.debug.Logger.Level;

    /**
     * ALL indicates that all messages should be logged.
     * This level is initialized to <CODE>0</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var ALL: goog.debug.Logger.Level;

    /**
     * The predefined levels.
     * @type {!Array.<!goog.debug.Logger.Level>}
     * @final
     */
    var PREDEFINED_LEVELS: goog.debug.Logger.Level[];

    /**
     * Gets the predefined level with the given name.
     * @param {string} name The name of the level.
     * @return {goog.debug.Logger.Level} The level, or null if none found.
     */
    function getPredefinedLevel(name: string): goog.debug.Logger.Level;

    /**
     * Gets the highest predefined level <= #value.
     * @param {number} value Level value.
     * @return {goog.debug.Logger.Level} The level, or null if none found.
     */
    function getPredefinedLevelByValue(value: number): goog.debug.Logger.Level;
}

declare module 'goog.debug.Logger' {

    /**
     * Finds or creates a logger for a named subsystem. If a logger has already been
     * created with the given name it is returned. Otherwise a new logger is
     * created. If a new logger is created its log level will be configured based
     * on the LogManager configuration and it will configured to also send logging
     * output to its parent's handlers. It will be registered in the LogManager
     * global namespace.
     *
     * @param {string} name A name for the logger. This should be a dot-separated
     * name and should normally be based on the package name or class name of the
     * subsystem, such as goog.net.BrowserChannel.
     * @return {!goog.debug.Logger} The named logger.
     * @deprecated use goog.log instead. http://go/goog-debug-logger-deprecated
     */
    function getLogger(name: string): goog.debug.Logger;

    /**
     * Logs a message to profiling tools, if available.
     * {@see http://code.google.com/webtoolkit/speedtracer/logging-api.html}
     * {@see http://msdn.microsoft.com/en-us/library/dd433074(VS.85).aspx}
     * @param {string} msg The message to log.
     */
    function logToProfilers(msg: string): void;

    /**
     * The Level class defines a set of standard logging levels that
     * can be used to control logging output.  The logging Level objects
     * are ordered and are specified by ordered integers.  Enabling logging
     * at a given level also enables logging at all higher levels.
     * <p>
     * Clients should normally use the predefined Level constants such
     * as Level.SEVERE.
     * <p>
     * The levels in descending order are:
     * <ul>
     * <li>SEVERE (highest value)
     * <li>WARNING
     * <li>INFO
     * <li>CONFIG
     * <li>FINE
     * <li>FINER
     * <li>FINEST  (lowest value)
     * </ul>
     * In addition there is a level OFF that can be used to turn
     * off logging, and a level ALL that can be used to enable
     * logging of all messages.
     *
     * @param {string} name The name of the level.
     * @param {number} value The numeric value of the level.
     * @constructor
     * @final
     */
    class Level {
        /**
         * The Level class defines a set of standard logging levels that
         * can be used to control logging output.  The logging Level objects
         * are ordered and are specified by ordered integers.  Enabling logging
         * at a given level also enables logging at all higher levels.
         * <p>
         * Clients should normally use the predefined Level constants such
         * as Level.SEVERE.
         * <p>
         * The levels in descending order are:
         * <ul>
         * <li>SEVERE (highest value)
         * <li>WARNING
         * <li>INFO
         * <li>CONFIG
         * <li>FINE
         * <li>FINER
         * <li>FINEST  (lowest value)
         * </ul>
         * In addition there is a level OFF that can be used to turn
         * off logging, and a level ALL that can be used to enable
         * logging of all messages.
         *
         * @param {string} name The name of the level.
         * @param {number} value The numeric value of the level.
         * @constructor
         * @final
         */
        constructor(name: string, value: number);
    
        /**
         * @return {string} String representation of the logger level.
         * @override
         */
        toString(): string;
    }
}

declare module 'goog.debug.LogManager' {

    /**
     * Initializes the LogManager if not already initialized.
     */
    function initialize(): void;

    /**
     * Returns all the loggers.
     * @return {!Object.<string, !goog.debug.Logger>} Map of logger names to logger
     *     objects.
     */
    function getLoggers(): { [key: string]: goog.debug.Logger };

    /**
     * Returns the root of the logger tree namespace, the logger with the empty
     * string as its name.
     *
     * @return {!goog.debug.Logger} The root logger.
     */
    function getRoot(): goog.debug.Logger;

    /**
     * Finds a named logger.
     *
     * @param {string} name A name for the logger. This should be a dot-separated
     * name and should normally be based on the package name or class name of the
     * subsystem, such as goog.net.BrowserChannel.
     * @return {!goog.debug.Logger} The named logger.
     */
    function getLogger(name: string): goog.debug.Logger;

    /**
     * Creates a function that can be passed to goog.debug.catchErrors. The function
     * will log all reported errors using the given logger.
     * @param {goog.debug.Logger=} opt_logger The logger to log the errors to.
     *     Defaults to the root logger.
     * @return {function(Object)} The created function.
     */
    function createFunctionForCatchErrors(opt_logger?: goog.debug.Logger): (_0: Object) => any /*missing*/;
}

declare module 'goog.debug.logRecordSerializer' {

    /**
     * Serializes a LogRecord to a JSON string.  Note that any associated
     * exception is likely to be lost.
     * @param {goog.debug.LogRecord} record The record to serialize.
     * @return {string} Serialized JSON string of the log message.
     */
    function serialize(record: goog.debug.LogRecord): string;

    /**
     * Deserializes a JSON-serialized LogRecord.
     * @param {string} s The JSON serialized record.
     * @return {!goog.debug.LogRecord} The deserialized record.
     */
    function parse(s: string): goog.debug.LogRecord;

    /**
     * Deserializes a JSON-serialized LogRecord.  Use this only if you're
     * naive enough to blindly trust any JSON formatted input that comes
     * your way.
     * @param {string} s The JSON serialized record.
     * @return {!goog.debug.LogRecord} The deserialized record.
     */
    function unsafeParse(s: string): goog.debug.LogRecord;
}

declare module 'goog.debug.reflect' {

    /**
     * Returns the name of a type of object.
     * @param {!Function} classConstructor A object constructor to get the name of.
     * @return {string|undefined} The string name of the class.
     */
    function className(classConstructor: Function): any /*string|any (undefined)*/;

    /**
     * Guesses the real type of the object, even if its {@code toString} method is
     * overridden. Gives exact result for all goog.provided classes in non-compiled
     * code, and some often used native classes in compiled code too. Not tested in
     * multi-frame environment.
     *
     * Example use case to get better type information in the Watch tab of FireBug:
     * <pre>
     * Object.prototype.toString = function() {
     *   return goog.debug.reflect.typeOf(this);
     * };
     * </pre>
     *
     * @param {*} obj An arbitrary variable to get the type of.
     * @return {string} The namespaced type of the argument or 'Object' if didn't
     *     manage to determine it. Warning: in IE7 ActiveX (including DOM) objects
     *     don't expose their type to JavaScript. Their {@code constructor}
     *     property is undefined and they are not even the instances of the
     *     {@code Object} type. This method will recognize them as 'ActiveXObject'.
     */
    function typeOf(obj: any): string;
}

declare module 'goog.debug.RelativeTimeProvider' {

    /**
     * @return {goog.debug.RelativeTimeProvider} The default instance.
     */
    function getDefaultInstance(): goog.debug.RelativeTimeProvider;
}

declare module 'goog.debug.ErrorHandler' {

    /**
     * Error thrown to the caller of a protected entry point if the entry point
     * throws an error.
     * @param {*} cause The error thrown by the entry point.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class ProtectedFunctionError extends goog.debug.Error {
        /**
         * Error thrown to the caller of a protected entry point if the entry point
         * throws an error.
         * @param {*} cause The error thrown by the entry point.
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor(cause: any);
    }
}

