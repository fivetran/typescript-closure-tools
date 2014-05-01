// Generated Wed Apr 30 16:31:07 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/async.d.ts" />
/// <reference path="../goog/crypt.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/fs.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/json.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/log.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/promise.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/testing.d.ts" />
/// <reference path="../goog/timer.d.ts" />
/// <reference path="../goog/uri.d.ts" />
/// <reference path="../goog/useragent.d.ts" />
/// <reference path="../lib/closure-library/third_party/closure/goog/mochikit/async.d.ts" />

declare module 'goog.net.BrowserChannel' {

    /**
     * The latest protocol version that this class supports. We request this version
     * from the server when opening the connection. Should match
     * com.google.net.browserchannel.BrowserChannel.LATEST_CHANNEL_VERSION.
     * @type {number}
     */
    var LATEST_CHANNEL_VERSION: number;

    /**
     * Enum type for the browser channel state machine.
     * @enum {number}
     */
    enum State { CLOSED, INIT, OPENING, OPENED } 

    /**
     * The timeout in milliseconds for a forward channel request.
     * @type {number}
     */
    var FORWARD_CHANNEL_RETRY_TIMEOUT: number;

    /**
     * Maximum number of attempts to connect to the server for back channel
     * requests.
     * @type {number}
     */
    var BACK_CHANNEL_MAX_RETRIES: number;

    /**
     * A number in MS of how long we guess the maxmium amount of time a round trip
     * to the server should take. In the future this could be substituted with a
     * real measurement of the RTT.
     * @type {number}
     */
    var RTT_ESTIMATE: number;

    /**
     * When retrying for an inactive channel, we will multiply the total delay by
     * this number.
     * @type {number}
     */
    var INACTIVE_CHANNEL_RETRY_FACTOR: number;

    /**
     * Enum type for identifying a BrowserChannel error.
     * @enum {number}
     */
    enum Error { OK, REQUEST_FAILED, LOGGED_OUT, NO_DATA, UNKNOWN_SESSION_ID, STOP, NETWORK, BLOCKED, BAD_DATA, BAD_RESPONSE, ACTIVE_X_BLOCKED } 

    /**
     * Events fired by BrowserChannel and associated objects
     * @type {Object}
     */
    var Event: Object;

    /**
     * Types of events which reveal information about the reachability of the
     * server.
     * @enum {number}
     */
    enum ServerReachability { REQUEST_MADE, REQUEST_SUCCEEDED, REQUEST_FAILED, BACK_CHANNEL_ACTIVITY } 

    /**
     * Enum that identifies events for statistics that are interesting to track.
     * TODO(user) - Change name not to use Event or use EventTarget
     * @enum {number}
     */
    enum Stat { CONNECT_ATTEMPT, ERROR_NETWORK, ERROR_OTHER, TEST_STAGE_ONE_START, CHANNEL_BLOCKED, TEST_STAGE_TWO_START, TEST_STAGE_TWO_DATA_ONE, TEST_STAGE_TWO_DATA_TWO, TEST_STAGE_TWO_DATA_BOTH, TEST_STAGE_ONE_FAILED, TEST_STAGE_TWO_FAILED, PROXY, NOPROXY, REQUEST_UNKNOWN_SESSION_ID, REQUEST_BAD_STATUS, REQUEST_INCOMPLETE_DATA, REQUEST_BAD_DATA, REQUEST_NO_DATA, REQUEST_TIMEOUT, BACKCHANNEL_MISSING, BACKCHANNEL_DEAD, BROWSER_OFFLINE, ACTIVE_X_BLOCKED } 

    /**
     * The normal response for forward channel requests.
     * Used only before version 8 of the protocol.
     * @type {string}
     */
    var MAGIC_RESPONSE_COOKIE: string;

    /**
     * A guess at a cutoff at which to no longer assume the backchannel is dead
     * when we are slow to receive data. Number in bytes.
     *
     * Assumption: The worst bandwidth we work on is 50 kilobits/sec
     * 50kbits/sec * (1 byte / 8 bits) * 6 sec dead backchannel timeout
     * @type {number}
     */
    var OUTSTANDING_DATA_BACKCHANNEL_RETRY_CUTOFF: number;

    /**
     * Allows the application to set an execution hooks for when BrowserChannel
     * starts processing requests. This is useful to track timing or logging
     * special information. The function takes no parameters and return void.
     * @param {Function} startHook  The function for the start hook.
     */
    function setStartThreadExecutionHook(startHook: Function): void;

    /**
     * Allows the application to set an execution hooks for when BrowserChannel
     * stops processing requests. This is useful to track timing or logging
     * special information. The function takes no parameters and return void.
     * @param {Function} endHook  The function for the end hook.
     */
    function setEndThreadExecutionHook(endHook: Function): void;

    /**
     * Instantiates a ChannelRequest with the given parameters. Overidden in tests.
     *
     * @param {goog.net.BrowserChannel|goog.net.BrowserTestChannel} channel
     *     The BrowserChannel that owns this request.
     * @param {goog.net.ChannelDebug} channelDebug A ChannelDebug to use for
     *     logging.
     * @param {string=} opt_sessionId  The session id for the channel.
     * @param {string|number=} opt_requestId  The request id for this request.
     * @param {number=} opt_retryId  The retry id for this request.
     * @return {goog.net.ChannelRequest} The created channel request.
     */
    function createChannelRequest(channel: any /*goog.net.BrowserChannel|goog.net.BrowserTestChannel*/, channelDebug: goog.net.ChannelDebug, opt_sessionId?: string, opt_requestId?: any /*string|number*/, opt_retryId?: number): goog.net.ChannelRequest;

    /**
     * Wrapper around SafeTimeout which calls the start and end execution hooks
     * with a try...finally block.
     * @param {Function} fn The callback function.
     * @param {number} ms The time in MS for the timer.
     * @return {number} The ID of the timer.
     */
    function setTimeout(fn: Function, ms: number): number;

    /**
     * Helper function to call the start hook
     */
    function onStartExecution(): void;

    /**
     * Helper function to call the end hook
     */
    function onEndExecution(): void;

    /**
     * Returns the singleton event target for stat events.
     * @return {goog.events.EventTarget} The event target for stat events.
     */
    function getStatEventTarget(): goog.events.EventTarget;

    /**
     * Helper function to call the stat event callback.
     * @param {goog.net.BrowserChannel.Stat} stat The stat.
     */
    function notifyStatEvent(stat: goog.net.BrowserChannel.Stat): void;

    /**
     * Helper function to notify listeners about POST request performance.
     *
     * @param {number} size Number of characters in the POST data.
     * @param {number} rtt The amount of time from POST start to response.
     * @param {number} retries The number of times the POST had to be retried.
     */
    function notifyTimingEvent(size: number, rtt: number, retries: number): void;

    /**
     * A LogSaver that can be used to accumulate all the debug logs for
     * BrowserChannels so they can be sent to the server when a problem is
     * detected.
     */
    var LogSaver: any /*missing*/;

    /**
     * Simple container class for a (mapId, map) pair.
     * @param {number} mapId The id for this map.
     * @param {Object|goog.structs.Map} map The map itself.
     * @param {Object=} opt_context The context associated with the map.
     * @constructor
     * @final
     */
    class QueuedMap {
        /**
         * Simple container class for a (mapId, map) pair.
         * @param {number} mapId The id for this map.
         * @param {Object|goog.structs.Map} map The map itself.
         * @param {Object=} opt_context The context associated with the map.
         * @constructor
         * @final
         */
        constructor(mapId: number, map: any /*Object|goog.structs.Map*/, opt_context?: Object);
    }

    /**
     * Event class for goog.net.BrowserChannel.Event.STAT_EVENT
     *
     * @param {goog.events.EventTarget} eventTarget The stat event target for
           the browser channel.
     * @param {goog.net.BrowserChannel.Stat} stat The stat.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class StatEvent extends goog.events.Event {
        /**
         * Event class for goog.net.BrowserChannel.Event.STAT_EVENT
         *
         * @param {goog.events.EventTarget} eventTarget The stat event target for
         the browser channel.
         * @param {goog.net.BrowserChannel.Stat} stat The stat.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(eventTarget: goog.events.EventTarget, stat: goog.net.BrowserChannel.Stat);
    }

    /**
     * Event class for goog.net.BrowserChannel.Event.TIMING_EVENT
     *
     * @param {goog.events.EventTarget} target The stat event target for
           the browser channel.
     * @param {number} size The number of characters in the POST data.
     * @param {number} rtt The total round trip time from POST to response in MS.
     * @param {number} retries The number of times the POST had to be retried.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class TimingEvent extends goog.events.Event {
        /**
         * Event class for goog.net.BrowserChannel.Event.TIMING_EVENT
         *
         * @param {goog.events.EventTarget} target The stat event target for
         the browser channel.
         * @param {number} size The number of characters in the POST data.
         * @param {number} rtt The total round trip time from POST to response in MS.
         * @param {number} retries The number of times the POST had to be retried.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(target: goog.events.EventTarget, size: number, rtt: number, retries: number);
    }

    /**
     * Event class for goog.net.BrowserChannel.Event.SERVER_REACHABILITY_EVENT.
     *
     * @param {goog.events.EventTarget} target The stat event target for
           the browser channel.
     * @param {goog.net.BrowserChannel.ServerReachability} reachabilityType The
     *     reachability event type.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class ServerReachabilityEvent extends goog.events.Event {
        /**
         * Event class for goog.net.BrowserChannel.Event.SERVER_REACHABILITY_EVENT.
         *
         * @param {goog.events.EventTarget} target The stat event target for
         the browser channel.
         * @param {goog.net.BrowserChannel.ServerReachability} reachabilityType The
         *     reachability event type.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(target: goog.events.EventTarget, reachabilityType: goog.net.BrowserChannel.ServerReachability);
    }

    /**
     * Abstract base class for the browser channel handler
     * @constructor
     */
    class Handler {
        /**
         * Abstract base class for the browser channel handler
         * @constructor
         */
        constructor();
    
        /**
         * Callback handler for when a batch of response arrays is received from the
         * server.
         * @type {?function(!goog.net.BrowserChannel, !Array.<!Array>)}
         */
        channelHandleMultipleArrays: (_0: goog.net.BrowserChannel, _1: any[][]) => any /*missing*/;
    
        /**
         * Whether it's okay to make a request to the server. A handler can return
         * false if the channel should fail. For example, if the user has logged out,
         * the handler may want all requests to fail immediately.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @return {goog.net.BrowserChannel.Error} An error code. The code should
         * return goog.net.BrowserChannel.Error.OK to indicate it's okay. Any other
         * error code will cause a failure.
         */
        okToMakeRequest(browserChannel: goog.net.BrowserChannel): goog.net.BrowserChannel.Error;
    
        /**
         * Indicates the BrowserChannel has successfully negotiated with the server
         * and can now send and receive data.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         */
        channelOpened(browserChannel: goog.net.BrowserChannel): void;
    
        /**
         * New input is available for the application to process.
         *
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @param {Array} array The data array.
         */
        channelHandleArray(browserChannel: goog.net.BrowserChannel, array: any[]): void;
    
        /**
         * Indicates maps were successfully sent on the BrowserChannel.
         *
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @param {Array.<goog.net.BrowserChannel.QueuedMap>} deliveredMaps The
         *     array of maps that have been delivered to the server. This is a direct
         *     reference to the internal BrowserChannel array, so a copy should be made
         *     if the caller desires a reference to the data.
         */
        channelSuccess(browserChannel: goog.net.BrowserChannel, deliveredMaps: goog.net.BrowserChannel.QueuedMap[]): void;
    
        /**
         * Indicates an error occurred on the BrowserChannel.
         *
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @param {goog.net.BrowserChannel.Error} error The error code.
         */
        channelError(browserChannel: goog.net.BrowserChannel, error: goog.net.BrowserChannel.Error): void;
    
        /**
         * Indicates the BrowserChannel is closed. Also notifies about which maps,
         * if any, that may not have been delivered to the server.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @param {Array.<goog.net.BrowserChannel.QueuedMap>=} opt_pendingMaps The
         *     array of pending maps, which may or may not have been delivered to the
         *     server.
         * @param {Array.<goog.net.BrowserChannel.QueuedMap>=} opt_undeliveredMaps
         *     The array of undelivered maps, which have definitely not been delivered
         *     to the server.
         */
        channelClosed(browserChannel: goog.net.BrowserChannel, opt_pendingMaps?: goog.net.BrowserChannel.QueuedMap[], opt_undeliveredMaps?: goog.net.BrowserChannel.QueuedMap[]): void;
    
        /**
         * Gets any parameters that should be added at the time another connection is
         * made to the server.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @return {Object} Extra parameter keys and values to add to the
         *                  requests.
         */
        getAdditionalParams(browserChannel: goog.net.BrowserChannel): Object;
    
        /**
         * Gets the URI of an image that can be used to test network connectivity.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @return {goog.Uri?} A custom URI to load for the network test.
         */
        getNetworkTestImageUri(browserChannel: goog.net.BrowserChannel): goog.Uri;
    
        /**
         * Gets whether this channel is currently active. This is used to determine the
         * length of time to wait before retrying.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @return {boolean} Whether the channel is currently active.
         */
        isActive(browserChannel: goog.net.BrowserChannel): boolean;
    
        /**
         * Called by the channel if enumeration of the map throws an exception.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @param {Object} map The map that can't be enumerated.
         */
        badMapError(browserChannel: goog.net.BrowserChannel, map: Object): void;
    
        /**
         * Allows the handler to override a host prefix provided by the server.  Will
         * be called whenever the channel has received such a prefix and is considering
         * its use.
         * @param {?string} serverHostPrefix The host prefix provided by the server.
         * @return {?string} The host prefix the client should use.
         */
        correctHostPrefix(serverHostPrefix: string): string;
    }
}

declare module 'goog.net.BrowserChannel.Event' {

    /**
     * Stat Event that fires when things of interest happen that may be useful for
     * applications to know about for stats or debugging purposes. This event fires
     * on the EventTarget returned by getStatEventTarget.
     */
    var STAT_EVENT: any /*missing*/;

    /**
     * An event that fires when POST requests complete successfully, indicating
     * the size of the POST and the round trip time.
     * This event fires on the EventTarget returned by getStatEventTarget.
     */
    var TIMING_EVENT: any /*missing*/;

    /**
     * The type of event that occurs every time some information about how reachable
     * the server is is discovered.
     */
    var SERVER_REACHABILITY_EVENT: any /*missing*/;
}

declare module 'goog.net.BrowserChannel.LogSaver' {

    /**
     * Returns whether the LogSaver is enabled.
     * @return {boolean} Whether saving is enabled or disabled.
     */
    function isEnabled(): boolean;

    /**
     * Enables of disables the LogSaver.
     * @param {boolean} enable Whether to enable or disable saving.
     */
    function setEnabled(enable: boolean): void;

    /**
     * Adds a log record.
     * @param {goog.log.LogRecord} logRecord the LogRecord.
     */
    function addLogRecord(logRecord: goog.log.LogRecord): void;

    /**
     * Returns the log as a single string.
     * @return {string} The log as a single string.
     */
    function getBuffer(): string;

    /**
     * Clears the buffer
     */
    function clearBuffer(): void;
}

declare module 'goog.net.ChannelRequest' {

    /**
     * Default timeout in MS for a request. The server must return data within this
     * time limit for the request to not timeout.
     * @type {number}
     */
    var TIMEOUT_MS: number;

    /**
     * How often to poll (in MS) for changes to responseText in browsers that don't
     * fire onreadystatechange during incremental loading of responseText.
     * @type {number}
     */
    var POLLING_INTERVAL_MS: number;

    /**
     * Enum type for identifying a ChannelRequest error.
     * @enum {number}
     */
    enum Error { STATUS, NO_DATA, TIMEOUT, UNKNOWN_SESSION_ID, BAD_DATA, HANDLER_EXCEPTION, BROWSER_OFFLINE, ACTIVE_X_BLOCKED } 

    /**
     * Returns a useful error string for debugging based on the specified error
     * code.
     * @param {goog.net.ChannelRequest.Error} errorCode The error code.
     * @param {number} statusCode The HTTP status code.
     * @return {string} The error string for the given code combination.
     */
    function errorStringFromCode(errorCode: goog.net.ChannelRequest.Error, statusCode: number): string;

    /**
     * Returns whether XHR streaming is supported on this browser.
     *
     * If XHR streaming is not supported, we will try to use an ActiveXObject
     * to create a Forever IFrame.
     *
     * @return {boolean} Whether XHR streaming is supported.
     * @see http://code.google.com/p/closure-library/issues/detail?id=346
     */
    function supportsXhrStreaming(): boolean;
}

declare module 'goog.net.Cookies' {

    /**
     * Static constant for the size of cookies. Per the spec, there's a 4K limit
     * to the size of a cookie. To make sure users can't break this limit, we
     * should truncate long cookies at 3950 bytes, to be extra careful with dumb
     * browsers/proxies that interpret 4K as 4000 rather than 4096.
     * @type {number}
     */
    var MAX_COOKIE_LENGTH: number;
}

declare module 'goog.net' {

    /**
     * A static default instance.
     * @type {goog.net.Cookies}
     */
    var cookies: goog.net.Cookies;

    /**
     * Error codes
     * @enum {number}
     */
    enum ErrorCode { NO_ERROR, ACCESS_DENIED, FILE_NOT_FOUND, FF_SILENT_ERROR, CUSTOM_ERROR, EXCEPTION, HTTP_ERROR, ABORT, TIMEOUT, OFFLINE } 

    /**
     * Event names for network events
     * @enum {string}
     */
    enum EventType { COMPLETE, SUCCESS, ERROR, ABORT, READY, READY_STATE_CHANGE, TIMEOUT, INCREMENTAL_DATA, PROGRESS } 

    /**
     * HTTP Status Codes defined in RFC 2616.
     * @see http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
     * @enum {number}
     */
    enum HttpStatus { CONTINUE, SWITCHING_PROTOCOLS, OK, CREATED, ACCEPTED, NON_AUTHORITATIVE_INFORMATION, NO_CONTENT, RESET_CONTENT, PARTIAL_CONTENT, MULTIPLE_CHOICES, MOVED_PERMANENTLY, FOUND, SEE_OTHER, NOT_MODIFIED, USE_PROXY, TEMPORARY_REDIRECT, BAD_REQUEST, UNAUTHORIZED, PAYMENT_REQUIRED, FORBIDDEN, NOT_FOUND, METHOD_NOT_ALLOWED, NOT_ACCEPTABLE, PROXY_AUTHENTICATION_REQUIRED, REQUEST_TIMEOUT, CONFLICT, GONE, LENGTH_REQUIRED, PRECONDITION_FAILED, REQUEST_ENTITY_TOO_LARGE, REQUEST_URI_TOO_LONG, UNSUPPORTED_MEDIA_TYPE, REQUEST_RANGE_NOT_SATISFIABLE, EXPECTATION_FAILED, INTERNAL_SERVER_ERROR, NOT_IMPLEMENTED, BAD_GATEWAY, SERVICE_UNAVAILABLE, GATEWAY_TIMEOUT, HTTP_VERSION_NOT_SUPPORTED, QUIRK_IE_NO_CONTENT } 

    /**
     * Static class for creating XMLHttpRequest objects.
     * @return {!goog.net.XhrLike.OrNative} A new XMLHttpRequest object.
     */
    function XmlHttp(): goog.net.XhrLike.OrNative;

    /** @const */
    var XmlHttpDefines: any /*missing*/;

    /**
     * Base class for network status information providers.
     * @interface
     * @extends {goog.events.Listenable}
     */
    interface NetworkStatusMonitor {
        isOnline: any /*missing*/;
    }

    /**
     * Interface for the common parts of XMLHttpRequest.
     *
     * Mostly copied from externs/w3c_xml.js.
     *
     * @interface
     * @see http://www.w3.org/TR/XMLHttpRequest/
     */
    interface XhrLike {
        onreadystatechange: any /*() => any (missing)|any (null)|any (undefined)*/;
        responseText: string;
        responseXML: Document;
        readyState: number;
        status: number;
        statusText: string;
        open(method: string, url: string, opt_async?: boolean, opt_user?: string, opt_password?: string): void;
        send(opt_data?: any /*ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string*/): void;
        abort(): void;
        setRequestHeader(header: string, value: string): void;
        getResponseHeader(header: string): string;
        getAllResponseHeaders(): string;
    }

    /**
     * Encapsulates the logic for a single BrowserChannel.
     *
     * @param {string=} opt_clientVersion An application-specific version number
     *        that is sent to the server when connected.
     * @param {Array.<string>=} opt_firstTestResults Previously determined results
     *        of the first browser channel test.
     * @param {boolean=} opt_secondTestResults Previously determined results
     *        of the second browser channel test.
     * @constructor
     */
    class BrowserChannel {
        /**
         * Encapsulates the logic for a single BrowserChannel.
         *
         * @param {string=} opt_clientVersion An application-specific version number
         *        that is sent to the server when connected.
         * @param {Array.<string>=} opt_firstTestResults Previously determined results
         *        of the first browser channel test.
         * @param {boolean=} opt_secondTestResults Previously determined results
         *        of the second browser channel test.
         * @constructor
         */
        constructor(opt_clientVersion?: string, opt_firstTestResults?: string[], opt_secondTestResults?: boolean);
    
        /**
         * Returns the browserchannel logger.
         *
         * @return {goog.net.ChannelDebug} The channel debug object.
         */
        getChannelDebug(): goog.net.ChannelDebug;
    
        /**
         * Set the browserchannel logger.
         * TODO(user): Add interface for channel loggers or remove this function.
         *
         * @param {goog.net.ChannelDebug} channelDebug The channel debug object.
         */
        setChannelDebug(channelDebug: goog.net.ChannelDebug): void;
    
        /**
         * Starts the channel. This initiates connections to the server.
         *
         * @param {string} testPath  The path for the test connection.
         * @param {string} channelPath  The path for the channel connection.
         * @param {Object=} opt_extraParams  Extra parameter keys and values to add to
         *     the requests.
         * @param {string=} opt_oldSessionId  Session ID from a previous session.
         * @param {number=} opt_oldArrayId  The last array ID from a previous session.
         */
        connect(testPath: string, channelPath: string, opt_extraParams?: Object, opt_oldSessionId?: string, opt_oldArrayId?: number): void;
    
        /**
         * Disconnects and closes the channel.
         */
        disconnect(): void;
    
        /**
         * Returns the session id of the channel. Only available after the
         * channel has been opened.
         * @return {string} Session ID.
         */
        getSessionId(): string;
    
        /**
         * Returns the extra HTTP headers to add to all the requests sent to the server.
         *
         * @return {Object} The HTTP headers, or null.
         */
        getExtraHeaders(): Object;
    
        /**
         * Sets extra HTTP headers to add to all the requests sent to the server.
         *
         * @param {Object} extraHeaders The HTTP headers, or null.
         */
        setExtraHeaders(extraHeaders: Object): void;
    
        /**
         * Sets the throttle for handling onreadystatechange events for the request.
         *
         * @param {number} throttle The throttle in ms.  A value of zero indicates
         *     no throttle.
         */
        setReadyStateChangeThrottle(throttle: number): void;
    
        /**
         * Sets whether cross origin requests are supported for the browser channel.
         *
         * Setting this allows the creation of requests to secondary domains and
         * sends XHRs with the CORS withCredentials bit set to true.
         *
         * In order for cross-origin requests to work, the server will also need to set
         * CORS response headers as per:
         * https://developer.mozilla.org/en-US/docs/HTTP_access_control
         *
         * See {@link goog.net.XhrIo#setWithCredentials}.
         * @param {boolean} supportCrossDomain Whether cross domain XHRs are supported.
         */
        setSupportsCrossDomainXhrs(supportCrossDomain: boolean): void;
    
        /**
         * Returns the handler used for channel callback events.
         *
         * @return {goog.net.BrowserChannel.Handler} The handler.
         */
        getHandler(): goog.net.BrowserChannel.Handler;
    
        /**
         * Sets the handler used for channel callback events.
         * @param {goog.net.BrowserChannel.Handler} handler The handler to set.
         */
        setHandler(handler: goog.net.BrowserChannel.Handler): void;
    
        /**
         * Returns whether the channel allows the use of a subdomain. There may be
         * cases where this isn't allowed.
         * @return {boolean} Whether a host prefix is allowed.
         */
        getAllowHostPrefix(): boolean;
    
        /**
         * Sets whether the channel allows the use of a subdomain. There may be cases
         * where this isn't allowed, for example, logging in with troutboard where
         * using a subdomain causes Apache to force the user to authenticate twice.
         * @param {boolean} allowHostPrefix Whether a host prefix is allowed.
         */
        setAllowHostPrefix(allowHostPrefix: boolean): void;
    
        /**
         * Returns whether the channel is buffered or not. This state is valid for
         * querying only after the test connection has completed. This may be
         * queried in the goog.net.BrowserChannel.okToMakeRequest() callback.
         * A channel may be buffered if the test connection determines that
         * a chunked response could not be sent down within a suitable time.
         * @return {boolean} Whether the channel is buffered.
         */
        isBuffered(): boolean;
    
        /**
         * Returns whether chunked mode is allowed. In certain debugging situations,
         * it's useful for the application to have a way to disable chunked mode for a
         * user.
         * @return {boolean} Whether chunked mode is allowed.
         */
        getAllowChunkedMode(): boolean;
    
        /**
         * Sets whether chunked mode is allowed. In certain debugging situations, it's
         * useful for the application to have a way to disable chunked mode for a user.
         * @param {boolean} allowChunkedMode  Whether chunked mode is allowed.
         */
        setAllowChunkedMode(allowChunkedMode: boolean): void;
    
        /**
         * Sends a request to the server. The format of the request is a Map data
         * structure of key/value pairs. These maps are then encoded in a format
         * suitable for the wire and then reconstituted as a Map data structure that
         * the server can process.
         * @param {Object|goog.structs.Map} map  The map to send.
         * @param {?Object=} opt_context The context associated with the map.
         */
        sendMap(map: any /*Object|goog.structs.Map*/, opt_context?: Object): void;
    
        /**
         * When set to true, this changes the behavior of the forward channel so it
         * will not retry requests; it will fail after one network failure, and if
         * there was already one network failure, the request will fail immediately.
         * @param {boolean} failFast  Whether or not to fail fast.
         */
        setFailFast(failFast: boolean): void;
    
        /**
         * @return {number} The max number of forward-channel retries, which will be 0
         * in fail-fast mode.
         */
        getForwardChannelMaxRetries(): number;
    
        /**
         * Sets the maximum number of attempts to connect to the server for forward
         * channel requests.
         * @param {number} retries The maximum number of attempts.
         */
        setForwardChannelMaxRetries(retries: number): void;
    
        /**
         * Sets the timeout for a forward channel request.
         * @param {number} timeoutMs The timeout in milliseconds.
         */
        setForwardChannelRequestTimeout(timeoutMs: number): void;
    
        /**
         * @return {number} The max number of back-channel retries, which is a constant.
         */
        getBackChannelMaxRetries(): number;
    
        /**
         * Returns whether the channel is closed
         * @return {boolean} true if the channel is closed.
         */
        isClosed(): boolean;
    
        /**
         * Returns the browser channel state.
         * @return {goog.net.BrowserChannel.State} The current state of the browser
         * channel.
         */
        getState(): goog.net.BrowserChannel.State;
    
        /**
         * Return the last status code received for a request.
         * @return {number} The last status code received for a request.
         */
        getLastStatusCode(): number;
    
        /**
         * @return {number} The last array id received.
         */
        getLastArrayId(): number;
    
        /**
         * Returns whether there are outstanding requests servicing the channel.
         * @return {boolean} true if there are outstanding requests.
         */
        hasOutstandingRequests(): boolean;
    
        /**
         * Sets a new parser for the response payload. A custom parser may be set to
         * avoid using eval(), for example. By default, the parser uses
         * {@code goog.json.unsafeParse}.
         * @param {!goog.string.Parser} parser Parser.
         */
        setParser(parser: goog.string.Parser): void;
    
        /**
         * Callback from BrowserTestChannel for when the channel is finished.
         * @param {goog.net.BrowserTestChannel} testChannel The BrowserTestChannel.
         * @param {boolean} useChunked  Whether we can chunk responses.
         */
        testConnectionFinished(testChannel: goog.net.BrowserTestChannel, useChunked: boolean): void;
    
        /**
         * Callback from BrowserTestChannel for when the channel has an error.
         * @param {goog.net.BrowserTestChannel} testChannel The BrowserTestChannel.
         * @param {goog.net.ChannelRequest.Error} errorCode  The error code of the
         failure.
         */
        testConnectionFailure(testChannel: goog.net.BrowserTestChannel, errorCode: goog.net.ChannelRequest.Error): void;
    
        /**
         * Callback from BrowserTestChannel for when the channel is blocked.
         * @param {goog.net.BrowserTestChannel} testChannel The BrowserTestChannel.
         */
        testConnectionBlocked(testChannel: goog.net.BrowserTestChannel): void;
    
        /**
         * Callback from ChannelRequest for when new data is received
         * @param {goog.net.ChannelRequest} request  The request object.
         * @param {string} responseText The text of the response.
         */
        onRequestData(request: goog.net.ChannelRequest, responseText: string): void;
    
        /**
         * Decides which host prefix should be used, if any.  If there is a handler,
         * allows the handler to validate a host prefix provided by the server, and
         * optionally override it.
         * @param {?string} serverHostPrefix The host prefix provided by the server.
         * @return {?string} The host prefix to actually use, if any. Will return null
         *     if the use of host prefixes was disabled via setAllowHostPrefix().
         */
        correctHostPrefix(serverHostPrefix: string): string;
    
        /**
         * Callback from ChannelRequest that indicates a request has completed.
         * @param {goog.net.ChannelRequest} request  The request object.
         */
        onRequestComplete(request: goog.net.ChannelRequest): void;
    
        /**
         * @param {number} baseDelayMs The base part of the retry delay, in ms.
         * @param {number} delaySeedMs A random delay between 0 and this is added to
         *     the base part.
         */
        setRetryDelay(baseDelayMs: number, delaySeedMs: number): void;
    
        /**
         * Gets the Uri used for the connection that sends data to the server.
         * @param {string} path The path on the host.
         * @return {goog.Uri} The forward channel URI.
         */
        getForwardChannelUri(path: string): goog.Uri;
    
        /**
         * Gets the results for the first browser channel test
         * @return {Array.<string>} The results.
         */
        getFirstTestResults(): string[];
    
        /**
         * Gets the results for the second browser channel test
         * @return {?boolean} The results. True -> buffered connection,
         *      False -> unbuffered, null -> unknown.
         */
        getSecondTestResults(): boolean;
    
        /**
         * Gets the Uri used for the connection that receives data from the server.
         * @param {?string} hostPrefix The host prefix.
         * @param {string} path The path on the host.
         * @return {goog.Uri} The back channel URI.
         */
        getBackChannelUri(hostPrefix: string, path: string): goog.Uri;
    
        /**
         * Creates a data Uri applying logic for secondary hostprefix, port
         * overrides, and versioning.
         * @param {?string} hostPrefix The host prefix.
         * @param {string} path The path on the host (may be absolute or relative).
         * @param {number=} opt_overridePort Optional override port.
         * @return {goog.Uri} The data URI.
         */
        createDataUri(hostPrefix: string, path: string, opt_overridePort?: number): goog.Uri;
    
        /**
         * Called when BC needs to create an XhrIo object.  Override in a subclass if
         * you need to customize the behavior, for example to enable the creation of
         * XHR's capable of calling a secondary domain. Will also allow calling
         * a secondary domain if withCredentials (CORS) is enabled.
         * @param {?string} hostPrefix The host prefix, if we need an XhrIo object
         *     capable of calling a secondary domain.
         * @return {!goog.net.XhrIo} A new XhrIo object.
         */
        createXhrIo(hostPrefix: string): goog.net.XhrIo;
    
        /**
         * Gets whether this channel is currently active. This is used to determine the
         * length of time to wait before retrying. This call delegates to the handler.
         * @return {boolean} Whether the channel is currently active.
         */
        isActive(): boolean;
    
        /**
         * Notify the channel that a particular fine grained network event has occurred.
         * Should be considered package-private.
         * @param {goog.net.BrowserChannel.ServerReachability} reachabilityType The
         *     reachability event type.
         */
        notifyServerReachabilityEvent(reachabilityType: goog.net.BrowserChannel.ServerReachability): void;
    
        /**
         * Determines whether to use a secondary domain when the server gives us
         * a host prefix. This allows us to work around browser per-domain
         * connection limits.
         *
         * Currently, we  use secondary domains when using Trident's ActiveXObject,
         * because it supports cross-domain requests out of the box.  Note that in IE10
         * we no longer use ActiveX since it's not supported in Metro mode and IE10
         * supports XHR streaming.
         *
         * If you need to use secondary domains on other browsers and IE10,
         * you have two choices:
         *     1) If you only care about browsers that support CORS
         *        (https://developer.mozilla.org/en-US/docs/HTTP_access_control), you
         *        can use {@link #setSupportsCrossDomainXhrs} and set the appropriate
         *        CORS response headers on the server.
         *     2) Or, override this method in a subclass, and make sure that those
         *        browsers use some messaging mechanism that works cross-domain (e.g
         *        iframes and window.postMessage).
         *
         * @return {boolean} Whether to use secondary domains.
         * @see http://code.google.com/p/closure-library/issues/detail?id=339
         */
        shouldUseSecondaryDomains(): boolean;
    }

    /**
     * Encapsulates the logic for a single BrowserTestChannel.
     *
     * @constructor
     * @param {goog.net.BrowserChannel} channel  The BrowserChannel that owns this
     *     test channel.
     * @param {goog.net.ChannelDebug} channelDebug A ChannelDebug to use for
     *     logging.
     * @final
     */
    class BrowserTestChannel {
        /**
         * Encapsulates the logic for a single BrowserTestChannel.
         *
         * @constructor
         * @param {goog.net.BrowserChannel} channel  The BrowserChannel that owns this
         *     test channel.
         * @param {goog.net.ChannelDebug} channelDebug A ChannelDebug to use for
         *     logging.
         * @final
         */
        constructor(channel: goog.net.BrowserChannel, channelDebug: goog.net.ChannelDebug);
    
        /**
         * Sets extra HTTP headers to add to all the requests sent to the server.
         *
         * @param {Object} extraHeaders The HTTP headers.
         */
        setExtraHeaders(extraHeaders: Object): void;
    
        /**
         * Sets a new parser for the response payload. A custom parser may be set to
         * avoid using eval(), for example.
         * By default, the parser uses {@code goog.json.unsafeParse}.
         * @param {!goog.string.Parser} parser Parser.
         */
        setParser(parser: goog.string.Parser): void;
    
        /**
         * Starts the test channel. This initiates connections to the server.
         *
         * @param {string} path The relative uri for the test connection.
         */
        connect(path: string): void;
    
        /**
         * Factory method for XhrIo objects.
         * @param {?string} hostPrefix The host prefix, if we need an XhrIo object
         *     capable of calling a secondary domain.
         * @return {!goog.net.XhrIo} New XhrIo object.
         */
        createXhrIo(hostPrefix: string): goog.net.XhrIo;
    
        /**
         * Aborts the test channel.
         */
        abort(): void;
    
        /**
         * Returns whether the test channel is closed. The ChannelRequest object expects
         * this method to be implemented on its handler.
         *
         * @return {boolean} Whether the channel is closed.
         */
        isClosed(): boolean;
    
        /**
         * Callback from ChannelRequest for when new data is received
         *
         * @param {goog.net.ChannelRequest} req  The request object.
         * @param {string} responseText The text of the response.
         */
        onRequestData(req: goog.net.ChannelRequest, responseText: string): void;
    
        /**
         * Callback from ChannelRequest that indicates a request has completed.
         *
         * @param {goog.net.ChannelRequest} req  The request object.
         */
        onRequestComplete(req: goog.net.ChannelRequest): void;
    
        /**
         * Returns the last status code received for a request.
         * @return {number} The last status code received for a request.
         */
        getLastStatusCode(): number;
    
        /**
         * @return {boolean} Whether we should be using secondary domains when the
         *     server instructs us to do so.
         */
        shouldUseSecondaryDomains(): boolean;
    
        /**
         * Gets whether this channel is currently active. This is used to determine the
         * length of time to wait before retrying.
         *
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @return {boolean} Whether the channel is currently active.
         */
        isActive(browserChannel: goog.net.BrowserChannel): boolean;
    
        /**
         * Notifies the channel of a fine grained network event.
         * @param {goog.net.BrowserChannel.ServerReachability} reachabilityType The
         *     reachability event type.
         */
        notifyServerReachabilityEvent(reachabilityType: goog.net.BrowserChannel.ServerReachability): void;
    }

    /**
     * Helper class used to load multiple URIs.
     * @param {Array.<string|goog.Uri>} uris The URIs to load.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class BulkLoaderHelper extends goog.Disposable {
        /**
         * Helper class used to load multiple URIs.
         * @param {Array.<string|goog.Uri>} uris The URIs to load.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(uris: any /*string|goog.Uri*/[]);
    
        /**
         * Gets the URI by id.
         * @param {number} id The id.
         * @return {string|goog.Uri} The URI specified by the id.
         */
        getUri(id: number): any /*string|goog.Uri*/;
    
        /**
         * Gets the URIs.
         * @return {Array.<string|goog.Uri>} The URIs.
         */
        getUris(): any /*string|goog.Uri*/[];
    
        /**
         * Gets the response texts.
         * @return {Array.<string>} The response texts.
         */
        getResponseTexts(): string[];
    
        /**
         * Sets the response text by id.
         * @param {number} id The id.
         * @param {string} responseText The response texts.
         */
        setResponseText(id: number, responseText: string): void;
    
        /**
         * Determines if the load of the URIs is complete.
         * @return {boolean} TRUE iff the load is complete.
         */
        isLoadComplete(): boolean;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Class used to load multiple URIs.
     * @param {Array.<string|goog.Uri>} uris The URIs to load.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class BulkLoader extends goog.events.EventTarget {
        /**
         * Class used to load multiple URIs.
         * @param {Array.<string|goog.Uri>} uris The URIs to load.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(uris: any /*string|goog.Uri*/[]);
    
        /**
         * Gets the response texts, in order.
         * @return {Array.<string>} The response texts.
         */
        getResponseTexts(): string[];
    
        /**
         * Gets the request Uris.
         * @return {Array.<string>} The request URIs, in order.
         */
        getRequestUris(): string[];
    
        /**
         * Starts the process of loading the URIs.
         */
        load(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Logs and keeps a buffer of debugging info for the Channel.
     *
     * @constructor
     */
    class ChannelDebug {
        /**
         * Logs and keeps a buffer of debugging info for the Channel.
         *
         * @constructor
         */
        constructor();
    
        /**
         * Gets the logger used by this ChannelDebug.
         * @return {goog.debug.Logger} The logger used by this ChannelDebug.
         */
        getLogger(): goog.debug.Logger;
    
        /**
         * Logs that the browser went offline during the lifetime of a request.
         * @param {goog.Uri} url The URL being requested.
         */
        browserOfflineResponse(url: goog.Uri): void;
    
        /**
         * Logs an XmlHttp request..
         * @param {string} verb The request type (GET/POST).
         * @param {goog.Uri} uri The request destination.
         * @param {string|number|undefined} id The request id.
         * @param {number} attempt Which attempt # the request was.
         * @param {?string} postData The data posted in the request.
         */
        xmlHttpChannelRequest(verb: string, uri: goog.Uri, id: any /*string|number|any (undefined)*/, attempt: number, postData: string): void;
    
        /**
         * Logs the meta data received from an XmlHttp request.
         * @param {string} verb The request type (GET/POST).
         * @param {goog.Uri} uri The request destination.
         * @param {string|number|undefined} id The request id.
         * @param {number} attempt Which attempt # the request was.
         * @param {goog.net.XmlHttp.ReadyState} readyState The ready state.
         * @param {number} statusCode The HTTP status code.
         */
        xmlHttpChannelResponseMetaData(verb: string, uri: goog.Uri, id: any /*string|number|any (undefined)*/, attempt: number, readyState: goog.net.XmlHttp.ReadyState, statusCode: number): void;
    
        /**
         * Logs the response data received from an XmlHttp request.
         * @param {string|number|undefined} id The request id.
         * @param {?string} responseText The response text.
         * @param {?string=} opt_desc Optional request description.
         */
        xmlHttpChannelResponseText(id: any /*string|number|any (undefined)*/, responseText: string, opt_desc?: string): void;
    
        /**
         * Logs a Trident ActiveX request.
         * @param {string} verb The request type (GET/POST).
         * @param {goog.Uri} uri The request destination.
         * @param {string|number|undefined} id The request id.
         * @param {number} attempt Which attempt # the request was.
         */
        tridentChannelRequest(verb: string, uri: goog.Uri, id: any /*string|number|any (undefined)*/, attempt: number): void;
    
        /**
         * Logs the response text received from a Trident ActiveX request.
         * @param {string|number|undefined} id The request id.
         * @param {string} responseText The response text.
         */
        tridentChannelResponseText(id: any /*string|number|any (undefined)*/, responseText: string): void;
    
        /**
         * Logs the done response received from a Trident ActiveX request.
         * @param {string|number|undefined} id The request id.
         * @param {boolean} successful Whether the request was successful.
         */
        tridentChannelResponseDone(id: any /*string|number|any (undefined)*/, successful: boolean): void;
    
        /**
         * Logs a request timeout.
         * @param {goog.Uri} uri The uri that timed out.
         */
        timeoutResponse(uri: goog.Uri): void;
    
        /**
         * Logs a debug message.
         * @param {string} text The message.
         */
        debug(text: string): void;
    
        /**
         * Logs an exception
         * @param {Error} e The error or error event.
         * @param {string=} opt_msg The optional message, defaults to 'Exception'.
         */
        dumpException(e: Error, opt_msg?: string): void;
    
        /**
         * Logs an info message.
         * @param {string} text The message.
         */
        info(text: string): void;
    
        /**
         * Logs a warning message.
         * @param {string} text The message.
         */
        warning(text: string): void;
    
        /**
         * Logs a severe message.
         * @param {string} text The message.
         */
        severe(text: string): void;
    }

    /**
     * Creates a ChannelRequest object which encapsulates a request to the server.
     * A new ChannelRequest is created for each request to the server.
     *
     * @param {goog.net.BrowserChannel|goog.net.BrowserTestChannel} channel
     *     The BrowserChannel that owns this request.
     * @param {goog.net.ChannelDebug} channelDebug A ChannelDebug to use for
     *     logging.
     * @param {string=} opt_sessionId  The session id for the channel.
     * @param {string|number=} opt_requestId  The request id for this request.
     * @param {number=} opt_retryId  The retry id for this request.
     * @constructor
     */
    class ChannelRequest {
        /**
         * Creates a ChannelRequest object which encapsulates a request to the server.
         * A new ChannelRequest is created for each request to the server.
         *
         * @param {goog.net.BrowserChannel|goog.net.BrowserTestChannel} channel
         *     The BrowserChannel that owns this request.
         * @param {goog.net.ChannelDebug} channelDebug A ChannelDebug to use for
         *     logging.
         * @param {string=} opt_sessionId  The session id for the channel.
         * @param {string|number=} opt_requestId  The request id for this request.
         * @param {number=} opt_retryId  The retry id for this request.
         * @constructor
         */
        constructor(channel: any /*goog.net.BrowserChannel|goog.net.BrowserTestChannel*/, channelDebug: goog.net.ChannelDebug, opt_sessionId?: string, opt_requestId?: any /*string|number*/, opt_retryId?: number);
    
        /**
         * Sets extra HTTP headers to add to all the requests sent to the server.
         *
         * @param {Object} extraHeaders The HTTP headers.
         */
        setExtraHeaders(extraHeaders: Object): void;
    
        /**
         * Sets the timeout for a request
         *
         * @param {number} timeout   The timeout in MS for when we fail the request.
         */
        setTimeout(timeout: number): void;
    
        /**
         * Sets the throttle for handling onreadystatechange events for the request.
         *
         * @param {number} throttle The throttle in ms.  A value of zero indicates
         *     no throttle.
         */
        setReadyStateChangeThrottle(throttle: number): void;
    
        /**
         * Uses XMLHTTP to send an HTTP POST to the server.
         *
         * @param {goog.Uri} uri  The uri of the request.
         * @param {string} postData  The data for the post body.
         * @param {boolean} decodeChunks  Whether to the result is expected to be
         *     encoded for chunking and thus requires decoding.
         */
        xmlHttpPost(uri: goog.Uri, postData: string, decodeChunks: boolean): void;
    
        /**
         * Uses XMLHTTP to send an HTTP GET to the server.
         *
         * @param {goog.Uri} uri  The uri of the request.
         * @param {boolean} decodeChunks  Whether to the result is expected to be
         *     encoded for chunking and thus requires decoding.
         * @param {?string} hostPrefix  The host prefix, if we might be using a
         *     secondary domain.  Note that it should also be in the URL, adding this
         *     won't cause it to be added to the URL.
         * @param {boolean=} opt_noClose   Whether to request that the tcp/ip connection
         *     should be closed.
         */
        xmlHttpGet(uri: goog.Uri, decodeChunks: boolean, hostPrefix: string, opt_noClose?: boolean): void;
    
        /**
         * Uses the Trident htmlfile ActiveX control to send a GET request in IE. This
         * is the innovation discovered that lets us get intermediate results in
         * Internet Explorer.  Thanks to http://go/kev
         * @param {goog.Uri} uri The uri to request from.
         * @param {boolean} usingSecondaryDomain Whether to use a secondary domain.
         */
        tridentGet(uri: goog.Uri, usingSecondaryDomain: boolean): void;
    
        /**
         * Uses an IMG tag to send an HTTP get to the server. This is only currently
         * used to terminate the connection, as an IMG tag is the most reliable way to
         * send something to the server while the page is getting torn down.
         * @param {goog.Uri} uri The uri to send a request to.
         */
        sendUsingImgTag(uri: goog.Uri): void;
    
        /**
         * Cancels the request no matter what the underlying transport is.
         */
        cancel(): void;
    
        /**
         * Indicates whether the request was successful. Only valid after the handler
         * is called to indicate completion of the request.
         *
         * @return {boolean} True if the request succeeded.
         */
        getSuccess(): boolean;
    
        /**
         * If the request was not successful, returns the reason.
         *
         * @return {?goog.net.ChannelRequest.Error}  The last error.
         */
        getLastError(): goog.net.ChannelRequest.Error;
    
        /**
         * Returns the status code of the last request.
         * @return {number} The status code of the last request.
         */
        getLastStatusCode(): number;
    
        /**
         * Returns the session id for this channel.
         *
         * @return {string|undefined} The session ID.
         */
        getSessionId(): any /*string|any (undefined)*/;
    
        /**
         * Returns the request id for this request. Each request has a unique request
         * id and the request IDs are a sequential increasing count.
         *
         * @return {string|number|undefined} The request ID.
         */
        getRequestId(): any /*string|number|any (undefined)*/;
    
        /**
         * Returns the data for a post, if this request is a post.
         *
         * @return {?string} The POST data provided by the request initiator.
         */
        getPostData(): string;
    
        /**
         * Returns the time that the request started, if it has started.
         *
         * @return {?number} The time the request started, as returned by goog.now().
         */
        getRequestStartTime(): number;
    }

    /**
     * A class for handling browser cookies.
     * @param {Document} context The context document to get/set cookies on.
     * @constructor
     * @final
     */
    class Cookies {
        /**
         * A class for handling browser cookies.
         * @param {Document} context The context document to get/set cookies on.
         * @constructor
         * @final
         */
        constructor(context: Document);
    
        /**
         * Returns true if cookies are enabled.
         * @return {boolean} True if cookies are enabled.
         */
        isEnabled(): boolean;
    
        /**
         * We do not allow '=', ';', or white space in the name.
         *
         * NOTE: The following are allowed by this method, but should be avoided for
         * cookies handled by the server.
         * - any name starting with '$'
         * - 'Comment'
         * - 'Domain'
         * - 'Expires'
         * - 'Max-Age'
         * - 'Path'
         * - 'Secure'
         * - 'Version'
         *
         * @param {string} name Cookie name.
         * @return {boolean} Whether name is valid.
         *
         * @see <a href="http://tools.ietf.org/html/rfc2109">RFC 2109</a>
         * @see <a href="http://tools.ietf.org/html/rfc2965">RFC 2965</a>
         */
        isValidName(name: string): boolean;
    
        /**
         * We do not allow ';' or line break in the value.
         *
         * Spec does not mention any illegal characters, but in practice semi-colons
         * break parsing and line breaks truncate the name.
         *
         * @param {string} value Cookie value.
         * @return {boolean} Whether value is valid.
         *
         * @see <a href="http://tools.ietf.org/html/rfc2109">RFC 2109</a>
         * @see <a href="http://tools.ietf.org/html/rfc2965">RFC 2965</a>
         */
        isValidValue(value: string): boolean;
    
        /**
         * Sets a cookie.  The max_age can be -1 to set a session cookie. To remove and
         * expire cookies, use remove() instead.
         *
         * Neither the {@code name} nor the {@code value} are encoded in any way. It is
         * up to the callers of {@code get} and {@code set} (as well as all the other
         * methods) to handle any possible encoding and decoding.
         *
         * @throws {!Error} If the {@code name} fails #goog.net.cookies.isValidName.
         * @throws {!Error} If the {@code value} fails #goog.net.cookies.isValidValue.
         *
         * @param {string} name  The cookie name.
         * @param {string} value  The cookie value.
         * @param {number=} opt_maxAge  The max age in seconds (from now). Use -1 to
         *     set a session cookie. If not provided, the default is -1
         *     (i.e. set a session cookie).
         * @param {?string=} opt_path  The path of the cookie. If not present then this
         *     uses the full request path.
         * @param {?string=} opt_domain  The domain of the cookie, or null to not
         *     specify a domain attribute (browser will use the full request host name).
         *     If not provided, the default is null (i.e. let browser use full request
         *     host name).
         * @param {boolean=} opt_secure Whether the cookie should only be sent over
         *     a secure channel.
         */
        set(name: string, value: string, opt_maxAge?: number, opt_path?: string, opt_domain?: string, opt_secure?: boolean): void;
    
        /**
         * Returns the value for the first cookie with the given name.
         * @param {string} name  The name of the cookie to get.
         * @param {string=} opt_default  If not found this is returned instead.
         * @return {string|undefined}  The value of the cookie. If no cookie is set this
         *     returns opt_default or undefined if opt_default is not provided.
         */
        get(name: string, opt_default?: string): any /*string|any (undefined)*/;
    
        /**
         * Removes and expires a cookie.
         * @param {string} name  The cookie name.
         * @param {string=} opt_path  The path of the cookie, or null to expire a cookie
         *     set at the full request path. If not provided, the default is '/'
         *     (i.e. path=/).
         * @param {string=} opt_domain  The domain of the cookie, or null to expire a
         *     cookie set at the full request host name. If not provided, the default is
         *     null (i.e. cookie at full request host name).
         * @return {boolean} Whether the cookie existed before it was removed.
         */
        remove(name: string, opt_path?: string, opt_domain?: string): boolean;
    
        /**
         * Gets the names for all the cookies.
         * @return {Array.<string>} An array with the names of the cookies.
         */
        getKeys(): string[];
    
        /**
         * Gets the values for all the cookies.
         * @return {Array.<string>} An array with the values of the cookies.
         */
        getValues(): string[];
    
        /**
         * @return {boolean} Whether there are any cookies for this document.
         */
        isEmpty(): boolean;
    
        /**
         * @return {number} The number of cookies for this document.
         */
        getCount(): number;
    
        /**
         * Returns whether there is a cookie with the given name.
         * @param {string} key The name of the cookie to test for.
         * @return {boolean} Whether there is a cookie by that name.
         */
        containsKey(key: string): boolean;
    
        /**
         * Returns whether there is a cookie with the given value. (This is an O(n)
         * operation.)
         * @param {string} value  The value to check for.
         * @return {boolean} Whether there is a cookie with that value.
         */
        containsValue(value: string): boolean;
    
        /**
         * Removes all cookies for this document.  Note that this will only remove
         * cookies from the current path and domain.  If there are cookies set using a
         * subpath and/or another domain these will still be there.
         */
        clear(): void;
    }

    /**
     * A factory of XML http request objects that supports cross domain requests.
     * This class should be instantiated and passed as the parameter of a
     * goog.net.XhrIo constructor to allow cross-domain requests in every browser.
     *
     * @extends {goog.net.XmlHttpFactory}
     * @constructor
     * @final
     */
    class CorsXmlHttpFactory extends goog.net.XmlHttpFactory {
        /**
         * A factory of XML http request objects that supports cross domain requests.
         * This class should be instantiated and passed as the parameter of a
         * goog.net.XhrIo constructor to allow cross-domain requests in every browser.
         *
         * @extends {goog.net.XmlHttpFactory}
         * @constructor
         * @final
         */
        constructor();
    
        /** @override */
        createInstance(): void;
    
        /** @override */
        internalGetOptions(): void;
    }

    /**
     * An adapter around Internet Explorer's XDomainRequest object that makes it
     * look like a standard XMLHttpRequest. This can be used instead of
     * XMLHttpRequest to support CORS.
     *
     * @implements {goog.net.XhrLike}
     * @constructor
     * @struct
     * @final
     */
    class IeCorsXhrAdapter implements goog.net.XhrLike {
        /**
         * An adapter around Internet Explorer's XDomainRequest object that makes it
         * look like a standard XMLHttpRequest. This can be used instead of
         * XMLHttpRequest to support CORS.
         *
         * @implements {goog.net.XhrLike}
         * @constructor
         * @struct
         * @final
         */
        constructor();
    
        /**
         * Opens a connection to the provided URL.
         * @param {string} method The HTTP method to use. Valid methods include GET and
         *     POST.
         * @param {string} url The URL to contact. The authority of this URL must match
         *     the authority of the current page's URL (e.g. http or https).
         * @param {?boolean=} opt_async Whether the request is asynchronous, defaulting
         *     to true. XDomainRequest does not support syncronous requests, so setting
         *     it to false will actually raise an exception.
         * @override
         */
        open(method: string, url: string, opt_async?: boolean): void;
    
        /**
         * Sends the request to the remote server. Before calling this function, always
         * call {@link open}.
         * @param {(ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string)=}
         *     opt_content The content to send as POSTDATA, if any. Only string data is
         *     supported by this implementation.
         * @override
         */
        send(opt_content?: any /*ArrayBuffer|ArrayBufferView|Blob|Document|FormData|any (null)|string*/): void;
    
        /**
         * @override
         */
        abort(): void;
    
        /**
         * Sets a request header to send to the remote server. Because this
         * implementation does not support request headers, this function does nothing.
         * @param {string} key The name of the HTTP header to set. Ignored.
         * @param {string} value The value to set for the HTTP header. Ignored.
         * @override
         */
        setRequestHeader(key: string, value: string): void;
    
        /**
         * Returns the value of the response header identified by key. This
         * implementation only supports the 'content-type' header.
         * @param {string} key The request header to fetch. If this parameter is set to
         *     'content-type' (case-insensitive), this function returns the value of
         *     the 'content-type' request header. If this parameter is set to any other
         *     value, this function always returns an empty string.
         * @return {string} The value of the response header, or an empty string if key
         *     is not 'content-type' (case-insensitive).
         * @override
         */
        getResponseHeader(key: string): string;
    
        /**
         * Returns the response headers from the server. This implemntation only returns
         * the 'content-type' header.
         * @return {string} The headers returned from the server.
         * @override
         */
        getAllResponseHeaders(): string;
    }

    /**
     * Creates a new instance of cross domain RPC
     * @extends {goog.events.EventTarget}
     * @constructor
     * @final
     */
    class CrossDomainRpc extends goog.events.EventTarget {
        /**
         * Creates a new instance of cross domain RPC
         * @extends {goog.events.EventTarget}
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Sends a request across domain.
         * @param {string} uri Uri to make request to.
         * @param {string=} opt_method Method of request. Default is POST.
         * @param {Object=} opt_params Parameters. Each property is turned into a
         *     request parameter.
         * @param {Object=} opt_headers Map of headers of the request.
         */
        sendRequest(uri: string, opt_method?: string, opt_params?: Object, opt_headers?: Object): void;
    
        /**
         * If response is JSON, evaluates it to a JavaScript object and
         * returns it; otherwise returns undefined.
         * @return {Object|undefined} JavaScript object if response is in JSON
         *     or undefined.
         */
        getResponseJson(): any /*Object|any (undefined)*/;
    
        /**
         * @return {boolean} Whether the request completed with a success.
         */
        isSuccess(): boolean;
    
        /**
         * Removes request iframe used.
         */
        reset(): void;
    
        /**
         * Gets a response header.
         * @param {string} name Name of response header.
         * @return {string|undefined} Value of response header; undefined if not found.
         */
        getResponseHeader(name: string): any /*string|any (undefined)*/;
    }

    /**
     * A class for downloading remote files and storing them locally using the
     * HTML5 filesystem API.
     *
     * @param {!goog.fs.DirectoryEntry} dir The directory in which the downloaded
     *     files are stored. This directory should be solely managed by
     *     FileDownloader.
     * @param {goog.net.XhrIoPool=} opt_pool The pool of XhrIo objects to use for
     *     downloading files.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class FileDownloader extends goog.Disposable {
        /**
         * A class for downloading remote files and storing them locally using the
         * HTML5 filesystem API.
         *
         * @param {!goog.fs.DirectoryEntry} dir The directory in which the downloaded
         *     files are stored. This directory should be solely managed by
         *     FileDownloader.
         * @param {goog.net.XhrIoPool=} opt_pool The pool of XhrIo objects to use for
         *     downloading files.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(dir: goog.fs.DirectoryEntry, opt_pool?: goog.net.XhrIoPool);
    
        /**
         * Download a remote file and save its contents to the filesystem. A given file
         * is uniquely identified by its URL string; this means that the relative and
         * absolute URLs for a single file are considered different for the purposes of
         * the FileDownloader.
         *
         * Returns a Deferred that will contain the downloaded blob. If there's an error
         * while downloading the URL, this Deferred will be passed the
         * {@link goog.net.FileDownloader.Error} object as an errback.
         *
         * If a download is already in progress for the given URL, this will return the
         * deferred blob for that download. If the URL has already been downloaded, this
         * will fail once it tries to save the downloaded blob.
         *
         * When a download is in progress, all Deferreds returned for that download will
         * be branches of a single parent. If all such branches are cancelled, or if one
         * is cancelled with opt_deepCancel set, then the download will be cancelled as
         * well.
         *
         * @param {string} url The URL of the file to download.
         * @return {!goog.async.Deferred} The deferred result blob.
         */
        download(url: string): goog.async.Deferred;
    
        /**
         * Return a Deferred that will fire once no download is active for a given URL.
         * If there's no download active for that URL when this is called, the deferred
         * will fire immediately; otherwise, it will fire once the download is complete,
         * whether or not it succeeds.
         *
         * @param {string} url The URL of the download to wait for.
         * @return {!goog.async.Deferred} The Deferred that will fire when the download
         *     is complete.
         */
        waitForDownload(url: string): goog.async.Deferred;
    
        /**
         * Returns whether or not there is an active download for a given URL.
         *
         * @param {string} url The URL of the download to check.
         * @return {boolean} Whether or not there is an active download for the URL.
         */
        isDownloading(url: string): boolean;
    
        /**
         * Load a downloaded blob from the filesystem. Will fire a deferred error if the
         * given URL has not yet been downloaded.
         *
         * @param {string} url The URL of the blob to load.
         * @return {!goog.async.Deferred} The deferred Blob object. The callback will be
         *     passed the blob. If a file API error occurs while loading the blob, that
         *     error will be passed to the errback.
         */
        getDownloadedBlob(url: string): goog.async.Deferred;
    
        /**
         * Get the local filesystem: URL for a downloaded file. This is different from
         * the blob: URL that's available from getDownloadedBlob(). If the end user
         * accesses the filesystem: URL, the resulting file's name will be determined by
         * the download filename as opposed to an arbitrary GUID. In addition, the
         * filesystem: URL is connected to a filesystem location, so if the download is
         * removed then that URL will become invalid.
         *
         * Warning: in Chrome 12, some filesystem: URLs are opened inline. This means
         * that e.g. HTML pages given to the user via filesystem: URLs will be opened
         * and processed by the browser.
         *
         * @param {string} url The URL of the file to get the URL of.
         * @return {!goog.async.Deferred} The deferred filesystem: URL. The callback
         *     will be passed the URL. If a file API error occurs while loading the
         *     blob, that error will be passed to the errback.
         */
        getLocalUrl(url: string): goog.async.Deferred;
    
        /**
         * Return (deferred) whether or not a URL has been downloaded. Will fire a
         * deferred error if something goes wrong when determining this.
         *
         * @param {string} url The URL to check.
         * @return {!goog.async.Deferred} The deferred boolean. The callback will be
         *     passed the boolean. If a file API error occurs while checking the
         *     existence of the downloaded URL, that error will be passed to the
         *     errback.
         */
        isDownloaded(url: string): goog.async.Deferred;
    
        /**
         * Remove a URL from the FileDownloader.
         *
         * This returns a Deferred. If the removal is completed successfully, its
         * callback will be called without any value. If the removal fails, its errback
         * will be called with the {@link goog.fs.Error}.
         *
         * @param {string} url The URL to remove.
         * @return {!goog.async.Deferred} The deferred used for registering callbacks on
         *     success or on error.
         */
        remove(url: string): goog.async.Deferred;
    
        /**
         * Save a blob for a given URL. This works just as through the blob were
         * downloaded form that URL, except you specify the blob and no HTTP request is
         * made.
         *
         * If the URL is currently being downloaded, it's indeterminate whether the blob
         * being set or the blob being downloaded will end up in the filesystem.
         * Whichever one doesn't get saved will have an error. To ensure that one or the
         * other takes precedence, use {@link #waitForDownload} to allow the download to
         * complete before setting the blob.
         *
         * @param {string} url The URL at which to set the blob.
         * @param {!Blob} blob The blob to set.
         * @param {string=} opt_name The name of the file. If this isn't given, it's
         *     determined from the URL.
         * @return {!goog.async.Deferred} The deferred used for registering callbacks on
         *     success or on error. This can be cancelled just like a {@link #download}
         *     Deferred. The objects passed to the errback will be
         *     {@link goog.net.FileDownloader.Error}s.
         */
        setBlob(url: string, blob: Blob, opt_name?: string): goog.async.Deferred;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Class for managing requests via iFrames.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class IframeIo extends goog.events.EventTarget {
        /**
         * Class for managing requests via iFrames.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor();
    
        /**
         * Sends a request via an iframe.
         *
         * A HTML form is used and submitted to the iframe, this simplifies the
         * difference between GET and POST requests. The iframe needs to be created and
         * destroyed for each request otherwise the request will contribute to the
         * history stack.
         *
         * sendFromForm does some clever trickery (thanks jlim) in non-IE browsers to
         * stop a history entry being added for POST requests.
         *
         * @param {goog.Uri|string} uri Uri of the request.
         * @param {string=} opt_method Default is GET, POST uses a form to submit the
         *     request.
         * @param {boolean=} opt_noCache Append a timestamp to the request to avoid
         *     caching.
         * @param {Object|goog.structs.Map=} opt_data Map of key-value pairs.
         */
        send(uri: any /*goog.Uri|string*/, opt_method?: string, opt_noCache?: boolean, opt_data?: any /*Object|goog.structs.Map*/): void;
    
        /**
         * Sends the data stored in an existing form to the server. The HTTP method
         * should be specified on the form, the action can also be specified but can
         * be overridden by the optional URI param.
         *
         * This can be used in conjunction will a file-upload input to upload a file in
         * the background without affecting history.
         *
         * Example form:
         * <pre>
         *   &lt;form action="/server/" enctype="multipart/form-data" method="POST"&gt;
         *     &lt;input name="userfile" type="file"&gt;
         *   &lt;/form&gt;
         * </pre>
         *
         * @param {HTMLFormElement} form Form element used to send the request to the
         *     server.
         * @param {string=} opt_uri Uri to set for the destination of the request, by
         *     default the uri will come from the form.
         * @param {boolean=} opt_noCache Append a timestamp to the request to avoid
         *     caching.
         */
        sendFromForm(form: HTMLFormElement, opt_uri?: string, opt_noCache?: boolean): void;
    
        /**
         * Abort the current Iframe request
         * @param {goog.net.ErrorCode=} opt_failureCode Optional error code to use -
         *     defaults to ABORT.
         */
        abort(opt_failureCode?: goog.net.ErrorCode): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * @return {boolean} True if transfer is complete.
         */
        isComplete(): boolean;
    
        /**
         * @return {boolean} True if transfer was successful.
         */
        isSuccess(): boolean;
    
        /**
         * @return {boolean} True if a transfer is in progress.
         */
        isActive(): boolean;
    
        /**
         * Returns the last response text (i.e. the text content of the iframe).
         * Assumes plain text!
         * @return {?string} Result from the server.
         */
        getResponseText(): string;
    
        /**
         * Returns the last response html (i.e. the innerHtml of the iframe).
         * @return {?string} Result from the server.
         */
        getResponseHtml(): string;
    
        /**
         * Parses the content as JSON. This is a safe parse and may throw an error
         * if the response is malformed.
         * Use goog.json.unsafeparse(this.getResponseText()) if you are sure of the
         * state of the returned content.
         * @return {Object} The parsed content.
         */
        getResponseJson(): Object;
    
        /**
         * Returns the document object from the last request.  Not truely XML, but
         * used to mirror the XhrIo interface.
         * @return {HTMLDocument} The document object from the last request.
         */
        getResponseXml(): HTMLDocument;
    
        /**
         * Get the uri of the last request.
         * @return {goog.Uri} Uri of last request.
         */
        getLastUri(): goog.Uri;
    
        /**
         * Gets the last error code.
         * @return {goog.net.ErrorCode} Last error code.
         */
        getLastErrorCode(): goog.net.ErrorCode;
    
        /**
         * Gets the last error message.
         * @return {string} Last error message.
         */
        getLastError(): string;
    
        /**
         * Gets the last custom error.
         * @return {Object} Last custom error.
         */
        getLastCustomError(): Object;
    
        /**
         * Sets the callback function used to check if a loaded IFrame is in an error
         * state.
         * @param {Function} fn Callback that expects a document object as it's single
         *     argument.
         */
        setErrorChecker(fn: Function): void;
    
        /**
         * Gets the callback function used to check if a loaded IFrame is in an error
         * state.
         * @return {Function} A callback that expects a document object as it's single
         *     argument.
         */
        getErrorChecker(): Function;
    
        /**
         * Returns the number of milliseconds after which an incomplete request will be
         * aborted, or 0 if no timeout is set.
         * @return {number} Timeout interval in milliseconds.
         */
        getTimeoutInterval(): number;
    
        /**
         * Sets the number of milliseconds after which an incomplete request will be
         * aborted and a {@link goog.net.EventType.TIMEOUT} event raised; 0 means no
         * timeout is set.
         * @param {number} ms Timeout interval in milliseconds; 0 means none.
         */
        setTimeoutInterval(ms: number): void;
    
        /**
         * @return {boolean} Whether the server response is being ignored.
         */
        isIgnoringResponse(): boolean;
    
        /**
         * Sets whether to ignore the response from the server by not adding any event
         * handlers to fire when the iframe loads. This is necessary when using IframeIo
         * to submit to a server on another domain, to avoid same-origin violations when
         * trying to access the response. If this is set to true, the IframeIo instance
         * will be a single-use instance that is only usable for one request.  It will
         * only clean up its resources (iframes and forms) when it is disposed.
         * @param {boolean} ignore Whether to ignore the server response.
         */
        setIgnoreResponse(ignore: boolean): void;
    
        /**
         * @return {HTMLIFrameElement} The appropriate iframe to use for requests
         *     (created in sendForm_).
         */
        getRequestIframe(): HTMLIFrameElement;
    }

    /**
     * The correct way to determine whether a same-domain iframe has completed
     * loading is different in IE and Firefox.  This class abstracts above these
     * differences, providing a consistent interface for:
     * <ol>
     * <li> Determing if an iframe is currently loaded
     * <li> Listening for an iframe that is not currently loaded, to finish loading
     * </ol>
     *
     * @param {HTMLIFrameElement} iframe An iframe.
     * @param {boolean=} opt_hasContent Does the loaded iframe have content.
     * @extends {goog.events.EventTarget}
     * @constructor
     * @final
     */
    class IframeLoadMonitor extends goog.events.EventTarget {
        /**
         * The correct way to determine whether a same-domain iframe has completed
         * loading is different in IE and Firefox.  This class abstracts above these
         * differences, providing a consistent interface for:
         * <ol>
         * <li> Determing if an iframe is currently loaded
         * <li> Listening for an iframe that is not currently loaded, to finish loading
         * </ol>
         *
         * @param {HTMLIFrameElement} iframe An iframe.
         * @param {boolean=} opt_hasContent Does the loaded iframe have content.
         * @extends {goog.events.EventTarget}
         * @constructor
         * @final
         */
        constructor(iframe: HTMLIFrameElement, opt_hasContent?: boolean);
    
        /**
         * Returns whether or not the iframe is loaded.
         * @return {boolean} whether or not the iframe is loaded.
         */
        isLoaded(): boolean;
    
        /**
         * Returns the iframe whose load state this IframeLoader monitors.
         * @return {HTMLIFrameElement} the iframe whose load state this IframeLoader
         *     monitors.
         */
        getIframe(): HTMLIFrameElement;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Image loader utility class.  Raises a {@link goog.events.EventType.LOAD}
     * event for each image loaded, with an {@link Image} object as the target of
     * the event, normalized to have {@code naturalHeight} and {@code naturalWidth}
     * attributes.
     *
     * To use this class, run:
     *
     * <pre>
     *   var imageLoader = new goog.net.ImageLoader();
     *   goog.events.listen(imageLoader, goog.net.EventType.COMPLETE,
     *       function(e) { ... });
     *   imageLoader.addImage("image_id", "http://path/to/image.gif");
     *   imageLoader.start();
     * </pre>
     *
     * The start() method must be called to start image loading.  Images can be
     * added and removed after loading has started, but only those images added
     * before start() was called will be loaded until start() is called again.
     * A goog.net.EventType.COMPLETE event will be dispatched only once all
     * outstanding images have completed uploading.
     *
     * @param {Element=} opt_parent An optional parent element whose document object
     *     should be used to load images.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class ImageLoader extends goog.events.EventTarget {
        /**
         * Image loader utility class.  Raises a {@link goog.events.EventType.LOAD}
         * event for each image loaded, with an {@link Image} object as the target of
         * the event, normalized to have {@code naturalHeight} and {@code naturalWidth}
         * attributes.
         *
         * To use this class, run:
         *
         * <pre>
         *   var imageLoader = new goog.net.ImageLoader();
         *   goog.events.listen(imageLoader, goog.net.EventType.COMPLETE,
         *       function(e) { ... });
         *   imageLoader.addImage("image_id", "http://path/to/image.gif");
         *   imageLoader.start();
         * </pre>
         *
         * The start() method must be called to start image loading.  Images can be
         * added and removed after loading has started, but only those images added
         * before start() was called will be loaded until start() is called again.
         * A goog.net.EventType.COMPLETE event will be dispatched only once all
         * outstanding images have completed uploading.
         *
         * @param {Element=} opt_parent An optional parent element whose document object
         *     should be used to load images.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(opt_parent?: Element);
    
        /**
         * Adds an image to the image loader, and associates it with the given ID
         * string.  If an image with that ID already exists, it is silently replaced.
         * When the image in question is loaded, the target of the LOAD event will be
         * an {@code Image} object with {@code id} and {@code src} attributes based on
         * these arguments.
         * @param {string} id The ID of the image to load.
         * @param {string|Image} image Either the source URL of the image or the HTML
         *     image element itself (or any object with a {@code src} property, really).
         * @param {!goog.net.ImageLoader.CorsRequestType=} opt_corsRequestType The type
         *     of CORS request to use, if any.
         */
        addImage(id: string, image: any /*string|Image*/, opt_corsRequestType?: goog.net.ImageLoader.CorsRequestType): void;
    
        /**
         * Removes the image associated with the given ID string from the image loader.
         * If the image was previously loading, removes any listeners for its events
         * and dispatches a COMPLETE event if all remaining images have now completed.
         * @param {string} id The ID of the image to remove.
         */
        removeImage(id: string): void;
    
        /**
         * Starts loading all images in the image loader in parallel.  Raises a LOAD
         * event each time an image finishes loading, and a COMPLETE event after all
         * images have finished loading.
         */
        start(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Abstract class defining an IP Address.
     *
     * Please use goog.net.IpAddress static methods or
     * goog.net.Ipv4Address/Ipv6Address classes.
     *
     * @param {!goog.math.Integer} address The Ip Address.
     * @param {number} version The version number (4, 6).
     * @constructor
     */
    class IpAddress {
        /**
         * Abstract class defining an IP Address.
         *
         * Please use goog.net.IpAddress static methods or
         * goog.net.Ipv4Address/Ipv6Address classes.
         *
         * @param {!goog.math.Integer} address The Ip Address.
         * @param {number} version The version number (4, 6).
         * @constructor
         */
        constructor(address: goog.math.Integer, version: number);
    
        /**
         * @return {number} The IP Address version.
         */
        getVersion(): number;
    
        /**
         * @param {!goog.net.IpAddress} other The other IP Address.
         * @return {boolean} true if the IP Addresses are equal.
         */
        equals(other: goog.net.IpAddress): boolean;
    
        /**
         * @return {goog.math.Integer} The IP Address, as an Integer.
         */
        toInteger(): goog.math.Integer;
    
        /**
         * @return {string} The IP Address, as an URI string following RFC 3986.
         */
        toUriString: any /*missing*/;
    
        /**
         * @return {string} The IP Address, as a string.
         * @override
         */
        toString: any /*missing*/;
    }

    /**
     * Takes a string or a number and returns a IPv4 Address.
     *
     * This constructor accepts strings and instance of goog.math.Integer.
     * If you pass a goog.math.Integer, make sure that its sign is set to positive.
     * @param {(string|!goog.math.Integer)} address The address to store.
     * @extends {goog.net.IpAddress}
     * @constructor
     * @final
     */
    class Ipv4Address extends goog.net.IpAddress {
        /**
         * Takes a string or a number and returns a IPv4 Address.
         *
         * This constructor accepts strings and instance of goog.math.Integer.
         * If you pass a goog.math.Integer, make sure that its sign is set to positive.
         * @param {(string|!goog.math.Integer)} address The address to store.
         * @extends {goog.net.IpAddress}
         * @constructor
         * @final
         */
        constructor(address: any /*string|goog.math.Integer*/);
    
        /**
         * @override
         */
        toString(): void;
    
        /**
         * @override
         */
        toUriString(): void;
    }

    /**
     * Takes a string or a number and returns an IPv6 Address.
     *
     * This constructor accepts strings and instance of goog.math.Integer.
     * If you pass a goog.math.Integer, make sure that its sign is set to positive.
     * @param {(string|!goog.math.Integer)} address The address to store.
     * @constructor
     * @extends {goog.net.IpAddress}
     * @final
     */
    class Ipv6Address extends goog.net.IpAddress {
        /**
         * Takes a string or a number and returns an IPv6 Address.
         *
         * This constructor accepts strings and instance of goog.math.Integer.
         * If you pass a goog.math.Integer, make sure that its sign is set to positive.
         * @param {(string|!goog.math.Integer)} address The address to store.
         * @constructor
         * @extends {goog.net.IpAddress}
         * @final
         */
        constructor(address: any /*string|goog.math.Integer*/);
    
        /**
         * @override
         */
        toString(): void;
    
        /**
         * @override
         */
        toUriString(): void;
    
        /**
         * @return {boolean} true if the IPv6 contains a mapped IPv4.
         */
        isMappedIpv4Address(): boolean;
    
        /**
         * Will return the mapped IPv4 address in this IPv6 address.
         * @return {goog.net.Ipv4Address} an IPv4 or null.
         */
        getMappedIpv4Address(): goog.net.Ipv4Address;
    }

    /**
     * Creates a new cross domain channel that sends data to the specified
     * host URL. By default, if no reply arrives within 5s, the channel
     * assumes the call failed to complete successfully.
     *
     * @param {goog.Uri|string} uri The Uri of the server side code that receives
     *     data posted through this channel (e.g.,
     *     "http://maps.google.com/maps/geo").
     *
     * @param {string=} opt_callbackParamName The parameter name that is used to
     *     specify the callback. Defaults to "callback".
     *
     * @constructor
     * @final
     */
    class Jsonp {
        /**
         * Creates a new cross domain channel that sends data to the specified
         * host URL. By default, if no reply arrives within 5s, the channel
         * assumes the call failed to complete successfully.
         *
         * @param {goog.Uri|string} uri The Uri of the server side code that receives
         *     data posted through this channel (e.g.,
         *     "http://maps.google.com/maps/geo").
         *
         * @param {string=} opt_callbackParamName The parameter name that is used to
         *     specify the callback. Defaults to "callback".
         *
         * @constructor
         * @final
         */
        constructor(uri: any /*goog.Uri|string*/, opt_callbackParamName?: string);
    
        /**
         * Sets the length of time, in milliseconds, this channel is prepared
         * to wait for for a request to complete. If the call is not competed
         * within the set time span, it is assumed to have failed. To wait
         * indefinitely for a request to complete set the timout to a negative
         * number.
         *
         * @param {number} timeout The length of time before calls are
         * interrupted.
         */
        setRequestTimeout(timeout: number): void;
    
        /**
         * Returns the current timeout value, in milliseconds.
         *
         * @return {number} The timeout value.
         */
        getRequestTimeout(): number;
    
        /**
         * Sends the given payload to the URL specified at the construction
         * time. The reply is delivered to the given replyCallback. If the
         * errorCallback is specified and the reply does not arrive within the
         * timeout period set on this channel, the errorCallback is invoked
         * with the original payload.
         *
         * If no reply callback is specified, then the response is expected to
         * consist of calls to globally registered functions. No &callback=
         * URL parameter will be sent in the request, and the script element
         * will be cleaned up after the timeout.
         *
         * @param {Object=} opt_payload Name-value pairs.  If given, these will be
         *     added as parameters to the supplied URI as GET parameters to the
         *     given server URI.
         *
         * @param {Function=} opt_replyCallback A function expecting one
         *     argument, called when the reply arrives, with the response data.
         *
         * @param {Function=} opt_errorCallback A function expecting one
         *     argument, called on timeout, with the payload (if given), otherwise
         *     null.
         *
         * @param {string=} opt_callbackParamValue Value to be used as the
         *     parameter value for the callback parameter (callbackParamName).
         *     To be used when the value needs to be fixed by the client for a
         *     particular request, to make use of the cached responses for the request.
         *     NOTE: If multiple requests are made with the same
         *     opt_callbackParamValue, only the last call will work whenever the
         *     response comes back.
         *
         * @return {Object} A request descriptor that may be used to cancel this
         *     transmission, or null, if the message may not be cancelled.
         */
        send(opt_payload?: Object, opt_replyCallback?: Function, opt_errorCallback?: Function, opt_callbackParamValue?: string): Object;
    
        /**
         * Cancels a given request. The request must be exactly the object returned by
         * the send method.
         *
         * @param {Object} request The request object returned by the send method.
         */
        cancel(request: Object): void;
    }

    /**
     * Mock implenetation of goog.net.IframeIo. This doesn't provide a mock
     * implementation for all cases, but it's not too hard to add them as needed.
     * @param {goog.testing.TestQueue} testQueue Test queue for inserting test
     *     events.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class MockIFrameIo extends goog.events.EventTarget {
        /**
         * Mock implenetation of goog.net.IframeIo. This doesn't provide a mock
         * implementation for all cases, but it's not too hard to add them as needed.
         * @param {goog.testing.TestQueue} testQueue Test queue for inserting test
         *     events.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(testQueue: goog.testing.TestQueue);
    
        /**
         * Simulates the iframe send.
         *
         * @param {goog.Uri|string} uri Uri of the request.
         * @param {string=} opt_method Default is GET, POST uses a form to submit the
         *     request.
         * @param {boolean=} opt_noCache Append a timestamp to the request to avoid
         *     caching.
         * @param {Object|goog.structs.Map=} opt_data Map of key-value pairs.
         */
        send(uri: any /*goog.Uri|string*/, opt_method?: string, opt_noCache?: boolean, opt_data?: any /*Object|goog.structs.Map*/): void;
    
        /**
         * Simulates the iframe send from a form.
         * @param {Element} form Form element used to send the request to the server.
         * @param {string=} opt_uri Uri to set for the destination of the request, by
         *     default the uri will come from the form.
         * @param {boolean=} opt_noCache Append a timestamp to the request to avoid
         *     caching.
         */
        sendFromForm(form: Element, opt_uri?: string, opt_noCache?: boolean): void;
    
        /**
         * Simulates aborting the current Iframe request.
         * @param {goog.net.ErrorCode=} opt_failureCode Optional error code to use -
         *     defaults to ABORT.
         */
        abort(opt_failureCode?: goog.net.ErrorCode): void;
    
        /**
         * Simulates receive of incremental data.
         * @param {Object} data Data.
         */
        simulateIncrementalData(data: Object): void;
    
        /**
         * Simulates the iframe is done.
         * @param {goog.net.ErrorCode} errorCode The error code for any error that
         *     should be simulated.
         */
        simulateDone(errorCode: goog.net.ErrorCode): void;
    
        /**
         * Simulates the IFrame is ready for the next request.
         */
        simulateReady(): void;
    
        /**
         * @return {boolean} True if transfer is complete.
         */
        isComplete(): boolean;
    
        /**
         * @return {boolean} True if transfer was successful.
         */
        isSuccess(): boolean;
    
        /**
         * @return {boolean} True if a transfer is in progress.
         */
        isActive(): boolean;
    
        /**
         * Returns the last response text (i.e. the text content of the iframe).
         * Assumes plain text!
         * @return {string} Result from the server.
         */
        getResponseText(): string;
    
        /**
         * Parses the content as JSON. This is a safe parse and may throw an error
         * if the response is malformed.
         * @return {Object} The parsed content.
         */
        getResponseJson(): Object;
    
        /**
         * Get the uri of the last request.
         * @return {goog.Uri} Uri of last request.
         */
        getLastUri(): goog.Uri;
    
        /**
         * Gets the last error code.
         * @return {goog.net.ErrorCode} Last error code.
         */
        getLastErrorCode(): goog.net.ErrorCode;
    
        /**
         * Gets the last error message.
         * @return {string} Last error message.
         */
        getLastError(): string;
    
        /**
         * Gets the last custom error.
         * @return {Object} Last custom error.
         */
        getLastCustomError(): Object;
    
        /**
         * Sets the callback function used to check if a loaded IFrame is in an error
         * state.
         * @param {Function} fn Callback that expects a document object as it's single
         *     argument.
         */
        setErrorChecker(fn: Function): void;
    
        /**
         * Gets the callback function used to check if a loaded IFrame is in an error
         * state.
         * @return {Function} A callback that expects a document object as it's single
         *     argument.
         */
        getErrorChecker(): Function;
    
        /**
         * Returns the number of milliseconds after which an incomplete request will be
         * aborted, or 0 if no timeout is set.
         * @return {number} Timeout interval in milliseconds.
         */
        getTimeoutInterval(): number;
    
        /**
         * Sets the number of milliseconds after which an incomplete request will be
         * aborted and a {@link goog.net.EventType.TIMEOUT} event raised; 0 means no
         * timeout is set.
         * @param {number} ms Timeout interval in milliseconds; 0 means none.
         */
        setTimeoutInterval(ms: number): void;
    }

    /**
     * Provides a wrapper around IframeLoadMonitor, to allow the caller to wait for
     * multiple iframes to load.
     *
     * @param {Array.<HTMLIFrameElement>} iframes Array of iframe elements to
     *     wait until they are loaded.
     * @param {function():void} callback The callback to invoke once the frames have
     *     loaded.
     * @param {boolean=} opt_hasContent true if the monitor should wait until the
     *     iframes have content (body.firstChild != null).
     * @constructor
     * @final
     */
    class MultiIframeLoadMonitor {
        /**
         * Provides a wrapper around IframeLoadMonitor, to allow the caller to wait for
         * multiple iframes to load.
         *
         * @param {Array.<HTMLIFrameElement>} iframes Array of iframe elements to
         *     wait until they are loaded.
         * @param {function():void} callback The callback to invoke once the frames have
         *     loaded.
         * @param {boolean=} opt_hasContent true if the monitor should wait until the
         *     iframes have content (body.firstChild != null).
         * @constructor
         * @final
         */
        constructor(iframes: HTMLIFrameElement[], callback: () => void, opt_hasContent?: boolean);
    
        /**
         * Handles a pending iframe load monitor load event.
         * @param {goog.events.Event} e The goog.net.IframeLoadMonitor.LOAD_EVENT event.
         */
        handleEvent(e: goog.events.Event): void;
    
        /**
         * Stops monitoring the iframes, cleaning up any associated resources. In
         * general, the object cleans up its own resources before invoking the
         * callback, so this API should only be used if the caller wants to stop the
         * monitoring before the iframes are loaded (for example, if the caller is
         * implementing a timeout).
         */
        stopMonitoring(): void;
    }

    /**
     * Creates an instance of goog.net.NetworkTester which can be used to test
     * for internet connectivity by seeing if an image can be loaded from
     * google.com. It can also be tested with other URLs.
     * @param {Function} callback Callback that is called when the test completes.
     *     The callback takes a single boolean parameter. True indicates the URL
     *     was reachable, false indicates it wasn't.
     * @param {Object=} opt_handler Handler object for the callback.
     * @param {goog.Uri=} opt_uri URI to use for testing.
     * @constructor
     * @final
     */
    class NetworkTester {
        /**
         * Creates an instance of goog.net.NetworkTester which can be used to test
         * for internet connectivity by seeing if an image can be loaded from
         * google.com. It can also be tested with other URLs.
         * @param {Function} callback Callback that is called when the test completes.
         *     The callback takes a single boolean parameter. True indicates the URL
         *     was reachable, false indicates it wasn't.
         * @param {Object=} opt_handler Handler object for the callback.
         * @param {goog.Uri=} opt_uri URI to use for testing.
         * @constructor
         * @final
         */
        constructor(callback: Function, opt_handler?: Object, opt_uri?: goog.Uri);
    
        /**
         * Returns the timeout in milliseconds.
         * @return {number} Timeout in milliseconds.
         */
        getTimeout(): number;
    
        /**
         * Sets the timeout in milliseconds.
         * @param {number} timeoutMs Timeout in milliseconds.
         */
        setTimeout(timeoutMs: number): void;
    
        /**
         * Returns the numer of retries to attempt.
         * @return {number} Number of retries to attempt.
         */
        getNumRetries(): number;
    
        /**
         * Sets the timeout in milliseconds.
         * @param {number} retries Number of retries to attempt.
         */
        setNumRetries(retries: number): void;
    
        /**
         * Returns the pause between retries in milliseconds.
         * @return {number} Pause between retries in milliseconds.
         */
        getPauseBetweenRetries(): number;
    
        /**
         * Sets the pause between retries in milliseconds.
         * @param {number} pauseMs Pause between retries in milliseconds.
         */
        setPauseBetweenRetries(pauseMs: number): void;
    
        /**
         * Returns the uri to use for the test.
         * @return {goog.Uri} The uri for the test.
         */
        getUri(): goog.Uri;
    
        /**
         * Sets the uri to use for the test.
         * @param {goog.Uri} uri The uri for the test.
         */
        setUri(uri: goog.Uri): void;
    
        /**
         * Returns whether the tester is currently running.
         * @return {boolean} True if it's running, false if it's not running.
         */
        isRunning(): boolean;
    
        /**
         * Starts the process of testing the network.
         */
        start(): void;
    
        /**
         * Stops the testing of the network. This is a noop if not running.
         */
        stop(): void;
    
        /**
         * Handles a successful or failed result.
         * @param {boolean} succeeded Whether the image load succeeded.
         */
        onResult(succeeded: boolean): void;
    }

    /**
     * Class encapsulating the logic for using a WebSocket.
     *
     * @param {boolean=} opt_autoReconnect True if the web socket should
     *     automatically reconnect or not.  This is true by default.
     * @param {function(number):number=} opt_getNextReconnect A function for
     *     obtaining the time until the next reconnect attempt. Given the reconnect
     *     attempt count (which is a positive integer), the function should return a
     *     positive integer representing the milliseconds to the next reconnect
     *     attempt.  The default function used is an exponential back-off. Note that
     *     this function is never called if auto reconnect is disabled.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class WebSocket extends goog.events.EventTarget {
        /**
         * Class encapsulating the logic for using a WebSocket.
         *
         * @param {boolean=} opt_autoReconnect True if the web socket should
         *     automatically reconnect or not.  This is true by default.
         * @param {function(number):number=} opt_getNextReconnect A function for
         *     obtaining the time until the next reconnect attempt. Given the reconnect
         *     attempt count (which is a positive integer), the function should return a
         *     positive integer representing the milliseconds to the next reconnect
         *     attempt.  The default function used is an exponential back-off. Note that
         *     this function is never called if auto reconnect is disabled.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(opt_autoReconnect?: boolean, opt_getNextReconnect?: (_0: number) => number);
    
        /**
         * Creates and opens the actual WebSocket.  Only call this after attaching the
         * appropriate listeners to this object.  If listeners aren't registered, then
         * the {@code goog.net.WebSocket.EventType.OPENED} event might be missed.
         *
         * @param {string} url The URL to which to connect.
         * @param {string=} opt_protocol The subprotocol to use.  The connection will
         *     only be established if the server reports that it has selected this
         *     subprotocol. The subprotocol name must all be a non-empty ASCII string
         *     with no control characters and no spaces in them (i.e. only characters
         *     in the range U+0021 to U+007E).
         */
        open(url: string, opt_protocol?: string): void;
    
        /**
         * Closes the web socket connection.
         */
        close(): void;
    
        /**
         * Sends the message over the web socket.
         *
         * @param {string} message The message to send.
         */
        send(message: string): void;
    
        /**
         * Checks to see if the web socket is open or not.
         *
         * @return {boolean} True if the web socket is open, false otherwise.
         */
        isOpen(): boolean;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * An xhr factory subclass which can be constructed using two factory methods.
     * This exists partly to allow the preservation of goog.net.XmlHttp.setFactory()
     * with an unchanged signature.
     * @param {function():!goog.net.XhrLike.OrNative} xhrFactory
     *     A function which returns a new XHR object.
     * @param {function():!Object} optionsFactory A function which returns the
     *     options associated with xhr objects from this factory.
     * @extends {goog.net.XmlHttpFactory}
     * @constructor
     * @final
     */
    class WrapperXmlHttpFactory extends goog.net.XmlHttpFactory {
        /**
         * An xhr factory subclass which can be constructed using two factory methods.
         * This exists partly to allow the preservation of goog.net.XmlHttp.setFactory()
         * with an unchanged signature.
         * @param {function():!goog.net.XhrLike.OrNative} xhrFactory
         *     A function which returns a new XHR object.
         * @param {function():!Object} optionsFactory A function which returns the
         *     options associated with xhr objects from this factory.
         * @extends {goog.net.XmlHttpFactory}
         * @constructor
         * @final
         */
        constructor(xhrFactory: () => goog.net.XhrLike.OrNative, optionsFactory: () => Object);
    
        /** @override */
        createInstance(): void;
    
        /** @override */
        getOptions(): void;
    }

    /**
     * Basic class for handling XMLHttpRequests.
     * @param {goog.net.XmlHttpFactory=} opt_xmlHttpFactory Factory to use when
     *     creating XMLHttpRequest objects.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class XhrIo extends goog.events.EventTarget {
        /**
         * Basic class for handling XMLHttpRequests.
         * @param {goog.net.XmlHttpFactory=} opt_xmlHttpFactory Factory to use when
         *     creating XMLHttpRequest objects.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(opt_xmlHttpFactory?: goog.net.XmlHttpFactory);
    
        /**
         * A reference to the XhrIo logger
         * @private {goog.debug.Logger}
         * @const
         */
        logger_: any /*missing*/;
    
        /**
         * Returns the number of milliseconds after which an incomplete request will be
         * aborted, or 0 if no timeout is set.
         * @return {number} Timeout interval in milliseconds.
         */
        getTimeoutInterval(): number;
    
        /**
         * Sets the number of milliseconds after which an incomplete request will be
         * aborted and a {@link goog.net.EventType.TIMEOUT} event raised; 0 means no
         * timeout is set.
         * @param {number} ms Timeout interval in milliseconds; 0 means none.
         */
        setTimeoutInterval(ms: number): void;
    
        /**
         * Sets the desired type for the response. At time of writing, this is only
         * supported in very recent versions of WebKit (10.0.612.1 dev and later).
         *
         * If this is used, the response may only be accessed via {@link #getResponse}.
         *
         * @param {goog.net.XhrIo.ResponseType} type The desired type for the response.
         */
        setResponseType(type: goog.net.XhrIo.ResponseType): void;
    
        /**
         * Gets the desired type for the response.
         * @return {goog.net.XhrIo.ResponseType} The desired type for the response.
         */
        getResponseType(): goog.net.XhrIo.ResponseType;
    
        /**
         * Sets whether a "credentialed" request that is aware of cookie and
         * authentication information should be made. This option is only supported by
         * browsers that support HTTP Access Control. As of this writing, this option
         * is not supported in IE.
         *
         * @param {boolean} withCredentials Whether this should be a "credentialed"
         *     request.
         */
        setWithCredentials(withCredentials: boolean): void;
    
        /**
         * Gets whether a "credentialed" request is to be sent.
         * @return {boolean} The desired type for the response.
         */
        getWithCredentials(): boolean;
    
        /**
         * Instance send that actually uses XMLHttpRequest to make a server call.
         * @param {string|goog.Uri} url Uri to make request to.
         * @param {string=} opt_method Send method, default: GET.
         * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
         *     opt_content Body data.
         * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
         *     request.
         */
        send(url: any /*string|goog.Uri*/, opt_method?: string, opt_content?: any /*ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string*/, opt_headers?: any /*Object|goog.structs.Map*/): void;
    
        /**
         * Creates a new XHR object.
         * @return {!goog.net.XhrLike.OrNative} The newly created XHR object.
         * @protected
         */
        createXhr(): goog.net.XhrLike.OrNative;
    
        /**
         * Abort the current XMLHttpRequest
         * @param {goog.net.ErrorCode=} opt_failureCode Optional error code to use -
         *     defaults to ABORT.
         */
        abort(opt_failureCode?: goog.net.ErrorCode): void;
    
        /**
         * Nullifies all callbacks to reduce risks of leaks.
         * @override
         * @protected
         */
        disposeInternal(): void;
    
        /**
         * @return {boolean} Whether there is an active request.
         */
        isActive(): boolean;
    
        /**
         * @return {boolean} Whether the request has completed.
         */
        isComplete(): boolean;
    
        /**
         * @return {boolean} Whether the request completed with a success.
         */
        isSuccess(): boolean;
    
        /**
         * Get the readystate from the Xhr object
         * Will only return correct result when called from the context of a callback
         * @return {goog.net.XmlHttp.ReadyState} goog.net.XmlHttp.ReadyState.*.
         */
        getReadyState(): goog.net.XmlHttp.ReadyState;
    
        /**
         * Get the status from the Xhr object
         * Will only return correct result when called from the context of a callback
         * @return {number} Http status.
         */
        getStatus(): number;
    
        /**
         * Get the status text from the Xhr object
         * Will only return correct result when called from the context of a callback
         * @return {string} Status text.
         */
        getStatusText(): string;
    
        /**
         * Get the last Uri that was requested
         * @return {string} Last Uri.
         */
        getLastUri(): string;
    
        /**
         * Get the response text from the Xhr object
         * Will only return correct result when called from the context of a callback.
         * @return {string} Result from the server, or '' if no result available.
         */
        getResponseText(): string;
    
        /**
         * Get the response body from the Xhr object. This property is only available
         * in IE since version 7 according to MSDN:
         * http://msdn.microsoft.com/en-us/library/ie/ms534368(v=vs.85).aspx
         * Will only return correct result when called from the context of a callback.
         *
         * One option is to construct a VBArray from the returned object and convert
         * it to a JavaScript array using the toArray method:
         * {@code (new window['VBArray'](xhrIo.getResponseBody())).toArray()}
         * This will result in an array of numbers in the range of [0..255]
         *
         * Another option is to use the VBScript CStr method to convert it into a
         * string as outlined in http://stackoverflow.com/questions/1919972
         *
         * @return {Object} Binary result from the server or null if not available.
         */
        getResponseBody(): Object;
    
        /**
         * Get the response XML from the Xhr object
         * Will only return correct result when called from the context of a callback.
         * @return {Document} The DOM Document representing the XML file, or null
         * if no result available.
         */
        getResponseXml(): Document;
    
        /**
         * Get the response and evaluates it as JSON from the Xhr object
         * Will only return correct result when called from the context of a callback
         * @param {string=} opt_xssiPrefix Optional XSSI prefix string to use for
         *     stripping of the response before parsing. This needs to be set only if
         *     your backend server prepends the same prefix string to the JSON response.
         * @return {Object|undefined} JavaScript object.
         */
        getResponseJson(opt_xssiPrefix?: string): any /*Object|any (undefined)*/;
    
        /**
         * Get the response as the type specificed by {@link #setResponseType}. At time
         * of writing, this is only directly supported in very recent versions of WebKit
         * (10.0.612.1 dev and later). If the field is not supported directly, we will
         * try to emulate it.
         *
         * Emulating the response means following the rules laid out at
         * http://www.w3.org/TR/XMLHttpRequest/#the-response-attribute
         *
         * On browsers with no support for this (Chrome < 10, Firefox < 4, etc), only
         * response types of DEFAULT or TEXT may be used, and the response returned will
         * be the text response.
         *
         * On browsers with Mozilla's draft support for array buffers (Firefox 4, 5),
         * only response types of DEFAULT, TEXT, and ARRAY_BUFFER may be used, and the
         * response returned will be either the text response or the Mozilla
         * implementation of the array buffer response.
         *
         * On browsers will full support, any valid response type supported by the
         * browser may be used, and the response provided by the browser will be
         * returned.
         *
         * @return {*} The response.
         */
        getResponse(): any;
    
        /**
         * Get the value of the response-header with the given name from the Xhr object
         * Will only return correct result when called from the context of a callback
         * and the request has completed
         * @param {string} key The name of the response-header to retrieve.
         * @return {string|undefined} The value of the response-header named key.
         */
        getResponseHeader(key: string): any /*string|any (undefined)*/;
    
        /**
         * Gets the text of all the headers in the response.
         * Will only return correct result when called from the context of a callback
         * and the request has completed.
         * @return {string} The value of the response headers or empty string.
         */
        getAllResponseHeaders(): string;
    
        /**
         * Returns all response headers as a key-value map.
         * Multiple values for the same header key can be combined into one,
         * separated by a comma and a space.
         * Note that the native getResponseHeader method for retrieving a single header
         * does a case insensitive match on the header name. This method does not
         * include any case normalization logic, it will just return a key-value
         * representation of the headers.
         * See: http://www.w3.org/TR/XMLHttpRequest/#the-getresponseheader()-method
         * @return {!Object.<string, string>} An object with the header keys as keys
         *     and header values as values.
         */
        getResponseHeaders(): { [key: string]: string };
    
        /**
         * Get the last error message
         * @return {goog.net.ErrorCode} Last error code.
         */
        getLastErrorCode(): goog.net.ErrorCode;
    
        /**
         * Get the last error message
         * @return {string} Last error message.
         */
        getLastError(): string;
    }

    /**
     * A pool of XhrIo objects.
     * @param {goog.structs.Map=} opt_headers Map of default headers to add to every
     *     request.
     * @param {number=} opt_minCount Minimum number of objects (Default: 1).
     * @param {number=} opt_maxCount Maximum number of objects (Default: 10).
     * @constructor
     * @extends {goog.structs.PriorityPool}
     */
    class XhrIoPool extends goog.structs.PriorityPool {
        /**
         * A pool of XhrIo objects.
         * @param {goog.structs.Map=} opt_headers Map of default headers to add to every
         *     request.
         * @param {number=} opt_minCount Minimum number of objects (Default: 1).
         * @param {number=} opt_maxCount Maximum number of objects (Default: 10).
         * @constructor
         * @extends {goog.structs.PriorityPool}
         */
        constructor(opt_headers?: goog.structs.Map, opt_minCount?: number, opt_maxCount?: number);
    
        /**
         * Creates an instance of an XhrIo object to use in the pool.
         * @return {goog.net.XhrIo} The created object.
         * @override
         */
        createObject(): goog.net.XhrIo;
    
        /**
         * Determine if an object has become unusable and should not be used.
         * @param {Object} obj The object to test.
         * @return {boolean} Whether the object can be reused, which is true if the
         *     object is not disposed and not active.
         * @override
         */
        objectCanBeReused(obj: Object): boolean;
    }

    /**
     * A manager of an XhrIoPool.
     * @param {number=} opt_maxRetries Max. number of retries (Default: 1).
     * @param {goog.structs.Map=} opt_headers Map of default headers to add to every
     *     request.
     * @param {number=} opt_minCount Min. number of objects (Default: 1).
     * @param {number=} opt_maxCount Max. number of objects (Default: 10).
     * @param {number=} opt_timeoutInterval Timeout (in ms) before aborting an
     *     attempt (Default: 0ms).
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class XhrManager extends goog.events.EventTarget {
        /**
         * A manager of an XhrIoPool.
         * @param {number=} opt_maxRetries Max. number of retries (Default: 1).
         * @param {goog.structs.Map=} opt_headers Map of default headers to add to every
         *     request.
         * @param {number=} opt_minCount Min. number of objects (Default: 1).
         * @param {number=} opt_maxCount Max. number of objects (Default: 10).
         * @param {number=} opt_timeoutInterval Timeout (in ms) before aborting an
         *     attempt (Default: 0ms).
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(opt_maxRetries?: number, opt_headers?: goog.structs.Map, opt_minCount?: number, opt_maxCount?: number, opt_timeoutInterval?: number);
    
        /**
         * Sets the number of milliseconds after which an incomplete request will be
         * aborted. Zero means no timeout is set.
         * @param {number} ms Timeout interval in milliseconds; 0 means none.
         */
        setTimeoutInterval(ms: number): void;
    
        /**
         * Returns the number of requests either in flight, or waiting to be sent.
         * The count will include the current request if used within a COMPLETE event
         * handler or callback.
         * @return {number} The number of requests in flight or pending send.
         */
        getOutstandingCount(): number;
    
        /**
         * Returns an array of request ids that are either in flight, or waiting to
         * be sent. The id of the current request will be included if used within a
         * COMPLETE event handler or callback.
         * @return {!Array.<string>} Request ids in flight or pending send.
         */
        getOutstandingRequestIds(): string[];
    
        /**
         * Registers the given request to be sent. Throws an error if a request
         * already exists with the given ID.
         * NOTE: It is not sent immediately. It is queued and will be sent when an
         * XhrIo object becomes available, taking into account the request's
         * priority.
         * @param {string} id The id of the request.
         * @param {string} url Uri to make the request too.
         * @param {string=} opt_method Send method, default: GET.
         * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
         *     opt_content Post data.
         * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
         *     request.
         * @param {number=} opt_priority The priority of the request. A smaller value
         *     means a higher priority.
         * @param {Function=} opt_callback Callback function for when request is
         *     complete. The only param is the event object from the COMPLETE event.
         * @param {number=} opt_maxRetries The maximum number of times the request
         *     should be retried.
         * @param {goog.net.XhrIo.ResponseType=} opt_responseType The response type of
         *     this request; defaults to goog.net.XhrIo.ResponseType.DEFAULT.
         * @return {goog.net.XhrManager.Request} The queued request object.
         */
        send(id: string, url: string, opt_method?: string, opt_content?: any /*ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string*/, opt_headers?: any /*Object|goog.structs.Map*/, opt_priority?: number, opt_callback?: Function, opt_maxRetries?: number, opt_responseType?: goog.net.XhrIo.ResponseType): goog.net.XhrManager.Request;
    
        /**
         * Aborts the request associated with id.
         * @param {string} id The id of the request to abort.
         * @param {boolean=} opt_force If true, remove the id now so it can be reused.
         *     No events are fired and the callback is not called when forced.
         */
        abort(id: string, opt_force?: boolean): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Abstract base class for an XmlHttpRequest factory.
     * @constructor
     */
    class XmlHttpFactory {
        /**
         * Abstract base class for an XmlHttpRequest factory.
         * @constructor
         */
        constructor();
    
        /**
         * @return {!goog.net.XhrLike.OrNative} A new XhrLike instance.
         */
        createInstance: any /*missing*/;
    
        /**
         * @return {Object} Options describing how xhr objects obtained from this
         *     factory should be used.
         */
        getOptions(): Object;
    
        /**
         * Override this method in subclasses to preserve the caching offered by
         * getOptions().
         * @return {Object} Options describing how xhr objects obtained from this
         *     factory should be used.
         * @protected
         */
        internalGetOptions: any /*missing*/;
    }

    /**
     * Default factory to use when creating xhr objects.  You probably shouldn't be
     * instantiating this directly, but rather using it via goog.net.XmlHttp.
     * @extends {goog.net.XmlHttpFactory}
     * @constructor
     */
    class DefaultXmlHttpFactory extends goog.net.XmlHttpFactory {
        /**
         * Default factory to use when creating xhr objects.  You probably shouldn't be
         * instantiating this directly, but rather using it via goog.net.XmlHttp.
         * @extends {goog.net.XmlHttpFactory}
         * @constructor
         */
        constructor();
    
        /** @override */
        createInstance(): void;
    
        /** @override */
        internalGetOptions(): void;
    }
}

declare module 'goog.net.cookies' {

    /**
     * Define the constant on the instance in order not to break many references to
     * it.
     * @type {number}
     * @deprecated Use goog.net.Cookies.MAX_COOKIE_LENGTH instead.
     */
    var MAX_COOKIE_LENGTH: number;
}

declare module 'goog.net.CrossDomainRpc' {

    /**
     * Sets the URI for a dummy resource on caller's domain.  This function is
     * used for specifying a particular resource to use rather than relying on
     * auto detection.
     * @param {string} dummyResourceUri URI to dummy resource on the same domain
     *    of caller's page.
     */
    function setDummyResourceUri(dummyResourceUri: string): void;

    /**
     * Sets whether a fallback dummy resource ("/robots.txt" on Firefox and Safari
     * and current page on IE) should be used when a suitable dummy resource is
     * not available.
     * @param {boolean} useFallBack Whether to use fallback or not.
     */
    function setUseFallBackDummyResource(useFallBack: boolean): void;

    /**
     * Sends a request across domain.
     * @param {string} uri Uri to make request to.
     * @param {Function=} opt_continuation Continuation function to be called
     *     when request is completed.  Takes one argument of an event object
     *     whose target has the following properties: "status" is the HTTP
     *     response status code, "responseText" is the response text,
     *     and "headers" is an object with all response headers.  The event
     *     target's getResponseJson() method returns a JavaScript object evaluated
     *     from the JSON response or undefined if response is not JSON.
     * @param {string=} opt_method Method of request. Default is POST.
     * @param {Object=} opt_params Parameters. Each property is turned into a
     *     request parameter.
     * @param {Object=} opt_headers Map of headers of the request.
     */
    function send(uri: string, opt_continuation?: Function, opt_method?: string, opt_params?: Object, opt_headers?: Object): void;

    /**
     * Sets debug mode to true or false.  When debug mode is on, response iframes
     * are visible and left behind after their use is finished.
     * @param {boolean} flag Flag to indicate intention to turn debug model on
     *     (true) or off (false).
     */
    function setDebugMode(flag: boolean): void;

    /**
     * Header prefix.
     * @type {string}
     */
    var HEADER: string;

    /**
     * Parameter prefix.
     * @type {string}
     */
    var PARAM: string;

    /**
     * Parameter to echo prefix.
     * @type {string}
     */
    var PARAM_ECHO: string;

    /**
     * Parameter to echo: request id
     * @type {string}
     */
    var PARAM_ECHO_REQUEST_ID: string;

    /**
     * Parameter to echo: dummy resource URI
     * @type {string}
     */
    var PARAM_ECHO_DUMMY_URI: string;

    /**
     * Makes response available for grandparent (requester)'s receiveResponse
     * call to pick up by creating a series of iframes pointed to the dummy URI
     * with a payload (value after either ? or #) carrying a chunk of response
     * data and a response info iframe that tells the grandparent (requester) the
     * readiness of response.
     * @param {string} data Response data (string or JSON string).
     * @param {boolean} isDataJson true if data is a JSON string; false if just a
     *     string.
     * @param {Object} echo Parameters to echo back
     *     "xdpe:request-id": Server that produces the response needs to
     *     copy it here to support multiple current XD requests on the same page.
     *     "xdpe:dummy-uri": URI to a dummy resource that response
     *     iframes point to to gain the domain of the client.  This can be an
     *     image (IE) or a CSS file (FF) found on the requester's page.
     *     Server should copy value from request parameter "xdpe:dummy-uri".
     * @param {number} status HTTP response status code.
     * @param {string} headers Response headers in JSON format.
     */
    function sendResponse(data: string, isDataJson: boolean, echo: Object, status: number, headers: string): void;
}

declare module 'goog.net.ErrorCode' {

    /**
     * Returns a friendly error message for an error code. These messages are for
     * debugging and are not localized.
     * @param {goog.net.ErrorCode} errorCode An error code.
     * @return {string} A message for debugging.
     */
    function getDebugMessage(errorCode: goog.net.ErrorCode): string;
}

declare module 'goog.net.HttpStatus' {

    /**
     * Returns whether the given status should be considered successful.
     *
     * Successful codes are OK (200), CREATED (201), ACCEPTED (202),
     * NO CONTENT (204), PARTIAL CONTENT (206), NOT MODIFIED (304),
     * and IE's no content code (1223).
     *
     * @param {number} status The status code to test.
     * @return {boolean} Whether the status code should be considered successful.
     */
    function isSuccess(status: number): boolean;
}

declare module 'goog.net.IframeIo' {

    /**
     * Prefix for frame names
     * @type {string}
     */
    var FRAME_NAME_PREFIX: string;

    /**
     * Suffix that is added to inner frames used for sending requests in non-IE
     * browsers
     * @type {string}
     */
    var INNER_FRAME_SUFFIX: string;

    /**
     * The number of milliseconds after a request is completed to dispose the
     * iframes.  This can be done lazily so we wait long enough for any processing
     * that occurred as a result of the response to finish.
     * @type {number}
     */
    var IFRAME_DISPOSE_DELAY_MS: number;

    /**
     * Static send that creates a short lived instance of IframeIo to send the
     * request.
     * @param {goog.Uri|string} uri Uri of the request, it is up the caller to
     *     manage query string params.
     * @param {Function=} opt_callback Event handler for when request is completed.
     * @param {string=} opt_method Default is GET, POST uses a form to submit the
     *     request.
     * @param {boolean=} opt_noCache Append a timestamp to the request to avoid
     *     caching.
     * @param {Object|goog.structs.Map=} opt_data Map of key-value pairs that
     *     will be posted to the server via the iframe's form.
     */
    function send(uri: any /*goog.Uri|string*/, opt_callback?: Function, opt_method?: string, opt_noCache?: boolean, opt_data?: any /*Object|goog.structs.Map*/): void;

    /**
     * Find an iframe by name (assumes the context is goog.global since that is
     * where IframeIo's iframes are kept).
     * @param {string} fname The name to find.
     * @return {HTMLIFrameElement} The iframe element with that name.
     */
    function getIframeByName(fname: string): HTMLIFrameElement;

    /**
     * Find an instance of the IframeIo object by name.
     * @param {string} fname The name to find.
     * @return {goog.net.IframeIo} The instance of IframeIo.
     */
    function getInstanceByName(fname: string): goog.net.IframeIo;

    /**
     * Handles incremental data and routes it to the correct iframeIo instance.
     * The HTML page requested by the IframeIo instance should contain script blocks
     * that call an externed reference to this method.
     * @param {Window} win The window object.
     * @param {Object} data The data object.
     */
    function handleIncrementalData(win: Window, data: Object): void;

    /**
     * Class for representing incremental data events.
     * @param {Object} data The data associated with the event.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class IncrementalDataEvent extends goog.events.Event {
        /**
         * Class for representing incremental data events.
         * @param {Object} data The data associated with the event.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(data: Object);
    }
}

declare module 'goog.net.IframeLoadMonitor' {

    /**
     * Event type dispatched by a goog.net.IframeLoadMonitor when it internal iframe
     * finishes loading for the first time after construction of the
     * goog.net.IframeLoadMonitor
     * @type {string}
     */
    var LOAD_EVENT: string;
}

declare module 'goog.net.ImageLoader' {

    /**
     * The type of image request to dispatch, if this is a CORS-enabled image
     * request. CORS-enabled images can be reused in canvas elements without them
     * being tainted. The server hosting the image should include the appropriate
     * CORS header.
     * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_Enabled_Image
     * @enum {string}
     */
    enum CorsRequestType { ANONYMOUS, USE_CREDENTIALS } 

    /**
     * Describes a request for an image. This includes its URL and its CORS-request
     * type, if any.
     * @typedef {{
     *   src: string,
     *   corsRequestType: ?goog.net.ImageLoader.CorsRequestType
     * }}
     * @private
     */
    var ImageRequest_: any /*missing*/;
}

declare module 'goog.net.IpAddress' {

    /**
     * Parses an IP Address in a string.
     * If the string is malformed, the function will simply return null
     * instead of raising an exception.
     *
     * @param {string} address The IP Address.
     * @see {goog.net.Ipv4Address}
     * @see {goog.net.Ipv6Address}
     * @return {goog.net.IpAddress} The IP Address or null.
     */
    function fromString(address: string): goog.net.IpAddress;

    /**
     * Tries to parse a string represented as a host portion of an URI.
     * See RFC 3986 for more details on IPv6 addresses inside URI.
     * If the string is malformed, the function will simply return null
     * instead of raising an exception.
     *
     * @param {string} address A RFC 3986 encoded IP address.
     * @see {goog.net.Ipv4Address}
     * @see {goog.net.Ipv6Address}
     * @return {goog.net.IpAddress} The IP Address.
     */
    function fromUriString(address: string): goog.net.IpAddress;
}

declare module 'goog.net.Ipv4Address' {

    /**
     * The Maximum length for a netmask (aka, the number of bits for IPv4).
     * @type {number}
     * @const
     */
    var MAX_NETMASK_LENGTH: number;
}

declare module 'goog.net.Ipv6Address' {

    /**
     * The Maximum length for a netmask (aka, the number of bits for IPv6).
     * @type {number}
     * @const
     */
    var MAX_NETMASK_LENGTH: number;
}

declare module 'goog.net.jsloader' {

    /**
     * The default length of time, in milliseconds, we are prepared to wait for a
     * load request to complete.
     * @type {number}
     */
    var DEFAULT_TIMEOUT: number;

    /**
     * Optional parameters for goog.net.jsloader.send.
     * timeout: The length of time, in milliseconds, we are prepared to wait
     *     for a load request to complete. Default it 5 seconds.
     * document: The HTML document under which to load the JavaScript. Default is
     *     the current document.
     * cleanupWhenDone: If true clean up the script tag after script completes to
     *     load. This is important if you just want to read data from the JavaScript
     *     and then throw it away. Default is false.
     *
     * @typedef {{
     *   timeout: (number|undefined),
     *   document: (HTMLDocument|undefined),
     *   cleanupWhenDone: (boolean|undefined)
     * }}
     */
    var Options: any /*missing*/;

    /**
     * Loads and evaluates the JavaScript files at the specified URIs, guaranteeing
     * the order of script loads.
     *
     * Because we have to load the scripts in serial (load script 1, exec script 1,
     * load script 2, exec script 2, and so on), this will be slower than doing
     * the network fetches in parallel.
     *
     * If you need to load a large number of scripts but dependency order doesn't
     * matter, you should just call goog.net.jsloader.load N times.
     *
     * If you need to load a large number of scripts on the same domain,
     * you may want to use goog.module.ModuleLoader.
     *
     * @param {Array.<string>} uris The URIs to load.
     * @param {goog.net.jsloader.Options=} opt_options Optional parameters. See
     *     goog.net.jsloader.options documentation for details.
     */
    function loadMany(uris: string[], opt_options?: goog.net.jsloader.Options): void;

    /**
     * Loads and evaluates a JavaScript file.
     * When the script loads, a user callback is called.
     * It is the client's responsibility to verify that the script ran successfully.
     *
     * @param {string} uri The URI of the JavaScript.
     * @param {goog.net.jsloader.Options=} opt_options Optional parameters. See
     *     goog.net.jsloader.Options documentation for details.
     * @return {!goog.async.Deferred} The deferred result, that may be used to add
     *     callbacks and/or cancel the transmission.
     *     The error callback will be called with a single goog.net.jsloader.Error
     *     parameter.
     */
    function load(uri: string, opt_options?: goog.net.jsloader.Options): goog.async.Deferred;

    /**
     * Loads a JavaScript file and verifies it was evaluated successfully, using a
     * verification object.
     * The verification object is set by the loaded JavaScript at the end of the
     * script.
     * We verify this object was set and return its value in the success callback.
     * If the object is not defined we trigger an error callback.
     *
     * @param {string} uri The URI of the JavaScript.
     * @param {string} verificationObjName The name of the verification object that
     *     the loaded script should set.
     * @param {goog.net.jsloader.Options} options Optional parameters. See
     *     goog.net.jsloader.Options documentation for details.
     * @return {!goog.async.Deferred} The deferred result, that may be used to add
     *     callbacks and/or cancel the transmission.
     *     The success callback will be called with a single parameter containing
     *     the value of the verification object.
     *     The error callback will be called with a single goog.net.jsloader.Error
     *     parameter.
     */
    function loadAndVerify(uri: string, verificationObjName: string, options: goog.net.jsloader.Options): goog.async.Deferred;

    /**
     * Cancels a given request.
     * @this {{script_: Element, timeout_: number}} The request context.
     * @private
     */
    function cancel_(): void;

    /**
     * Possible error codes for jsloader.
     * @enum {number}
     */
    enum ErrorCode { LOAD_ERROR, TIMEOUT, VERIFY_ERROR, VERIFY_OBJECT_ALREADY_EXISTS } 

    /**
     * A jsloader error.
     *
     * @param {goog.net.jsloader.ErrorCode} code The error code.
     * @param {string=} opt_message Additional message.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class Error extends goog.debug.Error {
        /**
         * A jsloader error.
         *
         * @param {goog.net.jsloader.ErrorCode} code The error code.
         * @param {string=} opt_message Additional message.
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor(code: goog.net.jsloader.ErrorCode, opt_message?: string);
    }
}

declare module 'goog.net.Jsonp' {

    /**
     * The name of the property of goog.global under which the callback is
     * stored.
     */
    var CALLBACKS: any /*missing*/;
}

declare module 'goog.net.NetworkStatusMonitor' {

    /**
     * Enum for the events dispatched by the OnlineHandler.
     * @enum {string}
     */
    enum EventType { ONLINE, OFFLINE } 
}

declare module 'goog.net.NetworkTester' {

    /**
     * Default timeout
     * @type {number}
     */
    var DEFAULT_TIMEOUT_MS: number;
}

declare module 'goog.net.tmpnetwork' {

    /**
     * Default timeout to allow for google.com pings.
     * @type {number}
     */
    var GOOGLECOM_TIMEOUT: number;

    /**
     * Pings the network to check if an error is a server error or user's network
     * error.
     *
     * @param {Function} callback The function to call back with results.
     * @param {goog.Uri?=} opt_imageUri The URI of an image to use for the network
     *     test. You *must* provide an image URI; the default behavior is provided
     *     for compatibility with existing code, but the search team does not want
     *     people using images served off of google.com for this purpose. The
     *     default will go away when all usages have been changed.
     */
    function testGoogleCom(callback: Function, opt_imageUri?: goog.Uri): void;

    /**
     * Test loading the given image, retrying if necessary.
     * @param {string} url URL to the iamge.
     * @param {number} timeout Milliseconds before giving up.
     * @param {Function} callback Function to call with results.
     * @param {number} retries The number of times to retry.
     * @param {number=} opt_pauseBetweenRetriesMS Optional number of milliseconds
     *     between retries - defaults to 0.
     */
    function testLoadImageWithRetries(url: string, timeout: number, callback: Function, retries: number, opt_pauseBetweenRetriesMS?: number): void;

    /**
     * Test loading the given image.
     * @param {string} url URL to the iamge.
     * @param {number} timeout Milliseconds before giving up.
     * @param {Function} callback Function to call with results.
     */
    function testLoadImage(url: string, timeout: number, callback: Function): void;
}

declare module 'goog.net.WebSocket' {

    /**
     * The events fired by the web socket.
     * @enum {string} The event types for the web socket.
     */
    enum EventType { CLOSED, ERROR, MESSAGE, OPENED } 

    /**
     * Installs exception protection for all entry points introduced by
     * goog.net.WebSocket instances which are not protected by
     * {@link goog.debug.ErrorHandler#protectWindowSetTimeout},
     * {@link goog.debug.ErrorHandler#protectWindowSetInterval}, or
     * {@link goog.events.protectBrowserEventEntryPoint}.
     *
     * @param {!goog.debug.ErrorHandler} errorHandler Error handler with which to
     *     protect the entry points.
     */
    function protectEntryPoints(errorHandler: goog.debug.ErrorHandler): void;

    /**
     * Object representing a new incoming message event.
     *
     * @param {string} message The raw message coming from the web socket.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class MessageEvent extends goog.events.Event {
        /**
         * Object representing a new incoming message event.
         *
         * @param {string} message The raw message coming from the web socket.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(message: string);
    }

    /**
     * Object representing an error event. This is fired whenever an error occurs
     * on the web socket.
     *
     * @param {string} data The error data.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class ErrorEvent extends goog.events.Event {
        /**
         * Object representing an error event. This is fired whenever an error occurs
         * on the web socket.
         *
         * @param {string} data The error data.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(data: string);
    }
}

declare module 'goog.net.XhrIo' {

    /**
     * Response types that may be requested for XMLHttpRequests.
     * @enum {string}
     * @see http://www.w3.org/TR/XMLHttpRequest/#the-responsetype-attribute
     */
    enum ResponseType { DEFAULT, TEXT, DOCUMENT, BLOB, ARRAY_BUFFER } 

    /**
     * The Content-Type HTTP header name
     * @type {string}
     */
    var CONTENT_TYPE_HEADER: string;

    /**
     * The pattern matching the 'http' and 'https' URI schemes
     * @type {!RegExp}
     */
    var HTTP_SCHEME_PATTERN: RegExp;

    /**
     * The methods that typically come along with form data.  We set different
     * headers depending on whether the HTTP action is one of these.
     */
    var METHODS_WITH_FORM_DATA: any /*missing*/;

    /**
     * The Content-Type HTTP header value for a url-encoded form
     * @type {string}
     */
    var FORM_CONTENT_TYPE: string;

    /**
     * The XMLHttpRequest Level two timeout delay ms property name.
     *
     * @see http://www.w3.org/TR/XMLHttpRequest/#the-timeout-attribute
     *
     * @private {string}
     * @const
     */
    var XHR2_TIMEOUT_: any /*missing*/;

    /**
     * The XMLHttpRequest Level two ontimeout handler property name.
     *
     * @see http://www.w3.org/TR/XMLHttpRequest/#the-timeout-attribute
     *
     * @private {string}
     * @const
     */
    var XHR2_ON_TIMEOUT_: any /*missing*/;

    /**
     * All non-disposed instances of goog.net.XhrIo created
     * by {@link goog.net.XhrIo.send} are in this Array.
     * @see goog.net.XhrIo.cleanup
     * @private {!Array.<!goog.net.XhrIo>}
     */
    var sendInstances_: any /*missing*/;

    /**
     * Static send that creates a short lived instance of XhrIo to send the
     * request.
     * @see goog.net.XhrIo.cleanup
     * @param {string|goog.Uri} url Uri to make request to.
     * @param {Function=} opt_callback Callback function for when request is
     *     complete.
     * @param {string=} opt_method Send method, default: GET.
     * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
     *     opt_content Body data.
     * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
     *     request.
     * @param {number=} opt_timeoutInterval Number of milliseconds after which an
     *     incomplete request will be aborted; 0 means no timeout is set.
     * @param {boolean=} opt_withCredentials Whether to send credentials with the
     *     request. Default to false. See {@link goog.net.XhrIo#setWithCredentials}.
     */
    function send(url: any /*string|goog.Uri*/, opt_callback?: Function, opt_method?: string, opt_content?: any /*ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string*/, opt_headers?: any /*Object|goog.structs.Map*/, opt_timeoutInterval?: number, opt_withCredentials?: boolean): void;

    /**
     * Disposes all non-disposed instances of goog.net.XhrIo created by
     * {@link goog.net.XhrIo.send}.
     * {@link goog.net.XhrIo.send} cleans up the goog.net.XhrIo instance
     * it creates when the request completes or fails.  However, if
     * the request never completes, then the goog.net.XhrIo is not disposed.
     * This can occur if the window is unloaded before the request completes.
     * We could have {@link goog.net.XhrIo.send} return the goog.net.XhrIo
     * it creates and make the client of {@link goog.net.XhrIo.send} be
     * responsible for disposing it in this case.  However, this makes things
     * significantly more complicated for the client, and the whole point
     * of {@link goog.net.XhrIo.send} is that it's simple and easy to use.
     * Clients of {@link goog.net.XhrIo.send} should call
     * {@link goog.net.XhrIo.cleanup} when doing final
     * cleanup on window unload.
     */
    function cleanup(): void;

    /**
     * Installs exception protection for all entry point introduced by
     * goog.net.XhrIo instances which are not protected by
     * {@link goog.debug.ErrorHandler#protectWindowSetTimeout},
     * {@link goog.debug.ErrorHandler#protectWindowSetInterval}, or
     * {@link goog.events.protectBrowserEventEntryPoint}.
     *
     * @param {goog.debug.ErrorHandler} errorHandler Error handler with which to
     *     protect the entry point(s).
     */
    function protectEntryPoints(errorHandler: goog.debug.ErrorHandler): void;
}

declare module 'goog.net.XhrLike' {

    /**
     * Typedef that refers to either native or custom-implemented XHR objects.
     * @typedef {!goog.net.XhrLike|!XMLHttpRequest}
     */
    interface OrNative { /*any (goog.net.XhrLike|XMLHttpRequest)*/ }
}

declare module 'goog.net.XmlHttp' {

    /**
     * Gets the options to use with the XMLHttpRequest objects obtained using
     * the static methods.
     * @return {Object} The options.
     */
    function getOptions(): Object;

    /**
     * Type of options that an XmlHttp object can have.
     * @enum {number}
     */
    enum OptionType { USE_NULL_FUNCTION, LOCAL_REQUEST_ERROR } 

    /**
     * Status constants for XMLHTTP, matches:
     * http://msdn.microsoft.com/library/default.asp?url=/library/
     *   en-us/xmlsdk/html/0e6a34e4-f90c-489d-acff-cb44242fafc6.asp
     * @enum {number}
     */
    enum ReadyState { UNINITIALIZED, LOADING, LOADED, INTERACTIVE, COMPLETE } 

    /**
     * Sets the factories for creating XMLHttpRequest objects and their options.
     * @param {Function} factory The factory for XMLHttpRequest objects.
     * @param {Function} optionsFactory The factory for options.
     * @deprecated Use setGlobalFactory instead.
     */
    function setFactory(factory: Function, optionsFactory: Function): void;

    /**
     * Sets the global factory object.
     * @param {!goog.net.XmlHttpFactory} factory New global factory object.
     */
    function setGlobalFactory(factory: goog.net.XmlHttpFactory): void;
}

declare module 'goog.net.FileDownloader' {

    /**
     * The error object for FileDownloader download errors.
     *
     * @param {!goog.net.FileDownloader.Download_} download The download object for
     *     the download in question.
     * @param {goog.fs.Error=} opt_fsErr The file error object, if this was a file
     *     error.
     *
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class Error extends goog.debug.Error {
        /**
         * The error object for FileDownloader download errors.
         *
         * @param {!goog.net.FileDownloader.Download_} download The download object for
         *     the download in question.
         * @param {goog.fs.Error=} opt_fsErr The file error object, if this was a file
         *     error.
         *
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor(download: goog.net.FileDownloader.Download_, opt_fsErr?: goog.fs.Error);
    
        /**
         * The status of the XHR. Only set if the error was caused by an XHR failure.
         * @type {number|undefined}
         */
        xhrStatus: any /*number|any (undefined)*/;
    
        /**
         * The error code of the XHR. Only set if the error was caused by an XHR
         * failure.
         * @type {goog.net.ErrorCode|undefined}
         */
        xhrErrorCode: any /*goog.net.ErrorCode|any (undefined)*/;
    
        /**
         * The file API error. Only set if the error was caused by the file API.
         * @type {goog.fs.Error|undefined}
         */
        fileError: any /*goog.fs.Error|any (undefined)*/;
    }
}

declare module 'goog.net.XhrManager' {

    /**
     * An event dispatched by XhrManager.
     *
     * @param {goog.net.EventType} type Event Type.
     * @param {goog.net.XhrManager} target Reference to the object that is the
     *     target of this event.
     * @param {string} id The id of the request this event is for.
     * @param {goog.net.XhrIo} xhrIo The XhrIo object of the request.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class Event extends goog.events.Event {
        /**
         * An event dispatched by XhrManager.
         *
         * @param {goog.net.EventType} type Event Type.
         * @param {goog.net.XhrManager} target Reference to the object that is the
         *     target of this event.
         * @param {string} id The id of the request this event is for.
         * @param {goog.net.XhrIo} xhrIo The XhrIo object of the request.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(type: goog.net.EventType, target: goog.net.XhrManager, id: string, xhrIo: goog.net.XhrIo);
    }

    /**
     * An encapsulation of everything needed to make a Xhr request.
     * NOTE: This is used internal to the XhrManager.
     *
     * @param {string} url Uri to make the request too.
     * @param {Function} xhrEventCallback Callback attached to the events of the
     *     XhrIo object of the request.
     * @param {string=} opt_method Send method, default: GET.
     * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
     *     opt_content Post data.
     * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
     *     request.
     * @param {Function=} opt_callback Callback function for when request is
     *     complete. NOTE: Only 1 callback supported across all events.
     * @param {number=} opt_maxRetries The maximum number of times the request
     *     should be retried (Default: 1).
     * @param {goog.net.XhrIo.ResponseType=} opt_responseType The response type of
     *     this request; defaults to goog.net.XhrIo.ResponseType.DEFAULT.
     *
     * @constructor
     * @final
     */
    class Request {
        /**
         * An encapsulation of everything needed to make a Xhr request.
         * NOTE: This is used internal to the XhrManager.
         *
         * @param {string} url Uri to make the request too.
         * @param {Function} xhrEventCallback Callback attached to the events of the
         *     XhrIo object of the request.
         * @param {string=} opt_method Send method, default: GET.
         * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
         *     opt_content Post data.
         * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
         *     request.
         * @param {Function=} opt_callback Callback function for when request is
         *     complete. NOTE: Only 1 callback supported across all events.
         * @param {number=} opt_maxRetries The maximum number of times the request
         *     should be retried (Default: 1).
         * @param {goog.net.XhrIo.ResponseType=} opt_responseType The response type of
         *     this request; defaults to goog.net.XhrIo.ResponseType.DEFAULT.
         *
         * @constructor
         * @final
         */
        constructor(url: string, xhrEventCallback: Function, opt_method?: string, opt_content?: any /*ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string*/, opt_headers?: any /*Object|goog.structs.Map*/, opt_callback?: Function, opt_maxRetries?: number, opt_responseType?: goog.net.XhrIo.ResponseType);
    
        /**
         * Gets the uri.
         * @return {string} The uri to make the request to.
         */
        getUrl(): string;
    
        /**
         * Gets the send method.
         * @return {string} The send method.
         */
        getMethod(): string;
    
        /**
         * Gets the post data.
         * @return {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string|undefined}
         *     The post data.
         */
        getContent(): any /*ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string|any (undefined)*/;
    
        /**
         * Gets the map of headers.
         * @return {Object|goog.structs.Map} The map of headers.
         */
        getHeaders(): any /*Object|goog.structs.Map*/;
    
        /**
         * Gets the maximum number of times the request should be retried.
         * @return {number} The maximum number of times the request should be retried.
         */
        getMaxRetries(): number;
    
        /**
         * Gets the number of attempts so far.
         * @return {number} The number of attempts so far.
         */
        getAttemptCount(): number;
    
        /**
         * Increases the number of attempts so far.
         */
        increaseAttemptCount(): void;
    
        /**
         * Returns whether the request has reached the maximum number of retries.
         * @return {boolean} Whether the request has reached the maximum number of
         *     retries.
         */
        hasReachedMaxRetries(): boolean;
    
        /**
         * Sets the completed status.
         * @param {boolean} complete The completed status.
         */
        setCompleted(complete: boolean): void;
    
        /**
         * Gets the completed status.
         * @return {boolean} The completed status.
         */
        getCompleted(): boolean;
    
        /**
         * Sets the aborted status.
         * @param {boolean} aborted True if the request was aborted, otherwise False.
         */
        setAborted(aborted: boolean): void;
    
        /**
         * Gets the aborted status.
         * @return {boolean} True if request was aborted, otherwise False.
         */
        getAborted(): boolean;
    
        /**
         * Gets the callback attached to the events of the XhrIo object.
         * @return {Function} The callback attached to the events of the
         *     XhrIo object.
         */
        getXhrEventCallback(): Function;
    
        /**
         * Gets the callback for when the request is complete.
         * @return {Function|undefined} The callback for when the request is complete.
         */
        getCompleteCallback(): any /*Function|any (undefined)*/;
    
        /**
         * Gets the response type that will be set on this request's XhrIo when it's
         * available.
         * @return {!goog.net.XhrIo.ResponseType} The response type to be set
         *     when an XhrIo becomes available to this request.
         */
        getResponseType(): goog.net.XhrIo.ResponseType;
    }
}

