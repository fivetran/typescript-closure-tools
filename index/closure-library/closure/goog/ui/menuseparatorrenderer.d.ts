/// <reference path="../../../globals.d.ts" />
/// <reference path="./controlrenderer.d.ts" />

declare module goog.ui {

    class MenuSeparatorRenderer extends __MenuSeparatorRenderer { }
    class __MenuSeparatorRenderer extends goog.ui.__ControlRenderer {
    
        /**
         * Renderer for menu separators.
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    }
}

declare module goog.ui.MenuSeparatorRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
