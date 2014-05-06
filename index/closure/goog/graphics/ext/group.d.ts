/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/graphics/ext/coordinates.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/graphics/ext/element.d.ts" />

declare module goog.graphics.ext {

    /**
     * Wrapper for a graphics group.
     * @param {goog.graphics.ext.Group} group Parent for this element. Can
     *     be null if this is a Graphics instance.
     * @param {goog.graphics.GroupElement=} opt_wrapper The thin wrapper
     *     to wrap. If omitted, a new group will be created. Must be included
     *     when group is null.
     * @constructor
     * @extends {goog.graphics.ext.Element}
     */
    class Group extends goog.graphics.ext.Element {
        /**
         * Wrapper for a graphics group.
         * @param {goog.graphics.ext.Group} group Parent for this element. Can
         *     be null if this is a Graphics instance.
         * @param {goog.graphics.GroupElement=} opt_wrapper The thin wrapper
         *     to wrap. If omitted, a new group will be created. Must be included
         *     when group is null.
         * @constructor
         * @extends {goog.graphics.ext.Element}
         */
        constructor(group: goog.graphics.ext.Group, opt_wrapper?: goog.graphics.GroupElement);
    
        /**
         * Add an element to the group.  This should be treated as package local, as
         * it is called by the draw* methods.
         * @param {!goog.graphics.ext.Element} element The element to add.
         * @param {boolean=} opt_chain Whether this addition is part of a longer set
         *     of element additions.
         */
        addChild(element: goog.graphics.ext.Element, opt_chain?: boolean): void;
    
        /**
         * Remove an element from the group.
         * @param {goog.graphics.ext.Element} element The element to remove.
         */
        removeChild(element: goog.graphics.ext.Element): void;
    
        /**
         * Calls the given function on each of this component's children in order.  If
         * {@code opt_obj} is provided, it will be used as the 'this' object in the
         * function when called.  The function should take two arguments:  the child
         * component and its 0-based index.  The return value is ignored.
         * @param {Function} f The function to call for every child component; should
         *    take 2 arguments (the child and its index).
         * @param {Object=} opt_obj Used as the 'this' object in f when called.
         */
        forEachChild(f: Function, opt_obj?: Object): void;
    
        /**
         * Transform the children that need to be transformed.
         * @protected
         */
        transformChildren(): void;
    
        /**
         * As part of the reset process, update child elements.
         */
        updateChildren(): void;
    
        /**
         * @return {number} The width of the element's coordinate space.
         */
        getCoordinateWidth(): number;
    
        /**
         * @return {number} The height of the element's coordinate space.
         */
        getCoordinateHeight(): number;
    
        /**
         * Remove all drawing elements from the group.
         */
        clear(): void;
    }
}

