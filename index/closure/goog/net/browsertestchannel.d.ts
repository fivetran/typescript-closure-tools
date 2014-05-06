/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/net/errorcode.d.ts" />
/// <reference path="../../../closure/goog/async/throttle.d.ts" />
/// <reference path="../../../closure/goog/net/xhrlike.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttp.d.ts" />
/// <reference path="../../../closure/goog/net/eventtype.d.ts" />
/// <reference path="../../../closure/goog/net/channelrequest.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/string/stringifier.d.ts" />
/// <reference path="../../../closure/goog/string/parser.d.ts" />
/// <reference path="../../../closure/goog/json/processor.d.ts" />
/// <reference path="../../../closure/goog/json/evaljsonprocessor.d.ts" />
/// <reference path="../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/uri/uri.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/net/channeldebug.d.ts" />
/// <reference path="../../../closure/goog/net/tmpnetwork.d.ts" />

declare module goog.net {

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
}

