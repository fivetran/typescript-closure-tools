/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../closure/goog/positioning/positioning.d.ts" />
/// <reference path="../../../closure/goog/positioning/abstractposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/menuanchoredposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/clientposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/viewportclientposition.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../closure/goog/ui/popupbase.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../closure/goog/ui/containerrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/controlcontent.d.ts" />
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

declare module goog.ui {

    /**
     * A basic menu class.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render or
     *     decorate the container; defaults to {@link goog.ui.MenuRenderer}.
     * @extends {goog.ui.Menu}
     * @constructor
     */
    class PopupMenu extends goog.ui._Menu {
        /**
         * A basic menu class.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render or
         *     decorate the container; defaults to {@link goog.ui.MenuRenderer}.
         * @extends {goog.ui.Menu}
         * @constructor
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuRenderer);
    
        /**
         * Attaches the menu to a new popup position and anchor element.  A menu can
         * only be attached to an element once, since attaching the same menu for
         * multiple positions doesn't make sense.
         *
         * @param {Element} element Element whose click event should trigger the menu.
         * @param {goog.positioning.Corner=} opt_targetCorner Corner of the target that
         *     the menu should be anchored to.
         * @param {goog.positioning.Corner=} opt_menuCorner Corner of the menu that
         *     should be anchored.
         * @param {boolean=} opt_contextMenu Whether the menu should show on
         *     {@link goog.events.EventType.CONTEXTMENU} events, false if it should
         *     show on {@link goog.events.EventType.MOUSEDOWN} events. Default is
         *     MOUSEDOWN.
         * @param {goog.math.Box=} opt_margin Margin for the popup used in positioning
         *     algorithms.
         */
        attach(element: Element, opt_targetCorner?: goog.positioning.Corner, opt_menuCorner?: goog.positioning.Corner, opt_contextMenu?: boolean, opt_margin?: goog.math.Box): void;
    
        /**
         * Creates an object describing how the popup menu should be attached to the
         * anchoring element based on the given parameters. The created object is
         * stored, keyed by {@code element} and is retrievable later by invoking
         * {@link #getAttachTarget(element)} at a later point.
         *
         * Subclass may add more properties to the returned object, as needed.
         *
         * @param {Element} element Element whose click event should trigger the menu.
         * @param {goog.positioning.Corner=} opt_targetCorner Corner of the target that
         *     the menu should be anchored to.
         * @param {goog.positioning.Corner=} opt_menuCorner Corner of the menu that
         *     should be anchored.
         * @param {boolean=} opt_contextMenu Whether the menu should show on
         *     {@link goog.events.EventType.CONTEXTMENU} events, false if it should
         *     show on {@link goog.events.EventType.MOUSEDOWN} events. Default is
         *     MOUSEDOWN.
         * @param {goog.math.Box=} opt_margin Margin for the popup used in positioning
         *     algorithms.
         *
         * @return {Object} An object that describes how the popup menu should be
         *     attached to the anchoring element.
         *
         * @protected
         */
        createAttachTarget(element: Element, opt_targetCorner?: goog.positioning.Corner, opt_menuCorner?: goog.positioning.Corner, opt_contextMenu?: boolean, opt_margin?: goog.math.Box): Object;
    
        /**
         * Returns the object describing how the popup menu should be attach to given
         * element or {@code null}. The object is created and the association is formed
         * when {@link #attach} is invoked.
         *
         * @param {Element} element DOM element.
         * @return {Object} The object created when {@link attach} is invoked on
         *     {@code element}. Returns {@code null} if the element does not trigger
         *     the menu (i.e. {@link attach} has never been invoked on
         *     {@code element}).
         * @protected
         */
        getAttachTarget(element: Element): Object;
    
        /**
         * @param {Element} element Any DOM element.
         * @return {boolean} Whether clicking on the given element will trigger the
         *     menu.
         *
         * @protected
         */
        isAttachTarget(element: Element): boolean;
    
        /**
         * @return {Element} The current element where the popup is anchored, if it's
         *     visible.
         */
        getAttachedElement(): Element;
    
        /**
         * Detaches all listeners
         */
        detachAll(): void;
    
        /**
         * Detaches a menu from a given element.
         * @param {Element} element Element whose click event should trigger the menu.
         */
        detach(element: Element): void;
    
        /**
         * Sets whether the menu should toggle if it is already open.  For context
         * menus this should be false, for toolbar menus it makes more sense to be true.
         * @param {boolean} toggle The new toggle mode.
         */
        setToggleMode(toggle: boolean): void;
    
        /**
         * Gets whether the menu is in toggle mode
         * @return {boolean} toggle.
         */
        getToggleMode(): boolean;
    
        /**
         * Show the menu using given positioning object.
         * @param {goog.positioning.AbstractPosition} position The positioning instance.
         * @param {goog.positioning.Corner=} opt_menuCorner The corner of the menu to be
         *     positioned.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {Element=} opt_anchor The element which acts as visual anchor for this
         *     menu.
         */
        showWithPosition(position: goog.positioning.AbstractPosition, opt_menuCorner?: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_anchor?: Element): void;
    
        /**
         * Show the menu at a given attached target.
         * @param {Object} target Popup target.
         * @param {number} x The client-X associated with the show event.
         * @param {number} y The client-Y associated with the show event.
         * @protected
         */
        showMenu(target: Object, x: number, y: number): void;
    
        /**
         * Shows the menu immediately at the given client coordinates.
         * @param {number} x The client-X associated with the show event.
         * @param {number} y The client-Y associated with the show event.
         * @param {goog.positioning.Corner=} opt_menuCorner Corner of the menu that
         *     should be anchored.
         */
        showAt(x: number, y: number, opt_menuCorner?: goog.positioning.Corner): void;
    
        /**
         * Shows the menu immediately attached to the given element
         * @param {Element} element The element to show at.
         * @param {goog.positioning.Corner} targetCorner The corner of the target to
         *     anchor to.
         * @param {goog.positioning.Corner=} opt_menuCorner Corner of the menu that
         *     should be anchored.
         */
        showAtElement(element: Element, targetCorner: goog.positioning.Corner, opt_menuCorner?: goog.positioning.Corner): void;
    
        /**
         * Hides the menu.
         */
        hide(): void;
    
        /**
         * Returns whether the menu is currently visible or was visible within about
         * 150 ms ago.  This stops the menu toggling back on if the toggleMode == false.
         * @return {boolean} Whether the popup is currently visible or was visible
         *     within about 150 ms ago.
         */
        isOrWasRecentlyVisible(): boolean;
    
        /**
         * Used to stop the menu toggling back on if the toggleMode == false.
         * @return {boolean} Whether the menu was recently hidden.
         * @protected
         */
        wasRecentlyHidden(): boolean;
    
        /**
         * Handles click events that propagate to the document.
         * @param {goog.events.BrowserEvent} e The browser event.
         * @protected
         */
        onDocClick(e: goog.events.BrowserEvent): void;
    }
}

