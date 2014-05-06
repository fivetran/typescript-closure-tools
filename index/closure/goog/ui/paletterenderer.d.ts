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
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../closure/goog/dom/nodeiterator.d.ts" />

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.Palette}s.  Renders the palette as an
     * HTML table wrapped in a DIV, with one palette item per cell:
     *
     *    <div class="goog-palette">
     *      <table class="goog-palette-table">
     *        <tbody class="goog-palette-body">
     *          <tr class="goog-palette-row">
     *            <td class="goog-palette-cell">...Item 0...</td>
     *            <td class="goog-palette-cell">...Item 1...</td>
     *            ...
     *          </tr>
     *          <tr class="goog-palette-row">
     *            ...
     *          </tr>
     *        </tbody>
     *      </table>
     *    </div>
     *
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class PaletteRenderer extends goog.ui.ControlRenderer {
        /**
         * Default renderer for {@link goog.ui.Palette}s.  Renders the palette as an
         * HTML table wrapped in a DIV, with one palette item per cell:
         *
         *    <div class="goog-palette">
         *      <table class="goog-palette-table">
         *        <tbody class="goog-palette-body">
         *          <tr class="goog-palette-row">
         *            <td class="goog-palette-cell">...Item 0...</td>
         *            <td class="goog-palette-cell">...Item 1...</td>
         *            ...
         *          </tr>
         *          <tr class="goog-palette-row">
         *            ...
         *          </tr>
         *        </tbody>
         *      </table>
         *    </div>
         *
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /**
         * Returns the given items in a table with {@code size.width} columns and
         * {@code size.height} rows.  If the table is too big, empty cells will be
         * created as needed.  If the table is too small, the items that don't fit
         * will not be rendered.
         * @param {Array.<Node>} items Palette items.
         * @param {goog.math.Size} size Palette size (columns x rows); both dimensions
         *     must be specified as numbers.
         * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
         * @return {Element} Palette table element.
         */
        createGrid(items: Node[], size: goog.math.Size, dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns a table element (or equivalent) that wraps the given rows.
         * @param {Array.<Element>} rows Array of row elements.
         * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
         * @return {Element} Palette table element.
         */
        createTable(rows: Element[], dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns a table row element (or equivalent) that wraps the given cells.
         * @param {Array.<Element>} cells Array of cell elements.
         * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
         * @return {Element} Row element.
         */
        createRow(cells: Element[], dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns a table cell element (or equivalent) that wraps the given palette
         * item (which must be a DOM node).
         * @param {Node|string} node Palette item.
         * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
         * @return {Element} Cell element.
         */
        createCell(node: any /*Node|string*/, dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns the item corresponding to the given node, or null if the node is
         * neither a palette cell nor part of a palette item.
         * @param {goog.ui.Palette} palette Palette in which to look for the item.
         * @param {Node} node Node to look for.
         * @return {Node} The corresponding palette item (null if not found).
         */
        getContainingItem(palette: goog.ui.Palette, node: Node): Node;
    
        /**
         * Updates the highlight styling of the palette cell containing the given node
         * based on the value of the Boolean argument.
         * @param {goog.ui.Palette} palette Palette containing the item.
         * @param {Node} node Item whose cell is to be highlighted or un-highlighted.
         * @param {boolean} highlight If true, the cell is highlighted; otherwise it is
         *     un-highlighted.
         */
        highlightCell(palette: goog.ui.Palette, node: Node, highlight: boolean): void;
    
        /**
         * @param {Node} node Item whose cell is to be returned.
         * @return {Element} The grid cell for the palette item.
         */
        getCellForItem(node: Node): Element;
    
        /**
         * Updates the selection styling of the palette cell containing the given node
         * based on the value of the Boolean argument.
         * @param {goog.ui.Palette} palette Palette containing the item.
         * @param {Node} node Item whose cell is to be selected or deselected.
         * @param {boolean} select If true, the cell is selected; otherwise it is
         *     deselected.
         */
        selectCell(palette: goog.ui.Palette, node: Node, select: boolean): void;
    }
}

declare module goog.ui.PaletteRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

