/// <reference path="../../../globals.d.ts" />
/// <reference path="./custombuttonrenderer.d.ts" />

declare module goog.ui {

    class ToolbarButtonRenderer extends ToolbarButtonRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ToolbarButtonRenderer__Class extends goog.ui.CustomButtonRenderer__Class  { 
    
            /**
             * Toolbar-specific renderer for {@link goog.ui.Button}s, based on {@link
             * goog.ui.CustomButtonRenderer}.
             * @constructor
             * @extends {goog.ui.CustomButtonRenderer}
             */
            constructor();
    } 
    
}

declare module goog.ui.ToolbarButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of buttons rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
