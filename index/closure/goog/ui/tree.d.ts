// Generated Wed Apr 30 16:34:50 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/a11y/aria.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/html.d.ts" />
/// <reference path="../../goog/i18n.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/log.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />
/// <reference path="../../goog/style.d.ts" />
/// <reference path="../../goog/timer.d.ts" />
/// <reference path="../../goog/ui.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.ui.tree.BaseNode' {

    /**
     * The event types dispatched by this class.
     * @enum {string}
     */
    enum EventType { BEFORE_EXPAND, EXPAND, BEFORE_COLLAPSE, COLLAPSE } 

    /**
     * Map of nodes in existence. Needed to route events to the appropriate nodes.
     * Nodes are added to the map at {@link #enterDocument} time and removed at
     * {@link #exitDocument} time.
     * @type {Object}
     * @protected
     */
    var allNodes: Object;
}

declare module 'goog.ui.tree.TreeControl' {

    /**
     * A default configuration for the tree.
     */
    var defaultConfig: any /*missing*/;
}

declare module 'goog.ui.tree.TypeAhead' {

    /**
     * Enum for offset values that are used for ctrl-key navigation among the
     * multiple matches of a given typeahead buffer.
     *
     * @enum {number}
     */
    enum Offset { DOWN, UP } 
}

declare module 'goog.ui.tree' {

    /**
     * An abstract base class for a node in the tree.
     *
     * @param {string|!goog.html.SafeHtml} html The html content of the node label.
     * @param {Object=} opt_config The configuration for the tree. See
     *    {@link goog.ui.tree.TreeControl.defaultConfig}. If not specified the
     *    default config will be used.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class BaseNode extends goog.ui.Component {
        /**
         * An abstract base class for a node in the tree.
         *
         * @param {string|!goog.html.SafeHtml} html The html content of the node label.
         * @param {Object=} opt_config The configuration for the tree. See
         *    {@link goog.ui.tree.TreeControl.defaultConfig}. If not specified the
         *    default config will be used.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(html: any /*string|goog.html.SafeHtml*/, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Adds roles and states.
         * @protected
         */
        initAccessibility(): void;
    
        /** @override */
        createDom(): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /**
         * The method assumes that the child doesn't have parent node yet.
         * The {@code opt_render} argument is not used. If the parent node is expanded,
         * the child node's state will be the same as the parent's. Otherwise the
         * child's DOM tree won't be created.
         * @override
         */
        addChildAt(): void;
    
        /**
         * Adds a node as a child to the current node.
         * @param {goog.ui.tree.BaseNode} child The child to add.
         * @param {goog.ui.tree.BaseNode=} opt_before If specified, the new child is
         *    added as a child before this one. If not specified, it's appended to the
         *    end.
         * @return {goog.ui.tree.BaseNode} The added child.
         */
        add(child: goog.ui.tree.BaseNode, opt_before?: goog.ui.tree.BaseNode): goog.ui.tree.BaseNode;
    
        /**
         * Removes a child. The caller is responsible for disposing the node.
         * @param {goog.ui.Component|string} childNode The child to remove. Must be a
         *     {@link goog.ui.tree.BaseNode}.
         * @param {boolean=} opt_unrender Unused. The child will always be unrendered.
         * @return {goog.ui.tree.BaseNode} The child that was removed.
         * @override
         */
        removeChild(childNode: any /*goog.ui.Component|string*/, opt_unrender?: boolean): goog.ui.tree.BaseNode;
    
        /**
         * @deprecated Use {@link #removeChild}.
         */
        remove: any /*missing*/;
    
        /**
         * Returns the tree.
         */
        getTree: any /*missing*/;
    
        /**
         * Returns the depth of the node in the tree. Should not be overridden.
         * @return {number} The non-negative depth of this node (the root is zero).
         */
        getDepth(): number;
    
        /**
         * Returns true if the node is a descendant of this node
         * @param {goog.ui.tree.BaseNode} node The node to check.
         * @return {boolean} True if the node is a descendant of this node, false
         *    otherwise.
         */
        contains(node: goog.ui.tree.BaseNode): boolean;
    
        /**
         * @param {number} index 0-based index.
         * @return {goog.ui.tree.BaseNode} The child at the given index; null if none.
         */
        getChildAt: any /*missing*/;
    
        /**
         * Returns the children of this node.
         * @return {!Array.<!goog.ui.tree.BaseNode>} The children.
         */
        getChildren(): goog.ui.tree.BaseNode[];
    
        /**
         * @return {goog.ui.tree.BaseNode} The first child of this node.
         */
        getFirstChild(): goog.ui.tree.BaseNode;
    
        /**
         * @return {goog.ui.tree.BaseNode} The last child of this node.
         */
        getLastChild(): goog.ui.tree.BaseNode;
    
        /**
         * @return {goog.ui.tree.BaseNode} The previous sibling of this node.
         */
        getPreviousSibling(): goog.ui.tree.BaseNode;
    
        /**
         * @return {goog.ui.tree.BaseNode} The next sibling of this node.
         */
        getNextSibling(): goog.ui.tree.BaseNode;
    
        /**
         * @return {boolean} Whether the node is the last sibling.
         */
        isLastSibling(): boolean;
    
        /**
         * @return {boolean} Whether the node is selected.
         */
        isSelected(): boolean;
    
        /**
         * Selects the node.
         */
        select(): void;
    
        /**
         * Originally it was intended to deselect the node but never worked.
         * @deprecated Use {@code tree.setSelectedItem(null)}.
         */
        deselect: any /*missing*/;
    
        /**
         * Called from the tree to instruct the node change its selection state.
         * @param {boolean} selected The new selection state.
         * @protected
         */
        setSelectedInternal(selected: boolean): void;
    
        /**
         * @return {boolean} Whether the node is expanded.
         */
        getExpanded(): boolean;
    
        /**
         * Sets the node to be expanded internally, without state change events.
         * @param {boolean} expanded Whether to expand or close the node.
         */
        setExpandedInternal(expanded: boolean): void;
    
        /**
         * Sets the node to be expanded.
         * @param {boolean} expanded Whether to expand or close the node.
         */
        setExpanded(expanded: boolean): void;
    
        /**
         * Toggles the expanded state of the node.
         */
        toggle(): void;
    
        /**
         * Expands the node.
         */
        expand(): void;
    
        /**
         * Collapses the node.
         */
        collapse(): void;
    
        /**
         * Collapses the children of the node.
         */
        collapseChildren(): void;
    
        /**
         * Collapses the children and the node.
         */
        collapseAll(): void;
    
        /**
         * Expands the children of the node.
         */
        expandChildren(): void;
    
        /**
         * Expands the children and the node.
         */
        expandAll(): void;
    
        /**
         * Expands the parent chain of this node so that it is visible.
         */
        reveal(): void;
    
        /**
         * Sets whether the node will allow the user to collapse it.
         * @param {boolean} isCollapsible Whether to allow node collapse.
         */
        setIsUserCollapsible(isCollapsible: boolean): void;
    
        /**
         * @return {boolean} Whether the node is collapsible by user actions.
         */
        isUserCollapsible(): boolean;
    
        /**
         * Creates HTML for the node.
         * @return {!goog.html.SafeHtml}
         * @protected
         */
        toSafeHtml(): goog.html.SafeHtml;
    
        /**
         * @return {!goog.html.SafeHtml} The html for the row.
         * @protected
         */
        getRowSafeHtml(): goog.html.SafeHtml;
    
        /**
         * @return {string} The class name for the row.
         * @protected
         */
        getRowClassName(): string;
    
        /**
         * @return {!goog.html.SafeHtml} The html for the label.
         * @protected
         */
        getLabelSafeHtml(): goog.html.SafeHtml;
    
        /**
         * Returns the html that appears after the label. This is useful if you want to
         * put extra UI on the row of the label but not inside the anchor tag.
         * @return {string} The html.
         * @final
         */
        getAfterLabelHtml(): string;
    
        /**
         * Returns the html that appears after the label. This is useful if you want to
         * put extra UI on the row of the label but not inside the anchor tag.
         * @return {!goog.html.SafeHtml} The html.
         */
        getAfterLabelSafeHtml(): goog.html.SafeHtml;
    
        /**
         * Sets the html that appears after the label. This is useful if you want to
         * put extra UI on the row of the label but not inside the anchor tag.
         * @param {string} html The html.
         */
        setAfterLabelHtml(html: string): void;
    
        /**
         * Sets the html that appears after the label. This is useful if you want to
         * put extra UI on the row of the label but not inside the anchor tag.
         * @param {!goog.html.SafeHtml} html The html.
         */
        setAfterLabelSafeHtml(html: goog.html.SafeHtml): void;
    
        /**
         * @return {!goog.html.SafeHtml} The html for the icon.
         * @protected
         */
        getIconSafeHtml(): goog.html.SafeHtml;
    
        /**
         * Gets the calculated icon class.
         * @protected
         */
        getCalculatedIconClass: any /*missing*/;
    
        /**
         * @return {!goog.html.SafeHtml} The source for the icon.
         * @protected
         */
        getExpandIconSafeHtml(): goog.html.SafeHtml;
    
        /**
         * @return {string} The class names of the icon used for expanding the node.
         * @protected
         */
        getExpandIconClass(): string;
    
        /**
         * @return {string} The line style.
         */
        getLineStyle(): string;
    
        /**
         * @return {string} The line style.
         */
        getLineStyle2(): string;
    
        /**
         * @return {Element} The element for the tree node.
         * @override
         */
        getElement(): Element;
    
        /**
         * @return {Element} The row is the div that is used to draw the node without
         *     the children.
         */
        getRowElement(): Element;
    
        /**
         * @return {Element} The expanded icon element.
         * @protected
         */
        getExpandIconElement(): Element;
    
        /**
         * @return {Element} The icon element.
         * @protected
         */
        getIconElement(): Element;
    
        /**
         * @return {Element} The label element.
         */
        getLabelElement(): Element;
    
        /**
         * @return {Element} The element after the label.
         */
        getAfterLabelElement(): Element;
    
        /**
         * @return {Element} The div containing the children.
         * @protected
         */
        getChildrenElement(): Element;
    
        /**
         * Sets the icon class for the node.
         * @param {string} s The icon class.
         */
        setIconClass(s: string): void;
    
        /**
         * Gets the icon class for the node.
         * @return {string} s The icon source.
         */
        getIconClass(): string;
    
        /**
         * Sets the icon class for when the node is expanded.
         * @param {string} s The expanded icon class.
         */
        setExpandedIconClass(s: string): void;
    
        /**
         * Gets the icon class for when the node is expanded.
         * @return {string} The class.
         */
        getExpandedIconClass(): string;
    
        /**
         * Sets the text of the label.
         * @param {string} s The plain text of the label.
         */
        setText(s: string): void;
    
        /**
         * Returns the text of the label. If the text was originally set as HTML, the
         * return value is unspecified.
         * @return {string} The plain text of the label.
         */
        getText(): string;
    
        /**
         * Sets the html of the label.
         * @param {string} s The html string for the label.
         */
        setHtml(s: string): void;
    
        /**
         * Sets the HTML of the label.
         * @param {!goog.html.SafeHtml} html The HTML object for the label.
         */
        setSafeHtml(html: goog.html.SafeHtml): void;
    
        /**
         * Returns the html of the label.
         * @return {string} The html string of the label.
         * @final
         */
        getHtml(): string;
    
        /**
         * Returns the html of the label.
         * @return {!goog.html.SafeHtml} The html string of the label.
         */
        getSafeHtml(): goog.html.SafeHtml;
    
        /**
         * Sets the text of the tooltip.
         * @param {string} s The tooltip text to set.
         */
        setToolTip(s: string): void;
    
        /**
         * Returns the text of the tooltip.
         * @return {?string} The tooltip text.
         */
        getToolTip(): string;
    
        /**
         * Updates the row styles.
         */
        updateRow(): void;
    
        /**
         * Updates the expand icon of the node.
         */
        updateExpandIcon(): void;
    
        /**
         * Handles mouse down event.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @protected
         */
        onMouseDown(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles a click event.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @protected
         * @suppress {underscore|visibility}
         */
        onClick_: any /*missing*/;
    
        /**
         * Handles a double click event.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @protected
         * @suppress {underscore|visibility}
         */
        onDoubleClick_(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles a key down event.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @return {boolean} The handled value.
         * @protected
         */
        onKeyDown(e: goog.events.BrowserEvent): boolean;
    
        /**
         * @return {goog.ui.tree.BaseNode} The last shown descendant.
         */
        getLastShownDescendant(): goog.ui.tree.BaseNode;
    
        /**
         * @return {goog.ui.tree.BaseNode} The next node to show or null if there isn't
         *     a next node to show.
         */
        getNextShownNode(): goog.ui.tree.BaseNode;
    
        /**
         * @return {goog.ui.tree.BaseNode} The previous node to show.
         */
        getPreviousShownNode(): goog.ui.tree.BaseNode;
    
        /**
         * @return {*} Data set by the client.
         * @deprecated Use {@link #getModel} instead.
         */
        getClientData: any /*missing*/;
    
        /**
         * Sets client data to associate with the node.
         * @param {*} data The client data to associate with the node.
         * @deprecated Use {@link #setModel} instead.
         */
        setClientData: any /*missing*/;
    
        /**
         * @return {Object} The configuration for the tree.
         */
        getConfig(): Object;
    
        /**
         * Internal method that is used to set the tree control on the node.
         * @param {goog.ui.tree.TreeControl} tree The tree control.
         */
        setTreeInternal(tree: goog.ui.tree.TreeControl): void;
    }

    /**
     * This creates a TreeControl object. A tree control provides a way to
     * view a hierarchical set of data.
     * @param {string|!goog.html.SafeHtml} html The HTML content of the node label.
     * @param {Object=} opt_config The configuration for the tree. See
     *    goog.ui.tree.TreeControl.defaultConfig. If not specified, a default config
     *    will be used.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.tree.BaseNode}
     */
    class TreeControl extends goog.ui.tree.BaseNode {
        /**
         * This creates a TreeControl object. A tree control provides a way to
         * view a hierarchical set of data.
         * @param {string|!goog.html.SafeHtml} html The HTML content of the node label.
         * @param {Object=} opt_config The configuration for the tree. See
         *    goog.ui.tree.TreeControl.defaultConfig. If not specified, a default config
         *    will be used.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.tree.BaseNode}
         */
        constructor(html: any /*string|goog.html.SafeHtml*/, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        getTree(): void;
    
        /** @override */
        getDepth(): void;
    
        /**
         * Expands the parent chain of this node so that it is visible.
         * @override
         */
        reveal(): void;
    
        /**
         * @return {boolean} Whether the tree has keyboard focus.
         */
        hasFocus(): boolean;
    
        /** @override */
        getExpanded(): void;
    
        /** @override */
        setExpanded(): void;
    
        /** @override */
        getExpandIconSafeHtml(): void;
    
        /** @override */
        getIconElement(): void;
    
        /** @override */
        getExpandIconElement(): void;
    
        /** @override */
        updateExpandIcon(): void;
    
        /** @override */
        getRowClassName(): void;
    
        /**
         * Returns the source for the icon.
         * @return {string} Src for the icon.
         * @override
         */
        getCalculatedIconClass(): string;
    
        /**
         * Sets the selected item.
         * @param {goog.ui.tree.BaseNode} node The item to select.
         */
        setSelectedItem(node: goog.ui.tree.BaseNode): void;
    
        /**
         * Returns the selected item.
         * @return {goog.ui.tree.BaseNode} The currently selected item.
         */
        getSelectedItem(): goog.ui.tree.BaseNode;
    
        /**
         * Sets whether to show lines.
         * @param {boolean} b Whether to show lines.
         */
        setShowLines(b: boolean): void;
    
        /**
         * @return {boolean} Whether to show lines.
         */
        getShowLines(): boolean;
    
        /**
         * Sets whether to show root lines.
         * @param {boolean} b Whether to show root lines.
         */
        setShowRootLines(b: boolean): void;
    
        /**
         * @return {boolean} Whether to show root lines.
         */
        getShowRootLines(): boolean;
    
        /**
         * Sets whether to show expand icons.
         * @param {boolean} b Whether to show expand icons.
         */
        setShowExpandIcons(b: boolean): void;
    
        /**
         * @return {boolean} Whether to show expand icons.
         */
        getShowExpandIcons(): boolean;
    
        /**
         * Sets whether to show the root node.
         * @param {boolean} b Whether to show the root node.
         */
        setShowRootNode(b: boolean): void;
    
        /**
         * @return {boolean} Whether to show the root node.
         */
        getShowRootNode(): boolean;
    
        /**
         * Add roles and states.
         * @protected
         * @override
         */
        initAccessibility(): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /**
         * Handles key down on the tree.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @return {boolean} The handled value.
         */
        handleKeyEvent(e: goog.events.BrowserEvent): boolean;
    
        /**
         * Creates a new tree node using the same config as the root.
         * @param {string=} opt_html The HTML content of the node label.
         * @return {!goog.ui.tree.TreeNode} The new item.
         */
        createNode(opt_html?: string): goog.ui.tree.TreeNode;
    
        /**
         * Allows the caller to notify that the given node has been added or just had
         * been updated in the tree.
         * @param {goog.ui.tree.BaseNode} node New node being added or existing node
         *    that just had been updated.
         */
        setNode(node: goog.ui.tree.BaseNode): void;
    
        /**
         * Allows the caller to notify that the given node is being removed from the
         * tree.
         * @param {goog.ui.tree.BaseNode} node Node being removed.
         */
        removeNode(node: goog.ui.tree.BaseNode): void;
    
        /**
         * Clear the typeahead buffer.
         */
        clearTypeAhead(): void;
    }

    /**
     * A single node in the tree.
     * @param {string|!goog.html.SafeHtml} html The html content of the node label.
     * @param {Object=} opt_config The configuration for the tree. See
     *    goog.ui.tree.TreeControl.defaultConfig. If not specified, a default config
     *    will be used.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.tree.BaseNode}
     */
    class TreeNode extends goog.ui.tree.BaseNode {
        /**
         * A single node in the tree.
         * @param {string|!goog.html.SafeHtml} html The html content of the node label.
         * @param {Object=} opt_config The configuration for the tree. See
         *    goog.ui.tree.TreeControl.defaultConfig. If not specified, a default config
         *    will be used.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.tree.BaseNode}
         */
        constructor(html: any /*string|goog.html.SafeHtml*/, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns the tree.
         * @return {?goog.ui.tree.TreeControl} The tree.
         * @override
         */
        getTree(): goog.ui.tree.TreeControl;
    
        /**
         * Returns the source for the icon.
         * @return {string} Src for the icon.
         * @override
         */
        getCalculatedIconClass(): string;
    }

    /**
     * Constructs a TypeAhead object.
     * @constructor
     * @final
     */
    class TypeAhead {
        /**
         * Constructs a TypeAhead object.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Handles navigation keys.
         * @param {goog.events.BrowserEvent} e The browser event.
         * @return {boolean} The handled value.
         */
        handleNavigation(e: goog.events.BrowserEvent): boolean;
    
        /**
         * Handles the character presses.
         * @param {goog.events.BrowserEvent} e The browser event.
         *    Expected event type is goog.events.KeyHandler.EventType.KEY.
         * @return {boolean} The handled value.
         */
        handleTypeAheadChar(e: goog.events.BrowserEvent): boolean;
    
        /**
         * Adds or updates the given node in the nodemap. The label text is used as a
         * key and the node id is used as a value. In the case that the key already
         * exists, such as when more than one node exists with the same label, then this
         * function creates an array to hold the multiple nodes.
         * @param {goog.ui.tree.BaseNode} node Node to be added or updated.
         */
        setNodeInMap(node: goog.ui.tree.BaseNode): void;
    
        /**
         * Removes the given node from the nodemap.
         * @param {goog.ui.tree.BaseNode} node Node to be removed.
         */
        removeNodeFromMap(node: goog.ui.tree.BaseNode): void;
    
        /**
         * Clears the typeahead buffer.
         */
        clear(): void;
    }
}

