/// <reference path="../../../../globals.d.ts" />
/// <reference path="./palette.d.ts" />
/// <reference path="./palettemanager.d.ts" />
/// <reference path="./palette.d.ts" />

declare module goog.ui.equation {

    class MenuPalette extends __MenuPalette { }
    class __MenuPalette extends goog.ui.equation.__Palette {
    
        /**
         * Constructs a new menu palette.
         * @param {goog.ui.equation.PaletteManager} paletteManager The
         *     manager of the palette.
         * @extends {goog.ui.equation.Palette}
         * @constructor
         * @final
         */
        constructor(paletteManager: goog.ui.equation.PaletteManager);
    }

    class MenuPaletteRenderer extends __MenuPaletteRenderer { }
    class __MenuPaletteRenderer extends goog.ui.equation.__PaletteRenderer {
    
        /**
         * The renderer for menu palette.
         * @extends {goog.ui.equation.PaletteRenderer}
         * @constructor
         * @final
         */
        constructor();
    }
}

declare module goog.ui.equation.MenuPalette {

    /**
     * The CSS class name for the palette.
     * @type {string}
     */
    var CSS_CLASS: string;
}
