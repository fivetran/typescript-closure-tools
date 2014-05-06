/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../closure/goog/ui/containerrenderer.d.ts" />
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
/// <reference path="../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/control.d.ts" />
/// <reference path="../../../closure/goog/ui/menuseparatorrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/separator.d.ts" />
/// <reference path="../../../closure/goog/ui/menurenderer.d.ts" />
/// <reference path="../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../closure/goog/positioning/positioning.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/useragent/product.d.ts" />
/// <reference path="../../../closure/goog/ui/menuseparator.d.ts" />
/// <reference path="../../../closure/goog/ui/menuitemrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menuitem.d.ts" />
/// <reference path="../../../closure/goog/ui/container.d.ts" />
/// <reference path="../../../closure/goog/ui/menuheaderrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menuheader.d.ts" />
/// <reference path="../../../closure/goog/ui/menu.d.ts" />
/// <reference path="../../../closure/goog/positioning/abstractposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/menuanchoredposition.d.ts" />
/// <reference path="../../../closure/goog/ui/buttonside.d.ts" />
/// <reference path="../../../closure/goog/ui/buttonrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/nativebuttonrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/button.d.ts" />
/// <reference path="../../../closure/goog/ui/cssnames.d.ts" />
/// <reference path="../../../closure/goog/ui/custombuttonrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menubuttonrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menubutton.d.ts" />

declare module goog.ui {

    /**
     * A selection menu button control.  Extends {@link goog.ui.MenuButton}.
     * Menu contains 'select all' and 'select none' MenuItems for selecting all and
     * no items by default. Other MenuItems can be added by user.
     *
     * The checkbox content fires the action events associated with the 'select all'
     * and 'select none' menu items.
     *
     * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
     *     decorate the menu button; defaults to {@link goog.ui.MenuButtonRenderer}.
     * @param {goog.ui.MenuItemRenderer=} opt_itemRenderer Optional menu item
     *     renderer.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.MenuButton}
     */
    class SelectionMenuButton extends goog.ui.MenuButton {
        /**
         * A selection menu button control.  Extends {@link goog.ui.MenuButton}.
         * Menu contains 'select all' and 'select none' MenuItems for selecting all and
         * no items by default. Other MenuItems can be added by user.
         *
         * The checkbox content fires the action events associated with the 'select all'
         * and 'select none' menu items.
         *
         * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
         *     decorate the menu button; defaults to {@link goog.ui.MenuButtonRenderer}.
         * @param {goog.ui.MenuItemRenderer=} opt_itemRenderer Optional menu item
         *     renderer.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.MenuButton}
         */
        constructor(opt_renderer?: goog.ui.ButtonRenderer, opt_itemRenderer?: goog.ui.MenuItemRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Select button state
         * @type {goog.ui.SelectionMenuButton.SelectionState}
         * @protected
         */
        selectionState: goog.ui.SelectionMenuButton.SelectionState;
    
        /**
         * Enables the embedded checkbox.
         * @param {boolean} enable Whether to enable or disable the checkbox.
         * @protected
         */
        setCheckboxEnabled(enable: boolean): void;
    
        /**
         * Gets the checkbox element. Needed because if decorating html, getContent()
         * may include and comment/text elements in addition to the input element.
         * @return {Element} Checkbox.
         * @protected
         */
        getCheckboxElement(): Element;
    
        /**
         * Checkbox click handler.
         * @param {goog.events.BrowserEvent} e Checkbox click event.
         * @protected
         */
        handleCheckboxClick(e: goog.events.BrowserEvent): void;
    
        /**
         * Set up events related to the checkbox.
         * @protected
         */
        addCheckboxEvent(): void;
    
        /**
         * Creates and adds the checkbox to the button.
         * @protected
         */
        createCheckbox(): void;
    
        /**
         * Set selection state and update checkbox.
         * @param {goog.ui.SelectionMenuButton.SelectionState} state Selection state.
         */
        setSelectionState(state: goog.ui.SelectionMenuButton.SelectionState): void;
    
        /**
    * Get selection state.
    * @return {goog.ui.SelectionMenuButton.SelectionState} Selection state.
    */
        getSelectionState(): goog.ui.SelectionMenuButton.SelectionState;
    }
}

declare module goog.ui.SelectionMenuButton {

    /**
     * Constants for menu action types.
     * @enum {number}
     */
    enum SelectionState { ALL, SOME, NONE } 
}

