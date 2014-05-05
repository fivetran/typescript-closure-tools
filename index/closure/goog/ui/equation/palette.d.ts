// Generated Sun May  4 18:16:19 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/ui/selectionmodel.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/dom/nodeiterator.d.ts" />
/// <reference path="../../../goog/ui/paletterenderer.d.ts" />
/// <reference path="../../../goog/ui/registry.d.ts" />
/// <reference path="../../../goog/ui/decorate.d.ts" />
/// <reference path="../../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../../goog/events/keyhandler.d.ts" />
/// <reference path="../../../goog/ui/control.d.ts" />
/// <reference path="../../../goog/ui/palette.d.ts" />

declare module goog.ui.equation {

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
    class Palette extends goog.ui.Palette {
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
    class PaletteEvent extends goog.events.Event {
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

    /**
     * The renderer for palette.
     * @extends {goog.ui.PaletteRenderer}
     * @constructor
     */
    class PaletteRenderer extends goog.ui.PaletteRenderer {
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

