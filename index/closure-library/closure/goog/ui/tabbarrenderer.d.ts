/// <reference path="../../../globals.d.ts" />
/// <reference path="./containerrenderer.d.ts" />

declare module goog.ui {

    class TabBarRenderer extends TabBarRenderer.__Class { }
    module TabBarRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ContainerRenderer.__Class {
    
            /**
             * Default renderer for {@link goog.ui.TabBar}s, based on the {@code TabPane}
             * code.  The tab bar's DOM structure is determined by its orientation and
             * location relative to tab contents.  For example, a horizontal tab bar
             * located above tab contents looks like this:
             * <pre>
             *   <div class="goog-tab-bar goog-tab-bar-horizontal goog-tab-bar-top">
             *     ...(tabs here)...
             *   </div>
             * </pre>
             * @constructor
             * @extends {goog.ui.ContainerRenderer}
             */
            constructor();
        }
    }
}

declare module goog.ui.TabBarRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
