/// <reference path="../../../globals.d.ts" />
/// <reference path="./transitionbase.d.ts" />
/// <reference path="./animation.d.ts" />
/// <reference path="../events/event.d.ts" />

declare module goog.fx {

    class AnimationQueue extends AnimationQueue.__Class { }
    module AnimationQueue {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.TransitionBase.__Class {
    
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
    }

    class AnimationParallelQueue extends AnimationParallelQueue.__Class { }
    module AnimationParallelQueue {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.AnimationQueue.__Class {
    
            /**
             * Constructor for AnimationParallelQueue object.
             * @constructor
             * @extends {goog.fx.AnimationQueue}
             */
            constructor();
        }
    }

    class AnimationSerialQueue extends AnimationSerialQueue.__Class { }
    module AnimationSerialQueue {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.AnimationQueue.__Class {
    
            /**
             * Constructor for AnimationSerialQueue object.
             * @constructor
             * @extends {goog.fx.AnimationQueue}
             */
            constructor();
        }
    }
}
