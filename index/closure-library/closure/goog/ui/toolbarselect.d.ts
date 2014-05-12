/// <reference path="../../../globals.d.ts" />
/// <reference path="./select.d.ts" />
/// <reference path="./menu.d.ts" />
/// <reference path="./menubuttonrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class ToolbarSelect extends ToolbarSelect.__Class { }
    module ToolbarSelect {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Select.__Class {
    
            /**
             * A select control for a toolbar.
             *
             * @param {goog.ui.ControlContent} caption Default caption or existing DOM
             *     structure to display as the button's caption when nothing is selected.
             * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
             * @param {goog.ui.MenuButtonRenderer=} opt_renderer Renderer used to
             *     render or decorate the control; defaults to
             *     {@link goog.ui.ToolbarMenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.Select}
             */
            constructor(caption: string, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.MenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A select control for a toolbar.
             *
             * @param {goog.ui.ControlContent} caption Default caption or existing DOM
             *     structure to display as the button's caption when nothing is selected.
             * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
             * @param {goog.ui.MenuButtonRenderer=} opt_renderer Renderer used to
             *     render or decorate the control; defaults to
             *     {@link goog.ui.ToolbarMenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.Select}
             */
            constructor(caption: Node, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.MenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A select control for a toolbar.
             *
             * @param {goog.ui.ControlContent} caption Default caption or existing DOM
             *     structure to display as the button's caption when nothing is selected.
             * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
             * @param {goog.ui.MenuButtonRenderer=} opt_renderer Renderer used to
             *     render or decorate the control; defaults to
             *     {@link goog.ui.ToolbarMenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.Select}
             */
            constructor(caption: Node[], opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.MenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A select control for a toolbar.
             *
             * @param {goog.ui.ControlContent} caption Default caption or existing DOM
             *     structure to display as the button's caption when nothing is selected.
             * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
             * @param {goog.ui.MenuButtonRenderer=} opt_renderer Renderer used to
             *     render or decorate the control; defaults to
             *     {@link goog.ui.ToolbarMenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.Select}
             */
            constructor(caption: NodeList, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.MenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
        }
    }
}
