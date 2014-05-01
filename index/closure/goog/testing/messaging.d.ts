// Generated Wed Apr 30 16:39:57 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/json.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/log.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/messaging.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />
/// <reference path="../../goog/style.d.ts" />
/// <reference path="../../goog/testing.d.ts" />
/// <reference path="../../goog/testing/events.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.testing.messaging.MockMessageEvent' {

    /**
     * Wraps a new fake MessageEvent in a BrowserEvent, like how a real MessageEvent
     * would be wrapped.
     *
     * @param {*} data The data of the message.
     * @param {string=} opt_origin The origin of the message, for server-sent and
     *     cross-document events.
     * @param {string=} opt_lastEventId The last event ID, for server-sent events.
     * @param {Window=} opt_source The proxy for the source window, for
     *     cross-document events.
     * @param {Array.<MessagePort>=} opt_ports The Array of ports sent with the
     *     message, for cross-document and channel events.
     * @return {!goog.events.BrowserEvent} The wrapping event.
     */
    function wrap(data: any, opt_origin?: string, opt_lastEventId?: string, opt_source?: Window, opt_ports?: MessagePort[]): goog.events.BrowserEvent;
}

declare module 'goog.testing.messaging' {

    /**
     * Class for unit-testing code that communicates over a MessageChannel.
     * @param {goog.testing.MockControl} mockControl The mock control used to create
     *   the method mock for #send.
     * @extends {goog.messaging.AbstractChannel}
     * @constructor
     * @final
     */
    class MockMessageChannel extends goog.messaging.AbstractChannel {
        /**
         * Class for unit-testing code that communicates over a MessageChannel.
         * @param {goog.testing.MockControl} mockControl The mock control used to create
         *   the method mock for #send.
         * @extends {goog.messaging.AbstractChannel}
         * @constructor
         * @final
         */
        constructor(mockControl: goog.testing.MockControl);
    
        /**
         * A mock send function. Actually an instance of
         * {@link goog.testing.FunctionMock}.
         * @param {string} serviceName The name of the remote service to run.
         * @param {string|!Object} payload The payload to send to the remote page.
         * @override
         */
        send(serviceName: string, payload: any /*string|Object*/): void;
    
        /**
         * Sets a flag indicating that this is disposed.
         * @override
         */
        dispose(): void;
    
        /**
         * Mocks the receipt of a message. Passes the payload the appropriate service.
         * @param {string} serviceName The service to run.
         * @param {string|!Object} payload The argument to pass to the service.
         */
        receive(serviceName: string, payload: any /*string|Object*/): void;
    }

    /**
     * Creates a new fake MessageEvent.
     *
     * @param {*} data The data of the message.
     * @param {string=} opt_origin The origin of the message, for server-sent and
     *     cross-document events.
     * @param {string=} opt_lastEventId The last event ID, for server-sent events.
     * @param {Window=} opt_source The proxy for the source window, for
     *     cross-document events.
     * @param {Array.<MessagePort>=} opt_ports The Array of ports sent with the
     *     message, for cross-document and channel events.
     * @extends {goog.testing.events.Event}
     * @constructor
     * @final
     */
    class MockMessageEvent extends goog.testing.events.Event {
        /**
         * Creates a new fake MessageEvent.
         *
         * @param {*} data The data of the message.
         * @param {string=} opt_origin The origin of the message, for server-sent and
         *     cross-document events.
         * @param {string=} opt_lastEventId The last event ID, for server-sent events.
         * @param {Window=} opt_source The proxy for the source window, for
         *     cross-document events.
         * @param {Array.<MessagePort>=} opt_ports The Array of ports sent with the
         *     message, for cross-document and channel events.
         * @extends {goog.testing.events.Event}
         * @constructor
         * @final
         */
        constructor(data: any, opt_origin?: string, opt_lastEventId?: string, opt_source?: Window, opt_ports?: MessagePort[]);
    }

    /**
     * Class for unit-testing code that uses MessagePorts.
     * @param {*} id An opaque identifier, used because message ports otherwise have
     *     no distinguishing characteristics.
     * @param {goog.testing.MockControl} mockControl The mock control used to create
     *     the method mock for #postMessage.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class MockMessagePort extends goog.events.EventTarget {
        /**
         * Class for unit-testing code that uses MessagePorts.
         * @param {*} id An opaque identifier, used because message ports otherwise have
         *     no distinguishing characteristics.
         * @param {goog.testing.MockControl} mockControl The mock control used to create
         *     the method mock for #postMessage.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(id: any, mockControl: goog.testing.MockControl);
    
        /**
         * A mock postMessage funciton. Actually an instance of
         * {@link goog.testing.FunctionMock}.
         * @param {*} message The message to send.
         * @param {Array.<MessagePort>=} opt_ports Ports to send with the message.
         */
        postMessage(message: any, opt_ports?: MessagePort[]): void;
    
        /**
         * Starts the port.
         */
        start(): void;
    
        /**
         * Closes the port.
         */
        close(): void;
    }

    /**
     * The fake PortNetwork.
     *
     * @param {!goog.testing.MockControl} mockControl The mock control for creating
     *     the mock message channels.
     * @constructor
     * @implements {goog.messaging.PortNetwork}
     * @final
     */
    class MockPortNetwork implements goog.messaging.PortNetwork {
        /**
         * The fake PortNetwork.
         *
         * @param {!goog.testing.MockControl} mockControl The mock control for creating
         *     the mock message channels.
         * @constructor
         * @implements {goog.messaging.PortNetwork}
         * @final
         */
        constructor(mockControl: goog.testing.MockControl);
    
        /**
         * Get the mock port with the given name.
         * @param {string} name The name of the port to get.
         * @return {!goog.testing.messaging.MockMessageChannel} The mock port.
         * @override
         */
        dial(name: string): goog.testing.messaging.MockMessageChannel;
    }
}

