/// <reference path="../../../../../globals.d.ts" />
/// <reference path="./buttonrenderer.d.ts" />
/// <reference path="../../controlcontent.d.ts" />
/// <reference path="../../../dom/dom.d.ts" />

declare module goog.ui.style.app {

    class MenuButtonRenderer extends MenuButtonRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MenuButtonRenderer__Class extends goog.ui.style.app.ButtonRenderer__Class  { 
    
            /**
             * Renderer for {@link goog.ui.style.app.MenuButton}s.  This implementation
             * overrides {@link goog.ui.style.app.ButtonRenderer#createButton} to insert a
             * dropdown element into the content element after the specified content.
             * @constructor
             * @extends {goog.ui.style.app.ButtonRenderer}
             * @final
             */
            constructor();
    
            /**
             * Inserts dropdown element as last child of existing content.
             * @param {goog.ui.ControlContent} content Text caption or DOM structure.
             * @param {goog.dom.DomHelper} dom DOM helper, used for document ineraction.
             * @return {Array.<Node>} DOM structure to be set as the button's content.
             */
            createContentWithDropdown(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Node[];
    
            /**
             * Returns an appropriately-styled DIV containing a dropdown arrow.
             * Creates the following DOM structure:
             *    <div class="goog-menu-button-dropdown"> </div>
             * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
             * @return {Element} Dropdown element.
             */
            createDropdown(dom: goog.dom.DomHelper): Element;
    } 
    
}

declare module goog.ui.style.app.MenuButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Array of arrays of CSS classes that we want composite classes added and
     * removed for in IE6 and lower as a workaround for lack of multi-class CSS
     * selector support.
     * @type {Array.<Array.<string>>}
     */
    var IE6_CLASS_COMBINATIONS: string[][];
}
