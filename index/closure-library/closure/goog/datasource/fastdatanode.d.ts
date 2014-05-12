/// <reference path="../../../globals.d.ts" />
/// <reference path="./datasource.d.ts" />

declare module goog.ds {

    class AbstractFastDataNode extends AbstractFastDataNode.__Class { }
    module AbstractFastDataNode {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ds.DataNodeList.__Class {
    
            /**
             * Creates a new abstract data node.
             * @param {string} dataName Name of the datanode.
             * @param {goog.ds.DataNode=} opt_parent Parent of this data node.
             * @constructor
             * @extends {goog.ds.DataNodeList}
             */
            constructor(dataName: string, opt_parent?: goog.ds.DataNode);
        }
    }

    class FastDataNode extends FastDataNode.__Class { }
    module FastDataNode {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ds.AbstractFastDataNode.__Class {
    
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
    }

    class PrimitiveFastDataNode extends PrimitiveFastDataNode.__Class { }
    module PrimitiveFastDataNode {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ds.AbstractFastDataNode.__Class {
    
            /**
             * Creates a new data node wrapping a primitive value.
             * @param {number|boolean|string} value Value the value to wrap.
             * @param {string} dataName name Name of this data node.
             * @param {goog.ds.DataNode=} opt_parent Parent of this data node.
             * @extends {goog.ds.AbstractFastDataNode}
             * @constructor
             * @final
             */
            constructor(value: number, dataName: string, opt_parent?: goog.ds.DataNode);
            /**
             * Creates a new data node wrapping a primitive value.
             * @param {number|boolean|string} value Value the value to wrap.
             * @param {string} dataName name Name of this data node.
             * @param {goog.ds.DataNode=} opt_parent Parent of this data node.
             * @extends {goog.ds.AbstractFastDataNode}
             * @constructor
             * @final
             */
            constructor(value: boolean, dataName: string, opt_parent?: goog.ds.DataNode);
            /**
             * Creates a new data node wrapping a primitive value.
             * @param {number|boolean|string} value Value the value to wrap.
             * @param {string} dataName name Name of this data node.
             * @param {goog.ds.DataNode=} opt_parent Parent of this data node.
             * @extends {goog.ds.AbstractFastDataNode}
             * @constructor
             * @final
             */
            constructor(value: string, dataName: string, opt_parent?: goog.ds.DataNode);
    
            /**
             * Returns a javascript object representation of this data node. You should
             * not modify the object returned by this function.
             * @return {*} Javascript object representation of this data node.
             */
            getJsObject(): any;
        }
    }

    class FastListNode extends FastListNode.__Class { }
    module FastListNode {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ds.AbstractFastDataNode.__Class {
    
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
    function fromJs(object: Object, dataName: string, opt_parent?: goog.ds.DataNode): goog.ds.AbstractFastDataNode;
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
    function fromJs(object: number, dataName: string, opt_parent?: goog.ds.DataNode): goog.ds.AbstractFastDataNode;
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
    function fromJs(object: boolean, dataName: string, opt_parent?: goog.ds.DataNode): goog.ds.AbstractFastDataNode;
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
    function fromJs(object: string, dataName: string, opt_parent?: goog.ds.DataNode): goog.ds.AbstractFastDataNode;
}
