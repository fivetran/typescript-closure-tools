/// <reference path="../../../globals.d.ts" />
/// <reference path="./togglebutton.d.ts" />
/// <reference path="./toolbarbuttonrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class ToolbarToggleButton extends ToolbarToggleButton.__Class { }
    module ToolbarToggleButton {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ToggleButton.__Class {
    
            /**
             * A toggle button control for a toolbar.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *     structure to display as the button's caption.
             * @param {goog.ui.ToolbarButtonRenderer=} opt_renderer Optional renderer used
             *     to render or decorate the button; defaults to
             *     {@link goog.ui.ToolbarButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.ToggleButton}
             */
            constructor(content: string, opt_renderer?: goog.ui.ToolbarButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A toggle button control for a toolbar.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *     structure to display as the button's caption.
             * @param {goog.ui.ToolbarButtonRenderer=} opt_renderer Optional renderer used
             *     to render or decorate the button; defaults to
             *     {@link goog.ui.ToolbarButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.ToggleButton}
             */
            constructor(content: Node, opt_renderer?: goog.ui.ToolbarButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A toggle button control for a toolbar.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *     structure to display as the button's caption.
             * @param {goog.ui.ToolbarButtonRenderer=} opt_renderer Optional renderer used
             *     to render or decorate the button; defaults to
             *     {@link goog.ui.ToolbarButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.ToggleButton}
             */
            constructor(content: Node[], opt_renderer?: goog.ui.ToolbarButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A toggle button control for a toolbar.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *     structure to display as the button's caption.
             * @param {goog.ui.ToolbarButtonRenderer=} opt_renderer Optional renderer used
             *     to render or decorate the button; defaults to
             *     {@link goog.ui.ToolbarButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.ToggleButton}
             */
            constructor(content: NodeList, opt_renderer?: goog.ui.ToolbarButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
        }
    }
}
