/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
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
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../closure/goog/ui/buttonside.d.ts" />

declare module goog.ui {

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
    class SplitBehavior extends goog.Disposable {
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
        constructor(first: goog.ui.Control, second: goog.ui.Control, opt_behaviorHandler?: (_0: goog.ui.Control, _1: Event) => any /*missing*/, opt_eventType?: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {Element} The element containing the controls.
         */
        getElement(): Element;
    
        /**
         * @return {function(goog.ui.Control,Event)} The behavior handler.
         */
        getBehaviorHandler(): (_0: goog.ui.Control, _1: Event) => any /*missing*/;
    
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
        setHandler(behaviorHandler: (_0: goog.ui.Control, _1: Event) => any /*missing*/): void;
    
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
         * @return {goog.ui.SplitBehavior} A split behavior.
         */
        decorate(element: Element, opt_activate?: boolean): goog.ui.SplitBehavior;
    
        /**
         * Renders an element and returns the behavior.
         * @param {Element} element An element to decorate.
         * @param {boolean=} opt_activate Whether to activate the behavior
         *     (default=true).
         * @return {goog.ui.SplitBehavior} A split behavior.
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

