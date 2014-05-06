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

declare module goog.ds {

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
}

declare module goog.ds.Expr {

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

