/// <reference path="../../../globals.d.ts" />
/// <reference path="./xmlhttpfactory.d.ts" />
/// <reference path="./xhrlike.d.ts" />

declare module goog.net {

    class CorsXmlHttpFactory extends CorsXmlHttpFactory.__Class { }
    module CorsXmlHttpFactory {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.net.XmlHttpFactory.__Class {
    
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
    }

    class IeCorsXhrAdapter extends IeCorsXhrAdapter.__Class { }
    module IeCorsXhrAdapter {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.net.XhrLike {
    
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
            send(opt_data?: ArrayBuffer): void;
            /**
             * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=} opt_data
             * @see http://www.w3.org/TR/XMLHttpRequest/#the-send()-method
             */
            send(opt_data?: ArrayBufferView): void;
            /**
             * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=} opt_data
             * @see http://www.w3.org/TR/XMLHttpRequest/#the-send()-method
             */
            send(opt_data?: Blob): void;
            /**
             * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=} opt_data
             * @see http://www.w3.org/TR/XMLHttpRequest/#the-send()-method
             */
            send(opt_data?: Document): void;
            /**
             * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=} opt_data
             * @see http://www.w3.org/TR/XMLHttpRequest/#the-send()-method
             */
            send(opt_data?: FormData): void;
            /**
             * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=} opt_data
             * @see http://www.w3.org/TR/XMLHttpRequest/#the-send()-method
             */
            send(opt_data?: string): void;
    
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
        }
    }
}
