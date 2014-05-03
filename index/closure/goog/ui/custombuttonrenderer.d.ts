// Generated Fri May  2 14:59:15 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../goog/ui/buttonside.d.ts" />
/// <reference path="../../goog/ui/buttonrenderer.d.ts" />
/// <reference path="../../goog/ui/cssnames.d.ts" />

declare module goog.ui.CustomButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module goog.ui {

    /**
     * Custom renderer for {@link goog.ui.Button}s.  Custom buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     *
     * @constructor
     * @extends {goog.ui.ButtonRenderer}
     */
    class GoogCustomButtonRenderer extends goog.ui.GoogButtonRenderer {
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
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
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

    class CustomButtonRenderer extends GoogCustomButtonRenderer { }
}

