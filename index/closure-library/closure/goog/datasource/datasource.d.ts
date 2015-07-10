/// <reference path="../../../globals.d.ts" />
/// <reference path="../log/log.d.ts" />

declare module goog.ds {

    class DataNode extends DataNode__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class DataNode__Class  { 
    
            /**
             * Interface for node in rich data tree.
             *
             * Names that are reserved for system use and shouldn't be used for data node
             * names: eval, toSource, toString, unwatch, valueOf, watch. Behavior is
             * undefined if these names are used.
             *
             * @constructor
             */
            constructor();
    
            /**
             * Get the value of the node
             * @param {...?} var_args Do not check arity of arguments, because
             *     some subclasses require args.
             * @return {*} The value of the node, or null if no value.
             */
            get(...var_args: any[]): any;
    
            /**
             * Set the value of the node
             * @param {*} value The new value of the node.
             */
            set(value: any): void;
    
            /**
             * Gets all of the child nodes of the current node.
             * Should return an empty DataNode list if no child nodes.
             * @param {string=} opt_selector String selector to choose child nodes.
             * @return {!goog.ds.DataNodeList} The child nodes.
             */
            getChildNodes(opt_selector?: string): goog.ds.DataNodeList;
    
            /**
             * Gets a named child node of the current node
             * @param {string} name The node name.
             * @param {boolean=} opt_canCreate Whether to create a child node if it does not
             *     exist.
             * @return {goog.ds.DataNode} The child node, or null
             * if no node of this name exists.
             */
            getChildNode(name: string, opt_canCreate?: boolean): goog.ds.DataNode;
    
            /**
             * Gets the value of a child node
             * @param {string} name The node name.
             * @return {*} The value of the node, or null if no value or the child node
             *     doesn't exist.
             */
            getChildNodeValue(name: string): any;
    
            /**
             * Sets a named child node of the current node.
             *
             * @param {string} name The node name.
             * @param {Object} value The value to set, can be DataNode, object, property,
             *     or null. If value is null, removes the child node.
             * @return {Object} The child node, if the node was set.
             */
            setChildNode(name: string, value: Object): Object;
    
            /**
             * Get the name of the node relative to the parent node
             * @return {string} The name of the node.
             */
            getDataName(): string;
    
            /**
             * Set the name of the node relative to the parent node
             * @param {string} name The name of the node.
             */
            setDataName(name: string): void;
    
            /**
             * Gets the a qualified data path to this node
             * @return {string} The data path.
             */
            getDataPath(): string;
    
            /**
             * Load or reload the backing data for this node
             */
            load: any /*missing*/;
    
            /**
             * Gets the state of the backing data for this node
             * @return {goog.ds.LoadState} The state.
             */
            getLoadState(): goog.ds.LoadState;
    
            /**
             * Whether the value of this node is a homogeneous list of data
             * @return {boolean} True if a list.
             */
            isList(): boolean;
    } 
    

    class BaseDataNode extends BaseDataNode__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class BaseDataNode__Class  { 
    
            /**
             * Base class for data node functionality, has default implementations for
             * many of the functions.
             *
             * implements {goog.ds.DataNode}
             * @constructor
             */
            constructor();
    
            /**
             * Set the value of the node
             * @param {Object} value The new value of the node.
             */
            set(value: Object): void;
    
            /**
             * Gets all of the child nodes of the current node.
             * Should return an empty DataNode list if no child nodes.
             * @param {string=} opt_selector String selector to choose child nodes.
             * @return {!goog.ds.DataNodeList} The child nodes.
             */
            getChildNodes(opt_selector?: string): goog.ds.DataNodeList;
    
            /**
             * Gets a named child node of the current node
             * @param {string} name The node name.
             * @param {boolean=} opt_canCreate Whether you can create the child node if
             *     it doesn't exist already.
             * @return {goog.ds.DataNode} The child node, or null if no node of
             *     this name exists and opt_create is false.
             */
            getChildNode(name: string, opt_canCreate?: boolean): goog.ds.DataNode;
    
            /**
             * Gets the value of a child node
             * @param {string} name The node name.
             * @return {Object} The value of the node, or null if no value or the
             *     child node doesn't exist.
             */
            getChildNodeValue(name: string): Object;
    
            /**
             * Get the name of the node relative to the parent node
             * @return {string} The name of the node.
             */
            getDataName(): string;
    
            /**
             * Gets the a qualified data path to this node
             * @return {string} The data path.
             */
            getDataPath(): string;
    
            /**
             * Load or reload the backing data for this node
             */
            load: any /*missing*/;
    
            /**
             * Gets the state of the backing data for this node
             * @return {goog.ds.LoadState} The state.
             */
            getLoadState(): goog.ds.LoadState;
    
            /**
             * Gets the parent node. Subclasses implement this function
             * @type {Function}
             * @protected
             */
            getParent: Function;
    } 
    

    class DataNodeList extends DataNodeList__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class DataNodeList__Class extends goog.ds.DataNode__Class  { 
    
            /**
             * Interface for node list in rich data tree.
             *
             * Has both map and list-style accessors
             *
             * @constructor
             * @extends {goog.ds.DataNode}
             */
            constructor();
    
            /**
             * Add a node to the node list.
             * If the node has a dataName, uses this for the key in the map.
             *
             * @param {goog.ds.DataNode} node The node to add.
             */
            add(node: goog.ds.DataNode): void;
    
            /**
             * Get a node by index
             * Returns null if the index is out of range
             *
             * @param {number} index The index of the node.
             * @return {goog.ds.DataNode} The node, or null if doesn't exist.
             */
            getByIndex(index: number): goog.ds.DataNode;
    
            /**
             * Gets the size of the node list
             *
             * @return {number} The size of the list.
             */
            getCount(): number;
    
            /**
             * Sets a node in the list of a given name
             * @param {string} name Name of the node.
             * @param {goog.ds.DataNode} node The node.
             */
            setNode(name: string, node: goog.ds.DataNode): void;
    
            /**
             * Removes a node in the list of a given name
             * @param {string} name Name of the node.
             * @return {boolean} True if node existed and was deleted.
             */
            removeNode(name: string): boolean;
    } 
    

    class BasicNodeList extends BasicNodeList__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class BasicNodeList__Class extends goog.ds.DataNodeList__Class  { 
    
            /**
             * Simple node list implementation with underlying array and map
             * implements goog.ds.DataNodeList.
             *
             * Names that are reserved for system use and shouldn't be used for data node
             * names: eval, toSource, toString, unwatch, valueOf, watch. Behavior is
             * undefined if these names are used.
             *
             * @param {Array.<goog.ds.DataNode>=} opt_nodes optional nodes to add to list.
             * @constructor
             * @extends {goog.ds.DataNodeList}
             */
            constructor(opt_nodes?: goog.ds.DataNode[]);
    
            /**
             * Get the index of a named node
             * @param {string} name The name of the node to get the index of.
             * @return {number|undefined} The index.
             */
            indexOf(name: string): number|any /*undefined*/;
    } 
    

    class EmptyNodeList extends EmptyNodeList__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class EmptyNodeList__Class extends goog.ds.BasicNodeList__Class  { 
    
            /**
             * Immulatable empty node list
             * @extends {goog.ds.BasicNodeList}
             * @constructor
             * @final
             */
            constructor();
    } 
    

    class SortedNodeList extends SortedNodeList__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class SortedNodeList__Class extends goog.ds.BasicNodeList__Class  { 
    
            /**
             * Node list implementation which maintains sort order during insertion and
             * modification operations based on a comparison function.
             *
             * The SortedNodeList does not guarantee sort order will be maintained if
             * the underlying data nodes are modified externally.
             *
             * Names that are reserved for system use and shouldn't be used for data node
             * names: eval, toSource, toString, unwatch, valueOf, watch. Behavior is
             * undefined if these names are used.
             *
             * @param {Function} compareFn Comparison function by which the
             *     node list is sorted. Should take 2 arguments to compare, and return a
             *     negative integer, zero, or a positive integer depending on whether the
             *     first argument is less than, equal to, or greater than the second.
             * @param {Array.<goog.ds.DataNode>=} opt_nodes optional nodes to add to list;
             *    these are assumed to be in sorted order.
             * @extends {goog.ds.BasicNodeList}
             * @constructor
             */
            constructor(compareFn: Function, opt_nodes?: goog.ds.DataNode[]);
    
            /**
             * Adds the given node to the end of the SortedNodeList. This should
             * only be used when the caller can guarantee that the sort order will
             * be maintained according to this SortedNodeList's compareFn (e.g.
             * when initializing a new SortedNodeList from a list of nodes that has
             * already been sorted).
             * @param {goog.ds.DataNode} node The node to append.
             */
            append(node: goog.ds.DataNode): void;
    } 
    

    /**
     * Enum for load state of a DataNode.
     * @enum {string}
     */
    enum LoadState { LOADED, LOADING, FAILED, NOT_LOADED } 

    /**
     * The character denoting an attribute.
     * @type {string}
     */
    var STR_ATTRIBUTE_START: string;

    /**
     * The character denoting all children.
     * @type {string}
     */
    var STR_ALL_CHILDREN_SELECTOR: string;

    /**
     * The wildcard character.
     * @type {string}
     */
    var STR_WILDCARD: string;

    /**
     * The character denoting path separation.
     * @type {string}
     */
    var STR_PATH_SEPARATOR: string;

    /**
     * The character denoting the start of an array.
     * @type {string}
     */
    var STR_ARRAY_START: string;

    /**
     * Shared logger instance for data package
     * @type {goog.log.Logger}
     */
    var logger: goog.log.Logger;
}

declare module goog.ds.Util {

    /**
     * Create a data node that references another data node,
     * useful for pointer-like functionality.
     * All functions will return same values as the original node except for
     * getDataName()
     * @param {!goog.ds.DataNode} node The original node.
     * @param {string} name The new name.
     * @return {!goog.ds.DataNode} The new data node.
     */
    function makeReferenceNode(node: goog.ds.DataNode, name: string): goog.ds.DataNode;
}
