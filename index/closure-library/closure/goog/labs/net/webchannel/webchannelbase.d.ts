/// <reference path="../../../../../globals.d.ts" />
/// <reference path="./channel.d.ts" />

declare module goog.labs.net.webChannel {

    class WebChannelBase extends __WebChannelBase { }
    class __WebChannelBase implements goog.labs.net.webChannel.Channel {
    
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
}
