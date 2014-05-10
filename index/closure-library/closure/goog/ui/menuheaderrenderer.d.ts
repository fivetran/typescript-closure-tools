/// <reference path="../../../globals.d.ts" />
/// <reference path="./controlrenderer.d.ts" />

declare module goog.ui {

    class MenuHeaderRenderer extends __MenuHeaderRenderer { }
    class __MenuHeaderRenderer extends goog.ui.__ControlRenderer {
    
        /**
         * Renderer for menu headers.
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    }
}

declare module goog.ui.MenuHeaderRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
