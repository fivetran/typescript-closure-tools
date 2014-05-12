/// <reference path="../../../globals.d.ts" />
/// <reference path="./toolbarmenubuttonrenderer.d.ts" />

declare module goog.ui {

    class ToolbarColorMenuButtonRenderer extends ToolbarColorMenuButtonRenderer.__Class { }
    module ToolbarColorMenuButtonRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ToolbarMenuButtonRenderer.__Class {
    
            /**
             * Toolbar-style renderer for {@link goog.ui.ColorMenuButton}s.
             * @constructor
             * @extends {goog.ui.ToolbarMenuButtonRenderer}
             * @final
             */
            constructor();
        }
    }
}
