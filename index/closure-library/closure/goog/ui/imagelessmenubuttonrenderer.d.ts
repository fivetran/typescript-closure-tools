/// <reference path="../../../globals.d.ts" />
/// <reference path="./menubuttonrenderer.d.ts" />

declare module goog.ui {

    class ImagelessMenuButtonRenderer extends ImagelessMenuButtonRenderer.__Class { }
    module ImagelessMenuButtonRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.MenuButtonRenderer.__Class {
    
            /**
             * Custom renderer for {@link goog.ui.MenuButton}s. Imageless buttons can
             * contain almost arbitrary HTML content, will flow like inline elements, but
             * can be styled like block-level elements.
             *
             * @deprecated These contain a lot of unnecessary DOM for modern user agents.
             *     Please use a simpler button renderer like css3buttonrenderer.
             * @constructor
             * @extends {goog.ui.MenuButtonRenderer}
             * @final
             */
            constructor();
        }
    }
}

declare module goog.ui.ImagelessMenuButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
