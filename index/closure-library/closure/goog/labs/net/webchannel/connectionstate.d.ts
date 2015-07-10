/// <reference path="../../../../../globals.d.ts" />

declare module goog.labs.net.webChannel {

    class ConnectionState extends ConnectionState__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ConnectionState__Class  { 
    
            /**
             * The connectivity state of the channel.
             *
             * @constructor
             * @struct
             */
            constructor();
    
            /**
             * Handshake result.
             * @type {Array.<string>}
             */
            handshakeResult: string[];
    
            /**
             * The result of checking if there is a buffering proxy in the network.
             * True means the connection is buffered, False means unbuffered,
             * null means that the result is not available.
             * @type {?boolean}
             */
            bufferingProxyResult: boolean;
    } 
    
}
