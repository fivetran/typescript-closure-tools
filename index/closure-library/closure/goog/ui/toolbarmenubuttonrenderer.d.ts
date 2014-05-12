/// <reference path="../../../globals.d.ts" />
/// <reference path="./menubuttonrenderer.d.ts" />

declare module goog.ui {

    class ToolbarMenuButtonRenderer extends ToolbarMenuButtonRenderer.__Class { }
    module ToolbarMenuButtonRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.MenuButtonRenderer.__Class {
    
            /**
             * Toolbar-specific renderer for {@link goog.ui.MenuButton}s, based on {@link
             * goog.ui.MenuButtonRenderer}.
             * @constructor
             * @extends {goog.ui.MenuButtonRenderer}
             */
            constructor();
        }
    }
}

declare module goog.ui.ToolbarMenuButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of menu buttons rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
