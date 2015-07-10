/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/eventtarget.d.ts" />
/// <reference path="../mockcontrol.d.ts" />

declare module goog.testing.messaging {

    class MockMessagePort extends MockMessagePort__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MockMessagePort__Class extends goog.events.EventTarget__Class  { 
    
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
             * An opaque identifier, used because message ports otherwise have no
             * distinguishing characteristics.
             * @type {*}
             */
            id: any;
    
            /**
             * Whether or not the port has been started.
             * @type {boolean}
             */
            started: boolean;
    
            /**
             * Whether or not the port has been closed.
             * @type {boolean}
             */
            closed: boolean;
    
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
    
}
