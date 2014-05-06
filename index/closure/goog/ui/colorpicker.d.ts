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
/// <reference path="../../../closure/goog/ui/palette.d.ts" />
/// <reference path="../../../closure/goog/color/names.d.ts" />
/// <reference path="../../../closure/goog/color/color.d.ts" />
/// <reference path="../../../closure/goog/ui/colorpalette.d.ts" />

declare module goog.ui {

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
    class ColorPicker extends goog.ui._Component {
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
        setSize(size: any /*goog.math.Size|number*/): void;
    
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
     * @return {goog.ui.ColorPicker} The unrendered instance.
     */
    function createSimpleColorGrid(opt_domHelper?: goog.dom.DomHelper): goog.ui.ColorPicker;

    /**
     * Array of colors for a 7-cell wide simple-grid color picker.
     * @type {Array.<string>}
     */
    var SIMPLE_GRID_COLORS: string[];
}

