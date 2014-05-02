// Generated Fri May  2 14:59:28 PDT 2014

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
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
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
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
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

declare module goog.ui {

    /**
     * Popup date picker widget. Fires goog.ui.PopupBase.EventType.SHOW or HIDE
     * events when its visibility changes.
     *
     * @param {goog.ui.DatePicker=} opt_datePicker Optional DatePicker.  This
     *     enables the use of a custom date-picker instance.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class PopupDatePicker extends goog.ui.Component {
        /**
         * Popup date picker widget. Fires goog.ui.PopupBase.EventType.SHOW or HIDE
         * events when its visibility changes.
         *
         * @param {goog.ui.DatePicker=} opt_datePicker Optional DatePicker.  This
         *     enables the use of a custom date-picker instance.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(opt_datePicker?: goog.ui.DatePicker, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {boolean} Whether the date picker is visible.
         */
        isVisible(): boolean;
    
        /**
         * @return {goog.ui.DatePicker} The date picker instance.
         */
        getDatePicker(): goog.ui.DatePicker;
    
        /**
         * @return {goog.date.Date?} The selected date, if any.  See
         *     goog.ui.DatePicker.getDate().
         */
        getDate(): goog.date.Date;
    
        /**
         * Sets the selected date.  See goog.ui.DatePicker.setDate().
         * @param {goog.date.Date?} date The date to select.
         */
        setDate(date: goog.date.Date): void;
    
        /**
         * @return {Element} The last element that triggered the popup.
         */
        getLastTarget(): Element;
    
        /**
         * Attaches the popup date picker to an element.
         * @param {Element} element The element to attach to.
         */
        attach(element: Element): void;
    
        /**
         * Detatches the popup date picker from an element.
         * @param {Element} element The element to detach from.
         */
        detach(element: Element): void;
    
        /**
         * Sets whether the date picker can automatically move focus to its key event
         * target when it is set to visible.
         * @param {boolean} allow Whether to allow auto focus.
         */
        setAllowAutoFocus(allow: boolean): void;
    
        /**
         * @return {boolean} Whether the date picker can automatically move focus to
         * its key event target when it is set to visible.
         */
        getAllowAutoFocus(): boolean;
    
        /**
         * Show the popup at the bottom-left corner of the specified element.
         * @param {Element} element Reference element for displaying the popup -- popup
         *     will appear at the bottom-left corner of this element.
         */
        showPopup(element: Element): void;
    
        /**
         * Hides this popup.
         */
        hidePopup(): void;
    }
}

