/// <reference path="../../../globals.d.ts" />
/// <reference path="./containerrenderer.d.ts" />

declare module goog.ui {

    class ToolbarRenderer extends ToolbarRenderer.__Class { }
    module ToolbarRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ContainerRenderer.__Class {
    
            /**
             * Default renderer for {@link goog.ui.Toolbar}s, based on {@link
             * goog.ui.ContainerRenderer}.
             * @constructor
             * @extends {goog.ui.ContainerRenderer}
             */
            constructor();
        }
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
