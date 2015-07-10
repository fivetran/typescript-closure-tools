/// <reference path="../../../../globals.d.ts" />
/// <reference path="./palette.d.ts" />
/// <reference path="./palettemanager.d.ts" />

declare module goog.ui.equation {

    class MenuPalette extends MenuPalette__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MenuPalette__Class extends goog.ui.equation.Palette__Class  { 
    
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
    

    class MenuPaletteRenderer extends MenuPaletteRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MenuPaletteRenderer__Class extends goog.ui.equation.PaletteRenderer__Class  { 
    
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
