/// <reference path="../../../../globals.d.ts" />
/// <reference path="./transport.d.ts" />
/// <reference path="./crosspagechannel.d.ts" />
/// <reference path="../../dom/dom.d.ts" />

declare module goog.net.xpc {

    class NativeMessagingTransport extends NativeMessagingTransport.__Class { }
    module NativeMessagingTransport {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.net.xpc.Transport.__Class {
    
            /**
             * The native messaging transport
             *
             * Uses document.postMessage() to send messages to other documents.
             * Receiving is done by listening on 'message'-events on the document.
             *
             * @param {goog.net.xpc.CrossPageChannel} channel The channel this
             *     transport belongs to.
             * @param {string} peerHostname The hostname (protocol, domain, and port) of the
             *     peer.
             * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for
             *     finding the correct window/document.
             * @param {boolean=} opt_oneSidedHandshake If this is true, only the outer
             *     transport sends a SETUP message and expects a SETUP_ACK.  The inner
             *     transport goes connected when it receives the SETUP.
             * @param {number=} opt_protocolVersion Which version of its setup protocol the
             *     transport should use.  The default is '2'.
             * @constructor
             * @extends {goog.net.xpc.Transport}
             * @final
             */
            constructor(channel: goog.net.xpc.CrossPageChannel, peerHostname: string, opt_domHelper?: goog.dom.DomHelper, opt_oneSidedHandshake?: boolean, opt_protocolVersion?: number);
        }
    }
}
