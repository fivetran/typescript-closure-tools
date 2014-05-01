// Generated Wed Apr 30 16:31:40 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/async.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/json.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/log.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/messaging.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/promise.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />
/// <reference path="../../goog/testing.d.ts" />
/// <reference path="../../goog/timer.d.ts" />
/// <reference path="../../goog/uri.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />
/// <reference path="../../lib/closure-library/third_party/closure/goog/mochikit/async.d.ts" />

declare module 'goog.net.xpc' {

    /**
     * The role of the peer.
     * @enum {number}
     */
    enum CrossPageChannelRole { OUTER, INNER } 

    /**
     * Enum used to identify transport types.
     * @enum {number}
     */
    enum TransportTypes { NATIVE_MESSAGING, FRAME_ELEMENT_METHOD, IFRAME_RELAY, IFRAME_POLLING, FLASH, NIX, DIRECT } 

    /**
     * Enum containing transport names. These need to correspond to the
     * transport class names for createTransport_() to work.
     * @type {Object}
     */
    var TransportNames: Object;

    /**
     * Field names used on configuration object.
     * @type {Object}
     */
    var CfgFields: Object;

    /**
     * Config properties that need to be URL sanitized.
     * @type {Array}.<string>
     */
    var UriCfgFields: any[];

    /**
     * @enum {number}
     */
    enum ChannelStates { NOT_CONNECTED, CONNECTED, CLOSED } 

    /**
     * The name of the transport service (used for internal signalling).
     * @type {string}
     * @suppress {underscore|visibility}
     */
    var TRANSPORT_SERVICE_: string;

    /**
     * Transport signaling message: setup.
     * @type {string}
     */
    var SETUP: string;

    /**
     * Transport signaling message: setup for native transport protocol v2.
     * @type {string}
     */
    var SETUP_NTPV2: string;

    /**
     * Transport signaling message: setup acknowledgement.
     * @type {string}
     * @suppress {underscore|visibility}
     */
    var SETUP_ACK_: string;

    /**
     * Transport signaling message: setup acknowledgement.
     * @type {string}
     */
    var SETUP_ACK_NTPV2: string;

    /**
     * Object holding active channels.
     * Package private. Do not call from outside goog.net.xpc.
     *
     * @type {Object.<string, goog.net.xpc.CrossPageChannel>}
     */
    var channels: { [key: string]: goog.net.xpc.CrossPageChannel };

    /**
     * Returns a random string.
     * @param {number} length How many characters the string shall contain.
     * @param {string=} opt_characters The characters used.
     * @return {string} The random string.
     */
    function getRandomString(length: number, opt_characters?: string): string;

    /**
     * The logger.
     * @type {goog.log.Logger}
     */
    var logger: goog.log.Logger;

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
         * @override
         * @return {boolean} Whether the channel is connected.
         */
        isConnected(): boolean;
    
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
         * Initiates connecting the channel. When this method is called, all the
         * information needed to connect the channel has to be available.
         *
         * @override
         * @param {Function=} opt_connectCb The function to be called when the
         * channel has been connected and is ready to be used.
         */
        connect(opt_connectCb?: Function): void;
    
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
    
        /** @override */
        send(): void;
    
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
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * A direct window to window method transport.
     *
     * If the windows are in the same security context, this transport calls
     * directly into the other window without using any additional mechanism. This
     * is mainly used in scenarios where you want to optionally use a cross domain
     * transport in cross security context situations, or optionally use a direct
     * transport in same security context situations.
     *
     * Note: Global properties are exported by using this transport. One to
     * communicate with the other window by, currently crosswindowmessaging.channel,
     * and by using goog.getUid on window, currently closure_uid_[0-9]+.
     *
     * @param {!goog.net.xpc.CrossPageChannel} channel The channel this
     *     transport belongs to.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for
     *     finding the correct window/document. If omitted, uses the current
     *     document.
     * @constructor
     * @extends {Transport}
     */
    class DirectTransport extends Transport {
        /**
         * A direct window to window method transport.
         *
         * If the windows are in the same security context, this transport calls
         * directly into the other window without using any additional mechanism. This
         * is mainly used in scenarios where you want to optionally use a cross domain
         * transport in cross security context situations, or optionally use a direct
         * transport in same security context situations.
         *
         * Note: Global properties are exported by using this transport. One to
         * communicate with the other window by, currently crosswindowmessaging.channel,
         * and by using goog.getUid on window, currently closure_uid_[0-9]+.
         *
         * @param {!goog.net.xpc.CrossPageChannel} channel The channel this
         *     transport belongs to.
         * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for
         *     finding the correct window/document. If omitted, uses the current
         *     document.
         * @constructor
         * @extends {Transport}
         */
        constructor(channel: goog.net.xpc.CrossPageChannel, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * Frame-element method transport.
     *
     * Firefox allows a document within an iframe to call methods on the
     * iframe-element added by the containing document.
     * NOTE(user): Tested in all FF versions starting from 1.0
     *
     * @param {goog.net.xpc.CrossPageChannel} channel The channel this transport
     *     belongs to.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
     *     the correct window.
     * @constructor
     * @extends {goog.net.xpc.Transport}
     * @final
     */
    class FrameElementMethodTransport extends goog.net.xpc.Transport {
        /**
         * Frame-element method transport.
         *
         * Firefox allows a document within an iframe to call methods on the
         * iframe-element added by the containing document.
         * NOTE(user): Tested in all FF versions starting from 1.0
         *
         * @param {goog.net.xpc.CrossPageChannel} channel The channel this transport
         *     belongs to.
         * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
         *     the correct window.
         * @constructor
         * @extends {goog.net.xpc.Transport}
         * @final
         */
        constructor(channel: goog.net.xpc.CrossPageChannel, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * The transport type.
         * @type {number}
         * @protected
         * @override
         */
        transportType: number;
    
        /**
         * Connect this transport.
         * @override
         */
        connect(): void;
    
        /**
         * Handles transport service messages.
         * @param {string} payload The message content.
         * @override
         */
        transportServiceHandler(payload: string): void;
    
        /**
         * Send a message
         * @param {string} service The name off the service the message is to be
         * delivered to.
         * @param {string} payload The message content.
         * @override
         */
        send(service: string, payload: string): void;
    
        /** @override */
        disposeInternal(): void;
    }

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
         * The transport type.
         * @type {number}
         * @protected
         * @override
         */
        transportType: number;
    
        /**
         * Determines whether the channel is still available. The channel is
         * unavailable if the transport was disposed or the peer is no longer
         * available.
         * @return {boolean} Whether the channel is available.
         */
        isChannelAvailable(): boolean;
    
        /**
         * Connects this transport.
         * @override
         */
        connect(): void;
    
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
    
        /**
         * Sends a message. Splits it in multiple frames if too long (exceeds IE's
         * URL-length maximum.
         * Wireformat: <seq>[,<frame_no>/<#frames>]|<frame_content>
         *
         * @param {string} service Name of service this the message has to be delivered.
         * @param {string} payload The message content.
         * @override
         */
        send(service: string, payload: string): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Iframe relay transport. Creates hidden iframes containing a document
     * from the peer's origin. Data is transferred in the fragment identifier.
     * Therefore the document loaded in the iframes can be served from the
     * browser's cache.
     *
     * @param {goog.net.xpc.CrossPageChannel} channel The channel this
     *     transport belongs to.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
     *     the correct window.
     * @constructor
     * @extends {goog.net.xpc.Transport}
     * @final
     */
    class IframeRelayTransport extends goog.net.xpc.Transport {
        /**
         * Iframe relay transport. Creates hidden iframes containing a document
         * from the peer's origin. Data is transferred in the fragment identifier.
         * Therefore the document loaded in the iframes can be served from the
         * browser's cache.
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
         * The transport type.
         * @type {number}
         * @override
         */
        transportType: number;
    
        /**
         * Connects this transport.
         * @override
         */
        connect(): void;
    
        /**
         * Handles transport service messages (internal signalling).
         * @param {string} payload The message content.
         * @override
         */
        transportServiceHandler(payload: string): void;
    
        /**
         * Sends a message.
         *
         * @param {string} service Name of service this the message has to be delivered.
         * @param {string} payload The message content.
         * @override
         */
        send(service: string, payload: string): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * The native messaging transport
     *
     * Uses document.postMessage() to send messages to other documents.
     * Receiving is done by listening on 'message'-events on the document.
     *
     * @param {goog.net.xpc.CrossPageChannel} channel The channel this
     *     transport belongs to.
     * @param {string} peerHostname The hostname (protocol, domain, and port) of the
     *     peer.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for
     *     finding the correct window/document.
     * @param {boolean=} opt_oneSidedHandshake If this is true, only the outer
     *     transport sends a SETUP message and expects a SETUP_ACK.  The inner
     *     transport goes connected when it receives the SETUP.
     * @param {number=} opt_protocolVersion Which version of its setup protocol the
     *     transport should use.  The default is '2'.
     * @constructor
     * @extends {goog.net.xpc.Transport}
     * @final
     */
    class NativeMessagingTransport extends goog.net.xpc.Transport {
        /**
         * The native messaging transport
         *
         * Uses document.postMessage() to send messages to other documents.
         * Receiving is done by listening on 'message'-events on the document.
         *
         * @param {goog.net.xpc.CrossPageChannel} channel The channel this
         *     transport belongs to.
         * @param {string} peerHostname The hostname (protocol, domain, and port) of the
         *     peer.
         * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for
         *     finding the correct window/document.
         * @param {boolean=} opt_oneSidedHandshake If this is true, only the outer
         *     transport sends a SETUP message and expects a SETUP_ACK.  The inner
         *     transport goes connected when it receives the SETUP.
         * @param {number=} opt_protocolVersion Which version of its setup protocol the
         *     transport should use.  The default is '2'.
         * @constructor
         * @extends {goog.net.xpc.Transport}
         * @final
         */
        constructor(channel: goog.net.xpc.CrossPageChannel, peerHostname: string, opt_domHelper?: goog.dom.DomHelper, opt_oneSidedHandshake?: boolean, opt_protocolVersion?: number);
    
        /**
         * The transport type.
         * @type {number}
         * @override
         */
        transportType: number;
    
        /**
         * Handles transport service messages.
         * @param {string} payload The message content.
         * @override
         */
        transportServiceHandler(payload: string): void;
    
        /**
         * Connects this transport.
         * @override
         */
        connect(): void;
    
        /**
         * Sends a message.
         * @param {string} service The name off the service the message is to be
         * delivered to.
         * @param {string} payload The message content.
         * @override
         */
        send(service: string, payload: string): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * NIX method transport.
     *
     * NOTE(user): NIX method tested in all IE versions starting from 6.0.
     *
     * @param {goog.net.xpc.CrossPageChannel} channel The channel this transport
     *     belongs to.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
     *     the correct window.
     * @constructor
     * @extends {goog.net.xpc.Transport}
     * @final
     */
    class NixTransport extends goog.net.xpc.Transport {
        /**
         * NIX method transport.
         *
         * NOTE(user): NIX method tested in all IE versions starting from 6.0.
         *
         * @param {goog.net.xpc.CrossPageChannel} channel The channel this transport
         *     belongs to.
         * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
         *     the correct window.
         * @constructor
         * @extends {goog.net.xpc.Transport}
         * @final
         */
        constructor(channel: goog.net.xpc.CrossPageChannel, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * The transport type.
         * @type {number}
         * @protected
         * @override
         */
        transportType: number;
    
        /**
         * Connect this transport.
         * @override
         */
        connect(): void;
    
        /**
         * Sends a message.
         * @param {string} service The name of the service the message is to be
         *   delivered to.
         * @param {string} payload The message content.
         * @override
         */
        send(service: string, payload: string): void;
    
        /** @override */
        disposeInternal(): void;
    }

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

declare module 'goog.net.xpc.IframePollingTransport' {

    /**
     * The string used to prefix all iframe names and IDs.
     * @type {string}
     */
    var IFRAME_PREFIX: string;

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
}

declare module 'goog.net.xpc.IframeRelayTransport' {

    /**
     * @typedef {{fragments: !Array.<string>, received: number, expected: number}}
     */
    interface FragmentInfo {
        fragments: string[];
        received: number;
        expected: number
    }
}

declare module 'goog.net.xpc.NixTransport' {

    /**
     * Global name of the Wrapper VBScript class.
     * Note that this class will be stored in the *global*
     * namespace (i.e. window in browsers).
     * @type {string}
     */
    var NIX_WRAPPER: string;

    /**
     * Global name of the GetWrapper VBScript function. This
     * constant is used by JavaScript to call this function.
     * Note that this function will be stored in the *global*
     * namespace (i.e. window in browsers).
     * @type {string}
     */
    var NIX_GET_WRAPPER: string;

    /**
     * The name of the handle message method used by the wrapper class
     * when calling the transport.
     * @type {string}
     */
    var NIX_HANDLE_MESSAGE: string;

    /**
     * The name of the create channel method used by the wrapper class
     * when calling the transport.
     * @type {string}
     */
    var NIX_CREATE_CHANNEL: string;

    /**
     * A "unique" identifier that is stored in the wrapper
     * class so that the wrapper can be distinguished from
     * other objects easily.
     * @type {string}
     */
    var NIX_ID_FIELD: string;

    /**
     * Determines if the installed version of IE supports accessing window.opener
     * after it has been set to a non-Window/null value. NIX relies on this being
     * possible.
     * @return {boolean} Whether window.opener behavior is compatible with NIX.
     */
    function isNixSupported(): boolean;
}

