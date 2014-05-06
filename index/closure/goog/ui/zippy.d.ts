/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
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
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />

declare module goog.ui {

    /**
     * Zippy widget. Expandable/collapsible container, clicking the header toggles
     * the visibility of the content.
     *
     * @extends {goog.events.EventTarget}
     * @param {Element|string|null} header Header element, either element
     *     reference, string id or null if no header exists.
     * @param {Element|string|function():Element=} opt_content Content element
     *     (if any), either element reference or string id.  If skipped, the caller
     *     should handle the TOGGLE event in its own way. If a function is passed,
     *     then if will be called to create the content element the first time the
     *     zippy is expanded.
     * @param {boolean=} opt_expanded Initial expanded/visibility state. Defaults to
     *     false.
     * @param {Element|string=} opt_expandedHeader Element to use as the header when
     *     the zippy is expanded.
     * @param {goog.dom.DomHelper=} opt_domHelper An optional DOM helper.
     * @constructor
     */
    class Zippy extends goog.events.EventTarget {
        /**
         * Zippy widget. Expandable/collapsible container, clicking the header toggles
         * the visibility of the content.
         *
         * @extends {goog.events.EventTarget}
         * @param {Element|string|null} header Header element, either element
         *     reference, string id or null if no header exists.
         * @param {Element|string|function():Element=} opt_content Content element
         *     (if any), either element reference or string id.  If skipped, the caller
         *     should handle the TOGGLE event in its own way. If a function is passed,
         *     then if will be called to create the content element the first time the
         *     zippy is expanded.
         * @param {boolean=} opt_expanded Initial expanded/visibility state. Defaults to
         *     false.
         * @param {Element|string=} opt_expandedHeader Element to use as the header when
         *     the zippy is expanded.
         * @param {goog.dom.DomHelper=} opt_domHelper An optional DOM helper.
         * @constructor
         */
        constructor(header: any /*Element|string|any (null)*/, opt_content?: any /*Element|string|() => Element*/, opt_expanded?: boolean, opt_expandedHeader?: any /*Element|string*/, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {goog.a11y.aria.Role} The ARIA role to be applied to Zippy element.
         */
        getAriaRole(): goog.a11y.aria.Role;
    
        /**
         * @return {Element} The content element.
         */
        getContentElement(): Element;
    
        /**
         * @return {Element} The visible header element.
         */
        getVisibleHeaderElement(): Element;
    
        /**
         * Expands content pane.
         */
        expand(): void;
    
        /**
         * Collapses content pane.
         */
        collapse(): void;
    
        /**
         * Toggles expanded state.
         */
        toggle(): void;
    
        /**
         * Sets expanded state.
         *
         * @param {boolean} expanded Expanded/visibility state.
         */
        setExpanded(expanded: boolean): void;
    
        /**
         * Sets expanded internal state.
         *
         * @param {boolean} expanded Expanded/visibility state.
         * @protected
         */
        setExpandedInternal(expanded: boolean): void;
    
        /**
         * @return {boolean} Whether the zippy is expanded.
         */
        isExpanded(): boolean;
    
        /**
         * Updates the header element's className and ARIA (accessibility) EXPANDED
         * state.
         *
         * @param {boolean} expanded Expanded/visibility state.
         * @protected
         */
        updateHeaderClassName(expanded: boolean): void;
    
        /**
         * @return {boolean} Whether the Zippy handles its own key events.
         */
        isHandleKeyEvents(): boolean;
    
        /**
         * @return {boolean} Whether the Zippy handles its own mouse events.
         */
        isHandleMouseEvents(): boolean;
    
        /**
         * Sets whether the Zippy handles it's own keyboard events.
         * @param {boolean} enable Whether the Zippy handles keyboard events.
         */
        setHandleKeyboardEvents(enable: boolean): void;
    
        /**
         * Sets whether the Zippy handles it's own mouse events.
         * @param {boolean} enable Whether the Zippy handles mouse events.
         */
        setHandleMouseEvents(enable: boolean): void;
    }

    /**
     * Object representing a zippy toggle event.
     *
     * @param {string} type Event type.
     * @param {goog.ui.Zippy} target Zippy widget initiating event.
     * @param {boolean} expanded Expanded state.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class ZippyEvent extends goog.events.Event {
        /**
         * Object representing a zippy toggle event.
         *
         * @param {string} type Event type.
         * @param {goog.ui.Zippy} target Zippy widget initiating event.
         * @param {boolean} expanded Expanded state.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(type: string, target: goog.ui.Zippy, expanded: boolean);
    }
}

declare module goog.ui.Zippy {

    /**
     * Constants for event names
     *
     * @type {Object}
     */
    var Events: Object;
}

