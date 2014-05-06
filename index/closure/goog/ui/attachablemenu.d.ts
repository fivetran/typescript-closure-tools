/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
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
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../closure/goog/positioning/positioning.d.ts" />
/// <reference path="../../../closure/goog/positioning/abstractposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/clientposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/viewportclientposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/absoluteposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../closure/goog/ui/popupbase.d.ts" />
/// <reference path="../../../closure/goog/positioning/viewportposition.d.ts" />
/// <reference path="../../../closure/goog/ui/popup.d.ts" />
/// <reference path="../../../closure/goog/ui/menubase.d.ts" />
/// <reference path="../../../closure/goog/ui/itemevent.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />

declare module goog.ui {

    /**
     * An implementation of a menu that can attach itself to DOM element that
     * are annotated appropriately.
     *
     * The following attributes are used by the AttachableMenu
     *
     * menu-item - Should be set on DOM elements that function as items in the
     * menu that can be selected.
     * classNameSelected - A class that will be added to the element's class names
     * when the item is selected via keyboard or mouse.
     *
     * @param {Element=} opt_element A DOM element for the popup.
     * @constructor
     * @extends {goog.ui.MenuBase}
     * @deprecated Use goog.ui.PopupMenu.
     * @final
     */
    class AttachableMenu extends goog.ui.MenuBase {
        /**
         * An implementation of a menu that can attach itself to DOM element that
         * are annotated appropriately.
         *
         * The following attributes are used by the AttachableMenu
         *
         * menu-item - Should be set on DOM elements that function as items in the
         * menu that can be selected.
         * classNameSelected - A class that will be added to the element's class names
         * when the item is selected via keyboard or mouse.
         *
         * @param {Element=} opt_element A DOM element for the popup.
         * @constructor
         * @extends {goog.ui.MenuBase}
         * @deprecated Use goog.ui.PopupMenu.
         * @final
         */
        constructor(opt_element?: Element);
    
        /**
         * Sets the class name to use for menu items
         *
         * @return {string} The class name to use for items.
         */
        getItemClassName(): string;
    
        /**
         * Sets the class name to use for menu items
         *
         * @param {string} name The class name to use for items.
         */
        setItemClassName(name: string): void;
    
        /**
         * Sets the class name to use for selected menu items
         * todo(user) - reevaluate if we can simulate pseudo classes in IE
         *
         * @return {string} The class name to use for selected items.
         */
        getSelectedItemClassName(): string;
    
        /**
         * Sets the class name to use for selected menu items
         * todo(user) - reevaluate if we can simulate pseudo classes in IE
         *
         * @param {string} name The class name to use for selected items.
         */
        setSelectedItemClassName(name: string): void;
    
        /**
         * Returns the next or previous item. Used for up/down arrows.
         *
         * @param {boolean} prev True to go to the previous element instead of next.
         * @return {Element} The next or previous element.
         * @protected
         */
        getNextPrevItem(prev: boolean): Element;
    }
}

