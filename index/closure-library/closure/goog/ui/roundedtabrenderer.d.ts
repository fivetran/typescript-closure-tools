/// <reference path="../../../globals.d.ts" />
/// <reference path="./tabrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./controlcontent.d.ts" />
/// <reference path="./tabbar.d.ts" />

declare module goog.ui {

    class RoundedTabRenderer extends RoundedTabRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class RoundedTabRenderer__Class extends goog.ui.TabRenderer__Class  { 
    
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
            createTab(dom: goog.dom.DomHelper, caption: goog.ui.ControlContent, location: goog.ui.TabBar.Location): Element;
    
            /**
             * Creates a table row implementing the tab caption.
             * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
             * @param {goog.ui.ControlContent} caption Text caption or DOM structure
             *     to display as the tab's caption.
             * @return {!Element} Tab caption table row.
             * @protected
             */
            createCaption(dom: goog.dom.DomHelper, caption: goog.ui.ControlContent): Element;
    
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

declare module goog.ui.RoundedTabRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
