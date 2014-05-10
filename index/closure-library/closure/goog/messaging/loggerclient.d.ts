/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />
/// <reference path="./messagechannel.d.ts" />

declare module goog.messaging {

    class LoggerClient extends __LoggerClient { }
    class __LoggerClient extends goog.__Disposable {
    
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
    }
}
