/// <reference path="../../../../../globals.d.ts" />
/// <reference path="../webchanneltransport.d.ts" />
/// <reference path="../webchannel.d.ts" />

declare module goog.labs.net.webChannel {

    class WebChannelBaseTransport extends WebChannelBaseTransport__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class WebChannelBaseTransport__Class implements goog.net.WebChannelTransport  { 
    
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
             * Transport specific error code is not to be propagated with the event.
             */
            status: any /*missing*/;
    
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
