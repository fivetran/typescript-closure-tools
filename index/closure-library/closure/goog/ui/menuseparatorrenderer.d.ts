/// <reference path="../../../globals.d.ts" />
/// <reference path="./controlrenderer.d.ts" />

declare module goog.ui {

    class MenuSeparatorRenderer extends MenuSeparatorRenderer.__Class { }
    module MenuSeparatorRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ControlRenderer.__Class {
    
            /**
             * Renderer for menu separators.
             * @constructor
             * @extends {goog.ui.ControlRenderer}
             */
            constructor();
        }
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
