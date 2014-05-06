/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/uri/uri.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/datasource/datasource.d.ts" />
/// <reference path="../../../closure/goog/datasource/expr.d.ts" />
/// <reference path="../../../closure/goog/datasource/datamanager.d.ts" />
/// <reference path="../../../closure/goog/datasource/fastdatanode.d.ts" />
/// <reference path="../../../closure/goog/net/httpstatus.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/net/errorcode.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/net/xhrlike.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttp.d.ts" />
/// <reference path="../../../closure/goog/net/eventtype.d.ts" />
/// <reference path="../../../closure/goog/net/xhrio.d.ts" />

declare module goog.ds {

    /**
     * Similar to JsonDataSource, with using XMLHttpRequest for transport
     * Currently requires the result be a JS object that can be evaluated and
     * set to a variable and doesn't require strict JSON notation.
     *
     * @param {string || goog.Uri} uri URI for the request.
     * @param {string} name Name of the datasource.
     * @param {string=} opt_startText Text to expect/strip before JS response.
     * @param {string=} opt_endText Text to expect/strip after JS response.
     * @param {boolean=} opt_usePost If true, use POST. Defaults to false (GET).
     *
     * @extends {goog.ds.FastDataNode}
     * @constructor
     * @final
     */
    class JsXmlHttpDataSource extends goog.ds.FastDataNode {
        /**
         * Similar to JsonDataSource, with using XMLHttpRequest for transport
         * Currently requires the result be a JS object that can be evaluated and
         * set to a variable and doesn't require strict JSON notation.
         *
         * @param {string || goog.Uri} uri URI for the request.
         * @param {string} name Name of the datasource.
         * @param {string=} opt_startText Text to expect/strip before JS response.
         * @param {string=} opt_endText Text to expect/strip after JS response.
         * @param {boolean=} opt_usePost If true, use POST. Defaults to false (GET).
         *
         * @extends {goog.ds.FastDataNode}
         * @constructor
         * @final
         */
        constructor(uri: any /*missing*/, name: string, opt_startText?: string, opt_endText?: string, opt_usePost?: boolean);
    
        /**
         * Sets the request data. This can be used if it is required to
         * send a specific body rather than build the body from the query
         * parameters. Only used in POST requests.
         * @param {string} data The data to send in the request body.
         */
        setQueryData(data: string): void;
    }
}

