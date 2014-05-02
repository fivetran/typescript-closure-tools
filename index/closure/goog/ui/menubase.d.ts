// Generated Thu May  1 16:42:00 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
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
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/style/bidi.d.ts" />
/// <reference path="../../goog/positioning/positioning.d.ts" />
/// <reference path="../../goog/positioning/abstractposition.d.ts" />
/// <reference path="../../goog/positioning/clientposition.d.ts" />
/// <reference path="../../goog/positioning/viewportclientposition.d.ts" />
/// <reference path="../../goog/positioning/absoluteposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/fx/transition.d.ts" />
/// <reference path="../../goog/ui/popupbase.d.ts" />
/// <reference path="../../goog/positioning/viewportposition.d.ts" />
/// <reference path="../../goog/ui/popup.d.ts" />

declare module goog.ui.MenuBase {

    /**
     * Events fired by the Menu
     */
    var Events: any /*missing*/;
}

declare module goog.ui.MenuBase.Events {

    /**
     * Event fired by the Menu when an item is "clicked".
     */
    var ITEM_ACTION: any /*missing*/;
}

declare module goog.ui {

    /**
     * The MenuBase class provides an abstract base class for different
     * implementations of menu controls.
     *
     * @param {Element=} opt_element A DOM element for the popup.
     * @deprecated Use goog.ui.Menu.
     * @constructor
     * @extends {goog.ui.Popup}
     */
    class MenuBase extends goog.ui.Popup {
        /**
         * The MenuBase class provides an abstract base class for different
         * implementations of menu controls.
         *
         * @param {Element=} opt_element A DOM element for the popup.
         * @deprecated Use goog.ui.Menu.
         * @constructor
         * @extends {goog.ui.Popup}
         */
        constructor(opt_element?: Element);
    
        /**
         * Returns the selected item
         *
         * @return {Object} The item selected or null if no item is selected.
         */
        getSelectedItem(): Object;
    
        /**
         * Sets the selected item
         *
         * @param {Object} item The item to select. The type of this item is specific
         *     to the menu class.
         */
        setSelectedItem(item: Object): void;
    
        /**
         * Mouse over handler for the menu. Derived classes should override.
         *
         * @param {goog.events.Event} e The event object.
         * @protected
         */
        onMouseOver(e: goog.events.Event): void;
    
        /**
         * Mouse out handler for the menu. Derived classes should override.
         *
         * @param {goog.events.Event} e The event object.
         * @protected
         */
        onMouseOut(e: goog.events.Event): void;
    
        /**
         * Mouse down handler for the menu. Derived classes should override.
         *
         * @param {!goog.events.Event} e The event object.
         * @protected
         */
        onMouseDown(e: goog.events.Event): void;
    
        /**
         * Mouse up handler for the menu. Derived classes should override.
         *
         * @param {goog.events.Event} e The event object.
         * @protected
         */
        onMouseUp(e: goog.events.Event): void;
    
        /**
         * Key down handler for the menu. Derived classes should override.
         *
         * @param {goog.events.KeyEvent} e The event object.
         * @protected
         */
        onKeyDown(e: goog.events.KeyEvent): void;
    }
}

