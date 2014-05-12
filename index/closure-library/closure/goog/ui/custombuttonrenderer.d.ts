/// <reference path="../../../globals.d.ts" />
/// <reference path="./buttonrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./button.d.ts" />

declare module goog.ui {

    class CustomButtonRenderer extends CustomButtonRenderer.__Class { }
    module CustomButtonRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ButtonRenderer.__Class {
    
            /**
             * Custom renderer for {@link goog.ui.Button}s.  Custom buttons can contain
             * almost arbitrary HTML content, will flow like inline elements, but can be
             * styled like block-level elements.
             *
             * @constructor
             * @extends {goog.ui.ButtonRenderer}
             */
            constructor();
    
            /**
             * Takes a text caption or existing DOM structure, and returns the content
             * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
             *  <div class="goog-inline-block goog-custom-button-outer-box">
             *    <div class="goog-inline-block goog-custom-button-inner-box">
             *      Contents...
             *    </div>
             *  </div>
             * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
             * by subclasses.
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
             *     in a box.
             * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
             * @return {Element} Pseudo-rounded-corner box containing the content.
             */
            createButton(content: string, dom: goog.dom.DomHelper): Element;
            /**
             * Takes a text caption or existing DOM structure, and returns the content
             * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
             *  <div class="goog-inline-block goog-custom-button-outer-box">
             *    <div class="goog-inline-block goog-custom-button-inner-box">
             *      Contents...
             *    </div>
             *  </div>
             * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
             * by subclasses.
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
             *     in a box.
             * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
             * @return {Element} Pseudo-rounded-corner box containing the content.
             */
            createButton(content: Node, dom: goog.dom.DomHelper): Element;
            /**
             * Takes a text caption or existing DOM structure, and returns the content
             * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
             *  <div class="goog-inline-block goog-custom-button-outer-box">
             *    <div class="goog-inline-block goog-custom-button-inner-box">
             *      Contents...
             *    </div>
             *  </div>
             * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
             * by subclasses.
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
             *     in a box.
             * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
             * @return {Element} Pseudo-rounded-corner box containing the content.
             */
            createButton(content: Node[], dom: goog.dom.DomHelper): Element;
            /**
             * Takes a text caption or existing DOM structure, and returns the content
             * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
             *  <div class="goog-inline-block goog-custom-button-outer-box">
             *    <div class="goog-inline-block goog-custom-button-inner-box">
             *      Contents...
             *    </div>
             *  </div>
             * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
             * by subclasses.
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
             *     in a box.
             * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
             * @return {Element} Pseudo-rounded-corner box containing the content.
             */
            createButton(content: NodeList, dom: goog.dom.DomHelper): Element;
    
            /**
             * Check if the button's element has a box structure.
             * @param {goog.ui.Button} button Button instance whose structure is being
             *     checked.
             * @param {Element} element Element of the button.
             * @return {boolean} Whether the element has a box structure.
             * @protected
             */
            hasBoxStructure(button: goog.ui.Button, element: Element): boolean;
        }
    }
}

declare module goog.ui.CustomButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
