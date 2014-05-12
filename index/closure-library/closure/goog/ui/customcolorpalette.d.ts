/// <reference path="../../../globals.d.ts" />
/// <reference path="./colorpalette.d.ts" />
/// <reference path="./paletterenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class CustomColorPalette extends CustomColorPalette.__Class { }
    module CustomColorPalette {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ColorPalette.__Class {
    
            /**
             * A custom color palette is a grid of color swatches and a button that allows
             * the user to add additional colors to the palette
             *
             * @param {Array.<string>} initColors Array of initial colors to populate the
             *     palette with.
             * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
             *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.ColorPalette}
             * @final
             */
            constructor(initColors: string[], opt_renderer?: goog.ui.PaletteRenderer, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Prompts the user to enter a custom color.  Currently uses a window.prompt
             * but could be updated to use a dialog box with a WheelColorPalette.
             */
            promptForCustomColor(): void;
        }
    }
}
