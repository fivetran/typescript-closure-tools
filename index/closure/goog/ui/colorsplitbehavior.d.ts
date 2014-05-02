// Generated Thu May  1 17:22:09 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/ui/registry.d.ts" />
/// <reference path="../../goog/ui/containerrenderer.d.ts" />
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
/// <reference path="../../goog/ui/decorate.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/ui/control.d.ts" />
/// <reference path="../../goog/ui/menuseparatorrenderer.d.ts" />
/// <reference path="../../goog/ui/separator.d.ts" />
/// <reference path="../../goog/ui/menurenderer.d.ts" />
/// <reference path="../../goog/style/bidi.d.ts" />
/// <reference path="../../goog/positioning/positioning.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/useragent/product.d.ts" />
/// <reference path="../../goog/ui/menuseparator.d.ts" />
/// <reference path="../../goog/ui/menuitemrenderer.d.ts" />
/// <reference path="../../goog/ui/menuitem.d.ts" />
/// <reference path="../../goog/ui/container.d.ts" />
/// <reference path="../../goog/ui/menuheaderrenderer.d.ts" />
/// <reference path="../../goog/ui/menuheader.d.ts" />
/// <reference path="../../goog/ui/menu.d.ts" />
/// <reference path="../../goog/positioning/abstractposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../goog/positioning/menuanchoredposition.d.ts" />
/// <reference path="../../goog/ui/buttonside.d.ts" />
/// <reference path="../../goog/ui/buttonrenderer.d.ts" />
/// <reference path="../../goog/ui/nativebuttonrenderer.d.ts" />
/// <reference path="../../goog/ui/button.d.ts" />
/// <reference path="../../goog/ui/cssnames.d.ts" />
/// <reference path="../../goog/ui/custombuttonrenderer.d.ts" />
/// <reference path="../../goog/ui/menubuttonrenderer.d.ts" />
/// <reference path="../../goog/ui/menubutton.d.ts" />
/// <reference path="../../goog/color/names.d.ts" />
/// <reference path="../../goog/color/color.d.ts" />
/// <reference path="../../goog/ui/colormenubuttonrenderer.d.ts" />
/// <reference path="../../goog/ui/selectionmodel.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../goog/dom/nodeiterator.d.ts" />
/// <reference path="../../goog/ui/paletterenderer.d.ts" />
/// <reference path="../../goog/ui/palette.d.ts" />
/// <reference path="../../goog/ui/colorpalette.d.ts" />
/// <reference path="../../goog/ui/colormenubutton.d.ts" />
/// <reference path="../../goog/ui/splitbehavior.d.ts" />

declare module goog.ui {

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
    class ColorSplitBehavior extends goog.ui.SplitBehavior {
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

