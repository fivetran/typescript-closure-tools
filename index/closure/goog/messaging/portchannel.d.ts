// Generated Fri May  2 10:38:20 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/promise/resolver.d.ts" />
/// <reference path="../../goog/testing/watchers.d.ts" />
/// <reference path="../../goog/async/nexttick.d.ts" />
/// <reference path="../../goog/async/run.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/promise/promise.d.ts" />
/// <reference path="../../goog/messaging/messagechannel.d.ts" />
/// <reference path="../../goog/messaging/deferredchannel.d.ts" />
/// <reference path="../../goog/json/json.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/messaging/abstractchannel.d.ts" />

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

declare module goog.messaging {

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
    }
}

