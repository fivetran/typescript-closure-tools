/// <reference path="../../../../globals.d.ts" />
/// <reference path="./transport.d.ts" />
/// <reference path="./crosspagechannel.d.ts" />
/// <reference path="../../dom/dom.d.ts" />

declare module goog.net.xpc {

    class IframeRelayTransport extends __IframeRelayTransport { }
    class __IframeRelayTransport extends goog.net.xpc.__Transport {
    
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
    }
}

declare module goog.net.xpc.IframeRelayTransport {

    /**
     * @typedef {{fragments: !Array.<string>, received: number, expected: number}}
     */
    interface FragmentInfo {
        fragments: string[];
        received: number;
        expected: number
    }
}
