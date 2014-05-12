/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/eventtarget.d.ts" />
/// <reference path="../testqueue.d.ts" />
/// <reference path="../../net/xhrio.d.ts" />
/// <reference path="../../net/errorcode.d.ts" />
/// <reference path="../../structs/map.d.ts" />
/// <reference path="../../net/xhrlike.d.ts" />

declare module goog.testing.net {

    class XhrIo extends XhrIo.__Class { }
    module XhrIo {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * Mock implementation of goog.net.XhrIo. This doesn't provide a mock
             * implementation for all cases, but it's not too hard to add them as needed.
             * @param {goog.testing.TestQueue=} opt_testQueue Test queue for inserting test
             *     events.
             * @constructor
             * @extends {goog.events.EventTarget}
             */
            constructor(opt_testQueue?: goog.testing.TestQueue);
    
            /**
             * Returns the number of milliseconds after which an incomplete request will be
             * aborted, or 0 if no timeout is set.
             * @return {number} Timeout interval in milliseconds.
             */
            getTimeoutInterval(): number;
    
            /**
             * Sets the number of milliseconds after which an incomplete request will be
             * aborted and a {@link goog.net.EventType.TIMEOUT} event raised; 0 means no
             * timeout is set.
             * @param {number} ms Timeout interval in milliseconds; 0 means none.
             */
            setTimeoutInterval(ms: number): void;
    
            /**
             * Causes timeout events to be fired.
             */
            simulateTimeout(): void;
    
            /**
             * Sets the desired type for the response. At time of writing, this is only
             * supported in very recent versions of WebKit (10.0.612.1 dev and later).
             *
             * If this is used, the response may only be accessed via {@link #getResponse}.
             *
             * @param {goog.net.XhrIo.ResponseType} type The desired type for the response.
             */
            setResponseType(type: goog.net.XhrIo.ResponseType): void;
    
            /**
             * Gets the desired type for the response.
             * @return {goog.net.XhrIo.ResponseType} The desired type for the response.
             */
            getResponseType(): goog.net.XhrIo.ResponseType;
    
            /**
             * Sets whether a "credentialed" request that is aware of cookie and
             * authentication information should be made. This option is only supported by
             * browsers that support HTTP Access Control. As of this writing, this option
             * is not supported in IE.
             *
             * @param {boolean} withCredentials Whether this should be a "credentialed"
             *     request.
             */
            setWithCredentials(withCredentials: boolean): void;
    
            /**
             * Gets whether a "credentialed" request is to be sent.
             * @return {boolean} The desired type for the response.
             */
            getWithCredentials(): boolean;
    
            /**
             * Abort the current XMLHttpRequest
             * @param {goog.net.ErrorCode=} opt_failureCode Optional error code to use -
             *     defaults to ABORT.
             */
            abort(opt_failureCode?: goog.net.ErrorCode): void;
    
            /**
             * Simulates the XhrIo send.
             * @param {string} url Uri to make request too.
             * @param {string=} opt_method Send method, default: GET.
             * @param {string=} opt_content Post data.
             * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
             *     request.
             */
            send(url: string, opt_method?: string, opt_content?: string, opt_headers?: Object): void;
            /**
             * Simulates the XhrIo send.
             * @param {string} url Uri to make request too.
             * @param {string=} opt_method Send method, default: GET.
             * @param {string=} opt_content Post data.
             * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
             *     request.
             */
            send(url: string, opt_method?: string, opt_content?: string, opt_headers?: goog.structs.Map<any, any>): void;
    
            /**
             * Creates a new XHR object.
             * @return {goog.net.XhrLike.OrNative} The newly created XHR
             *     object.
             * @protected
             */
            createXhr(): goog.net.XhrLike.OrNative;
    
            /**
             * Simulates changing to the new ready state.
             * @param {number} readyState Ready state to change to.
             */
            simulateReadyStateChange(readyState: number): void;
    
            /**
             * Simulate receiving some bytes but the request not fully completing, and
             * the XHR entering the 'INTERACTIVE' state.
             * @param {string} partialResponse A string to append to the response text.
             * @param {Object=} opt_headers Simulated response headers.
             */
            simulatePartialResponse(partialResponse: string, opt_headers?: Object): void;
    
            /**
             * Simulates receiving a response.
             * @param {number} statusCode Simulated status code.
             * @param {string|Document|null} response Simulated response.
             * @param {Object=} opt_headers Simulated response headers.
             */
            simulateResponse(statusCode: number, response: string, opt_headers?: Object): void;
            /**
             * Simulates receiving a response.
             * @param {number} statusCode Simulated status code.
             * @param {string|Document|null} response Simulated response.
             * @param {Object=} opt_headers Simulated response headers.
             */
            simulateResponse(statusCode: number, response: Document, opt_headers?: Object): void;
            /**
             * Simulates receiving a response.
             * @param {number} statusCode Simulated status code.
             * @param {string|Document|null} response Simulated response.
             * @param {Object=} opt_headers Simulated response headers.
             */
            simulateResponse(statusCode: number, response: any /*null*/, opt_headers?: Object): void;
    
            /**
             * Simulates the Xhr is ready for the next request.
             */
            simulateReady(): void;
    
            /**
             * @return {boolean} Whether there is an active request.
             */
            isActive(): boolean;
    
            /**
             * Has the request completed.
             * @return {boolean} Whether the request has completed.
             */
            isComplete(): boolean;
    
            /**
             * Has the request compeleted with a success.
             * @return {boolean} Whether the request compeleted successfully.
             */
            isSuccess(): boolean;
    
            /**
             * Returns the readystate.
             * @return {number} goog.net.XmlHttp.ReadyState.*.
             */
            getReadyState(): number;
    
            /**
             * Get the status from the Xhr object.  Will only return correct result when
             * called from the context of a callback.
             * @return {number} Http status.
             */
            getStatus(): number;
    
            /**
             * Get the status text from the Xhr object.  Will only return correct result
             * when called from the context of a callback.
             * @return {string} Status text.
             */
            getStatusText(): string;
    
            /**
             * Gets the last error message.
             * @return {goog.net.ErrorCode} Last error code.
             */
            getLastErrorCode(): goog.net.ErrorCode;
    
            /**
             * Gets the last error message.
             * @return {string} Last error message.
             */
            getLastError(): string;
    
            /**
             * Gets the last URI that was requested.
             * @return {string} Last URI.
             */
            getLastUri(): string;
    
            /**
             * Gets the last HTTP method that was requested.
             * @return {string|undefined} Last HTTP method used by send.
             */
            getLastMethod(): any /*string|any (undefined)*/;
    
            /**
             * Gets the last POST content that was requested.
             * @return {string|undefined} Last POST content or undefined if last request was
             *      a GET.
             */
            getLastContent(): any /*string|any (undefined)*/;
    
            /**
             * Gets the headers of the last request.
             * @return {Object|goog.structs.Map|undefined} Last headers manually set in send
             *      call or undefined if no additional headers were specified.
             */
            getLastRequestHeaders(): any /*Object|goog.structs.Map<any, any>|any (undefined)*/;
    
            /**
             * Gets the response text from the Xhr object.  Will only return correct result
             * when called from the context of a callback.
             * @return {string} Result from the server.
             */
            getResponseText(): string;
    
            /**
             * Gets the response body from the Xhr object. Will only return correct result
             * when called from the context of a callback.
             * @return {Object} Binary result from the server or null.
             */
            getResponseBody(): Object;
    
            /**
             * Gets the response and evaluates it as JSON from the Xhr object.  Will only
             * return correct result when called from the context of a callback.
             * @param {string=} opt_xssiPrefix Optional XSSI prefix string to use for
             *     stripping of the response before parsing. This needs to be set only if
             *     your backend server prepends the same prefix string to the JSON response.
             * @return {Object} JavaScript object.
             */
            getResponseJson(opt_xssiPrefix?: string): Object;
    
            /**
             * Gets the response XML from the Xhr object.  Will only return correct result
             * when called from the context of a callback.
             * @return {Document} Result from the server if it was XML.
             */
            getResponseXml(): Document;
    
            /**
             * Get the response as the type specificed by {@link #setResponseType}. At time
             * of writing, this is only supported in very recent versions of WebKit
             * (10.0.612.1 dev and later).
             *
             * @return {*} The response.
             */
            getResponse(): any;
    
            /**
             * Get the value of the response-header with the given name from the Xhr object
             * Will only return correct result when called from the context of a callback
             * and the request has completed
             * @param {string} key The name of the response-header to retrieve.
             * @return {string|undefined} The value of the response-header named key.
             */
            getResponseHeader(key: string): any /*string|any (undefined)*/;
    
            /**
             * Gets the text of all the headers in the response.
             * Will only return correct result when called from the context of a callback
             * and the request has completed
             * @return {string} The string containing all the response headers.
             */
            getAllResponseHeaders(): string;
    
            /**
             * Returns all response headers as a key-value map.
             * Multiple values for the same header key can be combined into one,
             * separated by a comma and a space.
             * Note that the native getResponseHeader method for retrieving a single header
             * does a case insensitive match on the header name. This method does not
             * include any case normalization logic, it will just return a key-value
             * representation of the headers.
             * See: http://www.w3.org/TR/XMLHttpRequest/#the-getresponseheader()-method
             * @return {!Object.<string, string>} An object with the header keys as keys
             *     and header values as values.
             */
            getResponseHeaders(): { [key: string]: string };
        }
    }
}

declare module goog.testing.net.XhrIo {

    /**
     * Alias this enum here to make mocking of goog.net.XhrIo easier.
     * @enum {string}
     */
    enum ResponseType { DEFAULT, TEXT, DOCUMENT, BLOB, ARRAY_BUFFER } 

    /**
     * Returns an Array containing all non-disposed instances of
     * goog.testing.net.XhrIo created by {@link goog.testing.net.XhrIo.send}.
     * @return {Array} Array of goog.testing.net.XhrIo instances.
     */
    function getSendInstances(): any[];

    /**
     * Disposes all non-disposed instances of goog.testing.net.XhrIo created by
     * {@link goog.testing.net.XhrIo.send}.
     * @see goog.net.XhrIo.cleanup
     */
    function cleanup(): void;

    /**
     * Simulates the static XhrIo send method.
     * @param {string} url Uri to make request to.
     * @param {Function=} opt_callback Callback function for when request is
     *     complete.
     * @param {string=} opt_method Send method, default: GET.
     * @param {string=} opt_content Post data.
     * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
     *     request.
     * @param {number=} opt_timeoutInterval Number of milliseconds after which an
     *     incomplete request will be aborted; 0 means no timeout is set.
     */
    function send(url: string, opt_callback?: Function, opt_method?: string, opt_content?: string, opt_headers?: Object, opt_timeoutInterval?: number): void;
    /**
     * Simulates the static XhrIo send method.
     * @param {string} url Uri to make request to.
     * @param {Function=} opt_callback Callback function for when request is
     *     complete.
     * @param {string=} opt_method Send method, default: GET.
     * @param {string=} opt_content Post data.
     * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
     *     request.
     * @param {number=} opt_timeoutInterval Number of milliseconds after which an
     *     incomplete request will be aborted; 0 means no timeout is set.
     */
    function send(url: string, opt_callback?: Function, opt_method?: string, opt_content?: string, opt_headers?: goog.structs.Map<any, any>, opt_timeoutInterval?: number): void;
}
