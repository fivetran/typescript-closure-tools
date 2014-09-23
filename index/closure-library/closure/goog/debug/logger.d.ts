/// <reference path="../../../globals.d.ts" />
/// <reference path="./logrecord.d.ts" />

declare module goog.debug {

    class Logger extends Logger.__Class { }
    module Logger {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
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
            log(level: goog.debug.Logger.Level, msg: string, opt_exception?: Error): void;
            /**
             * Logs a message. If the logger is currently enabled for the
             * given message level then the given message is forwarded to all the
             * registered output Handler objects.
             * @param {goog.debug.Logger.Level} level One of the level identifiers.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error|Object=} opt_exception An exception associated with the
             *     message.
             */
            log(level: goog.debug.Logger.Level, msg: string, opt_exception?: Object): void;
            /**
             * Logs a message. If the logger is currently enabled for the
             * given message level then the given message is forwarded to all the
             * registered output Handler objects.
             * @param {goog.debug.Logger.Level} level One of the level identifiers.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error|Object=} opt_exception An exception associated with the
             *     message.
             */
            log(level: goog.debug.Logger.Level, msg: () => string, opt_exception?: Error): void;
            /**
             * Logs a message. If the logger is currently enabled for the
             * given message level then the given message is forwarded to all the
             * registered output Handler objects.
             * @param {goog.debug.Logger.Level} level One of the level identifiers.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error|Object=} opt_exception An exception associated with the
             *     message.
             */
            log(level: goog.debug.Logger.Level, msg: () => string, opt_exception?: Object): void;
    
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
            getLogRecord(level: goog.debug.Logger.Level, msg: string, opt_exception?: Error, opt_fnStackContext?: Function): goog.debug.LogRecord;
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
            getLogRecord(level: goog.debug.Logger.Level, msg: string, opt_exception?: Object, opt_fnStackContext?: Function): goog.debug.LogRecord;
    
            /**
             * Logs a message at the Logger.Level.SHOUT level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            shout(msg: string, opt_exception?: Error): void;
            /**
             * Logs a message at the Logger.Level.SHOUT level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            shout(msg: () => string, opt_exception?: Error): void;
    
            /**
             * Logs a message at the Logger.Level.SEVERE level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            severe(msg: string, opt_exception?: Error): void;
            /**
             * Logs a message at the Logger.Level.SEVERE level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            severe(msg: () => string, opt_exception?: Error): void;
    
            /**
             * Logs a message at the Logger.Level.WARNING level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            warning(msg: string, opt_exception?: Error): void;
            /**
             * Logs a message at the Logger.Level.WARNING level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            warning(msg: () => string, opt_exception?: Error): void;
    
            /**
             * Logs a message at the Logger.Level.INFO level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            info(msg: string, opt_exception?: Error): void;
            /**
             * Logs a message at the Logger.Level.INFO level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            info(msg: () => string, opt_exception?: Error): void;
    
            /**
             * Logs a message at the Logger.Level.CONFIG level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            config(msg: string, opt_exception?: Error): void;
            /**
             * Logs a message at the Logger.Level.CONFIG level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            config(msg: () => string, opt_exception?: Error): void;
    
            /**
             * Logs a message at the Logger.Level.FINE level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            fine(msg: string, opt_exception?: Error): void;
            /**
             * Logs a message at the Logger.Level.FINE level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            fine(msg: () => string, opt_exception?: Error): void;
    
            /**
             * Logs a message at the Logger.Level.FINER level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            finer(msg: string, opt_exception?: Error): void;
            /**
             * Logs a message at the Logger.Level.FINER level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            finer(msg: () => string, opt_exception?: Error): void;
    
            /**
             * Logs a message at the Logger.Level.FINEST level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            finest(msg: string, opt_exception?: Error): void;
            /**
             * Logs a message at the Logger.Level.FINEST level.
             * If the logger is currently enabled for the given message level then the
             * given message is forwarded to all the registered output Handler objects.
             * @param {goog.debug.Loggable} msg The message to log.
             * @param {Error=} opt_exception An exception associated with the message.
             */
            finest(msg: () => string, opt_exception?: Error): void;
    
            /**
             * Logs a LogRecord. If the logger is currently enabled for the
             * given message level then the given message is forwarded to all the
             * registered output Handler objects.
             * @param {goog.debug.LogRecord} logRecord A log record to log.
             */
            logRecord(logRecord: goog.debug.LogRecord): void;
        }
    }

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
}

declare module goog.debug.Logger {

    class Level extends Level.__Class { }
    module Level {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
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
        }
    }

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
}

declare module goog.debug.Logger.Level {

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

declare module goog.debug.LogManager {

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
