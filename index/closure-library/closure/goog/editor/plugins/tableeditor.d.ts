/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />
/// <reference path="../../dom/abstractrange.d.ts" />
/// <reference path="../table.d.ts" />

declare module goog.editor.plugins {

    class TableEditor extends TableEditor.__Class { }
    module TableEditor {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.editor.Plugin.__Class {
    
            /**
             * Plugin that adds support for table creation and editing commands.
             * @constructor
             * @extends {goog.editor.Plugin}
             * @final
             */
            constructor();
    
            /**
             * Adds a function to filter out non-user-editable tables.
             * @param {function(Element):boolean} func A function to decide whether the
             *   table element could be editable by the user or not.
             */
            addIsTableEditableFunction(func: (_0: Element) => boolean): void;
        }
    }
}

declare module goog.editor.plugins.TableEditor {

    class CellSelection_ extends CellSelection_.__Class { }
    module CellSelection_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Class representing the selected cell objects within a single  table.
             * @param {goog.dom.AbstractRange} range Selected range from which to calculate
             *     selected cells.
             * @param {function(Element):Element?} getParentTableFunction A function that
             *     finds the user-editable table from a given element.
             * @constructor
             * @private
             */
            constructor(range: goog.dom.AbstractRange, getParentTableFunction: (_0: Element) => Element);
    
            /**
             * Returns the EditableTable object of which this selection's cells are a
             * subset.
             * @return {!goog.editor.Table} the table.
             */
            getTable(): goog.editor.Table;
    
            /**
             * Returns the row index of the uppermost cell in this selection.
             * @return {number} The row index.
             */
            getFirstRowIndex(): number;
    
            /**
             * Returns the row index of the lowermost cell in this selection.
             * @return {number} The row index.
             */
            getLastRowIndex(): number;
    
            /**
             * Returns the column index of the farthest left cell in this selection.
             * @return {number} The column index.
             */
            getFirstColumnIndex(): number;
    
            /**
             * Returns the column index of the farthest right cell in this selection.
             * @return {number} The column index.
             */
            getLastColumnIndex(): number;
    
            /**
             * Returns the cells in this selection.
             * @return {!Array.<Element>} Cells in this selection.
             */
            getCells(): Element[];
    
            /**
             * Returns a boolean value indicating whether or not the cells in this
             * selection form a rectangle.
             * @return {boolean} Whether the selection forms a rectangle.
             */
            isRectangle(): boolean;
    
            /**
             * Returns a boolean value indicating whether or not there is exactly
             * one cell in this selection. Note that this may not be the same as checking
             * whether getCells().length == 1; if there is a single cell with
             * rowSpan/colSpan set it will appear multiple times.
             * @return {boolean} Whether there is exatly one cell in this selection.
             */
            containsSingleCell(): boolean;
        }
    }

    /**
     * Commands supported by goog.editor.plugins.TableEditor.
     * @enum {string}
     */
    enum COMMAND { TABLE, INSERT_ROW_AFTER, INSERT_ROW_BEFORE, INSERT_COLUMN_AFTER, INSERT_COLUMN_BEFORE, REMOVE_ROWS, REMOVE_COLUMNS, SPLIT_CELL, MERGE_CELLS, REMOVE_TABLE } 
}
