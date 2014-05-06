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
/// <reference path="../../../../closure/goog/net/xpc/frameelementmethodtransport.d.ts" />
/// <reference path="../../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../../closure/goog/messaging/messagechannel.d.ts" />
/// <reference path="../../../../closure/goog/messaging/abstractchannel.d.ts" />
/// <reference path="../../../../closure/goog/net/xpc/iframepollingtransport.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />
/// <reference path="../../../../closure/goog/net/xpc/directtransport.d.ts" />
/// <reference path="../../../../closure/goog/net/xpc/iframerelaytransport.d.ts" />
/// <reference path="../../../../closure/goog/net/xpc/nixtransport.d.ts" />
/// <reference path="../../../../closure/goog/net/xpc/nativemessagingtransport.d.ts" />
/// <reference path="../../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../../closure/goog/uri/uri.d.ts" />
/// <reference path="../../../../closure/goog/async/delay.d.ts" />

declare module goog.net.xpc {

    /**
     * A communication channel between two documents from different domains.
     * Provides asynchronous messaging.
     *
     * @param {Object} cfg Channel configuration object.
     * @param {goog.dom.DomHelper=} opt_domHelper The optional dom helper to
     *     use for looking up elements in the dom.
     * @constructor
     * @extends {goog.messaging.AbstractChannel}
     */
    class CrossPageChannel extends goog.messaging.AbstractChannel {
        /**
         * A communication channel between two documents from different domains.
         * Provides asynchronous messaging.
         *
         * @param {Object} cfg Channel configuration object.
         * @param {goog.dom.DomHelper=} opt_domHelper The optional dom helper to
         *     use for looking up elements in the dom.
         * @constructor
         * @extends {goog.messaging.AbstractChannel}
         */
        constructor(cfg: Object, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns the configuration object for this channel.
         * Package private. Do not call from outside goog.net.xpc.
         *
         * @return {Object} The configuration object for this channel.
         */
        getConfig(): Object;
    
        /**
         * Returns a reference to the iframe-element.
         * Package private. Do not call from outside goog.net.xpc.
         *
         * @return {Object} A reference to the iframe-element.
         */
        getIframeElement(): Object;
    
        /**
         * Sets the window object the foreign document resides in.
         *
         * @param {Object} peerWindowObject The window object of the peer.
         */
        setPeerWindowObject(peerWindowObject: Object): void;
    
        /**
         * Returns the window object the foreign document resides in.
         * Package private. Do not call from outside goog.net.xpc.
         *
         * @return {Object} The window object of the peer.
         */
        getPeerWindowObject(): Object;
    
        /**
         * Determines whether the peer window is available (e.g. not closed).
         * Package private. Do not call from outside goog.net.xpc.
         *
         * @return {boolean} Whether the peer window is available.
         */
        isPeerAvailable(): boolean;
    
        /**
         * Returns the transport type in use for this channel.
         * @return {number} Transport-type identifier.
         */
        getTransportType(): number;
    
        /**
         * Returns the tranport name in use for this channel.
         * @return {string} The transport name.
         */
        getTransportName(): string;
    
        /**
         * @return {Object} Configuration-object to be used by the peer to
         *     initialize the channel.
         */
        getPeerConfiguration(): Object;
    
        /**
         * Creates the iframe containing the peer page in a specified parent element.
         * This method does not connect the channel, connect() still has to be called
         * separately.
         *
         * @param {!Element} parentElm The container element the iframe is appended to.
         * @param {Function=} opt_configureIframeCb If present, this function gets
         *     called with the iframe element as parameter to allow setting properties
         *     on it before it gets added to the DOM. If absent, the iframe's width and
         *     height are set to '100%'.
         * @param {boolean=} opt_addCfgParam Whether to add the peer configuration as
         *     URL parameter (default: true).
         * @return {!HTMLIFrameElement} The iframe element.
         */
        createPeerIframe(parentElm: Element, opt_configureIframeCb?: Function, opt_addCfgParam?: boolean): HTMLIFrameElement;
    
        /**
         * Returns the peer URI, with an optional URL parameter for configuring the peer
         * window.
         *
         * @param {boolean=} opt_addCfgParam Whether to add the peer configuration as
         *     URL parameter (default: true).
         * @return {!goog.Uri} The peer URI.
         */
        getPeerUri(opt_addCfgParam?: boolean): goog.Uri;
    
        /**
         * Closes the channel.
         */
        close(): void;
    
        /**
         * Package-private.
         * Called by the transport when the channel is connected.
         * @param {number=} opt_delay Delay this number of milliseconds before calling
         *     the connection callback. Usage is discouraged, but can be used to paper
         *     over timing vulnerabilities when there is no alternative.
         */
        notifyConnected(opt_delay?: number): void;
    
        /**
         * Called by the transport in case of an unrecoverable failure.
         * Package private. Do not call from outside goog.net.xpc.
         */
        notifyTransportError(): void;
    
        /**
         * Delivers messages to the appropriate service-handler. Named xpcDeliver to
         * avoid name conflict with {@code deliver} function in superclass
         * goog.messaging.AbstractChannel.
         *
         * Package private. Do not call from outside goog.net.xpc.
         *
         * @param {string} serviceName The name of the port.
         * @param {string} payload The payload.
         * @param {string=} opt_origin An optional origin for the message, where the
         *     underlying transport makes that available.  If this is specified, and
         *     the PEER_HOSTNAME parameter was provided, they must match or the message
         *     will be rejected.
         */
        xpcDeliver(serviceName: string, payload: string, opt_origin?: string): void;
    
        /**
         * Returns the role of this channel (either inner or outer).
         * @return {number} The role of this channel.
         */
        getRole(): number;
    
        /**
         * Sets the channel name. Note, this doesn't establish a unique channel to
         * communicate on.
         * @param {string} name The new channel name.
         */
        updateChannelNameAndCatalog(name: string): void;
    }
}

