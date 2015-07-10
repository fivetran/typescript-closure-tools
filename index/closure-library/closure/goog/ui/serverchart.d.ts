/// <reference path="../../../globals.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="../uri/uri.d.ts" />
/// <reference path="../events/event.d.ts" />

declare module goog.ui {

    class ServerChart extends ServerChart__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ServerChart__Class extends goog.ui.Component__Class  { 
    
            /**
             * Will construct a chart using Google's chartserver.
             *
             * @param {goog.ui.ServerChart.ChartType} type The chart type.
             * @param {number=} opt_width The width of the chart.
             * @param {number=} opt_height The height of the chart.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM Helper.
             * @param {string=} opt_uri Optional uri used to connect to the chart server, if
             *     different than goog.ui.ServerChart.CHART_SERVER_SCHEME_INDEPENDENT_URI.
             * @constructor
             * @extends {goog.ui.Component}
             *
             * @deprecated Google Chart Server has been deprecated. See
             *     https://developers.google.com/chart/image/ for details.
             * @final
             */
            constructor(type: goog.ui.ServerChart.ChartType, opt_width?: number, opt_height?: number, opt_domHelper?: goog.dom.DomHelper, opt_uri?: string);
    
            /**
             * Updates the image if any of the data or settings have changed.
             */
            updateChart(): void;
    
            /**
             * Sets the URI of the chart.
             *
             * @param {goog.Uri} uri The chart URI.
             */
            setUri(uri: goog.Uri): void;
    
            /**
             * Returns the URI of the chart.
             *
             * @return {goog.Uri} The chart URI.
             */
            getUri(): goog.Uri;
    
            /**
             * Returns the upper limit on the length of the chart image URI, after encoding.
             * If the URI's length equals or exceeds it, goog.ui.ServerChart.UriTooLongEvent
             * is dispatched on the goog.ui.ServerChart object.
             *
             * @return {number} The chart URI length limit.
             */
            getUriLengthLimit(): number;
    
            /**
             * Sets the upper limit on the length of the chart image URI, after encoding.
             * If the URI's length equals or exceeds it, goog.ui.ServerChart.UriTooLongEvent
             * is dispatched on the goog.ui.ServerChart object.
             *
             * @param {number} uriLengthLimit The chart URI length limit.
             */
            setUriLengthLimit(uriLengthLimit: number): void;
    
            /**
             * Sets the 'chg' parameter of the chart Uri.
             * This is used by various types of charts to specify Grids.
             *
             * @param {string} value Value for the 'chg' parameter in the chart Uri.
             */
            setGridParameter(value: string): void;
    
            /**
             * Returns the 'chg' parameter of the chart Uri.
             * This is used by various types of charts to specify Grids.
             *
             * @return {string|undefined} The 'chg' parameter of the chart Uri.
             */
            getGridParameter(): string|any /*undefined*/;
    
            /**
             * Sets the 'chm' parameter of the chart Uri.
             * This is used by various types of charts to specify Markers.
             *
             * @param {string} value Value for the 'chm' parameter in the chart Uri.
             */
            setMarkerParameter(value: string): void;
    
            /**
             * Returns the 'chm' parameter of the chart Uri.
             * This is used by various types of charts to specify Markers.
             *
             * @return {string|undefined} The 'chm' parameter of the chart Uri.
             */
            getMarkerParameter(): string|any /*undefined*/;
    
            /**
             * Sets the 'chp' parameter of the chart Uri.
             * This is used by various types of charts to specify certain options.
             * e.g., finance charts use this to designate which line is the 0 axis.
             *
             * @param {string|number} value Value for the 'chp' parameter in the chart Uri.
             */
            setMiscParameter(value: string|number): void;
    
            /**
             * Returns the 'chp' parameter of the chart Uri.
             * This is used by various types of charts to specify certain options.
             * e.g., finance charts use this to designate which line is the 0 axis.
             *
             * @return {string|undefined} The 'chp' parameter of the chart Uri.
             */
            getMiscParameter(): string|any /*undefined*/;
    
            /**
             * Sets the background fill.
             *
             * @param {Array.<Object>} fill An array of background fill specification
             *     objects. Each object may have the following properties:
             *     {string} area The area to fill, either 'bg' for background or 'c' for
             *         chart area.  The default is 'bg'.
             *     {string} color (required) The color of the background fill.
             *     // TODO(user): Add support for gradient/stripes, which requires
             *     // a different object structure.
             */
            setBackgroundFill(fill: Object[]): void;
    
            /**
             * Returns the background fill.
             *
             * @return {!Array.<Object>} An array of background fill specifications.
             *     If the fill specification string is in an unsupported format, the method
             *    returns an empty array.
             */
            getBackgroundFill(): Object[];
    
            /**
             * Sets the encoding type.
             *
             * @param {goog.ui.ServerChart.EncodingType} type Desired data encoding type.
             */
            setEncodingType(type: goog.ui.ServerChart.EncodingType): void;
    
            /**
             * Gets the encoding type.
             *
             * @return {goog.ui.ServerChart.EncodingType} The encoding type.
             */
            getEncodingType(): goog.ui.ServerChart.EncodingType;
    
            /**
             * Sets the chart type.
             *
             * @param {goog.ui.ServerChart.ChartType} type The desired chart type.
             */
            setType(type: goog.ui.ServerChart.ChartType): void;
    
            /**
             * Returns the chart type.
             *
             * @return {goog.ui.ServerChart.ChartType} The chart type.
             */
            getType(): goog.ui.ServerChart.ChartType;
    
            /**
             * Sets the chart size.
             *
             * @param {number=} opt_width Optional chart width, defaults to 300.
             * @param {number=} opt_height Optional chart height, defaults to 150.
             */
            setSize(opt_width?: number, opt_height?: number): void;
    
            /**
             * Returns the chart size.
             *
             * @return {!Array.<string>} [Width, Height].
             */
            getSize(): string[];
    
            /**
             * Sets the minimum value of the chart.
             *
             * @param {number} minValue The minimum value of the chart.
             */
            setMinValue(minValue: number): void;
    
            /**
             * @return {number} The minimum value of the chart.
             */
            getMinValue(): number;
    
            /**
             * Sets the maximum value of the chart.
             *
             * @param {number} maxValue The maximum value of the chart.
             */
            setMaxValue(maxValue: number): void;
    
            /**
             * @return {number} The maximum value of the chart.
             */
            getMaxValue(): number;
    
            /**
             * Sets the chart margins.
             *
             * @param {number} leftMargin The size in pixels of the left margin.
             * @param {number} rightMargin The size in pixels of the right margin.
             * @param {number} topMargin The size in pixels of the top margin.
             * @param {number} bottomMargin The size in pixels of the bottom margin.
             */
            setMargins(leftMargin: number, rightMargin: number, topMargin: number, bottomMargin: number): void;
    
            /**
             * Sets the number of grid lines along the X-axis.
             *
             * @param {number} gridlines The number of X-axis grid lines.
             */
            setGridX(gridlines: number): void;
    
            /**
             * @return {number} The number of gridlines along the X-axis.
             */
            getGridX(): number;
    
            /**
             * Sets the number of grid lines along the Y-axis.
             *
             * @param {number} gridlines The number of Y-axis grid lines.
             */
            setGridY(gridlines: number): void;
    
            /**
             * @return {number} The number of gridlines along the Y-axis.
             */
            getGridY(): number;
    
            /**
             * Sets the X Labels for the chart.
             *
             * @param {Array.<string>} labels The X Labels for the chart.
             */
            setXLabels(labels: string[]): void;
    
            /**
             * @return {Array.<string>} The X Labels for the chart.
             */
            getXLabels(): string[];
    
            /**
             * @return {boolean} Whether the chart is a bar chart.
             */
            isBarChart(): boolean;
    
            /**
             * @return {boolean} Whether the chart is a pie chart.
             */
            isPieChart(): boolean;
    
            /**
             * @return {boolean} Whether the chart is a grouped bar chart.
             */
            isGroupedBarChart(): boolean;
    
            /**
             * @return {boolean} Whether the chart is a horizontal bar chart.
             */
            isHorizontalBarChart(): boolean;
    
            /**
             * @return {boolean} Whether the chart is a line chart.
             */
            isLineChart(): boolean;
    
            /**
             * @return {boolean} Whether the chart is a map.
             */
            isMap(): boolean;
    
            /**
             * @return {boolean} Whether the chart is a stacked bar chart.
             */
            isStackedBarChart(): boolean;
    
            /**
             * @return {boolean} Whether the chart is a vertical bar chart.
             */
            isVerticalBarChart(): boolean;
    
            /**
             * Sets the Left Labels for the chart.
             * NOTE: The array should start with the lowest value, and then
             *       move progessively up the axis. So if you want labels
             *       from 0 to 100 with 0 at bottom of the graph, then you would
             *       want to pass something like [0,25,50,75,100].
             *
             * @param {Array.<string>} labels The Left Labels for the chart.
             */
            setLeftLabels(labels: string[]): void;
    
            /**
             * @return {Array.<string>} The Left Labels for the chart.
             */
            getLeftLabels(): string[];
    
            /**
             * Sets the given ChartServer parameter.
             *
             * @param {goog.ui.ServerChart.UriParam} key The ChartServer parameter to set.
             * @param {string} value The value to set for the ChartServer parameter.
             */
            setParameterValue(key: goog.ui.ServerChart.UriParam, value: string): void;
    
            /**
             * Removes the given ChartServer parameter.
             *
             * @param {goog.ui.ServerChart.UriParam} key The ChartServer parameter to
             *     remove.
             */
            removeParameter(key: goog.ui.ServerChart.UriParam): void;
    
            /**
             * Sets the Right Labels for the chart.
             * NOTE: The array should start with the lowest value, and then
             *       move progessively up the axis. So if you want labels
             *       from 0 to 100 with 0 at bottom of the graph, then you would
             *       want to pass something like [0,25,50,75,100].
             *
             * @param {Array.<string>} labels The Right Labels for the chart.
             */
            setRightLabels(labels: string[]): void;
    
            /**
             * @return {Array.<string>} The Right Labels for the chart.
             */
            getRightLabels(): string[];
    
            /**
             * Sets the position relative to the chart where the legend is to be displayed.
             *
             * @param {goog.ui.ServerChart.LegendPosition} value Legend position.
             */
            setLegendPosition(value: goog.ui.ServerChart.LegendPosition): void;
    
            /**
             * Returns the position relative to the chart where the legend is to be
             * displayed.
             *
             * @return {goog.ui.ServerChart.LegendPosition} Legend position.
             */
            getLegendPosition(): goog.ui.ServerChart.LegendPosition;
    
            /**
             * Sets the number of "visible" data sets. All data sets that come after
             * the visible data set are not drawn as part of the chart. Instead, they
             * are available for positioning markers.
            
             * @param {?number} n The number of visible data sets, or null if all data
             * sets are to be visible.
             */
            setNumVisibleDataSets(n: number): void;
    
            /**
             * Returns the number of "visible" data sets. All data sets that come after
             * the visible data set are not drawn as part of the chart. Instead, they
             * are available for positioning markers.
             *
             * @return {?number} The number of visible data sets, or null if all data
             * sets are visible.
             */
            getNumVisibleDataSets(): number;
    
            /**
             * Sets the weight function for a Venn Diagram along with the associated
             *     colors and legend text. Weights are assigned as follows:
             *     weights[0] is relative area of circle A.
             *     weights[1] is relative area of circle B.
             *     weights[2] is relative area of circle C.
             *     weights[3] is relative area of overlap of circles A and B.
             *     weights[4] is relative area of overlap of circles A and C.
             *     weights[5] is relative area of overlap of circles B and C.
             *     weights[6] is relative area of overlap of circles A, B and C.
             * For a two circle Venn Diagram the weights are assigned as follows:
             *     weights[0] is relative area of circle A.
             *     weights[1] is relative area of circle B.
             *     weights[2] is relative area of overlap of circles A and B.
             *
             * @param {Array.<number>} weights The relative weights of the circles.
             * @param {Array.<string>=} opt_legendText The legend labels for the circles.
             * @param {Array.<string>=} opt_colors The colors for the circles.
             */
            setVennSeries(weights: number[], opt_legendText?: string[], opt_colors?: string[]): void;
    
            /**
             * Sets the title of the chart.
             *
             * @param {string} title The chart title.
             */
            setTitle(title: string): void;
    
            /**
             * Sets the size of the chart title.
             *
             * @param {number} size The title size, in points.
             */
            setTitleSize(size: number): void;
    
            /**
             * @return {number} size The title size, in points.
             */
            getTitleSize(): number;
    
            /**
             * Sets the color of the chart title.
             *
             * NOTE: The color string should NOT have a '#' at the beginning of it.
             *
             * @param {string} color The hex value for the title color.
             */
            setTitleColor(color: string): void;
    
            /**
             * @return {string} color The hex value for the title color.
             */
            getTitleColor(): string;
    
            /**
             * Adds a legend to the chart.
             *
             * @param {Array.<string>} legend The legend to add.
             */
            setLegend(legend: string[]): void;
    
            /**
             * Sets the data scaling.
             * NOTE: This also changes the encoding type because data scaling will
             *     only work with {@code goog.ui.ServerChart.EncodingType.TEXT}
             *     encoding.
             * @param {number} minimum The lowest number to apply to the data.
             * @param {number} maximum The highest number to apply to the data.
             */
            setDataScaling(minimum: number, maximum: number): void;
    
            /**
             * Sets the widths of the bars and the spaces between the bars in a bar
             * chart.
             * NOTE: If the space between groups is specified but the space between
             *     bars is left undefined, the space between groups will be interpreted
             *     as the space between bars because this is the behavior exposed
             *     in the external developers guide.
             * @param {number} barWidth The width of a bar in pixels.
             * @param {number=} opt_spaceBars The width of the space between
             *     bars in a group in pixels.
             * @param {number=} opt_spaceGroups The width of the space between
             *     groups.
             */
            setBarSpaceWidths(barWidth: number, opt_spaceBars?: number, opt_spaceGroups?: number): void;
    
            /**
             * Specifies that the bar width in a bar chart should be calculated
             * automatically given the space available in the chart, while optionally
             * setting the spaces between the bars.
             * NOTE: If the space between groups is specified but the space between
             *     bars is left undefined, the space between groups will be interpreted
             *     as the space between bars because this is the behavior exposed
             *     in the external developers guide.
             * @param {number=} opt_spaceBars The width of the space between
             *     bars in a group in pixels.
             * @param {number=} opt_spaceGroups The width of the space between
             *     groups.
             */
            setAutomaticBarWidth(opt_spaceBars?: number, opt_spaceGroups?: number): void;
    
            /**
             * Adds a multi-axis to the chart, and sets its type. Multiple axes of the same
             * type can be added.
             *
             * @param {goog.ui.ServerChart.MultiAxisType} axisType The desired axis type.
             * @return {number} The index of the newly inserted axis, suitable for feeding
             *     to the setMultiAxis*() functions.
             */
            addMultiAxis(axisType: goog.ui.ServerChart.MultiAxisType): number;
    
            /**
             * Returns the axis type for the given axis, or all of them in an array if the
             * axis number is not given.
             *
             * @param {number=} opt_axisNumber The axis index, as returned by addMultiAxis.
             * @return {goog.ui.ServerChart.MultiAxisType|
             *     Array.<goog.ui.ServerChart.MultiAxisType>}
             *     The axis type for the given axis, or all of them in an array if the
             *     axis number is not given.
             */
            getMultiAxisType(opt_axisNumber?: number): goog.ui.ServerChart.MultiAxisType|goog.ui.ServerChart.MultiAxisType[];
    
            /**
             * Sets the label text (usually multiple values) for a given axis, overwriting
             * any existing values.
             *
             * @param {number} axisNumber The axis index, as returned by addMultiAxis.
             * @param {Array.<string>} labelText The actual label text to be added.
             */
            setMultiAxisLabelText(axisNumber: number, labelText: string[]): void;
    
            /**
             * Returns the label text, or all of them in a two-dimensional array if the
             * axis number is not given.
             *
             * @param {number=} opt_axisNumber The axis index, as returned by addMultiAxis.
             * @return {Object|Array.<string>} The label text, or all of them in a
             *     two-dimensional array if the axis number is not given.
             */
            getMultiAxisLabelText(opt_axisNumber?: number): Object|string[];
    
            /**
             * Sets the label positions for a given axis, overwriting any existing values.
             * The label positions are assumed to be floating-point numbers within the
             * range of the axis.
             *
             * @param {number} axisNumber The axis index, as returned by addMultiAxis.
             * @param {Array.<number>} labelPosition The actual label positions to be added.
             */
            setMultiAxisLabelPosition(axisNumber: number, labelPosition: number[]): void;
    
            /**
             * Returns the label positions for a given axis number, or all of them in a
             * two-dimensional array if the axis number is not given.
             *
             * @param {number=} opt_axisNumber The axis index, as returned by addMultiAxis.
             * @return {Object|Array.<number>} The label positions for a given axis number,
             *     or all of them in a two-dimensional array if the axis number is not
             *     given.
             */
            getMultiAxisLabelPosition(opt_axisNumber?: number): Object|number[];
    
            /**
             * Sets the label range for a given axis, overwriting any existing range.
             * The default range is from 0 to 100. If the start value is larger than the
             * end value, the axis direction is reversed.  rangeStart and rangeEnd must
             * be two different finite numbers.
             *
             * @param {number} axisNumber The axis index, as returned by addMultiAxis.
             * @param {number} rangeStart The new start of the range.
             * @param {number} rangeEnd The new end of the range.
             * @param {number=} opt_interval The interval between axis labels.
             */
            setMultiAxisRange(axisNumber: number, rangeStart: number, rangeEnd: number, opt_interval?: number): void;
    
            /**
             * Returns the label range for a given axis number as a two-element array of
             * (range start, range end), or all of them in a two-dimensional array if the
             * axis number is not given.
             *
             * @param {number=} opt_axisNumber The axis index, as returned by addMultiAxis.
             * @return {Object|Array.<number>} The label range for a given axis number as a
             *     two-element array of (range start, range end), or all of them in a
             *     two-dimensional array if the axis number is not given.
             */
            getMultiAxisRange(opt_axisNumber?: number): Object|number[];
    
            /**
             * Sets the label style for a given axis, overwriting any existing style.
             * The default style is as follows: Default is x-axis labels are centered, left
             * hand y-axis labels are right aligned, right hand y-axis labels are left
             * aligned. The font size and alignment are optional parameters.
             *
             * NOTE: The color string should NOT have a '#' at the beginning of it.
             *
             * @param {number} axisNumber The axis index, as returned by addMultiAxis.
             * @param {string} color The hex value for this label's color.
             * @param {number=} opt_fontSize The label font size, in pixels.
             * @param {goog.ui.ServerChart.MultiAxisAlignment=} opt_alignment The label
             *     alignment.
             * @param {goog.ui.ServerChart.AxisDisplayType=} opt_axisDisplay The axis
             *     line and ticks.
             */
            setMultiAxisLabelStyle(axisNumber: number, color: string, opt_fontSize?: number, opt_alignment?: goog.ui.ServerChart.MultiAxisAlignment, opt_axisDisplay?: goog.ui.ServerChart.AxisDisplayType): void;
    
            /**
             * Returns the label style for a given axis number as a one- to three-element
             * array, or all of them in a two-dimensional array if the axis number is not
             * given.
             *
             * @param {number=} opt_axisNumber The axis index, as returned by addMultiAxis.
             * @return {Object|Array.<number>} The label style for a given axis number as a
             *     one- to three-element array, or all of them in a two-dimensional array if
             *     the axis number is not given.
             */
            getMultiAxisLabelStyle(opt_axisNumber?: number): Object|number[];
    
            /**
             * Adds a data set.
             * NOTE: The color string should NOT have a '#' at the beginning of it.
             *
             * @param {Array.<number|null>} data An array of numbers (values can be
             *     NaN or null).
             * @param {string} color The hex value for this data set's color.
             * @param {string=} opt_legendText The legend text, if any, for this data
             *     series. NOTE: If specified, all previously added data sets must also
             *     have a legend text.
             */
            addDataSet(data: number|any /*null*/[], color: string, opt_legendText?: string): void;
    
            /**
             * Clears the data sets from the graph. All data, including the colors and
             * legend text, is cleared.
             */
            clearDataSets(): void;
    
            /**
             * Returns the given data set or all of them in a two-dimensional array if
             * the set number is not given.
             *
             * @param {number=} opt_setNumber Optional data set number to get.
             * @return {Array} The given data set or all of them in a two-dimensional array
             *     if the set number is not given.
             */
            getData(opt_setNumber?: number): any[];
    } 
    
}

declare module goog.ui.ServerChart {

    class UriTooLongEvent extends UriTooLongEvent__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class UriTooLongEvent__Class extends goog.events.Event__Class  { 
    
            /**
             * Class for the event dispatched on the ServerChart when the resulting URI
             * exceeds the URI length limit.
             * @constructor
             * @param {string} uri The overly-long URI string.
             * @extends {goog.events.Event}
             * @final
             */
            constructor(uri: string);
    
            /**
             * The overly-long URI string.
             * @type {string}
             */
            uri: string;
    } 
    

    /**
     * Base scheme-independent URI for the chart renderer.
     * @type {string}
     */
    var CHART_SERVER_SCHEME_INDEPENDENT_URI: string;

    /**
     * Base HTTP URI for the chart renderer.
     * @type {string}
     */
    var CHART_SERVER_HTTP_URI: string;

    /**
     * Base HTTPS URI for the chart renderer.
     * @type {string}
     */
    var CHART_SERVER_HTTPS_URI: string;

    /**
     * Base URI for the chart renderer.
     * @type {string}
     * @deprecated Use
     *     {@link goog.ui.ServerChart.CHART_SERVER_SCHEME_INDEPENDENT_URI},
     *     {@link goog.ui.ServerChart.CHART_SERVER_HTTP_URI} or
     *     {@link goog.ui.ServerChart.CHART_SERVER_HTTPS_URI} instead.
     */
    var CHART_SERVER_URI: string;

    /**
     * The 0 - 1.0 ("fraction of the range") value to use when getMinValue() ==
     * getMaxValue(). This determines, for example, the vertical position
     * of the line in a flat line-chart.
     * @type {number}
     */
    var DEFAULT_NORMALIZATION: number;

    /**
     * Enum of chart data encoding types
     *
     * @enum {string}
     */
    enum EncodingType { AUTOMATIC, EXTENDED, SIMPLE, TEXT } 

    /**
     * Enum of chart types with their short names used by the chartserver.
     *
     * @enum {string}
     */
    enum ChartType { BAR, CLOCK, CONCENTRIC_PIE, FILLEDLINE, FINANCE, GOOGLEOMETER, HORIZONTAL_GROUPED_BAR, HORIZONTAL_STACKED_BAR, LINE, MAP, MAPUSA, MAPWORLD, PIE, PIE3D, RADAR, SCATTER, SPARKLINE, VENN, VERTICAL_GROUPED_BAR, VERTICAL_STACKED_BAR, XYLINE } 

    /**
     * Enum of multi-axis types.
     *
     * @enum {string}
     */
    enum MultiAxisType { X_AXIS, LEFT_Y_AXIS, RIGHT_Y_AXIS, TOP_AXIS } 

    /**
     * Enum of multi-axis alignments.
     *
     * @enum {number}
     */
    enum MultiAxisAlignment { ALIGN_LEFT, ALIGN_CENTER, ALIGN_RIGHT } 

    /**
     * Enum of legend positions.
     *
     * @enum {string}
     */
    enum LegendPosition { TOP, BOTTOM, LEFT, RIGHT } 

    /**
     * Enum of line and tick options for an axis.
     *
     * @enum {string}
     */
    enum AxisDisplayType { LINE_AND_TICKS, LINE, TICKS } 

    /**
     * Enum of chart maximum values in pixels, as listed at:
     * http://code.google.com/apis/chart/basics.html
     *
     * @enum {number}
     */
    enum MaximumValue { WIDTH, HEIGHT, MAP_WIDTH, MAP_HEIGHT, TOTAL_AREA } 

    /**
     * Enum of ChartServer URI parameters.
     *
     * @enum {string}
     */
    enum UriParam { BACKGROUND_FILL, BAR_HEIGHT, DATA, DATA_COLORS, DATA_LABELS, DATA_SCALING, DIGITAL_SIGNATURE, GEOGRAPHICAL_REGION, GRID, LABEL_COLORS, LEFT_Y_LABELS, LEGEND, LEGEND_POSITION, LEGEND_TEXTS, LINE_STYLES, MARGINS, MARKERS, MISC_PARAMS, MULTI_AXIS_LABEL_POSITION, MULTI_AXIS_LABEL_TEXT, MULTI_AXIS_RANGE, MULTI_AXIS_STYLE, MULTI_AXIS_TYPES, RIGHT_LABELS, RIGHT_LABEL_POSITIONS, SIZE, TITLE, TITLE_FORMAT, TYPE, X_AXIS_STYLE, X_LABELS } 

    /**
     * Array of possible ChartServer data values
     * @type {string}
     */
    var CHART_VALUES: string;

    /**
     * Array of extended ChartServer data values
     * @type {string}
     */
    var CHART_VALUES_EXTENDED: string;

    /**
     * Upper bound for extended values
     */
    var EXTENDED_UPPER_BOUND: any /*missing*/;

    /**
     * Event types dispatched by the ServerChart object
     * @enum {string}
     */
    enum Event { URI_TOO_LONG } 
}
