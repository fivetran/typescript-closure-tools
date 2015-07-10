/// <reference path="../../../globals.d.ts" />
/// <reference path="./abstractdragdrop.d.ts" />

declare module goog.fx {

    class DragDrop extends DragDrop__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class DragDrop__Class extends goog.fx.AbstractDragDrop__Class  { 
    
            /**
             * Drag/drop implementation for creating drag sources/drop targets consisting of
             * a single HTML Element.
             *
             * @param {Element|string} element Dom Node, or string representation of node
             *     id, to be used as drag source/drop target.
             * @param {Object=} opt_data Data associated with the source/target.
             * @throws Error If no element argument is provided or if the type is invalid
             * @extends {goog.fx.AbstractDragDrop}
             * @constructor
             */
            constructor(element: Element|string, opt_data?: Object);
    } 
    
}
