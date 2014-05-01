// Generated Wed Apr 30 16:38:28 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/async.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/json.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/log.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/net.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/promise.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />
/// <reference path="../../goog/testing.d.ts" />
/// <reference path="../../goog/timer.d.ts" />
/// <reference path="../../goog/uri.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.labs.net.image' {

    /**
     * Loads a single image.  Useful for preloading images.
     *
     * @param {string} uri URI of the image.
     * @param {(!Image|function(): !Image)=} opt_image If present, instead of
     *     creating a new Image instance the function will use the passed Image
     *     instance or the result of calling the Image factory respectively. This
     *     can be used to control exactly how Image instances are created, for
     *     example if they should be created in a particular document element, or
     *     have fields that will trigger CORS image fetches.
     * @return {!goog.Promise.<!Image>} A Promise that will be resolved with the
     *     given image if the image successfully loads.
     */
    function load(uri: string, opt_image?: any /*Image|() => Image*/): goog.Promise<Image>;
}

declare module 'goog.net.WebChannel' {

    /**
     * Configuration spec for newly created WebChannel instances.
     *
     * WebChannels are configured in the context of the containing
     * {@link WebChannelTransport}. The configuration parameters are specified
     * when a new instance of WebChannel is created via {@link WebChannelTransport}.
     *
     * messageHeaders: custom headers to be added to every message sent to the
     * server.
     *
     * messageUrlParams: custom url query parameters to be added to every message
     * sent to the server.
     *
     * spdyRequestLimit: the maximum number of in-flight HTTP requests allowed
     * when SPDY is enabled. Currently we only detect SPDY in Chrome.
     * This parameter defaults to 10. When SPDY is not enabled, this parameter
     * will have no effect.
     *
     * supportsCrossDomainXhr: setting this to true to allow the use of sub-domains
     * (as configured by the server) to send XHRs with the CORS withCredentials
     * bit set to true.
     *
     * testUrl: the test URL for detecting connectivity during the initial
     * handshake. This parameter defaults to "/<channel_url>/test".
     *
     *
     * @typedef {{
     *   messageHeaders: (!Object.<string, string>|undefined),
     *   messageUrlParams: (!Object.<string, string>|undefined),
     *   spdyRequestLimit: (number|undefined),
     *   supportsCrossDomainXhr: (boolean|undefined),
     *   testUrl: (string|undefined)
     * }}
     */
    var Options: any /*missing*/;

    /**
     * Types that are allowed as message data.
     *
     * @typedef {(ArrayBuffer|Blob|Object.<string, string>|Array)}
     */
    interface MessageData { /*any (ArrayBuffer|Blob|{ [key: string]: string }|any[])*/ }

    /**
     * Common events fired by WebChannels.
     * @enum {string}
     */
    enum EventType { OPEN, CLOSE, ERROR, MESSAGE } 

    /**
     * WebChannel level error conditions.
     * @enum {number}
     */
    enum ErrorStatus { OK, NETWORK_ERROR, SERVER_ERROR } 

    /**
     * The readonly runtime properties of the WebChannel instance.
     *
     * This class is defined for debugging and monitoring purposes, and for
     * optimization functions that the application may choose to manage by itself.
     *
     * @interface
     */
    interface RuntimeProperties {
        getSpdyRequestLimit: any /*missing*/;
        setServerFlowControl: any /*missing*/;
        getNonAckedMessageCount: any /*missing*/;
    }

    /**
     * The event interface for the MESSAGE event.
     *
     * @constructor
     * @extends {goog.events.Event}
     */
    class MessageEvent extends goog.events.Event {
        /**
         * The event interface for the MESSAGE event.
         *
         * @constructor
         * @extends {goog.events.Event}
         */
        constructor();
    
        /**
         * The content of the message received from the server.
         *
         * @type {!goog.net.WebChannel.MessageData}
         */
        data: goog.net.WebChannel.MessageData;
    }

    /**
     * The event interface for the ERROR event.
     *
     * @constructor
     * @extends {goog.events.Event}
     */
    class ErrorEvent extends goog.events.Event {
        /**
         * The event interface for the ERROR event.
         *
         * @constructor
         * @extends {goog.events.Event}
         */
        constructor();
    
        /**
         * The error status.
         *
         * @type {!goog.net.WebChannel.ErrorStatus}
         */
        status: goog.net.WebChannel.ErrorStatus;
    }
}

declare module 'goog.net' {

    /**
     * Create a new WebChannelTransport instance using the default implementation.
     *
     * @return {!goog.net.WebChannelTransport} the newly created transport instance.
     */
    var createWebChannelTransport: any /*missing*/;

    /**
     * A WebChannel represents a logical bi-directional channel over which the
     * client communicates with a remote server that holds the other endpoint
     * of the channel. A WebChannel is always created in the context of a shared
     * {@link WebChannelTransport} instance. It is up to the underlying client-side
     * and server-side implementations to decide how or when multiplexing is
     * to be enabled.
     *
     * @interface
     * @extends {EventTarget}
     */
    interface WebChannel {
        open: any /*missing*/;
        close: any /*missing*/;
        send: any /*missing*/;
        getRuntimeProperties: any /*missing*/;
    }

    /**
     * A WebChannelTransport instance represents a shared context of logical
     * connectivity between a browser client and a remote origin.
     *
     * Over a single WebChannelTransport instance, multiple WebChannels may be
     * created against different URLs, which may all share the same
     * underlying connectivity (i.e. TCP connection) whenever possible.
     *
     * When multi-domains are supported, such as CORS, multiple origins may be
     * supported over a single WebChannelTransport instance at the same time.
     *
     * Sharing between different window contexts such as tabs is not addressed
     * by WebChannelTransport. Applications may choose HTML5 shared workers
     * or other techniques to access the same transport instance
     * across different window contexts.
     *
     * @interface
     */
    interface WebChannelTransport {
        createWebChannel: any /*missing*/;
    }
}

