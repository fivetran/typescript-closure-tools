/// <reference path="../../../../globals.d.ts" />
/// <reference path="./transport.d.ts" />
/// <reference path="./crosspagechannel.d.ts" />
/// <reference path="../../dom/dom.d.ts" />

declare module goog.net.xpc {

    class FrameElementMethodTransport extends FrameElementMethodTransport__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FrameElementMethodTransport__Class extends goog.net.xpc.Transport__Class  { 
    
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
    } 
    
}
