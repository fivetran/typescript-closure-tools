/// <reference path="../../../globals.d.ts" />
/// <reference path="./flatbuttonrenderer.d.ts" />

declare module goog.ui {

    class LinkButtonRenderer extends LinkButtonRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class LinkButtonRenderer__Class extends goog.ui.FlatButtonRenderer__Class  { 
    
            /**
             * Link renderer for {@link goog.ui.Button}s.  Link buttons can contain
             * almost arbitrary HTML content, will flow like inline elements, but can be
             * styled like block-level elements.
             * @constructor
             * @extends {goog.ui.FlatButtonRenderer}
             */
            constructor();
    } 
    
}

declare module goog.ui.LinkButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
