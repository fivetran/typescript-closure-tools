// Generated Fri May  2 11:35:15 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.fx.Transition {

    /**
     * Transition event types.
     * @enum {string}
     */
    enum EventType { PLAY, BEGIN, RESUME, END, STOP, FINISH, PAUSE } 
}

declare module goog.fx {

    /**
     * An interface for programmatic transition. Must extend
     * {@code goog.events.EventTarget}.
     * @interface
     */
    interface Transition {
        play: any /*missing*/;
        stop: any /*missing*/;
    }
}

