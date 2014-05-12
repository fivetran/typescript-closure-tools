/// <reference path="../../../globals.d.ts" />
/// <reference path="./menuitem.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class CheckBoxMenuItem extends CheckBoxMenuItem.__Class { }
    module CheckBoxMenuItem {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.MenuItem.__Class {
    
            /**
             * Class representing a checkbox menu item.  This is just a convenience class
             * that extends {@link goog.ui.MenuItem} by making it checkable.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {*=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @constructor
             * @extends {goog.ui.MenuItem}
             */
            constructor(content: string, opt_model?: any, opt_domHelper?: goog.dom.DomHelper);
            /**
             * Class representing a checkbox menu item.  This is just a convenience class
             * that extends {@link goog.ui.MenuItem} by making it checkable.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {*=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @constructor
             * @extends {goog.ui.MenuItem}
             */
            constructor(content: Node, opt_model?: any, opt_domHelper?: goog.dom.DomHelper);
            /**
             * Class representing a checkbox menu item.  This is just a convenience class
             * that extends {@link goog.ui.MenuItem} by making it checkable.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {*=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @constructor
             * @extends {goog.ui.MenuItem}
             */
            constructor(content: Node[], opt_model?: any, opt_domHelper?: goog.dom.DomHelper);
            /**
             * Class representing a checkbox menu item.  This is just a convenience class
             * that extends {@link goog.ui.MenuItem} by making it checkable.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {*=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @constructor
             * @extends {goog.ui.MenuItem}
             */
            constructor(content: NodeList, opt_model?: any, opt_domHelper?: goog.dom.DomHelper);
        }
    }
}
