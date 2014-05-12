/// <reference path="../../../globals.d.ts" />
/// <reference path="./buttonrenderer.d.ts" />

declare module goog.ui {

    class FlatButtonRenderer extends FlatButtonRenderer.__Class { }
    module FlatButtonRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ButtonRenderer.__Class {
    
            /**
             * Flat renderer for {@link goog.ui.Button}s.  Flat buttons can contain
             * almost arbitrary HTML content, will flow like inline elements, but can be
             * styled like block-level elements.
             * @constructor
             * @extends {goog.ui.ButtonRenderer}
             */
            constructor();
        }
    }
}

declare module goog.ui.FlatButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
