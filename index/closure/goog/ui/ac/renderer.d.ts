/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../../closure/goog/positioning/positioning.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/async/delay.d.ts" />
/// <reference path="../../../../closure/goog/async/animationdelay.d.ts" />
/// <reference path="../../../../closure/goog/fx/anim/anim.d.ts" />
/// <reference path="../../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../../closure/goog/fx/transitionbase.d.ts" />
/// <reference path="../../../../closure/goog/fx/animation.d.ts" />
/// <reference path="../../../../closure/goog/color/names.d.ts" />
/// <reference path="../../../../closure/goog/color/color.d.ts" />
/// <reference path="../../../../closure/goog/fx/dom.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../../closure/goog/ui/ac/autocomplete.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../../closure/goog/ui/idgenerator.d.ts" />

declare module goog.ui.ac {

    /**
     * Class for rendering the results of an auto-complete in a drop down list.
     *
     * @constructor
     * @param {Element=} opt_parentNode optional reference to the parent element
     *     that will hold the autocomplete elements. goog.dom.getDocument().body
     *     will be used if this is null.
     * @param {?({renderRow}|{render})=} opt_customRenderer Custom full renderer to
     *     render each row. Should be something with a renderRow or render method.
     * @param {boolean=} opt_rightAlign Determines if the autocomplete will always
     *     be right aligned. False by default.
     * @param {boolean=} opt_useStandardHighlighting Determines if standard
     *     highlighting should be applied to each row of data. Standard highlighting
     *     bolds every matching substring for a given token in each row. True by
     *     default.
     * @extends {goog.events.EventTarget}
     */
    class Renderer extends goog.events.EventTarget {
        /**
         * Class for rendering the results of an auto-complete in a drop down list.
         *
         * @constructor
         * @param {Element=} opt_parentNode optional reference to the parent element
         *     that will hold the autocomplete elements. goog.dom.getDocument().body
         *     will be used if this is null.
         * @param {?({renderRow}|{render})=} opt_customRenderer Custom full renderer to
         *     render each row. Should be something with a renderRow or render method.
         * @param {boolean=} opt_rightAlign Determines if the autocomplete will always
         *     be right aligned. False by default.
         * @param {boolean=} opt_useStandardHighlighting Determines if standard
         *     highlighting should be applied to each row of data. Standard highlighting
         *     bolds every matching substring for a given token in each row. True by
         *     default.
         * @extends {goog.events.EventTarget}
         */
        constructor(opt_parentNode?: Element, opt_customRenderer?: any /*{ renderRow: any (missing) }|{ render: any (missing) }*/, opt_rightAlign?: boolean, opt_useStandardHighlighting?: boolean);
    
        /**
         * Gets the renderer's element.
         * @return {Element} The  main element that controls the rendered autocomplete.
         */
        getElement(): Element;
    
        /**
         * Sets the width provider element. The provider is only used on redraw and as
         * such will not automatically update on resize.
         * @param {Node} widthProvider The element whose width should be mirrored.
         */
        setWidthProvider(widthProvider: Node): void;
    
        /**
         * Set whether to align autocomplete to top of target element
         * @param {boolean} align If true, align to top.
         */
        setTopAlign(align: boolean): void;
    
        /**
         * @return {boolean} Whether we should be aligning to the top of
         *     the target element.
         */
        getTopAlign(): boolean;
    
        /**
         * Set whether to align autocomplete to the right of the target element.
         * @param {boolean} align If true, align to right.
         */
        setRightAlign(align: boolean): void;
    
        /**
         * @return {boolean} Whether the autocomplete menu should be right aligned.
         */
        getRightAlign(): boolean;
    
        /**
         * @param {boolean} show Whether we should limit the dropdown from extending
         *     past the bottom of the screen and instead show a scrollbar on the
         *     dropdown.
         */
        setShowScrollbarsIfTooLarge(show: boolean): void;
    
        /**
         * Set whether or not standard highlighting should be used when rendering rows.
         * @param {boolean} useStandardHighlighting true if standard highlighting used.
         */
        setUseStandardHighlighting(useStandardHighlighting: boolean): void;
    
        /**
         * @param {boolean} matchWordBoundary Determines whether matches should be
         *     higlighted only when the token matches text at a whole-word boundary.
         *     True by default.
         */
        setMatchWordBoundary(matchWordBoundary: boolean): void;
    
        /**
         * Set whether or not to highlight all matching tokens rather than just the
         * first.
         * @param {boolean} highlightAllTokens Whether to highlight all matching tokens
         *     rather than just the first.
         */
        setHighlightAllTokens(highlightAllTokens: boolean): void;
    
        /**
         * Sets the duration (in msec) of the fade animation when menu is shown/hidden.
         * Setting to 0 (default) disables animation entirely.
         * @param {number} duration Duration (in msec) of the fade animation (or 0 for
         *     no animation).
         */
        setMenuFadeDuration(duration: number): void;
    
        /**
         * Sets the anchor element for the subsequent call to renderRows.
         * @param {Element} anchor The anchor element.
         */
        setAnchorElement(anchor: Element): void;
    
        /**
         * @return {Element} The anchor element.
         * @protected
         */
        getAnchorElement(): Element;
    
        /**
         * Render the autocomplete UI
         *
         * @param {Array} rows Matching UI rows.
         * @param {string} token Token we are currently matching against.
         * @param {Element=} opt_target Current HTML node, will position popup beneath
         *     this node.
         */
        renderRows(rows: any[], token: string, opt_target?: Element): void;
    
        /**
         * Hide the object.
         */
        dismiss(): void;
    
        /**
         * Show the object.
         */
        show(): void;
    
        /**
         * @return {boolean} True if the object is visible.
         */
        isVisible(): boolean;
    
        /**
         * Sets the 'active' class of the nth item.
         * @param {number} index Index of the item to highlight.
         */
        hiliteRow(index: number): void;
    
        /**
         * Removes the 'active' class from the currently selected row.
         */
        hiliteNone(): void;
    
        /**
         * Sets the 'active' class of the item with a given id.
         * @param {number} id Id of the row to hilight. If id is -1 then no rows get
         *     hilited.
         */
        hiliteId(id: number): void;
    
        /**
         * Redraw (or draw if this is the first call) the rendered auto-complete drop
         * down.
         */
        redraw(): void;
    
        /**
         * @return {goog.positioning.Corner} The anchor corner to position the popup at.
         * @protected
         */
        getAnchorCorner(): goog.positioning.Corner;
    
        /**
         * Repositions the auto complete popup relative to the location node, if it
         * exists and the auto position has been set.
         */
        reposition(): void;
    
        /**
         * Sets whether the renderer should try to determine where to position the
         * drop down.
         * @param {boolean} auto Whether to autoposition the drop down.
         */
        setAutoPosition(auto: boolean): void;
    
        /**
         * @return {boolean} Whether the drop down will be autopositioned.
         * @protected
         */
        getAutoPosition(): boolean;
    
        /**
         * @return {Element} The target element.
         * @protected
         */
        getTarget(): Element;
    
        /**
         * Render a row by creating a div and then calling row rendering callback or
         * default row handler
         *
         * @param {Object} row Object representing row.
         * @param {string} token Token to highlight.
         * @return {Element} An element with the rendered HTML.
         */
        renderRowHtml(row: Object, token: string): Element;
    }
}

declare module goog.ui.ac.Renderer {

    /**
     * Class allowing different implementations to custom render the autocomplete.
     * Extending classes should override the render function.
     * @constructor
     */
    class CustomRenderer {
        /**
         * Class allowing different implementations to custom render the autocomplete.
         * Extending classes should override the render function.
         * @constructor
         */
        constructor();
    
        /**
         * Renders the autocomplete box. May be set to null.
         *
         * Because of the type, this function cannot be documented with param JSDoc.
         *
         * The function expects the following parameters:
         *
         * renderer, goog.ui.ac.Renderer: The autocomplete renderer.
         * element, Element: The main element that controls the rendered autocomplete.
         * rows, Array: The current set of rows being displayed.
         * token, string: The current token that has been entered. *
         *
         * @type {function(goog.ui.ac.Renderer, Element, Array, string)|
         *        null|undefined}
         */
        render(renderer: any /* jsdoc error */, element: any /* jsdoc error */, rows: any /* jsdoc error */, token: any /* jsdoc error */): void;
    
        /**
         * Generic function that takes a row and renders a DOM structure for that row.
         * @param {Object} row Object representing row.
         * @param {string} token Token to highlight.
         * @param {Node} node The node to render into.
         */
        renderRow(row: Object, token: string, node: Node): void;
    }

    /**
     * The delay before mouseover events are registered, in milliseconds
     * @type {number}
     * @const
     */
    var DELAY_BEFORE_MOUSEOVER: number;
}

