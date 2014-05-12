/// <reference path="../../../../globals.d.ts" />
/// <reference path="./palette.d.ts" />
/// <reference path="./palettemanager.d.ts" />

declare module goog.ui.equation {

    class MenuPalette extends MenuPalette.__Class { }
    module MenuPalette {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.equation.Palette.__Class {
    
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
    }

    class MenuPaletteRenderer extends MenuPaletteRenderer.__Class { }
    module MenuPaletteRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.equation.PaletteRenderer.__Class {
    
            /**
             * The renderer for menu palette.
             * @extends {goog.ui.equation.PaletteRenderer}
             * @constructor
             * @final
             */
            constructor();
        }
    }
}

declare module goog.ui.equation.MenuPalette {

    /**
     * The CSS class name for the palette.
     * @type {string}
     */
    var CSS_CLASS: string;
}
