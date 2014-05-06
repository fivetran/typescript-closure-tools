/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/pattern/pattern.d.ts" />
/// <reference path="../../../../closure/goog/dom/pattern/abstractpattern.d.ts" />

declare module goog.dom.pattern {

    /**
     * Pattern object that matches any node of the given type.
     * @param {goog.dom.NodeType} nodeType The node type to match.
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     * @final
     */
    class NodeType extends goog.dom.pattern.AbstractPattern {
        /**
         * Pattern object that matches any node of the given type.
         * @param {goog.dom.NodeType} nodeType The node type to match.
         * @constructor
         * @extends {goog.dom.pattern.AbstractPattern}
         * @final
         */
        constructor(nodeType: goog.dom.NodeType);
    }
}

