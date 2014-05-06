/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/ui/selectionmodel.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodeiterator.d.ts" />
/// <reference path="../../../../closure/goog/ui/paletterenderer.d.ts" />
/// <reference path="../../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/control.d.ts" />
/// <reference path="../../../../closure/goog/ui/palette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/palette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/symbolpalette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/greekpalette.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/comparisonpalette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/mathpalette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/menupalette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/arrowpalette.d.ts" />

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

