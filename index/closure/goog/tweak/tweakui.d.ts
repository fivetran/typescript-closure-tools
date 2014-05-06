/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/ui/zippy.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/tweak/entries.d.ts" />
/// <reference path="../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../closure/goog/tweak/registry.d.ts" />
/// <reference path="../../../closure/goog/tweak/tweak.d.ts" />

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

