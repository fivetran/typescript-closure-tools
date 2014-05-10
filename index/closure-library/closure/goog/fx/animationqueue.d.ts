/// <reference path="../../../globals.d.ts" />
/// <reference path="./transitionbase.d.ts" />
/// <reference path="./animation.d.ts" />
/// <reference path="../events/event.d.ts" />

declare module goog.fx {

    class AnimationQueue extends __AnimationQueue { }
    class __AnimationQueue extends goog.fx.__TransitionBase {
    
        /**
         * Constructor for AnimationQueue object.
         *
         * @constructor
         * @extends {goog.fx.TransitionBase}
         */
        constructor();
    
        /**
         * Pushes an Animation to the end of the queue.
         * @param {goog.fx.TransitionBase} animation The animation to add to the queue.
         */
        add(animation: goog.fx.TransitionBase): void;
    
        /**
         * Removes an Animation from the queue.
         * @param {goog.fx.Animation} animation The animation to remove.
         */
        remove(animation: goog.fx.Animation): void;
    
        /**
         * Handles the event that an animation has finished.
         * @param {goog.events.Event} e The finishing event.
         * @protected
         */
        onAnimationFinish(e: goog.events.Event): void;
    }

    class AnimationParallelQueue extends __AnimationParallelQueue { }
    class __AnimationParallelQueue extends goog.fx.__AnimationQueue {
    
        /**
         * Constructor for AnimationParallelQueue object.
         * @constructor
         * @extends {goog.fx.AnimationQueue}
         */
        constructor();
    }

    class AnimationSerialQueue extends __AnimationSerialQueue { }
    class __AnimationSerialQueue extends goog.fx.__AnimationQueue {
    
        /**
         * Constructor for AnimationSerialQueue object.
         * @constructor
         * @extends {goog.fx.AnimationQueue}
         */
        constructor();
    }
}
