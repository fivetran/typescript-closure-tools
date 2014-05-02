// Generated Fri May  2 15:01:04 PDT 2014

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
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/ui/registry.d.ts" />
/// <reference path="../../goog/ui/decorate.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/ui/control.d.ts" />
/// <reference path="../../goog/ui/tabrenderer.d.ts" />
/// <reference path="../../goog/ui/tab.d.ts" />
/// <reference path="../../goog/ui/containerrenderer.d.ts" />
/// <reference path="../../goog/ui/tabbarrenderer.d.ts" />
/// <reference path="../../goog/ui/container.d.ts" />
/// <reference path="../../goog/ui/tabbar.d.ts" />

declare module goog.ui.RoundedTabRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module goog.ui {

    /**
     * Rounded corner tab renderer for {@link goog.ui.Tab}s.
     * @constructor
     * @extends {goog.ui.TabRenderer}
     * @final
     */
    class RoundedTabRenderer extends goog.ui.TabRenderer {
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
         * @return {Element} Table implementing a rounded corner tab.
         * @protected
         */
        createTab(dom: goog.dom.DomHelper, caption: goog.ui.ControlContent, location: goog.ui.TabBar.Location): Element;
    
        /**
         * Creates a table row implementing the tab caption.
         * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
         * @param {goog.ui.ControlContent} caption Text caption or DOM structure
         *     to display as the tab's caption.
         * @return {Element} Tab caption table row.
         * @protected
         */
        createCaption(dom: goog.dom.DomHelper, caption: goog.ui.ControlContent): Element;
    
        /**
         * Creates a table row implementing a rounded tab edge.
         * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
         * @param {boolean} isTopEdge Whether to create a top or bottom edge.
         * @return {Element} Rounded tab edge table row.
         * @protected
         */
        createEdge(dom: goog.dom.DomHelper, isTopEdge: boolean): Element;
    }
}

