// Generated Thu May  1 16:43:08 PDT 2014

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
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../goog/ui/buttonside.d.ts" />

declare module goog.ui.ButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.Button}s.  Extends the superclass with
     * the following button-specific API methods:
     * <ul>
     *   <li>{@code getValue} - returns the button element's value
     *   <li>{@code setValue} - updates the button element to reflect its new value
     *   <li>{@code getTooltip} - returns the button element's tooltip text
     *   <li>{@code setTooltip} - updates the button element's tooltip text
     *   <li>{@code setCollapsed} - removes one or both of the button element's
     *       borders
     * </ul>
     * For alternate renderers, see {@link goog.ui.NativeButtonRenderer},
     * {@link goog.ui.CustomButtonRenderer}, and {@link goog.ui.FlatButtonRenderer}.
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class ButtonRenderer extends goog.ui.ControlRenderer {
        /**
         * Default renderer for {@link goog.ui.Button}s.  Extends the superclass with
         * the following button-specific API methods:
         * <ul>
         *   <li>{@code getValue} - returns the button element's value
         *   <li>{@code setValue} - updates the button element to reflect its new value
         *   <li>{@code getTooltip} - returns the button element's tooltip text
         *   <li>{@code setTooltip} - updates the button element's tooltip text
         *   <li>{@code setCollapsed} - removes one or both of the button element's
         *       borders
         * </ul>
         * For alternate renderers, see {@link goog.ui.NativeButtonRenderer},
         * {@link goog.ui.CustomButtonRenderer}, and {@link goog.ui.FlatButtonRenderer}.
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /**
         * Takes a button's root element, and returns the value associated with it.
         * No-op in the base class.
         * @param {Element} element The button's root element.
         * @return {string|undefined} The button's value (undefined if none).
         */
        getValue: any /*missing*/;
    
        /**
         * Takes a button's root element and a value, and updates the element to reflect
         * the new value.  No-op in the base class.
         * @param {Element} element The button's root element.
         * @param {string} value New value.
         */
        setValue: any /*missing*/;
    
        /**
         * Takes a button's root element, and returns its tooltip text.
         * @param {Element} element The button's root element.
         * @return {string|undefined} The tooltip text.
         */
        getTooltip(element: Element): any /*string|any (undefined)*/;
    
        /**
         * Takes a button's root element and a tooltip string, and updates the element
         * with the new tooltip.
         * @param {Element} element The button's root element.
         * @param {string} tooltip New tooltip text.
         * @protected
         */
        setTooltip(element: Element, tooltip: string): void;
    
        /**
         * Collapses the border on one or both sides of the button, allowing it to be
         * combined with the adjacent button(s), forming a single UI componenet with
         * multiple targets.
         * @param {goog.ui.Button} button Button to update.
         * @param {number} sides Bitmap of one or more {@link goog.ui.ButtonSide}s for
         *     which borders should be collapsed.
         * @protected
         */
        setCollapsed(button: goog.ui.Button, sides: number): void;
    }
}

