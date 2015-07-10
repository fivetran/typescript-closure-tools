/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="../events/event.d.ts" />

declare module goog.ui {

    class TabPane extends TabPane__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class TabPane__Class extends goog.events.EventTarget__Class  { 
    
            /**
             * TabPane widget. All children already inside the tab pane container element
             * will be be converted to tabs. Each tab is represented by a goog.ui.TabPane.
             * TabPage object. Further pages can be constructed either from an existing
             * container or created from scratch.
             *
             * @param {Element} el Container element to create the tab pane out of.
             * @param {goog.ui.TabPane.TabLocation=} opt_tabLocation Location of the tabs
             *     in relation to the content container. Default is top.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @param {boolean=} opt_useMouseDown Whether to use MOUSEDOWN instead of CLICK
             *     for tab changes.
             * @extends {goog.events.EventTarget}
             * @constructor
             * @see ../demos/tabpane.html
             * @deprecated Use goog.ui.TabBar instead.
             */
            constructor(el: Element, opt_tabLocation?: goog.ui.TabPane.TabLocation, opt_domHelper?: goog.dom.DomHelper, opt_useMouseDown?: boolean);
    
            /**
             * DomHelper used to interact with the document, allowing components to be
             * created in a different window.  This property is considered protected;
             * subclasses of Component may refer to it directly.
             * @type {goog.dom.DomHelper}
             * @protected
             * @suppress {underscore|visibility}
             */
            dom_: goog.dom.DomHelper;
    
            /**
             * Adds a page to the tab pane.
             *
             * @param {goog.ui.TabPane.TabPage} page Tab page to add.
             * @param {number=} opt_index Zero based index to insert tab at. Inserted at the
             *                           end if not specified.
             */
            addPage(page: goog.ui.TabPane.TabPage, opt_index?: number): void;
    
            /**
             * Removes the specified page from the tab pane.
             *
             * @param {goog.ui.TabPane.TabPage|number} page Reference to tab page or zero
             *     based index.
             */
            removePage(page: goog.ui.TabPane.TabPage|number): void;
    
            /**
             * Gets the tab page by zero based index.
             *
             * @param {number} index Index of page to return.
             * @return {goog.ui.TabPane.TabPage?} page The tab page.
             */
            getPage(index: number): goog.ui.TabPane.TabPage;
    
            /**
             * Sets the selected tab page by object reference.
             *
             * @param {goog.ui.TabPane.TabPage} page Tab page to select.
             */
            setSelectedPage(page: goog.ui.TabPane.TabPage): void;
    
            /**
             * Sets the selected tab page by zero based index.
             *
             * @param {number} index Index of page to select.
             */
            setSelectedIndex(index: number): void;
    
            /**
             * @return {number} The index for the selected tab page or -1 if no page is
             *     selected.
             */
            getSelectedIndex(): number;
    
            /**
             * @return {goog.ui.TabPane.TabPage?} The selected tab page.
             */
            getSelectedPage(): goog.ui.TabPane.TabPage;
    
            /**
             * @return {Element} The element that contains the tab pages.
             */
            getContentElement(): Element;
    
            /**
             * @return {Element} The main element for the tabpane.
             */
            getElement(): Element;
    } 
    

    class TabPaneEvent extends TabPaneEvent__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class TabPaneEvent__Class extends goog.events.Event__Class  { 
    
            /**
             * Object representing a tab pane page changed event.
             *
             * @param {string} type Event type.
             * @param {goog.ui.TabPane} target Tab widget initiating event.
             * @param {goog.ui.TabPane.TabPage} page Selected page in tab pane.
             * @extends {goog.events.Event}
             * @constructor
             * @final
             */
            constructor(type: string, target: goog.ui.TabPane, page: goog.ui.TabPane.TabPage);
    
            /**
             * The selected page.
             * @type {goog.ui.TabPane.TabPage}
             */
            page: goog.ui.TabPane.TabPage;
    } 
    
}

declare module goog.ui.TabPane {

    class TabPage extends TabPage__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class TabPage__Class  { 
    
            /**
             * Object representing an individual tab pane.
             *
             * @param {Element=} opt_el Container element to create the pane out of.
             * @param {(Element|string)=} opt_title Pane title or element to use as the
             *     title. If not specified the first element in the container is used as
             *     the title.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper
             * The first parameter can be omitted.
             * @constructor
             */
            constructor(opt_el?: Element, opt_title?: Element|string, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * DomHelper used to interact with the document, allowing components to be
             * created in a different window.  This property is considered protected;
             * subclasses of Component may refer to it directly.
             * @type {goog.dom.DomHelper}
             * @protected
             * @suppress {underscore|visibility}
             */
            dom_: goog.dom.DomHelper;
    
            /**
             * @return {string} The title for tab page.
             */
            getTitle(): string;
    
            /**
             * Sets title for tab page.
             *
             * @param {string} title Title for tab page.
             */
            setTitle(title: string): void;
    
            /**
             * @return {Element} The title element.
             */
            getTitleElement(): Element;
    
            /**
             * @return {Element} The content element.
             */
            getContentElement(): Element;
    
            /**
             * @return {?number} The index of page in tab pane.
             */
            getIndex(): number;
    
            /**
             * @return {goog.ui.TabPane?} The parent tab pane for page.
             */
            getParent(): goog.ui.TabPane;
    
            /**
             * Selects page in the associated tab pane.
             */
            select(): void;
    
            /**
             * Sets the enabled state.
             *
             * @param {boolean} enabled Enabled state.
             */
            setEnabled(enabled: boolean): void;
    
            /**
             * Returns if the page is enabled.
             * @return {boolean} Whether the page is enabled or not.
             */
            isEnabled(): boolean;
    } 
    

    /**
     * Constants for event names
     *
     * @type {Object}
     */
    var Events: Object;

    /**
     * Enum for representing the location of the tabs in relation to the content.
     *
     * @enum {number}
     */
    enum TabLocation { TOP, BOTTOM, LEFT, RIGHT } 
}
