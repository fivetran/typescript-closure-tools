/// <reference path="../../../globals.d.ts" />
/// <reference path="./separator.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class MenuSeparator extends __MenuSeparator { }
    class __MenuSeparator extends goog.ui.__Separator {
    
        /**
         * Class representing a menu separator.  A menu separator extends {@link
         * goog.ui.Separator} by always setting its renderer to {@link
         * goog.ui.MenuSeparatorRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
         *     document interactions.
         * @constructor
         * @extends {goog.ui.Separator}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    }
}
