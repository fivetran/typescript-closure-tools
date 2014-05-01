// Generated Wed Apr 30 16:38:33 PDT 2014

/// <reference path="../../../goog.d.ts" />
/// <reference path="../../../goog/array.d.ts" />
/// <reference path="../../../goog/asserts.d.ts" />
/// <reference path="../../../goog/async.d.ts" />
/// <reference path="../../../goog/debug.d.ts" />
/// <reference path="../../../goog/disposable.d.ts" />
/// <reference path="../../../goog/dom.d.ts" />
/// <reference path="../../../goog/events.d.ts" />
/// <reference path="../../../goog/functions.d.ts" />
/// <reference path="../../../goog/iter.d.ts" />
/// <reference path="../../../goog/json.d.ts" />
/// <reference path="../../../goog/labs/net.d.ts" />
/// <reference path="../../../goog/labs/useragent.d.ts" />
/// <reference path="../../../goog/log.d.ts" />
/// <reference path="../../../goog/math.d.ts" />
/// <reference path="../../../goog/net.d.ts" />
/// <reference path="../../../goog/object.d.ts" />
/// <reference path="../../../goog/reflect.d.ts" />
/// <reference path="../../../goog/string.d.ts" />
/// <reference path="../../../goog/structs.d.ts" />
/// <reference path="../../../goog/timer.d.ts" />
/// <reference path="../../../goog/uri.d.ts" />
/// <reference path="../../../goog/useragent.d.ts" />

declare module 'goog.labs.net.webChannel' {

    /**
     * Shared interface between Channel and TestChannel to support callbacks
     * between WebChannelBase and BaseTestChannel and between Channel and
     * ChannelRequest.
     *
     * @interface
     */
    interface Channel {
    }

    /**
     * The interface class.
     *
     * @interface
     */
    interface Wire {
    }

    /**
     * A TestChannel is used during the first part of channel negotiation
     * with the server to create the channel. It helps us determine whether we're
     * behind a buffering proxy.
     *
     * @constructor
     * @struct
     * @param {!goog.labs.net.webChannel.Channel} channel The channel
     *     that owns this test channel.
     * @param {!goog.labs.net.webChannel.WebChannelDebug} channelDebug A
     *     WebChannelDebug instance to use for logging.
     * @implements {goog.labs.net.webChannel.Channel}
     */
    class BaseTestChannel implements goog.labs.net.webChannel.Channel {
        /**
         * A TestChannel is used during the first part of channel negotiation
         * with the server to create the channel. It helps us determine whether we're
         * behind a buffering proxy.
         *
         * @constructor
         * @struct
         * @param {!goog.labs.net.webChannel.Channel} channel The channel
         *     that owns this test channel.
         * @param {!goog.labs.net.webChannel.WebChannelDebug} channelDebug A
         *     WebChannelDebug instance to use for logging.
         * @implements {goog.labs.net.webChannel.Channel}
         */
        constructor(channel: goog.labs.net.webChannel.Channel, channelDebug: goog.labs.net.webChannel.WebChannelDebug);
    }

    /**
     * A new ChannelRequest is created for each request to the server.
     *
     * @param {goog.labs.net.webChannel.Channel} channel
     *     The channel that owns this request.
     * @param {goog.labs.net.webChannel.WebChannelDebug} channelDebug A
     *     WebChannelDebug to use for logging.
     * @param {string=} opt_sessionId The session id for the channel.
     * @param {string|number=} opt_requestId The request id for this request.
     * @param {number=} opt_retryId The retry id for this request.
     * @constructor
     * @struct
     * @final
     */
    class ChannelRequest {
        /**
         * A new ChannelRequest is created for each request to the server.
         *
         * @param {goog.labs.net.webChannel.Channel} channel
         *     The channel that owns this request.
         * @param {goog.labs.net.webChannel.WebChannelDebug} channelDebug A
         *     WebChannelDebug to use for logging.
         * @param {string=} opt_sessionId The session id for the channel.
         * @param {string|number=} opt_requestId The request id for this request.
         * @param {number=} opt_retryId The retry id for this request.
         * @constructor
         * @struct
         * @final
         */
        constructor(channel: goog.labs.net.webChannel.Channel, channelDebug: goog.labs.net.webChannel.WebChannelDebug, opt_sessionId?: string, opt_requestId?: any /*string|number*/, opt_retryId?: number);
    }

    /**
     * The connectivity state of the channel.
     *
     * @constructor
     * @struct
     */
    class ConnectionState {
        /**
         * The connectivity state of the channel.
         *
         * @constructor
         * @struct
         */
        constructor();
    }

    /**
     * This class represents the state of all forward channel requests.
     *
     * @param {number=} opt_maxPoolSize The maximum pool size.
     *
     * @constructor
     * @final
     */
    class ForwardChannelRequestPool {
        /**
         * This class represents the state of all forward channel requests.
         *
         * @param {number=} opt_maxPoolSize The maximum pool size.
         *
         * @constructor
         * @final
         */
        constructor(opt_maxPoolSize?: number);
    }

    /**
     * This WebChannel implementation is branched off goog.net.BrowserChannel
     * for now. Ongoing changes to goog.net.BrowserChannel will be back
     * ported to this implementation as needed.
     *
     * @param {!goog.net.WebChannel.Options=} opt_options Configuration for the
     *        WebChannel instance.
     * @param {string=} opt_clientVersion An application-specific version number
     *        that is sent to the server when connected.
     * @param {!ConnectionState=} opt_conn Previously determined connection
     *        conditions.
     * @constructor
     * @struct
     * @implements {goog.labs.net.webChannel.Channel}
     */
    class WebChannelBase implements goog.labs.net.webChannel.Channel {
        /**
         * This WebChannel implementation is branched off goog.net.BrowserChannel
         * for now. Ongoing changes to goog.net.BrowserChannel will be back
         * ported to this implementation as needed.
         *
         * @param {!goog.net.WebChannel.Options=} opt_options Configuration for the
         *        WebChannel instance.
         * @param {string=} opt_clientVersion An application-specific version number
         *        that is sent to the server when connected.
         * @param {!ConnectionState=} opt_conn Previously determined connection
         *        conditions.
         * @constructor
         * @struct
         * @implements {goog.labs.net.webChannel.Channel}
         */
        constructor(opt_options?: goog.net.WebChannel.Options, opt_clientVersion?: string, opt_conn?: ConnectionState);
    }

    /**
     * Implementation of {@link goog.net.WebChannelTransport} with
     * {@link goog.labs.net.webChannel.WebChannelBase} as the underlying channel
     * implementation.
     *
     * @constructor
     * @struct
     * @implements {goog.net.WebChannelTransport}
     * @final
     */
    class WebChannelBaseTransport implements goog.net.WebChannelTransport {
        /**
         * Implementation of {@link goog.net.WebChannelTransport} with
         * {@link goog.labs.net.webChannel.WebChannelBase} as the underlying channel
         * implementation.
         *
         * @constructor
         * @struct
         * @implements {goog.net.WebChannelTransport}
         * @final
         */
        constructor();
    }

    /**
     * Logs and keeps a buffer of debugging info for the Channel.
     *
     * @constructor
     * @struct
     * @final
     */
    class WebChannelDebug {
        /**
         * Logs and keeps a buffer of debugging info for the Channel.
         *
         * @constructor
         * @struct
         * @final
         */
        constructor();
    }

    /**
     * The v8 codec class.
     *
     * @constructor
     * @struct
     */
    class WireV8 {
        /**
         * The v8 codec class.
         *
         * @constructor
         * @struct
         */
        constructor();
    }
}

