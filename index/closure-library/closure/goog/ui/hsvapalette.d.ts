/// <reference path="../../../globals.d.ts" />
/// <reference path="./hsvpalette.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class HsvaPalette extends HsvaPalette__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class HsvaPalette__Class extends goog.ui.HsvPalette__Class  { 
    
            /**
             * Creates an HSVA palette. Allows a user to select the hue, saturation,
             * value/brightness and alpha/opacity.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @param {string=} opt_color Optional initial color, without alpha (default is
             *     red).
             * @param {number=} opt_alpha Optional initial alpha (default is 1).
             * @param {string=} opt_class Optional base for creating classnames (default is
             *     'goog-hsva-palette').
             * @extends {goog.ui.HsvPalette}
             * @constructor
             * @final
             */
            constructor(opt_domHelper?: goog.dom.DomHelper, opt_color?: string, opt_alpha?: number, opt_class?: string);
    
            /**
             * Sets which color is selected and update the UI. The passed color should be
             * in #rrggbb format. The alpha value will be set to 1.
             * @param {number} alpha The selected alpha value, in [0, 1].
             */
            setAlpha(alpha: number): void;
    
            /**
             * Gets the color that is currently selected in this color picker, in #rrggbbaa
             * format.
             * @return {string} The string of the selected color with alpha.
             */
            getColorRgbaHex(): string;
    
            /**
             * Sets which color is selected and update the UI. The passed color should be
             * in #rrggbbaa format. The alpha value will be set to 1.
             * @param {string} color The selected color with alpha.
             */
            setColorRgbaHex(color: string): void;
    } 
    
}
