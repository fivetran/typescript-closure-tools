/// <reference path="../../../globals.d.ts" />
/// <reference path="./button.d.ts" />
/// <reference path="./controlcontent.d.ts" />
/// <reference path="./buttonrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class ToggleButton extends ToggleButton__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ToggleButton__Class extends goog.ui.Button__Class  { 
    
            /**
             * A toggle button, with checkbox-like semantics.  Rendered using
             * {@link goog.ui.CustomButtonRenderer} by default, though any
             * {@link goog.ui.ButtonRenderer} would work.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *     structure to display as the button's caption.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
             *     decorate the button; defaults to {@link goog.ui.CustomButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.Button}
             */
            constructor(content: goog.ui.ControlContent, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    } 
    
}
