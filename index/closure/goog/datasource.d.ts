// Generated Wed Apr 30 16:41:39 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/json.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/log.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/net.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/timer.d.ts" />
/// <reference path="../goog/uri.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.ds.DataManager' {

    /**
     * Get the global instance
     * @return {!goog.ds.DataManager} The data manager singleton.
     */
    function getInstance(): goog.ds.DataManager;

    /**
     * Clears the global instance (for unit tests to reset state).
     */
    function clearInstance(): void;
}

declare module 'goog.ds' {

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

    /**
     * Create a DataManger
     * @extends {goog.ds.DataNode}
     * @constructor
     * @final
     */
    class DataManager extends goog.ds.DataNode {
        /**
         * Create a DataManger
         * @extends {goog.ds.DataNode}
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Add a data source
         * @param {goog.ds.DataNode} ds The data source.
         * @param {boolean=} opt_autoload Whether to automatically load the data,
         *   defaults to false.
         * @param {string=} opt_name Optional name, can also get name
         *   from the datasource.
         */
        addDataSource(ds: goog.ds.DataNode, opt_autoload?: boolean, opt_name?: string): void;
    
        /**
         * Create an alias for a data path, very similar to assigning a variable.
         * For example, you can set $CurrentContact -> $Request/Contacts[5], and all
         * references to $CurrentContact will be procesed on $Request/Contacts[5].
         *
         * Aliases will hide datasources of the same name.
         *
         * @param {string} name Alias name, must be a top level path ($Foo).
         * @param {string} dataPath Data path being aliased.
         */
        aliasDataSource(name: string, dataPath: string): void;
    
        /**
         * Gets a named child node of the current node.
         *
         * @param {string} name The node name.
         * @return {goog.ds.DataNode} The child node,
         *   or null if no node of this name exists.
         */
        getDataSource(name: string): goog.ds.DataNode;
    
        /**
         * Get the value of the node
         * @return {Object} The value of the node, or null if no value.
         * @override
         */
        get(): Object;
    
        /** @override */
        set(): void;
    
        /** @override */
        getChildNodes(): void;
    
        /**
         * Gets a named child node of the current node
         * @param {string} name The node name.
         * @return {goog.ds.DataNode} The child node,
         *     or null if no node of this name exists.
         * @override
         */
        getChildNode(name: string): goog.ds.DataNode;
    
        /** @override */
        getChildNodeValue(): void;
    
        /**
         * Get the name of the node relative to the parent node
         * @return {string} The name of the node.
         * @override
         */
        getDataName(): string;
    
        /**
         * Gets the a qualified data path to this node
         * @return {string} The data path.
         * @override
         */
        getDataPath(): string;
    
        /**
         * Load or reload the backing data for this node
         * only loads datasources flagged with autoload
         * @override
         */
        load(): void;
    
        /**
         * Gets the state of the backing data for this node
         * @return {goog.ds.LoadState} The state.
         * @override
         */
        getLoadState: any /*missing*/;
    
        /**
         * Whether the value of this node is a homogeneous list of data
         * @return {boolean} True if a list.
         * @override
         */
        isList(): boolean;
    
        /**
         * Get the total count of events fired (mostly for debugging)
         * @return {number} Count of events.
         */
        getEventCount(): number;
    
        /**
         * Adds a listener
         * Listeners should fire when any data with path that has dataPath as substring
         * is changed.
         * TODO(user) Look into better listener handling
         *
         * @param {Function} fn Callback function, signature function(dataPath, id).
         * @param {string} dataPath Fully qualified data path.
         * @param {string=} opt_id A value passed back to the listener when the dataPath
         *   is matched.
         */
        addListener(fn: Function, dataPath: string, opt_id?: string): void;
    
        /**
         * Adds an indexed listener.
         *
         * Indexed listeners allow for '*' in data paths. If a * exists, will match
         * all values and return the matched values in an array to the callback.
         *
         * Currently uses a promiscuous match algorithm: Matches everything before the
         * first '*', and then does a regex match for all of the returned events.
         * Although this isn't optimized, it is still an improvement as you can collapse
         * 100's of listeners into a single regex match
         *
         * @param {Function} fn Callback function, signature (dataPath, id, indexes).
         * @param {string} dataPath Fully qualified data path.
         * @param {string=} opt_id A value passed back to the listener when the dataPath
         *   is matched.
         */
        addIndexedListener(fn: Function, dataPath: string, opt_id?: string): void;
    
        /**
         * Removes indexed listeners with a given callback function, and optional
         * matching datapath and matching id.
         *
         * @param {Function} fn Callback function, signature function(dataPath, id).
         * @param {string=} opt_dataPath Fully qualified data path.
         * @param {string=} opt_id A value passed back to the listener when the dataPath
         *   is matched.
         */
        removeIndexedListeners(fn: Function, opt_dataPath?: string, opt_id?: string): void;
    
        /**
         * Removes listeners with a given callback function, and optional
         * matching dataPath and matching id
         *
         * @param {Function} fn Callback function, signature function(dataPath, id).
         * @param {string=} opt_dataPath Fully qualified data path.
         * @param {string=} opt_id A value passed back to the listener when the dataPath
         *   is matched.
         */
        removeListeners(fn: Function, opt_dataPath?: string, opt_id?: string): void;
    
        /**
         * Get the total number of listeners (per expression listened to, so may be
         * more than number of times addListener() has been called
         * @return {number} Number of listeners.
         */
        getListenerCount(): number;
    
        /**
         * Disables the sending of all data events during the execution of the given
         * callback. This provides a way to avoid useless notifications of small changes
         * when you will eventually send a data event manually that encompasses them
         * all.
         *
         * Note that this function can not be called reentrantly.
         *
         * @param {Function} callback Zero-arg function to execute.
         */
        runWithoutFiringDataChanges(callback: Function): void;
    
        /**
         * Fire a data change event to all listeners
         *
         * If the path matches the path of a listener, the listener will fire
         *
         * If your path is the parent of a listener, the listener will fire. I.e.
         * if $Contacts/bob@bob.com changes, then we will fire listener for
         * $Contacts/bob@bob.com/Name as well, as the assumption is that when
         * a parent changes, all children are invalidated.
         *
         * If your path is the child of a listener, the listener may fire, depending
         * on the ancestor depth.
         *
         * A listener for $Contacts might only be interested if the contact name changes
         * (i.e. $Contacts doesn't fire on $Contacts/bob@bob.com/Name),
         * while a listener for a specific contact might
         * (i.e. $Contacts/bob@bob.com would fire on $Contacts/bob@bob.com/Name).
         * Adding "/..." to a lisetener path listens to all children, and adding "/*" to
         * a listener path listens only to direct children
         *
         * @param {string} dataPath Fully qualified data path.
         */
        fireDataChange(dataPath: string): void;
    }

    /**
     * Interface for node in rich data tree.
     *
     * Names that are reserved for system use and shouldn't be used for data node
     * names: eval, toSource, toString, unwatch, valueOf, watch. Behavior is
     * undefined if these names are used.
     *
     * @constructor
     */
    class DataNode {
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
        get: any /*missing*/;
    
        /**
         * Set the value of the node
         * @param {*} value The new value of the node.
         */
        set: any /*missing*/;
    
        /**
         * Gets all of the child nodes of the current node.
         * Should return an empty DataNode list if no child nodes.
         * @param {string=} opt_selector String selector to choose child nodes.
         * @return {goog.ds.DataNodeList} The child nodes.
         */
        getChildNodes: any /*missing*/;
    
        /**
         * Gets a named child node of the current node
         * @param {string} name The node name.
         * @param {boolean=} opt_canCreate Whether to create a child node if it does not
         *     exist.
         * @return {goog.ds.DataNode} The child node, or null
         * if no node of this name exists.
         */
        getChildNode: any /*missing*/;
    
        /**
         * Gets the value of a child node
         * @param {string} name The node name.
         * @return {*} The value of the node, or null if no value or the child node
         *     doesn't exist.
         */
        getChildNodeValue: any /*missing*/;
    
        /**
         * Sets a named child node of the current node.
         *
         * @param {string} name The node name.
         * @param {Object} value The value to set, can be DataNode, object, property,
         *     or null. If value is null, removes the child node.
         * @return {Object} The child node, if the node was set.
         */
        setChildNode: any /*missing*/;
    
        /**
         * Get the name of the node relative to the parent node
         * @return {string} The name of the node.
         */
        getDataName: any /*missing*/;
    
        /**
         * Set the name of the node relative to the parent node
         * @param {string} name The name of the node.
         */
        setDataName: any /*missing*/;
    
        /**
         * Gets the a qualified data path to this node
         * @return {string} The data path.
         */
        getDataPath: any /*missing*/;
    
        /**
         * Load or reload the backing data for this node
         */
        load: any /*missing*/;
    
        /**
         * Gets the state of the backing data for this node
         * @return {goog.ds.LoadState} The state.
         */
        getLoadState: any /*missing*/;
    
        /**
         * Whether the value of this node is a homogeneous list of data
         * @return {boolean} True if a list.
         */
        isList: any /*missing*/;
    }

    /**
     * Base class for data node functionality, has default implementations for
     * many of the functions.
     *
     * implements {goog.ds.DataNode}
     * @constructor
     */
    class BaseDataNode {
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
        set: any /*missing*/;
    
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
        getDataName: any /*missing*/;
    
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

    /**
     * Interface for node list in rich data tree.
     *
     * Has both map and list-style accessors
     *
     * @constructor
     * @extends {goog.ds.DataNode}
     */
    class DataNodeList extends goog.ds.DataNode {
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
        add: any /*missing*/;
    
        /**
         * Get a node by string key.
         * Returns null if node doesn't exist.
         *
         * @param {string} key String lookup key.
         * @return {*} The node, or null if doesn't exist.
         * @override
         */
        get: any /*missing*/;
    
        /**
         * Get a node by index
         * Returns null if the index is out of range
         *
         * @param {number} index The index of the node.
         * @return {goog.ds.DataNode} The node, or null if doesn't exist.
         */
        getByIndex: any /*missing*/;
    
        /**
         * Gets the size of the node list
         *
         * @return {number} The size of the list.
         */
        getCount: any /*missing*/;
    
        /**
         * Sets a node in the list of a given name
         * @param {string} name Name of the node.
         * @param {goog.ds.DataNode} node The node.
         */
        setNode: any /*missing*/;
    
        /**
         * Removes a node in the list of a given name
         * @param {string} name Name of the node.
         * @return {boolean} True if node existed and was deleted.
         */
        removeNode: any /*missing*/;
    }

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
    class BasicNodeList extends goog.ds.DataNodeList {
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
         * Add a node to the node list.
         * If the node has a dataName, uses this for the key in the map.
         * TODO(user) Remove function as well
         *
         * @param {goog.ds.DataNode} node The node to add.
         * @override
         */
        add(node: goog.ds.DataNode): void;
    
        /**
         * Get a node by string key.
         * Returns null if node doesn't exist.
         *
         * @param {string} key String lookup key.
         * @return {goog.ds.DataNode} The node, or null if doesn't exist.
         * @override
         */
        get(key: string): goog.ds.DataNode;
    
        /**
         * Get a node by index
         * Returns null if the index is out of range
         *
         * @param {number} index The index of the node.
         * @return {goog.ds.DataNode} The node, or null if doesn't exist.
         * @override
         */
        getByIndex(index: number): goog.ds.DataNode;
    
        /**
         * Gets the size of the node list
         *
         * @return {number} The size of the list.
         * @override
         */
        getCount(): number;
    
        /**
         * Sets a node in the list of a given name
         * @param {string} name Name of the node.
         * @param {goog.ds.DataNode} node The node.
         * @override
         */
        setNode(name: string, node: goog.ds.DataNode): void;
    
        /**
         * Removes a node in the list of a given name
         * @param {string} name Name of the node.
         * @return {boolean} True if node existed and was deleted.
         * @override
         */
        removeNode(name: string): boolean;
    
        /**
         * Get the index of a named node
         * @param {string} name The name of the node to get the index of.
         * @return {number|undefined} The index.
         */
        indexOf(name: string): any /*number|any (undefined)*/;
    }

    /**
     * Immulatable empty node list
     * @extends {goog.ds.BasicNodeList}
     * @constructor
     * @final
     */
    class EmptyNodeList extends goog.ds.BasicNodeList {
        /**
         * Immulatable empty node list
         * @extends {goog.ds.BasicNodeList}
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Add a node to the node list.
         * If the node has a dataName, uses this for the key in the map.
         *
         * @param {goog.ds.DataNode} node The node to add.
         * @override
         */
        add(node: goog.ds.DataNode): void;
    }

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
    class SortedNodeList extends goog.ds.BasicNodeList {
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
         * Add a node to the node list, maintaining sort order.
         * If the node has a dataName, uses this for the key in the map.
         *
         * @param {goog.ds.DataNode} node The node to add.
         * @override
         */
        add(node: goog.ds.DataNode): void;
    
        /**
         * Adds the given node to the end of the SortedNodeList. This should
         * only be used when the caller can guarantee that the sort order will
         * be maintained according to this SortedNodeList's compareFn (e.g.
         * when initializing a new SortedNodeList from a list of nodes that has
         * already been sorted).
         * @param {goog.ds.DataNode} node The node to append.
         */
        append(node: goog.ds.DataNode): void;
    
        /**
         * Sets a node in the list of a given name, maintaining sort order.
         * @param {string} name Name of the node.
         * @param {goog.ds.DataNode} node The node.
         * @override
         */
        setNode(name: string, node: goog.ds.DataNode): void;
    }

    /**
     * Create a new expression. An expression uses a string expression language, and
     * from this string and a passed in DataNode can evaluate to a value, DataNode,
     * or a DataNodeList.
     *
     * @param {string=} opt_expr The string expression.
     * @constructor
     * @final
     */
    class Expr {
        /**
         * Create a new expression. An expression uses a string expression language, and
         * from this string and a passed in DataNode can evaluate to a value, DataNode,
         * or a DataNodeList.
         *
         * @param {string=} opt_expr The string expression.
         * @constructor
         * @final
         */
        constructor(opt_expr?: string);
    
        /**
         * Get the source data path for the expression
         * @return {string} The path.
         */
        getSource(): string;
    
        /**
         * Gets the last part of the expression.
         * @return {?string} Last part of the expression.
         */
        getLast(): string;
    
        /**
         * Gets the parent expression of this expression, or null if this is top level
         * @return {goog.ds.Expr} The parent.
         */
        getParent(): goog.ds.Expr;
    
        /**
         * Gets the parent expression of this expression, or null if this is top level
         * @return {goog.ds.Expr} The parent.
         */
        getNext(): goog.ds.Expr;
    
        /**
         * Evaluate an expression on a data node, and return a value
         * Recursively walks through child nodes to evaluate
         * TODO(user) Support other expression functions
         *
         * @param {goog.ds.DataNode=} opt_ds Optional datasource to evaluate against.
         *     If not provided, evaluates against DataManager global root.
         * @return {*} Value of the node, or null if doesn't exist.
         */
        getValue(opt_ds?: goog.ds.DataNode): any;
    
        /**
         * Evaluate an expression on a data node, and return matching nodes
         * Recursively walks through child nodes to evaluate
         *
         * @param {goog.ds.DataNode=} opt_ds Optional datasource to evaluate against.
         *     If not provided, evaluates against data root.
         * @param {boolean=} opt_canCreate If true, will try to create new nodes.
         * @return {goog.ds.DataNodeList} Matching nodes.
         */
        getNodes(opt_ds?: goog.ds.DataNode, opt_canCreate?: boolean): goog.ds.DataNodeList;
    
        /**
         * Evaluate an expression on a data node, and return the first matching node
         * Recursively walks through child nodes to evaluate
         *
         * @param {goog.ds.DataNode=} opt_ds Optional datasource to evaluate against.
         *     If not provided, evaluates against DataManager global root.
         * @param {boolean=} opt_canCreate If true, will try to create new nodes.
         * @return {goog.ds.DataNode} Matching nodes, or null if doesn't exist.
         */
        getNode(opt_ds?: goog.ds.DataNode, opt_canCreate?: boolean): goog.ds.DataNode;
    }

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
    
        /**
         * Return the name of this data node.
         * @return {string} Name of this data noden.
         * @override
         */
        getDataName(): string;
    
        /**
         * Set the name of this data node.
         * @param {string} value Name.
         * @override
         */
        setDataName(value: string): void;
    
        /**
         * Get the path leading to this data node.
         * @return {string} Data path.
         * @override
         */
        getDataPath(): string;
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
         * Not supported for normal FastDataNodes.
         * @param {*} value Value to set data node to.
         * @override
         */
        set(value: any): void;
    
        /** @override */
        getChildNodes(): void;
    
        /**
         * Get a child node by name.
         * @param {string} name Name of child node.
         * @param {boolean=} opt_create Whether to create the child if it does not
         * exist.
         * @return {goog.ds.DataNode} Child node.
         * @override
         */
        getChildNode(name: string, opt_create?: boolean): goog.ds.DataNode;
    
        /**
         * Sets a child node. Creates the child if it does not exist.
         *
         * Calling  this function makes any child nodes previously obtained for name
         * invalid. You should not use these child nodes but instead obtain a new
         * instance by calling getChildNode.
         *
         * @override
         */
        setChildNode(): void;
    
        /**
         * Returns the value of a child node. By using this method you can avoid
         * the need to create PrimitiveFastData nodes.
         * @param {string} name Name of child node.
         * @return {Object} Value of child node.
         * @override
         */
        getChildNodeValue(name: string): Object;
    
        /**
         * Returns whether this data node is a list. Always returns false for
         * instances of FastDataNode but may return true for subclasses.
         * @return {boolean} Whether this data node is array-like.
         * @override
         */
        isList(): boolean;
    
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
    
        /**
         * Adds a child to this data node.
         * @param {goog.ds.DataNode} value Child node to add.
         * @override
         */
        add(value: goog.ds.DataNode): void;
    
        /**
         * Gets the value of this data node (if called without opt_key) or
         * gets a child node (if called with opt_key).
         * @param {string=} opt_key Name of child node.
         * @return {*} This data node or a child node.
         * @override
         */
        get(opt_key?: string): any;
    
        /**
         * Gets a child node by index. This method has a complexity of O(n) where
         * n is the number of children. If you need a faster implementation of this
         * method, you should use goog.ds.FastListNode.
         * @param {number} index Index of child node (starting from 0).
         * @return {goog.ds.DataNode} Child node at specified index.
         * @override
         */
        getByIndex(index: number): goog.ds.DataNode;
    
        /**
         * Gets the number of child nodes. This method has a complexity of O(n) where
         * n is the number of children. If you need a faster implementation of this
         * method, you should use goog.ds.FastListNode.
         * @return {number} Number of child nodes.
         * @override
         */
        getCount(): number;
    
        /**
         * Sets a child node.
         * @param {string} name Name of child node.
         * @param {Object} value Value of child node.
         * @override
         */
        setNode(name: string, value: Object): void;
    
        /**
         * Removes a child node.
         * @override
         */
        removeNode(): void;
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
         * Returns the value of this data node.
         * @return {(boolean|number|string)} Value of this data node.
         * @override
         */
        get(): any /*boolean|number|string*/;
    
        /**
         * Sets this data node to a new value.
         * @param {*} value Value to set data node to.
         * @override
         */
        set(value: any): void;
    
        /**
         * Returns child nodes of this data node. Always returns an unmodifiable,
         * empty list.
         * @return {goog.ds.DataNodeList} (Empty) list of child nodes.
         * @override
         */
        getChildNodes(): goog.ds.DataNodeList;
    
        /**
         * Get a child node by name. Always returns null.
         * @param {string} name Name of child node.
         * @return {goog.ds.DataNode} Child node.
         * @override
         */
        getChildNode(name: string): goog.ds.DataNode;
    
        /**
         * Returns the value of a child node. Always returns null.
         * @param {string} name Name of child node.
         * @return {Object} Value of child node.
         * @override
         */
        getChildNodeValue(name: string): Object;
    
        /**
         * Not supported by primitive data nodes.
         * @param {string} name Name of child node.
         * @param {Object} value Value of child node.
         * @override
         */
        setChildNode(name: string, value: Object): void;
    
        /**
         * Returns whether this data node is a list. Always returns false for
         * instances of PrimitiveFastDataNode.
         * @return {boolean} Whether this data node is array-like.
         * @override
         */
        isList(): boolean;
    
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
         * Not supported for FastListNodes.
         * @param {*} value Value to set data node to.
         * @override
         */
        set(value: any): void;
    
        /**
         * Returns child nodes of this data node. Currently, only supports
         * returning all children.
         * @return {!goog.ds.DataNodeList} List of child nodes.
         * @override
         */
        getChildNodes(): goog.ds.DataNodeList;
    
        /**
         * Get a child node by name.
         * @param {string} key Name of child node.
         * @param {boolean=} opt_create Whether to create the child if it does not
         * exist.
         * @return {goog.ds.DataNode} Child node.
         * @override
         */
        getChildNode(key: string, opt_create?: boolean): goog.ds.DataNode;
    
        /**
         * Returns the value of a child node.
         * @param {string} key Name of child node.
         * @return {*} Value of child node.
         * @override
         */
        getChildNodeValue(key: string): any;
    
        /**
         * Sets a child node. Creates the child if it does not exist. To set
         * children at a certain index, use a key of the form '[index]'. Note, that
         * you can only set values at existing numeric indices. To add a new node
         * to this list, you have to use the add method.
         *
         * Calling  this function makes any child nodes previously obtained for name
         * invalid. You should not use these child nodes but instead obtain a new
         * instance by calling getChildNode.
         *
         * @override
         */
        setChildNode(): void;
    
        /**
         * Returns whether this data node is a list. Always returns true.
         * @return {boolean} Whether this data node is array-like.
         * @override
         */
        isList(): boolean;
    
        /**
         * Returns a javascript object representation of this data node. You should
         * not modify the object returned by this function.
         * @return {!Object} Javascript object representation of this data node.
         */
        getJsObject(): Object;
    
        /**
         * Adds a child to this data node
         * @param {goog.ds.DataNode} value Child node to add.
         * @override
         */
        add(value: goog.ds.DataNode): void;
    
        /**
         * Gets the value of this data node (if called without opt_key) or
         * gets a child node (if called with opt_key).
         * @param {string=} opt_key Name of child node.
         * @return {Array|goog.ds.DataNode} Array of child nodes (if called without
         *     opt_key), or a named child node otherwise.
         * @override
         */
        get(opt_key?: string): any /*any[]|goog.ds.DataNode*/;
    
        /**
         * Gets a child node by (numeric) index.
         * @param {number} index Index of child node (starting from 0).
         * @return {goog.ds.DataNode} Child node at specified index.
         * @override
         */
        getByIndex(index: number): goog.ds.DataNode;
    
        /**
         * Gets the number of child nodes.
         * @return {number} Number of child nodes.
         * @override
         */
        getCount(): number;
    
        /**
         * Sets a child node.
         * @param {string} name Name of child node.
         * @param {Object} value Value of child node.
         * @override
         */
        setNode(name: string, value: Object): void;
    
        /**
         * Removes a child node.
         * @override
         */
        removeNode(): void;
    
        /**
         * Returns the index of a named child nodes. This method only works if
         * this list uses mixed name/indexed lookup, i.e. if its child node have
         * an 'id' attribute.
         * @param {string} name Name of child node to determine index of.
         * @return {number} Index of child node named name.
         */
        indexOf(name: string): number;
    }

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
    
        /** @override */
        get(): void;
    
        /**
         * Set the value of the node
         * @param {*} value The new value of the node.
         * @override
         */
        set(value: any): void;
    
        /**
         * TODO(user) revisit lazy creation.
         * @override
         */
        getChildNodes(): void;
    
        /**
         * Gets a named child node of the current node
         * @param {string} name The node name.
         * @param {boolean=} opt_canCreate If true, can create child node.
         * @return {goog.ds.DataNode} The child node, or null if no node of
         *     this name exists.
         * @override
         */
        getChildNode(name: string, opt_canCreate?: boolean): goog.ds.DataNode;
    
        /**
         * Gets the value of a child node
         * @param {string} name The node name.
         * @return {Object} The value of the node, or null if no value or the child
         *    node doesn't exist.
         * @override
         */
        getChildNodeValue(name: string): Object;
    
        /**
         * Sets a named child node of the current node.
         * If value is null, removes the child node.
         * @param {string} name The node name.
         * @param {Object} value The value to set, can be DataNode, object,
         *     property, or null.
         * @return {Object} The child node, if set.
         * @override
         */
        setChildNode(name: string, value: Object): Object;
    
        /**
         * Get the name of the node relative to the parent node
         * @return {string} The name of the node.
         * @override
         */
        getDataName(): string;
    
        /**
         * Setthe name of the node relative to the parent node
         * @param {string} dataName The name of the node.
         * @override
         */
        setDataName(dataName: string): void;
    
        /**
         * Gets the a qualified data path to this node
         * @return {string} The data path.
         * @override
         */
        getDataPath(): string;
    
        /**
         * Load or reload the backing data for this node
         * @override
         */
        load(): void;
    
        /**
         * Gets the state of the backing data for this node
         * TODO(user) Discuss null value handling
         * @return {goog.ds.LoadState} The state.
         * @override
         */
        getLoadState(): goog.ds.LoadState;
    
        /**
         * Whether the value of this node is a homogeneous list of data
         * @return {boolean} True if a list.
         * @override
         */
        isList(): boolean;
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
    
        /**
         * Set the value of the node
         * @param {Object} value The new value of the node.
         * @override
         */
        set(value: Object): void;
    
        /**
         * Get the name of the node relative to the parent node
         * @return {string} The name of the node.
         * @override
         */
        getDataName(): string;
    
        /** @override */
        getParent(): void;
    }

    /**
     * Data source whose backing is a JSON-like service, in which
     * retreiving the resource specified by URL with the additional parameter
     * callback. The resource retreived is executable JavaScript that
     * makes a call to the named function with a JavaScript object literal
     * as the only parameter.
     *
     * Example URI could be:
     * http://www.google.com/data/search?q=monkey&callback=mycb
     * which might return the JS:
     * mycb({searchresults:
     *   [{uri: 'http://www.monkey.com', title: 'Site About Monkeys'}]});
     *
     * TODO(user): Evaluate using goog.net.Jsonp here.
     *
     * A URI of an empty string will mean that no request is made
     * and the data source will be a data source with no child nodes
     *
     * @param {string|goog.Uri} uri URI for the request.
     * @param {string} name Name of the datasource.
     * @param {string=} opt_callbackParamName The parameter name that is used to
     *     specify the callback. Defaults to 'callback'.
     *
     * @extends {goog.ds.JsDataSource}
     * @constructor
     * @final
     */
    class JsonDataSource extends goog.ds.JsDataSource {
        /**
         * Data source whose backing is a JSON-like service, in which
         * retreiving the resource specified by URL with the additional parameter
         * callback. The resource retreived is executable JavaScript that
         * makes a call to the named function with a JavaScript object literal
         * as the only parameter.
         *
         * Example URI could be:
         * http://www.google.com/data/search?q=monkey&callback=mycb
         * which might return the JS:
         * mycb({searchresults:
         *   [{uri: 'http://www.monkey.com', title: 'Site About Monkeys'}]});
         *
         * TODO(user): Evaluate using goog.net.Jsonp here.
         *
         * A URI of an empty string will mean that no request is made
         * and the data source will be a data source with no child nodes
         *
         * @param {string|goog.Uri} uri URI for the request.
         * @param {string} name Name of the datasource.
         * @param {string=} opt_callbackParamName The parameter name that is used to
         *     specify the callback. Defaults to 'callback'.
         *
         * @extends {goog.ds.JsDataSource}
         * @constructor
         * @final
         */
        constructor(uri: any /*string|goog.Uri*/, name: string, opt_callbackParamName?: string);
    
        /**
         * Load or reload the backing data for this node.
         * Fires the JsonDataSource
         * @override
         */
        load(): void;
    
        /**
         * Gets the state of the backing data for this node
         * @return {goog.ds.LoadState} The state.
         * @override
         */
        getLoadState(): goog.ds.LoadState;
    
        /**
         * Receives data from a Json request
         * @param {Object} obj The JSON data.
         */
        receiveData(obj: Object): void;
    }

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
         * Gets the state of the backing data for this node
         * @return {goog.ds.LoadState} The state.
         * @override
         */
        getLoadState(): goog.ds.LoadState;
    
        /**
         * Sets the request data. This can be used if it is required to
         * send a specific body rather than build the body from the query
         * parameters. Only used in POST requests.
         * @param {string} data The data to send in the request body.
         */
        setQueryData(data: string): void;
    
        /**
         * Load or reload the backing data for this node.
         * Fires the JsonDataSource
         * @override
         */
        load(): void;
    }

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
    
        /**
         * Get the value of the node
         * @return {Object} The value of the node, or null if no value.
         * @override
         */
        get(): Object;
    
        /**
         * Set the value of the node
         * @param {*} value The new value of the node.
         * @override
         */
        set(value: any): void;
    
        /** @override */
        getChildNodes(): void;
    
        /**
         * Gets a named child node of the current node
         * @param {string} name The node name.
         * @return {goog.ds.DataNode} The child node, or null if
         *   no node of this name exists.
         * @override
         */
        getChildNode(name: string): goog.ds.DataNode;
    
        /**
         * Gets the value of a child node
         * @param {string} name The node name.
         * @return {*} The value of the node, or null if no value or the child node
         *    doesn't exist.
         * @override
         */
        getChildNodeValue(name: string): any;
    
        /**
         * Get the name of the node relative to the parent node
         * @return {string} The name of the node.
         * @override
         */
        getDataName(): string;
    
        /**
         * Setthe name of the node relative to the parent node
         * @param {string} name The name of the node.
         * @override
         */
        setDataName(name: string): void;
    
        /**
         * Gets the a qualified data path to this node
         * @return {string} The data path.
         * @override
         */
        getDataPath(): string;
    
        /**
         * Load or reload the backing data for this node
         * @override
         */
        load(): void;
    
        /**
         * Gets the state of the backing data for this node
         * @return {goog.ds.LoadState} The state.
         * @override
         */
        getLoadState(): goog.ds.LoadState;
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
    
        /**
         * Load or reload the backing data for this node.
         * Fires the XMLHttpRequest
         * @override
         */
        load(): void;
    
        /**
         * Gets the state of the backing data for this node
         * @return {goog.ds.LoadState} The state.
         * @override
         */
        getLoadState(): goog.ds.LoadState;
    }
}

declare module 'goog.ds.Util' {

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

declare module 'goog.ds.Expr' {

    /**
     * Create an expression from a string, can use cached values
     *
     * @param {string} expr The expression string.
     * @return {goog.ds.Expr} The expression object.
     */
    function create(expr: string): goog.ds.Expr;

    /**
     * The current node
     */
    var CURRENT: any /*missing*/;

    /**
     * For DOM interop - all DOM child nodes (text + element).
     * Text nodes have dataName #text
     */
    var ALL_CHILD_NODES: any /*missing*/;

    /**
     * For DOM interop - all DOM element child nodes
     */
    var ALL_ELEMENTS: any /*missing*/;

    /**
     * For DOM interop - all DOM attribute nodes
     * Attribute nodes have dataName starting with "@"
     */
    var ALL_ATTRIBUTES: any /*missing*/;

    /**
     * Get the dataName of a node
     */
    var NAME: any /*missing*/;

    /**
     * Get the count of nodes matching an expression
     */
    var COUNT: any /*missing*/;

    /**
     * Get the position of the "current" node in the current node list
     * This will only apply for datasources that support the concept of a current
     * node (none exist yet). This is similar to XPath position() and concept of
     * current node
     */
    var POSITION: any /*missing*/;
}

declare module 'goog.ds.FastDataNode' {

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

