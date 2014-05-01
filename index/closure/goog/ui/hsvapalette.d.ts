// Generated Thu May  1 12:37:09 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
/// <reference path="../../goog/color/names.d.ts" />
/// <reference path="../../goog/color/color.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/inputhandler.d.ts" />
/// <reference path="../../goog/style/bidi.d.ts" />
/// <reference path="../../goog/ui/hsvpalette.d.ts" />
/// <reference path="../../goog/color/alpha.d.ts" />

declare module goog.ui {

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
    class HsvaPalette extends goog.ui.HsvPalette {
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
