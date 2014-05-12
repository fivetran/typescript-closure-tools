/// <reference path="../../../globals.d.ts" />
/// <reference path="./container.d.ts" />
/// <reference path="./toolbarrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class Toolbar extends Toolbar.__Class { }
    module Toolbar {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Container.__Class {
    
            /**
             * A toolbar class, implemented as a {@link goog.ui.Container} that defaults to
             * having a horizontal orientation and {@link goog.ui.ToolbarRenderer} as its
             * renderer.
             * @param {goog.ui.ToolbarRenderer=} opt_renderer Renderer used to render or
             *     decorate the toolbar; defaults to {@link goog.ui.ToolbarRenderer}.
             * @param {?goog.ui.Container.Orientation=} opt_orientation Toolbar orientation;
             *     defaults to {@code HORIZONTAL}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.Container}
             */
            constructor(opt_renderer?: goog.ui.ToolbarRenderer, opt_orientation?: goog.ui.Container.Orientation, opt_domHelper?: goog.dom.DomHelper);
        }
    }
}
