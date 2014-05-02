// Generated Fri May  2 10:40:28 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/ui/registry.d.ts" />
/// <reference path="../../goog/ui/containerrenderer.d.ts" />
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
/// <reference path="../../goog/ui/decorate.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/ui/control.d.ts" />
/// <reference path="../../goog/ui/menuseparatorrenderer.d.ts" />
/// <reference path="../../goog/ui/separator.d.ts" />
/// <reference path="../../goog/ui/menurenderer.d.ts" />
/// <reference path="../../goog/style/bidi.d.ts" />
/// <reference path="../../goog/positioning/positioning.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/useragent/product.d.ts" />
/// <reference path="../../goog/ui/menuseparator.d.ts" />
/// <reference path="../../goog/ui/menuitemrenderer.d.ts" />
/// <reference path="../../goog/ui/menuitem.d.ts" />
/// <reference path="../../goog/ui/container.d.ts" />
/// <reference path="../../goog/ui/menuheaderrenderer.d.ts" />
/// <reference path="../../goog/ui/menuheader.d.ts" />
/// <reference path="../../goog/ui/menu.d.ts" />
/// <reference path="../../goog/positioning/abstractposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../goog/positioning/menuanchoredposition.d.ts" />
/// <reference path="../../goog/ui/buttonside.d.ts" />
/// <reference path="../../goog/ui/buttonrenderer.d.ts" />
/// <reference path="../../goog/ui/nativebuttonrenderer.d.ts" />
/// <reference path="../../goog/ui/button.d.ts" />
/// <reference path="../../goog/ui/cssnames.d.ts" />
/// <reference path="../../goog/ui/custombuttonrenderer.d.ts" />
/// <reference path="../../goog/ui/menubuttonrenderer.d.ts" />
/// <reference path="../../goog/ui/menubutton.d.ts" />

declare module goog.ui.SelectionMenuButton {

    /**
     * Constants for menu action types.
     * @enum {number}
     */
    enum SelectionState { ALL, SOME, NONE } 
}

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

