/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/fx/dragger.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/fx/abstractdragdrop.d.ts" />

declare module goog.fx {

    /**
     * Drag/drop implementation for creating drag sources/drop targets consisting of
     * multiple HTML Elements (items). All items share the same drop target(s) but
     * can be dragged individually.
     *
     * @extends {goog.fx.AbstractDragDrop}
     * @constructor
     */
    class DragDropGroup extends goog.fx.AbstractDragDrop {
        /**
         * Drag/drop implementation for creating drag sources/drop targets consisting of
         * multiple HTML Elements (items). All items share the same drop target(s) but
         * can be dragged individually.
         *
         * @extends {goog.fx.AbstractDragDrop}
         * @constructor
         */
        constructor();
    
        /**
         * Add DragDropItem to drag object.
         *
         * @param {goog.fx.DragDropItem} item DragDropItem being added to the
         *     drag object.
         * @throws Error If no element argument is provided or if the type is
         *     invalid
         */
        addDragDropItem(item: goog.fx.DragDropItem): void;
    
        /**
         * Remove item from drag object.
         *
         * @param {Element|string} element Dom Node, or string representation of node
         *     id, that was previously added with addItem().
         */
        removeItem(element: any /*Element|string*/): void;
    
        /**
         * Marks the supplied list of items as selected. A drag operation for any of the
         * selected items will affect all of them.
         *
         * @param {Array.<goog.fx.DragDropItem>} list List of items to select or null to
         *     clear selection.
         *
         * TODO(eae): Not yet implemented.
         */
        setSelection(list: goog.fx.DragDropItem[]): void;
    }
}

