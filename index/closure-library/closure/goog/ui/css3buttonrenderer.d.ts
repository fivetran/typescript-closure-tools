/// <reference path="../../../globals.d.ts" />
/// <reference path="./buttonrenderer.d.ts" />

declare module goog.ui {

    class Css3ButtonRenderer extends Css3ButtonRenderer.__Class { }
    module Css3ButtonRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ButtonRenderer.__Class {
    
            /**
             * Custom renderer for {@link goog.ui.Button}s. Css3 buttons can contain
             * almost arbitrary HTML content, will flow like inline elements, but can be
             * styled like block-level elements.
             *
             * @constructor
             * @extends {goog.ui.ButtonRenderer}
             * @final
             */
            constructor();
        }
    }
}

declare module goog.ui.Css3ButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
