// Generated Fri May  2 15:01:02 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
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
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />

declare module goog.ui.TabRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.Tab}s, based on the {@code TabPane} code.
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class GoogTabRenderer extends goog.ui.GoogControlRenderer {
        /**
         * Default renderer for {@link goog.ui.Tab}s, based on the {@code TabPane} code.
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /**
         * Takes a tab's root element, and returns its tooltip text, or the empty
         * string if the element has no tooltip.
         * @param {Element} element The tab's root element.
         * @return {string} The tooltip text (empty string if none).
         */
        getTooltip(element: Element): string;
    
        /**
         * Takes a tab's root element and a tooltip string, and updates the element
         * with the new tooltip.  If the new tooltip is null or undefined, sets the
         * element's title to the empty string.
         * @param {Element} element The tab's root element.
         * @param {string|null|undefined} tooltip New tooltip text (if any).
         */
        setTooltip(element: Element, tooltip: any /*string|any (null)|any (undefined)*/): void;
    }

    class TabRenderer extends GoogTabRenderer { }
}

