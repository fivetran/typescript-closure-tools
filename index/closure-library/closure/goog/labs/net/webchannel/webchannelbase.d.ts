/// <reference path="../../../../../globals.d.ts" />
/// <reference path="./channel.d.ts" />
/// <reference path="../webchannel.d.ts" />
/// <reference path="./connectionstate.d.ts" />

declare module goog.labs.net.webChannel {

    class WebChannelBase extends WebChannelBase.__Class { }
    module WebChannelBase {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.labs.net.webChannel.Channel {
    
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
            constructor(opt_options?: goog.net.WebChannel.Options, opt_clientVersion?: string, opt_conn?: goog.labs.net.webChannel.ConnectionState);
        }
    }
}
