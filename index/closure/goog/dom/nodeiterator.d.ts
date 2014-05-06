/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/dom/tagiterator.d.ts" />

declare module goog.dom {

    /**
     * A DOM tree traversal iterator.
     *
     * Starting with the given node, the iterator walks the DOM in order, reporting
     * events for each node.  The iterator acts as a prefix iterator:
     *
     * <pre>
     * &lt;div&gt;1&lt;span&gt;2&lt;/span&gt;3&lt;/div&gt;
     * </pre>
     *
     * Will return the following nodes:
     *
     * <code>[div, 1, span, 2, 3]</code>
     *
     * With the following depths
     *
     * <code>[1, 1, 2, 2, 1]</code>
     *
     * Imagining <code>|</code> represents iterator position, the traversal stops at
     * each of the following locations:
     *
     * <pre>&lt;div&gt;|1|&lt;span&gt;|2|&lt;/span&gt;3|&lt;/div&gt;</pre>
     *
     * The iterator can also be used in reverse mode, which will return the nodes
     * and states in the opposite order.  The depths will be slightly different
     * since, like in normal mode, the depth is computed *after* the last move.
     *
     * Lastly, it is possible to create an iterator that is unconstrained, meaning
     * that it will continue iterating until the end of the document instead of
     * until exiting the start node.
     *
     * @param {Node=} opt_node The start node.  Defaults to an empty iterator.
     * @param {boolean=} opt_reversed Whether to traverse the tree in reverse.
     * @param {boolean=} opt_unconstrained Whether the iterator is not constrained
     *     to the starting node and its children.
     * @param {number=} opt_depth The starting tree depth.
     * @constructor
     * @extends {goog.dom.TagIterator}
     * @final
     */
    class NodeIterator extends goog.dom.TagIterator {
        /**
         * A DOM tree traversal iterator.
         *
         * Starting with the given node, the iterator walks the DOM in order, reporting
         * events for each node.  The iterator acts as a prefix iterator:
         *
         * <pre>
         * &lt;div&gt;1&lt;span&gt;2&lt;/span&gt;3&lt;/div&gt;
         * </pre>
         *
         * Will return the following nodes:
         *
         * <code>[div, 1, span, 2, 3]</code>
         *
         * With the following depths
         *
         * <code>[1, 1, 2, 2, 1]</code>
         *
         * Imagining <code>|</code> represents iterator position, the traversal stops at
         * each of the following locations:
         *
         * <pre>&lt;div&gt;|1|&lt;span&gt;|2|&lt;/span&gt;3|&lt;/div&gt;</pre>
         *
         * The iterator can also be used in reverse mode, which will return the nodes
         * and states in the opposite order.  The depths will be slightly different
         * since, like in normal mode, the depth is computed *after* the last move.
         *
         * Lastly, it is possible to create an iterator that is unconstrained, meaning
         * that it will continue iterating until the end of the document instead of
         * until exiting the start node.
         *
         * @param {Node=} opt_node The start node.  Defaults to an empty iterator.
         * @param {boolean=} opt_reversed Whether to traverse the tree in reverse.
         * @param {boolean=} opt_unconstrained Whether the iterator is not constrained
         *     to the starting node and its children.
         * @param {number=} opt_depth The starting tree depth.
         * @constructor
         * @extends {goog.dom.TagIterator}
         * @final
         */
        constructor(opt_node?: Node, opt_reversed?: boolean, opt_unconstrained?: boolean, opt_depth?: number);
    }
}

