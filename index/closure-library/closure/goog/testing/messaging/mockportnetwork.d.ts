/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../messaging/portnetwork.d.ts" />
/// <reference path="../mockcontrol.d.ts" />
/// <reference path="../../messaging/messagechannel.d.ts" />

declare module goog.testing.messaging {

    class MockPortNetwork extends MockPortNetwork.__Class { }
    module MockPortNetwork {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.messaging.PortNetwork {
    
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
             * Returns a message channel that communicates with the named context. If no
             * such port exists, an error will either be thrown immediately or after a round
             * trip with the operator, depending on whether this pool is the operator or a
             * caller.
             *
             * If context A calls dial('B') and context B calls dial('A'), the two
             * ports returned will be connected to one another.
             *
             * @param {string} name The name of the context to get.
             * @return {goog.messaging.MessageChannel} The channel communicating with the
             *     given context. This is either a {@link goog.messaging.PortChannel} or a
             *     decorator around a PortChannel, so it's safe to send {@link MessagePorts}
             *     across it. This will be disposed along with the PortNetwork.
             */
            dial(name: string): goog.messaging.MessageChannel;
        }
    }
}
