/// <reference path="../../../globals.d.ts" />
/// <reference path="./control.d.ts" />
/// <reference path="./menuseparatorrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class Separator extends Separator.__Class { }
    module Separator {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Control.__Class {
    
            /**
             * Class representing a separator.  Although it extends {@link goog.ui.Control},
             * the Separator class doesn't allocate any event handlers, nor does it change
             * its appearance on mouseover, etc.
             * @param {goog.ui.MenuSeparatorRenderer=} opt_renderer Renderer to render or
             *    decorate the separator; defaults to {@link goog.ui.MenuSeparatorRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
             *    document interaction.
             * @constructor
             * @extends {goog.ui.Control}
             */
            constructor(opt_renderer?: goog.ui.MenuSeparatorRenderer, opt_domHelper?: goog.dom.DomHelper);
        }
    }
}
