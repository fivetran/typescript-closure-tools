/// <reference path="../../../globals.d.ts" />
/// <reference path="./colormenubutton.d.ts" />
/// <reference path="./menu.d.ts" />
/// <reference path="./colormenubuttonrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class ToolbarColorMenuButton extends ToolbarColorMenuButton.__Class { }
    module ToolbarColorMenuButton {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ColorMenuButton.__Class {
    
            /**
             * A color menu button control for a toolbar.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *     structure to display as the button's caption.
             * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked;
             *     should contain at least one {@link goog.ui.ColorPalette} if present.
             * @param {goog.ui.ColorMenuButtonRenderer=} opt_renderer Optional
             *     renderer used to render or decorate the button; defaults to
             *     {@link goog.ui.ToolbarColorMenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.ColorMenuButton}
             */
            constructor(content: string, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ColorMenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A color menu button control for a toolbar.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *     structure to display as the button's caption.
             * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked;
             *     should contain at least one {@link goog.ui.ColorPalette} if present.
             * @param {goog.ui.ColorMenuButtonRenderer=} opt_renderer Optional
             *     renderer used to render or decorate the button; defaults to
             *     {@link goog.ui.ToolbarColorMenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.ColorMenuButton}
             */
            constructor(content: Node, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ColorMenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A color menu button control for a toolbar.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *     structure to display as the button's caption.
             * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked;
             *     should contain at least one {@link goog.ui.ColorPalette} if present.
             * @param {goog.ui.ColorMenuButtonRenderer=} opt_renderer Optional
             *     renderer used to render or decorate the button; defaults to
             *     {@link goog.ui.ToolbarColorMenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.ColorMenuButton}
             */
            constructor(content: Node[], opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ColorMenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A color menu button control for a toolbar.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *     structure to display as the button's caption.
             * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked;
             *     should contain at least one {@link goog.ui.ColorPalette} if present.
             * @param {goog.ui.ColorMenuButtonRenderer=} opt_renderer Optional
             *     renderer used to render or decorate the button; defaults to
             *     {@link goog.ui.ToolbarColorMenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.ColorMenuButton}
             */
            constructor(content: NodeList, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ColorMenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
        }
    }
}
