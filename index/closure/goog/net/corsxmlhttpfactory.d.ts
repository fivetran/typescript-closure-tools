// Generated Mon May  5 10:58:48 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/net/xhrlike.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttp.d.ts" />
/// <reference path="../../../closure/goog/net/httpstatus.d.ts" />

declare module goog.net {

    /**
     * A factory of XML http request objects that supports cross domain requests.
     * This class should be instantiated and passed as the parameter of a
     * goog.net.XhrIo constructor to allow cross-domain requests in every browser.
     *
     * @extends {goog.net.XmlHttpFactory}
     * @constructor
     * @final
     */
    class CorsXmlHttpFactory extends goog.net.XmlHttpFactory {
        /**
         * A factory of XML http request objects that supports cross domain requests.
         * This class should be instantiated and passed as the parameter of a
         * goog.net.XhrIo constructor to allow cross-domain requests in every browser.
         *
         * @extends {goog.net.XmlHttpFactory}
         * @constructor
         * @final
         */
        constructor();
    }

    /**
     * An adapter around Internet Explorer's XDomainRequest object that makes it
     * look like a standard XMLHttpRequest. This can be used instead of
     * XMLHttpRequest to support CORS.
     *
     * @implements {goog.net.XhrLike}
     * @constructor
     * @struct
     * @final
     */
    class IeCorsXhrAdapter implements goog.net.XhrLike {
        /**
         * An adapter around Internet Explorer's XDomainRequest object that makes it
         * look like a standard XMLHttpRequest. This can be used instead of
         * XMLHttpRequest to support CORS.
         *
         * @implements {goog.net.XhrLike}
         * @constructor
         * @struct
         * @final
         */
        constructor();
    }
}

