/// <reference path="../../../globals.d.ts" />
/// <reference path="./container.d.ts" />
/// <reference path="./tabbarrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./control.d.ts" />
/// <reference path="../events/event.d.ts" />

declare module goog.ui {

    class TabBar extends TabBar.__Class { }
    module TabBar {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Container.__Class {
    
            /**
             * Tab bar UI component.  A tab bar contains tabs, rendered above, below,
             * before, or after tab contents.  Tabs in tab bars dispatch the following
             * events:
             * <ul>
             *   <li>{@link goog.ui.Component.EventType.ACTION} when activated via the
             *       keyboard or the mouse,
             *   <li>{@link goog.ui.Component.EventType.SELECT} when selected, and
             *   <li>{@link goog.ui.Component.EventType.UNSELECT} when deselected.
             * </ul>
             * Clients may listen for all of the above events on the tab bar itself, and
             * refer to the event target to identify the tab that dispatched the event.
             * When an unselected tab is clicked for the first time, it dispatches both a
             * {@code SELECT} event and an {@code ACTION} event; subsequent clicks on an
             * already selected tab only result in {@code ACTION} events.
             *
             * @param {goog.ui.TabBar.Location=} opt_location Tab bar location; defaults to
             *     {@link goog.ui.TabBar.Location.TOP}.
             * @param {goog.ui.TabBarRenderer=} opt_renderer Renderer used to render or
             *     decorate the container; defaults to {@link goog.ui.TabBarRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for document
             *     interaction.
             * @constructor
             * @extends {goog.ui.Container}
             */
            constructor(opt_location?: goog.ui.TabBar.Location, opt_renderer?: goog.ui.TabBarRenderer, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * @return {goog.ui.TabBar.Location} Tab bar location relative to tab contents.
             */
            getLocation(): goog.ui.TabBar.Location;
    
            /**
             * Sets the location of the tab bar relative to tab contents.
             * @param {goog.ui.TabBar.Location} location Tab bar location relative to tab
             *     contents.
             * @throws {Error} If the tab bar has already been rendered.
             */
            setLocation(location: goog.ui.TabBar.Location): void;
    
            /**
             * @return {boolean} Whether keyboard navigation should change the selected tab,
             *     or just move the highlight.
             */
            isAutoSelectTabs(): boolean;
    
            /**
             * Enables or disables auto-selecting tabs using the keyboard.  If auto-select
             * is enabled, keyboard navigation switches tabs immediately, otherwise it just
             * moves the highlight.
             * @param {boolean} enable Whether keyboard navigation should change the
             *     selected tab, or just move the highlight.
             */
            setAutoSelectTabs(enable: boolean): void;
    
            /**
             * @return {goog.ui.Control?} The currently selected tab (null if none).
             */
            getSelectedTab(): goog.ui.Control;
    
            /**
             * Selects the given tab.
             * @param {goog.ui.Control?} tab Tab to select (null to select none).
             */
            setSelectedTab(tab: goog.ui.Control): void;
    
            /**
             * @return {number} Index of the currently selected tab (-1 if none).
             */
            getSelectedTabIndex(): number;
    
            /**
             * Selects the tab at the given index.
             * @param {number} index Index of the tab to select (-1 to select none).
             */
            setSelectedTabIndex(index: number): void;
    
            /**
             * If the specified tab is the currently selected tab, deselects it, and
             * selects the closest selectable tab in the tab bar (first looking before,
             * then after the deselected tab).  Does nothing if the argument is not the
             * currently selected tab.  Called internally when a tab is removed, hidden,
             * or disabled, to ensure that another tab is selected instead.
             * @param {goog.ui.Control?} tab Tab to deselect (if any).
             * @protected
             */
            deselectIfSelected(tab: goog.ui.Control): void;
    
            /**
             * Returns true if the tab is selectable, false otherwise.  Only visible and
             * enabled tabs are selectable.
             * @param {goog.ui.Control} tab Tab to check.
             * @return {boolean} Whether the tab is selectable.
             * @protected
             */
            isSelectableTab(tab: goog.ui.Control): boolean;
    
            /**
             * Handles {@code SELECT} events dispatched by tabs as they become selected.
             * @param {goog.events.Event} e Select event to handle.
             * @protected
             */
            handleTabSelect(e: goog.events.Event): void;
    
            /**
             * Handles {@code UNSELECT} events dispatched by tabs as they become deselected.
             * @param {goog.events.Event} e Unselect event to handle.
             * @protected
             */
            handleTabUnselect(e: goog.events.Event): void;
    
            /**
             * Handles {@code DISABLE} events displayed by tabs.
             * @param {goog.events.Event} e Disable event to handle.
             * @protected
             */
            handleTabDisable(e: goog.events.Event): void;
    
            /**
             * Handles {@code HIDE} events displayed by tabs.
             * @param {goog.events.Event} e Hide event to handle.
             * @protected
             */
            handleTabHide(e: goog.events.Event): void;
        }
    }
}

declare module goog.ui.TabBar {

    /**
     * Tab bar location relative to tab contents.
     * @enum {string}
     */
    enum Location { TOP, BOTTOM, START, END } 

    /**
     * Returns the {@link goog.ui.Container.Orientation} that is implied by the
     * given {@link goog.ui.TabBar.Location}.
     * @param {goog.ui.TabBar.Location} location Tab bar location.
     * @return {goog.ui.Container.Orientation} Corresponding orientation.
     */
    function getOrientationFromLocation(location: goog.ui.TabBar.Location): goog.ui.Container.Orientation;
}
