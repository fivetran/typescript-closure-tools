/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../../closure/goog/net/xpc/xpc.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />

declare module goog.net.xpc {

    /**
     * The base class for transports.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for
     *     finding the window objects.
     * @constructor
     * @extends {goog.Disposable};
     */
    class Transport {
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
         * @return {Window} The window to use.
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

