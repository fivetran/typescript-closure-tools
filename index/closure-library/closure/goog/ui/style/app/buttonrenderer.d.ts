/// <reference path="../../../../../globals.d.ts" />
/// <reference path="../../custombuttonrenderer.d.ts" />

declare module goog.ui.style.app {

    class ButtonRenderer extends ButtonRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ButtonRenderer__Class extends goog.ui.CustomButtonRenderer__Class  { 
    
            /**
             * Custom renderer for {@link goog.ui.Button}s. Imageless buttons can contain
             * almost arbitrary HTML content, will flow like inline elements, but can be
             * styled like block-level elements.
             *
             * @constructor
             * @extends {goog.ui.CustomButtonRenderer}
             */
            constructor();
    } 
    
}

declare module goog.ui.style.app.ButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Array of arrays of CSS classes that we want composite classes added and
     * removed for in IE6 and lower as a workaround for lack of multi-class CSS
     * selector support.
     * @type {Array.<Array.<string>>}
     */
    var IE6_CLASS_COMBINATIONS: string[][];
}
