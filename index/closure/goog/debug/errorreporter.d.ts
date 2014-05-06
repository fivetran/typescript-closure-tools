/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/structs/simplepool.d.ts" />
/// <reference path="../../../closure/goog/debug/tracer.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/debug/errorhandler.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../closure/goog/net/httpstatus.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/net/errorcode.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/net/xhrlike.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttp.d.ts" />
/// <reference path="../../../closure/goog/net/eventtype.d.ts" />
/// <reference path="../../../closure/goog/net/xhrio.d.ts" />

declare module goog.debug {

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
        setLoggingHeaders(loggingHeaders: any /*Object|goog.structs.Map<any, any>*/): void;
    
        /**
         * Set the function used to send error reports to the server.
         * @param {function(string, string, string, (Object|goog.structs.Map)=)}
         *     xhrSender If provided, this will be used to send a report to the
         *     server instead of the default method. The function will be given the URI,
         *     HTTP method request content, and (optionally) request headers to be
         *     added.
         */
        setXhrSender(xhrSender: (_0: string, _1: string, _2: string, _3: any /*Object|goog.structs.Map<any, any>*/) => any /*missing*/): void;
    
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
    }
}

declare module goog.debug.ErrorReporter {

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
    function defaultXhrSender(uri: string, method: string, content: string, opt_headers?: any /*Object|goog.structs.Map<any, any>*/): void;
}

declare module goog.debug.ErrorReporter.ExceptionEvent {

    /**
     * Event type for notifying of a logged exception.
     * @type {string}
     */
    var TYPE: string;
}

