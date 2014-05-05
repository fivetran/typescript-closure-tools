// Generated Sun May  4 18:11:59 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.fx {

    /**
     * An interface for programmatic transition. Must extend
     * {@code goog.events.EventTarget}.
     * @interface
     */
    interface Transition {
    
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

declare module goog.fx.Transition {

    /**
     * Transition event types.
     * @enum {string}
     */
    enum EventType { PLAY, BEGIN, RESUME, END, STOP, FINISH, PAUSE } 
}

