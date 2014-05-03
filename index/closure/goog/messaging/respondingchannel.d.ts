// Generated Fri May  2 14:59:03 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
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
/// <reference path="../../goog/messaging/multichannel.d.ts" />

declare module goog.messaging {

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
    class RespondingChannel extends goog.GoogDisposable {
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

