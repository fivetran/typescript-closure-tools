// Generated Wed Apr 30 22:45:05 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />

declare module goog.net.WebChannel {

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

declare module goog.net {

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
}

