/// <reference path="../../../globals.d.ts" />
/// <reference path="./menuitemrenderer.d.ts" />

declare module goog.ui {

    class SubMenuRenderer extends SubMenuRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class SubMenuRenderer__Class extends goog.ui.MenuItemRenderer__Class  { 
    
            /**
             * Default renderer for {@link goog.ui.SubMenu}s.  Each item has the following
             * structure:
             *    <div class="goog-submenu">
             *      ...(menuitem content)...
             *      <div class="goog-menu">
             *        ... (submenu content) ...
             *      </div>
             *    </div>
             * @constructor
             * @extends {goog.ui.MenuItemRenderer}
             * @final
             */
            constructor();
    } 
    
}

declare module goog.ui.SubMenuRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
