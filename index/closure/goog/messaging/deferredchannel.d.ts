// Generated Fri May  2 14:59:06 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/promise/resolver.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/testing/watchers.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/async/nexttick.d.ts" />
/// <reference path="../../goog/async/run.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/promise/promise.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/messaging/messagechannel.d.ts" />

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

