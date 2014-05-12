/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />

declare module goog.dom {

    class NodeOffset extends NodeOffset.__Class { }
    module NodeOffset {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.Disposable.__Class {
    
            /**
             * Object to store the offset from one node to another in a way that works on
             * any similar DOM structure regardless of whether it is the same actual nodes.
             * @param {Node} node The node to get the offset for.
             * @param {Node} baseNode The node to calculate the offset from.
             * @extends {goog.Disposable}
             * @constructor
             * @final
             */
            constructor(node: Node, baseNode: Node);
    
            /**
             * Walk the dom and find the node relative to baseNode.  Returns null on
             * failure.
             * @param {Node} baseNode The node to start walking from.  Should be equivalent
             *     to the node passed in to the constructor, in that it should have the
             *     same contents.
             * @return {Node} The node relative to baseNode, or null on failure.
             */
            findTargetNode(baseNode: Node): Node;
        }
    }
}
