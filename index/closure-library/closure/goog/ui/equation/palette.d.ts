/// <reference path="../../../../globals.d.ts" />
/// <reference path="../palette.d.ts" />
/// <reference path="./palettemanager.d.ts" />
/// <reference path="../paletterenderer.d.ts" />
/// <reference path="../../events/event.d.ts" />

declare module goog.ui.equation {

    class Palette extends Palette__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Palette__Class extends goog.ui.Palette__Class  { 
    
            /**
             * Constructs a new palette.
             * @param {goog.ui.equation.PaletteManager} paletteManager The
             *     manager of the palette.
             * @param {goog.ui.equation.Palette.Type} type The type of the
             *     palette.
             * @param {number} spriteX Coordinate of first icon in sprite.
             * @param {number} spriteY Coordinate of top of all icons in sprite.
             * @param {number} itemWidth Pixel width of each palette icon.
             * @param {number} itemHeight Pixel height of each palette icon.
             * @param {Array.<string>=} opt_actions An optional action list for palette
             *     elements. The number of actions determine the number of palette
             *     elements.
             * @param {goog.ui.PaletteRenderer=} opt_renderer Optional customized renderer,
             *     defaults to {@link goog.ui.PaletteRenderer}.
             * @extends {goog.ui.Palette}
             * @constructor
             */
            constructor(paletteManager: goog.ui.equation.PaletteManager, type: goog.ui.equation.Palette.Type, spriteX: number, spriteY: number, itemWidth: number, itemHeight: number, opt_actions?: string[], opt_renderer?: goog.ui.PaletteRenderer);
    
            /**
             * Returns the type of the palette.
             * @return {goog.ui.equation.Palette.Type} The type of the palette.
             */
            getType(): goog.ui.equation.Palette.Type;
    
            /**
             * Returns the palette manager.
             * @return {goog.ui.equation.PaletteManager} The palette manager
             *     that manages all the palette.
             */
            getPaletteManager(): goog.ui.equation.PaletteManager;
    
            /**
             * Returns actions for this palette.
             * @return {Array.<string>} The palette actions.
             */
            getActions(): string[];
    
            /**
             * Returns the action for a given index.
             * @param {number} index The index of the action to be retrieved.
             * @return {string?} The action for given index, or {@code null} if action is
             *     not found.
             */
            getAction(index: number): string;
    } 
    

    class PaletteEvent extends PaletteEvent__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class PaletteEvent__Class extends goog.events.Event__Class  { 
    
            /**
             * The event that palettes dispatches.
             * @param {string} type Type of the event.
             * @param {goog.ui.equation.Palette} palette The palette that the
             *     event is fired on.
             * @param {Element=} opt_target The optional target of the event.
             * @constructor
             * @extends {goog.events.Event}
             * @final
             */
            constructor(type: string, palette: goog.ui.equation.Palette, opt_target?: Element);
    
            /**
             * Returns the palette that this event is fired from.
             * @return {goog.ui.equation.Palette} The palette this event is
             *     fired from.
             */
            getPalette(): goog.ui.equation.Palette;
    } 
    

    class PaletteRenderer extends PaletteRenderer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class PaletteRenderer__Class extends goog.ui.PaletteRenderer__Class  { 
    
            /**
             * The renderer for palette.
             * @extends {goog.ui.PaletteRenderer}
             * @constructor
             */
            constructor();
    
            /**
             * Returns the CSS class name for the palette item.
             * @return {string} The CSS class name of the palette item.
             */
            getItemCssClass(): string;
    } 
    
}

declare module goog.ui.equation.Palette {

    /**
     * The type of possible palettes. They are made short to minimize JS size.
     * @enum {string}
     */
    enum Type { MENU, GREEK, SYMBOL, COMPARISON, MATH, ARROW } 

    /**
     * The CSS class name for the palette.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module goog.ui.equation.PaletteEvent {

    /**
     * The type of events that can be fired on palettes.
     * @enum {string}
     */
    enum Type { ACTION } 
}
