/// <reference path="../../../globals.d.ts" />
/// <reference path="./menuseparatorrenderer.d.ts" />

declare module goog.ui {

    class ToolbarSeparatorRenderer extends ToolbarSeparatorRenderer.__Class { }
    module ToolbarSeparatorRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.MenuSeparatorRenderer.__Class {
    
            /**
             * Renderer for toolbar separators.
             * @constructor
             * @extends {goog.ui.MenuSeparatorRenderer}
             */
            constructor();
        }
    }
}

declare module goog.ui.ToolbarSeparatorRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
