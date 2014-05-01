// Generated Wed Apr 30 22:42:43 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/uri/utils.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/uri/uri.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/json/json.d.ts" />
/// <reference path="../../../goog/net/httpstatus.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/net/errorcode.d.ts" />
/// <reference path="../../../goog/net/xhrlike.d.ts" />
/// <reference path="../../../goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../goog/net/xmlhttp.d.ts" />
/// <reference path="../../../goog/net/eventtype.d.ts" />
/// <reference path="../../../goog/net/xhrio.d.ts" />
/// <reference path="../../../goog/ui/ac/remotearraymatcher.d.ts" />

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

