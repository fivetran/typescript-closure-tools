/// <reference path="../../../../globals.d.ts" />
/// <reference path="./palette.d.ts" />
/// <reference path="./palettemanager.d.ts" />

declare module goog.ui.equation {

    class ArrowPalette extends ArrowPalette.__Class { }
    module ArrowPalette {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.equation.Palette.__Class {
    
            /**
             * Constructs a new arrows palette.
             * @param {goog.ui.equation.PaletteManager} paletteManager The
             *     manager of the palette.
             * @extends {goog.ui.equation.Palette}
             * @constructor
             * @final
             */
            constructor(paletteManager: goog.ui.equation.PaletteManager);
        }
    }
}
