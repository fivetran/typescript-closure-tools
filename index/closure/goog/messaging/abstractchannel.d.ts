// Generated Mon May  5 10:59:30 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/messaging/messagechannel.d.ts" />

declare module goog.messaging {

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
        getService(serviceName: string, payload: any /*string|Object*/): { callback: (_0: any /*string|Object*/) => any /*missing*/; objectPayload: boolean };
    
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
    }
}

