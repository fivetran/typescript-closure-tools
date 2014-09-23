/// <reference path="../../../globals.d.ts" />
/// <reference path="./menuitem.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./menuitemrenderer.d.ts" />

declare module goog.ui {

    class TriStateMenuItem extends TriStateMenuItem.__Class { }
    module TriStateMenuItem {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.MenuItem.__Class {
    
            /**
             * Class representing a three state checkbox menu item.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure
             *     to display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {Object=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
             * @param {boolean=} opt_alwaysAllowPartial  If true, always allow partial
             *     state.
             * @constructor
             * @extends {goog.ui.MenuItem}
             * TODO(attila): Figure out how to better integrate this into the
             * goog.ui.Control state management framework.
             * @final
             */
            constructor(content: string, opt_model?: Object, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer, opt_alwaysAllowPartial?: boolean);
            /**
             * Class representing a three state checkbox menu item.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure
             *     to display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {Object=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
             * @param {boolean=} opt_alwaysAllowPartial  If true, always allow partial
             *     state.
             * @constructor
             * @extends {goog.ui.MenuItem}
             * TODO(attila): Figure out how to better integrate this into the
             * goog.ui.Control state management framework.
             * @final
             */
            constructor(content: Node, opt_model?: Object, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer, opt_alwaysAllowPartial?: boolean);
            /**
             * Class representing a three state checkbox menu item.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure
             *     to display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {Object=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
             * @param {boolean=} opt_alwaysAllowPartial  If true, always allow partial
             *     state.
             * @constructor
             * @extends {goog.ui.MenuItem}
             * TODO(attila): Figure out how to better integrate this into the
             * goog.ui.Control state management framework.
             * @final
             */
            constructor(content: Node[], opt_model?: Object, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer, opt_alwaysAllowPartial?: boolean);
            /**
             * Class representing a three state checkbox menu item.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure
             *     to display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {Object=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
             * @param {boolean=} opt_alwaysAllowPartial  If true, always allow partial
             *     state.
             * @constructor
             * @extends {goog.ui.MenuItem}
             * TODO(attila): Figure out how to better integrate this into the
             * goog.ui.Control state management framework.
             * @final
             */
            constructor(content: NodeList, opt_model?: Object, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer, opt_alwaysAllowPartial?: boolean);
    
            /**
             * @return {goog.ui.TriStateMenuItem.State} The menu item's check state.
             */
            getCheckedState(): goog.ui.TriStateMenuItem.State;
    
            /**
             * Sets the checked state.
             * @param {goog.ui.TriStateMenuItem.State} state The checked state.
             */
            setCheckedState(state: goog.ui.TriStateMenuItem.State): void;
        }
    }
}

declare module goog.ui.TriStateMenuItem {

    /**
     * Checked states for component.
     * @enum {number}
     */
    enum State { NOT_CHECKED, PARTIALLY_CHECKED, FULLY_CHECKED } 
}
