/// <reference path="../../../globals.d.ts" />
/// <reference path="./menuseparatorrenderer.d.ts" />

declare module goog.ui {

    class ToolbarSeparatorRenderer extends ToolbarSeparatorRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ToolbarSeparatorRenderer__Class extends goog.ui.MenuSeparatorRenderer__Class  { 
    
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
