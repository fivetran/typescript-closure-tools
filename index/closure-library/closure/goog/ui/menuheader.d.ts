/// <reference path="../../../globals.d.ts" />
/// <reference path="./control.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./menuheaderrenderer.d.ts" />

declare module goog.ui {

    class MenuHeader extends MenuHeader.__Class { }
    module MenuHeader {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Control.__Class {
    
            /**
             * Class representing a menu header.
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @param {goog.ui.MenuHeaderRenderer=} opt_renderer Optional renderer.
             * @constructor
             * @extends {goog.ui.Control}
             */
            constructor(content: string, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuHeaderRenderer);
            /**
             * Class representing a menu header.
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @param {goog.ui.MenuHeaderRenderer=} opt_renderer Optional renderer.
             * @constructor
             * @extends {goog.ui.Control}
             */
            constructor(content: Node, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuHeaderRenderer);
            /**
             * Class representing a menu header.
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @param {goog.ui.MenuHeaderRenderer=} opt_renderer Optional renderer.
             * @constructor
             * @extends {goog.ui.Control}
             */
            constructor(content: Node[], opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuHeaderRenderer);
            /**
             * Class representing a menu header.
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @param {goog.ui.MenuHeaderRenderer=} opt_renderer Optional renderer.
             * @constructor
             * @extends {goog.ui.Control}
             */
            constructor(content: NodeList, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuHeaderRenderer);
        }
    }
}
