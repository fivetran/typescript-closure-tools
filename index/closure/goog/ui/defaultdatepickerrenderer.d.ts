// Generated Sat May  3 12:16:14 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/ui/datepickerrenderer.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />

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
    }
}

