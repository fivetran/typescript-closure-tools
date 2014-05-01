// Generated Thu May  1 12:34:10 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/fx/transition.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/fx/transitionbase.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/style/transition.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/fx/css3/transition.d.ts" />

declare module goog.fx.css3 {

    /**
     * Creates a transition to fade the element.
     * @param {Element} element The element to fade.
     * @param {number} duration Duration in seconds.
     * @param {string} timing The CSS3 timing function.
     * @param {number} startOpacity Starting opacity.
     * @param {number} endOpacity Ending opacity.
     * @return {!goog.fx.css3.Transition} The transition object.
     */
    function fade(element: Element, duration: number, timing: string, startOpacity: number, endOpacity: number): goog.fx.css3.Transition;

    /**
     * Creates a transition to fade in the element.
     * @param {Element} element The element to fade in.
     * @param {number} duration Duration in seconds.
     * @return {!goog.fx.css3.Transition} The transition object.
     */
    function fadeIn(element: Element, duration: number): goog.fx.css3.Transition;

    /**
     * Creates a transition to fade out the element.
     * @param {Element} element The element to fade out.
     * @param {number} duration Duration in seconds.
     * @return {!goog.fx.css3.Transition} The transition object.
     */
    function fadeOut(element: Element, duration: number): goog.fx.css3.Transition;
}

