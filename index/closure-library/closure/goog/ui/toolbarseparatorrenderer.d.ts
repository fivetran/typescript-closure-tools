/// <reference path="../../../globals.d.ts" />
/// <reference path="./menuseparatorrenderer.d.ts" />

declare module goog.ui {

    class ToolbarSeparatorRenderer extends __ToolbarSeparatorRenderer { }
    class __ToolbarSeparatorRenderer extends goog.ui.__MenuSeparatorRenderer {
    
        /**
         * Renderer for toolbar separators.
         * @constructor
         * @extends {goog.ui.MenuSeparatorRenderer}
         */
        constructor();
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
