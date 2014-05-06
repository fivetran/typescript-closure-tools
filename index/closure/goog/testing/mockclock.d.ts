/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/testing/events/events.d.ts" />
/// <reference path="../../../closure/goog/testing/objectpropertystring.d.ts" />
/// <reference path="../../../closure/goog/testing/propertyreplacer.d.ts" />
/// <reference path="../../../closure/goog/testing/watchers.d.ts" />

declare module goog.testing {

    /**
     * Class for unit testing code that uses setTimeout and clearTimeout.
     *
     * NOTE: If you are using MockClock to test code that makes use of
     *       goog.fx.Animation, then you must either:
     *
     * 1. Install and dispose of the MockClock in setUpPage() and tearDownPage()
     *    respectively (rather than setUp()/tearDown()).
     *
     * or
     *
     * 2. Ensure that every test clears the animation queue by calling
     *    mockClock.tick(x) at the end of each test function (where `x` is large
     *    enough to complete all animations).
     *
     * Otherwise, if any animation is left pending at the time that
     * MockClock.dispose() is called, that will permanently prevent any future
     * animations from playing on the page.
     *
     * @param {boolean=} opt_autoInstall Install the MockClock at construction time.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class MockClock extends goog.Disposable {
        /**
         * Class for unit testing code that uses setTimeout and clearTimeout.
         *
         * NOTE: If you are using MockClock to test code that makes use of
         *       goog.fx.Animation, then you must either:
         *
         * 1. Install and dispose of the MockClock in setUpPage() and tearDownPage()
         *    respectively (rather than setUp()/tearDown()).
         *
         * or
         *
         * 2. Ensure that every test clears the animation queue by calling
         *    mockClock.tick(x) at the end of each test function (where `x` is large
         *    enough to complete all animations).
         *
         * Otherwise, if any animation is left pending at the time that
         * MockClock.dispose() is called, that will permanently prevent any future
         * animations from playing on the page.
         *
         * @param {boolean=} opt_autoInstall Install the MockClock at construction time.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(opt_autoInstall?: boolean);
    
        /**
         * Installs the MockClock by overriding the global object's implementation of
         * setTimeout, setInterval, clearTimeout and clearInterval.
         */
        install(): void;
    
        /**
         * Removes the MockClock's hooks into the global object's functions and revert
         * to their original values.
         */
        uninstall(): void;
    
        /**
         * Resets the MockClock, removing all timeouts that are scheduled and resets
         * the fake timer count.
         */
        reset(): void;
    
        /**
         * Signals that the mock clock has been reset, allowing objects that
         * maintain their own internal state to reset.
         */
        fireResetEvent(): void;
    
        /**
         * Sets the amount of time between when a timeout is scheduled to fire and when
         * it actually fires.
         * @param {number} delay The delay in milliseconds.  May be negative.
         */
        setTimeoutDelay(delay: number): void;
    
        /**
         * @return {number} delay The amount of time between when a timeout is
         *     scheduled to fire and when it actually fires, in milliseconds.  May
         *     be negative.
         */
        getTimeoutDelay(): number;
    
        /**
         * Increments the MockClock's time by a given number of milliseconds, running
         * any functions that are now overdue.
         * @param {number=} opt_millis Number of milliseconds to increment the counter.
         *     If not specified, clock ticks 1 millisecond.
         * @return {number} Current mock time in milliseconds.
         */
        tick(opt_millis?: number): number;
    
        /**
         * @return {number} The number of timeouts that have been scheduled.
         */
        getTimeoutsMade(): number;
    
        /**
         * @return {number} The MockClock's current time in milliseconds.
         */
        getCurrentTime(): number;
    
        /**
         * @param {number} timeoutKey The timeout key.
         * @return {boolean} Whether the timer has been set and not cleared,
         *     independent of the timeout's expiration.  In other words, the timeout
         *     could have passed or could be scheduled for the future.  Either way,
         *     this function returns true or false depending only on whether the
         *     provided timeoutKey represents a timeout that has been set and not
         *     cleared.
         */
        isTimeoutSet(timeoutKey: number): boolean;
    }
}

declare module goog.testing.MockClock {

    /**
     * Default wait timeout for mocking requestAnimationFrame (in milliseconds).
     *
     * @type {number}
     * @const
     */
    var REQUEST_ANIMATION_FRAME_TIMEOUT: number;
}

