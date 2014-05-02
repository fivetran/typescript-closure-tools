// Generated Fri May  2 11:39:46 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.ui {

    /**
     * The renderer for {@link goog.ui.DatePicker}. Renders the date picker's
     * navigation header and footer.
     * @interface
     */
    interface DatePickerRenderer {
        renderNavigationRow(row: Element, simpleNavigation: boolean, showWeekNum: boolean, fullDateFormat: string): void;
        renderFooterRow(row: Element, showWeekNum: boolean): void;
    }
}

