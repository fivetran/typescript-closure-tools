/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/graphics/path.d.ts" />
/// <reference path="../../../closure/goog/graphics/font.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/async/delay.d.ts" />
/// <reference path="../../../closure/goog/async/animationdelay.d.ts" />
/// <reference path="../../../closure/goog/fx/anim/anim.d.ts" />
/// <reference path="../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../closure/goog/fx/transitionbase.d.ts" />
/// <reference path="../../../closure/goog/fx/animation.d.ts" />
/// <reference path="../../../closure/goog/graphics/fill.d.ts" />
/// <reference path="../../../closure/goog/graphics/solidfill.d.ts" />
/// <reference path="../../../closure/goog/graphics/stroke.d.ts" />
/// <reference path="../../../closure/goog/graphics/lineargradient.d.ts" />
/// <reference path="../../../closure/goog/ui/gaugetheme.d.ts" />
/// <reference path="../../../closure/goog/fx/easing.d.ts" />
/// <reference path="../../../closure/goog/graphics/affinetransform.d.ts" />
/// <reference path="../../../closure/goog/graphics/element.d.ts" />
/// <reference path="../../../closure/goog/graphics/strokeandfillelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/rectelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/pathelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/groupelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/textelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/ellipseelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/imageelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/svgelement.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/graphics/abstractgraphics.d.ts" />
/// <reference path="../../../closure/goog/graphics/svggraphics.d.ts" />
/// <reference path="../../../closure/goog/graphics/vmlelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/vmlgraphics.d.ts" />
/// <reference path="../../../closure/goog/graphics/canvaselement.d.ts" />
/// <reference path="../../../closure/goog/graphics/canvasgraphics.d.ts" />
/// <reference path="../../../closure/goog/graphics/graphics.d.ts" />

declare module goog.ui {

    /**
     * Information on how to decorate a range in the gauge.
     * This is an internal-only class.
     * @param {number} fromValue The range start (minimal) value.
     * @param {number} toValue The range end (maximal) value.
     * @param {string} backgroundColor Color to fill the range background with.
     * @constructor
     * @final
     */
    class GaugeColoredRange {
        /**
         * Information on how to decorate a range in the gauge.
         * This is an internal-only class.
         * @param {number} fromValue The range start (minimal) value.
         * @param {number} toValue The range end (maximal) value.
         * @param {string} backgroundColor Color to fill the range background with.
         * @constructor
         * @final
         */
        constructor(fromValue: number, toValue: number, backgroundColor: string);
    }

    /**
     * A UI component that displays a gauge.
     * A gauge displayes a current value within a round axis that represents a
     * given range.
     * The gauge is built from an external border, and internal border inside it,
     * ticks and labels inside the internal border, and a needle that points to
     * the current value.
     * @param {number} width The width in pixels.
     * @param {number} height The height in pixels.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class Gauge extends goog.ui._Component {
        /**
         * A UI component that displays a gauge.
         * A gauge displayes a current value within a round axis that represents a
         * given range.
         * The gauge is built from an external border, and internal border inside it,
         * ticks and labels inside the internal border, and a needle that points to
         * the current value.
         * @param {number} width The width in pixels.
         * @param {number} height The height in pixels.
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
         *     document we want to render in.
         * @constructor
         * @extends {goog.ui.Component}
         * @final
         */
        constructor(width: number, height: number, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {number} The minimum value of the range.
         */
        getMinimum(): number;
    
        /**
         * Sets the minimum value of the range
         * @param {number} min The minimum value of the range.
         */
        setMinimum(min: number): void;
    
        /**
         * @return {number} The maximum value of the range.
         */
        getMaximum(): number;
    
        /**
         * Sets the maximum number of the range
         * @param {number} max The maximum value of the range.
         */
        setMaximum(max: number): void;
    
        /**
         * Sets the current value range displayed by the gauge.
         * @param {number} value The current value for the gauge. This value
         *     determines the position of the needle of the gauge.
         * @param {string=} opt_formattedValue The string value to show in the gauge.
         *     If not specified, no string value will be displayed.
         */
        setValue(value: number, opt_formattedValue?: string): void;
    
        /**
         * Sets the number of major tick sections and minor tick sections.
         * @param {number} majorUnits The number of major tick sections.
         * @param {number} minorUnits The number of minor tick sections for each major
         *     tick section.
         */
        setTicks(majorUnits: number, minorUnits: number): void;
    
        /**
         * Sets the labels of the major ticks.
         * @param {Array.<string>} tickLabels A text label for each major tick value.
         */
        setMajorTickLabels(tickLabels: string[]): void;
    
        /**
         * Sets the top title of the gauge.
         * The top title is displayed above the center.
         * @param {string} text The top title text.
         */
        setTitleTop(text: string): void;
    
        /**
         * Sets the bottom title of the gauge.
         * The top title is displayed below the center.
         * @param {string} text The bottom title text.
         */
        setTitleBottom(text: string): void;
    
        /**
         * Sets the font for displaying top and bottom titles.
         * @param {goog.graphics.Font} font The font for titles.
         */
        setTitleFont(font: goog.graphics.Font): void;
    
        /**
         * Sets the font for displaying the formatted value.
         * @param {goog.graphics.Font} font The font for displaying the value.
         */
        setValueFont(font: goog.graphics.Font): void;
    
        /**
         * Sets the color theme for drawing the gauge.
         * @param {goog.ui.GaugeTheme} theme The color theme to use.
         */
        setTheme(theme: goog.ui.GaugeTheme): void;
    
        /**
         * Set the background color for a range of values on the gauge.
         * @param {number} fromValue The lower (start) value of the colored range.
         * @param {number} toValue The higher (end) value of the colored range.
         * @param {string} color The color name to paint the range with. For example
         *     'red', '#ffcc00' or constants like goog.ui.Gauge.RED.
         */
        addBackgroundColor(fromValue: number, toValue: number, color: string): void;
    
        /**
         * Redraws the entire gauge.
         * Should be called after theme colors have been changed.
         */
        redraw(): void;
    }
}

declare module goog.ui.Gauge {

    /**
     * Constant for a background color for a gauge area.
     */
    var RED: any /*missing*/;

    /**
     * Constant for a background color for a gauge area.
     */
    var GREEN: any /*missing*/;

    /**
     * Constant for a background color for a gauge area.
     */
    var YELLOW: any /*missing*/;

    /**
     * The radius of the entire gauge from the canvas size.
     * @type {number}
     */
    var FACTOR_RADIUS_FROM_SIZE: number;

    /**
     * The ratio of internal gauge radius from entire radius.
     * The remaining area is the border around the gauge.
     * @type {number}
     */
    var FACTOR_MAIN_AREA: number;

    /**
     * The ratio of the colored background area for value ranges.
     * The colored area width is computed as
     * InternalRadius * (1 - FACTOR_COLOR_RADIUS)
     * @type {number}
     */
    var FACTOR_COLOR_RADIUS: number;

    /**
     * The ratio of the major ticks length start position, from the radius.
     * The major ticks length width is computed as
     * InternalRadius * (1 - FACTOR_MAJOR_TICKS)
     * @type {number}
     */
    var FACTOR_MAJOR_TICKS: number;

    /**
     * The ratio of the minor ticks length start position, from the radius.
     * The minor ticks length width is computed as
     * InternalRadius * (1 - FACTOR_MINOR_TICKS)
     * @type {number}
     */
    var FACTOR_MINOR_TICKS: number;

    /**
     * The length of the needle front (value facing) from the internal radius.
     * The needle front is the part of the needle that points to the value.
     * @type {number}
     */
    var FACTOR_NEEDLE_FRONT: number;

    /**
     * The length of the needle back relative to the internal radius.
     * The needle back is the part of the needle that points away from the value.
     * @type {number}
     */
    var FACTOR_NEEDLE_BACK: number;

    /**
     * The width of the needle front at the hinge.
     * This is the width of the curve control point, the actual width is
     * computed by the curve itself.
     * @type {number}
     */
    var FACTOR_NEEDLE_WIDTH: number;

    /**
     * The width (radius) of the needle hinge from the gauge radius.
     * @type {number}
     */
    var FACTOR_NEEDLE_HINGE: number;

    /**
     * The title font size (height) for titles relative to the internal radius.
     * @type {number}
     */
    var FACTOR_TITLE_FONT_SIZE: number;

    /**
     * The offset of the title from the center, relative to the internal radius.
     * @type {number}
     */
    var FACTOR_TITLE_OFFSET: number;

    /**
     * The formatted value font size (height) relative to the internal radius.
     * @type {number}
     */
    var FACTOR_VALUE_FONT_SIZE: number;

    /**
     * The title font size (height) for tick labels relative to the internal radius.
     * @type {number}
     */
    var FACTOR_TICK_LABEL_FONT_SIZE: number;

    /**
     * The offset of the formatted value down from the center, relative to the
     * internal radius.
     * @type {number}
     */
    var FACTOR_VALUE_OFFSET: number;

    /**
     * The font name for title text.
     * @type {string}
     */
    var TITLE_FONT_NAME: string;

    /**
     * The maximal size of a step the needle can move (percent from size of range).
     * If the needle needs to move more, it will be moved in animated steps, to
     * show a smooth transition between values.
     * @type {number}
     */
    var NEEDLE_MOVE_MAX_STEP: number;

    /**
     * Time in miliseconds for animating a move of the value pointer.
     * @type {number}
     */
    var NEEDLE_MOVE_TIME: number;

    /**
     * Tolerance factor for how much values can exceed the range (being too
     * low or too high). The value is presented as a position (percentage).
     * @type {number}
     */
    var MAX_EXCEED_POSITION_POSITION: number;
}

