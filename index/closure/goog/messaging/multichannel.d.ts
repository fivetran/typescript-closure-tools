// Generated Fri May  2 11:37:51 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
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
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/messaging/messagechannel.d.ts" />

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

