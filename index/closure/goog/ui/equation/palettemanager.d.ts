// Generated Thu May  1 21:04:31 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
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
/// <reference path="../../../goog/ui/equation/palette.d.ts" />
/// <reference path="../../../goog/ui/equation/symbolpalette.d.ts" />
/// <reference path="../../../goog/ui/equation/greekpalette.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/ui/equation/comparisonpalette.d.ts" />
/// <reference path="../../../goog/ui/equation/mathpalette.d.ts" />
/// <reference path="../../../goog/ui/equation/menupalette.d.ts" />
/// <reference path="../../../goog/ui/equation/arrowpalette.d.ts" />

declare module goog.ui.equation {

    /**
     * Constructs the palette manager that manages all the palettes in Equation
     * Editor.
     * @param {!goog.dom.DomHelper} domHelper The DOM helper to be used for
     *     document interaction.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class PaletteManager extends goog.events.EventTarget {
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

