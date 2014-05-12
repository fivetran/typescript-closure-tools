/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />
/// <reference path="./transition.d.ts" />

declare module goog.fx {

    class TransitionBase extends TransitionBase.__Class { }
    module TransitionBase {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class implements goog.fx.Transition {
    
            /**
             * Constructor for a transition object.
             *
             * @constructor
             * @implements {goog.fx.Transition}
             * @extends {goog.events.EventTarget}
             */
            constructor();
    
            /**
             * Pauses the animation.
             */
            pause: any /*missing*/;
    
            /**
             * Returns the current state of the animation.
             * @return {goog.fx.TransitionBase.State} State of the animation.
             */
            getStateInternal(): goog.fx.TransitionBase.State;
    
            /**
             * Sets the current state of the animation to playing.
             * @protected
             */
            setStatePlaying(): void;
    
            /**
             * Sets the current state of the animation to paused.
             * @protected
             */
            setStatePaused(): void;
    
            /**
             * Sets the current state of the animation to stopped.
             * @protected
             */
            setStateStopped(): void;
    
            /**
             * @return {boolean} True iff the current state of the animation is playing.
             */
            isPlaying(): boolean;
    
            /**
             * @return {boolean} True iff the current state of the animation is paused.
             */
            isPaused(): boolean;
    
            /**
             * @return {boolean} True iff the current state of the animation is stopped.
             */
            isStopped(): boolean;
    
            /**
             * Dispatches the BEGIN event. Sub classes should override this instead
             * of listening to the event, and call this instead of dispatching the event.
             * @protected
             */
            onBegin(): void;
    
            /**
             * Dispatches the END event. Sub classes should override this instead
             * of listening to the event, and call this instead of dispatching the event.
             * @protected
             */
            onEnd(): void;
    
            /**
             * Dispatches the FINISH event. Sub classes should override this instead
             * of listening to the event, and call this instead of dispatching the event.
             * @protected
             */
            onFinish(): void;
    
            /**
             * Dispatches the PAUSE event. Sub classes should override this instead
             * of listening to the event, and call this instead of dispatching the event.
             * @protected
             */
            onPause(): void;
    
            /**
             * Dispatches the PLAY event. Sub classes should override this instead
             * of listening to the event, and call this instead of dispatching the event.
             * @protected
             */
            onPlay(): void;
    
            /**
             * Dispatches the RESUME event. Sub classes should override this instead
             * of listening to the event, and call this instead of dispatching the event.
             * @protected
             */
            onResume(): void;
    
            /**
             * Dispatches the STOP event. Sub classes should override this instead
             * of listening to the event, and call this instead of dispatching the event.
             * @protected
             */
            onStop(): void;
    
            /**
             * Dispatches an event object for the current animation.
             * @param {string} type Event type that will be dispatched.
             * @protected
             */
            dispatchAnimationEvent(type: string): void;
    
            /**
             * Plays the transition.
             */
            play: any /*missing*/;
    
            /**
             * Stops the transition.
             */
            stop: any /*missing*/;
        }
    }
}

declare module goog.fx.TransitionBase {

    /**
     * Enum for the possible states of an animation.
     * @enum {number}
     */
    enum State { STOPPED, PAUSED, PLAYING } 
}
