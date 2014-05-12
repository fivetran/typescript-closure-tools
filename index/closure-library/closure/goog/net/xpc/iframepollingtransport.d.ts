/// <reference path="../../../../globals.d.ts" />
/// <reference path="./transport.d.ts" />
/// <reference path="./crosspagechannel.d.ts" />
/// <reference path="../../dom/dom.d.ts" />

declare module goog.net.xpc {

    class IframePollingTransport extends IframePollingTransport.__Class { }
    module IframePollingTransport {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.net.xpc.Transport.__Class {
    
            /**
             * Iframe polling transport. Uses hidden iframes to transfer data
             * in the fragment identifier of the URL. The peer polls the iframe's location
             * for changes.
             * Unfortunately, in Safari this screws up the history, because Safari doesn't
             * allow to call location.replace() on a window containing a document from a
             * different domain (last version tested: 2.0.4).
             *
             * @param {goog.net.xpc.CrossPageChannel} channel The channel this
             *     transport belongs to.
             * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
             *     the correct window.
             * @constructor
             * @extends {goog.net.xpc.Transport}
             * @final
             */
            constructor(channel: goog.net.xpc.CrossPageChannel, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Determines whether the channel is still available. The channel is
             * unavailable if the transport was disposed or the peer is no longer
             * available.
             * @return {boolean} Whether the channel is available.
             */
            isChannelAvailable(): boolean;
    
            /**
             * Processes an incoming message.
             * @param {string} raw The complete received string.
             */
            processIncomingMsg(raw: string): void;
    
            /**
             * Process an incoming acknowdedgement.
             * @param {string} msgStr The incoming ack string to process.
             */
            processIncomingAck(msgStr: string): void;
        }
    }
}

declare module goog.net.xpc.IframePollingTransport {

    class Sender extends Sender.__Class { }
    module Sender {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * goog.net.xpc.IframePollingTransport.Sender
             *
             * Utility class to send message-parts to a document from a different origin.
             *
             * @constructor
             * @param {string} url The url the other document will use for polling.
             * @param {Object} windowObj The frame used for sending information to.
             * @final
             */
            constructor(url: string, windowObj: Object);
    
            /**
             * Sends a message-part (frame) to the peer.
             * The message-part is encoded and put in the fragment identifier
             * of the URL used for sending (and belongs to the origin/domain of the peer).
             * @param {string} payload The message to send.
             */
            send(payload: string): void;
        }
    }

    class Receiver extends Receiver.__Class { }
    module Receiver {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * goog.net.xpc.IframePollingTransport.Receiver
             *
             * @constructor
             * @param {goog.net.xpc.IframePollingTransport} transport The transport to
             *     receive from.
             * @param {Object} windowObj The window-object to poll for location-changes.
             * @param {Function} callback The callback-function to be called when
             *     location has changed.
             * @final
             */
            constructor(transport: goog.net.xpc.IframePollingTransport, windowObj: Object, callback: Function);
    
            /**
             * Polls the location of the receiver-frame for changes.
             * @return {boolean} Whether a change has been detected.
             */
            receive(): boolean;
        }
    }

    /**
     * The string used to prefix all iframe names and IDs.
     * @type {string}
     */
    var IFRAME_PREFIX: string;
}
