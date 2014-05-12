/// <reference path="../../../../globals.d.ts" />
/// <reference path="./basenode.d.ts" />
/// <reference path="../../dom/dom.d.ts" />
/// <reference path="../../html/safehtml.d.ts" />
/// <reference path="../../events/browserevent.d.ts" />
/// <reference path="./treenode.d.ts" />

declare module goog.ui.tree {

    class TreeControl extends TreeControl.__Class { }
    module TreeControl {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.tree.BaseNode.__Class {
    
            /**
             * This creates a TreeControl object. A tree control provides a way to
             * view a hierarchical set of data.
             * @param {string|!goog.html.SafeHtml} html The HTML content of the node label.
             * @param {Object=} opt_config The configuration for the tree. See
             *    goog.ui.tree.TreeControl.defaultConfig. If not specified, a default config
             *    will be used.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.tree.BaseNode}
             */
            constructor(html: string, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
            /**
             * This creates a TreeControl object. A tree control provides a way to
             * view a hierarchical set of data.
             * @param {string|!goog.html.SafeHtml} html The HTML content of the node label.
             * @param {Object=} opt_config The configuration for the tree. See
             *    goog.ui.tree.TreeControl.defaultConfig. If not specified, a default config
             *    will be used.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.tree.BaseNode}
             */
            constructor(html: goog.html.SafeHtml, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * @return {boolean} Whether the tree has keyboard focus.
             */
            hasFocus(): boolean;
    
            /**
             * Sets the selected item.
             * @param {goog.ui.tree.BaseNode} node The item to select.
             */
            setSelectedItem(node: goog.ui.tree.BaseNode): void;
    
            /**
             * Returns the selected item.
             * @return {goog.ui.tree.BaseNode} The currently selected item.
             */
            getSelectedItem(): goog.ui.tree.BaseNode;
    
            /**
             * Sets whether to show lines.
             * @param {boolean} b Whether to show lines.
             */
            setShowLines(b: boolean): void;
    
            /**
             * @return {boolean} Whether to show lines.
             */
            getShowLines(): boolean;
    
            /**
             * Sets whether to show root lines.
             * @param {boolean} b Whether to show root lines.
             */
            setShowRootLines(b: boolean): void;
    
            /**
             * @return {boolean} Whether to show root lines.
             */
            getShowRootLines(): boolean;
    
            /**
             * Sets whether to show expand icons.
             * @param {boolean} b Whether to show expand icons.
             */
            setShowExpandIcons(b: boolean): void;
    
            /**
             * @return {boolean} Whether to show expand icons.
             */
            getShowExpandIcons(): boolean;
    
            /**
             * Sets whether to show the root node.
             * @param {boolean} b Whether to show the root node.
             */
            setShowRootNode(b: boolean): void;
    
            /**
             * @return {boolean} Whether to show the root node.
             */
            getShowRootNode(): boolean;
    
            /**
             * Handles key down on the tree.
             * @param {!goog.events.BrowserEvent} e The browser event.
             * @return {boolean} The handled value.
             */
            handleKeyEvent(e: goog.events.BrowserEvent): boolean;
    
            /**
             * Creates a new tree node using the same config as the root.
             * @param {string=} opt_html The HTML content of the node label.
             * @return {!goog.ui.tree.TreeNode} The new item.
             */
            createNode(opt_html?: string): goog.ui.tree.TreeNode;
    
            /**
             * Allows the caller to notify that the given node has been added or just had
             * been updated in the tree.
             * @param {goog.ui.tree.BaseNode} node New node being added or existing node
             *    that just had been updated.
             */
            setNode(node: goog.ui.tree.BaseNode): void;
    
            /**
             * Allows the caller to notify that the given node is being removed from the
             * tree.
             * @param {goog.ui.tree.BaseNode} node Node being removed.
             */
            removeNode(node: goog.ui.tree.BaseNode): void;
    
            /**
             * Clear the typeahead buffer.
             */
            clearTypeAhead(): void;
        }
    }
}

declare module goog.ui.tree.TreeControl {

    /**
     * A default configuration for the tree.
     */
    var defaultConfig: any /*missing*/;
}
