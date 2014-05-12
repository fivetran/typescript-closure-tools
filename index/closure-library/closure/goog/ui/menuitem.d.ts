/// <reference path="../../../globals.d.ts" />
/// <reference path="./control.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./menuitemrenderer.d.ts" />
/// <reference path="../events/keycodes.d.ts" />

declare module goog.ui {

    class MenuItem extends MenuItem.__Class { }
    module MenuItem {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Control.__Class {
    
            /**
             * Class representing an item in a menu.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {*=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
             * @constructor
             * @extends {goog.ui.Control}
             */
            constructor(content: string, opt_model?: any, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer);
            /**
             * Class representing an item in a menu.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {*=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
             * @constructor
             * @extends {goog.ui.Control}
             */
            constructor(content: Node, opt_model?: any, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer);
            /**
             * Class representing an item in a menu.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {*=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
             * @constructor
             * @extends {goog.ui.Control}
             */
            constructor(content: Node[], opt_model?: any, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer);
            /**
             * Class representing an item in a menu.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {*=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
             * @constructor
             * @extends {goog.ui.Control}
             */
            constructor(content: NodeList, opt_model?: any, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer);
    
            /**
             * Returns the value associated with the menu item.  The default implementation
             * returns the model object associated with the item (if any), or its caption.
             * @return {*} Value associated with the menu item, if any, or its caption.
             */
            getValue(): any;
    
            /**
             * Sets the value associated with the menu item.  The default implementation
             * stores the value as the model of the menu item.
             * @param {*} value Value to be associated with the menu item.
             */
            setValue(value: any): void;
    
            /**
             * Sets the menu item to be selectable or not.  Set to true for menu items
             * that represent selectable options.
             * @param {boolean} selectable Whether the menu item is selectable.
             */
            setSelectable(selectable: boolean): void;
    
            /**
             * Sets the menu item to be checkable or not.  Set to true for menu items
             * that represent checkable options.
             * @param {boolean} checkable Whether the menu item is checkable.
             */
            setCheckable(checkable: boolean): void;
    
            /**
             * Sets the mnemonic key code. The mnemonic is the key associated with this
             * action.
             * @param {goog.events.KeyCodes} key The key code.
             */
            setMnemonic(key: goog.events.KeyCodes): void;
    
            /**
             * Gets the mnemonic key code. The mnemonic is the key associated with this
             * action.
             * @return {goog.events.KeyCodes} The key code of the mnemonic key.
             */
            getMnemonic(): goog.events.KeyCodes;
        }
    }
}
