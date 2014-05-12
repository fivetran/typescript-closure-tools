/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/eventtarget.d.ts" />
/// <reference path="../mockcontrol.d.ts" />

declare module goog.testing.messaging {

    class MockMessagePort extends MockMessagePort.__Class { }
    module MockMessagePort {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
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
    }
}
