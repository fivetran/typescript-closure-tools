/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/ui/datepickerrenderer.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.DatePicker}. Renders the date picker's
     * navigation header and footer.
     *
     * @param {string} baseCssClass Name of base CSS class of the date picker.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper.
     * @constructor
     * @implements {goog.ui.DatePickerRenderer}
     */
    class DefaultDatePickerRenderer implements goog.ui.DatePickerRenderer {
        /**
         * Default renderer for {@link goog.ui.DatePicker}. Renders the date picker's
         * navigation header and footer.
         *
         * @param {string} baseCssClass Name of base CSS class of the date picker.
         * @param {goog.dom.DomHelper=} opt_domHelper DOM helper.
         * @constructor
         * @implements {goog.ui.DatePickerRenderer}
         */
        constructor(baseCssClass: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns the dom helper that is being used on this component.
         * @return {!goog.dom.DomHelper} The dom helper used on this component.
         */
        getDomHelper(): goog.dom.DomHelper;
    
        /**
         * Returns base CSS class. This getter is used to get base CSS class part.
         * All CSS class names in component are created as:
         *   goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
         * @return {string} Base CSS class.
         */
        getBaseCssClass(): string;
    
        /**
         * Render the navigation row.
         *
         * @param {!Element} row The parent element to render the component into.
         * @param {boolean} simpleNavigation Whether the picker should render a simple
         *     navigation menu that only contains controls for navigating to the next
         *     and previous month. The default navigation menu contains controls for
         *     navigating to the next/previous month, next/previous year, and menus for
         *     jumping to specific months and years.
         * @param {boolean} showWeekNum Whether week numbers should be shown.
         * @param {string} fullDateFormat The full date format.
         *     {@see goog.i18n.DateTimeSymbols}.
         */
        renderNavigationRow(row: Element, simpleNavigation: boolean, showWeekNum: boolean, fullDateFormat: string): void;
    
        /**
         * Render the footer row.
         *
         * @param {!Element} row The parent element to render the component into.
         * @param {boolean} showWeekNum Whether week numbers should be shown.
         */
        renderFooterRow(row: Element, showWeekNum: boolean): void;
    }
}

