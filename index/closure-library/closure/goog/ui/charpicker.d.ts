/// <reference path="../../../globals.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="../i18n/charpickerdata.d.ts" />
/// <reference path="../i18n/uchar/namefetcher.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class CharPicker extends CharPicker.__Class { }
    module CharPicker {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Component.__Class {
    
            /**
             * Character Picker Class. This widget can be used to pick any Unicode
             * character by traversing a category-subcategory structure or by inputing its
             * hex value.
             *
             * See charpicker.html demo for example usage.
             * @param {goog.i18n.CharPickerData} charPickerData Category names and charlist.
             * @param {!goog.i18n.uChar.NameFetcher} charNameFetcher Object which fetches
             *     the names of the characters that are shown in the widget. These names
             *     may be stored locally or come from an external source.
             * @param {Array.<string>=} opt_recents List of characters to be displayed in
             *     resently selected characters area.
             * @param {number=} opt_initCategory Sequence number of initial category.
             * @param {number=} opt_initSubcategory Sequence number of initial subcategory.
             * @param {number=} opt_rowCount Number of rows in the grid.
             * @param {number=} opt_columnCount Number of columns in the grid.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.Component}
             * @final
             */
            constructor(charPickerData: goog.i18n.CharPickerData, charNameFetcher: goog.i18n.uChar.NameFetcher, opt_recents?: string[], opt_initCategory?: number, opt_initSubcategory?: number, opt_rowCount?: number, opt_columnCount?: number, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Gets the last selected character.
             * @return {?string} The last selected character.
             */
            getSelectedChar(): string;
    
            /**
             * Gets the list of characters user selected recently.
             * @return {Array.<string>} The recent character list.
             */
            getRecentChars(): string[];
    
            /**
             * Gets the user inputed unicode character.
             * @return {string} Unicode character inputed by user.
             */
            getInputChar(): string;
        }
    }
}
