/// <reference path="../../../../globals.d.ts" />
/// <reference path="./palette.d.ts" />
/// <reference path="./palettemanager.d.ts" />

declare module goog.ui.equation {

    class SymbolPalette extends goog.ui.equation.Palette {
    
        /**
         * Constructs a new symbols palette.
         * @param {goog.ui.equation.PaletteManager} paletteManager The
         *     manager of the palette.
         * @extends {goog.ui.equation.Palette}
         * @constructor
         * @final
         */
        constructor(paletteManager: goog.ui.equation.PaletteManager);
    }
}
