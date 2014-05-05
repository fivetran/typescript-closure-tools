// Generated Sun May  4 18:15:44 PDT 2014

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
/// <reference path="../../goog/ui/buttonrenderer.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/ui/nativebuttonrenderer.d.ts" />
/// <reference path="../../goog/ui/registry.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/ui/decorate.d.ts" />
/// <reference path="../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../goog/ui/control.d.ts" />

declare module goog.ui {

    /**
     * A button control, rendered as a native browser button by default.
     *
     * @param {goog.ui.ControlContent=} opt_content Text caption or existing DOM
     *     structure to display as the button's caption (if any).
     * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
     *     decorate the button; defaults to {@link goog.ui.NativeButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Button extends goog.ui.Control {
        /**
         * A button control, rendered as a native browser button by default.
         *
         * @param {goog.ui.ControlContent=} opt_content Text caption or existing DOM
         *     structure to display as the button's caption (if any).
         * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
         *     decorate the button; defaults to {@link goog.ui.NativeButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Control}
         */
        constructor(opt_content?: goog.ui.ControlContent, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns the value associated with the button.
         * @return {*} Button value (undefined if none).
         */
        getValue(): any;
    
        /**
         * Sets the value associated with the button, and updates its DOM.
         * @param {*} value New button value.
         */
        setValue(value: any): void;
    
        /**
         * Sets the value associated with the button.  Unlike {@link #setValue},
         * doesn't update the button's DOM.  Considered protected; to be called only
         * by renderer code during element decoration.
         * @param {*} value New button value.
         * @protected
         */
        setValueInternal(value: any): void;
    
        /**
         * Returns the tooltip for the button.
         * @return {string|undefined} Tooltip text (undefined if none).
         */
        getTooltip(): any /*string|any (undefined)*/;
    
        /**
         * Sets the tooltip for the button, and updates its DOM.
         * @param {string} tooltip New tooltip text.
         */
        setTooltip(tooltip: string): void;
    
        /**
         * Sets the tooltip for the button.  Unlike {@link #setTooltip}, doesn't update
         * the button's DOM.  Considered protected; to be called only by renderer code
         * during element decoration.
         * @param {string} tooltip New tooltip text.
         * @protected
         */
        setTooltipInternal(tooltip: string): void;
    
        /**
         * Collapses the border on one or both sides of the button, allowing it to be
         * combined with the adjancent button(s), forming a single UI componenet with
         * multiple targets.
         * @param {number} sides Bitmap of one or more {@link goog.ui.ButtonSide}s for
         *     which borders should be collapsed.
         */
        setCollapsed(sides: number): void;
    }
}

