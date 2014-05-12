/// <reference path="../../../globals.d.ts" />
/// <reference path="./containerrenderer.d.ts" />
/// <reference path="./menu.d.ts" />

declare module goog.ui {

    class MenuRenderer extends MenuRenderer.__Class { }
    module MenuRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ContainerRenderer.__Class {
    
            /**
             * Default renderer for {@link goog.ui.Menu}s, based on {@link
             * goog.ui.ContainerRenderer}.
             * @param {string=} opt_ariaRole Optional ARIA role used for the element.
             * @constructor
             * @extends {goog.ui.ContainerRenderer}
             */
            constructor(opt_ariaRole?: string);
    
            /**
             * Returns whether the given element is contained in the menu's DOM.
             * @param {goog.ui.Menu} menu The menu to test.
             * @param {Element} element The element to test.
             * @return {boolean} Whether the given element is contained in the menu.
             */
            containsElement(menu: goog.ui.Menu, element: Element): boolean;
        }
    }
}

declare module goog.ui.MenuRenderer {

    /**
     * Default CSS class to be applied to the root element of toolbars rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
