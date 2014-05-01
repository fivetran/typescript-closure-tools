// Generated Wed Apr 30 16:28:29 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/fx.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/style.d.ts" />
/// <reference path="../../goog/timer.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.fx.css3' {

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

    /**
     * A class to handle targeted CSS3 transition. This class
     * handles common features required for targeted CSS3 transition.
     *
     * Browser that does not support CSS3 transition will still receive all
     * the events fired by the transition object, but will not have any transition
     * played. If the browser supports the final state as set in setFinalState
     * method, the element will ends in the final state.
     *
     * Transitioning multiple properties with the same setting is possible
     * by setting Css3Property's property to 'all'. Performing multiple
     * transitions can be done via setting multiple initialStyle,
     * finalStyle and transitions. Css3Property's delay can be used to
     * delay one of the transition. Here is an example for a transition
     * that expands on the width and then followed by the height:
     *
     * <pre>
     *   initialStyle: {width: 10px, height: 10px}
     *   finalStyle: {width: 100px, height: 100px}
     *   transitions: [
     *     {property: width, duration: 1, timing: 'ease-in', delay: 0},
     *     {property: height, duration: 1, timing: 'ease-in', delay: 1}
     *   ]
     * </pre>
     *
     * @param {Element} element The element to be transitioned.
     * @param {number} duration The duration of the transition in seconds.
     *     This should be the longest of all transitions.
     * @param {Object} initialStyle Initial style properties of the element before
     *     animating. Set using {@code goog.style.setStyle}.
     * @param {Object} finalStyle Final style properties of the element after
     *     animating. Set using {@code goog.style.setStyle}.
     * @param {goog.style.transition.Css3Property|
     *     Array.<goog.style.transition.Css3Property>} transitions A single CSS3
     *     transition property or an array of it.
     * @extends {goog.fx.TransitionBase}
     * @constructor
     */
    function Transition(element: Element, duration: number, initialStyle: Object, finalStyle: Object): void;
}

