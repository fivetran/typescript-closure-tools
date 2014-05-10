/// <reference path="../../../globals.d.ts" />
/// <reference path="./containerrenderer.d.ts" />

declare module goog.ui {

    class ToolbarRenderer extends __ToolbarRenderer { }
    class __ToolbarRenderer extends goog.ui.__ContainerRenderer {
    
        /**
         * Default renderer for {@link goog.ui.Toolbar}s, based on {@link
         * goog.ui.ContainerRenderer}.
         * @constructor
         * @extends {goog.ui.ContainerRenderer}
         */
        constructor();
    }
}

declare module goog.ui.ToolbarRenderer {

    /**
     * Default CSS class to be applied to the root element of toolbars rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
