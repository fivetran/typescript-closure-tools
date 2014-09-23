/// <reference path="../../../globals.d.ts" />
/// <reference path="./abstractchannel.d.ts" />
/// <reference path="../timer/timer.d.ts" />
/// <reference path="./deferredchannel.d.ts" />
/// <reference path="./messagechannel.d.ts" />

declare module goog.messaging {

    class PortChannel extends PortChannel.__Class { }
    module PortChannel {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.messaging.AbstractChannel.__Class {

            /**
             * A wrapper for several types of HTML5 message-passing entities
             * ({@link MessagePort}s and {@link WebWorker}s). This class implements the
             * {@link goog.messaging.MessageChannel} interface.
             *
             * This class can be used in conjunction with other communication on the port.
             * It sets {@link goog.messaging.PortChannel.FLAG} to true on all messages it
             * sends.
             *
             * @param {!MessagePort|!WebWorker} underlyingPort The message-passing
             *     entity to wrap. If this is a {@link MessagePort}, it should be started.
             *     The remote end should also be wrapped in a PortChannel. This will be
             *     disposed along with the PortChannel; this means terminating it if it's a
             *     worker or removing it from the DOM if it's an iframe.
             * @constructor
             * @extends {goog.messaging.AbstractChannel}
             * @final
             */
            constructor(underlyingPort:MessagePort);
        }
    }
}

declare module goog.messaging.PortChannel {

    /**
     * Create a PortChannel that communicates with a window embedded in the current
     * page (e.g. an iframe contentWindow). The code within the window should call
     * {@link forGlobalWindow} to establish the connection.
     *
     * It's possible to use this channel in conjunction with other messages to the
     * embedded window. However, only one PortChannel should be used for a given
     * window at a time.
     *
     * @param {!Window} window The window object to communicate with.
     * @param {string} peerOrigin The expected origin of the window. See
     *     http://dev.w3.org/html5/postmsg/#dom-window-postmessage.
     * @param {goog.Timer=} opt_timer The timer that regulates how often the initial
     *     connection message is attempted. This will be automatically disposed once
     *     the connection is established, or when the connection is cancelled.
     * @return {!goog.messaging.DeferredChannel} The PortChannel. Although this is
     *     not actually an instance of the PortChannel class, it will behave like
     *     one in that MessagePorts may be sent across it. The DeferredChannel may
     *     be cancelled before a connection is established in order to abort the
     *     attempt to make a connection.
     */
    function forEmbeddedWindow(window: Window, peerOrigin: string, opt_timer?: goog.Timer): goog.messaging.DeferredChannel;

    /**
     * Create a PortChannel that communicates with the document in which this window
     * is embedded (e.g. within an iframe). The enclosing document should call
     * {@link forEmbeddedWindow} to establish the connection.
     *
     * It's possible to use this channel in conjunction with other messages posted
     * to the global window. However, only one PortChannel should be used for the
     * global window at a time.
     *
     * @param {string} peerOrigin The expected origin of the enclosing document. See
     *     http://dev.w3.org/html5/postmsg/#dom-window-postmessage.
     * @return {!goog.messaging.MessageChannel} The PortChannel. Although this may
     *     not actually be an instance of the PortChannel class, it will behave like
     *     one in that MessagePorts may be sent across it.
     */
    function forGlobalWindow(peerOrigin: string): goog.messaging.MessageChannel;

    /**
     * The flag added to messages that are sent by a PortChannel, and are meant to
     * be handled by one on the other side.
     * @type {string}
     */
    var FLAG: string;
}
