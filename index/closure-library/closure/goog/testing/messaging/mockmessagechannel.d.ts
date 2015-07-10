/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../messaging/abstractchannel.d.ts" />
/// <reference path="../mockcontrol.d.ts" />

declare module goog.testing.messaging {

    class MockMessageChannel extends MockMessageChannel__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MockMessageChannel__Class extends goog.messaging.AbstractChannel__Class  { 
    
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
             * Whether the channel has been disposed.
             * @type {boolean}
             */
            disposed: boolean;
    
            /**
             * Mocks the receipt of a message. Passes the payload the appropriate service.
             * @param {string} serviceName The service to run.
             * @param {string|!Object} payload The argument to pass to the service.
             */
            receive(serviceName: string, payload: string|Object): void;
    } 
    
}
