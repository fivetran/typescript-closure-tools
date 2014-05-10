/// <reference path="../../../globals.d.ts" />
/// <reference path="./menuitemrenderer.d.ts" />

declare module goog.ui {

    class FilterObservingMenuItemRenderer extends __FilterObservingMenuItemRenderer { }
    class __FilterObservingMenuItemRenderer extends goog.ui.__MenuItemRenderer {
    
        /**
         * Default renderer for {@link goog.ui.FilterObservingMenuItem}s. Each item has
         * the following structure:
         *    <div class="goog-filterobsmenuitem"><div>...(content)...</div></div>
         *
         * @constructor
         * @extends {goog.ui.MenuItemRenderer}
         * @final
         */
        constructor();
    }
}

declare module goog.ui.FilterObservingMenuItemRenderer {

    /**
     * CSS class name the renderer applies to menu item elements.
     * @type {string}
     */
    var CSS_CLASS: string;
}
