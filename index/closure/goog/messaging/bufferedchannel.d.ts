// Generated Wed Apr 30 22:40:42 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/uri/utils.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/uri/uri.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/messaging/messagechannel.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/messaging/multichannel.d.ts" />

declare module goog.messaging {

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
    
        /**
         * @return {boolean} Whether the channel's peer is ready.
         */
        isPeerReady(): boolean;
    }
}

