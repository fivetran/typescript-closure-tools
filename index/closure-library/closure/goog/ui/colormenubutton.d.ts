/// <reference path="../../../globals.d.ts" />
/// <reference path="./menubutton.d.ts" />
/// <reference path="./controlcontent.d.ts" />
/// <reference path="./menu.d.ts" />
/// <reference path="./menubuttonrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./control.d.ts" />

declare module goog.ui {

    class ColorMenuButton extends ColorMenuButton__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ColorMenuButton__Class extends goog.ui.MenuButton__Class  { 
    
            /**
             * A color menu button control.  Extends {@link goog.ui.MenuButton} by adding
             * an API for getting and setting the currently selected color from a menu of
             * color palettes.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *     structure to display as the button's caption.
             * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked;
             *     should contain at least one {@link goog.ui.ColorPalette} if present.
             * @param {goog.ui.MenuButtonRenderer=} opt_renderer Button renderer;
             *     defaults to {@link goog.ui.ColorMenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.MenuButton}
             */
            constructor(content: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.MenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Returns the currently selected color (null if none).
             * @return {string} The selected color.
             */
            getSelectedColor(): string;
    
            /**
             * Sets the selected color, or clears the selected color if the argument is
             * null or not any of the available color choices.
             * @param {?string} color New color.
             */
            setSelectedColor(color: string): void;
    } 
    
}

declare module goog.ui.ColorMenuButton {

    /**
     * Default color palettes.
     * @type {!Object}
     */
    var PALETTES: Object;

    /**
     * Value for the "no color" menu item object in the color menu (if present).
     * The {@link goog.ui.ColorMenuButton#handleMenuAction} method interprets
     * ACTION events dispatched by an item with this value as meaning "clear the
     * selected color."
     * @type {string}
     */
    var NO_COLOR: string;

    /**
     * Factory method that creates and returns a new {@link goog.ui.Menu} instance
     * containing default color palettes.
     * @param {Array.<goog.ui.Control>=} opt_extraItems Optional extra menu items to
     *     add before the color palettes.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @return {!goog.ui.Menu} Color menu.
     */
    function newColorMenu(opt_extraItems?: goog.ui.Control[], opt_domHelper?: goog.dom.DomHelper): goog.ui.Menu;
}
