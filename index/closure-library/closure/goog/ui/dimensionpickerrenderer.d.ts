/// <reference path="../../../globals.d.ts" />
/// <reference path="./controlrenderer.d.ts" />
/// <reference path="./dimensionpicker.d.ts" />

declare module goog.ui {

    class DimensionPickerRenderer extends DimensionPickerRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class DimensionPickerRenderer__Class extends goog.ui.ControlRenderer__Class  { 
    
            /**
             * Default renderer for {@link goog.ui.DimensionPicker}s.  Renders the
             * palette as two divs, one with the un-highlighted background, and one with the
             * highlighted background.
             *
             * @constructor
             * @extends {goog.ui.ControlRenderer}
             */
            constructor();
    
            /**
             * Scales various elements in order to update the palette's size.
             * @param {goog.ui.DimensionPicker} palette The palette object.
             * @param {Element} element The element to set the style of.
             */
            updateSize(palette: goog.ui.DimensionPicker, element: Element): void;
    
            /**
             * Get the element to listen for mouse move events on.
             * @param {goog.ui.DimensionPicker} palette The palette to listen on.
             * @return {Element} The element to listen for mouse move events on.
             */
            getMouseMoveElement(palette: goog.ui.DimensionPicker): Element;
    
            /**
             * Returns the x offset in to the grid for the given mouse x position.
             * @param {goog.ui.DimensionPicker} palette The table size palette.
             * @param {number} x The mouse event x position.
             * @return {number} The x offset in to the grid.
             */
            getGridOffsetX(palette: goog.ui.DimensionPicker, x: number): number;
    
            /**
             * Returns the y offset in to the grid for the given mouse y position.
             * @param {goog.ui.DimensionPicker} palette The table size palette.
             * @param {number} y The mouse event y position.
             * @return {number} The y offset in to the grid.
             */
            getGridOffsetY(palette: goog.ui.DimensionPicker, y: number): number;
    
            /**
             * Sets the highlighted size. Does nothing if the palette hasn't been rendered.
             * @param {goog.ui.DimensionPicker} palette The table size palette.
             * @param {number} columns The number of columns to highlight.
             * @param {number} rows The number of rows to highlight.
             */
            setHighlightedSize(palette: goog.ui.DimensionPicker, columns: number, rows: number): void;
    
            /**
             * Position the mouse catcher such that it receives mouse events past the
             * selectedsize up to the maximum size.  Takes care to not introduce scrollbars.
             * Should be called on enter document and when the window changes size.
             * @param {goog.ui.DimensionPicker} palette The table size palette.
             */
            positionMouseCatcher(palette: goog.ui.DimensionPicker): void;
    } 
    
}

declare module goog.ui.DimensionPickerRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
