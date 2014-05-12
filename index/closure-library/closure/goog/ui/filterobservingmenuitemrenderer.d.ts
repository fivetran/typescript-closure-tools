/// <reference path="../../../globals.d.ts" />
/// <reference path="./menuitemrenderer.d.ts" />

declare module goog.ui {

    class FilterObservingMenuItemRenderer extends FilterObservingMenuItemRenderer.__Class { }
    module FilterObservingMenuItemRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.MenuItemRenderer.__Class {
    
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
}

declare module goog.ui.FilterObservingMenuItemRenderer {

    /**
     * CSS class name the renderer applies to menu item elements.
     * @type {string}
     */
    var CSS_CLASS: string;
}
