/// <reference path="../../../globals.d.ts" />
/// <reference path="./button.d.ts" />
/// <reference path="./buttonrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class ColorButton extends ColorButton.__Class { }
    module ColorButton {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Button.__Class {
    
            /**
             * A color button control.  Identical to {@link goog.ui.Button}, except it
             * defaults its renderer to {@link goog.ui.ColorButtonRenderer}.
             * This button displays a particular color and is clickable.
             * It is primarily useful with {@link goog.ui.ColorSplitBehavior} to cache the
             * last selected color.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *    structure to display as the button's caption.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
             *    render or decorate the button; defaults to
             *    {@link goog.ui.ColorButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
             *    document interaction.
             * @constructor
             * @extends {goog.ui.Button}
             * @final
             */
            constructor(content: string, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A color button control.  Identical to {@link goog.ui.Button}, except it
             * defaults its renderer to {@link goog.ui.ColorButtonRenderer}.
             * This button displays a particular color and is clickable.
             * It is primarily useful with {@link goog.ui.ColorSplitBehavior} to cache the
             * last selected color.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *    structure to display as the button's caption.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
             *    render or decorate the button; defaults to
             *    {@link goog.ui.ColorButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
             *    document interaction.
             * @constructor
             * @extends {goog.ui.Button}
             * @final
             */
            constructor(content: Node, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A color button control.  Identical to {@link goog.ui.Button}, except it
             * defaults its renderer to {@link goog.ui.ColorButtonRenderer}.
             * This button displays a particular color and is clickable.
             * It is primarily useful with {@link goog.ui.ColorSplitBehavior} to cache the
             * last selected color.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *    structure to display as the button's caption.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
             *    render or decorate the button; defaults to
             *    {@link goog.ui.ColorButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
             *    document interaction.
             * @constructor
             * @extends {goog.ui.Button}
             * @final
             */
            constructor(content: Node[], opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A color button control.  Identical to {@link goog.ui.Button}, except it
             * defaults its renderer to {@link goog.ui.ColorButtonRenderer}.
             * This button displays a particular color and is clickable.
             * It is primarily useful with {@link goog.ui.ColorSplitBehavior} to cache the
             * last selected color.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *    structure to display as the button's caption.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
             *    render or decorate the button; defaults to
             *    {@link goog.ui.ColorButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
             *    document interaction.
             * @constructor
             * @extends {goog.ui.Button}
             * @final
             */
            constructor(content: NodeList, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
        }
    }
}
