/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/net/errorcode.d.ts" />
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
/// <reference path="../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/uri/uri.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/net/eventtype.d.ts" />
/// <reference path="../../../closure/goog/net/iframeio.d.ts" />

declare module goog.net {

    /**
     * Mock implenetation of goog.net.IframeIo. This doesn't provide a mock
     * implementation for all cases, but it's not too hard to add them as needed.
     * @param {goog.testing.TestQueue} testQueue Test queue for inserting test
     *     events.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class MockIFrameIo extends goog.events.EventTarget {
        /**
         * Mock implenetation of goog.net.IframeIo. This doesn't provide a mock
         * implementation for all cases, but it's not too hard to add them as needed.
         * @param {goog.testing.TestQueue} testQueue Test queue for inserting test
         *     events.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(testQueue: goog.testing.TestQueue);
    
        /**
         * Simulates the iframe send.
         *
         * @param {goog.Uri|string} uri Uri of the request.
         * @param {string=} opt_method Default is GET, POST uses a form to submit the
         *     request.
         * @param {boolean=} opt_noCache Append a timestamp to the request to avoid
         *     caching.
         * @param {Object|goog.structs.Map=} opt_data Map of key-value pairs.
         */
        send(uri: any /*goog.Uri|string*/, opt_method?: string, opt_noCache?: boolean, opt_data?: any /*Object|goog.structs.Map<any, any>*/): void;
    
        /**
         * Simulates the iframe send from a form.
         * @param {Element} form Form element used to send the request to the server.
         * @param {string=} opt_uri Uri to set for the destination of the request, by
         *     default the uri will come from the form.
         * @param {boolean=} opt_noCache Append a timestamp to the request to avoid
         *     caching.
         */
        sendFromForm(form: Element, opt_uri?: string, opt_noCache?: boolean): void;
    
        /**
         * Simulates aborting the current Iframe request.
         * @param {goog.net.ErrorCode=} opt_failureCode Optional error code to use -
         *     defaults to ABORT.
         */
        abort(opt_failureCode?: goog.net.ErrorCode): void;
    
        /**
         * Simulates receive of incremental data.
         * @param {Object} data Data.
         */
        simulateIncrementalData(data: Object): void;
    
        /**
         * Simulates the iframe is done.
         * @param {goog.net.ErrorCode} errorCode The error code for any error that
         *     should be simulated.
         */
        simulateDone(errorCode: goog.net.ErrorCode): void;
    
        /**
         * Simulates the IFrame is ready for the next request.
         */
        simulateReady(): void;
    
        /**
         * @return {boolean} True if transfer is complete.
         */
        isComplete(): boolean;
    
        /**
         * @return {boolean} True if transfer was successful.
         */
        isSuccess(): boolean;
    
        /**
         * @return {boolean} True if a transfer is in progress.
         */
        isActive(): boolean;
    
        /**
         * Returns the last response text (i.e. the text content of the iframe).
         * Assumes plain text!
         * @return {string} Result from the server.
         */
        getResponseText(): string;
    
        /**
         * Parses the content as JSON. This is a safe parse and may throw an error
         * if the response is malformed.
         * @return {Object} The parsed content.
         */
        getResponseJson(): Object;
    
        /**
         * Get the uri of the last request.
         * @return {goog.Uri} Uri of last request.
         */
        getLastUri(): goog.Uri;
    
        /**
         * Gets the last error code.
         * @return {goog.net.ErrorCode} Last error code.
         */
        getLastErrorCode(): goog.net.ErrorCode;
    
        /**
         * Gets the last error message.
         * @return {string} Last error message.
         */
        getLastError(): string;
    
        /**
         * Gets the last custom error.
         * @return {Object} Last custom error.
         */
        getLastCustomError(): Object;
    
        /**
         * Sets the callback function used to check if a loaded IFrame is in an error
         * state.
         * @param {Function} fn Callback that expects a document object as it's single
         *     argument.
         */
        setErrorChecker(fn: Function): void;
    
        /**
         * Gets the callback function used to check if a loaded IFrame is in an error
         * state.
         * @return {Function} A callback that expects a document object as it's single
         *     argument.
         */
        getErrorChecker(): Function;
    
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
    }
}

