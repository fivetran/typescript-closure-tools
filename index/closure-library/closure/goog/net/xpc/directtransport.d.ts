/// <reference path="../../../../globals.d.ts" />
/// <reference path="./transport.d.ts" />
/// <reference path="./crosspagechannel.d.ts" />
/// <reference path="../../dom/dom.d.ts" />

declare module goog.net.xpc {

    class DirectTransport extends DirectTransport.__Class { }
    module DirectTransport {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.net.xpc.Transport.__Class {
    
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
             * @extends {goog.net.xpc.Transport}
             */
            constructor(channel: goog.net.xpc.CrossPageChannel, opt_domHelper?: goog.dom.DomHelper);
        }
    }
}
