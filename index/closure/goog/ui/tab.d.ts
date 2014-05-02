// Generated Fri May  2 15:00:06 PDT 2014

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
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/ui/registry.d.ts" />
/// <reference path="../../goog/ui/decorate.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/ui/control.d.ts" />
/// <reference path="../../goog/ui/tabrenderer.d.ts" />

declare module goog.ui {

    /**
     * Tab control, designed to be hosted in a {@link goog.ui.TabBar}.  The tab's
     * DOM may be different based on the configuration of the containing tab bar,
     * so tabs should only be rendered or decorated as children of a tab bar.
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the tab's caption (if any).
     * @param {goog.ui.TabRenderer=} opt_renderer Optional renderer used to render
     *     or decorate the tab.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Tab extends goog.ui.Control {
        /**
         * Tab control, designed to be hosted in a {@link goog.ui.TabBar}.  The tab's
         * DOM may be different based on the configuration of the containing tab bar,
         * so tabs should only be rendered or decorated as children of a tab bar.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to
         *     display as the tab's caption (if any).
         * @param {goog.ui.TabRenderer=} opt_renderer Optional renderer used to render
         *     or decorate the tab.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Control}
         */
        constructor(content: goog.ui.ControlContent, opt_renderer?: goog.ui.TabRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {string|undefined} Tab tooltip text (if any).
         */
        getTooltip(): any /*string|any (undefined)*/;
    
        /**
         * Sets the tab tooltip text.  If the tab has already been rendered, updates
         * its tooltip.
         * @param {string} tooltip New tooltip text.
         */
        setTooltip(tooltip: string): void;
    
        /**
         * Sets the tab tooltip text.  Considered protected; to be called only by the
         * renderer during element decoration.
         * @param {string} tooltip New tooltip text.
         * @protected
         */
        setTooltipInternal(tooltip: string): void;
    }
}

