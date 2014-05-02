// Generated Fri May  2 14:56:51 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />

declare module goog.dom.iter {

    /**
     * Iterator over a Node's siblings.
     * @param {Node} node The node to start with.
     * @param {boolean=} opt_includeNode Whether to return the given node as the
     *     first return value from next.
     * @param {boolean=} opt_reverse Whether to traverse siblings in reverse
     *     document order.
     * @constructor
     * @extends {goog.iter.Iterator}
     */
    class SiblingIterator extends goog.iter.Iterator {
        /**
         * Iterator over a Node's siblings.
         * @param {Node} node The node to start with.
         * @param {boolean=} opt_includeNode Whether to return the given node as the
         *     first return value from next.
         * @param {boolean=} opt_reverse Whether to traverse siblings in reverse
         *     document order.
         * @constructor
         * @extends {goog.iter.Iterator}
         */
        constructor(node: Node, opt_includeNode?: boolean, opt_reverse?: boolean);
    }

    /**
     * Iterator over an Element's children.
     * @param {Element} element The element to iterate over.
     * @param {boolean=} opt_reverse Optionally traverse children from last to
     *     first.
     * @param {number=} opt_startIndex Optional starting index.
     * @constructor
     * @extends {goog.dom.iter.SiblingIterator}
     * @final
     */
    class ChildIterator extends goog.dom.iter.SiblingIterator {
        /**
         * Iterator over an Element's children.
         * @param {Element} element The element to iterate over.
         * @param {boolean=} opt_reverse Optionally traverse children from last to
         *     first.
         * @param {number=} opt_startIndex Optional starting index.
         * @constructor
         * @extends {goog.dom.iter.SiblingIterator}
         * @final
         */
        constructor(element: Element, opt_reverse?: boolean, opt_startIndex?: number);
    }

    /**
     * Iterator over a Node's ancestors, stopping after the document body.
     * @param {Node} node The node to start with.
     * @param {boolean=} opt_includeNode Whether to return the given node as the
     *     first return value from next.
     * @constructor
     * @extends {goog.iter.Iterator}
     * @final
     */
    class AncestorIterator extends goog.iter.Iterator {
        /**
         * Iterator over a Node's ancestors, stopping after the document body.
         * @param {Node} node The node to start with.
         * @param {boolean=} opt_includeNode Whether to return the given node as the
         *     first return value from next.
         * @constructor
         * @extends {goog.iter.Iterator}
         * @final
         */
        constructor(node: Node, opt_includeNode?: boolean);
    }
}

