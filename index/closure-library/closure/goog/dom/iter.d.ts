/// <reference path="../../../globals.d.ts" />
/// <reference path="../iter/iter.d.ts" />

declare module goog.dom.iter {

    class SiblingIterator extends SiblingIterator__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class SiblingIterator__Class extends goog.iter.Iterator__Class<any>  { 
    
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
    

    class ChildIterator extends ChildIterator__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ChildIterator__Class extends goog.dom.iter.SiblingIterator__Class  { 
    
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
    

    class AncestorIterator extends AncestorIterator__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class AncestorIterator__Class extends goog.iter.Iterator__Class<any>  { 
    
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
