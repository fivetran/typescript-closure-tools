// Generated Sat May  3 12:16:12 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/ui/registry.d.ts" />
/// <reference path="../../goog/ui/containerrenderer.d.ts" />

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

