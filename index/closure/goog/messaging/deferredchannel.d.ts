// Generated Mon May  5 10:59:36 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/messaging/messagechannel.d.ts" />

declare module goog.messaging {

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
    }
}

