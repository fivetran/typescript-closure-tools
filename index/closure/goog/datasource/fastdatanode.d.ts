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
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
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
/// <reference path="../../../closure/goog/datasource/datasource.d.ts" />
/// <reference path="../../../closure/goog/datasource/expr.d.ts" />
/// <reference path="../../../closure/goog/datasource/datamanager.d.ts" />

declare module goog.ds {

    /**
     * Creates a new abstract data node.
     * @param {string} dataName Name of the datanode.
     * @param {goog.ds.DataNode=} opt_parent Parent of this data node.
     * @constructor
     * @extends {goog.ds.DataNodeList}
     */
    class AbstractFastDataNode extends goog.ds.DataNodeList {
        /**
         * Creates a new abstract data node.
         * @param {string} dataName Name of the datanode.
         * @param {goog.ds.DataNode=} opt_parent Parent of this data node.
         * @constructor
         * @extends {goog.ds.DataNodeList}
         */
        constructor(dataName: string, opt_parent?: goog.ds.DataNode);
    }

    /**
     * Creates a new fast data node, using the properties of root.
     * @param {Object} root JSON-like object to initialize data node from.
     * @param {string} dataName Name of this data node.
     * @param {goog.ds.DataNode=} opt_parent Parent of this data node.
     * @extends {goog.ds.AbstractFastDataNode}
     * @constructor
     */
    class FastDataNode extends goog.ds.AbstractFastDataNode {
        /**
         * Creates a new fast data node, using the properties of root.
         * @param {Object} root JSON-like object to initialize data node from.
         * @param {string} dataName Name of this data node.
         * @param {goog.ds.DataNode=} opt_parent Parent of this data node.
         * @extends {goog.ds.AbstractFastDataNode}
         * @constructor
         */
        constructor(root: Object, dataName: string, opt_parent?: goog.ds.DataNode);
    
        /**
         * Add all attributes of object to this data node.
         * @param {Object} object Object to add attributes from.
         * @protected
         */
        extendWith(object: Object): void;
    
        /**
         * Returns a javascript object representation of this data node. You should
         * not modify the object returned by this function.
         * @return {!Object} Javascript object representation of this data node.
         */
        getJsObject(): Object;
    
        /**
         * Creates a deep copy of this data node.
         * @return {goog.ds.FastDataNode} Clone of this data node.
         */
        clone(): goog.ds.FastDataNode;
    }

    /**
     * Creates a new data node wrapping a primitive value.
     * @param {number|boolean|string} value Value the value to wrap.
     * @param {string} dataName name Name of this data node.
     * @param {goog.ds.DataNode=} opt_parent Parent of this data node.
     * @extends {goog.ds.AbstractFastDataNode}
     * @constructor
     * @final
     */
    class PrimitiveFastDataNode extends goog.ds.AbstractFastDataNode {
        /**
         * Creates a new data node wrapping a primitive value.
         * @param {number|boolean|string} value Value the value to wrap.
         * @param {string} dataName name Name of this data node.
         * @param {goog.ds.DataNode=} opt_parent Parent of this data node.
         * @extends {goog.ds.AbstractFastDataNode}
         * @constructor
         * @final
         */
        constructor(value: any /*number|boolean|string*/, dataName: string, opt_parent?: goog.ds.DataNode);
    
        /**
         * Returns a javascript object representation of this data node. You should
         * not modify the object returned by this function.
         * @return {*} Javascript object representation of this data node.
         */
        getJsObject(): any;
    }

    /**
     * Creates a new list node from an array.
     * @param {Array} values values hold by this list node.
     * @param {string} dataName name of this node.
     * @param {goog.ds.DataNode=} opt_parent parent of this node.
     * @extends {goog.ds.AbstractFastDataNode}
     * @constructor
     * @final
     */
    class FastListNode extends goog.ds.AbstractFastDataNode {
        /**
         * Creates a new list node from an array.
         * @param {Array} values values hold by this list node.
         * @param {string} dataName name of this node.
         * @param {goog.ds.DataNode=} opt_parent parent of this node.
         * @extends {goog.ds.AbstractFastDataNode}
         * @constructor
         * @final
         */
        constructor(values: any[], dataName: string, opt_parent?: goog.ds.DataNode);
    
        /**
         * Returns a javascript object representation of this data node. You should
         * not modify the object returned by this function.
         * @return {!Object} Javascript object representation of this data node.
         */
        getJsObject(): Object;
    
        /**
         * Returns the index of a named child nodes. This method only works if
         * this list uses mixed name/indexed lookup, i.e. if its child node have
         * an 'id' attribute.
         * @param {string} name Name of child node to determine index of.
         * @return {number} Index of child node named name.
         */
        indexOf(name: string): number;
    }
}

declare module goog.ds.FastDataNode {

    /**
     * Creates a new FastDataNode structure initialized from object. This will
     * return an instance of the most suitable sub-class of FastDataNode.
     *
     * You should not modify object after creating a fast data node from it
     * or assume that changing object changes the data node. Doing so results
     * in undefined behaviour.
     *
     * @param {Object|number|boolean|string} object Object to initialize data
     *     node from.
     * @param {string} dataName Name of data node.
     * @param {goog.ds.DataNode=} opt_parent Parent of data node.
     * @return {!goog.ds.AbstractFastDataNode} Data node representing object.
     */
    function fromJs(object: any /*Object|number|boolean|string*/, dataName: string, opt_parent?: goog.ds.DataNode): goog.ds.AbstractFastDataNode;
}

