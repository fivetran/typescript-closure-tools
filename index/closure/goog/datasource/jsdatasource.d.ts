// Generated Thu May  1 21:09:18 PDT 2014

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
/// <reference path="../../goog/datasource/datasource.d.ts" />
/// <reference path="../../goog/datasource/expr.d.ts" />
/// <reference path="../../goog/datasource/datamanager.d.ts" />

declare module goog.ds {

    /**
     * Data source whose backing is JavaScript data
     *
     * Names that are reserved for system use and shouldn't be used for data node
     * names: eval, toSource, toString, unwatch, valueOf, watch. Behavior is
     * undefined if these names are used.
     *
     * @param {Object} root The root JS node.
     * @param {string} dataName The name of this node relative to the parent node.
     * @param {Object=} opt_parent Optional parent of this JsDataSource.
     *
     * implements goog.ds.DataNode.
     * @constructor
     * @extends {goog.ds.DataNode}
     */
    class JsDataSource extends goog.ds.DataNode {
        /**
         * Data source whose backing is JavaScript data
         *
         * Names that are reserved for system use and shouldn't be used for data node
         * names: eval, toSource, toString, unwatch, valueOf, watch. Behavior is
         * undefined if these names are used.
         *
         * @param {Object} root The root JS node.
         * @param {string} dataName The name of this node relative to the parent node.
         * @param {Object=} opt_parent Optional parent of this JsDataSource.
         *
         * implements goog.ds.DataNode.
         * @constructor
         * @extends {goog.ds.DataNode}
         */
        constructor(root: Object, dataName: string, opt_parent?: Object);
    
        /**
         * The root JS object. Can be null.
         * @type {*}
         * @protected
         * @suppress {underscore|visibility}
         */
        root_: any;
    
        /**
         * Sets the root JS object
         * @param {Object} root The root JS object. Can be null.
         *
         * @protected
         */
        setRoot(root: Object): void;
    }

    /**
     * Data source for JavaScript properties that arent objects. Contains reference
     * to parent object so that you can set the vaule
     *
     * @param {goog.ds.DataNode} parent Parent object.
     * @param {string} dataName Name of this property.
     * @param {goog.ds.DataNode=} opt_parentDataNode The parent data node. If
     *     omitted, assumes that the parent object is the parent data node.
     *
     * @constructor
     * @extends {goog.ds.BaseDataNode}
     * @final
     */
    class JsPropertyDataSource extends goog.ds.BaseDataNode {
        /**
         * Data source for JavaScript properties that arent objects. Contains reference
         * to parent object so that you can set the vaule
         *
         * @param {goog.ds.DataNode} parent Parent object.
         * @param {string} dataName Name of this property.
         * @param {goog.ds.DataNode=} opt_parentDataNode The parent data node. If
         *     omitted, assumes that the parent object is the parent data node.
         *
         * @constructor
         * @extends {goog.ds.BaseDataNode}
         * @final
         */
        constructor(parent: goog.ds.DataNode, dataName: string, opt_parentDataNode?: goog.ds.DataNode);
    
        /**
         * Get the value of the node
         * @return {Object} The value of the node, or null if no value.
         */
        get(): Object;
    }
}

