// Generated Wed Apr 30 16:32:11 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/async.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/json.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/log.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/promise.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/testing.d.ts" />
/// <reference path="../goog/timer.d.ts" />
/// <reference path="../goog/uri.d.ts" />
/// <reference path="../goog/useragent.d.ts" />
/// <reference path="../lib/closure-library/third_party/closure/goog/mochikit/async.d.ts" />

declare module 'goog.messaging' {

    /**
     * Creates a bidirectional pipe between two message channels.
     *
     * @param {goog.messaging.MessageChannel} channel1 The first channel.
     * @param {goog.messaging.MessageChannel} channel2 The second channel.
     */
    function pipe(channel1: goog.messaging.MessageChannel, channel2: goog.messaging.MessageChannel): void;

    /**
     * @interface
     */
    interface MessageChannel {
        connect(opt_connectCb?: Function): void;
        isConnected(): boolean;
        registerService(serviceName: string, callback: (_0: any /*string|Object*/) => any /*missing*/, opt_objectPayload?: boolean): void;
        registerDefaultService(callback: (_0: string, _1: any /*string|Object*/) => any /*missing*/): void;
        send(serviceName: string, payload: any /*string|Object*/): void;
    }

    /**
     * @interface
     */
    interface PortNetwork {
        dial(name: string): goog.messaging.MessageChannel;
    }

    /**
     * Creates an abstract message channel.
     *
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.messaging.MessageChannel}
     */
    class AbstractChannel extends goog.Disposable implements goog.messaging.MessageChannel {
        /**
         * Creates an abstract message channel.
         *
         * @constructor
         * @extends {goog.Disposable}
         * @implements {goog.messaging.MessageChannel}
         */
        constructor();
    
        /**
         * Logger for this class.
         * @type {goog.log.Logger}
         * @protected
         */
        logger: goog.log.Logger;
    
        /**
         * Immediately calls opt_connectCb if given, and is otherwise a no-op. If
         * subclasses have configuration that needs to happen before the channel is
         * connected, they should override this and {@link #isConnected}.
         * @override
         */
        connect(): void;
    
        /**
         * Always returns true. If subclasses have configuration that needs to happen
         * before the channel is connected, they should override this and
         * {@link #connect}.
         * @override
         */
        isConnected(): void;
    
        /** @override */
        registerService(): void;
    
        /** @override */
        registerDefaultService(): void;
    
        /** @override */
        send: any /*missing*/;
    
        /**
         * Delivers a message to the appropriate service. This is meant to be called by
         * subclasses when they receive messages.
         *
         * This method takes into account both explicitly-registered and default
         * services, as well as making sure that JSON payloads are decoded when
         * necessary. If the subclass is capable of passing objects as payloads, those
         * objects can be passed in to this method directly. Otherwise, the (potentially
         * JSON-encoded) strings should be passed in.
         *
         * @param {string} serviceName The name of the service receiving the message.
         * @param {string|!Object} payload The contents of the message.
         * @protected
         */
        deliver(serviceName: string, payload: any /*string|Object*/): void;
    
        /**
         * Find the service object for a given service name. If there's no service
         * explicitly registered, but there is a default service, a service object is
         * constructed for it.
         *
         * @param {string} serviceName The name of the service receiving the message.
         * @param {string|!Object} payload The contents of the message.
         * @return {?{callback: function((string|!Object)), objectPayload: boolean}} The
         *     service object for the given service, or null if none was found.
         * @protected
         */
        getService(serviceName: string, payload: any /*string|Object*/): { callback: (_0: any /*string|Object*/) => any /*missing*/, objectPayload: boolean };
    
        /**
         * Converts the message payload into the format expected by the registered
         * service (either JSON or string).
         *
         * @param {string} serviceName The name of the service receiving the message.
         * @param {string|!Object} payload The contents of the message.
         * @param {boolean} objectPayload Whether the service expects an object or a
         *     plain string.
         * @return {string|Object} The payload in the format expected by the service, or
         *     null if something went wrong.
         * @protected
         */
        decodePayload(serviceName: string, payload: any /*string|Object*/, objectPayload: boolean): any /*string|Object*/;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Creates a new BufferedChannel, which operates like its underlying channel
     * except that it buffers calls to send until it receives a message from its
     * peer claiming that the peer is ready to receive.  The peer is also expected
     * to be a BufferedChannel, though this is not enforced.
     *
     * @param {!goog.messaging.MessageChannel} messageChannel The MessageChannel
     *     we're wrapping.
     * @param {number=} opt_interval Polling interval for sending ready
     *     notifications to peer, in ms.  Default is 50.
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.messaging.MessageChannel};
     * @final
     */
    class BufferedChannel extends goog.Disposable implements goog.messaging.MessageChannel {
        /**
         * Creates a new BufferedChannel, which operates like its underlying channel
         * except that it buffers calls to send until it receives a message from its
         * peer claiming that the peer is ready to receive.  The peer is also expected
         * to be a BufferedChannel, though this is not enforced.
         *
         * @param {!goog.messaging.MessageChannel} messageChannel The MessageChannel
         *     we're wrapping.
         * @param {number=} opt_interval Polling interval for sending ready
         *     notifications to peer, in ms.  Default is 50.
         * @constructor
         * @extends {goog.Disposable}
         * @implements {goog.messaging.MessageChannel};
         * @final
         */
        constructor(messageChannel: goog.messaging.MessageChannel, opt_interval?: number);
    
        /** @override */
        connect(): void;
    
        /** @override */
        isConnected(): void;
    
        /**
         * @return {boolean} Whether the channel's peer is ready.
         */
        isPeerReady(): boolean;
    
        /** @override */
        registerService(): void;
    
        /** @override */
        registerDefaultService(): void;
    
        /**
         * Send a message over the channel.  If the peer is not ready, the message will
         * be buffered and sent once we've received a ready message from our peer.
         *
         * @param {string} serviceName The name of the service this message should be
         *     delivered to.
         * @param {string|!Object} payload The value of the message. If this is an
         *     Object, it is serialized to JSON before sending.  It's the responsibility
         *     of implementors of this class to perform the serialization.
         * @see goog.net.xpc.BufferedChannel.send
         * @override
         */
        send(serviceName: string, payload: any /*string|Object*/): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Creates a new DeferredChannel, which wraps a deferred MessageChannel and
     * enqueues messages to be sent once the wrapped channel is resolved.
     *
     * @param {!goog.async.Deferred} deferredChannel The underlying deferred
     *     MessageChannel.
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.messaging.MessageChannel}
     * @final
     */
    class DeferredChannel extends goog.Disposable implements goog.messaging.MessageChannel {
        /**
         * Creates a new DeferredChannel, which wraps a deferred MessageChannel and
         * enqueues messages to be sent once the wrapped channel is resolved.
         *
         * @param {!goog.async.Deferred} deferredChannel The underlying deferred
         *     MessageChannel.
         * @constructor
         * @extends {goog.Disposable}
         * @implements {goog.messaging.MessageChannel}
         * @final
         */
        constructor(deferredChannel: goog.async.Deferred);
    
        /**
         * Cancels the wrapped Deferred.
         */
        cancel(): void;
    
        /** @override */
        connect(): void;
    
        /** @override */
        isConnected(): void;
    
        /** @override */
        registerService(): void;
    
        /** @override */
        registerDefaultService(): void;
    
        /** @override */
        send(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Creates a logger client that sends messages along a message channel for the
     * remote end to log. The remote end of the channel should use a
     * {goog.messaging.LoggerServer} with the same service name.
     *
     * @param {!goog.messaging.MessageChannel} channel The channel that on which to
     *     send the log messages.
     * @param {string} serviceName The name of the logging service to use.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class LoggerClient extends goog.Disposable {
        /**
         * Creates a logger client that sends messages along a message channel for the
         * remote end to log. The remote end of the channel should use a
         * {goog.messaging.LoggerServer} with the same service name.
         *
         * @param {!goog.messaging.MessageChannel} channel The channel that on which to
         *     send the log messages.
         * @param {string} serviceName The name of the logging service to use.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(channel: goog.messaging.MessageChannel, serviceName: string);
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Creates a logger server that logs messages on behalf of the remote end of a
     * message channel. The remote end of the channel should use a
     * {goog.messaging.LoggerClient} with the same service name.
     *
     * @param {!goog.messaging.MessageChannel} channel The channel that is sending
     *     the log messages.
     * @param {string} serviceName The name of the logging service to listen for.
     * @param {string=} opt_channelName The name of this channel. Used to help
     *     distinguish this client's messages.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class LoggerServer extends goog.Disposable {
        /**
         * Creates a logger server that logs messages on behalf of the remote end of a
         * message channel. The remote end of the channel should use a
         * {goog.messaging.LoggerClient} with the same service name.
         *
         * @param {!goog.messaging.MessageChannel} channel The channel that is sending
         *     the log messages.
         * @param {string} serviceName The name of the logging service to listen for.
         * @param {string=} opt_channelName The name of this channel. Used to help
         *     distinguish this client's messages.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(channel: goog.messaging.MessageChannel, serviceName: string, opt_channelName?: string);
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Creates a new MultiChannel wrapping a single MessageChannel. The
     * underlying channel shouldn't have any other listeners registered, but it
     * should be connected.
     *
     * Note that the other side of the channel should also be connected to a
     * MultiChannel with the same number of virtual channels.
     *
     * @param {goog.messaging.MessageChannel} underlyingChannel The underlying
     *     channel to use as transport for the virtual channels.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class MultiChannel extends goog.Disposable {
        /**
         * Creates a new MultiChannel wrapping a single MessageChannel. The
         * underlying channel shouldn't have any other listeners registered, but it
         * should be connected.
         *
         * Note that the other side of the channel should also be connected to a
         * MultiChannel with the same number of virtual channels.
         *
         * @param {goog.messaging.MessageChannel} underlyingChannel The underlying
         *     channel to use as transport for the virtual channels.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(underlyingChannel: goog.messaging.MessageChannel);
    
        /**
         * Creates a new virtual channel that will communicate across the underlying
         * channel.
         * @param {string} name The name of the virtual channel. Must be unique for this
         *     MultiChannel. Cannot contain colons.
         * @return {!goog.messaging.MultiChannel.VirtualChannel} The new virtual
         *     channel.
         */
        createVirtualChannel(name: string): goog.messaging.MultiChannel.VirtualChannel;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * The leaf node of a network.
     *
     * @param {!goog.messaging.MessageChannel} operatorPort The channel for
     *     communicating with the operator. The other side of this channel should be
     *     passed to {@link goog.messaging.PortOperator#addPort}. Must be either a
     *     {@link goog.messaging.PortChannel} or a decorator wrapping a PortChannel;
     *     in particular, it must be able to send and receive {@link MessagePort}s.
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.messaging.PortNetwork}
     * @final
     */
    class PortCaller extends goog.Disposable implements goog.messaging.PortNetwork {
        /**
         * The leaf node of a network.
         *
         * @param {!goog.messaging.MessageChannel} operatorPort The channel for
         *     communicating with the operator. The other side of this channel should be
         *     passed to {@link goog.messaging.PortOperator#addPort}. Must be either a
         *     {@link goog.messaging.PortChannel} or a decorator wrapping a PortChannel;
         *     in particular, it must be able to send and receive {@link MessagePort}s.
         * @constructor
         * @extends {goog.Disposable}
         * @implements {goog.messaging.PortNetwork}
         * @final
         */
        constructor(operatorPort: goog.messaging.MessageChannel);
    
        /** @override */
        dial(): void;
    
        /** @override */
        disposeInternal(): void;
    }

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
    class PortChannel extends goog.messaging.AbstractChannel {
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
        constructor(underlyingPort: any /*MessagePort|WebWorker*/);
    
        /**
         * Logger for this class.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
    
        /**
         * Sends a message over the channel.
         *
         * As an addition to the basic MessageChannel send API, PortChannels can send
         * objects that contain MessagePorts. Note that only plain Objects and Arrays,
         * not their subclasses, can contain MessagePorts.
         *
         * As per {@link http://www.w3.org/TR/html5/comms.html#clone-a-port}, once a
         * port is copied to be sent across a channel, the original port will cease
         * being able to send or receive messages.
         *
         * @override
         * @param {string} serviceName The name of the service this message should be
         *     delivered to.
         * @param {string|!Object|!MessagePort} payload The value of the message. May
         *     contain MessagePorts or be a MessagePort.
         */
        send(serviceName: string, payload: any /*string|Object|MessagePort*/): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * The central node of a PortNetwork.
     *
     * @param {string} name The name of this node.
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.messaging.PortNetwork}
     * @final
     */
    class PortOperator extends goog.Disposable implements goog.messaging.PortNetwork {
        /**
         * The central node of a PortNetwork.
         *
         * @param {string} name The name of this node.
         * @constructor
         * @extends {goog.Disposable}
         * @implements {goog.messaging.PortNetwork}
         * @final
         */
        constructor(name: string);
    
        /** @override */
        dial(): void;
    
        /**
         * Adds a caller to the network with the given name. This port should have no
         * services registered on it. It will be disposed along with the PortOperator.
         *
         * @param {string} name The name of the port to add.
         * @param {!goog.messaging.MessageChannel} port The port to add. Must be either
         *     a {@link goog.messaging.PortChannel} or a decorator wrapping a
         *     PortChannel; in particular, it must be able to send and receive
         *     {@link MessagePort}s.
         */
        addPort(name: string, port: goog.messaging.MessageChannel): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Creates a new RespondingChannel wrapping a single MessageChannel.
     * @param {goog.messaging.MessageChannel} messageChannel The messageChannel to
     *     to wrap and allow for responses. This channel must not have any existing
     *     services registered. All service registration must be done through the
     *     {@link RespondingChannel#registerService} api instead. The other end of
     *     channel must also be a RespondingChannel.
     * @constructor
     * @extends {goog.Disposable}
     */
    class RespondingChannel extends goog.Disposable {
        /**
         * Creates a new RespondingChannel wrapping a single MessageChannel.
         * @param {goog.messaging.MessageChannel} messageChannel The messageChannel to
         *     to wrap and allow for responses. This channel must not have any existing
         *     services registered. All service registration must be done through the
         *     {@link RespondingChannel#registerService} api instead. The other end of
         *     channel must also be a RespondingChannel.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor(messageChannel: goog.messaging.MessageChannel);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Sends a message over the channel.
         * @param {string} serviceName The name of the service this message should be
         *     delivered to.
         * @param {string|!Object} payload The value of the message. If this is an
         *     Object, it is serialized to a string before sending if necessary.
         * @param {function(?Object)} callback The callback invoked with
         *     the result of the service call.
         */
        send(serviceName: string, payload: any /*string|Object*/, callback: (_0: Object) => any /*missing*/): void;
    
        /**
         * Registers a service to be called when a message is received.
         * @param {string} serviceName The name of the service.
         * @param {function(!Object)} callback The callback to process the
         *     incoming messages. Passed the payload.
         */
        registerService(serviceName: string, callback: (_0: Object) => any /*missing*/): void;
    }
}

declare module 'goog.messaging.PortChannel' {

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

declare module 'goog.messaging.PortNetwork' {

    /**
     * The name of the service exported by the operator for creating a connection
     * between two callers.
     *
     * @type {string}
     * @const
     */
    var REQUEST_CONNECTION_SERVICE: string;

    /**
     * The name of the service exported by the callers for adding a connection to
     * another context.
     *
     * @type {string}
     * @const
     */
    var GRANT_CONNECTION_SERVICE: string;
}

declare module 'goog.messaging.MultiChannel' {

    /**
     * A message channel that proxies its messages over another underlying channel.
     *
     * @param {goog.messaging.MultiChannel} parent The MultiChannel
     *     which created this channel, and which contains the underlying
     *     MessageChannel that's used as the transport.
     * @param {string} name The name of this virtual channel. Unique among the
     *     virtual channels in parent.
     * @constructor
     * @implements {goog.messaging.MessageChannel}
     * @extends {goog.Disposable}
     * @final
     */
    class VirtualChannel extends goog.Disposable implements goog.messaging.MessageChannel {
        /**
         * A message channel that proxies its messages over another underlying channel.
         *
         * @param {goog.messaging.MultiChannel} parent The MultiChannel
         *     which created this channel, and which contains the underlying
         *     MessageChannel that's used as the transport.
         * @param {string} name The name of this virtual channel. Unique among the
         *     virtual channels in parent.
         * @constructor
         * @implements {goog.messaging.MessageChannel}
         * @extends {goog.Disposable}
         * @final
         */
        constructor(parent: goog.messaging.MultiChannel, name: string);
    
        /**
         * This is a no-op, since the underlying channel is expected to already be
         * initialized when it's passed in.
         *
         * @override
         */
        connect(): void;
    
        /**
         * This always returns true, since the underlying channel is expected to already
         * be initialized when it's passed in.
         *
         * @override
         */
        isConnected(): void;
    
        /**
         * @override
         */
        registerService(): void;
    
        /**
         * @override
         */
        registerDefaultService(): void;
    
        /**
         * @override
         */
        send(): void;
    
        /** @override */
        disposeInternal(): void;
    }
}

