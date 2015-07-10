/// <reference path="../../../globals.d.ts" />
/// <reference path="./flatbuttonrenderer.d.ts" />
/// <reference path="./controlcontent.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class FlatMenuButtonRenderer extends FlatMenuButtonRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FlatMenuButtonRenderer__Class extends goog.ui.FlatButtonRenderer__Class  { 
    
            /**
             * Flat Menu Button renderer. Creates a simpler version of
             * {@link goog.ui.MenuButton} that doesn't look like a button and
             * doesn't have rounded corners. Uses just a <div> and looks more like
             * a traditional <select> element.
             * @constructor
             * @extends {goog.ui.FlatButtonRenderer}
             */
            constructor();
    
            /**
             * Takes a text caption or existing DOM structure, and returns it wrapped in
             * an appropriately-styled DIV.  Creates the following DOM structure:
             *    <div class="goog-inline-block goog-flat-menu-button-caption">
             *      Contents...
             *    </div>
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
             *     in a box.
             * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
             * @return {Element} Caption element.
             */
            createCaption(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
            /**
             * Returns an appropriately-styled DIV containing a dropdown arrow element.
             * Creates the following DOM structure:
             *    <div class="goog-inline-block goog-flat-menu-button-dropdown">
             *      &nbsp;
             *    </div>
             * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
             * @return {!Element} Dropdown element.
             */
            createDropdown(dom: goog.dom.DomHelper): Element;
    } 
    
}

declare module goog.ui.FlatMenuButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
