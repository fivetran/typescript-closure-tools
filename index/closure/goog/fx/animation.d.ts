/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/async/delay.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/async/animationdelay.d.ts" />
/// <reference path="../../../closure/goog/fx/anim/anim.d.ts" />
/// <reference path="../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../closure/goog/fx/transitionbase.d.ts" />

declare module goog.fx {

    /**
     * Constructor for an animation object.
     * @param {Array.<number>} start Array for start coordinates.
     * @param {Array.<number>} end Array for end coordinates.
     * @param {number} duration Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @constructor
     * @implements {goog.fx.anim.Animated}
     * @implements {goog.fx.Transition}
     * @extends {goog.fx.TransitionBase}
     */
    class Animation extends goog.fx.TransitionBase implements goog.fx.anim.Animated, goog.fx.Transition {
        /**
         * Constructor for an animation object.
         * @param {Array.<number>} start Array for start coordinates.
         * @param {Array.<number>} end Array for end coordinates.
         * @param {number} duration Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @constructor
         * @implements {goog.fx.anim.Animated}
         * @implements {goog.fx.Transition}
         * @extends {goog.fx.TransitionBase}
         */
        constructor(start: number[], end: number[], duration: number, opt_acc?: Function);
    
        /**
         * Sets whether the animation should use "right" rather than "left" to position
         * elements.  This is a temporary flag to allow clients to transition
         * to the new component at their convenience.  At some point "right" will be
         * used for RTL elements by default.
         * @param {boolean} useRightPositioningForRtl True if "right" should be used for
         *     positioning, false if "left" should be used for positioning.
         */
        enableRightPositioningForRtl(useRightPositioningForRtl: boolean): void;
    
        /**
         * Whether the animation should use "right" rather than "left" to position
         * elements.  This is a temporary flag to allow clients to transition
         * to the new component at their convenience.  At some point "right" will be
         * used for RTL elements by default.
         * @return {boolean} True if "right" should be used for positioning, false if
         *     "left" should be used for positioning.
         */
        isRightPositioningForRtlEnabled(): boolean;
    
        /**
         * Percent of the way through the animation.
         * @type {number}
         * @protected
         */
        progress: number;
    
        /**
         * Timestamp for when last frame was run.
         * @type {?number}
         * @protected
         */
        lastFrame: number;
    
        /**
         * Plays the transition.
         */
        play: any /*missing*/;
    
        /**
         * Stops the transition.
         */
        stop: any /*missing*/;
    
        /**
         * @return {number} The current progress of the animation, the number
         *     is between 0 and 1 inclusive.
         */
        getProgress(): number;
    
        /**
         * Sets the progress of the animation.
         * @param {number} progress The new progress of the animation.
         */
        setProgress(progress: number): void;
    
        /**
         * Stops an animation, fires a 'destroy' event and then removes all the event
         * handlers to clean up memory.
         * @deprecated Use dispose() instead.
         */
        destroy(): void;
    
        /**
         * Function called when a frame is requested for the animation.
         *
         * @param {number} now Current time in milliseconds.
         */
        onAnimationFrame(now: number): void;
    
        /**
         * Handles the actual iteration of the animation in a timeout
         * @param {number} now The current time.
         */
        cycle(now: number): void;
    
        /**
         * Dispatches the ANIMATE event. Sub classes should override this instead
         * of listening to the event.
         * @protected
         */
        onAnimate(): void;
    
        /**
         * Dispatches the DESTROY event. Sub classes should override this instead
         * of listening to the event.
         * @protected
         */
        onDestroy(): void;
    }

    /**
     * Class for an animation event object.
     * @param {string} type Event type.
     * @param {goog.fx.Animation} anim An animation object.
     * @constructor
     * @extends {goog.events.Event}
     */
    class AnimationEvent extends goog.events.Event {
        /**
         * Class for an animation event object.
         * @param {string} type Event type.
         * @param {goog.fx.Animation} anim An animation object.
         * @constructor
         * @extends {goog.events.Event}
         */
        constructor(type: string, anim: goog.fx.Animation);
    
        /**
         * Returns the coordinates as integers (rounded to nearest integer).
         * @return {Array.<number>} An array of the coordinates rounded to
         *     the nearest integer.
         */
        coordsAsInts(): number[];
    }
}

declare module goog.fx.Animation {

    /**
     * Events fired by the animation.
     * @enum {string}
     */
    enum EventType { PLAY, BEGIN, RESUME, END, STOP, FINISH, PAUSE, ANIMATE, DESTROY } 

    /**
     * @deprecated Use goog.fx.anim.TIMEOUT.
     */
    var TIMEOUT: any /*missing*/;

    /**
     * @deprecated Use goog.fx.anim.setAnimationWindow.
     * @param {Window} animationWindow The window in which to animate elements.
     */
    function setAnimationWindow(animationWindow: Window): void;
}

