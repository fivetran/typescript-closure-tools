/// <reference path="../../../globals.d.ts" />
/// <reference path="./menubuttonrenderer.d.ts" />

declare module goog.ui {

    class Css3MenuButtonRenderer extends Css3MenuButtonRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Css3MenuButtonRenderer__Class extends goog.ui.MenuButtonRenderer__Class  { 
    
            /**
             * Custom renderer for {@link goog.ui.MenuButton}s. Css3 buttons can contain
             * almost arbitrary HTML content, will flow like inline elements, but can be
             * styled like block-level elements.
             *
             * @constructor
             * @extends {goog.ui.MenuButtonRenderer}
             * @final
             */
            constructor();
    } 
    
}

declare module goog.ui.Css3MenuButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
