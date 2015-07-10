/// <reference path="../../../../globals.d.ts" />
/// <reference path="./transport.d.ts" />
/// <reference path="./crosspagechannel.d.ts" />
/// <reference path="../../dom/dom.d.ts" />

declare module goog.net.xpc {

    class NixTransport extends NixTransport__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class NixTransport__Class extends goog.net.xpc.Transport__Class  { 
    
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
    } 
    
}

declare module goog.net.xpc.NixTransport {

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
