/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />
/// <reference path="./control.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class SplitBehavior extends SplitBehavior__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class SplitBehavior__Class extends goog.Disposable__Class  { 
    
            /**
             * Creates a behavior for combining two controls. The behavior is triggered
             * by a given event type which applies the behavior handler.
             * Can be used to also render or decorate  the controls.
             * For a usage example see {@link goog.ui.ColorSplitBehavior}
             *
             * @param {goog.ui.Control} first A ui control.
             * @param {goog.ui.Control} second A ui control.
             * @param {function(goog.ui.Control,Event)=} opt_behaviorHandler A handler
             *     to apply for the behavior.
             * @param {string=} opt_eventType The event type triggering the
             *     handler.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
             *     document interaction.
             * @constructor
             * @extends {goog.Disposable}
             */
            constructor(first: goog.ui.Control, second: goog.ui.Control, opt_behaviorHandler?: { (_0: goog.ui.Control, _1: Event): any /*missing*/ }, opt_eventType?: string, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * @return {Element} The element containing the controls.
             */
            getElement(): Element;
    
            /**
             * @return {function(goog.ui.Control,Event)} The behavior handler.
             */
            getBehaviorHandler(): { (_0: goog.ui.Control, _1: Event): any /*missing*/ };
    
            /**
             * @return {string} The behavior event type.
             */
            getEventType(): string;
    
            /**
             * Sets the disposeControls flags.
             * @param {boolean} disposeFirst Whether to dispose the first control
             *     when dispose is called.
             * @param {boolean} disposeSecond Whether to dispose the second control
             *     when dispose is called.
             */
            setDisposeControls(disposeFirst: boolean, disposeSecond: boolean): void;
    
            /**
             * Sets the behavior handler.
             * @param {function(goog.ui.Control,Event)} behaviorHandler The behavior
             *     handler.
             */
            setHandler(behaviorHandler: { (_0: goog.ui.Control, _1: Event): any /*missing*/ }): void;
    
            /**
             * Sets the behavior event type.
             * @param {string} eventType The behavior event type.
             */
            setEventType(eventType: string): void;
    
            /**
             * Decorates an element and returns the behavior.
             * @param {Element} element An element to decorate.
             * @param {boolean=} opt_activate Whether to activate the behavior
             *     (default=true).
             * @return {!goog.ui.SplitBehavior} A split behavior.
             */
            decorate(element: Element, opt_activate?: boolean): goog.ui.SplitBehavior;
    
            /**
             * Renders an element and returns the behavior.
             * @param {Element} element An element to decorate.
             * @param {boolean=} opt_activate Whether to activate the behavior
             *     (default=true).
             * @return {!goog.ui.SplitBehavior} A split behavior.
             */
            render(element: Element, opt_activate?: boolean): goog.ui.SplitBehavior;
    
            /**
             * Activate or deactivate the behavior.
             * @param {boolean} activate Whether to activate or deactivate the behavior.
             */
            setActive(activate: boolean): void;
    } 
    
}

declare module goog.ui.SplitBehavior {

    /**
     * Css class for elements rendered by this behavior.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * An emum of split behavior handlers.
     * @enum {function(goog.ui.Control,Event)}
     */
    enum DefaultHandlers { NONE, CAPTION, VALUE } 
}
