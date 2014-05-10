/// <reference path="../../../../../globals.d.ts" />
/// <reference path="./buttonrenderer.d.ts" />

declare module goog.ui.style.app {

    class PrimaryActionButtonRenderer extends __PrimaryActionButtonRenderer { }
    class __PrimaryActionButtonRenderer extends goog.ui.style.app.__ButtonRenderer {
    
        /**
         * Custom renderer for {@link goog.ui.Button}s. This renderer supports the
         * "primary action" style for buttons.
         *
         * @constructor
         * @extends {goog.ui.style.app.ButtonRenderer}
         * @final
         */
        constructor();
    }
}

declare module goog.ui.style.app.PrimaryActionButtonRenderer {

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
