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
/// <reference path="../../../../closure/goog/net/xpc/crosspagechannelrole.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/net/xpc/transport.d.ts" />

declare module goog.net.xpc {

    /**
     * Iframe polling transport. Uses hidden iframes to transfer data
     * in the fragment identifier of the URL. The peer polls the iframe's location
     * for changes.
     * Unfortunately, in Safari this screws up the history, because Safari doesn't
     * allow to call location.replace() on a window containing a document from a
     * different domain (last version tested: 2.0.4).
     *
     * @param {goog.net.xpc.CrossPageChannel} channel The channel this
     *     transport belongs to.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
     *     the correct window.
     * @constructor
     * @extends {goog.net.xpc.Transport}
     * @final
     */
    class IframePollingTransport extends goog.net.xpc.Transport {
        /**
         * Iframe polling transport. Uses hidden iframes to transfer data
         * in the fragment identifier of the URL. The peer polls the iframe's location
         * for changes.
         * Unfortunately, in Safari this screws up the history, because Safari doesn't
         * allow to call location.replace() on a window containing a document from a
         * different domain (last version tested: 2.0.4).
         *
         * @param {goog.net.xpc.CrossPageChannel} channel The channel this
         *     transport belongs to.
         * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
         *     the correct window.
         * @constructor
         * @extends {goog.net.xpc.Transport}
         * @final
         */
        constructor(channel: goog.net.xpc.CrossPageChannel, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Determines whether the channel is still available. The channel is
         * unavailable if the transport was disposed or the peer is no longer
         * available.
         * @return {boolean} Whether the channel is available.
         */
        isChannelAvailable(): boolean;
    
        /**
         * Processes an incoming message.
         * @param {string} raw The complete received string.
         */
        processIncomingMsg(raw: string): void;
    
        /**
         * Process an incoming acknowdedgement.
         * @param {string} msgStr The incoming ack string to process.
         */
        processIncomingAck(msgStr: string): void;
    }
}

declare module goog.net.xpc.IframePollingTransport {

    /**
     * goog.net.xpc.IframePollingTransport.Sender
     *
     * Utility class to send message-parts to a document from a different origin.
     *
     * @constructor
     * @param {string} url The url the other document will use for polling.
     * @param {Object} windowObj The frame used for sending information to.
     * @final
     */
    class Sender {
        /**
         * goog.net.xpc.IframePollingTransport.Sender
         *
         * Utility class to send message-parts to a document from a different origin.
         *
         * @constructor
         * @param {string} url The url the other document will use for polling.
         * @param {Object} windowObj The frame used for sending information to.
         * @final
         */
        constructor(url: string, windowObj: Object);
    
        /**
         * Sends a message-part (frame) to the peer.
         * The message-part is encoded and put in the fragment identifier
         * of the URL used for sending (and belongs to the origin/domain of the peer).
         * @param {string} payload The message to send.
         */
        send(payload: string): void;
    }

    /**
     * goog.net.xpc.IframePollingTransport.Receiver
     *
     * @constructor
     * @param {goog.net.xpc.IframePollingTransport} transport The transport to
     *     receive from.
     * @param {Object} windowObj The window-object to poll for location-changes.
     * @param {Function} callback The callback-function to be called when
     *     location has changed.
     * @final
     */
    class Receiver {
        /**
         * goog.net.xpc.IframePollingTransport.Receiver
         *
         * @constructor
         * @param {goog.net.xpc.IframePollingTransport} transport The transport to
         *     receive from.
         * @param {Object} windowObj The window-object to poll for location-changes.
         * @param {Function} callback The callback-function to be called when
         *     location has changed.
         * @final
         */
        constructor(transport: goog.net.xpc.IframePollingTransport, windowObj: Object, callback: Function);
    
        /**
         * Polls the location of the receiver-frame for changes.
         * @return {boolean} Whether a change has been detected.
         */
        receive(): boolean;
    }

    /**
     * The string used to prefix all iframe names and IDs.
     * @type {string}
     */
    var IFRAME_PREFIX: string;
}

