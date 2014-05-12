/// <reference path="../../../globals.d.ts" />
/// <reference path="./colormenubuttonrenderer.d.ts" />

declare module goog.ui {

    class ColorButtonRenderer extends ColorButtonRenderer.__Class { }
    module ColorButtonRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ColorMenuButtonRenderer.__Class {
    
            /**
             * Renderer for {@link goog.ui.ColorButton}s.
             * Uses {@link goog.ui.ColorMenuButton}s but disables the dropdown.
             *
             * @constructor
             * @extends {goog.ui.ColorMenuButtonRenderer}
             * @final
             */
            constructor();
        }
    }
}

declare module goog.ui.ColorButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer. Additionally, applies class to the button's caption.
     * @type {string}
     */
    var CSS_CLASS: string;
}
