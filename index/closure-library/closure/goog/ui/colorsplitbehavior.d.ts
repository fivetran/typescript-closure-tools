/// <reference path="../../../globals.d.ts" />
/// <reference path="./splitbehavior.d.ts" />
/// <reference path="./button.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class ColorSplitBehavior extends ColorSplitBehavior.__Class { }
    module ColorSplitBehavior {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.SplitBehavior.__Class {
    
            /**
             * Constructs a ColorSplitBehavior for combining a color button and a menu.
             * To use this, provide a goog.ui.ColorButton which will be attached with
             * a goog.ui.ColorMenuButton (with no caption).
             * Whenever a color is selected from the ColorMenuButton, it will be placed in
             * the ColorButton and the user can apply it over and over (by clicking the
             * ColorButton).
             * Primary use case - setting the color of text/background in a text editor.
             *
             * @param {!goog.ui.Button} colorButton A button to interact with a color menu
             *     button (preferably a goog.ui.ColorButton).
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
             *     document interaction.
             * @extends {goog.ui.SplitBehavior}
             * @constructor
             * @final
             */
            constructor(colorButton: goog.ui.Button, opt_domHelper?: goog.dom.DomHelper);
        }
    }
}
