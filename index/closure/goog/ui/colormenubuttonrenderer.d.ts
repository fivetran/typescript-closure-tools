// Generated Thu May  1 17:22:37 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/color/names.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/color/color.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
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
/// <reference path="../../goog/ui/custombuttonrenderer.d.ts" />
/// <reference path="../../goog/ui/registry.d.ts" />
/// <reference path="../../goog/ui/containerrenderer.d.ts" />
/// <reference path="../../goog/ui/decorate.d.ts" />
/// <reference path="../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/ui/control.d.ts" />
/// <reference path="../../goog/ui/menuseparatorrenderer.d.ts" />
/// <reference path="../../goog/ui/separator.d.ts" />
/// <reference path="../../goog/ui/menurenderer.d.ts" />
/// <reference path="../../goog/ui/menuseparator.d.ts" />
/// <reference path="../../goog/ui/menuitemrenderer.d.ts" />
/// <reference path="../../goog/ui/menuitem.d.ts" />
/// <reference path="../../goog/ui/container.d.ts" />
/// <reference path="../../goog/ui/menuheaderrenderer.d.ts" />
/// <reference path="../../goog/ui/menuheader.d.ts" />
/// <reference path="../../goog/ui/menu.d.ts" />
/// <reference path="../../goog/ui/menubuttonrenderer.d.ts" />

declare module goog.ui.ColorMenuButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Wrap a caption in a div with the color-menu-button-indicator CSS class.
     * @param {goog.ui.ControlContent} content Text caption or DOM structure.
     * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
     * @return {Element} Caption element.
     */
    function wrapCaption(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;

    /**
     * Takes a control's content element and a value object (which is assumed
     * to be a color), and updates its DOM to reflect the new color.
     * @param {Element} caption A content element of a control.
     * @param {*} value New value; assumed to be a color spec string.
     */
    function setCaptionValue(caption: Element, value: any): void;
}

declare module goog.ui {

    /**
     * Renderer for {@link goog.ui.ColorMenuButton}s.
     * @constructor
     * @extends {goog.ui.MenuButtonRenderer}
     */
    class ColorMenuButtonRenderer extends goog.ui.MenuButtonRenderer {
        /**
         * Renderer for {@link goog.ui.ColorMenuButton}s.
         * @constructor
         * @extends {goog.ui.MenuButtonRenderer}
         */
        constructor();
    }
}

