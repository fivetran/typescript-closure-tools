/// <reference path="../../../globals.d.ts" />
/// <reference path="./popup.d.ts" />
/// <reference path="../events/event.d.ts" />
/// <reference path="../events/keyhandler.d.ts" />

declare module goog.ui {

    class MenuBase extends MenuBase.__Class { }
    module MenuBase {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Popup.__Class {
    
            /**
             * The MenuBase class provides an abstract base class for different
             * implementations of menu controls.
             *
             * @param {Element=} opt_element A DOM element for the popup.
             * @deprecated Use goog.ui.Menu.
             * @constructor
             * @extends {goog.ui.Popup}
             */
            constructor(opt_element?: Element);
    
            /**
             * Returns the selected item
             *
             * @return {Object} The item selected or null if no item is selected.
             */
            getSelectedItem(): Object;
    
            /**
             * Sets the selected item
             *
             * @param {Object} item The item to select. The type of this item is specific
             *     to the menu class.
             */
            setSelectedItem(item: Object): void;
    
            /**
             * Mouse over handler for the menu. Derived classes should override.
             *
             * @param {goog.events.Event} e The event object.
             * @protected
             */
            onMouseOver(e: goog.events.Event): void;
    
            /**
             * Mouse out handler for the menu. Derived classes should override.
             *
             * @param {goog.events.Event} e The event object.
             * @protected
             */
            onMouseOut(e: goog.events.Event): void;
    
            /**
             * Mouse down handler for the menu. Derived classes should override.
             *
             * @param {!goog.events.Event} e The event object.
             * @protected
             */
            onMouseDown(e: goog.events.Event): void;
    
            /**
             * Mouse up handler for the menu. Derived classes should override.
             *
             * @param {goog.events.Event} e The event object.
             * @protected
             */
            onMouseUp(e: goog.events.Event): void;
    
            /**
             * Key down handler for the menu. Derived classes should override.
             *
             * @param {goog.events.KeyEvent} e The event object.
             * @protected
             */
            onKeyDown(e: goog.events.KeyEvent): void;
        }
    }
}

declare module goog.ui.MenuBase.Events {

    /**
     * Event fired by the Menu when an item is "clicked".
     */
    var ITEM_ACTION: any /*missing*/;
}
