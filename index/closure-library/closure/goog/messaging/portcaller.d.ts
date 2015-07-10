/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />
/// <reference path="./portnetwork.d.ts" />
/// <reference path="./messagechannel.d.ts" />

declare module goog.messaging {

    class PortCaller extends PortCaller__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class PortCaller__Class extends goog.Disposable__Class implements goog.messaging.PortNetwork  { 
    
            /**
             * The leaf node of a network.
             *
             * @param {!goog.messaging.MessageChannel} operatorPort The channel for
             *     communicating with the operator. The other side of this channel should be
             *     passed to {@link goog.messaging.PortOperator#addPort}. Must be either a
             *     {@link goog.messaging.PortChannel} or a decorator wrapping a PortChannel;
             *     in particular, it must be able to send and receive {@link MessagePort}s.
             * @constructor
             * @extends {goog.Disposable}
             * @implements {goog.messaging.PortNetwork}
             * @final
             */
            constructor(operatorPort: goog.messaging.MessageChannel);
    
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
