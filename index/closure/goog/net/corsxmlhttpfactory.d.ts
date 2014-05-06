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
    
        /**
         * @param {string} method
         * @param {string} url
         * @param {?boolean=} opt_async
         * @param {?string=} opt_user
         * @param {?string=} opt_password
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-open()-method
         */
        open(method: string, url: string, opt_async?: boolean, opt_user?: string, opt_password?: string): void;
    
        /**
         * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=} opt_data
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-send()-method
         */
        send(opt_data?: any /*ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string*/): void;
    
        /**
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-abort()-method
         */
        abort(): void;
    
        /**
         * @param {string} header
         * @param {string} value
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader()-method
         */
        setRequestHeader(header: string, value: string): void;
    
        /**
         * @param {string} header
         * @return {string}
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-getresponseheader()-method
         */
        getResponseHeader(header: string): string;
    
        /**
         * @return {string}
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders()-method
         */
        getAllResponseHeaders(): string;
    
        /**
         * @type {function()|null|undefined}
         * @see http://www.w3.org/TR/XMLHttpRequest/#handler-xhr-onreadystatechange
         */
        onreadystatechange: any /*() => any (missing)|any (null)|any (undefined)*/;
    
        /**
         * @type {string}
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-responsetext-attribute
         */
        responseText: string;
    
        /**
         * @type {Document}
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-responsexml-attribute
         */
        responseXML: Document;
    
        /**
         * @type {number}
         * @see http://www.w3.org/TR/XMLHttpRequest/#readystate
         */
        readyState: number;
    
        /**
         * @type {number}
         * @see http://www.w3.org/TR/XMLHttpRequest/#status
         */
        status: number;
    
        /**
         * @type {string}
         * @see http://www.w3.org/TR/XMLHttpRequest/#statustext
         */
        statusText: string;
    }
}

