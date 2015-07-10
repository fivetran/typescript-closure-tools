/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/event.d.ts" />

declare module goog.net {

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

    class MessageEvent extends MessageEvent__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MessageEvent__Class extends goog.events.Event__Class  { 
    
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
    

    class ErrorEvent extends ErrorEvent__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ErrorEvent__Class extends goog.events.Event__Class  { 
    
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
    

    interface RuntimeProperties {
    
        /**
          * @return {number} The effective limit for the number of concurrent HTTP
          * requests that are allowed to be made for sending messages from the client
          * to the server. When SPDY is not enabled, this limit will be one.
          */
        getConcurrentRequestLimit(): number;
    
        /**
          * For applications that need support multiple channels (e.g. from
          * different tabs) to the same origin, use this method to decide if SPDY is
          * enabled and therefore it is safe to open multiple channels.
          *
          * If SPDY is disabled, the application may choose to limit the number of active
          * channels to one or use other means such as sub-domains to work around
          * the browser connection limit.
          *
          * @return {boolean} Whether SPDY is enabled for the origin against which
          * the channel is created.
          */
        isSpdyEnabled(): boolean;
    
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
     * concurrentRequestLimit: the maximum number of in-flight HTTP requests allowed
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
     *   concurrentRequestLimit: (number|undefined),
     *   supportsCrossDomainXhr: (boolean|undefined),
     *   testUrl: (string|undefined)
     * }}
     */
    interface Options {
        messageHeaders: { [key: string]: string }|any /*undefined*/;
        messageUrlParams: { [key: string]: string }|any /*undefined*/;
        concurrentRequestLimit: number|any /*undefined*/;
        supportsCrossDomainXhr: boolean|any /*undefined*/;
        testUrl: string|any /*undefined*/
    }

    /**
     * Types that are allowed as message data.
     *
     * @typedef {(ArrayBuffer|Blob|Object.<string, string>|Array)}
     */
    type MessageData = ArrayBuffer|Blob|{ [key: string]: string }|any[];

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
