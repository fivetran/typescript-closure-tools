/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../disposable/disposable.d.ts" />
/// <reference path="../../dom/dom.d.ts" />

declare module goog.net.xpc {

    class Transport extends Transport__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Transport__Class  { 
    
            /**
             * The base class for transports.
             * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for
             *     finding the window objects.
             * @constructor
             * @extends {goog.Disposable};
             */
            constructor(opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * The transport type.
             * @type {number}
             * @protected
             */
            transportType: number;
    
            /**
             * @return {number} The transport type identifier.
             */
            getType(): number;
    
            /**
             * Returns the window associated with this transport instance.
             * @return {!Window} The window to use.
             */
            getWindow(): Window;
    
            /**
             * Return the transport name.
             * @return {string} the transport name.
             */
            getName(): string;
    
            /**
             * Handles transport service messages (internal signalling).
             * @param {string} payload The message content.
             */
            transportServiceHandler(payload: string): void;
    
            /**
             * Connects this transport.
             * The transport implementation is expected to call
             * CrossPageChannel.prototype.notifyConnected when the channel is ready
             * to be used.
             */
            connect: any /*missing*/;
    
            /**
             * Sends a message.
             * @param {string} service The name off the service the message is to be
             * delivered to.
             * @param {string} payload The message content.
             */
            send(service: string, payload: string): void;
    } 
    
}
