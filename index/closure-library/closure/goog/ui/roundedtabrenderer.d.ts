/// <reference path="../../../globals.d.ts" />
/// <reference path="./tabrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./tabbar.d.ts" />

declare module goog.ui {

    class RoundedTabRenderer extends RoundedTabRenderer.__Class { }
    module RoundedTabRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.TabRenderer.__Class {
    
            /**
             * Rounded corner tab renderer for {@link goog.ui.Tab}s.
             * @constructor
             * @extends {goog.ui.TabRenderer}
             * @final
             */
            constructor();
    
            /**
             * Creates a table implementing a rounded corner tab.
             * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
             * @param {goog.ui.ControlContent} caption Text caption or DOM structure
             *     to display as the tab's caption.
             * @param {goog.ui.TabBar.Location} location Tab bar location relative to the
             *     tab contents.
             * @return {!Element} Table implementing a rounded corner tab.
             * @protected
             */
            createTab(dom: goog.dom.DomHelper, caption: string, location: goog.ui.TabBar.Location): Element;
            /**
             * Creates a table implementing a rounded corner tab.
             * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
             * @param {goog.ui.ControlContent} caption Text caption or DOM structure
             *     to display as the tab's caption.
             * @param {goog.ui.TabBar.Location} location Tab bar location relative to the
             *     tab contents.
             * @return {!Element} Table implementing a rounded corner tab.
             * @protected
             */
            createTab(dom: goog.dom.DomHelper, caption: Node, location: goog.ui.TabBar.Location): Element;
            /**
             * Creates a table implementing a rounded corner tab.
             * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
             * @param {goog.ui.ControlContent} caption Text caption or DOM structure
             *     to display as the tab's caption.
             * @param {goog.ui.TabBar.Location} location Tab bar location relative to the
             *     tab contents.
             * @return {!Element} Table implementing a rounded corner tab.
             * @protected
             */
            createTab(dom: goog.dom.DomHelper, caption: Node[], location: goog.ui.TabBar.Location): Element;
            /**
             * Creates a table implementing a rounded corner tab.
             * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
             * @param {goog.ui.ControlContent} caption Text caption or DOM structure
             *     to display as the tab's caption.
             * @param {goog.ui.TabBar.Location} location Tab bar location relative to the
             *     tab contents.
             * @return {!Element} Table implementing a rounded corner tab.
             * @protected
             */
            createTab(dom: goog.dom.DomHelper, caption: NodeList, location: goog.ui.TabBar.Location): Element;
    
            /**
             * Creates a table row implementing the tab caption.
             * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
             * @param {goog.ui.ControlContent} caption Text caption or DOM structure
             *     to display as the tab's caption.
             * @return {!Element} Tab caption table row.
             * @protected
             */
            createCaption(dom: goog.dom.DomHelper, caption: string): Element;
            /**
             * Creates a table row implementing the tab caption.
             * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
             * @param {goog.ui.ControlContent} caption Text caption or DOM structure
             *     to display as the tab's caption.
             * @return {!Element} Tab caption table row.
             * @protected
             */
            createCaption(dom: goog.dom.DomHelper, caption: Node): Element;
            /**
             * Creates a table row implementing the tab caption.
             * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
             * @param {goog.ui.ControlContent} caption Text caption or DOM structure
             *     to display as the tab's caption.
             * @return {!Element} Tab caption table row.
             * @protected
             */
            createCaption(dom: goog.dom.DomHelper, caption: Node[]): Element;
            /**
             * Creates a table row implementing the tab caption.
             * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
             * @param {goog.ui.ControlContent} caption Text caption or DOM structure
             *     to display as the tab's caption.
             * @return {!Element} Tab caption table row.
             * @protected
             */
            createCaption(dom: goog.dom.DomHelper, caption: NodeList): Element;
    
            /**
             * Creates a table row implementing a rounded tab edge.
             * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
             * @param {boolean} isTopEdge Whether to create a top or bottom edge.
             * @return {!Element} Rounded tab edge table row.
             * @protected
             */
            createEdge(dom: goog.dom.DomHelper, isTopEdge: boolean): Element;
        }
    }
}

declare module goog.ui.RoundedTabRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
