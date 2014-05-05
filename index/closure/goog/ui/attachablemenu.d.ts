// Generated Sun May  4 18:16:01 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/style/bidi.d.ts" />
/// <reference path="../../goog/positioning/positioning.d.ts" />
/// <reference path="../../goog/positioning/abstractposition.d.ts" />
/// <reference path="../../goog/positioning/clientposition.d.ts" />
/// <reference path="../../goog/positioning/viewportclientposition.d.ts" />
/// <reference path="../../goog/positioning/absoluteposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/fx/transition.d.ts" />
/// <reference path="../../goog/ui/popupbase.d.ts" />
/// <reference path="../../goog/positioning/viewportposition.d.ts" />
/// <reference path="../../goog/ui/popup.d.ts" />
/// <reference path="../../goog/ui/menubase.d.ts" />
/// <reference path="../../goog/ui/itemevent.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />

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

