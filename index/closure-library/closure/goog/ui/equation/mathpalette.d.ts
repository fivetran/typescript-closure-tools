/// <reference path="../../../../globals.d.ts" />
/// <reference path="./palette.d.ts" />
/// <reference path="./palettemanager.d.ts" />

declare module goog.ui.equation {

    class MathPalette extends MathPalette__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MathPalette__Class extends goog.ui.equation.Palette__Class  { 
    
            /**
             * Constructs a new math palette.
             * @param {goog.ui.equation.PaletteManager} paletteManager The
             *     manager of the palette.
             * @extends {goog.ui.equation.Palette}
             * @constructor
             * @final
             */
            constructor(paletteManager: goog.ui.equation.PaletteManager);
    } 
    
}
