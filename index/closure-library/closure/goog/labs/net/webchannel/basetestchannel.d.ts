/// <reference path="../../../../../globals.d.ts" />
/// <reference path="./channel.d.ts" />
/// <reference path="./webchanneldebug.d.ts" />

declare module goog.labs.net.webChannel {

    class BaseTestChannel extends BaseTestChannel.__Class { }
    module BaseTestChannel {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.labs.net.webChannel.Channel {
    
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
}
