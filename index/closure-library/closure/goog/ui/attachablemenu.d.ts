/// <reference path="../../../globals.d.ts" />
/// <reference path="./menubase.d.ts" />

declare module goog.ui {

    class AttachableMenu extends AttachableMenu__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class AttachableMenu__Class extends goog.ui.MenuBase__Class  { 
    
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
