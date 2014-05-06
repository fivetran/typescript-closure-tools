/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/async/delay.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/async/animationdelay.d.ts" />

declare module goog.fx.anim {

    /**
     * An interface for programatically animated objects. I.e. rendered in
     * javascript frame by frame.
     *
     * @interface
     */
    interface Animated {
    
        /**
         * Function called when a frame is requested for the animation.
         *
         * @param {number} now Current time in milliseconds.
         */
        onAnimationFrame(now: number): void;
    }

    /**
     * Default wait timeout for animations (in milliseconds).  Only used for timed
     * animation, which uses a timer (setTimeout) to schedule animation.
     *
     * @type {number}
     * @const
     */
    var TIMEOUT: number;

    /**
     * Registers an animation to be cycled on the global timer.
     * @param {goog.fx.anim.Animated} animation The animation to register.
     */
    function registerAnimation(animation: goog.fx.anim.Animated): void;

    /**
     * Removes an animation from the list of animations which are cycled on the
     * global timer.
     * @param {goog.fx.anim.Animated} animation The animation to unregister.
     */
    function unregisterAnimation(animation: goog.fx.anim.Animated): void;

    /**
     * Tears down this module. Useful for testing.
     */
    function tearDown(): void;

    /**
     * Registers an animation window. This allows usage of the timing control API
     * for animations. Note that this window must be visible, as non-visible
     * windows can potentially stop animating. This window does not necessarily
     * need to be the window inside which animation occurs, but must remain visible.
     * See: https://developer.mozilla.org/en/DOM/window.mozRequestAnimationFrame.
     *
     * @param {Window} animationWindow The window in which to animate elements.
     */
    function setAnimationWindow(animationWindow: Window): void;
}

