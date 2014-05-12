/// <reference path="../../../../globals.d.ts" />
/// <reference path="./basenode.d.ts" />
/// <reference path="../../dom/dom.d.ts" />
/// <reference path="../../html/safehtml.d.ts" />

declare module goog.ui.tree {

    class TreeNode extends TreeNode.__Class { }
    module TreeNode {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.tree.BaseNode.__Class {
    
            /**
             * A single node in the tree.
             * @param {string|!goog.html.SafeHtml} html The html content of the node label.
             * @param {Object=} opt_config The configuration for the tree. See
             *    goog.ui.tree.TreeControl.defaultConfig. If not specified, a default config
             *    will be used.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.tree.BaseNode}
             */
            constructor(html: string, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A single node in the tree.
             * @param {string|!goog.html.SafeHtml} html The html content of the node label.
             * @param {Object=} opt_config The configuration for the tree. See
             *    goog.ui.tree.TreeControl.defaultConfig. If not specified, a default config
             *    will be used.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.tree.BaseNode}
             */
            constructor(html: goog.html.SafeHtml, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
        }
    }
}
