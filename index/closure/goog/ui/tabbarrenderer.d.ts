/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../closure/goog/ui/containerrenderer.d.ts" />

declare module goog.ui {

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
    class TabBarRenderer extends goog.ui.ContainerRenderer {
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

declare module goog.ui.TabBarRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

