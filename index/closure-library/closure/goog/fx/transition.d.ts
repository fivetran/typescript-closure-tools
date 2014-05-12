/// <reference path="../../../globals.d.ts" />

declare module goog.fx {

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
