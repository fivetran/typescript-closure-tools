/// <reference path="../../../globals.d.ts" />
/// <reference path="./toolbarmenubuttonrenderer.d.ts" />

declare module goog.ui {

    class ToolbarColorMenuButtonRenderer extends __ToolbarColorMenuButtonRenderer { }
    class __ToolbarColorMenuButtonRenderer extends goog.ui.__ToolbarMenuButtonRenderer {
    
        /**
         * Toolbar-style renderer for {@link goog.ui.ColorMenuButton}s.
         * @constructor
         * @extends {goog.ui.ToolbarMenuButtonRenderer}
         * @final
         */
        constructor();
    }
}
