// Generated Mon May  5 10:59:28 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/messaging/messagechannel.d.ts" />

declare module goog.messaging {

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
    }
}

declare module goog.messaging.MultiChannel {

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
    }
}

