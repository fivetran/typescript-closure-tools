/// <reference path="../../../globals.d.ts" />
/// <reference path="./containerrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./container.d.ts" />

declare module goog.ui.menuBar {

    /**
     * The menuBar factory creates a new menu bar.
     * @param {goog.ui.ContainerRenderer=} opt_renderer Renderer used to render or
     *     decorate the menu bar; defaults to {@link goog.ui.MenuBarRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for document
     *     interaction.
     * @return {!goog.ui.Container} The created menu bar.
     */
    function create(opt_renderer?: goog.ui.ContainerRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.Container;
}
