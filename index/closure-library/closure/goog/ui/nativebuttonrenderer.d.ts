/// <reference path="../../../globals.d.ts" />
/// <reference path="./buttonrenderer.d.ts" />

declare module goog.ui {

    class NativeButtonRenderer extends goog.ui.ButtonRenderer {
    
        /**
         * Renderer for {@link goog.ui.Button}s.  Renders and decorates native HTML
         * button elements.  Since native HTML buttons have built-in support for many
         * features, overrides many expensive (and redundant) superclass methods to
         * be no-ops.
         * @constructor
         * @extends {goog.ui.ButtonRenderer}
         */
        constructor();
    }
}
