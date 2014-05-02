// Generated Thu May  1 21:07:45 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/net/httpstatus.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/net/errorcode.d.ts" />
/// <reference path="../../../goog/json/json.d.ts" />
/// <reference path="../../../goog/net/xhrlike.d.ts" />
/// <reference path="../../../goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../goog/net/xmlhttp.d.ts" />
/// <reference path="../../../goog/uri/utils.d.ts" />
/// <reference path="../../../goog/net/eventtype.d.ts" />
/// <reference path="../../../goog/net/xhrio.d.ts" />
/// <reference path="../../../goog/structs/queue.d.ts" />
/// <reference path="../../../goog/structs/pool.d.ts" />
/// <reference path="../../../goog/structs/node.d.ts" />
/// <reference path="../../../goog/structs/heap.d.ts" />
/// <reference path="../../../goog/structs/priorityqueue.d.ts" />
/// <reference path="../../../goog/structs/prioritypool.d.ts" />
/// <reference path="../../../goog/net/xhriopool.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/dom/xml.d.ts" />
/// <reference path="../../../goog/testing/net/xhrio.d.ts" />

declare module goog.testing.net {

    /**
     * A pool containing a single mock XhrIo object.
     *
     * @param {goog.testing.net.XhrIo=} opt_xhr The mock XhrIo object.
     * @constructor
     * @extends {goog.net.XhrIoPool}
     * @final
     */
    class XhrIoPool extends goog.net.XhrIoPool {
        /**
         * A pool containing a single mock XhrIo object.
         *
         * @param {goog.testing.net.XhrIo=} opt_xhr The mock XhrIo object.
         * @constructor
         * @extends {goog.net.XhrIoPool}
         * @final
         */
        constructor(opt_xhr?: goog.testing.net.XhrIo);
    
        /**
         * Get the mock XhrIo used by this pool.
         *
         * @return {!goog.testing.net.XhrIo} The mock XhrIo.
         */
        getXhr(): goog.testing.net.XhrIo;
    }
}

