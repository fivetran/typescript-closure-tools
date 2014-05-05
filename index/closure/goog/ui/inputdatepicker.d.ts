// Generated Sun May  4 18:16:27 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
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
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/fx/transition.d.ts" />
/// <reference path="../../goog/ui/popupbase.d.ts" />
/// <reference path="../../goog/style/bidi.d.ts" />
/// <reference path="../../goog/positioning/positioning.d.ts" />
/// <reference path="../../goog/positioning/abstractposition.d.ts" />
/// <reference path="../../goog/positioning/clientposition.d.ts" />
/// <reference path="../../goog/positioning/viewportclientposition.d.ts" />
/// <reference path="../../goog/positioning/absoluteposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../goog/positioning/viewportposition.d.ts" />
/// <reference path="../../goog/ui/popup.d.ts" />
/// <reference path="../../goog/i18n/datetimepatterns.d.ts" />
/// <reference path="../../goog/i18n/datetimesymbols.d.ts" />
/// <reference path="../../goog/date/datelike.d.ts" />
/// <reference path="../../goog/date/date.d.ts" />
/// <reference path="../../goog/ui/datepickerrenderer.d.ts" />
/// <reference path="../../goog/ui/defaultdatepickerrenderer.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/date/daterange.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/i18n/timezone.d.ts" />
/// <reference path="../../goog/i18n/datetimeformat.d.ts" />
/// <reference path="../../goog/ui/datepicker.d.ts" />
/// <reference path="../../goog/ui/popupdatepicker.d.ts" />

declare module goog.ui {

    /**
     * Input date picker widget.
     *
     * @param {goog.i18n.DateTimeFormat} dateTimeFormatter A formatter instance
     *     used to format the date picker's date for display in the input element.
     * @param {goog.i18n.DateTimeParse} dateTimeParser A parser instance used to
     *     parse the input element's string as a date to set the picker.
     * @param {goog.ui.DatePicker=} opt_datePicker Optional DatePicker.  This
     *     enables the use of a custom date-picker instance.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class InputDatePicker extends goog.ui.Component {
        /**
         * Input date picker widget.
         *
         * @param {goog.i18n.DateTimeFormat} dateTimeFormatter A formatter instance
         *     used to format the date picker's date for display in the input element.
         * @param {goog.i18n.DateTimeParse} dateTimeParser A parser instance used to
         *     parse the input element's string as a date to set the picker.
         * @param {goog.ui.DatePicker=} opt_datePicker Optional DatePicker.  This
         *     enables the use of a custom date-picker instance.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(dateTimeFormatter: goog.i18n.DateTimeFormat, dateTimeParser: goog.i18n.DateTimeParse, opt_datePicker?: goog.ui.DatePicker, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns the PopupDatePicker's internal DatePicker instance.  This can be
         * used to customize the date picker's styling.
         *
         * @return {goog.ui.DatePicker} The internal DatePicker instance.
         */
        getDatePicker(): goog.ui.DatePicker;
    
        /**
         * Returns the PopupDatePicker instance.
         *
         * @return {goog.ui.PopupDatePicker} Popup instance.
         */
        getPopupDatePicker(): goog.ui.PopupDatePicker;
    
        /**
         * Returns the selected date, if any.  Compares the dates from the date picker
         * and the input field, causing them to be synced if different.
         * @return {goog.date.Date?} The selected date, if any.
         */
        getDate(): goog.date.Date;
    
        /**
         * Sets the selected date.  See goog.ui.PopupDatePicker.setDate().
         * @param {goog.date.Date?} date The date to set.
         */
        setDate(date: goog.date.Date): void;
    
        /**
         * Sets the value of the input element.  This can be overridden to support
         * alternative types of input setting.
         *
         * @param {string} value The value to set.
         */
        setInputValue(value: string): void;
    
        /**
         * Returns the value of the input element.  This can be overridden to support
         * alternative types of input getting.
         *
         * @return {string} The input value.
         */
        getInputValue(): string;
    
        /**
         * Sets the element that the PopupDatePicker should be parented to. If not set,
         * defaults to the body element of the page.
         * @param {Element} el The element that the PopupDatePicker should be parented
         *     to.
         */
        setPopupParentElement(el: Element): void;
    
        /**
         * See goog.ui.PopupDatePicker.showPopup().
         * @param {Element} element Reference element for displaying the popup -- popup
         *     will appear at the bottom-left corner of this element.
         */
        showForElement(element: Element): void;
    
        /**
         * See goog.ui.PopupDatePicker.hidePopup().
         */
        hidePopup(): void;
    }
}

