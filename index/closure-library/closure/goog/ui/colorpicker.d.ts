/// <reference path="../../../globals.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./colorpalette.d.ts" />
/// <reference path="../math/size.d.ts" />

declare module goog.ui {

    class ColorPicker extends ColorPicker__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ColorPicker__Class extends goog.ui.Component__Class  { 
    
            /**
             * Create a new, empty color picker.
             *
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @param {goog.ui.ColorPalette=} opt_colorPalette Optional color palette to
             *     use for this color picker.
             * @extends {goog.ui.Component}
             * @constructor
             * @final
             */
            constructor(opt_domHelper?: goog.dom.DomHelper, opt_colorPalette?: goog.ui.ColorPalette);
    
            /**
             * Gets the array of colors displayed by the color picker.
             * Modifying this array will lead to unexpected behavior.
             * @return {Array.<string>?} The colors displayed by this widget.
             */
            getColors(): string[];
    
            /**
             * Sets the array of colors to be displayed by the color picker.
             * @param {Array.<string>} colors The array of colors to be added.
             */
            setColors(colors: string[]): void;
    
            /**
             * Sets the array of colors to be displayed by the color picker.
             * @param {Array.<string>} colors The array of colors to be added.
             * @deprecated Use setColors.
             */
            addColors(colors: string[]): void;
    
            /**
             * Sets the size of the palette.  Will throw an error after the picker has been
             * rendered.
             * @param {goog.math.Size|number} size The size of the grid.
             */
            setSize(size: goog.math.Size|number): void;
    
            /**
             * Gets the number of columns displayed.
             * @return {goog.math.Size?} The size of the grid.
             */
            getSize(): goog.math.Size;
    
            /**
             * Sets the number of columns.  Will throw an error after the picker has been
             * rendered.
             * @param {number} n The number of columns.
             * @deprecated Use setSize.
             */
            setColumnCount(n: number): void;
    
            /**
             * @return {number} The index of the color selected.
             */
            getSelectedIndex(): number;
    
            /**
             * Sets which color is selected. A value that is out-of-range means that no
             * color is selected.
             * @param {number} ind The index in this.colors_ of the selected color.
             */
            setSelectedIndex(ind: number): void;
    
            /**
             * Gets the color that is currently selected in this color picker.
             * @return {?string} The hex string of the color selected, or null if no
             *     color is selected.
             */
            getSelectedColor(): string;
    
            /**
             * Sets which color is selected.  Noop if the color palette hasn't been created
             * yet.
             * @param {string} color The selected color.
             */
            setSelectedColor(color: string): void;
    
            /**
             * Returns true if the component is focusable, false otherwise.  The default
             * is true.  Focusable components always have a tab index and allocate a key
             * handler to handle keyboard events while focused.
             * @return {boolean} True iff the component is focusable.
             */
            isFocusable(): boolean;
    
            /**
             * Sets whether the component is focusable.  The default is true.
             * Focusable components always have a tab index and allocate a key handler to
             * handle keyboard events while focused.
             * @param {boolean} focusable True iff the component is focusable.
             */
            setFocusable(focusable: boolean): void;
    
            /**
             * Sets the focus to the color picker's palette.
             */
            focus(): void;
    } 
    
}

declare module goog.ui.ColorPicker {

    /**
     * Default number of columns in the color palette. May be overridden by calling
     * setSize.
     *
     * @type {number}
     */
    var DEFAULT_NUM_COLS: number;

    /**
     * Constants for event names.
     * @enum {string}
     */
    enum EventType { CHANGE } 

    /**
     * Returns an unrendered instance of the color picker.  The colors and layout
     * are a simple color grid, the same as the old Gmail color picker.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @return {!goog.ui.ColorPicker} The unrendered instance.
     */
    function createSimpleColorGrid(opt_domHelper?: goog.dom.DomHelper): goog.ui.ColorPicker;

    /**
     * Array of colors for a 7-cell wide simple-grid color picker.
     * @type {Array.<string>}
     */
    var SIMPLE_GRID_COLORS: string[];
}
