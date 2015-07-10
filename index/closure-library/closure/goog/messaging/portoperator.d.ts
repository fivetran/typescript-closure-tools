/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />
/// <reference path="./portnetwork.d.ts" />
/// <reference path="./messagechannel.d.ts" />

declare module goog.messaging {

    class PortOperator extends PortOperator__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class PortOperator__Class extends goog.Disposable__Class implements goog.messaging.PortNetwork  { 
    
            /**
             * The central node of a PortNetwork.
             *
             * @param {string} name The name of this node.
             * @constructor
             * @extends {goog.Disposable}
             * @implements {goog.messaging.PortNetwork}
             * @final
             */
            constructor(name: string);
    
            /**
             * Adds a caller to the network with the given name. This port should have no
             * services registered on it. It will be disposed along with the PortOperator.
             *
             * @param {string} name The name of the port to add.
             * @param {!goog.messaging.MessageChannel} port The port to add. Must be either
             *     a {@link goog.messaging.PortChannel} or a decorator wrapping a
             *     PortChannel; in particular, it must be able to send and receive
             *     {@link MessagePort}s.
             */
            addPort(name: string, port: goog.messaging.MessageChannel): void;
    
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
