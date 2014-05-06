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
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/ui/selectionmodel.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../closure/goog/dom/nodeiterator.d.ts" />
/// <reference path="../../../closure/goog/ui/paletterenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/control.d.ts" />

declare module goog.ui {

    /**
     * A palette is a grid of DOM nodes that the user can highlight or select via
     * the keyboard or the mouse.  The selection state of the palette is controlled
     * an ACTION event.  Event listeners may retrieve the selected item using the
     * {@link #getSelectedItem} or {@link #getSelectedIndex} method.
     *
     * Use this class as the base for components like color palettes or emoticon
     * pickers.  Use {@link #setContent} to set/change the items in the palette
     * after construction.  See palette.html demo for example usage.
     *
     * @param {Array.<Node>} items Array of DOM nodes to be displayed as items
     *     in the palette grid (limited to one per cell).
     * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
     *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Palette extends goog.ui.Control {
        /**
         * A palette is a grid of DOM nodes that the user can highlight or select via
         * the keyboard or the mouse.  The selection state of the palette is controlled
         * an ACTION event.  Event listeners may retrieve the selected item using the
         * {@link #getSelectedItem} or {@link #getSelectedIndex} method.
         *
         * Use this class as the base for components like color palettes or emoticon
         * pickers.  Use {@link #setContent} to set/change the items in the palette
         * after construction.  See palette.html demo for example usage.
         *
         * @param {Array.<Node>} items Array of DOM nodes to be displayed as items
         *     in the palette grid (limited to one per cell).
         * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
         *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Control}
         */
        constructor(items: Node[], opt_renderer?: goog.ui.PaletteRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Handles selection change events dispatched by the selection model.
         * @param {goog.events.Event} e Selection event to handle.
         */
        handleSelectionChange(e: goog.events.Event): void;
    
        /**
         * Returns the size of the palette grid.
         * @return {goog.math.Size} Palette size (columns x rows).
         */
        getSize(): goog.math.Size;
    
        /**
         * Sets the size of the palette grid to the given size.  Callers can either
         * pass a single {@link goog.math.Size} or a pair of numbers (first the number
         * of columns, then the number of rows) to this method.  In both cases, the
         * number of rows is optional and will be calculated automatically if needed.
         * It is an error to attempt to change the size of the palette after it has
         * been rendered.
         * @param {goog.math.Size|number} size Either a size object or the number of
         *     columns.
         * @param {number=} opt_rows The number of rows (optional).
         */
        setSize(size: any /*goog.math.Size|number*/, opt_rows?: number): void;
    
        /**
         * Returns the 0-based index of the currently highlighted palette item, or -1
         * if no item is highlighted.
         * @return {number} Index of the highlighted item (-1 if none).
         */
        getHighlightedIndex(): number;
    
        /**
         * Returns the currently highlighted palette item, or null if no item is
         * highlighted.
         * @return {Node} The highlighted item (undefined if none).
         */
        getHighlightedItem(): Node;
    
        /**
         * Highlights the item at the given 0-based index, or removes the highlight
         * if the argument is -1 or out of range.  Any previously-highlighted item
         * will be un-highlighted.
         * @param {number} index 0-based index of the item to highlight.
         */
        setHighlightedIndex(index: number): void;
    
        /**
         * Highlights the given item, or removes the highlight if the argument is null
         * or invalid.  Any previously-highlighted item will be un-highlighted.
         * @param {Node|undefined} item Item to highlight.
         */
        setHighlightedItem(item: any /*Node|any (undefined)*/): void;
    
        /**
         * Returns the 0-based index of the currently selected palette item, or -1
         * if no item is selected.
         * @return {number} Index of the selected item (-1 if none).
         */
        getSelectedIndex(): number;
    
        /**
         * Returns the currently selected palette item, or null if no item is selected.
         * @return {Node} The selected item (null if none).
         */
        getSelectedItem(): Node;
    
        /**
         * Selects the item at the given 0-based index, or clears the selection
         * if the argument is -1 or out of range.  Any previously-selected item
         * will be deselected.
         * @param {number} index 0-based index of the item to select.
         */
        setSelectedIndex(index: number): void;
    
        /**
         * Selects the given item, or clears the selection if the argument is null or
         * invalid.  Any previously-selected item will be deselected.
         * @param {Node} item Item to select.
         */
        setSelectedItem(item: Node): void;
    }
}

declare module goog.ui.Palette {

    /**
     * Events fired by the palette object
     * @enum {string}
     */
    enum EventType { AFTER_HIGHLIGHT } 
}

