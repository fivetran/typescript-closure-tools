/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/uri/uri.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../../closure/goog/net/httpstatus.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../../closure/goog/net/errorcode.d.ts" />
/// <reference path="../../../../closure/goog/net/xhrlike.d.ts" />
/// <reference path="../../../../closure/goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../../closure/goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../../closure/goog/net/xmlhttp.d.ts" />
/// <reference path="../../../../closure/goog/net/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/net/xhrio.d.ts" />

declare module goog.ui.ac {

    /**
     * An array matcher that requests matches via ajax.
     * @param {string} url The Uri which generates the auto complete matches.  The
     *     search term is passed to the server as the 'token' query param.
     * @param {boolean=} opt_noSimilar If true, request that the server does not do
     *     similarity matches for the input token against the dictionary.
     *     The value is sent to the server as the 'use_similar' query param which is
     *     either "1" (opt_noSimilar==false) or "0" (opt_noSimilar==true).
     * @constructor
     * @extends {goog.Disposable}
     */
    class RemoteArrayMatcher extends goog.Disposable {
        /**
         * An array matcher that requests matches via ajax.
         * @param {string} url The Uri which generates the auto complete matches.  The
         *     search term is passed to the server as the 'token' query param.
         * @param {boolean=} opt_noSimilar If true, request that the server does not do
         *     similarity matches for the input token against the dictionary.
         *     The value is sent to the server as the 'use_similar' query param which is
         *     either "1" (opt_noSimilar==false) or "0" (opt_noSimilar==true).
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor(url: string, opt_noSimilar?: boolean);
    
        /**
         * Set the send method ("GET", "POST").
         * @param {string} method The send method; default: GET.
         */
        setMethod(method: string): void;
    
        /**
         * Set the post data.
         * @param {string} content Post data.
         */
        setContent(content: string): void;
    
        /**
         * Set the HTTP headers.
         * @param {Object|goog.structs.Map} headers Map of headers to add to the
         *     request.
         */
        setHeaders(headers: any /*Object|goog.structs.Map<any, any>*/): void;
    
        /**
         * Set the timeout interval.
         * @param {number} interval Number of milliseconds after which an
         *     incomplete request will be aborted; 0 means no timeout is set.
         */
        setTimeoutInterval(interval: number): void;
    
        /**
         * Builds a complete GET-style URL, given the base URI and autocomplete related
         * parameter values.
         * <b>Override this to build any customized lookup URLs.</b>
         * <b>Can be used to change request method and any post content as well.</b>
         * @param {string} uri The base URI of the request target.
         * @param {string} token Current token in autocomplete.
         * @param {number} maxMatches Maximum number of matches required.
         * @param {boolean} useSimilar A hint to the server.
         * @param {string=} opt_fullString Complete text in the input element.
         * @return {?string} The complete url. Return null if no request should be sent.
         * @protected
         */
        buildUrl(uri: string, token: string, maxMatches: number, useSimilar: boolean, opt_fullString?: string): string;
    
        /**
         * Returns whether the suggestions should be updated?
         * <b>Override this to prevent updates eg - when token is empty.</b>
         * @param {string} uri The base URI of the request target.
         * @param {string} token Current token in autocomplete.
         * @param {number} maxMatches Maximum number of matches required.
         * @param {boolean} useSimilar A hint to the server.
         * @param {string=} opt_fullString Complete text in the input element.
         * @return {boolean} Whether new matches be requested.
         * @protected
         */
        shouldRequestMatches(uri: string, token: string, maxMatches: number, useSimilar: boolean, opt_fullString?: string): boolean;
    
        /**
         * Parses and retrieves the array of suggestions from XHR response.
         * <b>Override this if the response is not a simple JSON array.</b>
         * @param {string} responseText The XHR response text.
         * @return {Array.<string>} The array of suggestions.
         * @protected
         */
        parseResponseText(responseText: string): string[];
    
        /**
         * Handles the XHR response.
         * @param {string} token The XHR autocomplete token.
         * @param {Function} matchHandler The AutoComplete match handler.
         * @param {goog.events.Event} event The XHR success event.
         */
        xhrCallback(token: string, matchHandler: Function, event: goog.events.Event): void;
    
        /**
         * Retrieve a set of matching rows from the server via ajax.
         * @param {string} token The text that should be matched; passed to the server
         *     as the 'token' query param.
         * @param {number} maxMatches The maximum number of matches requested from the
         *     server; passed as the 'max_matches' query param.  The server is
         *     responsible for limiting the number of matches that are returned.
         * @param {Function} matchHandler Callback to execute on the result after
         *     matching.
         * @param {string=} opt_fullString The full string from the input box.
         */
        requestMatchingRows(token: string, maxMatches: number, matchHandler: Function, opt_fullString?: string): void;
    }
}

