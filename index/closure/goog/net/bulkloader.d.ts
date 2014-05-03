// Generated Sat May  3 12:14:25 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/net/bulkloaderhelper.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/net/httpstatus.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/net/errorcode.d.ts" />
/// <reference path="../../goog/json/json.d.ts" />
/// <reference path="../../goog/net/xhrlike.d.ts" />
/// <reference path="../../goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../goog/net/xmlhttp.d.ts" />
/// <reference path="../../goog/uri/utils.d.ts" />
/// <reference path="../../goog/net/eventtype.d.ts" />
/// <reference path="../../goog/net/xhrio.d.ts" />

declare module goog.net {

    /**
     * Class used to load multiple URIs.
     * @param {Array.<string|goog.Uri>} uris The URIs to load.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class BulkLoader extends goog.events.EventTarget {
        /**
         * Class used to load multiple URIs.
         * @param {Array.<string|goog.Uri>} uris The URIs to load.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(uris: any /*string|goog.Uri*/[]);
    
        /**
         * Gets the response texts, in order.
         * @return {Array.<string>} The response texts.
         */
        getResponseTexts(): string[];
    
        /**
         * Gets the request Uris.
         * @return {Array.<string>} The request URIs, in order.
         */
        getRequestUris(): string[];
    
        /**
         * Starts the process of loading the URIs.
         */
        load(): void;
    }
}

