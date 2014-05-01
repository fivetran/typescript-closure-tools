// Generated Thu May  1 12:36:04 PDT 2014

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
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />

declare module goog.net.WebSocket {

    /**
     * The events fired by the web socket.
     * @enum {string} The event types for the web socket.
     */
    enum EventType { CLOSED, ERROR, MESSAGE, OPENED } 

    /**
     * Installs exception protection for all entry points introduced by
     * goog.net.WebSocket instances which are not protected by
     * {@link goog.debug.ErrorHandler#protectWindowSetTimeout},
     * {@link goog.debug.ErrorHandler#protectWindowSetInterval}, or
     * {@link goog.events.protectBrowserEventEntryPoint}.
     *
     * @param {!goog.debug.ErrorHandler} errorHandler Error handler with which to
     *     protect the entry points.
     */
    function protectEntryPoints(errorHandler: goog.debug.ErrorHandler): void;

    /**
     * Object representing a new incoming message event.
     *
     * @param {string} message The raw message coming from the web socket.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class MessageEvent extends goog.events.Event {
        /**
         * Object representing a new incoming message event.
         *
         * @param {string} message The raw message coming from the web socket.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(message: string);
    }

    /**
     * Object representing an error event. This is fired whenever an error occurs
     * on the web socket.
     *
     * @param {string} data The error data.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class ErrorEvent extends goog.events.Event {
        /**
         * Object representing an error event. This is fired whenever an error occurs
         * on the web socket.
         *
         * @param {string} data The error data.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(data: string);
    }
}

declare module goog.net {

    /**
     * Class encapsulating the logic for using a WebSocket.
     *
     * @param {boolean=} opt_autoReconnect True if the web socket should
     *     automatically reconnect or not.  This is true by default.
     * @param {function(number):number=} opt_getNextReconnect A function for
     *     obtaining the time until the next reconnect attempt. Given the reconnect
     *     attempt count (which is a positive integer), the function should return a
     *     positive integer representing the milliseconds to the next reconnect
     *     attempt.  The default function used is an exponential back-off. Note that
     *     this function is never called if auto reconnect is disabled.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class WebSocket extends goog.events.EventTarget {
        /**
         * Class encapsulating the logic for using a WebSocket.
         *
         * @param {boolean=} opt_autoReconnect True if the web socket should
         *     automatically reconnect or not.  This is true by default.
         * @param {function(number):number=} opt_getNextReconnect A function for
         *     obtaining the time until the next reconnect attempt. Given the reconnect
         *     attempt count (which is a positive integer), the function should return a
         *     positive integer representing the milliseconds to the next reconnect
         *     attempt.  The default function used is an exponential back-off. Note that
         *     this function is never called if auto reconnect is disabled.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(opt_autoReconnect?: boolean, opt_getNextReconnect?: (_0: number) => number);
    
        /**
         * Creates and opens the actual WebSocket.  Only call this after attaching the
         * appropriate listeners to this object.  If listeners aren't registered, then
         * the {@code goog.net.WebSocket.EventType.OPENED} event might be missed.
         *
         * @param {string} url The URL to which to connect.
         * @param {string=} opt_protocol The subprotocol to use.  The connection will
         *     only be established if the server reports that it has selected this
         *     subprotocol. The subprotocol name must all be a non-empty ASCII string
         *     with no control characters and no spaces in them (i.e. only characters
         *     in the range U+0021 to U+007E).
         */
        open(url: string, opt_protocol?: string): void;
    
        /**
         * Closes the web socket connection.
         */
        close(): void;
    
        /**
         * Sends the message over the web socket.
         *
         * @param {string} message The message to send.
         */
        send(message: string): void;
    
        /**
         * Checks to see if the web socket is open or not.
         *
         * @return {boolean} True if the web socket is open, false otherwise.
         */
        isOpen(): boolean;
    }
}

