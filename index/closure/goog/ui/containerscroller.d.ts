// Generated Sat May  3 12:14:59 PDT 2014

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
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/ui/registry.d.ts" />
/// <reference path="../../goog/ui/containerrenderer.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/ui/decorate.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../goog/ui/control.d.ts" />
/// <reference path="../../goog/ui/container.d.ts" />

declare module goog.ui {

    /**
     * Plug-on scrolling behavior for a container.
     *
     * Use this to style containers, such as pop-up menus, to be scrolling, and
     * automatically keep the highlighted element visible.
     *
     * To use this, first style your container with the desired overflow
     * properties and height to achieve vertical scrolling.  Also, the scrolling
     * div should have no vertical padding, for two reasons: it is difficult to
     * compensate for, and is generally not what you want due to the strange way
     * CSS handles padding on the scrolling dimension.
     *
     * The container must already be rendered before this may be constructed.
     *
     * @param {!goog.ui.Container} container The container to attach behavior to.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class ContainerScroller extends goog.Disposable {
        /**
         * Plug-on scrolling behavior for a container.
         *
         * Use this to style containers, such as pop-up menus, to be scrolling, and
         * automatically keep the highlighted element visible.
         *
         * To use this, first style your container with the desired overflow
         * properties and height to achieve vertical scrolling.  Also, the scrolling
         * div should have no vertical padding, for two reasons: it is difficult to
         * compensate for, and is generally not what you want due to the strange way
         * CSS handles padding on the scrolling dimension.
         *
         * The container must already be rendered before this may be constructed.
         *
         * @param {!goog.ui.Container} container The container to attach behavior to.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(container: goog.ui.Container);
    }
}

