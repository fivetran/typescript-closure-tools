/// <reference path="../../../../globals.d.ts" />
/// <reference path="./palette.d.ts" />
/// <reference path="./palettemanager.d.ts" />

declare module goog.ui.equation {

    class GreekPalette extends __GreekPalette { }
    class __GreekPalette extends goog.ui.equation.__Palette {
    
        /**
         * Constructs a new Greek symbols palette.
         * @param {goog.ui.equation.PaletteManager} paletteManager The
         *     manager of the palette.
         * @extends {goog.ui.equation.Palette}
         * @constructor
         * @final
         */
        constructor(paletteManager: goog.ui.equation.PaletteManager);
    }
}
