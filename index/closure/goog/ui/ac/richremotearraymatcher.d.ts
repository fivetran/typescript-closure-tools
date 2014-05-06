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
/// <reference path="../../../../closure/goog/ui/ac/remotearraymatcher.d.ts" />

declare module goog.ui.ac {

    /**
     * An array matcher that requests rich matches via ajax and converts them into
     * rich rows.
     * @param {string} url The Uri which generates the auto complete matches.  The
     *     search term is passed to the server as the 'token' query param.
     * @param {boolean=} opt_noSimilar If true, request that the server does not do
     *     similarity matches for the input token against the dictionary.
     *     The value is sent to the server as the 'use_similar' query param which is
     *     either "1" (opt_noSimilar==false) or "0" (opt_noSimilar==true).
     * @constructor
     * @extends {goog.ui.ac.RemoteArrayMatcher}
     */
    class RichRemoteArrayMatcher extends goog.ui.ac.RemoteArrayMatcher {
        /**
         * An array matcher that requests rich matches via ajax and converts them into
         * rich rows.
         * @param {string} url The Uri which generates the auto complete matches.  The
         *     search term is passed to the server as the 'token' query param.
         * @param {boolean=} opt_noSimilar If true, request that the server does not do
         *     similarity matches for the input token against the dictionary.
         *     The value is sent to the server as the 'use_similar' query param which is
         *     either "1" (opt_noSimilar==false) or "0" (opt_noSimilar==true).
         * @constructor
         * @extends {goog.ui.ac.RemoteArrayMatcher}
         */
        constructor(url: string, opt_noSimilar?: boolean);
    
        /**
         * Set the filter that is called before the array matches are returned.
         * @param {Function} rowFilter A function(rows) that returns an array of rows as
         *     a subset of the rows input array.
         */
        setRowFilter(rowFilter: Function): void;
    }
}

