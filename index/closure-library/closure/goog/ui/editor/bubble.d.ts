/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/eventtarget.d.ts" />
/// <reference path="../../dom/dom.d.ts" />
/// <reference path="../../log/log.d.ts" />
/// <reference path="../../events/eventhandler.d.ts" />
/// <reference path="../../math/box.d.ts" />

declare module goog.ui.editor {

    class Bubble extends Bubble.__Class { }
    module Bubble {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
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
             * Returns the margin box.
             * @return {goog.math.Box}
             * @protected
             */
            getMarginBox(): goog.math.Box;
    
            /**
             * Positions and displays this bubble below its targetElement. Assumes that
             * the bubbleContainer is already contained in the document object it applies
             * to.
             */
            reposition(): void;
    
            /**
             * Returns the viewport box to use when positioning the bubble.
             * @return {goog.math.Box}
             * @protected
             */
            getViewportBox(): goog.math.Box;
        }
    }
}

declare module goog.ui.editor.Bubble {

    class Panel_ extends Panel_.__Class { }
    module Panel_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Private class used to describe a bubble panel.
             * @param {goog.dom.DomHelper} dom DOM helper used to create the panel.
             * @param {string} id ID of the panel.
             * @param {string} type Type of the panel.
             * @param {string} title Title of the panel.
             * @param {Element} targetElement Element the panel is showing for.
             * @param {boolean} preferBottomPosition Whether this panel prefers to show
             *     below the target element.
             * @constructor
             * @private
             */
            constructor(dom: goog.dom.DomHelper, id: string, type: string, title: string, targetElement: Element, preferBottomPosition: boolean);
    
            /**
             * @return {Element} The element in the panel where content should go.
             */
            getContentElement(): Element;
        }
    }

    /**
     * The css class name of the bubble container element.
     * @type {string}
     */
    var BUBBLE_CLASSNAME: string;
}
