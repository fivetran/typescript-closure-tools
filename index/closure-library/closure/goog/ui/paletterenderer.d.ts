/// <reference path="../../../globals.d.ts" />
/// <reference path="./controlrenderer.d.ts" />
/// <reference path="../math/size.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./palette.d.ts" />

declare module goog.ui {

    class PaletteRenderer extends PaletteRenderer.__Class { }
    module PaletteRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ControlRenderer.__Class {
    
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
             * @return {!Element} Palette table element.
             */
            createTable(rows: Element[], dom: goog.dom.DomHelper): Element;
    
            /**
             * Returns a table row element (or equivalent) that wraps the given cells.
             * @param {Array.<Element>} cells Array of cell elements.
             * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
             * @return {!Element} Row element.
             */
            createRow(cells: Element[], dom: goog.dom.DomHelper): Element;
    
            /**
             * Returns a table cell element (or equivalent) that wraps the given palette
             * item (which must be a DOM node).
             * @param {Node|string} node Palette item.
             * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
             * @return {!Element} Cell element.
             */
            createCell(node: Node, dom: goog.dom.DomHelper): Element;
            /**
             * Returns a table cell element (or equivalent) that wraps the given palette
             * item (which must be a DOM node).
             * @param {Node|string} node Palette item.
             * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
             * @return {!Element} Cell element.
             */
            createCell(node: string, dom: goog.dom.DomHelper): Element;
    
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
}

declare module goog.ui.PaletteRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
