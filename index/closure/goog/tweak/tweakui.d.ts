// Generated Thu May  1 21:06:15 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
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
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/ui/zippy.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/tweak/entries.d.ts" />
/// <reference path="../../goog/uri/utils.d.ts" />
/// <reference path="../../goog/tweak/registry.d.ts" />
/// <reference path="../../goog/tweak/tweak.d.ts" />

declare module goog.tweak.TweakUi {

    /**
     * Creates a TweakUi if tweaks are enabled.
     * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
     * @return {!Element|undefined} The root UI element or undefined if tweaks are
     *     not enabled.
     */
    function create(opt_domHelper?: goog.dom.DomHelper): any /*Element|any (undefined)*/;

    /**
     * Creates a TweakUi inside of a show/hide link.
     * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
     * @return {!Element|undefined} The root UI element or undefined if tweaks are
     *     not enabled.
     */
    function createCollapsible(opt_domHelper?: goog.dom.DomHelper): any /*Element|any (undefined)*/;
}

declare module goog.tweak {

    /**
     * A UI for editing tweak settings / clicking tweak actions.
     * @param {!goog.tweak.Registry} registry The registry to render.
     * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
     * @constructor
     * @final
     */
    class TweakUi {
        /**
         * A UI for editing tweak settings / clicking tweak actions.
         * @param {!goog.tweak.Registry} registry The registry to render.
         * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
         * @constructor
         * @final
         */
        constructor(registry: goog.tweak.Registry, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {!Element} The root element. Must not be called before render().
         */
        getRootElement(): Element;
    
        /**
         * Creates the element to display when the UI is visible.
         * @return {!Element} The root element.
         */
        render(): Element;
    }

    /**
     * The body of the tweaks UI and also used for BooleanGroup.
     * @param {!Array.<!goog.tweak.BaseEntry>} entries The entries to show in the
     *     panel.
     * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
     * @constructor
     * @final
     */
    class EntriesPanel {
        /**
         * The body of the tweaks UI and also used for BooleanGroup.
         * @param {!Array.<!goog.tweak.BaseEntry>} entries The entries to show in the
         *     panel.
         * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
         * @constructor
         * @final
         */
        constructor(entries: goog.tweak.BaseEntry[], opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {!Element} Returns the expanded element. Must not be called before
         *     render().
         */
        getRootElement(): Element;
    
        /**
         * Creates and returns the expanded element.
         * The markup looks like:
         * <div>
         *   <a>Show Descriptions</a>
         *   <div>
         *      ...
         *      {endElement}
         *   </div>
         * </div>
         * @param {Element|DocumentFragment=} opt_endElement Element to insert after all
         *     tweak entries.
         * @return {!Element} The root element for the panel.
         */
        render(opt_endElement?: any /*Element|DocumentFragment*/): Element;
    
        /**
         * Inserts the given entry into the panel.
         * @param {!goog.tweak.BaseEntry} entry The entry to insert.
         */
        insertEntry(entry: goog.tweak.BaseEntry): void;
    
        /**
         * Show all entry descriptions (has the same effect as clicking on all ?'s).
         */
        toggleAllDescriptions(): void;
    }
}

