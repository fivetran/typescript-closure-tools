/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />

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
    interface WebChannel extends EventTarget {
    
        /**
         * Open the WebChannel against the URI specified in the constructor.
         */
        open: any /*missing*/;
    
        /**
         * Close the WebChannel.
         */
        close: any /*missing*/;
    
        /**
         * Sends a message to the server that maintains the other end point of
         * the WebChannel.
         *
         * @param {!goog.net.WebChannel.MessageData} message The message to send.
         */
        send(message: goog.net.WebChannel.MessageData): void;
    
        /**
         * @return {!goog.net.WebChannel.RuntimeProperties} The runtime properties
         * of the WebChannel instance.
         */
        getRuntimeProperties(): goog.net.WebChannel.RuntimeProperties;
    }
}

declare module goog.net.WebChannel {

    /**
     * The readonly runtime properties of the WebChannel instance.
     *
     * This class is defined for debugging and monitoring purposes, and for
     * optimization functions that the application may choose to manage by itself.
     *
     * @interface
     */
    interface RuntimeProperties {
    
        /**
         * @return {number} The effective request limit for the channel.
         */
        getSpdyRequestLimit(): number;
    
        /**
         * This method may be used by the application to stop ack of received messages
         * as a means of enabling or disabling flow-control on the server-side.
         *
         * @param {boolean} enabled If true, enable flow-control behavior on the
         * server side. Setting it to false will cancel ay previous enabling action.
         */
        setServerFlowControl(enabled: boolean): void;
    
        /**
         * This method may be used by the application to throttle the rate of outgoing
         * messages, as a means of sender initiated flow-control.
         *
         * @return {number} The total number of messages that have not received
         * ack from the server and therefore remain in the buffer.
         */
        getNonAckedMessageCount(): number;
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
    interface Options {
        messageHeaders: any /*{ [key: string]: string }|any (undefined)*/;
        messageUrlParams: any /*{ [key: string]: string }|any (undefined)*/;
        spdyRequestLimit: any /*number|any (undefined)*/;
        supportsCrossDomainXhr: any /*boolean|any (undefined)*/;
        testUrl: any /*string|any (undefined)*/
    }

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
}

