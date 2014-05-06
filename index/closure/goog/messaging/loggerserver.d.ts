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
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />

declare module goog.messaging {

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
    }
}

