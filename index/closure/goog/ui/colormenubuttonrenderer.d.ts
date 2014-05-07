/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/color/names.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/color/color.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/buttonside.d.ts" />
/// <reference path="../../../closure/goog/ui/buttonrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/cssnames.d.ts" />
/// <reference path="../../../closure/goog/ui/custombuttonrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../closure/goog/ui/containerrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/control.d.ts" />
/// <reference path="../../../closure/goog/ui/menuseparatorrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/separator.d.ts" />
/// <reference path="../../../closure/goog/ui/menurenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menuseparator.d.ts" />
/// <reference path="../../../closure/goog/ui/menuitemrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menuitem.d.ts" />
/// <reference path="../../../closure/goog/ui/container.d.ts" />
/// <reference path="../../../closure/goog/ui/menuheaderrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menuheader.d.ts" />
/// <reference path="../../../closure/goog/ui/menu.d.ts" />
/// <reference path="../../../closure/goog/ui/menubuttonrenderer.d.ts" />

declare module goog.ui {

    /**
     * Renderer for {@link goog.ui.ColorMenuButton}s.
     * @constructor
     * @extends {goog.ui.MenuButtonRenderer}
     */
    class ColorMenuButtonRenderer extends goog.ui._MenuButtonRenderer {
        /**
         * Renderer for {@link goog.ui.ColorMenuButton}s.
         * @constructor
         * @extends {goog.ui.MenuButtonRenderer}
         */
        constructor();
    }
}

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

