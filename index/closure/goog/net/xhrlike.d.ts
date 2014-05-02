// Generated Thu May  1 21:02:34 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.net.XhrLike {

    /**
     * Typedef that refers to either native or custom-implemented XHR objects.
     * @typedef {!goog.net.XhrLike|!XMLHttpRequest}
     */
    interface OrNative { /*any (goog.net.XhrLike|XMLHttpRequest)*/ }
}

declare module goog.net {

    /**
     * Interface for the common parts of XMLHttpRequest.
     *
     * Mostly copied from externs/w3c_xml.js.
     *
     * @interface
     * @see http://www.w3.org/TR/XMLHttpRequest/
     */
    interface XhrLike {
        onreadystatechange: any /*() => any (missing)|any (null)|any (undefined)*/;
        responseText: string;
        responseXML: Document;
        readyState: number;
        status: number;
        statusText: string;
        open(method: string, url: string, opt_async?: boolean, opt_user?: string, opt_password?: string): void;
        send(opt_data?: any /*ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string*/): void;
        abort(): void;
        setRequestHeader(header: string, value: string): void;
        getResponseHeader(header: string): string;
        getAllResponseHeaders(): string;
    }
}

