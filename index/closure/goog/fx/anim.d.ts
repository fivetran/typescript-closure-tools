// Generated Wed Apr 30 16:28:28 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/async.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/timer.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.fx.anim' {

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

    /**
     * An interface for programatically animated objects. I.e. rendered in
     * javascript frame by frame.
     *
     * @interface
     */
    interface Animated {
        onAnimationFrame: any /*missing*/;
    }
}

