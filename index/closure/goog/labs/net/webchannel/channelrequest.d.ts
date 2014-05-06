/// <reference path="../../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../../../closure/goog/net/errorcode.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchannel/requeststats.d.ts" />
/// <reference path="../../../../../closure/goog/async/throttle.d.ts" />
/// <reference path="../../../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../../../closure/goog/net/xhrlike.d.ts" />
/// <reference path="../../../../../closure/goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../../../closure/goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../../../closure/goog/net/xmlhttp.d.ts" />
/// <reference path="../../../../../closure/goog/net/eventtype.d.ts" />

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

