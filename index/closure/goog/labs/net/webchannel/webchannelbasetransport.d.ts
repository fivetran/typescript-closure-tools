/// <reference path="../../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchannel/connectionstate.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchannel/channel.d.ts" />
/// <reference path="../../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../../closure/goog/events/event.d.ts" />
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
/// <reference path="../../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchannel/requeststats.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchannel/wire.d.ts" />
/// <reference path="../../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../../../closure/goog/net/errorcode.d.ts" />
/// <reference path="../../../../../closure/goog/async/throttle.d.ts" />
/// <reference path="../../../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../../../closure/goog/net/xhrlike.d.ts" />
/// <reference path="../../../../../closure/goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../../../closure/goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../../../closure/goog/net/xmlhttp.d.ts" />
/// <reference path="../../../../../closure/goog/net/eventtype.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchannel/channelrequest.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchannel/basetestchannel.d.ts" />
/// <reference path="../../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../../closure/goog/uri/uri.d.ts" />
/// <reference path="../../../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchannel/webchanneldebug.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchannel/netutils.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchannel/forwardchannelrequestpool.d.ts" />
/// <reference path="../../../../../closure/goog/string/stringifier.d.ts" />
/// <reference path="../../../../../closure/goog/string/parser.d.ts" />
/// <reference path="../../../../../closure/goog/json/processor.d.ts" />
/// <reference path="../../../../../closure/goog/json/evaljsonprocessor.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchannel/wirev8.d.ts" />
/// <reference path="../../../../../closure/goog/debug/relativetimeprovider.d.ts" />
/// <reference path="../../../../../closure/goog/debug/formatter.d.ts" />
/// <reference path="../../../../../closure/goog/structs/circularbuffer.d.ts" />
/// <reference path="../../../../../closure/goog/net/httpstatus.d.ts" />
/// <reference path="../../../../../closure/goog/net/xhrio.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchannel/webchannelbase.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchanneltransport.d.ts" />
/// <reference path="../../../../../closure/goog/string/path.d.ts" />
/// <reference path="../../../../../closure/goog/labs/net/webchannel.d.ts" />

declare module goog.labs.net.webChannel {

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
    
        /**
         * Create a new WebChannel instance.
         *
         * The new WebChannel is to be opened against the server-side resource
         * as specified by the given URL. See {@link goog.net.WebChannel} for detailed
         * semantics.
         *
         * @param {string} url The URL path for the new WebChannel instance.
         * @param {!goog.net.WebChannel.Options=} opt_options Configuration for the
         *     new WebChannel instance. The configuration object is reusable after
         *     the new channel instance is created.
         * @return {!goog.net.WebChannel} the newly created WebChannel instance.
         */
        createWebChannel(url: string, opt_options?: goog.net.WebChannel.Options): goog.net.WebChannel;
    }
}

