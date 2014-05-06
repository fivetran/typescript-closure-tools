/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
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
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />

declare module goog.ui {

    /**
     * Creates a ScrollFloater; see file overview for details.
     *
     * @param {Element=} opt_parentElement Where to attach the element when it's
     *     floating.  Default is the document body.  If the floating element
     *     contains form inputs, it will be necessary to attach it to the
     *     corresponding form element, or to an element in the DOM subtree under
     *     the form element.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class ScrollFloater extends goog.ui._Component {
        /**
         * Creates a ScrollFloater; see file overview for details.
         *
         * @param {Element=} opt_parentElement Where to attach the element when it's
         *     floating.  Default is the document body.  If the floating element
         *     contains form inputs, it will be necessary to attach it to the
         *     corresponding form element, or to an element in the DOM subtree under
         *     the form element.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_parentElement?: Element, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Forces the component to update the cached element positions and sizes and
         * to re-evaluate whether the the component should be docked, floated or
         * pinned.
         */
        update(): void;
    
        /**
         * Sets whether the element should be floated if it scrolls out of view.
         * @param {boolean} enable Whether floating is enabled for this element.
         */
        setScrollingEnabled(enable: boolean): void;
    
        /**
         * @return {boolean} Whether the component is enabled for scroll-floating.
         */
        isScrollingEnabled(): boolean;
    
        /**
         * @return {boolean} Whether the component is currently scroll-floating.
         */
        isFloating(): boolean;
    
        /**
         * @return {boolean} Whether the component is currently pinned to the bottom
         *     of the container.
         */
        isPinned(): boolean;
    
        /**
         * @param {number} offset A vertical offset from the top of the viewport, from
         *    which to start floating the element. Default is 0. This is useful in cases
         *    when there are 'position:fixed' elements covering up part of the viewport.
         */
        setViewportTopOffset(offset: number): void;
    
        /**
         * @param {Element} container An element used to define the boundaries within
         *     which the floater can be positioned. If not specified, scrolling the page
         *     down far enough may result in the floated element extending past the
         *     containing element as it is being scrolled out of the viewport. In some
         *     cases, such as a list with a sticky header, this may be undesirable. If
         *     the container element is specified and the floated element extends past
         *     the bottom of the container, the element will be pinned to the bottom of
         *     the container.
         */
        setContainerElement(container: Element): void;
    }
}

declare module goog.ui.ScrollFloater {

    /**
     * Events dispatched by this component.
     * @enum {string}
     */
    enum EventType { FLOAT, DOCK, PIN } 
}

