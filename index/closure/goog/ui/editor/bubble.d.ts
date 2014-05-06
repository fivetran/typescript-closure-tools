/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../../closure/goog/ui/popupbase.d.ts" />
/// <reference path="../../../../closure/goog/editor/defines.d.ts" />
/// <reference path="../../../../closure/goog/useragent/product.d.ts" />
/// <reference path="../../../../closure/goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../../closure/goog/editor/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/editor/style.d.ts" />
/// <reference path="../../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../../closure/goog/positioning/positioning.d.ts" />
/// <reference path="../../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../../closure/goog/dom/viewportsizemonitor.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../../closure/goog/ui/component.d.ts" />

declare module goog.ui.editor {

    /**
     * Property bubble UI element.
     * @param {Element} parent The parent element for this bubble.
     * @param {number} zIndex The z index to draw the bubble at.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class Bubble extends goog.events.EventTarget {
        /**
         * Property bubble UI element.
         * @param {Element} parent The parent element for this bubble.
         * @param {number} zIndex The z index to draw the bubble at.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(parent: Element, zIndex: number);
    
        /**
         * Creates and adds DOM for the bubble UI to the given container.  This default
         * implementation just returns the container itself.
         * @param {!goog.dom.DomHelper} dom DOM helper to use.
         * @param {!Element} container Element to add the new elements to.
         * @return {!Element} The element where bubble content should be added.
         * @protected
         */
        createBubbleDom(dom: goog.dom.DomHelper, container: Element): Element;
    
        /**
         * A logger for goog.ui.editor.Bubble.
         * @type {goog.log.Logger}
         * @protected
         */
        logger: goog.log.Logger;
    
        /**
         * @return {Element} The element that where the bubble's contents go.
         */
        getContentElement(): Element;
    
        /**
         * @return {Element} The element that contains the bubble.
         * @protected
         */
        getContainerElement(): Element;
    
        /**
         * @return {goog.events.EventHandler.<T>} The event handler.
         * @protected
         * @this T
         * @template T
         */
        getEventHandler<T>(): goog.events.EventHandler<T>;
    
        /**
         * Sets whether the bubble dismisses itself when the user clicks outside of it.
         * @param {boolean} autoHide Whether to autohide on an external click.
         */
        setAutoHide(autoHide: boolean): void;
    
        /**
         * Returns whether there is already a panel of the given type.
         * @param {string} type Type of panel to check.
         * @return {boolean} Whether there is already a panel of the given type.
         */
        hasPanelOfType(type: string): boolean;
    
        /**
         * Adds a panel to the bubble.
         * @param {string} type The type of bubble panel this is.  Should usually be
         *     the same as the tagName of the targetElement.  This ensures multiple
         *     bubble panels don't appear for the same element.
         * @param {string} title The title of the panel.
         * @param {Element} targetElement The target element of the bubble.
         * @param {function(Element): void} contentFn Function that when called with
         *     a container element, will add relevant panel content to it.
         * @param {boolean=} opt_preferTopPosition Whether to prefer placing the bubble
         *     above the element instead of below it.  Defaults to preferring below.
         *     If any panel prefers the top position, the top position is used.
         * @return {string} The id of the panel.
         */
        addPanel(type: string, title: string, targetElement: Element, contentFn: (_0: Element) => void, opt_preferTopPosition?: boolean): string;
    
        /**
         * Removes the panel with the given id.
         * @param {string} id The id of the panel.
         */
        removePanel(id: string): void;
    
        /**
         * Handles the popup's hide event by removing all panels and dispatching a
         * HIDE event.
         * @protected
         */
        handlePopupHide(): void;
    
        /**
         * Returns the visibility of the bubble.
         * @return {boolean} True if visible false if not.
         */
        isVisible(): boolean;
    
        /**
         * Positions and displays this bubble below its targetElement. Assumes that
         * the bubbleContainer is already contained in the document object it applies
         * to.
         */
        reposition(): void;
    }
}

declare module goog.ui.editor.Bubble {

    /**
     * The css class name of the bubble container element.
     * @type {string}
     */
    var BUBBLE_CLASSNAME: string;
}

