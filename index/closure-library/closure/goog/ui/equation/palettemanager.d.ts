/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/eventtarget.d.ts" />
/// <reference path="../../dom/dom.d.ts" />
/// <reference path="./palette.d.ts" />

declare module goog.ui.equation {

    class PaletteManager extends PaletteManager.__Class { }
    module PaletteManager {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * Constructs the palette manager that manages all the palettes in Equation
             * Editor.
             * @param {!goog.dom.DomHelper} domHelper The DOM helper to be used for
             *     document interaction.
             * @constructor
             * @extends {goog.events.EventTarget}
             * @final
             */
            constructor(domHelper: goog.dom.DomHelper);
    
            /**
             * Clears the deactivation timer.  This is used to prevent palette manager
             * deactivation when mouse pointer is moved outside palettes and moved back
             * quickly inside a grace period.
             */
            stopDeactivation(): void;
    
            /**
             * Returns the palette instance of given type.
             * @param {goog.ui.equation.Palette.Type} type The type of palette
             *     to get.
             * @return {!goog.ui.equation.Palette} The palette instance of given
             *     type. A new instance will be created.  If the instance doesn't exist.
             */
            getPalette(type: goog.ui.equation.Palette.Type): goog.ui.equation.Palette;
    
            /**
             * Sets the palette instance of given type to be the active one.
             * @param {goog.ui.equation.Palette.Type} type The type of the
             *     palette to set active.
             * @return {!goog.ui.equation.Palette} The palette instance of given
             *     type. A new instance will be created, if the instance doesn't exist.
             */
            setActive(type: goog.ui.equation.Palette.Type): goog.ui.equation.Palette;
    
            /**
             * Returns the active palette.
             * @return {goog.ui.equation.Palette} The active palette.
             */
            getActive(): goog.ui.equation.Palette;
    
            /**
             * Starts the deactivation of open palette.
             * This method has a slight delay before doing the real deactivation.  This
             * helps prevent sudden disappearing of palettes when user moves mouse outside
             * them just briefly (and maybe accidentally).  If you really want to deactivate
             * the active palette, use {@link #deactivateNow()} instead.
             */
            deactivate(): void;
    
            /**
             * Deactivate the open palette immediately.
             */
            deactivateNow(): void;
    
            /**
             * @return {!goog.dom.DomHelper} This object's DOM helper.
             */
            getDomHelper(): goog.dom.DomHelper;
        }
    }
}
