/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/i18n/datetimepatterns.d.ts" />
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
/// <reference path="../../../closure/goog/i18n/datetimesymbols.d.ts" />
/// <reference path="../../../closure/goog/date/datelike.d.ts" />
/// <reference path="../../../closure/goog/date/date.d.ts" />
/// <reference path="../../../closure/goog/ui/datepickerrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/defaultdatepickerrenderer.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/date/daterange.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../closure/goog/i18n/timezone.d.ts" />
/// <reference path="../../../closure/goog/i18n/datetimeformat.d.ts" />

declare module goog.ui {

    /**
     * DatePicker widget. Allows a single date to be selected from a calendar like
     * view.
     *
     * @param {goog.date.Date|Date=} opt_date Date to initialize the date picker
     *     with, defaults to the current date.
     * @param {Object=} opt_dateTimeSymbols Date and time symbols to use.
     *     Defaults to goog.i18n.DateTimeSymbols if not set.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.DatePickerRenderer=} opt_renderer Optional Date picker
     *     renderer.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class DatePicker extends goog.ui._Component {
        /**
         * DatePicker widget. Allows a single date to be selected from a calendar like
         * view.
         *
         * @param {goog.date.Date|Date=} opt_date Date to initialize the date picker
         *     with, defaults to the current date.
         * @param {Object=} opt_dateTimeSymbols Date and time symbols to use.
         *     Defaults to goog.i18n.DateTimeSymbols if not set.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {goog.ui.DatePickerRenderer=} opt_renderer Optional Date picker
         *     renderer.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_date?: any /*goog.date.Date|Date*/, opt_dateTimeSymbols?: Object, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.DatePickerRenderer);
    
        /**
         * @deprecated Use isInDocument.
         */
        isCreated: any /*missing*/;
    
        /**
         * @return {number} The first day of week, 0 = Monday, 6 = Sunday.
         */
        getFirstWeekday(): number;
    
        /**
         * Returns the class name associated with specified weekday.
         * @param {number} wday The week day number to get the class name for.
         * @return {string} The class name associated with specified weekday.
         */
        getWeekdayClass(wday: number): string;
    
        /**
         * @return {boolean} Whether a fixed number of weeks should be showed. If not
         *     only weeks for the current month will be shown.
         */
        getShowFixedNumWeeks(): boolean;
    
        /**
         * @return {boolean} Whether a days from the previous and/or next month should
         *     be shown.
         */
        getShowOtherMonths(): boolean;
    
        /**
         * @return {boolean} Whether a the extra week(s) added always should be at the
         *     end. Only applicable if a fixed number of weeks are shown.
         */
        getExtraWeekAtEnd(): boolean;
    
        /**
         * @return {boolean} Whether week numbers should be shown.
         */
        getShowWeekNum(): boolean;
    
        /**
         * @return {boolean} Whether weekday names should be shown.
         */
        getShowWeekdayNames(): boolean;
    
        /**
         * @return {boolean} Whether none is a valid selection.
         */
        getAllowNone(): boolean;
    
        /**
         * @return {boolean} Whether the today button should be shown.
         */
        getShowToday(): boolean;
    
        /**
         * Returns base CSS class. This getter is used to get base CSS class part.
         * All CSS class names in component are created as:
         *   goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
         * @return {string} Base CSS class.
         */
        getBaseCssClass(): string;
    
        /**
         * Sets the first day of week
         *
         * @param {number} wday Week day, 0 = Monday, 6 = Sunday.
         */
        setFirstWeekday(wday: number): void;
    
        /**
         * Sets class name associated with specified weekday.
         *
         * @param {number} wday Week day, 0 = Monday, 6 = Sunday.
         * @param {string} className Class name.
         */
        setWeekdayClass(wday: number, className: string): void;
    
        /**
         * Sets whether a fixed number of weeks should be showed. If not only weeks
         * for the current month will be showed.
         *
         * @param {boolean} b Whether a fixed number of weeks should be showed.
         */
        setShowFixedNumWeeks(b: boolean): void;
    
        /**
         * Sets whether a days from the previous and/or next month should be shown.
         *
         * @param {boolean} b Whether a days from the previous and/or next month should
         *     be shown.
         */
        setShowOtherMonths(b: boolean): void;
    
        /**
         * Sets the range of dates which may be selected by the user.
         *
         * @param {goog.date.DateRange} dateRange The range of selectable dates.
         */
        setUserSelectableDateRange(dateRange: goog.date.DateRange): void;
    
        /**
         * Sets whether the picker should use a simple navigation menu that only
         * contains controls for navigating to the next and previous month. The default
         * navigation menu contains controls for navigating to the next/previous month,
         * next/previous year, and menus for jumping to specific months and years.
         *
         * @param {boolean} b Whether to use a simple navigation menu.
         */
        setUseSimpleNavigationMenu(b: boolean): void;
    
        /**
         * Sets whether a the extra week(s) added always should be at the end. Only
         * applicable if a fixed number of weeks are shown.
         *
         * @param {boolean} b Whether a the extra week(s) added always should be at the
         *     end.
         */
        setExtraWeekAtEnd(b: boolean): void;
    
        /**
         * Sets whether week numbers should be shown.
         *
         * @param {boolean} b Whether week numbers should be shown.
         */
        setShowWeekNum(b: boolean): void;
    
        /**
         * Sets whether weekday names should be shown.
         *
         * @param {boolean} b Whether weekday names should be shown.
         */
        setShowWeekdayNames(b: boolean): void;
    
        /**
         * Sets whether the picker uses narrow weekday names ('M', 'T', 'W', ...).
         *
         * The default behavior is to use short names ('Mon', 'Tue', 'Wed', ...).
         *
         * @param {boolean} b Whether to use narrow weekday names.
         */
        setUseNarrowWeekdayNames(b: boolean): void;
    
        /**
         * Sets whether none is a valid selection.
         *
         * @param {boolean} b Whether none is a valid selection.
         */
        setAllowNone(b: boolean): void;
    
        /**
         * Sets whether the today button should be shown.
         *
         * @param {boolean} b Whether the today button should be shown.
         */
        setShowToday(b: boolean): void;
    
        /**
         * Sets the decorator function. The function should have the interface of
         *   {string} f({goog.date.Date});
         * and return a String representing a CSS class to decorate the cell
         * corresponding to the date specified.
         *
         * @param {Function} f The decorator function.
         */
        setDecorator(f: Function): void;
    
        /**
         * Sets whether the date will be printed in long format. In long format, dates
         * such as '1' will be printed as '01'.
         *
         * @param {boolean} b Whethere dates should be printed in long format.
         */
        setLongDateFormat(b: boolean): void;
    
        /**
         * Changes the active month to the previous one.
         */
        previousMonth(): void;
    
        /**
         * Changes the active month to the next one.
         */
        nextMonth(): void;
    
        /**
         * Changes the active year to the previous one.
         */
        previousYear(): void;
    
        /**
         * Changes the active year to the next one.
         */
        nextYear(): void;
    
        /**
         * Selects the current date.
         */
        selectToday(): void;
    
        /**
         * Clears the selection.
         */
        selectNone(): void;
    
        /**
         * @return {goog.date.Date} The active month displayed.
         */
        getActiveMonth(): goog.date.Date;
    
        /**
         * @return {goog.date.Date} The selected date or null if nothing is selected.
         */
        getDate(): goog.date.Date;
    
        /**
         * Sets the selected date.
         *
         * @param {goog.date.Date|Date} date Date to select or null to select nothing.
         */
        setDate(date: any /*goog.date.Date|Date*/): void;
    
        /**
         * @deprecated Use decorate instead.
         */
        create: any /*missing*/;
    }

    /**
     * Object representing a date picker event.
     *
     * @param {string} type Event type.
     * @param {goog.ui.DatePicker} target Date picker initiating event.
     * @param {goog.date.Date} date Selected date.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class DatePickerEvent extends goog.events.Event {
        /**
         * Object representing a date picker event.
         *
         * @param {string} type Event type.
         * @param {goog.ui.DatePicker} target Date picker initiating event.
         * @param {goog.date.Date} date Selected date.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(type: string, target: goog.ui.DatePicker, date: goog.date.Date);
    }
}

declare module goog.ui.DatePicker {

    /**
     * Constants for event names
     *
     * @type {Object}
     */
    var Events: Object;
}

