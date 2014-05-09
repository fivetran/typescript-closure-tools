/// <reference path="../../../globals.d.ts" />
/// <reference path="./controlrenderer.d.ts" />

declare module goog.ui {

    class TextareaRenderer extends goog.ui.ControlRenderer {
    
        /**
         * Renderer for {@link goog.ui.Textarea}s.  Renders and decorates native HTML
         * textarea elements.  Since native HTML textareas have built-in support for
         * many features, overrides many expensive (and redundant) superclass methods to
         * be no-ops.
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         * @final
         */
        constructor();
    }
}

declare module goog.ui.TextareaRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
