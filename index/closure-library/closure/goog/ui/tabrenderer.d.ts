/// <reference path="../../../globals.d.ts" />
/// <reference path="./controlrenderer.d.ts" />

declare module goog.ui {

    class TabRenderer extends TabRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class TabRenderer__Class extends goog.ui.ControlRenderer__Class  { 
    
            /**
             * Default renderer for {@link goog.ui.Tab}s, based on the {@code TabPane} code.
             * @constructor
             * @extends {goog.ui.ControlRenderer}
             */
            constructor();
    
            /**
             * Takes a tab's root element, and returns its tooltip text, or the empty
             * string if the element has no tooltip.
             * @param {Element} element The tab's root element.
             * @return {string} The tooltip text (empty string if none).
             */
            getTooltip(element: Element): string;
    
            /**
             * Takes a tab's root element and a tooltip string, and updates the element
             * with the new tooltip.  If the new tooltip is null or undefined, sets the
             * element's title to the empty string.
             * @param {Element} element The tab's root element.
             * @param {string|null|undefined} tooltip New tooltip text (if any).
             */
            setTooltip(element: Element, tooltip: string|any /*null*/|any /*undefined*/): void;
    } 
    
}

declare module goog.ui.TabRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
