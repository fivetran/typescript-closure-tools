/// <reference path="../../../globals.d.ts" />
/// <reference path="./control.d.ts" />
/// <reference path="./dimensionpickerrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="../events/browserevent.d.ts" />
/// <reference path="../events/event.d.ts" />
/// <reference path="../math/size.d.ts" />

declare module goog.ui {

    class DimensionPicker extends DimensionPicker.__Class { }
    module DimensionPicker {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Control.__Class {
    
            /**
             * A dimension picker allows the user to visually select a row and column
             * count using their mouse and keyboard.
             *
             * The currently selected dimension is controlled by an ACTION event.  Event
             * listeners may retrieve the selected item using the
             * {@link #getValue} method.
             *
             * @param {goog.ui.DimensionPickerRenderer=} opt_renderer Renderer used to
             *     render or decorate the palette; defaults to
             *     {@link goog.ui.DimensionPickerRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.Control}
             * @final
             */
            constructor(opt_renderer?: goog.ui.DimensionPickerRenderer, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Minimum number of columns to show in the grid.
             * @type {number}
             */
            minColumns: number;
    
            /**
             * Minimum number of rows to show in the grid.
             * @type {number}
             */
            minRows: number;
    
            /**
             * Maximum number of columns to show in the grid.
             * @type {number}
             */
            maxColumns: number;
    
            /**
             * Maximum number of rows to show in the grid.
             * @type {number}
             */
            maxRows: number;
    
            /**
             * Handles mousemove events.  Determines which palette size was moused over and
             * highlights it.
             * @param {goog.events.BrowserEvent} e Mouse event to handle.
             * @protected
             */
            handleMouseMove(e: goog.events.BrowserEvent): void;
    
            /**
             * Handles window resize events.  Ensures no scrollbars are introduced by the
             * renderer's mouse catcher.
             * @param {goog.events.Event} e Resize event to handle.
             * @protected
             */
            handleWindowResize(e: goog.events.Event): void;
    
            /**
             * @return {goog.math.Size} Current table size shown (columns x rows).
             */
            getSize(): goog.math.Size;
    
            /**
             * @return {!goog.math.Size} size The currently highlighted dimensions.
             */
            getValue(): goog.math.Size;
    
            /**
             * Sets the currently highlighted dimensions. If the dimensions are not valid
             * (not between 1 and the maximum number of columns/rows to show), they will
             * be changed to the closest valid value.
             * @param {(number|!goog.math.Size)} columns The number of columns to highlight,
             *     or a goog.math.Size object containing both.
             * @param {number=} opt_rows The number of rows to highlight.  Can be
             *     omitted when columns is a good.math.Size object.
             */
            setValue(columns: number, opt_rows?: number): void;
            /**
             * Sets the currently highlighted dimensions. If the dimensions are not valid
             * (not between 1 and the maximum number of columns/rows to show), they will
             * be changed to the closest valid value.
             * @param {(number|!goog.math.Size)} columns The number of columns to highlight,
             *     or a goog.math.Size object containing both.
             * @param {number=} opt_rows The number of rows to highlight.  Can be
             *     omitted when columns is a good.math.Size object.
             */
            setValue(columns: goog.math.Size, opt_rows?: number): void;
        }
    }
}
