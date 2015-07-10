/// <reference path="../../../globals.d.ts" />
/// <reference path="./menuitem.d.ts" />
/// <reference path="./controlcontent.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./menuitemrenderer.d.ts" />
/// <reference path="./menuheader.d.ts" />
/// <reference path="./menuseparator.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="./menu.d.ts" />

declare module goog.ui {

    class SubMenu extends SubMenu__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class SubMenu__Class extends goog.ui.MenuItem__Class  { 
    
            /**
             * Class representing a submenu that can be added as an item to other menus.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the submenu (use to add icons or styling to
             *     menus).
             * @param {*=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional dom helper used for dom
             *     interactions.
             * @param {goog.ui.MenuItemRenderer=} opt_renderer Renderer used to render or
             *     decorate the component; defaults to {@link goog.ui.SubMenuRenderer}.
             * @constructor
             * @extends {goog.ui.MenuItem}
             */
            constructor(content: goog.ui.ControlContent, opt_model?: any, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer);
    
            /**
             * Show the submenu and ensure that all siblings are hidden.
             */
            showSubMenu(): void;
    
            /**
             * Dismisses the menu and all further submenus.
             */
            dismissSubMenu(): void;
    
            /**
             * Clears the show and hide timers for the sub menu.
             */
            clearTimers(): void;
    
            /**
             * Sets whether the submenu is aligned at the end of the parent menu.
             * @param {boolean} alignToEnd True to align to end, false to align to start.
             */
            setAlignToEnd(alignToEnd: boolean): void;
    
            /**
             * Determines whether the submenu is aligned at the end of the parent menu.
             * @return {boolean} True if aligned to the end (the default), false if
             *     aligned to the start.
             */
            isAlignedToEnd(): boolean;
    
            /**
             * Positions the submenu. This method should be called if the sub menu is
             * opened and the menu element's size changes (e.g., when adding/removing items
             * to an opened sub menu).
             */
            positionSubMenu(): void;
    
            /**
             * Adds a new menu item at the end of the menu.
             * @param {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu
             *     item to add to the menu.
             */
            addItem(item: goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator): void;
    
            /**
             * Adds a new menu item at a specific index in the menu.
             * @param {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu
             *     item to add to the menu.
             * @param {number} n Index at which to insert the menu item.
             */
            addItemAt(item: goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator, n: number): void;
    
            /**
             * Removes an item from the menu and disposes it.
             * @param {goog.ui.MenuItem} item The menu item to remove.
             */
            removeItem(item: goog.ui.MenuItem): void;
    
            /**
             * Removes a menu item at a given index in the menu and disposes it.
             * @param {number} n Index of item.
             */
            removeItemAt(n: number): void;
    
            /**
             * Returns a reference to the menu item at a given index.
             * @param {number} n Index of menu item.
             * @return {goog.ui.Component} Reference to the menu item.
             */
            getItemAt(n: number): goog.ui.Component;
    
            /**
             * Returns the number of items in the sub menu (including separators).
             * @return {number} The number of items in the menu.
             */
            getItemCount(): number;
    
            /**
             * Returns the menu items contained in the sub menu.
             * @return {!Array.<!goog.ui.MenuItem>} An array of menu items.
             * @deprecated Use getItemAt/getItemCount instead.
             */
            getItems(): goog.ui.MenuItem[];
    
            /**
             * Gets a reference to the submenu's actual menu.
             * @return {!goog.ui.Menu} Reference to the object representing the sub menu.
             */
            getMenu(): goog.ui.Menu;
    
            /**
             * Sets the submenu to a specific menu.
             * @param {goog.ui.Menu} menu The menu to show when this item is selected.
             * @param {boolean=} opt_internal Whether this menu is an "internal" menu, and
             *     should be disposed of when this object is disposed of.
             */
            setMenu(menu: goog.ui.Menu, opt_internal?: boolean): void;
    
            /**
             * Returns true if the provided element is to be considered inside the menu for
             * purposes such as dismissing the menu on an event.  This is so submenus can
             * make use of elements outside their own DOM.
             * @param {Element} element The element to test for.
             * @return {boolean} Whether or not the provided element is contained.
             */
            containsElement(element: Element): boolean;
    
            /**
             * @param {boolean} isAdjustable Whether this submenu is adjustable.
             */
            setPositionAdjustable(isAdjustable: boolean): void;
    
            /**
             * @return {boolean} Whether this submenu is adjustable.
             */
            isPositionAdjustable(): boolean;
    } 
    
}

declare module goog.ui.SubMenu {

    /**
     * The delay before opening the sub menu in milliseconds.
     * @type {number}
     */
    var MENU_DELAY_MS: number;
}
