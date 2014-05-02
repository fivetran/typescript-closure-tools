// Generated Fri May  2 11:38:24 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
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
/// <reference path="../../../goog/math/size.d.ts" />
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
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/ui/registry.d.ts" />
/// <reference path="../../../goog/ui/decorate.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/events/keyhandler.d.ts" />
/// <reference path="../../../goog/ui/control.d.ts" />
/// <reference path="../../../goog/ui/tabrenderer.d.ts" />
/// <reference path="../../../goog/ui/tab.d.ts" />
/// <reference path="../../../goog/ui/containerrenderer.d.ts" />
/// <reference path="../../../goog/ui/tabbarrenderer.d.ts" />
/// <reference path="../../../goog/ui/container.d.ts" />
/// <reference path="../../../goog/ui/tabbar.d.ts" />

declare module goog.ui.editor {

    /**
     * Creates a new Editor-style tab pane.
     * @param {goog.dom.DomHelper} dom The dom helper for the window to create this
     *     tab pane in.
     * @param {string=} opt_caption Optional caption of the tab pane.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class TabPane extends goog.ui.Component {
        /**
         * Creates a new Editor-style tab pane.
         * @param {goog.dom.DomHelper} dom The dom helper for the window to create this
         *     tab pane in.
         * @param {string=} opt_caption Optional caption of the tab pane.
         * @constructor
         * @extends {goog.ui.Component}
         * @final
         */
        constructor(dom: goog.dom.DomHelper, opt_caption?: string);
    
        /**
         * @return {string} The ID of the content element for the current tab.
         */
        getCurrentTabId(): string;
    
        /**
         * Selects the tab with the given id.
         * @param {string} id Id of the tab to select.
         */
        setSelectedTabId(id: string): void;
    
        /**
         * Adds a tab to the tab pane.
         * @param {string} id The id of the tab to add.
         * @param {string} caption The caption of the tab.
         * @param {string} tooltip The tooltip for the tab.
         * @param {string} groupName for the radio button group.
         * @param {Element} content The content element to show when this tab is
         *     selected.
         */
        addTab(id: string, caption: string, tooltip: string, groupName: string, content: Element): void;
    }
}

