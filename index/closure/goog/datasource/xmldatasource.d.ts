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
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/dom/xml.d.ts" />
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
/// <reference path="../../../closure/goog/net/httpstatus.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
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
     * Data source whose backing is an xml node
     *
     * @param {Node} node The XML node. Can be null.
     * @param {goog.ds.XmlDataSource} parent Parent of XML element. Can be null.
     * @param {string=} opt_name The name of this node relative to the parent node.
     *
     * @extends {goog.ds.DataNode}
     * @constructor
     */
    class XmlDataSource extends goog.ds.DataNode {
        /**
         * Data source whose backing is an xml node
         *
         * @param {Node} node The XML node. Can be null.
         * @param {goog.ds.XmlDataSource} parent Parent of XML element. Can be null.
         * @param {string=} opt_name The name of this node relative to the parent node.
         *
         * @extends {goog.ds.DataNode}
         * @constructor
         */
        constructor(node: Node, parent: goog.ds.XmlDataSource, opt_name?: string);
    }

    /**
     * Data source whose backing is an XMLHttpRequest,
     *
     * A URI of an empty string will mean that no request is made
     * and the data source will be a single, empty node.
     *
     * @param {(string,goog.Uri)} uri URL of the XMLHttpRequest.
     * @param {string} name Name of the datasource.
     *
     * implements goog.ds.XmlHttpDataSource.
     * @constructor
     * @extends {goog.ds.XmlDataSource}
     * @final
     */
    class XmlHttpDataSource extends goog.ds.XmlDataSource {
        /**
         * Data source whose backing is an XMLHttpRequest,
         *
         * A URI of an empty string will mean that no request is made
         * and the data source will be a single, empty node.
         *
         * @param {(string,goog.Uri)} uri URL of the XMLHttpRequest.
         * @param {string} name Name of the datasource.
         *
         * implements goog.ds.XmlHttpDataSource.
         * @constructor
         * @extends {goog.ds.XmlDataSource}
         * @final
         */
        constructor(uri: any /*missing*/, name: string);
    }
}

