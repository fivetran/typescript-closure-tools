// Generated Thu May  1 17:25:33 PDT 2014

/// <reference path="../../../../goog/base.d.ts" />
/// <reference path="../../../../goog/events/eventid.d.ts" />
/// <reference path="../../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../../goog/events/event.d.ts" />
/// <reference path="../../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../../goog/debug/error.d.ts" />
/// <reference path="../../../../goog/string/string.d.ts" />
/// <reference path="../../../../goog/asserts/asserts.d.ts" />
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
/// <reference path="../../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../../goog/events/events.d.ts" />
/// <reference path="../../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../../goog/labs/net/webchannel/requeststats.d.ts" />
/// <reference path="../../../../goog/labs/net/webchannel/channel.d.ts" />
/// <reference path="../../../../goog/timer/timer.d.ts" />
/// <reference path="../../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../../goog/net/errorcode.d.ts" />
/// <reference path="../../../../goog/async/throttle.d.ts" />
/// <reference path="../../../../goog/uri/utils.d.ts" />
/// <reference path="../../../../goog/net/xhrlike.d.ts" />
/// <reference path="../../../../goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../../goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../../goog/net/xmlhttp.d.ts" />
/// <reference path="../../../../goog/net/eventtype.d.ts" />
/// <reference path="../../../../goog/labs/net/webchannel/channelrequest.d.ts" />

declare module goog.labs.net.webChannel {

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
}

