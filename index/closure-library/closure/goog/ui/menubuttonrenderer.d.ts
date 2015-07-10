/// <reference path="../../../globals.d.ts" />
/// <reference path="./custombuttonrenderer.d.ts" />
/// <reference path="./controlcontent.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class MenuButtonRenderer extends MenuButtonRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MenuButtonRenderer__Class extends goog.ui.CustomButtonRenderer__Class  { 
    
            /**
             * Renderer for {@link goog.ui.MenuButton}s.  This implementation overrides
             * {@link goog.ui.CustomButtonRenderer#createButton} to create a separate
             * caption and dropdown element.
             * @constructor
             * @extends {goog.ui.CustomButtonRenderer}
             */
            constructor();
    
            /**
             * Takes a text caption or existing DOM structure, and returns it wrapped in
             * an appropriately-styled DIV.  Creates the following DOM structure:
             *    <div class="goog-inline-block goog-menu-button-caption">
             *      Contents...
             *    </div>
             * @param {goog.ui.ControlContent} content Text caption or DOM structure
             *     to wrap in a box.
             * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
             * @return {Element} Caption element.
             */
            createCaption(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
            /**
             * Returns an appropriately-styled DIV containing a dropdown arrow element.
             * Creates the following DOM structure:
             *    <div class="goog-inline-block goog-menu-button-dropdown">
             *      &nbsp;
             *    </div>
             * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
             * @return {Element} Dropdown element.
             */
            createDropdown(dom: goog.dom.DomHelper): Element;
    } 
    
}

declare module goog.ui.MenuButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Takes a text caption or existing DOM structure, and returns it wrapped in
     * an appropriately-styled DIV.  Creates the following DOM structure:
     *    <div class="goog-inline-block goog-menu-button-caption">
     *      Contents...
     *    </div>
     * @param {goog.ui.ControlContent} content Text caption or DOM structure
     *     to wrap in a box.
     * @param {string} cssClass The CSS class for the renderer.
     * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
     * @return {!Element} Caption element.
     */
    function wrapCaption(content: goog.ui.ControlContent, cssClass: string, dom: goog.dom.DomHelper): Element;
}
