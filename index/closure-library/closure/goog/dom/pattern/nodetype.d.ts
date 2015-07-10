/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractpattern.d.ts" />
/// <reference path="../nodetype.d.ts" />

declare module goog.dom.pattern {

    class NodeType extends NodeType__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class NodeType__Class extends goog.dom.pattern.AbstractPattern__Class  { 
    
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
