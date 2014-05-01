// Generated Thu May  1 12:36:23 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/net/xpc/xpc.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />

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
        transportServiceHandler: any /*missing*/;
    
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
        send: any /*missing*/;
    }
}

