// Generated Thu May  1 21:07:13 PDT 2014

/// <reference path="../../../../goog/base.d.ts" />
/// <reference path="../../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../../goog/debug/error.d.ts" />
/// <reference path="../../../../goog/string/string.d.ts" />
/// <reference path="../../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../../goog/events/eventid.d.ts" />
/// <reference path="../../../../goog/events/listenable.d.ts" />
/// <reference path="../../../../goog/events/listener.d.ts" />
/// <reference path="../../../../goog/object/object.d.ts" />
/// <reference path="../../../../goog/array/array.d.ts" />
/// <reference path="../../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../../goog/events/event.d.ts" />
/// <reference path="../../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../../goog/events/events.d.ts" />
/// <reference path="../../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../../goog/timer/timer.d.ts" />
/// <reference path="../../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../../goog/net/errorcode.d.ts" />
/// <reference path="../../../../goog/labs/net/webchannel/requeststats.d.ts" />
/// <reference path="../../../../goog/async/throttle.d.ts" />
/// <reference path="../../../../goog/uri/utils.d.ts" />
/// <reference path="../../../../goog/net/xhrlike.d.ts" />
/// <reference path="../../../../goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../../goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../../goog/net/xmlhttp.d.ts" />
/// <reference path="../../../../goog/net/eventtype.d.ts" />

declare module goog.labs.net.webChannel {

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
}

