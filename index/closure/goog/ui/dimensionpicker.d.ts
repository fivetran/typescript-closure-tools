// Generated Fri May  2 15:01:08 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../goog/i18n/bidi.d.ts" />
/// <reference path="../../goog/ui/dimensionpickerrenderer.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/ui/registry.d.ts" />
/// <reference path="../../goog/ui/decorate.d.ts" />
/// <reference path="../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/ui/control.d.ts" />

declare module goog.ui {

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
    class DimensionPicker extends goog.ui.GoogControl {
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
        setValue(columns: any /*number|goog.math.Size*/, opt_rows?: number): void;
    }
}

