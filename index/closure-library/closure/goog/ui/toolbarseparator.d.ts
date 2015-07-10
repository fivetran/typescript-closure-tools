/// <reference path="../../../globals.d.ts" />
/// <reference path="./separator.d.ts" />
/// <reference path="./toolbarseparatorrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class ToolbarSeparator extends ToolbarSeparator__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ToolbarSeparator__Class extends goog.ui.Separator__Class  { 
    
            /**
             * A separator control for a toolbar.
             *
             * @param {goog.ui.ToolbarSeparatorRenderer=} opt_renderer Renderer to render or
             *    decorate the separator; defaults to
             *     {@link goog.ui.ToolbarSeparatorRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
             *    document interaction.
             * @constructor
             * @extends {goog.ui.Separator}
             * @final
             */
            constructor(opt_renderer?: goog.ui.ToolbarSeparatorRenderer, opt_domHelper?: goog.dom.DomHelper);
    } 
    
}
