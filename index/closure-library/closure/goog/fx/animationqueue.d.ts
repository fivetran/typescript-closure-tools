/// <reference path="../../../globals.d.ts" />
/// <reference path="./transitionbase.d.ts" />
/// <reference path="./animation.d.ts" />
/// <reference path="../events/event.d.ts" />

declare module goog.fx {

    class AnimationQueue extends AnimationQueue__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class AnimationQueue__Class extends goog.fx.TransitionBase__Class  { 
    
            /**
             * Constructor for AnimationQueue object.
             *
             * @constructor
             * @extends {goog.fx.TransitionBase}
             */
            constructor();
    
            /**
             * An array holding all animations in the queue.
             * @type {Array.<goog.fx.TransitionBase>}
             * @protected
             */
            queue: goog.fx.TransitionBase[];
    
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
    

    class AnimationParallelQueue extends AnimationParallelQueue__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class AnimationParallelQueue__Class extends goog.fx.AnimationQueue__Class  { 
    
            /**
             * Constructor for AnimationParallelQueue object.
             * @constructor
             * @extends {goog.fx.AnimationQueue}
             */
            constructor();
    } 
    

    class AnimationSerialQueue extends AnimationSerialQueue__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class AnimationSerialQueue__Class extends goog.fx.AnimationQueue__Class  { 
    
            /**
             * Constructor for AnimationSerialQueue object.
             * @constructor
             * @extends {goog.fx.AnimationQueue}
             */
            constructor();
    } 
    
}
