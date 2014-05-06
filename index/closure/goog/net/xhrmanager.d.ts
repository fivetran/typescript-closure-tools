/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/net/httpstatus.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/net/errorcode.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/net/xhrlike.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttp.d.ts" />
/// <reference path="../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../closure/goog/net/eventtype.d.ts" />
/// <reference path="../../../closure/goog/net/xhrio.d.ts" />
/// <reference path="../../../closure/goog/structs/queue.d.ts" />
/// <reference path="../../../closure/goog/structs/pool.d.ts" />
/// <reference path="../../../closure/goog/structs/node.d.ts" />
/// <reference path="../../../closure/goog/structs/heap.d.ts" />
/// <reference path="../../../closure/goog/structs/priorityqueue.d.ts" />
/// <reference path="../../../closure/goog/structs/prioritypool.d.ts" />
/// <reference path="../../../closure/goog/net/xhriopool.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />

declare module goog.net {

    /**
     * A manager of an XhrIoPool.
     * @param {number=} opt_maxRetries Max. number of retries (Default: 1).
     * @param {goog.structs.Map=} opt_headers Map of default headers to add to every
     *     request.
     * @param {number=} opt_minCount Min. number of objects (Default: 1).
     * @param {number=} opt_maxCount Max. number of objects (Default: 10).
     * @param {number=} opt_timeoutInterval Timeout (in ms) before aborting an
     *     attempt (Default: 0ms).
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class XhrManager extends goog.events.EventTarget {
        /**
         * A manager of an XhrIoPool.
         * @param {number=} opt_maxRetries Max. number of retries (Default: 1).
         * @param {goog.structs.Map=} opt_headers Map of default headers to add to every
         *     request.
         * @param {number=} opt_minCount Min. number of objects (Default: 1).
         * @param {number=} opt_maxCount Max. number of objects (Default: 10).
         * @param {number=} opt_timeoutInterval Timeout (in ms) before aborting an
         *     attempt (Default: 0ms).
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(opt_maxRetries?: number, opt_headers?: goog.structs.Map<any, any>, opt_minCount?: number, opt_maxCount?: number, opt_timeoutInterval?: number);
    
        /**
         * Sets the number of milliseconds after which an incomplete request will be
         * aborted. Zero means no timeout is set.
         * @param {number} ms Timeout interval in milliseconds; 0 means none.
         */
        setTimeoutInterval(ms: number): void;
    
        /**
         * Returns the number of requests either in flight, or waiting to be sent.
         * The count will include the current request if used within a COMPLETE event
         * handler or callback.
         * @return {number} The number of requests in flight or pending send.
         */
        getOutstandingCount(): number;
    
        /**
         * Returns an array of request ids that are either in flight, or waiting to
         * be sent. The id of the current request will be included if used within a
         * COMPLETE event handler or callback.
         * @return {!Array.<string>} Request ids in flight or pending send.
         */
        getOutstandingRequestIds(): string[];
    
        /**
         * Registers the given request to be sent. Throws an error if a request
         * already exists with the given ID.
         * NOTE: It is not sent immediately. It is queued and will be sent when an
         * XhrIo object becomes available, taking into account the request's
         * priority.
         * @param {string} id The id of the request.
         * @param {string} url Uri to make the request too.
         * @param {string=} opt_method Send method, default: GET.
         * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
         *     opt_content Post data.
         * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
         *     request.
         * @param {number=} opt_priority The priority of the request. A smaller value
         *     means a higher priority.
         * @param {Function=} opt_callback Callback function for when request is
         *     complete. The only param is the event object from the COMPLETE event.
         * @param {number=} opt_maxRetries The maximum number of times the request
         *     should be retried.
         * @param {goog.net.XhrIo.ResponseType=} opt_responseType The response type of
         *     this request; defaults to goog.net.XhrIo.ResponseType.DEFAULT.
         * @return {goog.net.XhrManager.Request} The queued request object.
         */
        send(id: string, url: string, opt_method?: string, opt_content?: any /*ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string*/, opt_headers?: any /*Object|goog.structs.Map<any, any>*/, opt_priority?: number, opt_callback?: Function, opt_maxRetries?: number, opt_responseType?: goog.net.XhrIo.ResponseType): goog.net.XhrManager.Request;
    
        /**
         * Aborts the request associated with id.
         * @param {string} id The id of the request to abort.
         * @param {boolean=} opt_force If true, remove the id now so it can be reused.
         *     No events are fired and the callback is not called when forced.
         */
        abort(id: string, opt_force?: boolean): void;
    }
}

declare module goog.net.XhrManager {

    /**
     * An event dispatched by XhrManager.
     *
     * @param {goog.net.EventType} type Event Type.
     * @param {goog.net.XhrManager} target Reference to the object that is the
     *     target of this event.
     * @param {string} id The id of the request this event is for.
     * @param {goog.net.XhrIo} xhrIo The XhrIo object of the request.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class Event extends goog.events.Event {
        /**
         * An event dispatched by XhrManager.
         *
         * @param {goog.net.EventType} type Event Type.
         * @param {goog.net.XhrManager} target Reference to the object that is the
         *     target of this event.
         * @param {string} id The id of the request this event is for.
         * @param {goog.net.XhrIo} xhrIo The XhrIo object of the request.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(type: goog.net.EventType, target: goog.net.XhrManager, id: string, xhrIo: goog.net.XhrIo);
    }

    /**
     * An encapsulation of everything needed to make a Xhr request.
     * NOTE: This is used internal to the XhrManager.
     *
     * @param {string} url Uri to make the request too.
     * @param {Function} xhrEventCallback Callback attached to the events of the
     *     XhrIo object of the request.
     * @param {string=} opt_method Send method, default: GET.
     * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
     *     opt_content Post data.
     * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
     *     request.
     * @param {Function=} opt_callback Callback function for when request is
     *     complete. NOTE: Only 1 callback supported across all events.
     * @param {number=} opt_maxRetries The maximum number of times the request
     *     should be retried (Default: 1).
     * @param {goog.net.XhrIo.ResponseType=} opt_responseType The response type of
     *     this request; defaults to goog.net.XhrIo.ResponseType.DEFAULT.
     *
     * @constructor
     * @final
     */
    class Request {
        /**
         * An encapsulation of everything needed to make a Xhr request.
         * NOTE: This is used internal to the XhrManager.
         *
         * @param {string} url Uri to make the request too.
         * @param {Function} xhrEventCallback Callback attached to the events of the
         *     XhrIo object of the request.
         * @param {string=} opt_method Send method, default: GET.
         * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
         *     opt_content Post data.
         * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
         *     request.
         * @param {Function=} opt_callback Callback function for when request is
         *     complete. NOTE: Only 1 callback supported across all events.
         * @param {number=} opt_maxRetries The maximum number of times the request
         *     should be retried (Default: 1).
         * @param {goog.net.XhrIo.ResponseType=} opt_responseType The response type of
         *     this request; defaults to goog.net.XhrIo.ResponseType.DEFAULT.
         *
         * @constructor
         * @final
         */
        constructor(url: string, xhrEventCallback: Function, opt_method?: string, opt_content?: any /*ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string*/, opt_headers?: any /*Object|goog.structs.Map<any, any>*/, opt_callback?: Function, opt_maxRetries?: number, opt_responseType?: goog.net.XhrIo.ResponseType);
    
        /**
         * Gets the uri.
         * @return {string} The uri to make the request to.
         */
        getUrl(): string;
    
        /**
         * Gets the send method.
         * @return {string} The send method.
         */
        getMethod(): string;
    
        /**
         * Gets the post data.
         * @return {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string|undefined}
         *     The post data.
         */
        getContent(): any /*ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string|any (undefined)*/;
    
        /**
         * Gets the map of headers.
         * @return {Object|goog.structs.Map} The map of headers.
         */
        getHeaders(): any /*Object|goog.structs.Map<any, any>*/;
    
        /**
         * Gets the maximum number of times the request should be retried.
         * @return {number} The maximum number of times the request should be retried.
         */
        getMaxRetries(): number;
    
        /**
         * Gets the number of attempts so far.
         * @return {number} The number of attempts so far.
         */
        getAttemptCount(): number;
    
        /**
         * Increases the number of attempts so far.
         */
        increaseAttemptCount(): void;
    
        /**
         * Returns whether the request has reached the maximum number of retries.
         * @return {boolean} Whether the request has reached the maximum number of
         *     retries.
         */
        hasReachedMaxRetries(): boolean;
    
        /**
         * Sets the completed status.
         * @param {boolean} complete The completed status.
         */
        setCompleted(complete: boolean): void;
    
        /**
         * Gets the completed status.
         * @return {boolean} The completed status.
         */
        getCompleted(): boolean;
    
        /**
         * Sets the aborted status.
         * @param {boolean} aborted True if the request was aborted, otherwise False.
         */
        setAborted(aborted: boolean): void;
    
        /**
         * Gets the aborted status.
         * @return {boolean} True if request was aborted, otherwise False.
         */
        getAborted(): boolean;
    
        /**
         * Gets the callback attached to the events of the XhrIo object.
         * @return {Function} The callback attached to the events of the
         *     XhrIo object.
         */
        getXhrEventCallback(): Function;
    
        /**
         * Gets the callback for when the request is complete.
         * @return {Function|undefined} The callback for when the request is complete.
         */
        getCompleteCallback(): any /*Function|any (undefined)*/;
    
        /**
         * Gets the response type that will be set on this request's XhrIo when it's
         * available.
         * @return {!goog.net.XhrIo.ResponseType} The response type to be set
         *     when an XhrIo becomes available to this request.
         */
        getResponseType(): goog.net.XhrIo.ResponseType;
    }
}

