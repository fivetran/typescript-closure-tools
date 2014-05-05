// Generated Sun May  4 18:15:47 PDT 2014

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
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../goog/ui/menuitemrenderer.d.ts" />
/// <reference path="../../goog/ui/decorate.d.ts" />
/// <reference path="../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/ui/control.d.ts" />
/// <reference path="../../goog/ui/menuitem.d.ts" />

declare module goog.ui {

    /**
     * Class representing a menu option.  This is just a convenience class that
     * extends {@link goog.ui.MenuItem} by making it selectable.
     *
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {*=} opt_model Data/model associated with the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @constructor
     * @extends {goog.ui.MenuItem}
     */
    class Option extends goog.ui.MenuItem {
        /**
         * Class representing a menu option.  This is just a convenience class that
         * extends {@link goog.ui.MenuItem} by making it selectable.
         *
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to
         *     display as the content of the item (use to add icons or styling to
         *     menus).
         * @param {*=} opt_model Data/model associated with the menu item.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
         *     document interactions.
         * @constructor
         * @extends {goog.ui.MenuItem}
         */
        constructor(content: goog.ui.ControlContent, opt_model?: any, opt_domHelper?: goog.dom.DomHelper);
    }
}

