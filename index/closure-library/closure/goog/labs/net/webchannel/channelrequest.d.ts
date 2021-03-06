/// <reference path="../../../../../globals.d.ts" />
/// <reference path="./channel.d.ts" />
/// <reference path="./webchanneldebug.d.ts" />

declare module goog.labs.net.webChannel {

    class ChannelRequest extends ChannelRequest__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ChannelRequest__Class  { 
    
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
            constructor(channel: goog.labs.net.webChannel.Channel, channelDebug: goog.labs.net.webChannel.WebChannelDebug, opt_sessionId?: string, opt_requestId?: string|number, opt_retryId?: number);
    } 
    
}
